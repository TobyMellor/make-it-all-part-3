import ExpertiseTypeManager from "../ExpertiseTypeManager";
import AffectedItemsManager from "../AffectedItemsManager";
import StaffManager from "../StaffManager";

$(() => {
	let showEmployee = window.showEmployee = (function($element, employee, staffManager) {
		$element.find('input').each((i, input) => $(input).val(employee[$(input).data('attribute')] || 'N/A')); // populate input fields
		$element.find('.mia-permissions strong').html(staffManager.getPermissions(employee)); // populate permissions field
	});

	// if we're on the read page, don't register these events
	if (!window.employees || !window.expertiseTypes || !window.expertiseTypeStaff || !window.devices || !window.programs) return;

	let staffManager         = window.staffManager         = new StaffManager(employees, 1, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);
	let affectedItemsManager = window.affectedItemsManager = new AffectedItemsManager(devices, programs);

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
		expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));

		// since a problem has been selected, allow them to choose this option
		$assignOptions.find('input[value="specialist"]').parent().fadeIn();

		// trigger a change to update the best specialist for the problem
		if ($assignedToType.val() === 'specialist') $assignedToType.click();

		// set the Expertise Type ID under .problem-type-picker and the best specialist
		$(this).closest('.problem-type-picker').find('input[name*="expertise_type_id"]').val(Number($(this).data('expertiseTypeId')));
		$(this).closest('.problem-type-picker').find('input[name*="assigned_to_specialist"]').val(staffManager.getBestSpecialistForSpecialism(id));
	});

	$(document).on('click', '.assign-options label', function() {
		let $assignOptions  = $(this).closest('.assign-options'),
			$display        = $assignOptions.find('.assigned-to-details'),
			$operatorSelect = $assignOptions.find('select'),
			$input          = $(this).find('input');

		if ($input.attr('disabled')) return;

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

				showEmployee($display, staffManager.getEmployee(
					selectedExpertiseTypeId ? staffManager.getBestSpecialistForSpecialism(selectedExpertiseTypeId) : ticket.assigned_to_specialist_id
				), staffManager) // TODO: Update with ID from problem type picker
			}
		}
	});

	$(document).on('change', '.assign-options select', function() {
		let selectedOperatorId = Number($(this).val()),
			$display           = $(this).closest('.assign-options').find('.assigned-to-details');

		showEmployee($display, staffManager.getEmployee(selectedOperatorId), staffManager);
	});

	// change the filter/status to the right of the select field
	$(document).on('change', '.has-button select', function() {
		let $filter    = $(this).closest('.has-button').find('.filter'),
			selected   = $(this).find('option:selected'),
			status     = selected.text().toLowerCase(),
			className  = status.substr(0, status.indexOf(' ')) || status;

		if ($filter.length === 0) {
			$filter = $('<span>');
			$(this).closest('.has-button').find('div:last-child').append($filter);
		}

		$filter.removeClass().addClass('filter removeable filter-' + className);
		$filter.html(`
			${selected.text()}
			<i class="fa fa-times"></i>
		`);
	});

	$('form').submit(function(e) {
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});

	initTinyMCE();
});

window.initTinyMCE = function() {
	tinyMCE.init({
		selector: 'textarea',
		branding: false,
		setup: function (editor) {
			editor.on('change', function () {
				editor.save(); // keep hidden textarea up to date
			});
		},
		autofocus: 'textarea'
	});
}

window.initAccordions = function() {
	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle',
		icons: false,
		active: false,
		collapsible: true
	});
}

window.cloneAccordion = function($accordions, newAccordionId) {
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

window.clearAccordion = function($accordion, newAccordionId, affectedItemsManager = null, expertiseTypeManager = null) {
	// set input/textarea/select fields to default values
	$accordion.find('select').prop('selectedIndex', 0);
	$accordion.find('.set-solution').hide();
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
		$accordion.find('.accordion-icon .number-circle').text(Number.isInteger(newAccordionId) ? newAccordionId : '+');
		$accordion.find('.accordion-title').text('New Ticket');
	}
}

window.loadTicket = function($accordion, ticket, expertiseTypeManager, staffManager, affectedItemsManager) {
		$accordion.find('.number-circle').text(ticket.id);
		$accordion.find('.accordion-title').text('Ticket: ' + ticket.title);

		$accordion.find('select[name*="status"] option[value="' + ticket.status_id + '"]').prop('selected', true).trigger('change');

		if (ticket.status_id == 3) $accordion.find('.set-solution').show();
		$accordion.find('textarea[name*="solution"]').val(ticket.solution);

		$accordion.find('input[name*="title"]').val(ticket.title);
		$accordion.find('textarea[name*="description"]').val(ticket.description);

		expertiseTypeManager.loadExpertiseType($accordion.find('.type-columns'), ticket.expertise_type_id);
		$accordion.find('input[name*="expertise_type_id"]').val(ticket.expertise_type_id);
		$accordion.find('input[name*="assigned_to_specialist"]').val(ticket.assigned_to_specialist_id);

		if (ticket.assigned_to_operator_id === null) {
			$accordion.find('input[name*="assigned_to_type"][value="specialist"]').click();
		} else if (ticket.assigned_to_operator_id == staffManager.currentEmployee.id) {
			$accordion.find('input[name*="assigned_to_type"][value="self"]').click();
		} else {
			$accordion.find('input[name*="assigned_to_type"][value="operator"]').click();
			$accordion.find('select[name*="assigned_to_operator"] option[value="' + ticket.assigned_to_operator_id + '"]').click();
		}

		let $addHardwareDevice  = $accordion.find('.add-hardware-device'),
			$addSoftwareProgram = $accordion.find('.add-application, .add-operating-system');

		ticket.devices.forEach((deviceId) => {
			$addHardwareDevice.find('option[value="' + deviceId + '"]').prop('selected', true);
			affectedItemsManager.addAffectedItem($addHardwareDevice);
		});

		ticket.programs.forEach((programId) => {
			// this will only return the select field that was changed
			// e.g. if it's an OS ID, no option exists within the applications select
			let $select = $addSoftwareProgram
							.find('option[value="' + programId + '"]')
							.prop('selected', true)
							.parent();

			affectedItemsManager.addAffectedItem($select);
		});
}