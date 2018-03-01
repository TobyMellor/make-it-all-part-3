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
}

// Filter the list when clicking on statuses in the left side nav bar
$('.side-nav-bar-nested ul li[data-slug]').on('click', function () {
	$('.search-field input').val("");
	ticketPage.refreshPage(this.dataset.slug);
});

// When a new ticket's created, clear all fields for the next time the modal is shown
$('.new-ticket').on('click', function() {
	$('#new-ticket-modal').find('input, textarea')
		.not('.no-clear-on-show') // don't clear elements with this class
		.val('');
});

// When a new ticket is created, or a follow up call is created, validate and send to TicketManager
$('#new-ticket-modal #create-new-ticket, #create-follow-up-call').on('click', function (e) {
	var $modal   = $(this).closest('.modal'),
		formData = $modal.find('form').serializeObject(true); // returns formData as object

	if (formData.isValid()) { // returns false if any field does not satisfy validation rules. Highlights them.
		var tickets           = formData.tickets,
			existingTicketIds = []; // an new ticket won't have any of these
		
		for (var cardId in tickets) { // For each accordion element
			var ticket = tickets[cardId];

			if (ticket.hasOwnProperty('id')) { // ticket already exists (can't edit it)
				existingTicketIds.push(Number(ticket.id)); delete tickets[cardId];
			} else {
				if (ticket.assigned_to_type === 'self' || ticket.assigned_to_type === 'operator') {
					ticket.assigned_to_operator = Number(ticket.assigned_to[ticket.assigned_to_type]);
				} else {
					ticket.assigned_to_operator = null;
				}
			}
		}

		formData.time = (new Date(formData.time)).toISOString().substring(0, 19).replace('T', ' '); // To MySQL timestamp (prep for DB)

		ticketPage.createCall(formData.time, Number(formData.caller), formData.notes || "", tickets, existingTicketIds); // TODO: Comments on tickets

		$modal.modal('hide'); // hide modal if valid
	}
});

// When a ticket is updated, validate and send to TicketManager
$('#edit-ticket-modal #edit-existing-ticket').on('click', function () {
	var formData = $('#edit-ticket-modal form').serializeObject(true);

	if (formData.isValid()) {
		let ticket = formData.tickets.this;

		if (ticket.assigned_to_type === 'self' || ticket.assigned_to_type === 'operator') {
			ticket.assigned_to_operator = Number(ticket.assigned_to[ticket.assigned_to_type]);
		} else {
			ticket.assigned_to_operator = null;
		}

		ticket = ticketPage.ticketManager.updateTicket(
			Number(ticket.id),
			ticket.status,
			ticket.title,
			ticket.description,
			null, // TODO; Implement solution
			ticket.devices,
			ticket.programs,
			Number(ticket.expertise_type_staff),
			ticket.assigned_to_operator
		);

		ticketPage.refreshPage(ticket.status.slug, Number(ticket.id));

		$('#edit-ticket-modal').modal('hide');
	}
});

// Clear the comment textarea, send comment to TicketManager and display it
$('#create-new-event').on('click', function(e) {
	e.preventDefault();

	let formData = $(this).parent().serializeObject(true);

	if (formData.isValid()) {
		ticketPage.appendNewComment($(this).parent().find('textarea'));
	}
});

// Show the ticket's details when clicking on one -- disallow clicks on yellow highlighted tickets (the current one)
$(document).on('click', '#table-section .table tbody tr:not(.highlight)', function() {
	ticketPage.showTicketView(Number(this.dataset.rowid));
});

// The close button in the ticket's details
$('.ticket-close-button').on('click', function() {
	ticketPage.hideTableRowDetails();
});

// Add Another Ticket button in create ticket modals. Appends new empty accordion
$('.add-another-ticket').on('click', function() {
	ticketPage.addNewAccordionCard($(this).closest('.modal-body').find('#accordion'));
});

// Add Existing ticket button in create ticket modals. Appends accordion populated with
// existing ticket's details (with disabled fields)
$('#add-existing-ticket').on('change', function() {
	if ($(this).val() !== "") { // not the default select option
		ticketPage.addExistingAccordionCard($('#follow-up-call-modal #accordion'), Number($(this).val()));
	}
});

