import ExpertiseTypeManager from "./ExpertiseTypeManager";
import AffectedItemsManager from "./AffectedItemsManager";

jQuery(() => {
	// TODO: Get in this format from WP db
	let expertiseTypes = [
		{
			id: 1,
			name: 'Printer',
			parent_id: null,
			children: [2, 3]
		},
		{
			id: 2,
			name: 'Ink',
			parent_id: 1,
			children: [4]
		},
		{
			id: 3,
			name: 'Paper',
			parent_id: 1,
			children: []
		},
		{
			id: 4,
			name: 'Low Ink',
			parent_id: 2,
			children: [5]
		},
		{
			id: 5,
			name: 'Low Magenta',
			parent_id: 4,
			children: []
		},
		{
			id: 6,
			name: 'Spillage',
			parent_id: 2,
			children: []
		},
		{
			id: 7,
			name: 'Vending Machine',
			parent_id: null,
			children: []
		}
	];

	let expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes);

	let devices = [
		{
			id: 1,
			type: 'Phone',
			make: 'Apple',
			serial_no: 'N9TT-9G0A-B7FQ-RANC'
		},
		{
			id: 2,
			type: 'Phone',
			make: 'Samsung',
			serial_no: 'VBHP-3U6Y-HFN5-BVE9'
		},
		{
			id: 3,
			type: 'Calculator',
			make: 'Casio',
			serial_no: 'QK6A-JI6S-7ETR-0A6C'
		},
		{
			id: 4,
			type: 'Laptop',
			make: 'Apple',
			serial_no: 'QK6A-JI6S-7ETR-0A6C'
		}
	];

	let programs = [
		{
			id: 1,
			name: 'Word',
			operating_system: false,
			expiry_date: '11/10/2017'
		},
		{
			id: 2,
			name: 'Excel',
			operating_system: false,
			expiry_date: '12/10/2017'
		},
		{
			id: 3,
			name: 'Powerpoint',
			operating_system: false,
			expiry_date: '13/10/2017'
		},
		{
			id: 4,
			name: 'Windows',
			operating_system: true,
			expiry_date: '14/10/2017'
		},
		{
			id: 5,
			name: 'macOS',
			operating_system: true,
			expiry_date: '15/10/2017'
		}
	];

	let affectedItemsManager = new AffectedItemsManager(devices, programs);

	$(document).on('click', '.add-hardware-device, .add-application, .add-operating-system', function() {
		affectedItemsManager.addAffectedItem($(this));
	});

	$(document).on('click', '.remove-affected-item', function() {
		affectedItemsManager.removeAffectedItem($(this));
	});

	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle'
	});

	// On clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		let id = Number($(this).data('expertiseTypeId'));

		// show the children of the selected type in the main view
		expertiseTypeManager.loadChildrenExpertiseTypes($('.type-columns'), $(this));
	});

	// Creating a new problem type with the name given by the user
	$(document).on('click', '.create-problem-type', function() {
		// Get the new name of a problem type
		let name = $(this).parent().siblings('input').val();

		// Check if a name has been given, don't create a problem type with no name
		if (!name) return;

		// Get the parent if it exists for the new problem type to be added to
		const parentId = $(this).closest('.type-column').prev().find('.active').data("expertiseTypeId");

		// Create problem type
		expertiseTypeManager.createExpertiseType(name, parentId);
	});

	$('#add-additional-ticket').click(function() {
		let $accordions   = $(this).closest('.mia-panel').find('.accordions'),
			$newAccordion = cloneAccordion($accordions);

		clearAccordion($newAccordion, affectedItemsManager, expertiseTypeManager);

		$accordions.append($newAccordion);
	});

	// Change the filter/status to the right of the select field
	$('.has-button select').change(function() {
		let $filter    = $(this).closest('.has-button').find('.filter'),
			selected   = $(this).find('option:selected'),
			statusSlug = selected.val(),
			className  = statusSlug.substr(0, statusSlug.indexOf('_')) || statusSlug;

		if ($filter.length === 0) {
			$filter = $('<span>');
			$(this).closest('.has-button').find('div:last-child').append($filter);
		}

		$filter.removeClass().addClass('filter').addClass('filter-' + className);
		$filter.html(`
			${selected.text()}
			<i class="fa fa-times"></i>
		`);
	});
});

function cloneAccordion($accordions) {
	let $existingAccordion = $accordions.find('.accordion-handle:first-child, .accordion-body:nth-child(2)').wrapAll('<div>'),
		$newAccordion      = $existingAccordion.clone().unwrap();

	$existingAccordion.unwrap();

	return $newAccordion;
}

function clearAccordion($accordion, affectedItemsManager, expertiseTypeManager) {
	let $typeColumns = $accordion.find('.type-columns');

	// set input/select fields to default values
	$accordion.find('select').prop('selectedIndex', 0);
	$accordion.find('input').val('');

	// clear any selected .affected-items, repopulate select fields
	$accordion.find('.affected-items').empty();
	affectedItemsManager.populateAllSelectFields($accordion);

	// reload .type-columns to contain root expertise types
	$typeColumns.empty();
	expertiseTypeManager.loadChildrenExpertiseTypes($typeColumns);
}