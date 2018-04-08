<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class CommentQuery extends MakeItAllQuery {
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