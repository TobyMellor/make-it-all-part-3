<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class TicketStatusQuery extends Query {
	protected $table = 'ticket_status';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($ticketId, $statusId, $staffId) {
		return $this->mia_insert(
			[
				'ticket_id' => $ticketId,
				'status_id' => $statusId,
				'staff_id'  => $staffId
			]
		);
	}
}