<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class ExpertiseTypeQuery extends Query {
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

	protected function validate($columns) {
		return true;
	}
}