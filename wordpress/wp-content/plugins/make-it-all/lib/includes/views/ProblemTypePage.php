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

	/**
	 * Returns a new Timber Context and appends data required
	 * for all pages
	 *
	 * @return Timber\Context
	 */
	private function get_required_data($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = json_encode((new StaffQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());

		return $context;
	}

	/**
	 * Register the API endpoints. This function must be named
	 * "add_api_endpoints" in any of the classes which extend
	 * Page to be loaded successfully.
	 *
	 * You may also need to change the Permalink Settings:
	 *     1. /wp-admin
	 *     2. Settings > Permalinks
	 *     3. Custom Permalink
	 *     4. Enter /%postname%/ and save
	 *
	 * These urls should be registered at /wp-json/make-it-all/v1/*
	 *
	 * @return @void
	 */
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

		register_rest_route($this->apiNamespace, '/problem-type/(?P<id>\d+)', [
			'methods'  => 'PUT',
			'callback' => function($request) {
				return (new ExpertiseTypeQuery)->mia_update($request['id'], ['name' => $request['name']]);
			},
		]);

		register_rest_route($this->apiNamespace, '/problem-type/(?P<id>\d+)', [
			'methods'  => 'DELETE',
			'callback' => function($request) {
				return (new ExpertiseTypeQuery)->mia_delete($request['id']);
			},
		]);
	}
}