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
	function __construct() {
		// Database
		$this->migrate_database();
		$this->seed_database();

		// Roles
		$this->edit_roles();
	}

	/**
	 * Responsible for migrating all of the database tables.
	 */
	private function migrate_database() {
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-migrator.php';

		$migrator = new MakeItAllMigrator;
		$migrator->up();
	}

	/**
	 * Responsible for populating the database tables.
	 */
	private function seed_database() {
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-seeder.php';

		$seeder = new MakeItAllSeeder;
		$seeder->seed();
	}

	/**
	 * Rename the roles
	 */
	private function edit_roles() {
		global $wp_roles;

        if (!isset($wp_roles)) $wp_roles = new WP_Roles();

        // Should be able to view data only
        $wp_roles->roles['subscriber']['name'] = 'Viewer';
        $wp_roles->role_names['subscriber']    = 'Viewer';

        // Ability to create/edit/delete, plus perms from Viewer
        $wp_roles->roles['contributor']['name'] = 'Operator';
        $wp_roles->role_names['contributor']    = 'Operator';

        // Ability to vie global metrics, plus perms from Operator
        $wp_roles->roles['author']['name'] = 'Analyst';
        $wp_roles->role_names['author']    = 'Analyst';

        remove_role('editor'); // we don't have an editor

        foreach ($wp_roles->role_objects as $key => $role) {
			if ($role->has_cap('read')) {
				$role->add_cap('read_make_it_all');
			}

			if ($role->has_cap('edit_posts')) {
				$role->add_cap('edit_make_it_all');
			}
        }
	}
}