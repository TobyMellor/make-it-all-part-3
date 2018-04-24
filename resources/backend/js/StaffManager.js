export default class StaffManager {
	constructor(employees, currentEmployeeId, expertiseTypes, expertiseTypeStaff) {
		this.employees             = employees;
		this.currentEmployee       = this.getEmployee(currentEmployeeId);
		this.currentEmployeeId     = currentEmployeeId;
		this.expertiseTypes        = expertiseTypes;
		this.expertiseTypeStaff    = expertiseTypeStaff;

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
	 * Get an Expertise Type Staff
	 *
	 * @param {Integer} userId ID of staff
	 * @param {Integer} expertiseTypeId ID of ExpertiseType
	 * @return {Object} ExpertiseTypeStaff
	 */
	getExpertiseTypeStaff(userId, expertiseTypeId) {
		return this.expertiseTypeStaff.find(ets => ets.user_id == userId && ets.expertise_type_id == expertiseTypeId) || null;
	}

	/**
	 * Get a ExpertiseType with a given .id
	 *
	 * @param {Integer} expertiseTypeId ID of ExpertiseType
	 * @return {Object} ExpertiseType with given ID, or null if not found
	 */
	getExpertiseType(expertiseTypeId) {
		return this.expertiseTypes.find(expertiseType => expertiseType.id == expertiseTypeId) || null;
	}

	/**
	 * Get specialists of certain ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId ID of expertise type
	 * @return {Array} employees with specialism in an Expertise Type
	 */
	getSpecialistsOfSpecialism(expertiseTypeId) {
		return this.employees.filter(employee => {
			return this.expertiseTypeStaff.filter(ets => ets.expertise_type_id == expertiseTypeId)
				.map(ets => ets.user_id)
				.indexOf(String(employee.id)) > -1
		});
	}

	/**
	 * Get specialisms of the logged in user
	 *
	 * @return {Array} ExpertiseTypeStaff in an Expertise Type
	 */
	getCurrentUserSpecialisms() {
		return this.expertiseTypeStaff.filter(ets => ets.user_id == this.currentEmployeeId);
	}

	/**
	 * Adds a new specialism to logged in users Expertise Type Staff records
	 *
	 * @param {Integer} expertiseTypeId ID of Expertise Type
	 */
	addCurrentUserSpecialism(expertiseTypeId) {
		if (!this.getExpertiseTypeStaff(this.currentEmployeeId, expertiseTypeId)) {
			this.expertiseTypeStaff.push({
				user_id: this.currentEmployeeId,
				expertise_type_id: expertiseTypeId
			});
		}
	}

	/**
	 * Removes specialism from the logged in users Expertise Type Staff records
	 *
	 * @param {Integer} expertiseTypeId ID of Expertise Type
	 */
	removeCurrentUserSpecialism(expertiseTypeId) {
		let currentUserSpecialismIndex = this.expertiseTypeStaff.findIndex(ets => ets.user_id == this.currentEmployeeId && ets.expertise_type_id == expertiseTypeId);

		if (currentUserSpecialismIndex !== -1) {
			this.expertiseTypeStaff.splice(currentUserSpecialismIndex, 1);
		}
	}

	/**
	 * Returns the most available specialist for a given
	 * expertise type based on how many unresolved tickets they
	 * have open
	 *
	 * @param {Object} expertiseTypeId ID of expertise type
	 * @return {Object} most available employee with specialism in
	 *                  expertise type
	 */
	getBestSpecialistForSpecialism(expertiseTypeId) {
		let specialists = this.getSpecialistsOfSpecialism(expertiseTypeId);

		// no specialists found for this problem type
		if (specialists.length === 0) {

			// if no parent exists for this PT, give up
			if (expertiseTypeId == null) return null;

			// try the parent
			return this.getBestSpecialistForSpecialism(this.getExpertiseType(expertiseTypeId).parent_id)
		}

		let bestSpecialist = null;

		specialists.forEach((specialist, i) => {
			if (bestSpecialist === null || bestSpecialist.open_tickets.length < specialist.open_tickets.length) {
				bestSpecialist = specialist;
			}
		});

		return bestSpecialist.id;
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