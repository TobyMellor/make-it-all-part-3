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
function activateMakeItAll() {
	require_once plugin_dir_path(__FILE__) . 'includes/make-it-all-activator.php';
	MakeItAllActivator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-plugin-name-deactivator.php
 */
function deactivateMakeItAll() {
	require_once plugin_dir_path(__FILE__) . 'includes/make-it-all-deactivator.php';
	MakeItAllDeactivator::deactivate();
}

register_activation_hook(__FILE__, 'activateMakeItAll');
register_deactivation_hook(__FILE__, 'deactivateMakeItAll');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/make-it-all.php';


/** 
 * Custom Post Type 
 *
 */
function make_it_all_custom_post_type() {
    //Stuff that displays in admin panel.
    $labels = array(
        'name' => 'Ticket',
        'singular_name' => 'Ticket',
        'add_new_label' => 'Add Ticket',
        'all_items' => 'All Items',
        'add_new_item' => 'Add Item',
        'edit_item' => 'Edit Item',
        'new_item' => 'New Item',
        'view_item' => 'View Item',
        'search_item' => 'Search Ticket',
        'not_found' => 'No items found',
        'not_found_in_trash' => 'No items found in trash',
        'parent_item_colon' => 'Parent Item'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'publicly_queryable' => true,
        'query_var' => true, 
        //Custom slug
        'rewrite' => true, 
        'capability_true' => 'post',
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'revisions',
            'custom-fields' 
        ),
        'menu_position' => 0,
        'exclude_from_search' => false,
        //Will look into metaboxes for custom fields?
        'register_meta_box_cb' => 'wpt_add_event_metaboxes'
    );
    register_post_type('ticket', $args);
}
add_action('init', 'make_it_all_custom_post_type');








/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function runMakeItAll() {
	$makeItAll = new MakeItAll();
	$makeItAll->run();
}

runMakeItAll();