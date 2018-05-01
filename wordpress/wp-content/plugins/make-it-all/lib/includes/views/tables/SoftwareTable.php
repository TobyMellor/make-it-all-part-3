<?php

namespace MakeItAll\Includes\Views\Tables;
use MakeItAll\Includes\Views\Tables\Table;
use MakeItAll\Includes\Database\Queries\ProgramQuery;

class SoftwareTable extends Table {
	protected $table = "program";
	
	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
			'cb'				=> '<input type="checkbox">',
			'id'				=> 'ID',
			'title'				=> 'Name',
			'expiry_date'       => 'Expiry Date',
			'operating_system'  => 'Type',
			'created_at' 		=> 'Created At',
			'updated_at' 		=> 'Updated At'
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
		return (new ProgramQuery)->get_program_table(isset($_GET['s']) ? $_GET['s'] : null);
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
		return '<input type="checkbox" name="software[]" value="' . $item->id . '">';
	}
	
	/**
	 * Adds actions below each row, but depends on the users
	 * capabilities
	 *
	 * @return String
	 */
	protected function column_title($item) {
		$actions = [
			'view' => '<a href="admin.php?page=software&id=' . $item->id . '">View</a>',
		];

		if (current_user_can('edit_make_it_all')) {
			$actions = array_merge($actions, [
				'update' => '<a href="admin.php?page=software_update&id=' . $item->id . '">Update</a>',
				'delete' => '<a href="admin.php?page=software&action=delete&software_id=' . $item->id . '">Delete</a>'
			]);
		}

		return $item->title . $this->row_actions($actions, true); // true means always show the actions
	}	
}
