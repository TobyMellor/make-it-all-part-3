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
		if (!current_user_can('read_make_it_all')) wp_die(__('You do not have sufficient permissions to access this page.'));

		if (isset($_GET['action']) && isset($_GET['ticket_id']) && $_GET['action'] === 'delete') {
			(new TicketQuery)->delete($_GET['ticket_id']);
		}

		$context = $this->get_context('View Tickets');

		$this->render_pane($context); // render page before inserting table

		$ticketTable = new TicketTable();
		$ticketTable->prepare_items();
		
		$ticketTable->display();
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
		if (!current_user_can('edit_make_it_all')) wp_die(__('You do not have sufficient permissions to access this page.'));

		if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->create_action();

		$context = $this->get_context('Create Tickets');

		$context['employees']       = json_encode((new StaffQuery)->get());
		$context['expertise_types'] = json_encode((new ExpertiseTypeQuery)->get());
		$context['devices']         = json_encode((new DeviceQuery)->get());
		$context['programs']        = json_encode((new ProgramQuery)->get());

		$this->render_pane($context);
	}

	private function create_action() {
		global $wpdb;

		$callQuery          = new CallQuery();
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$ticketStatusQuery  = new TicketStatusQuery();

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
		}

		// TODO: redirect to a single view page, or the update page
		return $this->read_pane();
	}

	public function update_pane() {
		//
	}
}