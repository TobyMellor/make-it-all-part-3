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

	// Change the filter/status to the right of the select field
	$('.has-button select').change(function() {
		let $filter    = $(this).closest('.has-button').find('.filter'),
			selected   = $(this).find('option:selected'),
			statusSlug = selected.val(),
			className  = statusSlug.substr(0, statusSlug.indexOf('_')) || statusSlug;

		if ($filter.length === 0) $filter = $(this).closest('.has-button').find('div:last-child').html('hi!');

		$filter.removeClass().addClass('filter').addClass('filter-' + className);
		$filter.html(`
			${selected.text()}
			<i class="fa fa-times"></i>
		`);
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
	setTimeout(function() {
		$('.hasDatepicker').datepicker('setDate', new Date());
	}, 500);
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