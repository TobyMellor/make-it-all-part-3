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

		clickedExpertiseTypeChildren.forEach(child => {
			$typeColumn.append(`
				<li ${(child.children.length === 0 ? 'class="no-children"' : '')} data-expertise-type-id="${child.id}">
					${child.name}
					<div class="specialism-checkbox pull-right">
						${this.staffManager.getCurrentUserSpecialisms().find(ets => ets.expertise_type_id == child.id) ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>'}
					</div>
				</li>
			`);
		});

		// Append the new .type-column, scroll to the right to view it
		$typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

	toggleChildren(expertiseTypeId, shouldActivate) {
		let expertiseType      = this.getExpertiseType(expertiseTypeId),
			currentSpecialisms = this.staffManager.getCurrentUserSpecialisms();
		
		if (shouldActivate) {
			this.staffManager.addCurrentUserSpecialism(expertiseTypeId);
		} else {
			this.staffManager.removeCurrentUserSpecialism(expertiseTypeId);
		}

		expertiseType.children.forEach(childExpertiseTypeId => {
			this.toggleChildren(childExpertiseTypeId, shouldActivate);
		});
	}
}