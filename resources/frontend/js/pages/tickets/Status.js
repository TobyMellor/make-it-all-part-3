import TicketManager from "./TicketManager";

/**
 * Status
 *
 * Holds information about a Status.
 * Contains Tickets that fit into the status
 */
export default class Status {
	constructor({
		id,
		slug,
		name,
		tickets
	}) {
		this.id      = id;
		this.slug    = slug;    // slug_example
		this.name    = name;    // Name Example!
		this.tickets = tickets; // ID of tickets, get method returns Ticket instances
	}

	get tickets() {
		return (new TicketManager()).getTicketsWithSlug(this.slug);
	}

	set tickets(tickets) {
		this._tickets = tickets;
	}
}