<?php

namespace MakeItAll\Includes;

/**
 * Register all actions and filters for the plugin.
 *
 * Maintain a list of all hooks that are registered throughout
 * the plugin, and register them with the WordPress API. Call the
 * run function to execute the list of actions and filters.
 *
 * @package    make-it-all
 * @subpackage make-it-all/includes
 * @author     Toby Mellor <me@tobymellor.co.uk>
 */
class Loader {
	/**
	 * The array of actions registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $actions    The actions registered with WordPress to fire when the plugin loads.
	 */
	protected $actions = [];

	/**
	 * The array of filters registered with WordPress.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $filters    The filters registered with WordPress to fire when the plugin loads.
	 */
	protected $filters = [];

	/**
	 * Add a new action to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress action that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the action is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         Optional. The priority at which the function should be fired. Default is 10.
	 * @param    int                  $acceptedArgs     Optional. The number of arguments that should be passed to the $callback. Default is 1.
	 */
	public function add_action($hook, $component, $callback, $priority = 10, $acceptedArgs = 1) {
		$this->actions = $this->add($this->actions, $hook, $component, $callback, $priority, $acceptedArgs);
	}

	/**
	 * Add a new filter to the collection to be registered with WordPress.
	 *
	 * @since    1.0.0
	 * @param    string               $hook             The name of the WordPress filter that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the filter is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         Optional. The priority at which the function should be fired. Default is 10.
	 * @param    int                  $acceptedArgs     Optional. The number of arguments that should be passed to the $callback. Default is 1
	 */
	public function add_filter($hook, $component, $callback, $priority = 10, $acceptedArgs = 1) {
		$this->filters = $this->add($this->filters, $hook, $component, $callback, $priority, $acceptedArgs);
	}

	/**
	 * A utility function that is used to register the actions and hooks into a single
	 * collection.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @param    array                $hooks            The collection of hooks that is being registered (that is, actions or filters).
	 * @param    string               $hook             The name of the WordPress filter that is being registered.
	 * @param    object               $component        A reference to the instance of the object on which the filter is defined.
	 * @param    string               $callback         The name of the function definition on the $component.
	 * @param    int                  $priority         The priority at which the function should be fired.
	 * @param    int                  $acceptedArgs     The number of arguments that should be passed to the $callback.
	 * @return   array                                  The collection of actions and filters registered with WordPress.
	 */
	private function add($hooks, $hook, $component, $callback, $priority, $acceptedArgs) {
		$hooks[] = [
			'hook'          => $hook,
			'component'     => $component,
			'callback'      => $callback,
			'priority'      => $priority,
			'accepted_args' => $acceptedArgs
		];

		return $hooks;

	}

	/**
	 * Register the filters and actions with WordPress.
	 * Register all of the pages.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		/**
		 * Register all of the pages
		 */
		$pages = [
			'TicketPage',
			'HardwarePage',
			'ProblemTypePage'
		];

		$basePageName = __NAMESPACE__ . '\Views\\';

		foreach ($pages as $pageName) {
			$pageName = $basePageName . $pageName;
			$page     = new $pageName;

			$this->add_action('admin_menu', new $pageName, 'init');

			if (method_exists($page, 'add_api_endpoints')) {
				$this->add_action('rest_api_init', $page, 'add_api_endpoints');
			}
		}

		/**
		 * Register the additional info needed for the staff page
		 */
		$pageName = $basePageName . 'StaffPage';

		$this->add_action('admin_menu', new $pageName, 'init');
		$this->add_action('show_user_profile', new $pageName, 'read_pane');
		$this->add_action('edit_user_profile', new $pageName, 'read_pane');

		/**
		 * Now execute all of the filters and actions
		 */

		foreach ($this->filters as $hook) {
			add_filter(
				$hook['hook'],
				[
					$hook['component'],
					$hook['callback']
				],
				$hook['priority'],
				$hook['accepted_args']
			);
		}

		foreach ($this->actions as $hook) {
			add_action(
				$hook['hook'],
				[
					$hook['component'],
					$hook['callback']
				],
				$hook['priority'],
				$hook['accepted_args']
			);
		}
	}
}
