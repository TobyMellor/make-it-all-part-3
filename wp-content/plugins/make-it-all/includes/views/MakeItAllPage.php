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
	}

	abstract public function read_pane();
	abstract public function create_pane();
	abstract public function update_pane();
	abstract public function delete_pane();
}