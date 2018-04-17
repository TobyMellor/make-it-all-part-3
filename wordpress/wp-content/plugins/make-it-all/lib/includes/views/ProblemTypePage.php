<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;

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

		$context = $this->getRequiredData('View Problem Types');
		
		$this->render_pane($context);
	}

	private function getRequiredData($pageName) {
		$context = $this->get_context($pageName);

		// add to context

		return $context;
	}
}