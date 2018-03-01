import Manager from "../Manager";
import Device from "./Device";

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

		this.devices = api.devices.map(e => new Device(e));
	}

	/**
	 * Get all unique Types in table
	 *
	 * @returns {<Array>}
	 */
	uniqueTypes() {
		return [...new Set(this.devices.map(t => t.type))];
	}

	/**
	 * Get all unique Makes for a specified Type
	 *
	 * @returns {<Array>}
	 */
	uniqueMakesOfType(type) {
		let devicesByType = this.devices.filter(device => device.type == type);

		return [...new Set(devicesByType.map(t => t.make))];
	}

	/**
	 * Get all devices with a specified Type and Make
	 *
	 * @returns {<Array>}
	 */
	getDevicesOfTypeAndMake(type,make) {
		return this.devices.filter(device => device.type == type && device.make == make);
	}


	/**
	 * Gets the devices with the given ID numbers
	 *
	 * @param ids The ID numbers of the devices to retrieve
	 * @returns {Array}
	 */
	getDevices(ids) {
		return this.devices.filter(device => ids.indexOf(device.id) > -1);
	}

	/**
	 * Gets a specified device
	 *
	 * @param id The ID number of the specified device 
	 * @returns {Array}
	 */
	get(id) {
		return this.devices.find(device => device.id === id) || null;
	}

	/**
	 * Get the device with the given serial number
	 *
	 * @param serialNumber The serial number of the device to return
	 * @returns {Device}
	 */
	getDeviceBySerialNumber(serialNumber) {
		return this.devices.find(d => d.serial_no === serialNumber);
	}
}