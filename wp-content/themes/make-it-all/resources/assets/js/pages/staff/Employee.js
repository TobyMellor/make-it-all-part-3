import ExpertiseTypeManager from "../problem-types/ExpertiseTypeManager";

/**
 * Employee
 *
 * An employee of the company
 */
export default class Employee {
	constructor({
		id,
		name,
		email,
		job_title: job,
		department,
		phone_number: phone,
		expertise_types: specialisms = [],
		operator = false,
		specialist = specialisms.length > 0,
		analyst = false,
		admin = false
	}) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.job = job;
		this.department = department.name;
		this._department = department.id;
		this.phone = phone;
		this.specialisms = specialisms;
		this.access = {operator, analyst, admin};
		
		// If user is any other permission then read is granted
		this.access.read = this.access.operator || this.access.analyst || this.access.admin || this.access.readonly || false;
	}

	/**
	 * @returns {boolean} whether the user has read access to the system
	 */
	get isRead() {
		return this.access.read;
	}

	/**
	 * @returns {boolean} whether the user is a help desk operator
	 */
	get isOperator() {
		return this.access.operator;
	}

	/**
	 * @returns {boolean} whether the user has access to analytical data about the help desk system
	 */
	get isAnalyst() {
		return this.access.analyst;
	}

	/**
	 * @returns {boolean} whether the user is an administrator on the help desk
	 */
	get isAdmin() {
		return this.access.admin;
	}

	/**
	 * @returns A list of problem types the user is a specialist of
	 */
	get specialisms() {
		return (new ExpertiseTypeManager).getExpertiseTypes(this._specialisms);
	}

	/**
	 * @param specialisms Set the list of specialisms for this person on the system
	 */
	set specialisms(specialisms) {
		this._specialisms = specialisms;
	}

	/**
	 * Prepare data for sending to API endpoint. The API has different
	 * data keys representing the data accessible in the tables, so new
	 * data and updates to data must use these key names.
	 * @param data to be converted
	 * @returns data with updated key names
	 */
	static prepareData(data = {}) {
		data.job_title = data.job;
		data.phone_number = data.phone;
		data.expertise_types = data.specialisms;
		data.department_id = data.department;
		for (let key of ["read", "operator", "analyst", "admin"]) {
			data[key] = data.access[key] ? (1 && (data.specialist = 1)) : 0;
		}
		data.specialist = data.specialist || 0;
		return data;
	}
}
