$(() => {
	
	let $heading = $('.mia-panel-heading'),
		$select = $heading.find('select');
	
	$('#change-software').change(function () {
		let softwareID = $(this).val();

		window.location.href = window.location.pathname + '?page=software_update&id=' + softwareID;

	});
	
	softwares.forEach((item) => {
		$select.append(`
			<option value="${item.id}">#${item.id} – ${item.name}</option>
		`);
	});
	
	$('input[name="software[id]"]').val(software ? software.id : "");
	$('input[name="software[name]"]').val(software ? software.name : "");
	$('.mia-picker input').datepicker('setDate', new Date((software ? software.expiry_date : "")));
	$('select[name="software[type]"]').val(software ? software.operating_system : "");

	
	
	
	
});