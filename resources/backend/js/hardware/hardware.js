$(() => {

$('form').submit(function(e) {
	console.log("form submit");
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});
});