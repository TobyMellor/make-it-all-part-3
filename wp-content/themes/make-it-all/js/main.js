/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manager
 *
 * Abstract class extended by all managers,
 * contains methods that may be useful to the managers.
 */
var Manager = function () {
	function Manager() {
		_classCallCheck(this, Manager);
	}
	//


	/**
  * Search array of elements for query in given property names
  * 
  * @param elements Array of objects to be searched through
  * @param query Case insensitive string to search elements
  * @param properties Array of strings representing elements property names to search through
  */


	_createClass(Manager, [{
		key: "search",
		value: function search() {
			var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
			var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			query = query.toLowerCase(); // Normalise query (and properties individually later)

			return elements.filter(function (el) {
				// Get all elements
				return properties.some(function (prop) {
					// Check properties until match is found
					if (String(el[prop]).toLowerCase().includes(query)) return true; // Determine if property is a match for query
				});
			});
		}
	}]);

	return Manager;
}();

exports.default = Manager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DynamicPage
 *
 * Extended by every page, e.g. TicketPage.
 * Contains functions that are repeated often among
 * pages, such as updating tables or updating the navbar
 */
var DynamicPage = function () {
	/**
  * Create a new instance of a page using the given selectors
  * to define the bounds of the page, in cases where this DynamicPage
  * is not the only page on the screen, such as if a page is being
  * displayed in a modal.
  *
  * Not providing any selectors will default to using the
  * main selectors for the entire screen, such that
  * this page becomes the main page of the application.
  *
  * @param sectionSelector Selector string for the main section containing table view
  * @param tableSelector Selector string for table within previous section
  * @param navSelector Selector string for navigation bar shown at top of section
  * @param detailSelector Selector string for single view detail shown for an individual row
  */
	function DynamicPage() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$sectionSelector = _ref.sectionSelector,
		    sectionSelector = _ref$sectionSelector === undefined ? "#list-view" : _ref$sectionSelector,
		    _ref$tableSelector = _ref.tableSelector,
		    tableSelector = _ref$tableSelector === undefined ? "#table-section" : _ref$tableSelector,
		    navSelector = _ref.navSelector,
		    detailSelector = _ref.detailSelector;

		_classCallCheck(this, DynamicPage);

		this.sectionSelector = sectionSelector;
		this.tableSelector = tableSelector;
		// Set navigation selector to first component of section selector with ‘-nav’ appended, otherwise default CSS selector
		this.navSelector = navSelector ? navSelector : sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-nav" : ".side-nav-bar-nested";
		this.detailSelector = detailSelector ? detailSelector : sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-detail" : "#single-view";
	}

	/**
  * Set the title bar of the single view to the given string
  * CAUTION: Does not perform escaping of input string, do not pass
  * user content to this method.
  *
  * @param html HTML to set the single view title to
  */


	_createClass(DynamicPage, [{
		key: "updateSingleViewNavbar",
		value: function updateSingleViewNavbar(html) {
			$(this.detailSelector).find('.top-nav h4').html(html);
		}

		/**
   * Hides the "Loading…" splash screen if it's shown
   * Determines whether the "No Results…" splash screen
   * should be shown or not.
   *
   * You should call this function after using "appendTable"
   */

	}, {
		key: "updateSplashScreen",
		value: function updateSplashScreen() {
			var navText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// Get table element to inspect contents
			var $table = $(this.tableSelector),

			// Get number of results within table currently being shown
			// This is not equal to the number of rows in the table HTML
			// since some table rows may be hidden, which need to be
			// discounted from the total count.
			resultsCount = $table.find('tbody tr').filter(function (i, el) {
				return !$(el).hasClass("row-hidden");
			}).length,

			// Get splash screen element which may be being shown instead of table
			$splashScreen = $(this.sectionSelector).find('.splash-screen');

			// Depending on whether there are results, the splash screen or table needs to be shown
			// and the other swapped out using CSS

			var _ref2 = resultsCount ? [$table, $splashScreen] : [$splashScreen, $table],
			    _ref3 = _slicedToArray(_ref2, 2),
			    $show = _ref3[0],
			    $hide = _ref3[1];

			$hide.addClass("block-hidden");
			$show.removeClass("block-hidden");

			// The main top bar for the list view contains the total number of items being shown in the table
			if (!navText) {
				// Set navbar text as number of items in table then append currently selected filter
				navText = resultsCount + " " + $(this.navSelector).find("li.active").first().text().replace("All ", "");
			}

			// If unable to obtain rows count, show "Loading…"
			$(this.sectionSelector).closest("section").find(".top-nav h4").text(resultsCount !== undefined ? navText : "Loading…");
		}

		/**
   * Adds a row in the table body within #table-section
   * using data from "object".
   *
   * The property names should correspond with the "slug"
   * attribute in table header.
   *
   * NOTE: This assumes the object has an ID attribute. Include it
   * even if you don't wish to show it.
   *
   * @param object - The data to append to the end of the table
   * splashscreen on your page
   */

	}, {
		key: "appendTableRow",
		value: function appendTableRow(object) {
			var $tableSection = $(this.tableSelector),
			    $tableHead = $tableSection.find('table thead tr'),
			    $tableBody = $tableSection.find('table tbody'),
			    $newRow = $(document.createElement("tr"));

			// Don't add the same row twice
			if ($tableBody.children("[data-rowid=\"" + object.id + "\"]").length > 0) return;

			// Set ID on row to reference later
			$newRow[0].dataset.rowid = object.id;
			$newRow.toggleClass("highlight", object.id == parseInt(location.hash.substring(1)));

			$tableHead.children('th').each(function () {
				var slug = this.dataset.slug,
				    td = document.createElement("td");

				if (slug === 'eye') {
					// the on-hover eye invisible row
					td.innerHTML = '<i class="fa fa-eye"></i>';
				} else if (slug && slug.includes("access")) {
					// Boolean value support
					td.innerHTML = Object.resolve(slug, object) ? this.innerHTML : "·";
				} else {
					td.innerHTML = Object.resolve(slug, object) !== undefined ? object[slug] : "—";
				}

				$newRow.append(td);
			});

			$tableBody.append($newRow);

			return $newRow[0];
		}

		/**
   * Clears the data in the table body within #table-section
   */

	}, {
		key: "clearTable",
		value: function clearTable() {
			$(this.tableSelector).find('tbody').empty();
		}

		/**
   * Show detail page
   *
   * @param id The ID of the table row to be shown in the single view
   */

	}, {
		key: "showTableRowDetails",
		value: function showTableRowDetails() {
			var _this = this;

			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// No need to check for null as no rows will match if no ID passed
			// .siblings does not include the element itself so can be chained after finding highlight row first
			$(this.tableSelector).find("tbody tr").filter(function (i, el) {
				return el.dataset.rowid == id;
			}).addClass("highlight").first().siblings().removeClass("highlight");

			// No need to set style using JS here, CSS handles flex
			$(this.detailSelector).unwrap("div")
			// Close button on hide
			.find("[data-action=\"close\"]").click(function () {
				return _this.hideTableRowDetails();
			});

			if (id > -1) location.hash = parseInt(id);
		}

		/**
   * Hide detail page shown with showDetail
   */

	}, {
		key: "hideTableRowDetails",
		value: function hideTableRowDetails() {
			// Deselect all rows
			$(this.tableSelector).find("tbody tr").removeClass("highlight");
			// Filter to check if already hidden, don't hide again
			$(this.detailSelector).filter(function (i, el) {
				return $(el).parent("div").length === 0;
			}).wrap(document.createElement("div"));

			location.hash = "";
		}

		/**
   * Fill a select element with the passed options
   * for the user to select from a dropdown list
   *
   * @param $select A reference to the select element to be filled
   * @param defaultText Text to be displayed in the select element
   * @param elements List of elements to be added for the user to select from
   * @param defaultOptionId ID of a default option from the elements given
   * @param property The property of the select field to access selected item with
   * @param getAdditionalDetails function that determines the additional details to be shown for current item
   */

	}, {
		key: "populateSelectField",
		value: function populateSelectField($select, defaultText, elements) {
			var defaultOptionId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
			var property = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'name';
			var getAdditionalDetails = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

			// Default empty content for input
			var option = new Option(defaultText, null, true, true);
			option.disabled = true;
			$select.empty().append(option);

			// Each option to be selected from
			elements.forEach(function (e) {
				if (getAdditionalDetails !== null) {
					$select.append(new Option('#' + e.id + ' ' + getAdditionalDetails(e) + ' ' + e[property], e.id, false, e.id === defaultOptionId));
				} else {
					$select.append(new Option('#' + e.id + ' ' + e[property], e.id, false, e.id === defaultOptionId));
				}
			});

			$select.selectpicker('refresh');
		}

		/**
   * @param query The search string
   * @param elements The elements matching the search to display
   * @param objectCallback a callback returning an object (the row structure)
   * @param searchKeys the properties in objectCallback to highlight
   */

	}, {
		key: "search",
		value: function search(query) {
			var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			var objectCallback = arguments[2];
			var searchKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

			var page = this;

			page.clearTable();

			if (elements.length > 0) {
				elements.forEach(function (el) {
					var object = objectCallback(el);

					searchKeys.forEach(function (key) {
						object[key] = String(object[key]).replace(new RegExp('(' + query + ')', 'ig'), '<strong>$1</strong>');
					});

					if (query === $(".search-field input").val()) {
						page.appendTableRow(object);
						page.updateSplashScreen(elements.length + " result" + (elements.length !== 1 ? "s" : "") + " for \u2018" + query + "\u2019");
					}
				});
			} else {
				page.updateSplashScreen("No results for \u2018" + query + "\u2019");
			}
		}

		/**
   * Show a message at the top of the page, over all elements.
   * Hide after 6 seconds, or configurable.
   *
   * @param message The message string to be shown in the message box.
   * @param type The type of message, such as "info", "success", "warning", "danger"
   * @param duration The duration in seconds for the message to be shown for.
   */

	}], [{
		key: "showNotification",
		value: function showNotification() {
			var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "An error occurred";
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "danger";
			var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

			// Only show one message at a time
			$("#alert-notification").remove();

			// Create element
			var msg = document.createElement("div");
			msg.id = "alert-notification";
			msg.classList.add("alert", "alert-" + type, "alert-notification");
			msg.setAttribute("role", "alert"); // Accessibility
			// Set content and show on screen

			msg.textContent = message;
			document.body.appendChild(msg);

			// Hide after duration
			setTimeout(function () {
				return msg.remove();
			}, duration * 1000);

			// Click to hide message
			$(msg).click(function () {
				$(this).fadeOut();
			});
		}
	}]);

	return DynamicPage;
}();

