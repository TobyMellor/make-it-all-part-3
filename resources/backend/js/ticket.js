import ExpertiseTypeManager from "./ExpertiseTypeManager";
import AffectedItemsManager from "./AffectedItemsManager";
import StaffManager from "./StaffManager";

jQuery(() => {
	let employees = [
		{
			id: 1,
			name: 'Toby Mellor',
			job_title: 'Developer',
			department: 'Computer Science',
			phone_number: '(686) 917-4585',
			operator: 1,
			analyst: 1,
			specialist: 0,
			staff_expertise_type_ids: [1, 2, 3, 4, 5],
			open_tickets: [1, 2, 3, 4]
		},
		{
			id: 2,
			name: 'Dana Gibson',
			job_title: 'Executive Officer',
			department: 'Mathematics',
			phone_number: '(121) 258-8985',
			operator: 1,
			analyst: 0,
			specialist: 1,
			staff_expertise_type_ids: [4, 5, 6, 7],
			open_tickets: [5, 6]
		}
	];

	let staffManager = new StaffManager(employees, 1);

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

	let expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, staffManager);

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

	$(document).on('change', '.add-hardware-device, .add-application, .add-operating-system', function() {
		affectedItemsManager.addAffectedItem($(this));
	});

	$(document).on('click', '.remove-affected-item', function() {
		affectedItemsManager.removeAffectedItem($(this));
	});

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		let id              = Number($(this).data('expertiseTypeId')),
		    $assignOptions  = $(this).closest('.accordion-body').find('.assign-options'),
			$assignedToType = $assignOptions.find('input:checked');

		// show the children of the selected type in the main view
		expertiseTypeManager.loadChildrenExpertiseTypes($('.type-columns'), $(this));

		// since a problem has been selected, allow them to choose this option
		$assignOptions.find('input[value="specialist"]').parent().fadeIn();

		// trigger a change to update the best specialist for the problem
		if ($assignedToType.val() === 'specialist') $assignedToType.click();
	});

	/*
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
	*/

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

	// change the filter/status to the right of the select field
	$(document).on('change', '.has-button select', function() {
		let $filter    = $(this).closest('.has-button').find('.filter'),
			selected   = $(this).find('option:selected'),
			statusSlug = selected.val(),
			className  = statusSlug.substr(0, statusSlug.indexOf('_')) || statusSlug;

		if ($filter.length === 0) {
			$filter = $('<span>');
			$(this).closest('.has-button').find('div:last-child').append($filter);
		}

		$filter.removeClass().addClass('filter filter-' + className);
		$filter.html(`
			${selected.text()}
			<i class="fa fa-times"></i>
		`);
	});

	$(document).on('click', '.assign-options label', function() {
		let $assignOptions  = $(this).closest('.assign-options'),
			$display        = $assignOptions.find('.assigned-to-details'),
			$operatorSelect = $assignOptions.find('select'),
			$input          = $(this).find('input');

		$operatorSelect.prop('selectedIndex', 0);

		if ($input.val() === 'operator') {
			$operatorSelect.fadeIn();

			showEmployee($display, {}, staffManager); // empty object because user hasn't selected the operator yet
		} else {
			$operatorSelect.fadeOut();

			if ($input.val() === 'self') {
				showEmployee($display, staffManager.currentEmployee, staffManager);
			} else {
				let selectedExpertiseTypeId = Number($(this).closest('.accordion-body').find('.problem-type-picker li.last-active').data('expertiseTypeId'));

				showEmployee($display, staffManager.getBestSpecialistForSpecialism(selectedExpertiseTypeId), staffManager) // TODO: Update with ID from problem type picker
			}
		}
	});

	$(document).on('change', '.assign-options select', function() {
		let selectedOperatorId = Number($(this).val()),
			$display           = $(this).closest('.assign-options').find('.assigned-to-details');

		showEmployee($display, staffManager.getEmployee(selectedOperatorId), staffManager);
	});

	$(document).on('keyup', '.accordions .accordion-body input[name*="title"]', function() {
		let $headerText    = $(this).closest('.accordion-body').prev().find('.accordion-title'),
			newHeaderText  = $(this).val().length <= 2 ? 'New Ticket' : 'New Ticket: ' + $(this).val();

		$headerText.text(newHeaderText);
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
	$accordion.find('input[type=text], textarea').val('');
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

function showEmployee($element, employee, staffManager) {
	$element.find('input').each((i, input) => $(input).val(employee[$(input).data('attribute')])); // populate input fields
	$element.find('.mia-permissions strong').html(staffManager.getPermissions(employee)); // populate permissions field
}