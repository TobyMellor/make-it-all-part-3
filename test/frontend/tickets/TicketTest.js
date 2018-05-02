module.exports = function(basePath) {
	const Ticket = require(basePath + 'pages/tickets/Ticket').default,
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
			it('should return single instance of status', function() {
				assert.equal(ticket.status.constructor.name, 'Status');
			});
		});

		describe('get status_history()', function() {
			it('', function() {
				//does it even exist?
			});
		});
		
		describe('get caller()', function() {
			it('should return single instance of employee', function() {// not sure
				//assert.equal(ticket.author.constructor.name, 'Employee');
			});
		});
		
		describe('get devices()', function() {
			it('should return Array of Devices', function() {
				assert.typeOf(ticket.devices, 'Array');
				assert.equal(ticket.devices[0].constructor.name, 'Device');
			});
			
			it('should return correct amount of devices', function() {
				assert.lengthOf(ticket.devices, 1);
			});
		});
		
		describe('get programs()', function() {
			it('should return Array of Programs', function() {
				assert.typeOf(ticket.programs, 'Array');
				assert.equal(ticket.programs[0].constructor.name, 'Program');
			});
			
			it('should return corrct amount of programs', function() {
				assert.lengthOf(ticket.programs, 1);
			});
		});
		
		describe('get comments()', function() {
			it('should return Array of Comments', function() {
				assert.typeOf(ticket.comments, 'Array');
				assert.equal(ticket.comments[0].constructor.name, 'Comment');
			});
			
			it('should return correct amount of comments', function() {
				assert.lengthOf(ticket.comments, 2);
			});
		});
		
		describe('get solution()', function() {
			it('should return single instance of comment', function() {
				assert.equal(ticket.solution.constructor.name, 'Comment');
			});
		});
		
		describe('get expertise_type_staff()', function() {
			it('should return single instance of expertise type staff', function() {
				assert.equal(ticket.expertise_type_staff.constructor.name, 'ExpertiseTypeStaff');
			});
		});
	});
}