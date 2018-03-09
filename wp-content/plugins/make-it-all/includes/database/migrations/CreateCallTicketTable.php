<?php

class CreateCallTicketTable extends Migration {
	protected $table = 'call_ticket';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				call_id int(10) unsigned NOT NULL,
				ticket_id int(10) unsigned NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (call_id) REFERENCES {$this->prefix}call (id) ON DELETE CASCADE,
				FOREIGN KEY (ticket_id) REFERENCES {$this->prefix}ticket (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}