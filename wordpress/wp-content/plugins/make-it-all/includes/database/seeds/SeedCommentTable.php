<?php

class SeedCommentTable extends Seeder {
	protected $table = 'comment';

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
					'Donec volutpat vestibulum ipsum id consectetur. Ut semper dui eget pulvinar pretium. Ut ut elit tellus. Maecenas et urna tincidunt, semper urna ac, consectetur nunc. Nulla in finibus odio. Fusce bibendum eros in dui rutrum, sit amet gravida leo varius. Nulla mattis, leo eu laoreet mattis, nisi sapien rutrum ante, id imperdiet ligula neque eu neque.',
					1,
					1,
					NULL,
					'2018-01-31 17:40:24',
					'2018-02-20 23:01:26'
				),
				(
					2,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					1,
					3,
					NULL,
					'2018-02-11 03:33:33',
					'2018-02-20 23:01:26'
				),
				(
					3,
					'Donec volutpat vestibulum ipsum id consectetur. Ut semper dui eget pulvinar pretium. Ut ut elit tellus. Maecenas et urna tincidunt, semper urna ac, consectetur nunc. Nulla in finibus odio. Fusce bibendum eros in dui rutrum, sit amet gravida leo varius. Nulla mattis, leo eu laoreet mattis, nisi sapien rutrum ante, id imperdiet ligula neque eu neque.',
					1,
					5,
					NULL,
					'2018-01-21 03:53:54',
					'2018-02-20 23:01:26'
				),
				(
					4,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					2,
					1,
					NULL,
					'2018-02-12 19:33:33',
					'2018-02-20 23:01:26'
				),
				(
					5,
					'Donec volutpat vestibulum ipsum id consectetur. Ut semper dui eget pulvinar pretium. Ut ut elit tellus. Maecenas et urna tincidunt, semper urna ac, consectetur nunc. Nulla in finibus odio. Fusce bibendum eros in dui rutrum, sit amet gravida leo varius. Nulla mattis, leo eu laoreet mattis, nisi sapien rutrum ante, id imperdiet ligula neque eu neque.',
					2,
					2,
					NULL,
					'2018-02-05 15:46:15',
					'2018-02-20 23:01:26'
				),
				(
					6,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					3,
					1,
					NULL,
					'2018-01-23 20:10:20',
					'2018-02-20 23:01:26'
				),
				(
					7,
					'Donec volutpat vestibulum ipsum id consectetur. Ut semper dui eget pulvinar pretium. Ut ut elit tellus. Maecenas et urna tincidunt, semper urna ac, consectetur nunc. Nulla in finibus odio. Fusce bibendum eros in dui rutrum, sit amet gravida leo varius. Nulla mattis, leo eu laoreet mattis, nisi sapien rutrum ante, id imperdiet ligula neque eu neque.',
					4,
					5,
					NULL,
					'2018-02-17 16:22:27',
					'2018-02-20 23:01:26'
				),
				(
					8,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					1,
					'2018-02-09 02:50:29',
					'2018-02-20 23:01:26'
				),
				(
					9,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					6,
					4,
					2,
					'2018-01-27 15:14:21',
					'2018-02-20 23:01:26'
				),
				(
					10,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					2,
					5,
					3,
					'2018-02-16 09:29:36',
					'2018-02-20 23:01:26'
				),
				(
					11,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					7,
					4,
					4,
					'2018-02-14 13:44:26',
					'2018-02-20 23:01:26'
				),
				(
					12,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					1,
					1,
					5,
					'2018-02-12 07:10:57',
					'2018-02-20 23:01:26'
				),
				(
					13,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					2,
					4,
					6,
					'2018-02-15 07:02:00',
					'2018-02-20 23:01:26'
				),
				(
					14,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					7,
					'2018-02-04 13:26:24',
					'2018-02-20 23:01:26'
				),
				(
					15,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					8,
					'2018-02-11 18:17:37',
					'2018-02-20 23:01:26'
				),
				(
					16,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					9,
					'2018-02-20 04:47:12',
					'2018-02-20 23:01:26'
				),
				(
					17,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					10,
					'2018-01-31 03:03:13',
					'2018-02-20 23:01:26'
				),
				(
					18,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nunc nec elit pretium efficitur. Vestibulum risus felis, aliquet mollis leo sit amet, efficitur consectetur tellus. Aliquam a mi rhoncus libero lobortis dictum quis ac urna. Phasellus sed lacus et massa varius pulvinar sed vitae eros. Quisque accumsan ullamcorper nulla, sit amet efficitur erat consequat scelerisque. Etiam malesuada dapibus metus sed pretium. Donec ut nibh in ligula aliquet fermentum id ut purus. Donec quam felis, imperdiet vitae porta ac, egestas eu augue. Phasellus vitae faucibus nunc. Ut eu lectus vitae massa ultricies mollis. Pellentesque a aliquet sapien.',
					5,
					6,
					11,
					'2018-02-20 07:18:03',
					'2018-02-20 23:01:26'
				);
		";
	}
}