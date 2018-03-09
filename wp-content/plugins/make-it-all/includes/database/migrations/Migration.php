<?php

abstract class Migration {
	protected $sqlStatement = null;
	protected $table;
	protected $isTable = true;
	protected $prefix;

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
	}

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	abstract public function up();

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		if ($this->isTable) $this->sqlStatement = "DROP TABLE IF EXISTS {$this->prefix}{$this->table};";
	}

	function __destruct() {
		if ($this->sqlStatement !== null) { // null for down Update migrations
			global $wpdb; $wpdb->query($this->sqlStatement);
		}
	}
}