<?php 
    function mia_print_ticket_form(){
      
        echo "<form class='ticket_form'>";
        echo "<div class='ticket_form_top'>";
        echo "<div class='ticket_form_left'>";
        echo "<h2>Status</h2>";
        echo "<select id='status_select'>
                <option value='new'    >  New     </option>
                <option value='pending'>  Pending </option>
                <option value='solved' >  Solved  </option>
                </select>
        ";
        echo "<h2>Ticket Title</h2>";
        echo "<input type='text'>";
       
        
        
        echo "</div>"; //END Ticket form left
        echo "<div class='ticket_form_right'>";
        echo "<h2>Assigned To</h2>";
        echo "<input type='text' value='Mr Tickets' readonly>";
        echo "<div>";
        echo "<input type='radio' name='assign' id='assign1' value='assignSelf'><label for='assign1'>Assign to myself</label><br>";
        echo "<input type='radio' name='assign' id='assign2' value='assignOp'><label for='assign2'>Assign to another Operator</label><br>";
        echo "<input type='radio' name='assign' id='assign3' value='assignSpec'><label for='assign3'>Assign to Specialist of Problem Type</label>";
        echo "</div>"; //END Radio div
        echo "</div>"; // END Ticket form right
        echo "</div>"; //END Ticket form top
        echo "<h2>Ticket Description</h2>";
        echo "<textarea>";
        
        echo "</form>"; //END Ticket form
        
       
    }


?>