// When the title field has more than two characters, set the accordion's header text to the title for visibility
$(document).on('keyup', '#accordion .card .collapse input[name*="title"]', function() {
	var $cardHeader = $(this).closest('.card').find('.card-header a'),
		headerText  = $(this).val().length <= 2 ? 'New Ticket' : 'New Ticket: ' + $(this).val();

	$cardHeader.text(headerText);
});

// Append a hardware div with its information under the hardware select field
$(document).on('change', '.selectpicker.add-hardware-device', function() {
	if ($(this).val() !== "") { // not the default select option
		ticketPage.appendHardwareDevice($(this).closest('.row').next().find('.affected-items'), Number($(this).val()), $(this).closest('.card').data('cardid') || 'this');
		$(this).closest('.card-block').scrollTop(1E10); // scroll to the top of the page
	}
});

$(document).on('change', '.selectpicker.add-software-program', function() {
	if ($(this).val() !== "") { // not the default select option
		ticketPage.appendSoftwareProgram($(this).closest('.row').next().find('.affected-items'), Number($(this).val()), $(this).closest('.card').data('cardid') || 'this');
		$(this).closest('.card-block').scrollTop(1E10);
	}
});

// The delete button inside a hardware or software div
$(document).on('click', '.remove-affected-item', function() {
	ticketPage.removeAffectedItem($(this));
});

// Open the View Call history for the clicked call
$(document).on('click', '#ticket-view #call-history-table tbody tr', function() {
	ticketPage.showCallTicketsModal(Number(this.dataset.rowid));
});

// Go to the ticket clicked in the View Call History modal
$(document).on('click', '#view-call-history-modal #call-tickets-table tbody tr:not(.highlight)', function() {
	ticketPage.showCallTicket(Number(this.dataset.rowid));
});

// When the create follow up call modal is shown, clear and populate the accordion
$('#follow-up-call-modal').on('shown.bs.modal', function() {
	var $firstAccordionHeader = $(this).find('#accordion .card-header a'),
		$addExistingTicket    = $('#add-existing-ticket');

	$firstAccordionHeader.text('This Ticket: ' + ticketPage.currentTicket.title); // set the only accordion's title to the currently viewing ticket title

	ticketPage.populateTicketModal($(this), ticketPage.currentTicket, 'this');

	$addExistingTicket.html('<option selected hidden>Select an Existing Ticket</option>');

	let tickets = ticketPage.ticketManager.tickets,
		ticket;

	// Load existing tickets
	for (var i = 0; i < tickets.length; i++) {
		ticket = tickets[i];

		// Only add ticket to list if it's not the ticket currently being displayed
		if (ticket.id !== ticketPage.currentTicket.id) {
			$addExistingTicket
					.append(new Option(`#${ticket.id} ${ticket.title.substring(0, 35)}`, ticket.id))
					.selectpicker('refresh'); // Add existing tickets, and trim their title, to the "Add Existing Ticket" select field
		}
	}
});

// Populate the Choose a Caller select field in the new ticket modal when it's shown
$('#new-ticket-modal').on('show.bs.modal', function() {
	ticketPage.populateSelectField($(this).find('select[name="caller"]'), 'Choose a caller…', ticketPage.staffManager.staff);
});

// Populate the Choose a Caller select field in the new follow up call modal when it's shown
// Automatically selects the last caller of the ticket
$('#follow-up-call-modal').on('show.bs.modal', function() {
	let calls        = ticketPage.currentTicket._calls,
		lastCallId   = calls[calls.length - 1],
		lastCall     = ticketPage.ticketManager.getCall(lastCallId),
		lastCallerId = lastCall._caller,
		$select      = $(this).find('select[name="caller"]');

	ticketPage.populateSelectField($select, 'Choose a caller…', ticketPage.staffManager.staff, lastCallerId);
	$select.trigger('change'); // trigger change so the Caller Information is shown on the right
});

