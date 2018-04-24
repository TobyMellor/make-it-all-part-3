<?php

namespace MakeItAll\Includes\Database\Migrations;

use MakeItAll\Includes\Database\Migrations\Migration;

class CreateExpertiseTypeStaffTable extends Migration {
	protected $table = 'expertise_type_staff';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				user_id bigint(20) unsigned NOT NULL,
				expertise_type_id int(10) unsigned NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (expertise_type_id) REFERENCES {$this->prefix}expertise_type (id) ON DELETE CASCADE,
				FOREIGN KEY (user_id) REFERENCES {$this->rawPrefix}users (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}