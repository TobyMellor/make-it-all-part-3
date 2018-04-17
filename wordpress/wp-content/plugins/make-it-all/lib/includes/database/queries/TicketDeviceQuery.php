<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class TicketDeviceQuery extends Query {
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
	 * Deletes a record from the DB.
	 *
	 * @return Boolean
	 */
	public function delete_by_ticket_id($ticketId) {
		return $this->mia_delete($ticketId, 'ticket_id');
	}

	/**
	 * Validation for Ticket Device
	 *    - Ticket ID: Integer
	 *    - Device ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('ticket_id', v::intVal())
			->key('device_id', v::intVal());

		try {
			$validator->assert($columns);
		} catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
			wp_die('Server Validation Failed:<br>' . $e->getFullMessage()); return false;
		}

		return true;
	}
}