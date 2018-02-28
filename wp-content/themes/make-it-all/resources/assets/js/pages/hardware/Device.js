import TicketManager from "../tickets/TicketManager";
/**
 * Device
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
export default class Device {
	constructor({
		id,
		type,
		make,
		serial_no,
		tickets,
		created_at_human: created_at,
		updated_at_human: updated_at,
	})
	{
		this.id				= id;
		this.type			= type;
		this.make   		= make;
		this.serial_no     	= serial_no;
		this._tickets		= tickets;
		this.created_at		= created_at;
		this.updated_at		= updated_at;
	}

	/**
	 * @returns {Array} A list of all tickets this device is assigned to
	 */
	get tickets() {
		if (this._tickets) {
			return (new TicketManager()).getTicketsByTicketIDs(this._tickets);
		}
		return new Array();
	}

	/**
	 * @param {Array} tickets Sets the tickets this device is assigned to
	 */
	set tickets(tickets) {
		this._tickets = tickets;
	}
}