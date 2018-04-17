<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class TicketStatusQuery extends Query {
	protected $table = 'ticket_status';
	
	/**
	 * Validation for Ticket Status
	 *    - Ticket ID: Integer
	 *    - Status ID: Integer
	 *    - Staff ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('ticket_id', v::intVal())
			->key('status_id', v::intVal())
			->key('staff_id', v::intVal());

		try {
			$validator->assert($columns);
		} catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
			wp_die('Server Validation Failed:<br>' . $e->getFullMessage()); return false;
		}

		return true;
	}
}