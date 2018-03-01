import DynamicPage from "../DynamicPage";
import TicketManager from "../tickets/TicketManager";
import StaffManager from "../staff/StaffManager";
import ExpertiseTypeManager from "../problem_types/ExpertiseTypeManager";
import SoftwareManager from "../software/SoftwareManager";
import HardwareManager from "../hardware/HardwareManager";


/**
 * MetricsPage
 *
 * Manipulates the metrics page /w JQuery using data from
 * various item Managers. 
 */

export default class MetricsPage extends DynamicPage {
	constructor() {
		super();

		//Declearing managers
		this.ticketManager        = new TicketManager();
		this.staffManager         = new StaffManager();
		this.softwareManager      = new SoftwareManager();
		this.hardwareManager      = new HardwareManager();
		this.expertiseTypeManager = new ExpertiseTypeManager();

		this.loggedInUser = null;
		this.pageLoad();
	}

	pageLoad() {
		this.loggedInUser = this.staffManager.currentUser(true);
		var tickets = null;

		if (this.loggedInUser.isAnalyst) { //If an analyst is logged in
			//Load all staff members into Staff Drop down box, and display
			//system-wide statistics (using tickets assigned to any operator) 
			this.populateStaffNameSearch();
			tickets = this.ticketManager.tickets;
			this.showStats(true, tickets)
		} else {
			//If not, display the name of the logged in user and force
			//the page to display only data relating to them
			$("#StaffNameSearch").append("<option style='color:grey' value='" + this.loggedInUser.id + "' selected>" + this.loggedInUser.name + "</option>");
			$("#StaffNameSearch").attr("disabled","true");
			$("#StaffNameSearch").selectpicker('refresh');
			tickets = this.ticketManager.getTicketsAssignedToStaffId(this.loggedInUser.id);
			this.openStaffInfo(this.loggedInUser, tickets);
		}
	}

