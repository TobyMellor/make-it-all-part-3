<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketStatusQuery extends MakeItAllQuery {
	protected $table = 'ticket_status';

	public function insert($ticketId, $statusId, $staffId) {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}{$this->table}`
					(
						`ticket_id`,
						`status_id`,
						`staff_id`
						`created_at`,
						`updated_at`
					)
				VALUES
					(%d, %d, %d, %s, %s)
			",
			[$ticketId, $statusId, $staffId]
		);
	}
}