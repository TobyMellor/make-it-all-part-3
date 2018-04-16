<?php

class SeedTicketTable extends Seeder {
	protected $table = 'ticket';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(
					1,
					'Printer run out of ink',
					'<p><strong>Consectetur adipiscing elit</strong></p><p>Lorem ipsum dolor sit amet, <em>consectetur</em> adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur <strong>consectetur</strong> tellus. Aliquam a mi <em>rhoncus</em> libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros.</p><p><strong>Lorem ipsum dolar</strong></p><p style=\"padding-left: 30px;\">Donec ut nibh in ligula aliquet fermentum id ut purus.</p><p>Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh <em>in ligula aliquet</em> fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p></div>',
					1,
					1,
					NULL,
					13,
					'2018-02-20 23:01:25',
					'2018-02-20 23:01:25'
				),
				(
					2,
					'Cannot turn on computer',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					1,
					NULL,
					1,
					'2018-02-20 23:01:25',
					'2018-02-20 23:01:25'
				),
				(
					3,
					'Cannot turn on printer',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					1,
					1,
					3,
					'2018-02-20 23:01:25',
					'2018-02-20 23:01:25'
				),
				(
					4,
					'Test Ticket!',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					3,
					NULL,
					18,
					'2018-02-20 23:01:26',
					'2018-02-20 23:11:19'
				),
				(
					5,
					'Keyboard doesn’t work',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					4,
					4,
					3,
					15,
					'2018-02-20 23:01:26',
					'2018-02-20 23:01:26'
				),
				(
					6,
					'Monitor buttons are loose',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					5,
					NULL,
					6,
					'2018-02-20 23:01:26',
					'2018-02-20 23:01:26'
				),
				(
					7,
					'Keyboard is missing some keys',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					10,
					1,
					NULL,
					10,
					'2018-02-20 23:01:26',
					'2018-02-20 23:01:26'
				),
				(
					8,
					'Virus has been detected',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					2,
					NULL,
					14,
					'2018-02-20 23:01:26',
					'2018-02-20 23:01:26'
				),
				(
					9,
					'Software isnt installed correctly',
					'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.</p>',
					NULL,
					6,
					19,
					3,
					'2018-02-20 23:01:26',
					'2018-02-20 23:01:26'
				);
		";
	}
}