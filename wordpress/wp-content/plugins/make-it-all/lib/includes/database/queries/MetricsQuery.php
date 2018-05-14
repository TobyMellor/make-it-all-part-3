<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeQuery;

class MetricsQuery extends Query {
	protected $table   = 'ticket';
	protected $device  = 'device';
	protected $program = 'program';
	protected $exptype = 'expertise_type';
		
	public function lookup_parent($exp_info){
		$expertiseQuery = new ExpertiseTypeQuery;

		if ($exp_info->parent_id == NULL) {
			$name = $exp_info->name;
			return $name;
		}

		// parent id is not null
		$parent_id = $exp_info->parent_id;
		$newInfo = $expertiseQuery->get_specific($parent_id)[0];

		return $this->lookup_parent($newInfo);
	}
	
	public function get_num($id){
		//gets tickets with this id and tickets with children of this id.
		
		$expertiseQuery = new ExpertiseTypeQuery;
		$query = "SELECT *
				  FROM `{$this->prefix}{$this->table}`
				  WHERE expertise_type_id = $id ";
		
		$tickets = $this->get_results($query);
	
		return sizeof($tickets);
		

	}
	
	public function get_children($parent){
		//Recieved parent as string, get first level children and number of issues.
		$pi_data = [];
		$expertiseQuery = new ExpertiseTypeQuery;
		$id = $this->get_results("
			SELECT *
			FROM {$this->prefix}expertise_type
			WHERE name = '$parent'
		");
		
		
		$parent_data = $expertiseQuery->get_specific($id[0]->{"id"})[0];
		$children = $parent_data->{"children"};
		for($i = 0; $i < sizeof($children); $i++){
			
			$child_data = $expertiseQuery->get_specific($children[$i])[0];
			$name = $child_data->{"name"};
			$num = $this->get_num($children[$i]);
			$c_children = $child_data->{"children"};
			
			while(sizeof($c_children) != 0){
				
				$todo = [];
				for($j = 0; $j < sizeof($c_children); $j++){
					
					$num += $this->get_num($c_children[$j]);
					$newData = $expertiseQuery->get_specific($c_children[$j])[0];
					$newChildren = $newData->{"children"};
					$todo = array_merge($todo, $newChildren);
					
				}
				
				$c_children = [];
				$c_children = array_merge($c_children, $todo);	
			}
			
			if (array_key_exists($name, $pi_data)) {
					$pi_data[$name] = $num;	
				} else {
					$pi_data[$name] = $num;
				}
																
	}
		
	 return $pi_data;
	}
	
	public function get_pi_info() {
		$pi_data = [];
		$expertise_ids = [];
		
		
		//Get all expertise types with no parents. 
		$allTypes = $this->get_results("
			SELECT id, name
			FROM {$this->prefix}{$this->exptype}
			WHERE parent_id IS NULL
		");
		foreach($allTypes as $type){
			//Push the type to the pi_data array. 
			$pi_data[$type->name] = 0;
		}

		
		
		//From these expertise types, get number of tickets
		$expertiseQuery = new ExpertiseTypeQuery;
	
		// want to get only open tickets
		$tickets = $this->get_results("
			SELECT id, expertise_type_id 
			FROM {$this->prefix}{$this->table}
		");
		
		foreach ($tickets as $ticket){
			array_push($expertise_ids, $ticket->{"expertise_type_id"});
		}

		foreach ($expertise_ids as $id) {
			$expertise_info = $expertiseQuery->get_specific($id)[0];
	
			if ($expertise_info->parent_id == null) {
				// no parent, give it to pi chart
				if (array_key_exists($expertise_info->name, $pi_data)) {
					$pi_data[$expertise_info->name]++;	
				} else {
					$pi_data[$expertise_info->name] = 1;
				}
			} else {
				// has parent, give it to function
				$pname = $this->lookup_parent($expertise_info);

				if (array_key_exists($pname, $pi_data)) {
					$pi_data[$pname]++;	
				} else {
					$pi_data[$pname] = 1;
				}
			}
		}
	
		return $pi_data;
	}

	public function get_general_stats() {
		// need average ticket solve time, total assigned tickets, total solved, total devices, total programs 
		
		// average ticket solve time.
		// difference between create date and status date when the status is 3.
		
		$tickets = $this->get_results("
			SELECT * 
			FROM {$this->prefix}{$this->table}
		");
		
		// all tickets are assigned? 
		$totalTickets = sizeof($tickets);
		
		$ticket_info = [];

		foreach ($tickets as $ticket) {
			$ticket_info[$ticket->id] = array($ticket->created_at_real);
		
		}
		
		// for each ticket get the most recent status and add it to the id array.
		// easier for me to make multiple dbqueries than to clean the list
		$keys = array_keys($ticket_info);

		foreach ($keys as $id) {
			// for each ticket get list of statuses ordered by date (within date range), get newest status. 
			$statusQuery = "
				SELECT *
				FROM {$this->prefix}ticket_status
				WHERE ticket_id = $id
				ORDER BY created_at DESC
			";
				
			$result = $this->get_results($statusQuery);
				
			// most recent status
			if ($result[0]->status_id == "3") {
				array_push($ticket_info[$id], $result[0]->{"created_at_real"});	
			} else {
				unset($ticket_info[$id]);
			}
		}
			
		// ticket info is now an assoc array id -> created at, resolved at.
		$number_resolved = sizeof($ticket_info);
		$time = 0;

		foreach($ticket_info as $dates) {
			$time += strtotime($dates[1]) - strtotime($dates[0]);
		}

		$average_solve_time = round(($time / $number_resolved) / 60, 1) ;
		
		// total devices.
		$devices = $this->get_results("
			SELECT *
			FROM {$this->prefix}{$this->device}
		");

		$total_devices = sizeof($devices);
		
		// total programs.
		$programs = $this->get_results("
			SELECT *
			FROM {$this->prefix}{$this->program}
		");

		$total_programs = sizeof($programs);
		
		return array($average_solve_time . " Minutes", $totalTickets, $number_resolved, $total_devices, $total_programs);
	}

	public function get_ticket_info($dateS, $dateE) {
		// returns total tickets, open tickets, closed tickets between input dates

		// get all tickets made between dates 
		$tickets = $this->get_results(
			"
				SELECT * 
				FROM {$this->prefix}{$this->table}
				WHERE created_at < '$dateS'
			"
		);
		
		// first thing to return is number of tickets made
		$ticketsMade = sizeof($tickets);
		// will make other variables here.
		$ticketsOpen = 0;
		$ticketsClosed = 0;
		
		// get the status of the tickets (Get most recent status within date range and record that)
	
		// get additional information.
		$ticket_ids = [];
		$status = [];
		
		foreach ($tickets as $record) {
			// push id to lookup in status table.
			array_push($ticket_ids, sanitize_key($record->id));
		}
		
		if ($ticket_ids) {
			// easier for me to make multiple dbqueries than to clean the list
			for ($i = 0; $i < sizeof($ticket_ids); $i++) {
				// for each ticket get list of statuses ordered by date (within date range), get newest status. 
				$statusQuery = "
					SELECT id,
					ticket_id,
					status_id,
					updated_at
					FROM {$this->prefix}ticket_status
					WHERE ticket_id = $ticket_ids[$i]
					AND updated_at < '$dateS' 
					ORDER BY created_at DESC
				";
				
				$result = $this->get_results($statusQuery);
			
				array_push($status, $result[0]);	
			}
		}
		
		if ($status) {
			// count up the statuses.
			for ($i = 0; $i < sizeof($status); $i++) {
				$statNum = $status[$i]->status_id;

				if ($statNum == 1 || $statNum == 2 ) {
					$ticketsOpen++;
				} else {
					$ticketsClosed++;
				}
			}
		}

		return [date('H', strtotime($dateE)), $ticketsMade, $ticketsOpen, $ticketsClosed];
	}
	
	protected function validate($columns) {
			return true;
	}
}