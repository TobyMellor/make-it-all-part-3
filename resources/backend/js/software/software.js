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
});

