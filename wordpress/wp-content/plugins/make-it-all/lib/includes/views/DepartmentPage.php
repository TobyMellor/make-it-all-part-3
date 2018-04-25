<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\DepartmentTable;

use MakeItAll\Includes\Database\Queries\DepartmentQuery;

class DepartmentPage extends Page {
	protected $name     = 'Department';
	protected $icon     = 'dashicons-admin-home';
	protected $position = 4;

	/**
	 * Displays the Department table
	 *
	 * @return @void
	 */
	public function read_pane() {
		parent::read_pane();

		// handle single delete and bulk delete before rendering page
		if (isset($_GET['action']) && $_GET['action'] === 'delete') {
			if (current_user_can('edit_make_it_all')) {
				$departmentQuery = new DepartmentQuery();

				if (isset($_GET['department_id'])) {
					$departmentQuery->mia_delete($_GET['department_id']);
				} else if (isset($_GET['department'])) {
					foreach ($_GET['department'] as $departmentId) {
						$departmentQuery->mia_delete($departmentId);
					}
				}
			}
		}

		$context = $this->get_context('View Departments');

		$this->render_pane($context); // render page before inserting table

		$departmentTable = new DepartmentTable();
		$departmentTable->prepare_items();
		$departmentTable->display();
	}

	/**
	 * Displays Create Ticket Page
	 * Page requires the following data:
	 *    - Employees as employees
	 *    - Expertise Types as expertise_types
	 *    - Devices as devices
	 *    - Programs as programs
	 *
	 * @return @void
	 */
	public function create_pane() {
		parent::create_pane();

		$context = $this->get_context('Create Departments');

		$this->render_pane($context);
	}

	protected function create_action() {
		global $wpdb, $session;

		$departmentQuery = new DepartmentQuery();

		// create departments
		foreach ($_POST['departments'] as $department) {
			$departmentId = $departmentQuery->mia_insert([
				'name'         => $department['name'],
				'phone_number' => $department['phone_number']
			]);

			if ($this->is_error($departmentId)) return $this->mia_redirect('admin.php?page=department_create');
		}

		$this->mia_redirect('admin.php?page=department_update&id=' . $departmentId);
	}

	public function update_pane() {
		parent::update_pane();

		$context = $this->get_context('Update Department');
		$departmentQuery = new DepartmentQuery();

		$context['departments'] = $departmentQuery->get();

		if (isset($_GET['id'])) {
			$departmentsIndex = array_search($_GET['id'], array_map(function($a) {
				return $a->id;
			}, $context['departments']));

			$context['department'] = json_encode($context['departments'][$departmentsIndex]);
		}

		$context['departments'] = json_encode($context['departments']);

		$this->render_pane($context);
	}

	protected function update_action() {
		global $wpdb;
		
		$departmentQuery = new DepartmentQuery();

		$department   = $_POST['department'];
		$departmentId = $department['id'];

		$departmentQuery->mia_update(
			$departmentId,
			[
				'name'         => $department['name'],
				'phone_number' => $department['phone_number']
			]
		);

		$_SESSION['mia_message'] = 'Department successfully updated.';
		return $this->mia_redirect('admin.php?page=department_update&id=' . $departmentId);
	}
}
