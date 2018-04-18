<?php

namespace MakeItAll\Includes\Database\Queries;

abstract class Query {
    protected $sqlStatement = null;
    protected $table;
    protected $prefix;

    function __construct() {
        global $wpdb; $this->prefix = $wpdb->prefix . 'mia_';
    }

    /**
     * Shorthand for $wpdb->get_results()
     *
     * @return void
     */
    protected function get_results($query) {
        global $wpdb; return $wpdb->get_results($query);
    }

    /**
     * Inserts data into the database
     *
     * DO NOT include updated_at or created_at in
     * $columns
     *
     * @return (int|false) Number of rows affected/selected or false on error
     */
    public function mia_insert($columns) {
        var_dump($columns);
        if (!$this->validate($columns)) return;

        $columns['created_at'] = date('Y-m-d H:i:s');
        $columns['updated_at'] = date('Y-m-d H:i:s');

        global $wpdb;

        if (!$wpdb->insert($this->prefix . $this->table, $columns)) {
            wp_die('Sorry! We failed to insert that record. Please try again.');
        }

        return $wpdb->insert_id;
    }

    /**
     * Updates a record by ID in the db
     *
     * @return Boolean
     */
    public function mia_update($id, $columns, $whereColumn = 'id') {
        if (!$this->validate($columns)) wp_die('Server-side validation has failed');

        $columns['updated_at'] = date('Y-m-d H:i:s');

        global $wpdb;

        if (!$wpdb->update($this->prefix . $this->table, $columns, [$whereColumn => $id])) {
            wp_die('Sorry! We failed to update that record. Please try again.');
        }

        return $wpdb->insert_id;
    }

    /**
     * Deletes a record by ID from the db
     *
     * @return Boolean
     */
    public function mia_delete($id, $whereColumn = 'id') {
        global $wpdb;

        return $wpdb->delete($this->prefix . $this->table, [$whereColumn => $id]);
    }

    abstract protected function validate($columns);

    /**
     * Runs the validator on data provided and decides
     * what to do in the event of an error
     *
     * @return Boolean
     */
    protected function assert_validation($validator, $columns) {
        try {
            $validator->assert($columns);
        } catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
            wp_die('Server Validation Failed:<br>' . $e->getFullMessage()); return false;
        }

        return true;
    }
}
