/*
New Staff modal JS for handling data manipulation in modal
 */

// Handle adding new employee from inside new staff modal
import StaffManager from "../StaffManager";

$("#new-staff-modal #create-new-staff").click(e => {
	e.preventDefault();

	// Get all form data from within modal as object
	let $form = $("#new-staff-modal form");
	let formData = $form.serializeObject(true);

	let employee = {}; // hoisted

	// Perform validation on entire object
	if (formData.isValid()) {
		// serializeObject adds empty inputs as empty string
		// instead of ignoring the field entirely, so we need
		// to remove these from the object
		for (let key in formData.staff) {
			if (formData.staff[key] === "") {
				delete formData.staff[key];
			}
		}
		// Access data is not a single input text field, so
		// this needs to be handled separately
		formData.staff.access = formData.staff.access || {};
		for (let key of ["read", "operator", "analyst", "admin"]) {
			formData.staff.access[key] = $form.find(`[name="staff.access.${key}"]`).prop("checked");
		}

		// This modal can also be used for making changes to existing employees
		// therefore we need to handle edits separately to creation
		switch (e.currentTarget.dataset.action) {
			case "create":
				formData.staff.specialisms = staffProblemTypePage.currentSpecialisms;

				employee = (window.staffPage || window.ticketPage).staffManager.createEmployee(formData.staff);

				// If we're creating an employee on the tickets page for a JIT situation
				// the information needs to be added to the picker which was in need of
				// the employee in the first place. See views/modals/new-staff.blade.php
				// for more details.
				$('.selectpicker.staff-picker[name="' + formData.event_target + '"]')
						.append(new Option(formData.staff.name, employee.id))
						.selectpicker('refresh').selectpicker('val', formData.staff.name);

				break;

			case "save":
				formData.staff.id = window.staffPage.employee.id;
				formData.staff.specialisms = staffProblemTypePage.currentSpecialisms;
				employee = window.staffPage.staffManager.updateEmployee(formData.staff);
		}

		// If this is being run from the staff page, we need to add the employee
		// or their updated details to the main list view table.
		if (window.staffPage) {
			$(window.staffPage.navSelector).find("[data-slug=\"all\"]").addClass("active").siblings().removeClass("active");
			window.staffPage.hideTableRowDetails(); // during refresh, also provides small animation during AJAX await
			employee.then(employee => {
				window.staffPage.showStaff();
				window.staffPage.showTableRowDetails(employee.id);
			});
		}

		// All done, hide the modal
		$('#new-staff-modal').modal('hide');
	}
});

$("[data-toggle=\"modal\"][data-target=\"#new-staff-modal\"]").click(function() {
	let $modal = $(this.dataset.target).modal("show");
	// Determine whether we're creating a new employee or editing an existing one
	let isEditing = this.dataset.action === "edit";
	// Set modal title for creation or edit
	$modal.find(".modal-title").text(isEditing ? "Edit Employee" : "Create a new Employee");
	// Set save button title for creation or edit
	$("#create-new-staff").text(isEditing ? "Save Changes" : "Create a new Employee")[0]
			.dataset.action = isEditing ? "save" : "create";

	if (isEditing) {
		// For editing, the existing employee details need to be filled in
		// Therefore, for each field in the modal, resolve its key from
		// the employee information and fill the value from the data
		$modal.find("input").each((i, el) => {
			// Employee object does not have `staff.` prefix for each property
			let key = el.name.replace("staff.", "");
			// Determine if the value must be handled differently
			// i.e. for checkboxes or file inputs
			if (el.type === "checkbox") {
				// Checkbox booleans use .checked instead of .value
				el.checked = Object.resolve(key, window.staffPage.employee);
			} else if (el.type !== "file") {
				// Standard implementation, set value to object with default to empty string
				el.value = Object.resolve(key, window.staffPage.employee) || "";
			}
		});
		// Problem type input area is handled with specific methods within class
		window.staffProblemTypePage && (staffProblemTypePage.currentSpecialisms = staffPage.employee._specialisms);
	} else {
		window.staffProblemTypePage && (staffProblemTypePage.currentSpecialisms = []);
	}
	// Load staff problem types inserted into currentSpecialisms previously
	window.staffProblemTypePage && window.staffProblemTypePage.loadSpecialistExpertiseTypes($modal.find('.type-columns'));

	// Focus name input
	$modal.find("input[name=\"staff.name\"]").focus();

	// Disable specialisms when employee is not operator
	$(".specialism-picker").toggleClass("disabled", !$("input[name=\"staff.access.operator\"]").prop("checked"));
});

// Load departments
$("#new-staff-modal").on("show.bs.modal", async function() {
	// Fill selectpicker with staff info
	let $select = $(this).find('select[name="staff.department"]').selectpicker();
	let page = window.staffPage || window.ticketPage;
	page.populateSelectField($select, 'Choose a department…', await page.staffManager.departments, window.staffPage.employee._department);
	$select.selectpicker("refresh");
});

// Permissions information
$(".staff-permissions .custom-checkbox:not(.help-text)").click(e => {
	e.preventDefault();

	let input = e.currentTarget.children[0];
	// User clicked on checkbox, so perform standard operation
	// of checkbox (reimplementing operation blocked by preventDefault)
	// which must be used instead of omitting preventDefault to avoid
	// double-action of click
	input.checked = !input.checked;

	// Access logic
	if (input.checked) { // Any other access requires read access
		$("input[name=\"staff.access.read\"]").prop("checked", true);

		if (input.name === "staff.access.admin") { // Admin requires all other access
			$("input[name*=\"staff.access\"]").prop("checked", true);
		}
	} else { // Cannot have admin access if another access is revoked
		$("input[name=\"staff.access.admin\"]").prop("checked", false);

		if (input.name === "staff.access.read") { // No read access cannot have any other access
			$("input[name*=\"staff.access\"]").prop("checked", false);
		}
	}

	// Disable specialisms when employee is not operator
	$(".specialism-picker").toggleClass("disabled", !$("input[name=\"staff.access.operator\"]").prop("checked"));
});
