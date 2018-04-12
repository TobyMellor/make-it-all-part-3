

jQuery(() => {






	// make the chevron handle go up/down when an accordion is expanded/minimized
	$(document).on('click', '.accordion-handle', function() {
		$('.accordions .accordion-handle .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-up');
		$('.accordions .accordion-handle.ui-state-active .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-down');
	});

	$(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
		if (!confirm('Are you sure you want to delete this ticket?')) return;

		let $accordionHandle = $(this).closest('.accordion-handle');

		$accordionHandle.add($accordionHandle.next()).fadeOut(250, function() {
			$(this).remove();

			// if no accordions are expanded, expand the first
			if ($('.accordion-handle.ui-state-active').length === 0) $('.accordion-handle').first().click();
		});
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





	initTinyMCE();
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
	$newAccordion.last().find('input, textarea, select').each((i, input) => $(input).prop('name', $(input).prop('name').replace(/tickets\[.*?\]\s?/g, 'tickets[' + newAccordionId + ']')));
	$newAccordion.last().attr('data-accordion-id', newAccordionId);

	return $newAccordion;
}

function clearAccordion($accordion, newAccordionId, affectedItemsManager = null, expertiseTypeManager = null) {
	// set input/textarea/select fields to default values
	$accordion.find('select').prop('selectedIndex', 0);
	$accordion.find('input[type=text]:not(.hasDatepicker), textarea').val('');
	$accordion.find('input[type=radio]').first().click();

	// because problem is initially unselected, hide ability to choose specialist of problem
	$accordion.find('input[type=radio][value="specialist"]').parent().hide();

	// clear the status tag to the right of the select field, e.g. "New", "Pending"
	$accordion.find('.has-button div:last-child').empty();

	// refresh accordion, e.g. page has just loaded
	if (affectedItemsManager !== null && expertiseTypeManager !== null) {
		let $typeColumns = $accordion.find('.type-columns');

		// clear any selected .affected-items, repopulate select fields
		$accordion.find('.affected-items').empty();
		affectedItemsManager.populateAllSelectFields($accordion);

		// reload .type-columns to contain root expertise types
		$typeColumns.empty();
		expertiseTypeManager.loadChildrenExpertiseTypes($typeColumns);

		// set the accordion number and the new ticket text in the accordion handle
		$accordion.find('.accordion-icon .number-circle').text(newAccordionId);
		$accordion.find('.accordion-title').text('New Ticket');
	}
}

function initTinyMCE() {
	tinyMCE.init({
		selector: 'textarea',
		branding: false
	});
}

function initAccordions() {
	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle',
		icons: false,
        active: false,
        collapsible: true
	});
}

