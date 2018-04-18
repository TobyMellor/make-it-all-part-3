<?php

namespace MakeItAll\Includes\Views;

use Timber;

abstract class Page {
	protected $name     = 'Unknown';
	protected $icon     = 'dashicons-editor-help';
	protected $position = null;
	protected $pages    = [
		'Create',
		'Update'
	]; // to add/remove a page, redefine this in the child
	protected $apiNamespace = 'make-it-all/v1';
	
	/**
	 * Initialises the menu and submenu, and
	 * adds the enqueue scripts action when page is
	 * active
	 *
	 * @return @void
	 */
	public function init() {
		$name = $this->name;

		$parentSlug = $this->get_string_as_slug($this->name);

		add_menu_page('View ' . $name, ($name == "Hardware" ? $name : $name . 's'), 'read_make_it_all', $parentSlug, [$this, 'read_pane'], $this->icon, $this->position);

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
		$fileName = $this->get_string_as_slug($this->name);

		wp_enqueue_style('mia_' . $fileName, get_template_directory_uri() . '/backend/css/' . $fileName . '/' . $fileName . '.css', [], '1.0.0', 'all');
		wp_enqueue_script('mia_' . $fileName, get_template_directory_uri() . '/backend/js/' . $fileName . '/' . $fileName . '.js', ['jquery', 'jquery-ui-accordion'], '1.0.0', false);
	}

	public function enqueue_dependency($name, $location) {
		if (!is_file(get_template_directory() . $location)) return;

		wp_enqueue_script($name, get_template_directory_uri() . $location, ['jquery', 'jquery-ui-accordion'], '1.0.0', false);
	}

	public function read_pane() {
		$this->enqueue_dependency(
			'mia_read_' . $this->get_string_as_slug($this->name), // name of script, e.g. mia_read_tickets
			'/backend/js/' . $this->get_string_as_slug($this->name) . '/read_' . $this->get_string_as_slug($this->name) . '.js' // location of script
		);
	}

	public function create_pane() {
		$this->enqueue_dependency(
			'mia_create_' . $this->get_string_as_slug($this->name),
			'/backend/js/' . $this->get_string_as_slug($this->name) . '/create_' . $this->get_string_as_slug($this->name) . '.js'
		);

		if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->create_action();
	}

	public function update_pane() {
		$this->enqueue_dependency(
			'mia_update_' . $this->get_string_as_slug($this->name),
			'/backend/js/' . $this->get_string_as_slug($this->name) . '/update_' . $this->get_string_as_slug($this->name) . '.js'
		);

		if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->update_action();
	}
	
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
			$this->get_string_as_slug($this->name) . 's/' .
			$this->get_string_as_slug($context['page_name']) .
			'.twig',
			$context
		); // e.g. backend/tickets/create_ticket.twig
	}

	/**
	 * Turns string into a lowercase slug, e.g.
	 * My Tickets > my_tickets
	 *
	 * @return String
	 */
	private function get_string_as_slug($string) {
		return str_replace(' ', '_', strtolower($string));
	}

	/**
	 * wp_redirect() doesn't work since the headers have
	 * already been sent at this point.
	 *
	 * This is a fairly hacky way of redirecting, but it works.
	 *
	 * @return String
	 */
	protected function mia_redirect($url) {
		echo '
			<script type="text/javascript">
				window.location="' . $url . '";
			</script>
		';
	}
}
