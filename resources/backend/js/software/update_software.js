$(() => {
	let $heading   = $('.mia-panel-heading'),
		$select    = $heading.find('select'),
		$accordion = $('.accordion-body');

	licenceListeners($accordion);
	
	$('#change-software').change(function() {
		let softwareID = $(this).val();

		window.location.href = window.location.pathname + '?page=software_update&id=' + softwareID;
	});
	
	softwares.forEach((item) => {
		let type = item.operating_system == "1" ? "Operating System" : "Application";
		
		$select.append(`<option value="${item.id}">#${item.id} – ${item.name} (` + type + `)</option>`);
	});
	
	$('#change-software').val(software ? software.id : 0);
	$('input[name="software[id]"]').val(software ? software.id : 0);
	$('input[name="software[name]"]').val(software ? software.name : "");
	
	let date = (software ? software.expiry_date : "");
	
	if (date === "0000-00-00 00:00:00") {
		// no licence
		$('.software-date-section').css({ display: 'none' });
		$('.software-no-date').css({ display: 'flex' });
	}
	
	$('.mia-picker input').datepicker('setDate', new Date(date));
	$('select[name="software[type]"]').val(software ? software.operating_system : "");
	
	$(document).on('keyup', '.accordions .accordion-body input[name*="name"]', function() {
		let $accordionBody   = $(this).closest('.accordion-body'),
			$accordionHeader = $accordionBody.prev(),
			$headerText      = $accordionHeader.find('.accordion-title'),
			$typeSelect      = $accordionBody.find('select[name*="type"]'),
			type             = '';

		if ($typeSelect.val()) {
			type += $typeSelect.find('option:selected').text();
		} else {
			type += 'Software';
		}

		$headerText.text(type + ($(this).val().length <= 2 ? '' : ': ' + $(this).val()));
	});
});

function licenceListeners($accordion) {
	let $remove = $accordion.find('.software-rml'),
		$add    = $accordion.find('.software-addl'); 

	$remove.click(function(){
		// button is on licence panel, remove this panel and make the closes no date visible.
		$accordion.find('.software-date-section').css({ display: 'none' });
		$accordion.find('.software-no-date').css({ display: 'flex' });
		
		// set the date to null/ empty string.
		setDate($accordion.find('.mia-picker input'), true);
	});

	$add.click(function(){
		// remove this panel, make date visible.
		$accordion.find('.software-no-date').css({ display: 'none' });
		$accordion.find('.software-date-section').css({ display: 'flex' });

		setDate($accordion.find('.mia-picker input'));
	});
}

function setDate(dateInput, date) {
	if (date) {
		dateInput.datepicker('setDate', '');
	} else {
		dateInput.datepicker('setDate', new Date((software ? software.expiry_date : "")));	
	}
}