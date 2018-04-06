export default class StaffManager {
	constructor(employees, currentEmployeeId) {
		this.employees       = employees;
		this.currentEmployee = this.getEmployee(currentEmployeeId);

		// populate the select field in the call panel
		this.populateSelectField($('.call-panel select'), employees);

		// populate assign-options select with employees with operator permission
		this.populateSelectField($('.assign-options select'), this.getEmployeesWithPermission('operator'))
	}

	/**
	 * Get the employee with the relevant .id
	 *
	 * @param {Integer} employeeId ID of employee
	 * @return {Object} employee with .id, null if not found
	 */
	getEmployee(employeeId) {
		return this.employees.find(employee => employee.id == employeeId) || null;
	}

	/**
	 * Get the employees with the given permission
	 *
	 * @param {String} permission name of the permission
	 * @return {Array} employees with permission
	 */
	getEmployeesWithPermission(permission) {
		return this.employees.filter(employee => employee[permission]);
	}

	/**
	 * Get specialists of certain ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId ID of expertise type
	 * @return {Array} employees with specialism in an Expertise Type
	 */
	getSpecialistsOfSpecialism(expertiseTypeId) {
		return this.employees.filter(employee => employee.staff_expertise_type_ids.indexOf(String(expertiseTypeId)) > -1);
	}

	/**
	 * Returns the most available specialist for a given
	 * expertise type based on how many unresolved tickets they
	 * have open
	 *
	 * @param {Integer} expertiseTypeId ID of expertise type
	 * @return {Object} most available employee with specialism in
	 *                  expertise type
	 */
	getBestSpecialistForSpecialism(expertiseTypeId) {
		let specialists = this.getSpecialistsOfSpecialism(expertiseTypeId);

		if (specialists.length === 0) return null;

		let bestSpecialist = null;

		specialists.forEach((specialist, i) => {
			if (bestSpecialist === null || bestSpecialist.open_tickets.length < specialist.open_tickets.length) {
				bestSpecialist = specialist;
			}
		});

		return bestSpecialist;
	}

	/**
	 * Gets a font awesome representation of the permissions
	 * the given staff member has
	 *
	 * @param {Object} the employee
	 * @return {String} Series of font awesome icons
	 */
	getPermissions(employee) {
		let permissions = '';

		if (employee.read) {
			permissions += `
				<span>
					<i class="fa fa-eye"></i>
					<span>Read</span>
				</span>
			`;
		}

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