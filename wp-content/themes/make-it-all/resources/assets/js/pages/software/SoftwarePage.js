import DynamicPage from "../DynamicPage";
import TicketManager from "../tickets/TicketManager";
import HardwareManager from "../hardware/HardwareManager";
import SoftwareManager from "../software/SoftwareManager";

/**
 * SoftwarePage
 *
 * Manipulates the software page /w JQuery using data from
 * the SoftwareManager. Methods mostly get called from hardware.js
 */
export default class SoftwarePage extends DynamicPage {
	constructor() {
		super();
		this.program = null;
		this.ticketManager   = new TicketManager();
		this.hardwareManager = new HardwareManager();
		this.softwareManager = new SoftwareManager();

		//Creating action buttons
		if ($(".btn.btn-success.btn-sm.pull-right[data-target='#new-program-modal']").length == 0) {
			$('#list-view .top-nav').append(`
				<button class="btn btn-success btn-sm pull-right" data-toggle="modal" data-target="#new-program-modal">
					<i class="fa fa-plus"></i> New Program
				</button>`
			);
		}
	}
	
	//Handles adding all programs in the system to the Software table
	async showPrograms() {
		$(this.tableSelector).find("tbody").empty();
		var programs = await this.softwareManager.programs;
		for (let program of programs) {
			this.appendTableRow(program);
			$(".table.table-hover.table-responsive.data tbody tr:last-child td:nth-child(3)").html(program.getSoftwareType());
		}
		softwarePage.updateSplashScreen("Software");
	}
	
	//Handles opening the full view of the selected device, including 
	//populating related tickets and hardware.
	async showTableRowDetails(id) {
		this.program = await this.softwareManager.get(id);
		if (!this.program) {
			this.hideTableRowDetails();
			alert("No software with ID " + id);
			return;
		}
		
		$('.alert').remove();
		if (this.program.expiry_date == null) {
			$(".main-content").prepend("<div class='alert alert-warning'><p style='margin:0'><strong> This program has no expiry date </p></div>");
		} else {
			var now = new Date();
			var expiryDate = new Date(this.program.expiry_date);
			var expiryDateString = $.datepicker.formatDate("dd/mm/yy", expiryDate)
			if (expiryDate < now) {
				$(".main-content").prepend("<div class='alert alert-danger'><p style='margin:0'><strong> This program's licence is not valid. Expiry Date: </strong> " + expiryDateString + " </p></div>");
			} else if (expiryDate > now) {
				$(".main-content").prepend("<div class='alert alert-success'><p style='margin:0'><strong> This program has a valid licence. Expiry Date: </strong> " + expiryDateString + " </p></div>");
			} 
		}

		$("#tickets").html("");
		$("#hardware").html("");
		var devices = [];
		var tickets = await this.program.tickets;

		for (var i = 0; i < tickets.length; i++) {
			var statusClass = "pending";
			var ticket = tickets[i];
			var status = await ticket.status;
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

			if (devices.length < 20) {
				var ticketDevices = await ticket.devices;
				for (var j = 0; j < ticketDevices.length; j++) {
					var device = ticketDevices[j];
					if (devices.findIndex(d => d.id == device.id) == -1) {
						devices.push(device);
					}
				}
			}
		}
		//Displaying hardware
		for (var k = 0; k < devices.length; k++) {
			$("#hardware").append(`
				<li class="list-group-item list-group-item-action" data-rowid="` + devices[k].id + `">
					` + devices[k].type + ` / ` + devices[k].make + ` / ` + devices[k].serial_no + `
				</li>
			`);
		}	
		
		$("#ticket-total").html("Total: " + tickets.length);
		$("#hardware-total").html("Total: " + devices.length);
		//Updating title and opening full view
		this.updateSingleViewNavbar(this.program.getSoftwareType() + " / " + this.program.name);
		super.showTableRowDetails(id);
	}
}
