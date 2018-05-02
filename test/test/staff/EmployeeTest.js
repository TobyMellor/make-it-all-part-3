const Employee = require('../../resources/assets/js/pages/staff/Employee').default,
	  employee = new Employee(api.staff[0]);

describe('Employee', function() {
	describe('get_isRead()', function() {
		it('should return a boolean', function() {
            assert.isBoolean(employee.get_isRead());//made a change to the function name			
		});
	});

	describe('get isOperator()', function() {
		it('should return a boolean', function() {
			assert.isBoolean(employee.get_isOperator());
		});
	});

	describe('get isAnalyst()', function() {
		it('should return a boolean', function() {
			assert.isBoolean(employee.get_isAnalyst());
		});
	});
	
	describe('get isAdmin()', function() {
		it('should return a boolean', function() {
			assert.isBoolean(employee.get_isAdmin());
		});
	});
	
	describe('get specialisms()', function() {
		it('should return Array of specialisms', function() {
			assert.typeOf(employee.specialisms, 'Array');
			assert.equal(employee.specialisms[0].constructor.name, 'ExpertiseType');
		});
		it('should return correct amount of specialisms', function() {
			assert.lengthOf(employee.specialisms, 1);
		});
	});
	
	describe('prepareData()', function() {
		it('', function() {// not sure
		});
	});
});