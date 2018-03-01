import DynamicPage from "../DynamicPage";
import TicketManager from "./TicketManager";
import SoftwareManager from "../software/SoftwareManager";
import HardwareManager from "../hardware/HardwareManager";
import StaffManager from "../staff/StaffManager";
import StaffPage from "../staff/StaffPage";
import Comment from "./Comment";

/**
 * TicketPage
 *
 * Manipulates the tickets page /w JQuery using data from
 * the TicketManager. Methods mostly get called from tickets.js
 */
export default class TicketPage extends DynamicPage {
	constructor() {
		super();

		// Managers
		this.ticketManager   = new TicketManager();
		this.softwareManager = new SoftwareManager();
		this.hardwareManager = new HardwareManager();
		this.staffManager    = new StaffManager();

		this.currentTicket = null; // Ticket being shown on the right panel
	}

	/**
	 * Retrieves the tickets where their status is in the array of
	 * status slugs. Replaces the current list-view with them.
	 *
	 * @param {Array} Array of strings representing status slugs
	 */
	showFilteredTickets(statusSlugs) {
		let status, filteredTickets, filteredTicket, i, j;

		if (statusSlugs.indexOf('assigned_to') > -1) {
			filteredTickets = this.ticketManager.getMyTickets();
		} else {
			filteredTickets = this.ticketManager.getTicketsWithSlugIn(statusSlugs.split(','));
		}

		this.clearTable();

		for (j = 0; j < filteredTickets.length; j++) {
			filteredTicket = filteredTickets[j];
			status         = filteredTicket.status;

			this.appendTableRow({
				id: filteredTicket.id,
				title: filteredTicket.title,
				status_name: '<span class="filter filter-' + status.slug.split('_')[0] + '">' + status.name + '</span>',
				created_at: filteredTicket.created_at,
				updated_at: filteredTicket.updated_at
			});
		}

		this.updateSplashScreen();

		this.currentTicket = null;
	}

