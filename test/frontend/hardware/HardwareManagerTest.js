module.exports = function(basePath) {
	const HardwareManager = require(basePath + 'pages/hardware/HardwareManager').default,
		  hardwareManager = new HardwareManager();
		  
	describe('HardwareManager', function() {
		describe('uniqueTypes()', function() {
			it('should return Array', function() {
				assert.typeOf(hardwareManager.uniqueTypes(), 'Array');
			});
			
			it('should return correct amount of types', function() {
				assert.lengthOf(hardwareManager.uniqueTypes(), 1);
			});
		});
		
		describe('uniqueMakesOfType()', function() {
			it('should return Array', function() {
				assert.typeOf(hardwareManager.uniqueMakesOfType("device 1 type"), 'Array');
			});
			
			it('should return correct amount of makes', function() {
				assert.lengthOf(hardwareManager.uniqueMakesOfType("device 1 type"), 1);
			});
		});
		
		describe('getDevicesOfTypeAndMake()', function() {
			it('should return Array', function() {
				assert.typeOf(hardwareManager.getDevicesOfTypeAndMake("device 1 type", "device 1 make"), 'Array');
			});
			
			it('should return correct amount of devices', function() {
				assert.lengthOf(hardwareManager.getDevicesOfTypeAndMake("device 1 type", "device 1 make"), 1);
			});
		});
		
		describe('getDevices()', function() {
			it('should return Array', function() {
				assert.typeOf(hardwareManager.getDevices([1]), 'Array');
			});
		});
		
		describe('get()', function() {
			it('should return single instance of device', function() {
				assert.equal(hardwareManager.get(1).constructor.name, 'Device');
			});
			
			it('should return null if device is not found', function() {
				assert.equal(hardwareManager.get(9999), null);
			});
		});
		
		describe('getDeviceBySerialNumber()', function() {
			it('should return single instance of device', function() {
				assert.equal(hardwareManager.getDeviceBySerialNumber(1).constructor.name, 'Device');
			});
		});
	});
}