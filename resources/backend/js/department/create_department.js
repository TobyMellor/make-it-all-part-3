$(() => {
	// make the chevron handle go up/down when an accordion is expanded/minimized
	$(document).on('click', '.accordion-handle', function() {
		$('.accordions .accordion-handle .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-up');
		$('.accordions .accordion-handle.ui-state-active .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-down');
	});

	$(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
		if (!confirm('Are you sure you want to delete this department?')) return;

		let $accordionHandle = $(this).closest('.accordion-handle');

		$accordionHandle.add($accordionHandle.next()).fadeOut(250, function() {
			$(this).remove();

			// if no accordions are expanded, expand the first
			if ($('.accordion-handle.ui-state-active').length === 0) $('.accordion-handle').first().click();
		});
	});

	$('#add-additional-department').click(function() {
		let $accordions    = $(this).closest('.mia-panel').find('.accordions'),
			newAccordionId = Number($('.accordions .accordion-handle:nth-last-child(2) .number-circle').text()) + 1,
			$newAccordion  = cloneAccordion($accordions, newAccordionId);

		clearAccordion($newAccordion, newAccordionId);

		$accordions.append($newAccordion);

		// reinitialize after appending new accordion
		$accordions.accordion('refresh');
		$newAccordion.click(); // expand new accordion
	});

	$(document).on('keyup', '.accordions .accordion-body input[name*="name"]', function() {
		let $headerText   = $(this).closest('.accordion-body').prev().find('.accordion-title'),
			newHeaderText = $(this).val().length <= 2 ? 'New Department' : 'New Department: ' + $(this).val();

		$headerText.text(newHeaderText);
	});

	initAccordions();
	clearAccordion($('.mia-panel-body')); // clear all fields
});

function cloneAccordion($accordions, newAccordionId) {
	let $existingAccordion = $accordions.find('.accordion-handle:first-child, .accordion-body:nth-child(2)').wrapAll('<div>'),
		$newAccordion      = $existingAccordion.clone().unwrap();

	$existingAccordion.unwrap();

	// delete accordion button
	$newAccordion.find('.accordion-actions').prepend('<i class="fa fa-trash-o"></i>');

	// replace name of input fields, e.g. tickets[1].x to tickets[2].x
	$newAccordion.last().find('input, textarea, select').each((i, input) => $(input).prop('name', $(input).prop('name').replace(/departments\[.*?\]\s?/g, 'departments[' + newAccordionId + ']')));
	$newAccordion.last().attr('data-accordion-id', newAccordionId);

	return $newAccordion;
}

function clearAccordion($accordion, newAccordionId) {
	// set input/textarea/select fields to default values
	$accordion.find('input').val('');
	$accordion.find('.accordion-icon .number-circle').text(newAccordionId);
}

function initAccordions() {
	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle',
		icons: false,
		collapsible: true
	});
}