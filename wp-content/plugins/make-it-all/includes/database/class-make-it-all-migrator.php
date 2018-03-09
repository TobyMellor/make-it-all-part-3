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

	function __construct() {
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
		foreach (array_reverse($this->migrations) as $migration) {
			$this->factory($migration)->down();
		}
	}

	private function factory($className) {
		require_once(plugin_dir_path(dirname(__FILE__)) . 'database/migrations/' . $className . '.php');

		if (class_exists($className)) return new $className;

		die('Class ' . $className . ' not found!');
	}
}