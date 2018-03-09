<?php

/**
 * Populates and clears (fake) data from the database
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes/database
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllSeeder {
	/**
	 * List of seed classes in order of execution
	 * (Order may be important)
	 */
	private $seeds = [
		'SeedProgramTable',
		'SeedDeviceTable',
		'SeedDepartmentTable',
		'SeedStaffTable',
		'SeedExpertiseTypeTable',
		'SeedExpertiseTypeStaffTable',
		'SeedTicketTable',
		'SeedStatusTable',
		'SeedTicketStatusTable',
		'SeedTicketProgramTable',
		'SeedTicketDeviceTable',
		'SeedCallTable',
		'SeedCallTicketTable',
		'SeedCommentTable',
	];

	function __construct() {
		require_once(plugin_dir_path(dirname(__FILE__)) . 'database/seeds/Seeder.php'); // Required by all Seed files

		global $wpdb; $wpdb->query('SET FOREIGN_KEY_CHECKS = 0'); // Some tables, e.g. Comment and Ticket, are dual locked
	}

	/**
	 * Populates the database tables
	 */
	public function seed() {
		foreach ($this->seeds as $seed) {
			$this->factory($seed)->seed();
		}
	}

	/**
	 * Clears the database tables
	 */
	public function truncate() {
		foreach (array_reverse($this->seeds) as $seed) {
			$this->factory($seed)->truncate();
		}
	}

	private function factory($className) {
		require_once(plugin_dir_path(dirname(__FILE__)) . 'database/seeds/' . $className . '.php');

		if (class_exists($className)) return new $className;

		die('Class ' . $className . ' not found!');
	}

	function __destruct() {
		global $wpdb; $wpdb->query('SET FOREIGN_KEY_CHECKS = 1');
	}
}