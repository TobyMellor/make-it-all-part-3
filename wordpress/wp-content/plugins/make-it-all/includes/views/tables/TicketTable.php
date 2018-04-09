<?php

if (!class_exists('MakeItAllTable')) {
	require_once(plugin_dir_path(dirname(__FILE__)) . 'tables/MakeItAllTable.php');
}

class TicketTable extends MakeItAllTable {
	protected $table = 'ticket';

	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
			'cb'                      => '<input type="checkbox">',
			'id'                      => 'ID',
			'title'                   => 'Title',
			'status'                  => 'Status',
			'last_caller'             => 'Last Caller',
			'created_at'              => 'Created At',
			'updated_at'              => 'Updated At'
		];
	}

	/**
	 * Define the sortable columns
	 *
	 * @return Array
	 */
	public function get_sortable_columns() {
		return [
			'id' => [
				'id', false
			],
			'title' => [
				'title', false
			]
		];
	}

	/**
	 * Get the table data
	 *
	 * @return Array
	 */
	protected function table_data() {
		global $wpdb;

		return $wpdb->get_results("
			SELECT
				ticket.id AS id,
				title,
				assigned_to_operator_id,
				status.name AS status,
				caller.name AS last_caller,
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
			LEFT JOIN (
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
			JOIN {$this->prefix}staff AS caller
				ON caller.id = _call.caller_id
		");
	}

	/**
	 * Adds 'Delete' to the bulk actions dropdown above the table
	 *
	 * @return Array
	 */
	protected function get_bulk_actions() {
		return [
			'delete' => 'Delete'
		];
	}

	/**
	 * Prepends a checkbox to each row for bulk actions
	 *
	 * @return String
	 */
	protected function column_cb($item) {
		return '<input type="checkbox" name="ticket[]" value="' . $item->id . '">';
	}

	/**
	 * Adds actions below each row, but depends on the users
	 * capabilities
	 *
	 * @return String
	 */
	protected function column_title($item) {
		$actions = [
			'view' => '<a href="' . get_home_url() . '/tickets#' . $item->id . '" target="_blank">View</a>',
		];

		if (current_user_can('edit_make_it_all')) {
			$actions = array_merge($actions, [
				'edit'      => '<a href="admin.php?page=update_ticket&ticket_id=' . $item->id . '">Edit</a>',
				'follow_up' => '<a href="admin.php?page=update_ticket&action=follow_up&ticket_id=' . $item->id . '">Register follow-up call</a>',
				'delete'    => '<a href="admin.php?page=ticket&action=delete&ticket_id=' . $item->id . '">Delete</a>'
			]);
		}

		return $item->title . $this->row_actions($actions, true); // true means always show the actions
	}

	/**
	 * Wraps the status in a filter span for styling
	 *
	 * @return String
	 */
	protected function column_status($item) {
		return '
			<span class="filter filter-' . strtolower(strtok($item->status, ' ')) . '">
				' . $item->status . '
			</span>
		';
	}
}