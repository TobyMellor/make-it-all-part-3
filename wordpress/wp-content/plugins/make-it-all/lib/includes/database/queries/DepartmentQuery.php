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
	 * Get a list of departments /w search functionality
	 *
	 * @return Array
	 */
	public function get_department_table($search = null) {
		$sql = "
			SELECT *
			FROM {$this->prefix}{$this->table}
		";

		if ($search) {
			$search = $this->wpdb->esc_like($search);

			$sql .= $this->wpdb->prepare(" WHERE name LIKE '%%%s%%' OR id LIKE '%%%s%%'", [$search, $search]);
		}

		$sql .= " ORDER BY UNIX_TIMESTAMP(updated_at) DESC";

		return $this->get_results($sql);
	}

	/**
	 * Get department by ID
	 *
	 * @return Array
	 */
	public function get_department($departmentId) {
		return $this->get_results(
			"
				SELECT *
				FROM {$this->prefix}{$this->table}
				WHERE id = {sanitize_key($departmentId)}
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
			->key('phone_number', v::phone());

		return $this->assert_validation($validator, $columns);
	}
}