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
    console.log(clicked);
    var parentElements = document.getElementsByClassName("parentProblem");
    var childrenElements = document.getElementsByClassName("childProblem");
    var elmsToShow = document.getElementsByClassName("p" + parentID);
    if (clicked.classList.contains("parentProblem")) {
        for (var i = 0; i < childrenElements.length; i++) {
            childrenElements[i].style.display = "none";
            //Remove any active classes. 
        }
    } else if (clicked.classList.contains("childProblem")) {
        //Get the div number
        var clickedParent = clicked.parentNode;
        var number = parseInt(clickedParent.classList.item(1)) + 1;
        console.log(number);
        //Get total divs
        var pp = clickedParent.parentNode.childElementCount - 1;
        console.log(pp);
        for (var k = 0; k < pp; k++) {
            var elm = document.getElementsByClassName("problemChildren " + number)[0];
            var elmChildren = elm.childNodes;



            for (var l = 0; l < elmChildren.length; l++) {
                elmChildren[l].style.display = "none";
                //Remove any active classes. 
            }


        }

    }
    for (var i = 0; i < elmsToShow.length; i++) {
        elmsToShow[i].style.display = "block";
    }
    //Remove all active classes   
    for (var i = 0; i < parentElements.length; i++) {
        parentElements[i].classList.remove("active");
    }
    for (var i = 0; i < childrenElements.length; i++) {
        childrenElements[i].classList.remove("active");
    }
    clicked.classList.add("active");
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
