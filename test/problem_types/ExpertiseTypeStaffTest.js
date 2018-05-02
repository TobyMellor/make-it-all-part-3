const ExpertiseTypeStaff = require('../../resources/frontend/js/pages/problem_types/ExpertiseTypeStaff').default,
	  expertiseTypeStaff = new ExpertiseTypeStaff(api.expertiseTypeStaff[0]);

describe('ExpertiseTypeStaff', function() {
	describe('get staff()', function() {
		it('should return single instance of employee', function() {
            assert.equal(expertiseTypeStaff.staff.constructor.name, 'Employee');			
		});
	});

	describe('get expertise_type()', function() {
		it('should return single instance of expertise type', function() {
			assert.equal(expertiseTypeStaff.expertise_type.constructor.name, 'ExpertiseType');
		});
	});
});