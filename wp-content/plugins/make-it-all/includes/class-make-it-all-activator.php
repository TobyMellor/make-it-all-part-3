<?php

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllActivator {
	/**
	 * Activates the Make It All plugin.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		/**
		 * Responsible for migrating all of the database tables.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-migrator.php';

		$migrator = new MakeItAllMigrator;
		$migrator->up();

		/**
		 * Responsible for populating the database tables.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-seeder.php';

		$seeder = new MakeItAllSeeder;
		$seeder->seed();

	}
}