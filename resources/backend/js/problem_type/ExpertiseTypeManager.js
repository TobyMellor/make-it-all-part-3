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

	/**
	 * Handles the "Create Problem Type" button click
	 *     - Creates an input field
	 *     - Changes the button color/text
	 *
	 * @param {DOM} $button the clicked button 
	 */
	showCreateExpertiseTypeField($button) {
		let $typeColumn = $button.parent(),
			$input      = $('<input type="text" name="name" value="New Problem Type" placeholder="New Problem Type…" autocomplete="off">');

		// if for some reason an input field is already there, remove it
		// add the new $input field and select the text
		$typeColumn.find('input').remove();
		$input.insertBefore($button);
		$input.select();

		// change the text/color of the button to indicate to the user
		// that this is how to submit the problem type
		$button
			.add('#create-problem-type')
			.prop('disabled', true)
			.removeClass()
			.addClass('button button-success')
			.text('Submit new problem type');
	}

	/**
	 * Handles the keyup event on the input field
	 *     - Disables the button of the length of the text is invalid
	 *
	 * @param {DOM} $input the input field the user is typing in
	 */
	handleCreateExpertiseTypeField($input) {
		let $button = $input.siblings('button').add('#create-problem-type');

		// the name of the new ExpertiseType must be between 2 and 256
		$button.prop('disabled', $input.val().length <= 2 || $input.val().length >= 256);
	}

	/**
	 * Stores a new Expertise Type in the database
	 *
	 * @param {String} name of the problem
	 * @param {Integer} parentId ID of the parent expertise type
	 */
	createExpertiseType(name, parentId) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/problem-type',
			type: 'POST',
			data: {
				name: name,
				parent_id: parentId
			}
		})
		.done((expertiseTypeId) => {
			// keep this manager up to date
			this.expertiseTypes.push({
				id: expertiseTypeId,
				name: name,
				parent_id: parentId,
				children: []
			});

			if (parentId !== null) this.getExpertiseType(parentId).children.push(expertiseTypeId);
		});
	}

	/**
	 * Renames an Expertise Type in the database
	 *
	 * @param {Integer} id of the Expertise Type to rename
	 * @param {String} name the new name
	 */
	renameExpertiseType(id, name) {
		let expertiseType = this.getExpertiseType(id);

		return $.ajax({
			url: '/wp-json/make-it-all/v1/problem-type/' + id,
			type: 'PUT',
			data: {
				name: name,
				parent_id: expertiseType.parent_id
			}
		})
		.done(() => {
			// keep this manager up to date
			expertiseType.name = name;
		});
	}

	/**
	 * Updates an Expertise Type parent in the database
	 *
	 * @param {Integer} id of the Expertise Type to update
	 * @param {Integer} id new id of the parent Expertise Type
	 */
	updateExpertiseTypeParent(id, parentId) {
		let expertiseType = this.getExpertiseType(id);

		this.removeParentReferences(id);
		expertiseType.parent_id = parentId;

		if (parentId !== null) {
			let parentExpertiseType = this.getExpertiseType(parentId);

			parentExpertiseType.children.push(id);
		}

		return $.ajax({
			url: '/wp-json/make-it-all/v1/problem-type/' + expertiseType.id,
			type: 'PUT',
			data: {
				name: expertiseType.name,
				parent_id: parentId
			}
		})
		.done(() => {
			// expertiseType.parent_id = parentId;
		});
	}

	/**
	 * Deletes an Expertise Type from the database
	 *
	 * @param {Integer} id of the Expertise Type to delete
	 */
	deleteExpertiseType(id) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/problem-type/' + id,
			type: 'DELETE'
		})
		.done(() => {
			this.removeParentReferences(id);

			this.expertiseTypes.some((expertiseType, i) => {
				if (expertiseType.id == id) {
					this.expertiseTypes.splice(i, 1); return;
				}
			});
		});
	}

	/**
	 * Locally removes an Expertise Type completely from this.expertiseTypes
	 *
	 * @param {Integer} childId of the Expertise Type to remove locally
	 */
	removeParentReferences(childId) {
		let parentId = this.getExpertiseType(childId).parent_id;

		if (parentId !== null) {
			let children = this.getExpertiseType(parentId).children;

			children.some((expertiseType, i) => {
				if (expertiseType.id == childId) {
					children.splice(i, 1); return;
				}
			});
		}
	}
}