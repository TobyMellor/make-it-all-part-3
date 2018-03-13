<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
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

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('PLUGIN_NAME_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-plugin-name-activator.php
 */
function activate_make_it_all() {
	require_once plugin_dir_path(__FILE__) . 'includes/class-make-it-all-activator.php';
	MakeItAllActivator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-plugin-name-deactivator.php
 */
function deactivate_make_it_all() {
	require_once plugin_dir_path(__FILE__) . 'includes/class-make-it-all-deactivator.php';
	MakeItAllDeactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_make_it_all');
register_deactivation_hook(__FILE__, 'deactivate_make_it_all');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-make-it-all.php';
require_once plugin_dir_path(__FILE__) . 'includes/data-display/display.php';
require_once plugin_dir_path(__FILE__) . 'includes/data-display/ticketForm.php';

add_action('admin_menu', 'mia_add_menus');
add_action( 'admin_menu', 'mia_add_options');
add_action('wp_loaded', 'mia_add_assets');
function test(){
    return "hello";
}
add_action('wp_ajax_new_ticket_form', 'mia_print_ticket_form');

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_make_it_all() {
	$makeItAll = new MakeItAll();
	$makeItAll->run();
}

run_make_it_all();