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
			'title'                   => 'Title',
			'description'             => 'Description',
			'solution_id'             => 'Solution',
			'author_id'               => 'Author ID',
			'assigned_to_operator_id' => 'Assigned To',
			'expertise_type_staff_id' => 'Expertise Type Staff ID',
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

		return $wpdb->get_results("SELECT * FROM {$this->prefix}{$this->table}");
	}

	protected function get_bulk_actions() {
		return [
			'delete' => 'Delete'
		];
	}

	protected function column_cb($item) {
		return '<input type="checkbox" name="ticket[]" value="' . $item->id . '">';
	}

	protected function column_title($item) {
		$actions = [
			'view'      => '<a href="/tickets#' . $item->id . '" target="_blank">View</a>',
			'edit'      => '<a href="admin.php?page=update_ticket&ticket_id=' . $item->id . '">Edit</a>',
			'follow_up' => '<a href="admin.php?page=update_ticket&action=follow_up&ticket_id=' . $item->id . '">Register follow-up call</a>',
			'delete'    => '<a href="admin.php?page=ticket&action=delete&ticket_id=' . $item->id . '">Delete</a>'
		];

		return $item->title . $this->row_actions($actions, true);
	}
}