import DynamicPage from "../DynamicPage";
import TicketManager from "../tickets/TicketManager";
import HardwareManager from "../hardware/HardwareManager";
import SoftwareManager from "../software/SoftwareManager";

/**
 * HardwarePage
 *
 * Manipulates the hardware page /w JQuery using data from
 * the HardwareManager. Methods mostly get called from hardware.js
 */
export default class HardwarePage extends DynamicPage {
	constructor() {
		super();
		this.type = null;
		this.make = null;
		this.device = null;
		//Managers
		this.ticketManager   = new TicketManager();
		this.hardwareManager = new HardwareManager();
		this.softwareManager = new SoftwareManager();
	}
	
	//Handles adding all unique device types to the Types column
	populateTypes() {
		var typeList = $('#typeList');
		typeList.empty();

		var uniqueTypes = this.hardwareManager.uniqueTypes();
		for (let type of uniqueTypes) {
			var row = "<tr><td data-type='" + type + "'>" + type + "</td></tr>";
			typeList.append(row);
		}
	}

	//Handles adding all unique device makes under the selected Type to the Make column
	populateMake() {
		var makeList = $('#makeList');
		makeList.empty();
		this.clearTable();

		let uniqueMake = this.hardwareManager.uniqueMakesOfType(this.type);
		for (let make of uniqueMake) {
			if (this.make == make) {

			}
			var row = "<tr " + (this.make == make?"class='highlight'": "") + "><td data-make='" + make + "'>" + make + "</td></tr>";
			makeList.append(row);
		}
	}
	
	//Handles adding all devices of the selected make and type to the table
	showDevices() {
		var type = this.type;
		var make = this.make;
		this.clearTable();

		var results = this.hardwareManager.getDevicesOfTypeAndMake(type,make);
		for (let device of results) {
			this.appendTableRow(device);
		}
	}

	//Handles opening the full view of the selected device, including populating related
	//tickets and software.
	showTableRowDetails(id) {
		this.device = this.hardwareManager.get(id);
		if (!this.device) {
			this.hideTableRowDetails();
			alert("No hardware with ID " + id);
			return;
		}
		super.showTableRowDetails(id);
		$("#tickets").html("");
		$("#software").html("");
		var programs = [];
		var tickets = this.device.tickets;

		for (var i = 0; i < tickets.length; i++) {
			var statusClass = "pending";
			var ticket = tickets[i];
			var status = ticket.status;
			var statusText = status.name;
			
			switch (statusText) { 
				case "New":
					statusClass = "new";
					break;
				case "Pending - In Progress":
					statusClass = "pending";
					break;
				case "Pending - Awaiting Staff":
					statusClass = "pending";
					break;
				case "Resolved":
					statusClass = "resolved";
					break;
			}
			//Displaying tickets
			$("#tickets").append(`
				<li class="list-group-item list-group-item-action" data-rowid="` + ticket.id + `">
					#`+ ticket.id +`: ` + ticket.title + `
					<span class="filter filter-` + statusClass + `">` + statusText + `</span>
					<span class="pull-right text-muted">` + ticket.created_at + `</span>
				</li>
			`);

			if (programs.length < 20) { //Limiting program list size to 20
				for (var j = 0; j < ticket.programs.length; j++) {
					var program = this.softwareManager.get(ticket._programs[j]);
					if (programs.indexOf(program) == -1) {
						programs.push(program);
					}
				}
			}
		}
		//Displaying software
		for (var k = 0; k < programs.length; k++) {
			$("#software").append(`
				<li class="list-group-item list-group-item-action" data-rowid="` + programs[k].id + `">
					` + programs[k].getSoftwareType() + ` / ` + programs[k].name +  `
				</li>
			`);
		}	
		
		$("#ticket-total").html("Total: " + tickets.length);
		$("#software-total").html("Total: " + programs.length);

		//Updating title
		this.updateSingleViewNavbar(this.device.type + " / " + this.device.make + " / " + this.device.serial_no);
	}
}
