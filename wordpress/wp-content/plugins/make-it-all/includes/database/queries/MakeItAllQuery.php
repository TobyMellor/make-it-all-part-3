<?php

abstract class MakeItAllQuery {
	protected $sqlStatement = null;
	protected $table;
	protected $prefix;

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
	}

	/**
	 * Select with all of the important join fields
	 *
	 * @return void
	 */
	abstract public function get();
	
	/**
	 * Shorthand for $wpdb->get_results()
	 *
	 * @return void
	 */
	protected function get_results($query) {
		global $wpdb; return $wpdb->get_results($query);
	}
}