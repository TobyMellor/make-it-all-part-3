import Manager from "../Manager";
import ExpertiseType from "./ExpertiseType";
import ExpertiseTypeStaff from "./ExpertiseTypeStaff";
import API from "../API";

/**
 * ExpertiseTypeManager
 *
 * Responsible for storing and retrieving
 * expertise types across the system.
 *
 * ExpertiseTypeManager should never know about the DOM
 */
export default class ExpertiseTypeManager extends Manager {
	constructor() {
		super();
	}

	/**
	 * Get all ExpertiseType's from the DB
	 *
	 * @return {Promise<Array>} Array of All ExpertiseTypes
	 */
	get expertiseTypes() {
		return (async() => {
			return (await API.call("/api/expertise-types")).map(e => new ExpertiseType(e));
		})();
	}

	/**
	 * Return all ExpertiseType's with no parent (in the first column)
	 *
	 * @return {Array}
	 */
	async getRootExpertiseTypes() {
		return (await this.expertiseTypes).filter(expertiseType => expertiseType._parent == null);
	}

	/**
	 * Get a specific ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseType.id
	 * @return {ExpertiseType}
	 */
	async getExpertiseType(expertiseTypeId) {
		return (await this.expertiseTypes).find(expertiseType => expertiseType.id === expertiseTypeId);
	}

	/**
	 * Get ExpertiseTypes with IDs from an Array of IDs
	 *
	 * @param {Array} expertiseTypeIds Array of Integers representing ExpertiseType.id's
	 * @return {Array} Array of ExpertiseTypes satisfying the condition
	 */
	async getExpertiseTypes(expertiseTypeIds) {
		return (await this.expertiseTypes).filter(expertiseType => expertiseTypeIds.indexOf(expertiseType.id) > -1);
	}

	/**
	 * Get all corresponding ExpertiseTypeStaff's linking to ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseType.id
	 * @return {Array} Array of corresponding ExpertiseTypeStaff's linking to ExpertiseType
	 */
	async getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId) {
		return (await this.expertiseTypeStaff).filter(expertiseTypeStaff => expertiseTypeStaff._expertise_type === expertiseTypeId);
	}

	/**
	 * Get ordered array of parents of an ExpertiseType
	 *
	 * @param {ExpertiseType} expertiseType starting ExpertiseType to find parents from
	 * @return {Array} Array of ExpertiseType parents, and the starting ExpertiseType
	 */
	async getExpertiseTypeChain(expertiseType) {
		var expertiseTypeParent = expertiseType,
			expertiseTypes      = [expertiseTypeParent];

		while (expertiseTypeParent != null) {
			expertiseTypeParent = await expertiseTypeParent.parent;

			if (expertiseTypeParent != null) {
				expertiseTypes.push(expertiseTypeParent);
			}
		}

		return expertiseTypes;
	}

	/**
	 * Create an expertise type
	 *
	 * @param {String} name The name of the ExpertiseType
	 * @param {Integer} parentExpertiseTypeId the ID of the parent the new ExpertiseType sits under
	 * @return {ExpertiseType} the created ExpertiseType
	 */
	createExpertiseType(name, parentExpertiseTypeId) {
		return API.call("/api/expertise-types", "POST", {
			name,
			parent_id: parentExpertiseTypeId
		});
	}

	/**
	 * Delete a expertise type
	 *
	 * @param {Integer} id representing ExpertiseType.id
	 * @return null
	 */
	deleteExpertiseType(id) {
		return API.call("/api/expertise-types/" + id, "DELETE");
	}

	/**
	 * Get all ExpertiseTypeStaff's from the DB
	 *
	 * @return {Promise<Array>} Array of All ExpertiseTypeStaff
	 */
	get expertiseTypeStaff() {
		return (async() => {
			let expertiseTypeStaff = await API.call("/api/expertise-type-staff");

			return expertiseTypeStaff ? expertiseTypeStaff.map(e => new ExpertiseTypeStaff(e)) : [];
		})();
	}

	/**
	 * Get a specific ExpertiseTypeStaff record, with an exact
	 * ExpertiseTypeStaff._staff and ExpertiseTypeStaff._expertise_type ID pair
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseTypeStaff._expertise_type
	 * @param {Integer} staffId representing ExpertiseTypeStaff._staff
	 * @return {ExpertiseTypeStaff} null, or the record desired
	 */
	async getExpertiseTypeStaffByStaffId(expertiseTypeId, staffId) {
		let expertiseTypeStaff = await this.expertiseTypeStaff;

		return expertiseTypeStaff.find(expertiseTypeStaff => expertiseTypeStaff._staff === staffId && expertiseTypeStaff._expertise_type) || null;
	}

	/**
	 * Get a specific ExpertiseTypeStaff by ID
	 *
	 * @param {Integer} expertiseTypeStaffId representing ExpertiseTypeStaff.id
	 * @return {ExpertiseTypeStaff}
	 */
	async getExpertiseTypeStaff(expertiseTypeStaffId) {
		return new ExpertiseTypeStaff(
			await API.call("/api/expertise-type-staff/" + expertiseTypeStaffId)
		);
	}

	async search(query, properties) {
		return super.search((await this.expertiseTypes), query, properties);
	}
}
