import Manager from "../Manager";
import Program from "./Program";

/**
 * SoftwareManager
 *
 * Responsible for storing and retrieving
 * software programs across the system.
 *
 * SoftwareManager should never know about the DOM
 */
export default class SoftwareManager extends Manager {
	constructor() {
		super();

		this.programs = api.programs.map(e => new Program(e));
	}

	/**
	 * Gets the programs with the given ID numbers
	 *
	 * @param ids The ID numbers of the programs to retrieve
	 * @returns {Array}
	 */
	getPrograms(ids) {
		return this.programs.filter(program => ids.indexOf(program.id) > -1);
	}

	/**
	 * Gets a specified program
	 *
	 * @param id The ID number of the specified program
	 * @returns {Program}
	 */
	get(id) {
		return this.programs.find(program => program.id === id) || null;
	}
}