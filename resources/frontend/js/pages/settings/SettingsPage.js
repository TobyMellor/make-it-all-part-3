import API from "../API";
import DynamicPage from "../DynamicPage";
import StaffManager from "../staff/StaffManager";
import StaffPage from "../staff/StaffPage";

/**
 * SettingsPage
 *
 * Front-end management of Settings page, for filling information
 * and handling user input.
 */
class SettingsPage {
	constructor() {
		this.staffManager = new StaffManager();
	}

	/**
	 * Load all fields and card details for settings page
	 * based on currently logged in user information,
	 * since the Settings page is purely personal.
	 */
	async loadData() {
		// Get the current employee
		const me = await this.staffManager.currentUser(true);

		let $view = $("[data-path=\"settings\"] #list-view");

		// Fill main fields
		Object.entries(me).forEach(([key, value]) => {
			$view.find(`[name="staff.${key}"]`).val(value);
		});

		// Fill card data (on the right)
		let $card = $view.find(".card");
		$card.find(".card-img-top").prop("src", "/res/avatar/" + me.email);
		$card.find("[data-slug=\"name\"]").text(me.name)
				.append($("<p class=\"card-text\" data-slug=\"job\">").text(me.job));

		// Fill individual permission tokens in permissions field
		StaffPage.showPermissions(document.getElementById("staff-permissions"), me);
	}

	/**
	 * Change current user's password
	 *
	 * @param oldValue Current user password for validating
	 * @param newValue New password to change to
	 */
	changePassword(oldValue, newValue) {
		API.call("/api/settings/changepassword", "POST", {oldValue, newValue})
				.done(response => DynamicPage.showNotification(response.responseJSON["success"], "success"))
				.fail(response => DynamicPage.showNotification(response.responseJSON["error"], "danger"));
	}
}

export default SettingsPage;
