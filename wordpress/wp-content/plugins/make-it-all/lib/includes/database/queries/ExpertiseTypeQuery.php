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
	
	/**
	 * Validation for Expertise Type
	 *    - Name: String, Alphanumeric, Length between 2 and 256
	 *    - Parent ID (optional): Integer
	 *
	 * @param $columns key/value of columns
	 *
	 * @return Boolean true if pass, dies (and returns false) on fail
	 */
	protected function validate($columns) {
		$validator = v::key('name', v::alnum()->length(2, 256))
			->key('parent_id', v::optional(v::intVal()));

		return $this->assert_validation($validator, $columns);
	}
}