/*
JS specific to Software page, used to handle front end interactions such as
event handlers for buttons , 
 */

import MakeItAll from "../../main";
import SoftwarePage from "./SoftwarePage";
import "./modals/new-program-modal";
import "./modals/edit-program-modal";
let softwarePage = window.softwarePage = new SoftwarePage();
//Loads all programs
softwarePage.showPrograms();
//Event handler for when a program is selected from the table
$(softwarePage.tableSelector).on("click", "tbody tr", e => {
	softwarePage.showTableRowDetails(Number(e.currentTarget.dataset.rowid));
});

$("#new-program-modal [name='program.expiry_date']").timepicker({dateformat:'DD/MM/YYYY'});
//Event handler for clicking on the edit program button
$('[data-target="#edit-program-modal"]').on("click", function() {
	$("#edit-program-modal [name='program.id']").val(softwarePage.program.id);
	$("#edit-program-modal [name='program.name']").val(softwarePage.program.name);
	$("#edit-program-modal [name='program.operating_system'] option[value='" + softwarePage.program.operating_system + "']").attr("selected","selected");
	$("#edit-program-modal [name='program.expiry_date']").val(softwarePage.program.expiry_date);
});

//If loading a specific device via a URL hash
if (location.hash) {
	softwarePage.showTableRowDetails(parseInt(location.hash.substring(1)));
} else {
	//Hide full view panel by default
	softwarePage.hideTableRowDetails();
}

//Handler for clicking Ticket and Hardware hyperlinks in full view
$("#tickets").on("click", "li[data-rowid]", e => {
	Turbolinks.visit("tickets#" + e.currentTarget.dataset.rowid);
});
$("#hardware").on("click", "li[data-rowid]", e => {
	Turbolinks.visit("hardware#" + e.currentTarget.dataset.rowid);
});