<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class CallQuery extends MakeItAllQuery {
	protected $table = 'call';

	public function get() {
		//
	}

	public function insert($time, $operatorId, $callerId) {
		return $this->query(
			"
				INSERT INTO `{$this->prefix}{$this->table}`
					(
						`time`,
						`operator_id`,
						`caller_id`,
						`created_at`,
						`updated_at`
					)
				VALUES
					(%s, %d, %d, %s, %s)
			",
			[$time, $operatorId, $callerId]
		);
	}
}