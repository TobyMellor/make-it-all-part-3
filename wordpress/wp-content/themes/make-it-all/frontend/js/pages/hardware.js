/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Manager2 = __webpack_require__(3);

var _Manager3 = _interopRequireDefault(_Manager2);

var _Call = __webpack_require__(10);

var _Call2 = _interopRequireDefault(_Call);

var _Comment = __webpack_require__(8);

var _Comment2 = _interopRequireDefault(_Comment);

var _Status = __webpack_require__(14);

var _Status2 = _interopRequireDefault(_Status);

var _Ticket = __webpack_require__(15);

var _Ticket2 = _interopRequireDefault(_Ticket);

var _TicketStatus = __webpack_require__(18);

var _TicketStatus2 = _interopRequireDefault(_TicketStatus);

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TicketManager
 *
 * Responsible for parsing the AJAX request containing statuses
 * and tickets and creating the corresponding classes. 
 * Contains all functions to return and search the data.
 *
 * TicketManager should never know about the DOM
 */
var TicketManager = function (_Manager) {
	_inherits(TicketManager, _Manager);

	function TicketManager() {
		_classCallCheck(this, TicketManager);

		var _this = _possibleConstructorReturn(this, (TicketManager.__proto__ || Object.getPrototypeOf(TicketManager)).call(this));

		_this.expertiseTypeManager = window.expertiseTypeManager || new _ExpertiseTypeManager2.default();

		_this.calls = api.calls.map(function (e) {
			return new _Call2.default(e);
		});
		_this.tickets = api.tickets.map(function (e) {
			return new _Ticket2.default(e);
		});
		_this.comments = api.comments.map(function (e) {
			return new _Comment2.default(e);
		});
		_this.statuses = api.statuses.map(function (e) {
			return new _Status2.default(e);
		});
		_this.ticketStatuses = api.ticketStatuses.map(function (e) {
			return new _TicketStatus2.default(e);
		});
		return _this;
	}

	/**
  * Get the call with the id
  *
  * @param {Integer} callId representing id column of call table
  * @return {Call} single instance of Call with callId
  */


	_createClass(TicketManager, [{
		key: "getCall",
		value: function getCall(callId) {
			return this.calls.find(function (call) {
				return call.id === callId;
			}) || null;
		}

		/**
   * Get the calls referencing a specific ticket
   *
   * @param {Integer} ticketId representing id column of ticket table
   * @return {Array} containing Array of Ticket instances
   */

	}, {
		key: "getCallsByTicketId",
		value: function getCallsByTicketId(ticketId) {
			return this.calls.filter(function (call) {
				return call._tickets.indexOf(ticketId) > -1;
			});
		}

		/**
   * Get the notes for a call
   *
   * @param {Integer} callId representing id column of call table
   * @return {Comment} single instance of Comment with callId
   */

	}, {
		key: "getCallNotesByCallId",
		value: function getCallNotesByCallId(callId) {
			return this.comments.find(function (comment) {
				return comment._call === callId;
			}) || null;
		}

		/**
   * Get the status with the ID
   *
   * @param {Integer} statusId representing id column of Status table
   * @return {Status} single instance of Status with ID
   */

	}, {
		key: "getStatus",
		value: function getStatus(statusId) {
			return this.statuses.find(function (status) {
				return status.id === statusId;
			}) || null;
		}

		/**
   * Get the status with the slug
   *
   * @param {String} statusSlug representing slug column of Status table
   * @return {Status} single instance of Status with statusSlug
   */

	}, {
		key: "getStatusBySlug",
		value: function getStatusBySlug(statusSlug) {
			return this.statuses.find(function (status) {
				return status.slug === statusSlug;
			}) || null;
		}

		/**
   * Get the ticket with the id
   *
   * @param {Integer} ticketId representing id column of ticket table
   * @return {Ticket} single instance of Ticket with ticketId
   */

	}, {
		key: "getTicket",
		value: function getTicket(ticketId) {
			return this.tickets.find(function (ticket) {
				return ticket.id === ticketId;
			}) || null;
		}

		/**
   * Get ticket currently in a status
   *
   * @param {String} statusSlug representing slug column of status table
   * @return {Array} Array of Ticket instances in a Status
   */

	}, {
		key: "getTicketsWithIdIn",
		value: function getTicketsWithIdIn(ticketIds) {
			return this.tickets.filter(function (ticket) {
				return ticketIds.indexOf(ticket.id) > -1;
			});
		}

		/**
   * Get ticket currently in a status
   *
   * @param {String} statusSlug representing slug column of status table
   * @return {Array} Array of Ticket instances in a Status
   */

	}, {
		key: "getTicketsWithSlug",
		value: function getTicketsWithSlug(statusSlug) {
			return this.tickets.filter(function (ticket) {
				return ticket.status.slug === statusSlug;
			});
		}

		/**
   * Get ticket currently in one of many given statuses
   *
   * @param {Array} statusSlugs Array of Strings's representing status slugs
   * @return {Array} Array of Ticket instances in one of many given Status's
   */

	}, {
		key: "getTicketsWithSlugIn",
		value: function getTicketsWithSlugIn(statusSlugs) {
			var tickets = this.tickets.slice(0);

			for (var i = tickets.length - 1; i >= 0; i--) {
				if (statusSlugs.indexOf(tickets[i].status.slug) === -1) tickets.splice(i, 1);
			}

			return tickets;
		}

		/**
   * Get tickets referenced in a call with the id
   *
   * @param {Integer} callId representing id column of call table
   * @return {Array} Array of Ticket instances referenced in a Call
   */

	}, {
		key: "getTicketsFromCall",
		value: function getTicketsFromCall(callId) {
			return this.tickets.filter(function (ticket) {
				return ticket._calls.indexOf(callId) > -1;
			});
		}
	}, {
		key: "getTicketsAssignedToStaffId",
		value: function getTicketsAssignedToStaffId(staffId) {
			var expertiseTypeStaff = this.expertiseTypeManager.expertiseTypeStaff;

			return this.tickets.filter(function (ticket) {
				return ticket._assigned_to_operator === staffId || expertiseTypeStaff.find(function (e) {
					return e.id === ticket._expertise_type_staff;
				})._staff === staffId;
			});
		}
	}, {
		key: "getTicketsAssignedToStaffIds",
		value: function getTicketsAssignedToStaffIds(staffIds) {
			var expertiseTypeStaff = this.expertiseTypeManager.expertiseTypeStaff,
			    tickets = this.tickets,
			    result = {};

			staffIds.forEach(function (staffId) {
				result[staffId] = tickets.filter(function (ticket) {
					return ticket._assigned_to_operator === staffId || expertiseTypeStaff.find(function (e) {
						return e.id === ticket._expertise_type_staff;
					})._staff === staffId;
				});
			});

			return result;
		}
	}, {
		key: "getMyTickets",
		value: function getMyTickets() {
			return this.getTicketsAssignedToStaffId(ticketPage.staffManager.currentUser());
		}

		/**
   * Get the operator or specialist the ticket is assigned to.
   *
   * If an operator is not assigned, then the ExpertiseTypeStaff will
   * be used.
   *
   * @param {Ticket} ticket
   * @return {Employee} Employee the ticket is assigned to
   */

	}, {
		key: "getTicketAssignedTo",
		value: function getTicketAssignedTo(ticket) {
			if (ticket._assigned_to_operator !== null) return ticket.assigned_to_operator;

			return ticket.expertise_type_staff.staff; // only use expertise_type_staff if there is no assigned operator
		}

		/**
   * If ticket is assigned to the currently logged in
   * user.
   *
   * @param {Ticket} ticket
   * @return {Boolean} If assigned to self
   */

	}, {
		key: "isTicketAssignedToSelf",
		value: function isTicketAssignedToSelf(ticket) {
			return this.getTicketAssignedTo(ticket) === ticketPage.staffManager.currentUser();
		}

		/**
   * Get the ticket status with the id
   *
   * @param {Integer} ticketStatusId representing id column of ticket_status table
   * @return {TicketStatus} single instance of TicketStatus with ticketStatusId
   */

	}, {
		key: "getTicketStatus",
		value: function getTicketStatus(ticketStatusId) {
			return this.ticketStatuses.find(function (ticketStatus) {
				return ticketStatus.id === ticketStatusId;
			}) || null;
		}

		/**
   * Get the ticket statuses for a ticket
   *
   * @p
   */

	}, {
		key: "getTicketStatusesByTicketId",
		value: function getTicketStatusesByTicketId(ticketId) {
			return this.ticketStatuses.filter(function (ticketStatus) {
				return ticketStatus._ticket === ticketId;
			});
		}

		/**
   * Get the comment with the id
   *
   * @param {Integer} commentId representing id column of comment table
   * @return {Comment} single instance of Comment with commentId
   */

	}, {
		key: "getComment",
		value: function getComment(commentId) {
			return this.comments.find(function (comment) {
				return comment.id === commentId;
			});
		}

		/**
   * Get all comments
   *
   * @returns {Array} containing Array of Comment instances
   */

	}, {
		key: "getCommentsByIds",
		value: function getCommentsByIds(ids) {
			return this.comments.filter(function (comment) {
				return ids.indexOf(comment.id) > -1;
			});
		}

		/**
   * Get all tickets associated with an expertise type staff
   *
   * @param expertiseTypeStaffId The ID of the expertise type staff to find tickets for
   * @returns {Array} All matching tickets
   */

	}, {
		key: "getTicketsByExpertiseTypeId",
		value: function getTicketsByExpertiseTypeId(expertiseTypeId) {
			var _ref;

			var expertiseTypes = this.expertiseTypeManager.getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId),
			    ticketIds = (_ref = []).concat.apply(_ref, _toConsumableArray(expertiseTypes.map(function (e) {
				return e.tickets;
			}))); // move all of expertiseTypes[i].tickets into a single array

			return this.getTicketsWithIdIn(ticketIds);
		}

		/**
   * Search tickets on a property for a provided search query
   *
   * @param {String} query Case insensitive string to search elements
   * @param {Array} properties Array of strings representing elements property names to search through
   * @return {Array} Array of Ticket instances satisfying the search condition
   */

	}, {
		key: "search",
		value: function search(query, properties) {
			return _get(TicketManager.prototype.__proto__ || Object.getPrototypeOf(TicketManager.prototype), "search", this).call(this, this.tickets, query, properties);
		}

		/**
   * Gets a collection of tickets by their IDs
   *
   * @param {Array} ids The IDs of the requested tickets 
   * @return {Array} Array of Ticket instances
   */

	}, {
		key: "getTicketsByTicketIDs",
		value: function getTicketsByTicketIDs(ids) {
			return this.tickets.filter(function (ticket) {
				return ids.indexOf(ticket.id) > -1;
			});
		}
	}]);

	return TicketManager;
}(_Manager3.default);

exports.default = TicketManager;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Manager2 = __webpack_require__(3);

var _Manager3 = _interopRequireDefault(_Manager2);

var _Employee = __webpack_require__(11);

