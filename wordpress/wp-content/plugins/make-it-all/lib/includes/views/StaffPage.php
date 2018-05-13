<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;

use MakeItAll\Includes\Database\Queries\UserQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeQuery;
use MakeItAll\Includes\Database\Queries\ExpertiseTypeStaffQuery;
use MakeItAll\Includes\Database\Queries\DepartmentQuery;

class StaffPage extends Page {
	protected $name = 'User';

	public function init() {
		echo 'nice';
		add_action('admin_enqueue_scripts', [$this, 'enqueue_dependencies']);
	}

	/**
	 * Displays the extra information on the user profile page
	 *
	 * @return @void
	 */
	public function read_pane() {
		echo 'BOOM';
		$context = $this->get_context('extra_profile_info');

		$context['employees']            = json_encode((new UserQuery)->get());
		$context['expertise_types']      = json_encode((new ExpertiseTypeQuery)->get());
		$context['expertise_type_staff'] = json_encode((new ExpertiseTypeStaffQuery)->get());
		$context['departments_obj']      = (new DepartmentQuery)->get();

		$viewingUserId = isset($_GET['user_id']) ? $_GET['user_id'] : get_current_user_id();

		$context['viewing_user'] = get_user_by('id', $viewingUserId);

		$context['viewing_user']->job_title     = get_user_meta($viewingUserId, 'job_title', true);
		$context['viewing_user']->department_id = get_user_meta($viewingUserId, 'department_id', true);
		$context['viewing_user']->phone_number  = get_user_meta($viewingUserId, 'phone_number', true);

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

	public function update_action($userId) {
		$expertiseTypeStaffQuery = new ExpertiseTypeStaffQuery();
		$expertiseTypeStaff = array_map(
			function($a) use ($userId) {
				return ['expertise_type_id' => $a, 'user_id' => $userId];
			},
			$_POST['specialisms'] ? explode(',', $_POST['specialisms']) : []
		);

		$expertiseTypeStaffQuery->mia_delete($userId, 'user_id');

		if (sizeOf($expertiseTypeStaff) > 0) {
			$expertiseTypeStaffQuery->mia_bulk_insert(
				'(%d, %d, %s, %s)',
				'(expertise_type_id, user_id, created_at, updated_at)',
				$expertiseTypeStaff
			);
		}

		update_user_meta($userId, 'job_title', $_POST['job_title']);
		update_user_meta($userId, 'department_id', $_POST['department_id']);
		update_user_meta($userId, 'phone_number', $_POST['phone_number']);
	}
}