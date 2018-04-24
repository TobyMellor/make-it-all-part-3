<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\TicketQuery;
use Respect\Validation\Validator as v;

class UserQuery extends Query {
	protected $table = 'users';

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
					users.display_name,
					(
						SELECT meta_value AS job_title
						FROM {$this->rawPrefix}usermeta AS usermeta
						WHERE users.id = usermeta.user_id
							AND meta_key = 'job_title'
					) AS job_title,
					(
						SELECT meta_value AS department_id
						FROM {$this->rawPrefix}usermeta AS usermeta
						WHERE users.id = usermeta.user_id
							AND meta_key = 'department_id'
					) AS department_id,
					(
						SELECT meta_value AS phone_number
						FROM {$this->rawPrefix}usermeta AS usermeta
						WHERE users.id = usermeta.user_id
							AND meta_key = 'phone_number'
					) AS phone_number,
					(
						SELECT department.name AS department_name
						FROM {$this->rawPrefix}usermeta AS usermeta
							JOIN {$this->prefix}department AS department
								ON department.id = usermeta.meta_value
						WHERE users.id = usermeta.user_id
							AND meta_key = 'department_id'
					) AS department_name
				FROM {$this->rawPrefix}{$this->table} AS users;
			"
		);

		$tickets = (new TicketQuery)->get_staff_tickets();

		// give each employee a .open_tickets count
		foreach ($employees as $employee) {
			$employee->open_tickets = 0;
			$employee->tickets = 0;

			foreach ($tickets as $key => $ticket) {
				if ($ticket->user_id === $employee->id
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