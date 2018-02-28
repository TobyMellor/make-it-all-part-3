import SoftwareManager from "../SoftwareManager";

//Handler for "Edit Program" button is pressed in the modal
$("#edit-program-modal #edit-program").click(e => {
	e.preventDefault();

	// Get all form data from within modal as object
	let formData = $("#edit-program-modal form").serializeObject(true);

	// Perform validation on entire object
	if (formData.isValid()) {
        editProgram(formData);
	}
});

async function editProgram(formData) {
    //Retrieving data from Modal
    var name = formData.program.name;
    var operating_system = formData.program.operating_system;
    //Formatting date to one that works with laravel and the database
    var expiry_date = $.datepicker.formatDate("yy-mm-dd", new Date(formData.program.expiry_date));
    //Putting all data into an object
    var program = {name: name, operating_system: operating_system, expiry_date: expiry_date};
    //Updates program with user-entered data
    (new SoftwareManager()).updateProgram(formData.program.id, program);
    //Refreshing page to show newly editing content
    window.softwarePage.showPrograms()
    window.softwarePage.showTableRowDetails(formData.program.id);
    $('#edit-program-modal').modal('hide');
}