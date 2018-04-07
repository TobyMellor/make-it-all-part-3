<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TicketDeviceQuery extends MakeItAllQuery {
	protected $table = 'ticket_device';

	public function insert($ticketId, $deviceId) {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}{$this->table}`
					(
						`ticket_id`,
						`device_id`,
						`created_at`,
						`updated_at`
					)
				VALUES
					(%d, %d, %s, %s)
			",
			[$ticketId, $deviceId]
		);
	}
}