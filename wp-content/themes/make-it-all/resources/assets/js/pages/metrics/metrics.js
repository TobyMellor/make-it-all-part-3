/*
JS specific to Hardware page, used to handle rudamentary front end interactions.
Most front end logic occurs in MetricsPage.
 */

import MakeItAll from "../../main";
import MetricsPage from "./MetricsPage";
import API from "../API";

let metricsPage, api;

window.init = function(data) {
	api = window.api = new API(data);

	metricsPage = window.metricsPage = new MetricsPage();

	//Setting default response if no result is found in the select/search box
	$('.selectpicker').selectpicker({
		noneResultsText: 'No results match {0}'
	});

	//Handler for changing the selected staff member
	$('#StaffNameSearch').change(function() { 
		metricsPage.staffDropdownChange();
	});

	$("[data-rowid]").click(e => {
		location.href = location.href.toString().split("#")[0].replace("metrics.html", "staff.html#" + e.currentTarget.dataset.rowid);
	});

	$(() => metricsPage.hideTableRowDetails());
}