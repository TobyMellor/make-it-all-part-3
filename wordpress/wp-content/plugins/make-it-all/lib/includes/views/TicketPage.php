<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\TicketTable;

use MakeItAll\Includes\Database\Queries\{
	TicketQuery,
	TicketDeviceQuery,
	TicketProgramQuery,
	TicketStatusQuery,
	CallQuery,
	CallTicketQuery,
	UserQuery,
	ExpertiseTypeStaffQuery,
	ExpertiseTypeQuery,
	DeviceQuery,
	ProgramQuery,
	CommentQuery
};

class TicketPage extends Page {
	protected $name     = 'Ticket';
	protected $icon     = 'dashicons-tickets-alt';
	protected $position = 2;
	protected $pages = [
		'Create',
		'Update',
		'Follow-up'
	];

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
					$ticketQuery->mia_delete($_GET['ticket_id']);
				} else if (isset($_GET['ticket'])) {
					foreach ($_GET['ticket'] as $ticketId) {
						$ticketQuery->mia_delete($ticketId);
					}
				}
			}
		}

		if (isset($_GET['id'])) {
			$context = $this->get_required_data('Viewing Ticket');
			$context = $this->getTicket($context, $_GET['id']);

			$this->render_pane($context); // render page before inserting table
		} else {
			$context = $this->get_context('View Tickets');

			$this->render_pane($context); // render page before inserting table

			$ticketTable = new TicketTable();
			$ticketTable->prepare_items();
			$ticketTable->search_box('search', 'search_id');
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

		$context = $this->get_required_data('Create Tickets');

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
		$commentQuery       = new CommentQuery();

		// create the call containing the tickets
		$callId = $callQuery->mia_insert([
			'time'        => date('Y-m-d H:i:s', strtotime($_POST['date_of_call'])),
			'operator_id' => get_current_user_id(),
			'caller_id'   => $_POST['caller']['id']
		]);

		// create the tickets, each containing a status and potentially multiple devices/programs
		foreach ($_POST['tickets'] as $ticket) {
			$ticketData = [
				'title'                     => $ticket['title'], 
				'description'               => $ticket['description'], 
				'solution_id'               => null,
				'author_id'                 => get_current_user_id(), 
				'assigned_to_operator_id'   => isset($ticket['assigned_to_operator']) ? $ticket['assigned_to_operator'] : null,
				'expertise_type_id'         => $ticket['expertise_type_id'],
				'assigned_to_specialist_id' => isset($ticket['assigned_to_specialist']) ? $ticket['assigned_to_specialist'] : null
			];

			$ticketId = $ticketQuery->mia_insert($ticketData);

			if ($ticket['status'] == 3) {
				$commentId = $commentQuery->mia_insert([
					'content' => $ticket['solution'],
					'author_id' => get_current_user_id(),
					'ticket_id' => $ticketId,
					'call_id'   => null
				]);

				$ticketData['solution_id'] = $commentId;

				$ticketQuery->mia_update($ticketId, $ticketData);
			}

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

			// set the ticket's status
			$ticketStatusQuery->mia_insert([
				'ticket_id' => $ticketId,
				'status_id' => $ticket['status'],
				'user_id'   => get_current_user_id()
			]);

			// link the first call to the ticket
			$callTicketQuery->mia_insert([
				'call_id'   => $callId,
				'ticket_id' => $ticketId
			]);
		}

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticketId);
	}

	public function update_pane() {
		parent::update_pane();

		$context = $this->get_required_data('Update Ticket');
		
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
		$commentQuery       = new CommentQuery();

		$ticket   = $_POST['ticket'];
		$ticketId = $ticket['id'];

		$commentId   = null;
		$commentData = [
			'content'   => $ticket['solution'],
			'author_id' => get_current_user_id(),
			'ticket_id' => $ticketId,
			'call_id'   => null
		];

		if ($ticket['solution_id']) { // a solution was previously set
			if ($ticket['status'] == 3) { // if the status is resolved, update the previous solution
				$commentQuery->mia_update($ticket['solution_id'], $commentData);

				$commentId = $ticket['solution_id'];
			} else { // if the status is not resolved, unset the previous solution
				$commentData['ticket_id'] = null;

				$commentQuery->mia_update($ticket['solution_id'], $commentData);
			}
		} else if ($ticket['status'] == 3) { // if no previous solution and status is resolved, create a new solution
			$commentId = $commentQuery->mia_insert($commentData);
		}

		$ticketQuery->mia_update(
			$ticketId,
			[
				'title'                     => $ticket['title'], 
				'description'               => $ticket['description'], 
				'solution_id'               => $commentId,
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
				'user_id'   => get_current_user_id()
			]);
		}

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticketId);
	}

	private function get_required_data($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = json_encode((new UserQuery)->get());
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
		$commentQuery       = new CommentQuery();

		// required ticket information
		$context['ticket_obj']           = $ticketQuery->get_ticket($id)[0];
		$context['ticket_obj']->devices  = $ticketDeviceQuery->get_device_ids_by_ticket_id($id);
		$context['ticket_obj']->programs = $ticketProgramQuery->get_program_ids_by_ticket_id($id);
		$context['ticket_obj']->comments = $commentQuery->get_comments_by_ticket_id($id);

		foreach ($context['ticket_obj']->comments as $comment) $comment->gravatar_url = get_avatar_url($comment->author_id);

		// extra helpful info for the side panels
		$context['ticket_obj']->call_history                = $ticketQuery->get_call_history($id);
		$context['ticket_obj']->status_history              = $ticketQuery->get_status_history($id);
		$context['ticket_obj']->similar_tickets             = $ticketQuery->get_similar_tickets($id);
		$context['ticket_obj']->tickets_by_caller           = $ticketQuery->get_tickets_by_caller($id);

		$context['ticket'] = json_encode($context['ticket_obj']);

		return $context;
	}
}