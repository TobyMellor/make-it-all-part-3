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
	 * Returns 3 of the most popular expertise types
	 *
	 * @return Array
	 */
	public function get_popular() {
		return $this->get_results(
			"
				SELECT
					expertise_type.id AS id,
					name,
					parent_id,
					(
						SELECT COUNT(*) FROM {$this->prefix}ticket
						WHERE expertise_type_id = expertise_type.id
					) AS e_count
				FROM {$this->prefix}expertise_type AS expertise_type
				ORDER BY e_count DESC
				LIMIT 4
			"
		);
	}

	/**
	 * Returns 3 of the most popular expertise types
	 *
	 * @return Array
	 */
	public function get_recent() {
		return $this->get_results(
			"
				SELECT expertise_type.id, name, parent_id
				FROM {$this->prefix}expertise_type AS expertise_type
				JOIN {$this->prefix}ticket AS ticket
					ON ticket.expertise_type_id = expertise_type.id
				GROUP BY ticket.expertise_type_id
				ORDER BY MAX(ticket.updated_at) DESC
				LIMIT 4
			"
		);
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
		if (!isset($columns['parent_id'])) $columns['parent_id'] = null;

		$validator = v::key('name', v::alnum()->length(2, 256))
			->key('parent_id', v::optional(v::intVal()));

		return $this->assert_validation($validator, $columns);
	}
}