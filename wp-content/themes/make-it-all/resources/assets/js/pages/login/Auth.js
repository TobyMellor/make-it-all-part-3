import DynamicPage from "../DynamicPage";
import API from "../API";

/**
 * Auth
 *
 * Authentication class providing methods for managing
 * auth of users on the system, e.g. login/logout.
 */
export default class Auth {
	constructor() {
		// The token currently being used for requests
		this.accessToken = null;
		// A reference to the interval for refreshing
		// if there is no user activity
		this.refreshInterval = null;
	}

	/**
	 * Validate credentials, then obtain and save an access token
	 * if a valid username and password are given. Makes API request
	 * to auth endpoint for login.
	 *
	 * @param username The username (email address) to log in with
	 * @param password The password to be validated
	 * @returns Promise of authentication
	 */
	login(username, password) {
		// Make the API call to the auth endpoint
		return API.callAuth("/api/auth/login", {
			"email": username,
			"password": password
		})
				// Save the received token
				.done(data => this.token = data["access_token"])

				// Failure is most likely when email address or password is incorrect
				.fail(request => {
					// Determine if authentication error or server error
					if (request.status === 401) {
						// Show message to user
						DynamicPage.showNotification("Invalid email address or password");
					} else {
						DynamicPage.showNotification(`Error ${request.status}`);
					}
				});
	}

	/**
	 * Invalidate the current authentication token
	 * and clear saved session information.
	 *
	 * @returns Promise of deauthentication
	 */
	logout() {
		// Make API call, providing token to be invalidated
		return API.callAuth("/api/auth/logout", {
			"token": this.token
		})
				// Since token is now invalidated, remove it and log out user
				.done(() => {
					// Clear saved token
					this.token = null;
					// Redirect to login
					document.location.href = "login";
				})

				// Most likely due to token already being invalidated,
				// such as from timeout situation or if the token has
				// been invalidated elsewhere (e.g. another tab)
				.fail((request, status) => {
					if (request.status === 401) {
						// If token is invalid, act as if logout succeeded
						// since the token on record for this session is invalid anyway
						this.token = null;
						document.location.href = "login";
					} else {
						// Let error from server be shown in odd cases (shouldn't fire)
						DynamicPage.showNotification(status);
					}
				});
	}

	/**
	 * Get information about the currently logged in user.
	 *
	 * @returns Promise of data with ID, name and email address.
	 */
	me() {
		return API.callAuth("/api/auth/me", {
			"token": this.token
		})
				// If can't get current user information, most likely
				// token is invalid, but regardless of actual reason
				// we can't trust the token any more, so flush session.
				.fail(() => {
					this.token = null;
					document.location.href = "login";
				});
	}

	/**
	 * Refresh the currently stored authentication token.
	 * Sets up interval for automatically refreshing token
	 * used if there is no user activity on the site.
	 *
	 * @returns Promise of authentication
	 */
	refresh() {
		// Determine whether a refresh interval has been set up already
		// and if not, start a recurring refresh on long interval.
		this.refreshInterval = this.refreshInterval ||
				setInterval(() => this.refresh(), 3600 * 60 * 60 - 600);

		// Refresh the token, providing the existing token to be refreshed
		return API.callAuth("/api/auth/refresh", {
			"token": this.token
		})
				// Save the new token and use the token in the future
				.done(data => this.token = data["access_token"])

				// If can't refresh token, the token must be invalid
				// so flush the session.
				.fail(() => {
					this.token = null;
					document.location.href = "login";
				});
	}

	// Token storage

	/**
	 * Get the authentication token currently being stored, if one exists
	 */
	get token() {
		try {
			return window.localStorage["access_token"];
		} catch (e) {
			// Save token in session, propagated with Turbolinks
			return this.accessToken;
		}
	}

	/**
	 * Save a new authentication token for the session
	 * @param newToken The token value to be saved as string
	 */
	set token(newToken) {
		try {
			if (newToken) {
				window.localStorage["access_token"] = newToken;
			} else {
				// Setting local storage value equal to null
				// sets to string value of "null" instead of
				// actually removing the item from storage, so
				// we need to handle this special case.
				window.localStorage.removeItem("access_token");
			}
		} catch (e) {
			return this.accessToken = newToken;
		}
	}
}
