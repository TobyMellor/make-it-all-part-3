<?php

require_once(plugin_dir_path(dirname(__FILE__)) . 'views/MakeItAllPage.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'views/tables/HardwareTable.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/DeviceQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/TypeQuery.php');
require_once(plugin_dir_path(dirname(__FILE__)) . 'database/queries/MakeQuery.php');

class HardwarePage extends MakeItAllPage {
    protected $name     = 'Hardware';
    protected $icon     = 'dashicons-laptop';
    protected $position = 3;



    /*
        What you see if you just click "Hardware"
    */
    public function read_pane(){
        if (!current_user_can('read_make_it_all')) wp_die(__('You do not have sufficient permissions to access this page.'));
        // handle single delete and bulk delete before rendering page
        /*if (isset($_GET['action']) && $_GET['action'] === 'delete') {
            if (current_user_can('edit_make_it_all')) {
                $ticketQuery = new TicketQuery();

                if (isset($_GET['ticket_id'])) {
                    $ticketQuery->delete($_GET['ticket_id']);
                } else if (isset($_GET['ticket'])) {
                    foreach ($_GET['ticket'] as $ticketId) {
                        $ticketQuery->delete($ticketId);
                    }
                }
            }
        }
*/
        $context = $this->get_context('View Hardwares');
        $this->render_pane($context); // render page before inserting table
        // :^)
        $hardTable = new HardwareTable();
        $hardTable->prepare_items();

        $hardTable->display();

    }

    /*
        Creation of Hardware
        For hardware page we just need the devices table.
    */
    public function create_pane(){
        if (!current_user_can('edit_make_it_all')) wp_die(__('You do not have sufficient permissions to access this page.'));

        //Think this fires when submitted
        //if ($_SERVER['REQUEST_METHOD'] === 'POST') return $this->create_action();

        $context = $this->get_context('Create Hardwares');
        $context['devices'] = json_encode((new DeviceQuery)->get());
        $context['types']   = json_encode((new TypeQuery)->get());
        $context['makes']   = json_encode((new MakeQuery)->get());

        $this->render_pane($context);

    }

    /*
        Updating Hardware
    */
    public function update_pane(){

    }

}
