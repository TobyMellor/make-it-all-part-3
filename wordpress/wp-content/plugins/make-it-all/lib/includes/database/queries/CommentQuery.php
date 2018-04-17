<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
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