<?php 
function mia_print_ticket_form() {
    global $wpdb;

    $dbPre = $wpdb->prefix . "mia";

    $form = '
        <div class="form-wrapper">
            <div class="ticket-nav">
                <div class="min-button" onclick="minimise(this)">
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>
            <form class="ticket-form">
                <div class="ticket-form-top">
                    <div class="ticket-form-left">
                        <h2>Status<span id="red">*</span></h2>
                        <select id="status-select">
    ';

    // Get status from dbase
    $statusQuery = "SELECT id, name from " . $dbPre . "_status";
    $statusResults = $wpdb->get_results($statusQuery);

    for ($i = 0; $i < sizeof($statusResults); $i++) {
        $form .= '<option value="' . $statusResults[$i]->{'id'} . '">' . $statusResults[$i]->{'name'} . '</option>';
    }

    $form .= '
                        </select>
                        <h2>Ticket Title<span id="red">*</span></h2>
                        <input type="text">
                    </div>
                    <div class="ticket-form-right">
                        <h2>Assigned To<span id="red">*</span></h2>
                        <input type="text" value="Mr Tickets" readonly>
                        <div class="assign-options">
                            <input type="radio" class="spec-assign" name="assign" id="assign1" value="assign_self">
                            <label for="assign1">Assign to myself</label>
                            <br>
                            <input type="radio" class="spec-assign" name="assign" id="assign2" value="assign_op">
                            <label for="assign2">Assign to another Operator</label>
                            <br>
                            <input type="radio" class="spec-assign" name="assign" id="assign3" value="assign_spec">
                            <label for="assign3">Assign to Specialist of Problem Type</label>
                        </div>
                    </div>
                </div>
                <h2>Ticket Description<span id="red">*</span></h2>
                <textarea class="ticket-dec"></textarea>
                <h2>Problem Type<span id="red">*</span></h2>
    ';
        
    $expType = $dbPre . '_expertise_type';
    $expStaff = $dbPre . '_expertise_type_staff';

    $problemQuery = "
        SELECT exptype.name, exptype.id, exptype.parent_id, idcount
        FROM $expType as exptype 
        LEFT JOIN (
            SELECT expstaff.expertise_type_id, count(expstaff.expertise_type_id) as idcount 
            FROM $expStaff as expstaff
            GROUP BY expstaff.expertise_type_id
        ) $expStaff
        ON exptype.id = $expStaff.expertise_type_id
    ";

    $problems = $wpdb->get_results($problemQuery);

    $form .= '
                <div class="problem-selection">
                    <div class="ticket-ptype">
    ';

    // Each option is a value from db query
    $idFind = [];

    foreach ($problems as $id => $problem) {
        if (!$problem->{'parent_id'}) {
            $customAttribute = 'false';
            $manIcon = "<i class='fas fa-user-times'></i>";

            if ((int) $problem->{'idcount'} > 0) {
                $customAttribute = 'true';
                $manIcon = '<i class="fas fa-user"></i>';
            }
            
            if (findChildren(array($problem->{'id'}), 'COUNT', $problems)) {
                // Draw option with arrow
                $form .= '
                    <span
                        class="parent-problem"
                        data-has-specialists="' . $customAttribute . '"
                        onclick="openChildren(this, ' . $problem->{'id'}  . ')"
                    >
                        <div class="problem-left">' . $problem->{'name'} . '</div>
                        <div class="problem-right"> ' . $problem->{'idcount'} . $manIcon . '
                            <div class="problem-arrow">
                                <i class="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </span>
                ';
            } else {
                // Draw without arrow
                $form .= '
                    <span 
                        data-has-specialists="' . $customAttribute . '"
                        class="parent-problem"
                        onclick="openChildren(this, ' . $problem->{'id'} . ')"
                    > 
                        <div class="problem-left">' . $problem->{'name'} . '</div>
                        <div class="problem-right">' . $problem->{'idcount'} . $manIcon . '
                            <div class="problem-arrow"></div>
                        </div>
                    </span>
                ';
            }
            
        
            array_push($idFind, $problem->{"id"});
            unset($problems[$id]);
        } 
    }

    $form .= '</div>';
    $form .= findChildren($idFind, '', $problems);

    $form .= '</div></form></div>'; // END Ticket form

    echo $form;
}

function findChildren($idFind, $count, $problems) {
    $divNum = 0;
    $children = '';
    $childCount = 0;

    while (sizeof($idFind) > 0) {
        // Find all the children from $idFind
        $newFind = [];

        $children .= '<div class="problem-children ' . $divNum . '">';

        for ($i = 0; $i < sizeof($idFind); $i++) {
            // For each ID we have to find children for, loop through the problems array.
            foreach ($problems as $id => $problem) {
                // If parent id of problem matched the id in array we have found a child. 
                
                if ($idFind[$i] === $problem->{'parent_id'}) {
                    $childCount++;

                    // Print the option
                    $customAttribute = 'false';
                    $manIcon = '<i class="fas fa-user-times"></i>';

                    if ((int) $problem->{'idcount'} > 0) {
                        $customAttribute = 'true';
                        $manIcon = '<i class="fas fa-user"></i>';
                    }

                    if (findChildren([$problem->{'id'}], 'COUNT', $problems)) {
                        $children .= '
                            <span
                                class="child-problem p' . $problem->{'parent_id'} . '"
                                data-has-specialists="' . $customAttribute . '"
                                onclick="openChildren(this, ' . $problem->{'id'}  . ')"
                            >
                                <div class="problem-left">
                                    ' . $problem->{'name'} . '
                                </div>
                                <div class="problem-right">
                                    ' . $problem->{'idcount'} . $manIcon . '
                                    <div class="problem-arrow">
                                        <i class="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </span>
                        ';
                        
                    } else {
                        $children .= '
                            <span
                                data-has-specialists="' . $customAttribute . '" 
                                class="child-problem p' . $problem->{'parent_id'} . '"
                                onclick="openChildren(this, ' . $problem->{'id'} . ')"
                            >
                                <div class="problem-left">' . $problem->{'name'} . '</div>
                                <div class="problem-right">' . $problem->{'idcount'} . $manIcon . '
                                    <div class="problem-arrow"></div>
                                </div>
                            </span>
                        ';
                    }

                    // Add the id of this problem to new array so we can find its children later
                    array_push($newFind, $problem->{'id'});
                    unset($problems[$id]);
                }
            }
        }

        $children .= '</div>';

        $divNum++;

        // Looked for children of all elements that were in array.
        // Clear $toFind 
        $idFind = [];
        // Add new elements
        $idFind += $newFind;
    }

    if ($count == 'COUNT') {
        return $childCount;
    }
    
    return $children;
}