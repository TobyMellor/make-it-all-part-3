<?php

/**
 * Calls the up/down methods in the migration classes
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes/database
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllMigrator {
	/**
	 * List of migration classes in order of execution
	 * (Order may be important)
	 */
	private $migrations = [
		'CreateDepartmentTable',
		'CreateStatusTable',
		'CreateProgramTable',
		'CreateDeviceTable',
		'CreateExpertiseTypeTable',
		'CreateStaffTable',
		'CreateExpertiseTypeStaffTable',
		'CreateCallTable',
		'CreateTicketTable',
		'CreateCommentTable',
		'UpdateTicketTable',
		'UpdateCommentTable',
		'CreateCallTicketTable',
		'CreateTicketStatusTable',
		'CreateTicketProgramTable',
		'CreateTicketDeviceTable'
	];

	public function __construct() {
		require_once(plugin_dir_path(dirname(__FILE__)) . 'database/migrations/Migration.php'); // Required by all Migration files
	}

	/**
	 * Creates the database tables
	 */
	public function up() {
		foreach ($this->migrations as $migration) {
			$this->factory($migration)->up();
		}
	}

	/**
	 * Removes the database tables
	 */
	public function down() {
		global $wpdb;

		$wpdb->query('SET FOREIGN_KEY_CHECKS = 0'); // Some tables, e.g. Comment and Ticket, are dual locked

		foreach (array_reverse($this->migrations) as $migration) {
			$this->factory($migration)->down();
		}

		$wpdb->query('SET FOREIGN_KEY_CHECKS = 1');
	}

	private function factory($className) {
		require_once(plugin_dir_path(dirname(__FILE__)) . 'database/migrations/' . $className . '.php');

		if (class_exists($className)) return new $className;

		die('Class ' . $className . ' not found!');
	}
}