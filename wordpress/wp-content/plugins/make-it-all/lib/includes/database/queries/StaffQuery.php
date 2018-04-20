<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\TicketQuery;
use Respect\Validation\Validator as v;

class StaffQuery extends Query {
	protected $table = 'staff';

	/**
	 * Select all staff with the important joins.
	 *
	 * @return Array
	 */
	public function get() {
		$employees = $this->get_results(
			"
				SELECT 
					staff.id,
					staff.name,
					job_title,
					department.name AS department,
					staff.phone_number,
					operator,
					analyst,
					specialist
				FROM {$this->prefix}{$this->table} AS {$this->table}
					JOIN {$this->prefix}department AS department
						ON staff.department_id = department.id;
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