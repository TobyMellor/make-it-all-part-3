<?php

namespace MakeItAll\Includes\Database\Queries;
use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;


class TypeQuery extends Query {
	protected $table = 'device';

	/**
	 * Select all devices.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT type
				FROM {$this->prefix}{$this->table}
				GROUP BY type
			"
		);
	}
		protected function validate($columns) {
		return true;
	}
}
