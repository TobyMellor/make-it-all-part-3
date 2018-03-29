<?php

if (!class_exists('MakeItAllTable')) {
	require_once(plugin_dir_path(dirname(__FILE__)) . 'tables/MakeItAllTable.php');
}

class TicketTable extends MakeItAllTable {
	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [
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
				'title',
				false
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

		return $wpdb->get_results("SELECT * FROM {$wpdb->prefix}mia_ticket");
	}
}