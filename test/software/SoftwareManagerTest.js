const SoftwareManager = require('../../resources/frontend/js/pages/software/SoftwareManager').default,
	  softwareManager = new SoftwareManager();
	  
describe('SoftwareManager', function() {
	describe('getPrograms()', function() {
		it('should return Array', function() {
			assert.typeOf(softwareManager.getPrograms([1, 2]), 'Array');
		});
		
		it('should return correct amount of programs', function() {
		    assert.lengthOf(softwareManager.getPrograms([9999]), 0);
			assert.lengthOf(softwareManager.getPrograms([1]), 1);
			assert.lengthOf(softwareManager.getPrograms([1, 2]), 2);
		});
    });
	
	describe('get()', function() {
		it('should return single instance of program', function() {
			assert.equal(softwareManager.get(1).constructor.name, 'Program');
		});
		
		it('should return null if program is not found', function() {
			assert.equal(softwareManager.get(9999), null);
		});
    });
});	