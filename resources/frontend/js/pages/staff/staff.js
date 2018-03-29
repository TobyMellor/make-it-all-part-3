/**
 * JS specific to Staff page, for handling interactions with
 * employee information both as read-only and read-write
 * depending on access level in the organisation (∴ help desk)
 */

import "../../main";
import StaffPage from "./StaffPage";
import StaffProblemTypePage from "./StaffProblemTypePage";
import API from "../API";

let staffPage, staffProblemTypePage, api;

window.init = function(data) {
	api = window.api = new API(data);

	staffPage            = window.staffPage            = new StaffPage();
	staffProblemTypePage = window.staffProblemTypePage = new StaffProblemTypePage();

	// On page load, don't show empty single-view
	if (!location.hash) staffPage.hideTableRowDetails();

	// Load staff details into page list-view
	// This action is asynchronous
	staffPage.showStaff();

	// Detect if page should load with a specific employee being shown
	if (location.hash) staffPage.showTableRowDetails(parseInt(location.hash.substring(1)));

	//
	// Initialise Event Listeners:
	//

	// Problem types input handling (on click of problem type, load subtypes)
	$(document).on('click', '.type-column li', function() {
		// Only load subtypes if type has children
		// (double negative, ‘not class no-children’)
		if (!$(this).hasClass('no-children')) {
			staffProblemTypePage.loadSpecialistExpertiseTypes(
					$(this).closest('.type-columns'), $(this), parseInt($(this).data('expertiseTypeId')));
		}
	});

	// On editing problem types, each problem type has a checkbox
	// used to determine whether the specialism applies to the user
	$(document).on('click', '.problem-type-picker:not(.readonly) .type-column li .specialism-checkbox', function() {
		staffProblemTypePage.toggleSpecialism($(this));
	});

	// Staff filter handling (for clicking on navigation e.g.
	// "analysts" shows only users of that type)
	$(staffPage.navSelector).find("[data-slug]").click(el => {
		// Clear any in-progress search to reset the main list of staff
		if ($('.search-field input').val() !== '') {
			$('.search-field input').val('').keyup();
		}

		// Toggle active class to the newly selected type
		$(el.delegateTarget).addClass("active").siblings().removeClass("active");

		// Obtain data necessary for filtering
		// - slug of the type of employee to filter
		let slug = el.delegateTarget.dataset.slug;
		// - table to perform the filtering on
		let $table = $(staffPage.sectionSelector).find("table");
		// - index of column to be filtered, given the slug
		//   (uses .filter over the table header comparing slug)
		let columnIndex = $table.find("thead th").filter((i, el) => el.dataset.slug === slug).first().index();

		// Perform the filtering
		$table.find("tbody tr").each((i, el) => {
			let $tr = $(el);
			let $td = $tr.children().eq(columnIndex);
			$tr.toggleClass("row-hidden", $td.children().length === 0);
		});

		// Always update splash screen in case there are no results
		// so this method will detect this and display the ‘no results’ splash
		// Also sets top bar title with the total number of results
		// See method for more details on actions performed
		staffPage.updateSplashScreen();
	});

	// Display staff details when clicking on staff row in main table
	$(staffPage.tableSelector).on("click", "tbody tr", e => {
		staffPage.showTableRowDetails(parseInt(e.currentTarget.dataset.rowid));
	});

	// Perform search when search field has value (on each character input)
	$('.search-field input').on('keyup', function() {
		staffPage.search($(this).val());
	});

	// Keyboard shortcuts
	$(document).keyup(e => {
		// Ignore if in input
		if (["input", "textarea"].includes(document.activeElement.nodeName.toLowerCase())) {
			return;
		}

		if (document.getElementById("list-view")) {
			var pagename = document.getElementById("list-view").dataset.page;
		}
		if (!pagename) return; // ignore pages without name
		if (pagename.endsWith("s")) pagename = pagename.slice(0, -1);
		let page = window[pagename + "Page"];
		switch (e.keyCode) {
			case 38: // up
			case 40: // down
				if (location.hash.length === 0) {
					location.hash = 0;
					e.keyCode = 40;
				}
				let id = parseInt(location.hash.substring(1));
				id = id + (e.keyCode === 38 ? -1 : 1); // up or down
				let $row = $(page.tableSelector).find("[data-rowid=\"" + id + "\"]");
				// Does row with ID exist
				if ($row.length === 0) return;
				$(page.tableSelector).find("[data-rowid=\"" + id + "\"]").addClass("highlight").siblings().removeClass("highlight");
				page.showTableRowDetails(id);
				break;
			case 27: // esc
				page.hideTableRowDetails();
				break;
			default:
				break;
		}
	});
}
