<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\TicketQuery;
use Respect\Validation\Validator as v;

class UserQuery extends Query {
	protected $table = 'users';

	function __construct() {
		global $wpdb; $this->prefix = $wpdb->prefix;
	}

	/**
	 * Select all staff with the important joins.
	 *
	 * @return Array
	 */
	public function get() {
		$employees = $this->get_results(
			"
				SELECT 
					users.id,
					users.name,
					users.job_title,
					department.name AS department,
					department.id AS department_id,
					users.phone_number
				FROM {$this->prefix} AS {$this->table}
					JOIN {$this->prefix}department AS department
						ON users.department_id = department.id;
			"
		);

		$tickets = (new TicketQuery)->get_staff_tickets();

		// give each employee a .open_tickets count
		foreach ($employees as $employee) {
			$employee->open_tickets = 0;
			$employee->tickets = 0;

			foreach ($tickets as $key => $ticket) {
				if ($ticket->staff_id === $employee->id
						|| $ticket->assigned_to_specialist_id === $employee->id
						|| $ticket->assigned_to_operator_id === $employee->id
					) {
					$employee->tickets += 1;

					if ($ticket->status_id != 3) {
						$employee->open_tickets += 1;
						unset($tickets[$key]);
					}
				}
			}
		}

		return $employees;
	}

	protected function validate($columns) {
		return true;
	}
}