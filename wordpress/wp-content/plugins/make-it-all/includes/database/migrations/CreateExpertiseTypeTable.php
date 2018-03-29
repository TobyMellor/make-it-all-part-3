<?php

class CreateExpertiseTypeTable extends Migration {
	protected $table = 'expertise_type';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				parent_id int(10) unsigned DEFAULT NULL,
				name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (parent_id) REFERENCES {$this->prefix}expertise_type (id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}