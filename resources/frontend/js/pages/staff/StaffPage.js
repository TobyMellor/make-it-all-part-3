import DynamicPage from "../DynamicPage";
import StaffManager from "./StaffManager";
import TicketManager from "../tickets/TicketManager";

/**
 * StaffPage
 *
 * Methods useful for populating and handling input on Staff page
 */
export default class StaffPage extends DynamicPage {
	constructor() {
		super();

		// Managers
		this.staffManager  = new StaffManager();
		this.ticketManager = new TicketManager();

		// No employee detail shown by default
		this.employee = null;
	}

	/**
	 * Obtain and show all staff in list view table on page
	 */
	showStaff() {
		// Ensure no locally-cached data is present in staff table before populating
		$(this.tableSelector).find("tbody").empty();

		// Column to fill tickets number into
		let ticketsColumnIndex = $(this.tableSelector).find("tr").first()
				.children("[data-slug=\"tickets.assigned\"]").index();

		// Temporary array to hold staff IDs still awaiting ticket counts
		let staffForTickets = [];

		// Put each staff member on table
		let staff = this.staffManager.staff;

		// Add each staff member to a new row in the table
		for (let employee of staff) {
			let $tableRow = this.appendTableRow(employee);
			staffForTickets.push(employee.id);
		}

		// Hide splash screen if there is at least 1 staff member in view
		this.updateSplashScreen();

		// Get assigned ticket counts asynchronously
		(async(ids) => {
			// Get number of assigned tickets and fill column
			let $rows   = $(this.tableSelector).find("tbody").children("tr");
			let tickets = this.ticketManager.getTicketsAssignedToStaffIds(ids);

			$rows.each((i, el) => {
				el.children[ticketsColumnIndex].textContent = tickets[i + 1] ? (tickets[i + 1].length || 0) : 0;
			});
		})(staffForTickets);
	}

	/**
	 * Handle showing details for a specific employee. Usually called
	 * when clicking on a row in the table, but can also be called
	 * for other table row change inputs, such as hash fragment or
	 * keyboard input.
	 *
	 * @param id The ID of the employee to show detail
	 */
	showTableRowDetails(id) {
		// Get employee with ID
		this.employee = this.staffManager.get(id);
		// Catch invalid IDs and show message
		if (!this.employee) {
			// Hide single view if no detail is able to be presented
			// for requested ID, ensuring the person using the system
			// is not confused by data shown for previously accessed user.
			this.hideTableRowDetails();
			DynamicPage.showNotification("No employee with ID " + id);
			return;
		}

		// Put employee name in title bar of single view
		this.updateSingleViewNavbar(this.employee.name);
		
		// Fill in content for each field available in staff member
		$(this.detailSelector).find("[data-slug]").each((i, el) => {
			// Each slug is a different field to be filled, so
			// get each value and set element content to value
			let value = Object.resolve(el.dataset.slug, this.employee);
			// Some values are optional, so don't show undefined if no data
			el.textContent = typeof value !== "undefined" ? value : "—";
		});

		// Some content requires special handling for input of information
		$(this.detailSelector).find("[data-customslug]").each((i, el) => {
			switch (el.dataset.customslug) {

				// Permission tokens need to be handled specially
				// since value is not normal text
				case "access":
					StaffPage.showPermissions(el, this.employee);
					break;

				case "avatar":
					el.src = "https://placehold.it/275x275";
					break;

				case "tickets.assigned":
					el.textContent = "…";
					(async(el) => {
						let tickets = this.ticketManager.getTicketsAssignedToStaffId(this.employee.id);

						el.textContent = tickets.length;

						$(el).parent().attr("href", "/tickets" + (tickets.length > 0 ? '#' + tickets[0].id : ''));
					})(el);
					break;

				// If in doubt, presume data is invalid and show same as no data
				default:
					el.textContent = "—";
			}
		});

		// DynamicPage needs to handle view code
		super.showTableRowDetails(id);

		// Problem types view handling to be obtained by specific problem type JS
		window.staffProblemTypePage.currentSpecialisms = this.employee._specialisms;
		window.staffProblemTypePage.loadSpecialistExpertiseTypes($('.type-columns'));
	}

	/**
	 * Handle displaying permissions from data object
	 * to individual tokens shown in input, one for each of
	 * the permission levels granted to the user.
	 *
	 * @param el The element to fill with the permission details
	 * @param employee The employee to get the granted permission information from
	 */
	static showPermissions(el, employee) {
		el.innerHTML = "";
		// Define the icons to be displayed for each of the permission levels
		let icons = {read: "eye", operator: "user-secret", analyst: "line-chart", admin: "shield"};

		// Each permission has its own token for representing itself
		for (let permission of ["read", "operator", "analyst", "admin"]) {

			// Determine whether employee has permission and only show if true
			if (employee.access[permission]) {

				// Permission icon
				let elIcon = document.createElement("i");
				elIcon.classList.add("fa", "fa-" + icons[permission]);

				// Permission name
				let elText = document.createElement("span");
				elText.textContent = permission.charAt(0).toUpperCase() + permission.slice(1);

				// Group icon and name into single token
				let elPermission = document.createElement("span");
				elPermission.appendChild(elIcon);
				elPermission.appendChild(elText);

				// Display permission token in element
				el.appendChild(elPermission);
			}
			
		}
	}

	/**
	 * Search staff members given a search string
	 * to filter the table by employees matching the string.
	 * This searches through many staff table fields:
	 * id, name, job, department and phone number.
	 *
	 * @param query The search string to filter the employees by
	 */
	async search(query) {
		// Only search if query is sufficient for search
		// This matters more with larger datasets where "a" can have
		// thousands of results. Always ensure ID searches are performed
		// since ID is indexed and can be searched very quickly.
		if (query.length >= 2 || (query.length > 0 && query == parseInt(query))) {

			// Define properties of employees to be searched for query match
			var properties = ["id", "name", "job", "department", "phone"];
			// Perform the search using super search and assign results
			super.search(query, this.staffManager.search(query, properties), obj => Object.assign({}, obj), properties);

		} else {
			// Default to showing all staff if query is missing or insufficient
			// This is distinct to the case where there are no results to
			// a successful query — this is handled in super's search method
			// and shows an appropriate message instead of all the staff.
			this.showStaff();
		}
	}
}
