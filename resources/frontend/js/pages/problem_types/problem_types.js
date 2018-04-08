/**
 * Problem types page JS for loading and managing the
 * different types of problems a ticket may have.
 *
 * This page needs to load each problem type, and handle
 * loading children for each type when the user selects one.
 * The user can create and delete problem types, as well as see
 * how many staff have a specialism in each problem type. Each type
 * also provides quick links to tickets which have been created
 * about the problem type and links to the staff members with
 * the specialism.
 */

import "../../main";
import TicketPage from "../tickets/TicketPage";
import ProblemTypePage from "./ProblemTypePage";
import API from "../API";

let ticketPage, problemTypePage, api;

window.init = function(data) {
	api = window.api = new API(data);

    ticketPage = window.ticketPage = new TicketPage();
    problemTypePage = window.problemTypePage = new ProblemTypePage(true);

	// Initially, load all expertise types at the root (types without a parent)
	problemTypePage.loadSubExpertiseTypes($('.type-columns'));

	// Determine if the page should jump directly to a type by ID in the hash
	if (location.hash) {
		problemTypePage.goto(Number(location.hash.substring(1)));
	}

	// On clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		let id = Number($(this).data('expertiseTypeId'));

		// Simultaneously (asynchronously) perform the following tasks
		// - show the details about the selected type in the single view on the right
		problemTypePage.showTableRowDetails(id);
		// - show the children of the selected type in the main view
		problemTypePage.loadSubExpertiseTypes($('.type-columns'), $(this), id);

		// Set the hash fragment for the unique URL for the type selected
		location.hash = id;
	});

	// Problem type info shows table with parent types
	// Clicking on a type takes you to the type you clicked
	$("#problem-types-table").on('click', 'tbody tr:not(.highlight)', function() {
		$(".problem-type-picker").find("[data-expertise-type-id=\"" + this.dataset.rowid + "\"]").click();
	});

	// Clicking on a search result takes you to the selected type and clears the search
	$(document).on('click', '#table-section tbody tr:not(.highlight)', function() {
		// Go to selected type
		problemTypePage.goto(parseInt(this.dataset["rowid"]));
		// Reset search
		$('.search-field input').val('');
		problemTypePage.search("");
	});

	// Creating a new problem type with the name given by the user
	$(document).on('click', '.create-problem-type', function() {
		// Get the new name of a problem type
		let name = $(this).parent().siblings('input').val();
		// Check if a name has been given, don't create a problem type with no name
		if (!name) {
			return;
		}
		// Get the parent if it exists for the new problem type to be added to
		const parentId = $(this).closest('.type-column').prev().find('.active').data("expertiseTypeId");
		// Create problem type
		problemTypePage.createExpertiseType(name, parentId);
	});

	$("#problem-type-view").on("click", ".btn-danger", function() {
		// Get info about the problem type to be deleted, including
		// ID and name of type and ID of parent if applicable
		let $row = $("#problem-types-table").find(".highlight");
		let [id, name] = $row.children("td:not(:last-child)").map((_, el) => el.textContent);
		let parentId = $row.prev().children("td:first-child").text();

		// Ask for confirmation including specific name in error message (the Hawaii fixTM)
		if (!confirm(`Are you sure you want to delete ${name} (ID ${id})?`)) return;

		// Perform API call to delete
		problemTypePage.delete(id)
				.then(() => {
					// If the deleted type had a parent, reload just the siblings of the deleted type
					if (parentId) {
						$(".problem-type-picker").find("[data-expertise-type-id=\"" + parentId + "\"]").click();
					} else {
						// Otherwise, reload all
						window.Turbolinks.visit("/problem-types")
					}
				});
	});

	// Search problem types
	$('.search-field input').on('keyup', function() {
		problemTypePage.search(this.value);
	});

	// Hash fragment navigation for linking to staff and tickets from problem type detail
	$("#specialists-table").on("click", "tr[data-rowid]", e => {
		window.Turbolinks.visit("/staff#" + e.currentTarget.dataset.rowid);
	});
	$("#tickets-table").on("click", "tr[data-rowid]", e => {
		window.Turbolinks.visit("/tickets#" + e.currentTarget.dataset.rowid);
	});

	// Keyboard navigation
	// Keyboard shortcuts
	$(document).keyup(e => {
		// Ignore if in input
		if (document.activeElement.nodeName.toLowerCase() === "input") {
			if (e.key === "Enter") {
				e.target.nextElementSibling.children[0].click();
				return;
			}
			if (e.keyCode === 38) {
				e.target.parentElement.previousElementSibling.click();
				return;
			}
			if (e.keyCode === 37 && e.target.value === "") {
				document.activeElement.blur();
			}
			return;
		}
		// If no selection, select first item regardless of keypress
		let $lastActiveType = $(".problem-type-picker .last-active");
		if ($lastActiveType.length === 0) {
			$(".problem-type-picker [data-problem-type-id=\"1\"]").first().click();
			return;
		}
		var $row;
		switch (e.keyCode) {
			case 38: // up
			case 40: // down
				// Get row to select
				$row = $lastActiveType.first()[e.keyCode === 38 ? "prev" : "next"]();
				if (e.keyCode === 40 && $row.is(".input-group")) {
					$row.children("input").focus();
				} else {
					$row.click();
				}
				break;
			case 37: // left
			case 39: // right
				// Get column if exists to left or right
				let $column = $lastActiveType.first().closest(".type-column")[e.keyCode === 37 ? "prev" : "next"]();
				// Get row to be selected
				$row = $column.find(e.keyCode === 37 ? ".active" : "li").first();
				if (e.keyCode === 39 && $row.length === 0) {
					$column.find("input").focus();
				} else {
					$row.click();
				}
				break;
		}
	});
}
