<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeQuery;

class MetricsQuery extends Query {
	protected $table =   'ticket';
	protected $device =  'device';
	protected $program = 'program';
	
	
		
	public function lookup_parent($exp_info){
		$expertiseQuery = new ExpertiseTypeQuery;
		if($exp_info->{"parent_id"} == NULL){
			$name = $exp_info->{"name"};
			return $name;
			
		} else {
			//Parent id is not null
			$parent_id = $exp_info->{"parent_id"};
			$newInfo = $expertiseQuery->get_specific($parent_id)[0];
			return $this->lookup_parent($newInfo);
		}
	}
	
	public function get_pi_info(){
		$pi_data = [];
		$expertise_ids = [];
		//Get most frequent problems types with no parents
		$expertiseQuery = new ExpertiseTypeQuery;
	
		//Want to get only open tickets
		$tickets = $this->get_results("
			SELECT id, expertise_type_id 
			FROM {$this->prefix}{$this->table}
		");
		
		
		foreach($tickets as $ticket){
			//Get most recent status.
//			$tickId = $ticket->{"id"};
//			
//			$statusQuery = "
//			SELECT *
//			FROM {$this->prefix}ticket_status
//			WHERE ticket_id = $tickId
//			ORDER BY created_at DESC";
//			
//			$result = $this->get_results($statusQuery);
//				
//			//Most recent status
//			if($result[0]->{"status_id"} == "3" || $result[0]->{"status_id"} == "3"){
//				array_push($expertise_ids, $ticket->{"expertise_type_id"});
//			}
			
			
			array_push($expertise_ids, $ticket->{"expertise_type_id"});
			
			
		}
	
	
		foreach($expertise_ids as $id){
			
			$expertise_info = $expertiseQuery->get_specific($id)[0];
	
			if($expertise_info->{"parent_id"} == null){
				//No parent, give it to pi chart
				if(array_key_exists($expertise_info->{"name"}, $pi_data)){
					$pi_data[$expertise_info->{"name"}]++;	
				}else {
					$pi_data[$expertise_info->{"name"}] = 1;
				}
				
			} else {
				//Has parent, give it to function
				//echo "sending to lookup: " . print_r($expertise_info, true) . "<br>";
				$pname = $this->lookup_parent($expertise_info);
				if(array_key_exists($pname, $pi_data)){
					$pi_data[$pname]++;	
				}else {
					$pi_data[$pname] = 1;
				}
			}
		}
	
		return $pi_data;
		
	

	

		
	}

	
	
	public function get_general_stats(){
		//Need average ticket solve time, total assigned tickets, total solved, total devices, total programs 
		
	
		//Average ticket solve time.
		//Difference between create date and status date when the status is 3.
		
		$tickets = $this->get_results("
			SELECT * 
			FROM {$this->prefix}{$this->table}
		");
		
		//All tickets are assigned? 
		$totalTickets = sizeof($tickets);
		
	
		$ticket_info = [];
		foreach($tickets as $ticket){
			$ticket_info[$ticket->{'id'}] = array($ticket->{'created_at_real'});
		
		}
		
		
		//For each ticket get the most recent status and add it to the id array.
		//Easier for me to make multiple dbqueries than to clean the list
		$keys = array_keys($ticket_info);
		foreach($keys as $id){
				
			//For each ticket get list of statuses ordered by date (within date range), get newest status. 
			$statusQuery = "
			SELECT *
			FROM {$this->prefix}ticket_status
			WHERE ticket_id = $id
			ORDER BY created_at DESC";
				
			$result = $this->get_results($statusQuery);
				
			//Most recent status
			if($result[0]->{"status_id"} == "3"){
				array_push($ticket_info[$id], $result[0]->{"created_at_real"});	
			} else {
				unset($ticket_info[$id]);
			}
				
				
		}
			
		//Ticket info is now an assoc array id -> created at, resolved at.
		$number_resolved = sizeof($ticket_info);
		$time = 0;
		foreach($ticket_info as $dates){
			$time += strtotime($dates[1]) - strtotime($dates[0]);
		}
		$average_solve_time = round(($time / $number_resolved) / 60, 4) ;
			
			


		
		
		
		
		
		//Total devices.
		$devices = $this->get_results(
		"
			SELECT *
			FROM {$this->prefix}{$this->device}
		"
		);
		$total_devices = sizeof($devices);
		
		//Total programs.
		$programs = $this->get_results("
			SELECT *
			FROM {$this->prefix}{$this->program}
		");
		$total_programs = sizeof($programs);
		
		return array($average_solve_time . " Minutes", $totalTickets, $number_resolved, $total_devices, $total_programs);
	
		
		
	}


	public function get_ticket_info($dateS, $dateE){
		//Returns total tickets, open tickets, closed tickets between input dates

		//Get all tickets made between dates 
		$tickets = $this->get_results(
			"
				SELECT * 
				FROM {$this->prefix}{$this->table}
				WHERE created_at < '$dateS'
			"
		);
		
		//First thing to return is number of tickets made
		$ticketsMade = sizeof($tickets);
		//Will make other variables here.
		$ticketsOpen = 0;
		$ticketsClosed = 0;
		
		//Get the status of the tickets (Get most recent status within date range and record that)
	
		//Get additional information.
		$ticket_ids = [];
		$status = [];
		
		foreach($tickets as $record){
			//Push id to lookup in status table.
			array_push($ticket_ids, $record->{'id'});
		}
		
		
		if($ticket_ids){
			//Easier for me to make multiple dbqueries than to clean the list
			for($i = 0; $i < sizeof($ticket_ids); $i++){
				//For each ticket get list of statuses ordered by date (within date range), get newest status. 
				$statusQuery = "
				SELECT id,
				ticket_id,
				status_id,
				updated_at
				FROM {$this->prefix}ticket_status
				WHERE ticket_id = $ticket_ids[$i]
				AND updated_at < '$dateS' 
				ORDER BY created_at DESC";
				
				$result = $this->get_results($statusQuery);
			
				
				
				array_push($status, $result[0]);	
			}
		}
		
		if($status){
			//Count up the statuses.
			for($i = 0; $i < sizeof($status); $i++){
				$statNum = $status[$i]->{'status_id'};
				if($statNum == 1 || $statNum == 2 ){
					$ticketsOpen++;
				} else {
					$ticketsClosed++;
				}
			}
		}

		$returnArray = [date('H', strtotime($dateE)), $ticketsMade, $ticketsOpen, $ticketsClosed];
		return $returnArray;
	}
	
		protected function validate($columns) {
			return true;
	}

	

}