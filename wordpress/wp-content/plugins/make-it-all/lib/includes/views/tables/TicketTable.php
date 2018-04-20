<?php

namespace MakeItAll\Includes\Views\Tables;

use MakeItAll\Includes\Views\Tables\Table;
use MakeItAll\Includes\Database\Queries\TicketQuery;

class TicketTable extends Table {
	protected $table   = 'ticket';
	protected $primary = 'title';

	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
			'cb'          => '<input type="checkbox">',
			'id'          => 'ID',
			'title'       => 'Title',
			'status'      => 'Status',
			'last_caller' => 'Last Caller',
			'created_at'  => 'Created At',
			'updated_at'  => 'Updated At'
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
		return (new TicketQuery)->get_tickets_table();
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
			'view' => '<a href="admin.php?page=ticket&id=' . $item->id . '">View</a>',
		];

		if (current_user_can('edit_make_it_all')) {
			$actions = array_merge($actions, [
				'edit'      => '<a href="admin.php?page=ticket_update&id=' . $item->id . '">Update</a>',
				'follow_up' => '<a href="admin.php?page=ticket_update&action=follow_up&id=' . $item->id . '">Register follow-up call</a>',
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