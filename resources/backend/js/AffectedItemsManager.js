export default class AffectedItemsManager {
	constructor(devices, programs) {
		this.devices  = devices;
		this.programs = programs;

		$('.add-hardware-device, .add-application, .add-operating-system').prop('selectedIndex', 0);

		// populate data for all select fields currently present
		this.populateAllSelectFields($('.accordion-body'));
	}

	/**
	 * Get an affected item with a given .id
	 *
	 * @param {Array} affectedItems array of affected items
	 * @param {Integer} affectedItemId ID of affected item
	 * @return {Object} affected item with given ID, or null if not found
	 */
	getAffectedItem(affectedItems, affectedItemId) {
		return affectedItems.find(affectedItem => affectedItem.id === affectedItemId) || null;
	}

	/**
	 * Populates all different types of select fields
	 * in an accordion body
	 *
	 * @param {DOM} $accordion containing the select fields to populate
	 */
	populateAllSelectFields($accordionBody) {
		// programs contain applications and OS's, lets seperate them
		let applications     = this.programs.filter(program => !program.operating_system),
			operatingSystems = this.programs.filter(program => program.operating_system);

		this.populateSelectField($accordionBody.find('.add-hardware-device'), this.devices, 'serial_no');
		this.populateSelectField($accordionBody.find('.add-application'), applications);
		this.populateSelectField($accordionBody.find('.add-operating-system'), operatingSystems);
	}

	/**
	 * Adds affected items to a given select field
	 *
	 * @param {DOM} $selectField the <select> field to populate
	 * @param {Array} elements Array of Hardware, Software or OS
	 * @param {String} shownProperty .name for OS/SW, .serial_no for HW
	 */
	populateSelectField($selectField, elements, shownProperty = 'name') {
		elements.forEach(element => {
			$selectField.append(`
				<option value="${element.id}">#${element.id} – ${element[shownProperty]}</option>
			`);
		});
	}

	/**
	 * Adds a .affected-item within the div next to the given
	 * select field.
	 * Removes the affected item from the select field
	 *
	 * @param {DOM} $selectField that's changed
	 */
	addAffectedItem($selectField) {
		if (!$selectField.val()) return;

		let $affectedItems   = $selectField.siblings('.affected-items'), // where we should put the new <li>
			affectedItemType = $selectField.hasClass('add-hardware-device') ? 'devices' : 'programs', // is the new li a device, or app/OS?
			affectedItems    = this[affectedItemType], // this.devices or this.programs
			affectedItem     = this.getAffectedItem(affectedItems, Number($selectField.val())); // contains the info we need, e.g. .name, .id

		$affectedItems.append(`
			<li data-id="${affectedItem.id}" data-type="${affectedItemType}">
				<input name="tickets[1].${affectedItemType}[${affectedItem.id}]" value="${affectedItem.id}" type="text" hidden="">
				<h4>${affectedItem.name || affectedItem.type}</h4>
				<p>(${this.getTypeName(affectedItem)})</p>
				<a class="button button-danger remove-affected-item" href="javascript: void(0);">
					<i class="fa fa-${this.getIconName(this.getTypeName(affectedItem))}"></i> Remove
				</a>
			</li>
		`);

		$selectField.prop('selectedIndex', 0);
		$selectField.find('option[value="' + affectedItem.id + '"]').remove();
	}

	/**
	 * Removes the .button and adds the affected item back
	 * to the select field
	 *
	 * @param {DOM} $button clicked button within .affected-item
	 */
	removeAffectedItem($button) {
		let $affectedItem    = $button.parent(), // .affected-item
			affectedItemType = $affectedItem.data('type'), // devices or programs
			affectedItem     = this.getAffectedItem(this[affectedItemType], Number($affectedItem.data('id'))), // contains the info we need, e.g. .name, .id
			shownProperty    = affectedItemType === 'devices' ? 'serial_no' : 'name'; // what is shown in the select options

		$affectedItem.fadeOut(250, function() {
			// add to select field
			$affectedItem
				.parent() // .affected-items
				.siblings('select') // select field to populate
				.find('option:first-child') // insert after the default disabled option
				.after(`
					<option value="${affectedItem.id}">#${affectedItem.id} – ${affectedItem[shownProperty]}</option>
				`);

			// remove .affected-item
			$(this).remove();
		});
	}

	/**
	 * Determines what a given affected item is
	 *
	 * @param {Object} affectedItem  
	 * @return {String} 'Hardware' || 'Software' || 'Operating System'
	 */
	getTypeName(affectedItem) {
		if (!affectedItem.hasOwnProperty('operating_system')) {
			return 'Hardware';
		} else if (!affectedItem.operating_system) {
			return 'Software';
		}

		return 'Operating System';
	}

	/**
	 * Determines what font awesome icon we should use
	 *
	 * @param {String} typeName 'Hardware' || 'Software' || 'Operating System' 
	 * @return {String} font awesome icon 'laptop' || 'file-code-o' || 'Terminal'
	 */
	getIconName(typeName) {
		if (typeName === 'Hardware') {
			return 'laptop';
		} else if (typeName === 'Software') {
			return 'file-code-o';
		}

		return 'Terminal';
	}
}

