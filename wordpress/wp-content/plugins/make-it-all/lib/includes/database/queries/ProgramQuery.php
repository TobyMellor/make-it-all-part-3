<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class ProgramQuery extends Query {
	protected $table = 'program';

	/**
	 * Select all programs.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, name, operating_system, expiry_date
				FROM {$this->prefix}{$this->table}
			"
		);
	}
}