exports.default = DynamicPage;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Since nav element is persisted between pages, we need to manually set the active button
$("#nav").on("click", "ul li a", function (e) {
	$(e.currentTarget).parent().addClass("active").siblings().removeClass("active");
});

// Tooltips activated on all elements with a relevant tooltip HTML attribute
$('[data-toggle="tooltip"]').tooltip();

// Date/time picker activated on all elements with relevant class
$('.timepicker').datetimepicker();

// Create new employee when searching for non-existent assignee
$(document).on('click', 'li.no-results', function (e) {
	var newValue = $(this).closest(".dropdown-menu.open").children(".bs-searchbox").children("input").val(),
	    $modal = $('#new-staff-modal');

	$modal.modal('show');

	$modal.find('input[name="staff.name"]').val(newValue);
	$modal.find('input[name="event_target"]').val($(this).closest('.bootstrap-select').find('select').attr('name')); // when the staff member is created, this is the input field it'll update
});

$('#new-staff-modal, #new-ticket-modal, #follow-up-call-modal').on('show.bs.modal', function () {
	$(this).find('input, textarea').not('.no-clear-on-show').val('');

	$(this).find('#accordion .card:not(:first-child)').remove();

	var currentTime = new Date();

	$(this).find('.timepicker').val(('0' + (currentTime.getMonth() + 1)).slice(-2) + '/' + ('0' + currentTime.getDate()).slice(-2) + '/' + currentTime.getFullYear() + ' ' + ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2));
});

