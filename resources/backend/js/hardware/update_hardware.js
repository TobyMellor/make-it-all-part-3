import HardwareManager from "../HardwareManager";

$(() => {
	let hardwaremanager = new HardwareManager(devices, types, makes);

	$(document).ready(function () {
		addButtonListeners(this, (device ? device.type : ""), (device ? device.make : ""));
		addTypeSelectActions($('.hardware-type-select'), (device ? true : false));
		addMakeSelectActions($('.hardware-make-select'));
	});

	let $heading = $('.mia-panel-heading'),
		$select = $heading.find('select'),
		$img = $heading.find('img');

	devices.forEach((device) => {
		$select.append(`
			<option value="${device.id}">#${device.id} – ${device.serial_no}</option>
		`);
	});

	$('input[name="hardware[id]"]').val(device ? device.id : "");
	$('#change-hardware option[value="' + (device ? device.id : "") + '"]').prop('selected', true);
	$('.hardware-type-select option[value="' + (device ? device.type : "") + '"]').prop('selected', true);
	$('.hardware-make-select option[value="' + (device ? device.make : "") + '"]').prop('selected', true);
	$('.hardware-serial').val((device ? device.serial_no : ""));

	$('#change-hardware').change(function () {
		let hardwareID = $(this).val();

		window.location.href = window.location.pathname + '?page=hardware_update&id=' + hardwareID;

	});

	function addButtonListeners($accordian, $type, $make) {
		let types = $($accordian).find('.add-type'),
			makes = $($accordian).find('.add-make');

		// expand type section on button press.
		types.on('click', function () {
			let typePanel = $(this).closest('.accordion-body').find('#type-information');

			if (typePanel.hasClass('expanded')) {
				typePanel.removeClass('expanded');

				$('.hardware-type-select option[value="' + $type + '"]').prop('selected', true);
			} else {
				typePanel.addClass('expanded');

				$(this).closest('.accordion-body').find('.hardware-type-select').val('new');
			}
		});

		// expand make section on button press.
		makes.on('click', function () {
			let makePanel = $(this).closest('.accordion-body').find('#make-information');
			if (makePanel.hasClass('expanded')) {
				makePanel.removeClass('expanded');

				$('.hardware-make-select option[value="' + $make + '"]').prop('selected', true);
			} else {
				makePanel.addClass('expanded');

				$(this).closest('.accordion-body').find('.hardware-make-select').val('new');
			}
		});
	}

	function addTypeSelectActions($select) {
		$($select).on('change', function () {
			if (this.value !== "new") {
				hideTypeForm(this);
			}
		});
	}

	function addMakeSelectActions($select) {
		$($select).on('change', function () {
			if (this.value !== "new") {
				hideMakeForm(this);
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
