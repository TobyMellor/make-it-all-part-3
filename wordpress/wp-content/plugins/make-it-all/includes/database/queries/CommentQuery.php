<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class CommentQuery extends MakeItAllQuery {
	protected $table = 'comment';

	public function get() {
		//
	}

	public function insert($content, $ticketId, $authorId, $callId) {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}{$this->table}`
					(
						`content`,
						`ticket_id`,
						`author_id`,
						`call_id`
						`created_at`,
						`updated_at`
					)
				VALUES
					(%s, %d, %d, %d, %s, %s)
			",
			[$content, $ticketId, $authorId, $callId]
		);
	}
}