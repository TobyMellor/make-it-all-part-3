import TicketManager from "./TicketManager";
import StaffManager from "../staff/StaffManager";

/**
 * Call
 *
 * Every time the Helpdesk is called, this is created.
 * A call may have multiple tickets, a ticket may have
 * multiple calls.
 */
export default class Call {
	constructor({
		id,
		time,
		caller_id: caller,
		operator_id: operator,
		tickets
	}) {
		this.id       = id;
		this.time     = time;
		this.caller   = caller;   // ID of caller, get method returns instance of Staff
		this.operator = operator; // ID of operator, get method returns instance of Staff
		this.tickets  = tickets;  // ID of tickets, get method returns instances of Ticket's
	}

	get caller() {
		return (new StaffManager()).get(this._caller);
	}

	set caller(caller) {
		this._caller = caller;
	}

	get operator() {
		return (new StaffManager()).get(this._operator);
	}

	set operator(operator) {
		this._operator = operator;
	}

	get tickets() {
		return (new TicketManager()).getTicketsFromCall(this.id);
	}

	set tickets(tickets) {
		this._tickets = tickets;
	}
}