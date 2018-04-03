<?php

abstract class MakeItAllPage {
	protected $name     = 'Unknown';
	protected $icon     = 'dashicons-editor-help';
	protected $position = null;
	protected $pages    = [
		'Create',
		'Update',
		'Delete'
	]; // to remove a page, redefine this in the child

	public function init() {
		$name = $this->name;

		$parentSlug = str_replace(' ', '_', strtolower($name));

		add_menu_page('View ' . $name, $name . 's', 'read_make_it_all', $parentSlug, [$this, 'read_pane'], $this->icon, $this->position);

		// Create submenu for each page in Pages, e.g. Create [Ticket], Update [Ticket]
		foreach ($this->pages as $pageName) {
			$pageNameLower = strtolower($pageName);
			$title         = $pageName . ' ' . $name;

			add_submenu_page(
				$parentSlug,
				$title, // page title
				$title, // menu title
				'edit_make_it_all',
				$parentSlug . '_' . $pageNameLower, // slug, e.g. ticket_create
				[
					$this,
					$pageNameLower . '_pane' // callback that renders the page, e.g. read_pane
				]
			);
		}

		add_action('admin_enqueue_scripts', [$this, 'enqueue_dependencies']); // Style/script only used for this page, e.g. ticket.css NOT main.css
	}

	public function enqueue_dependencies() {
		$fileName = strtolower($this->name);

		wp_enqueue_style('mit_' . $fileName, get_template_directory_uri() . '/backend/css/' . $fileName . '.css', [], '1.0.0', 'all');
		wp_enqueue_script('mit_' . $fileName, get_template_directory_uri() . '/backend/js/' . $fileName . '.js', ['jquery', 'jquery-ui-accordion'], '1.0.0', false);
	}

	abstract public function read_pane();
	abstract public function create_pane();
	abstract public function update_pane();
	abstract public function delete_pane();

	protected function get_context($pageName) {
		$context = Timber::get_context();
		$context['page_name'] = $pageName; // e.g. Create Ticket

		return $context;
	}

	protected function render_pane($context) {
		Timber::render(
			'backend/views/' .
			strtolower($this->name) . 's/' .
			str_replace(' ', '_', strtolower($context['page_name'])) .
			'.twig',
			$context
		); // e.g. backend/tickets/create_ticket.twig
	}
}