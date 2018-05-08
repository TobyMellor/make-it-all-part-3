/**
 * Webpack configuration file for Laravel Mix.
 * We compile JavaScript and CSS using Webpack, as described
 * in implementation report. This file defines how the compilation
 * takes place. JS and CSS is compiled into individual files for
 * each page, with cross-page vendor files minified and separated
 * for a single request across all pages.
 */

let mix = require("laravel-mix"),
	fs  = require("fs");

mix.setPublicPath('./');
mix.options({
	processCssUrls: false
});

// Lambda functions for performing small string operations
// - used for deciding where to place different types of file
let folder = (baseFolder, name) => baseFolder + (name.endsWith("js") ? "js/" : (name.endsWith("css") ? "sass/" : ""));
// - get full path to resources for a file name, to decide where to get file
let resources = (baseFolder, name) => folder(baseFolder, name) + name;
// - get output filepath for deciding where to place built files
let output = (baseFolder, name) => "wordpress/wp-content/themes/make-it-all/" + folder(baseFolder, name).replace("sass", "css") + name

function compileFrontend() {
	frontendResources = name => resources("resources/frontend/", name); // baseFolder always "frontend" for frontend files
	frontendOutput    = name => output("frontend/", name); // set output directory

	// List of pages' folders to iterate through contents to get JS and CSS for compilation (must be in order)
	let pages = ["tickets", "staff", "hardware", "software", "metrics", "problem_types", "settings"];

	// Compile common JS across many pages
	mix.js(["main.js", "pages/DynamicPage.js", "pages/Manager.js"].map(frontendResources), frontendOutput("main.js"));

	// Compile JS and CSS for each individual page
	for (let page of pages) {
		mix.js(frontendResources("pages/" + page + "/" + page + ".js"), frontendOutput("pages/" + page + ".js"));
		mix.sass(frontendResources("pages/" + page + ".scss"), frontendOutput("pages/" + page + ".css"));
	}

	// Compile common SCSS for use on all pages
	// Not used since each page CSS imports the main CSS for single file minification
	// Can be re-enabled if there is a use case for purely using the main CSS
	//mix.sass("resources/assets/sass/app.scss", "public/css");

	compileVendors(frontendResources, frontendOutput);
}

function compileBackend() {
	backendResources = name => resources("resources/backend/", name); // baseFolder always "backend" for backend files
	backendOutput    = name => output("backend/", name); // set output directory

	mix.js(backendResources("main.js"), backendOutput("main.js"));
	mix.sass(backendResources("main.scss"), backendOutput("main.css"))


	let pages   = ["ticket", "hardware", "software", "problem_type", "user", "department", "metrics"],
		actions = ["read", "create", "update", "follow_up_call"];

	for (let page of pages) {
		// common styles/scripts across actions, e.g. tickets/tickets.js
		mix.js(backendResources(page + "/" + page + ".js"), backendOutput(page + "/" + page + ".js"));
		mix.sass(backendResources(page + "/" + page + ".scss"), backendOutput(page + "/" + page + ".css"));

		for (let action of actions) {
			let actionPath = page + "/" + action + "_" + page + ".js";

			// scripts for an individual action, e.g. tickets/c.js
			if (fs.existsSync(backendResources(actionPath))) {
				mix.js(backendResources(actionPath), backendOutput(actionPath));
			}
		}
	}

	compileVendors(backendResources, backendOutput);
}

// Compile vendor JS and CSS
// Get all files in vendor folder and compile into single file
function compileVendors(resources, output) {
	let vendor = name => resources("vendor/" + name);

	mix.js(vendor("vendor.js"), output("vendor.js"));
	mix.sass(vendor("vendor.scss"), output("vendor.css"));
}

compileFrontend(); // frontend theme
compileBackend(); // plugin wp-admin dashboard theme

// Production builds should be handled differently to development build
// Detect production build
if (mix.inProduction()) {
	// Minification is handled automatically in production builds
} else {
	// Produce source mappings for each of the JS and CSS files built
	// to allow for better debugging in the web browser
	mix.sourceMaps();
}
