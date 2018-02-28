import TicketManager from "./TicketManager";
import StaffManager from "../staff/StaffManager";

/**
 * TicketStatus
 *
 * Intermediary relationship between Status
 * and Ticket. This stores a history of a
 * Ticket's statuses; the last entry is
 * the Ticket's current status.
 */
export default class TicketStatus {
	constructor({
		id,
		ticket_id: ticket,
		status_id: status,
		staff_id: staff,
		created_at_human: createdAt,
		created_at: createdAtReal
	}) {
		this.id              = id;
		this.ticket          = ticket; // ID of ticket, get method returns instance of Ticket
		this.status          = status; // ID of status, get method returns instance of Status
		this.staff           = staff;  // ID of staff, get method returns instance of Staff
		this.created_at      = createdAt;
		this.created_at_real = createdAtReal;
	}

	get ticket() {
		return (new TicketManager()).getTicket(this._ticket);
	}

	set ticket(ticket) {
		this._ticket = ticket;
	}

	get status() {
		return (new TicketManager()).getStatus(this._status);
	}

	set status(status) {
		this._status = status;
	}

	get staff() {
		return (new StaffManager()).get(this._staff);
	}

	set staff(staff) {
		this._staff = staff;
	}
}