import Manager from "../Manager";
import Device from "./Device";
import API from "../API";

/**
 * HardwareManager
 *
 * Responsible for storing and retrieving
 * devices across the system.
 *
 * HardwareManager should never know about the DOM
 */
export default class HardwareManager extends Manager {
	constructor() {
		super();
	}

	/**
	 * Get all devices in table
	 *
	 * @returns {<Array>}
	 */
	get devices() {
		return (async() => {
			return (await API.call("/api/devices")).map(d => new Device(d));
		})();
	}

	/**
	 * Get all unique Types in table
	 *
	 * @returns {<Array>}
	 */
	async uniqueTypes() {
		let results = await this.devices;
		return [...new Set(results.map(t => t.type))];
	}

	/**
	 * Get all unique Makes for a specified Type
	 *
	 * @returns {<Array>}
	 */
	async uniqueMakesOfType(type) {
		let results = await this.devices;
		var devicesByType = results.filter(function(device) {return device.type == type;});
		return [...new Set(devicesByType.map(t => t.make))];
	}

	/**
	 * Get all devices with a specified Type and Make
	 *
	 * @returns {<Array>}
	 */
	async getDevicesOfTypeAndMake(type,make) {
		let results = await this.devices;
		return results.filter(function(device) {return device.type == type && device.make == make;});
	}

	/**
	 * Create a new device with the given data
	 *
	 * @param data The device's data
	 * @returns {Device}
	 */
	createDevice(data = {}) {
		return API.call("/api/devices", "POST", data);
	}

	/**
	 * Change a device's information
	 *
	 * @param deviceID The ID of the device we're updating
	 * @param data The data to update
	 */
	async updateDevice(deviceID, data) {
		API.call("/api/devices/" + deviceID, "PUT", data);
	}

	/**
	 * Gets the devices with the given ID numbers
	 *
	 * @param ids The ID numbers of the devices to retrieve
	 * @returns {Array}
	 */
	async getDevices(ids) {
		var devices = await this.devices;
		return devices.filter(device => ids.indexOf(device.id) > -1);
	}

	/**
	 * Gets a specified device
	 *
	 * @param id The ID number of the specified device 
	 * @returns {Array}
	 */
	async get(id) {
		return new Device(await API.call("/api/devices/" + id));
	}

	/**
	 * Get the device with the given serial number
	 *
	 * @param serialNumber The serial number of the device to return
	 * @returns {Device}
	 */
	async getDeviceBySerialNumber(serialNumber) {
		var devices = await this.devices;
		return devices.find(d => d.serial_no === serialNumber);
	}
}