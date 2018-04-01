export default class ExpertiseTypeManager {
	constructor(expertiseTypes) {
		this.expertiseTypes = expertiseTypes;
	}

	/**
	 * Get a ExpertiseType with a given .id
	 *
	 * @param {Integer} expertiseTypeId ID of ExpertiseType
	 * @return {Object} ExpertiseType with given ID, or null if not found
	 */
	getExpertiseType(expertiseTypeId) {
		return this.expertiseTypes.find(expertiseType => expertiseType.id === expertiseTypeId) || null;
	}

	/**
	 * Get all ExpertiseType's with a given .parent_id
	 *
	 * @param {Integer} parentId ID of parent ExpertiseType
	 * @return {Array} ExpertiseType with corresponding parent
	 */
	getExpertiseTypesWithParent(parentId) {
		return this.expertiseTypes.filter(expertiseType => expertiseType.parent_id === parentId);
	}

	/**
	 * Get all ExpertiseTypes with no parent
	 *
	 * @return {Array} ExpertiseTypes with no parent
	 */
	getRootExpertiseTypes() {
		return this.getExpertiseTypesWithParent(null);
	}

	/**
	 * Loads the next column of a Problem Type picker
	 *
	 * @param {DOM} $typeColumns The div containing .type-column's
	 * @param {DOM} $clickedLi the LI that was clicked and needs to load
	 */
	loadChildrenExpertiseTypes($typeColumns, $clickedLi = null) {
		let $typeColumn = $('<div class="type-column"></div>'),
			clickedExpertiseTypeChildren;

		if ($clickedLi) {
			let clickedExpertiseTypeId = Number($clickedLi.data('expertiseTypeId'));

			clickedExpertiseTypeChildren = this.getExpertiseTypesWithParent(clickedExpertiseTypeId);

			// $clickedLi.closest('.form-group').find('span.subtle').text(this.getExpertiseTypeBreadcrum(expertiseType));

			$clickedLi.parent().nextAll().remove();
			$clickedLi.parent().find('li.active').removeClass('active');
			$clickedLi.parent().parent().find('li.last-active').removeClass('last-active');
			$clickedLi.addClass('active last-active');
		} else {
			clickedExpertiseTypeChildren = this.getRootExpertiseTypes();
		}

		// let specialists = this.staffManager.getSpecialists(children.map(child => child.id));

		clickedExpertiseTypeChildren.forEach((child, i) => {
			$typeColumn.append(
				'<li ' + (child.children.length === 0 ? 'class="no-children"' : '') + ' data-expertise-type-id="' + child.id + '">' +
					child.name +
					'<div class="specialist-counter">' +
						/*(specialists[i].length > 0 ? specialists[i].length + ' <i class="fa fa-user"></i>' : '<i class="fa fa-user-times"></i>') +*/'<i class="fa fa-user-times"></i>' +
					'</div>' +
					'<i class="fa fa-caret-right"></i>' +
				'</li>'
			);
		});

		// Append the new .type-column, scroll to the right to view it
		if (clickedExpertiseTypeChildren.length > 0) $typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

	/**
	 * Loads a specific ExpertiseType with a .id
	 * Loads ExpertiseTypes from the parent down to the clicked one
	 *
	 * @param DOM $typeColumns The div containing .type-column's
	 * @param {Integer} expertiseTypeId
	 */
	loadExpertiseType($typeColumns, expertiseTypeId) {
		$typeColumns.empty();

		// load root Expertise Types
		this.loadChildrenExpertiseTypes($typeColumns);


		let expertiseTypeChain = this.getExpertiseTypeChain(expertiseType);

		// load ExpertiseType from the parent down to the clicked one
		for (let i = expertiseTypeChain.length - 2; i >= -1; i--) {
			problemTypePage.loadChildrenExpertiseTypes($typeColumns, $typeColumns.find('.type-column li[data-expertise-type-id="' + expertiseTypeChain[i + 1].id + '"]'));
		}
	}
}