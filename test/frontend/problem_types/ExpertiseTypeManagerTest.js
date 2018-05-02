module.exports = function(basePath) {
	const ExpertiseTypeManager = require(basePath + 'pages/problem_types/ExpertiseTypeManager').default,
		  expertiseTypeManager = new ExpertiseTypeManager();

	describe('ExpertiseTypeManager', function() {
		describe('getRootExpertiseTypes()', function() {
			it('should return Array', function() {
				assert.typeOf(expertiseTypeManager.getRootExpertiseTypes(), 'Array');			
			});
			
			it('should return correct amount of expertise types', function() {
				assert.lengthOf(expertiseTypeManager.getRootExpertiseTypes(), 1);			
			});
		});

		describe('getExpertiseType()', function() {
			it('should return single instance of expertise type', function() {
				assert.equal(expertiseTypeManager.getExpertiseType(1).constructor.name, 'ExpertiseType');
				assert.equal(expertiseTypeManager.getExpertiseType(2).constructor.name, 'ExpertiseType');
				assert.equal(expertiseTypeManager.getExpertiseType(3).constructor.name, 'ExpertiseType');
			});
		});
		
		describe('getExpertiseTypes()', function() {
			it('should return Array', function() {
				assert.typeOf(expertiseTypeManager.getExpertiseTypes([1, 2]), 'Array');
			});
			
			it('should return correct amount of expertise types', function() {
				assert.lengthOf(expertiseTypeManager.getExpertiseTypes([1, 2]), 2);
				assert.lengthOf(expertiseTypeManager.getExpertiseTypes([1]), 1);
				assert.lengthOf(expertiseTypeManager.getExpertiseTypes([9999]), 0);
			});
		});
		
		describe('getExpertiseTypeStaffByExpertiseTypeId()', function() {
			it('should return Array', function() {
				assert.typeOf(expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(1), 'Array');
			});
			
			it('should return correct amount of expertise type staff', function() {
				assert.lengthOf(expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(1), 1);
				assert.lengthOf(expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(9999), 0);
			});
		});
		
		describe('getExpertiseTypeChain()', function() {
			it('should return Array', function() {
				assert.typeOf(expertiseTypeManager.getExpertiseTypeChain(expertiseTypeManager.expertiseType), 'Array');
			});
			
			it('should return correct amount of expertise types in chain', function() {
				assert.lengthOf(expertiseTypeManager.getExpertiseTypeChain(expertiseTypeManager.expertiseType), 1);
			});
		});
		
		describe('getExpertiseTypeStaffByStaffId()', function() {
			it('should return single instance of expertise type staff', function() {
				assert.equal(expertiseTypeManager.getExpertiseTypeStaffByStaffId(1, 1).constructor.name, 'ExpertiseTypeStaff');
			});
			
			it('should return null if expertise type staff is not found', function() {
				assert.equal(expertiseTypeManager.getExpertiseTypeStaffByStaffId(9999, 9999), null);
			});
		});
		
		describe('getExpertiseTypeStaff()', function() {
			it('should return single instance of expertise type staff', function() {
				assert.equal(expertiseTypeManager.getExpertiseTypeStaff(1).constructor.name, 'ExpertiseTypeStaff');
			});
			
			it('should return null if expertise type staff is not found', function() {
				assert.equal(expertiseTypeManager.getExpertiseTypeStaff(9999), null);
			});
		});
	});
}