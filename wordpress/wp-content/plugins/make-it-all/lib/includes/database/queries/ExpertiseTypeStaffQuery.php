<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class ExpertiseTypeStaffQuery extends Query {
	protected $table = 'expertise_type_staff';

	/**
	 * Select all expertise staff types with the important joins.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, user_id, expertise_type_id
				FROM {$this->prefix}{$this->table}
			"
		);
	}

	protected function validate($columns) {
		return true;
	}
}