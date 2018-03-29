<?php

class SeedDeviceTable extends Seeder {
	protected $table = 'device';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(1, 'Phone', 'Apple', 'N9TT-9G0A-B7FQ-RANC', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(2, 'Calculator', 'Casio', 'QK6A-JI6S-7ETR-0A6C', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(3, 'Laptop', 'Windows', 'SXFP-CHYK-ONI6-S89U', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(4, 'Ipad', 'Apple', 'XNSS-HSJW-3NGU-8XTJ', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(5, 'Tablet', 'Windows', 'XNSS-HSJW-3NGU-8XTQ', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(6, 'Projector', 'Viking', '6ETI-UIL2-9WAX-XHYO', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(7, 'Watch', 'Apple', '6ETI-UIL2-9WAX-X3YO', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(8, 'FitBit', 'Google', '7EIQ-72IU-2YNV-3L4Y', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(9, 'Printer', 'Dell', 'UKHB-6LAS-LG78-NCKM', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(10, 'Desktop', 'Pcspecalists', '5FUG-S5G3-ESVE-JC27', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(11, 'TV', 'Flatscreen', 'QDQ6-36A8-AXC6-8DHJ', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(12, 'TV', 'Curved', 'CCV8-PU4C-H29V-4JCW', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(13, 'Phone', 'Samsung', 'VBHP-3U6Y-HFN5-BVE9', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(14, 'Laptop', 'Alienware', 'E9MB-WGQ4-6DV9-5WVE', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(15, 'Laptop', 'Apple', '7QAB-6DBE-TYQV-854U', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(16, '3D printer', 'Maker Bot', '8E2S-AP4C-MEMH-9YB3', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(17, '3D printer', 'Creality', '7T3W-AGHG-2ZD9-8WPT', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(18, 'Fitbit', 'Apple', 'RQDK-QYBY-2WFL-SACR', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(19, 'Tablet', 'Kindle', 'PJHA-TLG3-2QCB-CLNH', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(20, 'Keyboard', 'Cyborg', '2AMT-T6JN-3XXG-SJMN', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(21, 'Keyboard', 'Apple', 'Q8BA-DUMV-9XFP-A6D8', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(22, 'Mouse', 'Razor', 'GGB3-E99Q-FJ56-ULE3', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(23, 'Monitor', 'BenQ', 'FFSY-W9C3-DP84-NRCJ', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(24, 'Monitor', 'Dell', '5C65-7G3L-SQ2W-WXBV', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(25, 'Desktop', 'Gaming', 'ZN6B-K4KN-UQM9-2UNJ', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(26, 'Desktop', 'Apple', 'KDF8-SPK9-UB65-FFYP', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(27, 'Mouse', 'Apple', 'WDMM-K98H-DXN4-5EZL', '2018-02-20 23:01:23', '2018-02-20 23:01:23'),
				(28, 'Hard Drive', 'Windows', 'W5C6-FX7K-KN63-8U7Z', '2018-02-20 23:01:23', '2018-02-20 23:01:23');
		";
	}
}