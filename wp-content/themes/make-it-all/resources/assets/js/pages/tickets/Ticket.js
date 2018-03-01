import TicketManager from "./TicketManager";
import StaffManager from "../staff/StaffManager";
import HardwareManager from "../hardware/HardwareManager";
import SoftwareManager from "../software/SoftwareManager";
import ExpertiseTypeManager from "../problem_types/ExpertiseTypeManager";

/**
 * Ticket
 *
 * Holds information about a Ticket/Problem.
 */
export default class Ticket {
	constructor({
		id,
		author_id: author,
		calls,
		status,
		status_history: statusHistory,
		title,
		description,
		solution_id: solution,
		devices,
		programs,
		comments,
		created_at_human: createdAt,
		updated_at_human: updatedAt,
		created_at: createdAtReal,
		updated_at: updatedAtReal,
		expertise_type_staff_id: expertiseTypeStaff,
		assigned_to_operator_id: assignedToOperatorId
	}) {
		this.id                   = id;
		this.author               = author;
		this.calls                = calls;  // ID of calls, get method returns instances of Call's
		this.status               = status; // ID of status, get method returns instance of Status
		this.status_history       = statusHistory;
		this.title                = title;
		this.description          = description;
		this.solution             = solution;
		this.devices              = devices;  // ID of devices, get method returns instances of Devices
		this.programs             = programs; // ID of programs, get method returns instances of Programs
		this.comments             = comments; // ID of comments, get method returns instances of Comment's
		this.created_at           = createdAt;
		this.updated_at           = updatedAt;
		this.created_at_real      = createdAtReal;
		this.updated_at_real      = updatedAtReal;
		this.expertise_type_staff = expertiseTypeStaff;
		this.assigned_to_operator = assignedToOperatorId;
	}

	get calls() {
		return (new TicketManager()).getCallsByTicketId(this.id);
	}

	set calls(calls) {
		this._calls = calls;
	}

	get status() {
		return (new TicketManager()).getStatus(this._status);
	}

	set status(status) {
		this._status = status;
	}
	
	get status_history() {
		return (new TicketManager()).getStatusHistory(this._status_history);
	}

	set status_history(statusHistory) {
		this._status_history = statusHistory;
	}

	get caller() {
		return (new StaffManager).get(this._caller);
	}

	set caller(caller) {
		this._caller = caller;
	}

	get devices() {
		return (new HardwareManager()).getDevices(this._devices);
	}

	set devices(devices) {
		this._devices = devices;
	}

	get programs() {
		return (new SoftwareManager()).getPrograms(this._programs);
	}

	set programs(programs) {
		this._programs = programs;
	}

	get comments() {
		return (new TicketManager()).getCommentsByIds(this._comments);
	}

	set comments(comments) {
		this._comments = comments;
	}

	get solution() {
		return (new TicketManager()).getComment(this._solution);
	}

	set solution(solution) {
		this._solution = solution;
	}

	get expertise_type_staff() {
		return (new ExpertiseTypeManager).getExpertiseTypeStaff(this._expertise_type_staff);
	}

	set expertise_type_staff(expertiseTypeStaffId) {
		this._expertise_type_staff = expertiseTypeStaffId;
	}

	get assigned_to_operator() {
		return (new StaffManager()).get(this._assigned_to_operator);
	}

	set assigned_to_operator(assignedToOperatorId) {
		this._assigned_to_operator = assignedToOperatorId;
	}

	get expertise_type() {
		var random = Math.floor(Math.random() * (40 - 1 + 1)) + 1; //Random int between 1 and 40
		return (new ExpertiseTypeManager()).getExpertiseType(random);
	}
}
