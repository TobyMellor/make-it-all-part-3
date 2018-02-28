/*
Webpack configuration file for Laravel Mix.
We compile JavaScript and CSS using Webpack, as described
in implementation report. This file defines how the compilation
takes place. JS and CSS is compiled into individual files for
each page, with cross-page vendor files minified and separated
for a single request across all pages.
*/

let mix = require("laravel-mix");

// Lambda functions for performing small string operations
// - used for deciding where to place different types of file
let folder = name => name.endsWith("js") ? "js/" : (name.endsWith("css") ? "sass/" : "");
// - get full path to resources for a file name, to decide where to get file
let resources = name => "resources/assets/" + folder(name) + name;
// - get output filepath for deciding where to place built files
let output = name => folder(name).replace("sass", "css") + name;

// List of pages' folders to iterate through contents to get JS and CSS for compilation
let pages = ["tickets", "staff", "hardware", "software", "metrics", "problem-types", "settings", "login"];

// Compile common JS across many pages
mix.js(["main.js", "pages/DynamicPage.js", "pages/Manager.js"].map(resources), output("main.js"));

// Compile JS and CSS for each individual page
for (let page of pages) {
	mix.js(resources("pages/" + page + "/" + page + ".js"), output("pages/" + page + ".js"));
	mix.sass(resources("pages/" + page + ".scss"), output("pages/" + page + ".css"));
}

// Compile common SCSS for use on all pages
// Not used since each page CSS imports the main CSS for single file minification
// Can be re-enabled if there is a use case for purely using the main CSS
//mix.sass("resources/assets/sass/app.scss", "public/css");

// Compile vendor JS and CSS
// Get all files in vendor folder and compile into single file
let vendor = name => resources("vendor/" + name);
mix.js(vendor("vendor.js"), output("vendor.js"));
mix.sass(vendor("vendor.scss"), output("vendor.css"));

// Production builds should be handled differently to development build
// Detect production build
if (mix.inProduction()) {
	// Minification is handled automatically in production builds
} else {
	// Produce source mappings for each of the JS and CSS files built
	// to allow for better debugging in the web browser
	mix.sourceMaps();
}
