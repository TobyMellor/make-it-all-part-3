$(() => {
	let $heading = $('.mia-panel-heading'),
		$select  = $heading.find('select'),
		$img     = $heading.find('img');
		
	departments.forEach((department) => {
		$select.append(`
			<option value="${department.id}">#${department.id} – ${department.name}</option>
		`);
	});

	$('#change-department option[value="' + (!department ? "" : department.id) + '"]').prop('selected', true);
	
	$('#change-department').change(function() {
		let departmentId = $(this).val();

		window.location.href = window.location.pathname + '?page=department_update&id=' + departmentId;
	});

	if (!department) {
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

	$('input[name="department[id]"]').val(department.id);

	$('.number-circle').text(department.id);
	$('.accordion-title').text('Department: ' + department.name);

	$('input[name="department[name]"]').val(department.name);
	$('input[name="department[phone_number]"]').val(department.phone_number);
});