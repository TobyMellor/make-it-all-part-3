const Comment = require('../../resources/frontend/js/pages/tickets/Comment').default,
	  comment = new Comment(api.comments[0]);
	  
describe('Comment', function() {
	describe('get author()', function() {
		it('should return single instance of employee', function() {
			assert.equal(comment.author.constructor.name, 'Employee');
		});
    });
	
	describe('get call()', function() {
		it('should return single instance of call', function() {
			assert.equal(comment.call.constructor.name, 'Call');
		});
    });
	
	describe('get ticket()', function() {
		it('should return single instance of ticket', function() {
			assert.equal(comment.ticket.constructor.name, 'Ticket');
		});
    });
});	