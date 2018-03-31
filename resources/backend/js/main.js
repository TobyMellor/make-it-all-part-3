$(() => {
	$('.mit-picker input').datetimepicker({
		controlType: 'slider'
	});

	// Forward click on button to hidden input with datetimepicker
	$('.mit-picker').click(function(e) {
		$('.mit-picker input').datepicker('show');
	});

	$('.mit-picker input').change(function() {
		let date            = new Date($(this).val()),
			$spans          = $(this).closest('.mit-field-group').find('.date-time-picker span');

		setDigit($spans.eq(0), date.getDay());
		setDigit($spans.eq(2), date.getMonth());
		setDigit($spans.eq(4), date.getFullYear().toString());

		setDigit($spans.eq(6), date.getHours());
		setDigit($spans.eq(8), date.getMinutes());
		setDigit($spans.eq(10), date.getSeconds());
	});
});

function setDigit($span, digit) {
	$span.text(("0" + digit).slice(-2));
}