/**
 * Webpack configuration file for Laravel Mix.
 * We compile JavaScript and CSS using Webpack, as described
 * in implementation report. This file defines how the compilation
 * takes place. JS and CSS is compiled into individual files for
 * each page, with cross-page vendor files minified and separated
 * for a single request across all pages.
 */

let mix = require("laravel-mix");

// Lambda functions for performing small string operations
// - used for deciding where to place different types of file
let folder = (baseFolder, name) => baseFolder + (name.endsWith("js") ? "js/" : (name.endsWith("css") ? "sass/" : ""));
// - get full path to resources for a file name, to decide where to get file
let resources = (baseFolder, name) => folder(baseFolder, name) + name;
// - get output filepath for deciding where to place built files
let output = (baseFolder, name) => folder(baseFolder, name).replace("sass", "css") + name

function compileFrontend() {
	frontendResources = name => resources("resources/frontend/", name); // baseFolder always "frontend" for frontend files
	frontendOutput    = name => output("wp-content/themes/make-it-all/", name); // set output directory

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

	// Compile vendor JS and CSS
	// Get all files in vendor folder and compile into single file
	let vendor = name => frontendResources("vendor/" + name);
	mix.js(vendor("vendor.js"), frontendOutput("vendor.js"));
	mix.sass(vendor("vendor.scss"), frontendOutput("vendor.css"));
}

function compileBackend() {
	backendResources = name => resources("resources/backend/", name); // baseFolder always "backend" for backend files
	backendOutput    = name => output("wp-content/plugins/make-it-all/resources/", name); // set output directory

	mix.js(backendResources("main.js"), backendOutput("main.js"));
	mix.sass(backendResources("main.scss"), backendOutput("main.css"))

	let pages = ["tickets"];

	for (let page of pages) {
		mix.js(backendResources(page + ".js"), backendOutput(page + ".js"));
		mix.sass(backendResources(page + ".scss"), backendOutput(page + ".css"));
	}

	// Compile vendor JS and CSS
	// Get all files in vendor folder and compile into single file
	mix.js([backendResources("vendor/jquery-ui.js")], backendOutput("vendor.js"));
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