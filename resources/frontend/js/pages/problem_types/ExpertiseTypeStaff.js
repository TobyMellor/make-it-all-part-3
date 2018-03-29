import StaffManager from "../staff/StaffManager";
import ExpertiseTypeManager from "./ExpertiseTypeManager";

/**
 * ExpertiseType
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
export default class ExpertiseTypeStaff {
	constructor({
		id,
		staff_id: staffId,
		expertise_type_id: expertiseTypeId,
		tickets
	}) {
		this.id             = id;
		this.staff          = staffId;
		this.expertise_type = expertiseTypeId;
		this.tickets        = tickets;
	}

	get staff() {
		return (new StaffManager).get(this._staff);
	}

	set staff(staff) {
		this._staff = staff;
	}

	get expertise_type() {
		return (new ExpertiseTypeManager).getExpertiseType(this._expertise_type);
	}

	set expertise_type(expertiseType) {
		this._expertise_type = expertiseType;
	}
}