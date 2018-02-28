import DynamicPage from "./DynamicPage";

/**
 * API
 *
 * Contains methods useful for interacting with API endpoints,
 * for authentication, querying and modifying database.
 */
export default class API {
	constructor() {
		//
	}

	/**
	 * Make an API call to an authentication endpoint, such as
	 * for login or logout. This is distinct from the standard
	 * call method since this passes a stringified JSON and
	 * the token as "access_token" which is required for the
	 * authentication endpoints.
	 *
	 * @param endpoint The endpoint to be called
	 * @param data The data to be passed to the endpoint
	 * @returns Promise of data
	 */
	static callAuth(endpoint = "/api/auth/me", data = {}) {
		// Set up configuration for AJAX call
		data["token"] = window.auth.token;

		return $.ajax({
			type: "POST",
			url: endpoint,
			data: JSON.stringify(data),
			contentType: "application/json",
			headers: {
				"Accept": "application/json"
			}
		});
	}

	/**
	 * Make an API call to any restricted endpoint. Automatically
	 * passes correct authentication token and handles unauthorised
	 * access on client-side (server still manages authentication).
	 *
	 * @param endpoint The endpoint to be called
	 * @param method The HTTP method used for the API call
	 * @param data The data to be passed to the endpoint
	 * @returns Promise of data
	 */
	static call(endpoint = "/api/settings/info", method = "GET", data = {}) {
		return $.ajax({
			method,
			url: endpoint,
			data,
			headers: {
				"Accept": "application/json",
				"Authorization": "Bearer " + window.auth.token
			}
		})
		.fail((request, status) => {
			// Unauthorised
			if (request.status === 401) {
				// Flush session and redirect back to login
				window.auth.token = null;

				// Try to navigate back to this page later
				if (!document.location.pathname.includes("login") && !document.location.pathname.includes("logout")) {
					try {
						// Store the URL in local storage
						localStorage.setItem("previous_url", document.location.pathname);
					} catch (e) {
						// Ignore, don't attempt to return here
					}
				}

				document.location.href = "/login";
			} else {
				DynamicPage.showNotification('Oops! Something went wrong. Please refresh the page and try that action again.');
			}
		});
	}
}
