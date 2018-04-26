import CommentManager from "../CommentManager";

$(() => {
	let $heading = $('.mia-panel-heading'),
		$select  = $heading.find('select'),
		$img     = $heading.find('img');
		
	tickets.forEach(ticket => {
		$select.append(`
			<option value="${ticket.id}">#${ticket.id} – ${ticket.title}</option>
		`);
	});

	$('#change-ticket option[value="' + (!ticket ? "" : ticket.id) + '"]').prop('selected', true);
	
	$('#change-ticket').change(function() {
		let ticketId = $(this).val();

		window.location.href = window.location.pathname + '?page=ticket_update&id=' + ticketId;
	});

	if (!ticket) {
		sessionStorage.setItem('shouldShowArrow', true); return;
	}

	// arrow functionality, don't show the arrow if they accessed the page directly
	if (sessionStorage.getItem('shouldShowArrow')) {
		sessionStorage.removeItem('shouldShowArrow');

		$img.css('opacity', 0.1);
		setTimeout(() => $img.css('width', 0), 2500);
	} else {
		$img.hide();
	}

	$('input[name="ticket[id]"]').val(ticket.id);
	$('input[name="ticket[solution_id]"]').val(ticket.solution_id || "");

	loadTicket($('.accordion-handle, .accordion-body'), ticket, expertiseTypeManager, staffManager, affectedItemsManager);

	$(document).on('change', '.accordions select[name="ticket[status]"]', function() {
		let $setSolution = $(this).closest('.accordion-body').find('.set-solution');

		if ($(this).val() == 3) {
			$setSolution.slideDown();
		} else {
			$setSolution.slideUp();
		}
	});

	let commentManager = window.commentManager = new CommentManager(staffManager.currentEmployeeId, ticket.id);

	$('.create-comment-section input').val('');

	$(document).on('click', '.toggle-solution', function() {
		let id = $(this).closest('.comment').data('commentId');

		commentManager.toggleSolution(id)
			.done(() => {
				location.reload();
			});
	});

	$(document).on('click', '.delete-comment', function() {
		if (!confirm('Are you sure you want to delete this comment?')) return;

		let id = $(this).closest('.comment').data('commentId');

		commentManager.deleteComment(id)
			.done(() => {
				$(this).closest('.comment').fadeOut(250, function() {
					$(this).remove();

					let $comments = $('#comments');

					if ($comments.find('.comment').length === 0) {
						$comments.prepend(`<p class="no-affected-items">No comments have been left yet</p>`)
					}
				});
			});
	});

	$(document).off('.create-comment-section form');
	$(document).on('submit', '#submit-comment', function(e) {
		e.preventDefault();

		if (!$(this).serializeObject(true).isValid()) return;

		let content = tinyMCE.get('comment').getContent();

		commentManager.createComment(content)
			.done(commentId => {
				$('#comments')
					.append(
						$(`
							<div class="comment" style="display: none;" data-comment-id="${commentId}">
								<div>
									<a href="user-edit.php?user_id=${user.id}">
										<img src="${user.avatar.abs_url}" alt="${user.display_name}">
									</a>
									<i class="fa fa-check toggle-solution checked"></i>
									<i class="fa fa-trash-o delete-comment"></i>
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
						`).fadeIn(250)
					)
					.find('.no-affected-items')
					.remove();

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