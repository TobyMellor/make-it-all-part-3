<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketDeviceQuery extends MakeItAllQuery {
	protected $table = 'ticket_device';
	
	/**
	 * Get all device ids belonging to a ticket.
	 *
	 * @return Array
	 */
	public function get_device_ids_by_ticket_id($ticketId) {
		return array_map(
			function($value) {
				return $value->device_id;
			},
			$this->get_results(
				"
					SELECT device_id
					FROM {$this->prefix}{$this->table}
					WHERE ticket_id = {$ticketId}
				"
			)
		);
	}

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