<?php

namespace MakeItAll\Includes\Database\Queries;

use \WP_Error;
use Carbon\Carbon;

abstract class Query {
	protected $sqlStatement = null;
	protected $table;
	protected $rawPrefix;
	protected $prefix;

	function __construct() {
		global $wpdb;

		$this->rawPrefix = $wpdb->prefix;
		$this->prefix    = $this->rawPrefix . 'mia_';
	}

	/**
	 * Shorthand for $wpdb->get_results()
	 *
	 * @return void
	 */
	protected function get_results($query) {
		global $wpdb;

		$results = $wpdb->get_results($query);

		if (sizeOf($results) > 0 && isset($results[0]->created_at) && isset($results[0]->updated_at)) {
			foreach ($results as $result) {
				$result->created_at_real = $result->created_at;
				$result->created_at      = Carbon::parse($result->created_at)->diffForHumans();
				$result->updated_at_real = $result->updated_at;
				$result->updated_at      = Carbon::parse($result->updated_at)->diffForHumans();
			}
		}

		return $results;
	}

	/**
	 * Inserts data into the database
	 *
	 * DO NOT include updated_at or created_at in
	 * $columns
	 *
	 * @return (int|false) Number of rows affected/selected or false on error
	 */
	public function mia_insert($columns, $isWordPressTable = false) {
		$validationResponse = $this->validate($columns);

		if (is_wp_error($validationResponse)) return $validationResponse;

		$prefix = $this->prefix;

		if (!$isWordPressTable) {
			$columns['created_at'] = date('Y-m-d H:i:s');
			$columns['updated_at'] = date('Y-m-d H:i:s');
		} else {
			$prefix = $this->rawPrefix;
		}

		global $wpdb;

		if (!$wpdb->insert($prefix . $this->table, $columns)) {
			wp_die('Sorry! We failed to insert that record. Please try again.');
		}

		return $wpdb->insert_id;
	}

	/**
	 * Bulk inserts data into the db
	 *
	 * @return (int|false) Number of rows affected/selected or false on error
	 */
	public function mia_bulk_insert($placeholder, $columnNames, $rows) {
		global $wpdb;

		$date         = date('Y-m-d H:i:s');
		$values       = [];

		foreach ($rows as $columns) {
			$validationResponse = $this->validate($columns);

			if (is_wp_error($validationResponse)) return $validationResponse;

			$columns['created_at'] = $date;
			$columns['updated_at'] = $date;

			$values[] = $wpdb->prepare($placeholder, $columns);
		}

		return $wpdb->query("INSERT INTO {$this->prefix}{$this->table} {$columnNames} VALUES " . implode(',', $values));
	}

	/**
	 * Updates a record by ID in the db
	 *
	 * @return Boolean
	 */
	public function mia_update($id, $columns, $whereColumn = 'id') {
		$validationResponse = $this->validate($columns);

		if (is_wp_error($validationResponse)) return $validationResponse;

		$columns['updated_at'] = date('Y-m-d H:i:s');

		global $wpdb;

		if (!$wpdb->update($this->prefix . $this->table, $columns, [$whereColumn => $id])) {
			wp_die('Sorry! We failed to update that record. Please try again.');
		}

		return $wpdb->insert_id;
	}

	/**
	 * Deletes a record by ID from the db
	 *
	 * @return Boolean
	 */
	public function mia_delete($id, $whereColumn = 'id') {
		global $wpdb;

		if (!$wpdb->delete($this->prefix . $this->table, [$whereColumn => $id])) {
			return new WP_Error(400, 'Sorry! We failed to delete that record. Please try again.');
		}

		return false;
	}

	abstract protected function validate($columns);

	/**
	 * Runs the validator on data provided and decides
	 * what to do in the event of an error
	 *
	 * @return Boolean
	 */
	protected function assert_validation($validator, $columns) {
		try {
			$validator->assert($columns);
		} catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
			return new WP_Error(400, $e->getMessages());
		}

		return true;
	}
}
