$(() => {
	if (software) {
		let $heading   = $('.mia-panel-heading'),
			$select    = $heading.find('select'),
			$accordion = $('.accordion-body');
		
		$('input[name="software[name]"]').val(software ? software.name : "");

		let date = (software ? software.expiry_date : "");
		
		if (date === "0000-00-00 00:00:00") {
			// no licence
			$('.software-date-section').css({display : 'none'});
			$('.software-no-date').css({display : 'flex'});
		}

		$('.mia-picker input').datepicker('setDate', new Date(date));
		$('select[name="software[type]"]').val(software ? software.operating_system : "");
	}
	
    $('form').submit(function(e) {
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});

    // if the user changes the Software Type, fake a keypress in the name field to update the accordion header
	$(document).on('change', 'select[name*="type"]', function() {
		$(this).closest('.accordion-body').find('input[name*="name"]').trigger('keyup');
	});
});

