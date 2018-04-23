<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

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

	/**
	 * Get the data required for the table
	 *
	 * @return Array
	 */
	public function get_device_table() {
		return $this->get_results(
			"
				SELECT
					id,
					type AS title,
					make,
					serial_no,
					created_at,
					updated_at
				FROM {$this->prefix}{$this->table}
			"
		);
	}

	public function get_device($id) {
		return $this->get_results(
			"
				SELECT *
				FROM {$this->prefix}{$this->table}
				WHERE id = $id
			"
		);
	}

	/**
	 * Select all types.
	 *
	 * @return Array
	 */
	public function get_types() {
		return $this->get_results(
			"
				SELECT type
				FROM {$this->prefix}{$this->table}
				GROUP BY type
			"
		);
	}

	/**
	 * Select all makes.
	 *
	 * @return Array
	 */
	public function get_makes() {
		return $this->get_results(
			"
				SELECT make as type
				FROM {$this->prefix}{$this->table}
				GROUP BY make
			"
		);
	}
	
	/**
	 * Deletes a record from the DB.
	 *
	 * @return Boolean
	 */
	public function delete($ticketId) {
		return $this->mia_delete($ticketId);
	}

	protected function validate($columns) {
		return true;
	}
}