<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\HardwareTable;

use MakeItAll\Includes\Database\Queries\DeviceQuery;

class HardwarePage extends Page {
	protected $name     = 'Hardware';
	protected $icon     = 'dashicons-laptop';
	protected $position = 4;

	// what you see if you just click "Hardware"
	public function read_pane() {
		parent::read_pane();

		// handle single delete and bulk delete before rendering page
		if (isset($_GET['action']) && $_GET['action'] === 'delete') {
			if (current_user_can('edit_make_it_all')) {
				$deviceQuery = new DeviceQuery();

				if (isset($_GET['hardware_id'])) {
					$deviceQuery->delete($_GET['hardware_id']);
				} else if (isset($_GET['hardware'])) {
					foreach ($_GET['hardware'] as $hardwareId) {
						$deviceQuery->delete($hardwareId);
					}
				}
			}
		}

		if (isset($_GET['id'])) {
			$context = $this->get_required_data('Viewing Hardware');
			$context = $this->get_hardware($context, $_GET['id']);

			$this->render_pane($context); // render page before inserting table
		} else {
			$this->render_pane($this->get_context('View Hardware')); // render page before inserting table

			$hardwareTable = new HardwareTable();
			$hardwareTable->prepare_items();
			$hardwareTable->search_box('search', 'search_id');
			$hardwareTable->display();
		}
	}

	/**
	 * Creation of Hardware
	 * For hardware page we just need the devices table.
	 */
	public function create_pane() {
		parent::create_pane();

		$this->render_pane($this->get_required_data('Create Hardware'));
	}

 	protected function create_action() {
		$deviceQuery = new DeviceQuery();
		global $wpdb;
		// insert type, make, sn, date
		foreach ($_POST['hardware'] as $hardware) {
			if(empty($hardware['type'])){
				$hardware['type'] = $hardware['newType'];	
			}
			if(empty($hardware['make'])){
				$hardware['make'] = $hardware['newMake'];		
			}
			$deviceQuery->mia_insert([
				'type'      => $hardware['type'],
				'make'      => $hardware['make'],
				'serial_no' => $hardware['serial']
			]);
			$hardwareID = $wpdb->insert_id;	
		}
		$_SESSION['mia_message'] = 'Hardware successfully added.';
		return $this->mia_redirect('admin.php?page=hardware_update&id=' . $hardwareID);
	}
				

	// updating hardware
	public function update_pane() {
		parent::update_pane();
		$context = $this->get_required_data('Update Hardware');
		if (isset($_GET['id'])) {
			$hardwareID = $_GET['id'];
			// ticket's current data
			$context = $this->get_hardware($context, $hardwareID);
		} else {
			$context["device"] = [];
		}

		$this->render_pane($context);
	}
	
	protected function update_action() {
		$deviceQuery = new DeviceQuery();
		$hardware = $_POST['hardware'];
		$hardwareID = $hardware['id'];
		if(empty($hardware['type'])){
			$hardware['type'] = $hardware['newType'];	
		}
		if(empty($hardware['make'])){
			$hardware['make'] = $hardware['newMake'];		
		}
		$deviceQuery->mia_update(
			$hardwareID,
			[
				'type'      => $hardware['type'],
				'make'      => $hardware['make'],
				'serial_no' => $hardware['serial_no']
			]
		);
		$_SESSION['mia_message'] = 'Hardware successfully updated.';
		return $this->mia_redirect('admin.php?page=hardware_update&id=' . $hardwareID);
	}

	private function get_hardware($context, $id) {
		$deviceQuery = new DeviceQuery();

		$context['device_object'] = $deviceQuery->get_device($id)[0];
		$context['device_tick']   = $deviceQuery->get_ticket_info($id);
		
		// want to also get additional info here
		$context['device'] = json_encode($context['device_object']);

		return $context;
	}

	private function get_required_data($pageName) {
		$deviceQuery = new DeviceQuery();

		$context = $this->get_context($pageName);

		$context['devices'] = json_encode($deviceQuery->get());
		$context['types']   = json_encode($deviceQuery->get_types());
		$context['makes']   = json_encode($deviceQuery->get_makes());

		return $context;
	}
}
