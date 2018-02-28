import Manager from "../Manager";
import Call from "./Call";
import Comment from "./Comment";
import Status from "./Status";
import Ticket from "./Ticket";
import TicketStatus from "./TicketStatus";
import API from "../API";
import ExpertiseTypeManager from "../problem-types/ExpertiseTypeManager";

/**
 * TicketManager
 *
 * Responsible for parsing the AJAX request containing statuses
 * and tickets and creating the corresponding classes. 
 * Contains all functions to return and search the data.
 *
 * TicketManager should never know about the DOM
 */
export default class TicketManager extends Manager {
	constructor() {
		super();
		this.expertiseTypeManager = window.expertiseTypeManager || new ExpertiseTypeManager();
	}

	/**
	 * Get all calls
	 *
	 * @returns {Promise<Array>} containing Array of Call instances
	 */
	get calls() {
		return (async() => {
			let calls = await API.call("/api/calls");

			return calls ? calls.map(e => new Call(e)) : [];
		})();
	}

	/**
	 * Get the call with the id
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Promise<Array>} single instance of Call with callId
	 */
	async getCall(callId) {
		return new Call(await API.call("/api/calls/" + callId));
	}

	/**
	 * Get the calls referencing a specific ticket
	 *
	 * @param {Integer} ticketId representing id column of ticket table
	 * @return {Promise<Array>} containing Array of Ticket instances
	 */
	async getCallsByTicketId(ticketId) {
		return this.calls.then(calls => calls.filter(call => call._tickets.indexOf(ticketId) > -1));
	}

	/**
	 * Get the notes for a call
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Promise<Array>} single instance of Comment with callId
	 */
	async getCallNotesByCallId(callId) {
		return await this.comments.then(comments => comments.find(comment => comment._call === callId)) || null;
	}

	/**
	 * Create a Call
	 *
	 * This method can create multiple Ticket's with the created Call ID
	 * It can also update existing Ticket's to possess the created Call ID
	 * The method will create a comment (notes) record possessing the created Call ID
	 *
	 * @param {String} time when call took place as SQL Timestamp (YYYY-MM-DD HH:MM:SS)
	 * @param {Integer} caller ID of Staff that placed the call (operator is Authed user)
	 * @param {String} callNotes notes about the current call
	 * @param {Object} tickets Object of Objects containing form ticket data
	 * @param {Array} existingTicketIds Array of Integers representing existing Ticket's with ID's
	 * @return {Promise<Array>} single instance of created Call
	 */
	async createCall(time, caller, callNotes, tickets, existingTicketIds = []) {
		let call = new Call(
			await API.call("/api/calls", "POST", {
				time: time,
				caller_id: caller
			})
		);

		// Create new tickets
		for (let i in tickets) { // i is not incrementing, but a random identifier
			await this.createTicket(
				call.id,
				tickets[i].status,
				tickets[i].title,
				tickets[i].description,
				tickets[i].solution,
				tickets[i].devices,
				tickets[i].programs,
				tickets[i].expertise_type_staff,
				tickets[i].assigned_to_operator,
				callNotes
			);
		}

		// Add call to existing tickets
		for (let i = 0; i < existingTicketIds.length; i++) {
			await this.addCallToTicket(existingTicketIds[i], call.id, callNotes);
		}

		return await this.getCall(call.id);
	}

	/**
	 * Get all statuses
	 *
	 * @returns {Promise<Array>} containing Array of Status instances
	 */
	get statuses() {
		return this._statuses || (async self => {
			return self._statuses = (await API.call("/api/statuses")).map(e => new Status(e));
		})(this);
	}

	/**
	 * Get the status with the ID
	 *
	 * @param {Integer} statusId representing id column of Status table
	 * @return {Promise<Array>} single instance of Status with ID
	 */
	async getStatus(statusId) {
		return (await this.statuses).find(status => status.id === statusId) || null;
	}

