<?php

$page = 'tickets';

$context = Timber::get_context();

$context['activePage'] = $page;
$context['pages'] = [
	"login" => [
		"name" => "Login",
		"hide" => true
	],
	"metrics" => [
		"icon" => "bar-chart",
		"name" => "Metrics"
	],
	"tickets" => [
		"icon" => "ticket",
		"name" => "Tickets"
	],
	"software" => [
		"icon" => "file-code-o",
		"name" => "Software"
	],
	"hardware" => [
		"icon" => "laptop",
		"name" => "Hardware"
	],
	"problem_types" => [
		"icon" => "question",
		"name" => "Problem Types"
	],
	"staff" => [
		"icon" => "user-circle-o",
		"name" => "Staff"
	],
	"settings" => [
		"icon"    => "cog",
		"name"    => "Settings",
		"breaker" => true
	]
];

Timber::render('views/' . $page . '.twig', $context);