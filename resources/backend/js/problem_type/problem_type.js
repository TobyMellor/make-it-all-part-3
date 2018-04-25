import ExpertiseTypeManager from "./ExpertiseTypeManager";
import StaffManager from "../StaffManager";
import DragController from "./DragController";

$(() => {
	if (!window.employees || !window.expertiseTypes || !window.expertiseTypeStaff) return;

	let staffManager         = window.staffManager         = new StaffManager(employees, 1, expertiseTypes, expertiseTypeStaff);
	let expertiseTypeManager = window.expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes, expertiseTypeStaff, staffManager);

	init();

	let dragController = window.dragController = new DragController();

	$(function() {
		$(document).on('dragstop', function(e, $dragging, $elementDraggedInto) {
			$dragging.show();

			let id = $dragging.data('expertiseTypeId');

			// try to move to new location
			if ($elementDraggedInto) {
				let $parent  = $elementDraggedInto.prev().find('.active'),
					parentId = $parent.data('expertiseTypeId') || null;

				$elementDraggedInto.prepend($dragging.detach());
				
				expertiseTypeManager.updateExpertiseTypeParent(id, parentId)
					.done(() => expertiseTypeManager.loadExpertiseType($('.type-columns'), id));
			} else {
				if ($dragging.hasClass('danger')) {
					// dragged outside, so attempt to delete
					expertiseTypeManager.loadExpertiseType($('.type-columns'), id);
					$('#delete-problem-type').click();
				}
			}
		});
	});

	// on clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		loadExpertiseType($(this).data('expertiseTypeId'), () => {
			return expertiseTypeManager.loadChildrenExpertiseTypes($(this).closest('.type-columns'), $(this));
		});
	});

	// clicking on a problem on the left side bar
	$('.recent-problems li').click(function() {
		loadExpertiseType($(this).data('expertiseTypeId'));
	});

	// clicking the grey "Create problem type" button
	$(document).on('click', '.type-column button:not(.button-success)', function() {
		expertiseTypeManager.showCreateExpertiseTypeField($(this));
	});

	// keypresses when typing in a new problem type name
	$(document).on('keyup', '.type-column input', function() {
		expertiseTypeManager.handleCreateExpertiseTypeField($(this));
	});

	// clicking the green "Submit new problem type" button
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

		let fail = (message => {
			// insert only the first validation error (should only be one anyway)
			$('<div class="invalid-feedback">')
				.text(message)
				.insertAfter($input);

			$input.focus();
			$button.add($createProblemType).prop('disabled', false);
		});

		$button.siblings('li').each(function() {
			let id = $(this).data('expertiseTypeId');

			if (expertiseTypeManager.getExpertiseType(id).name == name) {
				fail('You have another problem with this name on the same level'); return false;
			}
		});

		if ($button.prop('disabled')) {
			expertiseTypeManager.createExpertiseType(name, parentId)
				.fail(xhr => fail(xhr.responseJSON.message[0]))
				.done(expertiseTypeId => {
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
		}
	});

	// redirect the "Create" within button under "Problem Type Actions"
	$('#create-problem-type').click(() => $('.type-columns .last-active').parent().next().find('button').click());

	// clicking on "Rename" under "Problem Type Actions"
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

	// when typing in the rename field, disable/enable the input field accordingly
	$(document).on('keyup', '.renaming-problem-type input', function() {
		// the name of the new ExpertiseType must be between 2 and 256
		$(this)
			.siblings('button')
			.prop('disabled', $(this).val().length <= 2 || $(this).val().length >= 256);
	});

	// clicking on the submit button next to the rename field
	$(document).on('click', '#rename-problem-type.button-success', function() {
		let $lastActive        = $('.type-columns li.last-active'),
			id                 = $lastActive.data('expertiseTypeId'),
			$input             = $(this).prev(),
			name               = $input.val(),
			$renameProblemType = $('#rename-problem-type');

		$renameProblemType.prop('disabled', true)
			.parent()
			.siblings('.invalid-feedback')
			.remove();

		let fail = (message => {
			// insert only the first validation error (should only be one anyway)
			$('<div class="invalid-feedback">')
				.text(message)
				.insertAfter($renameProblemType.parent());

			$renameProblemType.prev().focus();
			$renameProblemType.prop('disabled', false);
		});

		$lastActive.siblings('li').each(function() {
			let id = $(this).data('expertiseTypeId');
			
			if (expertiseTypeManager.getExpertiseType(id).name == name) {
				fail('You have another problem with this name on the same level'); return false;
			}
		});

		if ($renameProblemType.prop('disabled')) {
			expertiseTypeManager.renameExpertiseType(id, name)
				.fail(xhr => fail(xhr.responseJSON.messages[0]))
				.done(() => {
					$renameProblemType
						.text('Rename')
						.removeClass('button-success')
						.prop('disabled', false)
						.parent()
						.removeClass('renaming-problem-type');

					expertiseTypeManager.loadExpertiseType($('.type-columns'), id);
				});
		}
	});

	// clicking "Delete problem type"
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

	$('.searching-problem-types input').keyup(function() {
		let query          = $(this).val(),
			$finderWindow  = $('.finder-window'),
			$table         = $('#search-table');
		
		let [$show, $hide] = query.length > 2 ? [$table, $finderWindow] : [$finderWindow, $table];

		if (query.length > 2) {
			let $tbody  = $table.find('tbody'),
				matches = expertiseTypeManager.expertiseTypes.filter(expertiseType => expertiseType.name.toLowerCase().includes(query.toLowerCase()));

			$tbody.empty();

			if (matches.length) {
				matches.forEach(match => $tbody.append(
					`	
						<tr data-expertise-type-id="${match.id}">
							<td class="has-row-actions">
								${expertiseTypeManager.getExpertiseTypeBreadcrumb(match.id)}
								<div class="row-actions visible">
									<span class="view">
										<a href="javascript:void(0);">View</a> |
									</span>
									<span class="delete">
										<a href="javascript:void(0);">Delete</a>
									</span>
								</div>
							</td>
							<td>${staffManager.getSpecialistsOfSpecialism(match.id).length}</td>
						</tr>
					`
				));
			} else {
				$tbody.html(`
					<tr class="no-items">
						<td colspan="2">
							No items found.
						</td>
					</tr>
				`);
			}
		}

		if (!$show.is(':visible')) {
			$hide.fadeOut(250, () => $show.fadeIn(250));
		}
	});

	$(document).on('click', 'tr .view', function() {
		let id = $(this).closest('tr').data('expertiseTypeId');

		expertiseTypeManager.loadExpertiseType($('.type-columns'), id);
		$('.searching-problem-types input').val('').trigger('keyup');
	});

	$(document).on('click', 'tr .delete', function() {
		let id = $(this).closest('tr').data('expertiseTypeId');

		expertiseTypeManager.loadExpertiseType($('.type-columns'), id);
		$('.searching-problem-types input').val('').trigger('keyup');
		$('#delete-problem-type').click();
	});

	// load the initial problem types. If not present, hide "Problem Type Actions"
	function init() {
		if (expertiseTypeManager.expertiseTypes.length) {
			loadExpertiseType(expertiseTypeManager.expertiseTypes[0].id);
		} else {
			$('.mia-panel-short .problem-type-actions > .row')
				.hide()
				.next()
				.show();
		}
	}

	// loads the ExpertiseType based on the ID, updates the right panels
	function loadExpertiseType(
		id,
		loadFunction = () => expertiseTypeManager.loadExpertiseType($('.type-columns'), id)
	) {
		loadFunction();
		updatePanelInfo(id);
	}

	// functionality for the "Specialists of this Problem" right panel
	function updatePanelInfo(expertiseTypeId) {
		let $specialistsTbody = $('#problem-specialists'),
			$specialistsPanel = $('.problem-specialists-panel'),
			$table            = $specialistsPanel.find('table'),
			$noSpecialists    = $specialistsPanel.find('#no-specialists'),
			$parentSpecialist = $specialistsPanel.find('#parent-specialist'),
			specialists       = staffManager.getSpecialistsOfSpecialism(expertiseTypeId),
			$show, $hide;

		// if this problem type has no specialists
		if (!specialists.length) {
			let expertiseType = expertiseTypeManager.getExpertiseType(expertiseTypeId);

			// attempt to find a parent problem with specialists
			while (!specialists.length && expertiseType.parent_id != null) {
				expertiseType = expertiseTypeManager.getExpertiseType(expertiseType.parent_id);
				specialists   = staffManager.getSpecialistsOfSpecialism(expertiseType.id);
			}

			// if one of the parents have specialists, show the specialists and a message
			if (specialists.length) {
				[$show, $hide] = [$parentSpecialist.add($table), $noSpecialists];

				$parentSpecialist.html('Showing specialists for<br />' + expertiseTypeManager.getExpertiseTypeBreadcrumb(expertiseType.id))
			} else {
				[$show, $hide] = [$noSpecialists, $parentSpecialist.add($table)];
			}
		} else {
			[$show, $hide] = [$table, $noSpecialists.add($parentSpecialist)]; // show the no specialists available message
		}

		$specialistsTbody.empty();

		if (specialists.length) {
			specialists.sort((a, b) => a.open_tickets > b.open_tickets);

			specialists.forEach((specialist, i) => {
				$specialistsTbody.append(`
					<tr>
						<td>
							<strong>${specialist.display_name}</strong>
							<div class="row-actions visible">
								<span class="edit">
									<a href="javascript:void(0);">View</a>
								</span>
							</div>
						</td>
						<td>${specialist.tickets}</td>
						<td>${specialist.open_tickets}</td>
						${i === 0 ? `
							<td class="contains-filter">
								<span class="filter">
									Available
								</span>
							</td>
						` : `<td></td>`}
					</tr>
				`);
			});
		}

		$hide.fadeOut(250, function() {
			$show.fadeIn(250);
		});
	}
});