<?php 
function mia_print_ticket_form(){
        global $wpdb; 
        $toReturn = "";
        $toReturn .= "<form class='ticket_form'>
        <div class='ticket_form_top'>
        <div class='ticket_form_left'>
        <h2>Status</h2>
        <select id='status_select'>
                <option value='new'    >  New     </option>
                <option value='pending'>  Pending </option>
                <option value='solved' >  Solved  </option>
      </select>
      <h2>Ticket Title</h2>
      <input type='text'>
      </div>
      <div class='ticket_form_right'>
      <h2>Assigned To</h2>
      <input type='text' value='Mr Tickets' readonly>
      <div>
      <input type='radio' name='assign' id='assign1' value='assignSelf'><label for='assign1'>Assign to myself</label><br>
      <input type='radio' name='assign' id='assign2' value='assignOp'><label for='assign2'>Assign to another Operator</label><br>
      <input type='radio' name='assign' id='assign3' value='assignSpec'><label for='assign3'>Assign to Specialist of Problem Type</label>
      </div>
      </div>
      </div>
      <h2>Ticket Description</h2>
      <textarea></textarea>
      <h2>Problem Type</h2>";
        
        $problemQuery = "SELECT exptype.name, exptype.id, idcount
        FROM wp_mia_expertise_type as exptype
        INNER JOIN (
        SELECT expstaff.expertise_type_id, count(expstaff.expertise_type_id) as idcount 
        FROM wp_mia_expertise_type_staff as expstaff GROUP BY expstaff.expertise_type_id
        ) wp_mia_expertise_type_staff
        ON exptype.id = wp_mia_expertise_type_staff.expertise_type_id";
        $problems = $wpdb->get_results($problemQuery);
        
        $toReturn .= "<select name='ticketPType' size='".sizeof($problems)."'>";
        //Each option is a value from db query
        

        for($i = 0; $i < sizeof($problems); $i++){
            //For each result make a dropdown menu
            $toReturn .= "<option value='" . $problems[$i]->{"id"}  . "'> " . $problems[$i]->{"name"}. " ".$problems[$i]->{"idcount"}."</option>";
        }
        $toReturn .= "</select></form>"; //END Ticket form
        
       echo $toReturn;
    }



?>