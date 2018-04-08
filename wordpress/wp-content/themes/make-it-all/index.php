<?php

$context = Timber::get_context();

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

$urlPath = explode('/',
	trim(
		parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH),
		'/'
	)
);

// check if the page exists and render the page if it does
foreach ($urlPath as $folder) {
	if (array_search($folder, array_keys($context['pages']))) {
		$context['activePage'] = $folder;

		return Timber::render('frontend/views/' . $folder . '.twig', $context);
	}
}

// redirect to default if page is unknown
wp_redirect(get_home_url() . '/tickets');