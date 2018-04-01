export default class AffectedItemsManager {
	constructor(devices, programs) {
		this.devices  = devices;
		this.programs = programs;

		// programs contain applications and OS's, lets seperate them
		let applications     = programs.filter(program => !program.operating_system),
			operatingSystems = programs.filter(program => program.operating_system);

		$('.add-hardware-device, .add-application, .add-operating-system').prop('selectedIndex', 0);

		// populate data for all select fields currently present
		this.populateSelectField($('.add-hardware-device'), devices, 'serial_no');
		this.populateSelectField($('.add-application'), applications);
		this.populateSelectField($('.add-operating-system'), operatingSystems);
	}

	getAffectedItem(affectedItems, affectedItemId) {
		return affectedItems.find(affectedItem => affectedItem.id === affectedItemId) || null;
	}

	populateSelectField($selectField, elements, shownProperty = 'name') {
		elements.forEach((element, i) => {
			$selectField.append(`
				<option value="${element.id}">#${element.id} – ${element[shownProperty]}</option>
			`);
		});
	}

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

	getTypeName(affectedItem) {
		if (!affectedItem.hasOwnProperty('operating_system')) {
			return 'Hardware';
		} else if (!affectedItem.operating_system) {
			return 'Software';
		}

		return 'Operating System';
	}

	getIconName(typeName) {
		if (typeName === 'Hardware') {
			return 'laptop';
		} else if (typeName === 'Software') {
			return 'file-code-o';
		}

		return 'Terminal';
	}
}

