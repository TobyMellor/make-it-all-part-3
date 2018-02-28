import HardwareManager from "../HardwareManager";

//Handler for "Edit Device" button is pressed in the modal
$("#edit-device-modal #edit-device").click(e => {
	e.preventDefault();

	// Get all form data from within modal as object
	let formData = $("#edit-device-modal form").serializeObject(true);

	// Perform validation on entire object
	if (formData.isValid()) { 
        editDevice(formData);
	}
});

async function editDevice(formData) {
	//Retrieving data from Modal
    var type = formData.device.type;
    var make = formData.device.make;
    var device = {type: type, make: make}; //Mapping data to an object
    (new HardwareManager()).updateDevice(formData.device.id, device); //Updates specified device with retrieved data

	hardwarePage.device = await hardwarePage.hardwareManager.get(formData.device.id); //Get the newly updated device
	
	//Refresh page with updated data
	hardwarePage.type = hardwarePage.device.type;
	hardwarePage.make = hardwarePage.device.make;
	hardwarePage.showTableRowDetails(formData.device.id);
	hardwarePage.populateMake();
	hardwarePage.showDevices();
	$("#typeList td").filter((i, el) => el.dataset.type === hardwarePage.type).parent().addClass("highlight");
    $("#makeList td").filter((i, el) => el.dataset.make === hardwarePage.make).parent().addClass("highlight");
    $('#edit-device-modal').modal('hide');
}