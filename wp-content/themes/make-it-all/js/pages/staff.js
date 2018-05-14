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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(22);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DynamicPage2 = __webpack_require__(4);

var _DynamicPage3 = _interopRequireDefault(_DynamicPage2);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * StaffPage
 *
 * Methods useful for populating and handling input on Staff page
 */
var StaffPage = function (_DynamicPage) {
	_inherits(StaffPage, _DynamicPage);

	function StaffPage() {
		_classCallCheck(this, StaffPage);

		// Managers
		var _this = _possibleConstructorReturn(this, (StaffPage.__proto__ || Object.getPrototypeOf(StaffPage)).call(this));

		_this.staffManager = new _StaffManager2.default();
		_this.ticketManager = new _TicketManager2.default();

		// No employee detail shown by default
		_this.employee = null;
		return _this;
	}

	/**
  * Obtain and show all staff in list view table on page
  */


	_createClass(StaffPage, [{
		key: "showStaff",
		value: function showStaff() {
			var _this2 = this;

			// Ensure no locally-cached data is present in staff table before populating
			$(this.tableSelector).find("tbody").empty();

			// Column to fill tickets number into
			var ticketsColumnIndex = $(this.tableSelector).find("tr").first().children("[data-slug=\"tickets.assigned\"]").index();

			// Temporary array to hold staff IDs still awaiting ticket counts
			var staffForTickets = [];

			// Put each staff member on table
			var staff = this.staffManager.staff;

			// Add each staff member to a new row in the table
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = staff[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var employee = _step.value;

					var $tableRow = this.appendTableRow(employee);
					staffForTickets.push(employee.id);
				}

				// Hide splash screen if there is at least 1 staff member in view
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

			this.updateSplashScreen();

			// Get assigned ticket counts asynchronously
			(function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ids) {
					var $rows, tickets;
					return _regenerator2.default.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									// Get number of assigned tickets and fill column
									$rows = $(_this2.tableSelector).find("tbody").children("tr");
									tickets = _this2.ticketManager.getTicketsAssignedToStaffIds(ids);

									$rows.each(function (i, el) {
										el.children[ticketsColumnIndex].textContent = tickets[i + 1] ? tickets[i + 1].length || 0 : 0;
									});

								case 3:
								case "end":
									return _context.stop();
							}
						}
					}, _callee, _this2);
				}));

				return function (_x) {
					return _ref.apply(this, arguments);
				};
			})()(staffForTickets);
		}

		/**
   * Handle showing details for a specific employee. Usually called
   * when clicking on a row in the table, but can also be called
   * for other table row change inputs, such as hash fragment or
   * keyboard input.
   *
   * @param id The ID of the employee to show detail
   */

	}, {
		key: "showTableRowDetails",
		value: function showTableRowDetails(id) {
			var _this3 = this;

			// Get employee with ID
			this.employee = this.staffManager.get(id);
			// Catch invalid IDs and show message
			if (!this.employee) {
				// Hide single view if no detail is able to be presented
				// for requested ID, ensuring the person using the system
				// is not confused by data shown for previously accessed user.
				this.hideTableRowDetails();
				_DynamicPage3.default.showNotification("No employee with ID " + id);
				return;
			}

			// Put employee name in title bar of single view
			this.updateSingleViewNavbar(this.employee.name);

			// Fill in content for each field available in staff member
			$(this.detailSelector).find("[data-slug]").each(function (i, el) {
				// Each slug is a different field to be filled, so
				// get each value and set element content to value
				var value = Object.resolve(el.dataset.slug, _this3.employee);
				// Some values are optional, so don't show undefined if no data
				el.textContent = typeof value !== "undefined" ? value : "—";
			});

			// Some content requires special handling for input of information
			$(this.detailSelector).find("[data-customslug]").each(function (i, el) {
				switch (el.dataset.customslug) {

					// Permission tokens need to be handled specially
					// since value is not normal text
					case "access":
						StaffPage.showPermissions(el, _this3.employee);
						break;

					case "avatar":
						el.src = "https://placehold.it/275x275";
						break;

					case "tickets.assigned":
						el.textContent = "…";
						(function () {
							var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(el) {
								return _regenerator2.default.wrap(function _callee2$(_context2) {
									while (1) {
										switch (_context2.prev = _context2.next) {
											case 0:
												el.textContent = _this3.ticketManager.getTicketsAssignedToStaffId(_this3.employee.id).length;

											case 1:
											case "end":
												return _context2.stop();
										}
									}
								}, _callee2, _this3);
							}));

							return function (_x2) {
								return _ref2.apply(this, arguments);
							};
						})()(el);
						break;

					// If in doubt, presume data is invalid and show same as no data
					default:
						el.textContent = "—";
				}
			});

			// DynamicPage needs to handle view code
			_get(StaffPage.prototype.__proto__ || Object.getPrototypeOf(StaffPage.prototype), "showTableRowDetails", this).call(this, id);

			// Problem types view handling to be obtained by specific problem type JS
			window.staffProblemTypePage.currentSpecialisms = this.employee._specialisms;
			window.staffProblemTypePage.loadSpecialistExpertiseTypes($('.type-columns'));
		}

		/**
   * Handle displaying permissions from data object
   * to individual tokens shown in input, one for each of
   * the permission levels granted to the user.
   *
   * @param el The element to fill with the permission details
   * @param employee The employee to get the granted permission information from
   */

	}, {
		key: "search",


		/**
   * Search staff members given a search string
   * to filter the table by employees matching the string.
   * This searches through many staff table fields:
   * id, name, job, department and phone number.
   *
   * @param query The search string to filter the employees by
   */
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(query) {
				var properties;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								// Only search if query is sufficient for search
								// This matters more with larger datasets where "a" can have
								// thousands of results. Always ensure ID searches are performed
								// since ID is indexed and can be searched very quickly.
								if (query.length >= 2 || query.length > 0 && query == parseInt(query)) {

									// Define properties of employees to be searched for query match
									properties = ["id", "name", "job", "department", "phone"];
									// Perform the search using super search and assign results

									_get(StaffPage.prototype.__proto__ || Object.getPrototypeOf(StaffPage.prototype), "search", this).call(this, query, this.staffManager.search(query, properties), function (obj) {
										return Object.assign({}, obj);
									}, properties);
								} else {
									// Default to showing all staff if query is missing or insufficient
									// This is distinct to the case where there are no results to
									// a successful query — this is handled in super's search method
									// and shows an appropriate message instead of all the staff.
									this.showStaff();
								}

							case 1:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function search(_x3) {
				return _ref3.apply(this, arguments);
			}

			return search;
		}()
	}], [{
		key: "showPermissions",
		value: function showPermissions(el, employee) {
			el.innerHTML = "";
			// Define the icons to be displayed for each of the permission levels
			var icons = { read: "eye", operator: "user-secret", analyst: "line-chart", admin: "shield" };

			// Each permission has its own token for representing itself
			var _arr = ["read", "operator", "analyst", "admin"];
			for (var _i = 0; _i < _arr.length; _i++) {
				var permission = _arr[_i];

				// Determine whether employee has permission and only show if true
				if (employee.access[permission]) {

					// Permission icon
					var elIcon = document.createElement("i");
					elIcon.classList.add("fa", "fa-" + icons[permission]);

					// Permission name
					var elText = document.createElement("span");
					elText.textContent = permission.charAt(0).toUpperCase() + permission.slice(1);

					// Group icon and name into single token
					var elPermission = document.createElement("span");
					elPermission.appendChild(elIcon);
					elPermission.appendChild(elText);

					// Display permission token in element
					el.appendChild(elPermission);
				}
			}
		}
	}]);

	return StaffPage;
}(_DynamicPage3.default);

exports.default = StaffPage;

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StaffExpertiseTypePage
 *
 * Includes specialist allocations on top of ExpertiseTypePage
 */
var StaffExpertiseTypePage = function () {
	function StaffExpertiseTypePage() {
		_classCallCheck(this, StaffExpertiseTypePage);

		// Managers
		this.expertiseTypeManager = new _ExpertiseTypeManager2.default();
		this.staffManager = new _StaffManager2.default();
		this.ticketManager = new _TicketManager2.default();

		this.currentSpecialisms = [];
	}

	_createClass(StaffExpertiseTypePage, [{
		key: "loadSpecialistExpertiseTypes",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee($typeColumns) {
				var $li = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var expertiseTypeId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var expertiseType, children, $typeColumn, i, child;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								expertiseType = null;

								if (!$li) {
									_context.next = 13;
									break;
								}

								_context.next = 4;
								return this.expertiseTypeManager.getExpertiseType(expertiseTypeId);

							case 4:
								expertiseType = _context.sent;


								$li.parent().nextAll().remove();
								$li.parent().find('li.active').removeClass('active');
								$li.parent().parent().find('li.last-active').removeClass('last-active');
								$li.addClass('active last-active');

								if (!$li.hasClass('no-children')) {
									_context.next = 11;
									break;
								}

								return _context.abrupt("return");

							case 11:
								_context.next = 14;
								break;

							case 13:
								$typeColumns.empty();

							case 14:
								children = [], $typeColumn = $('<div class="type-column"></div>');

								if (!(expertiseTypeId === null)) {
									_context.next = 21;
									break;
								}

								_context.next = 18;
								return this.expertiseTypeManager.getRootExpertiseTypes();

							case 18:
								children = _context.sent;
								_context.next = 24;
								break;

							case 21:
								_context.next = 23;
								return this.expertiseTypeManager.getExpertiseTypes(expertiseType._children);

							case 23:
								children = _context.sent;

							case 24:

								for (i = 0; i < children.length; i++) {
									child = children[i];


									$typeColumn.append('<li ' + (child._children.length === 0 ? 'class="no-children"' : '') + ' data-expertise-type-id="' + child.id + '">' + children[i].name + '<div class="specialism-checkbox pull-right">' + (this.currentSpecialisms.indexOf(child.id) > -1 ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>') + '</div>' + '</li>');
								}

								$typeColumns.append($typeColumn);
								$typeColumns.scrollLeft($typeColumns.width());

							case 27:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function loadSpecialistExpertiseTypes(_x3) {
				return _ref.apply(this, arguments);
			}

			return loadSpecialistExpertiseTypes;
		}()
	}, {
		key: "toggleSpecialism",
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2($specialismCheckbox) {
				var clickedSpecialismId, currentSpecialismsIndexOf, $icon, children;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								clickedSpecialismId = Number($specialismCheckbox.parent().data('expertiseTypeId')), currentSpecialismsIndexOf = this.currentSpecialisms.indexOf(clickedSpecialismId), $icon = $specialismCheckbox.find('i');

								// Quickly guess and set icon for responsive UI

								$icon.hasClass("fa-check") ? $icon.removeClass("fa-check") : $icon.addClass("fa-check");

								_context2.next = 4;
								return this.expertiseTypeManager.getExpertiseType(clickedSpecialismId);

							case 4:
								_context2.next = 6;
								return _context2.sent.children;

							case 6:
								children = _context2.sent;


								if (currentSpecialismsIndexOf > -1) {
									this.currentSpecialisms.splice(currentSpecialismsIndexOf, 1);
									$icon.removeClass('fa-check').addClass('fa-times');

									if (this.shouldRemoveChildSpecialisms(children)) {
										this.toggleChildren(children, false);
									}
								} else {
									this.currentSpecialisms.push(clickedSpecialismId);
									$icon.removeClass('fa-times').addClass('fa-check');

									this.toggleChildren(children, true);
								}

							case 8:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function toggleSpecialism(_x4) {
				return _ref2.apply(this, arguments);
			}

			return toggleSpecialism;
		}()
	}, {
		key: "toggleChildren",
		value: function toggleChildren(children) {
			var _this = this;

			var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			children.forEach(function () {
				var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(child) {
					var indexOf, children;
					return _regenerator2.default.wrap(function _callee3$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
									if (status) {
										if (_this.currentSpecialisms.indexOf(child.id) === -1) {
											_this.currentSpecialisms.push(child.id);
										}
									} else {
										indexOf = _this.currentSpecialisms.indexOf(child.id);


										if (indexOf > -1) {
											_this.currentSpecialisms.splice(indexOf, 1);
										}
									}

									// Recursively iterate all children
									_context3.next = 3;
									return child.children;

								case 3:
									children = _context3.sent;

									if (children) {
										_this.toggleChildren(children, status);
									}

								case 5:
								case "end":
									return _context3.stop();
							}
						}
					}, _callee3, _this);
				}));

				return function (_x6) {
					return _ref3.apply(this, arguments);
				};
			}());
		}

		/*
   * We should only mess with children if they
   * all have the same status
   */

	}, {
		key: "shouldRemoveChildSpecialisms",
		value: function shouldRemoveChildSpecialisms(children) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i];

				if (this.currentSpecialisms.indexOf(child.id) === -1) {
					return false;
				}

				if (!this.shouldRemoveChildSpecialisms(child.children)) {
					return false;
				}
			}

			return true;
		}
	}, {
		key: "getBestExpertiseTypeStaffByExpertiseTypeId",
		value: function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(expertiseTypeId) {
				var expertiseType, specialists, bestSpecialist, bestCount, openTickets, i, specialist, assignedToCount, j;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.expertiseTypeManager.getExpertiseType(expertiseTypeId);

							case 2:
								expertiseType = _context4.sent;
								_context4.next = 5;
								return this.staffManager.getSpecialists(expertiseTypeId);

							case 5:
								specialists = _context4.sent;

								if (!(specialists.length > 0)) {
									_context4.next = 26;
									break;
								}

								bestSpecialist = null;
								bestCount = null;
								_context4.next = 11;
								return this.ticketManager.getTicketsWithSlugIn(['new', 'pending_in_progress', 'pending_awaiting_staff']);

							case 11:
								openTickets = _context4.sent;
								i = 0;

							case 13:
								if (!(i < specialists.length)) {
									_context4.next = 23;
									break;
								}

								specialist = specialists[i], assignedToCount = 0;


								for (j = 0; j < openTickets.length; j++) {
									if (openTickets[j]._assigned_to === specialist.id) {
										assignedToCount++;
									}
								}

								if (!(bestSpecialist === null || assignedToCount < bestCount)) {
									_context4.next = 20;
									break;
								}

								bestSpecialist = specialist;
								bestCount = assignedToCount;
								return _context4.abrupt("continue", 20);

							case 20:
								i++;
								_context4.next = 13;
								break;

							case 23:
								_context4.next = 25;
								return this.expertiseTypeManager.getExpertiseTypeStaffByStaffId(expertiseTypeId, bestSpecialist.id);

							case 25:
								return _context4.abrupt("return", _context4.sent);

							case 26:
								if (!(expertiseType._parent !== null)) {
									_context4.next = 28;
									break;
								}

								return _context4.abrupt("return", this.getBestExpertiseTypeStaffByExpertiseTypeId(expertiseType._parent));

							case 28:
								return _context4.abrupt("return", null);

							case 29:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function getBestExpertiseTypeStaffByExpertiseTypeId(_x7) {
				return _ref4.apply(this, arguments);
			}

			return getBestExpertiseTypeStaffByExpertiseTypeId;
		}()
	}]);

	return StaffExpertiseTypePage;
}();

exports.default = StaffExpertiseTypePage;

/***/ }),
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _StaffPage = __webpack_require__(23);

var _StaffPage2 = _interopRequireDefault(_StaffPage);

var _StaffProblemTypePage = __webpack_require__(27);

