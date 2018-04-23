import ExpertiseTypeManager from "../ExpertiseTypeManager";
import AffectedItemsManager from "../AffectedItemsManager";
import StaffManager from "../StaffManager";

$(() => {
	if (!window.getUrlParameter('page').includes('ticket')) return;

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
});