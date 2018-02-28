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
	async showFilteredTickets(statusSlugs) {
		let status, filteredTickets, filteredTicket, i, j;

		if (statusSlugs.indexOf('assigned_to') > -1) {
			filteredTickets = await this.ticketManager.getMyTickets();
		} else {
			filteredTickets = await this.ticketManager.getTicketsWithSlugIn(statusSlugs.split(','));
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
	async showTicketView(ticketId) {
		if (ticketId !== null) { // null when no currentTicket has been opened yet, but user is changing the category
			let ticket       = await this.ticketManager.getTicket(ticketId),
				ticketStatus = await ticket.status;

			this.currentTicket = ticket;

			this.updateSingleViewNavbar(ticket.title + '<span class="filter filter-' + ticketStatus.slug.split('_')[0] + '">' + ticketStatus.name + '</span>');

			$('#ticket-view #ticket-overview').text('#' + ticket.id + ' | ' + ticket.created_at + ' | ' + (await this.ticketManager.getTicketAssignedTo(ticket)).name);
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
				let devices       = await ticket.devices,
					programs      = await ticket.programs,
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
				let calls = await ticket.calls;

				for (let i = 0; i < calls.length; i++) {
					let call = calls[i],
							caller = await call.caller;

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
				let comments = await ticket.comments,
					me       = await window.auth.me();

				if (comments.length === 0) {
					$ticketComments.text('No comments have been left yet!');
				} else {
					$ticketComments.text('Loading comments…');

					let ticketStatuses = await ticketPage.ticketManager.getTicketStatusesByTicketId(ticket.id),
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
								$ticketFeed.append(await this.getComment(post, me)).find('.media-side i').tooltip();
							} else {
								$ticketFeed.prepend(await this.getComment(post, me, true)).find('.media-side i').tooltip();
							}
						} else { // Ticket Status Change (TicketStatus/StatusHistory)
							let status = await post.status,
								staff  = await post.staff;

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
	async getComment(post, me, isSolution = false) {
		let author  = await post.author,
			comment = 
			'<li class="media ' + (isSolution ? 'solution' : '') + '" data-comment-id="' + post.id + '">' +
				'<div class="media-side">' +
					'<a href="' + (author.id === me.id ? '/settings' : '/staff#' + author.id) + '">' +
						'<img src="/res/avatar/' + author.email + '" alt="' + author.name + '\'s Profile Picture">' +
					'</a>' +
					'<i class="fa fa-check" data-toggle="tooltip" data-placement="bottom" title="' + (isSolution ? 'Unmark' : 'Mark') + ' as solution"></i>' +
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
	 * Marks a comment as the solution,
	 * unmarks current solution if there is one.
	 * Refreshes ticket view
	 *
	 * @param {Integer} commentId
	 */
	 async markCommentAsSolution(commentId) {
	 	await this.ticketManager.updateTicketSolution(this.currentTicket, commentId);

	 	this.refreshPage(this.currentTicket.status.slug, this.currentTicket.id);
	 }

	/**
	 * Unmarks a comment as the solution.
	 * Refreshes ticket view
	 */
	 async unmarkCommentAsSolution() {
	 	await this.ticketManager.updateTicketSolution(this.currentTicket, null);

	 	this.refreshPage(this.currentTicket.status.slug, this.currentTicket.id);
	 }

	/**
	 * When clicking on a Ticket entry in Call Details,
	 * Hide the modal and show that ticket.
	 *
	 * @param {Integer} ticketId representing Ticket.id
	 */
	async showCallTicket(ticketId) {
		$('#view-call-history-modal').modal('hide');

		var ticket = await this.ticketManager.getTicket(ticketId);

		this.refreshPage(ticket.status.slug, ticketId);
	}

	/**
	 * Add a new device or program div below their
	 * corresponding select fields
	 *
	 * @param {DOM Element} ul.affected-items container to append HW/SW divs
	 * @param {Ticket} ticket containing the devices/programs
	 * @param {Integer} cardId unique accordion card Id
	 */
	appendAffectedItems($affectedItems, ticket, cardId) {
		$affectedItems.empty();

		(async() => {
			for (let i = 0; i < ticket._devices.length; i++) {
				let deviceId = ticket._devices[i];

				await this.appendHardwareDevice($affectedItems, deviceId, cardId);
			}
		})();

		(async() => {
			for (let i = 0; i < ticket._programs.length; i++) {
				let programId = ticket._programs[i];

				await this.appendSoftwareProgram($affectedItems, programId, cardId);
			}
		})();
	}

	/**
	 * Append a device div to the ul.affectedItems
	 * container. Remove the device from the select field.
	 *
	 * @param {DOM Element} ul.affected-items container to append HW/SW divs
	 * @param {Integer} deviceId representing Device.id
	 * @param {Integer} cardId unique accordion card Id
	 */
	async appendHardwareDevice($affectedItems, deviceId, cardId) {
		var device        = await this.hardwareManager.get(deviceId),
			$selectPicker = $affectedItems.closest('.affected-items-section').find('.selectpicker.add-hardware-device');

		$affectedItems.append(
			' <li data-serial-number="' + device.serial_no + '" data-type="hardware">' +
				'<input type="text" name="tickets[' + cardId + '].devices[' + device.id + ']" value="' + device.id + '" hidden />' +
				'<h4>' + device.type + '</h4>' +
				'<p>(Hardware)</p>' +
				'<a class="btn btn-danger remove-affected-item" href="javascript: void(0);">' +
					'<i class="fa fa-laptop"></i> ' +
					'Remove' +
				'</a>' +
			'</li>'
		);

		$selectPicker.find('option[value="' + deviceId + '"]').remove();
		$selectPicker.val('').selectpicker('refresh');
	}

	/**
	 * Append a program div to the ul.affectedItems
	 * container. Remove the program from the select field.
	 *
	 * @param {DOM Element} ul.affected-items container to append HW/SW divs
	 * @param {Integer} programId representing Program.id
	 * @param {Integer} cardId unique accordion card Id
	 */
	async appendSoftwareProgram($affectedItems, programId, cardId) {
		var program       = await this.softwareManager.get(programId),
			$selectPicker = $affectedItems.closest('.affected-items-section').find('.selectpicker.add-software-program');

		$affectedItems.append(
			' <li data-program-id="' + programId + '" data-type="software">' +
				'<input type="text" name="tickets[' + cardId + '].programs[' + program.id + ']" value="' + program.id + '" hidden />' +
				'<h4>' + program.name + '</h4>' +
				(program.operating_system ? '<p>(Operating System)</p>' : '<p>(Software)</p>') +
				'<a class="btn btn-danger remove-affected-item" href="javascript: void(0);">' +
					'<i class="fa fa-' + (program.operating_system ? 'terminal' : 'file-code-o') + '"></i> ' +
					'Remove' +
				'</a>' +
			'</li>'
		);

		$selectPicker.find('option[value="' + programId + '"]').remove();
		$selectPicker.val('').selectpicker('refresh');
	}

	/**
	 * Remove the HW/SW div that's containing 
	 * the delete button. Add the HW/SW element
	 * back to its select field.
	 *
	 * @param {DOM Element} HW/SW div to remove
	 */
	removeAffectedItem($removeAffectedItem) {
		$removeAffectedItem.closest('li').fadeOut(200, async function() {
			var $affectedItems = $(this).closest('.affected-items-section'),
				item, $selectPicker;

			if ($(this).data('type') === 'hardware') {
				item = await ticketPage.hardwareManager.getDeviceBySerialNumber($(this).data('serialNumber'));
				$selectPicker = $affectedItems.find('.selectpicker.add-hardware-device');
				$selectPicker.find('option').first().after('<option value="' + item.id + '">' + '#' + item.id + ' ' + item.serial_no + '</option>');
			} else {
				item = await ticketPage.softwareManager.get(Number($(this).data('programId')));
				$selectPicker = $affectedItems.find('.selectpicker.add-software-program');
				$selectPicker.find('option').first().after('<option value="' + item.id + '">' + '#' + item.id + ' ' + (item.operating_system ? '(OS)' : '') + ' ' + item.name + '</option>');
			}

			$selectPicker.selectpicker('refresh');

			$(this).remove();
		});
	}

	/**
	 * Populate the View Call modal by loading in
	 * the call details and its tickets.
	 *
	 * @param {Integer} callId representing Call.id
	 */
	async showCallTicketsModal(callId) {
		var call             = await this.ticketManager.getCall(callId),
			$callHistory     = $('#view-call-history-modal'),
			$callTicketTable = $callHistory.find('#call-tickets-table tbody');

		$callHistory.find('#call-id').text(call.id);
		(async() => $callHistory.find('#call-caller').text((await call.caller).name))();
		(async() => $callHistory.find('#call-operator').text((await call.operator).name))();
		$callHistory.find('#call-date').text(call.time);

		// Show modal with call data
		$callTicketTable.empty();
		$callHistory.modal('show');

		// Load tickets related to call
		(await call.tickets).forEach(async ticket => {
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

		let callComment = await this.ticketManager.getCallNotesByCallId(call.id);

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

		await this.showFilteredTickets(statusSlug);
		await this.showTicketView(ticketId);
	}

	/**
	 * Populate a edit/view ticket modal with
	 * its data from the DB
	 *
	 * @param {DOM Element} $modal The modal to populate
	 * @param {Ticket} ticket Ticket's data to use to populate
	 * @param {Integer} cardId The accordion card to modify
	 */
	async populateTicketModal($modal, ticket, cardId) {
		for (var key in ticket) {
			var value = ticket[key];
			
			if (key === 'status') {
				value = ticket.status.name;
			} else if (key === '_expertise_type_staff') {
				// Assign the staff member based on the problem type
				var currentUser        = await this.staffManager.currentUser(true),
					assignedTo         = await this.ticketManager.getTicketAssignedTo(ticket),
					expertiseTypeStaff = await ticket.expertise_type_staff,
					expertiseType      = await expertiseTypeStaff.expertise_type;

				$modal.find('input[name*="assigned_to"]').not('.form-check-input').val(assignedTo.name);

				$modal.find('input[name*="assigned_to.self"]').val(currentUser.id);
				$modal.find('input[name*="assigned_to.self_showcase"]').val(currentUser.name);

				this.setSpecialist(expertiseType.id, $modal.find('.assigned-to-options'), assignedTo);

				$modal.find('.form-check-input').attr('disabled', false);
				$modal.find('.form-check-input[value="' + (await this.getAssignedToType(ticket)) + '"]').click();

				if (!$modal.is('#edit-ticket-modal')) {
					$modal.find('.form-check-input').attr('disabled', true);
				}

				// Populate the problem type showcase
				key   = 'expertise_type_showcase';
				value = await problemTypePage.getExpertiseTypeBreadcrum(expertiseType);

				$modal.find('input[name*=expertise_type_staff]').val(expertiseType.id);
			}
			
			$modal.find('input[name*="' + key + '"], textarea[name*="' + key + '"]').val(value);
		}

		this.appendAffectedItems($modal.find('.affected-items'), ticket, cardId);

		$('.selectpicker').selectpicker();
	}

	/**
	 * Use the TicketManager to create a comment,
	 * clear the comment box and refresh the ticket view
	 *
	 * @param {DOM Element} $commentBox containing the text
	 */
	async appendNewComment($commentBox) {
		await this.ticketManager.createComment(
			ticketPage.currentTicket.id,
			null,
			$commentBox.val()
		);

		$commentBox.val('');

		this.showTicketView(ticketPage.currentTicket.id); // refresh to get new comment
	}

	/**
	 * Use the TicketManager to create a call,
	 * referencing new tickets (created here also), or existing
	 * tickets
	 *
	 * @param {String} time MySQL timestamp format
	 * @param {Staff} caller the staff member that called
	 * @param {String} callNotes the comment to be added to the call (notes about a call) 
	 * @param {Array} tickets Array of new ticket data
	 * @param {Array} existingTicketIds (optional) any existing tickets referenced
	 */
	async createCall(time, caller, callNotes, tickets, existingTicketIds = []) {
		let call   = await this.ticketManager.createCall(time, caller, callNotes, tickets, existingTicketIds),
			ticket = await this.ticketManager.getTicket(call._tickets[0]);

		this.refreshPage(ticket.status.slug, ticket.id);
	}

	/**
	 * Add empty accordion card with random cardId to
	 * an accordion. Populates and initialises select
	 * fields
	 *
	 * @param {DOM Element} $accordion 
	 */
	async addNewAccordionCard($accordion) {
		var cardId = Math.floor(Math.random() * (10000 + 1));

		var $card = $(
			'<div class="card" data-cardid="' + cardId + '">' +
				'<div class="card-header" role="tab" id="heading-' + cardId + '">' +
					'<h5 class="mb-0">' +
						'<a data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);">' +
							'New Ticket' +
						'</a>' +
						'<i class="fa fa-chevron-down view-accordion"></i>' +
						'<i class="fa fa-trash-o remove-accordion"></i>' +
					'</h5>' +
				'</div>' +
				'<div id="collapse-' + cardId + '" class="collapse show" role="tabpanel">' +
					'<div class="card-block">' +
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
									'<label class="required">Status</label>' +
									'<br />' +
									'<select class="selectpicker" name="tickets[' + cardId + '].status" validation="required|in:new,pending_in_progress,resolved">' +
										'<option value="new">New</option>' +
										'<option value="pending_in_progress">Pending - In Progress</option>' +
										'<option value="resolved">Resolved</option>' +
									'</select>' +
								'</div>' +
								'<div class="form-group">' +
									'<label class="required">Ticket Title</label>' +
									'<input class="form-control" name="tickets[' + cardId + '].title" validation="required|min:3|max:255" />' +
								'</div>' +
							'</div>' +
							'<div class="col-md-6 assigned-to-section">' +
								'<div class="form-group">' +
									'<label class="required">Assigned To</label>' +
									'<br />' +
									'<div class="assigned-to-options">' +
										'<input class="form-control no-clear-on-show" name="tickets[' + cardId + '].assigned_to.self_showcase" value="' + (await this.staffManager.currentUser(true)).name + '" validation="required" readonly />' +
										'<input class="form-control no-clear-on-show" name="tickets[' + cardId + '].assigned_to.self" value="' + (await this.staffManager.currentUser()) + '" readonly hidden />' +
										'<select class="selectpicker staff-picker" data-live-search="true" data-live-search-placeholder="Search operators…" name="tickets[' + cardId + '].assigned_to.operator" validation="nullable|integer"></select>' +
										'<input class="form-control no-clear-on-show" name="tickets[' + cardId + '].assigned_to.specialist" readonly hidden />' +
										'<input class="form-control no-clear-on-show" name="tickets[' + cardId + '].assigned_to.specialist_showcase" value="Problem Type not yet chosen" readonly validation="required|requires:tickets[' + cardId + '].expertise_type_showcase" />' +
									'</div>' +
								'</div>' +
								'<div class="form-check">' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="self" checked>' +
										'Assign to myself' +
									'</label>' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="operator">' +
										'Assign to another Operator' +
									'</label>' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="specialist">' +
										'Assign to Specialist of Problem Type' +
									'</label>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							'<div class="col-md-12 affected-items-section">' +
								'<div class="form-group">' +
									'<label class="required">Ticket Description</label>' +
									'<textarea class="form-control" name="tickets[' + cardId + '].description" validation="required|min:3|max:255"></textarea>' +
								'</div>' +
								'<div class="form-group">' +
									'<label class="required">Problem Type</label>' +
									'<input name="tickets[' + cardId + '].expertise_type_staff" validation="required:You must choose a Problem Type, and the Problem Type\'s parents must have at least one specialist|integer" hidden>' +
									'<span class="subtle pull-right"></span>' +
									'<div class="problem-type-picker">' +
										'<div class="type-columns"></div>' +
									'</div>' +
								'</div>' +
								'<div class="row">' +
									'<div class="col-md-4">' +
										'<div class="form-group">' +
											'<label class="required">Hardware Affected</label>' +
											'<select name="tickets[' + cardId + '].hardware_showcase" class="selectpicker add-hardware-device" data-live-search="true" validation="nullable"></select>' +
										'</div>' +
									'</div>' +
									'<div class="col-md-4">' +
										'<div class="form-group">' +
											'<label>OS\'s/Programs Affected</label>' +
											'<select name="tickets[' + cardId + '].software_showcase" class="selectpicker add-software-program" data-live-search="true" validation="nullable"></select>' +
										'</div>' +
									'</div>' +
								'</div>' +
								'<div class="row">' +
									'<div class="col-md-12">' +
										'<ul class="affected-items"></ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);

		$accordion.find('.fa-chevron-down.view-accordion').click();
		
		$accordion.append($card);

		problemTypePage.loadSubExpertiseTypes($card.find('.type-columns'));

		this.populateSelectField($card.find('select[name*="assigned_to"]'), 'Choose an operator…', (await this.staffManager.getEmployeesWithPermission('operator', true)));
		this.populateSelectField($card.find('.selectpicker.add-hardware-device'), 'Type a serial number…', await this.hardwareManager.devices, null, 'serial_no');
		this.populateSelectField($card.find('.selectpicker.add-software-program'), 'Choose a OS/program…', await this.softwareManager.programs, null, 'name', function(program) {
			return program.operating_system ? '(OS)' : '';
		});

		$('.selectpicker').selectpicker('refresh');
	}

	/**
	 * Add populated accordion card with random cardId to
	 * an accordion. Populates and initialises select
	 * fields based on the ticket's data
	 *
	 * @param {DOM Element} $accordion 
	 * @param {Integer} ticket representing Ticket.id
	 */
	async addExistingAccordionCard($accordion, ticketId) {
		var $addExistingTicket = $accordion.closest('.modal').find('#add-existing-ticket'),
			ticket             = await this.ticketManager.getTicket(ticketId),
			cardId             = Math.floor(Math.random() * (10000 + 1)),
			assignedToType     = await this.getAssignedToType(ticket);

		$accordion.append(
			'<div class="card existing" data-cardid="' + cardId + '">' +
				'<input type="text" name="tickets[' + cardId + '].id" value="' + ticketId + '" hidden />' +
				'<div class="card-header" role="tab" id="heading-' + cardId + '">' +
					'<h5 class="mb-0">' +
						'<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);">' +
							'Existing Ticket: ' + ticket.title +
						'</a>' +
						'<i class="fa fa-chevron-up view-accordion"></i>' +
						'<i class="fa fa-trash-o remove-accordion"></i>' +
					'</h5>' +
				'</div>' +
				'<div id="collapse-' + cardId + '" class="collapse" role="tabpanel">' +
					'<div class="card-block">' +
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
									'<label>Status</label>' +
									'<br />' +
									'<input class="form-control" type="text" name="tickets[' + cardId + '].status" value="' + ticket.status.name + '" disabled>' +
								'</div>' +
								'<div class="form-group">' +
									'<label>Ticket Title</label>' +
									'<input class="form-control" name="tickets[' + cardId + '].title" value="' + ticket.title + '" disabled />' +
								'</div>' +
							'</div>' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
									'<label>Assigned To</label>' +
									'<br />' +
									'<div class="assigned-to-options">' +
										'<input class="form-control" name="tickets[' + cardId + '].assigned_to" value="' + (await this.ticketManager.getTicketAssignedTo(ticket)).name + '" disabled />' +
									'</div>' +
								'</div>' +
								'<div class="form-check">' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="self" ' + (assignedToType === 'self' ? 'checked' : '') + ' disabled>' +
										'Assign to myself' +
									'</label>' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="operator" ' + (assignedToType === 'operator' ? 'checked' : '') + ' disabled>' +
										'Assign to another Operator' +
									'</label>' +
									'<label class="form-check-label">' +
										'<input class="form-check-input no-clear-on-show" type="radio" name="tickets[' + cardId + '].assigned_to_type" value="specialist" ' + (assignedToType === 'specialist' ? 'checked' : '') + ' disabled>' +
										'Assign to Specialist of Problem Type' +
									'</label>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							'<div class="col-md-12">' +
								'<div class="form-group">' +
									'<label>Ticket Description</label>' +
									'<textarea class="form-control" name="tickets[' + cardId + '].description" value="' + ticket.description + '" disabled></textarea>' +
								'</div>' +
								'<div class="row">' +
									'<div class="col-md-12">' +
										'<div class="form-group">' +
											'<label>Problem Type</label>' + 
											'<input class="form-control" value="' + (await problemTypePage.getExpertiseTypeBreadcrum(await (await ticket.expertise_type_staff).expertise_type)) + '" disabled>' +
										'</div>' +
									'</div>' +
								'</div>' +
								'<div class="row">' +
									'<div class="col-md-8">' +
										'<label>Affected Hardware, Software & OS</label>' +
										'<ul class="affected-items"></ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);

		ticketPage.appendAffectedItems($accordion.find('.card[data-cardid="' + cardId + '"] .affected-items'), ticket, cardId);

		$addExistingTicket.find('option[value="' + ticketId + '"]').remove();
		$addExistingTicket.selectpicker('refresh');
	}

	/**
	 * Fill an employees details into a Staff Information
	 * DOM element. Load in relevant employee permissions too.
	 *
	 * @param {DOM Element} $staffInformation
	 * @param {Integer} employeeId representing Employee.id (employee used for viewing)
	 */
	async showStaffInformation($staffInformation, employeeId) {
		let employee  = await this.staffManager.get(employeeId);

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
	async getAssignedToType(ticket) {
		if ((await this.ticketManager.getTicketAssignedTo(ticket)).id === (await this.staffManager.currentUser())) { // if ticket._assigned_to_operator === self
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
	async setSpecialist(expertiseTypeId, $assignedToOptions, bestSpecialist = null) {
		if (bestSpecialist === null || !this.staffManager.hasSpecialism(bestSpecialist, expertiseTypeId)) {
			var bestExpertiseTypeStaff = await staffProblemTypePage.getBestExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId);

			bestSpecialist = bestExpertiseTypeStaff !== null ? await bestExpertiseTypeStaff.staff : null; // null if no specialists found in parents
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
	async search(query) {
		if (query.length >= 2 || (query.length > 0 && query == parseInt(query))) {
			var searchKeys = ['id', 'title'],
				tickets    = await this.ticketManager.search(query, searchKeys);

			super.search(query, tickets, async function(ticket) {
				let ticketStatus = await ticket.status;
				
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