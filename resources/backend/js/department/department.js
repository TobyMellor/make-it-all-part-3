$(() => {
	$('form').submit(function(e) {
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});
});