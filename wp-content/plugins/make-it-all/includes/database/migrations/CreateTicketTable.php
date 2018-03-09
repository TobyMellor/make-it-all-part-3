<?php

class CreateTicketTable extends Migration {
	protected $table = 'ticket';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				title text COLLATE utf8mb4_unicode_ci NOT NULL,
				description text COLLATE utf8mb4_unicode_ci NOT NULL,
				solution_id int(10) unsigned DEFAULT NULL,
				author_id int(10) unsigned NOT NULL,
				assigned_to_operator_id int(10) unsigned DEFAULT NULL,
				expertise_type_staff_id int(10) unsigned NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (assigned_to_operator_id) REFERENCES {$this->prefix}staff (id),
				FOREIGN KEY (author_id) REFERENCES {$this->prefix}staff (id),
				FOREIGN KEY (expertise_type_staff_id) REFERENCES {$this->prefix}expertise_type_staff (id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}