var _Employee2 = _interopRequireDefault(_Employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * StaffManager
 *
 * Responsible for parsing the AJAX request containing staff
 * creating the corresponding classes. 
 * Contains all functions to return and search the data.
 *
 * StaffManager should never know about the DOM
 */
var StaffManager = function (_Manager) {
	_inherits(StaffManager, _Manager);

	function StaffManager() {
		_classCallCheck(this, StaffManager);

		var _this = _possibleConstructorReturn(this, (StaffManager.__proto__ || Object.getPrototypeOf(StaffManager)).call(this));

		_this.staff = api.staff.map(function (e) {
			return new _Employee2.default(e);
		});
		_this.departments = api.departments;
		return _this;
	}

	/**
  * Get the employee with the given ID number
  *
  * @param id The ID number of the employee to return
  * @returns {Employee}
  */


	_createClass(StaffManager, [{
		key: "get",
		value: function get(id) {
			return this.staff.find(function (employee) {
				return employee.id === id;
			}) || null;
		}

		/**
   * Get all employees with a specific value of a permission
   *
   * @param permission The permission to search for
   * @param value The value of the permission (true/false) for whether the permission is granted
   */

	}, {
		key: "getEmployeesWithPermission",
		value: function getEmployeesWithPermission(permission, value) {
			return this.staff.filter(function (employee) {
				return employee.access[permission] == value;
			});
		}

		/**
   * Get the currently logged in user
   *
   * @param asEmployee method returns ID by default or Employee if truthy
   */

	}, {
		key: "currentUser",
		value: function currentUser() {
			var asEmployee = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			var id = 1; // TODO: get user from WP

			// Get Employee with ID
			if (asEmployee) {
				return this.get(id);
			}

			return id;
		}

		/**
   * Get all specialists who specialise in a certain problem type
   *
   * @param expertiseTypeId The ID of the expertise type to find employees for
   */

	}, {
		key: "getSpecialists",
		value: function getSpecialists(expertiseType) {
			var staff = this.staff,
			    filter = function filter(id) {
				return function (employee) {
					return employee._specialisms.indexOf(id) > -1;
				};
			};

			if ((typeof expertiseType === "undefined" ? "undefined" : _typeof(expertiseType)) === "object") {
				var output = [];

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = expertiseType[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var id = _step.value;

						output.push(staff.filter(filter(id)));
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return output;
			} else {
				return staff.filter(filter(expertiseType));
			}
		}

		/**
   * Determine whether the passed employee has the passed problem type
   *
   * @param employee The employee to inspect
   * @param expertiseTypeId The ID of the expertise type to look for
   * @returns {boolean} Whether the employee has the problem type as a specialism
   */

	}, {
		key: "hasSpecialism",
		value: function hasSpecialism(employee, expertiseTypeId) {
			return employee._specialisms.indexOf(expertiseTypeId) > -1;
		}

		/**
   * Search all employees for the given query
   *
   * @param query The query string to search for
   * @param properties The properties to search through
   * @returns All matching results to the query
   */

	}, {
		key: "search",
		value: function search(query, properties) {
			return _get(StaffManager.prototype.__proto__ || Object.getPrototypeOf(StaffManager.prototype), "search", this).call(this, this.staff, query, properties);
		}
	}]);

	return StaffManager;
}(_Manager3.default);

exports.default = StaffManager;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Manager2 = __webpack_require__(3);

var _Manager3 = _interopRequireDefault(_Manager2);

var _ExpertiseType = __webpack_require__(12);

var _ExpertiseType2 = _interopRequireDefault(_ExpertiseType);

var _ExpertiseTypeStaff = __webpack_require__(13);

var _ExpertiseTypeStaff2 = _interopRequireDefault(_ExpertiseTypeStaff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ExpertiseTypeManager
 *
 * Responsible for storing and retrieving
 * expertise types across the system.
 *
 * ExpertiseTypeManager should never know about the DOM
 */
var ExpertiseTypeManager = function (_Manager) {
	_inherits(ExpertiseTypeManager, _Manager);

	function ExpertiseTypeManager() {
		_classCallCheck(this, ExpertiseTypeManager);

		var _this = _possibleConstructorReturn(this, (ExpertiseTypeManager.__proto__ || Object.getPrototypeOf(ExpertiseTypeManager)).call(this));

		_this.expertiseTypes = api.expertiseTypes.map(function (e) {
			return new _ExpertiseType2.default(e);
		});
		_this.expertiseTypeStaff = api.expertiseTypeStaff.map(function (e) {
			return new _ExpertiseTypeStaff2.default(e);
		});
		return _this;
	}

	/**
  * Return all ExpertiseType's with no parent (in the first column)
  *
  * @return {Array}
  */


	_createClass(ExpertiseTypeManager, [{
		key: "getRootExpertiseTypes",
		value: function getRootExpertiseTypes() {
			return this.expertiseTypes.filter(function (expertiseType) {
				return expertiseType._parent == null;
			});
		}

		/**
   * Get a specific ExpertiseType
   *
   * @param {Integer} expertiseTypeId representing ExpertiseType.id
   * @return {ExpertiseType}
   */

	}, {
		key: "getExpertiseType",
		value: function getExpertiseType(expertiseTypeId) {
			return this.expertiseTypes.find(function (expertiseType) {
				return expertiseType.id === expertiseTypeId;
			});
		}

		/**
   * Get ExpertiseTypes with IDs from an Array of IDs
   *
   * @param {Array} expertiseTypeIds Array of Integers representing ExpertiseType.id's
   * @return {Array} Array of ExpertiseTypes satisfying the condition
   */

	}, {
		key: "getExpertiseTypes",
		value: function getExpertiseTypes(expertiseTypeIds) {
			return this.expertiseTypes.filter(function (expertiseType) {
				return expertiseTypeIds.indexOf(expertiseType.id) > -1;
			});
		}

		/**
   * Get all corresponding ExpertiseTypeStaff's linking to ExpertiseType
   *
   * @param {Integer} expertiseTypeId representing ExpertiseType.id
   * @return {Array} Array of corresponding ExpertiseTypeStaff's linking to ExpertiseType
   */

	}, {
		key: "getExpertiseTypeStaffByExpertiseTypeId",
		value: function getExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId) {
			return this.expertiseTypeStaff.filter(function (expertiseTypeStaff) {
				return expertiseTypeStaff._expertise_type === expertiseTypeId;
			});
		}

		/**
   * Get ordered array of parents of an ExpertiseType
   *
   * @param {ExpertiseType} expertiseType starting ExpertiseType to find parents from
   * @return {Array} Array of ExpertiseType parents, and the starting ExpertiseType
   */

	}, {
		key: "getExpertiseTypeChain",
		value: function getExpertiseTypeChain(expertiseType) {
			var expertiseTypeParent = expertiseType,
			    expertiseTypes = [expertiseTypeParent];

			while (expertiseTypeParent != null) {
				expertiseTypeParent = expertiseTypeParent.parent;

				if (expertiseTypeParent != null) {
					expertiseTypes.push(expertiseTypeParent);
				}
			}

			return expertiseTypes;
		}

		/**
   * Get a specific ExpertiseTypeStaff record, with an exact
   * ExpertiseTypeStaff._staff and ExpertiseTypeStaff._expertise_type ID pair
   *
   * @param {Integer} expertiseTypeId representing ExpertiseTypeStaff._expertise_type
   * @param {Integer} staffId representing ExpertiseTypeStaff._staff
   * @return {ExpertiseTypeStaff} null, or the record desired
   */

	}, {
		key: "getExpertiseTypeStaffByStaffId",
		value: function getExpertiseTypeStaffByStaffId(expertiseTypeId, staffId) {
			return this.expertiseTypeStaff.find(function (expertiseTypeStaff) {
				return expertiseTypeStaff._staff === staffId && expertiseTypeStaff._expertise_type;
			}) || null;
		}

		/**
   * Get a specific ExpertiseTypeStaff by ID
   *
   * @param {Integer} expertiseTypeStaffId representing ExpertiseTypeStaff.id
   * @return {ExpertiseTypeStaff}
   */

	}, {
		key: "getExpertiseTypeStaff",
		value: function getExpertiseTypeStaff(expertiseTypeStaffId) {
			return this.expertiseTypeStaff.find(function (expertiseTypeStaff) {
				return expertiseTypeStaff.id === expertiseTypeStaffId;
			}) || null;
		}
	}, {
		key: "search",
		value: function search(query, properties) {
			return _get(ExpertiseTypeManager.prototype.__proto__ || Object.getPrototypeOf(ExpertiseTypeManager.prototype), "search", this).call(this, this.expertiseTypes, query, properties);
		}
	}]);

	return ExpertiseTypeManager;
}(_Manager3.default);

exports.default = ExpertiseTypeManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manager
 *
 * Abstract class extended by all managers,
 * contains methods that may be useful to the managers.
 */
var Manager = function () {
	function Manager() {
		_classCallCheck(this, Manager);
	}
	//


	/**
  * Search array of elements for query in given property names
  * 
  * @param elements Array of objects to be searched through
  * @param query Case insensitive string to search elements
  * @param properties Array of strings representing elements property names to search through
  */


	_createClass(Manager, [{
		key: "search",
		value: function search() {
			var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
			var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			query = query.toLowerCase(); // Normalise query (and properties individually later)

			return elements.filter(function (el) {
				// Get all elements
				return properties.some(function (prop) {
					// Check properties until match is found
					if (String(el[prop]).toLowerCase().includes(query)) return true; // Determine if property is a match for query
				});
			});
		}
	}]);

	return Manager;
}();

exports.default = Manager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DynamicPage
 *
 * Extended by every page, e.g. TicketPage.
 * Contains functions that are repeated often among
 * pages, such as updating tables or updating the navbar
 */
var DynamicPage = function () {
	/**
  * Create a new instance of a page using the given selectors
  * to define the bounds of the page, in cases where this DynamicPage
  * is not the only page on the screen, such as if a page is being
  * displayed in a modal.
  *
  * Not providing any selectors will default to using the
  * main selectors for the entire screen, such that
  * this page becomes the main page of the application.
  *
  * @param sectionSelector Selector string for the main section containing table view
  * @param tableSelector Selector string for table within previous section
  * @param navSelector Selector string for navigation bar shown at top of section
  * @param detailSelector Selector string for single view detail shown for an individual row
  */
	function DynamicPage() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$sectionSelector = _ref.sectionSelector,
		    sectionSelector = _ref$sectionSelector === undefined ? "#list-view" : _ref$sectionSelector,
		    _ref$tableSelector = _ref.tableSelector,
		    tableSelector = _ref$tableSelector === undefined ? "#table-section" : _ref$tableSelector,
		    navSelector = _ref.navSelector,
		    detailSelector = _ref.detailSelector;

		_classCallCheck(this, DynamicPage);

		this.sectionSelector = sectionSelector;
		this.tableSelector = tableSelector;
		// Set navigation selector to first component of section selector with ‘-nav’ appended, otherwise default CSS selector
		this.navSelector = navSelector ? navSelector : sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-nav" : ".side-nav-bar-nested";
		this.detailSelector = detailSelector ? detailSelector : sectionSelector !== "#list-view" ? sectionSelector.split(" ")[0] + "-detail" : "#single-view";
	}

	/**
  * Set the title bar of the single view to the given string
  * CAUTION: Does not perform escaping of input string, do not pass
  * user content to this method.
  *
  * @param html HTML to set the single view title to
  */


	_createClass(DynamicPage, [{
		key: "updateSingleViewNavbar",
		value: function updateSingleViewNavbar(html) {
			$(this.detailSelector).find('.top-nav h4').html(html);
		}

		/**
   * Hides the "Loading…" splash screen if it's shown
   * Determines whether the "No Results…" splash screen
   * should be shown or not.
   *
   * You should call this function after using "appendTable"
   */

	}, {
		key: "updateSplashScreen",
		value: function updateSplashScreen() {
			var navText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// Get table element to inspect contents
			var $table = $(this.tableSelector),

			// Get number of results within table currently being shown
			// This is not equal to the number of rows in the table HTML
			// since some table rows may be hidden, which need to be
			// discounted from the total count.
			resultsCount = $table.find('tbody tr').filter(function (i, el) {
				return !$(el).hasClass("row-hidden");
			}).length,

			// Get splash screen element which may be being shown instead of table
			$splashScreen = $(this.sectionSelector).find('.splash-screen');

			// Depending on whether there are results, the splash screen or table needs to be shown
			// and the other swapped out using CSS

			var _ref2 = resultsCount ? [$table, $splashScreen] : [$splashScreen, $table],
			    _ref3 = _slicedToArray(_ref2, 2),
			    $show = _ref3[0],
			    $hide = _ref3[1];

			$hide.addClass("block-hidden");
			$show.removeClass("block-hidden");

			// The main top bar for the list view contains the total number of items being shown in the table
			if (!navText) {
				// Set navbar text as number of items in table then append currently selected filter
				navText = resultsCount + " " + $(this.navSelector).find("li.active").first().text().replace("All ", "");
			}

			// If unable to obtain rows count, show "Loading…"
			$(this.sectionSelector).closest("section").find(".top-nav h4").text(resultsCount !== undefined ? navText : "Loading…");
		}

		/**
   * Adds a row in the table body within #table-section
   * using data from "object".
   *
   * The property names should correspond with the "slug"
   * attribute in table header.
   *
   * NOTE: This assumes the object has an ID attribute. Include it
   * even if you don't wish to show it.
   *
   * @param object - The data to append to the end of the table
   * splashscreen on your page
   */

	}, {
		key: "appendTableRow",
		value: function appendTableRow(object) {
			var $tableSection = $(this.tableSelector),
			    $tableHead = $tableSection.find('table thead tr'),
			    $tableBody = $tableSection.find('table tbody'),
			    $newRow = $(document.createElement("tr"));

			// Don't add the same row twice
			if ($tableBody.children("[data-rowid=\"" + object.id + "\"]").length > 0) return;

			// Set ID on row to reference later
			$newRow[0].dataset.rowid = object.id;
			$newRow.toggleClass("highlight", object.id == parseInt(location.hash.substring(1)));

			$tableHead.children('th').each(function () {
				var slug = this.dataset.slug,
				    td = document.createElement("td");

				if (slug === 'eye') {
					// the on-hover eye invisible row
					td.innerHTML = '<i class="fa fa-eye"></i>';
				} else if (slug && slug.includes("access")) {
					// Boolean value support
					td.innerHTML = Object.resolve(slug, object) ? this.innerHTML : "·";
				} else {
					td.innerHTML = Object.resolve(slug, object) !== undefined ? object[slug] : "—";
				}

				$newRow.append(td);
			});

			$tableBody.append($newRow);

			return $newRow[0];
		}

		/**
   * Clears the data in the table body within #table-section
   */

	}, {
		key: "clearTable",
		value: function clearTable() {
			$(this.tableSelector).find('tbody').empty();
		}

		/**
   * Show detail page
   *
   * @param id The ID of the table row to be shown in the single view
   */

	}, {
		key: "showTableRowDetails",
		value: function showTableRowDetails() {
			var _this = this;

			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// No need to check for null as no rows will match if no ID passed
			// .siblings does not include the element itself so can be chained after finding highlight row first
			$(this.tableSelector).find("tbody tr").filter(function (i, el) {
				return el.dataset.rowid == id;
			}).addClass("highlight").first().siblings().removeClass("highlight");

			// No need to set style using JS here, CSS handles flex
			$(this.detailSelector).unwrap("div")
			// Close button on hide
			.find("[data-action=\"close\"]").click(function () {
				return _this.hideTableRowDetails();
			});

			if (id > -1) location.hash = parseInt(id);
		}

		/**
   * Hide detail page shown with showDetail
   */

	}, {
		key: "hideTableRowDetails",
		value: function hideTableRowDetails() {
			// Deselect all rows
			$(this.tableSelector).find("tbody tr").removeClass("highlight");
			// Filter to check if already hidden, don't hide again
			$(this.detailSelector).filter(function (i, el) {
				return $(el).parent("div").length === 0;
			}).wrap(document.createElement("div"));

			location.hash = "";
		}

		/**
   * Fill a select element with the passed options
   * for the user to select from a dropdown list
   *
   * @param $select A reference to the select element to be filled
   * @param defaultText Text to be displayed in the select element
   * @param elements List of elements to be added for the user to select from
   * @param defaultOptionId ID of a default option from the elements given
   * @param property The property of the select field to access selected item with
   * @param getAdditionalDetails function that determines the additional details to be shown for current item
   */

	}, {
		key: "populateSelectField",
		value: function populateSelectField($select, defaultText, elements) {
			var defaultOptionId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
			var property = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'name';
			var getAdditionalDetails = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

			// Default empty content for input
			var option = new Option(defaultText, null, true, true);
			option.disabled = true;
			$select.empty().append(option);

			// Each option to be selected from
			elements.forEach(function (e) {
				if (getAdditionalDetails !== null) {
					$select.append(new Option('#' + e.id + ' ' + getAdditionalDetails(e) + ' ' + e[property], e.id, false, e.id === defaultOptionId));
				} else {
					$select.append(new Option('#' + e.id + ' ' + e[property], e.id, false, e.id === defaultOptionId));
				}
			});

			$select.selectpicker('refresh');
		}

		/**
   * @param query The search string
   * @param elements The elements matching the search to display
   * @param objectCallback a callback returning an object (the row structure)
   * @param searchKeys the properties in objectCallback to highlight
   */

	}, {
		key: "search",
		value: function search(query) {
			var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			var objectCallback = arguments[2];
			var searchKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

			var page = this;

			page.clearTable();

			if (elements.length > 0) {
				elements.forEach(function (el) {
					var object = objectCallback(el);

					searchKeys.forEach(function (key) {
						object[key] = String(object[key]).replace(new RegExp('(' + query + ')', 'ig'), '<strong>$1</strong>');
					});

					if (query === $(".search-field input").val()) {
						page.appendTableRow(object);
						page.updateSplashScreen(elements.length + " result" + (elements.length !== 1 ? "s" : "") + " for \u2018" + query + "\u2019");
					}
				});
			} else {
				page.updateSplashScreen("No results for \u2018" + query + "\u2019");
			}
		}

		/**
   * Show a message at the top of the page, over all elements.
   * Hide after 6 seconds, or configurable.
   *
   * @param message The message string to be shown in the message box.
   * @param type The type of message, such as "info", "success", "warning", "danger"
   * @param duration The duration in seconds for the message to be shown for.
   */

	}], [{
		key: "showNotification",
		value: function showNotification() {
			var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "An error occurred";
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "danger";
			var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

			// Only show one message at a time
			$("#alert-notification").remove();

			// Create element
			var msg = document.createElement("div");
			msg.id = "alert-notification";
			msg.classList.add("alert", "alert-" + type, "alert-notification");
			msg.setAttribute("role", "alert"); // Accessibility
			// Set content and show on screen

			msg.textContent = message;
			document.body.appendChild(msg);

			// Hide after duration
			setTimeout(function () {
				return msg.remove();
			}, duration * 1000);

			// Click to hide message
			$(msg).click(function () {
				$(this).fadeOut();
			});
		}
	}]);

	return DynamicPage;
}();

exports.default = DynamicPage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Manager2 = __webpack_require__(3);

var _Manager3 = _interopRequireDefault(_Manager2);

var _Device = __webpack_require__(16);

var _Device2 = _interopRequireDefault(_Device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HardwareManager
 *
 * Responsible for storing and retrieving
 * devices across the system.
 *
 * HardwareManager should never know about the DOM
 */
var HardwareManager = function (_Manager) {
	_inherits(HardwareManager, _Manager);

	function HardwareManager() {
		_classCallCheck(this, HardwareManager);

		var _this = _possibleConstructorReturn(this, (HardwareManager.__proto__ || Object.getPrototypeOf(HardwareManager)).call(this));

		_this.devices = api.devices.map(function (e) {
			return new _Device2.default(e);
		});
		return _this;
	}

	/**
  * Get all unique Types in table
  *
  * @returns {<Array>}
  */


	_createClass(HardwareManager, [{
		key: "uniqueTypes",
		value: function uniqueTypes() {
			return [].concat(_toConsumableArray(new Set(this.devices.map(function (t) {
				return t.type;
			}))));
		}

		/**
   * Get all unique Makes for a specified Type
   *
   * @returns {<Array>}
   */

	}, {
		key: "uniqueMakesOfType",
		value: function uniqueMakesOfType(type) {
			var devicesByType = this.devices.filter(function (device) {
				return device.type == type;
			});

			return [].concat(_toConsumableArray(new Set(devicesByType.map(function (t) {
				return t.make;
			}))));
		}

		/**
   * Get all devices with a specified Type and Make
   *
   * @returns {<Array>}
   */

	}, {
		key: "getDevicesOfTypeAndMake",
		value: function getDevicesOfTypeAndMake(type, make) {
			return this.devices.filter(function (device) {
				return device.type == type && device.make == make;
			});
		}

		/**
   * Gets the devices with the given ID numbers
   *
   * @param ids The ID numbers of the devices to retrieve
   * @returns {Array}
   */

	}, {
		key: "getDevices",
		value: function getDevices(ids) {
			return this.devices.filter(function (device) {
				return ids.indexOf(device.id) > -1;
			});
		}

		/**
   * Gets a specified device
   *
   * @param id The ID number of the specified device 
   * @returns {Array}
   */

	}, {
		key: "get",
		value: function get(id) {
			return this.devices.find(function (device) {
				return device.id === id;
			}) || null;
		}

		/**
   * Get the device with the given serial number
   *
   * @param serialNumber The serial number of the device to return
   * @returns {Device}
   */

	}, {
		key: "getDeviceBySerialNumber",
		value: function getDeviceBySerialNumber(serialNumber) {
			return this.devices.find(function (d) {
				return d.serial_no === serialNumber;
			});
		}
	}]);

	return HardwareManager;
}(_Manager3.default);

exports.default = HardwareManager;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Manager2 = __webpack_require__(3);

var _Manager3 = _interopRequireDefault(_Manager2);

var _Program = __webpack_require__(17);

var _Program2 = _interopRequireDefault(_Program);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SoftwareManager
 *
 * Responsible for storing and retrieving
 * software programs across the system.
 *
 * SoftwareManager should never know about the DOM
 */
var SoftwareManager = function (_Manager) {
	_inherits(SoftwareManager, _Manager);

	function SoftwareManager() {
		_classCallCheck(this, SoftwareManager);

		var _this = _possibleConstructorReturn(this, (SoftwareManager.__proto__ || Object.getPrototypeOf(SoftwareManager)).call(this));

		_this.programs = api.programs.map(function (e) {
			return new _Program2.default(e);
		});
		return _this;
	}

	/**
  * Gets the programs with the given ID numbers
  *
  * @param ids The ID numbers of the programs to retrieve
  * @returns {Array}
  */


	_createClass(SoftwareManager, [{
		key: "getPrograms",
		value: function getPrograms(ids) {
			return this.programs.filter(function (program) {
				return ids.indexOf(program.id) > -1;
			});
		}

		/**
   * Gets a specified program
   *
   * @param id The ID number of the specified program
   * @returns {Program}
   */

	}, {
		key: "get",
		value: function get(id) {
			return this.programs.find(function (program) {
				return program.id === id;
			}) || null;
		}
	}]);

	return SoftwareManager;
}(_Manager3.default);

exports.default = SoftwareManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Since nav element is persisted between pages, we need to manually set the active button
$("#nav").on("click", "ul li a", function (e) {
	$(e.currentTarget).parent().addClass("active").siblings().removeClass("active");
});

// Tooltips activated on all elements with a relevant tooltip HTML attribute
$('[data-toggle="tooltip"]').tooltip();

// Date/time picker activated on all elements with relevant class
$('.timepicker').datetimepicker();

// Create new employee when searching for non-existent assignee
$(document).on('click', 'li.no-results', function (e) {
	var newValue = $(this).closest(".dropdown-menu.open").children(".bs-searchbox").children("input").val(),
	    $modal = $('#new-staff-modal');

	$modal.modal('show');

	$modal.find('input[name="staff.name"]').val(newValue);
	$modal.find('input[name="event_target"]').val($(this).closest('.bootstrap-select').find('select').attr('name')); // when the staff member is created, this is the input field it'll update
});

$('#new-staff-modal, #new-ticket-modal, #follow-up-call-modal').on('show.bs.modal', function () {
	$(this).find('input, textarea').not('.no-clear-on-show').val('');

	$(this).find('#accordion .card:not(:first-child)').remove();

	var currentTime = new Date();

	$(this).find('.timepicker').val(('0' + (currentTime.getMonth() + 1)).slice(-2) + '/' + ('0' + currentTime.getDate()).slice(-2) + '/' + currentTime.getFullYear() + ' ' + ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2));
});

$(document).on('click', '#accordion .card .card-header', function () {
	$(this).closest('.card').find('.collapse').collapse('toggle');
});

$(document).on('click', '#accordion .card .card-header .remove-accordion', function () {
	$(this).closest('.card').fadeOut(200, function () {
		$(this).remove();
	});
});

$(document).on('hide.bs.collapse show.bs.collapse', '#accordion .collapse', function (e) {
	var isShow = e.type.split(".")[0] === "show";
	$(this).siblings('.card-header').find('.view-accordion').toggleClass('fa-chevron-up', !isShow).toggleClass('fa-chevron-down', isShow);
});

$('.search-field input').val('');

// Bootstrap Select Fix: Add back event listeners to open select field
$(document).on("click", ".bootstrap-select", function () {
	$(this).find('.dropdown-menu.open').toggle();
});

// Bootstrap modals fix: add back event listener
$(document).on("click", "body:not([data-page=\"staff\"]) [data-toggle=\"modal\"]", function () {
	$(this.dataset.target).modal("show");
});

function addItemToPicker(pickerElement, value, name) {
	$(pickerElement).append(new Option(name, value)).selectpicker('refresh').selectpicker('val', name);
}

var validationTimeout = window.validationTimeout = null;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Comment
 *
 * A comment is made about a specific ticket, by
 * a staff member.
 * 
 * Contains the Ticket that it belongs to
 */
var Comment = function () {
	function Comment(_ref) {
		var id = _ref.id,
		    author = _ref.author_id,
		    call = _ref.call_id,
		    ticket = _ref.ticket_id,
		    content = _ref.content,
		    createdAt = _ref.created_at_human,
		    createdAtReal = _ref.created_at;

		_classCallCheck(this, Comment);

		this.id = id;
		this.author = author;
		this.call = call;
		this.ticket = ticket;
		this.content = content;
		this.created_at = createdAt;
		this.created_at_real = createdAtReal;
	}

	_createClass(Comment, [{
		key: "author",
		get: function get() {
			return new _StaffManager2.default().get(this._author);
		},
		set: function set(author) {
			this._author = author;
		}
	}, {
		key: "call",
		get: function get() {
			return new _TicketManager2.default().getCall(this._call);
		},
		set: function set(call) {
			this._call = call;
		}
	}, {
		key: "ticket",
		get: function get() {
			return new _TicketManager2.default().getTicket(this._ticket);
		},
		set: function set(ticket) {
			this._ticket = ticket;
		}
	}]);

	return Comment;
}();

exports.default = Comment;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Call
 *
 * Every time the Helpdesk is called, this is created.
 * A call may have multiple tickets, a ticket may have
 * multiple calls.
 */
var Call = function () {
	function Call(_ref) {
		var id = _ref.id,
		    time = _ref.time,
		    caller = _ref.caller_id,
		    operator = _ref.operator_id,
		    tickets = _ref.tickets;

		_classCallCheck(this, Call);

		this.id = id;
		this.time = time;
		this.caller = caller; // ID of caller, get method returns instance of Staff
		this.operator = operator; // ID of operator, get method returns instance of Staff
		this.tickets = tickets; // ID of tickets, get method returns instances of Ticket's
	}

	_createClass(Call, [{
		key: "caller",
		get: function get() {
			return new _StaffManager2.default().get(this._caller);
		},
		set: function set(caller) {
			this._caller = caller;
		}
	}, {
		key: "operator",
		get: function get() {
			return new _StaffManager2.default().get(this._operator);
		},
		set: function set(operator) {
			this._operator = operator;
		}
	}, {
		key: "tickets",
		get: function get() {
			return new _TicketManager2.default().getTicketsFromCall(this.id);
		},
		set: function set(tickets) {
			this._tickets = tickets;
		}
	}]);

	return Call;
}();

exports.default = Call;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Employee
 *
 * An employee of the company
 */
var Employee = function () {
	function Employee(_ref) {
		var id = _ref.id,
		    name = _ref.name,
		    email = _ref.email,
		    job = _ref.job_title,
		    department = _ref.department,
		    phone = _ref.phone_number,
		    _ref$expertise_types = _ref.expertise_types,
		    specialisms = _ref$expertise_types === undefined ? [] : _ref$expertise_types,
		    _ref$operator = _ref.operator,
		    operator = _ref$operator === undefined ? false : _ref$operator,
		    _ref$specialist = _ref.specialist,
		    specialist = _ref$specialist === undefined ? specialisms.length > 0 : _ref$specialist,
		    _ref$analyst = _ref.analyst,
		    analyst = _ref$analyst === undefined ? false : _ref$analyst,
		    _ref$admin = _ref.admin,
		    admin = _ref$admin === undefined ? false : _ref$admin;

		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
		this.email = email;
		this.job = job;
		this.department = department.name;
		this._department = department.id;
		this.phone = phone;
		this.specialisms = specialisms;
		this.access = { operator: operator, analyst: analyst, admin: admin };

		// If user is any other permission then read is granted
		this.access.read = this.access.operator || this.access.analyst || this.access.admin || this.access.readonly || false;
	}

	/**
  * @returns {boolean} whether the user has read access to the system
  */


	_createClass(Employee, [{
		key: "isRead",
		get: function get() {
			return this.access.read;
		}

		/**
   * @returns {boolean} whether the user is a help desk operator
   */

	}, {
		key: "isOperator",
		get: function get() {
			return this.access.operator;
		}

		/**
   * @returns {boolean} whether the user has access to analytical data about the help desk system
   */

	}, {
		key: "isAnalyst",
		get: function get() {
			return this.access.analyst;
		}

		/**
   * @returns {boolean} whether the user is an administrator on the help desk
   */

	}, {
		key: "isAdmin",
		get: function get() {
			return this.access.admin;
		}

		/**
   * @returns A list of problem types the user is a specialist of
   */

	}, {
		key: "specialisms",
		get: function get() {
			return new _ExpertiseTypeManager2.default().getExpertiseTypes(this._specialisms);
		}

		/**
   * @param specialisms Set the list of specialisms for this person on the system
   */
		,
		set: function set(specialisms) {
			this._specialisms = specialisms;
		}

		/**
   * Prepare data for sending to API endpoint. The API has different
   * data keys representing the data accessible in the tables, so new
   * data and updates to data must use these key names.
   * @param data to be converted
   * @returns data with updated key names
   */

	}], [{
		key: "prepareData",
		value: function prepareData() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			data.job_title = data.job;
			data.phone_number = data.phone;
			data.expertise_types = data.specialisms;
			data.department_id = data.department;
			var _arr = ["read", "operator", "analyst", "admin"];
			for (var _i = 0; _i < _arr.length; _i++) {
				var key = _arr[_i];
				data[key] = data.access[key] ? 1 && (data.specialist = 1) : 0;
			}
			data.specialist = data.specialist || 0;
			return data;
		}
	}]);

	return Employee;
}();

