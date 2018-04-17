<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class CallQuery extends Query {
	protected $table = 'call';
	
	/**
	 * Validation for Call
	 *    - Time: Format in Y-m-d H:i:s
	 *    - Operator ID: Integer
	 *    - Caller ID: Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('time', v::date('Y-m-d H:i:s'))
			->key('operator_id', v::intVal())
			->key('caller_id',   v::intVal());

		try {
			$validator->assert($columns);
		} catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
			wp_die('Server Validation Failed:<br>' . $e->getFullMessage()); return false;
		}

		return true;
	}
}