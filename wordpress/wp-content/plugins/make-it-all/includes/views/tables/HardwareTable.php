<?php

if (!class_exists('MakeItAllTable')) {
	require_once(plugin_dir_path(dirname(__FILE__)) . 'tables/MakeItAllTable.php');
}

class HardwareTable extends MakeItAllTable {
	protected $table = 'device';

	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
			'cb'                      => '<input type="checkbox">',
			'id'                      => 'ID',
			'title'                    => 'Type',
			'make'                    => 'Make',
			'serial_no'               => 'Serial Number',
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
				id,
				type AS title,
				make,
				serial_no,
				created_at,
				updated_at
			FROM {$this->prefix}{$this->table} 
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
		return '<input type="checkbox" name="hardware[]" value="' . $item->id . '">';
	}

	/**
	 * Adds actions below each row, but depends on the users
	 * capabilities
	 *
	 * @return String
	 */
	protected function column_title($item) {
		$actions = [
			'view' => '<a href="/hardware#' . $item->id . '" target="_blank">View</a>',
		];

		if (current_user_can('edit_make_it_all')) {
			$actions = array_merge($actions, [
				'edit'      => '<a href="admin.php?page=update_hardware&hardware_id=' . $item->id . '">Edit</a>',
				'delete'    => '<a href="admin.php?page=ticket&action=delete&hardware_id=' . $item->id . '">Delete</a>'
			]);
		}

		return $item->title . $this->row_actions($actions, true); // true means always show the actions
	}

}