<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class ExpertiseTypeStaffQuery extends MakeItAllQuery {
	protected $table = 'expertise_type_staff';

	/**
	 * Select all expertise staff types with the important joins.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, staff_id
				FROM {$this->prefix}{$this->table}
			"
		);
	}
}