exports.default = Employee;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ExpertiseType
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
var ExpertiseType = function () {
	function ExpertiseType(_ref) {
		var id = _ref.id,
		    name = _ref.name,
		    parent = _ref.parent_id,
		    children = _ref.children;

		_classCallCheck(this, ExpertiseType);

		this.id = id;
		this.name = name;
		this.parent = parent;
		this.children = children; // ID of ExpertiseType's, get method returns instances of ExpertiseType's
	}

	_createClass(ExpertiseType, [{
		key: "parent",
		get: function get() {
			return new _ExpertiseTypeManager2.default().getExpertiseType(this._parent);
		},
		set: function set(parent) {
			this._parent = parent;
		}
	}, {
		key: "children",
		get: function get() {
			return new _ExpertiseTypeManager2.default().getExpertiseTypes(this._children);
		},
		set: function set(children) {
			this._children = children;
		}
	}]);

	return ExpertiseType;
}();

exports.default = ExpertiseType;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ExpertiseType
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
var ExpertiseTypeStaff = function () {
	function ExpertiseTypeStaff(_ref) {
		var id = _ref.id,
		    staffId = _ref.staff_id,
		    expertiseTypeId = _ref.expertise_type_id,
		    tickets = _ref.tickets;

		_classCallCheck(this, ExpertiseTypeStaff);

		this.id = id;
		this.staff = staffId;
		this.expertise_type = expertiseTypeId;
		this.tickets = tickets;
	}

	_createClass(ExpertiseTypeStaff, [{
		key: "staff",
		get: function get() {
			return new _StaffManager2.default().get(this._staff);
		},
		set: function set(staff) {
			this._staff = staff;
		}
	}, {
		key: "expertise_type",
		get: function get() {
			return new _ExpertiseTypeManager2.default().getExpertiseType(this._expertise_type);
		},
		set: function set(expertiseType) {
			this._expertise_type = expertiseType;
		}
	}]);

	return ExpertiseTypeStaff;
}();

exports.default = ExpertiseTypeStaff;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Status
 *
 * Holds information about a Status.
 * Contains Tickets that fit into the status
 */
var Status = function () {
	function Status(_ref) {
		var id = _ref.id,
		    slug = _ref.slug,
		    name = _ref.name,
		    tickets = _ref.tickets;

		_classCallCheck(this, Status);

		this.id = id;
		this.slug = slug; // slug_example
		this.name = name; // Name Example!
		this.tickets = tickets; // ID of tickets, get method returns Ticket instances
	}

	_createClass(Status, [{
		key: "tickets",
		get: function get() {
			return new _TicketManager2.default().getTicketsWithSlug(this.slug);
		},
		set: function set(tickets) {
			this._tickets = tickets;
		}
	}]);

	return Status;
}();

exports.default = Status;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _HardwareManager = __webpack_require__(5);

var _HardwareManager2 = _interopRequireDefault(_HardwareManager);

var _SoftwareManager = __webpack_require__(6);

var _SoftwareManager2 = _interopRequireDefault(_SoftwareManager);

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ticket
 *
 * Holds information about a Ticket/Problem.
 */
var Ticket = function () {
	function Ticket(_ref) {
		var id = _ref.id,
		    author = _ref.author_id,
		    calls = _ref.calls,
		    status = _ref.status,
		    statusHistory = _ref.status_history,
		    title = _ref.title,
		    description = _ref.description,
		    solution = _ref.solution_id,
		    devices = _ref.devices,
		    programs = _ref.programs,
		    comments = _ref.comments,
		    createdAt = _ref.created_at_human,
		    updatedAt = _ref.updated_at_human,
		    createdAtReal = _ref.created_at,
		    updatedAtReal = _ref.updated_at,
		    expertiseTypeStaff = _ref.expertise_type_staff_id,
		    assignedToOperatorId = _ref.assigned_to_operator_id;

		_classCallCheck(this, Ticket);

		this.id = id;
		this.author = author;
		this.calls = calls; // ID of calls, get method returns instances of Call's
		this.status = status; // ID of status, get method returns instance of Status
		this.status_history = statusHistory;
		this.title = title;
		this.description = description;
		this.solution = solution;
		this.devices = devices; // ID of devices, get method returns instances of Devices
		this.programs = programs; // ID of programs, get method returns instances of Programs
		this.comments = comments; // ID of comments, get method returns instances of Comment's
		this.created_at = createdAt;
		this.updated_at = updatedAt;
		this.created_at_real = createdAtReal;
		this.updated_at_real = updatedAtReal;
		this.expertise_type_staff = expertiseTypeStaff;
		this.assigned_to_operator = assignedToOperatorId;
	}

	_createClass(Ticket, [{
		key: "calls",
		get: function get() {
			return new _TicketManager2.default().getCallsByTicketId(this.id);
		},
		set: function set(calls) {
			this._calls = calls;
		}
	}, {
		key: "status",
		get: function get() {
			return new _TicketManager2.default().getStatus(this._status);
		},
		set: function set(status) {
			this._status = status;
		}
	}, {
		key: "status_history",
		get: function get() {
			return new _TicketManager2.default().getStatusHistory(this._status_history);
		},
		set: function set(statusHistory) {
			this._status_history = statusHistory;
		}
	}, {
		key: "caller",
		get: function get() {
			return new _StaffManager2.default().get(this._caller);
		},
		set: function set(caller) {
			this._caller = caller;
		}
	}, {
		key: "devices",
		get: function get() {
			return new _HardwareManager2.default().getDevices(this._devices);
		},
		set: function set(devices) {
			this._devices = devices;
		}
	}, {
		key: "programs",
		get: function get() {
			return new _SoftwareManager2.default().getPrograms(this._programs);
		},
		set: function set(programs) {
			this._programs = programs;
		}
	}, {
		key: "comments",
		get: function get() {
			return new _TicketManager2.default().getCommentsByIds(this._comments);
		},
		set: function set(comments) {
			this._comments = comments;
		}
	}, {
		key: "solution",
		get: function get() {
			return new _TicketManager2.default().getComment(this._solution);
		},
		set: function set(solution) {
			this._solution = solution;
		}
	}, {
		key: "expertise_type_staff",
		get: function get() {
			return new _ExpertiseTypeManager2.default().getExpertiseTypeStaff(this._expertise_type_staff);
		},
		set: function set(expertiseTypeStaffId) {
			this._expertise_type_staff = expertiseTypeStaffId;
		}
	}, {
		key: "assigned_to_operator",
		get: function get() {
			return new _StaffManager2.default().get(this._assigned_to_operator);
		},
		set: function set(assignedToOperatorId) {
			this._assigned_to_operator = assignedToOperatorId;
		}
	}, {
		key: "expertise_type",
		get: function get() {
			var random = Math.floor(Math.random() * (40 - 1 + 1)) + 1; //Random int between 1 and 40
			return new _ExpertiseTypeManager2.default().getExpertiseType(random);
		}
	}]);

	return Ticket;
}();

exports.default = Ticket;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Device
 *
 * Holds information about a piece of Hardware.
 * Contains all software that is running on the Hardware Unit
 */
