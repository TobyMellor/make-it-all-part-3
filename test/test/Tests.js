// Let assert be available in the test classes
global.assert = require('chai').assert;
	  
// Some global variables are stored in .window, which is undefined in Node.js
global.window = {};

// Make the API class available
const API = require('../resources/assets/js/pages/API').default;

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
		}/*,
		{
			"id": 2,
			"title": "Ticket 2 Title",
			"description": "Ticket 2 Description",
			"solution_id": 4,
			"author_id": 2,
			"assigned_to_operator_id": 1,
			"expertise_type_staff_id": null,
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
		}*/	
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
			"content": "Comment 2 Content",
			"ticket_id": 1,
			"author_id": 1,
			"call_id": null,
			"created_at": "2018-02-14 20:46:55",
			"updated_at": "2018-02-21 10:22:22",
			"created_at_human": "2 weeks ago"
		},
		{
			"id": 4,
			"content": "Comment 4 Content",
			"ticket_id": 1,
			"author_id": 1,
			"call_id": 2,
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
			"operator": true,
			"analyst": true,
			"specialist": false,
			"job_title": "Executive Officer",
			"phone_number": "(686) 917-4585",
			"attempts_rem": 3,
			"created_at": "2018-02-21 10:22:18",
			"updated_at": "2018-02-21 10:22:18",
			"expertise_types":[1],
			"department":{
				"id": 1,
				"name": "Computer Science",
				"phone_number": "+44 9432 535724",
				"created_at": "2018-02-21 10:22:16",
				"updated_at": "2018-02-21 10:22:16"
			}
		},
		{
			"id": 2,
			"department_id": 1,
			"email": "tony@makeitall.com",
			"name": "Tony Evans",
			"operator": false,
			"analyst": false,
			"specialist": true,
			"job_title": "Executive Officer",
			"phone_number": "(686) 917-4585",
			"attempts_rem": 3,
			"created_at": "2018-02-21 10:22:18",
			"updated_at": "2018-02-21 10:22:18",
			"expertise_types":[1],
			"department":{
				"id": 1,
				"name": "Computer Science",
				"phone_number": "+44 9432 535725",
				"created_at": "2018-02-21 10:23:16",
				"updated_at": "2018-02-21 10:23:16"
			}
		}
	],
	devices: [
	    {
			"id": 1,
		    "type": "device 1 type",
		    "make": "device 1 make",
		    "serial_no": 1,
		    "tickets": [1],
		    "created_at_human": "2018-02-09",
		    "updated_at_human": "2018-03-12"
		}
	],
	programs: [
	    {
			"id": 1,
		    "name": "program 1 name",
		    "tickets": [1],
		    "operating_system": "program 1 operating system",
		    "expiry_date": "2020-06-21",
		    "created_at_human": "2018-02-09",
		    "updated_at_human": "2018-03-18"
	    },
		{
			"id": 2,
		    "name": "program 2 name",
		    "tickets": [],
		    "operating_system": "program 2 operating system",
		    "expiry_date": "2020-06-21",
		    "created_at_human": "2018-02-09",
		    "updated_at_human": "2018-03-18"
	    }
	],
	expertise_types: [
	    {
			"id": 1,
		    "name": "expertise type 1 name",
		    "parent_id": null,
		    "children": [2]
		},
		{
			"id": 2,
		    "name": "expertise type 2 name",
		    "parent_id": 1,
		    "children": [3]
		},
		{
			"id": 3,
		    "name": "expertise type 3 name",
		    "parent_id": 1,
		    "children": []
		}
	],
	expertise_type_staff: [
	    {
			"id": 1,
		    "staff_id": 1,
		    "expertise_type_id": 1,
		    "tickets": [1]
		}
	]/*,
	departments: [
	]*/
});

//Readjust Tests

//
// Run Ticket Tests
//

new require('./tickets/TicketManagerTest.js');
new require('./tickets/TicketTest.js');
new require('./tickets/CallTest.js');
new require('./tickets/CommentTest.js');
new require('./tickets/StatusTest.js');
new require('./tickets/TicketStatusTest.js');
//new require('./tickets/TicketPageTest.js');

// [...]

//
// Run Staff Tests
//

new require('./staff/StaffManagerTest.js');
new require('./staff/EmployeeTest.js');

// [...]

//
//Run Software Tests
//

new require('./software/SoftwareManagerTest.js');
new require('./software/ProgramTest.js');

//
//Run Hardware Tests
//

new require('./hardware/HardwareManagerTest.js');
new require('./hardware/DeviceTest.js');

//
//Run Problem Type Tests
//

new require('./problem_types/ExpertiseTypeManagerTest.js');
new require('./problem_types/ExpertiseTypeStaffTest.js');
new require('./problem_types/ExpertiseTypeTest.js');
//new require('./problem_types/ProblemTypePageTest.js');