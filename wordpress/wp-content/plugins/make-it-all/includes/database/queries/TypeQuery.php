<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class TypeQuery extends MakeItAllQuery {
    protected $table = 'device';

    /**
     * Select all devices.
     *
     * @return Array
     */
    public function get() {
        return $this->get_results(
            "
                SELECT type
                FROM {$this->prefix}{$this->table}
                GROUP BY type
            "
        );
    }
}
