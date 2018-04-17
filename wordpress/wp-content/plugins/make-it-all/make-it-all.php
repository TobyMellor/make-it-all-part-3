<?php

/**
 * Triggers the Bootstrap process and provides the plugin
 * information to WordPress (defined below)
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

require_once(__DIR__ . '/vendor/autoload.php');

new \MakeItAll\Bootstrap;