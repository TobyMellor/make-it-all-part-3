$(() => {
	if (!window.getUrlParameter('page').includes('department')) return;

	$('form').submit(function(e) {
		if (!$(this).serializeObject(true).isValid())
			e.preventDefault();
	});
});