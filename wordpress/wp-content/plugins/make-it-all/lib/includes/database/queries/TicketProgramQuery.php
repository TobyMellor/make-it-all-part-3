<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class TicketProgramQuery extends Query {
	protected $table = 'ticket_program';
	
	/**
	 * Get all program ids belonging to a ticket.
	 *
	 * @return Array
	 */
	public function get_program_ids_by_ticket_id($ticketId) {
		return array_map(
			function($value) {
				return $value->program_id;
			},
			$this->get_results(
				"
					SELECT program_id
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
	 * Validation for Ticket Program
	 *    - Ticket ID: Integer
	 *    - Program ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('ticket_id', v::intVal())
			->key('program_id', v::intVal());

		return $this->assert_validation($validator, $columns);
	}
}