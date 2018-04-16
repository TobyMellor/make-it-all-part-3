<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'views/MakeItAllPage.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'views/tables/TicketTable.php');

require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/TicketQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/TicketDeviceQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/TicketProgramQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/TicketStatusQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/StaffQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/ExpertiseTypeQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/DeviceQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/ProgramQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/CallQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/CallTicketQuery.php');

class TicketPage extends MakeItAllPage {
	protected $name     = 'Ticket';
	protected $icon     = 'dashicons-tickets-alt';
	protected $position = 2;

	/**
	 * Displays the Tickets table
	 *
	 * @return @void
	 */
	public function read_pane() {
		parent::read_pane();

		// handle single delete and bulk delete before rendering page
		if (isset($_GET['action']) && $_GET['action'] === 'delete') {
			if (current_user_can('edit_make_it_all')) {
				$ticketQuery = new TicketQuery();

				if (isset($_GET['ticket_id'])) {
					$ticketQuery->delete($_GET['ticket_id']);
				} else if (isset($_GET['ticket'])) {
					foreach ($_GET['ticket'] as $ticketId) {
						$ticketQuery->delete($ticketId);
					}
				}
			}
		}

		if (isset($_GET['id'])) {
			$context = $this->getRequiredData('Viewing Ticket');
			$context = $this->getTicket($context, $_GET['id']);

			$this->render_pane($context); // render page before inserting table
		} else {
			$context = $this->get_context('View Tickets');

			$this->render_pane($context); // render page before inserting table

			$ticketTable = new TicketTable();
			$ticketTable->prepare_items();
			$ticketTable->display();
		}
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

		$context = $this->getRequiredData('Create Tickets');

		$this->render_pane($context);
	}

	protected function create_action() {
		global $wpdb;

		$callQuery          = new CallQuery();
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$ticketStatusQuery  = new TicketStatusQuery();
		$callTicketQuery    = new CallTicketQuery();

		// create the call containing the tickets
		$callQuery->insert(
			date('Y-m-d H:i:s', strtotime($_POST['date_of_call'])),
			get_current_user_id(),
			$_POST['caller']['id']
		);

		$callId = $wpdb->insert_id;

		// create the tickets, each containing a status and potentially multiple devices/programs
		foreach ($_POST['tickets'] as $ticket) {
			$ticketQuery->insert(
				$ticket['title'], 
				$ticket['description'], 
				null, // TODO: If status is resolved, then allow solution to be set
				get_current_user_id(), 
				isset($ticket['assigned_to_operator']) ? $ticket['assigned_to_operator'] : null, 
				$ticket['expertise_type_staff_id']
			);

			$ticketId = $wpdb->insert_id;

			// create devices
			foreach ($ticket['devices'] as $deviceId) {
				$ticketDeviceQuery->insert(
					$ticketId,
					$deviceId
				);
			}

			// software/OS's are not required...
			if (isset($ticket['programs'])) {

				// create the programs
				foreach ($ticket['programs'] as $programId) {
					$ticketProgramQuery->insert(
						$ticketId,
						$programId
					);
				}
			}

			// set the ticket's status
			$ticketStatusQuery->insert(
				$ticketId,
				$ticket['status'],
				get_current_user_id()
			);

			// link the first call to the ticket
			$callTicketQuery->insert(
				$callId,
				$ticketId
			);
		}

		$this->mia_redirect('admin.php?page=ticket&id=' . $ticketId); exit;
	}

	public function update_pane() {
		parent::update_pane();

		$context = $this->getRequiredData('Update Ticket');
		
		$context['tickets'] = json_encode((new TicketQuery)->get());

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

		$ticketQuery->update(
			$ticketId,
			[
				'title'                   => $ticket['title'], 
				'description'             => $ticket['description'], 
				'solution_id'             => null, // TODO: If status is resolved, then allow solution to be set
				'author_id'               => get_current_user_id(), 
				'assigned_to_operator_id' => isset($ticket['assigned_to_operator']) ? $ticket['assigned_to_operator'] : null, 
				'expertise_type_staff_id' => $ticket['expertise_type_staff_id']
			]
		);

		$ticketDeviceQuery->delete_by_ticket_id($ticketId);
		$ticketProgramQuery->delete_by_ticket_id($ticketId);

		// create devices
		foreach ($ticket['devices'] as $deviceId) {
			$ticketDeviceQuery->insert(
				$ticketId,
				$deviceId
			);
		}

		// software/OS's are not required...
		if (isset($ticket['programs'])) {

			// create the programs
			foreach ($ticket['programs'] as $programId) {
				$ticketProgramQuery->insert(
					$ticketId,
					$programId
				);
			}
		}

		// don't bother updating the status if it hasn't changed
		if ($ticketQuery->get_ticket($ticketId)[0]->status_id != $ticket['status']) {
			$ticketStatusQuery->insert(
				$ticketId,
				$ticket['status'],
				get_current_user_id()
			);
		}

		$this->mia_redirect('admin.php?page=ticket&id=' . $ticketId); exit;
	}

	private function getRequiredData($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = json_encode((new StaffQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());
		$context['devices']              = json_encode((new DeviceQuery)->get());
		$context['programs']             = json_encode((new ProgramQuery)->get());

		return $context;
	}

	private function getTicket($context, $id) {
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();

		// required ticket information
		$context['ticket_obj']           = $ticketQuery->get_ticket($id)[0];
		$context['ticket_obj']->devices  = $ticketDeviceQuery->get_device_ids_by_ticket_id($id);
		$context['ticket_obj']->programs = $ticketProgramQuery->get_program_ids_by_ticket_id($id);

		// extra helpful info for the side panels
		$context['ticket_obj']->call_history                = $ticketQuery->get_call_history($id);
		$context['ticket_obj']->status_history              = $ticketQuery->get_status_history($id);
		$context['ticket_obj']->similar_tickets             = $ticketQuery->get_similar_tickets($id);
		$context['ticket_obj']->tickets_by_caller           = $ticketQuery->get_tickets_by_caller($id);

		$context['ticket'] = json_encode($context['ticket_obj']);

		return $context;
	}
}