import TicketManager from "../TicketManager";

$(() => {
	if (!firstTicketId) {
		$('#change-ticket').change(function() {
			let ticketId = $(this).val();

			window.location.href = window.location.pathname + '?page=call_follow_up&id=' + ticketId;
		});

		return;
	}

	let ticketManager = window.ticketManager = new TicketManager();

	initAccordions();
	loadExistingTicket(firstTicketId);

	$('.call-panel select').change(function() {
		let $callPanel         = $('.call-panel > .row'),
			$staffInformation  = $('.call-panel .staff-information'),
			selectedEmployeeId = Number($(this).val());

		// populate the caller information
		let employee = staffManager.getEmployee(selectedEmployeeId);

		// show the employees details
		showEmployee($staffInformation, employee, staffManager);

		// slide in the the caller information
		$callPanel.find('#caller-information').addClass('expanded');

		if ($('.accordions .accordion-handle.ui-state-active').length === 0) $('.accordions .accordion-handle').click(); // expand the accordion if not done already
	});

	$('#add-new-ticket').click(loadNewTicket);
	$('#change-ticket').click(function() {
		loadExistingTicket($(this).val());

		$(this).find('option:selected').remove();
	});

	$(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
		loadExistingTickets();
	});

	loadExistingTickets();
});

window.loadExistingTicket = function(id) {
	ticketManager.getTicket(id)
		.done(ticket => {
			if (id !== firstTicketId) loadNewTicket();

			let $accordion = $('.accordion-handle:nth-last-child(2), .accordion-body:last-child');

			// deinit all TinyMCE's before cloning
			tinyMCE.EditorManager.editors.forEach((editor) => {
				tinyMCE.get(editor.id).remove();
			});

			loadTicket($accordion, ticket, expertiseTypeManager, staffManager, affectedItemsManager);

			// reinitialize after appending new accordion
			initTinyMCE();
		});
}

window.loadNewTicket = function(existingTicketId = null) {
	let $accordions    = $('.accordions'),
		newAccordionId = existingTicketId || 'new][' + (Math.floor(Math.random() * 9999) + 10000),
		$newAccordion  = cloneAccordion($accordions, newAccordionId);

	clearAccordion($newAccordion, newAccordionId, affectedItemsManager, expertiseTypeManager);

	$accordions.append($newAccordion);
	$newAccordion.find('input[type=radio]').first().click();

	$accordions.accordion('refresh');
	$newAccordion.click(); // expand new accordion
}

function loadExistingTickets() {
	let $changeTicket = $('#change-ticket');

	$changeTicket.html(`<option disabled selected>Select a ticket here…</option>`);

	tickets.forEach(ticket => {
		if (ticket.id !== firstTicketId) {
			$changeTicket.append(`
				<option value="${ticket.id}">#${ticket.id} – ${ticket.title}</option>
			`);
		}
	});
}