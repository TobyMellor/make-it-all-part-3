<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;

use MakeItAll\Includes\Database\Queries\StaffQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeStaffQuery;

class StaffPage extends Page {
	protected $name = 'User';

	public function init() {
		add_action('admin_enqueue_scripts', [$this, 'enqueue_dependencies']);
	}

	/**
	 * Displays the extra information on the user profile page
	 *
	 * @return @void
	 */
	public function read_pane() {
		$context = $this->get_context('extra_profile_info');

		$context['employees']            = json_encode((new StaffQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());

		$context['viewing_user'] = get_user_by('id', $_GET['user_id']) ?: wp_get_current_user();

		// Administrator > Analyst > Operator > Viewer
		// Analyst = Author, Operator = Contributor, Viewer = Subscriber
		switch ($context['viewing_user']->roles[0]) {
			case 'administrator':
				$context['viewing_user']->administrator = true;
			case 'author':
				$context['viewing_user']->analyst = true;
			case 'contributor':
				$context['viewing_user']->operator = true;
			case 'subscriber': 
				$context['viewing_user']->viewer = true;
		}

		$this->render_pane($context);
	}
}