	/**
	 * Get the status with the slug
	 *
	 * @param {String} statusSlug representing slug column of Status table
	 * @return {Promise<Array>} single instance of Status with statusSlug
	 */
	async getStatusBySlug(statusSlug) {
		return (await this.statuses).find(status => status.slug === statusSlug) || null;
	}

	/**
	 * Get all tickets
	 *
	 * @returns {Promise<Array>} containing Array of Ticket instances
	 */
	get tickets() {
		return (async() => {
			let tickets = await API.call("/api/tickets");

			return tickets ? tickets.map(e => new Ticket(e)) : [];
		})();
	}

	/**
	 * Get the ticket with the id
	 *
	 * @param {Integer} ticketId representing id column of ticket table
	 * @return {Promise<Array>} single instance of Ticket with ticketId
	 */
	async getTicket(ticketId) {
		return new Ticket(await API.call("/api/tickets/" + ticketId));
	}

	/**
	 * Get ticket currently in a status
	 *
	 * @param {String} statusSlug representing slug column of status table
	 * @return {Promise<Array>} Array of Ticket instances in a Status
	 */
	async getTicketsWithIdIn(ticketIds) {
		return (await this.tickets).filter(ticket => ticketIds.indexOf(ticket.id) > -1);
	}

	/**
	 * Get ticket currently in a status
	 *
	 * @param {String} statusSlug representing slug column of status table
	 * @return {Promise<Array>} Array of Ticket instances in a Status
	 */
	async getTicketsWithSlug(statusSlug) {
		return (await this.tickets).filter(ticket => ticket.status.slug === statusSlug);
	}

	/**
	 * Get ticket currently in one of many given statuses
	 *
	 * @param {Array} statusSlugs Array of Strings's representing status slugs
	 * @return {Promise<Array>} Array of Ticket instances in one of many given Status's
	 */
	async getTicketsWithSlugIn(statusSlugs) {
		let tickets = await this.tickets;

		for (let i = tickets.length - 1; i >= 0; i--) {
			if (statusSlugs.indexOf(tickets[i].status.slug) === -1) tickets.splice(i, 1);
		}

		return tickets;
	}

	/**
	 * Get tickets referenced in a call with the id
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Promise<Array>} Array of Ticket instances referenced in a Call
	 */
	async getTicketsFromCall(callId) {
		return this.tickets.then(tickets => tickets.filter(ticket => ticket._calls.indexOf(callId) > -1));
	}

	async getTicketsAssignedToStaffId(staffId) {
		let expertiseTypeStaff = await this.expertiseTypeManager.expertiseTypeStaff;
		
		return this.tickets.then(tickets => tickets.filter(ticket => {
			return ticket._assigned_to_operator === staffId || expertiseTypeStaff.find(e => e.id === ticket._expertise_type_staff)._staff === staffId
		}));
	}

	async getTicketsAssignedToStaffIds(staffIds) {
		let result = {};

		for (let i = 0; i < staffIds.length; i++) {
			let staffId = staffIds[i];

			result[staffId] = await this.getTicketsAssignedToStaffId(staffId);
		}

		return result;
	}

	async getMyTickets() {
		return await this.getTicketsAssignedTo((await window.auth.me()).id);
	}

	/**
	 * Create a Ticket belonging to a Call
	 *
	 * @param {Integer} callId the ID of the Call this ticket belongs to
	 * @param {String} statusSlug slug of the Ticket's current Status
	 * @param {String} title
	 * @param {String} description
	 * @param {String} solution (nullable) id of comment to make the solution
	 * @param {Array} devices Array of Integers representing ID's of Devices
	 * @param {Array} programs Array of Integers representing ID's of Programs (inc. operating systems)
	 * @param {Integer} expertiseTypeStaff ID of ExpertiseTypeStaff
	 * @param {Integer} assignedToOperator ID of Staff
	 * @param {String} callNotes (optional) Notes about a call, to be stored as a comment
	 * @return {Promise<Array>} single instance of created Ticket
	 */
	async createTicket(callId, statusSlug, title, description, solution, devices, programs, expertiseTypeStaff, assignedToOperator, callNotes = null) {
		let ticket = new Ticket(
			await API.call("/api/tickets", "POST", {
				call_id: callId,
				status_id: (await this.getStatusBySlug(statusSlug)).id || 1,
				title: title,
				description: description,
				solution: "Coming Soon",
				device_ids: devices,
				program_ids: programs,
				expertise_type_staff_id: expertiseTypeStaff,
				assigned_to_operator_id: assignedToOperator 
			})
		);

		if (callNotes) {
			this.createComment(ticket.id, callId, callNotes);
		}

		return ticket;
	}

