<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\TicketQuery;

use Respect\Validation\Validator as v;

class CommentQuery extends Query {
	protected $table = 'comment';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($content, $ticketId, $authorId, $callId) {
		return $this->mia_insert(
			[
				'content'   => $content,
				'ticket_id' => $ticketId,
				'author_id' => $authorId,
				'call_id'   => $callId
			]
		);
	}

	public function get_comments_by_ticket_id($ticketId) {
		return $this->get_results(
			"
				SELECT
					comment.id,
					comment.content,
					users.display_name AS author,
					comment.author_id,
					comment.call_id,
					comment.created_at,
					comment.updated_at
				FROM {$this->prefix}comment AS comment
				JOIN {$this->rawPrefix}users AS users
					ON users.id = comment.author_id
				JOIN {$this->prefix}ticket AS ticket
					ON ticket.id = comment.ticket_id
				WHERE ticket.id = {$ticketId}
				ORDER BY (comment.id = ticket.solution_id) DESC
			"
		);
	}

	public function toggle_solution($commentId) {
		$ticket = $this->get_results(
			"
				SELECT
					ticket.id,
					ticket.solution_id,
					ticket.title,
					ticket.description,
					ticket.author_id,
					ticket.assigned_to_operator_id,
					ticket.expertise_type_id,
					ticket.assigned_to_specialist_id
				FROM {$this->prefix}ticket AS ticket
				JOIN {$this->prefix}comment AS comment
					ON ticket.id = comment.ticket_id
				WHERE comment.id = {$commentId}
			"
		)[0];

		$newSolutionId = $ticket->solution_id == $commentId ? null : $commentId;

		return (new TicketQuery)->mia_update($ticket->id, [
			'solution_id'               => $newSolutionId,
			'title'                     => $ticket->title,
			'description'               => $ticket->description,
			'author_id'                 => $ticket->author_id,
			'assigned_to_operator_id'   => $ticket->assigned_to_operator_id,
			'expertise_type_id'         => $ticket->expertise_type_id,
			'assigned_to_specialist_id' => $ticket->assigned_to_specialist_id
		]);
	}

	/**
	 * Validation for Comment
	 *    - Content: String, Length between 2 and 65535
	 *    - Ticket ID: Integer
	 *    - Author ID: Integer
	 *    - Call ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('content', v::stringType()->length(2, 65535))
			->key('ticket_id', v::intVal())
			->key('author_id', v::intVal())
			->key('call_id',   v::optional(v::intVal()));

		return $this->assert_validation($validator, $columns);
	}
}