	/**
	 * Presents a Ticket in the right panel (ticket view).
	 * 
	 * Populates elements on the ticket view, including external
	 * items such as:
	 *     - Devices
	 *     - Programs
	 *     - Calls
	 *     - Comments
	 *
	 * @param {Integer} ticketId representing Ticket.id
	 */
	showTicketView(ticketId) {
		if (ticketId !== null) { // null when no currentTicket has been opened yet, but user is changing the category
			let ticket       = this.ticketManager.getTicket(ticketId),
				ticketStatus = ticket.status;

			this.currentTicket = ticket;

			this.updateSingleViewNavbar(ticket.title + '<span class="filter filter-' + ticketStatus.slug.split('_')[0] + '">' + ticketStatus.name + '</span>');

			$('#ticket-view #ticket-overview').text('#' + ticket.id + ' | ' + ticket.created_at + ' | ' + this.ticketManager.getTicketAssignedTo(ticket).name);
			$('#ticket-view #ticket-description p').text(ticket.description);

			var $ticketComments           = $('#ticket-comments'),
				$ticketHardwareSoftware   = $('#ticket-view #hardware-software-table'),
				$ticketNoHardwareSoftware = $('#ticket-view #no-hardware-software'),
				$ticketCallHistoryBody    = $('#ticket-view #call-history-table tbody').empty();

			$ticketComments.text('Loading comments…').show();
			$ticketHardwareSoftware.hide();
			$ticketNoHardwareSoftware.hide();

			// Show basic info whilst other data is being loaded asynchronously
			this.showTableRowDetails(ticket.id);

			// Affected items (devices and programs)
			(async() => {
				let devices       = ticket.devices,
					programs      = ticket.programs,
					affectedItems = devices.concat(programs);

				if (affectedItems.length === 0) { // hide the HW/SW table if there's no affected items
					$ticketHardwareSoftware.hide();
					$ticketNoHardwareSoftware.show();
				} else {
					var $ticketHardwareSoftwareBody = $ticketHardwareSoftware.find('tbody');

					$ticketHardwareSoftwareBody.empty();

					for (var i = 0; i < affectedItems.length; i++) {
						var affectedItem = affectedItems[i],
							type;

						// get type of affectedItem to display in ticket-view table
						if (affectedItem.hasOwnProperty('serial_no')) {
							type = 'Hardware';
						} else if (affectedItem.operating_system) {
							type = 'OS';
						} else {
							type = 'Software';
						}

						$ticketHardwareSoftwareBody.append(
							'<tr data-rowid="' + affectedItem.id + '" data-rowtype="' + (affectedItem.hasOwnProperty('serial_no') ? 'hardware' : 'software') + '">' +
								'<td class="truncate">' + (affectedItem.type || affectedItem.name) + '</td>' +
								'<td class="truncate">' + (affectedItem.serial_no || '—') + '</td>' +
								'<td class="truncate">' + type + '</td>' +
								'<td>' +
									'<i class="fa fa-eye"></i>' +
								'</td>' +
							'</tr>'
						);
					}
					$ticketHardwareSoftware.show();
					$ticketNoHardwareSoftware.hide();
				}
			})();

			// Calls
			(async() => {
				let calls = ticket.calls;

				for (let i = 0; i < calls.length; i++) {
					let call   = calls[i],
						caller = call.caller;

					$ticketCallHistoryBody.append(
						'<tr data-rowid="' + call.id + '">' +
							'<td>' + call.id + '</td>' +
							'<td>' + caller.name + '</td>' +
							'<td>' + call.time + '</td>' +
							'<td>' +
								'<i class="fa fa-eye"></i>' +
							'</td>' +
						'</tr>'
					);
				}
			})();

			// Comments
			(async() => {
				let comments = ticket.comments,
					me       = this.staffManager.currentUser(true);

				if (comments.length === 0) {
					$ticketComments.text('No comments have been left yet!');
				} else {
					$ticketComments.text('Loading comments…');

					let ticketStatuses = ticketPage.ticketManager.getTicketStatusesByTicketId(ticket.id),
						ticketFeed     = comments.concat(ticketStatuses), // includes comments and ticket status history in one
						$ticketFeed    = $('<div>');

					// Sort the feed by date
					ticketFeed.sort(function(a, b){
						return Date.parse(a.created_at_real) - Date.parse(b.created_at_real);
					});

					for (let i in ticketFeed) {
						let post = ticketFeed[i];

						if (post instanceof Comment) { // Comment
							if (post.id !== ticket._solution) { // this comment is not a solution
								$ticketFeed.append(this.getComment(post, me)).find('.media-side i');
							} else {
								$ticketFeed.prepend(this.getComment(post, me, true)).find('.media-side i');
							}
						} else { // Ticket Status Change (TicketStatus/StatusHistory)
							let status = post.status,
								staff  = post.staff;

							$ticketFeed.append(
								'<li class="ticket-event">' +
									'<i class="fa fa-ticket"></i>' +
									' Status Changed by ' + staff.name + ': ' +
									'<span class="ticket-event-details">' + (status.name.split(' ')[0]) + '</span>' +
									'<span class="ticket-event-date">' + post.created_at + '</span>' +
								'</li>'
							);
						}
					}

					// Fade out loading text, insert ticketFeed
					$ticketComments.fadeOut(250, function() {
						$(this).html($ticketFeed.unwrap());
						$(this).show();
					});
				}
			})();
		}
	}

