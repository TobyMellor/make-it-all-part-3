const StaffManager = require('../../resources/frontend/js/pages/staff/StaffManager').default,
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
	
	describe('getEmployeesWithPermission()', function() {// not sure
		it('should return Array', function() {//not sure
            //assert.typeOf(staffManager.getEmployeesWithPermission(, true), 'Array');
            //assert.typeOf(staffManager.getEmployeesWithPermission(0, false), 'Array');			
		});
	});
	
	describe('currentUser()', function() {// not sure
		it('', function() {			
		});
	});
	
	describe('getSpecialists()', function() {// not sure
		it('should return Array', function() {
            assert.typeOf(staffManager.getSpecialists(1), 'Array');			
		});
		
		it('should return correct amount of specialists', function() {
            assert.lengthOf(staffManager.getSpecialists(1), 2);			
		});
	});

	describe('hasSpecialism()', function() {
		it('should return Boolean', function() {//not sure
			//assert.isBoolean(staffManager.hasSpecialism(staffManager.staff, 1));
		});
	});
	
	describe('search()', function() {
		it('', function() {
		});
	});
});