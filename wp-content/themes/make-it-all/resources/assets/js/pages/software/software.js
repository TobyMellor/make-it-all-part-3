/**
 * JS specific to Software page, used to handle front end interactions such as
 * event handlers for buttons , 
 */

import MakeItAll from "../../main";
import SoftwarePage from "./SoftwarePage";
import API from "../API";

let softwarePage, api;

window.init = function(data) {
	api = window.api = new API(data);

	softwarePage = window.softwarePage = new SoftwarePage();

	//Loads all programs
	softwarePage.showPrograms();
	//Event handler for when a program is selected from the table
	$(softwarePage.tableSelector).on("click", "tbody tr", e => {
		softwarePage.showTableRowDetails(Number(e.currentTarget.dataset.rowid));
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
}