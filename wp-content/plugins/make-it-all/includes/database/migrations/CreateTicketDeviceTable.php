<?php

class CreateTicketDeviceTable extends Migration {
	protected $table = 'ticket_device';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				ticket_id int(10) unsigned DEFAULT NULL,
				device_id int(10) unsigned DEFAULT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (device_id) REFERENCES {$this->prefix}device (id) ON DELETE CASCADE,
				FOREIGN KEY (ticket_id) REFERENCES {$this->prefix}ticket (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}