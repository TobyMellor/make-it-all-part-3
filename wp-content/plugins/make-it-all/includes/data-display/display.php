<?php 

function mia_display_tickets(){
    add_menu_page("tickets", "Tickets", 'manage_options', 'ticket_page', 'mia_ticket_pane', 'dashicons-tickets-alt', 2);
    
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
        for($i = 0; $i < sizeof($result); $i++){
            for($j = 0; $j < sizeof($cols); $j++){
                echo $result[$i]->{$cols[$j]->{"Column_name"}};
            }
            echo "<br>";
            echo "<br>";
        }
        
    } else {
        //Some nice display for DB error.
    }

    
}



?>
