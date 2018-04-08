<?php

class SeedDepartmentTable extends Seeder {
	protected $table = 'department';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES 
				(1, 'Computer Science', '+44 9432 535724', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(2, 'Mathematics', '+44 0332 695723', '2018-02-20 23:01:24', '2018-02-20 23:01:24'),
				(3, 'Geography', '+44 9142 523621', '2018-02-20 23:01:24', '2018-02-20 23:01:24');
		";
	}
}