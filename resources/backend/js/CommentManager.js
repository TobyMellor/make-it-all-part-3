export default class CommentManager {
	constructor(currentUserId, currentTicketId, currentCallId = null) {
		this.currentUserId   = currentUserId;
		this.currentTicketId = currentTicketId;
		this.currentCallId   = currentCallId;
	}
	/**
	 * Stores a new comment in the database
	 *
	 * @param {String} content text body of the comment
	 */
	createComment(content) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/comment',
			type: 'POST',
			data: {
				content: content,
				ticket_id: this.currentTicketId,
				author_id: this.currentUserId,
				call_id: this.currentCallId
			}
		});
	}

	/**
	 * Stores a new comment in the database
	 *
	 * @param {String} content text body of the comment
	 */
	deleteComment(commentId) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/comment/' + commentId,
			type: 'DELETE'
		});
	}

	toggleSolution(commentId) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/comment-toggle-solution/' + commentId,
			type: 'PUT'
		});
	}
}