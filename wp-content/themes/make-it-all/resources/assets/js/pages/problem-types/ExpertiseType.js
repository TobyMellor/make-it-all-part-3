import ExpertiseTypeManager from "./ExpertiseTypeManager";

/**
 * ExpertiseType
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
export default class ExpertiseType {
	constructor({
		id,
		name,
		parent_id: parent,
		children
	}) {
		this.id       = id;
		this.name     = name;
		this.parent   = parent;
		this.children = children; // ID of ExpertiseType's, get method returns instances of ExpertiseType's
	}

	get parent() {
		return (new ExpertiseTypeManager).getExpertiseType(this._parent);
	}

	set parent(parent) {
		this._parent = parent;
	}

	get children() {
		return (new ExpertiseTypeManager).getExpertiseTypes(this._children);
	}

	set children(children) {
		this._children = children;
	}
}