<?php

namespace MakeItAll\Admin;

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
class Admin {
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
		wp_enqueue_style('flexboxgrid', '//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css');
		wp_enqueue_style($this->pluginName . '_font_awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
		wp_enqueue_style($this->pluginName . '_vendor', get_template_directory_uri() . '/backend/css/vendor.css');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script('mit_dependencies', get_template_directory_uri() . '/backend/js/vendor.js', ['jquery'], '1.0.0', false); // A collection of plugins
		wp_enqueue_script('tiny_mce', includes_url() . '/js/tinymce/tinymce.min.js', [], '4.6.7', false);
		wp_enqueue_script($this->pluginName, get_template_directory_uri() . '/backend/js/main.js', ['jquery', 'mit_dependencies'], $this->version, false);
	}
}