var Device = function () {
	function Device(_ref) {
		var id = _ref.id,
		    type = _ref.type,
		    make = _ref.make,
		    serial_no = _ref.serial_no,
		    tickets = _ref.tickets,
		    created_at = _ref.created_at_human,
		    updated_at = _ref.updated_at_human;

		_classCallCheck(this, Device);

		this.id = id;
		this.type = type;
		this.make = make;
		this.serial_no = serial_no;
		this._tickets = tickets;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	/**
  * @returns {Array} A list of all tickets this device is assigned to
  */


	_createClass(Device, [{
		key: "tickets",
		get: function get() {
			if (this._tickets) {
				return new _TicketManager2.default().getTicketsByTicketIDs(this._tickets);
			}
			return new Array();
		}

		/**
   * @param {Array} tickets Sets the tickets this device is assigned to
   */
		,
		set: function set(tickets) {
			this._tickets = tickets;
		}
	}]);

	return Device;
}();

exports.default = Device;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Program
 *
 * Holds information about a piece of Software.
 */
var Program = function () {
	function Program(_ref) {
		var id = _ref.id,
		    name = _ref.name,
		    tickets = _ref.tickets,
		    operating_system = _ref.operating_system,
		    expiry_date = _ref.expiry_date,
		    created_at = _ref.created_at_human,
		    updated_at = _ref.updated_at_human;

		_classCallCheck(this, Program);

		this.id = id;
		this.name = name;
		this._tickets = tickets;
		this.operating_system = operating_system;
		this.expiry_date = expiry_date;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	/**
  * @returns {Array} A list of all tickets this program is assigned to
  */


	_createClass(Program, [{
		key: "getSoftwareType",
		value: function getSoftwareType() {
			//Gets a human-readable string to describe whether the program is an operting system or not
			if (this.operating_system) {
				return "Operating System";
			} else if (!this.operating_system) {
				return "Application";
			} else {
				return "-";
			}
		}
	}, {
		key: "tickets",
		get: function get() {
			if (this._tickets) {
				return new _TicketManager2.default().getTicketsByTicketIDs(this._tickets);
			}
			return new Array();
		}

		/**
   * @param {Array} tickets Sets the tickets this program is assigned to
   */
		,
		set: function set(tickets) {
			this._tickets = tickets;
		}
	}]);

	return Program;
}();

exports.default = Program;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TicketStatus
 *
 * Intermediary relationship between Status
 * and Ticket. This stores a history of a
 * Ticket's statuses; the last entry is
 * the Ticket's current status.
 */
var TicketStatus = function () {
	function TicketStatus(_ref) {
		var id = _ref.id,
		    ticket = _ref.ticket_id,
		    status = _ref.status_id,
		    staff = _ref.staff_id,
		    createdAt = _ref.created_at_human,
		    createdAtReal = _ref.created_at;

		_classCallCheck(this, TicketStatus);

		this.id = id;
		this.ticket = ticket; // ID of ticket, get method returns instance of Ticket
		this.status = status; // ID of status, get method returns instance of Status
		this.staff = staff; // ID of staff, get method returns instance of Staff
		this.created_at = createdAt;
		this.created_at_real = createdAtReal;
	}

	_createClass(TicketStatus, [{
		key: "ticket",
		get: function get() {
			return new _TicketManager2.default().getTicket(this._ticket);
		},
		set: function set(ticket) {
			this._ticket = ticket;
		}
	}, {
		key: "status",
		get: function get() {
			return new _TicketManager2.default().getStatus(this._status);
		},
		set: function set(status) {
			this._status = status;
		}
	}, {
		key: "staff",
		get: function get() {
			return new _StaffManager2.default().get(this._staff);
		},
		set: function set(staff) {
			this._staff = staff;
		}
	}]);

	return TicketStatus;
}();

exports.default = TicketStatus;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _DynamicPage = __webpack_require__(4);

var _DynamicPage2 = _interopRequireDefault(_DynamicPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * API
 *
 * Originally used to retrieve and handle data from
 * API endpoints, but modified to hold local data
 * in the constructor set by WordPress's Twig
 * (done to reuse previous components to save time)
 */
var API = function API(_ref) {
	var _ref$calls = _ref.calls,
	    calls = _ref$calls === undefined ? [] : _ref$calls,
	    _ref$statuses = _ref.statuses,
	    statuses = _ref$statuses === undefined ? [] : _ref$statuses,
	    _ref$tickets = _ref.tickets,
	    tickets = _ref$tickets === undefined ? [] : _ref$tickets,
	    _ref$ticket_statuses = _ref.ticket_statuses,
	    ticketStatuses = _ref$ticket_statuses === undefined ? [] : _ref$ticket_statuses,
	    _ref$comments = _ref.comments,
	    comments = _ref$comments === undefined ? [] : _ref$comments,
	    _ref$staff = _ref.staff,
	    staff = _ref$staff === undefined ? [] : _ref$staff,
	    _ref$devices = _ref.devices,
	    devices = _ref$devices === undefined ? [] : _ref$devices,
	    _ref$programs = _ref.programs,
	    programs = _ref$programs === undefined ? [] : _ref$programs,
	    _ref$expertise_types = _ref.expertise_types,
	    expertiseTypes = _ref$expertise_types === undefined ? [] : _ref$expertise_types,
	    _ref$expertise_type_s = _ref.expertise_type_staff,
	    expertiseTypeStaff = _ref$expertise_type_s === undefined ? [] : _ref$expertise_type_s,
	    _ref$departments = _ref.departments,
	    departments = _ref$departments === undefined ? [] : _ref$departments;

	_classCallCheck(this, API);

	this.calls = calls;
	this.statuses = statuses;
	this.tickets = tickets;
	this.ticketStatuses = ticketStatuses;
	this.comments = comments;
	this.staff = staff;
	this.devices = devices;
	this.programs = programs;
	this.expertiseTypes = expertiseTypes;
	this.expertiseTypeStaff = expertiseTypeStaff;
	this.departments = departments;
};

exports.default = API;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _HardwarePage = __webpack_require__(47);

var _HardwarePage2 = _interopRequireDefault(_HardwarePage);

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hardwarePage = void 0,
    api = void 0; /**
                   * JS specific to Hardware page, used to handle front end interactions such as
                   * event handlers for buttons , 
                   */

window.init = function (data) {
	api = window.api = new _API2.default(data);

	hardwarePage = window.hardwarePage = new _HardwarePage2.default();

	//Load all initial Types of device
	hardwarePage.populateTypes();

	//Handler for clicking on a device type
	$("#typeList").on("click", "tr td", function (e) {
		$("#typeList>tr").removeClass("highlight"); //Removes any previously highlight to any element
		e.currentTarget.parentElement.classList.add("highlight");
		hardwarePage.type = e.currentTarget.dataset.type;
		hardwarePage.populateMake(); //Loads all Makes 'under' the selected type
	});

	//Handler for clicking on a device make
	$("#makeList").on("click", "tr td", function (e) {
		$("#makeList>tr").removeClass("highlight"); //Removes any previously highlight to any element
		e.currentTarget.parentElement.classList.add("highlight");
		hardwarePage.make = e.currentTarget.dataset.make;
		hardwarePage.showDevices(); //Loads all devices of the selected Type and Make
	});

	//Handler for selecting a specific device from the final selection tab
	$(hardwarePage.tableSelector).on("click", "tbody tr", function (e) {
		var id = Number(e.currentTarget.dataset.rowid); //Gets the ID of the selected row
		hardwarePage.showTableRowDetails(id); //Opens the full view for the selected device
	});

	//If loading a specific device viaa URL hash
	if (location.hash) {
		hasLocationHash();
	} else {
		//Hide full view panel by default
		hardwarePage.hideTableRowDetails();
	}

	//Handles displaying the page as if the passed device has already been selected
	function hasLocationHash() {
		var id = parseInt(location.hash.substring(1));
		hardwarePage.device = hardwarePage.hardwareManager.get(id);
		hardwarePage.type = hardwarePage.device.type;
		hardwarePage.make = hardwarePage.device.make;
		hardwarePage.showTableRowDetails(id); //Opens the full view for the selected device
		hardwarePage.populateMake(); //Populating makes
		hardwarePage.showDevices(); //Populating device list
		// Set type
		$("#typeList td").filter(function (i, el) {
			return el.dataset.type === hardwarePage.type;
		}).parent().addClass("highlight");
		// Set make
		$("#makeList td").filter(function (i, el) {
			return el.dataset.make === hardwarePage.make;
		}).parent().addClass("highlight");
	}

	//Handler for clicking Ticket and Software hyperlinks in full view
	$("#tickets").on("click", "li[data-rowid]", function (e) {
		Turbolinks.visit("tickets#" + e.currentTarget.dataset.rowid);
	});
	$("#software").on("click", "li[data-rowid]", function (e) {
		Turbolinks.visit("software#" + e.currentTarget.dataset.rowid);
	});
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DynamicPage2 = __webpack_require__(4);

var _DynamicPage3 = _interopRequireDefault(_DynamicPage2);

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _HardwareManager = __webpack_require__(5);

var _HardwareManager2 = _interopRequireDefault(_HardwareManager);

var _SoftwareManager = __webpack_require__(6);

var _SoftwareManager2 = _interopRequireDefault(_SoftwareManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HardwarePage
 *
 * Manipulates the hardware page /w JQuery using data from
 * the HardwareManager. Methods mostly get called from hardware.js
 */
var HardwarePage = function (_DynamicPage) {
	_inherits(HardwarePage, _DynamicPage);

	function HardwarePage() {
		_classCallCheck(this, HardwarePage);

		var _this = _possibleConstructorReturn(this, (HardwarePage.__proto__ || Object.getPrototypeOf(HardwarePage)).call(this));

		_this.type = null;
		_this.make = null;
		_this.device = null;
		//Managers
		_this.ticketManager = new _TicketManager2.default();
		_this.hardwareManager = new _HardwareManager2.default();
		_this.softwareManager = new _SoftwareManager2.default();
		return _this;
	}

	//Handles adding all unique device types to the Types column


	_createClass(HardwarePage, [{
		key: "populateTypes",
		value: function populateTypes() {
			var typeList = $('#typeList');
			typeList.empty();

			var uniqueTypes = this.hardwareManager.uniqueTypes();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = uniqueTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var type = _step.value;

					var row = "<tr><td data-type='" + type + "'>" + type + "</td></tr>";
					typeList.append(row);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		//Handles adding all unique device makes under the selected Type to the Make column

	}, {
		key: "populateMake",
		value: function populateMake() {
			var makeList = $('#makeList');
			makeList.empty();
			this.clearTable();

			var uniqueMake = this.hardwareManager.uniqueMakesOfType(this.type);
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = uniqueMake[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var make = _step2.value;

					if (this.make == make) {}
					var row = "<tr " + (this.make == make ? "class='highlight'" : "") + "><td data-make='" + make + "'>" + make + "</td></tr>";
					makeList.append(row);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}

		//Handles adding all devices of the selected make and type to the table

	}, {
		key: "showDevices",
		value: function showDevices() {
			var type = this.type;
			var make = this.make;
			this.clearTable();

			var results = this.hardwareManager.getDevicesOfTypeAndMake(type, make);
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = results[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var device = _step3.value;

					this.appendTableRow(device);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}

		//Handles opening the full view of the selected device, including populating related
		//tickets and software.

	}, {
		key: "showTableRowDetails",
		value: function showTableRowDetails(id) {
			this.device = this.hardwareManager.get(id);
			if (!this.device) {
				this.hideTableRowDetails();
				alert("No hardware with ID " + id);
				return;
			}
			_get(HardwarePage.prototype.__proto__ || Object.getPrototypeOf(HardwarePage.prototype), "showTableRowDetails", this).call(this, id);
			$("#tickets").html("");
			$("#software").html("");
			var programs = [];
			var tickets = this.device.tickets;

			for (var i = 0; i < tickets.length; i++) {
				var statusClass = "pending";
				var ticket = tickets[i];
				var status = ticket.status;
				var statusText = status.name;

				switch (statusText) {
					case "New":
						statusClass = "new";
						break;
					case "Pending - In Progress":
						statusClass = "pending";
						break;
					case "Pending - Awaiting Staff":
						statusClass = "pending";
						break;
					case "Resolved":
						statusClass = "resolved";
						break;
				}
				//Displaying tickets
				$("#tickets").append("\n\t\t\t\t<li class=\"list-group-item list-group-item-action\" data-rowid=\"" + ticket.id + "\">\n\t\t\t\t\t#" + ticket.id + ": " + ticket.title + "\n\t\t\t\t\t<span class=\"filter filter-" + statusClass + "\">" + statusText + "</span>\n\t\t\t\t\t<span class=\"pull-right text-muted\">" + ticket.created_at + "</span>\n\t\t\t\t</li>\n\t\t\t");

				if (programs.length < 20) {
					//Limiting program list size to 20
					for (var j = 0; j < ticket.programs.length; j++) {
						var program = this.softwareManager.get(ticket._programs[j]);
						if (programs.indexOf(program) == -1) {
							programs.push(program);
						}
					}
				}
			}
			//Displaying software
			for (var k = 0; k < programs.length; k++) {
				$("#software").append("\n\t\t\t\t<li class=\"list-group-item list-group-item-action\" data-rowid=\"" + programs[k].id + "\">\n\t\t\t\t\t" + programs[k].getSoftwareType() + " / " + programs[k].name + "\n\t\t\t\t</li>\n\t\t\t");
			}

			$("#ticket-total").html("Total: " + tickets.length);
			$("#software-total").html("Total: " + programs.length);

			//Updating title
			this.updateSingleViewNavbar(this.device.type + " / " + this.device.make + " / " + this.device.serial_no);
		}
	}]);

	return HardwarePage;
}(_DynamicPage3.default);

exports.default = HardwarePage;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTI4ZWE0M2ZkMjE4YTFlZTVhMTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL2hhcmR3YXJlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZVBhZ2UuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJlIiwidGlja2V0cyIsImNvbW1lbnRzIiwic3RhdHVzZXMiLCJ0aWNrZXRTdGF0dXNlcyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIlN0YWZmTWFuYWdlciIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiTWFuYWdlciIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsIkNvbW1lbnQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwiQ2FsbCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsIkVtcGxveWVlIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJFeHBlcnRpc2VUeXBlIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsIkV4cGVydGlzZVR5cGVTdGFmZiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsIlN0YXR1cyIsImdldFRpY2tldHNXaXRoU2x1ZyIsIlRpY2tldCIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiRGV2aWNlIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJQcm9ncmFtIiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwiVGlja2V0U3RhdHVzIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiaGFyZHdhcmVQYWdlIiwiaW5pdCIsInBvcHVsYXRlVHlwZXMiLCJwYXJlbnRFbGVtZW50IiwicG9wdWxhdGVNYWtlIiwic2hvd0RldmljZXMiLCJOdW1iZXIiLCJzaG93VGFibGVSb3dEZXRhaWxzIiwiaGFzTG9jYXRpb25IYXNoIiwiaGFyZHdhcmVNYW5hZ2VyIiwiVHVyYm9saW5rcyIsInZpc2l0IiwiSGFyZHdhcmVQYWdlIiwidGlja2V0TWFuYWdlciIsInNvZnR3YXJlTWFuYWdlciIsInR5cGVMaXN0IiwidW5pcXVlVHlwZXMiLCJyb3ciLCJtYWtlTGlzdCIsInVuaXF1ZU1ha2UiLCJ1bmlxdWVNYWtlc09mVHlwZSIsInJlc3VsdHMiLCJnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSIsImFsZXJ0Iiwic3RhdHVzQ2xhc3MiLCJzdGF0dXNUZXh0IiwiaiIsImsiLCJnZXRTb2Z0d2FyZVR5cGUiLCJ1cGRhdGVTaW5nbGVWaWV3TmF2YmFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxhOzs7QUFDcEIsMEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxvQkFBTCxHQUE0QkMsT0FBT0Qsb0JBQVAsSUFBK0Isb0NBQTNEOztBQUVBLFFBQUtFLEtBQUwsR0FBZ0JDLElBQUlELEtBQUosQ0FBVUUsR0FBVixDQUFjO0FBQUEsVUFBSyxtQkFBU0MsQ0FBVCxDQUFMO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFFBQUtDLE9BQUwsR0FBZ0JILElBQUlHLE9BQUosQ0FBWUYsR0FBWixDQUFnQjtBQUFBLFVBQUsscUJBQVdDLENBQVgsQ0FBTDtBQUFBLEdBQWhCLENBQWhCO0FBQ0EsUUFBS0UsUUFBTCxHQUFnQkosSUFBSUksUUFBSixDQUFhSCxHQUFiLENBQWlCO0FBQUEsVUFBSyxzQkFBWUMsQ0FBWixDQUFMO0FBQUEsR0FB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QUN6Q3RPLE1BQUUsV0FBRixFQUFlbUMsTUFBZixDQUFzQixpRkFDOENpRCxTQUFTa0osQ0FBVCxFQUFZdlQsRUFEMUQsdUJBRWhCcUssU0FBU2tKLENBQVQsRUFBWUMsZUFBWixFQUZnQixXQUV3Qm5KLFNBQVNrSixDQUFULEVBQVkxSCxJQUZwQyw0QkFBdEI7QUFLQTs7QUFFRDVHLEtBQUUsZUFBRixFQUFtQkQsSUFBbkIsQ0FBd0IsWUFBWXZGLFFBQVF1QixNQUE1QztBQUNBaUUsS0FBRSxpQkFBRixFQUFxQkQsSUFBckIsQ0FBMEIsWUFBWXFGLFNBQVNySixNQUEvQzs7QUFFQTtBQUNBLFFBQUt5UyxzQkFBTCxDQUE0QixLQUFLMUosTUFBTCxDQUFZakIsSUFBWixHQUFtQixLQUFuQixHQUEyQixLQUFLaUIsTUFBTCxDQUFZQyxJQUF2QyxHQUE4QyxLQUE5QyxHQUFzRCxLQUFLRCxNQUFMLENBQVlJLFNBQTlGO0FBQ0E7Ozs7OztrQkF2SG1CcUksWSIsImZpbGUiOiIvd29yZHByZXNzL3dwLWNvbnRlbnQvdGhlbWVzL21ha2UtaXQtYWxsL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUyOGVhNDNmZDIxOGExZWU1YTE1IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL0NhbGxcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vU3RhdHVzXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldFwiO1xuaW1wb3J0IFRpY2tldFN0YXR1cyBmcm9tIFwiLi9UaWNrZXRTdGF0dXNcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldE1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhdHVzZXNcbiAqIGFuZCB0aWNrZXRzIGFuZCBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogVGlja2V0TWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSB3aW5kb3cuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgfHwgbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmNhbGxzICAgID0gYXBpLmNhbGxzLm1hcChlID0+IG5ldyBDYWxsKGUpKTtcblx0XHR0aGlzLnRpY2tldHMgID0gYXBpLnRpY2tldHMubWFwKGUgPT4gbmV3IFRpY2tldChlKSk7XG5cdFx0dGhpcy5jb21tZW50cyA9IGFwaS5jb21tZW50cy5tYXAoZSA9PiBuZXcgQ29tbWVudChlKSk7XG5cdFx0dGhpcy5zdGF0dXNlcyA9IGFwaS5zdGF0dXNlcy5tYXAoZSA9PiBuZXcgU3RhdHVzKGUpKTtcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzID0gYXBpLnRpY2tldFN0YXR1c2VzLm1hcChlID0+IG5ldyBUaWNrZXRTdGF0dXMoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q2FsbH0gc2luZ2xlIGluc3RhbmNlIG9mIENhbGwgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmluZChjYWxsID0+IGNhbGwuaWQgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGxzIHJlZmVyZW5jaW5nIGEgc3BlY2lmaWMgdGlja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q2FsbHNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmlsdGVyKGNhbGwgPT4gY2FsbC5fdGlja2V0cy5pbmRleE9mKHRpY2tldElkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG5vdGVzIGZvciBhIGNhbGxcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5fY2FsbCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggSURcblx0ICovXG5cdGdldFN0YXR1cyhzdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5pZCA9PT0gc3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgc2x1Z1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIHN0YXR1c1NsdWdcblx0ICovXG5cdGdldFN0YXR1c0J5U2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXR9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXQgd2l0aCB0aWNrZXRJZFxuXHQgKi9cblx0Z2V0VGlja2V0KHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maW5kKHRpY2tldCA9PiB0aWNrZXQuaWQgPT09IHRpY2tldElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0SWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIG9uZSBvZiBtYW55IGdpdmVuIHN0YXR1c2VzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHN0YXR1c1NsdWdzIEFycmF5IG9mIFN0cmluZ3MncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIG9uZSBvZiBtYW55IGdpdmVuIFN0YXR1cydzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWdJbihzdGF0dXNTbHVncykge1xuXHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRzLnNsaWNlKDApO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHRpY2tldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKHRpY2tldHNbaV0uc3RhdHVzLnNsdWcpID09PSAtMSkgdGlja2V0cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRpY2tldHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldHMgcmVmZXJlbmNlZCBpbiBhIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHJlZmVyZW5jZWQgaW4gYSBDYWxsXG5cdCAqL1xuXHRnZXRUaWNrZXRzRnJvbUNhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5fY2FsbHMuaW5kZXhPZihjYWxsSWQpID4gLTEpO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkIHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKHN0YWZmSWRzKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdFx0dGlja2V0cyAgICAgICAgICAgID0gdGhpcy50aWNrZXRzLFxuXHRcdFx0cmVzdWx0ICAgICAgICAgICAgID0ge307XG5cblx0XHRzdGFmZklkcy5mb3JFYWNoKHN0YWZmSWQgPT4ge1xuXHRcdFx0cmVzdWx0W3N0YWZmSWRdID0gdGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWRcblx0XHRcdFx0XHRcdHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0TXlUaWNrZXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wZXJhdG9yIG9yIHNwZWNpYWxpc3QgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0by5cblx0ICpcblx0ICogSWYgYW4gb3BlcmF0b3IgaXMgbm90IGFzc2lnbmVkLCB0aGVuIHRoZSBFeHBlcnRpc2VUeXBlU3RhZmYgd2lsbFxuXHQgKiBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0VtcGxveWVlfSBFbXBsb3llZSB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkge1xuXHRcdGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSByZXR1cm4gdGlja2V0LmFzc2lnbmVkX3RvX29wZXJhdG9yO1xuXG5cdFx0cmV0dXJuIHRpY2tldC5leHBlcnRpc2VfdHlwZV9zdGFmZi5zdGFmZjsgLy8gb25seSB1c2UgZXhwZXJ0aXNlX3R5cGVfc3RhZmYgaWYgdGhlcmUgaXMgbm8gYXNzaWduZWQgb3BlcmF0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0aWNrZXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cblx0ICogdXNlci5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBJZiBhc3NpZ25lZCB0byBzZWxmXG5cdCAqL1xuXHRpc1RpY2tldEFzc2lnbmVkVG9TZWxmKHRpY2tldCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSA9PT0gdGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKTsgXG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0U3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXRfc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldFN0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldFN0YXR1cyB3aXRoIHRpY2tldFN0YXR1c0lkXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXModGlja2V0U3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maW5kKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuaWQgPT09IHRpY2tldFN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1c2VzIGZvciBhIHRpY2tldFxuXHQgKlxuXHQgKiBAcFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmlsdGVyKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuX3RpY2tldCA9PT0gdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29tbWVudCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNvbW1lbnRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNvbW1lbnQgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjb21tZW50SWRcblx0ICovXG5cdGdldENvbW1lbnQoY29tbWVudElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb21tZW50c1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgQ29tbWVudCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENvbW1lbnRzQnlJZHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gaWRzLmluZGV4T2YoY29tbWVudC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB0aWNrZXRzIGFzc29jaWF0ZWQgd2l0aCBhbiBleHBlcnRpc2UgdHlwZSBzdGFmZlxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSBzdGFmZiB0byBmaW5kIHRpY2tldHMgZm9yXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQWxsIG1hdGNoaW5nIHRpY2tldHNcblx0ICovXG5cdGdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHR0aWNrZXRJZHMgICAgICA9IFtdLmNvbmNhdCguLi5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBlLnRpY2tldHMpKTsgLy8gbW92ZSBhbGwgb2YgZXhwZXJ0aXNlVHlwZXNbaV0udGlja2V0cyBpbnRvIGEgc2luZ2xlIGFycmF5XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGlja2V0cyBvbiBhIHByb3BlcnR5IGZvciBhIHByb3ZpZGVkIHNlYXJjaCBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgc2F0aXNmeWluZyB0aGUgc2VhcmNoIGNvbmRpdGlvblxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnRpY2tldHMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29sbGVjdGlvbiBvZiB0aWNrZXRzIGJ5IHRoZWlyIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBpZHMgVGhlIElEcyBvZiB0aGUgcmVxdWVzdGVkIHRpY2tldHMgXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlUaWNrZXRJRHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IGlkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL0VtcGxveWVlXCI7XG5cbi8qKlxuICogU3RhZmZNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YWZmXG4gKiBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogU3RhZmZNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YWZmICAgICAgID0gYXBpLnN0YWZmLm1hcChlID0+IG5ldyBFbXBsb3llZShlKSk7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyA9IGFwaS5kZXBhcnRtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGVtcGxveWVlIHdpdGggdGhlIGdpdmVuIElEIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgZW1wbG95ZWUgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtFbXBsb3llZX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbmQoZW1wbG95ZWUgPT4gZW1wbG95ZWUuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZW1wbG95ZWVzIHdpdGggYSBzcGVjaWZpYyB2YWx1ZSBvZiBhIHBlcm1pc3Npb25cblx0ICpcblx0ICogQHBhcmFtIHBlcm1pc3Npb24gVGhlIHBlcm1pc3Npb24gdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwZXJtaXNzaW9uICh0cnVlL2ZhbHNlKSBmb3Igd2hldGhlciB0aGUgcGVybWlzc2lvbiBpcyBncmFudGVkXG5cdCAqL1xuXHRnZXRFbXBsb3llZXNXaXRoUGVybWlzc2lvbihwZXJtaXNzaW9uLCB2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0gPT0gdmFsdWUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICpcblx0ICogQHBhcmFtIGFzRW1wbG95ZWUgbWV0aG9kIHJldHVybnMgSUQgYnkgZGVmYXVsdCBvciBFbXBsb3llZSBpZiB0cnV0aHlcblx0ICovXG5cdGN1cnJlbnRVc2VyKGFzRW1wbG95ZWUgPSBmYWxzZSkge1xuXHRcdGxldCBpZCA9IDE7IC8vIFRPRE86IGdldCB1c2VyIGZyb20gV1BcblxuXHRcdC8vIEdldCBFbXBsb3llZSB3aXRoIElEXG5cdFx0aWYgKGFzRW1wbG95ZWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChpZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc3BlY2lhbGlzdHMgd2hvIHNwZWNpYWxpc2UgaW4gYSBjZXJ0YWluIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gZmluZCBlbXBsb3llZXMgZm9yXG5cdCAqL1xuXHRnZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0bGV0IHN0YWZmICA9IHRoaXMuc3RhZmYsXG5cdFx0ICAgIGZpbHRlciA9IGlkID0+IGVtcGxveWVlID0+IGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGlkKSA+IC0xO1xuXG5cdFx0aWYgKHR5cGVvZiBleHBlcnRpc2VUeXBlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRsZXQgb3V0cHV0ID0gW107XG5cblx0XHRcdGZvciAobGV0IGlkIG9mIGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RhZmYuZmlsdGVyKGZpbHRlcihpZCkpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0YWZmLmZpbHRlcihmaWx0ZXIoZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIGVtcGxveWVlIGhhcyB0aGUgcGFzc2VkIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGluc3BlY3Rcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGxvb2sgZm9yXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBlbXBsb3llZSBoYXMgdGhlIHByb2JsZW0gdHlwZSBhcyBhIHNwZWNpYWxpc21cblx0ICovXG5cdGhhc1NwZWNpYWxpc20oZW1wbG95ZWUsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihleHBlcnRpc2VUeXBlSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGFsbCBlbXBsb3llZXMgZm9yIHRoZSBnaXZlbiBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm5zIEFsbCBtYXRjaGluZyByZXN1bHRzIHRvIHRoZSBxdWVyeVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnN0YWZmLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGUgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVTdGFmZiBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlU3RhZmZcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBleHBlcnRpc2UgdHlwZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBhcGkuZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGUoZSkpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gYXBpLmV4cGVydGlzZVR5cGVTdGFmZi5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZVN0YWZmKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYWxsIEV4cGVydGlzZVR5cGUncyB3aXRoIG5vIHBhcmVudCAoaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRSb290RXhwZXJ0aXNlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5fcGFyZW50ID09IG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZX1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmluZChleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuaWQgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IEV4cGVydGlzZVR5cGVzIHdpdGggSURzIGZyb20gYW4gQXJyYXkgb2YgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGV4cGVydGlzZVR5cGVJZHMgQXJyYXkgb2YgSW50ZWdlcnMgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWQnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZXMgc2F0aXNmeWluZyB0aGUgY29uZGl0aW9uXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlSWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZUlkcy5pbmRleE9mKGV4cGVydGlzZVR5cGUuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmlsdGVyKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcmRlcmVkIGFycmF5IG9mIHBhcmVudHMgb2YgYW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZSB0byBmaW5kIHBhcmVudHMgZnJvbVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZSBwYXJlbnRzLCBhbmQgdGhlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZXMgICAgICA9IFtleHBlcnRpc2VUeXBlUGFyZW50XTtcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRleHBlcnRpc2VUeXBlcy5wdXNoKGV4cGVydGlzZVR5cGVQYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBleHBlcnRpc2VUeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCB3aXRoIGFuIGV4YWN0XG5cdCAqIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgYW5kIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgSUQgcGFpclxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZVxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmZcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBudWxsLCBvciB0aGUgcmVjb3JkIGRlc2lyZWRcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIHN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiA9PT0gc3RhZmZJZCAmJiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVTdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5pZCA9PT0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHx8IG51bGw7XG5cdH1cblxuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuZXhwZXJ0aXNlVHlwZXMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXIuanMiLCIvKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBBYnN0cmFjdCBjbGFzcyBleHRlbmRlZCBieSBhbGwgbWFuYWdlcnMsXG4gKiBjb250YWlucyBtZXRob2RzIHRoYXQgbWF5IGJlIHVzZWZ1bCB0byB0aGUgbWFuYWdlcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VhcmNoIGFycmF5IG9mIGVsZW1lbnRzIGZvciBxdWVyeSBpbiBnaXZlbiBwcm9wZXJ0eSBuYW1lc1xuXHQgKiBcblx0ICogQHBhcmFtIGVsZW1lbnRzIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgc2VhcmNoZWQgdGhyb3VnaFxuXHQgKiBAcGFyYW0gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqL1xuXHRzZWFyY2goZWxlbWVudHMgPSBbXSwgcXVlcnkgPSBcIlwiLCBwcm9wZXJ0aWVzID0gW10pIHtcblx0XHRxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7IC8vIE5vcm1hbGlzZSBxdWVyeSAoYW5kIHByb3BlcnRpZXMgaW5kaXZpZHVhbGx5IGxhdGVyKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzLmZpbHRlcihlbCA9PiB7IC8vIEdldCBhbGwgZWxlbWVudHNcblx0XHRcdHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcCA9PiB7IC8vIENoZWNrIHByb3BlcnRpZXMgdW50aWwgbWF0Y2ggaXMgZm91bmRcblx0XHRcdFx0aWYgKFN0cmluZyhlbFtwcm9wXSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHJldHVybiB0cnVlOyAvLyBEZXRlcm1pbmUgaWYgcHJvcGVydHkgaXMgYSBtYXRjaCBmb3IgcXVlcnlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvTWFuYWdlci5qcyIsIi8qKlxuICogRHluYW1pY1BhZ2VcbiAqXG4gKiBFeHRlbmRlZCBieSBldmVyeSBwYWdlLCBlLmcuIFRpY2tldFBhZ2UuXG4gKiBDb250YWlucyBmdW5jdGlvbnMgdGhhdCBhcmUgcmVwZWF0ZWQgb2Z0ZW4gYW1vbmdcbiAqIHBhZ2VzLCBzdWNoIGFzIHVwZGF0aW5nIHRhYmxlcyBvciB1cGRhdGluZyB0aGUgbmF2YmFyXG4gKi9cbmNsYXNzIER5bmFtaWNQYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIHBhZ2UgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yc1xuXHQgKiB0byBkZWZpbmUgdGhlIGJvdW5kcyBvZiB0aGUgcGFnZSwgaW4gY2FzZXMgd2hlcmUgdGhpcyBEeW5hbWljUGFnZVxuXHQgKiBpcyBub3QgdGhlIG9ubHkgcGFnZSBvbiB0aGUgc2NyZWVuLCBzdWNoIGFzIGlmIGEgcGFnZSBpcyBiZWluZ1xuXHQgKiBkaXNwbGF5ZWQgaW4gYSBtb2RhbC5cblx0ICpcblx0ICogTm90IHByb3ZpZGluZyBhbnkgc2VsZWN0b3JzIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGVcblx0ICogbWFpbiBzZWxlY3RvcnMgZm9yIHRoZSBlbnRpcmUgc2NyZWVuLCBzdWNoIHRoYXRcblx0ICogdGhpcyBwYWdlIGJlY29tZXMgdGhlIG1haW4gcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBzZWN0aW9uU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgbWFpbiBzZWN0aW9uIGNvbnRhaW5pbmcgdGFibGUgdmlld1xuXHQgKiBAcGFyYW0gdGFibGVTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRhYmxlIHdpdGhpbiBwcmV2aW91cyBzZWN0aW9uXG5cdCAqIEBwYXJhbSBuYXZTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIG5hdmlnYXRpb24gYmFyIHNob3duIGF0IHRvcCBvZiBzZWN0aW9uXG5cdCAqIEBwYXJhbSBkZXRhaWxTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHNpbmdsZSB2aWV3IGRldGFpbCBzaG93biBmb3IgYW4gaW5kaXZpZHVhbCByb3dcblx0ICovXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzZWN0aW9uU2VsZWN0b3IgPSBcIiNsaXN0LXZpZXdcIixcblx0XHR0YWJsZVNlbGVjdG9yID0gXCIjdGFibGUtc2VjdGlvblwiLFxuXHRcdG5hdlNlbGVjdG9yLFxuXHRcdGRldGFpbFNlbGVjdG9yXG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuc2VjdGlvblNlbGVjdG9yID0gc2VjdGlvblNlbGVjdG9yO1xuXHRcdHRoaXMudGFibGVTZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XG5cdFx0Ly8gU2V0IG5hdmlnYXRpb24gc2VsZWN0b3IgdG8gZmlyc3QgY29tcG9uZW50IG9mIHNlY3Rpb24gc2VsZWN0b3Igd2l0aCDigJgtbmF24oCZIGFwcGVuZGVkLCBvdGhlcndpc2UgZGVmYXVsdCBDU1Mgc2VsZWN0b3Jcblx0XHR0aGlzLm5hdlNlbGVjdG9yID0gbmF2U2VsZWN0b3IgPyBuYXZTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLW5hdlwiIDogXCIuc2lkZS1uYXYtYmFyLW5lc3RlZFwiKTtcblx0XHR0aGlzLmRldGFpbFNlbGVjdG9yID0gZGV0YWlsU2VsZWN0b3IgPyBkZXRhaWxTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLWRldGFpbFwiIDogXCIjc2luZ2xlLXZpZXdcIik7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aXRsZSBiYXIgb2YgdGhlIHNpbmdsZSB2aWV3IHRvIHRoZSBnaXZlbiBzdHJpbmdcblx0ICogQ0FVVElPTjogRG9lcyBub3QgcGVyZm9ybSBlc2NhcGluZyBvZiBpbnB1dCBzdHJpbmcsIGRvIG5vdCBwYXNzXG5cdCAqIHVzZXIgY29udGVudCB0byB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIGh0bWwgSFRNTCB0byBzZXQgdGhlIHNpbmdsZSB2aWV3IHRpdGxlIHRvXG5cdCAqL1xuXHR1cGRhdGVTaW5nbGVWaWV3TmF2YmFyKGh0bWwpIHtcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykuaHRtbChodG1sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgXCJMb2FkaW5n4oCmXCIgc3BsYXNoIHNjcmVlbiBpZiBpdCdzIHNob3duXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgXCJObyBSZXN1bHRz4oCmXCIgc3BsYXNoIHNjcmVlblxuXHQgKiBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuXHQgKlxuXHQgKiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciB1c2luZyBcImFwcGVuZFRhYmxlXCJcblx0ICovXG5cdHVwZGF0ZVNwbGFzaFNjcmVlbihuYXZUZXh0ID0gbnVsbCkge1xuXHRcdC8vIEdldCB0YWJsZSBlbGVtZW50IHRvIGluc3BlY3QgY29udGVudHNcblx0XHR2YXIgJHRhYmxlID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdFx0XHQvLyBHZXQgbnVtYmVyIG9mIHJlc3VsdHMgd2l0aGluIHRhYmxlIGN1cnJlbnRseSBiZWluZyBzaG93blxuXHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlIEhUTUxcblx0XHRcdFx0Ly8gc2luY2Ugc29tZSB0YWJsZSByb3dzIG1heSBiZSBoaWRkZW4sIHdoaWNoIG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gZGlzY291bnRlZCBmcm9tIHRoZSB0b3RhbCBjb3VudC5cblx0XHQgICAgcmVzdWx0c0NvdW50ID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRyJykuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmhhc0NsYXNzKFwicm93LWhpZGRlblwiKSkubGVuZ3RoLFxuXHRcdFx0XHQvLyBHZXQgc3BsYXNoIHNjcmVlbiBlbGVtZW50IHdoaWNoIG1heSBiZSBiZWluZyBzaG93biBpbnN0ZWFkIG9mIHRhYmxlXG5cdFx0ICAgICRzcGxhc2hTY3JlZW4gPSAkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlcmUgYXJlIHJlc3VsdHMsIHRoZSBzcGxhc2ggc2NyZWVuIG9yIHRhYmxlIG5lZWRzIHRvIGJlIHNob3duXG5cdFx0Ly8gYW5kIHRoZSBvdGhlciBzd2FwcGVkIG91dCB1c2luZyBDU1Ncblx0XHR2YXIgWyRzaG93LCAkaGlkZV0gPSByZXN1bHRzQ291bnQgPyBbJHRhYmxlLCAkc3BsYXNoU2NyZWVuXSA6IFskc3BsYXNoU2NyZWVuLCAkdGFibGVdO1xuXHRcdCRoaWRlLmFkZENsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXHRcdCRzaG93LnJlbW92ZUNsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXG5cdFx0Ly8gVGhlIG1haW4gdG9wIGJhciBmb3IgdGhlIGxpc3QgdmlldyBjb250YWlucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHNob3duIGluIHRoZSB0YWJsZVxuXHRcdGlmICghbmF2VGV4dCkge1xuXHRcdFx0Ly8gU2V0IG5hdmJhciB0ZXh0IGFzIG51bWJlciBvZiBpdGVtcyBpbiB0YWJsZSB0aGVuIGFwcGVuZCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0XHRuYXZUZXh0ID0gcmVzdWx0c0NvdW50ICsgXCIgXCIgKyAkKHRoaXMubmF2U2VsZWN0b3IpLmZpbmQoXCJsaS5hY3RpdmVcIikuZmlyc3QoKS50ZXh0KCkucmVwbGFjZShcIkFsbCBcIiwgXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdW5hYmxlIHRvIG9idGFpbiByb3dzIGNvdW50LCBzaG93IFwiTG9hZGluZ+KAplwiXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuY2xvc2VzdChcInNlY3Rpb25cIikuZmluZChcIi50b3AtbmF2IGg0XCIpLnRleHQocmVzdWx0c0NvdW50ICE9PSB1bmRlZmluZWQgPyBuYXZUZXh0IDogXCJMb2FkaW5n4oCmXCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSByb3cgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqIHVzaW5nIGRhdGEgZnJvbSBcIm9iamVjdFwiLlxuXHQgKlxuXHQgKiBUaGUgcHJvcGVydHkgbmFtZXMgc2hvdWxkIGNvcnJlc3BvbmQgd2l0aCB0aGUgXCJzbHVnXCJcblx0ICogYXR0cmlidXRlIGluIHRhYmxlIGhlYWRlci5cblx0ICpcblx0ICogTk9URTogVGhpcyBhc3N1bWVzIHRoZSBvYmplY3QgaGFzIGFuIElEIGF0dHJpYnV0ZS4gSW5jbHVkZSBpdFxuXHQgKiBldmVuIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNob3cgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmplY3QgLSBUaGUgZGF0YSB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGVcblx0ICogc3BsYXNoc2NyZWVuIG9uIHlvdXIgcGFnZVxuXHQgKi9cblx0YXBwZW5kVGFibGVSb3cob2JqZWN0KSB7XG5cdFx0dmFyICR0YWJsZVNlY3Rpb24gPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0ICAgICR0YWJsZUhlYWQgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRoZWFkIHRyJyksXG5cdFx0ICAgICR0YWJsZUJvZHkgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRib2R5JyksXG5cdFx0ICAgICRuZXdSb3cgICAgICAgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XG5cblx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgcm93IHR3aWNlXG5cdFx0aWYgKCR0YWJsZUJvZHkuY2hpbGRyZW4oXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBvYmplY3QuaWQgKyBcIlxcXCJdXCIpLmxlbmd0aCA+IDApIHJldHVybjtcblxuXHRcdC8vIFNldCBJRCBvbiByb3cgdG8gcmVmZXJlbmNlIGxhdGVyXG5cdFx0JG5ld1Jvd1swXS5kYXRhc2V0LnJvd2lkID0gb2JqZWN0LmlkO1xuXHRcdCRuZXdSb3cudG9nZ2xlQ2xhc3MoXCJoaWdobGlnaHRcIiwgb2JqZWN0LmlkID09IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cblx0XHQkdGFibGVIZWFkLmNoaWxkcmVuKCd0aCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2x1ZyA9IHRoaXMuZGF0YXNldC5zbHVnLCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXHRcdFx0aWYgKHNsdWcgPT09ICdleWUnKSB7IC8vIHRoZSBvbi1ob3ZlciBleWUgaW52aXNpYmxlIHJvd1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+Jztcblx0XHRcdH0gZWxzZSBpZiAoc2x1ZyAmJiBzbHVnLmluY2x1ZGVzKFwiYWNjZXNzXCIpKSB7XG5cdFx0XHRcdC8vIEJvb2xlYW4gdmFsdWUgc3VwcG9ydFxuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpID8gdGhpcy5pbm5lckhUTUwgOiBcIsK3XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpICE9PSB1bmRlZmluZWQgPyBvYmplY3Rbc2x1Z10gOiBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkbmV3Um93LmFwcGVuZCh0ZCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JHRhYmxlQm9keS5hcHBlbmQoJG5ld1Jvdyk7XG5cblx0XHRyZXR1cm4gJG5ld1Jvd1swXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgdGhlIGRhdGEgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqL1xuXHRjbGVhclRhYmxlKCkge1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTaG93IGRldGFpbCBwYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIHRhYmxlIHJvdyB0byBiZSBzaG93biBpbiB0aGUgc2luZ2xlIHZpZXdcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQgPSBudWxsKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBjaGVjayBmb3IgbnVsbCBhcyBubyByb3dzIHdpbGwgbWF0Y2ggaWYgbm8gSUQgcGFzc2VkXG5cdFx0Ly8gLnNpYmxpbmdzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmIHNvIGNhbiBiZSBjaGFpbmVkIGFmdGVyIGZpbmRpbmcgaGlnaGxpZ2h0IHJvdyBmaXJzdFxuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5yb3dpZCA9PSBpZCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuZmlyc3QoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFxuXHRcdC8vIE5vIG5lZWQgdG8gc2V0IHN0eWxlIHVzaW5nIEpTIGhlcmUsIENTUyBoYW5kbGVzIGZsZXhcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLnVud3JhcChcImRpdlwiKVxuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uIG9uIGhpZGVcblx0XHRcdC5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJjbG9zZVxcXCJdXCIpLmNsaWNrKCgpID0+IHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpKTtcblx0XHRcblx0XHRpZiAoaWQgPiAtMSkgbG9jYXRpb24uaGFzaCA9IHBhcnNlSW50KGlkKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEhpZGUgZGV0YWlsIHBhZ2Ugc2hvd24gd2l0aCBzaG93RGV0YWlsXG5cdCAqL1xuXHRoaWRlVGFibGVSb3dEZXRhaWxzKCkge1xuXHRcdC8vIERlc2VsZWN0IGFsbCByb3dzXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBGaWx0ZXIgdG8gY2hlY2sgaWYgYWxyZWFkeSBoaWRkZW4sIGRvbid0IGhpZGUgYWdhaW5cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudChcImRpdlwiKS5sZW5ndGggPT09IDApLndyYXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdFx0XG5cdFx0bG9jYXRpb24uaGFzaCA9IFwiXCI7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhIHNlbGVjdCBlbGVtZW50IHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG5cdCAqIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGRyb3Bkb3duIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3QgQSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbGxlZFxuXHQgKiBAcGFyYW0gZGVmYXVsdFRleHQgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG5cdCAqIEBwYXJhbSBlbGVtZW50cyBMaXN0IG9mIGVsZW1lbnRzIHRvIGJlIGFkZGVkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbVxuXHQgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbklkIElEIG9mIGEgZGVmYXVsdCBvcHRpb24gZnJvbSB0aGUgZWxlbWVudHMgZ2l2ZW5cblx0ICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0IGZpZWxkIHRvIGFjY2VzcyBzZWxlY3RlZCBpdGVtIHdpdGhcblx0ICogQHBhcmFtIGdldEFkZGl0aW9uYWxEZXRhaWxzIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGJlIHNob3duIGZvciBjdXJyZW50IGl0ZW1cblx0ICovXG5cdHBvcHVsYXRlU2VsZWN0RmllbGQoJHNlbGVjdCwgZGVmYXVsdFRleHQsIGVsZW1lbnRzLCBkZWZhdWx0T3B0aW9uSWQgPSBudWxsLCBwcm9wZXJ0eSA9ICduYW1lJywgZ2V0QWRkaXRpb25hbERldGFpbHMgPSBudWxsKSB7XG5cdFx0Ly8gRGVmYXVsdCBlbXB0eSBjb250ZW50IGZvciBpbnB1dFxuXHRcdGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKGRlZmF1bHRUZXh0LCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdCRzZWxlY3QuZW1wdHkoKS5hcHBlbmQob3B0aW9uKTtcblx0XHRcblx0XHQvLyBFYWNoIG9wdGlvbiB0byBiZSBzZWxlY3RlZCBmcm9tXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChnZXRBZGRpdGlvbmFsRGV0YWlscyAhPT0gbnVsbCkge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBnZXRBZGRpdGlvbmFsRGV0YWlscyhlKSArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmdcblx0ICogQHBhcmFtIGVsZW1lbnRzIFRoZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VhcmNoIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIG9iamVjdENhbGxiYWNrIGEgY2FsbGJhY2sgcmV0dXJuaW5nIGFuIG9iamVjdCAodGhlIHJvdyBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSBzZWFyY2hLZXlzIHRoZSBwcm9wZXJ0aWVzIGluIG9iamVjdENhbGxiYWNrIHRvIGhpZ2hsaWdodFxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBlbGVtZW50cyA9IFtdLCBvYmplY3RDYWxsYmFjaywgc2VhcmNoS2V5cyA9IFtdKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzO1xuXG5cdFx0cGFnZS5jbGVhclRhYmxlKCk7XG5cblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0gb2JqZWN0Q2FsbGJhY2soZWwpO1xuXG5cdFx0XHRcdHNlYXJjaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRcdG9iamVjdFtrZXldID0gU3RyaW5nKG9iamVjdFtrZXldKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcXVlcnkgKyAnKScsICdpZycpLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocXVlcnkgPT09ICQoXCIuc2VhcmNoLWZpZWxkIGlucHV0XCIpLnZhbCgpKSB7XG5cdFx0XHRcdFx0cGFnZS5hcHBlbmRUYWJsZVJvdyhvYmplY3QpO1xuXHRcdFx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGAke2VsZW1lbnRzLmxlbmd0aH0gcmVzdWx0JHtlbGVtZW50cy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYE5vIHJlc3VsdHMgZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhIG1lc3NhZ2UgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgb3ZlciBhbGwgZWxlbWVudHMuXG5cdCAqIEhpZGUgYWZ0ZXIgNiBzZWNvbmRzLCBvciBjb25maWd1cmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHN0cmluZyB0byBiZSBzaG93biBpbiB0aGUgbWVzc2FnZSBib3guXG5cdCAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG1lc3NhZ2UsIHN1Y2ggYXMgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIlxuXHQgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMgZm9yIHRoZSBtZXNzYWdlIHRvIGJlIHNob3duIGZvci5cblx0ICovXG5cdHN0YXRpYyBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkXCIsIHR5cGUgPSBcImRhbmdlclwiLCBkdXJhdGlvbiA9IDYpIHtcblx0XHQvLyBPbmx5IHNob3cgb25lIG1lc3NhZ2UgYXQgYSB0aW1lXG5cdFx0JChcIiNhbGVydC1ub3RpZmljYXRpb25cIikucmVtb3ZlKCk7XG5cblx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bXNnLmlkID0gXCJhbGVydC1ub3RpZmljYXRpb25cIjtcblx0XHRtc2cuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIsIGBhbGVydC0ke3R5cGV9YCwgXCJhbGVydC1ub3RpZmljYXRpb25cIik7XG5cdFx0bXNnLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTsgLy8gQWNjZXNzaWJpbGl0eVxuXHRcdC8vIFNldCBjb250ZW50IGFuZCBzaG93IG9uIHNjcmVlblxuXG5cdFx0bXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1zZyk7XG5cblx0XHQvLyBIaWRlIGFmdGVyIGR1cmF0aW9uXG5cdFx0c2V0VGltZW91dCgoKSA9PiBtc2cucmVtb3ZlKCksIGR1cmF0aW9uICogMTAwMCk7XG5cblx0XHQvLyBDbGljayB0byBoaWRlIG1lc3NhZ2Vcblx0XHQkKG1zZykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuXG4vKipcbiAqIEhhcmR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBkZXZpY2VzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEhhcmR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kZXZpY2VzID0gYXBpLmRldmljZXMubWFwKGUgPT4gbmV3IERldmljZShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgVHlwZXMgaW4gdGFibGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVUeXBlcygpIHtcblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5kZXZpY2VzLm1hcCh0ID0+IHQudHlwZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBNYWtlcyBmb3IgYSBzcGVjaWZpZWQgVHlwZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZU1ha2VzT2ZUeXBlKHR5cGUpIHtcblx0XHRsZXQgZGV2aWNlc0J5VHlwZSA9IHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUpO1xuXG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KGRldmljZXNCeVR5cGUubWFwKHQgPT4gdC5tYWtlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZGV2aWNlcyB3aXRoIGEgc3BlY2lmaWVkIFR5cGUgYW5kIE1ha2Vcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHRnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSh0eXBlLG1ha2UpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSAmJiBkZXZpY2UubWFrZSA9PSBtYWtlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRldmljZXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBkZXZpY2VzIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldERldmljZXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGlkcy5pbmRleE9mKGRldmljZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBkZXZpY2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBkZXZpY2UgXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkZXZpY2UgPT4gZGV2aWNlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRldmljZSB3aXRoIHRoZSBnaXZlbiBzZXJpYWwgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBzZXJpYWxOdW1iZXIgVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlIGRldmljZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0RldmljZX1cblx0ICovXG5cdGdldERldmljZUJ5U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkID0+IGQuc2VyaWFsX25vID09PSBzZXJpYWxOdW1iZXIpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi9Qcm9ncmFtXCI7XG5cbi8qKlxuICogU29mdHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIHNvZnR3YXJlIHByb2dyYW1zIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIFNvZnR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvZnR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wcm9ncmFtcyA9IGFwaS5wcm9ncmFtcy5tYXAoZSA9PiBuZXcgUHJvZ3JhbShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJvZ3JhbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBwcm9ncmFtcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXRQcm9ncmFtcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBpZHMuaW5kZXhPZihwcm9ncmFtLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIHByb2dyYW1cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmluZChwcm9ncmFtID0+IHByb2dyYW0uaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlci5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDb21tZW50XG4gKlxuICogQSBjb21tZW50IGlzIG1hZGUgYWJvdXQgYSBzcGVjaWZpYyB0aWNrZXQsIGJ5XG4gKiBhIHN0YWZmIG1lbWJlci5cbiAqIFxuICogQ29udGFpbnMgdGhlIFRpY2tldCB0aGF0IGl0IGJlbG9uZ3MgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZDogaWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbF9pZDogY2FsbCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbCAgICAgICAgICAgID0gY2FsbDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDtcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IGF1dGhvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2F1dGhvcik7XG5cdH1cblxuXHRzZXQgYXV0aG9yKGF1dGhvcikge1xuXHRcdHRoaXMuX2F1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdGdldCBjYWxsKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbCh0aGlzLl9jYWxsKTtcblx0fVxuXG5cdHNldCBjYWxsKGNhbGwpIHtcblx0XHR0aGlzLl9jYWxsID0gY2FsbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENhbGxcbiAqXG4gKiBFdmVyeSB0aW1lIHRoZSBIZWxwZGVzayBpcyBjYWxsZWQsIHRoaXMgaXMgY3JlYXRlZC5cbiAqIEEgY2FsbCBtYXkgaGF2ZSBtdWx0aXBsZSB0aWNrZXRzLCBhIHRpY2tldCBtYXkgaGF2ZVxuICogbXVsdGlwbGUgY2FsbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGwge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGltZSxcblx0XHRjYWxsZXJfaWQ6IGNhbGxlcixcblx0XHRvcGVyYXRvcl9pZDogb3BlcmF0b3IsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMudGltZSAgICAgPSB0aW1lO1xuXHRcdHRoaXMuY2FsbGVyICAgPSBjYWxsZXI7ICAgLy8gSUQgb2YgY2FsbGVyLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7IC8vIElEIG9mIG9wZXJhdG9yLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLnRpY2tldHMgID0gdGlja2V0czsgIC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgVGlja2V0J3Ncblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgb3BlcmF0b3Iob3BlcmF0b3IpIHtcblx0XHR0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzRnJvbUNhbGwodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRW1wbG95ZWVcbiAqXG4gKiBBbiBlbXBsb3llZSBvZiB0aGUgY29tcGFueVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGpvYl90aXRsZTogam9iLFxuXHRcdGRlcGFydG1lbnQsXG5cdFx0cGhvbmVfbnVtYmVyOiBwaG9uZSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IHNwZWNpYWxpc21zID0gW10sXG5cdFx0b3BlcmF0b3IgPSBmYWxzZSxcblx0XHRzcGVjaWFsaXN0ID0gc3BlY2lhbGlzbXMubGVuZ3RoID4gMCxcblx0XHRhbmFseXN0ID0gZmFsc2UsXG5cdFx0YWRtaW4gPSBmYWxzZVxuXHR9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMuam9iID0gam9iO1xuXHRcdHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQubmFtZTtcblx0XHR0aGlzLl9kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5pZDtcblx0XHR0aGlzLnBob25lID0gcGhvbmU7XG5cdFx0dGhpcy5zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHRcdHRoaXMuYWNjZXNzID0ge29wZXJhdG9yLCBhbmFseXN0LCBhZG1pbn07XG5cdFx0XG5cdFx0Ly8gSWYgdXNlciBpcyBhbnkgb3RoZXIgcGVybWlzc2lvbiB0aGVuIHJlYWQgaXMgZ3JhbnRlZFxuXHRcdHRoaXMuYWNjZXNzLnJlYWQgPSB0aGlzLmFjY2Vzcy5vcGVyYXRvciB8fCB0aGlzLmFjY2Vzcy5hbmFseXN0IHx8IHRoaXMuYWNjZXNzLmFkbWluIHx8IHRoaXMuYWNjZXNzLnJlYWRvbmx5IHx8IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyByZWFkIGFjY2VzcyB0byB0aGUgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNSZWFkKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5yZWFkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgaGVscCBkZXNrIG9wZXJhdG9yXG5cdCAqL1xuXHRnZXQgaXNPcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Mub3BlcmF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBhbmFseXRpY2FsIGRhdGEgYWJvdXQgdGhlIGhlbHAgZGVzayBzeXN0ZW1cblx0ICovXG5cdGdldCBpc0FuYWx5c3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFuYWx5c3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvbiB0aGUgaGVscCBkZXNrXG5cdCAqL1xuXHRnZXQgaXNBZG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYWRtaW47XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgQSBsaXN0IG9mIHByb2JsZW0gdHlwZXMgdGhlIHVzZXIgaXMgYSBzcGVjaWFsaXN0IG9mXG5cdCAqL1xuXHRnZXQgc3BlY2lhbGlzbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX3NwZWNpYWxpc21zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3BlY2lhbGlzbXMgU2V0IHRoZSBsaXN0IG9mIHNwZWNpYWxpc21zIGZvciB0aGlzIHBlcnNvbiBvbiB0aGUgc3lzdGVtXG5cdCAqL1xuXHRzZXQgc3BlY2lhbGlzbXMoc3BlY2lhbGlzbXMpIHtcblx0XHR0aGlzLl9zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgZGF0YSBmb3Igc2VuZGluZyB0byBBUEkgZW5kcG9pbnQuIFRoZSBBUEkgaGFzIGRpZmZlcmVudFxuXHQgKiBkYXRhIGtleXMgcmVwcmVzZW50aW5nIHRoZSBkYXRhIGFjY2Vzc2libGUgaW4gdGhlIHRhYmxlcywgc28gbmV3XG5cdCAqIGRhdGEgYW5kIHVwZGF0ZXMgdG8gZGF0YSBtdXN0IHVzZSB0aGVzZSBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBkYXRhIHRvIGJlIGNvbnZlcnRlZFxuXHQgKiBAcmV0dXJucyBkYXRhIHdpdGggdXBkYXRlZCBrZXkgbmFtZXNcblx0ICovXG5cdHN0YXRpYyBwcmVwYXJlRGF0YShkYXRhID0ge30pIHtcblx0XHRkYXRhLmpvYl90aXRsZSA9IGRhdGEuam9iO1xuXHRcdGRhdGEucGhvbmVfbnVtYmVyID0gZGF0YS5waG9uZTtcblx0XHRkYXRhLmV4cGVydGlzZV90eXBlcyA9IGRhdGEuc3BlY2lhbGlzbXM7XG5cdFx0ZGF0YS5kZXBhcnRtZW50X2lkID0gZGF0YS5kZXBhcnRtZW50O1xuXHRcdGZvciAobGV0IGtleSBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblx0XHRcdGRhdGFba2V5XSA9IGRhdGEuYWNjZXNzW2tleV0gPyAoMSAmJiAoZGF0YS5zcGVjaWFsaXN0ID0gMSkpIDogMDtcblx0XHR9XG5cdFx0ZGF0YS5zcGVjaWFsaXN0ID0gZGF0YS5zcGVjaWFsaXN0IHx8IDA7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0cGFyZW50X2lkOiBwYXJlbnQsXG5cdFx0Y2hpbGRyZW5cblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLm5hbWUgICAgID0gbmFtZTtcblx0XHR0aGlzLnBhcmVudCAgID0gcGFyZW50O1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjsgLy8gSUQgb2YgRXhwZXJ0aXNlVHlwZSdzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIEV4cGVydGlzZVR5cGUnc1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9wYXJlbnQpO1xuXHR9XG5cblx0c2V0IHBhcmVudChwYXJlbnQpIHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX2NoaWxkcmVuKTtcblx0fVxuXG5cdHNldCBjaGlsZHJlbihjaGlsZHJlbikge1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwiaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVN0YWZmIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHN0YWZmX2lkOiBzdGFmZklkLFxuXHRcdGV4cGVydGlzZV90eXBlX2lkOiBleHBlcnRpc2VUeXBlSWQsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgPSBzdGFmZklkO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlSWQ7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9leHBlcnRpc2VfdHlwZSk7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGUoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGF0dXNcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFN0YXR1cy5cbiAqIENvbnRhaW5zIFRpY2tldHMgdGhhdCBmaXQgaW50byB0aGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzbHVnLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgID0gaWQ7XG5cdFx0dGhpcy5zbHVnICAgID0gc2x1ZzsgICAgLy8gc2x1Z19leGFtcGxlXG5cdFx0dGhpcy5uYW1lICAgID0gbmFtZTsgICAgLy8gTmFtZSBFeGFtcGxlIVxuXHRcdHRoaXMudGlja2V0cyA9IHRpY2tldHM7IC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBUaWNrZXQgaW5zdGFuY2VzXG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNXaXRoU2x1Zyh0aGlzLnNsdWcpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvU3RhdHVzLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0XG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBUaWNrZXQvUHJvYmxlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxzLFxuXHRcdHN0YXR1cyxcblx0XHRzdGF0dXNfaGlzdG9yeTogc3RhdHVzSGlzdG9yeSxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRzb2x1dGlvbl9pZDogc29sdXRpb24sXG5cdFx0ZGV2aWNlcyxcblx0XHRwcm9ncmFtcyxcblx0XHRjb21tZW50cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWwsXG5cdFx0dXBkYXRlZF9hdDogdXBkYXRlZEF0UmVhbCxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZl9pZDogZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdGFzc2lnbmVkX3RvX29wZXJhdG9yX2lkOiBhc3NpZ25lZFRvT3BlcmF0b3JJZFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgICA9IGNhbGxzOyAgLy8gSUQgb2YgY2FsbHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ2FsbCdzXG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGF0dXNfaGlzdG9yeSAgICAgICA9IHN0YXR1c0hpc3Rvcnk7XG5cdFx0dGhpcy50aXRsZSAgICAgICAgICAgICAgICA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gICAgICAgICAgPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnNvbHV0aW9uICAgICAgICAgICAgID0gc29sdXRpb247XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgICA9IGRldmljZXM7ICAvLyBJRCBvZiBkZXZpY2VzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIERldmljZXNcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICAgID0gcHJvZ3JhbXM7IC8vIElEIG9mIHByb2dyYW1zLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFByb2dyYW1zXG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgICA9IGNvbW1lbnRzOyAvLyBJRCBvZiBjb21tZW50cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDb21tZW50J3Ncblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCAgICAgICAgICAgPSB1cGRhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgICAgICA9IGNyZWF0ZWRBdFJlYWw7XG5cdFx0dGhpcy51cGRhdGVkX2F0X3JlYWwgICAgICA9IHVwZGF0ZWRBdFJlYWw7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmFzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgY2FsbHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsc0J5VGlja2V0SWQodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgY2FsbHMoY2FsbHMpIHtcblx0XHR0aGlzLl9jYWxscyA9IGNhbGxzO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblx0XG5cdGdldCBzdGF0dXNfaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1c0hpc3RvcnkodGhpcy5fc3RhdHVzX2hpc3RvcnkpO1xuXHR9XG5cblx0c2V0IHN0YXR1c19oaXN0b3J5KHN0YXR1c0hpc3RvcnkpIHtcblx0XHR0aGlzLl9zdGF0dXNfaGlzdG9yeSA9IHN0YXR1c0hpc3Rvcnk7XG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBkZXZpY2VzKCkge1xuXHRcdHJldHVybiAobmV3IEhhcmR3YXJlTWFuYWdlcigpKS5nZXREZXZpY2VzKHRoaXMuX2RldmljZXMpO1xuXHR9XG5cblx0c2V0IGRldmljZXMoZGV2aWNlcykge1xuXHRcdHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuXHR9XG5cblx0Z2V0IHByb2dyYW1zKCkge1xuXHRcdHJldHVybiAobmV3IFNvZnR3YXJlTWFuYWdlcigpKS5nZXRQcm9ncmFtcyh0aGlzLl9wcm9ncmFtcyk7XG5cdH1cblxuXHRzZXQgcHJvZ3JhbXMocHJvZ3JhbXMpIHtcblx0XHR0aGlzLl9wcm9ncmFtcyA9IHByb2dyYW1zO1xuXHR9XG5cblx0Z2V0IGNvbW1lbnRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudHNCeUlkcyh0aGlzLl9jb21tZW50cyk7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHMpIHtcblx0XHR0aGlzLl9jb21tZW50cyA9IGNvbW1lbnRzO1xuXHR9XG5cblx0Z2V0IHNvbHV0aW9uKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudCh0aGlzLl9zb2x1dGlvbik7XG5cdH1cblxuXHRzZXQgc29sdXRpb24oc29sdXRpb24pIHtcblx0XHR0aGlzLl9zb2x1dGlvbiA9IHNvbHV0aW9uO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlU3RhZmYodGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmZJZDtcblx0fVxuXG5cdGdldCBhc3NpZ25lZF90b19vcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBhc3NpZ25lZF90b19vcGVyYXRvcihhc3NpZ25lZFRvT3BlcmF0b3JJZCkge1xuXHRcdHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0dmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MCAtIDEgKyAxKSkgKyAxOyAvL1JhbmRvbSBpbnQgYmV0d2VlbiAxIGFuZCA0MFxuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCkpLmdldEV4cGVydGlzZVR5cGUocmFuZG9tKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBEZXZpY2VcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dHlwZSxcblx0XHRtYWtlLFxuXHRcdHNlcmlhbF9ubyxcblx0XHR0aWNrZXRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSlcblx0e1xuXHRcdHRoaXMuaWRcdFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy50eXBlXHRcdFx0PSB0eXBlO1xuXHRcdHRoaXMubWFrZSAgIFx0XHQ9IG1ha2U7XG5cdFx0dGhpcy5zZXJpYWxfbm8gICAgIFx0PSBzZXJpYWxfbm87XG5cdFx0dGhpcy5fdGlja2V0c1x0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5jcmVhdGVkX2F0XHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIFByb2dyYW1cbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIFNvZnR3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmFtIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0cyxcblx0XHRvcGVyYXRpbmdfc3lzdGVtLFxuXHRcdGV4cGlyeV9kYXRlLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSkgXG5cdHtcblx0XHR0aGlzLmlkICAgICAgICAgXHRcdD0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICAgIFx0XHQ9IG5hbWU7XG5cdFx0dGhpcy5fdGlja2V0c1x0XHRcdD0gdGlja2V0cztcblx0XHR0aGlzLm9wZXJhdGluZ19zeXN0ZW1cdD0gb3BlcmF0aW5nX3N5c3RlbTtcblx0XHR0aGlzLmV4cGlyeV9kYXRlXHRcdD0gZXhwaXJ5X2RhdGU7XG5cdFx0dGhpcy5jcmVhdGVkX2F0IFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0IFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXRTb2Z0d2FyZVR5cGUoKSB7IFxuXHRcdC8vR2V0cyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBwcm9ncmFtIGlzIGFuIG9wZXJ0aW5nIHN5c3RlbSBvciBub3Rcblx0XHRpZiAodGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJPcGVyYXRpbmcgU3lzdGVtXCI7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJBcHBsaWNhdGlvblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCItXCI7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRTdGF0dXNcbiAqXG4gKiBJbnRlcm1lZGlhcnkgcmVsYXRpb25zaGlwIGJldHdlZW4gU3RhdHVzXG4gKiBhbmQgVGlja2V0LiBUaGlzIHN0b3JlcyBhIGhpc3Rvcnkgb2YgYVxuICogVGlja2V0J3Mgc3RhdHVzZXM7IHRoZSBsYXN0IGVudHJ5IGlzXG4gKiB0aGUgVGlja2V0J3MgY3VycmVudCBzdGF0dXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRzdGF0dXNfaWQ6IHN0YXR1cyxcblx0XHRzdGFmZl9pZDogc3RhZmYsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7IC8vIElEIG9mIHRpY2tldCwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFRpY2tldFxuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICA9IHN0YWZmOyAgLy8gSUQgb2Ygc3RhZmYsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuL0R5bmFtaWNQYWdlXCI7XG5cbi8qKlxuICogQVBJXG4gKlxuICogT3JpZ2luYWxseSB1c2VkIHRvIHJldHJpZXZlIGFuZCBoYW5kbGUgZGF0YSBmcm9tXG4gKiBBUEkgZW5kcG9pbnRzLCBidXQgbW9kaWZpZWQgdG8gaG9sZCBsb2NhbCBkYXRhXG4gKiBpbiB0aGUgY29uc3RydWN0b3Igc2V0IGJ5IFdvcmRQcmVzcydzIFR3aWdcbiAqIChkb25lIHRvIHJldXNlIHByZXZpb3VzIGNvbXBvbmVudHMgdG8gc2F2ZSB0aW1lKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FsbHMgPSBbXSxcblx0XHRzdGF0dXNlcyA9IFtdLFxuXHRcdHRpY2tldHMgPSBbXSxcblx0XHR0aWNrZXRfc3RhdHVzZXM6IHRpY2tldFN0YXR1c2VzID0gW10sXG5cdFx0Y29tbWVudHMgPSBbXSxcblx0XHRzdGFmZiA9IFtdLFxuXHRcdGRldmljZXMgPSBbXSxcblx0XHRwcm9ncmFtcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlczogZXhwZXJ0aXNlVHlwZXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZjogZXhwZXJ0aXNlVHlwZVN0YWZmID0gW10sXG5cdFx0ZGVwYXJ0bWVudHMgPSBbXVxuXHR9KSB7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgPSBjYWxscztcblx0XHR0aGlzLnN0YXR1c2VzICAgICAgICAgICA9IHN0YXR1c2VzO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgICAgID0gdGlja2V0cztcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzICAgICA9IHRpY2tldFN0YXR1c2VzO1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgID0gY29tbWVudHM7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgICAgPSBzdGFmZjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICA9IGRldmljZXM7XG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgPSBwcm9ncmFtcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGV4cGVydGlzZVR5cGVzO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgICAgICAgID0gZGVwYXJ0bWVudHM7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCIvKipcbiAqIEpTIHNwZWNpZmljIHRvIEhhcmR3YXJlIHBhZ2UsIHVzZWQgdG8gaGFuZGxlIGZyb250IGVuZCBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICogZXZlbnQgaGFuZGxlcnMgZm9yIGJ1dHRvbnMgLCBcbiAqL1xuXG5pbXBvcnQgTWFrZUl0QWxsIGZyb20gXCIuLi8uLi9tYWluXCI7XG5pbXBvcnQgSGFyZHdhcmVQYWdlIGZyb20gXCIuL0hhcmR3YXJlUGFnZVwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiLi4vQVBJXCI7XG5cbmxldCBoYXJkd2FyZVBhZ2UsIGFwaTtcblxud2luZG93LmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdGFwaSA9IHdpbmRvdy5hcGkgPSBuZXcgQVBJKGRhdGEpO1xuXG5cdGhhcmR3YXJlUGFnZSA9IHdpbmRvdy5oYXJkd2FyZVBhZ2UgPSBuZXcgSGFyZHdhcmVQYWdlKCk7XG5cblx0Ly9Mb2FkIGFsbCBpbml0aWFsIFR5cGVzIG9mIGRldmljZVxuXHRoYXJkd2FyZVBhZ2UucG9wdWxhdGVUeXBlcygpO1xuXG5cdC8vSGFuZGxlciBmb3IgY2xpY2tpbmcgb24gYSBkZXZpY2UgdHlwZVxuXHQkKFwiI3R5cGVMaXN0XCIpLm9uKFwiY2xpY2tcIiwgXCJ0ciB0ZFwiLCBlID0+IHtcblx0XHQkKFwiI3R5cGVMaXN0PnRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpOyAvL1JlbW92ZXMgYW55IHByZXZpb3VzbHkgaGlnaGxpZ2h0IHRvIGFueSBlbGVtZW50XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblx0XHRoYXJkd2FyZVBhZ2UudHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0aGFyZHdhcmVQYWdlLnBvcHVsYXRlTWFrZSgpOyAvL0xvYWRzIGFsbCBNYWtlcyAndW5kZXInIHRoZSBzZWxlY3RlZCB0eXBlXG5cdH0pO1xuXG5cdC8vSGFuZGxlciBmb3IgY2xpY2tpbmcgb24gYSBkZXZpY2UgbWFrZVxuXHQkKFwiI21ha2VMaXN0XCIpLm9uKFwiY2xpY2tcIiwgXCJ0ciB0ZFwiLCBlID0+IHtcblx0XHQkKFwiI21ha2VMaXN0PnRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpOyAvL1JlbW92ZXMgYW55IHByZXZpb3VzbHkgaGlnaGxpZ2h0IHRvIGFueSBlbGVtZW50XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblx0XHRoYXJkd2FyZVBhZ2UubWFrZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1ha2U7XG5cdFx0aGFyZHdhcmVQYWdlLnNob3dEZXZpY2VzKCk7IC8vTG9hZHMgYWxsIGRldmljZXMgb2YgdGhlIHNlbGVjdGVkIFR5cGUgYW5kIE1ha2Vcblx0fSk7XG5cblx0Ly9IYW5kbGVyIGZvciBzZWxlY3RpbmcgYSBzcGVjaWZpYyBkZXZpY2UgZnJvbSB0aGUgZmluYWwgc2VsZWN0aW9uIHRhYlxuXHQkKGhhcmR3YXJlUGFnZS50YWJsZVNlbGVjdG9yKS5vbihcImNsaWNrXCIsIFwidGJvZHkgdHJcIiwgZSA9PiB7XG5cdFx0dmFyIGlkID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTsgLy9HZXRzIHRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgcm93XG5cdFx0aGFyZHdhcmVQYWdlLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpOyAvL09wZW5zIHRoZSBmdWxsIHZpZXcgZm9yIHRoZSBzZWxlY3RlZCBkZXZpY2Vcblx0fSk7XG5cblx0Ly9JZiBsb2FkaW5nIGEgc3BlY2lmaWMgZGV2aWNlIHZpYWEgVVJMIGhhc2hcblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRoYXNMb2NhdGlvbkhhc2goKTtcblx0fSBlbHNlIHtcblx0XHQvL0hpZGUgZnVsbCB2aWV3IHBhbmVsIGJ5IGRlZmF1bHRcblx0XHRoYXJkd2FyZVBhZ2UuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHR9XG5cblx0Ly9IYW5kbGVzIGRpc3BsYXlpbmcgdGhlIHBhZ2UgYXMgaWYgdGhlIHBhc3NlZCBkZXZpY2UgaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZFxuXHRmdW5jdGlvbiBoYXNMb2NhdGlvbkhhc2goKSB7XG5cdFx0dmFyIGlkID0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpO1xuXHRcdGhhcmR3YXJlUGFnZS5kZXZpY2UgPSBoYXJkd2FyZVBhZ2UuaGFyZHdhcmVNYW5hZ2VyLmdldChpZCk7XG5cdFx0aGFyZHdhcmVQYWdlLnR5cGUgPSBoYXJkd2FyZVBhZ2UuZGV2aWNlLnR5cGU7XG5cdFx0aGFyZHdhcmVQYWdlLm1ha2UgPSBoYXJkd2FyZVBhZ2UuZGV2aWNlLm1ha2U7XG5cdFx0aGFyZHdhcmVQYWdlLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpOyAvL09wZW5zIHRoZSBmdWxsIHZpZXcgZm9yIHRoZSBzZWxlY3RlZCBkZXZpY2Vcblx0XHRoYXJkd2FyZVBhZ2UucG9wdWxhdGVNYWtlKCk7IC8vUG9wdWxhdGluZyBtYWtlc1xuXHRcdGhhcmR3YXJlUGFnZS5zaG93RGV2aWNlcygpOyAvL1BvcHVsYXRpbmcgZGV2aWNlIGxpc3Rcblx0XHQvLyBTZXQgdHlwZVxuXHRcdCQoXCIjdHlwZUxpc3QgdGRcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC50eXBlID09PSBoYXJkd2FyZVBhZ2UudHlwZSkucGFyZW50KCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0Ly8gU2V0IG1ha2Vcblx0XHQkKFwiI21ha2VMaXN0IHRkXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQubWFrZSA9PT0gaGFyZHdhcmVQYWdlLm1ha2UpLnBhcmVudCgpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHR9XG5cblx0Ly9IYW5kbGVyIGZvciBjbGlja2luZyBUaWNrZXQgYW5kIFNvZnR3YXJlIGh5cGVybGlua3MgaW4gZnVsbCB2aWV3XG5cdCQoXCIjdGlja2V0c1wiKS5vbihcImNsaWNrXCIsIFwibGlbZGF0YS1yb3dpZF1cIiwgZSA9PiB7XG5cdFx0VHVyYm9saW5rcy52aXNpdChcInRpY2tldHMjXCIgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3dpZCk7XG5cdH0pO1xuXHQkKFwiI3NvZnR3YXJlXCIpLm9uKFwiY2xpY2tcIiwgXCJsaVtkYXRhLXJvd2lkXVwiLCBlID0+IHtcblx0XHRUdXJib2xpbmtzLnZpc2l0KFwic29mdHdhcmUjXCIgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3dpZCk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL2hhcmR3YXJlLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBIYXJkd2FyZVBhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgaGFyZHdhcmUgcGFnZSAvdyBKUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB0aGUgSGFyZHdhcmVNYW5hZ2VyLiBNZXRob2RzIG1vc3RseSBnZXQgY2FsbGVkIGZyb20gaGFyZHdhcmUuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IG51bGw7XG5cdFx0dGhpcy5tYWtlID0gbnVsbDtcblx0XHR0aGlzLmRldmljZSA9IG51bGw7XG5cdFx0Ly9NYW5hZ2Vyc1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblx0XHR0aGlzLmhhcmR3YXJlTWFuYWdlciA9IG5ldyBIYXJkd2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLnNvZnR3YXJlTWFuYWdlciA9IG5ldyBTb2Z0d2FyZU1hbmFnZXIoKTtcblx0fVxuXHRcblx0Ly9IYW5kbGVzIGFkZGluZyBhbGwgdW5pcXVlIGRldmljZSB0eXBlcyB0byB0aGUgVHlwZXMgY29sdW1uXG5cdHBvcHVsYXRlVHlwZXMoKSB7XG5cdFx0dmFyIHR5cGVMaXN0ID0gJCgnI3R5cGVMaXN0Jyk7XG5cdFx0dHlwZUxpc3QuZW1wdHkoKTtcblxuXHRcdHZhciB1bmlxdWVUeXBlcyA9IHRoaXMuaGFyZHdhcmVNYW5hZ2VyLnVuaXF1ZVR5cGVzKCk7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiB1bmlxdWVUeXBlcykge1xuXHRcdFx0dmFyIHJvdyA9IFwiPHRyPjx0ZCBkYXRhLXR5cGU9J1wiICsgdHlwZSArIFwiJz5cIiArIHR5cGUgKyBcIjwvdGQ+PC90cj5cIjtcblx0XHRcdHR5cGVMaXN0LmFwcGVuZChyb3cpO1xuXHRcdH1cblx0fVxuXG5cdC8vSGFuZGxlcyBhZGRpbmcgYWxsIHVuaXF1ZSBkZXZpY2UgbWFrZXMgdW5kZXIgdGhlIHNlbGVjdGVkIFR5cGUgdG8gdGhlIE1ha2UgY29sdW1uXG5cdHBvcHVsYXRlTWFrZSgpIHtcblx0XHR2YXIgbWFrZUxpc3QgPSAkKCcjbWFrZUxpc3QnKTtcblx0XHRtYWtlTGlzdC5lbXB0eSgpO1xuXHRcdHRoaXMuY2xlYXJUYWJsZSgpO1xuXG5cdFx0bGV0IHVuaXF1ZU1ha2UgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci51bmlxdWVNYWtlc09mVHlwZSh0aGlzLnR5cGUpO1xuXHRcdGZvciAobGV0IG1ha2Ugb2YgdW5pcXVlTWFrZSkge1xuXHRcdFx0aWYgKHRoaXMubWFrZSA9PSBtYWtlKSB7XG5cblx0XHRcdH1cblx0XHRcdHZhciByb3cgPSBcIjx0ciBcIiArICh0aGlzLm1ha2UgPT0gbWFrZT9cImNsYXNzPSdoaWdobGlnaHQnXCI6IFwiXCIpICsgXCI+PHRkIGRhdGEtbWFrZT0nXCIgKyBtYWtlICsgXCInPlwiICsgbWFrZSArIFwiPC90ZD48L3RyPlwiO1xuXHRcdFx0bWFrZUxpc3QuYXBwZW5kKHJvdyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvL0hhbmRsZXMgYWRkaW5nIGFsbCBkZXZpY2VzIG9mIHRoZSBzZWxlY3RlZCBtYWtlIGFuZCB0eXBlIHRvIHRoZSB0YWJsZVxuXHRzaG93RGV2aWNlcygpIHtcblx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblx0XHR2YXIgbWFrZSA9IHRoaXMubWFrZTtcblx0XHR0aGlzLmNsZWFyVGFibGUoKTtcblxuXHRcdHZhciByZXN1bHRzID0gdGhpcy5oYXJkd2FyZU1hbmFnZXIuZ2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKTtcblx0XHRmb3IgKGxldCBkZXZpY2Ugb2YgcmVzdWx0cykge1xuXHRcdFx0dGhpcy5hcHBlbmRUYWJsZVJvdyhkZXZpY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8vSGFuZGxlcyBvcGVuaW5nIHRoZSBmdWxsIHZpZXcgb2YgdGhlIHNlbGVjdGVkIGRldmljZSwgaW5jbHVkaW5nIHBvcHVsYXRpbmcgcmVsYXRlZFxuXHQvL3RpY2tldHMgYW5kIHNvZnR3YXJlLlxuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkKSB7XG5cdFx0dGhpcy5kZXZpY2UgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci5nZXQoaWQpO1xuXHRcdGlmICghdGhpcy5kZXZpY2UpIHtcblx0XHRcdHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHRcdFx0YWxlcnQoXCJObyBoYXJkd2FyZSB3aXRoIElEIFwiICsgaWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzdXBlci5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblx0XHQkKFwiI3RpY2tldHNcIikuaHRtbChcIlwiKTtcblx0XHQkKFwiI3NvZnR3YXJlXCIpLmh0bWwoXCJcIik7XG5cdFx0dmFyIHByb2dyYW1zID0gW107XG5cdFx0dmFyIHRpY2tldHMgPSB0aGlzLmRldmljZS50aWNrZXRzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgc3RhdHVzQ2xhc3MgPSBcInBlbmRpbmdcIjtcblx0XHRcdHZhciB0aWNrZXQgPSB0aWNrZXRzW2ldO1xuXHRcdFx0dmFyIHN0YXR1cyA9IHRpY2tldC5zdGF0dXM7XG5cdFx0XHR2YXIgc3RhdHVzVGV4dCA9IHN0YXR1cy5uYW1lO1xuXHRcdFx0XG5cdFx0XHRzd2l0Y2ggKHN0YXR1c1RleHQpIHsgXG5cdFx0XHRcdGNhc2UgXCJOZXdcIjpcblx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9IFwibmV3XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJQZW5kaW5nIC0gSW4gUHJvZ3Jlc3NcIjpcblx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9IFwicGVuZGluZ1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiUGVuZGluZyAtIEF3YWl0aW5nIFN0YWZmXCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcInBlbmRpbmdcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIlJlc29sdmVkXCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcInJlc29sdmVkXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHQvL0Rpc3BsYXlpbmcgdGlja2V0c1xuXHRcdFx0JChcIiN0aWNrZXRzXCIpLmFwcGVuZChgXG5cdFx0XHRcdDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIgZGF0YS1yb3dpZD1cImAgKyB0aWNrZXQuaWQgKyBgXCI+XG5cdFx0XHRcdFx0I2ArIHRpY2tldC5pZCArYDogYCArIHRpY2tldC50aXRsZSArIGBcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItYCArIHN0YXR1c0NsYXNzICsgYFwiPmAgKyBzdGF0dXNUZXh0ICsgYDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInB1bGwtcmlnaHQgdGV4dC1tdXRlZFwiPmAgKyB0aWNrZXQuY3JlYXRlZF9hdCArIGA8L3NwYW4+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRgKTtcblxuXHRcdFx0aWYgKHByb2dyYW1zLmxlbmd0aCA8IDIwKSB7IC8vTGltaXRpbmcgcHJvZ3JhbSBsaXN0IHNpemUgdG8gMjBcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aWNrZXQucHJvZ3JhbXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMuc29mdHdhcmVNYW5hZ2VyLmdldCh0aWNrZXQuX3Byb2dyYW1zW2pdKTtcblx0XHRcdFx0XHRpZiAocHJvZ3JhbXMuaW5kZXhPZihwcm9ncmFtKSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0cHJvZ3JhbXMucHVzaChwcm9ncmFtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9EaXNwbGF5aW5nIHNvZnR3YXJlXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBwcm9ncmFtcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0JChcIiNzb2Z0d2FyZVwiKS5hcHBlbmQoYFxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiIGRhdGEtcm93aWQ9XCJgICsgcHJvZ3JhbXNba10uaWQgKyBgXCI+XG5cdFx0XHRcdFx0YCArIHByb2dyYW1zW2tdLmdldFNvZnR3YXJlVHlwZSgpICsgYCAvIGAgKyBwcm9ncmFtc1trXS5uYW1lICsgIGBcblx0XHRcdFx0PC9saT5cblx0XHRcdGApO1xuXHRcdH1cdFxuXHRcdFxuXHRcdCQoXCIjdGlja2V0LXRvdGFsXCIpLmh0bWwoXCJUb3RhbDogXCIgKyB0aWNrZXRzLmxlbmd0aCk7XG5cdFx0JChcIiNzb2Z0d2FyZS10b3RhbFwiKS5odG1sKFwiVG90YWw6IFwiICsgcHJvZ3JhbXMubGVuZ3RoKTtcblxuXHRcdC8vVXBkYXRpbmcgdGl0bGVcblx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGhpcy5kZXZpY2UudHlwZSArIFwiIC8gXCIgKyB0aGlzLmRldmljZS5tYWtlICsgXCIgLyBcIiArIHRoaXMuZGV2aWNlLnNlcmlhbF9ubyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZVBhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9