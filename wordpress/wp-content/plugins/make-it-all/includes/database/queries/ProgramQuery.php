<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class ProgramQuery extends MakeItAllQuery {
	protected $table = 'program';

	/**
	 * Select all programs.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, name, operating_system, expiry_date
				FROM {$this->prefix}{$this->table}
			"
		);
	}
}