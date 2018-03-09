<?php

abstract class Seeder {
	protected $sqlStatement = null;
	protected $table;
	protected $prefix;

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
	}

	/**
	 * Seed the table
	 *
	 * @return void
	 */
	abstract public function seed();

	/**
	 * Truncate the table
	 *
	 * @return void
	 */
	public function truncate() {
		$this->sqlStatement = "TRUNCATE TABLE {$this->prefix}{$this->table}";
	}

	function __destruct() {
		global $wpdb; $wpdb->query($this->sqlStatement);
	}
}