$(document).on('click', '#accordion .card .card-header', function () {
	$(this).closest('.card').find('.collapse').collapse('toggle');
});

$(document).on('click', '#accordion .card .card-header .remove-accordion', function () {
	$(this).closest('.card').fadeOut(200, function () {
		$(this).remove();
	});
});

$(document).on('hide.bs.collapse show.bs.collapse', '#accordion .collapse', function (e) {
	var isShow = e.type.split(".")[0] === "show";
	$(this).siblings('.card-header').find('.view-accordion').toggleClass('fa-chevron-up', !isShow).toggleClass('fa-chevron-down', isShow);
});

$('.search-field input').val('');

// Bootstrap Select Fix: Add back event listeners to open select field
$(document).on("click", ".bootstrap-select", function () {
	$(this).find('.dropdown-menu.open').toggle();
});

// Bootstrap modals fix: add back event listener
$(document).on("click", "body:not([data-page=\"staff\"]) [data-toggle=\"modal\"]", function () {
	$(this.dataset.target).modal("show");
});

function addItemToPicker(pickerElement, value, name) {
	$(pickerElement).append(new Option(name, value)).selectpicker('refresh').selectpicker('val', name);
}

var validationTimeout = window.validationTimeout = null;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
module.exports = __webpack_require__(38);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n\t\t@mixin _colhide() { // mixin workaround for https://github.com/sass/sass/issues/1050\n        ^\n      Mixins may not be defined within control directives or other mixins.\n      in /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/resources/assets/sass/animate.scss (line 43, column 10)\n    at runLoaders (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/neo-async/async.js:7974:18)\n    at options.error (/Users/tobymellor/Documents/CompSci/htdocs/Recent/make-it-all/wp-content/themes/make-it-all/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHluYW1pY1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy92ZW5kb3IvdmVuZG9yLnNjc3M/ZDhkZSJdLCJuYW1lcyI6WyJNYW5hZ2VyIiwiZWxlbWVudHMiLCJxdWVyeSIsInByb3BlcnRpZXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsInNvbWUiLCJTdHJpbmciLCJlbCIsInByb3AiLCJpbmNsdWRlcyIsIkR5bmFtaWNQYWdlIiwic2VjdGlvblNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsIm5hdlNlbGVjdG9yIiwiZGV0YWlsU2VsZWN0b3IiLCJzcGxpdCIsImh0bWwiLCIkIiwiZmluZCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJpIiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCIkc3BsYXNoU2NyZWVuIiwiJHNob3ciLCIkaGlkZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaXJzdCIsInRleHQiLCJyZXBsYWNlIiwiY2xvc2VzdCIsInVuZGVmaW5lZCIsIm9iamVjdCIsIiR0YWJsZVNlY3Rpb24iLCIkdGFibGVIZWFkIiwiJHRhYmxlQm9keSIsIiRuZXdSb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImlkIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJzbHVnIiwidGQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJyZXNvbHZlIiwiYXBwZW5kIiwiZW1wdHkiLCJzaWJsaW5ncyIsInVud3JhcCIsImNsaWNrIiwiaGlkZVRhYmxlUm93RGV0YWlscyIsInBhcmVudCIsIndyYXAiLCIkc2VsZWN0IiwiZGVmYXVsdFRleHQiLCJkZWZhdWx0T3B0aW9uSWQiLCJwcm9wZXJ0eSIsImdldEFkZGl0aW9uYWxEZXRhaWxzIiwib3B0aW9uIiwiT3B0aW9uIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwiZSIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIm9uIiwiY3VycmVudFRhcmdldCIsInRvb2x0aXAiLCJkYXRldGltZXBpY2tlciIsIm5ld1ZhbHVlIiwiJG1vZGFsIiwibW9kYWwiLCJhdHRyIiwibm90IiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0TW9udGgiLCJzbGljZSIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsInZhbHVlIiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBLHlDIiwiZmlsZSI6Ii9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAyYTk2YzY0NjJjNTVlMDRhMjI0IiwiLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQWJzdHJhY3QgY2xhc3MgZXh0ZW5kZWQgYnkgYWxsIG1hbmFnZXJzLFxuICogY29udGFpbnMgbWV0aG9kcyB0aGF0IG1heSBiZSB1c2VmdWwgdG8gdGhlIG1hbmFnZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly9cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlYXJjaCBhcnJheSBvZiBlbGVtZW50cyBmb3IgcXVlcnkgaW4gZ2l2ZW4gcHJvcGVydHkgbmFtZXNcblx0ICogXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBBcnJheSBvZiBvYmplY3RzIHRvIGJlIHNlYXJjaGVkIHRocm91Z2hcblx0ICogQHBhcmFtIHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKi9cblx0c2VhcmNoKGVsZW1lbnRzID0gW10sIHF1ZXJ5ID0gXCJcIiwgcHJvcGVydGllcyA9IFtdKSB7XG5cdFx0cXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpc2UgcXVlcnkgKGFuZCBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSBsYXRlcilcblxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWwgPT4geyAvLyBHZXQgYWxsIGVsZW1lbnRzXG5cdFx0XHRyZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3AgPT4geyAvLyBDaGVjayBwcm9wZXJ0aWVzIHVudGlsIG1hdGNoIGlzIGZvdW5kXG5cdFx0XHRcdGlmIChTdHJpbmcoZWxbcHJvcF0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSByZXR1cm4gdHJ1ZTsgLy8gRGV0ZXJtaW5lIGlmIHByb3BlcnR5IGlzIGEgbWF0Y2ggZm9yIHF1ZXJ5XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwiLyoqXG4gKiBEeW5hbWljUGFnZVxuICpcbiAqIEV4dGVuZGVkIGJ5IGV2ZXJ5IHBhZ2UsIGUuZy4gVGlja2V0UGFnZS5cbiAqIENvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IGFyZSByZXBlYXRlZCBvZnRlbiBhbW9uZ1xuICogcGFnZXMsIHN1Y2ggYXMgdXBkYXRpbmcgdGFibGVzIG9yIHVwZGF0aW5nIHRoZSBuYXZiYXJcbiAqL1xuY2xhc3MgRHluYW1pY1BhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgcGFnZSB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3JzXG5cdCAqIHRvIGRlZmluZSB0aGUgYm91bmRzIG9mIHRoZSBwYWdlLCBpbiBjYXNlcyB3aGVyZSB0aGlzIER5bmFtaWNQYWdlXG5cdCAqIGlzIG5vdCB0aGUgb25seSBwYWdlIG9uIHRoZSBzY3JlZW4sIHN1Y2ggYXMgaWYgYSBwYWdlIGlzIGJlaW5nXG5cdCAqIGRpc3BsYXllZCBpbiBhIG1vZGFsLlxuXHQgKlxuXHQgKiBOb3QgcHJvdmlkaW5nIGFueSBzZWxlY3RvcnMgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoZVxuXHQgKiBtYWluIHNlbGVjdG9ycyBmb3IgdGhlIGVudGlyZSBzY3JlZW4sIHN1Y2ggdGhhdFxuXHQgKiB0aGlzIHBhZ2UgYmVjb21lcyB0aGUgbWFpbiBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHNlY3Rpb25TZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmluZyB0YWJsZSB2aWV3XG5cdCAqIEBwYXJhbSB0YWJsZVNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGFibGUgd2l0aGluIHByZXZpb3VzIHNlY3Rpb25cblx0ICogQHBhcmFtIG5hdlNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgbmF2aWdhdGlvbiBiYXIgc2hvd24gYXQgdG9wIG9mIHNlY3Rpb25cblx0ICogQHBhcmFtIGRldGFpbFNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3Igc2luZ2xlIHZpZXcgZGV0YWlsIHNob3duIGZvciBhbiBpbmRpdmlkdWFsIHJvd1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNlY3Rpb25TZWxlY3RvciA9IFwiI2xpc3Qtdmlld1wiLFxuXHRcdHRhYmxlU2VsZWN0b3IgPSBcIiN0YWJsZS1zZWN0aW9uXCIsXG5cdFx0bmF2U2VsZWN0b3IsXG5cdFx0ZGV0YWlsU2VsZWN0b3Jcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5zZWN0aW9uU2VsZWN0b3IgPSBzZWN0aW9uU2VsZWN0b3I7XG5cdFx0dGhpcy50YWJsZVNlbGVjdG9yID0gdGFibGVTZWxlY3Rvcjtcblx0XHQvLyBTZXQgbmF2aWdhdGlvbiBzZWxlY3RvciB0byBmaXJzdCBjb21wb25lbnQgb2Ygc2VjdGlvbiBzZWxlY3RvciB3aXRoIOKAmC1uYXbigJkgYXBwZW5kZWQsIG90aGVyd2lzZSBkZWZhdWx0IENTUyBzZWxlY3RvclxuXHRcdHRoaXMubmF2U2VsZWN0b3IgPSBuYXZTZWxlY3RvciA/IG5hdlNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItbmF2XCIgOiBcIi5zaWRlLW5hdi1iYXItbmVzdGVkXCIpO1xuXHRcdHRoaXMuZGV0YWlsU2VsZWN0b3IgPSBkZXRhaWxTZWxlY3RvciA/IGRldGFpbFNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItZGV0YWlsXCIgOiBcIiNzaW5nbGUtdmlld1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpdGxlIGJhciBvZiB0aGUgc2luZ2xlIHZpZXcgdG8gdGhlIGdpdmVuIHN0cmluZ1xuXHQgKiBDQVVUSU9OOiBEb2VzIG5vdCBwZXJmb3JtIGVzY2FwaW5nIG9mIGlucHV0IHN0cmluZywgZG8gbm90IHBhc3Ncblx0ICogdXNlciBjb250ZW50IHRvIHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0gaHRtbCBIVE1MIHRvIHNldCB0aGUgc2luZ2xlIHZpZXcgdGl0bGUgdG9cblx0ICovXG5cdHVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIoaHRtbCkge1xuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS5odG1sKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBcIkxvYWRpbmfigKZcIiBzcGxhc2ggc2NyZWVuIGlmIGl0J3Mgc2hvd25cblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBcIk5vIFJlc3VsdHPigKZcIiBzcGxhc2ggc2NyZWVuXG5cdCAqIHNob3VsZCBiZSBzaG93biBvciBub3QuXG5cdCAqXG5cdCAqIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHVzaW5nIFwiYXBwZW5kVGFibGVcIlxuXHQgKi9cblx0dXBkYXRlU3BsYXNoU2NyZWVuKG5hdlRleHQgPSBudWxsKSB7XG5cdFx0Ly8gR2V0IHRhYmxlIGVsZW1lbnQgdG8gaW5zcGVjdCBjb250ZW50c1xuXHRcdHZhciAkdGFibGUgPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0XHRcdC8vIEdldCBudW1iZXIgb2YgcmVzdWx0cyB3aXRoaW4gdGFibGUgY3VycmVudGx5IGJlaW5nIHNob3duXG5cdFx0XHRcdC8vIFRoaXMgaXMgbm90IGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUgSFRNTFxuXHRcdFx0XHQvLyBzaW5jZSBzb21lIHRhYmxlIHJvd3MgbWF5IGJlIGhpZGRlbiwgd2hpY2ggbmVlZCB0byBiZVxuXHRcdFx0XHQvLyBkaXNjb3VudGVkIGZyb20gdGhlIHRvdGFsIGNvdW50LlxuXHRcdCAgICByZXN1bHRzQ291bnQgPSAkdGFibGUuZmluZCgndGJvZHkgdHInKS5maWx0ZXIoKGksIGVsKSA9PiAhJChlbCkuaGFzQ2xhc3MoXCJyb3ctaGlkZGVuXCIpKS5sZW5ndGgsXG5cdFx0XHRcdC8vIEdldCBzcGxhc2ggc2NyZWVuIGVsZW1lbnQgd2hpY2ggbWF5IGJlIGJlaW5nIHNob3duIGluc3RlYWQgb2YgdGFibGVcblx0XHQgICAgJHNwbGFzaFNjcmVlbiA9ICQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJyk7XG5cblx0XHQvLyBEZXBlbmRpbmcgb24gd2hldGhlciB0aGVyZSBhcmUgcmVzdWx0cywgdGhlIHNwbGFzaCBzY3JlZW4gb3IgdGFibGUgbmVlZHMgdG8gYmUgc2hvd25cblx0XHQvLyBhbmQgdGhlIG90aGVyIHN3YXBwZWQgb3V0IHVzaW5nIENTU1xuXHRcdHZhciBbJHNob3csICRoaWRlXSA9IHJlc3VsdHNDb3VudCA/IFskdGFibGUsICRzcGxhc2hTY3JlZW5dIDogWyRzcGxhc2hTY3JlZW4sICR0YWJsZV07XG5cdFx0JGhpZGUuYWRkQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cdFx0JHNob3cucmVtb3ZlQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cblx0XHQvLyBUaGUgbWFpbiB0b3AgYmFyIGZvciB0aGUgbGlzdCB2aWV3IGNvbnRhaW5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgc2hvd24gaW4gdGhlIHRhYmxlXG5cdFx0aWYgKCFuYXZUZXh0KSB7XG5cdFx0XHQvLyBTZXQgbmF2YmFyIHRleHQgYXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRhYmxlIHRoZW4gYXBwZW5kIGN1cnJlbnRseSBzZWxlY3RlZCBmaWx0ZXJcblx0XHRcdG5hdlRleHQgPSByZXN1bHRzQ291bnQgKyBcIiBcIiArICQodGhpcy5uYXZTZWxlY3RvcikuZmluZChcImxpLmFjdGl2ZVwiKS5maXJzdCgpLnRleHQoKS5yZXBsYWNlKFwiQWxsIFwiLCBcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBJZiB1bmFibGUgdG8gb2J0YWluIHJvd3MgY291bnQsIHNob3cgXCJMb2FkaW5n4oCmXCJcblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5jbG9zZXN0KFwic2VjdGlvblwiKS5maW5kKFwiLnRvcC1uYXYgaDRcIikudGV4dChyZXN1bHRzQ291bnQgIT09IHVuZGVmaW5lZCA/IG5hdlRleHQgOiBcIkxvYWRpbmfigKZcIik7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICogdXNpbmcgZGF0YSBmcm9tIFwib2JqZWN0XCIuXG5cdCAqXG5cdCAqIFRoZSBwcm9wZXJ0eSBuYW1lcyBzaG91bGQgY29ycmVzcG9uZCB3aXRoIHRoZSBcInNsdWdcIlxuXHQgKiBhdHRyaWJ1dGUgaW4gdGFibGUgaGVhZGVyLlxuXHQgKlxuXHQgKiBOT1RFOiBUaGlzIGFzc3VtZXMgdGhlIG9iamVjdCBoYXMgYW4gSUQgYXR0cmlidXRlLiBJbmNsdWRlIGl0XG5cdCAqIGV2ZW4gaWYgeW91IGRvbid0IHdpc2ggdG8gc2hvdyBpdC5cblx0ICpcblx0ICogQHBhcmFtIG9iamVjdCAtIFRoZSBkYXRhIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZVxuXHQgKiBzcGxhc2hzY3JlZW4gb24geW91ciBwYWdlXG5cdCAqL1xuXHRhcHBlbmRUYWJsZVJvdyhvYmplY3QpIHtcblx0XHR2YXIgJHRhYmxlU2VjdGlvbiA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHQgICAgJHRhYmxlSGVhZCAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGhlYWQgdHInKSxcblx0XHQgICAgJHRhYmxlQm9keSAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGJvZHknKSxcblx0XHQgICAgJG5ld1JvdyAgICAgICA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcblxuXHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSByb3cgdHdpY2Vcblx0XHRpZiAoJHRhYmxlQm9keS5jaGlsZHJlbihcIltkYXRhLXJvd2lkPVxcXCJcIiArIG9iamVjdC5pZCArIFwiXFxcIl1cIikubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG5cdFx0Ly8gU2V0IElEIG9uIHJvdyB0byByZWZlcmVuY2UgbGF0ZXJcblx0XHQkbmV3Um93WzBdLmRhdGFzZXQucm93aWQgPSBvYmplY3QuaWQ7XG5cdFx0JG5ld1Jvdy50b2dnbGVDbGFzcyhcImhpZ2hsaWdodFwiLCBvYmplY3QuaWQgPT0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHRcdCR0YWJsZUhlYWQuY2hpbGRyZW4oJ3RoJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzbHVnID0gdGhpcy5kYXRhc2V0LnNsdWcsIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG5cdFx0XHRpZiAoc2x1ZyA9PT0gJ2V5ZScpIHsgLy8gdGhlIG9uLWhvdmVyIGV5ZSBpbnZpc2libGUgcm93XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nO1xuXHRcdFx0fSBlbHNlIGlmIChzbHVnICYmIHNsdWcuaW5jbHVkZXMoXCJhY2Nlc3NcIikpIHtcblx0XHRcdFx0Ly8gQm9vbGVhbiB2YWx1ZSBzdXBwb3J0XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgPyB0aGlzLmlubmVySFRNTCA6IFwiwrdcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgIT09IHVuZGVmaW5lZCA/IG9iamVjdFtzbHVnXSA6IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCRuZXdSb3cuYXBwZW5kKHRkKTtcblx0XHR9KTtcblx0XHRcblx0XHQkdGFibGVCb2R5LmFwcGVuZCgkbmV3Um93KTtcblxuXHRcdHJldHVybiAkbmV3Um93WzBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyB0aGUgZGF0YSBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICovXG5cdGNsZWFyVGFibGUoKSB7XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNob3cgZGV0YWlsIHBhZ2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgdGFibGUgcm93IHRvIGJlIHNob3duIGluIHRoZSBzaW5nbGUgdmlld1xuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCA9IG51bGwpIHtcblx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGZvciBudWxsIGFzIG5vIHJvd3Mgd2lsbCBtYXRjaCBpZiBubyBJRCBwYXNzZWRcblx0XHQvLyAuc2libGluZ3MgZG9lcyBub3QgaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGYgc28gY2FuIGJlIGNoYWluZWQgYWZ0ZXIgZmluZGluZyBoaWdobGlnaHQgcm93IGZpcnN0XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnJvd2lkID09IGlkKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XG5cdFx0Ly8gTm8gbmVlZCB0byBzZXQgc3R5bGUgdXNpbmcgSlMgaGVyZSwgQ1NTIGhhbmRsZXMgZmxleFxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikudW53cmFwKFwiZGl2XCIpXG5cdFx0XHQvLyBDbG9zZSBidXR0b24gb24gaGlkZVxuXHRcdFx0LmZpbmQoXCJbZGF0YS1hY3Rpb249XFxcImNsb3NlXFxcIl1cIikuY2xpY2soKCkgPT4gdGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xuXHRcdFxuXHRcdGlmIChpZCA+IC0xKSBsb2NhdGlvbi5oYXNoID0gcGFyc2VJbnQoaWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogSGlkZSBkZXRhaWwgcGFnZSBzaG93biB3aXRoIHNob3dEZXRhaWxcblx0ICovXG5cdGhpZGVUYWJsZVJvd0RldGFpbHMoKSB7XG5cdFx0Ly8gRGVzZWxlY3QgYWxsIHJvd3Ncblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIEZpbHRlciB0byBjaGVjayBpZiBhbHJlYWR5IGhpZGRlbiwgZG9uJ3QgaGlkZSBhZ2FpblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KFwiZGl2XCIpLmxlbmd0aCA9PT0gMCkud3JhcChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblx0XHRcblx0XHRsb2NhdGlvbi5oYXNoID0gXCJcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGEgc2VsZWN0IGVsZW1lbnQgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcblx0ICogZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgZHJvcGRvd24gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdCBBIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYmUgZmlsbGVkXG5cdCAqIEBwYXJhbSBkZWZhdWx0VGV4dCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcblx0ICogQHBhcmFtIGVsZW1lbnRzIExpc3Qgb2YgZWxlbWVudHMgdG8gYmUgYWRkZWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tXG5cdCAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uSWQgSUQgb2YgYSBkZWZhdWx0IG9wdGlvbiBmcm9tIHRoZSBlbGVtZW50cyBnaXZlblxuXHQgKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IG9mIHRoZSBzZWxlY3QgZmllbGQgdG8gYWNjZXNzIHNlbGVjdGVkIGl0ZW0gd2l0aFxuXHQgKiBAcGFyYW0gZ2V0QWRkaXRpb25hbERldGFpbHMgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhZGRpdGlvbmFsIGRldGFpbHMgdG8gYmUgc2hvd24gZm9yIGN1cnJlbnQgaXRlbVxuXHQgKi9cblx0cG9wdWxhdGVTZWxlY3RGaWVsZCgkc2VsZWN0LCBkZWZhdWx0VGV4dCwgZWxlbWVudHMsIGRlZmF1bHRPcHRpb25JZCA9IG51bGwsIHByb3BlcnR5ID0gJ25hbWUnLCBnZXRBZGRpdGlvbmFsRGV0YWlscyA9IG51bGwpIHtcblx0XHQvLyBEZWZhdWx0IGVtcHR5IGNvbnRlbnQgZm9yIGlucHV0XG5cdFx0bGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGVmYXVsdFRleHQsIG51bGwsIHRydWUsIHRydWUpO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0JHNlbGVjdC5lbXB0eSgpLmFwcGVuZChvcHRpb24pO1xuXHRcdFxuXHRcdC8vIEVhY2ggb3B0aW9uIHRvIGJlIHNlbGVjdGVkIGZyb21cblx0XHRlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0aWYgKGdldEFkZGl0aW9uYWxEZXRhaWxzICE9PSBudWxsKSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGdldEFkZGl0aW9uYWxEZXRhaWxzKGUpICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZ1xuXHQgKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWFyY2ggdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gb2JqZWN0Q2FsbGJhY2sgYSBjYWxsYmFjayByZXR1cm5pbmcgYW4gb2JqZWN0ICh0aGUgcm93IHN0cnVjdHVyZSlcblx0ICogQHBhcmFtIHNlYXJjaEtleXMgdGhlIHByb3BlcnRpZXMgaW4gb2JqZWN0Q2FsbGJhY2sgdG8gaGlnaGxpZ2h0XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIGVsZW1lbnRzID0gW10sIG9iamVjdENhbGxiYWNrLCBzZWFyY2hLZXlzID0gW10pIHtcblx0XHRsZXQgcGFnZSA9IHRoaXM7XG5cblx0XHRwYWdlLmNsZWFyVGFibGUoKTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSBvYmplY3RDYWxsYmFjayhlbCk7XG5cblx0XHRcdFx0c2VhcmNoS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0b2JqZWN0W2tleV0gPSBTdHJpbmcob2JqZWN0W2tleV0pLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBxdWVyeSArICcpJywgJ2lnJyksICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChxdWVyeSA9PT0gJChcIi5zZWFyY2gtZmllbGQgaW5wdXRcIikudmFsKCkpIHtcblx0XHRcdFx0XHRwYWdlLmFwcGVuZFRhYmxlUm93KG9iamVjdCk7XG5cdFx0XHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYCR7ZWxlbWVudHMubGVuZ3RofSByZXN1bHQke2VsZW1lbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgTm8gcmVzdWx0cyBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGEgbWVzc2FnZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCBvdmVyIGFsbCBlbGVtZW50cy5cblx0ICogSGlkZSBhZnRlciA2IHNlY29uZHMsIG9yIGNvbmZpZ3VyYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugc3RyaW5nIHRvIGJlIHNob3duIGluIHRoZSBtZXNzYWdlIGJveC5cblx0ICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbWVzc2FnZSwgc3VjaCBhcyBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXG5cdCAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgdGhlIG1lc3NhZ2UgdG8gYmUgc2hvd24gZm9yLlxuXHQgKi9cblx0c3RhdGljIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgdHlwZSA9IFwiZGFuZ2VyXCIsIGR1cmF0aW9uID0gNikge1xuXHRcdC8vIE9ubHkgc2hvdyBvbmUgbWVzc2FnZSBhdCBhIHRpbWVcblx0XHQkKFwiI2FsZXJ0LW5vdGlmaWNhdGlvblwiKS5yZW1vdmUoKTtcblxuXHRcdC8vIENyZWF0ZSBlbGVtZW50XG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtc2cuaWQgPSBcImFsZXJ0LW5vdGlmaWNhdGlvblwiO1xuXHRcdG1zZy5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIiwgYGFsZXJ0LSR7dHlwZX1gLCBcImFsZXJ0LW5vdGlmaWNhdGlvblwiKTtcblx0XHRtc2cuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpOyAvLyBBY2Nlc3NpYmlsaXR5XG5cdFx0Ly8gU2V0IGNvbnRlbnQgYW5kIHNob3cgb24gc2NyZWVuXG5cblx0XHRtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXNnKTtcblxuXHRcdC8vIEhpZGUgYWZ0ZXIgZHVyYXRpb25cblx0XHRzZXRUaW1lb3V0KCgpID0+IG1zZy5yZW1vdmUoKSwgZHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdC8vIENsaWNrIHRvIGhpZGUgbWVzc2FnZVxuXHRcdCQobXNnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy92ZW5kb3IvdmVuZG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=