<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketQuery extends MakeItAllQuery {
	protected $table = 'ticket';

	public function get() {
		//
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

	public function insert() {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}ticket`
					(
						`title`,
						`description`,
						`solution_id`,
						`author_id`,
						`assigned_to_operator_id`,
						`expertise_type_staff_id`,
						`created_at`,
						`updated_at`
					)
				VALUES
					(%s, %s, %d, %d, %d, %d, %s, %s)
			",
			$title, $description, $solutionId, $authorId, $assignedToOperatorId, $expertiseTypeStaffId
		);
	}
}