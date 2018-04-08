<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/ExpertiseTypeStaffQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/TicketQuery.php');

class StaffQuery extends MakeItAllQuery {
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
						ON staff.department_id = department.id
					LEFT JOIN {$this->prefix}expertise_type_staff AS ets
						ON staff.id = ets.staff_id
				GROUP BY staff.id;
			"
		);

		$openTickets = (new TicketQuery)->get_open_tickets();
		$expertiseTypeStaffs = (new ExpertiseTypeStaffQuery)->get();

		// give each employee a .open_tickets count and .staff_expertise_type_ids
		foreach ($employees as $employee) {
			$employee->open_tickets             = 0;
			$employee->staff_expertise_type_ids = [];

			foreach ($openTickets as $key => $openTicket) {
				if ($openTicket->staff_id === $employee->id) {
					$employee->open_tickets += 1;
					unset($openTickets[$key]);
				}
			}

			foreach ($expertiseTypeStaffs as $expertiseTypeStaff) {
				if ($expertiseTypeStaff->staff_id === $employee->id) {
					$employee->staff_expertise_type_ids[] = $expertiseTypeStaff->id;
				}
			}
		}

		return $employees;
	}
}