import ExpertiseTypeManager from "./ExpertiseTypeManager";

jQuery(() => {
	let expertiseTypes = [
		{
			id: 0,
			name: 'Printer',
			parent_id: null,
			children: [1, 2]
		},
		{
			id: 1,
			name: 'Ink',
			parent_id: 0,
			children: [3]
		},
		{
			id: 2,
			name: 'Paper',
			parent_id: 0,
			children: []
		},
		{
			id: 3,
			name: 'Low Ink',
			parent_id: 1,
			children: [4]
		},
		{
			id: 4,
			name: 'Low Magenta',
			parent_id: 3,
			children: []
		},
		{
			id: 5,
			name: 'Spillage',
			parent_id: 1,
			children: []
		},
		{
			id: 6,
			name: 'Vending Machine',
			parent_id: null,
			children: []
		}
	];

	let expertiseTypeManager = new ExpertiseTypeManager(expertiseTypes);

	// load root problem types
	expertiseTypeManager.loadChildrenExpertiseTypes($('.type-columns'));

	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle'
	});

	// On clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function() {
		let id = Number($(this).data('expertiseTypeId'));

		// show the children of the selected type in the main view
		expertiseTypeManager.loadChildrenExpertiseTypes($('.type-columns'), $(this));
	});

	// Creating a new problem type with the name given by the user
	$(document).on('click', '.create-problem-type', function() {
		// Get the new name of a problem type
		let name = $(this).parent().siblings('input').val();

		// Check if a name has been given, don't create a problem type with no name
		if (!name) return;

		// Get the parent if it exists for the new problem type to be added to
		const parentId = $(this).closest('.type-column').prev().find('.active').data("expertiseTypeId");

		// Create problem type
		expertiseTypeManager.createExpertiseType(name, parentId);
	});
});