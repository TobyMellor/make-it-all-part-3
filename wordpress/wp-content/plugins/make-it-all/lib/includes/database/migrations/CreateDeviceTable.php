<?php

namespace MakeItAll\Includes\Database\Migrations;

use MakeItAll\Includes\Database\Migrations\Migration;

class CreateDeviceTable extends Migration {
	protected $table = 'device';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				type varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				make varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				serial_no varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				UNIQUE (serial_no)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}