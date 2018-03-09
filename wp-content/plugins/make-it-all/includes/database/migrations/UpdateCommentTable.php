<?php

class UpdateCommentTable extends Migration {
	protected $table   = 'comment';
	protected $isTable = false;

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "ALTER TABLE {$this->prefix}{$this->table} ADD FOREIGN KEY (ticket_id) REFERENCES {$this->prefix}ticket (id)";
	}
}