	/**
	 * Update a Ticket
	 *
	 * @param {Integer} ticketId the ID of the Ticket we're updating
	 * @param {String} statusSlug slug of the Ticket's current Status
	 * @param {String} title
	 * @param {String} description
	 * @param {String} solution (nullable)
	 * @param {Array} devices Array of Integers representing ID's of Devices
	 * @param {Array} programs Array of Integers representing ID's of Programs
	 * @param {Integer} expertiseTypeStaff ID of ExpertiseTypeStaff
	 * @param {Integer} assignedToOperator ID of Staff
	 * @param {Array} (optional) Array of integers of call ids
	 * @return {Promise<Array>} single instance of updated Ticket
	 */
	async updateTicket(ticketId, statusSlug, title, description, solution, devices, programs, expertiseTypeStaff, assignedToOperator, callIds = null) {
		return new Ticket(
			await API.call("/api/tickets/" + ticketId, "PUT", {
				status_id: (await this.getStatusBySlug(statusSlug)).id,
				title: title,
				description: description,
				solution_id: solution,
				device_ids: devices,
				program_ids: programs,
				expertise_type_staff_id: expertiseTypeStaff,
				assigned_to_operator_id: assignedToOperator,
				call_ids: callIds
			})
		);
	}

	/**
	 * Add a Call to a Ticket
	 *
	 * @param {Integer} ticketId ID of Ticket
	 * @param {Integer} callId ID of Call
	 * @param {String} callNotes (optional) Notes about a call, to be stored as a comment
	 * @return {Promise<Array>} single instance of updated Ticket
	 */
	async addCallToTicket(ticketId, callId, callNotes = null) {
		let ticket = await this.getTicket(ticketId);

		if (callNotes) {
			this.createComment(ticketId, callId, callNotes);
		}

		return await this.updateTicket(
			ticket.id,
			ticket.status.slug,
			ticket.title,
			ticket.description,
			ticket._solution,
			ticket._devices,
			ticket._programs,
			ticket._expertise_type_staff,
			ticket._assigned_to_operator,
			[...(await this.getCallsByTicketId(ticketId)).map(call => call.id), callId] // Only attribute changing - existing call ids + new call id
		);
	}

	async updateTicketSolution(ticket, commentId) {
		return await this.updateTicket(
			ticket.id,
			ticket.status.slug,
			ticket.title,
			ticket.description,
			commentId, // Only attribute changing, Ticket._solution. Could be null if unsetting solution
			ticket._devices,
			ticket._programs,
			ticket._expertise_type_staff,
			ticket._assigned_to_operator,
			(await this.getCallsByTicketId(ticket.id)).map(call => call.id)
		);
	}

	/**
	 * Get the operator or specialist the ticket is assigned to.
	 *
	 * If an operator is not assigned, then the ExpertiseTypeStaff will
	 * be used.
	 *
	 * @param {Ticket} ticket
	 * @return {Employee} Employee the ticket is assigned to
	 */
	async getTicketAssignedTo(ticket) {
		if (ticket._assigned_to_operator !== null) return (await ticket.assigned_to_operator);

		return (await ticket.expertise_type_staff).staff; // only use expertise_type_staff if there is no assigned operator
	}

	/**
	 * If ticket is assigned to the currently logged in
	 * user.
	 *
	 * @param {Ticket} ticket
	 * @return {Boolean} If assigned to self
	 */
	async isTicketAssignedToSelf(ticket) {
		return (await this.getTicketAssignedTo(ticket)) === (await ticketPage.staffManager.currentUser()); 
	}

