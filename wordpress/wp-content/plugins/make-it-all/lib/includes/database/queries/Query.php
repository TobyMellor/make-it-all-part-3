<?php

namespace MakeItAll\Includes\Database\Queries;

use \WP_Error;

abstract class Query {
	protected $sqlStatement = null;
	protected $table;
	protected $prefix;

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
	}

	/**
	 * Shorthand for $wpdb->get_results()
	 *
	 * @return void
	 */
	protected function get_results($query) {
		global $wpdb; return $wpdb->get_results($query);
	}

	/**
	 * Inserts data into the database
	 *
	 * DO NOT include updated_at or created_at in
	 * $columns
	 *
	 * @return (int|false) Number of rows affected/selected or false on error
	 */
	public function mia_insert($columns) {
		$validationResponse = $this->validate($columns);

		if (is_wp_error($validationResponse)) return $validationResponse;

		$columns['created_at'] = date('Y-m-d H:i:s');
		$columns['updated_at'] = date('Y-m-d H:i:s');

		global $wpdb;

		if (!$wpdb->insert($this->prefix . $this->table, $columns)) {
			wp_die('Sorry! We failed to insert that record. Please try again.');
		}

		return $wpdb->insert_id;
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
			return WP_Error(400, 'Sorry! We failed to delete that record. Please try again.');
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
