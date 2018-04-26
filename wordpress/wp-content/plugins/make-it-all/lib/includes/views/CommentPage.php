<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;

use MakeItAll\Includes\Database\Queries\CommentQuery;

class CommentPage extends Page {
	protected $pages = [];

	public function init() {
		//
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
		register_rest_route($this->apiNamespace, '/comment', [
			'methods'  => 'POST',
			'callback' => function($request) {
				if (!$request['call_id']) $request['call_id'] = null;

				return (new CommentQuery)->mia_insert($request->get_params());
			},
		]);
	}
}