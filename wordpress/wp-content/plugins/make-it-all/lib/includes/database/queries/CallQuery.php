<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;

class CallQuery extends Query {
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