import Manager from "../Manager";
import Employee from "./Employee";

/**
 * StaffManager
 *
 * Responsible for parsing the AJAX request containing staff
 * creating the corresponding classes. 
 * Contains all functions to return and search the data.
 *
 * StaffManager should never know about the DOM
 */
export default class StaffManager extends Manager {
	constructor() {
		super();

		this.staff       = api.staff.map(e => new Employee(e));
		this.departments = api.departments;
	}

	/**
	 * Get the employee with the given ID number
	 *
	 * @param id The ID number of the employee to return
	 * @returns {Employee}
	 */
	get(id) {
		return this.staff.find(employee => employee.id === id) || null;
	}

	/**
	 * Get all employees with a specific value of a permission
	 *
	 * @param permission The permission to search for
	 * @param value The value of the permission (true/false) for whether the permission is granted
	 */
	getEmployeesWithPermission(permission, value) {
		return this.staff.filter(employee => employee.access[permission] == value);
	}
	
	/**
	 * Get the currently logged in user
	 *
	 * @param asEmployee method returns ID by default or Employee if truthy
	 */
	currentUser(asEmployee = false) {
		let id = 1; // TODO: get user from WP

		// Get Employee with ID
		if (asEmployee) {
			return this.get(id);
		}

		return id;
	}

	/**
	 * Get all specialists who specialise in a certain problem type
	 *
	 * @param expertiseTypeId The ID of the expertise type to find employees for
	 */
	getSpecialists(expertiseType) {
		let staff  = this.staff,
		    filter = id => employee => employee._specialisms.indexOf(id) > -1;

		if (typeof expertiseType === "object") {
			let output = [];

			for (let id of expertiseType) {
				output.push(staff.filter(filter(id)));
			}

			return output;
		} else {
			return staff.filter(filter(expertiseType));
		}
	}

	/**
	 * Determine whether the passed employee has the passed problem type
	 *
	 * @param employee The employee to inspect
	 * @param expertiseTypeId The ID of the expertise type to look for
	 * @returns {boolean} Whether the employee has the problem type as a specialism
	 */
	hasSpecialism(employee, expertiseTypeId) {
		return employee._specialisms.indexOf(expertiseTypeId) > -1;
	}

	/**
	 * Search all employees for the given query
	 *
	 * @param query The query string to search for
	 * @param properties The properties to search through
	 * @returns All matching results to the query
	 */
	search(query, properties) {
		return super.search(this.staff, query, properties);
	}
}
