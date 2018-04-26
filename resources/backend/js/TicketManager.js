export default class TicketManager {
	constructor() {
		//
	}

	/**
	 * Retrieves a ticket from the database
	 *
	 * @param {Integer} ID of the ticket to retrieve
	 */
	getTicket(id) {
		return $.ajax({
			url: '/wp-json/make-it-all/v1/ticket/' + id,
			type: 'GET'
		});
	}
}