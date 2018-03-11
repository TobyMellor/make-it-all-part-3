<?php 
//I should probs make an object so that query data can be kept?
function mia_add_style(){
    //Getting path the other way is messing up. 
    wp_register_style('mia_ticket_forms', plugins_url() . '/make-it-all/resources/css/ticketForms.css');
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
    //All the code for adding new tickets.
    echo "<div class='new_tickets_container'><h1> Create Ticket(s) </h1><div class='caller_section'><div class='caller_left'>";
    //Caller select dropdown
    echo "<h2>Caller*<h2>";
    //TODO - ACTUAL VALUES 
    echo "<select>
            <option value='0'> 0 - Allison  </option>
            <option value='1'> 1 - Bob      </option>
            <option value='2'> 2 - Dave     </option>
            <option value='3'> 3 - Tableleg </option>
         </select>
         ";
    echo "<h2>Date of Call</h2><input type='text' name='currentDate' value='". date("d/m/y h:i A")."'></div>";//End Caller left
    echo "<div class='caller_right'>";
    echo "<div class='caller_information'>";
    echo "<h2> Caller Information</h2>";
    echo "</div>"; //END Caller information
    echo "</div>"; //END Caller right
    
    
    
    
    
    
    
    echo "</div>"; //END Caller Section
    echo "<div class='ticket_details_section'>";
    //All ticket forms here
    mia_print_ticket_form();
    
    
    
    echo "</div>"; //End Ticket details section
    //Cant do this locally. 
    echo "<form action='".plugin_dir_path(__FILE__) . 'ticketForm.php' ." method='get'><input type='submit'></form>";
    echo "</div>"; //END Ticket Container
}



?>
