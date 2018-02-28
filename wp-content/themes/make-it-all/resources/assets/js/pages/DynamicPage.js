/**
 * DynamicPage
 *
 * Extended by every page, e.g. TicketPage.
 * Contains functions that are repeated often among
 * pages, such as updating tables or updating the navbar
 */
class DynamicPage {
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
	constructor({
		sectionSelector = "#list-view",
		tableSelector = "#table-section",
		navSelector,
		detailSelector
	} = {}) {
		this.sectionSelector = sectionSelector;
		this.tableSelector = tableSelector;
		// Set navigation selector to first component of section selector with ‘-nav’ appended, otherwise default CSS selector
		this.navSelector = navSelector ? navSelector : (sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-nav" : ".side-nav-bar-nested");
		this.detailSelector = detailSelector ? detailSelector : (sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-detail" : "#single-view");
	}

	/**
	 * Set the title bar of the single view to the given string
	 * CAUTION: Does not perform escaping of input string, do not pass
	 * user content to this method.
	 *
	 * @param html HTML to set the single view title to
	 */
	updateSingleViewNavbar(html) {
		$(this.detailSelector).find('.top-nav h4').html(html);
	}

	/**
	 * Hides the "Loading…" splash screen if it's shown
	 * Determines whether the "No Results…" splash screen
	 * should be shown or not.
	 *
	 * You should call this function after using "appendTable"
	 */
	updateSplashScreen(navText = null) {
		// Get table element to inspect contents
		var $table = $(this.tableSelector),
				// Get number of results within table currently being shown
				// This is not equal to the number of rows in the table HTML
				// since some table rows may be hidden, which need to be
				// discounted from the total count.
		    resultsCount = $table.find('tbody tr').filter((i, el) => !$(el).hasClass("row-hidden")).length,
				// Get splash screen element which may be being shown instead of table
		    $splashScreen = $(this.sectionSelector).find('.splash-screen');

		// Depending on whether there are results, the splash screen or table needs to be shown
		// and the other swapped out using CSS
		var [$show, $hide] = resultsCount ? [$table, $splashScreen] : [$splashScreen, $table];
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
	appendTableRow(object) {
		var $tableSection = $(this.tableSelector),
		    $tableHead    = $tableSection.find('table thead tr'),
		    $tableBody    = $tableSection.find('table tbody'),
		    $newRow       = $(document.createElement("tr"));

		// Don't add the same row twice
		if ($tableBody.children("[data-rowid=\"" + object.id + "\"]").length > 0) return;

		// Set ID on row to reference later
		$newRow[0].dataset.rowid = object.id;
		$newRow.toggleClass("highlight", object.id == parseInt(location.hash.substring(1)));

		$tableHead.children('th').each(function() {
			var slug = this.dataset.slug, td = document.createElement("td");

			if (slug === 'eye') { // the on-hover eye invisible row
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
	clearTable() {
		$(this.tableSelector).find('tbody').empty();
	}
	
	/**
	 * Show detail page
	 *
	 * @param id The ID of the table row to be shown in the single view
	 */
	showTableRowDetails(id = null) {
		// No need to check for null as no rows will match if no ID passed
		// .siblings does not include the element itself so can be chained after finding highlight row first
		$(this.tableSelector).find("tbody tr").filter((i, el) => el.dataset.rowid == id).addClass("highlight").first().siblings().removeClass("highlight");
		
		// No need to set style using JS here, CSS handles flex
		$(this.detailSelector).unwrap("div")
			// Close button on hide
			.find("[data-action=\"close\"]").click(() => this.hideTableRowDetails());
		
		if (id > -1) location.hash = parseInt(id);
	}
	
	/**
	 * Hide detail page shown with showDetail
	 */
	hideTableRowDetails() {
		// Deselect all rows
		$(this.tableSelector).find("tbody tr").removeClass("highlight");
		// Filter to check if already hidden, don't hide again
		$(this.detailSelector).filter((i, el) => $(el).parent("div").length === 0).wrap(document.createElement("div"));
		
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
	populateSelectField($select, defaultText, elements, defaultOptionId = null, property = 'name', getAdditionalDetails = null) {
		// Default empty content for input
		let option = new Option(defaultText, null, true, true);
		option.disabled = true;
		$select.empty().append(option);
		
		// Each option to be selected from
		elements.forEach(e => {
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
	async search(query, elements = [], objectCallback, searchKeys = []) {
		let page = this;

		page.clearTable();

		if (elements.length > 0) {
			elements.forEach(async function(el) {
				var object = await objectCallback(el);

				searchKeys.forEach(key => {
					object[key] = String(object[key]).replace(new RegExp('(' + query + ')', 'ig'), '<strong>$1</strong>');
				});

				// This is asynchronous function, so query may have changed since the results were queried
				if (query === $(".search-field input").val()) {
					page.appendTableRow(object);
					page.updateSplashScreen(`${elements.length} result${elements.length !== 1 ? "s" : ""} for ‘${query}’`);
				}
			});
		} else {
			page.updateSplashScreen(`No results for ‘${query}’`);
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
	static showNotification(message = "An error occurred", type = "danger", duration = 6) {
		// Only show one message at a time
		$("#alert-notification").remove();

		// Create element
		const msg = document.createElement("div");
		msg.id = "alert-notification";
		msg.classList.add("alert", `alert-${type}`, "alert-notification");
		msg.setAttribute("role", "alert"); // Accessibility
		// Set content and show on screen

		msg.textContent = message;
		document.body.appendChild(msg);

		// Hide after duration
		setTimeout(() => msg.remove(), duration * 1000);

		// Click to hide message
		$(msg).click(function() {
			$(this).fadeOut();
		});
	}
}

export default DynamicPage;
