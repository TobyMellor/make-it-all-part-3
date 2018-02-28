import Manager from "../Manager";
import Employee from "./Employee";
import API from "../API";

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
	}

	/**
	 * Get all staff in table
	 *
	 * @returns {Promise<Array>}
	 */
	get staff() {
		return (async() => {
			return (await API.call("/api/staff")).map(e => new Employee(e));
		})();
	}

	/**
	 * Get the employee with the given ID number
	 *
	 * @param id The ID number of the employee to return
	 * @returns {Employee}
	 */
	async get(id) {
		return new Employee(await API.call("/api/staff/" + id));
	}

	/**
	 * Get all employees with a specific value of a permission
	 *
	 * @param permission The permission to search for
	 * @param value The value of the permission (true/false) for whether the permission is granted
	 */
	async getEmployeesWithPermission(permission, value) {
		return (await this.staff).filter(employee => employee.access[permission] == value);
	}

	/**
	 * Create a new employee with the given data
	 * and add employee to the list of employees
	 *
	 * @param data The employee's data
	 * @returns {Promise}
	 */
	createEmployee(data = {}) {
		// Prepare data for API endpoint
		data = Employee.prepareData(data);

		// Ask user to provide initial password for user, for them to change themselves after login
		data.password = prompt("Enter a new password for the user.", "Testing123");

		// Perform API call to create new employee
		return API.call("/api/staff", "POST", data);
	}

	/**
	 * Change an existing employee's information
	 *
	 * @param data The employee's data
	 */
	updateEmployee(data = {}) {
		// Prepare data for API endpoint
		data = Employee.prepareData(data);

		// Perform API call to create new employee
		return API.call("/api/staff/" + data.id, "PATCH", data);
	}
	
	/**
	 * Get the currently logged in user
	 *
	 * @param asEmployee method returns ID by default or Employee if truthy
	 */
	async currentUser(asEmployee = false) {
		let id = (await window.auth.me())["id"];
		// Get Employee with ID
		if (asEmployee) {
			return await this.get(id);
		}
		return id;
	}

	/**
	 * Get all specialists who specialise in a certain problem type
	 *
	 * @param expertiseTypeId The ID of the expertise type to find employees for
	 */
	async getSpecialists(expertiseType) {
		let staff = await this.staff;
		let filter = id => employee => employee._specialisms.indexOf(id) > -1;
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
	async search(query, properties) {
		return super.search(await this.staff, query, properties);
	}

	/**
	 * Get all departments which employees can be a member of
	 * @returns All departments
	 */
	get departments() {
		return this._departments || (async() => {
			return this._departments = await API.call("/api/departments");
		})();
	}
}
