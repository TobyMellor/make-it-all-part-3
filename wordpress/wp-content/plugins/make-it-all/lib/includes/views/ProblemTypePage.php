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

		$context = $this->getRequiredData('View Problem Types');
		
		$this->render_pane($context);
	}

	private function getRequiredData($pageName) {
		$context = $this->get_context($pageName);

		$context['employees']            = json_encode((new StaffQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());

		return $context;
	}
}