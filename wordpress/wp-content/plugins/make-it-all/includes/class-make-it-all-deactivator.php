<?php

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllDeactivator {
	/**
	 * Deactivates the Make It All plugin.
	 *
	 * @since    1.0.0
	 */
	function __construct() {
		// TODO: Remove this before submission. Don't delete the database tables when they deactivate, only when uninstalling.

		/**
		 * Responsible for removing the database tables.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-migrator.php';

		$migrator = new MakeItAllMigrator;
		$migrator->down();
	}
}