	/**
	 * Get all ticket statuses
	 * (A history of statuses a ticket has been in)
	 *
	 * @returns {Promise<Array>} containing Array of TicketStatus instances
	 */
	get ticket_statuses() {
		return (async() => {
			let ticketStatuses = await API.call("/api/ticket-statuses");

			return ticketStatuses ? ticketStatuses.map(e => new TicketStatus(e)) : [];
		})();
	}

	/**
	 * Get the ticket status with the id
	 *
	 * @param {Integer} ticketStatusId representing id column of ticket_status table
	 * @return {Promise<Array>} single instance of TicketStatus with ticketStatusId
	 */
	async getTicketStatus(ticketStatusId) {
		return new TicketStatus(await API.call("/api/ticket-statuses/" + ticketStatusId));
	}

	/**
	 * Get the ticket statuses for a ticket
	 *
	 * @p
	 */
	async getTicketStatusesByTicketId(ticketId) {
		return (await this.ticket_statuses).filter(ticketStatus => ticketStatus._ticket === ticketId);
	}

	/**
	 * Get all comments
	 *
	 * @returns {Promise<Array>} containing Array of Comment instances
	 */
	get comments() {
		return (async() => {
			let comments = await API.call("/api/comments");

			return comments ? comments.map(e => new Comment(e)) : [];
		})();
	}

	/**
	 * Get the comment with the id
	 *
	 * @param {Integer} commentId representing id column of comment table
	 * @return {Promise<Array>} single instance of Comment with commentId
	 */
	async getComment(commentId) {
		return new Comment(await API.call("/api/comment/" + commentId));
	}

	/**
	 * Get all comments
	 *
	 * @returns {Promise<Array>} containing Array of Comment instances
	 */
	async getCommentsByTicketId(ticketId) {
		return this.comments.then(comments => comments.filter(comment => comment._ticket === ticketId));
	}

	/**
	 * Create a comment on a ticket
	 *
	 * @param {Integer} ticketId representing id column of ticket table (where comment is placed)
	 * @param {Integer} callId representing id column of call table (nullable) (notes about a call)
	 * @param {String} content the comment's content
	 * @return {Promise<Array>} single instance of created Comment
	 */
	async createComment(ticketId, callId, content) {
		return new Comment(
			await API.call("/api/comments", "POST", {
				ticket_id: ticketId,
				call_id: callId,
				content: content
			})
		);
	}

	/**
	 * Delete a comment (user must own comment to delete)
	 *
	 * @param {Integer} commentId representing id column of comment table (comment to delete)
	 */
	async deleteComment(commentId) {
		await API.call("/api/comments/" + commentId, "DELETE");
	}

	/**
	 * Get all tickets associated with an expertise type staff
	 *
	 * @param expertiseTypeStaffId The ID of the expertise type staff to find tickets for
	 * @returns {Array} All matching tickets
	 */
	async getTicketsByExpertiseTypeId(expertiseTypeId) {
		let expertiseTypes = await this.expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId),
			rawTickets     = [].concat(...(await expertiseTypes).map(e => e.tickets)); // move all of expertiseTypes[i].tickets into a single array

		return rawTickets ? rawTickets.map(e => new Ticket(e)) : [];
	}

	/**
	 * Search tickets on a property for a provided search query
	 *
	 * @param {String} query Case insensitive string to search elements
	 * @param {Array} properties Array of strings representing elements property names to search through
	 * @return {Array} Array of Ticket instances satisfying the search condition
	 */
	async search(query, properties) {
		let tickets = await this.tickets;

		return await super.search(tickets, query, properties);
	}

	/**
	 * Gets a collection of tickets by their IDs
	 *
	 * @param {Array} ids The IDs of the requested tickets 
	 * @return {Promise<Array>} Array of Ticket instances
	 */
	async getTicketsByTicketIDs(ids) {
		return this.tickets.then(tickets => tickets.filter(ticket => ids.indexOf(ticket.id) > -1));
	}
}