// When the new ticket modal or follow up call modal is shown
// Reset the modal to it's existing state, and populate the fields
$('#new-ticket-modal, #follow-up-call-modal').on('show.bs.modal', function() {
	$(this).find('.staff-information').text('No staff member has been selected yet!');
	$(this).find('#accordion .card .type-columns').empty();

	$(this).find('input[name*="assigned_to.self"]').val(window.auth.me().id); // The ID of the user (hidden to the user)
	$(this).find('input[name*="assigned_to.self_showcase"]').val(ticketPage.staffManager.currentUser(true).name); // _showcase fields are what the user see's. This is never submitted to the DB

	$(this).find('input[name*="assigned_to.specialist"]').val('');
	$(this).find('input[name*="assigned_to.specialist_showcase"]').val('Problem Type not yet chosen');
	$(this).find('.form-check .form-check-input[value="self"]').click();

	ticketPage.populateSelectField($(this).find('select[name*=assigned_to]'), 'Choose an operator…', ticketPage.staffManager.getEmployeesWithPermission('operator', true));

	problemTypePage.loadSubExpertiseTypes($(this).find('.type-columns'));

	$('.selectpicker').selectpicker();
});

// Populate hardware and software select fields in all modals when they're shown
$('#new-ticket-modal, #follow-up-call-modal, #edit-ticket-modal').on('show.bs.modal', function() {
	$(this).find('.affected-items').empty();

	ticketPage.populateSelectField($(this).find('.selectpicker.add-hardware-device'), 'Type a serial number…', ticketPage.hardwareManager.devices, null, 'serial_no');
	ticketPage.populateSelectField($(this).find('.selectpicker.add-software-program'), 'Choose a program…', ticketPage.softwareManager.programs, null, 'name', function(program) {
		return program.operating_system ? '(OS)' : '';
	});
});

// When the edit ticket modal is shown, populate it
$('#edit-ticket-modal').on('show.bs.modal', function() {
	let currentTicket = ticketPage.currentTicket;

	ticketPage.populateSelectField($(this).find('select[name*=assigned_to]'), 'Choose an operator…', ticketPage.staffManager.getEmployeesWithPermission('operator', true), (ticketPage.getAssignedToType(currentTicket) === 'operator' ? currentTicket._assigned_to_operator : null));
	ticketPage.populateTicketModal($(this), currentTicket, 'this');
			
	$(this).find('.form-check .form-check-label input[value="' + ticketPage.getAssignedToType(currentTicket) + '"]').click(); // click the correct assigned to type

	problemTypePage.loadExpertiseType($(this).find('.type-columns'), currentTicket.expertise_type_staff._expertise_type);
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

// Show the caller's information when the select field is changed
$('#new-ticket-modal select[name="caller"], #follow-up-call-modal select[name="caller"]').on('change', function() {
	ticketPage.showStaffInformation($(this).closest('.modal').find('.staff-information'), Number($(this).val()));
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

// When the user toggles between "Assign to myself", "Assign to another Operator" and "Assign to Specialist of Problem Type", show the correct _showcase input field
$(document).on('click', '.assigned-to-section .form-check input', function() {
	var $assignedToOptions = $(this).closest('.assigned-to-section').find('.assigned-to-options');

	$assignedToOptions.find('> *').hide();

	if ($(this).val() === 'self') {
		$assignedToOptions.find('> :first-child').show();
	} else if ($(this).val() === 'operator') {
		$assignedToOptions.find('> :nth-child(3)').show();
	} else { // specialist of problem type
		$assignedToOptions.find('> :last-child').show();
	}
});

// Remove the accordion, put the ticket back into the existing tickets list
$(document).on('click', '.card.existing .remove-accordion', function() {
	var $addExistingTicket = $(this).closest('.modal').find('#add-existing-ticket'),
		ticketId           = Number($(this).closest('.card-header').siblings('input[name*="id"]').val()),
		ticket             = ticketPage.ticketManager.getTicket(ticketId);

	$addExistingTicket.prepend('<option value="' + ticketId + '">' + '#' + ticketId + ' ' + ticket.title.substring(0, 35) + '</option>');
	$addExistingTicket.selectpicker('refresh');
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

$(document).on('click', '#ticket-comments .media:not(.solution) .fa-check', function() {
	ticketPage.markCommentAsSolution(Number($(this).closest('.media').data('commentId')));
	$('.tooltip').tooltip('hide')
});

$(document).on('click', '#ticket-comments .media.solution .fa-check', function() {
	ticketPage.unmarkCommentAsSolution();
	$('.tooltip').tooltip('hide')
});
