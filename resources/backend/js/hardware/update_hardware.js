import HardwareManager from "../HardwareManager";

$(() => {
	let hardwaremanager = new HardwareManager(devices, types, makes);

	$(document).ready(function() {
		addButtonListeners(this, (device ? device.type : ""), (device ? device.make : ""));
		addTypeSelectActions($('.hardware-type-select'), (device ? true : false));
		addMakeSelectActions($('.hardware-make-select'));
	});

	let $heading = $('.mia-panel-heading'),
		$select  = $heading.find('select'),
		$img     = $heading.find('img');

	devices.forEach((device) => {
		$select.append(`
			<option value="${device.id}">#${device.id} – ${device.serial_no}</option>
		`);
	});

	
	$('input[name="hardware[id]"]').val(device ? device['id'] : "");
	if(device.id){
		$('#change-hardware').val(device ? device.id : "");	
	}
	$('#change-hardware option[value="' + (device ? device.id : "") + '"]').prop('selected', true);
	
	$('.hardware-make-select option[value="' + (device ? device.make : "") + '"]').prop('selected', true);
	$('.hardware-serial').val((device ? device.serial_no : ""));

	$('#change-hardware').change(function() {
		let hardwareID = $(this).val();

		window.location.href = window.location.pathname + '?page=hardware_update&id=' + hardwareID;
	});

	$(document).on('keyup', '.accordions .accordion-body input[name*="serial"]', function() {
		let $headerText    = $(this).closest('.accordion-body').prev().find('.accordion-title'),
			newHeaderText  = $(this).val().length <= 2 ? 'Hardware Device' : 'Hardware Device: ' + $(this).val();

		$headerText.text(newHeaderText);
	});

	function hideForm(form, selector) {
		if (form.hasClass('expanded')) {
			// if form is expanded, shrink it.
			form.removeClass('expanded');
			var newType = form.find('input').val();

			if (newType !== "") {
				// get selector and add append
				selector.append($('<option>', {
					value: newType,
					text: newType
				}));
				selector.val(newType);
			}

			// if form input has text in it, add text to selector, select it and shrink
			return true;
		}

		return false;
	}

	function addButtonListeners($accordian) {
		let types = $($accordian).find('.add-type'),
			makes = $($accordian).find('.add-make');

		// expand type section on button press.
		types.on('click', function() {
			let typePanel = $(this).closest('.accordion-body').find('#type-information'),
				typeSelect = $(this).closest('.accordion-body').find('.hardware-type-select');

			if (hideForm(typePanel, typeSelect)) {
				$(this).closest('.accordion-body').find('.hardware-type-select').attr('validation','required');
				$(this).closest('.accordion-body').find('#type-information input').attr('validation','nullable');				
			} else {
				typePanel.addClass('expanded');

				$(this).closest('.accordion-body').find('.hardware-type-select').attr('validation','nullable');
				$(this).closest('.accordion-body').find('#type-information input').attr('validation','required');					
				$(this).closest('.accordion-body').find('.hardware-type-select').val('new');
			}
		});

		// expand make section on button press.
		makes.on('click', function() {
			let makePanel = $(this).closest('.accordion-body').find('#make-information'),
				makeSelect = $(this).closest('.accordion-body').find('.hardware-make-select');

			if (!hideForm(makePanel, makeSelect)) {
				makePanel.addClass('expanded');

				$(this).closest('.accordion-body').find('.hardware-make-select').val('new');
			}
		});
	}

	function addTypeSelectActions($select) {
		$($select).on('change', function() {
			if (this.value !== "new") {
				let typePanel = $(this).closest('.accordion-body').find('#type-information')
				hideForm(typePanel, this);
			}
		});
	}

	function addMakeSelectActions($select) {
		$($select).on('change', function() {
			if (this.value !== "new") {
				let makePanel = $(this).closest('.accordion-body').find('#make-information')
				hideForm(makePanel, this);
			}
		});
	}

	function hideTypeForm(select) {
		// get closest type form
		let typePanel = $(select).closest('.accordion-body').find('#type-information');

		if (typePanel.hasClass('expanded')) {
			typePanel.removeClass('expanded');
		}
	}

	function hideMakeForm(select) {
		// hides closes select form
		let makePanel = $(select).closest('.accordion-body').find('#make-information');

		if (makePanel.hasClass('expanded')) {
			makePanel.removeClass('expanded');
		}
	}
});
