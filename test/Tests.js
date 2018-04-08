// Let assert be available in the test classes
global.assert = require('chai').assert;
	  
// Some global variables are stored in .window, which is undefined in Node.js
global.window = {};

// Make the API class available
const API = require('../resources/frontend/js/pages/API').default;

// Load in some data to test with (only load in what the Manager needs)
global.api = new API({
	calls: [
		{
			"id": 1,
			"time": "2017-10-13 10:00:51",
			"operator_id": 1,
			"caller_id": 2,
			"created_at": "2018-02-21 10:22:21",
			"updated_at": "2018-02-21 10:22:21",
			"tickets": [1, 2]
		},
		{
			"id": 2,
			"time": "2017-08-10 10:20:23",
			"operator_id": 1,
			"caller_id": 2,
			"created_at": "2018-02-21 10:22:21",
			"updated_at": "2018-02-21 10:22:21",
			"tickets": [1]
		}
	],
	tickets: [
		{
			"id": 1,
			"title": "Ticket 1 Title",
			"description": "Ticket 1 Description",
			"solution_id": 4,
			"author_id": 1,
			"assigned_to_operator_id": null,
			"expertise_type_staff_id": 1,
			"created_at": "2018-02-21 10:22:21",
			"updated_at": "2018-02-21 12:46:37",
			"calls": [1, 2],
			"devices": [1],
			"programs":[1],
			"comments": [1, 2],
			"status_history": [1],
			"expertise_type": [1],
			"status": 1,
			"created_at_human": "1 week ago",
			"updated_at_human": "1 week ago"
		}
	],
	statuses: [
		{
			"id": 1,
			"slug": "new",
			"name": "New",
			"tickets":[1, 2]
		}
	],
	ticket_statuses: [
		{
			"id": 1,
			"ticket_id": 1,
			"status_id": 1,
			"staff_id": 1,
			"created_at": "2018-02-01 22:37:27",
			"updated_at": "2018-02-21 10:22:21",
			"created_at_human": "3 weeks ago"
		},
		{
			"id": 2,
			"ticket_id": 2,
			"status_id": 1,
			"staff_id": 1,
			"created_at": "2018-02-18 12:13:43",
			"updated_at": "2018-02-21 10:22:21",
			"created_at_human": "1 week ago"
		}
	],
	comments: [
		{
			"id": 1,
			"content": "Comment 1 Content",
			"ticket_id": 1,
			"author_id": 1,
			"call_id": 1,
			"created_at": "2018-02-14 20:46:55",
			"updated_at": "2018-02-21 10:22:22",
			"created_at_human": "2 weeks ago"
		},
		{
			"id": 2,
			"content": "Comment 1 Content",
			"ticket_id": 1,
			"author_id": 1,
			"call_id": null,
			"created_at": "2018-02-14 20:46:55",
			"updated_at": "2018-02-21 10:22:22",
			"created_at_human": "2 weeks ago"
		}
	],
	staff: [
		{
			"id": 1,
			"department_id": 1,
			"email": "dana@makeitall.com",
			"name": "Dana Gibson",
			"operator": 1,
			"analyst": 1,
			"specialist": 0,
			"job_title": "Executive Officer",
			"phone_number": "(686) 917-4585",
			"attempts_rem": 3,
			"created_at": "2018-02-21 10:22:18",
			"updated_at": "2018-02-21 10:22:18",
			"expertise_types":[],
			"department":{
				"id": 1,
				"name": "Computer Science",
				"phone_number": "+44 9432 535724",
				"created_at": "2018-02-21 10:22:16",
				"updated_at": "2018-02-21 10:22:16"
			}
		}
	]
});

//
// Run Ticket Tests
//

new require('./tickets/TicketManagerTest.js');
new require('./tickets/TicketTest.js');

// [...]

//
// Run Staff Tests
//

// [...]
