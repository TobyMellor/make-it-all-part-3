<?php

namespace MakeItAll\Includes\Views;

use Timber;

abstract class Page {
	protected $name      = 'Unknown';
	protected $nameSlug  = 'unknown';
	protected $icon      = 'dashicons-editor-help';
	protected $position  = null;
	protected $pages     = [
		'Create' => [
			'callback' => 'create_pane'
		],
		'Update' => [
			'callback' => 'update_pane'
		]
	]; // to add/remove a page, redefine this in the child. When you redefine, include the $name
	protected $apiNamespace = 'make-it-all/v1';
	protected $error        = null;
	protected $message      = null;
	protected $scripts      = [];
	protected $styles       = [];
	
	/**
	 * Initialises the menu and submenu, and
	 * adds the enqueue scripts action when page is
	 * active
	 *
	 * @return @void
	 */
	public function init() {
		$name = $this->name;

		$parentSlug = $this->nameSlug = $this->get_string_as_slug($this->name);

		add_menu_page('View ' . $name, ($name == "Hardware" || $name == "Metrics" || $name == "Software"? $name : $name . 's'), 'read_make_it_all', $parentSlug, [$this, 'read_pane'], $this->icon, $this->position);

		// Create submenu for each page in Pages, e.g. Create [Ticket], Update [Ticket]
		foreach ($this->pages as $pageName => $options) {
			$pageNameSlug = $this->get_string_as_slug($pageName);

			$title          = isset($options['page_action']) ? $pageName               : $pageName . ' ' . $name;
			$pageActionSlug = isset($options['page_action']) ? $options['page_action'] : $parentSlug . '_' . $pageNameSlug;
			
			
			//Dont want extra options for Metrics
			
			add_submenu_page(
				$parentSlug,
				$title, // page title
				$title, // menu title
				'edit_make_it_all',
				$pageActionSlug, // slug, e.g. ticket_create
				[
					$this,
					$options['callback'] // callback that renders the page, e.g. read_pane
				]
			);
		}

		$this->error   = isset($_SESSION['mia_error'])   ? $_SESSION['mia_error'] : null;
		$this->message = isset($_SESSION['mia_message']) ? $_SESSION['mia_message'] : null;
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
		$fileName = $this->nameSlug;
		$this->enqueue_dependency('mia_' . $fileName, '/backend/css/' . $fileName . '/' . $fileName . '.css');
		$this->enqueue_dependency('mia_' . $fileName, '/backend/js/' . $fileName . '/' . $fileName . '.js');

		foreach ($this->styles as $style) {
			wp_enqueue_style($style['name'], $style['location'], [], '1.0.0', 'all');
		}

		foreach (array_reverse($this->scripts) as $script) { // reverse to get the main script first
			wp_enqueue_script($script['name'], $script['location'], ['jquery', 'jquery-ui-accordion'], '1.0.0', false);
		}
	}

	public function enqueue_dependency($name, $location) {
		if (!is_file(get_template_directory() . $location)) return;

		$type = pathinfo($location, PATHINFO_EXTENSION) === 'js' ? 'scripts' : 'styles';

		$this->{$type}[] = [
			'name'     => $name,
			'location' => get_template_directory_uri() . $location
		];
	}

	public function read_pane() {
		$this->enqueue_dependency(
			'mia_read_' . $this->nameSlug, // name of script, e.g. mia_read_tickets
			'/backend/js/' . $this->nameSlug . '/read_' . $this->nameSlug . '.js' // location of script
		);
	}

	public function create_pane() {
		$this->enqueue_dependency(
			'mia_create_' . $this->nameSlug,
			'/backend/js/' . $this->nameSlug . '/create_' . $this->nameSlug . '.js'
		);

		if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->create_action();
	}

	public function update_pane() {
		$this->enqueue_dependency(
			'mia_update_' . $this->nameSlug,
			'/backend/js/' . $this->nameSlug . '/update_' . $this->nameSlug . '.js'
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
		$this->enqueue_dependencies();

		$context = Timber::get_context();

		$context['page_name']   = $pageName; // e.g. Create Ticket
		$context['mia_error']   = $this->error;
		$context['mia_message'] = $this->message;

		if ($this->nameSlug !== 'problem_type' && strpos(strtolower($pageName), 'create') === false) {
			$context['create_url'] = 'admin.php?page=' . $this->nameSlug . '_create';
		}

		unset($_SESSION['mia_error'], $_SESSION['mia_message']);

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
			$this->nameSlug . 's/' .
			$this->get_string_as_slug($context['page_name']) .
			'.twig',
			$context
		); // e.g. backend/tickets/create_ticket.twig			
	}

	/**
	 * Turns string into a lowercase slug, e.g.
	 * My Tickets > my_tickets
	 * Follow-up Call > follow_up_call
	 *
	 * @return String
	 */
	public function get_string_as_slug($string) {
		return 
			str_replace(' ', '_',
				str_replace('-', '_',
					strtolower($string)
				)
			);
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
		'; exit;
	}

	protected function is_error($WPError) {
		if (is_wp_error($WPError)) {
			if ($WPError->errors
					&& sizeOf($WPError->errors) > 0
					&& sizeOf($WPError->errors[400] > 0)
					&& sizeOf($WPError->errors[400][0]) > 0) {
				return $_SESSION['mia_error'] = $WPError->errors[400][0][0];
			}

			return $_SESSION['mia_error'] = 'Sorry! An unknown error has occurred. Please try that action again.';
		}

		return false;
	}
}
