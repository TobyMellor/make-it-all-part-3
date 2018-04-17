<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class CallTicketQuery extends Query {
	protected $table = 'call_ticket';
	
	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert($callId, $ticketId) {
		return $this->mia_insert(
			[
				'call_id'   => $callId,
				'ticket_id' => $ticketId
			]
		);
	}
}