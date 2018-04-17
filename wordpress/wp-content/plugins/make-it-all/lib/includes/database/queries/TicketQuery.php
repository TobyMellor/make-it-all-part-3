<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class TicketQuery extends Query {
	protected $table = 'ticket';
	
	/**
	 * Get a list of tickets
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, title
				FROM {$this->prefix}{$this->table}
			"
		);
	}

	/**
	 * Get the tickets that are unresolved
	 *
	 * @return Array
	 */
	public function get_open_tickets() {
		return $this->get_results(
			"
				SELECT staff_id
				FROM {$this->prefix}ticket_status
				WHERE id IN (
					SELECT MAX(id) AS id
					FROM {$this->prefix}ticket_status
					GROUP BY ticket_id
				)
				AND status_id <> 3
				ORDER BY ticket_id
			"
		);
	}

	/**
	 * Get ticket by ID
	 *
	 * @return Array
	 */
	public function get_ticket($ticketId) {
		return $this->get_results(
			"
				SELECT
					ticket.id,
					ticket.title,
					status.name AS status,
					status.id AS status_id,
					ticket.description,
					ticket.expertise_type_id,
					ticket.assigned_to_specialist_id,
					ticket.assigned_to_operator_id,
					ticket.created_at,
					ticket.updated_at
				FROM {$this->prefix}ticket AS ticket
				JOIN (
					SELECT
						ticket_id, status_id
					FROM {$this->prefix}ticket_status
					WHERE id IN (
						SELECT MAX(id) AS id
						FROM {$this->prefix}ticket_status
						GROUP BY ticket_id
					)
				) AS ticket_status
					ON ticket_status.ticket_id = ticket.id
				JOIN {$this->prefix}status AS status
					ON status.id = ticket_status.status_id
				WHERE ticket.id = {$ticketId};
			"
		);
	}

	/**
	 * Get all the calls referencing a ticket
	 *
	 * @return Array
	 */
	public function get_call_history($ticketId) {
		return $this->get_results(
			"
				SELECT
					staff_caller.name AS caller,
					staff_operator.name AS operator,
					mia_call.time,
					mia_call.id
				FROM {$this->prefix}call AS mia_call
				JOIN {$this->prefix}call_ticket AS call_ticket
					ON call_ticket.call_id = mia_call.id
				JOIN {$this->prefix}staff AS staff_caller
					ON staff_caller.id = mia_call.caller_id
				JOIN {$this->prefix}staff AS staff_operator
					ON staff_operator.id = mia_call.operator_id
				WHERE call_ticket.ticket_id = {$ticketId}
			"
		);
	}

	/**
	 * Get other tickets with the same expertise type
	 *
	 * @return Array
	 */
	public function get_similar_tickets($ticketId) {
		return $this->get_results(
			"
				SELECT
					similar_ticket.id,
					similar_ticket.title,
					status.name AS status
				FROM {$this->prefix}ticket AS ticket
				JOIN {$this->prefix}expertise_type_staff AS ticket_expertise_type_staff
					ON ticket_expertise_type_staff.id = ticket.expertise_type_staff_id
				JOIN {$this->prefix}expertise_type_staff AS expertise_type_staff
					ON expertise_type_staff.expertise_type_id = ticket_expertise_type_staff.expertise_type_id
				JOIN {$this->prefix}ticket AS similar_ticket
					ON similar_ticket.expertise_type_staff_id = expertise_type_staff.id
				JOIN (
					SELECT
						ticket_id, status_id
					FROM {$this->prefix}ticket_status
					WHERE id IN (
						SELECT MAX(id) AS id
						FROM {$this->prefix}ticket_status
						GROUP BY ticket_id
					)
				) AS ticket_status
					ON ticket_status.ticket_id = similar_ticket.id
				JOIN {$this->prefix}status AS status
					ON status.id = ticket_status.status_id
				WHERE ticket.id = {$ticketId}
					AND similar_ticket.id <> {$ticketId}
			"
		);
	}

	/**
	 * Get the status history of a ticket
	 *
	 * @return Array
	 */
	public function get_status_history($ticketId) {
		return $this->get_results(
			"
				SELECT
					staff.name AS staff_name,
					ticket_status.created_at,
					status.name
				FROM {$this->prefix}ticket_status AS ticket_status
				JOIN {$this->prefix}staff AS staff
					ON staff.id = ticket_status.staff_id
				JOIN {$this->prefix}status AS status
					ON status.id = ticket_status.status_id
				WHERE ticket_status.ticket_id = {$ticketId}
			"
		);
	}

	/**
	 * Get tickets raised by the first caller
	 *
	 * @return Array
	 */
	public function get_tickets_by_caller($ticketId) {
		return $this->get_results(
			"
				SELECT
					ticket.id,
					ticket.title,
					ticket.updated_at
				FROM {$this->prefix}ticket AS ticket
				JOIN (
					SELECT
						id, ticket_id, call_id
					FROM {$this->prefix}call_ticket
					WHERE id IN (
						SELECT MIN(id) AS id
						FROM {$this->prefix}call_ticket
						GROUP BY ticket_id
					)
				) AS call_ticket
					ON call_ticket.ticket_id = ticket.id
				JOIN {$this->prefix}call AS first_call
					ON first_call.id = call_ticket.call_id
				WHERE first_call.caller_id IN (
					SELECT
						first_call.caller_id
					FROM {$this->prefix}ticket AS original_ticket
					JOIN (
						SELECT
							id, ticket_id, call_id
						FROM {$this->prefix}call_ticket
						WHERE id IN (
							SELECT MIN(id) AS id
							FROM {$this->prefix}call_ticket
							GROUP BY ticket_id
						)
					) AS call_ticket
						ON call_ticket.ticket_id = original_ticket.id
					JOIN {$this->prefix}call AS first_call
						ON first_call.id = call_ticket.call_id
					WHERE original_ticket.id = {$ticketId}
				)
				AND ticket.id <> {$ticketId};
			"
		);
	}

	/**
	 * Inserts a new record into the DB.
	 *
	 * @return Boolean
	 */
	public function insert(
		$title,
		$description,
		$solutionId,
		$authorId,
		$assignedToOperatorId,
		$expertiseTypeId,
		$assignedToSpecialistId
	) {
		return $this->mia_insert(
			[
				'title'                     => $title,
				'description'               => $description,
				'solution_id'               => $solutionId,
				'author_id'                 => $authorId,
				'assigned_to_operator_id'   => $assignedToOperatorId,
				'expertise_type_id'         => $expertiseTypeId,
				'assigned_to_specialist_id' => $assignedToSpecialistId
			]
		);
	}

	/**
	 * Updates a record in the DB.
	 *
	 * @return Boolean
	 */
	public function update($ticketId, $columns) {
		return $this->mia_update($ticketId, $columns);
	}

	/**
	 * Deletes a record from the DB.
	 *
	 * @return Boolean
	 */
	public function delete($ticketId) {
		return $this->mia_delete($ticketId);
	}
}