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
	
	
	public function get_program_info($id){
		//toReturn = total, open, closed
		$toReturn = [0,0,0];
		
		//gets all tickets with hardware associated. 
		$programTickets = $this->get_results(
			"
				SELECT * 
				FROM {$this->prefix}ticket_{$this->table}
				WHERE program_id LIKE $id
			"
		);
		//So total ticket is the size of the array, need additional queries for other info. 
		$toReturn[0] = sizeof($programTickets);
		
		//Get additional information.
		$tickets = [];
		$status = [];
		foreach($programTickets as $record){
			array_push($tickets, $record->{'ticket_id'});
		}
		if($tickets){
			//Easier for me to make multiple dbqueries than clean list
			for($i = 0; $i < sizeof($tickets); $i++){
				//For each ticket (with associated hardware device) get list of statuses ordered by date, get newest. 
				$statusQuery = "
				SELECT id,
				ticket_id,
				status_id,
				created_at
				FROM {$this->prefix}ticket_status
				WHERE ticket_id = $tickets[$i]
				ORDER BY created_at DESC";
				$result = $this->get_results($statusQuery);
				
				array_push($status, $result[0]);	
			}
		}
		
		if($status){
			for($i = 0; $i < sizeof($status); $i++){
				$statNum = $status[$i]->{'status_id'};
				if($statNum == 1 || $statNum == 2 ){
					$toReturn[1]++;
				} else {
					$toReturn[2]++;
				}
			}
		}
		
		
		return $toReturn;
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