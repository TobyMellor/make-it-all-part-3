module.exports = function(basePath) {
	const ExpertiseType = require(basePath + 'pages/problem_types/ExpertiseType').default,
		  expertiseType = new ExpertiseType(api.expertiseTypes[0]);

	describe('ExpertiseType', function() {
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
}