const Ticket = require('../../resources/assets/js/pages/tickets/Ticket').default,
	  ticket = new Ticket(api.tickets[0]);

describe('Ticket', function() {
	describe('get calls()', function() {
		it('should return Array of Calls', function() {
			assert.typeOf(ticket.calls, 'Array');
			assert.equal(ticket.calls[0].constructor.name, 'Call');
		});

		it('should return correct amount of calls', function() {
			assert.lengthOf(ticket.calls, 2);
		});
	});

	describe('get status()', function() {
		// [...]
	});

	// [...]
});