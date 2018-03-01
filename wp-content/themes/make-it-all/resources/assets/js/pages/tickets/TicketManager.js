import Manager from "../Manager";
import Call from "./Call";
import Comment from "./Comment";
import Status from "./Status";
import Ticket from "./Ticket";
import TicketStatus from "./TicketStatus";
import ExpertiseTypeManager from "../problem_types/ExpertiseTypeManager";

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

		this.calls    = api.calls.map(e => new Call(e));
		this.tickets  = api.tickets.map(e => new Ticket(e));
		this.comments = api.comments.map(e => new Comment(e));
		this.statuses = api.statuses.map(e => new Status(e));
		this.ticketStatuses = api.ticketStatuses.map(e => new TicketStatus(e));
	}

	/**
	 * Get the call with the id
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Call} single instance of Call with callId
	 */
	getCall(callId) {
		return this.calls.find(call => call.id === callId) || null;
	}

	/**
	 * Get the calls referencing a specific ticket
	 *
	 * @param {Integer} ticketId representing id column of ticket table
	 * @return {Array} containing Array of Ticket instances
	 */
	getCallsByTicketId(ticketId) {
		return this.calls.filter(call => call._tickets.indexOf(ticketId) > -1);
	}

	/**
	 * Get the notes for a call
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Comment} single instance of Comment with callId
	 */
	getCallNotesByCallId(callId) {
		return this.comments.find(comment => comment._call === callId) || null;
	}

	/**
	 * Get the status with the ID
	 *
	 * @param {Integer} statusId representing id column of Status table
	 * @return {Status} single instance of Status with ID
	 */
	getStatus(statusId) {
		return this.statuses.find(status => status.id === statusId) || null;
	}

	/**
	 * Get the status with the slug
	 *
	 * @param {String} statusSlug representing slug column of Status table
	 * @return {Status} single instance of Status with statusSlug
	 */
	getStatusBySlug(statusSlug) {
		return this.statuses.find(status => status.slug === statusSlug) || null;
	}

	/**
	 * Get the ticket with the id
	 *
	 * @param {Integer} ticketId representing id column of ticket table
	 * @return {Ticket} single instance of Ticket with ticketId
	 */
	getTicket(ticketId) {
		return this.tickets.find(ticket => ticket.id === ticketId) || null;
	}

	/**
	 * Get ticket currently in a status
	 *
	 * @param {String} statusSlug representing slug column of status table
	 * @return {Array} Array of Ticket instances in a Status
	 */
	getTicketsWithIdIn(ticketIds) {
		return this.tickets.filter(ticket => ticketIds.indexOf(ticket.id) > -1);
	}

	/**
	 * Get ticket currently in a status
	 *
	 * @param {String} statusSlug representing slug column of status table
	 * @return {Array} Array of Ticket instances in a Status
	 */
	getTicketsWithSlug(statusSlug) {
		return this.tickets.filter(ticket => ticket.status.slug === statusSlug);
	}

	/**
	 * Get ticket currently in one of many given statuses
	 *
	 * @param {Array} statusSlugs Array of Strings's representing status slugs
	 * @return {Array} Array of Ticket instances in one of many given Status's
	 */
	getTicketsWithSlugIn(statusSlugs) {
		let tickets = this.tickets;

		for (let i = tickets.length - 1; i >= 0; i--) {
			if (statusSlugs.indexOf(tickets[i].status.slug) === -1) tickets.splice(i, 1);
		}

		return tickets;
	}

	/**
	 * Get tickets referenced in a call with the id
	 *
	 * @param {Integer} callId representing id column of call table
	 * @return {Array} Array of Ticket instances referenced in a Call
	 */
	getTicketsFromCall(callId) {
		return this.tickets.filter(ticket => ticket._calls.indexOf(callId) > -1);
	}

	getTicketsAssignedToStaffId(staffId) {
		let expertiseTypeStaff = this.expertiseTypeManager.expertiseTypeStaff;
		
		return this.tickets.filter(ticket => {
			return ticket._assigned_to_operator === staffId || expertiseTypeStaff.find(e => e.id === ticket._expertise_type_staff)._staff === staffId
		});
	}

	getTicketsAssignedToStaffIds(staffIds) {
		let expertiseTypeStaff = this.expertiseTypeManager.expertiseTypeStaff,
			tickets            = this.tickets,
			result             = {};

		staffIds.forEach(staffId => {
			result[staffId] = tickets.filter(ticket => {
				return ticket._assigned_to_operator === staffId
						|| expertiseTypeStaff.find(e => e.id === ticket._expertise_type_staff)._staff === staffId;
			});
		});

		return result;
	}

	getMyTickets() {
		return this.getTicketsAssignedToStaffId(ticketPage.staffManager.currentUser());
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
	getTicketAssignedTo(ticket) {
		if (ticket._assigned_to_operator !== null) return ticket.assigned_to_operator;

		return ticket.expertise_type_staff.staff; // only use expertise_type_staff if there is no assigned operator
	}

	/**
	 * If ticket is assigned to the currently logged in
	 * user.
	 *
	 * @param {Ticket} ticket
	 * @return {Boolean} If assigned to self
	 */
	isTicketAssignedToSelf(ticket) {
		return this.getTicketAssignedTo(ticket) === ticketPage.staffManager.currentUser(); 
	}

	/**
	 * Get the ticket status with the id
	 *
	 * @param {Integer} ticketStatusId representing id column of ticket_status table
	 * @return {TicketStatus} single instance of TicketStatus with ticketStatusId
	 */
	getTicketStatus(ticketStatusId) {
		return this.ticketStatuses.find(ticketStatus => ticketStatus.id === ticketStatusId) || null;
	}

	/**
	 * Get the ticket statuses for a ticket
	 *
	 * @p
	 */
	getTicketStatusesByTicketId(ticketId) {
		return this.ticketStatuses.filter(ticketStatus => ticketStatus._ticket === ticketId);
	}

	/**
	 * Get the comment with the id
	 *
	 * @param {Integer} commentId representing id column of comment table
	 * @return {Comment} single instance of Comment with commentId
	 */
	getComment(commentId) {
		return this.comments.find(comment => comment.id === commentId);
	}

	/**
	 * Get all comments
	 *
	 * @returns {Array} containing Array of Comment instances
	 */
	getCommentsByIds(ids) {
		return this.comments.filter(comment => ids.indexOf(comment.id) > -1);
	}

	/**
	 * Get all tickets associated with an expertise type staff
	 *
	 * @param expertiseTypeStaffId The ID of the expertise type staff to find tickets for
	 * @returns {Array} All matching tickets
	 */
	getTicketsByExpertiseTypeId(expertiseTypeId) {
		let expertiseTypes = this.expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId),
			rawTickets     = [].concat(...expertiseTypes.map(e => e.tickets)); // move all of expertiseTypes[i].tickets into a single array

		return rawTickets ? rawTickets.map(e => new Ticket(e)) : [];
	}

	/**
	 * Search tickets on a property for a provided search query
	 *
	 * @param {String} query Case insensitive string to search elements
	 * @param {Array} properties Array of strings representing elements property names to search through
	 * @return {Array} Array of Ticket instances satisfying the search condition
	 */
	search(query, properties) {
		return super.search(this.tickets, query, properties);
	}

	/**
	 * Gets a collection of tickets by their IDs
	 *
	 * @param {Array} ids The IDs of the requested tickets 
	 * @return {Array} Array of Ticket instances
	 */
	getTicketsByTicketIDs(ids) {
		return this.tickets.filter(ticket => ids.indexOf(ticket.id) > -1);
	}
}
