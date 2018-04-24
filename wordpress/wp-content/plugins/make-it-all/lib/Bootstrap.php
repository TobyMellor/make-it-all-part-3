<?php

namespace MakeItAll;

use MakeItAll\Includes\{MakeItAll, Activator, Deactivator};

/**
 * The plugin bootstrap file
 *
 * This file includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://bitbucket.org/TobyMellorTeam
 * @since             1.0.0
 * @package           make-it-all
 *
 * @wordpress-plugin
 * Plugin Name:       Make It All
 * Plugin URI:        https://bitbucket.org/TobyMellorTeam
 * Description:       Create, Edit and Delete data for the Make It All website.
 * Version:           1.0.0
 * Author:            Toby Mellor, Daniel White, Aron Bettison, Andrew Hinnigan, Ghassan Ebrahim
 * Author URI:        http://bitbucket.org/TobyMellorTeam
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
class Bootstrap {
	public function __construct() {
		// If this file is called directly, abort.
		if (!defined('WPINC')) {
			die;
		}

		define('PLUGIN_NAME_VERSION', '1.0.0');

		/**
		 * Begins execution of the plugin.
		 *
		 * Since everything within the plugin is registered via hooks,
		 * then kicking off the plugin from this point in the file does
		 * not affect the page life cycle.
		 *
		 * @since    1.0.0
		 */
		$makeItAll = new MakeItAll();
		$makeItAll->run();
	}

	/**
	 * The code that runs during plugin activation.
	 * This action is documented in includes/class-plugin-name-activator.php
	 */
	public static function activate_make_it_all() {
		new Activator();
	}

	/**
	 * The code that runs during plugin deactivation.
	 * This action is documented in includes/class-plugin-name-deactivator.php
	 */
	public static function deactivate_make_it_all() {
		new Deactivator();
	}
}