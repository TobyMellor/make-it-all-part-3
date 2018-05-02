module.exports = function(basePath) {
	const StaffManager = require(basePath + 'pages/staff/StaffManager').default,
		  staffManager = new StaffManager();

	describe('StaffManager', function() {
		describe('get()', function() {
			it('should return single instance of employee', function() {
				assert.equal(staffManager.get(1).constructor.name, 'Employee');			
			});
			
			it('should return null if employee not found', function() {
				assert.equal(staffManager.get(9999), null);
			});
		});
		
		describe('getSpecialists()', function() {
			it('should return Array', function() {
				assert.typeOf(staffManager.getSpecialists(1), 'Array');			
			});
			
			it('should return correct amount of specialists', function() {
				assert.lengthOf(staffManager.getSpecialists(1), 2);			
			});
		});
	});
}