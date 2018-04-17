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

		return $this->assert_validation($validator, $columns);
	}
}