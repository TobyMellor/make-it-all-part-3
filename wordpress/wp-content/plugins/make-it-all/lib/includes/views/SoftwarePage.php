<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\SoftwareTable;
use MakeItAll\Includes\Database\Queries\ProgramQuery;

class SoftwarePage extends Page {
	protected $name = 'Software';
	protected $icon = 'dashicons-media-code';
	protected $position = 4;
	
	public function read_pane(){
		parent::read_pane();
		
		if (isset($_GET['id'])) {
			//If ID in url show that ID, not the software table.
			
			$context = $this->get_context('Viewing Software');
			$context = $this->get_software($context, $_GET['id']);
		
			
			$this->render_pane($context);
			
		} else {
			//Make and show software table.
			
			$context = $this->get_context('View Software');
			$this->render_pane($context);
			
			$softwareTable = new SoftwareTable();
			$softwareTable->prepare_items();
			$softwareTable->display();
		}
		
	}
	
	public function create_pane(){
		parent::create_pane();
		
		$this->render_pane($this->get_required_data('Create Software'));
	}
	
	private function get_required_data($pageName) {
		$programQuery = new ProgramQuery();
		$context = $this->get_context($pageName);

		$context['software'] 			= json_encode($programQuery->get_software(null));
		$context['operating_systems']   = json_encode($programQuery->get_opsystems());

		return $context;
	}
	
	private function get_software($context, $id) {
		$programQuery = new ProgramQuery();

		$context['software_object'] = $programQuery->get_software($id)[0];
		$context['software'] 		= json_encode($context['software_object']);

		return $context;
	}
	
	
}
