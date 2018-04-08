<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class CallQuery extends MakeItAllQuery {
	protected $table = 'call';

	public function insert($time, $operatorId, $callerId) {
		return $this->mia_insert(
			[
				'time'        => $time,
				'operator_id' => $operatorId,
				'caller_id'   => $callerId
			]
		);
	}
}