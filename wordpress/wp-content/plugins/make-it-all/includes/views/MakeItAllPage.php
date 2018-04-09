<?php

abstract class MakeItAllPage {
	protected $name     = 'Unknown';
	protected $icon     = 'dashicons-editor-help';
	protected $position = null;
	protected $pages    = [
		'Create',
		'Update'
	]; // to remove a page, redefine this in the child
	
	/**
	 * Initialises the menu and submenu, and
	 * adds the enqueue scripts action when page is
	 * active
	 *
	 * @return @void
	 */
	public function init() {
		$name = $this->name;

		$parentSlug = str_replace(' ', '_', strtolower($name));
        // Don't want Hardwares/Softwares
		add_menu_page('View ' . $name, ($name == "Hardware") ? $name : $name . 's', 'read_make_it_all', $parentSlug, [$this, 'read_pane'], $this->icon, $this->position);

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
	/**
	 * Enqueues the scripts that are required
	 * each page must have a css and js file,
	 * named exactly as $this->name
	 *
	 * This is called on page load, from the
	 * action set within init()
	 *
	 * @return @void
	 */
	public function enqueue_dependencies() {
		$fileName = strtolower($this->name);

		wp_enqueue_style('mit_' . $fileName, get_template_directory_uri() . '/backend/css/' . $fileName . '.css', [], '1.0.0', 'all');
		wp_enqueue_script('mit_' . $fileName, get_template_directory_uri() . '/backend/js/' . $fileName . '.js', ['jquery', 'jquery-ui-accordion'], '1.0.0', false);
	}

	abstract public function read_pane();
	abstract public function create_pane();
	abstract public function update_pane();
	
	/**
	 * Simply gets a blank Timber context and
	 * sets the page name for it.
	 *
	 * @return Timber::context
	 */
	protected function get_context($pageName) {
		$context = Timber::get_context();
		$context['page_name'] = $pageName; // e.g. Create Ticket

		return $context;
	}

	/**
	 * Renders the page and passes in the context
	 *
	 * Page must be found in the following format:
	 * e.g. backend/tickets/create_ticket.twig
	 *
	 * @return @void
	 */
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