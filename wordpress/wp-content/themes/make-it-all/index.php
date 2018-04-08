<?php

$urlPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$page = explode('/', $urlPath)[1] ?: 'tickets';

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
	]
];

if (!array_search($page, array_keys($context['pages']))) {
	wp_redirect('/tickets');
}

Timber::render('frontend/views/' . $page . '.twig', $context);