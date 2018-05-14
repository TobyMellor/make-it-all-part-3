<?php

namespace MakeItAll\Includes\Database\Migrations;

use MakeItAll\Includes\Database\Migrations\Migration;

class CreateHolidayTable extends Migration {
	protected $table = 'holiday';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				ticket_id int(10) unsigned NOT NULL,
				user_id bigint(20) unsigned NOT NULL,
				return_date timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (ticket_id) REFERENCES {$this->prefix}ticket (id) ON DELETE CASCADE,
				FOREIGN KEY (user_id) REFERENCES {$this->rawPrefix}users (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}