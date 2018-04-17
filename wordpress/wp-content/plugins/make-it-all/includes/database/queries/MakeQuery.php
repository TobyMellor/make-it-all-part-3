<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'queries/MakeItAllQuery.php');

class MakeQuery extends MakeItAllQuery {
    protected $table = 'device';

    /**
     * Select all devices.
     *
     * @return Array
     */
    public function get() {
        return $this->get_results(
            "
                SELECT make as type
                FROM {$this->prefix}{$this->table}
                GROUP BY make
            "
        );
    }
}
