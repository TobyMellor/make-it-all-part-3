<?php

namespace MakeItAll\Includes\Database\Queries;
use MakeItAll\Includes\Database\Queries\Query;
use Respect\Validation\Validator as v;

class DeviceInsertQuery extends Query {
    protected $table = 'device';

    public function insert($type, $make, $sn) {
        return $this->mia_insert(
            [
                'type'        => $type,
                'make'        => $make,
                'serial_no'   => $sn
            ]
        );
    }
    protected function validate($columns) {
        return true;
    }
}
