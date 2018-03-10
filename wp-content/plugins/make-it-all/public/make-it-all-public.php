<?php

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, hooks for
 * enqueueing the public-facing stylesheet and JavaScript.
 *
 * @since      1.0.0
 * @package    make-it-all
 * @subpackage make-it-all/includes
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class MakeItAllPublic {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($pluginName, $version) {
		$this->pluginName = $pluginName;
		$this->version    = $version;
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueueStyles() {
		wp_enqueue_style($this->pluginName, plugin_dir_url(__FILE__) . 'css/plugin-name-public.css', [], $this->version, 'all');

		//
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueueScripts() {
		wp_enqueue_script($this->pluginName, plugin_dir_url(__FILE__) . 'js/plugin-name-public.js', ['jquery'], $this->version, false);

		//
	}
}