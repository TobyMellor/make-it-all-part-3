<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class MetricsQuery extends Query {
	protected $table =   'ticket';
	protected $device =  'device';
	protected $program = 'program';
	
	
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
			//Get the ID, then look up status?
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