var _StaffProblemTypePage2 = _interopRequireDefault(_StaffProblemTypePage);

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS specific to Staff page, for handling interactions with
 * employee information both as read-only and read-write
 * depending on access level in the organisation (∴ help desk)
 */

var staffPage = void 0,
    staffProblemTypePage = void 0,
    api = void 0;

window.init = function (data) {
	api = window.api = new _API2.default(data);

	staffPage = window.staffPage = new _StaffPage2.default();
	staffProblemTypePage = window.staffProblemTypePage = new _StaffProblemTypePage2.default();

	// On page load, don't show empty single-view
	if (!location.hash) staffPage.hideTableRowDetails();

	// Load staff details into page list-view
	// This action is asynchronous
	staffPage.showStaff();

	// Detect if page should load with a specific employee being shown
	if (location.hash) staffPage.showTableRowDetails(parseInt(location.hash.substring(1)));

	//
	// Initialise Event Listeners:
	//

	// Problem types input handling (on click of problem type, load subtypes)
	$(document).on('click', '.type-column li', function () {
		// Only load subtypes if type has children
		// (double negative, ‘not class no-children’)
		if (!$(this).hasClass('no-children')) {
			staffProblemTypePage.loadSpecialistExpertiseTypes($(this).closest('.type-columns'), $(this), parseInt($(this).data('expertiseTypeId')));
		}
	});

	// On editing problem types, each problem type has a checkbox
	// used to determine whether the specialism applies to the user
	$(document).on('click', '.problem-type-picker:not(.readonly) .type-column li .specialism-checkbox', function () {
		staffProblemTypePage.toggleSpecialism($(this));
	});

	// Staff filter handling (for clicking on navigation e.g.
	// "analysts" shows only users of that type)
	$(staffPage.navSelector).find("[data-slug]").click(function (el) {
		// Clear any in-progress search to reset the main list of staff
		if ($('.search-field input').val() !== '') {
			$('.search-field input').val('').keyup();
		}

		// Toggle active class to the newly selected type
		$(el.delegateTarget).addClass("active").siblings().removeClass("active");

		// Obtain data necessary for filtering
		// - slug of the type of employee to filter
		var slug = el.delegateTarget.dataset.slug;
		// - table to perform the filtering on
		var $table = $(staffPage.sectionSelector).find("table");
		// - index of column to be filtered, given the slug
		//   (uses .filter over the table header comparing slug)
		var columnIndex = $table.find("thead th").filter(function (i, el) {
			return el.dataset.slug === slug;
		}).first().index();

		// Perform the filtering
		$table.find("tbody tr").each(function (i, el) {
			var $tr = $(el);
			var $td = $tr.children().eq(columnIndex);
			$tr.toggleClass("row-hidden", $td.children().length === 0);
		});

		// Always update splash screen in case there are no results
		// so this method will detect this and display the ‘no results’ splash
		// Also sets top bar title with the total number of results
		// See method for more details on actions performed
		staffPage.updateSplashScreen();
	});

	// Display staff details when clicking on staff row in main table
	$(staffPage.tableSelector).on("click", "tbody tr", function (e) {
		staffPage.showTableRowDetails(parseInt(e.currentTarget.dataset.rowid));
	});

	// Perform search when search field has value (on each character input)
	$('.search-field input').on('keyup', function () {
		staffPage.search($(this).val());
	});

	// Keyboard shortcuts
	$(document).keyup(function (e) {
		// Ignore if in input
		if (["input", "textarea"].includes(document.activeElement.nodeName.toLowerCase())) {
			return;
		}

		if (document.getElementById("list-view")) {
			var pagename = document.getElementById("list-view").dataset.page;
		}
		if (!pagename) return; // ignore pages without name
		if (pagename.endsWith("s")) pagename = pagename.slice(0, -1);
		var page = window[pagename + "Page"];
		switch (e.keyCode) {
			case 38: // up
			case 40:
				// down
				if (location.hash.length === 0) {
					location.hash = 0;
					e.keyCode = 40;
				}
				var id = parseInt(location.hash.substring(1));
				id = id + (e.keyCode === 38 ? -1 : 1); // up or down
				var $row = $(page.tableSelector).find("[data-rowid=\"" + id + "\"]");
				// Does row with ID exist
				if ($row.length === 0) return;
				$(page.tableSelector).find("[data-rowid=\"" + id + "\"]").addClass("highlight").siblings().removeClass("highlight");
				page.showTableRowDetails(id);
				break;
			case 27:
				// esc
				page.hideTableRowDetails();
				break;
			default:
				break;
		}
	});
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlByb2JsZW1UeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL3N0YWZmLmpzIl0sIm5hbWVzIjpbIlRpY2tldE1hbmFnZXIiLCJleHBlcnRpc2VUeXBlTWFuYWdlciIsIndpbmRvdyIsIkV4cGVydGlzZVR5cGVNYW5hZ2VyIiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJDYWxsIiwiZSIsInRpY2tldHMiLCJUaWNrZXQiLCJjb21tZW50cyIsIkNvbW1lbnQiLCJzdGF0dXNlcyIsIlN0YXR1cyIsInRpY2tldFN0YXR1c2VzIiwiVGlja2V0U3RhdHVzIiwiY2FsbElkIiwiZmluZCIsImNhbGwiLCJpZCIsInRpY2tldElkIiwiZmlsdGVyIiwiX3RpY2tldHMiLCJpbmRleE9mIiwiY29tbWVudCIsIl9jYWxsIiwic3RhdHVzSWQiLCJzdGF0dXMiLCJzdGF0dXNTbHVnIiwic2x1ZyIsInRpY2tldCIsInRpY2tldElkcyIsInN0YXR1c1NsdWdzIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiX2NhbGxzIiwic3RhZmZJZCIsImV4cGVydGlzZVR5cGVTdGFmZiIsIl9hc3NpZ25lZF90b19vcGVyYXRvciIsIl9leHBlcnRpc2VfdHlwZV9zdGFmZiIsIl9zdGFmZiIsInN0YWZmSWRzIiwicmVzdWx0IiwiZm9yRWFjaCIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCIsInRpY2tldFBhZ2UiLCJzdGFmZk1hbmFnZXIiLCJjdXJyZW50VXNlciIsImFzc2lnbmVkX3RvX29wZXJhdG9yIiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJzdGFmZiIsImdldFRpY2tldEFzc2lnbmVkVG8iLCJ0aWNrZXRTdGF0dXNJZCIsInRpY2tldFN0YXR1cyIsIl90aWNrZXQiLCJjb21tZW50SWQiLCJpZHMiLCJleHBlcnRpc2VUeXBlSWQiLCJleHBlcnRpc2VUeXBlcyIsImdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiY29uY2F0IiwiZ2V0VGlja2V0c1dpdGhJZEluIiwicXVlcnkiLCJwcm9wZXJ0aWVzIiwiTWFuYWdlciIsIlN0YWZmTWFuYWdlciIsIkVtcGxveWVlIiwiZGVwYXJ0bWVudHMiLCJlbXBsb3llZSIsInBlcm1pc3Npb24iLCJ2YWx1ZSIsImFjY2VzcyIsImFzRW1wbG95ZWUiLCJnZXQiLCJleHBlcnRpc2VUeXBlIiwiX3NwZWNpYWxpc21zIiwib3V0cHV0IiwicHVzaCIsIkV4cGVydGlzZVR5cGUiLCJFeHBlcnRpc2VUeXBlU3RhZmYiLCJfcGFyZW50IiwiZXhwZXJ0aXNlVHlwZUlkcyIsIl9leHBlcnRpc2VfdHlwZSIsImV4cGVydGlzZVR5cGVQYXJlbnQiLCJwYXJlbnQiLCJleHBlcnRpc2VUeXBlU3RhZmZJZCIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJEZXZpY2UiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJQcm9ncmFtIiwicHJvZ3JhbSIsIm9uIiwiY3VycmVudFRhcmdldCIsInRvb2x0aXAiLCJkYXRldGltZXBpY2tlciIsIm5ld1ZhbHVlIiwiJG1vZGFsIiwibW9kYWwiLCJhdHRyIiwibm90IiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJjb2xsYXBzZSIsImlzU2hvdyIsInRvZ2dsZSIsInRhcmdldCIsImFkZEl0ZW1Ub1BpY2tlciIsInBpY2tlckVsZW1lbnQiLCJuYW1lIiwidmFsaWRhdGlvblRpbWVvdXQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwidGltZSIsImNhbGxlciIsImNhbGxlcl9pZCIsIm9wZXJhdG9yIiwib3BlcmF0b3JfaWQiLCJfY2FsbGVyIiwiX29wZXJhdG9yIiwiZ2V0VGlja2V0c0Zyb21DYWxsIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJwYXJlbnRfaWQiLCJnZXRFeHBlcnRpc2VUeXBlIiwiX2NoaWxkcmVuIiwic3RhZmZfaWQiLCJleHBlcnRpc2VfdHlwZV9pZCIsImV4cGVydGlzZV90eXBlIiwiZ2V0VGlja2V0c1dpdGhTbHVnIiwic3RhdHVzSGlzdG9yeSIsInN0YXR1c19oaXN0b3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvbHV0aW9uIiwic29sdXRpb25faWQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0X2h1bWFuIiwidXBkYXRlZEF0UmVhbCIsInVwZGF0ZWRfYXQiLCJleHBlcnRpc2VfdHlwZV9zdGFmZl9pZCIsImFzc2lnbmVkVG9PcGVyYXRvcklkIiwiYXNzaWduZWRfdG9fb3BlcmF0b3JfaWQiLCJ1cGRhdGVkX2F0X3JlYWwiLCJnZXRDYWxsc0J5VGlja2V0SWQiLCJnZXRTdGF0dXMiLCJfc3RhdHVzIiwiZ2V0U3RhdHVzSGlzdG9yeSIsIl9zdGF0dXNfaGlzdG9yeSIsImdldERldmljZXMiLCJfZGV2aWNlcyIsImdldFByb2dyYW1zIiwiX3Byb2dyYW1zIiwiZ2V0Q29tbWVudHNCeUlkcyIsIl9jb21tZW50cyIsImdldENvbW1lbnQiLCJfc29sdXRpb24iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmYiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJnZXRUaWNrZXRzQnlUaWNrZXRJRHMiLCJBcnJheSIsIm9wZXJhdGluZ19zeXN0ZW0iLCJleHBpcnlfZGF0ZSIsInN0YXR1c19pZCIsIkFQSSIsInRpY2tldF9zdGF0dXNlcyIsIlN0YWZmUGFnZSIsInRpY2tldE1hbmFnZXIiLCJ0aWNrZXRzQ29sdW1uSW5kZXgiLCJpbmRleCIsInN0YWZmRm9yVGlja2V0cyIsIiR0YWJsZVJvdyIsIiRyb3dzIiwiZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyIsInNob3dOb3RpZmljYXRpb24iLCJ1cGRhdGVTaW5nbGVWaWV3TmF2YmFyIiwiY3VzdG9tc2x1ZyIsInNob3dQZXJtaXNzaW9ucyIsInNyYyIsInN0YWZmUHJvYmxlbVR5cGVQYWdlIiwiY3VycmVudFNwZWNpYWxpc21zIiwibG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcyIsInNlYXJjaCIsImFzc2lnbiIsIm9iaiIsInNob3dTdGFmZiIsImljb25zIiwiZWxJY29uIiwiZWxUZXh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJlbFBlcm1pc3Npb24iLCJTdGFmZkV4cGVydGlzZVR5cGVQYWdlIiwiJHR5cGVDb2x1bW5zIiwiJGxpIiwibmV4dEFsbCIsIiR0eXBlQ29sdW1uIiwiZ2V0Um9vdEV4cGVydGlzZVR5cGVzIiwiY2hpbGQiLCJzY3JvbGxMZWZ0Iiwid2lkdGgiLCIkc3BlY2lhbGlzbUNoZWNrYm94IiwiY2xpY2tlZFNwZWNpYWxpc21JZCIsIk51bWJlciIsImN1cnJlbnRTcGVjaWFsaXNtc0luZGV4T2YiLCIkaWNvbiIsInNob3VsZFJlbW92ZUNoaWxkU3BlY2lhbGlzbXMiLCJ0b2dnbGVDaGlsZHJlbiIsImdldFNwZWNpYWxpc3RzIiwic3BlY2lhbGlzdHMiLCJiZXN0U3BlY2lhbGlzdCIsImJlc3RDb3VudCIsImdldFRpY2tldHNXaXRoU2x1Z0luIiwib3BlblRpY2tldHMiLCJhc3NpZ25lZFRvQ291bnQiLCJqIiwiX2Fzc2lnbmVkX3RvIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkIiwiZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwic3RhZmZQYWdlIiwiaW5pdCIsIlN0YWZmUHJvYmxlbVR5cGVQYWdlIiwic2hvd1RhYmxlUm93RGV0YWlscyIsInRvZ2dsZVNwZWNpYWxpc20iLCJrZXl1cCIsImRlbGVnYXRlVGFyZ2V0IiwiY29sdW1uSW5kZXgiLCIkdHIiLCIkdGQiLCJlcSIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsImdldEVsZW1lbnRCeUlkIiwicGFnZW5hbWUiLCJlbmRzV2l0aCIsImtleUNvZGUiLCIkcm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxhOzs7QUFDcEIsMEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxvQkFBTCxHQUE0QkMsT0FBT0Qsb0JBQVAsSUFBK0IsSUFBSUUsOEJBQUosRUFBM0Q7O0FBRUEsUUFBS0MsS0FBTCxHQUFnQkMsSUFBSUQsS0FBSixDQUFVRSxHQUFWLENBQWM7QUFBQSxVQUFLLElBQUlDLGNBQUosQ0FBU0MsQ0FBVCxDQUFMO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFFBQUtDLE9BQUwsR0FBZ0JKLElBQUlJLE9BQUosQ0FBWUgsR0FBWixDQUFnQjtBQUFBLFVBQUssSUFBSUksZ0JBQUosQ0FBV0YsQ0FBWCxDQUFMO0FBQUEsR0FBaEIsQ0FBaEI7QUFDQSxRQUFLRyxRQUFMLEdBQWdCTixJQUFJTSxRQUFKLENBQWFMLEdBQWIsQ0FBaUI7QUFBQSxVQUFLLElBQUlNLGlCQUFKLENBQVlKLENBQVosQ0FBTDtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixjQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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VyxNQUFsQixDQUFYO0FBQ0EsVUFBUXJXLEVBQUV1VyxPQUFWO0FBQ0MsUUFBSyxFQUFMLENBREQsQ0FDVTtBQUNULFFBQUssRUFBTDtBQUFTO0FBQ1IsUUFBSTdPLFNBQVNDLElBQVQsQ0FBYy9GLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0I4RixjQUFTQyxJQUFULEdBQWdCLENBQWhCO0FBQ0EzSCxPQUFFdVcsT0FBRixHQUFZLEVBQVo7QUFDQTtBQUNELFFBQUkzVixLQUFLNkcsU0FBU0MsU0FBU0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCLENBQXhCLENBQVQsQ0FBVDtBQUNBaEgsU0FBS0EsTUFBTVosRUFBRXVXLE9BQUYsS0FBYyxFQUFkLEdBQW1CLENBQUMsQ0FBcEIsR0FBd0IsQ0FBOUIsQ0FBTCxDQU5ELENBTXdDO0FBQ3ZDLFFBQUlDLE9BQU96USxFQUFFcUQsS0FBSzFELGFBQVAsRUFBc0JoRixJQUF0QixDQUEyQixtQkFBbUJFLEVBQW5CLEdBQXdCLEtBQW5ELENBQVg7QUFDQTtBQUNBLFFBQUk0VixLQUFLNVUsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUN2Qm1FLE1BQUVxRCxLQUFLMUQsYUFBUCxFQUFzQmhGLElBQXRCLENBQTJCLG1CQUFtQkUsRUFBbkIsR0FBd0IsS0FBbkQsRUFBMEQyRixRQUExRCxDQUFtRSxXQUFuRSxFQUFnRjZCLFFBQWhGLEdBQTJGNUIsV0FBM0YsQ0FBdUcsV0FBdkc7QUFDQTRDLFNBQUtzTSxtQkFBTCxDQUF5QjlVLEVBQXpCO0FBQ0E7QUFDRCxRQUFLLEVBQUw7QUFBUztBQUNSd0ksU0FBS2IsbUJBQUw7QUFDQTtBQUNEO0FBQ0M7QUFuQkY7QUFxQkEsRUFqQ0Q7QUFrQ0EsQ0FuSEQsQyIsImZpbGUiOiIvanMvcGFnZXMvc3RhZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IENhbGwgZnJvbSBcIi4vQ2FsbFwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9TdGF0dXNcIjtcbmltcG9ydCBUaWNrZXQgZnJvbSBcIi4vVGlja2V0XCI7XG5pbXBvcnQgVGlja2V0U3RhdHVzIGZyb20gXCIuL1RpY2tldFN0YXR1c1wiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0TWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGF0dXNlc1xuICogYW5kIHRpY2tldHMgYW5kIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBUaWNrZXRNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0TWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IHdpbmRvdy5leHBlcnRpc2VUeXBlTWFuYWdlciB8fCBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY2FsbHMgICAgPSBhcGkuY2FsbHMubWFwKGUgPT4gbmV3IENhbGwoZSkpO1xuXHRcdHRoaXMudGlja2V0cyAgPSBhcGkudGlja2V0cy5tYXAoZSA9PiBuZXcgVGlja2V0KGUpKTtcblx0XHR0aGlzLmNvbW1lbnRzID0gYXBpLmNvbW1lbnRzLm1hcChlID0+IG5ldyBDb21tZW50KGUpKTtcblx0XHR0aGlzLnN0YXR1c2VzID0gYXBpLnN0YXR1c2VzLm1hcChlID0+IG5ldyBTdGF0dXMoZSkpO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgPSBhcGkudGlja2V0U3RhdHVzZXMubWFwKGUgPT4gbmV3IFRpY2tldFN0YXR1cyhlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDYWxsfSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ2FsbCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maW5kKGNhbGwgPT4gY2FsbC5pZCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbHMgcmVmZXJlbmNpbmcgYSBzcGVjaWZpYyB0aWNrZXRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDYWxsc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maWx0ZXIoY2FsbCA9PiBjYWxsLl90aWNrZXRzLmluZGV4T2YodGlja2V0SWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbm90ZXMgZm9yIGEgY2FsbFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGxOb3Rlc0J5Q2FsbElkKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50Ll9jYWxsID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBJRFxuXHQgKi9cblx0Z2V0U3RhdHVzKHN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLmlkID09PSBzdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBzbHVnXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggc3RhdHVzU2x1Z1xuXHQgKi9cblx0Z2V0U3RhdHVzQnlTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1ZykgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldH0gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldCB3aXRoIHRpY2tldElkXG5cdCAqL1xuXHRnZXRUaWNrZXQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbmQodGlja2V0ID0+IHRpY2tldC5pZCA9PT0gdGlja2V0SWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXRJZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1Zyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gc3RhdHVzZXNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gc3RhdHVzU2x1Z3MgQXJyYXkgb2YgU3RyaW5ncydzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gU3RhdHVzJ3Ncblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1Z0luKHN0YXR1c1NsdWdzKSB7XG5cdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldHMuc2xpY2UoMCk7XG5cblx0XHRmb3IgKGxldCBpID0gdGlja2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKHN0YXR1c1NsdWdzLmluZGV4T2YodGlja2V0c1tpXS5zdGF0dXMuc2x1ZykgPT09IC0xKSB0aWNrZXRzLnNwbGljZShpLCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGlja2V0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0cyByZWZlcmVuY2VkIGluIGEgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgcmVmZXJlbmNlZCBpbiBhIENhbGxcblx0ICovXG5cdGdldFRpY2tldHNGcm9tQ2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0Ll9jYWxscy5pbmRleE9mKGNhbGxJZCkgPiAtMSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQoc3RhZmZJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWQgfHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWRcblx0XHR9KTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoc3RhZmZJZHMpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0XHR0aWNrZXRzICAgICAgICAgICAgPSB0aGlzLnRpY2tldHMsXG5cdFx0XHRyZXN1bHQgICAgICAgICAgICAgPSB7fTtcblxuXHRcdHN0YWZmSWRzLmZvckVhY2goc3RhZmZJZCA9PiB7XG5cdFx0XHRyZXN1bHRbc3RhZmZJZF0gPSB0aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZFxuXHRcdFx0XHRcdFx0fHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRNeVRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3BlcmF0b3Igb3Igc3BlY2lhbGlzdCB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvLlxuXHQgKlxuXHQgKiBJZiBhbiBvcGVyYXRvciBpcyBub3QgYXNzaWduZWQsIHRoZW4gdGhlIEV4cGVydGlzZVR5cGVTdGFmZiB3aWxsXG5cdCAqIGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7RW1wbG95ZWV9IEVtcGxveWVlIHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSB7XG5cdFx0aWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHJldHVybiB0aWNrZXQuYXNzaWduZWRfdG9fb3BlcmF0b3I7XG5cblx0XHRyZXR1cm4gdGlja2V0LmV4cGVydGlzZV90eXBlX3N0YWZmLnN0YWZmOyAvLyBvbmx5IHVzZSBleHBlcnRpc2VfdHlwZV9zdGFmZiBpZiB0aGVyZSBpcyBubyBhc3NpZ25lZCBvcGVyYXRvclxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRpY2tldCBpcyBhc3NpZ25lZCB0byB0aGUgY3VycmVudGx5IGxvZ2dlZCBpblxuXHQgKiB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IElmIGFzc2lnbmVkIHRvIHNlbGZcblx0ICovXG5cdGlzVGlja2V0QXNzaWduZWRUb1NlbGYodGlja2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpID09PSB0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpOyBcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXMgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRTdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldF9zdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0U3RhdHVzIHdpdGggdGlja2V0U3RhdHVzSWRcblx0ICovXG5cdGdldFRpY2tldFN0YXR1cyh0aWNrZXRTdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbmQodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5pZCA9PT0gdGlja2V0U3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzZXMgZm9yIGEgdGlja2V0XG5cdCAqXG5cdCAqIEBwXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maWx0ZXIodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5fdGlja2V0ID09PSB0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjb21tZW50IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY29tbWVudElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY29tbWVudCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNvbW1lbnRJZFxuXHQgKi9cblx0Z2V0Q29tbWVudChjb21tZW50SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gY29tbWVudElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvbW1lbnRzXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBDb21tZW50IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q29tbWVudHNCeUlkcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBpZHMuaW5kZXhPZihjb21tZW50LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHRpY2tldHMgYXNzb2NpYXRlZCB3aXRoIGFuIGV4cGVydGlzZSB0eXBlIHN0YWZmXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlU3RhZmZJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHN0YWZmIHRvIGZpbmQgdGlja2V0cyBmb3Jcblx0ICogQHJldHVybnMge0FycmF5fSBBbGwgbWF0Y2hpbmcgdGlja2V0c1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdHRpY2tldElkcyAgICAgID0gW10uY29uY2F0KC4uLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IGUudGlja2V0cykpOyAvLyBtb3ZlIGFsbCBvZiBleHBlcnRpc2VUeXBlc1tpXS50aWNrZXRzIGludG8gYSBzaW5nbGUgYXJyYXlcblxuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCB0aWNrZXRzIG9uIGEgcHJvcGVydHkgZm9yIGEgcHJvdmlkZWQgc2VhcmNoIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHtBcnJheX0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBzYXRpc2Z5aW5nIHRoZSBzZWFyY2ggY29uZGl0aW9uXG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMudGlja2V0cywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb2xsZWN0aW9uIG9mIHRpY2tldHMgYnkgdGhlaXIgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGlkcyBUaGUgSURzIG9mIHRoZSByZXF1ZXN0ZWQgdGlja2V0cyBcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldFRpY2tldHNCeVRpY2tldElEcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gaWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL0VtcGxveWVlXCI7XG5cbi8qKlxuICogU3RhZmZNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YWZmXG4gKiBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogU3RhZmZNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YWZmICAgICAgID0gYXBpLnN0YWZmLm1hcChlID0+IG5ldyBFbXBsb3llZShlKSk7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyA9IGFwaS5kZXBhcnRtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGVtcGxveWVlIHdpdGggdGhlIGdpdmVuIElEIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgZW1wbG95ZWUgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtFbXBsb3llZX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbmQoZW1wbG95ZWUgPT4gZW1wbG95ZWUuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZW1wbG95ZWVzIHdpdGggYSBzcGVjaWZpYyB2YWx1ZSBvZiBhIHBlcm1pc3Npb25cblx0ICpcblx0ICogQHBhcmFtIHBlcm1pc3Npb24gVGhlIHBlcm1pc3Npb24gdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwZXJtaXNzaW9uICh0cnVlL2ZhbHNlKSBmb3Igd2hldGhlciB0aGUgcGVybWlzc2lvbiBpcyBncmFudGVkXG5cdCAqL1xuXHRnZXRFbXBsb3llZXNXaXRoUGVybWlzc2lvbihwZXJtaXNzaW9uLCB2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0gPT0gdmFsdWUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICpcblx0ICogQHBhcmFtIGFzRW1wbG95ZWUgbWV0aG9kIHJldHVybnMgSUQgYnkgZGVmYXVsdCBvciBFbXBsb3llZSBpZiB0cnV0aHlcblx0ICovXG5cdGN1cnJlbnRVc2VyKGFzRW1wbG95ZWUgPSBmYWxzZSkge1xuXHRcdGxldCBpZCA9IDE7IC8vIFRPRE86IGdldCB1c2VyIGZyb20gV1BcblxuXHRcdC8vIEdldCBFbXBsb3llZSB3aXRoIElEXG5cdFx0aWYgKGFzRW1wbG95ZWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChpZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc3BlY2lhbGlzdHMgd2hvIHNwZWNpYWxpc2UgaW4gYSBjZXJ0YWluIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gZmluZCBlbXBsb3llZXMgZm9yXG5cdCAqL1xuXHRnZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0bGV0IHN0YWZmICA9IHRoaXMuc3RhZmYsXG5cdFx0ICAgIGZpbHRlciA9IGlkID0+IGVtcGxveWVlID0+IGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGlkKSA+IC0xO1xuXG5cdFx0aWYgKHR5cGVvZiBleHBlcnRpc2VUeXBlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRsZXQgb3V0cHV0ID0gW107XG5cblx0XHRcdGZvciAobGV0IGlkIG9mIGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RhZmYuZmlsdGVyKGZpbHRlcihpZCkpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0YWZmLmZpbHRlcihmaWx0ZXIoZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIGVtcGxveWVlIGhhcyB0aGUgcGFzc2VkIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGluc3BlY3Rcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGxvb2sgZm9yXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBlbXBsb3llZSBoYXMgdGhlIHByb2JsZW0gdHlwZSBhcyBhIHNwZWNpYWxpc21cblx0ICovXG5cdGhhc1NwZWNpYWxpc20oZW1wbG95ZWUsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihleHBlcnRpc2VUeXBlSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGFsbCBlbXBsb3llZXMgZm9yIHRoZSBnaXZlbiBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm5zIEFsbCBtYXRjaGluZyByZXN1bHRzIHRvIHRoZSBxdWVyeVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnN0YWZmLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlIGZyb20gXCIuL0V4cGVydGlzZVR5cGVcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlU3RhZmYgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVN0YWZmXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZXhwZXJ0aXNlIHR5cGVzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gYXBpLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlKGUpKTtcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGFwaS5leHBlcnRpc2VUeXBlU3RhZmYubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGVTdGFmZihlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGFsbCBFeHBlcnRpc2VUeXBlJ3Mgd2l0aCBubyBwYXJlbnQgKGluIHRoZSBmaXJzdCBjb2x1bW4pXG5cdCAqXG5cdCAqIEByZXR1cm4ge0FycmF5fVxuXHQgKi9cblx0Z2V0Um9vdEV4cGVydGlzZVR5cGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuX3BhcmVudCA9PSBudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGV9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbmQoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLmlkID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBFeHBlcnRpc2VUeXBlcyB3aXRoIElEcyBmcm9tIGFuIEFycmF5IG9mIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBleHBlcnRpc2VUeXBlSWRzIEFycmF5IG9mIEludGVnZXJzIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkJ3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGVzIHNhdGlzZnlpbmcgdGhlIGNvbmRpdGlvblxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZUlkcykge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGVJZHMuaW5kZXhPZihleHBlcnRpc2VUeXBlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbHRlcihleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgb3JkZXJlZCBhcnJheSBvZiBwYXJlbnRzIG9mIGFuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGUgdG8gZmluZCBwYXJlbnRzIGZyb21cblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGUgcGFyZW50cywgYW5kIHRoZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZSxcblx0XHRcdGV4cGVydGlzZVR5cGVzICAgICAgPSBbZXhwZXJ0aXNlVHlwZVBhcmVudF07XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5wYXJlbnQ7XG5cblx0XHRcdGlmIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMucHVzaChleHBlcnRpc2VUeXBlUGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXhwZXJ0aXNlVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgd2l0aCBhbiBleGFjdFxuXHQgKiBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmIGFuZCBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlIElEIHBhaXJcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGVcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gbnVsbCwgb3IgdGhlIHJlY29yZCBkZXNpcmVkXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQoZXhwZXJ0aXNlVHlwZUlkLCBzdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgPT09IHN0YWZmSWQgJiYgZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgYnkgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlU3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuaWQgPT09IGV4cGVydGlzZVR5cGVTdGFmZklkKSB8fCBudWxsO1xuXHR9XG5cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLmV4cGVydGlzZVR5cGVzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlci5qcyIsIi8qKlxuICogTWFuYWdlclxuICpcbiAqIEFic3RyYWN0IGNsYXNzIGV4dGVuZGVkIGJ5IGFsbCBtYW5hZ2VycyxcbiAqIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBtYXkgYmUgdXNlZnVsIHRvIHRoZSBtYW5hZ2Vycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZWFyY2ggYXJyYXkgb2YgZWxlbWVudHMgZm9yIHF1ZXJ5IGluIGdpdmVuIHByb3BlcnR5IG5hbWVzXG5cdCAqIFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBzZWFyY2hlZCB0aHJvdWdoXG5cdCAqIEBwYXJhbSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICovXG5cdHNlYXJjaChlbGVtZW50cyA9IFtdLCBxdWVyeSA9IFwiXCIsIHByb3BlcnRpZXMgPSBbXSkge1xuXHRcdHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTsgLy8gTm9ybWFsaXNlIHF1ZXJ5IChhbmQgcHJvcGVydGllcyBpbmRpdmlkdWFsbHkgbGF0ZXIpXG5cblx0XHRyZXR1cm4gZWxlbWVudHMuZmlsdGVyKGVsID0+IHsgLy8gR2V0IGFsbCBlbGVtZW50c1xuXHRcdFx0cmV0dXJuIHByb3BlcnRpZXMuc29tZShwcm9wID0+IHsgLy8gQ2hlY2sgcHJvcGVydGllcyB1bnRpbCBtYXRjaCBpcyBmb3VuZFxuXHRcdFx0XHRpZiAoU3RyaW5nKGVsW3Byb3BdKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgcmV0dXJuIHRydWU7IC8vIERldGVybWluZSBpZiBwcm9wZXJ0eSBpcyBhIG1hdGNoIGZvciBxdWVyeVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIi8qKlxuICogRHluYW1pY1BhZ2VcbiAqXG4gKiBFeHRlbmRlZCBieSBldmVyeSBwYWdlLCBlLmcuIFRpY2tldFBhZ2UuXG4gKiBDb250YWlucyBmdW5jdGlvbnMgdGhhdCBhcmUgcmVwZWF0ZWQgb2Z0ZW4gYW1vbmdcbiAqIHBhZ2VzLCBzdWNoIGFzIHVwZGF0aW5nIHRhYmxlcyBvciB1cGRhdGluZyB0aGUgbmF2YmFyXG4gKi9cbmNsYXNzIER5bmFtaWNQYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIHBhZ2UgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yc1xuXHQgKiB0byBkZWZpbmUgdGhlIGJvdW5kcyBvZiB0aGUgcGFnZSwgaW4gY2FzZXMgd2hlcmUgdGhpcyBEeW5hbWljUGFnZVxuXHQgKiBpcyBub3QgdGhlIG9ubHkgcGFnZSBvbiB0aGUgc2NyZWVuLCBzdWNoIGFzIGlmIGEgcGFnZSBpcyBiZWluZ1xuXHQgKiBkaXNwbGF5ZWQgaW4gYSBtb2RhbC5cblx0ICpcblx0ICogTm90IHByb3ZpZGluZyBhbnkgc2VsZWN0b3JzIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGVcblx0ICogbWFpbiBzZWxlY3RvcnMgZm9yIHRoZSBlbnRpcmUgc2NyZWVuLCBzdWNoIHRoYXRcblx0ICogdGhpcyBwYWdlIGJlY29tZXMgdGhlIG1haW4gcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBzZWN0aW9uU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgbWFpbiBzZWN0aW9uIGNvbnRhaW5pbmcgdGFibGUgdmlld1xuXHQgKiBAcGFyYW0gdGFibGVTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRhYmxlIHdpdGhpbiBwcmV2aW91cyBzZWN0aW9uXG5cdCAqIEBwYXJhbSBuYXZTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIG5hdmlnYXRpb24gYmFyIHNob3duIGF0IHRvcCBvZiBzZWN0aW9uXG5cdCAqIEBwYXJhbSBkZXRhaWxTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHNpbmdsZSB2aWV3IGRldGFpbCBzaG93biBmb3IgYW4gaW5kaXZpZHVhbCByb3dcblx0ICovXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzZWN0aW9uU2VsZWN0b3IgPSBcIiNsaXN0LXZpZXdcIixcblx0XHR0YWJsZVNlbGVjdG9yID0gXCIjdGFibGUtc2VjdGlvblwiLFxuXHRcdG5hdlNlbGVjdG9yLFxuXHRcdGRldGFpbFNlbGVjdG9yXG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuc2VjdGlvblNlbGVjdG9yID0gc2VjdGlvblNlbGVjdG9yO1xuXHRcdHRoaXMudGFibGVTZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XG5cdFx0Ly8gU2V0IG5hdmlnYXRpb24gc2VsZWN0b3IgdG8gZmlyc3QgY29tcG9uZW50IG9mIHNlY3Rpb24gc2VsZWN0b3Igd2l0aCDigJgtbmF24oCZIGFwcGVuZGVkLCBvdGhlcndpc2UgZGVmYXVsdCBDU1Mgc2VsZWN0b3Jcblx0XHR0aGlzLm5hdlNlbGVjdG9yID0gbmF2U2VsZWN0b3IgPyBuYXZTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLW5hdlwiIDogXCIuc2lkZS1uYXYtYmFyLW5lc3RlZFwiKTtcblx0XHR0aGlzLmRldGFpbFNlbGVjdG9yID0gZGV0YWlsU2VsZWN0b3IgPyBkZXRhaWxTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLWRldGFpbFwiIDogXCIjc2luZ2xlLXZpZXdcIik7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aXRsZSBiYXIgb2YgdGhlIHNpbmdsZSB2aWV3IHRvIHRoZSBnaXZlbiBzdHJpbmdcblx0ICogQ0FVVElPTjogRG9lcyBub3QgcGVyZm9ybSBlc2NhcGluZyBvZiBpbnB1dCBzdHJpbmcsIGRvIG5vdCBwYXNzXG5cdCAqIHVzZXIgY29udGVudCB0byB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIGh0bWwgSFRNTCB0byBzZXQgdGhlIHNpbmdsZSB2aWV3IHRpdGxlIHRvXG5cdCAqL1xuXHR1cGRhdGVTaW5nbGVWaWV3TmF2YmFyKGh0bWwpIHtcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykuaHRtbChodG1sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgXCJMb2FkaW5n4oCmXCIgc3BsYXNoIHNjcmVlbiBpZiBpdCdzIHNob3duXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgXCJObyBSZXN1bHRz4oCmXCIgc3BsYXNoIHNjcmVlblxuXHQgKiBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuXHQgKlxuXHQgKiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciB1c2luZyBcImFwcGVuZFRhYmxlXCJcblx0ICovXG5cdHVwZGF0ZVNwbGFzaFNjcmVlbihuYXZUZXh0ID0gbnVsbCkge1xuXHRcdC8vIEdldCB0YWJsZSBlbGVtZW50IHRvIGluc3BlY3QgY29udGVudHNcblx0XHR2YXIgJHRhYmxlID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdFx0XHQvLyBHZXQgbnVtYmVyIG9mIHJlc3VsdHMgd2l0aGluIHRhYmxlIGN1cnJlbnRseSBiZWluZyBzaG93blxuXHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlIEhUTUxcblx0XHRcdFx0Ly8gc2luY2Ugc29tZSB0YWJsZSByb3dzIG1heSBiZSBoaWRkZW4sIHdoaWNoIG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gZGlzY291bnRlZCBmcm9tIHRoZSB0b3RhbCBjb3VudC5cblx0XHQgICAgcmVzdWx0c0NvdW50ID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRyJykuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmhhc0NsYXNzKFwicm93LWhpZGRlblwiKSkubGVuZ3RoLFxuXHRcdFx0XHQvLyBHZXQgc3BsYXNoIHNjcmVlbiBlbGVtZW50IHdoaWNoIG1heSBiZSBiZWluZyBzaG93biBpbnN0ZWFkIG9mIHRhYmxlXG5cdFx0ICAgICRzcGxhc2hTY3JlZW4gPSAkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlcmUgYXJlIHJlc3VsdHMsIHRoZSBzcGxhc2ggc2NyZWVuIG9yIHRhYmxlIG5lZWRzIHRvIGJlIHNob3duXG5cdFx0Ly8gYW5kIHRoZSBvdGhlciBzd2FwcGVkIG91dCB1c2luZyBDU1Ncblx0XHR2YXIgWyRzaG93LCAkaGlkZV0gPSByZXN1bHRzQ291bnQgPyBbJHRhYmxlLCAkc3BsYXNoU2NyZWVuXSA6IFskc3BsYXNoU2NyZWVuLCAkdGFibGVdO1xuXHRcdCRoaWRlLmFkZENsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXHRcdCRzaG93LnJlbW92ZUNsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXG5cdFx0Ly8gVGhlIG1haW4gdG9wIGJhciBmb3IgdGhlIGxpc3QgdmlldyBjb250YWlucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHNob3duIGluIHRoZSB0YWJsZVxuXHRcdGlmICghbmF2VGV4dCkge1xuXHRcdFx0Ly8gU2V0IG5hdmJhciB0ZXh0IGFzIG51bWJlciBvZiBpdGVtcyBpbiB0YWJsZSB0aGVuIGFwcGVuZCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0XHRuYXZUZXh0ID0gcmVzdWx0c0NvdW50ICsgXCIgXCIgKyAkKHRoaXMubmF2U2VsZWN0b3IpLmZpbmQoXCJsaS5hY3RpdmVcIikuZmlyc3QoKS50ZXh0KCkucmVwbGFjZShcIkFsbCBcIiwgXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdW5hYmxlIHRvIG9idGFpbiByb3dzIGNvdW50LCBzaG93IFwiTG9hZGluZ+KAplwiXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuY2xvc2VzdChcInNlY3Rpb25cIikuZmluZChcIi50b3AtbmF2IGg0XCIpLnRleHQocmVzdWx0c0NvdW50ICE9PSB1bmRlZmluZWQgPyBuYXZUZXh0IDogXCJMb2FkaW5n4oCmXCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSByb3cgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqIHVzaW5nIGRhdGEgZnJvbSBcIm9iamVjdFwiLlxuXHQgKlxuXHQgKiBUaGUgcHJvcGVydHkgbmFtZXMgc2hvdWxkIGNvcnJlc3BvbmQgd2l0aCB0aGUgXCJzbHVnXCJcblx0ICogYXR0cmlidXRlIGluIHRhYmxlIGhlYWRlci5cblx0ICpcblx0ICogTk9URTogVGhpcyBhc3N1bWVzIHRoZSBvYmplY3QgaGFzIGFuIElEIGF0dHJpYnV0ZS4gSW5jbHVkZSBpdFxuXHQgKiBldmVuIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNob3cgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmplY3QgLSBUaGUgZGF0YSB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGVcblx0ICogc3BsYXNoc2NyZWVuIG9uIHlvdXIgcGFnZVxuXHQgKi9cblx0YXBwZW5kVGFibGVSb3cob2JqZWN0KSB7XG5cdFx0dmFyICR0YWJsZVNlY3Rpb24gPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0ICAgICR0YWJsZUhlYWQgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRoZWFkIHRyJyksXG5cdFx0ICAgICR0YWJsZUJvZHkgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRib2R5JyksXG5cdFx0ICAgICRuZXdSb3cgICAgICAgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XG5cblx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgcm93IHR3aWNlXG5cdFx0aWYgKCR0YWJsZUJvZHkuY2hpbGRyZW4oXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBvYmplY3QuaWQgKyBcIlxcXCJdXCIpLmxlbmd0aCA+IDApIHJldHVybjtcblxuXHRcdC8vIFNldCBJRCBvbiByb3cgdG8gcmVmZXJlbmNlIGxhdGVyXG5cdFx0JG5ld1Jvd1swXS5kYXRhc2V0LnJvd2lkID0gb2JqZWN0LmlkO1xuXHRcdCRuZXdSb3cudG9nZ2xlQ2xhc3MoXCJoaWdobGlnaHRcIiwgb2JqZWN0LmlkID09IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cblx0XHQkdGFibGVIZWFkLmNoaWxkcmVuKCd0aCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2x1ZyA9IHRoaXMuZGF0YXNldC5zbHVnLCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXHRcdFx0aWYgKHNsdWcgPT09ICdleWUnKSB7IC8vIHRoZSBvbi1ob3ZlciBleWUgaW52aXNpYmxlIHJvd1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+Jztcblx0XHRcdH0gZWxzZSBpZiAoc2x1ZyAmJiBzbHVnLmluY2x1ZGVzKFwiYWNjZXNzXCIpKSB7XG5cdFx0XHRcdC8vIEJvb2xlYW4gdmFsdWUgc3VwcG9ydFxuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpID8gdGhpcy5pbm5lckhUTUwgOiBcIsK3XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpICE9PSB1bmRlZmluZWQgPyBvYmplY3Rbc2x1Z10gOiBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkbmV3Um93LmFwcGVuZCh0ZCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JHRhYmxlQm9keS5hcHBlbmQoJG5ld1Jvdyk7XG5cblx0XHRyZXR1cm4gJG5ld1Jvd1swXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgdGhlIGRhdGEgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqL1xuXHRjbGVhclRhYmxlKCkge1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTaG93IGRldGFpbCBwYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIHRhYmxlIHJvdyB0byBiZSBzaG93biBpbiB0aGUgc2luZ2xlIHZpZXdcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQgPSBudWxsKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBjaGVjayBmb3IgbnVsbCBhcyBubyByb3dzIHdpbGwgbWF0Y2ggaWYgbm8gSUQgcGFzc2VkXG5cdFx0Ly8gLnNpYmxpbmdzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmIHNvIGNhbiBiZSBjaGFpbmVkIGFmdGVyIGZpbmRpbmcgaGlnaGxpZ2h0IHJvdyBmaXJzdFxuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5yb3dpZCA9PSBpZCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuZmlyc3QoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFxuXHRcdC8vIE5vIG5lZWQgdG8gc2V0IHN0eWxlIHVzaW5nIEpTIGhlcmUsIENTUyBoYW5kbGVzIGZsZXhcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLnVud3JhcChcImRpdlwiKVxuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uIG9uIGhpZGVcblx0XHRcdC5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJjbG9zZVxcXCJdXCIpLmNsaWNrKCgpID0+IHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpKTtcblx0XHRcblx0XHRpZiAoaWQgPiAtMSkgbG9jYXRpb24uaGFzaCA9IHBhcnNlSW50KGlkKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEhpZGUgZGV0YWlsIHBhZ2Ugc2hvd24gd2l0aCBzaG93RGV0YWlsXG5cdCAqL1xuXHRoaWRlVGFibGVSb3dEZXRhaWxzKCkge1xuXHRcdC8vIERlc2VsZWN0IGFsbCByb3dzXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBGaWx0ZXIgdG8gY2hlY2sgaWYgYWxyZWFkeSBoaWRkZW4sIGRvbid0IGhpZGUgYWdhaW5cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudChcImRpdlwiKS5sZW5ndGggPT09IDApLndyYXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdFx0XG5cdFx0bG9jYXRpb24uaGFzaCA9IFwiXCI7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhIHNlbGVjdCBlbGVtZW50IHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG5cdCAqIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGRyb3Bkb3duIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3QgQSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbGxlZFxuXHQgKiBAcGFyYW0gZGVmYXVsdFRleHQgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG5cdCAqIEBwYXJhbSBlbGVtZW50cyBMaXN0IG9mIGVsZW1lbnRzIHRvIGJlIGFkZGVkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbVxuXHQgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbklkIElEIG9mIGEgZGVmYXVsdCBvcHRpb24gZnJvbSB0aGUgZWxlbWVudHMgZ2l2ZW5cblx0ICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0IGZpZWxkIHRvIGFjY2VzcyBzZWxlY3RlZCBpdGVtIHdpdGhcblx0ICogQHBhcmFtIGdldEFkZGl0aW9uYWxEZXRhaWxzIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGJlIHNob3duIGZvciBjdXJyZW50IGl0ZW1cblx0ICovXG5cdHBvcHVsYXRlU2VsZWN0RmllbGQoJHNlbGVjdCwgZGVmYXVsdFRleHQsIGVsZW1lbnRzLCBkZWZhdWx0T3B0aW9uSWQgPSBudWxsLCBwcm9wZXJ0eSA9ICduYW1lJywgZ2V0QWRkaXRpb25hbERldGFpbHMgPSBudWxsKSB7XG5cdFx0Ly8gRGVmYXVsdCBlbXB0eSBjb250ZW50IGZvciBpbnB1dFxuXHRcdGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKGRlZmF1bHRUZXh0LCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdCRzZWxlY3QuZW1wdHkoKS5hcHBlbmQob3B0aW9uKTtcblx0XHRcblx0XHQvLyBFYWNoIG9wdGlvbiB0byBiZSBzZWxlY3RlZCBmcm9tXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChnZXRBZGRpdGlvbmFsRGV0YWlscyAhPT0gbnVsbCkge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBnZXRBZGRpdGlvbmFsRGV0YWlscyhlKSArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmdcblx0ICogQHBhcmFtIGVsZW1lbnRzIFRoZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VhcmNoIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIG9iamVjdENhbGxiYWNrIGEgY2FsbGJhY2sgcmV0dXJuaW5nIGFuIG9iamVjdCAodGhlIHJvdyBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSBzZWFyY2hLZXlzIHRoZSBwcm9wZXJ0aWVzIGluIG9iamVjdENhbGxiYWNrIHRvIGhpZ2hsaWdodFxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBlbGVtZW50cyA9IFtdLCBvYmplY3RDYWxsYmFjaywgc2VhcmNoS2V5cyA9IFtdKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzO1xuXG5cdFx0cGFnZS5jbGVhclRhYmxlKCk7XG5cblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0gb2JqZWN0Q2FsbGJhY2soZWwpO1xuXG5cdFx0XHRcdHNlYXJjaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRcdG9iamVjdFtrZXldID0gU3RyaW5nKG9iamVjdFtrZXldKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcXVlcnkgKyAnKScsICdpZycpLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocXVlcnkgPT09ICQoXCIuc2VhcmNoLWZpZWxkIGlucHV0XCIpLnZhbCgpKSB7XG5cdFx0XHRcdFx0cGFnZS5hcHBlbmRUYWJsZVJvdyhvYmplY3QpO1xuXHRcdFx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGAke2VsZW1lbnRzLmxlbmd0aH0gcmVzdWx0JHtlbGVtZW50cy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYE5vIHJlc3VsdHMgZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhIG1lc3NhZ2UgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgb3ZlciBhbGwgZWxlbWVudHMuXG5cdCAqIEhpZGUgYWZ0ZXIgNiBzZWNvbmRzLCBvciBjb25maWd1cmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHN0cmluZyB0byBiZSBzaG93biBpbiB0aGUgbWVzc2FnZSBib3guXG5cdCAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG1lc3NhZ2UsIHN1Y2ggYXMgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIlxuXHQgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMgZm9yIHRoZSBtZXNzYWdlIHRvIGJlIHNob3duIGZvci5cblx0ICovXG5cdHN0YXRpYyBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkXCIsIHR5cGUgPSBcImRhbmdlclwiLCBkdXJhdGlvbiA9IDYpIHtcblx0XHQvLyBPbmx5IHNob3cgb25lIG1lc3NhZ2UgYXQgYSB0aW1lXG5cdFx0JChcIiNhbGVydC1ub3RpZmljYXRpb25cIikucmVtb3ZlKCk7XG5cblx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bXNnLmlkID0gXCJhbGVydC1ub3RpZmljYXRpb25cIjtcblx0XHRtc2cuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIsIGBhbGVydC0ke3R5cGV9YCwgXCJhbGVydC1ub3RpZmljYXRpb25cIik7XG5cdFx0bXNnLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTsgLy8gQWNjZXNzaWJpbGl0eVxuXHRcdC8vIFNldCBjb250ZW50IGFuZCBzaG93IG9uIHNjcmVlblxuXG5cdFx0bXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1zZyk7XG5cblx0XHQvLyBIaWRlIGFmdGVyIGR1cmF0aW9uXG5cdFx0c2V0VGltZW91dCgoKSA9PiBtc2cucmVtb3ZlKCksIGR1cmF0aW9uICogMTAwMCk7XG5cblx0XHQvLyBDbGljayB0byBoaWRlIG1lc3NhZ2Vcblx0XHQkKG1zZykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHluYW1pY1BhZ2UuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi9EZXZpY2VcIjtcblxuLyoqXG4gKiBIYXJkd2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZGV2aWNlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBIYXJkd2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkd2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZGV2aWNlcyA9IGFwaS5kZXZpY2VzLm1hcChlID0+IG5ldyBEZXZpY2UoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIFR5cGVzIGluIHRhYmxlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRoaXMuZGV2aWNlcy5tYXAodCA9PiB0LnR5cGUpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgTWFrZXMgZm9yIGEgc3BlY2lmaWVkIFR5cGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVNYWtlc09mVHlwZSh0eXBlKSB7XG5cdFx0bGV0IGRldmljZXNCeVR5cGUgPSB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlKTtcblxuXHRcdHJldHVybiBbLi4ubmV3IFNldChkZXZpY2VzQnlUeXBlLm1hcCh0ID0+IHQubWFrZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGRldmljZXMgd2l0aCBhIHNwZWNpZmllZCBUeXBlIGFuZCBNYWtlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0Z2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUgJiYgZGV2aWNlLm1ha2UgPT0gbWFrZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkZXZpY2VzIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgZGV2aWNlcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXREZXZpY2VzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBpZHMuaW5kZXhPZihkZXZpY2UuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgZGV2aWNlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgZGV2aWNlIFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZGV2aWNlID0+IGRldmljZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkZXZpY2Ugd2l0aCB0aGUgZ2l2ZW4gc2VyaWFsIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gc2VyaWFsTnVtYmVyIFRoZSBzZXJpYWwgbnVtYmVyIG9mIHRoZSBkZXZpY2UgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtEZXZpY2V9XG5cdCAqL1xuXHRnZXREZXZpY2VCeVNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLnNlcmlhbF9ubyA9PT0gc2VyaWFsTnVtYmVyKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBQcm9ncmFtIGZyb20gXCIuL1Byb2dyYW1cIjtcblxuLyoqXG4gKiBTb2Z0d2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogc29mdHdhcmUgcHJvZ3JhbXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogU29mdHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29mdHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnByb2dyYW1zID0gYXBpLnByb2dyYW1zLm1hcChlID0+IG5ldyBQcm9ncmFtKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcm9ncmFtcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIHByb2dyYW1zIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldFByb2dyYW1zKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbHRlcihwcm9ncmFtID0+IGlkcy5pbmRleE9mKHByb2dyYW0uaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIHByb2dyYW1cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maW5kKHByb2dyYW0gPT4gcHJvZ3JhbS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlci5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ29tbWVudFxuICpcbiAqIEEgY29tbWVudCBpcyBtYWRlIGFib3V0IGEgc3BlY2lmaWMgdGlja2V0LCBieVxuICogYSBzdGFmZiBtZW1iZXIuXG4gKiBcbiAqIENvbnRhaW5zIHRoZSBUaWNrZXQgdGhhdCBpdCBiZWxvbmdzIHRvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQ6IGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxfaWQ6IGNhbGwsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0Y29udGVudCxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGwgICAgICAgICAgICA9IGNhbGw7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7XG5cdFx0dGhpcy5jb250ZW50ICAgICAgICAgPSBjb250ZW50O1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCBhdXRob3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hdXRob3IpO1xuXHR9XG5cblx0c2V0IGF1dGhvcihhdXRob3IpIHtcblx0XHR0aGlzLl9hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRnZXQgY2FsbCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGwodGhpcy5fY2FsbCk7XG5cdH1cblxuXHRzZXQgY2FsbChjYWxsKSB7XG5cdFx0dGhpcy5fY2FsbCA9IGNhbGw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9Db21tZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ2FsbFxuICpcbiAqIEV2ZXJ5IHRpbWUgdGhlIEhlbHBkZXNrIGlzIGNhbGxlZCwgdGhpcyBpcyBjcmVhdGVkLlxuICogQSBjYWxsIG1heSBoYXZlIG11bHRpcGxlIHRpY2tldHMsIGEgdGlja2V0IG1heSBoYXZlXG4gKiBtdWx0aXBsZSBjYWxscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aW1lLFxuXHRcdGNhbGxlcl9pZDogY2FsbGVyLFxuXHRcdG9wZXJhdG9yX2lkOiBvcGVyYXRvcixcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aW1lICAgICA9IHRpbWU7XG5cdFx0dGhpcy5jYWxsZXIgICA9IGNhbGxlcjsgICAvLyBJRCBvZiBjYWxsZXIsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjsgLy8gSUQgb2Ygb3BlcmF0b3IsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMudGlja2V0cyAgPSB0aWNrZXRzOyAgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBUaWNrZXQnc1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBvcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBvcGVyYXRvcihvcGVyYXRvcikge1xuXHRcdHRoaXMuX29wZXJhdG9yID0gb3BlcmF0b3I7XG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNGcm9tQ2FsbCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRW1wbG95ZWVcbiAqXG4gKiBBbiBlbXBsb3llZSBvZiB0aGUgY29tcGFueVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGpvYl90aXRsZTogam9iLFxuXHRcdGRlcGFydG1lbnQsXG5cdFx0cGhvbmVfbnVtYmVyOiBwaG9uZSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IHNwZWNpYWxpc21zID0gW10sXG5cdFx0b3BlcmF0b3IgPSBmYWxzZSxcblx0XHRzcGVjaWFsaXN0ID0gc3BlY2lhbGlzbXMubGVuZ3RoID4gMCxcblx0XHRhbmFseXN0ID0gZmFsc2UsXG5cdFx0YWRtaW4gPSBmYWxzZVxuXHR9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMuam9iID0gam9iO1xuXHRcdHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQubmFtZTtcblx0XHR0aGlzLl9kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5pZDtcblx0XHR0aGlzLnBob25lID0gcGhvbmU7XG5cdFx0dGhpcy5zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHRcdHRoaXMuYWNjZXNzID0ge29wZXJhdG9yLCBhbmFseXN0LCBhZG1pbn07XG5cdFx0XG5cdFx0Ly8gSWYgdXNlciBpcyBhbnkgb3RoZXIgcGVybWlzc2lvbiB0aGVuIHJlYWQgaXMgZ3JhbnRlZFxuXHRcdHRoaXMuYWNjZXNzLnJlYWQgPSB0aGlzLmFjY2Vzcy5vcGVyYXRvciB8fCB0aGlzLmFjY2Vzcy5hbmFseXN0IHx8IHRoaXMuYWNjZXNzLmFkbWluIHx8IHRoaXMuYWNjZXNzLnJlYWRvbmx5IHx8IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyByZWFkIGFjY2VzcyB0byB0aGUgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNSZWFkKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5yZWFkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgaGVscCBkZXNrIG9wZXJhdG9yXG5cdCAqL1xuXHRnZXQgaXNPcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Mub3BlcmF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBhbmFseXRpY2FsIGRhdGEgYWJvdXQgdGhlIGhlbHAgZGVzayBzeXN0ZW1cblx0ICovXG5cdGdldCBpc0FuYWx5c3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFuYWx5c3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvbiB0aGUgaGVscCBkZXNrXG5cdCAqL1xuXHRnZXQgaXNBZG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYWRtaW47XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgQSBsaXN0IG9mIHByb2JsZW0gdHlwZXMgdGhlIHVzZXIgaXMgYSBzcGVjaWFsaXN0IG9mXG5cdCAqL1xuXHRnZXQgc3BlY2lhbGlzbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX3NwZWNpYWxpc21zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3BlY2lhbGlzbXMgU2V0IHRoZSBsaXN0IG9mIHNwZWNpYWxpc21zIGZvciB0aGlzIHBlcnNvbiBvbiB0aGUgc3lzdGVtXG5cdCAqL1xuXHRzZXQgc3BlY2lhbGlzbXMoc3BlY2lhbGlzbXMpIHtcblx0XHR0aGlzLl9zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgZGF0YSBmb3Igc2VuZGluZyB0byBBUEkgZW5kcG9pbnQuIFRoZSBBUEkgaGFzIGRpZmZlcmVudFxuXHQgKiBkYXRhIGtleXMgcmVwcmVzZW50aW5nIHRoZSBkYXRhIGFjY2Vzc2libGUgaW4gdGhlIHRhYmxlcywgc28gbmV3XG5cdCAqIGRhdGEgYW5kIHVwZGF0ZXMgdG8gZGF0YSBtdXN0IHVzZSB0aGVzZSBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBkYXRhIHRvIGJlIGNvbnZlcnRlZFxuXHQgKiBAcmV0dXJucyBkYXRhIHdpdGggdXBkYXRlZCBrZXkgbmFtZXNcblx0ICovXG5cdHN0YXRpYyBwcmVwYXJlRGF0YShkYXRhID0ge30pIHtcblx0XHRkYXRhLmpvYl90aXRsZSA9IGRhdGEuam9iO1xuXHRcdGRhdGEucGhvbmVfbnVtYmVyID0gZGF0YS5waG9uZTtcblx0XHRkYXRhLmV4cGVydGlzZV90eXBlcyA9IGRhdGEuc3BlY2lhbGlzbXM7XG5cdFx0ZGF0YS5kZXBhcnRtZW50X2lkID0gZGF0YS5kZXBhcnRtZW50O1xuXHRcdGZvciAobGV0IGtleSBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblx0XHRcdGRhdGFba2V5XSA9IGRhdGEuYWNjZXNzW2tleV0gPyAoMSAmJiAoZGF0YS5zcGVjaWFsaXN0ID0gMSkpIDogMDtcblx0XHR9XG5cdFx0ZGF0YS5zcGVjaWFsaXN0ID0gZGF0YS5zcGVjaWFsaXN0IHx8IDA7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3RhZmYvRW1wbG95ZWUuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHBhcmVudF9pZDogcGFyZW50LFxuXHRcdGNoaWxkcmVuXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICA9IG5hbWU7XG5cdFx0dGhpcy5wYXJlbnQgICA9IHBhcmVudDtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47IC8vIElEIG9mIEV4cGVydGlzZVR5cGUncywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBFeHBlcnRpc2VUeXBlJ3Ncblx0fVxuXG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fcGFyZW50KTtcblx0fVxuXG5cdHNldCBwYXJlbnQocGFyZW50KSB7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0Z2V0IGNoaWxkcmVuKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9jaGlsZHJlbik7XG5cdH1cblxuXHRzZXQgY2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGUuanMiLCJpbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlU3RhZmYge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmSWQsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfaWQ6IGV4cGVydGlzZVR5cGVJZCxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICA9IHN0YWZmSWQ7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGVJZDtcblx0XHR0aGlzLnRpY2tldHMgICAgICAgID0gdGlja2V0cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX2V4cGVydGlzZV90eXBlKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZShleHBlcnRpc2VUeXBlKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGF0dXNcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFN0YXR1cy5cbiAqIENvbnRhaW5zIFRpY2tldHMgdGhhdCBmaXQgaW50byB0aGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzbHVnLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgID0gaWQ7XG5cdFx0dGhpcy5zbHVnICAgID0gc2x1ZzsgICAgLy8gc2x1Z19leGFtcGxlXG5cdFx0dGhpcy5uYW1lICAgID0gbmFtZTsgICAgLy8gTmFtZSBFeGFtcGxlIVxuXHRcdHRoaXMudGlja2V0cyA9IHRpY2tldHM7IC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBUaWNrZXQgaW5zdGFuY2VzXG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNXaXRoU2x1Zyh0aGlzLnNsdWcpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgVGlja2V0L1Byb2JsZW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxscyxcblx0XHRzdGF0dXMsXG5cdFx0c3RhdHVzX2hpc3Rvcnk6IHN0YXR1c0hpc3RvcnksXG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0c29sdXRpb25faWQ6IHNvbHV0aW9uLFxuXHRcdGRldmljZXMsXG5cdFx0cHJvZ3JhbXMsXG5cdFx0Y29tbWVudHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsLFxuXHRcdHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdFJlYWwsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQ6IGV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRhc3NpZ25lZF90b19vcGVyYXRvcl9pZDogYXNzaWduZWRUb09wZXJhdG9ySWRcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgICAgPSBjYWxsczsgIC8vIElEIG9mIGNhbGxzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENhbGwnc1xuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhdHVzX2hpc3RvcnkgICAgICAgPSBzdGF0dXNIaXN0b3J5O1xuXHRcdHRoaXMudGl0bGUgICAgICAgICAgICAgICAgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uICAgICAgICAgID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5zb2x1dGlvbiAgICAgICAgICAgICA9IHNvbHV0aW9uO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgICAgPSBkZXZpY2VzOyAgLy8gSUQgb2YgZGV2aWNlcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBEZXZpY2VzXG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgICA9IHByb2dyYW1zOyAvLyBJRCBvZiBwcm9ncmFtcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBQcm9ncmFtc1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgICAgPSBjb21tZW50czsgLy8gSUQgb2YgY29tbWVudHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ29tbWVudCdzXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgICAgICAgICAgID0gdXBkYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsICAgICAgPSBjcmVhdGVkQXRSZWFsO1xuXHRcdHRoaXMudXBkYXRlZF9hdF9yZWFsICAgICAgPSB1cGRhdGVkQXRSZWFsO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGNhbGxzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbHNCeVRpY2tldElkKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IGNhbGxzKGNhbGxzKSB7XG5cdFx0dGhpcy5fY2FsbHMgPSBjYWxscztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cdFxuXHRnZXQgc3RhdHVzX2hpc3RvcnkoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXNIaXN0b3J5KHRoaXMuX3N0YXR1c19oaXN0b3J5KTtcblx0fVxuXG5cdHNldCBzdGF0dXNfaGlzdG9yeShzdGF0dXNIaXN0b3J5KSB7XG5cdFx0dGhpcy5fc3RhdHVzX2hpc3RvcnkgPSBzdGF0dXNIaXN0b3J5O1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgZGV2aWNlcygpIHtcblx0XHRyZXR1cm4gKG5ldyBIYXJkd2FyZU1hbmFnZXIoKSkuZ2V0RGV2aWNlcyh0aGlzLl9kZXZpY2VzKTtcblx0fVxuXG5cdHNldCBkZXZpY2VzKGRldmljZXMpIHtcblx0XHR0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcblx0fVxuXG5cdGdldCBwcm9ncmFtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBTb2Z0d2FyZU1hbmFnZXIoKSkuZ2V0UHJvZ3JhbXModGhpcy5fcHJvZ3JhbXMpO1xuXHR9XG5cblx0c2V0IHByb2dyYW1zKHByb2dyYW1zKSB7XG5cdFx0dGhpcy5fcHJvZ3JhbXMgPSBwcm9ncmFtcztcblx0fVxuXG5cdGdldCBjb21tZW50cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnRzQnlJZHModGhpcy5fY29tbWVudHMpO1xuXHR9XG5cblx0c2V0IGNvbW1lbnRzKGNvbW1lbnRzKSB7XG5cdFx0dGhpcy5fY29tbWVudHMgPSBjb21tZW50cztcblx0fVxuXG5cdGdldCBzb2x1dGlvbigpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnQodGhpcy5fc29sdXRpb24pO1xuXHR9XG5cblx0c2V0IHNvbHV0aW9uKHNvbHV0aW9uKSB7XG5cdFx0dGhpcy5fc29sdXRpb24gPSBzb2x1dGlvbjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZV9zdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmKHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZV9zdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQ7XG5cdH1cblxuXHRnZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoYXNzaWduZWRUb09wZXJhdG9ySWQpIHtcblx0XHR0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAgLSAxICsgMSkpICsgMTsgLy9SYW5kb20gaW50IGJldHdlZW4gMSBhbmQgNDBcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpKS5nZXRFeHBlcnRpc2VUeXBlKHJhbmRvbSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIERldmljZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0eXBlLFxuXHRcdG1ha2UsXG5cdFx0c2VyaWFsX25vLFxuXHRcdHRpY2tldHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KVxuXHR7XG5cdFx0dGhpcy5pZFx0XHRcdFx0PSBpZDtcblx0XHR0aGlzLnR5cGVcdFx0XHQ9IHR5cGU7XG5cdFx0dGhpcy5tYWtlICAgXHRcdD0gbWFrZTtcblx0XHR0aGlzLnNlcmlhbF9ubyAgICAgXHQ9IHNlcmlhbF9ubztcblx0XHR0aGlzLl90aWNrZXRzXHRcdD0gdGlja2V0cztcblx0XHR0aGlzLmNyZWF0ZWRfYXRcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIFByb2dyYW1cbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIFNvZnR3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmFtIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0cyxcblx0XHRvcGVyYXRpbmdfc3lzdGVtLFxuXHRcdGV4cGlyeV9kYXRlLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSkgXG5cdHtcblx0XHR0aGlzLmlkICAgICAgICAgXHRcdD0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICAgIFx0XHQ9IG5hbWU7XG5cdFx0dGhpcy5fdGlja2V0c1x0XHRcdD0gdGlja2V0cztcblx0XHR0aGlzLm9wZXJhdGluZ19zeXN0ZW1cdD0gb3BlcmF0aW5nX3N5c3RlbTtcblx0XHR0aGlzLmV4cGlyeV9kYXRlXHRcdD0gZXhwaXJ5X2RhdGU7XG5cdFx0dGhpcy5jcmVhdGVkX2F0IFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0IFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXRTb2Z0d2FyZVR5cGUoKSB7IFxuXHRcdC8vR2V0cyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBwcm9ncmFtIGlzIGFuIG9wZXJ0aW5nIHN5c3RlbSBvciBub3Rcblx0XHRpZiAodGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJPcGVyYXRpbmcgU3lzdGVtXCI7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJBcHBsaWNhdGlvblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCItXCI7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zb2Z0d2FyZS9Qcm9ncmFtLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0U3RhdHVzXG4gKlxuICogSW50ZXJtZWRpYXJ5IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFN0YXR1c1xuICogYW5kIFRpY2tldC4gVGhpcyBzdG9yZXMgYSBoaXN0b3J5IG9mIGFcbiAqIFRpY2tldCdzIHN0YXR1c2VzOyB0aGUgbGFzdCBlbnRyeSBpc1xuICogdGhlIFRpY2tldCdzIGN1cnJlbnQgc3RhdHVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0c3RhdHVzX2lkOiBzdGF0dXMsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0OyAvLyBJRCBvZiB0aWNrZXQsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBUaWNrZXRcblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgPSBzdGFmZjsgIC8vIElEIG9mIHN0YWZmLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRTdGF0dXMuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4vRHluYW1pY1BhZ2VcIjtcblxuLyoqXG4gKiBBUElcbiAqXG4gKiBPcmlnaW5hbGx5IHVzZWQgdG8gcmV0cmlldmUgYW5kIGhhbmRsZSBkYXRhIGZyb21cbiAqIEFQSSBlbmRwb2ludHMsIGJ1dCBtb2RpZmllZCB0byBob2xkIGxvY2FsIGRhdGFcbiAqIGluIHRoZSBjb25zdHJ1Y3RvciBzZXQgYnkgV29yZFByZXNzJ3MgVHdpZ1xuICogKGRvbmUgdG8gcmV1c2UgcHJldmlvdXMgY29tcG9uZW50cyB0byBzYXZlIHRpbWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRjYWxscyA9IFtdLFxuXHRcdHN0YXR1c2VzID0gW10sXG5cdFx0dGlja2V0cyA9IFtdLFxuXHRcdHRpY2tldF9zdGF0dXNlczogdGlja2V0U3RhdHVzZXMgPSBbXSxcblx0XHRjb21tZW50cyA9IFtdLFxuXHRcdHN0YWZmID0gW10sXG5cdFx0ZGV2aWNlcyA9IFtdLFxuXHRcdHByb2dyYW1zID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBleHBlcnRpc2VUeXBlcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmOiBleHBlcnRpc2VUeXBlU3RhZmYgPSBbXSxcblx0XHRkZXBhcnRtZW50cyA9IFtdXG5cdH0pIHtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICA9IGNhbGxzO1xuXHRcdHRoaXMuc3RhdHVzZXMgICAgICAgICAgID0gc3RhdHVzZXM7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICAgICAgPSB0aWNrZXRzO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgICAgID0gdGlja2V0U3RhdHVzZXM7XG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgPSBjb21tZW50cztcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICAgICA9IHN0YWZmO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgID0gZGV2aWNlcztcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICA9IHByb2dyYW1zO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gZXhwZXJ0aXNlVHlwZXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyAgICAgICAgPSBkZXBhcnRtZW50cztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9BUEkuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YWZmUGFnZVxuICpcbiAqIE1ldGhvZHMgdXNlZnVsIGZvciBwb3B1bGF0aW5nIGFuZCBoYW5kbGluZyBpbnB1dCBvbiBTdGFmZiBwYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmUGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vIE1hbmFnZXJzXG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cblx0XHQvLyBObyBlbXBsb3llZSBkZXRhaWwgc2hvd24gYnkgZGVmYXVsdFxuXHRcdHRoaXMuZW1wbG95ZWUgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9idGFpbiBhbmQgc2hvdyBhbGwgc3RhZmYgaW4gbGlzdCB2aWV3IHRhYmxlIG9uIHBhZ2Vcblx0ICovXG5cdHNob3dTdGFmZigpIHtcblx0XHQvLyBFbnN1cmUgbm8gbG9jYWxseS1jYWNoZWQgZGF0YSBpcyBwcmVzZW50IGluIHN0YWZmIHRhYmxlIGJlZm9yZSBwb3B1bGF0aW5nXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keVwiKS5lbXB0eSgpO1xuXG5cdFx0Ly8gQ29sdW1uIHRvIGZpbGwgdGlja2V0cyBudW1iZXIgaW50b1xuXHRcdGxldCB0aWNrZXRzQ29sdW1uSW5kZXggPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRyXCIpLmZpcnN0KClcblx0XHRcdFx0LmNoaWxkcmVuKFwiW2RhdGEtc2x1Zz1cXFwidGlja2V0cy5hc3NpZ25lZFxcXCJdXCIpLmluZGV4KCk7XG5cblx0XHQvLyBUZW1wb3JhcnkgYXJyYXkgdG8gaG9sZCBzdGFmZiBJRHMgc3RpbGwgYXdhaXRpbmcgdGlja2V0IGNvdW50c1xuXHRcdGxldCBzdGFmZkZvclRpY2tldHMgPSBbXTtcblxuXHRcdC8vIFB1dCBlYWNoIHN0YWZmIG1lbWJlciBvbiB0YWJsZVxuXHRcdGxldCBzdGFmZiA9IHRoaXMuc3RhZmZNYW5hZ2VyLnN0YWZmO1xuXG5cdFx0Ly8gQWRkIGVhY2ggc3RhZmYgbWVtYmVyIHRvIGEgbmV3IHJvdyBpbiB0aGUgdGFibGVcblx0XHRmb3IgKGxldCBlbXBsb3llZSBvZiBzdGFmZikge1xuXHRcdFx0bGV0ICR0YWJsZVJvdyA9IHRoaXMuYXBwZW5kVGFibGVSb3coZW1wbG95ZWUpO1xuXHRcdFx0c3RhZmZGb3JUaWNrZXRzLnB1c2goZW1wbG95ZWUuaWQpO1xuXHRcdH1cblxuXHRcdC8vIEhpZGUgc3BsYXNoIHNjcmVlbiBpZiB0aGVyZSBpcyBhdCBsZWFzdCAxIHN0YWZmIG1lbWJlciBpbiB2aWV3XG5cdFx0dGhpcy51cGRhdGVTcGxhc2hTY3JlZW4oKTtcblxuXHRcdC8vIEdldCBhc3NpZ25lZCB0aWNrZXQgY291bnRzIGFzeW5jaHJvbm91c2x5XG5cdFx0KGFzeW5jKGlkcykgPT4ge1xuXHRcdFx0Ly8gR2V0IG51bWJlciBvZiBhc3NpZ25lZCB0aWNrZXRzIGFuZCBmaWxsIGNvbHVtblxuXHRcdFx0bGV0ICRyb3dzID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keVwiKS5jaGlsZHJlbihcInRyXCIpO1xuXHRcdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhpZHMpO1xuXHRcdFx0JHJvd3MuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdFx0ZWwuY2hpbGRyZW5bdGlja2V0c0NvbHVtbkluZGV4XS50ZXh0Q29udGVudCA9IHRpY2tldHNbaSsxXSA/ICh0aWNrZXRzW2krMV0ubGVuZ3RoIHx8IDApIDogMDtcblx0XHRcdH0pO1xuXHRcdH0pKHN0YWZmRm9yVGlja2V0cyk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIHNob3dpbmcgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyBlbXBsb3llZS4gVXN1YWxseSBjYWxsZWRcblx0ICogd2hlbiBjbGlja2luZyBvbiBhIHJvdyBpbiB0aGUgdGFibGUsIGJ1dCBjYW4gYWxzbyBiZSBjYWxsZWRcblx0ICogZm9yIG90aGVyIHRhYmxlIHJvdyBjaGFuZ2UgaW5wdXRzLCBzdWNoIGFzIGhhc2ggZnJhZ21lbnQgb3Jcblx0ICoga2V5Ym9hcmQgaW5wdXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIGVtcGxveWVlIHRvIHNob3cgZGV0YWlsXG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkKSB7XG5cdFx0Ly8gR2V0IGVtcGxveWVlIHdpdGggSURcblx0XHR0aGlzLmVtcGxveWVlID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0KGlkKTtcblx0XHQvLyBDYXRjaCBpbnZhbGlkIElEcyBhbmQgc2hvdyBtZXNzYWdlXG5cdFx0aWYgKCF0aGlzLmVtcGxveWVlKSB7XG5cdFx0XHQvLyBIaWRlIHNpbmdsZSB2aWV3IGlmIG5vIGRldGFpbCBpcyBhYmxlIHRvIGJlIHByZXNlbnRlZFxuXHRcdFx0Ly8gZm9yIHJlcXVlc3RlZCBJRCwgZW5zdXJpbmcgdGhlIHBlcnNvbiB1c2luZyB0aGUgc3lzdGVtXG5cdFx0XHQvLyBpcyBub3QgY29uZnVzZWQgYnkgZGF0YSBzaG93biBmb3IgcHJldmlvdXNseSBhY2Nlc3NlZCB1c2VyLlxuXHRcdFx0dGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCk7XG5cdFx0XHREeW5hbWljUGFnZS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gZW1wbG95ZWUgd2l0aCBJRCBcIiArIGlkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBQdXQgZW1wbG95ZWUgbmFtZSBpbiB0aXRsZSBiYXIgb2Ygc2luZ2xlIHZpZXdcblx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGhpcy5lbXBsb3llZS5uYW1lKTtcblx0XHRcblx0XHQvLyBGaWxsIGluIGNvbnRlbnQgZm9yIGVhY2ggZmllbGQgYXZhaWxhYmxlIGluIHN0YWZmIG1lbWJlclxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZChcIltkYXRhLXNsdWddXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHQvLyBFYWNoIHNsdWcgaXMgYSBkaWZmZXJlbnQgZmllbGQgdG8gYmUgZmlsbGVkLCBzb1xuXHRcdFx0Ly8gZ2V0IGVhY2ggdmFsdWUgYW5kIHNldCBlbGVtZW50IGNvbnRlbnQgdG8gdmFsdWVcblx0XHRcdGxldCB2YWx1ZSA9IE9iamVjdC5yZXNvbHZlKGVsLmRhdGFzZXQuc2x1ZywgdGhpcy5lbXBsb3llZSk7XG5cdFx0XHQvLyBTb21lIHZhbHVlcyBhcmUgb3B0aW9uYWwsIHNvIGRvbid0IHNob3cgdW5kZWZpbmVkIGlmIG5vIGRhdGFcblx0XHRcdGVsLnRleHRDb250ZW50ID0gdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiID8gdmFsdWUgOiBcIuKAlFwiO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU29tZSBjb250ZW50IHJlcXVpcmVzIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGlucHV0IG9mIGluZm9ybWF0aW9uXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKFwiW2RhdGEtY3VzdG9tc2x1Z11cIikuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdHN3aXRjaCAoZWwuZGF0YXNldC5jdXN0b21zbHVnKSB7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiB0b2tlbnMgbmVlZCB0byBiZSBoYW5kbGVkIHNwZWNpYWxseVxuXHRcdFx0XHQvLyBzaW5jZSB2YWx1ZSBpcyBub3Qgbm9ybWFsIHRleHRcblx0XHRcdFx0Y2FzZSBcImFjY2Vzc1wiOlxuXHRcdFx0XHRcdFN0YWZmUGFnZS5zaG93UGVybWlzc2lvbnMoZWwsIHRoaXMuZW1wbG95ZWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJhdmF0YXJcIjpcblx0XHRcdFx0XHRlbC5zcmMgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzI3NXgyNzVcIjtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwidGlja2V0cy5hc3NpZ25lZFwiOlxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gXCLigKZcIjtcblx0XHRcdFx0XHQoYXN5bmMoZWwpID0+IHtcblx0XHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aGlzLmVtcGxveWVlLmlkKS5sZW5ndGg7XG5cdFx0XHRcdFx0fSkoZWwpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIElmIGluIGRvdWJ0LCBwcmVzdW1lIGRhdGEgaXMgaW52YWxpZCBhbmQgc2hvdyBzYW1lIGFzIG5vIGRhdGFcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBEeW5hbWljUGFnZSBuZWVkcyB0byBoYW5kbGUgdmlldyBjb2RlXG5cdFx0c3VwZXIuc2hvd1RhYmxlUm93RGV0YWlscyhpZCk7XG5cblx0XHQvLyBQcm9ibGVtIHR5cGVzIHZpZXcgaGFuZGxpbmcgdG8gYmUgb2J0YWluZWQgYnkgc3BlY2lmaWMgcHJvYmxlbSB0eXBlIEpTXG5cdFx0d2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlLmN1cnJlbnRTcGVjaWFsaXNtcyA9IHRoaXMuZW1wbG95ZWUuX3NwZWNpYWxpc21zO1xuXHRcdHdpbmRvdy5zdGFmZlByb2JsZW1UeXBlUGFnZS5sb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIGRpc3BsYXlpbmcgcGVybWlzc2lvbnMgZnJvbSBkYXRhIG9iamVjdFxuXHQgKiB0byBpbmRpdmlkdWFsIHRva2VucyBzaG93biBpbiBpbnB1dCwgb25lIGZvciBlYWNoIG9mXG5cdCAqIHRoZSBwZXJtaXNzaW9uIGxldmVscyBncmFudGVkIHRvIHRoZSB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0gZWwgVGhlIGVsZW1lbnQgdG8gZmlsbCB3aXRoIHRoZSBwZXJtaXNzaW9uIGRldGFpbHNcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBnZXQgdGhlIGdyYW50ZWQgcGVybWlzc2lvbiBpbmZvcm1hdGlvbiBmcm9tXG5cdCAqL1xuXHRzdGF0aWMgc2hvd1Blcm1pc3Npb25zKGVsLCBlbXBsb3llZSkge1xuXHRcdGVsLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Ly8gRGVmaW5lIHRoZSBpY29ucyB0byBiZSBkaXNwbGF5ZWQgZm9yIGVhY2ggb2YgdGhlIHBlcm1pc3Npb24gbGV2ZWxzXG5cdFx0bGV0IGljb25zID0ge3JlYWQ6IFwiZXllXCIsIG9wZXJhdG9yOiBcInVzZXItc2VjcmV0XCIsIGFuYWx5c3Q6IFwibGluZS1jaGFydFwiLCBhZG1pbjogXCJzaGllbGRcIn07XG5cblx0XHQvLyBFYWNoIHBlcm1pc3Npb24gaGFzIGl0cyBvd24gdG9rZW4gZm9yIHJlcHJlc2VudGluZyBpdHNlbGZcblx0XHRmb3IgKGxldCBwZXJtaXNzaW9uIG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgd2hldGhlciBlbXBsb3llZSBoYXMgcGVybWlzc2lvbiBhbmQgb25seSBzaG93IGlmIHRydWVcblx0XHRcdGlmIChlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0pIHtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIGljb25cblx0XHRcdFx0bGV0IGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXHRcdFx0XHRlbEljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtXCIgKyBpY29uc1twZXJtaXNzaW9uXSk7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiBuYW1lXG5cdFx0XHRcdGxldCBlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0ZWxUZXh0LnRleHRDb250ZW50ID0gcGVybWlzc2lvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBlcm1pc3Npb24uc2xpY2UoMSk7XG5cblx0XHRcdFx0Ly8gR3JvdXAgaWNvbiBhbmQgbmFtZSBpbnRvIHNpbmdsZSB0b2tlblxuXHRcdFx0XHRsZXQgZWxQZXJtaXNzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRcdGVsUGVybWlzc2lvbi5hcHBlbmRDaGlsZChlbEljb24pO1xuXHRcdFx0XHRlbFBlcm1pc3Npb24uYXBwZW5kQ2hpbGQoZWxUZXh0KTtcblxuXHRcdFx0XHQvLyBEaXNwbGF5IHBlcm1pc3Npb24gdG9rZW4gaW4gZWxlbWVudFxuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChlbFBlcm1pc3Npb24pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBzdGFmZiBtZW1iZXJzIGdpdmVuIGEgc2VhcmNoIHN0cmluZ1xuXHQgKiB0byBmaWx0ZXIgdGhlIHRhYmxlIGJ5IGVtcGxveWVlcyBtYXRjaGluZyB0aGUgc3RyaW5nLlxuXHQgKiBUaGlzIHNlYXJjaGVzIHRocm91Z2ggbWFueSBzdGFmZiB0YWJsZSBmaWVsZHM6XG5cdCAqIGlkLCBuYW1lLCBqb2IsIGRlcGFydG1lbnQgYW5kIHBob25lIG51bWJlci5cblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nIHRvIGZpbHRlciB0aGUgZW1wbG95ZWVzIGJ5XG5cdCAqL1xuXHRhc3luYyBzZWFyY2gocXVlcnkpIHtcblx0XHQvLyBPbmx5IHNlYXJjaCBpZiBxdWVyeSBpcyBzdWZmaWNpZW50IGZvciBzZWFyY2hcblx0XHQvLyBUaGlzIG1hdHRlcnMgbW9yZSB3aXRoIGxhcmdlciBkYXRhc2V0cyB3aGVyZSBcImFcIiBjYW4gaGF2ZVxuXHRcdC8vIHRob3VzYW5kcyBvZiByZXN1bHRzLiBBbHdheXMgZW5zdXJlIElEIHNlYXJjaGVzIGFyZSBwZXJmb3JtZWRcblx0XHQvLyBzaW5jZSBJRCBpcyBpbmRleGVkIGFuZCBjYW4gYmUgc2VhcmNoZWQgdmVyeSBxdWlja2x5LlxuXHRcdGlmIChxdWVyeS5sZW5ndGggPj0gMiB8fCAocXVlcnkubGVuZ3RoID4gMCAmJiBxdWVyeSA9PSBwYXJzZUludChxdWVyeSkpKSB7XG5cblx0XHRcdC8vIERlZmluZSBwcm9wZXJ0aWVzIG9mIGVtcGxveWVlcyB0byBiZSBzZWFyY2hlZCBmb3IgcXVlcnkgbWF0Y2hcblx0XHRcdHZhciBwcm9wZXJ0aWVzID0gW1wiaWRcIiwgXCJuYW1lXCIsIFwiam9iXCIsIFwiZGVwYXJ0bWVudFwiLCBcInBob25lXCJdO1xuXHRcdFx0Ly8gUGVyZm9ybSB0aGUgc2VhcmNoIHVzaW5nIHN1cGVyIHNlYXJjaCBhbmQgYXNzaWduIHJlc3VsdHNcblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgdGhpcy5zdGFmZk1hbmFnZXIuc2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSwgb2JqID0+IE9iamVjdC5hc3NpZ24oe30sIG9iaiksIHByb3BlcnRpZXMpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gc2hvd2luZyBhbGwgc3RhZmYgaWYgcXVlcnkgaXMgbWlzc2luZyBvciBpbnN1ZmZpY2llbnRcblx0XHRcdC8vIFRoaXMgaXMgZGlzdGluY3QgdG8gdGhlIGNhc2Ugd2hlcmUgdGhlcmUgYXJlIG5vIHJlc3VsdHMgdG9cblx0XHRcdC8vIGEgc3VjY2Vzc2Z1bCBxdWVyeSDigJQgdGhpcyBpcyBoYW5kbGVkIGluIHN1cGVyJ3Mgc2VhcmNoIG1ldGhvZFxuXHRcdFx0Ly8gYW5kIHNob3dzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaW5zdGVhZCBvZiBhbGwgdGhlIHN0YWZmLlxuXHRcdFx0dGhpcy5zaG93U3RhZmYoKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3RhZmYvU3RhZmZQYWdlLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YWZmRXhwZXJ0aXNlVHlwZVBhZ2VcbiAqXG4gKiBJbmNsdWRlcyBzcGVjaWFsaXN0IGFsbG9jYXRpb25zIG9uIHRvcCBvZiBFeHBlcnRpc2VUeXBlUGFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZkV4cGVydGlzZVR5cGVQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY3VycmVudFNwZWNpYWxpc21zID0gW107XG5cdH1cblxuXHRhc3luYyBsb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzKCR0eXBlQ29sdW1ucywgJGxpID0gbnVsbCwgZXhwZXJ0aXNlVHlwZUlkID0gbnVsbCkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlID0gbnVsbDtcblx0XHRcblx0XHRpZiAoJGxpKSB7XG5cdFx0XHRleHBlcnRpc2VUeXBlID0gYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCk7XG5cblx0XHRcdCRsaS5wYXJlbnQoKS5uZXh0QWxsKCkucmVtb3ZlKCk7XG5cdFx0XHQkbGkucGFyZW50KCkuZmluZCgnbGkuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JGxpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2xpLmxhc3QtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2xhc3QtYWN0aXZlJyk7XG5cdFx0XHQkbGkuYWRkQ2xhc3MoJ2FjdGl2ZSBsYXN0LWFjdGl2ZScpO1xuXG5cdFx0XHRpZiAoJGxpLmhhc0NsYXNzKCduby1jaGlsZHJlbicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JHR5cGVDb2x1bW5zLmVtcHR5KCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoaWxkcmVuICAgID0gW10sXG5cdFx0XHQkdHlwZUNvbHVtbiA9ICQoJzxkaXYgY2xhc3M9XCJ0eXBlLWNvbHVtblwiPjwvZGl2PicpO1xuXG5cdFx0aWYgKGV4cGVydGlzZVR5cGVJZCA9PT0gbnVsbCkge1xuXHRcdFx0Y2hpbGRyZW4gPSBhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldFJvb3RFeHBlcnRpc2VUeXBlcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZHJlbiA9IGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZS5fY2hpbGRyZW4pO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG5cdFx0XHQkdHlwZUNvbHVtbi5hcHBlbmQoXG5cdFx0XHRcdCc8bGkgJyArIChjaGlsZC5fY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2NsYXNzPVwibm8tY2hpbGRyZW5cIicgOiAnJykgKyAnIGRhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCInICsgY2hpbGQuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0Y2hpbGRyZW5baV0ubmFtZSArXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJzcGVjaWFsaXNtLWNoZWNrYm94IHB1bGwtcmlnaHRcIj4nICtcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5pbmRleE9mKGNoaWxkLmlkKSA+IC0xID8gJzxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+JyA6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicpICtcblx0XHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHRcdCc8L2xpPidcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0JHR5cGVDb2x1bW5zLmFwcGVuZCgkdHlwZUNvbHVtbik7XG5cdFx0JHR5cGVDb2x1bW5zLnNjcm9sbExlZnQoJHR5cGVDb2x1bW5zLndpZHRoKCkpO1xuXHR9XG5cblx0YXN5bmMgdG9nZ2xlU3BlY2lhbGlzbSgkc3BlY2lhbGlzbUNoZWNrYm94KSB7XG5cdFx0bGV0IGNsaWNrZWRTcGVjaWFsaXNtSWQgICAgICAgPSBOdW1iZXIoJHNwZWNpYWxpc21DaGVja2JveC5wYXJlbnQoKS5kYXRhKCdleHBlcnRpc2VUeXBlSWQnKSksXG5cdFx0XHRjdXJyZW50U3BlY2lhbGlzbXNJbmRleE9mID0gdGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuaW5kZXhPZihjbGlja2VkU3BlY2lhbGlzbUlkKSxcblx0XHRcdCRpY29uICAgICAgICAgICAgICAgICAgICAgPSAkc3BlY2lhbGlzbUNoZWNrYm94LmZpbmQoJ2knKTtcblxuXHRcdC8vIFF1aWNrbHkgZ3Vlc3MgYW5kIHNldCBpY29uIGZvciByZXNwb25zaXZlIFVJXG5cdFx0JGljb24uaGFzQ2xhc3MoXCJmYS1jaGVja1wiKSA/ICRpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikgOiAkaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpO1xuXG5cdFx0bGV0XHRjaGlsZHJlbiA9IGF3YWl0IChhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoY2xpY2tlZFNwZWNpYWxpc21JZCkpLmNoaWxkcmVuO1xuXG5cdFx0aWYgKGN1cnJlbnRTcGVjaWFsaXNtc0luZGV4T2YgPiAtMSkge1xuXHRcdFx0dGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuc3BsaWNlKGN1cnJlbnRTcGVjaWFsaXNtc0luZGV4T2YsIDEpO1xuXHRcdFx0JGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXRpbWVzJyk7XG5cblx0XHRcdGlmICh0aGlzLnNob3VsZFJlbW92ZUNoaWxkU3BlY2lhbGlzbXMoY2hpbGRyZW4pKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlQ2hpbGRyZW4oY2hpbGRyZW4sIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJyZW50U3BlY2lhbGlzbXMucHVzaChjbGlja2VkU3BlY2lhbGlzbUlkKTtcblx0XHRcdCRpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcycpLmFkZENsYXNzKCdmYS1jaGVjaycpO1xuXG5cdFx0XHR0aGlzLnRvZ2dsZUNoaWxkcmVuKGNoaWxkcmVuLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVDaGlsZHJlbihjaGlsZHJlbiwgc3RhdHVzID0gZmFsc2UpIHtcblx0XHRjaGlsZHJlbi5mb3JFYWNoKGFzeW5jIGNoaWxkID0+IHtcblx0XHRcdGlmIChzdGF0dXMpIHtcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFNwZWNpYWxpc21zLmluZGV4T2YoY2hpbGQuaWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFNwZWNpYWxpc21zLnB1c2goY2hpbGQuaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5kZXhPZiA9IHRoaXMuY3VycmVudFNwZWNpYWxpc21zLmluZGV4T2YoY2hpbGQuaWQpO1xuXG5cdFx0XHRcdGlmIChpbmRleE9mID4gLTEpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5zcGxpY2UoaW5kZXhPZiwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgaXRlcmF0ZSBhbGwgY2hpbGRyZW5cblx0XHRcdGxldCBjaGlsZHJlbiA9IGF3YWl0IGNoaWxkLmNoaWxkcmVuO1xuXHRcdFx0aWYgKGNoaWxkcmVuKSB7XG5cdFx0XHRcdHRoaXMudG9nZ2xlQ2hpbGRyZW4oY2hpbGRyZW4sIHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKlxuXHQgKiBXZSBzaG91bGQgb25seSBtZXNzIHdpdGggY2hpbGRyZW4gaWYgdGhleVxuXHQgKiBhbGwgaGF2ZSB0aGUgc2FtZSBzdGF0dXNcblx0ICovXG5cdHNob3VsZFJlbW92ZUNoaWxkU3BlY2lhbGlzbXMoY2hpbGRyZW4pIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFNwZWNpYWxpc21zLmluZGV4T2YoY2hpbGQuaWQpID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5zaG91bGRSZW1vdmVDaGlsZFNwZWNpYWxpc21zKGNoaWxkLmNoaWxkcmVuKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRhc3luYyBnZXRCZXN0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGUgPSBhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdHNwZWNpYWxpc3RzICAgPSBhd2FpdCB0aGlzLnN0YWZmTWFuYWdlci5nZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlSWQpO1xuXG5cdFx0aWYgKHNwZWNpYWxpc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBiZXN0U3BlY2lhbGlzdCA9IG51bGwsXG5cdFx0XHRcdGJlc3RDb3VudCAgICAgID0gbnVsbCxcblx0XHRcdFx0b3BlblRpY2tldHMgICAgPSBhd2FpdCB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c1dpdGhTbHVnSW4oWyduZXcnLCAncGVuZGluZ19pbl9wcm9ncmVzcycsICdwZW5kaW5nX2F3YWl0aW5nX3N0YWZmJ10pO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwZWNpYWxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBzcGVjaWFsaXN0ICAgICAgPSBzcGVjaWFsaXN0c1tpXSxcblx0XHRcdFx0XHRhc3NpZ25lZFRvQ291bnQgPSAwO1xuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgb3BlblRpY2tldHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAob3BlblRpY2tldHNbal0uX2Fzc2lnbmVkX3RvID09PSBzcGVjaWFsaXN0LmlkKSB7XG5cdFx0XHRcdFx0XHRhc3NpZ25lZFRvQ291bnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYmVzdFNwZWNpYWxpc3QgPT09IG51bGwgfHwgYXNzaWduZWRUb0NvdW50IDwgYmVzdENvdW50KSB7XG5cdFx0XHRcdFx0YmVzdFNwZWNpYWxpc3QgPSBzcGVjaWFsaXN0O1xuXHRcdFx0XHRcdGJlc3RDb3VudCAgICAgID0gYXNzaWduZWRUb0NvdW50O1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQoZXhwZXJ0aXNlVHlwZUlkLCBiZXN0U3BlY2lhbGlzdC5pZCkpO1xuXHRcdH1cblxuXHRcdGlmIChleHBlcnRpc2VUeXBlLl9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEJlc3RFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlLl9wYXJlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmUHJvYmxlbVR5cGVQYWdlLmpzIiwiLyoqXG4gKiBKUyBzcGVjaWZpYyB0byBTdGFmZiBwYWdlLCBmb3IgaGFuZGxpbmcgaW50ZXJhY3Rpb25zIHdpdGhcbiAqIGVtcGxveWVlIGluZm9ybWF0aW9uIGJvdGggYXMgcmVhZC1vbmx5IGFuZCByZWFkLXdyaXRlXG4gKiBkZXBlbmRpbmcgb24gYWNjZXNzIGxldmVsIGluIHRoZSBvcmdhbmlzYXRpb24gKOKItCBoZWxwIGRlc2spXG4gKi9cblxuaW1wb3J0IFwiLi4vLi4vbWFpblwiO1xuaW1wb3J0IFN0YWZmUGFnZSBmcm9tIFwiLi9TdGFmZlBhZ2VcIjtcbmltcG9ydCBTdGFmZlByb2JsZW1UeXBlUGFnZSBmcm9tIFwiLi9TdGFmZlByb2JsZW1UeXBlUGFnZVwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiLi4vQVBJXCI7XG5cbmxldCBzdGFmZlBhZ2UsIHN0YWZmUHJvYmxlbVR5cGVQYWdlLCBhcGk7XG5cbndpbmRvdy5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHRhcGkgPSB3aW5kb3cuYXBpID0gbmV3IEFQSShkYXRhKTtcblxuXHRzdGFmZlBhZ2UgICAgICAgICAgICA9IHdpbmRvdy5zdGFmZlBhZ2UgICAgICAgICAgICA9IG5ldyBTdGFmZlBhZ2UoKTtcblx0c3RhZmZQcm9ibGVtVHlwZVBhZ2UgPSB3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UgPSBuZXcgU3RhZmZQcm9ibGVtVHlwZVBhZ2UoKTtcblxuXHQvLyBPbiBwYWdlIGxvYWQsIGRvbid0IHNob3cgZW1wdHkgc2luZ2xlLXZpZXdcblx0aWYgKCFsb2NhdGlvbi5oYXNoKSBzdGFmZlBhZ2UuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXG5cdC8vIExvYWQgc3RhZmYgZGV0YWlscyBpbnRvIHBhZ2UgbGlzdC12aWV3XG5cdC8vIFRoaXMgYWN0aW9uIGlzIGFzeW5jaHJvbm91c1xuXHRzdGFmZlBhZ2Uuc2hvd1N0YWZmKCk7XG5cblx0Ly8gRGV0ZWN0IGlmIHBhZ2Ugc2hvdWxkIGxvYWQgd2l0aCBhIHNwZWNpZmljIGVtcGxveWVlIGJlaW5nIHNob3duXG5cdGlmIChsb2NhdGlvbi5oYXNoKSBzdGFmZlBhZ2Uuc2hvd1RhYmxlUm93RGV0YWlscyhwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdC8vXG5cdC8vIEluaXRpYWxpc2UgRXZlbnQgTGlzdGVuZXJzOlxuXHQvL1xuXG5cdC8vIFByb2JsZW0gdHlwZXMgaW5wdXQgaGFuZGxpbmcgKG9uIGNsaWNrIG9mIHByb2JsZW0gdHlwZSwgbG9hZCBzdWJ0eXBlcylcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50eXBlLWNvbHVtbiBsaScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIE9ubHkgbG9hZCBzdWJ0eXBlcyBpZiB0eXBlIGhhcyBjaGlsZHJlblxuXHRcdC8vIChkb3VibGUgbmVnYXRpdmUsIOKAmG5vdCBjbGFzcyBuby1jaGlsZHJlbuKAmSlcblx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ25vLWNoaWxkcmVuJykpIHtcblx0XHRcdHN0YWZmUHJvYmxlbVR5cGVQYWdlLmxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMoXG5cdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcudHlwZS1jb2x1bW5zJyksICQodGhpcyksIHBhcnNlSW50KCQodGhpcykuZGF0YSgnZXhwZXJ0aXNlVHlwZUlkJykpKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIE9uIGVkaXRpbmcgcHJvYmxlbSB0eXBlcywgZWFjaCBwcm9ibGVtIHR5cGUgaGFzIGEgY2hlY2tib3hcblx0Ly8gdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3BlY2lhbGlzbSBhcHBsaWVzIHRvIHRoZSB1c2VyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvYmxlbS10eXBlLXBpY2tlcjpub3QoLnJlYWRvbmx5KSAudHlwZS1jb2x1bW4gbGkgLnNwZWNpYWxpc20tY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcblx0XHRzdGFmZlByb2JsZW1UeXBlUGFnZS50b2dnbGVTcGVjaWFsaXNtKCQodGhpcykpO1xuXHR9KTtcblxuXHQvLyBTdGFmZiBmaWx0ZXIgaGFuZGxpbmcgKGZvciBjbGlja2luZyBvbiBuYXZpZ2F0aW9uIGUuZy5cblx0Ly8gXCJhbmFseXN0c1wiIHNob3dzIG9ubHkgdXNlcnMgb2YgdGhhdCB0eXBlKVxuXHQkKHN0YWZmUGFnZS5uYXZTZWxlY3RvcikuZmluZChcIltkYXRhLXNsdWddXCIpLmNsaWNrKGVsID0+IHtcblx0XHQvLyBDbGVhciBhbnkgaW4tcHJvZ3Jlc3Mgc2VhcmNoIHRvIHJlc2V0IHRoZSBtYWluIGxpc3Qgb2Ygc3RhZmZcblx0XHRpZiAoJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgpICE9PSAnJykge1xuXHRcdFx0JCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJykua2V5dXAoKTtcblx0XHR9XG5cblx0XHQvLyBUb2dnbGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBuZXdseSBzZWxlY3RlZCB0eXBlXG5cdFx0JChlbC5kZWxlZ2F0ZVRhcmdldCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuXHRcdC8vIE9idGFpbiBkYXRhIG5lY2Vzc2FyeSBmb3IgZmlsdGVyaW5nXG5cdFx0Ly8gLSBzbHVnIG9mIHRoZSB0eXBlIG9mIGVtcGxveWVlIHRvIGZpbHRlclxuXHRcdGxldCBzbHVnID0gZWwuZGVsZWdhdGVUYXJnZXQuZGF0YXNldC5zbHVnO1xuXHRcdC8vIC0gdGFibGUgdG8gcGVyZm9ybSB0aGUgZmlsdGVyaW5nIG9uXG5cdFx0bGV0ICR0YWJsZSA9ICQoc3RhZmZQYWdlLnNlY3Rpb25TZWxlY3RvcikuZmluZChcInRhYmxlXCIpO1xuXHRcdC8vIC0gaW5kZXggb2YgY29sdW1uIHRvIGJlIGZpbHRlcmVkLCBnaXZlbiB0aGUgc2x1Z1xuXHRcdC8vICAgKHVzZXMgLmZpbHRlciBvdmVyIHRoZSB0YWJsZSBoZWFkZXIgY29tcGFyaW5nIHNsdWcpXG5cdFx0bGV0IGNvbHVtbkluZGV4ID0gJHRhYmxlLmZpbmQoXCJ0aGVhZCB0aFwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnNsdWcgPT09IHNsdWcpLmZpcnN0KCkuaW5kZXgoKTtcblxuXHRcdC8vIFBlcmZvcm0gdGhlIGZpbHRlcmluZ1xuXHRcdCR0YWJsZS5maW5kKFwidGJvZHkgdHJcIikuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdGxldCAkdHIgPSAkKGVsKTtcblx0XHRcdGxldCAkdGQgPSAkdHIuY2hpbGRyZW4oKS5lcShjb2x1bW5JbmRleCk7XG5cdFx0XHQkdHIudG9nZ2xlQ2xhc3MoXCJyb3ctaGlkZGVuXCIsICR0ZC5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCk7XG5cdFx0fSk7XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHNwbGFzaCBzY3JlZW4gaW4gY2FzZSB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuXHRcdC8vIHNvIHRoaXMgbWV0aG9kIHdpbGwgZGV0ZWN0IHRoaXMgYW5kIGRpc3BsYXkgdGhlIOKAmG5vIHJlc3VsdHPigJkgc3BsYXNoXG5cdFx0Ly8gQWxzbyBzZXRzIHRvcCBiYXIgdGl0bGUgd2l0aCB0aGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHNcblx0XHQvLyBTZWUgbWV0aG9kIGZvciBtb3JlIGRldGFpbHMgb24gYWN0aW9ucyBwZXJmb3JtZWRcblx0XHRzdGFmZlBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cdH0pO1xuXG5cdC8vIERpc3BsYXkgc3RhZmYgZGV0YWlscyB3aGVuIGNsaWNraW5nIG9uIHN0YWZmIHJvdyBpbiBtYWluIHRhYmxlXG5cdCQoc3RhZmZQYWdlLnRhYmxlU2VsZWN0b3IpLm9uKFwiY2xpY2tcIiwgXCJ0Ym9keSB0clwiLCBlID0+IHtcblx0XHRzdGFmZlBhZ2Uuc2hvd1RhYmxlUm93RGV0YWlscyhwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3dpZCkpO1xuXHR9KTtcblxuXHQvLyBQZXJmb3JtIHNlYXJjaCB3aGVuIHNlYXJjaCBmaWVsZCBoYXMgdmFsdWUgKG9uIGVhY2ggY2hhcmFjdGVyIGlucHV0KVxuXHQkKCcuc2VhcmNoLWZpZWxkIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0c3RhZmZQYWdlLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcblx0fSk7XG5cblx0Ly8gS2V5Ym9hcmQgc2hvcnRjdXRzXG5cdCQoZG9jdW1lbnQpLmtleXVwKGUgPT4ge1xuXHRcdC8vIElnbm9yZSBpZiBpbiBpbnB1dFxuXHRcdGlmIChbXCJpbnB1dFwiLCBcInRleHRhcmVhXCJdLmluY2x1ZGVzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LXZpZXdcIikpIHtcblx0XHRcdHZhciBwYWdlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC12aWV3XCIpLmRhdGFzZXQucGFnZTtcblx0XHR9XG5cdFx0aWYgKCFwYWdlbmFtZSkgcmV0dXJuOyAvLyBpZ25vcmUgcGFnZXMgd2l0aG91dCBuYW1lXG5cdFx0aWYgKHBhZ2VuYW1lLmVuZHNXaXRoKFwic1wiKSkgcGFnZW5hbWUgPSBwYWdlbmFtZS5zbGljZSgwLCAtMSk7XG5cdFx0bGV0IHBhZ2UgPSB3aW5kb3dbcGFnZW5hbWUgKyBcIlBhZ2VcIl07XG5cdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcblx0XHRcdGNhc2UgMzg6IC8vIHVwXG5cdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdGlmIChsb2NhdGlvbi5oYXNoLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhhc2ggPSAwO1xuXHRcdFx0XHRcdGUua2V5Q29kZSA9IDQwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBpZCA9IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKTtcblx0XHRcdFx0aWQgPSBpZCArIChlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxKTsgLy8gdXAgb3IgZG93blxuXHRcdFx0XHRsZXQgJHJvdyA9ICQocGFnZS50YWJsZVNlbGVjdG9yKS5maW5kKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgaWQgKyBcIlxcXCJdXCIpO1xuXHRcdFx0XHQvLyBEb2VzIHJvdyB3aXRoIElEIGV4aXN0XG5cdFx0XHRcdGlmICgkcm93Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXHRcdFx0XHQkKHBhZ2UudGFibGVTZWxlY3RvcikuZmluZChcIltkYXRhLXJvd2lkPVxcXCJcIiArIGlkICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFx0XHRwYWdlLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjc6IC8vIGVzY1xuXHRcdFx0XHRwYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9zdGFmZi5qcyJdLCJzb3VyY2VSb290IjoiIn0=