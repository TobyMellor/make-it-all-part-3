<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketQuery extends MakeItAllQuery {
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
					ticket.description,
					ticket.expertise_type_staff_id,
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
		$expertiseTypeStaffId
	) {
		return $this->mia_insert(
			[
				'title'                   => $title,
				'description'             => $description,
				'solution_id'             => $solutionId,
				'author_id'               => $authorId,
				'assigned_to_operator_id' => $assignedToOperatorId,
				'expertise_type_staff_id' => $expertiseTypeStaffId
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