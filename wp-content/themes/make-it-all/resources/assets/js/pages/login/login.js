/*
Login page JS, for handling user input to the form on the login page
for authentication. Attempts to auto-authenticate if credentials can
be obtained from user's web browser, otherwise handles user input of
email address and password into HTML fields, inc keyboard shortcuts.
 */

import DynamicPage from "../DynamicPage";
import Auth from "./Auth";

window.auth = window.auth || new Auth();
window.Turbolinks.start();

// Enter key handling for two boxes,
// first box moves to second box,
// second box submits form.
$("#email").focus().keydown(e => {
	if (e.key === "Enter") $("#password").focus();
});
$("#password").keydown(e => {
	if (e.key === "Enter") login();
});
$("[data-action=\"login\"]").click(login);

// Attempt to automatically authenticate if a token can be obtained
if (window.auth.token) {
	DynamicPage.showNotification("Attempting to resume session in the background…", "info", 999);
	// Calling me with the existing token will fail if token is invalid
	window.auth.me()
			.done(data => {
				// Successfully reauthenticated, redirect to tickets
				DynamicPage.showNotification(`Welcome back ${data["name"]}! One second…`, "success");
				document.getElementsByTagName("form").item(0).classList.add("block-hidden");
				window.Turbolinks.visit("/tickets");
			})
			.fail(() => {
				// User can still log in as usual by entering email and password
				DynamicPage.showNotification("Could not resume session. Please log in below.", "warning");
			});
}

// Take user input and tell authentication class to attempt a login
function login() {
	window.auth.login($("#email").val(), $("#password").val())
			.done(() => {
				try {
					// Try to go back to the previous URL
					window.Turbolinks.visit(localStorage.getItem("previous_url") !== null
							? localStorage.getItem("previous_url")
							: "/tickets")
				} catch (e) {
					// Default to /tickets
					window.Turbolinks.visit("/tickets");
				}
			})
			.fail(() => $("#password").focus());
}
