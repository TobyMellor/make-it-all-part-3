import ExpertiseTypeManager from "../ExpertiseTypeManager";
import StaffManager from "../StaffManager";

/**
 * OVERRIDE to add:
 *    - Create button
 *    - Breadcrumb in necessary place
 *
 * Loads the next column of a Problem Type picker
 *
 * @param {DOM} $typeColumns The div containing .type-column's
 * @param {DOM} $clickedLi the LI that was clicked and needs to load
 */
ExpertiseTypeManager.prototype.loadChildrenExpertiseTypes = (function($typeColumns, $clickedLi = null) {
	let $typeColumn        = $('<div class="type-column"></div>'),
		$clickedTypeColumn = $(),
		clickedExpertiseTypeChildren, specialists;

	if ($clickedLi) {
		let clickedExpertiseTypeId = Number($clickedLi.data('expertiseTypeId'));

		clickedExpertiseTypeChildren = this.getExpertiseTypesWithParent(clickedExpertiseTypeId);

		$clickedLi.closest('.finder-window').find('.problem-type-picker-header p').html(this.getExpertiseTypeBreadcrumb(clickedExpertiseTypeId));

		$clickedTypeColumn = $clickedLi.parent();
		$clickedTypeColumn.nextAll().remove();
		$clickedTypeColumn.find('li.active').removeClass('active');
		$clickedTypeColumn.parent().find('li.last-active').removeClass('last-active');
		$clickedLi.addClass('active last-active');
	} else {
		clickedExpertiseTypeChildren = this.getRootExpertiseTypes();
	}

	clickedExpertiseTypeChildren.forEach((child, i) => {
		specialists = this.staffManager.getSpecialistsOfSpecialism(child.id);
		
		$typeColumn.append(`
			<li ${(child.children.length === 0 ? 'class="no-children"' : '')} data-expertise-type-id="${child.id}">
				${child.name}
				<div class="specialist-counter">
					${(specialists.length > 0 ? specialists.length + ' <i class="fa fa-user"></i>' : '<i class="fa fa-user-times"></i>')}
				</div>
				<i class="fa fa-caret-right"></i>
			</li>
		`);
	});

	$typeColumns.find('button').remove();
	$typeColumn.add($clickedTypeColumn).append(`
		<button class="button button-primary">Create problem type</button>
	`);

	// Append the new .type-column, scroll to the right to view it
	$typeColumns.append($typeColumn);
	$typeColumns.scrollLeft($typeColumns.width());
});

/**
 * OVERRIDE to add:
 *   - Change style of breadcrumb output
 *
 * Display the names of an ExpertiseType, and its parents,
 * in ordered fashion.
 *
 * e.g. "Electronics / Printer / Printer Ink / Cyan Ink"
 *
 * @param {ExpertiseType} 
 * @return {String} Breadcrumb of ExpertiseType.name's, from the root to a ExpertiseType 
 */
ExpertiseTypeManager.prototype.getExpertiseTypeBreadcrumb = (function(expertiseTypeId) {
	let expertiseTypeParent = this.getExpertiseType(expertiseTypeId),
		breadcrumb           = '';

	while (expertiseTypeParent != null) {
		breadcrumb = expertiseTypeParent.name + breadcrumb;

		expertiseTypeParent = this.getExpertiseType(expertiseTypeParent.parent_id);

		if (expertiseTypeParent != null) {
			breadcrumb = ' / ' + breadcrumb;
		}
	}

	return '<i class="fa fa-warning"></i>' + breadcrumb;
});

$(() => {
	let staffManager         = window.staffManager         = new StaffManager(employees, 1, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);

	expertiseTypeManager.loadExpertiseType($('.type-columns'), expertiseTypeManager.expertiseTypes[0].id);

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {

		// show the children of the selected type in the main view
		expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));
	});

	$(document).on('click', '.type-column button.button-primary', function() {
		expertiseTypeManager.showCreateExpertiseTypeField($(this));
	});

	$(document).on('keyup', '.type-column input', function() {
		expertiseTypeManager.handleCreateExpertiseTypeField($(this));
	});

	$(document).on('click', '.type-column button.button-success', function() {
		expertiseTypeManager.createExpertiseType($(this));
	});
});