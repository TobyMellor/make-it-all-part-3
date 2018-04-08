<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketProgramQuery extends MakeItAllQuery {
	protected $table = 'ticket_program';

	public function insert($ticketId, $programId) {
		return $this->mia_insert(
			[
				'ticket_id' => $ticketId,
				'program_id' => $programId
			]
		);
	}
}