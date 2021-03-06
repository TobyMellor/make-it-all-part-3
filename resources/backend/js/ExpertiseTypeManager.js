export default class ExpertiseTypeManager {
	constructor(expertiseTypes, expertiseTypeStaff, staffManager) {
		this.expertiseTypes     = expertiseTypes;
		this.expertiseTypeStaff = expertiseTypeStaff;
		this.staffManager       = staffManager;

		// load root problem types
		this.loadChildrenExpertiseTypes($('.type-columns'));
	}

	/**
	 * Get a ExpertiseType with a given .id
	 *
	 * @param {Integer} expertiseTypeId ID of ExpertiseType
	 * @return {Object} ExpertiseType with given ID, or null if not found
	 */
	getExpertiseType(expertiseTypeId) {
		return this.expertiseTypes.find(expertiseType => expertiseType.id == expertiseTypeId) || null;
	}

	/**
	 * Get all ExpertiseType's with a given .parent_id
	 *
	 * @param {Integer} parentId ID of parent ExpertiseType
	 * @return {Array} ExpertiseType with corresponding parent
	 */
	getExpertiseTypesWithParent(parentId) {
		return this.expertiseTypes.filter(expertiseType => expertiseType.parent_id == parentId);
	}

	/**
	 * Get an Expertise Type Staff
	 *
	 * @param {Integer} userId ID of staff
	 * @param {Integer} expertiseTypeId ID of ExpertiseType
	 * @return {Object} ExpertiseTypeStaff
	 */
	getExpertiseTypeStaff(userId, expertiseTypeId) {
		return this.expertiseTypeStaff.find(ets => ets.user_id == userId && ets.expertise_type_id == expertiseTypeId) || null;
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
			clickedExpertiseTypeChildren, specialists;

		if ($clickedLi) {
			let clickedExpertiseTypeId = Number($clickedLi.data('expertiseTypeId'));

			clickedExpertiseTypeChildren = this.getExpertiseTypesWithParent(clickedExpertiseTypeId);

			$clickedLi.parent().nextAll().remove();
			$clickedLi.parent().find('li.active').removeClass('active');
			$clickedLi.parent().parent().find('li.last-active').removeClass('last-active');
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

		let expertiseTypeChain = this.getExpertiseTypeChain(expertiseTypeId);

		// load ExpertiseType from the parent down to the clicked one
		for (let i = expertiseTypeChain.length - 2; i >= -1; i--) {
			this.loadChildrenExpertiseTypes($typeColumns, $typeColumns.find('.type-column li[data-expertise-type-id="' + expertiseTypeChain[i + 1].id + '"]'));
		}
	}

	/**
	 * Get ordered array of parents of an ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId starting ExpertiseType id to find parents from
	 * @return {Array} Array of ExpertiseType parents, and the starting ExpertiseType
	 */
	getExpertiseTypeChain(expertiseTypeId) {
		let expertiseTypeParent = this.getExpertiseType(expertiseTypeId),
			expertiseTypes      = [expertiseTypeParent];

		while (expertiseTypeParent != null) {
			expertiseTypeParent = this.getExpertiseType(expertiseTypeParent.parent_id);

			if (expertiseTypeParent != null) {
				expertiseTypes.push(expertiseTypeParent);
			}
		}

		return expertiseTypes;
	}

	/**
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
			breadcrumb = `
				<li>
					<a href="admin.php?page=problem_type&id=${expertiseTypeParent.id}">${expertiseTypeParent.name}</a>
					<i class="fa fa-caret-right"></i>
				</li>
			` + breadcrumb;

			expertiseTypeParent = this.getExpertiseType(expertiseTypeParent.parent_id);
		}

		return breadcrumb;
	}
}