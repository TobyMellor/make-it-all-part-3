<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and hooks for
 * enqueueing the admin-specific stylesheet and JavaScript.
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllAdmin {
	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $pluginName    The ID of this plugin.
	 */
	private $pluginName;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $pluginName       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($pluginName, $version) {
		$this->pluginName = $pluginName;
		$this->version    = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style($this->pluginName . '_tickets', plugin_dir_url(__FILE__) . 'css/tickets.css', [], $this->version, 'all');
		wp_enqueue_style($this->pluginName . '_font_awesome', 'https://use.fontawesome.com/releases/v5.0.8/js/all.js');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script($this->pluginName . '_tickets', plugin_dir_url(__FILE__) . 'js/tickets.js', ['jquery'], $this->version, false);
	}
}