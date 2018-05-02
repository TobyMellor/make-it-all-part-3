const Call = require('../../resources/assets/js/pages/tickets/Call').default,
	  call = new Call(api.calls[0]);
	  
describe('Call', function() {
	describe('get caller()', function() {
		it('should return single instance of employee', function() {
			assert.equal(call.caller.constructor.name, 'Employee');
		});
		//null?
    });
	
	describe('get operator()', function() {
		it('should return single instance of employee', function() {
			assert.equal(call.operator.constructor.name, 'Employee');
		});
    });
	
	describe('get tickets()', function() {
		it('should return Array of Tickets', function() {
			assert.typeOf(call.tickets, 'Array');
			assert.equal(call.tickets[0].constructor.name, 'Ticket');
		});
		
		it('should return correct amount of tickets', function() {
			assert.lengthOf(call.tickets, 1);//?
		});
    });
});	