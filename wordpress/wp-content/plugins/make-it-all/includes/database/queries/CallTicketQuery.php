<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class CallTicketQuery extends MakeItAllQuery {
	protected $table = 'call_ticket';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($callId, $ticketId) {
		return $this->mia_insert(
			[
				'call_id'   => $callId,
				'ticket_id' => $ticketId
			]
		);
	}
}