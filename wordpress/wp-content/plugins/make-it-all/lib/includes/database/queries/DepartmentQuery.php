<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class DepartmentQuery extends Query {
	protected $table = 'department';

	/**
	 * Get a list of departments
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT *
				FROM {$this->prefix}{$this->table}
			"
		);
	}	

	/**
	 * Validation for Department
	 *    - Name: String, Length between 2 and 256
	 *    - Phone: Valid phone number
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('name', v::stringType()->length(2, 256))
			->key('phone', v::phone());

		return $this->assert_validation($validator, $columns);
	}
}