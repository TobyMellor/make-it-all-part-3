<?php

/**
 * Fired when the plugin is uninstalled.
 *
 * @link    https://bitbucket.org/TobyMellorTeam
 * @since   1.0.0
 *
 * @package make-it-all
 */

// If uninstall not called from WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
	die;
}

/**
 * Responsible for removing the database tables.
 */
require_once plugin_dir_path(dirname(__FILE__)) . 'includes/database/class-make-it-all-migrator.php';

$migrator = new MakeItAllMigrator;
$migrator->down();