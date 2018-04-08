<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketDeviceQuery extends MakeItAllQuery {
	protected $table = 'ticket_device';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($ticketId, $deviceId) {
		return $this->mia_insert(
			[
				'ticket_id' => $ticketId,
				'device_id' => $deviceId
			]
		);
	}
}