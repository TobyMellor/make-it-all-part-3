import Manager from "../Manager";
import ExpertiseType from "./ExpertiseType";
import ExpertiseTypeStaff from "./ExpertiseTypeStaff";

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

		this.expertiseTypes     = api.expertiseTypes.map(e => new ExpertiseType(e));
		this.expertiseTypeStaff = api.expertiseTypeStaff.map(e => new ExpertiseTypeStaff(e));
	}

	/**
	 * Return all ExpertiseType's with no parent (in the first column)
	 *
	 * @return {Array}
	 */
	getRootExpertiseTypes() {
		return this.expertiseTypes.filter(expertiseType => expertiseType._parent == null);
	}

	/**
	 * Get a specific ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseType.id
	 * @return {ExpertiseType}
	 */
	getExpertiseType(expertiseTypeId) {
		return this.expertiseTypes.find(expertiseType => expertiseType.id === expertiseTypeId);
	}

	/**
	 * Get ExpertiseTypes with IDs from an Array of IDs
	 *
	 * @param {Array} expertiseTypeIds Array of Integers representing ExpertiseType.id's
	 * @return {Array} Array of ExpertiseTypes satisfying the condition
	 */
	getExpertiseTypes(expertiseTypeIds) {
		return this.expertiseTypes.filter(expertiseType => expertiseTypeIds.indexOf(expertiseType.id) > -1);
	}

	/**
	 * Get all corresponding ExpertiseTypeStaff's linking to ExpertiseType
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseType.id
	 * @return {Array} Array of corresponding ExpertiseTypeStaff's linking to ExpertiseType
	 */
	getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId) {
		return this.expertiseTypeStaff.filter(expertiseTypeStaff => expertiseTypeStaff._expertise_type === expertiseTypeId);
	}

	/**
	 * Get ordered array of parents of an ExpertiseType
	 *
	 * @param {ExpertiseType} expertiseType starting ExpertiseType to find parents from
	 * @return {Array} Array of ExpertiseType parents, and the starting ExpertiseType
	 */
	getExpertiseTypeChain(expertiseType) {
		var expertiseTypeParent = expertiseType,
			expertiseTypes      = [expertiseTypeParent];

		while (expertiseTypeParent != null) {
			expertiseTypeParent = expertiseTypeParent.parent;

			if (expertiseTypeParent != null) {
				expertiseTypes.push(expertiseTypeParent);
			}
		}

		return expertiseTypes;
	}

	/**
	 * Get a specific ExpertiseTypeStaff record, with an exact
	 * ExpertiseTypeStaff._staff and ExpertiseTypeStaff._expertise_type ID pair
	 *
	 * @param {Integer} expertiseTypeId representing ExpertiseTypeStaff._expertise_type
	 * @param {Integer} staffId representing ExpertiseTypeStaff._staff
	 * @return {ExpertiseTypeStaff} null, or the record desired
	 */
	getExpertiseTypeStaffByStaffId(expertiseTypeId, staffId) {
		return this.expertiseTypeStaff.find(expertiseTypeStaff => expertiseTypeStaff._staff === staffId && expertiseTypeStaff._expertise_type) || null;
	}

	/**
	 * Get a specific ExpertiseTypeStaff by ID
	 *
	 * @param {Integer} expertiseTypeStaffId representing ExpertiseTypeStaff.id
	 * @return {ExpertiseTypeStaff}
	 */
	getExpertiseTypeStaff(expertiseTypeStaffId) {
		return this.expertiseTypeStaff.find(expertiseTypeStaff => expertiseTypeStaff.id === expertiseTypeStaffId) || null;
	}

	search(query, properties) {
		return super.search(this.expertiseTypes, query, properties);
	}
}
