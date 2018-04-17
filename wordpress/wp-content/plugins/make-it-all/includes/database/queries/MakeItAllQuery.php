<?php

abstract class MakeItAllQuery {
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
	protected function mia_insert($columns) {
		$columns['created_at'] = date('Y-m-d H:i:s');
		$columns['updated_at'] = date('Y-m-d H:i:s');

		global $wpdb;

		return $wpdb->insert($this->prefix . $this->table, $columns);
	}

	/**
	 * Updates a record by ID in the db
	 *
	 * @return Boolean
	 */
	protected function mia_update($id, $columns, $whereColumn = 'id') {
		$columns['updated_at'] = date('Y-m-d H:i:s');
		
		global $wpdb;

		return $wpdb->update($this->prefix . $this->table, $columns, [$whereColumn => $id]);
	}

	/**
	 * Deletes a record by ID from the db
	 *
	 * @return Boolean
	 */
	protected function mia_delete($id, $whereColumn = 'id') {
		global $wpdb;

		return $wpdb->delete($this->prefix . $this->table, [$whereColumn => $id]);
	}
}