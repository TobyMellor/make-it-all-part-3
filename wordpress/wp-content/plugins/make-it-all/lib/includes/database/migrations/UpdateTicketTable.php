<?php

namespace MakeItAll\Includes\Database\Migrations;

use MakeItAll\Includes\Database\Migrations\Migration;

class UpdateTicketTable extends Migration {
	protected $table   = 'ticket';
	protected $isTable = false;

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		$this->sqlStatement = "ALTER TABLE {$this->prefix}{$this->table} ADD FOREIGN KEY (solution_id) REFERENCES {$this->prefix}comment (id) ON DELETE SET NULL";
	}
}