<?php

class SeedStaffTable extends Seeder {
	protected $table = 'staff';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(1, 1, 'dana@makeitall.com', 'Dana Gibson', 1, 1, 0, 'Executive Officer', '(686) 917-4585', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(2, 1, 'esther@makeitall.com', 'Esther Gregory', 0, 1, 1, 'Director of Recruitment and Advancement', '(121) 258-8985', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(3, 2, 'noah@makeitall.com', 'Noah Parsons', 1, 0, 0, 'Dean of School of Science', '(166) 417-4736', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(4, 2, 'joseph@makeitall.com', 'Joseph Morgan', 1, 0, 0, 'Administrator - Student Support', '(195) 747-1759', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(5, 3, 'ronnie@makeitall.com', 'Ronnie Bryant', 0, 1, 0, 'IT Manager', '(775) 391-5492', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(6, 3, 'latoya@makeitall.com', 'Latoya Powell', 0, 1, 1, 'Learning Support Specialist', '(251) 553-1188', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(7, 2, 'amber@makeitall.com', 'Amber Waters', 1, 0, 1, 'School Administration Manager', '(706) 150-3718', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(8, 3, 'jerry@makeitall.com', 'Jerry Rodriquez', 0, 1, 1, 'Marketing Officer', '(807) 359-7149', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(9, 1, 'jeffery@makeitall.com', 'Jeffery Black', 0, 1, 0, 'Associate Dean (Enterprise)', '(904) 482-7467', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(10, 1, 'jose@makeitall.com', 'Jose Shaw', 1, 0, 0, 'Technical Facilities Manager', '(971) 582-5320', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(11, 2, 'lawrence@makeitall.com', 'Lawrence Guzman', 0, 1, 1, 'Academic Librarian', '(171) 707-4853', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(12, 1, 'jodi@makeitall.com', 'Jodi White', 1, 1, 1, 'Developer', NULL, '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(13, 2, 'nettie@makeitall.com', 'Nettie Cummings', 0, 0, 1, 'Operational Support Officer', '(330) 535-3680', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(14, 1, 'Hulk@makeitall.com', 'Bruce Banner', 1, 0, 0, 'School Administration Manager', '(159) 724-0853', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(15, 1, 'alan@makeitall.com', 'Alan Gray', 1, 1, 0, 'Administrator - Student Support', '(930) 705-6101', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(16, 1, 'vernon@makeitall.com', 'Vernon Briggs', 1, 0, 0, 'Academic Librarian ', '(268) 898-9211', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(17, 2, 'valerie@makeitall.com', 'Valerie Bowman', 0, 0, 1, 'Foundation Team Leader', '(655) 156-4522', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(18, 2, 'joanne@makeitall.com', 'Joanne Lopez', 0, 1, 0, 'Support Administrator - Finance', '(880) 222-2186', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(19, 1, 'dawn@makeitall.com', 'Dawn Pearson', 1, 0, 0, 'Executive Officer', NULL, '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(20, 1, 'cora@makeitall.com', 'Cora Castro', 0, 0, 1, 'Operations Manager', '(139) 839-9970', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(21, 1, 'karl@makeitall.com', 'Karl Stone', 0, 1, 1, 'Administrator - Student Support', '(818) 293-7441', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(22, 2, 'viola@makeitall.com', 'Viola Shelton', 1, 0, 0, 'AD(T)', '(325) 961-3649', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(23, 2, 'SJohansson@makeitall.com', 'Scarlett Johansson', 0, 1, 1, 'Events and Marketing Coordinator', '(319) 789-4170', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(24, 1, 'arturo@makeitall.com', 'Arturo Dunn', 0, 0, 1, 'Support Administrator - PGR and Placements', '(244) 545-2110', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(25, 1, 'rochelle@makeitall.com', 'Rochelle Burgess', 1, 0, 0, 'Support Administrator - Finance', '(852) 857-2975', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(26, 2, 'DJohnson@makeitall.com', 'Dwayne Douglas Johnson', 1, 0, 1, 'IT Specialist', '(580) 950-4433', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(27, 1, 'sabrina@makeitall.com', 'Sabrina Hunt', 1, 0, 0, 'Administrator - Student Support', '(672) 279-6442', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(28, 1, 'fannie@makeitall.com', 'Fannie Parker', 1, 1, 1, 'Manager of Foundation Programme', '(324) 262-2770', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(29, 3, 'TStark@makeitall.com', 'Tony Stark', 0, 1, 0, 'Administrator - Student Support', '(852) 831-6226', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(30, 3, 'lawrencej@makeitall.com', 'Lawrence Jefferson', 1, 0, 1, 'Programme Administration Officer', '(158) 439-8382', '', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25');
		";
	}
}