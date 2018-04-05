export default class StaffManager {
	constructor(employees) {
		this.employees = employees;

		// populate the select field in the call panel
		this.populateSelectField($('.call-panel select'), employees);
	}

	/**
	 * Get the employee with the relevant .id
	 *
	 * @param {Integer} employeeId ID of employee
	 * @return {Object} employee with .id, null if not found
	 */
	getEmployee(employeeId) {
		return this.employees.find(employee => employee.id === employeeId) || null;
	}

	/**
	 * Gets a font awesome representation of the permissions
	 * the given staff member has
	 *
	 * @param {Object} the employee
	 * @return {String} Series of font awesome icons
	 */
	getPermissions(employee) {
		let permissions = `
			<span>
				<i class="fa fa-eye"></i>
				<span>Read</span>
			</span>
		`;

		if (employee.operator) {
			permissions += `
				<span>
					<i class="fa fa-user-secret"></i>
					<span>Operator</span>
				</span>
			`;
		}

		if (employee.analyst) {
			permissions += `
				<span>
					<i class="fa fa-line-chart"></i>
					<span>Analyst</span>
				</span>
			`;
		}

		return permissions;
	}

	/**
	 * Adds staff and their ID's to a select field
	 *
	 * @param {DOM} $selectField the <select> field to populate
	 * @param {Array} employees Array of employees
	 */
	populateSelectField($selectField, employees) {
		employees.forEach(employee => {
			$selectField.append(`
				<option value="${employee.id}">#${employee.id} – ${employee.name}</option>
			`);
		});
	}
}