$(() => {

	$('form').submit(function(e) {
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});
	
	$(document).on('keyup', '.accordions .accordion-body input[name*="serial"]', function() {
		let $headerText    = $(this).closest('.accordion-body').prev().find('.accordion-title'),
			newHeaderText  = $(this).val().length <= 2 ? 'Hardware' : 'Hardware: ' + $(this).val();

		$headerText.text(newHeaderText);
	});
	
	
	
});