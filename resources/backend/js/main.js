$(() => {
	/**
	 * Event Listeners
	 */

	// Forward click on button to hidden input with datetimepicker
	$('.mia-picker').click(function(e) {
		$('.mia-picker input').datepicker('show');
	});

	// Update the visual date/time when they finish with the datetimepicker
	$('.mia-picker input').change(function() {
		let date            = new Date($(this).val()),
			$spans          = $(this).closest('.mia-field-group').find('.date-time-picker span');

		setDateDisplay($spans, date);
	});

	// Remove filter/status, clear the select field
	$(document).on('click', '.filter', function() {
		$(this).closest('.has-button').find('select').prop('selectedIndex', 0);

		$(this).fadeOut(250, function() {
			$(this).remove();
		});
	});

	/**
	 * Initializations
	 */

	$('.mia-picker input').datetimepicker({
		controlType: 'slider'
	});

	// Set current date
	$('.mia-picker input').datepicker('setDate', new Date());
});

function setDateDisplay($spans, date) {
	let setDigit = ($span, digit) => $span.text(('0' + digit).slice(-2));

	setDigit($spans.eq(0), date.getDay());
	setDigit($spans.eq(2), date.getMonth());
	setDigit($spans.eq(4), date.getFullYear().toString());

	setDigit($spans.eq(6), date.getHours());
	setDigit($spans.eq(8), date.getMinutes());
	setDigit($spans.eq(10), date.getSeconds());
}