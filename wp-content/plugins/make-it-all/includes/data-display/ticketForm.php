<?php 
function mia_print_ticket_form(){
        global $wpdb; 
        $dbPre = $wpdb->prefix . "mia";
        $toReturn = "";
        $toReturn .= "
        <div class='formWrapper'>
        <div class='ticket_nav'>
        <div class='minButton' onclick='minimise(this)'><i class='fas fa-angle-down'></i></div>
        </div>
        <form class='ticket_form'>
 
        <div class='ticket_form_top'>
        <div class='ticket_form_left'>
        <h2>Status<span id='red'>*</span></h2>
        <select id='status_select'>";
        //Get status from dbase
        $statusQuery = "SELECT id, name from " . $dbPre."_status";
        $statusResults = $wpdb->get_results($statusQuery);
        for($i = 0; $i < sizeof($statusResults); $i++){
            $toReturn .= "<option value='" . $statusResults[$i]->{"id"}."'>".$statusResults[$i]->{"name"}."</option>";
        }
    $toReturn .= "
      </select>
      <h2>Ticket Title<span id='red'>*</span></h2>
      <input type='text'>
      </div>
      <div class='ticket_form_right'>
      <h2>Assigned To<span id='red'>*</span></h2>
      <input type='text' value='Mr Tickets' readonly>
      <div class='assignOptions'>
      <input type='radio' class='specAssign' name='assign' id='assign1' value='assignSelf'><label for='assign1'>Assign to myself</label><br>
      <input type='radio' class='specAssign' name='assign' id='assign2' value='assignOp'><label for='assign2'>Assign to another Operator</label><br>
      <input type='radio' class='specAssign' name='assign' id='assign3' value='assignSpec'><label for='assign3'>Assign to Specialist of Problem Type</label>
      </div>
      </div>
      </div>
      <h2>Ticket Description<span id='red'>*</span></h2>
      <textarea class='ticketDec'></textarea>
      <h2>Problem Type<span id='red'>*</span></h2>";
        
        $expType = $dbPre."_expertise_type";
        $expStaff = $dbPre."_expertise_type_staff";
        $problemQuery = "
        SELECT exptype.name, exptype.id, exptype.parent_id, idcount
        FROM $expType as exptype 
        LEFT JOIN (
        SELECT expstaff.expertise_type_id, count(expstaff.expertise_type_id) as idcount 
        FROM $expStaff as expstaff GROUP BY expstaff.expertise_type_id
        ) $expStaff
        ON exptype.id = $expStaff.expertise_type_id";
        $problems = $wpdb->get_results($problemQuery);
        $toReturn .= "<div class='problemSelection'>";
        $toReturn .= "<div class='ticketPType'>";
        //Each option is a value from db query
        $idFind = array();
        foreach($problems as $id => $problem){
            if(!$problem->{"parent_id"}){
                $customAttribute = "false";
                $manIcon = "<i class='fas fa-user-times'></i>";
                if((int)$problem->{"idcount"} > 0){
                    $customAttribute = "true";
                    $manIcon = "<i class='fas fa-user'></i>";
                }
                
                if(findChildren(array($problem->{"id"}), "COUNT", $problems)){
                    //Draw option with arrow
                   
                        $toReturn .= "
                        <span class='parentProblem' 
                        data-has-specialists='$customAttribute' 
                        onclick='openChildren(this, " . $problem->{"id"}  . ")'> " ."
                        <div class='problemLeft'>". $problem->{"name"}. "</div>
                        <div class='problemRight'> ".$problem->{"idcount"}." $manIcon
                        <div class='problemArrow'><i class='fas fa-angle-right'></i> </div>
                        </div>
                        </span>";
                } else {
                    //Draw without arrow
                        $toReturn .= "
                        <span data-has-specialists='$customAttribute' 
                        class='parentProblem' 
                        onclick='openChildren(this, ".$problem->{"id"}.")'> 
                        <div class='problemLeft'>".$problem->{"name"}."</div>
                        <div class='problemRight'> ".$problem->{"idcount"}." $manIcon 
                        <div class='problemArrow'></div>
                        </div></span>";
                }
                
            
                array_push($idFind, $problem->{"id"});
                unset($problems[$id]);
                
            } 
        }
        $toReturn .= "</div>";
        $toReturn .= findChildren($idFind, "",$problems);
        
        

    
    
    
        $toReturn .= "</div></form></div>"; //END Ticket form
        echo $toReturn;
    }
    function findChildren($idFind, $count, $problems){
            $divNum = 0;
            $children = "";
            $childCount = 0;
            while(sizeof($idFind) > 0){
            //Find all the children from $idFind
            
            $newFind = array();
            $children .= "<div class='problemChildren $divNum'>";
            for($i = 0; $i < sizeof($idFind); $i++){
                //For each ID we have to find children for, loop through the problems array.
                foreach($problems as $id => $problem){
                    //If parent id of problem matched the id in array we have found a child. 
                    
                    if($idFind[$i] === $problem->{"parent_id"}){
                        $childCount++; 
                        //Print the option
                        $customAttribute = "false";
                        $manIcon = "<i class='fas fa-user-times'></i>";
                        if((int)$problem->{"idcount"} > 0){
                        $customAttribute = "true";
                        $manIcon = "<i class='fas fa-user'></i>";
                        }
                        if( findChildren( array($problem->{"id"}), "COUNT", $problems)){
                        $children .= "
                        <span class='childProblem p".$problem->{"parent_id"}."'
                        data-has-specialists='$customAttribute'
                        onclick='openChildren(this, " . $problem->{"id"}  . ")'> ".
                        "<div class='problemLeft'>". $problem->{"name"}. "</div>
                        <div class='problemRight'> ".$problem->{"idcount"}." $manIcon 
                        <div class='problemArrow'><i class='fas fa-angle-right'></i> </div>
                        </div>
                        </span>";
                            
                        } else {
                            $children .= "
                            <span data-has-specialists='$customAttribute' 
                            class='childProblem p".$problem->{"parent_id"}."'
                            onclick='openChildren(this, ".$problem->{"id"}.")'>
                            <div class='problemLeft'>".$problem->{"name"}."</div>
                            <div class='problemRight'> ".$problem->{"idcount"}." $manIcon 
                            <div class='problemArrow'></div>
                            </div>
                            </span>";
                        }

                        //Add the id of this problem to new array so we can find its children later
                        array_push($newFind, $problem->{"id"});
                        unset($problems[$id]);
                    }
                }
            }
            $children .= "</div>";
            $divNum++;
            //Looked for children of all elements that were in array.
            //Clear $toFind 
            $idFind = array();
            //Add new elements
            $idFind += $newFind;
            
            
            
        }
        if($count == "COUNT"){
            return $childCount;
        } else {
            
                return $children;
        }
}




?>