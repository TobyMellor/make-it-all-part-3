import HardwareManager from "../HardwareManager";

//Handler for "New Device" button is pressed in the modal
$("#new-device-modal #new-device").click(e => {
	e.preventDefault();

	// Get all form data from within modal as object
	let formData = $("#new-device-modal form").serializeObject(true);

	// Perform validation on entire object
	if (formData.isValid()) {
        newDevice(formData);
	}
});

async function newDevice(formData) {
	//Retrieving data from Modal
    var s_n = formData.device.serial_no;
    var t = formData.device.type;
    var m = formData.device.make;
    var device = {type: t, make: m, serial_no: s_n}; //Mapping data to an object
    var dev = await (new HardwareManager()).createDevice(device); //Creating a new device based on data from form 

	//Refreshing page to show new device
    hardwarePage.device = dev;
	hardwarePage.type = hardwarePage.device.type;
	hardwarePage.make = hardwarePage.device.make;
	hardwarePage.showTableRowDetails(dev.id);
	hardwarePage.populateMake();
	hardwarePage.showDevices();
	$("#typeList td").filter((i, el) => el.dataset.type === hardwarePage.type).parent().addClass("highlight");
	$("#makeList td").filter((i, el) => el.dataset.make === hardwarePage.make).parent().addClass("highlight");
	$("[name='device.serial_no']").val("")
	$("[name='device.type']").val("")
	$("[name='device.make']").val("")
    $('#new-device-modal').modal('hide');
}