	/**
	 * Gets the HTML for a comment, which may look different
	 * if it's a solution.
	 *
	 * @param {Comment} comment
	 * @param {Employee} me instance of the currently logged in user
	 * @return {String} the comment
	 */
	getComment(post, me, isSolution = false) {
		let author  = post.author,
			comment = 
			'<li class="media ' + (isSolution ? 'solution' : '') + '" data-comment-id="' + post.id + '">' +
				'<div class="media-side">' +
					'<a href="' + (author.id === me.id ? '/settings' : '/staff#' + author.id) + '">' +
						'<img src="https://placehold.it/275x275" alt="' + author.name + '\'s Profile Picture">' +
					'</a>' +
					'<i class="fa fa-check"></i>' +
				'</div>' +
				'<div class="media-body">' +
					'<h5 class="mt-0 mb-1">' +
						'<a href="/staff#' + author.id + '">' +
							author.name +
						'</a>' +
						(isSolution ? ' <span class="filter filter-resolved">Solution</span>' : '') +
						(post._call !== null ? ' <span class="filter filter-new note-about-call" data-call-id="' + post._call + '">Note about a call</span>' : '') +
						'<span class="ticket-comment-date">' + post.created_at + '</span>' +
					'</h5>' +
					'<div class="breaker"></div>' +
					post.content +
				'</div>' +
			'</li>';

		return comment;
	}

	/**
	 * When clicking on a Ticket entry in Call Details,
	 * Hide the modal and show that ticket.
	 *
	 * @param {Integer} ticketId representing Ticket.id
	 */
	showCallTicket(ticketId) {
		$('#view-call-history-modal').modal('hide');

		var ticket = this.ticketManager.getTicket(ticketId);

		this.refreshPage(ticket.status.slug, ticketId);
	}

	/**
	 * Populate the View Call modal by loading in
	 * the call details and its tickets.
	 *
	 * @param {Integer} callId representing Call.id
	 */
	showCallTicketsModal(callId) {
		var call             = this.ticketManager.getCall(callId),
			$callHistory     = $('#view-call-history-modal'),
			$callTicketTable = $callHistory.find('#call-tickets-table tbody');

		$callHistory.find('#call-id').text(call.id);
		$callHistory.find('#call-caller').text(call.caller.name);
		$callHistory.find('#call-operator').text(call.operator.name);
		$callHistory.find('#call-date').text(call.time);

		// Show modal with call data
		$callTicketTable.empty();
		$callHistory.modal('show');

		// Load tickets related to call
		call.tickets.forEach(async ticket => {
			// Add each related ticket to call modal
			$callTicketTable.append(
				'<tr data-rowid="' + ticket.id + '" ' + (ticket.id === this.currentTicket.id ? 'class="highlight"' : '') + '>' +
					'<td>' + ticket.id + '</td>' +
					'<td>' + ticket.title + '</td>' +
					'<td>' +
						'<span class="filter filter-' + ticket.status.slug.split('_')[0] + '">' + ticket.status.name + '</span>' +
					'</td>' +
					'<td>' + ticket.created_at + '</td>' +
					'<td>' +
						'<i class="fa fa-eye"></i>' +
					'</td>' +
				'</tr>'
			);
		});

		$callHistory.find('#no-call-notes').hide();
		$callHistory.find('#call-notes').hide();

		let callComment = this.ticketManager.getCallNotesByCallId(call.id);

		if (callComment !== null) {
			$callHistory.find('#call-notes').text(callComment.content);
			$callHistory.find('#call-notes').show();
		} else {
			$callHistory.find('#no-call-notes').show();
		}
	}

	/**
	 * Change the active status in the side nav bar.
	 * Reload the tickets with the new status, and show the
	 * ticket view again.
	 *
	 * @param {String} statusSlug representing Status.slug
	 * @param {Integer} ticketId (nullable) representing Ticket.id
	 */
	async refreshPage(statusSlug, ticketId = null) {
		$('.side-nav-bar-nested ul li.active').removeClass('active');
		$('.side-nav-bar-nested ul li[data-slug="' + statusSlug + '"]').addClass('active');

		this.showFilteredTickets(statusSlug);
		this.showTicketView(ticketId);
	}

