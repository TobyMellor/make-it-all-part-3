<?php

class SeedStatusTable extends Seeder {
	protected $table = 'status';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(1, 'new', 'New', '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(2, 'pending_in_progress', 'Pending - In Progress', '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(3, 'resolved', 'Resolved', '2018-02-20 23:01:26', '2018-02-20 23:01:26');
		";
	}
}