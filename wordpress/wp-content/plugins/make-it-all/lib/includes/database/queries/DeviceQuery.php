<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class DeviceQuery extends Query {
	protected $table = 'device';

	/**
	 * Select all devices.
	 *
	 * @return Array
	 */
	public function get() {
		return $this->get_results(
			"
				SELECT id, type, make, serial_no
				FROM {$this->prefix}{$this->table}
			"
		);
	}

	/**
	 * Get the data required for the table
	 *
	 * @return Array
	 */
	public function get_device_table($search = null) {
		$sql = "
			SELECT
				id,
				type AS title,
				make,
				serial_no,
				created_at,
				updated_at
			FROM {$this->prefix}{$this->table}
		";

		if ($search) {
			$search = $this->wpdb->esc_like($search);

			$sql .= $this->wpdb->prepare("
				 WHERE type LIKE '%%%s%%'
				 OR make LIKE '%%%s%%'
				 OR serial_no LIKE '%%%s%%'",
				 [$search, $search, $search]);
		}

		$sql .= " ORDER BY UNIX_TIMESTAMP(updated_at) DESC";

		return $this->get_results($sql);
	}

	public function get_device($id) {
		return $this->get_results(
			"
				SELECT *
				FROM {$this->prefix}{$this->table}
				WHERE id = $id
			"
		);
	}

	/**
	 * Select all types.
	 *
	 * @return Array
	 */
	public function get_types() {
		return $this->get_results(
			"
				SELECT type
				FROM {$this->prefix}{$this->table}
				GROUP BY type
			"
		);
	}

	/**
	 * Select all makes.
	 *
	 * @return Array
	 */
	public function get_makes() {
		return $this->get_results(
			"
				SELECT make as type
				FROM {$this->prefix}{$this->table}
				GROUP BY make
			"
		);
	}
	
	public function get_ticket_info($id){
		//toReturn = total, open, closed
		$toReturn = [0,0,0];
		
		//gets all tickets with hardware associated. 
		$deviceTickets = $this->get_results(
			"
				SELECT * 
				FROM {$this->prefix}ticket_{$this->table}
				WHERE device_id LIKE $id
			"
		);
		//So total ticket is the size of the array, need additional queries for other info. 
		$toReturn[0] = sizeof($deviceTickets);
		
		//Get additional information.
		$tickets = [];
		$recentTickets = [];
		$status = [];
		foreach($deviceTickets as $record){
			array_push($tickets, $record->{'ticket_id'});
		}
		if($tickets){
			//Easier for me to make multiple dbqueries than to clean the list
			for($i = 0; $i < sizeof($tickets); $i++){
				//For each ticket (with associated hardware device) get list of statuses ordered by date, get newest status. 
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
				if($i < 3){
					//Get ticket info
					$ticketQuery = "SELECT id, title FROM {$this->prefix}ticket WHERE id = $tickets[$i]";
					$ticketRes = $this->get_results($ticketQuery);
					$ticket = [$ticketRes[0]->{'id'}, $ticketRes[0]->{'title'}];
					array_push($recentTickets, $ticket);
				
				}
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
		
		$returnArray = [$toReturn, $recentTickets];
		return $returnArray;
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