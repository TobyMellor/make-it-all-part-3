const ExpertiseType = require('../../resources/assets/js/pages/problem_types/ExpertiseType').default,
	  expertiseType = new ExpertiseType(api.expertiseTypes[0]);

describe('ExpertiseType', function() {
	describe('get parent()', function() {
		it('should return single instance of expertise type', function() {
            //assert.equal(expertiseType.parent.constructor.name, 'ExpertiseType');		
		});
	});

	describe('get children()', function() {
		it('should return Array of ExpertiseTypes', function() {
			assert.typeOf(expertiseType.children, 'Array');
			assert.equal(expertiseType.children[0].constructor.name, 'ExpertiseType');
		});
		
		it('should return correct amount of expertise types', function() {
			assert.lengthOf(expertiseType.children, 1);
		});
	});
});