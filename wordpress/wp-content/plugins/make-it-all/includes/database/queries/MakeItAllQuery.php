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
	 * Prepares the SQL statement
	 *
	 * DO NOT include updated_at or created_at in
	 * $data
	 *
	 * @return (int|false) Number of rows affected/selected or false on error
	 */
	protected function query($statement, $data) {
		$data[] = date('Y-m-d H:i:s'); // current time for created_at
		$data[] = date('Y-m-d H:i:s'); // current time for updated_at

		global $wpdb;

		return $wpdb->query(
			$wpdb->prepare($statement, $data)
		);
	}
}