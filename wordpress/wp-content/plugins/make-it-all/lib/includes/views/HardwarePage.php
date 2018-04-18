<?php

namespace MakeItAll\Includes\Views;

use MakeItAll\Includes\Views\Page;
use MakeItAll\Includes\Views\Tables\HardwareTable;

use MakeItAll\Includes\Database\Queries\{
    DeviceQuery,
    DeviceInsertQuery,
    TypeQuery,
    MakeQuery
};

class HardwarePage extends Page {
    protected $name     = 'Hardware';
    protected $icon     = 'dashicons-laptop';
    protected $position = 3;

    // what you see if you just click "Hardware"
    public function read_pane(){
        parent::read_pane();

        // handle single delete and bulk delete before rendering page
        if (isset($_GET['action']) && $_GET['action'] === 'delete') {
            if (current_user_can('edit_make_it_all')) {
                $deviceQuery = new DeviceQuery();

                if (isset($_GET['hardware_id'])) {
                    $deviceQuery->delete($_GET['hardware_id']);
                } else if (isset($_GET['hardware'])) {
                    foreach ($_GET['hardware'] as $hardwareId) {
                        $deviceQuery->delete($hardwareId);
                    }
                }
            }
        }

        if (isset($_GET['id'])) {
            $context = $this->get_context('Viewing Hardware');
            $context = $this->getHardware($context, $_GET['id']);

            $this->render_pane($context); // render page before inserting table
        } else {
            $context = $this->get_context('View Hardware');
            $this->render_pane($context); // render page before inserting table

            $hardTable = new HardwareTable();
            $hardTable->prepare_items();

            $hardTable->display();
        }
    }

    /**
     * Creation of Hardware
     * For hardware page we just need the devices table.
     */
    public function create_pane() {
        parent::create_pane();

        $context = $this->get_context('Create Hardware');

        $context['devices'] = json_encode((new DeviceQuery)->get());
        $context['types']   = json_encode((new TypeQuery)->get());
        $context['makes']   = json_encode((new MakeQuery)->get());

        $this->render_pane($context);
    }

    protected function create_action() {
        global $wpdb;

        $deviceQuery = new DeviceQuery();

        // insert type, make, sn, date
        foreach ($_POST['hardware'] as $hardware) {
            $type = $hardware['type'] || $hardware['newType'];
            $make = $hardware['make'] || $hardware['newMake'];

            $deviceQuery->mia_insert([
                'type'      => $type,
                'make'      => $make,
                'serial_no' => $hardware['serial']
            ]);

            $hardwareID = $wpdb->insert_id;
        }
        
        $this->mia_redirect('admin.php?page=hardware&id=' . $hardwareID); exit;
    }

    // updating hardware
    public function update_pane() {
        parent::update_pane();

        $context = $this->get_context('Update Hardware');

        $context['devices'] = json_encode((new DeviceQuery)->get());
        $context['types']   = json_encode((new TypeQuery)->get());
        $context['makes']   = json_encode((new MakeQuery)->get());

        if (isset($_GET['id'])) {
            $hardwareID = $_GET['id'];

            // ticket's current data
            $context = $this->getHardware($context, $hardwareID);
        }

        $this->render_pane($context);

    }
    
    protected function update_action() {
        global $wpdb;

        $deviceQuery = new DeviceQuery();

        $hardware   = $_POST['hardware'];
        $hardwareId = $hardware['id'];

        // deal with new type/make
        $type = $hardware['type'] || $hardware['newType'];
        $make = $hardware['make'] || $hardware['newMake'];

        $deviceQuery->mia_update(
            $hardwareId,
            [
                'type'          => $type,
                'make'          => $make,
                'serial_no'     => $hardware['serial_no'],
            ]
        );

        $this->mia_redirect('admin.php?page=hardware&id=' . $hardwareId); exit;
    }

    private function getHardware($context, $id) {
        $deviceQuery = new DeviceQuery();

        $context['device_object'] = $deviceQuery->get_device($id)[0];
        $context['device'] = json_encode($deviceQuery->get_device($id)[0]);

        return $context;
    }
}