	/**
	 * Fill an employees details into a Staff Information
	 * DOM element. Load in relevant employee permissions too.
	 *
	 * @param {DOM Element} $staffInformation
	 * @param {Integer} employeeId representing Employee.id (employee used for viewing)
	 */
	async showStaffInformation($staffInformation, employeeId) {
		let employee  = this.staffManager.get(employeeId);

		$staffInformation.html(
			'<p>ID Number: <strong>' + employee.id + '</strong></p>' +
			'<p>Name: <strong>' + employee.name + '</strong></p>' +
			'<p>Job: <strong>' + employee.job + '</strong></p>' +
			'<p>Department: <strong>' + employee.department + '</strong></p>' +
			'<p>Phone: <strong>' + employee.phone + '</strong></p>' +
			'<p><strong></strong></p>'
		);

		StaffPage.showPermissions($staffInformation.find('p:last-child strong').get(0), employee);
	}

	/**
	 * Determine if a Ticket is assigned to:
	 *     - (self)       The currently logged in user
	 *     - (operator)   Another helpdesk operator
	 *     - (specialist) Specialist of ExpertiseType (found through ExpertiseTypeStaff on Ticket)
	 *
	 * @param {Ticket} ticket 
	 * @return {String} the ticket's assigned to type
	 */
	getAssignedToType(ticket) {
		if (this.ticketManager.getTicketAssignedTo(ticket).id === this.staffManager.currentUser()) { // if ticket._assigned_to_operator === self
			return 'self';
		} else if (ticket._assigned_to_operator !== null) { // If assigned_to_operator !== null, use that instead of specialist
			return 'operator';
		}

		return 'specialist';
	}

	/**
	 * Determine the best specialist for the ExpertiseType based on
	 * how busy they are compared to other specialists.
	 *
	 * Updated when a user clicks through problem types,
	 * updates in the relevant showcase fields
	 *
	 * @param {Integer} expertiseTypeId ExpertiseType.id 
	 * @param {DOM Element} $assignedToOptions "Assign to x" radio fields in accordion cards
	 * @param {Employee} bestSpecialist (nullable) Manually assign employee if they have that specialism
	 * @return {ExpertiseTypeStaff} ExpertiseTypeStaff record, containing link to ExpertiseType and Staff tables
	 */
	setSpecialist(expertiseTypeId, $assignedToOptions, bestSpecialist = null) {
		if (bestSpecialist === null || !this.staffManager.hasSpecialism(bestSpecialist, expertiseTypeId)) {
			var bestExpertiseTypeStaff = staffProblemTypePage.getBestExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId);

			bestSpecialist = bestExpertiseTypeStaff !== null ? bestExpertiseTypeStaff.staff : null; // null if no specialists found in parents
		}

		var $specialistId       = $assignedToOptions.find('input[name*="specialist"]'),
			$specialistShowcase = $assignedToOptions.find('input[name*="specialist_showcase"]');

		if (bestSpecialist !== null) {
			$specialistId.val(bestSpecialist.id);
			$specialistShowcase.val(bestSpecialist.name);
		} else {
			$specialistId.val('');
			$specialistShowcase.val('No Specialist for the Problem Type');
		}

		return bestExpertiseTypeStaff;
	}

	/**
	 * Search through all tickets based on
	 *     - id
	 *     - title
	 *
	 * Show the results in the list-view
	 *
	 * @param {String} query Query potentially contained in id/title
	 */
	search(query) {
		if (query.length >= 2 || (query.length > 0 && query == parseInt(query))) {
			var searchKeys = ['id', 'title'],
				tickets    = this.ticketManager.search(query, searchKeys);

			super.search(query, tickets, async function(ticket) {
				let ticketStatus = ticket.status;
				
				return {
					id: ticket.id,
					title: ticket.title,
					status_name: '<span class="filter filter-' + ticketStatus.slug.split('_')[0] + '">' + ticketStatus.name + '</span>',
					created_at: ticket.created_at,
					updated_at: ticket.updated_at
				}; // the format results need to be in for the the results table
			}, searchKeys);
		} else {
			this.showFilteredTickets($('.side-nav-bar-nested li.active').data('slug'));
		}
	}
}