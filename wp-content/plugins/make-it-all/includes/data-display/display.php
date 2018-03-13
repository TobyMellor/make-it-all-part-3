<?php 
//I should probs make an object so that query data can be kept?
function mia_add_assets(){
    //Getting path the other way is messing up. 
    wp_register_style('mia_ticket_forms', plugins_url() . '/make-it-all/resources/css/ticketForms.css');
    wp_enqueue_script('test', plugins_url() . '/make-it-all/resources/js/ticket.js');
    wp_enqueue_script('fontAw', "https://use.fontawesome.com/releases/v5.0.8/js/all.js");
    wp_enqueue_style('mia_ticket_forms');
}

function mia_add_menus(){
    add_menu_page("tickets", "Tickets", 'manage_options', 'ticket_page', 'mia_ticket_pane', 'dashicons-tickets-alt', 2);
    
    
}

function mia_add_options(){
    add_submenu_page("ticket_page", "Add Tickets", "Add Ticket(s)", "manage_options", "ticket_add", "mia_add_ticket_pane");
}

function mia_ticket_pane(){
    
    	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
    //Want all the column names then all the data.
    global $wpdb; 
    $prefix = $wpdb->prefix . 'mia_'.'ticket';
    $colQuery = "SELECT Column_name FROM Information_schema.columns WHERE Table_name like '$prefix'";
    $cols = $wpdb->get_results($colQuery);
    //var_dump($cols);
    $query = "SELECT * FROM $prefix";
    //echo "QUERY WAS: $query <br>";
    
    //Returns assoc object thingy
    $result = $wpdb->get_results($query);
    
    if($result){
        //Make table headers
        echo "<table>";
        echo "<tr id='headers'>";
        for($j = 0; $j < sizeof($cols); $j++){
            echo "<th>" . $cols[$j]->{"Column_name"} . "</th>";
        }
        echo "</tr>";
        
        
        for($i = 0; $i < sizeof($result); $i++){
            echo "<tr>";
            for($j = 0; $j < sizeof($cols); $j++){
                if(!($result[$i]->{$cols[$j]->{"Column_name"}})){
                    echo "<td> NULL </td>";
                } else {
                echo "<td>" . $result[$i]->{$cols[$j]->{"Column_name"}} . "</td>";
                }
            }
            echo "</tr>";
        }
        echo "</table>";
        
    } else {
        //Some nice display for DB error.
    }

    
}

function mia_add_ticket_pane(){
    require_once plugin_dir_path(__FILE__) . 'ticketForm.php';
    global $wpdb;
    $staffQuery = "SELECT id, name, email, job_title, phone_number FROM " . $wpdb->prefix . "mia_staff";
    $staffResult = $wpdb->get_results($staffQuery);
    $staffJSRes = json_encode($staffResult);
    //All the code for adding new tickets.
    echo "
    <div class='new_tickets_container'>
        <h1> Create Ticket(s) </h1>
        <div class='caller_section'>
            <div class='caller_left'>
                <h2>Caller<span id='red'>*</span><h2>
                <select onchange='callerChange($staffJSRes, this)'>
                <option value='none'>Select Caller</option>";
                    //Get possible values from dbase. This will be from staff table for now.

                    for($i = 0; $i < sizeof($staffResult); $i++){
                        //Make option for each staff member
                        echo "<option value='" . $staffResult[$i]->{'id'} . "'>" . $staffResult[$i]->{'id'}." - ".$staffResult[$i]->{'name'} . "</option>";
                    }
    
    echo "          
                </select>
                <h2>Date of Call<span id='red'>*</span></h2>
                <input type='text' name='currentDate' value='". date("d/m/y h:i A")."'>
            </div>
            <div class='caller_right'>
                <div class='caller_information'>
                    <h2> Caller Information</h2>
                    <div class='caller'></div>
                </div>
            </div>
        </div>
        <div class='ticket_details_section'>";
    //All ticket forms here
    $form = mia_print_ticket_form();
    echo $form;
    echo "</div>"; //End Ticket details section
    //Cant do this locally. 
    echo "<button class='ticketForm' onclick='addTicketForm()'>Add additional ticket</button>";
    echo "</div>"; //END Ticket Container
}
?>