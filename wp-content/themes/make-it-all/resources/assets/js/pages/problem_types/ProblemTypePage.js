import DynamicPage from "../DynamicPage";
import ExpertiseTypeManager from "./ExpertiseTypeManager";
import StaffManager from "../staff/StaffManager";
import TicketManager from "../tickets/TicketManager";

/**
 * ExpertiseTypePage
 *
 * Manipulates the problems page with jQuery using data from
 * the ExpertiseTypeManager.
 */
export default class ExpertiseTypePage extends DynamicPage {
	constructor(allowExpertiseTypeCreation = false, isPage = false) {
		super();

		// Managers
		this.expertiseTypeManager = new ExpertiseTypeManager();
		this.staffManager         = new StaffManager();
		this.ticketManager        = new TicketManager();

		// whether a create field appears at the bottom of .type-columns (does not appear on staff pages)
		this.allowExpertiseTypeCreation = allowExpertiseTypeCreation;

		// True: http://x/problem-type, False: Problem picker appears in a modal etc.
		this.isPage = isPage;
	}

	async loadSubExpertiseTypes($typeColumns, $li = null, expertiseTypeId = null) {
		var expertiseType = null;

		if ($li) { // li of current ExpertiseType
			expertiseType = await this.expertiseTypeManager.getExpertiseType(expertiseTypeId);
			this.loadExpertiseTypeInfo(expertiseType);

			(async() => $li.closest('.form-group').find('span.subtle').text(await this.getExpertiseTypeBreadcrum(expertiseType)))();

			$li.parent().nextAll().remove();
			$li.parent().find('li.active').removeClass('active');
			$li.parent().parent().find('li.last-active').removeClass('last-active');
			$li.addClass('active last-active');

			if (this.allowExpertiseTypeCreation) {
				$typeColumns.find('.type-column').find('.input-group').remove(); // remove Input Field created on previous click
			} else if ($li.hasClass('no-children')) {
				return;
			}
		}

		var children    = [],
			$typeColumn = $('<div class="type-column"></div>');

		if (expertiseTypeId === null) {
			children = await this.expertiseTypeManager.getRootExpertiseTypes();
		} else {
			if ($li) {
				children = await this.expertiseTypeManager.getExpertiseTypes(expertiseType._children);
			} else {
				let childrenIds = (await this.expertiseTypeManager.getExpertiseType(expertiseTypeId))._children;
				children = await this.expertiseTypeManager.getExpertiseTypes(childrenIds);
			}
		}

		let specialists = await this.staffManager.getSpecialists(children.map(child => child.id));

		children.forEach((child, i) => {
			$typeColumn.append(
				'<li ' + (child._children.length === 0 ? 'class="no-children"' : '') + ' data-expertise-type-id="' + child.id + '">' +
					child.name +
					'<div class="specialist-counter">' +
						(specialists[i].length > 0 ? specialists[i].length + ' <i class="fa fa-user"></i>' : '<i class="fa fa-user-times"></i>') +
					'</div>' +
					'<i class="fa fa-caret-right"></i>' +
				'</li>'
			);
		});

		if (this.allowExpertiseTypeCreation) {
			// Create Expertise Type input field, to appear at bottom of 1+ .type-column
			var input = 
				'<div class="input-group">' +
					'<input type="text" class="form-control" placeholder="Problem type name…">' +
						'<span class="input-group-btn">' +
						'<button class="btn btn-success btn-sm create-problem-type" type="button">' +
							'<i class="fa fa-plus"></i>' +
						'</button>' +
					'</span>' +
				'</div>';

			if ($li) { // append to bottom of current li
				$li.parent().append(input);
			}

			$typeColumn.append(input);
		}

		// Append the new .type-column, scroll to the right to view it
		$typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

	async loadExpertiseType($typeColumns, expertiseTypeId) {
		let expertiseType      = await this.expertiseTypeManager.getExpertiseType(expertiseTypeId),
			expertiseTypeChain = await this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

		$typeColumns.empty();

		this.loadSubExpertiseTypes($typeColumns).then(async function() {
			for (let i = expertiseTypeChain.length - 2; i >= -1; i--) {
				await problemTypePage.loadSubExpertiseTypes($typeColumns, $typeColumns.find('.type-column li[data-expertise-type-id="' + expertiseTypeChain[i + 1].id + '"]'), expertiseTypeChain[i + 1].id);
			}
		});
	}

	/**
	 * On /problem-types, populate the information in the details
	 * panel on the right with data from a given ExpertiseType
	 *
	 * @param {ExpertiseType} expertiseType 
	 */
	async loadExpertiseTypeInfo(expertiseType) {
		var $singleView 	    = $(this.detailSelector),
			$navBar             = $singleView.find('.top-nav h4'),
			$splashScreen       = $singleView.find('.splash-screen'),
			$expertiseTypeView  = $singleView.find('#problem-type-view'),
			$expertiseTypeTable = $singleView.find('#problem-types-table tbody'),
			$specialistsTable   = $singleView.find('#specialists-table tbody'),
			$ticketsTable       = $singleView.find('#tickets-table tbody'),
			$noSpecialistsData  = $singleView.find('#no-specialists-data'),
			$noTicketsData      = $singleView.find('#no-tickets-data');

		$splashScreen.addClass('block-hidden');
		$expertiseTypeView.addClass('block-hidden');

		if (this.isPage) {
			(async() => $navBar.text(await this.getExpertiseTypeBreadcrum(expertiseType)))();
		}

		$expertiseTypeTable.empty();
		$specialistsTable.empty().parent().hide();
		$ticketsTable.empty().parent().hide();

		let expertiseTypeChain = await this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

		// Should probably move these to DynamicPage
		for (let i = 0; i < expertiseTypeChain.length; i++) {
			let expertiseType = expertiseTypeChain[i];

			$expertiseTypeTable.prepend(
				'<tr ' + (i === 0 ? 'class="highlight"' : '') + ' data-rowid="' + expertiseType.id + '">' +
					'<td>' + expertiseType.id + '</td>' +
					'<td>' + expertiseType.name + '</td>' +
					'<td>' + (expertiseType._parent !== null ? expertiseTypeChain[i + 1].name : 'N/A') + '</td>' +
					'<td>' +
						'<i class="fa fa-eye"></i>' +
					'</td>' +
				'</tr>'
			);
		}

		$expertiseTypeView.removeClass('block-hidden');

		this.staffManager.getSpecialists(expertiseType.id).then(specialists => {
			if (specialists.length > 0) {
				$specialistsTable.parent().show();
				$noSpecialistsData.hide();

				for (let i = 0; i < specialists.length; i++) {
					var specialist = specialists[i];

					$specialistsTable.append(
						'<tr ' + (specialist.id === this.staffManager.currentUser() ? 'class="highlight"' : '') + ' data-rowid="' + specialist.id + '">' +
							'<td>' + specialist.id + '</td>' +
							'<td>' + specialist.name + '</td>' +
							'<td>' + specialist.job + '</td>' +
							'<td>' + specialist.phone + '</td>' +
							'<td>' +
								'<i class="fa fa-eye"></i>' +
							'</td>' +
						'</tr>'
					);
				}
			} else {
				$specialistsTable.parent().hide();
				$noSpecialistsData.show();
			}
		});

		// Only get tickets if there is a table to put the results in
		if ($ticketsTable.length > 0) {

			// Get tickets to fill related tickets table in single-view
			this.ticketManager.getTicketsByExpertiseTypeId(expertiseType.id).then(tickets => (async() => {

				// Only fill tickets table if there are any matching tickets
				if (tickets.length > 0) {
					$ticketsTable.parent().show();
					$noTicketsData.hide();

					for (let i = 0; i < tickets.length; i++) {
						var ticket       = tickets[i],
							ticketStatus = await ticket.status;

						$ticketsTable.append(
							'<tr data-rowid="' + ticket.id + '">' +
								'<td>' + ticket.id + '</td>' +
								'<td class="truncate">' + ticket.title + '</td>' +
								'<td>' +
									'<span class="filter">' + ticketStatus.name + '</span>' +
								'</td>' +
								'<td class="truncate">' + ticket.created_at + '</td>' +
								'<td>' +
									'<i class="fa fa-eye"></i>' +
								'</td>' +
							'</tr>'
						);
					}
				} else {
					// Otherwise show a message instead of the table
					$ticketsTable.parent().hide();
					$noTicketsData.show();
				}
			})());
		}
	}

	/**
	 * Display the names of an ExpertiseType, and its parents,
	 * in ordered fashion.
	 *
	 * e.g. "Electronics / Printer / Printer Ink / Cyan Ink"
	 *
	 * @param {ExpertiseType} 
	 * @return {String} Breadcrum of ExpertiseType.name's, from the root to a ExpertiseType 
	 */
	async getExpertiseTypeBreadcrum(expertiseType) {
		var expertiseTypeParent = expertiseType,
			breadcrum           = '';

		while (expertiseTypeParent != null) {
			breadcrum = expertiseTypeParent.name + breadcrum;

			expertiseTypeParent = await expertiseTypeParent.parent;

			if (expertiseTypeParent != null) {
				breadcrum = ' / ' + breadcrum;
			}
		}

		return breadcrum;
	}

	/**
	 * Create an expertise type in the database,
	 * and render it in the correct place under it's parent
	 *
	 * @param {String} name ExpertiseType.name 
	 * @param {Integer} parentExpertiseTypeId ExpertiseType._parent 
	 * @return {ExpertiseType} the created ExpertiseType
	 */
	async createExpertiseType(name, parentExpertiseTypeId) {
		return this.expertiseTypeManager.createExpertiseType(name, parentExpertiseTypeId).then(expertiseType => {
			let $newItem = $(`
					<li class="no-children" data-expertise-type-id="${expertiseType.id}">
						${expertiseType.name}
						<div class="specialist-counter"><i class="fa fa-user-times"></i></div>
						<i class="fa fa-caret-right"></i>
					</li>
				`),
				$typeColumns = $('.type-columns'),
				$newItemHomeColumn; // where the $newItem should be placed

			if (parentExpertiseTypeId !== null) { // find type column under parent
				$newItemHomeColumn = $typeColumns.find(`[data-expertise-type-id="${parentExpertiseTypeId}"]`)
					.parents(".type-column")
					.next()
			} else { // root element, find first type column
				$newItemHomeColumn = $typeColumns
					.children()
					.first();
			}

			// append at bottom of .type-column
			$newItemHomeColumn
				.find(".input-group")
				.before($newItem);

			$newItem.click();
		});
	}

	/**
	 * Delete an ExpertiseType by ID
	 *
	 * @param {Integer} id representing ExpertiseType.id 
	 * @return null
	 */
	delete(id) {
		return this.expertiseTypeManager.deleteExpertiseType(id)
			.fail(response => {
				if (response.responseJSON["message"].startsWith("SQLSTATE")) {
					DynamicPage.showNotification(
						"Cannot remove type which already has data associated with it. " +
						"Remove existing data first, then try again.",
						"danger",
						10
					);
				}
			});
	}

	/**
	 * Display ExpertiseType's as a table if their name
	 * contains the query string.
	 *
	 * @param {String} query To check if in ExpertiseType.name
	 */
	async search(query) {
		var $expertiseTypePicker = $('.problem-type-picker'),
			$tableSection        = $(this.tableSelector);

		// If search value hasn't changed, ignore
		let prevQuery = $(".main-content-title").val();

		if (query.length > 0 &&
				query === prevQuery.substring(prevQuery.lastIndexOf("‘")+1,prevQuery.lastIndexOf("’")))
			return;

		$(this.sectionSelector).find('.splash-screen').addClass('block-hidden');

		if (query.length >= 2 || (query.length > 0 && query == parseInt(query))) {
			$expertiseTypePicker.hide();
			$tableSection.show();

			var searchKeys     = ['name'], // only search on this property
				expertiseTypes = await this.expertiseTypeManager.search(query, searchKeys);

			super.search(query, expertiseTypes, async function(expertiseType) {
				return {
					id: expertiseType.id,
					name: expertiseType.name,
					parent: (expertiseType._parent != null ? (await expertiseType.parent).name : 'n/a')
				}; // format of results table
			}, searchKeys);
		} else {
			// Hide table, restore back to normal
			$(this.sectionSelector).find('.top-nav h4').text('Problem Types');
			$expertiseTypePicker.show();
			$tableSection.hide();
		}
	}

	/**
	 * Show and highlight a ExpertiseType by ID
	 *
	 * @param {Integer} id representing ExpertiseType.id
	 */
	async goto(id) {
		// Show details
		let type = await this.expertiseTypeManager.getExpertiseType(id);

		// Simultaneously (asynchronously)…
		// - load the individual expertise type details
		this.loadExpertiseTypeInfo(type);

		// - load the hierarchy for the expertise type
		let typeChain = (await this.expertiseTypeManager.getExpertiseTypeChain(type));

		while (typeChain.length > 0) {
			let type  = typeChain.pop(),
				$type = $(`[data-expertise-type-id="${type.id}"]`).addClass("active last-active");

			await this.loadSubExpertiseTypes($type.parents(".type-columns"), null, type.id);
		}
	}
}
