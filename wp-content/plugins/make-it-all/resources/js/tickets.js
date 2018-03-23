function addTicketForm() {
    var div = document.getElementsByClassName('form-wrapper')[0];
    var clone = div.cloneNode(true);

    // Forms that are added need a close button.
    clone.getElementsByClassName('ticket-nav')[0].innerHTML += '<div class="min-button" onclick="closeForm(this)">X</div>';
    document.getElementsByClassName('ticket-details-section')[0].append(clone);
}

function callerChange(datas, sel) {
    var selValue = sel.options[sel.selectedIndex].value;
    var ind = selValue - 1;
    var staffMember = datas[ind];
    var staffDetails = 
        '<div class="caller-det">' +
            '<span> ID Number: <b>' + staffMember.id + '</b></span>' +
            '<span> Name: <b>' + staffMember.name + '</b></span>' + 
            '<span> Email: <b> ' + staffMember.email + '</b></span>' +
            '<span>Job: <b>' + staffMember.job_title + '</b></span>' +
            '<span> Phone: <b>' + staffMember.phone_number + '</b></span>' +
        '</div>';

    document.getElementsByClassName('caller')[0].innerHTML = staffDetails;
}

function openChildren(clicked, parentID) {
    // Open all children with parentID
    var formParent = clicked.parentElement.parentElement;
    var parentElements = formParent.getElementsByClassName('parent-problem');
    var childrenElements = formParent.getElementsByClassName('child-problem');
    var elmsToShow = formParent.getElementsByClassName('p' + parentID);
    
    if (clicked.classList.contains('parent-problem')) {
        // Reset all parent nodes
        for (var i = 0; i < childrenElements.length; i++) {
            childrenElements[i].style.display = 'none';
            // Remove any active classes. 
        }
    } else if (clicked.classList.contains('child-problem')) {
        // Reset child nodes 
        var clickedParent = clicked.parentNode;
        var number = parseInt(clickedParent.classList.item(1)) + 1;
        // Get number of divs to loop through
        var pp = clickedParent.parentNode.childElementCount - 1;

        for (var k = 0; k < pp; k++) {
            var elm = formParent.getElementsByClassName("problem-children " + number)[0];
           
            var elmChildren = elm.getElementsByClassName("child-problem");

            for (var l = 0; l < elmChildren.length; l++) {
                elmChildren[l].style.display = 'none'; // Remove any active classes. 
            }
        }
    }

    // Show the children elements we want
    for (var i = 0; i < elmsToShow.length; i++) {
        elmsToShow[i].style.display = 'flex';
    }

    // Remove all active classes   
    for (var i = 0; i < parentElements.length; i++) {
        parentElements[i].classList.remove('ticket-active');
    }

    for (var i = 0; i < childrenElements.length; i++) {
        childrenElements[i].classList.remove('ticket-active');
    }

    // Add active class to clicked element
    clicked.classList.add('ticket-active');
    
    // Specialist Assignment 
    var hasSpec = clicked.getAttribute('data-has-specialists');

    if (hasSpec == 'true') {
        var radio = document.getElementsByClassName('spec-assign');

        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                if (radio[i].value == 'assign_spec') {
                    // Try to reassign best specialist to the ticket .  
                    console.log('Would try and reassign');
                }
            }
        }
    }
}

function minimise(formNav) {
    var formWrapper = formNav.parentElement.parentElement;
    // Parent is form wrapper, minimise/maximise the form in the wrapper
    var ticketForm = formWrapper.getElementsByClassName('ticket-form')[0];

    if (ticketForm.style.display == 'flex' || ticketForm.style.display == '') {
        ticketForm.style.display = 'none';
    } else {
        ticketForm.style.display = 'flex';
    }
}

function closeForm(formNav) {
    var formWrapper = formNav.parentElement.parentElement;
    formWrapper.remove();
}