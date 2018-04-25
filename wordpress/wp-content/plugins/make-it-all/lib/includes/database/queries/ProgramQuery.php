<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class ProgramQuery extends Query {
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
	
	/**
	 * Retuns software with given ID
	 *
	 * @return array
	 */
	public function get_software($id) {
		if($id){
			return $this->get_results(
				"
					SELECT *
					FROM {$this->prefix}{$this->table}
					WHERE id = $id
				"
			);
		} else {
			return $this->get_results(
				"
					SELECT *
					FROM {$this->prefix}{$this->table}
					
				"
			);			
			
		}
	}

	/**
	 * Retuns all operating systems
	 *
	 * @return array
	 */
	public function get_opsystems(){
		return $this->get_results(
		"
			SELECT *
			FROM {$this->prefix}{$this->table}
			WHERE operating_system = '1'
		"
		);
	}

	/**
	 * Deletes a record from the DB.
	 *
	 * @return Boolean
	 */
	public function delete($ticketId) {
		return $this->mia_delete($ticketId);
	}
	
	

	protected function validate($columns) {
		return true;
	}
}