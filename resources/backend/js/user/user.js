import ExpertiseTypeManager from "./ExpertiseTypeManager";
import StaffManager from "../StaffManager";

$(() => {
	if (!window.employees || !window.expertiseTypes || !window.expertiseTypeStaff || !currentUserId) return;

	let staffManager         = window.staffManager         = new StaffManager(employees, currentUserId, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));
	});

	$(document).on('click', '.specialism-checkbox', function() {
		let $specialismCheckbox = $(this),
			$li                 = $specialismCheckbox.parent(),
			$typeColumns        = $li.closest('.type-columns'),
			id                  = $li.data('expertiseTypeId');

		expertiseTypeManager.toggleChildren(id, !$specialismCheckbox.find('i').hasClass('fa-check'));
		expertiseTypeManager.loadExpertiseType($('.type-columns'), $('.type-column li.last-active').data('expertiseTypeId')); // reload last active
	});
});