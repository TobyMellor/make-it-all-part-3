module.exports = function(basePath) {
	const TicketManager = require(basePath + 'pages/tickets/TicketManager').default,
		  ticketManager = new TicketManager();

	describe('TicketManager', function() {
		describe('getCall()', function() {
			it('should return single instance of call', function() {
				assert.equal(ticketManager.getCall(1).constructor.name, 'Call');
				assert.equal(ticketManager.getCall(2).constructor.name, 'Call');
			});

			it('should return null if call is not found', function() {
				assert.equal(ticketManager.getCall(9999), null);
			});
		});

		describe('getCallsByTicketId()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getCallsByTicketId(1), 'Array');
			});

			it('should return correct amount of tickets', function() {
				assert.lengthOf(ticketManager.getCallsByTicketId(9999), 0);
				assert.lengthOf(ticketManager.getCallsByTicketId(1), 2);
				assert.lengthOf(ticketManager.getCallsByTicketId(2), 1);
			});
		});

		describe('getCallNotesByCallId()', function() {
			it('should return single instance of comment', function() {
				assert.equal(ticketManager.getCallNotesByCallId(1).constructor.name, 'Comment');
			});

			it('should return null if comment is not found', function() {
				assert.equal(ticketManager.getCallNotesByCallId(9999), null);
			});
		});

		describe('getStatus()', function() {
			it('should return single instance of status', function() {
				assert.equal(ticketManager.getStatus(1).constructor.name, 'Status');
			});
			
			it('should return null if status is not found', function() {
				assert.equal(ticketManager.getStatus(9999), null);
			});
		});
		
		describe('getStatusBySlug()', function() {
			it('should return single instance of status', function() {
				assert.equal(ticketManager.getStatusBySlug("new").constructor.name, 'Status');
			});
			
			it('should return null if status is not found', function() {
				assert.equal(ticketManager.getStatusBySlug("string"), null);
			});
		});
		
		describe('getTicket()', function() {
			it('should return single instance of ticket', function() {
				assert.equal(ticketManager.getTicket(1).constructor.name, 'Ticket');
			});
			
			it('should return null if ticket is not found', function() {
				assert.equal(ticketManager.getTicket(9999), null);
			});
		});
		
		describe('getTicketsWithIdIn()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsWithIdIn("new"), 'Array');
			});
			
			it('should return correct amount of tickets in a status', function() {
				assert.lengthOf(ticketManager.getTicketsWithIdIn("string"), 0);
				assert.lengthOf(ticketManager.getTicketsWithIdIn("new"), 0);
				//not sure
			});
		});
		
		describe('getTicketsWithSlug()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsWithSlug("new"), 'Array');
			});
			
			it('should return correct amount of tickets in a status', function() {
				assert.lengthOf(ticketManager.getTicketsWithSlug("string"), 0);
				assert.lengthOf(ticketManager.getTicketsWithSlug("new"), 1);
			});
		});
		
		describe('getTicketsWithSlugIn()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsWithSlugIn(["new"]), 'Array');
			});
			
			it('should return correct amount of tickets in one status', function() {			
				assert.lengthOf(ticketManager.getTicketsWithSlugIn(["string"]), 0);
				assert.lengthOf(ticketManager.getTicketsWithSlugIn(["new"]), 1);
			});

		});
		
		describe('getTicketsFromCall()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsFromCall(1), 'Array');
			});
			
			it('should return correct amount of tickets in a call', function() {
				assert.lengthOf(ticketManager.getTicketsFromCall(9999), 0);
				assert.lengthOf(ticketManager.getTicketsFromCall(1), 1);
				assert.lengthOf(ticketManager.getTicketsFromCall(2), 1);
			});
		});
		
		describe('getTicketsAssignedToStaffId()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsAssignedToStaffId(1), 'Array');
			});
			
			it('', function() {
			});
		});
		
		describe('getTicketsAssignedToStaffIds()', function() {
			it('', function() {
			});
		});
		
		describe('getMyTickets()', function() {
			it('', function() {
			});
		});
		
		describe('getTicketAssignedTo()', function() {
			it('should return single instance of employee', function() {// not sure
				//assert.equal(ticketManager.getTicketAssignedTo(ticketManager.ticket).constructor.name, 'Employee');
			});
		});
		
		describe('isTicketAssignedToSelf()', function() {
			it('should return a boolean', function() {
				//assert.isBoolean(ticketManager.isTicketAssignedToSelf({Ticket}));
			});
		});
		
		describe('getTicketStatus()', function() {
			it('should return single instance of ticket status', function() {
				assert.equal(ticketManager.getTicketStatus(1).constructor.name, 'TicketStatus');
			});
			
			it('should return null if ticket status not found', function() {
				assert.equal(ticketManager.getTicketStatus(9999), null);
			});
		});
		
		describe('getTicketStatusesByTicketId()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketStatusesByTicketId(1), 'Array');
			});
			
			it('should return correct amount of ticket statuses', function() {
				assert.lengthOf(ticketManager.getTicketStatusesByTicketId(1), 1);
			});
		});
		
		describe('getComment()', function() {
			it('should return single instance of comment', function() {
				assert.equal(ticketManager.getComment(1).constructor.name, 'Comment');
			});
		});
		
		describe('getCommentsByIds()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getCommentsByIds([1]), 'Array');
			});
			
			it('should return correct amount of comments', function() {
				assert.lengthOf(ticketManager.getCommentsByIds([1]), 1);
				assert.lengthOf(ticketManager.getCommentsByIds([9999]), 0);
			});
		});
		
		describe('getTicketsByExpertiseTypeId()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsByExpertiseTypeId(1), 'Array');
			});
			
			it('should return correct amount of tickets', function() {
				assert.lengthOf(ticketManager.getTicketsByExpertiseTypeId(1), 1);
				assert.lengthOf(ticketManager.getTicketsByExpertiseTypeId(9999), 0);
			});
		});
		
		describe('getTicketsByTicketIDs()', function() {
			it('should return Array', function() {
				assert.typeOf(ticketManager.getTicketsByTicketIDs([1]), 'Array');
			});
			
			it('should return correct amount of tickets', function() {
				assert.lengthOf(ticketManager.getTicketsByTicketIDs([1]), 1);
				assert.lengthOf(ticketManager.getTicketsByTicketIDs([9999]), 0);
			});
		});
	});
}