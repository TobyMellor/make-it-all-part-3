<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class DeviceInsertQuery extends MakeItAllQuery {
    protected $table = 'device';

    public function insert($type, $make, $sn) {
        return $this->mia_insert(
            [
                'type'        => $type,
                'make' => $make,
                'serial_no'   => $sn
            ]
        );
    }
}
