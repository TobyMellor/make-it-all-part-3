import ExpertiseTypeManager from "../ExpertiseTypeManager";

export default class NewExpertiseTypeManager extends ExpertiseTypeManager {
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
	loadChildrenExpertiseTypes($typeColumns, $clickedLi = null) {
		let $typeColumn        = $('<div class="type-column"></div>'),
			$clickedTypeColumn = $(),
			$breadcrumb        = $('.finder-window .problem-type-picker-header p'),
			clickedExpertiseTypeChildren, specialists;

		$breadcrumb.html('<i class="fa fa-warning"></i> Create a Problem Type to get started');

		if ($clickedLi) {
			let clickedExpertiseTypeId = Number($clickedLi.data('expertiseTypeId'));

			clickedExpertiseTypeChildren = this.getExpertiseTypesWithParent(clickedExpertiseTypeId);

			$breadcrumb.html('<i class="fa fa-warning"></i>' + this.getExpertiseTypeBreadcrumb(clickedExpertiseTypeId));

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
			<button class="button">Create problem type</button>
		`);

		// Append the new .type-column, scroll to the right to view it
		$typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

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
	getExpertiseTypeBreadcrumb(expertiseTypeId) {
		let expertiseTypeParent = this.getExpertiseType(expertiseTypeId),
			breadcrumb           = '';

		while (expertiseTypeParent != null) {
			breadcrumb = expertiseTypeParent.name + breadcrumb;

			expertiseTypeParent = this.getExpertiseType(expertiseTypeParent.parent_id);

			if (expertiseTypeParent != null) {
				breadcrumb = ' / ' + breadcrumb;
			}
		}

		return breadcrumb;
	}
}