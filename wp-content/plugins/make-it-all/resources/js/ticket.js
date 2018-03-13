
function addTicketForm() {
    var div = document.getElementsByClassName("formWrapper")[0];
    var clone = div.cloneNode(true);
    //Forms that are added need a close button.
    clone.getElementsByClassName("ticket_nav")[0].innerHTML += "<div class='minButton' onclick='closeForm(this)'>X</div>";
    document.getElementsByClassName("ticket_details_section")[0].append(clone);
}

function callerChange(datas, sel) {
    var selValue = sel.options[sel.selectedIndex].value;
    var ind = selValue - 1;
    var staffMemeber = datas[ind];
    var staffDetails = "<div class='caller_det'>";
    staffDetails += "<span> ID Number: <b>" + staffMemeber.id + "</b><span> Name: <b>" + staffMemeber.name + "</b></span>" + "<span> Email: <b> " + staffMemeber.email + "</b><span> Job: <b>" + staffMemeber.job_title + "</b><span> Phone: <b>" + staffMemeber.phone_number;
    staffDetails += "</div>";
    document.getElementsByClassName("caller")[0].innerHTML = staffDetails;
}

function openChildren(clicked, parentID) {
    //Open all children with parentID
    var formParent = clicked.parentElement.parentElement;
    var parentElements = formParent.getElementsByClassName("parentProblem");
    var childrenElements = formParent.getElementsByClassName("childProblem");
    var elmsToShow = formParent.getElementsByClassName("p" + parentID);
    if (clicked.classList.contains("parentProblem")) {
        //Reset all parent nodes
        for (var i = 0; i < childrenElements.length; i++) {
            childrenElements[i].style.display = "none";
            //Remove any active classes. 
        }
    } else if (clicked.classList.contains("childProblem")) {
        //Reset child nodes 
        var clickedParent = clicked.parentNode;
        var number = parseInt(clickedParent.classList.item(1)) + 1;
        console.log(number);
        //Get number of divs to loop through
        var pp = clickedParent.parentNode.childElementCount - 1;
        for (var k = 0; k < pp; k++) {
            var elm = formParent.getElementsByClassName("problemChildren " + number)[0];
           
            var elmChildren = elm.getElementsByClassName("childProblem");
            console.log(elmChildren);
            for (var l = 0; l < elmChildren.length; l++) {
                elmChildren[l].style.display = "none";
                //Remove any active classes. 
            }
            


        }

    }
    //Show the children elements we want
    for (var i = 0; i < elmsToShow.length; i++) {
        elmsToShow[i].style.display = "flex";
    }
    //Remove all active classes   
    for (var i = 0; i < parentElements.length; i++) {
        parentElements[i].classList.remove("active");
    }
    for (var i = 0; i < childrenElements.length; i++) {
        childrenElements[i].classList.remove("active");
    }
    //Add active class to clicked element
    clicked.classList.add("active");
    
    //Specialist Assignment 
    var hasSpec = clicked.getAttribute("data-has-specialists");
    if (hasSpec == "true") {
        var radio = document.getElementsByClassName("specAssign");
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                if (radio[i].value == "assignSpec") {
                    //Try to reassign best specialist to the ticket .  
                    console.log("Would try and reassign");
                }
            }
        }
    }
}

function minimise(formNav) {
    var formWrapper = formNav.parentElement.parentElement;
    //Parent is form wrapper, minimise/maximise the form in the wrapper
    var ticketForm = formWrapper.getElementsByClassName("ticket_form")[0];
    console.log(ticketForm.style.display);
    if (ticketForm.style.display == "flex" || ticketForm.style.display == "") {
        ticketForm.style.display = "none";
    } else {
        ticketForm.style.display = "flex";
    }

}

function closeForm(formNav) {
    var formWrapper = formNav.parentElement.parentElement;
    formWrapper.remove();
}
