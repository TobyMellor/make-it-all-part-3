module.exports = function(basePath) {
	const Status = require(basePath + 'pages/tickets/Status').default,
		  status = new Status(api.statuses[0]);
		  
	describe('Status', function() {
		describe('get tickets()', function() {
			it('should return Array of ticket instances', function() {
				assert.typeOf(status.tickets, 'Array');
				assert.equal(status.tickets[0].constructor.name, 'Ticket');
			});
			
			it('should return correct amount of tickets', function() {
				assert.lengthOf(status.tickets, 1);
			});
		});
	});	
}