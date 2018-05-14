<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'tritton123');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hJW&W/;U$fDq~%&;#Hsfblu)5z0mXinHCm8QppUKhh|.e~%o; C3GZwORc|>.Up$');
define('SECURE_AUTH_KEY',  'iqw+Cq9DMb{Ft{5PN!]Yjn~x_>#XBw  7xm#j53j++{ZKb5=d<d=D3F>TW261P:>');
define('LOGGED_IN_KEY',    '}9i>8aECY.3f_Iz`>kQV)Kb.JvnOq>V$+I}>o,yVB4]tU9Cd:[EPYg| C`2Cy IT');
define('NONCE_KEY',        'z,UYVEqLo>pUG/>1bzg0_T:vt5^fm42w2`:a93k.`.E~@K_Cs[Jz,UlA[zy#q2hi');
define('AUTH_SALT',        'Tc>&_[+K46?#;+CtLBU@%F~[wU#/;sJfuUcj|aiulTgcUXZo/OQdOj1PM7nK*eo2');
define('SECURE_AUTH_SALT', 'Bkw-btt/W*bm9!X|kI^&R-73(kR@BvhIiHj5w8PmEmUTgl}Fk]TJR)?8/p4>Z+hR');
define('LOGGED_IN_SALT',   'C:`;=uw!9c&@J3TN/]0vxai)I1iasClm^9k5m(Yn0D=b7GYy&fhOZO<V[eJ1d1/[');
define('NONCE_SALT',       'g?hKZYo]d4N,hzT<gvtFBkxy+=e>2IPq{A%kI;vW(hPbl/&Om>(>q]7VV>L|COo{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
