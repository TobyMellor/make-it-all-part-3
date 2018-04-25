$(() => {
	
	let $heading = $('.mia-panel-heading'),
		$select = $heading.find('select'),
		$accordion = $('.accordion-body');
	licenceListeners($accordion);
	
	
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
	
	var date = (software ? software.expiry_date : "");
	
	if(date === "0000-00-00 00:00:00"){
		//No licence
		$('.software-date-section').css({display : 'none'});
		$('.software-no-date').css({display : 'flex'});
		
	}
	
	
	$('.mia-picker input').datepicker('setDate', new Date(date));
	$('select[name="software[type]"]').val(software ? software.operating_system : "");

	
	
	
	
});
function licenceListeners($accordion){
	let remove = $accordion.find('.software-rml');
	let add = $accordion.find('.software-addl'); 
	remove.click(function(){
		console.log("remove clicked");
	//Button is on licence panel, remove this panel and make the closes no date visible.
		$accordion.find('.software-date-section').css({display : 'none'});
		$accordion.find('.software-no-date').css({display : 'flex'});
	//Set the date to null/ empty string.
		setDate($accordion.find('.mia-picker input'), true);
	
	});
	add.click(function(){
	//Remove this panel, make date visible.
		$accordion.find('.software-no-date').css({display : 'none'});
		$accordion.find('.software-date-section').css({display : 'flex'});
		setDate($accordion.find('.mia-picker input'));
	});
}
function setDate(dateInput, date){
	if(date){
		dateInput.datepicker('setDate', '');
	} else {
		dateInput.datepicker('setDate', new Date((software ? software.expiry_date : "")));	
	}
	
}