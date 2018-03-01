import ExpertiseTypeManager from "../problem_types/ExpertiseTypeManager";
import StaffManager from "./StaffManager";
import TicketManager from "../tickets/TicketManager";

/**
 * StaffExpertiseTypePage
 *
 * Includes specialist allocations on top of ExpertiseTypePage
 */
export default class StaffExpertiseTypePage {
	constructor() {
		// Managers
		this.expertiseTypeManager = new ExpertiseTypeManager();
		this.staffManager = new StaffManager();
		this.ticketManager = new TicketManager();

		this.currentSpecialisms = [];
	}

	async loadSpecialistExpertiseTypes($typeColumns, $li = null, expertiseTypeId = null) {
		var expertiseType = null;
		
		if ($li) {
			expertiseType = await this.expertiseTypeManager.getExpertiseType(expertiseTypeId);

			$li.parent().nextAll().remove();
			$li.parent().find('li.active').removeClass('active');
			$li.parent().parent().find('li.last-active').removeClass('last-active');
			$li.addClass('active last-active');

			if ($li.hasClass('no-children')) {
				return;
			}
		} else {
			$typeColumns.empty();
		}

		var children    = [],
			$typeColumn = $('<div class="type-column"></div>');

		if (expertiseTypeId === null) {
			children = await this.expertiseTypeManager.getRootExpertiseTypes();
		} else {
			children = await this.expertiseTypeManager.getExpertiseTypes(expertiseType._children);
		}

		for (var i = 0; i < children.length; i++) {
			var child = children[i];

			$typeColumn.append(
				'<li ' + (child._children.length === 0 ? 'class="no-children"' : '') + ' data-expertise-type-id="' + child.id + '">' +
					children[i].name +
					'<div class="specialism-checkbox pull-right">' +
						(this.currentSpecialisms.indexOf(child.id) > -1 ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>') +
					'</div>' +
				'</li>'
			);
		}

		$typeColumns.append($typeColumn);
		$typeColumns.scrollLeft($typeColumns.width());
	}

	async toggleSpecialism($specialismCheckbox) {
		let clickedSpecialismId       = Number($specialismCheckbox.parent().data('expertiseTypeId')),
			currentSpecialismsIndexOf = this.currentSpecialisms.indexOf(clickedSpecialismId),
			$icon                     = $specialismCheckbox.find('i');

		// Quickly guess and set icon for responsive UI
		$icon.hasClass("fa-check") ? $icon.removeClass("fa-check") : $icon.addClass("fa-check");

		let	children = await (await this.expertiseTypeManager.getExpertiseType(clickedSpecialismId)).children;

		if (currentSpecialismsIndexOf > -1) {
			this.currentSpecialisms.splice(currentSpecialismsIndexOf, 1);
			$icon.removeClass('fa-check').addClass('fa-times');

			if (this.shouldRemoveChildSpecialisms(children)) {
				this.toggleChildren(children, false);
			}
		} else {
			this.currentSpecialisms.push(clickedSpecialismId);
			$icon.removeClass('fa-times').addClass('fa-check');

			this.toggleChildren(children, true);
		}
	}

	toggleChildren(children, status = false) {
		children.forEach(async child => {
			if (status) {
				if (this.currentSpecialisms.indexOf(child.id) === -1) {
					this.currentSpecialisms.push(child.id);
				}
			} else {
				var indexOf = this.currentSpecialisms.indexOf(child.id);

				if (indexOf > -1) {
					this.currentSpecialisms.splice(indexOf, 1);
				}
			}

			// Recursively iterate all children
			let children = await child.children;
			if (children) {
				this.toggleChildren(children, status);
			}
		});
	}

	/*
	 * We should only mess with children if they
	 * all have the same status
	 */
	shouldRemoveChildSpecialisms(children) {
		for (var i = 0; i < children.length; i++) {
			var child = children[i];

			if (this.currentSpecialisms.indexOf(child.id) === -1) {
				return false;
			}

			if (!this.shouldRemoveChildSpecialisms(child.children)) {
				return false;
			}
		}

		return true;
	}

	async getBestExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId) {
		var expertiseType = await this.expertiseTypeManager.getExpertiseType(expertiseTypeId),
			specialists   = await this.staffManager.getSpecialists(expertiseTypeId);

		if (specialists.length > 0) {
			var bestSpecialist = null,
				bestCount      = null,
				openTickets    = await this.ticketManager.getTicketsWithSlugIn(['new', 'pending_in_progress', 'pending_awaiting_staff']);

			for (let i = 0; i < specialists.length; i++) {
				var specialist      = specialists[i],
					assignedToCount = 0;

				for (let j = 0; j < openTickets.length; j++) {
					if (openTickets[j]._assigned_to === specialist.id) {
						assignedToCount++;
					}
				}

				if (bestSpecialist === null || assignedToCount < bestCount) {
					bestSpecialist = specialist;
					bestCount      = assignedToCount;
					continue;
				}
			}

			return (await this.expertiseTypeManager.getExpertiseTypeStaffByStaffId(expertiseTypeId, bestSpecialist.id));
		}

		if (expertiseType._parent !== null) {
			return this.getBestExpertiseTypeStaffByExpertiseTypeId(expertiseType._parent);
		}

		return null;
	}
}
