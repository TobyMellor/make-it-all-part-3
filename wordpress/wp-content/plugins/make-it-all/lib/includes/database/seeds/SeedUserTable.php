<?php

namespace MakeItAll\Includes\Database\Seeds;

use MakeItAll\Includes\Database\Seeds\Seeder;
use MakeItAll\Includes\Database\Queries\UserQuery;

class SeedUserTable extends Seeder {
	protected $table = 'users';

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix;
	}

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$hashedPassword = wp_hash_password('Testing123');
		$date           = date('Y-m-d H:i:s');
		$userQuery      = new UserQuery();

		$users = [
			'Dana Gibson' => [
				'job_title'     => 'Executive Officer',
				'department_id' => 1,
				'phone_number'  => '(686) 917-4585',
				'role'          => 'administrator'
			],
			'Esther Gregory' => [
				'job_title'     => 'Director of Recruitment and Advancement',
				'department_id' => 2,
				'phone_number'  => '(121) 258-8985',
				'role'          => 'author'
			],
			'Noah Parsons' => [
				'job_title'     => 'Dean of School of Science',
				'department_id' => 2,
				'phone_number'  => '(166) 417-4736',
				'role'          => 'contributor'
			],
			'Joseph Morgan' => [
				'job_title'     => 'Administrator – Student Support',
				'department_id' => 1,
				'phone_number'  => '(195) 747-1759',
				'role'          => 'subscriber'
			],
			'Ronnie Bryant' => [
				'job_title'     => 'IT Manager',
				'department_id' => 3,
				'phone_number'  => '(775) 391-5492',
				'role'          => 'administrator'
			],
			'Latoya Powell' => [
				'job_title'     => 'Learning Support Specialist',
				'department_id' => 2,
				'phone_number'  => '(251) 553-1188',
				'role'          => 'author'
			],
			'Amber Waters' => [
				'job_title'     => 'School Administration Manager',
				'department_id' => 1,
				'phone_number'  => '(706) 150-3718',
				'role'          => 'contributor'
			],
			'Jerry Rodriquez' => [
				'job_title'     => 'Marketing Manager',
				'department_id' => 2,
				'phone_number'  => '(807) 359-7149',
				'role'          => 'subscriber'
			],
			'Jeffery Black' => [
				'job_title'     => 'Associate Dean (Expertise)',
				'department_id' => 3,
				'phone_number'  => '(904) 482-7467',
				'role'          => 'administrator'
			],
			'Jose Shaw' => [
				'job_title'     => 'Technical Facilities Manager',
				'department_id' => 1,
				'phone_number'  => '(971) 582-5320',
				'role'          => 'author'
			],
			'Lawrence Guzman' => [
				'job_title'     => 'Academic Librarian',
				'department_id' => 1,
				'phone_number'  => '(171) 707-4853',
				'role'          => 'contributor'
			],
			'Jodi White' => [
				'job_title'     => 'Developer',
				'department_id' => 1,
				'phone_number'  => '(172) 707-4853',
				'role'          => 'subscriber'
			],
			'Nettie Cummings' => [
				'job_title'     => 'Operational Support Officer',
				'department_id' => 2,
				'phone_number'  => '(330) 535-3680',
				'role'          => 'administrator'
			],
			'Bruce Banner' => [
				'job_title'     => 'School administration Manager',
				'department_id' => 2,
				'phone_number'  => '(159) 724-0853',
				'role'          => 'author'
			],
			'Alan Gray' => [
				'job_title'     => 'Administrator – Student Support',
				'department_id' => 1,
				'phone_number'  => '(930) 705-6101',
				'role'          => 'contributor'
			],
			'Vernon Briggs' => [
				'job_title'     => 'Academic Librarian',
				'department_id' => 3,
				'phone_number'  => '(268) 898-9211',
				'role'          => 'subscriber'
			],
			'Valerie Bowman' => [
				'job_title'     => 'Foundation Team Leader',
				'department_id' => 3,
				'phone_number'  => '(655) 156-4522',
				'role'          => 'administrator'
			],
			'Joanne Lopez' => [
				'job_title'     => 'Support Administrator – Finance',
				'department_id' => 1,
				'phone_number'  => '(880) 222-2186',
				'role'          => 'author'
			],
			'Dawn Pearson' => [
				'job_title'     => 'Executive Officer',
				'department_id' => 3,
				'phone_number'  => '(881) 222-2186',
				'role'          => 'contributor'
			],
			'Cora Castro' => [
				'job_title'     => 'Operations Manager',
				'department_id' => 2,
				'phone_number'  => '(139) 839-9970',
				'role'          => 'subscriber'
			],
			'Karl Stone' => [
				'job_title'     => 'Administrator – Student Support',
				'department_id' => 3,
				'phone_number'  => '(818) 293-7441',
				'role'          => 'administrator'
			],
			'Viola Shelton' => [
				'job_title'     => 'ADT',
				'department_id' => 3,
				'phone_number'  => '(325) 961-3649',
				'role'          => 'author'
			],
			'Scarlett Johansson' => [
				'job_title'     => 'Events and Marketing Coordinator',
				'department_id' => 1,
				'phone_number'  => '(319) 789-4170',
				'role'          => 'contributor'
			],
			'Arturo Dunn' => [
				'job_title'     => 'Support Administrator – PGR and Placements',
				'department_id' => 3,
				'phone_number'  => '(244) 545-2110',
				'role'          => 'subscriber'
			],
			'Rochelle Burgess' => [
				'job_title'     => 'Support Administrator – Finance',
				'department_id' => 3,
				'phone_number'  => '(852) 857-2975',
				'role'          => 'administrator'
			],
			'Dwayne Douglas Johnson' => [
				'job_title'     => 'IT Specialist',
				'department_id' => 2,
				'phone_number'  => '(580) 950-4433',
				'role'          => 'author'
			],
			'Sabrina Hunt' => [
				'job_title'     => 'Administrator – Student Support',
				'department_id' => 1,
				'phone_number'  => '(672) 279-6442',
				'role'          => 'contributor'
			],
			'Fannie Parker' => [
				'job_title'     => 'Manager of Foundation Programme',
				'department_id' => 1,
				'phone_number'  => '(324) 262-2770',
				'role'          => 'subscriber'
			],
			'Tony Stark' => [
				'job_title'     => 'Administrator',
				'department_id' => 1,
				'phone_number'  => '(852) 831-6226',
				'role'          => 'author'
			],
			'Toby Jefferson' => [
				'job_title'     => 'Programme Administration Officer',
				'department_id' => 2,
				'phone_number'  => '(158) 439-8382',
				'role'          => 'contributor'
			]
		];
		
		foreach ($users as $name => $user) {
			$displayName = str_replace(' ', '', $name);

			$userId = $userQuery->mia_insert([
				'user_login'          => $displayName,
				'user_pass'           => $hashedPassword,
				'user_nicename'       => strtolower($displayName),
				'user_email'          => strtolower(explode(' ', $name)[0]) . '@makeitall.com',
				'user_url'            => '',
				'user_registered'     => $date,
				'user_activation_key' => '',
				'user_status'         => 0,
				'display_name'        => $displayName
			], false);

			update_user_meta($userId, 'job_title',     $user['job_title']);
			update_user_meta($userId, 'department_id', $user['department_id']);
			update_user_meta($userId, 'phone_number',   $user['phone_number']);

			$user = (new \WP_User($userId))->add_role($user['role']);
		}
	}

	/**
	 * Truncate the table
	 *
	 * @return void
	 */
	public function truncate() {
		global $wpdb;

		$wpdb->query("DELETE FROM {$this->prefix}{$this->table} WHERE id <> '1'");
		$wpdb->query("DELETE FROM {$this->prefix}usermeta WHERE user_id <> '1'");
	}

	public function __destruct() {}
}