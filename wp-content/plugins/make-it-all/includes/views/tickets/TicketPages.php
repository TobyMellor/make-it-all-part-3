<?php

require_once(plugin_dir_path(dirname(__FILE__)) . '/MakeItAllPage.php');

class TicketPages extends MakeItAllPage {
	function __construct() {
		parent::__construct('Ticket', 'dashicons-tickets-alt', 2);
	}
}