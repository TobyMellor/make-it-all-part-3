<?php

class CreateStaffTable extends Migration {
	protected $table = 'staff';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				department_id int(10) unsigned NOT NULL,
				email varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				operator tinyint(1) NOT NULL,
				analyst tinyint(1) NOT NULL,
				specialist tinyint(1) NOT NULL,
				job_title varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				phone_number varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
				password varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
				attempts_rem int(11) NOT NULL DEFAULT '3',
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				UNIQUE (email),
				FOREIGN KEY (department_id) REFERENCES {$this->prefix}department (id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}