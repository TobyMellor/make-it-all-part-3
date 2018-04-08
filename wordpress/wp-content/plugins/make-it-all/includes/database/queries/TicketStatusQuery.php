<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketStatusQuery extends MakeItAllQuery {
	protected $table = 'ticket_status';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($ticketId, $statusId, $staffId) {
		return $this->mia_insert(
			[
				'ticket_id' => $ticketId,
				'status_id' => $statusId,
				'staff_id'  => $staffId
			]
		);
	}
}