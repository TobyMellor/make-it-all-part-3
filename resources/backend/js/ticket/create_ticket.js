$(() => {
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

	$('#add-additional-ticket').click(function() {
		// deinit all TinyMCE's before cloning
		tinyMCE.EditorManager.editors.forEach((editor) => {
			tinyMCE.get(editor.id).remove();
		});

		let $accordions    = $(this).closest('.mia-panel').find('.accordions'),
			newAccordionId = Number($('.accordions .accordion-handle:nth-last-child(2) .number-circle').text()) + 1,
			$newAccordion  = cloneAccordion($accordions, newAccordionId);

		clearAccordion($newAccordion, newAccordionId, affectedItemsManager, expertiseTypeManager);

		$accordions.append($newAccordion);
		$newAccordion.find('input[type=radio]').first().click();

		// reinitialize after appending new accordion
		initTinyMCE();
		$accordions.accordion('refresh');
		$newAccordion.click(); // expand new accordion
	});

	$(document).on('keyup', '.accordions .accordion-body input[name*="title"]', function() {
		let $headerText    = $(this).closest('.accordion-body').prev().find('.accordion-title'),
			newHeaderText  = $(this).val().length <= 2 ? 'New Ticket' : 'New Ticket: ' + $(this).val();

		$headerText.text(newHeaderText);
	});

	initAccordions();
	clearAccordion($('.mia-panel-body')); // clear all fields
});