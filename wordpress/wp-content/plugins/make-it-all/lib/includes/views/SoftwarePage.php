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
	
	private function get_software($context, $id) {
		$softwareQuery = new ProgramQuery();

		$context['software_object'] = $softwareQuery->get_software($id)[0];
		$context['software'] = json_encode($context['software_object']);

		return $context;
	}
	
	
}
