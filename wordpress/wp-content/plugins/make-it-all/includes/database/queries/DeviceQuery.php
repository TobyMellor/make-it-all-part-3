<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class DeviceQuery extends MakeItAllQuery {
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
     * Updates a record in the DB.
     *
     * @return Boolean
     */
    public function update($deviceId, $columns) {
        return $this->mia_update($deviceId, $columns);
    }
}
