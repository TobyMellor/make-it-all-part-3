<?php

namespace MakeItAll\Includes;

use MakeItAll\Includes\Database\Migrator;

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
class Deactivator {
	/**
	 * Deactivates the Make It All plugin.
	 *
	 * @since    1.0.0
	 */
	function __construct() {
		// TODO: Remove this before submission. Don't delete the database tables when they deactivate, only when uninstalling.

		$migrator = new Migrator;
		$migrator->down();
	}
}