<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketProgramQuery extends MakeItAllQuery {
	protected $table = 'ticket_program';

	public function insert($ticketId, $programId) {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}{$this->table}`
					(
						`ticket_id`,
						`program_id`,
						`created_at`,
						`updated_at`
					)
				VALUES
					(%d, %d, %s, %s)
			",
			[$ticketId, $programId]
		);
	}
}