	//Handles display data in the "Statistics" section
	showStats(showingGlobalInfo, tickets) {
		if (showingGlobalInfo) { 
			//If user is an Analyst and has not selected a specific staff member to view
			//Display information about Hardware and Software
			$("#HW_SW").attr("style","")
			var programs = this.softwareManager.programs;
			var noOfSoftware = programs.length;
			var noOfSoftwareWithIssues = programs.filter(p => p._tickets.length > 0).length;
			
			var devices = this.hardwareManager.devices;
			var noOfHardware = devices.length;
			var noOfHardwareWithIssues = devices.filter(d => d._tickets.length > 0).length;

			$("#noOfSoftware").val(noOfSoftware);
			$("#noOfSoftwareWithIssues").val(noOfSoftwareWithIssues);
			$("#noOfDevices").val(noOfHardware);
			$("#noOfDevicesWithIssues").val(noOfHardwareWithIssues);
		} else {
			//Else don't display Hardware/Software information
			$("#HW_SW").attr("style","display:none");
		}

		$("#totalTicketsAssigned").val(tickets.length); //Number of tickets in the system
		var solvedTickets = tickets.filter(t => t.status.slug == "resolved"); //Number of resolved tickets in the system
		$("#totalTicketsSolved").val(solvedTickets.length);

		var totalTime = 0;
		var totalReplies = 0;
		for (var i = 0; i < tickets.length; i++) {
			totalReplies += tickets[i].comments.length;
			var ticketStatusHistory = this.ticketManager.getTicketStatusesByTicketId(tickets[i].id);
			var resolvedTicketStatus = ticketStatusHistory.filter(t => t._status == 1);

			if (resolvedTicketStatus.length > 0) {
				var ticketCreated = new Date(tickets[i].created_at_real);
				var lastResolved = resolvedTicketStatus[resolvedTicketStatus.length - 1]
				var ticketResolved = new Date(lastResolved.created_at_real);
				var timeDiff = Math.abs(ticketResolved.getTime() - ticketCreated.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
				totalTime += diffDays;
			}
		}

		if (!(tickets.length)) {
			$("#avgTimeToSolveTicket").val("-"); 
			$("#avgRepliesPerTicket").val("-"); //If there are no tickets, use this so we don't divide by 0
		} else {
			$("#avgTimeToSolveTicket").val(totalTime/tickets.length); 
			$("#avgRepliesPerTicket").val(totalReplies/tickets.length); //Calculates average replies per ticket
		}

		this.createLineGraph(tickets); //Load Backlog Graph
		this.createPieChart(tickets); //Load Problem Type graph
	}

	//This function takes a staff member object, and relevant tickets for that 
	//staff member and appropriately fills in values on the page
	openStaffInfo(staff,tickets) {
		$(".collapsible").css("display","block");
		$("#name").val(staff.name);
		$("#phone").val(staff.phone);
		$("#role").val(staff.job);
		$("#statsTitle").text("Statistics - " + staff.name);
		$("#ticketTitle").text("Ticket Backlog - " + staff.name);
		this.showStats(false,tickets);
	}

	//Function used to load all staff members in the system in the drop down box.
	populateStaffNameSearch() {
		$("#StaffNameSearch").html("");
		var staffMembers = this.staffManager.staff;
		$("#StaffNameSearch").append("<option>Search...</option>");
		for (var i = 0; i < staffMembers.length; i++) {
			$("#StaffNameSearch").append("<option value='" + staffMembers[i].id + "'>" + staffMembers[i].name + "</option>");
		}
		$("#StaffNameSearch").selectpicker('refresh');
	}

	//Handles a new item is selected in the drop down box.
	staffDropdownChange() {
		var index = $('#StaffNameSearch')[0].selectedIndex;
		if (index > 0) { //Staff Member selected
			var id = Number($('#StaffNameSearch').val());
			var staff = this.staffManager.get(id)
			tickets = this.ticketManager.getTicketsAssignedToStaffId(staff.id);
			this.openStaffInfo(staff, tickets); //Display correct page info for selected staff member
		} else { //Default option selected - close staff details
			$(".collapsible").css("display","none");
			$("#name").val("");
			$("#phone").val("");
			$("#role").val("");
			$("#statsTitle").text("Statistics");
			$("#ticketTitle").text("Ticket Backlog");
			var tickets = this.ticketManager.tickets;
			this.showStats(true, tickets)
		}
	}

	//Responsible for displaying the backlog graph. Takes the paramater "tickets" and uses it calculate values tp display 
	createLineGraph(tickets) {
		var now = new Date();
		var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var months = new Array();
		var currentMonth = now.getMonth();
		for (var i = 0; i < 6; i++) { //gets the indexes of the previous 6 months and pushes them to an array
			months.push(currentMonth);
			currentMonth = currentMonth == 0 ? 11 : --currentMonth;
		}
		months.reverse();

		var ticketsOpened = new Array();
		var ticketsUnresolved = new Array();
		//For each of the previous 6 months, we calculate the amount of tickets opened and the corresponding amount of tickets that have been resolved from that month
		for (var j = 0; j < months.length; j++) {
			//Gets all tickets opening in the current month
			var opened = tickets.filter(t => new Date(t.created_at_real).getMonth() == months[j])
			ticketsOpened.push(opened.length);
			//Gets all unresolved tickets that were opened in the current month
			var unresolved = tickets.filter(t => (new Date(t.created_at_real).getMonth() == months[j] && t.status.slug != "resolved"))
			ticketsUnresolved.push(unresolved.length);
		}

		$('#ticket-backlog').html("<canvas id='ticketBacklog'></canvas>");
		var ctx = document.getElementById("ticketBacklog").getContext('2d');

		var opStatChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [monthNames[months[0]], monthNames[months[1]], monthNames[months[2]], monthNames[months[3]], monthNames[months[4]], monthNames[months[5]]], //Labels of months
				datasets: [
					{
						label: '# Tickets Unresolved',
						data: [ticketsUnresolved[0], ticketsUnresolved[1], ticketsUnresolved[2], ticketsUnresolved[3], ticketsUnresolved[4], ticketsUnresolved[5]], //Data of unresolved tickets
						borderColor: 'rgba(255,99,132,1)',
						backgroundColor: 'rgba(255,209,218,0.8)'
					},
					{	
						label: '# Tickets Opened',
						data: [ticketsOpened[0], ticketsOpened[1], ticketsOpened[2], ticketsOpened[3], ticketsOpened[4], ticketsOpened[5]], //Data of total tickets opened
						borderColor: 'rgba(99,132,255,1)',
						backgroundColor: 'rgba(99,132,255,0.2)'
					}								
			]
			},
			options: {
				responsive:true,
				maintainAspectRatio: false,
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}

	createPieChart(tickets) {
		var rootProblemTypes = this.expertiseTypeManager.getRootExpertiseTypes(); //Gets the major/root Expertise types
		
		var ProblemTypeNames = new Array();
		var ticketsPerProblemType = new Array();
		for (var i = 0; i < rootProblemTypes.length; i++) {
			ProblemTypeNames.push(rootProblemTypes[i].name); //Adds the names of each root Expertise type to an array 

			var ticketCount = new Array();
			for (var j = 0; j < tickets.length; j++) {
				var probTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(tickets[j].expertise_type);
				var rootProblemType = probTypeChain[probTypeChain.length - 1]; //Gets the root problem type for the current ticket.
				if (rootProblemTypes[i].id == rootProblemType.id) { //If the current ticket's root problem type and the currently selected problem type are the same
					//We add the ticket to an array and remove it from tickets (so we no longer have to search it each iteration. Helps to speed things up)	
					ticketCount.push(tickets[j]);
					tickets.splice(j,1);
					--j;
				}
			}

			ticketsPerProblemType.push(ticketCount.length); 
		}

		$('#problem-type-card').html("<canvas id='problemTypeSolved'></canvas>");
		var ctx = document.getElementById("problemTypeSolved").getContext('2d');
		var probTypeChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				datasets: [{
					data: ticketsPerProblemType, //Data for the pie chart
					backgroundColor: [
						'rgba(255,99,99,1)',
						'rgba(99,255,99,1)',
						'rgba(99,99,255,1)',
						'rgba(255,99,255,1)',
						'rgba(255,255,99,1)',
						'rgba(99,255,255,1)',
						'rgba(255,200,99,1)',
						'rgba(200,255,150,1)'
					]
				}],
				labels: ProblemTypeNames //Labels for the pie chart
			},
			options: {
				legend: {
					position:'right'
				}
			}
		});
	}
}