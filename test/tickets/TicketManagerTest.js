const TicketManager = require('../../resources/frontend/js/pages/tickets/TicketManager').default,
	  ticketManager = new TicketManager();

describe('TicketManager', function() {
	describe('getCall()', function() {
		it('should return single instance of call', function() {
			assert.equal(ticketManager.getCall(1).constructor.name, 'Call');
		});

		it('should return null if call is not found', function() {
			assert.equal(ticketManager.getCall(9999), null);
		});
	});

	describe('getCallsByTicketId()', function() {
		it('should return Array', function() {
			assert.typeOf(ticketManager.getCallsByTicketId(1), 'Array');
		});

		it('should return correct amount of tickets', function() {
			assert.lengthOf(ticketManager.getCallsByTicketId(9999), 0);
			assert.lengthOf(ticketManager.getCallsByTicketId(1), 2);
			assert.lengthOf(ticketManager.getCallsByTicketId(2), 1);
		});
	});

	describe('getCallNotesByCallId()', function() {
		it('should return single instance of Comment', function() {
			assert.equal(ticketManager.getCallNotesByCallId(1).constructor.name, 'Comment');
		});

		it('should return null if comment is not found', function() {
			assert.equal(ticketManager.getCallNotesByCallId(9999), null);
		});
	});

	// [...]
});