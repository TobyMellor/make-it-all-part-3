import TicketManager from "./TicketManager";
import StaffManager from "../staff/StaffManager";

/**
 * Comment
 *
 * A comment is made about a specific ticket, by
 * a staff member.
 * 
 * Contains the Ticket that it belongs to
 */
export default class Comment {
	constructor({
		id: id,
		author_id: author,
		call_id: call,
		ticket_id: ticket,
		content,
		created_at_human: createdAt,
		created_at: createdAtReal
	}) {
		this.id              = id;
		this.author          = author;
		this.call            = call;
		this.ticket          = ticket;
		this.content         = content;
		this.created_at      = createdAt;
		this.created_at_real = createdAtReal;
	}

	get author() {
		return (new StaffManager()).get(this._author);
	}

	set author(author) {
		this._author = author;
	}

	get call() {
		return (new TicketManager()).getCall(this._call);
	}

	set call(call) {
		this._call = call;
	}

	get ticket() {
		return (new TicketManager()).getTicket(this._ticket);
	}

	set ticket(ticket) {
		this._ticket = ticket;
	}
}