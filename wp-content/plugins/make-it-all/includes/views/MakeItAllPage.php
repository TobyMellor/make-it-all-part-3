<?php

abstract class MakeItAllPage {
	function __construct($name, $icon, $position = null) {
		$parentSlug = str_replace(' ', '_', strtolower($name));

		add_menu_page('View ' . $name, $name, 'make_it_all_view', $parentSlug, '', $icon, $position);

		add_submenu_page($parentSlug, 'Create ' . $name, 'Create ' . $name, 'make_it_all_manage', $parentSlug . '_create');
		add_submenu_page($parentSlug, 'Update ' . $name, 'Update ' . $name, 'make_it_all_manage', $parentSlug . '_update');
		add_submenu_page($parentSlug, 'Delete ' . $name, 'Delete ' . $name, 'make_it_all_manage', $parentSlug . '_delete');
	}
}