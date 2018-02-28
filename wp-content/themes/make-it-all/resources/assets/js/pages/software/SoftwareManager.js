import Manager from "../Manager";
import Program from "./Program";
import API from "../API";

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
	}

	/**
	 * Get all programs in table
	 *
	 * @returns {<Array>}
	 */
	get programs() {
		return (async() => {
			return (await API.call("/api/programs")).map(d => new Program(d));
		})();
	}

	/**
	 * Create a new program with the given data
	 *
	 * @param data The program's data
	 * @returns {Program}
	 */
	createProgram(data = {}) {
		return API.call("/api/programs", "POST", data);
	}

	/**
	 * Change a device's information
	 *
	 * @param programID The ID of the program we're updating
	 * @param data The data to update
	 */
	async updateProgram(programID, data) {
		API.call("/api/programs/" + programID, "PUT", data);
	}

	/**
	 * Gets the programs with the given ID numbers
	 *
	 * @param ids The ID numbers of the programs to retrieve
	 * @returns {Array}
	 */
	async getPrograms(ids) {
		var programs = await this.programs;
		return programs.filter(program => ids.indexOf(program.id) > -1);
	}

	/**
	 * Gets a specified program
	 *
	 * @param id The ID number of the specified program
	 * @returns {Array}
	 */
	async get(id) {
		return new Program(await API.call("/api/programs/" + id));
	}
}