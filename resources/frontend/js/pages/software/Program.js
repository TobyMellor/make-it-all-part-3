import TicketManager from "../tickets/TicketManager";
/**
 * Program
 *
 * Holds information about a piece of Software.
 */
export default class Program {
	constructor({
		id,
		name,
		tickets,
		operating_system,
		expiry_date,
		created_at_human: created_at,
		updated_at_human: updated_at,
	}) 
	{
		this.id         		= id;
		this.name       		= name;
		this._tickets			= tickets;
		this.operating_system	= operating_system;
		this.expiry_date		= expiry_date;
		this.created_at 		= created_at;
		this.updated_at 		= updated_at;
	}

	/**
	 * @returns {Array} A list of all tickets this program is assigned to
	 */
	get tickets() {
		if (this._tickets) {
			return (new TicketManager()).getTicketsByTicketIDs(this._tickets);
		}
		return new Array();
	}

	/**
	 * @param {Array} tickets Sets the tickets this program is assigned to
	 */
	set tickets(tickets) {
		this._tickets = tickets;
	}

	getSoftwareType() { 
		//Gets a human-readable string to describe whether the program is an operting system or not
		if (this.operating_system) {
			return "Operating System";
		} else if (!this.operating_system) {
			return "Application";
		} else {
			return "-";
		}
	}
}