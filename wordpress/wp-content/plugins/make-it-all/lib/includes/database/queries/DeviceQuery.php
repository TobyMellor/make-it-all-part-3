<?php

namespace MakeItAll\Includes\Database\Queries;

use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class DeviceQuery extends Query {
    protected $table = 'device';

    /**
     * Select all devices.
     *
     * @return Array
     */
    public function get() {
        return $this->get_results(
            "
                SELECT id, type, make, serial_no
                FROM {$this->prefix}{$this->table}
            "
        );
    }

    public function get_device($id) {
        return $this->get_results(
            "
                SELECT *
                FROM {$this->prefix}{$this->table}
                WHERE id = $id
            "
        );
    }
    
    /**
     * Deletes a record from the DB.
     *
     * @return Boolean
     */
    public function delete($ticketId) {
        return $this->mia_delete($ticketId);
    }

    protected function validate($columns) {
        return true;
    }
}