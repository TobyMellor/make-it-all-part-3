<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

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

	public function get_tickets_table($search = null) {
		$sql = "
				SELECT
					ticket.id AS id,
					title,
					assigned_to_operator_id,
					status.name AS status,
					caller.display_name AS last_caller,
					ticket.created_at AS created_at,
					ticket.updated_at AS updated_at
				FROM {$this->prefix}{$this->table} AS ticket
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
				JOIN (
					SELECT
						ticket_id, call_id
					FROM {$this->prefix}call_ticket
					WHERE id IN (
						SELECT MIN(id) AS id
						FROM {$this->prefix}call_ticket
						GROUP BY ticket_id
					)
				) AS call_ticket
					ON call_ticket.ticket_id = ticket.id
				JOIN {$this->prefix}call AS _call
					ON _call.id = call_ticket.call_id
				JOIN {$this->rawPrefix}users AS caller
					ON caller.id = _call.caller_id
			";

		if ($search) {
			$search = $this->wpdb->esc_like($search);

			$sql .= $this->wpdb->prepare(" WHERE ticket.title LIKE '%%%s%%' OR ticket.id LIKE '%%%s%%'", [$search, $search]);
		}

		$sql .= " ORDER BY UNIX_TIMESTAMP(ticket.updated_at) DESC";

		return $this->get_results($sql);
	}

	/**
	 * Get the tickets for a staff member
	 *
	 * @return Array
	 */
	public function get_staff_tickets() {
		return $this->get_results(
			"
				SELECT
					ticket_status.user_id,
					ticket_status.status_id,
					ticket.assigned_to_specialist_id,
					ticket.assigned_to_operator_id
				FROM {$this->prefix}ticket_status AS ticket_status
				LEFT JOIN {$this->prefix}ticket AS ticket
					ON ticket.id = ticket_status.ticket_id
				WHERE ticket_status.id IN (
					SELECT MAX(id) AS id
					FROM {$this->prefix}ticket_status
					GROUP BY ticket_id
				)
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
					ticket.solution_id,
					comment.content AS solution,
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
				LEFT JOIN {$this->prefix}comment AS comment
					ON comment.id = ticket.solution_id
				WHERE ticket.id = {sanitize_key($ticketId)};
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
					staff_caller.display_name AS caller,
					staff_operator.display_name AS operator,
					mia_call.time,
					mia_call.id
				FROM {$this->prefix}call AS mia_call
				JOIN {$this->prefix}call_ticket AS call_ticket
					ON call_ticket.call_id = mia_call.id
				JOIN {$this->rawPrefix}users AS staff_caller
					ON staff_caller.id = mia_call.caller_id
				JOIN {$this->rawPrefix}users AS staff_operator
					ON staff_operator.id = mia_call.operator_id
				WHERE call_ticket.ticket_id = {sanitize_key($ticketId)}
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
				JOIN {$this->prefix}ticket AS similar_ticket
					ON similar_ticket.expertise_type_id = ticket.expertise_type_id
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
					AND similar_ticket.id <> {sanitize_key($ticketId)}
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
					staff.display_name AS staff_name,
					ticket_status.created_at,
					status.name
				FROM {$this->prefix}ticket_status AS ticket_status
				JOIN {$this->rawPrefix}users AS staff
					ON staff.id = ticket_status.user_id
				JOIN {$this->prefix}status AS status
					ON status.id = ticket_status.status_id
				WHERE ticket_status.ticket_id = {sanitize_key($ticketId)}
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
					WHERE original_ticket.id = {sanitize_key($ticketId)}
				)
				AND ticket.id <> {sanitize_key($ticketId)};
			"
		);
	}

	/**
	 * Deletes a record from the DB.
	 *
	 * @return Boolean
	 */
	public function delete($ticketId) {
		return $this->mia_delete($ticketId);
	}
	
	/**
	 * Validation for Ticket
	 *    - Title: String, Length between 2 and 256
	 *    - Description: String, Length between 2 and 65535
	 *    - Solution ID (Optional): Integer
	 *    - Author ID: Integer
	 *    - Assigned To Operator ID (Optional): Integer
	 *    - Expertise Type ID: Integer
	 *    - Assigned To Specialist ID (Optional): Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('title', v::stringType()->length(2, 256))
			->key('description',               v::stringType()->length(2, 65535))
			->key('solution_id',               v::optional(v::intVal()))
			->key('author_id',                 v::intVal())
			->key('assigned_to_operator_id',   v::optional(v::intVal()))
			->key('expertise_type_id',         v::intVal())
			->key('assigned_to_specialist_id', v::optional(v::intVal()));

		return $this->assert_validation($validator, $columns);
	}
}