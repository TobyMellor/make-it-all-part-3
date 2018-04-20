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
	public function read_pane(){
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
			$context = $this->get_context('Viewing Hardware');
			$context = $this->get_hardware($context, $_GET['id']);

			$this->render_pane($context); // render page before inserting table
		} else {
			$context = $this->get_context('View Hardware');
			$this->render_pane($context); // render page before inserting table

			$hardwareTable = new HardwareTable();
			$hardwareTable->prepare_items();

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
		global $wpdb;

		$deviceQuery = new DeviceQuery();

		// insert type, make, sn, date
		foreach ($_POST['hardware'] as $hardware) {
			
			
			$type = $hardware['type'];
			$make = $hardware['make'];
			if($hardware['type'] === ""){
				$type = $hardware['newType'];	
			}
			if($hardaware['make'] === ""){
				$make = $hardware['newMake'];
			}
			
			

			$deviceQuery->mia_insert([
				'type'      => $type,
				'make'      => $make,
				'serial_no' => $hardware['serial']
			]);

			$hardwareID = $wpdb->insert_id;
		}
		
		$this->mia_redirect('admin.php?page=hardware&id=' . $hardwareID); exit;
	}

	// updating hardware
	public function update_pane() {
		parent::update_pane();

		$context = $this->get_required_data('Update Hardware');

		if (isset($_GET['id'])) {
			$hardwareID = $_GET['id'];

			// ticket's current data
			$context = $this->get_hardware($context, $hardwareID);
		}

		$this->render_pane($context);
	}
	
	protected function update_action() {
		global $wpdb;

		$hardware   = $_POST['hardware'];
		$hardwareId = $hardware['id'];

		$type = $hardware['type'];
		$make = $hardware['make'];
		if($hardware['type'] === ""){
			$type = $hardware['newType'];	
		}
		if($hardaware['make'] === ""){
			$make = $hardware['newMake'];
		}

		$deviceQuery = new DeviceQuery();

		$deviceQuery->mia_update(
			$hardwareId,
			[
				'type'          => $type,
				'make'          => $make,
				'serial_no'     => $hardware['serial_no'],
			]
		);

		$this->mia_redirect('admin.php?page=hardware&id=' . $hardwareId); exit;
	}

	private function get_hardware($context, $id) {
		$deviceQuery = new DeviceQuery();

		$context['device_object'] = $deviceQuery->get_device($id)[0];
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
