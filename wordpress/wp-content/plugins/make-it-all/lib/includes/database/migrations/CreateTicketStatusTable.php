<?php

namespace MakeItAll\Includes\Database\Migrations;

use MakeItAll\Includes\Database\Migrations\Migration;

class CreateTicketStatusTable extends Migration {
	protected $table = 'ticket_status';

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
				status_id int(10) unsigned NOT NULL,
				staff_id int(10) unsigned NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (staff_id) REFERENCES {$this->prefix}staff (id) ON DELETE CASCADE,
				FOREIGN KEY (status_id) REFERENCES {$this->prefix}status (id) ON DELETE CASCADE,
				FOREIGN KEY (ticket_id) REFERENCES {$this->prefix}ticket (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}