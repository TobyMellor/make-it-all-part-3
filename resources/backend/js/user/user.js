import ExpertiseTypeManager from "./ExpertiseTypeManager";
import StaffManager from "../StaffManager";

$(() => {
	if (!window.employees || !window.expertiseTypes || !window.expertiseTypeStaff || !window.currentUserId) return;

	let staffManager         = window.staffManager         = new StaffManager(employees, currentUserId, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);

	$('.type-columns').siblings('input').val(getCurrentUserSpecialismIds());

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));
	});

	$(document).on('click', '.specialism-checkbox', function() {
		let $specialismCheckbox = $(this),
			$li                 = $specialismCheckbox.parent(),
			$typeColumns        = $li.closest('.type-columns'),
			id                  = $li.data('expertiseTypeId'),
			$lastActive         = $typeColumns.find('.type-column li.last-active'),
			lastActiveId        = $lastActive.length ? $lastActive.data('expertiseTypeId') : id;

		expertiseTypeManager.toggleChildren(id, !$specialismCheckbox.find('i').hasClass('fa-check'));
		expertiseTypeManager.loadExpertiseType($('.type-columns'), lastActiveId); // reload last active
		$typeColumns.siblings('input').val(getCurrentUserSpecialismIds());
	});

	function getCurrentUserSpecialismIds() {
		return staffManager
			.getCurrentUserSpecialisms()
			.map(expertiseType => expertiseType.expertise_type_id)
			.join(',');
	}
});