<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use Timber;

use MakeItAll\Includes\Database\Queries\MetricsQuery;


class MetricsPage extends Page {
	protected $name     = 'Metrics';
	protected $icon     = 'dashicons-chart-area';
	protected $position = 4;
	protected $pages    = [];

	// what you see if you just click "Metrics"
	public function read_pane() {
		parent::read_pane();

		// big list of exp types, get ones tickets have assigned

		$metricsQuery = new MetricsQuery(); 

		$context = $this->get_context('View Metric');

		$context["table1"] = json_encode($this->getTicketsMetric());
		$context["general_stats"] = $metricsQuery->get_general_stats();
		$context["pi_info"] = json_encode($metricsQuery->get_pi_info());

		$this->render_pane($context);
	}
	
	private function getTicketsMetric() {
		$ticketData = array();
		
		$metricsQuery = new MetricsQuery(); 

		// gets total tickets / open tickets / closed tickets every hour for past 12 hours.
		$dateNow = date('Y-m-d H:i:s');
		$lastDate = null;
		
		// get tickets for the past 12 hours. 
		
		for ($i = 0; $i < 12; $i++) {
			// date start 
			if (!$lastDate) {
				$lastTime = date('Y-m-d H:i:s', strtotime($dateNow) - 60*60);
				array_push($ticketData , $metricsQuery->get_ticket_info($lastTime, $dateNow));
				$lastDate = $lastTime;
			} else {
				// there is a last date.
				$lastTime = date('Y-m-d H:i:s', strtotime($lastDate) - 60*60);
				array_push($ticketData, $metricsQuery->get_ticket_info($lastTime, $lastDate));
				$lastDate = $lastTime;
			}
		}
		
		return $ticketData;
	}
	
	protected function render_pane($context) {
		Timber::render(
			'backend/views/' .
			$this->nameSlug . '/' .
			$this->get_string_as_slug($context['page_name']) .
			'.twig',
			$context
		); 			
	}
	
	public function add_api_endpoints(){
		register_rest_route($this->apiNamespace, '/problem-children',
		[
			'methods' => 'GET',
			'callback' => function($request) {
				$expert_type = $request->get_params()['type'];
				$metricsQuery = new MetricsQuery(); 
				
				$data =  $metricsQuery->get_children($expert_type);
				
				return $data;
			
			},
		]);
	}

	public function create_pane() {
		parent::create_pane();
	}
	
	public function update_pane() {
		parent::update_pane();
	}
}
