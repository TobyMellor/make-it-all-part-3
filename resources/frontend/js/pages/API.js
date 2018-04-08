import DynamicPage from "./DynamicPage";

/**
 * API
 *
 * Originally used to retrieve and handle data from
 * API endpoints, but modified to hold local data
 * in the constructor set by WordPress's Twig
 * (done to reuse previous components to save time)
 */
export default class API {
	constructor({
		calls = [],
		statuses = [],
		tickets = [],
		ticket_statuses: ticketStatuses = [],
		comments = [],
		staff = [],
		devices = [],
		programs = [],
		expertise_types: expertiseTypes = [],
		expertise_type_staff: expertiseTypeStaff = [],
		departments = []
	}) {
		this.calls              = calls;
		this.statuses           = statuses;
		this.tickets            = tickets;
		this.ticketStatuses     = ticketStatuses;
		this.comments           = comments;
		this.staff              = staff;
		this.devices            = devices;
		this.programs           = programs;
		this.expertiseTypes     = expertiseTypes;
		this.expertiseTypeStaff = expertiseTypeStaff;
		this.departments        = departments;
	}
}
