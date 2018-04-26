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