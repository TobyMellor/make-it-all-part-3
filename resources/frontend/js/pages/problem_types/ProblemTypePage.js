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
	constructor(isPage = false) {
		super();

		// Managers
		this.expertiseTypeManager = new ExpertiseTypeManager();
		this.staffManager         = new StaffManager();
		this.ticketManager        = new TicketManager();

		// True: http://x/problem-type, False: Problem picker appears in a modal etc.
		this.isPage = isPage;
	}

	loadSubExpertiseTypes($typeColumns, $li = null, expertiseTypeId = null) {
		var expertiseType = null;

		if ($li) { // li of current ExpertiseType
			expertiseType = this.expertiseTypeManager.getExpertiseType(expertiseTypeId);
			this.loadExpertiseTypeInfo(expertiseType);

			$li.closest('.form-group').find('span.subtle').text(this.getExpertiseTypeBreadcrum(expertiseType));

			$li.parent().nextAll().remove();
			$li.parent().find('li.active').removeClass('active');
			$li.parent().parent().find('li.last-active').removeClass('last-active');
			$li.addClass('active last-active');
		}

		var children    = [],
			$typeColumn = $('<div class="type-column"></div>');

		if (expertiseTypeId === null) {
			children = this.expertiseTypeManager.getRootExpertiseTypes();
		} else {
			if ($li) {
				children = this.expertiseTypeManager.getExpertiseTypes(expertiseType._children);
			} else {
				let childrenIds = this.expertiseTypeManager.getExpertiseType(expertiseTypeId)._children;
				children = this.expertiseTypeManager.getExpertiseTypes(childrenIds);
			}
		}

		let specialists = this.staffManager.getSpecialists(children.map(child => child.id));

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

		// Append the new .type-column, scroll to the right to view it
		$typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

	loadExpertiseType($typeColumns, expertiseTypeId) {
		let expertiseType      = this.expertiseTypeManager.getExpertiseType(expertiseTypeId),
			expertiseTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

		$typeColumns.empty();

		this.loadSubExpertiseTypes($typeColumns);

		for (let i = expertiseTypeChain.length - 2; i >= -1; i--) {
			problemTypePage.loadSubExpertiseTypes($typeColumns, $typeColumns.find('.type-column li[data-expertise-type-id="' + expertiseTypeChain[i + 1].id + '"]'), expertiseTypeChain[i + 1].id);
		}
	}

	/**
	 * On /problem-types, populate the information in the details
	 * panel on the right with data from a given ExpertiseType
	 *
	 * @param {ExpertiseType} expertiseType 
	 */
	loadExpertiseTypeInfo(expertiseType) {
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
			$navBar.text(this.getExpertiseTypeBreadcrum(expertiseType));
		}

		$expertiseTypeTable.empty();
		$specialistsTable.empty().parent().hide();
		$ticketsTable.empty().parent().hide();

		let expertiseTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

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

		let specialists = this.staffManager.getSpecialists(expertiseType.id);

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

		// Only get tickets if there is a table to put the results in
		if ($ticketsTable.length > 0) {

			// Get tickets to fill related tickets table in single-view
			let tickets = this.ticketManager.getTicketsByExpertiseTypeId(expertiseType.id);
			
			// Only fill tickets table if there are any matching tickets
			if (tickets.length > 0) {
				$ticketsTable.parent().show();
				$noTicketsData.hide();

				for (let i = 0; i < tickets.length; i++) {
					var ticket = tickets[i];

					$ticketsTable.append(
						'<tr data-rowid="' + ticket.id + '">' +
							'<td>' + ticket.id + '</td>' +
							'<td class="truncate">' + ticket.title + '</td>' +
							'<td>' +
								'<span class="filter">' + ticket.status.name + '</span>' +
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
	getExpertiseTypeBreadcrum(expertiseType) {
		var expertiseTypeParent = expertiseType,
			breadcrum           = '';

		while (expertiseTypeParent != null) {
			breadcrum = expertiseTypeParent.name + breadcrum;

			expertiseTypeParent = expertiseTypeParent.parent;

			if (expertiseTypeParent != null) {
				breadcrum = ' / ' + breadcrum;
			}
		}

		return breadcrum;
	}

	/**
	 * Display ExpertiseType's as a table if their name
	 * contains the query string.
	 *
	 * @param {String} query To check if in ExpertiseType.name
	 */
	search(query) {
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
				expertiseTypes = this.expertiseTypeManager.search(query, searchKeys);

			super.search(query, expertiseTypes, async function(expertiseType) {
				return {
					id: expertiseType.id,
					name: expertiseType.name,
					parent: (expertiseType._parent != null ? expertiseType.parent.name : 'n/a')
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
	goto(id) {
		// Show details
		let type = this.expertiseTypeManager.getExpertiseType(id);

		// Simultaneously (asynchronously)…
		// - load the individual expertise type details
		this.loadExpertiseTypeInfo(type);

		// - load the hierarchy for the expertise type
		let typeChain = this.expertiseTypeManager.getExpertiseTypeChain(type);

		while (typeChain.length > 0) {
			let type  = typeChain.pop(),
				$type = $(`[data-expertise-type-id="${type.id}"]`).addClass("active last-active");

			this.loadSubExpertiseTypes($type.parents(".type-columns"), null, type.id);
		}
	}
}
