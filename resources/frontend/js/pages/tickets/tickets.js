import "../../main";
import TicketPage from "./TicketPage";
import ProblemTypePage from "../problem_types/ProblemTypePage";
import StaffProblemTypePage from "../staff/StaffProblemTypePage";
import API from "../API";

/**
 * tickets.js
 *
 * Acts as an access point for
 *    - TicketPage.js
 *    - ProblemTypePage.js
 *    - StaffProblemTypePage.js
 * Through which, you can access the managers.
 *
 * tickets.js contains only initialization methods for the
 * tickets page, and event listeners for elements
 * on the tickets page.
 */

let ticketPage, problemTypePage, staffProblemTypePage, api;

window.init = function(data) {
	api = window.api = new API(data);

	ticketPage           = window.ticketPage           = new TicketPage();
	problemTypePage      = window.problemTypePage      = new ProblemTypePage(true);
	staffProblemTypePage = window.staffProblemTypePage = new StaffProblemTypePage();

	if (!location.hash) ticketPage.hideTableRowDetails(); // show the table view if there's no hash in the URL

	// Initialization: Show tickets with the statuses "New", "Pending - In Progress" and "Resolved"
	ticketPage.showFilteredTickets('new,pending_in_progress,resolved');

	if (location.hash) ticketPage.showTicketView(parseInt(location.hash.substring(1)));

	//
	// Initialise Event Listeners:
	//

	// Filter the list when clicking on statuses in the left side nav bar
	$('.side-nav-bar-nested ul li[data-slug]').on('click', function () {
		$('.search-field input').val("");
		ticketPage.refreshPage(this.dataset.slug);
	});

	// Show the ticket's details when clicking on one -- disallow clicks on yellow highlighted tickets (the current one)
	$(document).on('click', '#table-section .table tbody tr:not(.highlight)', function() {
		ticketPage.showTicketView(Number(this.dataset.rowid));
	});

	// The close button in the ticket's details
	$('.ticket-close-button').on('click', function() {
		ticketPage.hideTableRowDetails();
	});

	// Open the View Call history for the clicked call
	$(document).on('click', '#ticket-view #call-history-table tbody tr', function() {
		ticketPage.showCallTicketsModal(Number(this.dataset.rowid));
	});

	// Go to the ticket clicked in the View Call History modal
	$(document).on('click', '#view-call-history-modal #call-tickets-table tbody tr:not(.highlight)', function() {
		ticketPage.showCallTicket(Number(this.dataset.rowid));
	});

	// Navigate through the problem type picker, load in the children and get the best specialist for the job
	$(document).on('click', '.problem-type-picker:not(.problem-type-checkboxes) .type-column li', function() {
		let expertiseTypeId = Number($(this).data('expertiseTypeId'));

		problemTypePage.loadSubExpertiseTypes($(this).closest('.type-columns'), $(this), expertiseTypeId);

		let bestExpertiseTypeStaff = ticketPage.setSpecialist(expertiseTypeId, $(this).closest('.card').length > 0 ? $(this).closest('.card').find('.assigned-to-options') : $(this).closest('.modal').find('.assigned-to-options'));

		$(this).closest('.problem-type-picker').siblings('input[name*=expertise_type_staff]').val(bestExpertiseTypeStaff !== null ? bestExpertiseTypeStaff.id : '');
	});

	// When a checkbox for a problem type is clicked, load in the children
	$(document).on('click', '.problem-type-checkboxes .type-column li', function() {
		if (!$(this).hasClass('no-children')) {
			staffProblemTypePage.loadSpecialistProblemTypes($(this).closest('.type-columns'), $(this), Number($(this).data('expertiseTypeId')));
		}
	});

	// Toggle all specialisms for the children of this specialism
	$(document).on('click', '.problem-type-checkboxes:not(.readonly) .type-column li .specialism-checkbox', function() {
		staffProblemTypePage.toggleSpecialism($(this));
	});

	// Trigger a search on TicketPage when the Search field has been typed in
	$('.search-field input').on('keyup', function() {
		ticketPage.search($(this).val());
	});

	// Create a Problem Type based on what the user's typed in, place it in the correct location in .types-column
	$(document).on('click', '.create-problem-type', function() {
		var $parentExpertiseType  = $(this).closest('.type-column').prev().find('.active'),
			parentExpertiseTypeId = Number($parentExpertiseType.data('expertiseTypeId'));

		if ($parentExpertiseType.length === 0) { // No parents are found (it's in the first column)
			parentExpertiseTypeId = null;
		}

		problemTypePage.createExpertiseType($(this).parent().siblings('input').val(), parentExpertiseTypeId);
	});

	// Go to the correct hardware or software page, viewing the clicked item
	$("#hardware-software-table").on("click", "tr[data-rowid]", e => {
		location.href = location.href.toString().split("#")[0].replace("tickets", e.currentTarget.dataset.rowtype + "#" + e.currentTarget.dataset.rowid); // e.currentTarget.dataset.rowtype returns "hardware" or "software"
	});

	$(document).on('click', '.note-about-call', function() {
		ticketPage.showCallTicketsModal(Number($(this).data('callId')));
	});

	// Keyboard shortcuts
	$(document).keyup(e => {
		// Ignore if in input
		if (["input", "textarea"].includes(document.activeElement.nodeName.toLowerCase())) {
			return;
		}

		switch (e.keyCode) {
			case 38: // up
			case 40: // down
				let id = 1;
				if (location.hash.length === 0) {
					location.hash = 1;
				} else {
					location.hash = id = parseInt(location.hash.substring(1)) + (e.keyCode === 38 ? -1 : 1); // up or down
				}
				let $row = $(ticketPage.tableSelector).find("[data-rowid=\"" + id + "\"]");
				// Does row with ID exist
				if ($row.length === 0) return;
				$(ticketPage.tableSelector).find("[data-rowid=\"" + id + "\"]").addClass("highlight").siblings().removeClass("highlight");
				ticketPage.showTicketView(id);
				break;
			case 27: // esc
				ticketPage.hideTableRowDetails();
				break;
			default:
				break;
		}
	});
}