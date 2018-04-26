import CommentManager from "../CommentManager";

$(() => {
	if (!window.ticket) return;

	let commentManager = window.commentManager = new CommentManager(staffManager.currentEmployeeId, ticket.id);

	$('.breadcrumb').html(expertiseTypeManager.getExpertiseTypeBreadcrumb(ticket.expertise_type_id));

	if (ticket.assigned_to_operator_id === null) {
		$('input[name="ticket[assigned_to_type]"][value="specialist"]').click();
	} else if (ticket.assigned_to_operator_id == staffManager.currentEmployee.id) {
		$('input[name="ticket[assigned_to_type]"][value="self"]').click();
	} else {
		$('input[name="ticket[assigned_to_type]"][value="operator"]').click();
		$('select[name="ticket[assigned_to_operator]"] option[value="' + ticket.assigned_to_operator_id + '"]').click();
	}

	$(document).off('click', '.assign-options label');
	$('.assign-options label input').click(() => false);

	// override the addAffectedItem function in AffectedItemsManager
	// purpose of this is to add a view button instead of a remove button (and remove unused functionality)
	affectedItemsManager.addAffectedItem = (function($selectField) {
		let $affectedItems   = $selectField.siblings('.affected-items'), // where we should put the new <li>
			affectedItemType = $selectField.hasClass('add-hardware-device') ? 'devices' : 'programs', // is the new li a device, or app/OS?
			affectedItems    = this[affectedItemType], // this.devices or this.programs
			affectedItem     = this.getAffectedItem(affectedItems, Number($selectField.val())); // contains the info we need, e.g. .name, .id;

		$affectedItems.append(`
			<li>
				<h4>${affectedItem.name || affectedItem.type}</h4>
				<p>(${this.getTypeName(affectedItem)})</p>
				<a class="button button-primary" href="javascript: void(0);">
					<i class="fa fa-search"></i> View
				</a>
			</li>
		`);

		$selectField.parent().find('.no-affected-items').hide();
	});

	let $addHardwareDevice  = $('.add-hardware-device'),
		$addSoftwareProgram = $('.add-application, .add-operating-system');

	ticket.devices.forEach((deviceId) => {
		$addHardwareDevice.find('option[value="' + deviceId + '"]').prop('selected', true);
		affectedItemsManager.addAffectedItem($addHardwareDevice);
	});

	ticket.programs.forEach((programId) => {
		// this will only return the select field that was changed
		// e.g. if it's an OS ID, no option exists within the applications select
		let $select = $addSoftwareProgram
						.find('option[value="' + programId + '"]')
						.prop('selected', true)
						.parent();

		affectedItemsManager.addAffectedItem($select);
	});

	$('.create-comment-section input').val('');

	$(document).on('click', '.delete-comment', function() {
		if (!confirm('Are you sure you want to delete this comment?')) return;

		let id = $(this).closest('.comment').data('commentId');

		commentManager.deleteComment(id)
			.done(() => {
				$(this).closest('.comment').fadeOut(250, function() {
					$(this).remove();
				});
			});
	});

	$(document).off('form');
	$(document).on('submit', '#submit-comment', function(e) {
		e.preventDefault();
		
		if (!$(this).serializeObject(true).isValid()) return;

		let content = tinyMCE.get('comment').getContent();

		commentManager.createComment(content)
			.done((commentId) => {
				$('#comments').append($(`
					<div class="comment" style="display: none;" data-comment-id="${commentId}">
						<div>
							<a href="user-edit.php?user_id=${user.id}">
								<img src="${user.avatar.abs_url}" alt="${user.display_name}">
							</a>
							<i class="fa fa-check toggle-solution checked"></i>
							<i class="fa fa-trash-o delete-comment"></i>
							<i class="fa fa-pencil edit-comment"></i>
						</div>
						<div>
							<div class="row no-padding">
								<div class="col-xs-12 comment-header">
									<a href="user-edit.php?user_id=${user.id}">
										<h1>${user.display_name}</h1>
									</a>
									<p>Just now</p>
								</div>
								<div class="col-xs-12 comment-body">
									${content}
									<div></div>
								</div>
							</div>
						</div>
					</div>
				`).fadeIn());

				$(this).closest('.create-comment-section').removeClass('commenting');
			});
	});

	$(document).on('focus', '.small-comment-box input', function() {
		$(this).closest('.create-comment-section').addClass('commenting');

		let scrollTop = $(window).scrollTop();

		tinyMCE.get('comment').focus();
		tinyMCE.get('comment').setContent('');

		setTimeout(function(){
			if (scrollTop === $(window).scrollTop()) { // only scroll if the user hasn't
				$('html, body').animate(
					{ 
						scrollTop: $(document).height() - $(window).height()
					}, 
					300
				);
			}
		}, 300);
	});
});