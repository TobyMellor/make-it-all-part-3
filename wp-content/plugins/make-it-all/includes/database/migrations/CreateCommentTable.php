<?php

class CreateCommentTable extends Migration {
	protected $table = 'comment';

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "
			CREATE TABLE IF NOT EXISTS {$this->prefix}{$this->table} (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
				content text COLLATE utf8mb4_unicode_ci NOT NULL,
				ticket_id int(10) unsigned NOT NULL,
				author_id int(10) unsigned NOT NULL,
				call_id int(10) unsigned DEFAULT NULL,
				created_at timestamp NULL DEFAULT NULL,
				updated_at timestamp NULL DEFAULT NULL,
				PRIMARY KEY (id),
				FOREIGN KEY (author_id) REFERENCES {$this->prefix}staff (id) ON DELETE CASCADE,
				FOREIGN KEY (call_id) REFERENCES {$this->prefix}call (id) ON DELETE CASCADE
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
		";
	}
}