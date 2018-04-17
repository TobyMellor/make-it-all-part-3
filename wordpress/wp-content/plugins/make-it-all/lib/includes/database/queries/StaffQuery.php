<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\TicketQuery;

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

		$openTickets = (new TicketQuery)->get_open_tickets();

		// give each employee a .open_tickets count
		foreach ($employees as $employee) {
			$employee->open_tickets = 0;

			foreach ($openTickets as $key => $openTicket) {
				if ($openTicket->staff_id === $employee->id) {
					$employee->open_tickets += 1;
					unset($openTickets[$key]);
				}
			}
		}

		return $employees;
	}
}