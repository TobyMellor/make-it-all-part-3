$(() => {
	let $heading = $('.mia-panel-heading'),
		$select  = $heading.find('select'),
		$img     = $heading.find('img');
		
	tickets.forEach((ticket) => {
		$select.append(`
			<option value="${ticket.id}">#${ticket.id} – ${ticket.title}</option>
		`);
	});

	$('#change-ticket option[value="' + (!ticket ? "" : ticket.id) + '"]').prop('selected', true);
	
	$('#change-ticket').change(function() {
		let ticketId = $(this).val();

		window.location.href = window.location.pathname + '?page=ticket_update&id=' + ticketId;
	});

	if (!ticket) {
		sessionStorage.setItem('shouldShowArrow', true); return;
	}

	// arrow functionality, don't show the arrow if they accessed the page directly
	if (sessionStorage.getItem('shouldShowArrow')) {
		sessionStorage.removeItem('shouldShowArrow');

		$img.css('opacity', 0.1);
		setTimeout(() => $img.css('width', 0), 2500);
	} else {
		$img.hide();
	}

	$('input[name="ticket[id]"]').val(ticket.id);

	$('.number-circle').text(ticket.id);
	$('.accordion-title').text('Ticket: ' + ticket.title);

	$('select[name="ticket[status]"] option[value="' + ticket.status_id + '"]').prop('selected', true).trigger('change');
	$('input[name="ticket[title]"]').val(ticket.title);
	$('textarea[name="ticket[description]"]').val(ticket.description);

	tinyMCE.init({
		selector: 'textarea',
		branding: false,
		setup: function (editor) {
			editor.on('change', function () {
				editor.save(); // keep hidden textarea up to date
			});
		}
	});

	expertiseTypeManager.loadExpertiseType($('.type-columns'), ticket.expertise_type_id);
	$('input[name*="expertise_type_id"]').val(ticket.expertise_type_id);
	$('input[name*="assigned_to_specialist"]').val(ticket.assigned_to_specialist_id);

	if (ticket.assigned_to_operator_id === null) {
		$('input[name="ticket[assigned_to_type]"][value="specialist"]').click();
	} else if (ticket.assigned_to_operator_id == staffManager.currentEmployee.id) {
		$('input[name="ticket[assigned_to_type]"][value="self"]').click();
	} else {
		$('input[name="ticket[assigned_to_type]"][value="operator"]').click();
		$('select[name="ticket[assigned_to_operator]"] option[value="' + ticket.assigned_to_operator_id + '"]').click();
	}

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