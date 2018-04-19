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
		$breadcrumb        = $('.finder-window .problem-type-picker-header p'),
		clickedExpertiseTypeChildren, specialists;

	$breadcrumb.html('<i class="fa fa-warning"></i> Create a Problem Type to get started');

	if ($clickedLi) {
		let clickedExpertiseTypeId = Number($clickedLi.data('expertiseTypeId'));

		clickedExpertiseTypeChildren = this.getExpertiseTypesWithParent(clickedExpertiseTypeId);

		$breadcrumb.html(this.getExpertiseTypeBreadcrumb(clickedExpertiseTypeId));

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
	if (!window.employees || !window.expertiseTypes || !window.expertiseTypeStaff) return;
	
	let staffManager         = window.staffManager         = new StaffManager(employees, 1, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);

	if (expertiseTypeManager.expertiseTypes.length) {
		expertiseTypeManager.loadExpertiseType($('.type-columns'), expertiseTypeManager.expertiseTypes[0].id);
	} else {
		$('.mia-panel-short .problem-type-actions > .row')
			.hide()
			.next()
			.show();
	}

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {

		// show the children of the selected type in the main view
		expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));
	});

	$(document).on('click', '.type-column button:not(.button-success)', function() {
		expertiseTypeManager.showCreateExpertiseTypeField($(this));
	});

	$(document).on('keyup', '.type-column input', function() {
		expertiseTypeManager.handleCreateExpertiseTypeField($(this));
	});

	$(document).on('click', '.type-column button.button-success', function() {
		let $button            = $(this),
			$input             = $button.siblings('input'),
			$invalidFeedback   = $button.siblings('.invalid-feedback'),
			name               = $input.val(),
			parentId           = $input.parent().prev().find('.active').data('expertiseTypeId') || null,
			$createProblemType = $('#create-problem-type');

		$button.add($createProblemType).prop('disabled', true);

		// remove any previous validation errors
		$invalidFeedback.remove();

		expertiseTypeManager.createExpertiseType(name, parentId)
			.fail((xhr) => {
				// insert only the first validation error (should only be one anyway)
				$('<div class="invalid-feedback">')
					.text(xhr.responseJSON.message[0])
					.insertAfter($input);

				$input.focus();
				$button.add($createProblemType).prop('disabled', false);
			})
			.done((expertiseTypeId) => {
				$input.remove();

				let $newProblemType = $(`
					<li class="no-children" data-expertise-type-id="${expertiseTypeId}">
						${name}
						<div class="specialist-counter">
							<i class="fa fa-user-times"></i>
						</div>
					</li>
				`);

				$button
					.add($createProblemType)
					.prop('disabled', false)
					.removeClass()
					.addClass('button');

				$button.text('Create problem type');
				$createProblemType.text('Create within');
					
				$newProblemType.insertBefore($button);
				
				// show new problem type
				$newProblemType.click();

				$createProblemType
					.closest('.row')
					.show()
					.next()
					.hide();
			});
	});

	$('#create-problem-type').click(() => $('.type-columns .last-active').parent().next().find('button').click());

	$(document).on('click', '#rename-problem-type:not(.button-success)', function() {
		let id     = $('.type-columns li.last-active').data('expertiseTypeId'),
			$input = $(this).prev();

		$(this)
			.addClass('button-success')
			.text('Submit name')
			.parent()
			.addClass('renaming-problem-type')

		$input.val(expertiseTypeManager.getExpertiseType(id).name);
		$input.select();
	});

	$(document).on('keyup', '.renaming-problem-type input', function() {
		let $button = $(this).siblings('button');

		// the name of the new ExpertiseType must be between 2 and 256
		$button.prop('disabled', $(this).val().length <= 2 || $(this).val().length >= 256);
	});

	$(document).on('click', '#rename-problem-type.button-success', function() {
		let id                 = $('.type-columns li.last-active').data('expertiseTypeId'),
			$input             = $(this).prev(),
			name               = $input.val(),
			$renameProblemType = $('#rename-problem-type');

		$renameProblemType.prop('disabled', true)
			.parent()
			.siblings('.invalid-feedback')
			.remove();

		expertiseTypeManager.renameExpertiseType(id, name)
			.fail((xhr) => {
				$('<div class="invalid-feedback">')
					.text(xhr.responseJSON.message[0])
					.insertAfter($renameProblemType.parent());

				$renameProblemType.prev().focus();

				$renameProblemType.prop('disabled', false);
			})
			.done(() => {
				$renameProblemType
					.text('Rename')
					.removeClass('button-success')
					.prop('disabled', false)
					.parent()
					.removeClass('renaming-problem-type');

				expertiseTypeManager.loadExpertiseType($('.type-columns'), id);
			});
	});

	$(document).on('click', '#delete-problem-type', function() {
		if (!confirm('Are you sure you want to delete that Problem Type?')) return;

		let id                 = $('.type-columns li.last-active').data('expertiseTypeId'),
			$deleteProblemType = $('#delete-problem-type');

		$deleteProblemType.prop('disabled', true);

		expertiseTypeManager.deleteExpertiseType(id)
			.done(() => {
				let $removedLi = $('li.last-active'),
					$nextLi    = $removedLi.siblings('li').first();

				if ($nextLi.length === 0) {
					$nextLi = $removedLi.parent().prev().find('.active');
				}

				$removedLi.remove();

				if ($nextLi.length === 0) {
					let $typeColumns = $('.type-columns');

					$typeColumns.empty();
					expertiseTypeManager.loadChildrenExpertiseTypes($typeColumns);
				} else {
					$nextLi.click();
				}

				$deleteProblemType.prop('disabled', false);

				let $actions       = $deleteProblemType.closest('.row'),
					$createMessage = $actions.next(),
					[$show, $hide] = expertiseTypeManager.expertiseTypes.length ? [$actions, $createMessage] : [$createMessage, $actions];

				$show.show();
				$hide.hide();
			});
	});
});