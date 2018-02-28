// Initialise authentication, set up token store
import Auth from "./pages/login/Auth";
window.auth = window.auth || new Auth();

// Initialise Turbolinks for page linking
window.Turbolinks.start();
window.Turbolinks.setProgressBarDelay(10);
$(document).off(); // Turbolinks maintains event handlers between pages without this
// Fade in for list view
$(document).on("turbolinks:before-render", e => {
	$(e.originalEvent.data.newBody).addClass("loading").find("#list-view, #single-view").css("opacity", "0");
});
$(document).on("turbolinks:load", e => {
	setTimeout(() => {
		$(document.body).removeClass("loading").find("#list-view, #single-view").removeAttr("style");
	}, 1000);
});
// Since nav element is persisted between pages, we need to manually set the active button
$("#nav").on("click", "ul li a", e => {
	$(e.currentTarget).parent().addClass("active").siblings().removeClass("active");
});

// Placeholder for each page making an authenticated request to the server
window.auth.me().done(() => setTimeout(() => window.auth.refresh(), 3600 * 60 * 60 - 600));

// Sign out button on all pages
$(".fa-sign-out").parent().click(e => {
	e.preventDefault();
	window.auth.logout();
});

// Tooltips activated on all elements with a relevant tooltip HTML attribute
$('[data-toggle="tooltip"]').tooltip();

// Date/time picker activated on all elements with relevant class
$('.timepicker').datetimepicker();

// Create new employee when searching for non-existent assignee
$(document).on('click', 'li.no-results', function(e) {
	var newValue = $(this).closest(".dropdown-menu.open").children(".bs-searchbox").children("input").val(),
	    $modal   = $('#new-staff-modal');

	$modal.modal('show');

	$modal.find('input[name="staff.name"]').val(newValue);
	$modal.find('input[name="event_target"]').val($(this).closest('.bootstrap-select').find('select').attr('name')); // when the staff member is created, this is the input field it'll update
});

$('#new-staff-modal, #new-ticket-modal, #follow-up-call-modal').on('show.bs.modal', function () {
	$(this).find('input, textarea')
		.not('.no-clear-on-show')
		.val('');

	$(this).find('#accordion .card:not(:first-child)').remove();

	var currentTime = new Date();

	$(this).find('.timepicker').val(('0' + (currentTime.getMonth() + 1)).slice(-2) + '/' + ('0' + currentTime.getDate()).slice(-2) + '/' + currentTime.getFullYear() + ' ' + ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2));
});

$(document).on('click', '#accordion .card .card-header', function() {
	$(this).closest('.card').find('.collapse').collapse('toggle');
});

$(document).on('click', '#accordion .card .card-header .remove-accordion', function() {
	$(this).closest('.card').fadeOut(200, function() {
		$(this).remove();
	});
});

$(document).on('hide.bs.collapse show.bs.collapse', '#accordion .collapse', function(e) {
	let isShow = e.type.split(".")[0] === "show";
	$(this).siblings('.card-header').find('.view-accordion').toggleClass('fa-chevron-up', !isShow).toggleClass('fa-chevron-down', isShow);
});

$('.search-field input').val('');

// Bootstrap Select Fix: Add back event listeners to open select field
$(document).on("click", ".bootstrap-select", function() {
	$(this).find('.dropdown-menu.open').toggle();
});

// Bootstrap modals fix: add back event listener
$(document).on("click", "body:not([data-page=\"staff\"]) [data-toggle=\"modal\"]", function() {
	$(this.dataset.target).modal("show");
});

function addItemToPicker(pickerElement, value, name) {
	$(pickerElement).append(new Option(name, value)).selectpicker('refresh').selectpicker('val', name);
}

var validationTimeout = window.validationTimeout = null;