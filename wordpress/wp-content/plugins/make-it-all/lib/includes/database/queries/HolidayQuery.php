<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class HolidayQuery extends Query {
    protected $table = 'holiday';
    
	/**
	 * Get a list of holidays
	 *
	 * @return Array
	 */
	public function get_by_user_id($userId) {
		return $this->get_results(
			"
                SELECT
                    holiday.id,
                    holiday.ticket_id AS ticket_id,
                    holiday.user_id AS user_id,
                    users.display_name AS display_name,
                    ticket.title AS title,
                    holiday.return_date AS return_date
                FROM {$this->prefix}{$this->table} AS holiday
                JOIN {$this->rawPrefix}users AS users
                    ON users.id = holiday.user_id
                JOIN {$this->prefix}ticket AS ticket
                    ON ticket.id = holiday.ticket_id
                WHERE holiday.user_id = {sanitize_key($userId)}
			"
		);
	}

	public function check() {
		return $this->get_results(
			"
                DELETE FROM {$this->prefix}{$this->table}
                WHERE return_date >= NOW()
			"
		);
    }

    protected function validate($columns) {
        return true;
    }
}