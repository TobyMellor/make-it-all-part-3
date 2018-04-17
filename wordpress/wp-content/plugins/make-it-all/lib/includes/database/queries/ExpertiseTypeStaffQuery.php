<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

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
				SELECT id, staff_id, expertise_type_id
				FROM {$this->prefix}{$this->table}
			"
		);
	}
}