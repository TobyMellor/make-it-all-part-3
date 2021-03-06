<?php

namespace MakeItAll\Includes\Views\Tables;

use \WP_List_Table;

if (!class_exists('WP_List_Table')) {
	require_once(ABSPATH . 'wp-admin/includes/class-wp-list-table.php');
}

abstract class Table extends WP_List_Table {
	protected $table;
	protected $prefix;
	protected $primary = 'id';

	public function __construct() {
		parent::__construct();

		global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
	}

	/**
	 * Prepare the items for the table to process
	 *
	 * @return Void
	 */
	public function prepare_items() {
		$columns  = $this->get_columns();
		$sortable = $this->get_sortable_columns();
		$data     = $this->table_data();

		usort($data, [
			&$this, 'sort_data'
		]);

		$perPage = 7;
		$currentPage = $this->get_pagenum();
		$totalItems = count($data);

		$this->set_pagination_args([
			'total_items' => $totalItems,
			'per_page'    => $perPage
		]);

		$data = array_slice($data, (($currentPage - 1) * $perPage), $perPage);

		$this->_column_headers = array($columns, [], $sortable, $this->primary);
		$this->items = $data;
	}

	/**
	 * Override the parent columns method. Defines the columns to use in your listing table
	 *
	 * @return Array
	 */
	public function get_columns() {
		return [];
	}

	/**
	 * Define the sortable columns
	 *
	 * @return Array
	 */
	public function get_sortable_columns() {
		return [];
	}

	/**
	 * Get the table data
	 *
	 * @return Array
	 */
	abstract protected function table_data();

	/**
     * Define what data to show on each column of the table
     *
     * @param  Array $item        Data
     * @param  String $columnName - Current column name
     *
     * @return Mixed
     */
    public function column_default($item, $columnName) {
        return !empty($item->{$columnName}) ? $item->{$columnName} : '–';
    }
	
	/**
	 * Allows you to sort the data by the variables set in the $_GET
	 *
	 * @return Mixed
	 */
	private function sort_data($a, $b) {
		// Set defaults
		$orderBy = 'updated_at_real';
		$order   = 'desc';

		// If orderby is set, use this as the sort column
		if (!empty($_GET['orderby'])) {
			$orderBy = $_GET['orderby'];
		}

		// If order is set use this as the order
		if (!empty($_GET['order'])) {
			$order = $_GET['order'];
		}

		if(is_numeric($a->{$orderBy}[0])){
			
			if(intval($a->{$orderBy}) > intval($b->{$orderBy})){
			   $result = 1;	
			} else if(intval($a->{$orderBy}) < intval($b->{$orderBy})) {
				$result = -1;
			} else {
				$result = 0;
			}
	
	
			
			
		} else {
			$result = strcmp($a->{$orderBy}, $b->{$orderBy});	
		}
	
		if ($order === 'asc') {
			return $result;
		}

		return -$result;
	}
}