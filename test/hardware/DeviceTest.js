const Device = require('../../resources/frontend/js/pages/hardware/Device').default,
	  device = new Device(api.devices[0]);
	  
describe('Device', function() {
	describe('get tickets()', function() {
		it('should return an Array of Tickets', function() {
			assert.typeOf(device.tickets, 'Array');
			assert.equal(device.tickets[0].constructor.name, 'Ticket');
		});
		
		it('should return correct amount of tickets', function() {
			assert.lengthOf(device.tickets, 1);
		});
    });
});	