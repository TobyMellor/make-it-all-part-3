<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class ExpertiseTypeQuery extends MakeItAllQuery {
	protected $table = 'expertise_type';

	/**
	 * Select all expertise types with the important joins.
	 *
	 * @return Array
	 */
	public function get() {
		$expertiseTypes = $this->get_results(
			"
				SELECT id, name, parent_id
				FROM {$this->prefix}{$this->table}
			"
		);

		foreach ($expertiseTypes as $expertiseType) {
			$expertiseType->children = [];

			foreach ($expertiseTypes as $expertiseTypeInner) {
				if ($expertiseTypeInner->parent_id === $expertiseType->id) $expertiseType->children[] = $expertiseTypeInner->id;
			}
		}

		return $expertiseTypes;
	}
}