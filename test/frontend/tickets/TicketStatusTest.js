module.exports = function(basePath) {
	const TicketStatus = require(basePath + 'pages/tickets/TicketStatus').default,
		  ticketStatus = new TicketStatus(api.ticketStatuses[0]);
		  
	describe('TicketStatus', function() {
		describe('get ticket()', function() {
			it('should return single instance of ticket', function() {
				assert.equal(ticketStatus.ticket.constructor.name, 'Ticket');
			});
		});
		
		describe('get status()', function() {
			it('should return single instance of status', function() {
				assert.equal(ticketStatus.status.constructor.name, 'Status');
			});
		});
		
		describe('get staff()', function() {
			it('should return single instance of employee', function() {
				assert.equal(ticketStatus.staff.constructor.name, 'Employee');
			});
		});
	});	
}