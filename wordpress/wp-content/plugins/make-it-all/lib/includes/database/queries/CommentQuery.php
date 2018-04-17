<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

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
}