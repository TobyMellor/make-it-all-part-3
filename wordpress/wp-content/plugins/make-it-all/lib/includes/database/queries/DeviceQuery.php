<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class DeviceQuery extends Query {
	protected $table = 'device';

	/**
	 * Select all devices.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, type, make, serial_no
				FROM {$this->prefix}{$this->table}
			"
		);
	}
}