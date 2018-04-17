$(() => {
	if (!window.ticket) return;

	$('.breadcrumb').html(expertiseTypeManager.getExpertiseTypeBreadcrumb(ticket.expertise_type_id));

	if (ticket.assigned_to_operator_id === null) {
		$('input[name="ticket[assigned_to_type]"][value="specialist"]').click();
	} else if (ticket.assigned_to_operator_id == staffManager.currentEmployee.id) {
		$('input[name="ticket[assigned_to_type]"][value="self"]').click();
	} else {
		$('input[name="ticket[assigned_to_type]"][value="operator"]').click();
		$('select[name="ticket[assigned_to_operator]"] option[value="' + ticket.assigned_to_operator_id + '"]').click();
	}

	// override the addAffectedItem function in AffectedItemsManager
	// purpose of this is to add a view button instead of a remove button (and remove unused functionality)
	affectedItemsManager.addAffectedItem = (function($selectField) {
		let $affectedItems   = $selectField.siblings('.affected-items'), // where we should put the new <li>
			affectedItemType = $selectField.hasClass('add-hardware-device') ? 'devices' : 'programs', // is the new li a device, or app/OS?
			affectedItems    = this[affectedItemType], // this.devices or this.programs
			affectedItem     = this.getAffectedItem(affectedItems, Number($selectField.val())); // contains the info we need, e.g. .name, .id;

		$affectedItems.append(`
			<li>
				<h4>${affectedItem.name || affectedItem.type}</h4>
				<p>(${this.getTypeName(affectedItem)})</p>
				<a class="button button-primary" href="javascript: void(0);">
					<i class="fa fa-search"></i> View
				</a>
			</li>
		`);

		$selectField.parent().find('.no-affected-items').hide();
	});

	let $addHardwareDevice  = $('.add-hardware-device'),
		$addSoftwareProgram = $('.add-application, .add-operating-system');

	ticket.devices.forEach((deviceId) => {
		$addHardwareDevice.find('option[value="' + deviceId + '"]').prop('selected', true);
		affectedItemsManager.addAffectedItem($addHardwareDevice);
	});

	ticket.programs.forEach((programId) => {
		// this will only return the select field that was changed
		// e.g. if it's an OS ID, no option exists within the applications select
		let $select = $addSoftwareProgram
						.find('option[value="' + programId + '"]')
						.prop('selected', true)
						.parent();

		affectedItemsManager.addAffectedItem($select);
	});
});