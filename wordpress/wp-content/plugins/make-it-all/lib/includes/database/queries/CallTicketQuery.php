<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class CallTicketQuery extends Query {
	protected $table = 'call_ticket';

	/**
	 * Validation for Call
	 *    - Call ID: Integer
	 *    - Ticket ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('call_id', v::intVal())
			->key('ticket_id', v::intVal());

		try {
			$validator->assert($columns);
		} catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
			wp_die('Server Validation Failed:<br>' . $e->getFullMessage()); return false;
		}

		return true;
	}
}