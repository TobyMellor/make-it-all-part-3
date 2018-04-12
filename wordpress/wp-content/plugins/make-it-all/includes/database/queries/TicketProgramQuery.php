<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketProgramQuery extends MakeItAllQuery {
	protected $table = 'ticket_program';
	
	/**
	 * Get all program ids belonging to a ticket.
	 *
	 * @return Array
	 */
	public function get_program_ids_by_ticket_id($ticketId) {
		return array_map(
			function($value) {
				return $value->program_id;
			},
			$this->get_results(
				"
					SELECT program_id
					FROM {$this->prefix}{$this->table}
					WHERE ticket_id = {$ticketId}
				"
			)
		);
	}

	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($ticketId, $programId) {
		return $this->mia_insert(
			[
				'ticket_id' => $ticketId,
				'program_id' => $programId
			]
		);
	}
}