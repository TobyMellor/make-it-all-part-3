<?php

namespace MakeItAll\Includes\Views\Tables;

use MakeItAll\Includes\Views\Tables\Table;
use MakeItAll\Includes\Database\Queries\DepartmentQuery;

class DepartmentTable extends Table {
	protected $table = 'department';

	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
			'cb'           => '<input type="checkbox">',
			'id'           => 'ID',
			'name'         => 'Name',
			'phone_number' => 'Phone',
			'created_at'   => 'Created At',
			'updated_at'   => 'Updated At'
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
			'name' => [
				'name', false
			]
		];
	}

	/**
	 * Get the table data
	 *
	 * @return Array
	 */
	protected function table_data() {
		return (new DepartmentQuery)->get();
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
		return '<input type="checkbox" name="department[]" value="' . $item->id . '">';
	}

	/**
	 * Adds actions below each row, but depends on the users
	 * capabilities
	 *
	 * @return String
	 */
	protected function column_name($item) {
		$actions = [];

		if (current_user_can('edit_make_it_all')) {
			$actions = [
				'update' => '<a href="admin.php?page=department_update&id=' . $item->id . '">Update</a>',
				'delete' => '<a href="admin.php?page=department&action=delete&department_id=' . $item->id . '">Delete</a>'
			];
		}

		return $item->name . $this->row_actions($actions, true); // true means always show the actions
	}
}
