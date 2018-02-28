/*
JS specific to Hardware page, used to handle front end interactions such as
event handlers for buttons , 
 */

import MakeItAll from "../../main";
import HardwarePage from "./HardwarePage";
import "./modals/new-device-modal";
import "./modals/edit-device-modal";
let hardwarePage = window.hardwarePage = new HardwarePage();

//Load all initial Types of device
hardwarePage.populateTypes();

//Handler for clicking on a device type
$("#typeList").on("click", "tr td", e => {
	$("#typeList>tr").removeClass("highlight"); //Removes any previously highlight to any element
	e.currentTarget.parentElement.classList.add("highlight");
	hardwarePage.type = e.currentTarget.dataset.type;
	hardwarePage.populateMake(); //Loads all Makes 'under' the selected type
});

//Handler for clicking on a device make
$("#makeList").on("click", "tr td", e => {
	$("#makeList>tr").removeClass("highlight"); //Removes any previously highlight to any element
	e.currentTarget.parentElement.classList.add("highlight");
	hardwarePage.make = e.currentTarget.dataset.make;
	hardwarePage.showDevices(); //Loads all devices of the selected Type and Make
});

//Handler for selecting a specific device from the final selection tab
$(hardwarePage.tableSelector).on("click", "tbody tr", e => {
	var id = Number(e.currentTarget.dataset.rowid); //Gets the ID of the selected row
	hardwarePage.showTableRowDetails(id); //Opens the full view for the selected device
});

//Handler for clicking the edit device button
$('#show-edit-device-modal').on("click", function() {
	//Populating modal with device data
	$("#edit-device-modal [name='device.id']").val(hardwarePage.device.id);
	$("#edit-device-modal [name='device.serial_no']").val(hardwarePage.device.serial_no);
	$("#edit-device-modal [name='device.type']").val(hardwarePage.device.type);
	$("#edit-device-modal [name='device.make']").val(hardwarePage.device.make);
	$('#edit-device-modal').modal('show'); //Opens modal
});

//If loading a specific device viaa URL hash
if (location.hash) {
	hasLocationHash();
} else {
	//Hide full view panel by default
	hardwarePage.hideTableRowDetails();
}

//Handles displaying the page as if the passed device has already been selected
async function hasLocationHash() {
	var id = parseInt(location.hash.substring(1));
	hardwarePage.device = await hardwarePage.hardwareManager.get(id);
	hardwarePage.type = hardwarePage.device.type;
	hardwarePage.make = hardwarePage.device.make;
	hardwarePage.showTableRowDetails(id); //Opens the full view for the selected device
	hardwarePage.populateMake(); //Populating makes
	hardwarePage.showDevices(); //Populating device list
	// Set type
	$("#typeList td").filter((i, el) => el.dataset.type === hardwarePage.type).parent().addClass("highlight");
	// Set make
	$("#makeList td").filter((i, el) => el.dataset.make === hardwarePage.make).parent().addClass("highlight");
}

//Handler for clicking Ticket and Software hyperlinks in full view
$("#tickets").on("click", "li[data-rowid]", e => {
	Turbolinks.visit("tickets#" + e.currentTarget.dataset.rowid);
});
$("#software").on("click", "li[data-rowid]", e => {
	Turbolinks.visit("software#" + e.currentTarget.dataset.rowid);
});
