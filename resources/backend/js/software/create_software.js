$(() => {
	// make the chevron handle go up/down when an accordion is expanded/minimized
	$(document).on('click', '.accordion-handle', function() {
		$('.accordions .accordion-handle .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-up');
		$('.accordions .accordion-handle.ui-state-active .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-down');
	});

	$(document).ready(function() {
		// date is empty string without this? 
		setDate($('.mia-picker input'));
		licenceListeners($('.accordion-body'));
	});

	$(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
		if (!confirm('Are you sure you want to delete this software device?')) return;

		let $accordionHandle = $(this).closest('.accordion-handle');

		$accordionHandle.add($accordionHandle.next()).fadeOut(250, function() {
			$(this).remove();

			// if no accordions are expanded, expand the first
			if ($('.accordion-handle.ui-state-active').length === 0) $('.accordion-handle').first().click();
		});
	});

	$('#add-additional-software').click(function() {
		let $accordions    = $(this).closest('.mia-panel').find('.accordions'),
			newAccordionId = Number($('.accordions .accordion-handle:nth-last-child(2) .number-circle').text()) + 1,
			$newAccordion  = cloneAccordion($accordions, newAccordionId);
		
		licenceListeners($newAccordion);
		clearAccordion($newAccordion, newAccordionId);

		$accordions.append($newAccordion);

		// reinitialize after appending new accordion
		$accordions.accordion('refresh');
		$newAccordion.click(); // expand new accordion
	});

	$(document).on('keyup', '.accordions .accordion-body input[name*="name"]', function() {
		let $accordionBody   = $(this).closest('.accordion-body'),
			$accordionHeader = $accordionBody.prev(),
			$headerText      = $accordionHeader.find('.accordion-title'),
			$typeSelect      = $accordionBody.find('select[name*="type"]'),
			type             = 'New ';

		if ($typeSelect.val()) {
			type += $typeSelect.find('option:selected').text();
		} else {
			type += 'Software';
		}

		$headerText.text(type + ($(this).val().length <= 2 ? '' : ': ' + $(this).val()));
	});

	initAccordions();
	clearAccordion($('.mia-panel-body')); // clear all fields
});

function addDatePicker($accordion, $expdate){
	let $picker      = $accordion.find('.mia-picker'),
		$hiddenInput = $('<input>');
	
	$picker.find('input').replaceWith($hiddenInput); // generate a fresh input

	$hiddenInput.datetimepicker({
		controlType: 'slider'
	});

	if ($expdate) {
		$hiddenInput.attr('name','software[' + $expdate + '][expiry]');	
	} else {
		// already has number (first accordion)
		$expdate = Number($('.accordions .accordion-handle:nth-last-child(2) .number-circle').text());
		$hiddenInput.attr('name','software[' + $expdate + '][expiry]');	
	}

	setDate($hiddenInput);
}

function cloneAccordion($accordions, newAccordionId) {
	let $existingAccordion = $accordions.find('.accordion-handle:first-child, .accordion-body:nth-child(2)').wrapAll('<div>'),
		$newAccordion = $existingAccordion.clone().unwrap();

	$existingAccordion.unwrap();
	// delete accordion button
	$newAccordion.find('.accordion-actions').prepend('<i class="fa fa-trash-o"></i>');

	// replace name of input fields, e.g. tickets[1].x to tickets[2].x
	$newAccordion.last().find('input, textarea, select').each((i, input) => $(input).prop('name', $(input).prop('name').replace(/software\[.*?\]\s?/g, 'software[' + newAccordionId + ']')));
	
	$newAccordion.last().attr('data-accordion-id', newAccordionId);
	
	return $newAccordion;
}

function setDate(dateInput, date) {
	if (date) {
		dateInput.datepicker('setDate', '');
	} else {
		dateInput.datepicker('setDate', new Date());	
	}
}

function licenceListeners($accordion) {
	let $remove = $accordion.find('.software-rml'),
		$add    = $accordion.find('.software-addl'); 

	$remove.click(function() {
		// button is on licence panel, remove this panel and make the closes no date visible.
		$accordion.find('.software-date-section').css({ display: 'none' });
		$accordion.find('.software-no-date').css({ display: 'flex' });

		// set the date to null/ empty string.
		setDate($accordion.find('.mia-picker input'), true);
	
	});

	$add.click(function() {
		// remove this panel, make date visible.
		$accordion.find('.software-no-date').css({ display: 'none' });
		$accordion.find('.software-date-section').css({ display: 'flex' });

		setDate($accordion.find('.mia-picker input'));
	});
}

function clearAccordion($accordion, newAccordionId, affectedItemsManager = null, expertiseTypeManager = null) {
	// set input/textarea/select fields to default values
	$accordion.find('input').val('');
	$accordion.find('select').prop('selectedIndex', 0);
	$accordion.find('.software-date-section').css({ display: 'flex' });
	$accordion.find('.software-no-date').css({ display: 'none' });

	// set the accordion number and the new ticket text in the accordion handle
	$accordion.find('.accordion-icon .number-circle').text(newAccordionId);
	$accordion.find('.accordion-title').text('New Software');

	addDatePicker($accordion, newAccordionId);
}

function initAccordions() {
	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle',
		icons: false,
		collapsible: true
	});
}