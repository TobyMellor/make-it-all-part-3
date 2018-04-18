<?php

namespace MakeItAll\Includes\Database\Seeds;

use MakeItAll\Includes\Database\Seeds\Seeder;

class SeedTicketProgramTable extends Seeder {
	protected $table = 'ticket_program';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(1, 1, 1, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(2, 1, 2, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(3, 2, 4, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(4, 3, 3, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(5, 3, 6, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(7, 5, 2, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(8, 6, 1, '2018-02-20 23:01:26', '2018-02-20 23:01:26'),
				(9, 3, 6, '2018-02-20 23:01:26', '2018-02-20 23:01:26');
		";
	}
}