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
		'Create Ticket'  => [
			'callback'    => 'create_pane',
			'page_action' => 'ticket_create'
		],
		'Update Ticket'  => [
			'callback' => 'update_pane',
			'page_action' => 'ticket_update'
		],
		'Follow-up Call' => [
			'callback' => 'follow_up_call_pane',
			'page_action' => 'call_follow_up'
		]
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
			$context = $this->get_ticket($context, $_GET['id']);

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
		$callQuery    = new CallQuery();
		$commentQuery = new CommentQuery();

		// create the call containing the tickets
		$callId = $callQuery->mia_insert([
			'time'        => date('Y-m-d H:i:s', strtotime($_POST['date_of_call'])),
			'operator_id' => get_current_user_id(),
			'caller_id'   => $_POST['caller']['id']
		]);

		// create the tickets, each containing a status and potentially multiple devices/programs
		foreach ($_POST['tickets'] as $ticket) {
			$ticketId = $this->create_ticket($ticket, $callId);

			if ($_POST['call_notes']) {
				$commentId = $commentQuery->mia_insert([
					'content'   => $_POST['call_notes'],
					'author_id' => get_current_user_id(),
					'ticket_id' => $ticketId,
					'call_id'   => $callId
				]);
			}
		}

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticketId);
	}

	private function create_ticket($ticket, $callId) {
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$ticketStatusQuery  = new TicketStatusQuery();
		$callTicketQuery    = new CallTicketQuery();
		$commentQuery       = new CommentQuery();

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

		return $ticketId;
	}

	public function update_pane() {
		parent::update_pane();

		$context = $this->get_required_data('Update Ticket');
		
		$context['tickets'] = (new TicketQuery)->get();

		if (isset($_GET['id'])) {
			$ticketId = $_GET['id'];

			// ticket's current data
			$context = $this->get_ticket($context, $ticketId);
		}

		$this->render_pane($context);
	}

	protected function update_action() {
		$ticket = $_POST['ticket'];

		var_dump($ticket);

		$this->update_ticket($ticket);

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticket['id']);
	}

	private function update_ticket($ticket) {
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$ticketStatusQuery  = new TicketStatusQuery();
		$commentQuery       = new CommentQuery();

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
	}

	public function follow_up_call_pane() {
		if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->follow_up_call_action();

		$this->enqueue_dependency('mia_follow_up_call', '/backend/js/' . $this->nameSlug . '/follow_up_call_ticket.js');

		$context = $this->get_required_data('Register Follow-up Call');

		$context['tickets'] = (new TicketQuery)->get();

		if (isset($_GET['id'])) $context['firstTicketId'] = $_GET['id'];

		$this->render_pane($context);
	}

	private function follow_up_call_action() {
		// create the call containing the tickets
		$callId = $callQuery->mia_insert([
			'time'        => date('Y-m-d H:i:s', strtotime($_POST['date_of_call'])),
			'operator_id' => get_current_user_id(),
			'caller_id'   => $_POST['caller']['id']
		]);

		// create the tickets, each containing a status and potentially multiple devices/programs
		foreach ($_POST['tickets'] as $key => $ticket) {
			if ($key === 'new') { // create new ticket
				foreach ($ticket['new'] as $ticket) {
					$ticket['id'] = $this->create_ticket($ticket, $callId);
				}
			} else { // update existing ticket
				$this->update_ticket($ticket);
			}

			if ($_POST['call_notes']) {
				$commentId = $commentQuery->mia_insert([
					'content'   => $_POST['call_notes'],
					'author_id' => get_current_user_id(),
					'ticket_id' => $ticket['id'],
					'call_id'   => $callId
				]);
			}
		}

		return $this->mia_redirect('admin.php?page=ticket&id=' . $ticket['id']);
	}

	private function get_required_data($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = (new UserQuery)->get();
		$context['expertise_types']      = (new ExpertiseTypeQuery)->get();
		$context['expertise_type_staff'] = (new ExpertiseTypeStaffQuery)->get();
		$context['devices']              = (new DeviceQuery)->get();
		$context['programs']             = (new ProgramQuery)->get();

		return $context;
	}

	private function get_ticket($context, $id) {
		$ticketQuery        = new TicketQuery();
		$ticketDeviceQuery  = new TicketDeviceQuery();
		$ticketProgramQuery = new TicketProgramQuery();
		$commentQuery       = new CommentQuery();

		// required ticket information
		$context['ticket']           = $ticketQuery->get_ticket($id)[0];
		$context['ticket']->devices  = $ticketDeviceQuery->get_device_ids_by_ticket_id($id);
		$context['ticket']->programs = $ticketProgramQuery->get_program_ids_by_ticket_id($id);
		$context['ticket']->comments = $commentQuery->get_comments_by_ticket_id($id);

		foreach ($context['ticket']->comments as $comment) $comment->gravatar_url = get_avatar_url($comment->author_id);

		// extra helpful info for the side panels
		$context['ticket']->call_history      = $ticketQuery->get_call_history($id);
		$context['ticket']->status_history    = $ticketQuery->get_status_history($id);
		$context['ticket']->similar_tickets   = $ticketQuery->get_similar_tickets($id);
		$context['ticket']->tickets_by_caller = $ticketQuery->get_tickets_by_caller($id);

		return $context;
	}

	/**
	 * Register the API endpoints. This function must be named
	 * "add_api_endpoints" in any of the classes which extend
	 * Page to be loaded successfully.
	 *
	 * You may also need to change the Permalink Settings:
	 *     1. /wp-admin
	 *     2. Settings > Permalinks
	 *     3. Custom Permalink
	 *     4. Enter /%postname%/ and save
	 *
	 * These urls should be registered at /wp-json/make-it-all/v1/*
	 *
	 * @return @void
	 */
	public function add_api_endpoints() {
		register_rest_route($this->apiNamespace, '/ticket/(?P<id>\d+)', [
			'methods'  => 'GET',
			'callback' => function($request) {
				return $this->get_ticket([], $request['id'])['ticket'];
			}
		]);
	}
}