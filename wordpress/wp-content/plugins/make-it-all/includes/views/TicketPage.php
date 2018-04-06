<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'views/MakeItAllPage.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'views/tables/TicketTable.php');

require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/StaffQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/ExpertiseTypeQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/DeviceQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/ProgramQuery.php');

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

		$context = $this->get_context('Create Tickets');

		$context['employees']       = json_encode((new StaffQuery)->get());
		$context['expertise_types'] = json_encode((new ExpertiseTypeQuery)->get());
		$context['devices']         = json_encode((new DeviceQuery)->get());
		$context['programs']        = json_encode((new ProgramQuery)->get());

		$this->render_pane($context);
	}

	public function update_pane() {
		//
	}

	public function delete_pane() {
		//
	}
}