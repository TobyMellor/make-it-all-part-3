module.exports = function(basePath) {
	const Program = require(basePath + 'pages/software/Program').default,
		  program = new Program(api.programs[0]);
		  
	describe('Program', function() {
		describe('get tickets()', function() {
			it('should return Array of Tickets', function() {
				assert.typeOf(program.tickets, 'Array');
				assert.equal(program.tickets[0].constructor.name, 'Ticket');
			});
				
			it('should return correct amount of tickets', function() {
				assert.lengthOf(program.tickets, 1);
			});
		});
	});	
}