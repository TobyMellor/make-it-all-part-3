<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\DepartmentTable;

use MakeItAll\Includes\Database\Queries\DepartmentQuery;

class DepartmentPage extends Page {
	protected $name     = 'Department';
	protected $icon     = 'dashicons-admin-home';
	protected $position = 4;

	/**
	 * Displays the Department table
	 *
	 * @return @void
	 */
	public function read_pane() {
		parent::read_pane();

		// handle single delete and bulk delete before rendering page
		if (isset($_GET['action']) && $_GET['action'] === 'delete') {
			if (current_user_can('edit_make_it_all')) {
				$departmentQuery = new DepartmentQuery();

				if (isset($_GET['department_id'])) {
					$departmentQuery->delete($_GET['department_id']);
				} else if (isset($_GET['department'])) {
					foreach ($_GET['department'] as $departmentId) {
						$departmentQuery->delete($departmentId);
					}
				}
			}
		}

		$context = $this->get_context('View Departments');

		$this->render_pane($context); // render page before inserting table

		$departmentTable = new DepartmentTable();
		$departmentTable->prepare_items();
		$departmentTable->display();
	}

	/**
	 * Displays Create Ticket Page
	 * Page requires the following data:
	 *    - Employees as employees
	 *    - Expertise Types as expertise_types
	 *    - Devices as devices
	 *    - Programs as programs
	 *
	 * @return @void
	 */
	public function create_pane() {
		parent::create_pane();

		$context = $this->get_context('Create Departments');

		$this->render_pane($context);
	}

	protected function create_action() {
		global $wpdb, $session;

		$departmentQuery = new DepartmentQuery();

		// create departments
		foreach ($_POST['departments'] as $department) {
			$departmentId = $departmentQuery->mia_insert([
				'name'         => $department['name'],
				'phone_number' => $department['phone_number']
			]);

			if ($this->is_error($departmentId)) return $this->mia_redirect('admin.php?page=department_create');
		}

		$this->mia_redirect('admin.php?page=department_update&departmentId=' . $departmentId);
	}

	public function update_pane() {
		parent::update_pane();

		$context = $this->get_required_data('Update Department');
		
		$context['department'] = json_encode((new TicketQuery)->get());

		if (isset($_GET['id'])) {
			$ticketId = $_GET['id'];

			// ticket's current data
			$context = $this->getTicket($context, $ticketId);
		}

		$this->render_pane($context);
	}

	protected function update_action() {
		global $wpdb;
		
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$ticketStatusQuery  = new TicketStatusQuery();

		$ticket   = $_POST['ticket'];
		$ticketId = $ticket['id'];

		$ticketQuery->mia_update(
			$ticketId,
			[
				'title'                     => $ticket['title'], 
				'description'               => $ticket['description'], 
				'solution_id'               => null, // TODO: If status is resolved, then allow solution to be set
				'author_id'                 => get_current_user_id(), 
				'assigned_to_operator_id'   => isset($ticket['assigned_to_operator']) ? $ticket['assigned_to_operator'] : null,
				'expertise_type_id'         => $ticket['expertise_type_id'],
				'assigned_to_specialist_id' => isset($ticket['assigned_to_specialist']) ? $ticket['assigned_to_specialist'] : null
			]
		);

		$ticketDeviceQuery->delete_by_ticket_id($ticketId);
		$ticketProgramQuery->delete_by_ticket_id($ticketId);

		// create devices
		foreach ($ticket['devices'] as $deviceId) {
			$ticketDeviceQuery->mia_insert([
				'ticket_id' => $ticketId,
				'device_id' => $deviceId
			]);
		}

		// software/OS's are not required...
		if (isset($ticket['programs'])) {

			// create the programs
			foreach ($ticket['programs'] as $programId) {
				$ticketProgramQuery->mia_insert([
					'ticket_id'  => $ticketId,
					'program_id' => $programId
				]);
			}
		}

		// don't bother updating the status if it hasn't changed
		if ($ticketQuery->get_ticket($ticketId)[0]->status_id != $ticket['status']) {
			$ticketStatusQuery->mia_insert([
				'ticket_id' => $ticketId,
				'status_id' => $ticket['status'],
				'staff_id'  => get_current_user_id()
			]);
		}

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticketId);
	}
}
