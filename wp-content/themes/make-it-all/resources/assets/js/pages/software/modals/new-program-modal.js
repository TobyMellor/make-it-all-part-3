import SoftwareManager from "../SoftwareManager";

//Handler for "New Program" button is pressed in the modal
$("#new-program-modal #new-program").click(e => {
	e.preventDefault();

	// Get all form data from within modal as object
	let formData = $("#new-program-modal form").serializeObject(true);

	// Perform validation on entire object
	if (formData.isValid()) {
        newProgram(formData);
	}
});

async function newProgram(formData) {
    //Retrieving data from Modal
    var name = formData.program.name;
    var operating_system = formData.program.operating_system;
    //Formatting date to a database friendly format
    var expiry_date = $.datepicker.formatDate("yy-mm-dd", new Date(formData.program.expiry_date));
    //Mapping data to an object
    var program = {name: name, operating_system: operating_system, expiry_date: expiry_date};
    //Creating program using data from modal and capturing the returned program
    var prog = await (new SoftwareManager()).createProgram(program);
    //Refreshiing data to show new program
    window.softwarePage.showPrograms()
    window.softwarePage.showTableRowDetails(prog.id);
	$("[name='program.name']").val("")
	$("[name='program.expiry_date']").val("")
    $('#new-program-modal').modal('hide');
}
