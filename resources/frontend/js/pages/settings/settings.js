/*
Settings page JS for populating current user info into page
and handling user input for security section (changing password)
 */

import "../../main";

import DynamicPage from "../DynamicPage";
import SettingsPage from "./SettingsPage";
const settingsPage = window.settingsPage = new SettingsPage();

// Load all initial personal data on page
settingsPage.loadData();

// Handle page navigation in nested sidebar
$(".side-nav-bar-nested ul").on("click", "li", function() {
	// Only change page if user selects different page
	if (!this.classList.contains("active")) {
		// Toggle out current page and in for new page
		$(".section:visible").addClass("block-hidden");
		document.getElementById(this.dataset.slug + "-section").classList.remove("block-hidden");
		// Highlight selected page in sidebar
		$(this).addClass("active").siblings().removeClass("active");
		// Set top bar title to new page name
		$(".top-nav h4").text(this.textContent);
	}
});

// Security settings
const $security = $("#security-section");
$security.find(".save-changes").click(() => {
	// Get user input
	const oldValue = $security.find("[name=\"password.old\"]").val();
	const newValue = $security.find("[name=\"password.new\"]").val();
	const newValueConfirm = $security.find("[name=\"password.confirm\"]").val();
	// Preliminary validation
	if (!oldValue || !newValue || !newValueConfirm) {
		DynamicPage.showNotification("All password fields are required.");
		return;
	}
	if (newValue !== newValueConfirm) {
		DynamicPage.showNotification("New passwords are not the same.");
		$security.find("[name=\"password.confirm\"]").focus();
		return;
	}
	// API auth call
	settingsPage.changePassword(oldValue, newValue);
});
