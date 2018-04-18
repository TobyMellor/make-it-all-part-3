<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;

use MakeItAll\Includes\Database\Queries\StaffQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeStaffQuery;

class ProblemTypePage extends Page {
	protected $name     = 'Problem Type';
	protected $icon     = 'dashicons-info';
	protected $position = 3;
	protected $pages    = [];

	/**
	 * Displays the Tickets table
	 *
	 * @return @void
	 */
	public function read_pane() {
		// parent::read_pane();

		$context = $this->get_required_data('View Problem Types');
		
		$this->render_pane($context);
	}

	private function get_required_data($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = json_encode((new StaffQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());

		return $context;
	}

	public function add_api_endpoints() {
		register_rest_route($this->apiNamespace, '/problem-type', [
			'methods'  => 'GET',
			'callback' => function() {
				return (new ExpertiseTypeQuery)->get();
			},
		]);

		register_rest_route($this->apiNamespace, '/problem-type', [
			'methods'  => 'POST',
			'callback' => function($request) {
				return (new ExpertiseTypeQuery)->mia_insert($request->get_params());
			},
		]);
	}
}