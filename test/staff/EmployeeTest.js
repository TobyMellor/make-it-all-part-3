const Employee = require('../../resources/frontend/js/pages/staff/Employee').default,
	  employee = new Employee(api.staff[0]);

describe('Employee', function() {
	describe('get specialisms()', function() {
		it('should return Array of specialisms', function() {
			assert.typeOf(employee.specialisms, 'Array');
			assert.equal(employee.specialisms[0].constructor.name, 'ExpertiseType');
		});
		it('should return correct amount of specialisms', function() {
			assert.lengthOf(employee.specialisms, 1);
		});
	});
});