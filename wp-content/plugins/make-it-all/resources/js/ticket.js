function addTicketForm() {
    var div = document.getElementsByClassName("ticket_form")[0];
    var clone = div.cloneNode(true);
    document.getElementsByClassName("ticket_details_section")[0].append(clone);
}

function callerChange(datas, sel) {
    var selValue = sel.options[sel.selectedIndex].value;
    var ind = selValue - 1;
    var staffMemeber = datas[ind];

    var staffDetails = "<div class='caller_det'>";
    staffDetails += staffMemeber.name + staffMemeber.email + staffMemeber.job_title + staffMemeber.phone_number;
    staffDetails += "</div>";
    document.getElementsByClassName("caller")[0].innerHTML = staffDetails;


}
