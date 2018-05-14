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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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
/* 25 */
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

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _SoftwareManager = __webpack_require__(6);

var _SoftwareManager2 = _interopRequireDefault(_SoftwareManager);

var _HardwareManager = __webpack_require__(5);

var _HardwareManager2 = _interopRequireDefault(_HardwareManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _StaffPage = __webpack_require__(23);

var _StaffPage2 = _interopRequireDefault(_StaffPage);

var _Comment = __webpack_require__(8);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TicketPage
 *
 * Manipulates the tickets page /w JQuery using data from
 * the TicketManager. Methods mostly get called from tickets.js
 */
var TicketPage = function (_DynamicPage) {
	_inherits(TicketPage, _DynamicPage);

	function TicketPage() {
		_classCallCheck(this, TicketPage);

		// Managers
		var _this = _possibleConstructorReturn(this, (TicketPage.__proto__ || Object.getPrototypeOf(TicketPage)).call(this));

		_this.ticketManager = new _TicketManager2.default();
		_this.softwareManager = new _SoftwareManager2.default();
		_this.hardwareManager = new _HardwareManager2.default();
		_this.staffManager = new _StaffManager2.default();

		_this.currentTicket = null; // Ticket being shown on the right panel
		return _this;
	}

	/**
  * Retrieves the tickets where their status is in the array of
  * status slugs. Replaces the current list-view with them.
  *
  * @param {Array} Array of strings representing status slugs
  */


	_createClass(TicketPage, [{
		key: "showFilteredTickets",
		value: function showFilteredTickets(statusSlugs) {
			var status = void 0,
			    filteredTickets = void 0,
			    filteredTicket = void 0,
			    i = void 0,
			    j = void 0,
			    splitStatusSlugs = statusSlugs.split(',');

			if (statusSlugs.indexOf('assigned_to') > -1) {
				filteredTickets = this.ticketManager.getMyTickets();
			} else {
				filteredTickets = this.ticketManager.getTicketsWithSlugIn(splitStatusSlugs);
			}

			var $rows = $(this.tableSelector).find('tbody tr');

			if ($rows.length === 0) {
				for (j = 0; j < filteredTickets.length; j++) {
					filteredTicket = filteredTickets[j];
					status = filteredTicket.status;

					this.appendTableRow({
						id: filteredTicket.id,
						title: filteredTicket.title,
						status_name: '<span class="filter filter-' + status.slug.split('_')[0] + '" data-slug="' + status.slug + '">' + status.name + '</span>',
						created_at: filteredTicket.created_at,
						updated_at: filteredTicket.updated_at
					});
				}
			}

			$rows.each(function () {
				if (splitStatusSlugs.indexOf($(this).find('td span.filter').data('slug')) === -1) {
					$(this).addClass('row-hidden');
				} else {
					$(this).removeClass('row-hidden');
				}
			});

			this.updateSplashScreen();

			this.currentTicket = null;
		}

		/**
   * Presents a Ticket in the right panel (ticket view).
   * 
   * Populates elements on the ticket view, including external
   * items such as:
   *     - Devices
   *     - Programs
   *     - Calls
   *     - Comments
   *
   * @param {Integer} ticketId representing Ticket.id
   */

	}, {
		key: "showTicketView",
		value: function showTicketView(ticketId) {
			var _this2 = this;

			if (ticketId !== null) {
				// null when no currentTicket has been opened yet, but user is changing the category
				var ticket = this.ticketManager.getTicket(ticketId),
				    ticketStatus = ticket.status;

				this.currentTicket = ticket;

				this.updateSingleViewNavbar(ticket.title + '<span class="filter filter-' + ticketStatus.slug.split('_')[0] + '">' + ticketStatus.name + '</span>');

				$('#ticket-view #ticket-overview').text('#' + ticket.id + ' | ' + ticket.created_at + ' | ' + this.ticketManager.getTicketAssignedTo(ticket).name);
				$('#ticket-view #ticket-description p').text(ticket.description);

				var $ticketComments = $('#ticket-comments'),
				    $ticketHardwareSoftware = $('#ticket-view #hardware-software-table'),
				    $ticketNoHardwareSoftware = $('#ticket-view #no-hardware-software'),
				    $ticketCallHistoryBody = $('#ticket-view #call-history-table tbody').empty();

				$ticketComments.text('Loading comments…').show();
				$ticketHardwareSoftware.hide();
				$ticketNoHardwareSoftware.hide();

				// Show basic info whilst other data is being loaded asynchronously
				this.showTableRowDetails(ticket.id);

				// Affected items (devices and programs)
				_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
					var devices, programs, affectedItems, $ticketHardwareSoftwareBody, i, affectedItem, type;
					return _regenerator2.default.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									devices = ticket.devices, programs = ticket.programs, affectedItems = devices.concat(programs);


									if (affectedItems.length === 0) {
										// hide the HW/SW table if there's no affected items
										$ticketHardwareSoftware.hide();
										$ticketNoHardwareSoftware.show();
									} else {
										$ticketHardwareSoftwareBody = $ticketHardwareSoftware.find('tbody');


										$ticketHardwareSoftwareBody.empty();

										for (i = 0; i < affectedItems.length; i++) {
											affectedItem = affectedItems[i];

											// get type of affectedItem to display in ticket-view table

											if (affectedItem.hasOwnProperty('serial_no')) {
												type = 'Hardware';
											} else if (affectedItem.operating_system) {
												type = 'OS';
											} else {
												type = 'Software';
											}

											$ticketHardwareSoftwareBody.append('<tr data-rowid="' + affectedItem.id + '" data-rowtype="' + (affectedItem.hasOwnProperty('serial_no') ? 'hardware' : 'software') + '">' + '<td class="truncate">' + (affectedItem.type || affectedItem.name) + '</td>' + '<td class="truncate">' + (affectedItem.serial_no || '—') + '</td>' + '<td class="truncate">' + type + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');
										}
										$ticketHardwareSoftware.show();
										$ticketNoHardwareSoftware.hide();
									}

								case 2:
								case "end":
									return _context.stop();
							}
						}
					}, _callee, _this2);
				}))();

				// Calls
				_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
					var calls, i, call, caller;
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									calls = ticket.calls;


									for (i = 0; i < calls.length; i++) {
										call = calls[i], caller = call.caller;


										$ticketCallHistoryBody.append('<tr data-rowid="' + call.id + '">' + '<td>' + call.id + '</td>' + '<td>' + caller.name + '</td>' + '<td>' + call.time + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');
									}

								case 2:
								case "end":
									return _context2.stop();
							}
						}
					}, _callee2, _this2);
				}))();

				// Comments
				_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
					var comments, me, ticketStatuses, ticketFeed, $ticketFeed, i, post, status, staff;
					return _regenerator2.default.wrap(function _callee3$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
									comments = ticket.comments, me = _this2.staffManager.currentUser(true);


									if (comments.length === 0) {
										$ticketComments.text('No comments have been left yet!');
									} else {
										$ticketComments.text('Loading comments…');

										ticketStatuses = ticketPage.ticketManager.getTicketStatusesByTicketId(ticket.id), ticketFeed = comments.concat(ticketStatuses), $ticketFeed = $('<div>');

										// Sort the feed by date

										ticketFeed.sort(function (a, b) {
											return Date.parse(a.created_at_real) - Date.parse(b.created_at_real);
										});

										for (i in ticketFeed) {
											post = ticketFeed[i];


											if (post instanceof _Comment2.default) {
												// Comment
												if (post.id !== ticket._solution) {
													// this comment is not a solution
													$ticketFeed.append(_this2.getComment(post, me)).find('.media-side i');
												} else {
													$ticketFeed.prepend(_this2.getComment(post, me, true)).find('.media-side i');
												}
											} else {
												// Ticket Status Change (TicketStatus/StatusHistory)
												status = post.status, staff = post.staff;


												$ticketFeed.append('<li class="ticket-event">' + '<i class="fa fa-ticket"></i>' + ' Status Changed by ' + staff.name + ': ' + '<span class="ticket-event-details">' + status.name.split(' ')[0] + '</span>' + '<span class="ticket-event-date">' + post.created_at + '</span>' + '</li>');
											}
										}

										// Fade out loading text, insert ticketFeed
										$ticketComments.fadeOut(250, function () {
											$(this).html($ticketFeed.unwrap());
											$(this).show();
										});
									}

								case 2:
								case "end":
									return _context3.stop();
							}
						}
					}, _callee3, _this2);
				}))();
			}
		}

		/**
   * Gets the HTML for a comment, which may look different
   * if it's a solution.
   *
   * @param {Comment} comment
   * @param {Employee} me instance of the currently logged in user
   * @return {String} the comment
   */

	}, {
		key: "getComment",
		value: function getComment(post, me) {
			var isSolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var author = post.author,
			    comment = '<li class="media ' + (isSolution ? 'solution' : '') + '" data-comment-id="' + post.id + '">' + '<div class="media-side">' + '<a href="' + (author.id === me.id ? '/settings' : '/staff#' + author.id) + '">' + '<img src="https://placehold.it/275x275" alt="' + author.name + '\'s Profile Picture">' + '</a>' + '<i class="fa fa-check"></i>' + '</div>' + '<div class="media-body">' + '<h5 class="mt-0 mb-1">' + '<a href="/staff#' + author.id + '">' + author.name + '</a>' + (isSolution ? ' <span class="filter filter-resolved">Solution</span>' : '') + (post._call !== null ? ' <span class="filter filter-new note-about-call" data-call-id="' + post._call + '">Note about a call</span>' : '') + '<span class="ticket-comment-date">' + post.created_at + '</span>' + '</h5>' + '<div class="breaker"></div>' + post.content + '</div>' + '</li>';

			return comment;
		}

		/**
   * When clicking on a Ticket entry in Call Details,
   * Hide the modal and show that ticket.
   *
   * @param {Integer} ticketId representing Ticket.id
   */

	}, {
		key: "showCallTicket",
		value: function showCallTicket(ticketId) {
			$('#view-call-history-modal').modal('hide');

			var ticket = this.ticketManager.getTicket(ticketId);

			this.refreshPage(ticket.status.slug, ticketId);
		}

		/**
   * Populate the View Call modal by loading in
   * the call details and its tickets.
   *
   * @param {Integer} callId representing Call.id
   */

	}, {
		key: "showCallTicketsModal",
		value: function showCallTicketsModal(callId) {
			var _this3 = this;

			var call = this.ticketManager.getCall(callId),
			    $callHistory = $('#view-call-history-modal'),
			    $callTicketTable = $callHistory.find('#call-tickets-table tbody');

			$callHistory.find('#call-id').text(call.id);
			$callHistory.find('#call-caller').text(call.caller.name);
			$callHistory.find('#call-operator').text(call.operator.name);
			$callHistory.find('#call-date').text(call.time);

			// Show modal with call data
			$callTicketTable.empty();
			$callHistory.modal('show');

			// Load tickets related to call
			call.tickets.forEach(function () {
				var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ticket) {
					return _regenerator2.default.wrap(function _callee4$(_context4) {
						while (1) {
							switch (_context4.prev = _context4.next) {
								case 0:
									// Add each related ticket to call modal
									$callTicketTable.append('<tr data-rowid="' + ticket.id + '" ' + (ticket.id === _this3.currentTicket.id ? 'class="highlight"' : '') + '>' + '<td>' + ticket.id + '</td>' + '<td>' + ticket.title + '</td>' + '<td>' + '<span class="filter filter-' + ticket.status.slug.split('_')[0] + '">' + ticket.status.name + '</span>' + '</td>' + '<td>' + ticket.created_at + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');

								case 1:
								case "end":
									return _context4.stop();
							}
						}
					}, _callee4, _this3);
				}));

				return function (_x2) {
					return _ref4.apply(this, arguments);
				};
			}());

			$callHistory.find('#no-call-notes').hide();
			$callHistory.find('#call-notes').hide();

			var callComment = this.ticketManager.getCallNotesByCallId(call.id);

			if (callComment !== null) {
				$callHistory.find('#call-notes').text(callComment.content);
				$callHistory.find('#call-notes').show();
			} else {
				$callHistory.find('#no-call-notes').show();
			}
		}

		/**
   * Change the active status in the side nav bar.
   * Reload the tickets with the new status, and show the
   * ticket view again.
   *
   * @param {String} statusSlug representing Status.slug
   * @param {Integer} ticketId (nullable) representing Ticket.id
   */

	}, {
		key: "refreshPage",
		value: function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(statusSlug) {
				var ticketId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								$('.side-nav-bar-nested ul li.active').removeClass('active');
								$('.side-nav-bar-nested ul li[data-slug="' + statusSlug + '"]').addClass('active');

								this.showFilteredTickets(statusSlug);
								this.showTicketView(ticketId);

							case 4:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function refreshPage(_x4) {
				return _ref5.apply(this, arguments);
			}

			return refreshPage;
		}()

		/**
   * Fill an employees details into a Staff Information
   * DOM element. Load in relevant employee permissions too.
   *
   * @param {DOM Element} $staffInformation
   * @param {Integer} employeeId representing Employee.id (employee used for viewing)
   */

	}, {
		key: "showStaffInformation",
		value: function () {
			var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6($staffInformation, employeeId) {
				var employee;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								employee = this.staffManager.get(employeeId);


								$staffInformation.html('<p>ID Number: <strong>' + employee.id + '</strong></p>' + '<p>Name: <strong>' + employee.name + '</strong></p>' + '<p>Job: <strong>' + employee.job + '</strong></p>' + '<p>Department: <strong>' + employee.department + '</strong></p>' + '<p>Phone: <strong>' + employee.phone + '</strong></p>' + '<p><strong></strong></p>');

								_StaffPage2.default.showPermissions($staffInformation.find('p:last-child strong').get(0), employee);

							case 3:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function showStaffInformation(_x5, _x6) {
				return _ref6.apply(this, arguments);
			}

			return showStaffInformation;
		}()

		/**
   * Determine if a Ticket is assigned to:
   *     - (self)       The currently logged in user
   *     - (operator)   Another helpdesk operator
   *     - (specialist) Specialist of ExpertiseType (found through ExpertiseTypeStaff on Ticket)
   *
   * @param {Ticket} ticket 
   * @return {String} the ticket's assigned to type
   */

	}, {
		key: "getAssignedToType",
		value: function getAssignedToType(ticket) {
			if (this.ticketManager.getTicketAssignedTo(ticket).id === this.staffManager.currentUser()) {
				// if ticket._assigned_to_operator === self
				return 'self';
			} else if (ticket._assigned_to_operator !== null) {
				// If assigned_to_operator !== null, use that instead of specialist
				return 'operator';
			}

			return 'specialist';
		}

		/**
   * Determine the best specialist for the ExpertiseType based on
   * how busy they are compared to other specialists.
   *
   * Updated when a user clicks through problem types,
   * updates in the relevant showcase fields
   *
   * @param {Integer} expertiseTypeId ExpertiseType.id 
   * @param {DOM Element} $assignedToOptions "Assign to x" radio fields in accordion cards
   * @param {Employee} bestSpecialist (nullable) Manually assign employee if they have that specialism
   * @return {ExpertiseTypeStaff} ExpertiseTypeStaff record, containing link to ExpertiseType and Staff tables
   */

	}, {
		key: "setSpecialist",
		value: function setSpecialist(expertiseTypeId, $assignedToOptions) {
			var bestSpecialist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			if (bestSpecialist === null || !this.staffManager.hasSpecialism(bestSpecialist, expertiseTypeId)) {
				var bestExpertiseTypeStaff = staffProblemTypePage.getBestExpertiseTypeStaffByExpertiseTypeId(expertiseTypeId);

				bestSpecialist = bestExpertiseTypeStaff !== null ? bestExpertiseTypeStaff.staff : null; // null if no specialists found in parents
			}

			var $specialistId = $assignedToOptions.find('input[name*="specialist"]'),
			    $specialistShowcase = $assignedToOptions.find('input[name*="specialist_showcase"]');

			if (bestSpecialist !== null) {
				$specialistId.val(bestSpecialist.id);
				$specialistShowcase.val(bestSpecialist.name);
			} else {
				$specialistId.val('');
				$specialistShowcase.val('No Specialist for the Problem Type');
			}

			return bestExpertiseTypeStaff;
		}

		/**
   * Search through all tickets based on
   *     - id
   *     - title
   *
   * Show the results in the list-view
   *
   * @param {String} query Query potentially contained in id/title
   */

	}, {
		key: "search",
		value: function search(query) {
			if (query.length >= 2 || query.length > 0 && query == parseInt(query)) {
				var searchKeys = ['id', 'title'],
				    tickets = this.ticketManager.search(query, searchKeys);

				_get(TicketPage.prototype.__proto__ || Object.getPrototypeOf(TicketPage.prototype), "search", this).call(this, query, tickets, function () {
					var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(ticket) {
						var ticketStatus;
						return _regenerator2.default.wrap(function _callee7$(_context7) {
							while (1) {
								switch (_context7.prev = _context7.next) {
									case 0:
										ticketStatus = ticket.status;
										return _context7.abrupt("return", {
											id: ticket.id,
											title: ticket.title,
											status_name: '<span class="filter filter-' + ticketStatus.slug.split('_')[0] + '">' + ticketStatus.name + '</span>',
											created_at: ticket.created_at,
											updated_at: ticket.updated_at
										});

									case 2:
									case "end":
										return _context7.stop();
								}
							}
						}, _callee7, this);
					}));

					return function (_x8) {
						return _ref7.apply(this, arguments);
					};
				}(), searchKeys);
			} else {
				this.showFilteredTickets($('.side-nav-bar-nested li.active').data('slug'));
			}
		}
	}]);

	return TicketPage;
}(_DynamicPage3.default);

exports.default = TicketPage;

/***/ }),
/* 26 */
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

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

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
 * ExpertiseTypePage
 *
 * Manipulates the problems page with jQuery using data from
 * the ExpertiseTypeManager.
 */
var ExpertiseTypePage = function (_DynamicPage) {
	_inherits(ExpertiseTypePage, _DynamicPage);

	function ExpertiseTypePage() {
		var isPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		_classCallCheck(this, ExpertiseTypePage);

		// Managers
		var _this = _possibleConstructorReturn(this, (ExpertiseTypePage.__proto__ || Object.getPrototypeOf(ExpertiseTypePage)).call(this));

		_this.expertiseTypeManager = new _ExpertiseTypeManager2.default();
		_this.staffManager = new _StaffManager2.default();
		_this.ticketManager = new _TicketManager2.default();

		// True: http://x/problem-type, False: Problem picker appears in a modal etc.
		_this.isPage = isPage;
		return _this;
	}

	_createClass(ExpertiseTypePage, [{
		key: "loadSubExpertiseTypes",
		value: function loadSubExpertiseTypes($typeColumns) {
			var $li = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var expertiseTypeId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var expertiseType = null;

			if ($li) {
				// li of current ExpertiseType
				expertiseType = this.expertiseTypeManager.getExpertiseType(expertiseTypeId);
				this.loadExpertiseTypeInfo(expertiseType);

				$li.closest('.form-group').find('span.subtle').text(this.getExpertiseTypeBreadcrum(expertiseType));

				$li.parent().nextAll().remove();
				$li.parent().find('li.active').removeClass('active');
				$li.parent().parent().find('li.last-active').removeClass('last-active');
				$li.addClass('active last-active');
			}

			var children = [],
			    $typeColumn = $('<div class="type-column"></div>');

			if (expertiseTypeId === null) {
				children = this.expertiseTypeManager.getRootExpertiseTypes();
			} else {
				if ($li) {
					children = this.expertiseTypeManager.getExpertiseTypes(expertiseType._children);
				} else {
					var childrenIds = this.expertiseTypeManager.getExpertiseType(expertiseTypeId)._children;
					children = this.expertiseTypeManager.getExpertiseTypes(childrenIds);
				}
			}

			var specialists = this.staffManager.getSpecialists(children.map(function (child) {
				return child.id;
			}));

			children.forEach(function (child, i) {
				$typeColumn.append('<li ' + (child._children.length === 0 ? 'class="no-children"' : '') + ' data-expertise-type-id="' + child.id + '">' + child.name + '<div class="specialist-counter">' + (specialists[i].length > 0 ? specialists[i].length + ' <i class="fa fa-user"></i>' : '<i class="fa fa-user-times"></i>') + '</div>' + '<i class="fa fa-caret-right"></i>' + '</li>');
			});

			// Append the new .type-column, scroll to the right to view it
			$typeColumns.append($typeColumn);
			$typeColumns.scrollLeft($typeColumns.width());
		}
	}, {
		key: "loadExpertiseType",
		value: function loadExpertiseType($typeColumns, expertiseTypeId) {
			var expertiseType = this.expertiseTypeManager.getExpertiseType(expertiseTypeId),
			    expertiseTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

			$typeColumns.empty();

			this.loadSubExpertiseTypes($typeColumns);

			for (var i = expertiseTypeChain.length - 2; i >= -1; i--) {
				problemTypePage.loadSubExpertiseTypes($typeColumns, $typeColumns.find('.type-column li[data-expertise-type-id="' + expertiseTypeChain[i + 1].id + '"]'), expertiseTypeChain[i + 1].id);
			}
		}

		/**
   * On /problem-types, populate the information in the details
   * panel on the right with data from a given ExpertiseType
   *
   * @param {ExpertiseType} expertiseType 
   */

	}, {
		key: "loadExpertiseTypeInfo",
		value: function loadExpertiseTypeInfo(expertiseType) {
			var $singleView = $(this.detailSelector),
			    $navBar = $singleView.find('.top-nav h4'),
			    $splashScreen = $singleView.find('.splash-screen'),
			    $expertiseTypeView = $singleView.find('#problem-type-view'),
			    $expertiseTypeTable = $singleView.find('#problem-types-table tbody'),
			    $specialistsTable = $singleView.find('#specialists-table tbody'),
			    $ticketsTable = $singleView.find('#tickets-table tbody'),
			    $noSpecialistsData = $singleView.find('#no-specialists-data'),
			    $noTicketsData = $singleView.find('#no-tickets-data');

			$splashScreen.addClass('block-hidden');
			$expertiseTypeView.addClass('block-hidden');

			if (this.isPage) {
				$navBar.text(this.getExpertiseTypeBreadcrum(expertiseType));
			}

			$expertiseTypeTable.empty();
			$specialistsTable.empty().parent().hide();
			$ticketsTable.empty().parent().hide();

			var expertiseTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(expertiseType);

			// Should probably move these to DynamicPage
			for (var i = 0; i < expertiseTypeChain.length; i++) {
				var _expertiseType = expertiseTypeChain[i];

				$expertiseTypeTable.prepend('<tr ' + (i === 0 ? 'class="highlight"' : '') + ' data-rowid="' + _expertiseType.id + '">' + '<td>' + _expertiseType.id + '</td>' + '<td>' + _expertiseType.name + '</td>' + '<td>' + (_expertiseType._parent !== null ? expertiseTypeChain[i + 1].name : 'N/A') + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');
			}

			$expertiseTypeView.removeClass('block-hidden');

			var specialists = this.staffManager.getSpecialists(expertiseType.id);

			if (specialists.length > 0) {
				$specialistsTable.parent().show();
				$noSpecialistsData.hide();

				for (var _i = 0; _i < specialists.length; _i++) {
					var specialist = specialists[_i];

					$specialistsTable.append('<tr ' + (specialist.id === this.staffManager.currentUser() ? 'class="highlight"' : '') + ' data-rowid="' + specialist.id + '">' + '<td>' + specialist.id + '</td>' + '<td>' + specialist.name + '</td>' + '<td>' + specialist.job + '</td>' + '<td>' + specialist.phone + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');
				}
			} else {
				$specialistsTable.parent().hide();
				$noSpecialistsData.show();
			}

			// Only get tickets if there is a table to put the results in
			if ($ticketsTable.length > 0) {

				// Get tickets to fill related tickets table in single-view
				var tickets = this.ticketManager.getTicketsByExpertiseTypeId(expertiseType.id);

				// Only fill tickets table if there are any matching tickets
				if (tickets.length > 0) {
					$ticketsTable.parent().show();
					$noTicketsData.hide();

					for (var _i2 = 0; _i2 < tickets.length; _i2++) {
						var ticket = tickets[_i2];

						$ticketsTable.append('<tr data-rowid="' + ticket.id + '">' + '<td>' + ticket.id + '</td>' + '<td class="truncate">' + ticket.title + '</td>' + '<td>' + '<span class="filter">' + ticket.status.name + '</span>' + '</td>' + '<td class="truncate">' + ticket.created_at + '</td>' + '<td>' + '<i class="fa fa-eye"></i>' + '</td>' + '</tr>');
					}
				} else {
					// Otherwise show a message instead of the table
					$ticketsTable.parent().hide();
					$noTicketsData.show();
				}
			}
		}

		/**
   * Display the names of an ExpertiseType, and its parents,
   * in ordered fashion.
   *
   * e.g. "Electronics / Printer / Printer Ink / Cyan Ink"
   *
   * @param {ExpertiseType} 
   * @return {String} Breadcrum of ExpertiseType.name's, from the root to a ExpertiseType 
   */

	}, {
		key: "getExpertiseTypeBreadcrum",
		value: function getExpertiseTypeBreadcrum(expertiseType) {
			var expertiseTypeParent = expertiseType,
			    breadcrum = '';

			while (expertiseTypeParent != null) {
				breadcrum = expertiseTypeParent.name + breadcrum;

				expertiseTypeParent = expertiseTypeParent.parent;

				if (expertiseTypeParent != null) {
					breadcrum = ' / ' + breadcrum;
				}
			}

			return breadcrum;
		}

		/**
   * Display ExpertiseType's as a table if their name
   * contains the query string.
   *
   * @param {String} query To check if in ExpertiseType.name
   */

	}, {
		key: "search",
		value: function search(query) {
			var $expertiseTypePicker = $('.problem-type-picker'),
			    $tableSection = $(this.tableSelector);

			// If search value hasn't changed, ignore
			var prevQuery = $(".main-content-title").val();

			if (query.length > 0 && query === prevQuery.substring(prevQuery.lastIndexOf("‘") + 1, prevQuery.lastIndexOf("’"))) return;

			$(this.sectionSelector).find('.splash-screen').addClass('block-hidden');

			if (query.length >= 2 || query.length > 0 && query == parseInt(query)) {
				$expertiseTypePicker.hide();
				$tableSection.show();

				var searchKeys = ['name'],
				    // only search on this property
				expertiseTypes = this.expertiseTypeManager.search(query, searchKeys);

				_get(ExpertiseTypePage.prototype.__proto__ || Object.getPrototypeOf(ExpertiseTypePage.prototype), "search", this).call(this, query, expertiseTypes, function () {
					var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(expertiseType) {
						return _regenerator2.default.wrap(function _callee$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										return _context.abrupt("return", {
											id: expertiseType.id,
											name: expertiseType.name,
											parent: expertiseType._parent != null ? expertiseType.parent.name : 'n/a'
										});

									case 1:
									case "end":
										return _context.stop();
								}
							}
						}, _callee, this);
					}));

					return function (_x4) {
						return _ref.apply(this, arguments);
					};
				}(), searchKeys);
			} else {
				// Hide table, restore back to normal
				$(this.sectionSelector).find('.top-nav h4').text('Problem Types');
				$expertiseTypePicker.show();
				$tableSection.hide();
			}
		}

		/**
   * Show and highlight a ExpertiseType by ID
   *
   * @param {Integer} id representing ExpertiseType.id
   */

	}, {
		key: "goto",
		value: function goto(id) {
			// Show details
			var type = this.expertiseTypeManager.getExpertiseType(id);

			// Simultaneously (asynchronously)…
			// - load the individual expertise type details
			this.loadExpertiseTypeInfo(type);

			// - load the hierarchy for the expertise type
			var typeChain = this.expertiseTypeManager.getExpertiseTypeChain(type);

			while (typeChain.length > 0) {
				var _type = typeChain.pop(),
				    $type = $("[data-expertise-type-id=\"" + _type.id + "\"]").addClass("active last-active");

				this.loadSubExpertiseTypes($type.parents(".type-columns"), null, _type.id);
			}
		}
	}]);

	return ExpertiseTypePage;
}(_DynamicPage3.default);

exports.default = ExpertiseTypePage;

/***/ }),
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _TicketPage = __webpack_require__(25);

var _TicketPage2 = _interopRequireDefault(_TicketPage);

var _ProblemTypePage = __webpack_require__(26);

var _ProblemTypePage2 = _interopRequireDefault(_ProblemTypePage);

var _StaffProblemTypePage = __webpack_require__(27);

var _StaffProblemTypePage2 = _interopRequireDefault(_StaffProblemTypePage);

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * tickets.js
 *
 * Acts as an access point for
 *    - TicketPage.js
 *    - ProblemTypePage.js
 *    - StaffProblemTypePage.js
 * Through which, you can access the managers.
 *
 * tickets.js contains only initialization methods for the
 * tickets page, and event listeners for elements
 * on the tickets page.
 */

var ticketPage = void 0,
    problemTypePage = void 0,
    staffProblemTypePage = void 0,
    api = void 0;

window.init = function (data) {
	api = window.api = new _API2.default(data);

	ticketPage = window.ticketPage = new _TicketPage2.default();
	problemTypePage = window.problemTypePage = new _ProblemTypePage2.default(true);
	staffProblemTypePage = window.staffProblemTypePage = new _StaffProblemTypePage2.default();

	if (!location.hash) ticketPage.hideTableRowDetails(); // show the table view if there's no hash in the URL

	// Initialization: Show tickets with the statuses "New", "Pending - In Progress" and "Resolved"
	ticketPage.showFilteredTickets('new,pending_in_progress,resolved');

	if (location.hash) ticketPage.showTicketView(parseInt(location.hash.substring(1)));

	//
	// Initialise Event Listeners:
	//

	// Filter the list when clicking on statuses in the left side nav bar
	$('.side-nav-bar-nested ul li[data-slug]').on('click', function () {
		$('.search-field input').val("");
		ticketPage.refreshPage(this.dataset.slug);
	});

	// Show the ticket's details when clicking on one -- disallow clicks on yellow highlighted tickets (the current one)
	$(document).on('click', '#table-section .table tbody tr:not(.highlight)', function () {
		ticketPage.showTicketView(Number(this.dataset.rowid));
	});

	// The close button in the ticket's details
	$('.ticket-close-button').on('click', function () {
		ticketPage.hideTableRowDetails();
	});

	// Open the View Call history for the clicked call
	$(document).on('click', '#ticket-view #call-history-table tbody tr', function () {
		ticketPage.showCallTicketsModal(Number(this.dataset.rowid));
	});

	// Go to the ticket clicked in the View Call History modal
	$(document).on('click', '#view-call-history-modal #call-tickets-table tbody tr:not(.highlight)', function () {
		ticketPage.showCallTicket(Number(this.dataset.rowid));
	});

	// Navigate through the problem type picker, load in the children and get the best specialist for the job
	$(document).on('click', '.problem-type-picker:not(.problem-type-checkboxes) .type-column li', function () {
		var expertiseTypeId = Number($(this).data('expertiseTypeId'));

		problemTypePage.loadSubExpertiseTypes($(this).closest('.type-columns'), $(this), expertiseTypeId);

		var bestExpertiseTypeStaff = ticketPage.setSpecialist(expertiseTypeId, $(this).closest('.card').length > 0 ? $(this).closest('.card').find('.assigned-to-options') : $(this).closest('.modal').find('.assigned-to-options'));

		$(this).closest('.problem-type-picker').siblings('input[name*=expertise_type_staff]').val(bestExpertiseTypeStaff !== null ? bestExpertiseTypeStaff.id : '');
	});

	// When a checkbox for a problem type is clicked, load in the children
	$(document).on('click', '.problem-type-checkboxes .type-column li', function () {
		if (!$(this).hasClass('no-children')) {
			staffProblemTypePage.loadSpecialistProblemTypes($(this).closest('.type-columns'), $(this), Number($(this).data('expertiseTypeId')));
		}
	});

	// Toggle all specialisms for the children of this specialism
	$(document).on('click', '.problem-type-checkboxes:not(.readonly) .type-column li .specialism-checkbox', function () {
		staffProblemTypePage.toggleSpecialism($(this));
	});

	// Trigger a search on TicketPage when the Search field has been typed in
	$('.search-field input').on('keyup', function () {
		ticketPage.search($(this).val());
	});

	// Create a Problem Type based on what the user's typed in, place it in the correct location in .types-column
	$(document).on('click', '.create-problem-type', function () {
		var $parentExpertiseType = $(this).closest('.type-column').prev().find('.active'),
		    parentExpertiseTypeId = Number($parentExpertiseType.data('expertiseTypeId'));

		if ($parentExpertiseType.length === 0) {
			// No parents are found (it's in the first column)
			parentExpertiseTypeId = null;
		}

		problemTypePage.createExpertiseType($(this).parent().siblings('input').val(), parentExpertiseTypeId);
	});

	// Go to the correct hardware or software page, viewing the clicked item
	$("#hardware-software-table").on("click", "tr[data-rowid]", function (e) {
		location.href = location.href.toString().split("#")[0].replace("tickets", e.currentTarget.dataset.rowtype + "#" + e.currentTarget.dataset.rowid); // e.currentTarget.dataset.rowtype returns "hardware" or "software"
	});

	$(document).on('click', '.note-about-call', function () {
		ticketPage.showCallTicketsModal(Number($(this).data('callId')));
	});

	// Keyboard shortcuts
	$(document).keyup(function (e) {
		// Ignore if in input
		if (["input", "textarea"].includes(document.activeElement.nodeName.toLowerCase())) {
			return;
		}

		switch (e.keyCode) {
			case 38: // up
			case 40:
				// down
				var id = 1;
				if (location.hash.length === 0) {
					location.hash = 1;
				} else {
					location.hash = id = parseInt(location.hash.substring(1)) + (e.keyCode === 38 ? -1 : 1); // up or down
				}
				var $row = $(ticketPage.tableSelector).find("[data-rowid=\"" + id + "\"]");
				// Does row with ID exist
				if ($row.length === 0) return;
				$(ticketPage.tableSelector).find("[data-rowid=\"" + id + "\"]").addClass("highlight").siblings().removeClass("highlight");
				ticketPage.showTicketView(id);
				break;
			case 27:
				// esc
				ticketPage.hideTableRowDetails();
				break;
			default:
				break;
		}
	});
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL1Byb2JsZW1UeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmUHJvYmxlbVR5cGVQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy90aWNrZXRzLmpzIl0sIm5hbWVzIjpbIlRpY2tldE1hbmFnZXIiLCJleHBlcnRpc2VUeXBlTWFuYWdlciIsIndpbmRvdyIsIkV4cGVydGlzZVR5cGVNYW5hZ2VyIiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJDYWxsIiwiZSIsInRpY2tldHMiLCJUaWNrZXQiLCJjb21tZW50cyIsIkNvbW1lbnQiLCJzdGF0dXNlcyIsIlN0YXR1cyIsInRpY2tldFN0YXR1c2VzIiwiVGlja2V0U3RhdHVzIiwiY2FsbElkIiwiZmluZCIsImNhbGwiLCJpZCIsInRpY2tldElkIiwiZmlsdGVyIiwiX3RpY2tldHMiLCJpbmRleE9mIiwiY29tbWVudCIsIl9jYWxsIiwic3RhdHVzSWQiLCJzdGF0dXMiLCJzdGF0dXNTbHVnIiwic2x1ZyIsInRpY2tldCIsInRpY2tldElkcyIsInN0YXR1c1NsdWdzIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiX2NhbGxzIiwic3RhZmZJZCIsImV4cGVydGlzZVR5cGVTdGFmZiIsIl9hc3NpZ25lZF90b19vcGVyYXRvciIsIl9leHBlcnRpc2VfdHlwZV9zdGFmZiIsIl9zdGFmZiIsInN0YWZmSWRzIiwicmVzdWx0IiwiZm9yRWFjaCIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCIsInRpY2tldFBhZ2UiLCJzdGFmZk1hbmFnZXIiLCJjdXJyZW50VXNlciIsImFzc2lnbmVkX3RvX29wZXJhdG9yIiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJzdGFmZiIsImdldFRpY2tldEFzc2lnbmVkVG8iLCJ0aWNrZXRTdGF0dXNJZCIsInRpY2tldFN0YXR1cyIsIl90aWNrZXQiLCJjb21tZW50SWQiLCJpZHMiLCJleHBlcnRpc2VUeXBlSWQiLCJleHBlcnRpc2VUeXBlcyIsImdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiY29uY2F0IiwiZ2V0VGlja2V0c1dpdGhJZEluIiwicXVlcnkiLCJwcm9wZXJ0aWVzIiwiTWFuYWdlciIsIlN0YWZmTWFuYWdlciIsIkVtcGxveWVlIiwiZGVwYXJ0bWVudHMiLCJlbXBsb3llZSIsInBlcm1pc3Npb24iLCJ2YWx1ZSIsImFjY2VzcyIsImFzRW1wbG95ZWUiLCJnZXQiLCJleHBlcnRpc2VUeXBlIiwiX3NwZWNpYWxpc21zIiwib3V0cHV0IiwicHVzaCIsIkV4cGVydGlzZVR5cGUiLCJFeHBlcnRpc2VUeXBlU3RhZmYiLCJfcGFyZW50IiwiZXhwZXJ0aXNlVHlwZUlkcyIsIl9leHBlcnRpc2VfdHlwZSIsImV4cGVydGlzZVR5cGVQYXJlbnQiLCJwYXJlbnQiLCJleHBlcnRpc2VUeXBlU3RhZmZJZCIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJEZXZpY2UiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJQcm9ncmFtIiwicHJvZ3JhbSIsIm9uIiwiY3VycmVudFRhcmdldCIsInRvb2x0aXAiLCJkYXRldGltZXBpY2tlciIsIm5ld1ZhbHVlIiwiJG1vZGFsIiwibW9kYWwiLCJhdHRyIiwibm90IiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJjb2xsYXBzZSIsImlzU2hvdyIsInRvZ2dsZSIsInRhcmdldCIsImFkZEl0ZW1Ub1BpY2tlciIsInBpY2tlckVsZW1lbnQiLCJuYW1lIiwidmFsaWRhdGlvblRpbWVvdXQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwidGltZSIsImNhbGxlciIsImNhbGxlcl9pZCIsIm9wZXJhdG9yIiwib3BlcmF0b3JfaWQiLCJfY2FsbGVyIiwiX29wZXJhdG9yIiwiZ2V0VGlja2V0c0Zyb21DYWxsIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJwYXJlbnRfaWQiLCJnZXRFeHBlcnRpc2VUeXBlIiwiX2NoaWxkcmVuIiwic3RhZmZfaWQiLCJleHBlcnRpc2VfdHlwZV9pZCIsImV4cGVydGlzZV90eXBlIiwiZ2V0VGlja2V0c1dpdGhTbHVnIiwic3RhdHVzSGlzdG9yeSIsInN0YXR1c19oaXN0b3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvbHV0aW9uIiwic29sdXRpb25faWQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0X2h1bWFuIiwidXBkYXRlZEF0UmVhbCIsInVwZGF0ZWRfYXQiLCJleHBlcnRpc2VfdHlwZV9zdGFmZl9pZCIsImFzc2lnbmVkVG9PcGVyYXRvcklkIiwiYXNzaWduZWRfdG9fb3BlcmF0b3JfaWQiLCJ1cGRhdGVkX2F0X3JlYWwiLCJnZXRDYWxsc0J5VGlja2V0SWQiLCJnZXRTdGF0dXMiLCJfc3RhdHVzIiwiZ2V0U3RhdHVzSGlzdG9yeSIsIl9zdGF0dXNfaGlzdG9yeSIsImdldERldmljZXMiLCJfZGV2aWNlcyIsImdldFByb2dyYW1zIiwiX3Byb2dyYW1zIiwiZ2V0Q29tbWVudHNCeUlkcyIsIl9jb21tZW50cyIsImdldENvbW1lbnQiLCJfc29sdXRpb24iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmYiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJnZXRUaWNrZXRzQnlUaWNrZXRJRHMiLCJBcnJheSIsIm9wZXJhdGluZ19zeXN0ZW0iLCJleHBpcnlfZGF0ZSIsInN0YXR1c19pZCIsIkFQSSIsInRpY2tldF9zdGF0dXNlcyIsIlN0YWZmUGFnZSIsInRpY2tldE1hbmFnZXIiLCJ0aWNrZXRzQ29sdW1uSW5kZXgiLCJpbmRleCIsInN0YWZmRm9yVGlja2V0cyIsIiR0YWJsZVJvdyIsIiRyb3dzIiwiZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyIsInNob3dOb3RpZmljYXRpb24iLCJ1cGRhdGVTaW5nbGVWaWV3TmF2YmFyIiwiY3VzdG9tc2x1ZyIsInNob3dQZXJtaXNzaW9ucyIsInNyYyIsInN0YWZmUHJvYmxlbVR5cGVQYWdlIiwiY3VycmVudFNwZWNpYWxpc21zIiwibG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcyIsInNlYXJjaCIsImFzc2lnbiIsIm9iaiIsInNob3dTdGFmZiIsImljb25zIiwiZWxJY29uIiwiZWxUZXh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJlbFBlcm1pc3Npb24iLCJUaWNrZXRQYWdlIiwic29mdHdhcmVNYW5hZ2VyIiwiaGFyZHdhcmVNYW5hZ2VyIiwiY3VycmVudFRpY2tldCIsImZpbHRlcmVkVGlja2V0cyIsImZpbHRlcmVkVGlja2V0IiwiaiIsInNwbGl0U3RhdHVzU2x1Z3MiLCJnZXRNeVRpY2tldHMiLCJnZXRUaWNrZXRzV2l0aFNsdWdJbiIsInN0YXR1c19uYW1lIiwiJHRpY2tldENvbW1lbnRzIiwiJHRpY2tldEhhcmR3YXJlU29mdHdhcmUiLCIkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlIiwiJHRpY2tldENhbGxIaXN0b3J5Qm9keSIsInNob3ciLCJoaWRlIiwic2hvd1RhYmxlUm93RGV0YWlscyIsImFmZmVjdGVkSXRlbXMiLCIkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZUJvZHkiLCJhZmZlY3RlZEl0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIm1lIiwiZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkIiwidGlja2V0RmVlZCIsIiR0aWNrZXRGZWVkIiwic29ydCIsImEiLCJiIiwicGFyc2UiLCJwb3N0IiwicHJlcGVuZCIsImlzU29sdXRpb24iLCJyZWZyZXNoUGFnZSIsIiRjYWxsSGlzdG9yeSIsIiRjYWxsVGlja2V0VGFibGUiLCJjYWxsQ29tbWVudCIsImdldENhbGxOb3Rlc0J5Q2FsbElkIiwic2hvd0ZpbHRlcmVkVGlja2V0cyIsInNob3dUaWNrZXRWaWV3IiwiJHN0YWZmSW5mb3JtYXRpb24iLCJlbXBsb3llZUlkIiwiJGFzc2lnbmVkVG9PcHRpb25zIiwiYmVzdFNwZWNpYWxpc3QiLCJoYXNTcGVjaWFsaXNtIiwiYmVzdEV4cGVydGlzZVR5cGVTdGFmZiIsImdldEJlc3RFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsIiRzcGVjaWFsaXN0SWQiLCIkc3BlY2lhbGlzdFNob3djYXNlIiwiRXhwZXJ0aXNlVHlwZVBhZ2UiLCJpc1BhZ2UiLCIkdHlwZUNvbHVtbnMiLCIkbGkiLCJsb2FkRXhwZXJ0aXNlVHlwZUluZm8iLCJnZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtIiwibmV4dEFsbCIsIiR0eXBlQ29sdW1uIiwiZ2V0Um9vdEV4cGVydGlzZVR5cGVzIiwiY2hpbGRyZW5JZHMiLCJzcGVjaWFsaXN0cyIsImdldFNwZWNpYWxpc3RzIiwiY2hpbGQiLCJzY3JvbGxMZWZ0Iiwid2lkdGgiLCJleHBlcnRpc2VUeXBlQ2hhaW4iLCJnZXRFeHBlcnRpc2VUeXBlQ2hhaW4iLCJsb2FkU3ViRXhwZXJ0aXNlVHlwZXMiLCJwcm9ibGVtVHlwZVBhZ2UiLCIkc2luZ2xlVmlldyIsIiRuYXZCYXIiLCIkZXhwZXJ0aXNlVHlwZVZpZXciLCIkZXhwZXJ0aXNlVHlwZVRhYmxlIiwiJHNwZWNpYWxpc3RzVGFibGUiLCIkdGlja2V0c1RhYmxlIiwiJG5vU3BlY2lhbGlzdHNEYXRhIiwiJG5vVGlja2V0c0RhdGEiLCJnZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQiLCJicmVhZGNydW0iLCIkZXhwZXJ0aXNlVHlwZVBpY2tlciIsInByZXZRdWVyeSIsImxhc3RJbmRleE9mIiwidHlwZUNoYWluIiwicG9wIiwiJHR5cGUiLCJwYXJlbnRzIiwiU3RhZmZFeHBlcnRpc2VUeXBlUGFnZSIsIiRzcGVjaWFsaXNtQ2hlY2tib3giLCJjbGlja2VkU3BlY2lhbGlzbUlkIiwiTnVtYmVyIiwiY3VycmVudFNwZWNpYWxpc21zSW5kZXhPZiIsIiRpY29uIiwic2hvdWxkUmVtb3ZlQ2hpbGRTcGVjaWFsaXNtcyIsInRvZ2dsZUNoaWxkcmVuIiwiYmVzdENvdW50Iiwib3BlblRpY2tldHMiLCJhc3NpZ25lZFRvQ291bnQiLCJfYXNzaWduZWRfdG8iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQiLCJpbml0IiwiUHJvYmxlbVR5cGVQYWdlIiwiU3RhZmZQcm9ibGVtVHlwZVBhZ2UiLCJzaG93Q2FsbFRpY2tldHNNb2RhbCIsInNob3dDYWxsVGlja2V0Iiwic2V0U3BlY2lhbGlzdCIsImxvYWRTcGVjaWFsaXN0UHJvYmxlbVR5cGVzIiwidG9nZ2xlU3BlY2lhbGlzbSIsIiRwYXJlbnRFeHBlcnRpc2VUeXBlIiwicHJldiIsInBhcmVudEV4cGVydGlzZVR5cGVJZCIsImNyZWF0ZUV4cGVydGlzZVR5cGUiLCJocmVmIiwidG9TdHJpbmciLCJyb3d0eXBlIiwia2V5dXAiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJrZXlDb2RlIiwiJHJvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QyxRQUFLLEVBQUwsQ0FERCxDQUNVO0FBQ1QsUUFBSyxFQUFMO0FBQVM7QUFDUixRQUFJcGEsS0FBSyxDQUFUO0FBQ0EsUUFBSThHLFNBQVNDLElBQVQsQ0FBYy9GLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0I4RixjQUFTQyxJQUFULEdBQWdCLENBQWhCO0FBQ0EsS0FGRCxNQUVPO0FBQ05ELGNBQVNDLElBQVQsR0FBZ0IvRyxLQUFLNkcsU0FBU0MsU0FBU0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCLENBQXhCLENBQVQsS0FBd0M1SCxFQUFFZ2IsT0FBRixLQUFjLEVBQWQsR0FBbUIsQ0FBQyxDQUFwQixHQUF3QixDQUFoRSxDQUFyQixDQURNLENBQ21GO0FBQ3pGO0FBQ0QsUUFBSUMsT0FBT2xWLEVBQUV2RCxXQUFXa0QsYUFBYixFQUE0QmhGLElBQTVCLENBQWlDLG1CQUFtQkUsRUFBbkIsR0FBd0IsS0FBekQsQ0FBWDtBQUNBO0FBQ0EsUUFBSXFhLEtBQUtyWixNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3ZCbUUsTUFBRXZELFdBQVdrRCxhQUFiLEVBQTRCaEYsSUFBNUIsQ0FBaUMsbUJBQW1CRSxFQUFuQixHQUF3QixLQUF6RCxFQUFnRTJGLFFBQWhFLENBQXlFLFdBQXpFLEVBQXNGNkIsUUFBdEYsR0FBaUc1QixXQUFqRyxDQUE2RyxXQUE3RztBQUNBaEUsZUFBVzJULGNBQVgsQ0FBMEJ2VixFQUExQjtBQUNBO0FBQ0QsUUFBSyxFQUFMO0FBQVM7QUFDUjRCLGVBQVcrRixtQkFBWDtBQUNBO0FBQ0Q7QUFDQztBQW5CRjtBQXFCQSxFQTNCRDtBQTRCQSxDQTFIRCxDIiwiZmlsZSI6Ii9qcy9wYWdlcy90aWNrZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAyYTk2YzY0NjJjNTVlMDRhMjI0IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL0NhbGxcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vU3RhdHVzXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldFwiO1xuaW1wb3J0IFRpY2tldFN0YXR1cyBmcm9tIFwiLi9UaWNrZXRTdGF0dXNcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldE1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhdHVzZXNcbiAqIGFuZCB0aWNrZXRzIGFuZCBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogVGlja2V0TWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSB3aW5kb3cuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgfHwgbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmNhbGxzICAgID0gYXBpLmNhbGxzLm1hcChlID0+IG5ldyBDYWxsKGUpKTtcblx0XHR0aGlzLnRpY2tldHMgID0gYXBpLnRpY2tldHMubWFwKGUgPT4gbmV3IFRpY2tldChlKSk7XG5cdFx0dGhpcy5jb21tZW50cyA9IGFwaS5jb21tZW50cy5tYXAoZSA9PiBuZXcgQ29tbWVudChlKSk7XG5cdFx0dGhpcy5zdGF0dXNlcyA9IGFwaS5zdGF0dXNlcy5tYXAoZSA9PiBuZXcgU3RhdHVzKGUpKTtcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzID0gYXBpLnRpY2tldFN0YXR1c2VzLm1hcChlID0+IG5ldyBUaWNrZXRTdGF0dXMoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q2FsbH0gc2luZ2xlIGluc3RhbmNlIG9mIENhbGwgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmluZChjYWxsID0+IGNhbGwuaWQgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGxzIHJlZmVyZW5jaW5nIGEgc3BlY2lmaWMgdGlja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q2FsbHNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmlsdGVyKGNhbGwgPT4gY2FsbC5fdGlja2V0cy5pbmRleE9mKHRpY2tldElkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG5vdGVzIGZvciBhIGNhbGxcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5fY2FsbCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggSURcblx0ICovXG5cdGdldFN0YXR1cyhzdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5pZCA9PT0gc3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgc2x1Z1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIHN0YXR1c1NsdWdcblx0ICovXG5cdGdldFN0YXR1c0J5U2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXR9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXQgd2l0aCB0aWNrZXRJZFxuXHQgKi9cblx0Z2V0VGlja2V0KHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maW5kKHRpY2tldCA9PiB0aWNrZXQuaWQgPT09IHRpY2tldElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0SWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIG9uZSBvZiBtYW55IGdpdmVuIHN0YXR1c2VzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHN0YXR1c1NsdWdzIEFycmF5IG9mIFN0cmluZ3MncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIG9uZSBvZiBtYW55IGdpdmVuIFN0YXR1cydzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWdJbihzdGF0dXNTbHVncykge1xuXHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRzLnNsaWNlKDApO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHRpY2tldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKHRpY2tldHNbaV0uc3RhdHVzLnNsdWcpID09PSAtMSkgdGlja2V0cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRpY2tldHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldHMgcmVmZXJlbmNlZCBpbiBhIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHJlZmVyZW5jZWQgaW4gYSBDYWxsXG5cdCAqL1xuXHRnZXRUaWNrZXRzRnJvbUNhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5fY2FsbHMuaW5kZXhPZihjYWxsSWQpID4gLTEpO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkIHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKHN0YWZmSWRzKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdFx0dGlja2V0cyAgICAgICAgICAgID0gdGhpcy50aWNrZXRzLFxuXHRcdFx0cmVzdWx0ICAgICAgICAgICAgID0ge307XG5cblx0XHRzdGFmZklkcy5mb3JFYWNoKHN0YWZmSWQgPT4ge1xuXHRcdFx0cmVzdWx0W3N0YWZmSWRdID0gdGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWRcblx0XHRcdFx0XHRcdHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0TXlUaWNrZXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wZXJhdG9yIG9yIHNwZWNpYWxpc3QgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0by5cblx0ICpcblx0ICogSWYgYW4gb3BlcmF0b3IgaXMgbm90IGFzc2lnbmVkLCB0aGVuIHRoZSBFeHBlcnRpc2VUeXBlU3RhZmYgd2lsbFxuXHQgKiBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0VtcGxveWVlfSBFbXBsb3llZSB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkge1xuXHRcdGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSByZXR1cm4gdGlja2V0LmFzc2lnbmVkX3RvX29wZXJhdG9yO1xuXG5cdFx0cmV0dXJuIHRpY2tldC5leHBlcnRpc2VfdHlwZV9zdGFmZi5zdGFmZjsgLy8gb25seSB1c2UgZXhwZXJ0aXNlX3R5cGVfc3RhZmYgaWYgdGhlcmUgaXMgbm8gYXNzaWduZWQgb3BlcmF0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0aWNrZXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cblx0ICogdXNlci5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBJZiBhc3NpZ25lZCB0byBzZWxmXG5cdCAqL1xuXHRpc1RpY2tldEFzc2lnbmVkVG9TZWxmKHRpY2tldCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSA9PT0gdGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKTsgXG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0U3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXRfc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldFN0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldFN0YXR1cyB3aXRoIHRpY2tldFN0YXR1c0lkXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXModGlja2V0U3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maW5kKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuaWQgPT09IHRpY2tldFN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1c2VzIGZvciBhIHRpY2tldFxuXHQgKlxuXHQgKiBAcFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmlsdGVyKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuX3RpY2tldCA9PT0gdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29tbWVudCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNvbW1lbnRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNvbW1lbnQgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjb21tZW50SWRcblx0ICovXG5cdGdldENvbW1lbnQoY29tbWVudElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb21tZW50c1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgQ29tbWVudCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENvbW1lbnRzQnlJZHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gaWRzLmluZGV4T2YoY29tbWVudC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB0aWNrZXRzIGFzc29jaWF0ZWQgd2l0aCBhbiBleHBlcnRpc2UgdHlwZSBzdGFmZlxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSBzdGFmZiB0byBmaW5kIHRpY2tldHMgZm9yXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQWxsIG1hdGNoaW5nIHRpY2tldHNcblx0ICovXG5cdGdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHR0aWNrZXRJZHMgICAgICA9IFtdLmNvbmNhdCguLi5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBlLnRpY2tldHMpKTsgLy8gbW92ZSBhbGwgb2YgZXhwZXJ0aXNlVHlwZXNbaV0udGlja2V0cyBpbnRvIGEgc2luZ2xlIGFycmF5XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGlja2V0cyBvbiBhIHByb3BlcnR5IGZvciBhIHByb3ZpZGVkIHNlYXJjaCBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgc2F0aXNmeWluZyB0aGUgc2VhcmNoIGNvbmRpdGlvblxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnRpY2tldHMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29sbGVjdGlvbiBvZiB0aWNrZXRzIGJ5IHRoZWlyIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBpZHMgVGhlIElEcyBvZiB0aGUgcmVxdWVzdGVkIHRpY2tldHMgXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlUaWNrZXRJRHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IGlkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFbXBsb3llZSBmcm9tIFwiLi9FbXBsb3llZVwiO1xuXG4vKipcbiAqIFN0YWZmTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGFmZlxuICogY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFN0YWZmTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGFmZiAgICAgICA9IGFwaS5zdGFmZi5tYXAoZSA9PiBuZXcgRW1wbG95ZWUoZSkpO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgPSBhcGkuZGVwYXJ0bWVudHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBlbXBsb3llZSB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIGVtcGxveWVlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RW1wbG95ZWV9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maW5kKGVtcGxveWVlID0+IGVtcGxveWVlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGVtcGxveWVlcyB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgb2YgYSBwZXJtaXNzaW9uXG5cdCAqXG5cdCAqIEBwYXJhbSBwZXJtaXNzaW9uIFRoZSBwZXJtaXNzaW9uIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcGVybWlzc2lvbiAodHJ1ZS9mYWxzZSkgZm9yIHdoZXRoZXIgdGhlIHBlcm1pc3Npb24gaXMgZ3JhbnRlZFxuXHQgKi9cblx0Z2V0RW1wbG95ZWVzV2l0aFBlcm1pc3Npb24ocGVybWlzc2lvbiwgdmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maWx0ZXIoZW1wbG95ZWUgPT4gZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dID09IHZhbHVlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqXG5cdCAqIEBwYXJhbSBhc0VtcGxveWVlIG1ldGhvZCByZXR1cm5zIElEIGJ5IGRlZmF1bHQgb3IgRW1wbG95ZWUgaWYgdHJ1dGh5XG5cdCAqL1xuXHRjdXJyZW50VXNlcihhc0VtcGxveWVlID0gZmFsc2UpIHtcblx0XHRsZXQgaWQgPSAxOyAvLyBUT0RPOiBnZXQgdXNlciBmcm9tIFdQXG5cblx0XHQvLyBHZXQgRW1wbG95ZWUgd2l0aCBJRFxuXHRcdGlmIChhc0VtcGxveWVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoaWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNwZWNpYWxpc3RzIHdobyBzcGVjaWFsaXNlIGluIGEgY2VydGFpbiBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGZpbmQgZW1wbG95ZWVzIGZvclxuXHQgKi9cblx0Z2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdGxldCBzdGFmZiAgPSB0aGlzLnN0YWZmLFxuXHRcdCAgICBmaWx0ZXIgPSBpZCA9PiBlbXBsb3llZSA9PiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihpZCkgPiAtMTtcblxuXHRcdGlmICh0eXBlb2YgZXhwZXJ0aXNlVHlwZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0bGV0IG91dHB1dCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpZCBvZiBleHBlcnRpc2VUeXBlKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0YWZmLmZpbHRlcihmaWx0ZXIoaWQpKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdGFmZi5maWx0ZXIoZmlsdGVyKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhc3NlZCBlbXBsb3llZSBoYXMgdGhlIHBhc3NlZCBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBpbnNwZWN0XG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBsb29rIGZvclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZW1wbG95ZWUgaGFzIHRoZSBwcm9ibGVtIHR5cGUgYXMgYSBzcGVjaWFsaXNtXG5cdCAqL1xuXHRoYXNTcGVjaWFsaXNtKGVtcGxveWVlLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoZXhwZXJ0aXNlVHlwZUlkKSA+IC0xO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBhbGwgZW1wbG95ZWVzIGZvciB0aGUgZ2l2ZW4gcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJucyBBbGwgbWF0Y2hpbmcgcmVzdWx0cyB0byB0aGUgcXVlcnlcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5zdGFmZiwgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZSBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZVN0YWZmIGZyb20gXCIuL0V4cGVydGlzZVR5cGVTdGFmZlwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGV4cGVydGlzZSB0eXBlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGFwaS5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZShlKSk7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBhcGkuZXhwZXJ0aXNlVHlwZVN0YWZmLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlU3RhZmYoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhbGwgRXhwZXJ0aXNlVHlwZSdzIHdpdGggbm8gcGFyZW50IChpbiB0aGUgZmlyc3QgY29sdW1uKVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdGdldFJvb3RFeHBlcnRpc2VUeXBlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLl9wYXJlbnQgPT0gbnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maW5kKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5pZCA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgRXhwZXJ0aXNlVHlwZXMgd2l0aCBJRHMgZnJvbSBhbiBBcnJheSBvZiBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gZXhwZXJ0aXNlVHlwZUlkcyBBcnJheSBvZiBJbnRlZ2VycyByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZCdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlcyBzYXRpc2Z5aW5nIHRoZSBjb25kaXRpb25cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGVJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlSWRzLmluZGV4T2YoZXhwZXJ0aXNlVHlwZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maWx0ZXIoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9yZGVyZWQgYXJyYXkgb2YgcGFyZW50cyBvZiBhbiBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gZXhwZXJ0aXNlVHlwZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlIHRvIGZpbmQgcGFyZW50cyBmcm9tXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlIHBhcmVudHMsIGFuZCB0aGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRleHBlcnRpc2VUeXBlcyAgICAgID0gW2V4cGVydGlzZVR5cGVQYXJlbnRdO1xuXG5cdFx0d2hpbGUgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0ZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGVQYXJlbnQucGFyZW50O1xuXG5cdFx0XHRpZiAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGV4cGVydGlzZVR5cGVzLnB1c2goZXhwZXJ0aXNlVHlwZVBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV4cGVydGlzZVR5cGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiByZWNvcmQsIHdpdGggYW4gZXhhY3Rcblx0ICogRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiBhbmQgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSBJRCBwYWlyXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZlxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9IG51bGwsIG9yIHRoZSByZWNvcmQgZGVzaXJlZFxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkKGV4cGVydGlzZVR5cGVJZCwgc3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmID09PSBzdGFmZklkICYmIGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIGJ5IElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLmlkID09PSBleHBlcnRpc2VUeXBlU3RhZmZJZCkgfHwgbnVsbDtcblx0fVxuXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5leHBlcnRpc2VUeXBlcywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXIuanMiLCIvKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBBYnN0cmFjdCBjbGFzcyBleHRlbmRlZCBieSBhbGwgbWFuYWdlcnMsXG4gKiBjb250YWlucyBtZXRob2RzIHRoYXQgbWF5IGJlIHVzZWZ1bCB0byB0aGUgbWFuYWdlcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VhcmNoIGFycmF5IG9mIGVsZW1lbnRzIGZvciBxdWVyeSBpbiBnaXZlbiBwcm9wZXJ0eSBuYW1lc1xuXHQgKiBcblx0ICogQHBhcmFtIGVsZW1lbnRzIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgc2VhcmNoZWQgdGhyb3VnaFxuXHQgKiBAcGFyYW0gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqL1xuXHRzZWFyY2goZWxlbWVudHMgPSBbXSwgcXVlcnkgPSBcIlwiLCBwcm9wZXJ0aWVzID0gW10pIHtcblx0XHRxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7IC8vIE5vcm1hbGlzZSBxdWVyeSAoYW5kIHByb3BlcnRpZXMgaW5kaXZpZHVhbGx5IGxhdGVyKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzLmZpbHRlcihlbCA9PiB7IC8vIEdldCBhbGwgZWxlbWVudHNcblx0XHRcdHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcCA9PiB7IC8vIENoZWNrIHByb3BlcnRpZXMgdW50aWwgbWF0Y2ggaXMgZm91bmRcblx0XHRcdFx0aWYgKFN0cmluZyhlbFtwcm9wXSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHJldHVybiB0cnVlOyAvLyBEZXRlcm1pbmUgaWYgcHJvcGVydHkgaXMgYSBtYXRjaCBmb3IgcXVlcnlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL01hbmFnZXIuanMiLCIvKipcbiAqIER5bmFtaWNQYWdlXG4gKlxuICogRXh0ZW5kZWQgYnkgZXZlcnkgcGFnZSwgZS5nLiBUaWNrZXRQYWdlLlxuICogQ29udGFpbnMgZnVuY3Rpb25zIHRoYXQgYXJlIHJlcGVhdGVkIG9mdGVuIGFtb25nXG4gKiBwYWdlcywgc3VjaCBhcyB1cGRhdGluZyB0YWJsZXMgb3IgdXBkYXRpbmcgdGhlIG5hdmJhclxuICovXG5jbGFzcyBEeW5hbWljUGFnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwYWdlIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3RvcnNcblx0ICogdG8gZGVmaW5lIHRoZSBib3VuZHMgb2YgdGhlIHBhZ2UsIGluIGNhc2VzIHdoZXJlIHRoaXMgRHluYW1pY1BhZ2Vcblx0ICogaXMgbm90IHRoZSBvbmx5IHBhZ2Ugb24gdGhlIHNjcmVlbiwgc3VjaCBhcyBpZiBhIHBhZ2UgaXMgYmVpbmdcblx0ICogZGlzcGxheWVkIGluIGEgbW9kYWwuXG5cdCAqXG5cdCAqIE5vdCBwcm92aWRpbmcgYW55IHNlbGVjdG9ycyB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhlXG5cdCAqIG1haW4gc2VsZWN0b3JzIGZvciB0aGUgZW50aXJlIHNjcmVlbiwgc3VjaCB0aGF0XG5cdCAqIHRoaXMgcGFnZSBiZWNvbWVzIHRoZSBtYWluIHBhZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gc2VjdGlvblNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIG1haW4gc2VjdGlvbiBjb250YWluaW5nIHRhYmxlIHZpZXdcblx0ICogQHBhcmFtIHRhYmxlU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0YWJsZSB3aXRoaW4gcHJldmlvdXMgc2VjdGlvblxuXHQgKiBAcGFyYW0gbmF2U2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBuYXZpZ2F0aW9uIGJhciBzaG93biBhdCB0b3Agb2Ygc2VjdGlvblxuXHQgKiBAcGFyYW0gZGV0YWlsU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBzaW5nbGUgdmlldyBkZXRhaWwgc2hvd24gZm9yIGFuIGluZGl2aWR1YWwgcm93XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2VjdGlvblNlbGVjdG9yID0gXCIjbGlzdC12aWV3XCIsXG5cdFx0dGFibGVTZWxlY3RvciA9IFwiI3RhYmxlLXNlY3Rpb25cIixcblx0XHRuYXZTZWxlY3Rvcixcblx0XHRkZXRhaWxTZWxlY3RvclxuXHR9ID0ge30pIHtcblx0XHR0aGlzLnNlY3Rpb25TZWxlY3RvciA9IHNlY3Rpb25TZWxlY3Rvcjtcblx0XHR0aGlzLnRhYmxlU2VsZWN0b3IgPSB0YWJsZVNlbGVjdG9yO1xuXHRcdC8vIFNldCBuYXZpZ2F0aW9uIHNlbGVjdG9yIHRvIGZpcnN0IGNvbXBvbmVudCBvZiBzZWN0aW9uIHNlbGVjdG9yIHdpdGgg4oCYLW5hduKAmSBhcHBlbmRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgQ1NTIHNlbGVjdG9yXG5cdFx0dGhpcy5uYXZTZWxlY3RvciA9IG5hdlNlbGVjdG9yID8gbmF2U2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1uYXZcIiA6IFwiLnNpZGUtbmF2LWJhci1uZXN0ZWRcIik7XG5cdFx0dGhpcy5kZXRhaWxTZWxlY3RvciA9IGRldGFpbFNlbGVjdG9yID8gZGV0YWlsU2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1kZXRhaWxcIiA6IFwiI3NpbmdsZS12aWV3XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGl0bGUgYmFyIG9mIHRoZSBzaW5nbGUgdmlldyB0byB0aGUgZ2l2ZW4gc3RyaW5nXG5cdCAqIENBVVRJT046IERvZXMgbm90IHBlcmZvcm0gZXNjYXBpbmcgb2YgaW5wdXQgc3RyaW5nLCBkbyBub3QgcGFzc1xuXHQgKiB1c2VyIGNvbnRlbnQgdG8gdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSBodG1sIEhUTUwgdG8gc2V0IHRoZSBzaW5nbGUgdmlldyB0aXRsZSB0b1xuXHQgKi9cblx0dXBkYXRlU2luZ2xlVmlld05hdmJhcihodG1sKSB7XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKCcudG9wLW5hdiBoNCcpLmh0bWwoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIFwiTG9hZGluZ+KAplwiIHNwbGFzaCBzY3JlZW4gaWYgaXQncyBzaG93blxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFwiTm8gUmVzdWx0c+KAplwiIHNwbGFzaCBzY3JlZW5cblx0ICogc2hvdWxkIGJlIHNob3duIG9yIG5vdC5cblx0ICpcblx0ICogWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgdXNpbmcgXCJhcHBlbmRUYWJsZVwiXG5cdCAqL1xuXHR1cGRhdGVTcGxhc2hTY3JlZW4obmF2VGV4dCA9IG51bGwpIHtcblx0XHQvLyBHZXQgdGFibGUgZWxlbWVudCB0byBpbnNwZWN0IGNvbnRlbnRzXG5cdFx0dmFyICR0YWJsZSA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHRcdFx0Ly8gR2V0IG51bWJlciBvZiByZXN1bHRzIHdpdGhpbiB0YWJsZSBjdXJyZW50bHkgYmVpbmcgc2hvd25cblx0XHRcdFx0Ly8gVGhpcyBpcyBub3QgZXF1YWwgdG8gdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZSBIVE1MXG5cdFx0XHRcdC8vIHNpbmNlIHNvbWUgdGFibGUgcm93cyBtYXkgYmUgaGlkZGVuLCB3aGljaCBuZWVkIHRvIGJlXG5cdFx0XHRcdC8vIGRpc2NvdW50ZWQgZnJvbSB0aGUgdG90YWwgY291bnQuXG5cdFx0ICAgIHJlc3VsdHNDb3VudCA9ICR0YWJsZS5maW5kKCd0Ym9keSB0cicpLmZpbHRlcigoaSwgZWwpID0+ICEkKGVsKS5oYXNDbGFzcyhcInJvdy1oaWRkZW5cIikpLmxlbmd0aCxcblx0XHRcdFx0Ly8gR2V0IHNwbGFzaCBzY3JlZW4gZWxlbWVudCB3aGljaCBtYXkgYmUgYmVpbmcgc2hvd24gaW5zdGVhZCBvZiB0YWJsZVxuXHRcdCAgICAkc3BsYXNoU2NyZWVuID0gJCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnNwbGFzaC1zY3JlZW4nKTtcblxuXHRcdC8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXJlIGFyZSByZXN1bHRzLCB0aGUgc3BsYXNoIHNjcmVlbiBvciB0YWJsZSBuZWVkcyB0byBiZSBzaG93blxuXHRcdC8vIGFuZCB0aGUgb3RoZXIgc3dhcHBlZCBvdXQgdXNpbmcgQ1NTXG5cdFx0dmFyIFskc2hvdywgJGhpZGVdID0gcmVzdWx0c0NvdW50ID8gWyR0YWJsZSwgJHNwbGFzaFNjcmVlbl0gOiBbJHNwbGFzaFNjcmVlbiwgJHRhYmxlXTtcblx0XHQkaGlkZS5hZGRDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblx0XHQkc2hvdy5yZW1vdmVDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblxuXHRcdC8vIFRoZSBtYWluIHRvcCBiYXIgZm9yIHRoZSBsaXN0IHZpZXcgY29udGFpbnMgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBiZWluZyBzaG93biBpbiB0aGUgdGFibGVcblx0XHRpZiAoIW5hdlRleHQpIHtcblx0XHRcdC8vIFNldCBuYXZiYXIgdGV4dCBhcyBudW1iZXIgb2YgaXRlbXMgaW4gdGFibGUgdGhlbiBhcHBlbmQgY3VycmVudGx5IHNlbGVjdGVkIGZpbHRlclxuXHRcdFx0bmF2VGV4dCA9IHJlc3VsdHNDb3VudCArIFwiIFwiICsgJCh0aGlzLm5hdlNlbGVjdG9yKS5maW5kKFwibGkuYWN0aXZlXCIpLmZpcnN0KCkudGV4dCgpLnJlcGxhY2UoXCJBbGwgXCIsIFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIElmIHVuYWJsZSB0byBvYnRhaW4gcm93cyBjb3VudCwgc2hvdyBcIkxvYWRpbmfigKZcIlxuXHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmNsb3Nlc3QoXCJzZWN0aW9uXCIpLmZpbmQoXCIudG9wLW5hdiBoNFwiKS50ZXh0KHJlc3VsdHNDb3VudCAhPT0gdW5kZWZpbmVkID8gbmF2VGV4dCA6IFwiTG9hZGluZ+KAplwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgcm93IGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKiB1c2luZyBkYXRhIGZyb20gXCJvYmplY3RcIi5cblx0ICpcblx0ICogVGhlIHByb3BlcnR5IG5hbWVzIHNob3VsZCBjb3JyZXNwb25kIHdpdGggdGhlIFwic2x1Z1wiXG5cdCAqIGF0dHJpYnV0ZSBpbiB0YWJsZSBoZWFkZXIuXG5cdCAqXG5cdCAqIE5PVEU6IFRoaXMgYXNzdW1lcyB0aGUgb2JqZWN0IGhhcyBhbiBJRCBhdHRyaWJ1dGUuIEluY2x1ZGUgaXRcblx0ICogZXZlbiBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzaG93IGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIGRhdGEgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHRhYmxlXG5cdCAqIHNwbGFzaHNjcmVlbiBvbiB5b3VyIHBhZ2Vcblx0ICovXG5cdGFwcGVuZFRhYmxlUm93KG9iamVjdCkge1xuXHRcdHZhciAkdGFibGVTZWN0aW9uID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdCAgICAkdGFibGVIZWFkICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0aGVhZCB0cicpLFxuXHRcdCAgICAkdGFibGVCb2R5ICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0Ym9keScpLFxuXHRcdCAgICAkbmV3Um93ICAgICAgID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xuXG5cdFx0Ly8gRG9uJ3QgYWRkIHRoZSBzYW1lIHJvdyB0d2ljZVxuXHRcdGlmICgkdGFibGVCb2R5LmNoaWxkcmVuKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgb2JqZWN0LmlkICsgXCJcXFwiXVwiKS5sZW5ndGggPiAwKSByZXR1cm47XG5cblx0XHQvLyBTZXQgSUQgb24gcm93IHRvIHJlZmVyZW5jZSBsYXRlclxuXHRcdCRuZXdSb3dbMF0uZGF0YXNldC5yb3dpZCA9IG9iamVjdC5pZDtcblx0XHQkbmV3Um93LnRvZ2dsZUNsYXNzKFwiaGlnaGxpZ2h0XCIsIG9iamVjdC5pZCA9PSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdFx0JHRhYmxlSGVhZC5jaGlsZHJlbigndGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNsdWcgPSB0aGlzLmRhdGFzZXQuc2x1ZywgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cblx0XHRcdGlmIChzbHVnID09PSAnZXllJykgeyAvLyB0aGUgb24taG92ZXIgZXllIGludmlzaWJsZSByb3dcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPic7XG5cdFx0XHR9IGVsc2UgaWYgKHNsdWcgJiYgc2x1Zy5pbmNsdWRlcyhcImFjY2Vzc1wiKSkge1xuXHRcdFx0XHQvLyBCb29sZWFuIHZhbHVlIHN1cHBvcnRcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSA/IHRoaXMuaW5uZXJIVE1MIDogXCLCt1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSAhPT0gdW5kZWZpbmVkID8gb2JqZWN0W3NsdWddIDogXCLigJRcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0JG5ld1Jvdy5hcHBlbmQodGQpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdCR0YWJsZUJvZHkuYXBwZW5kKCRuZXdSb3cpO1xuXG5cdFx0cmV0dXJuICRuZXdSb3dbMF07XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJzIHRoZSBkYXRhIGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKi9cblx0Y2xlYXJUYWJsZSgpIHtcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2hvdyBkZXRhaWwgcGFnZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSB0YWJsZSByb3cgdG8gYmUgc2hvd24gaW4gdGhlIHNpbmdsZSB2aWV3XG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkID0gbnVsbCkge1xuXHRcdC8vIE5vIG5lZWQgdG8gY2hlY2sgZm9yIG51bGwgYXMgbm8gcm93cyB3aWxsIG1hdGNoIGlmIG5vIElEIHBhc3NlZFxuXHRcdC8vIC5zaWJsaW5ncyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBlbGVtZW50IGl0c2VsZiBzbyBjYW4gYmUgY2hhaW5lZCBhZnRlciBmaW5kaW5nIGhpZ2hsaWdodCByb3cgZmlyc3Rcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQucm93aWQgPT0gaWQpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHRcblx0XHQvLyBObyBuZWVkIHRvIHNldCBzdHlsZSB1c2luZyBKUyBoZXJlLCBDU1MgaGFuZGxlcyBmbGV4XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS51bndyYXAoXCJkaXZcIilcblx0XHRcdC8vIENsb3NlIGJ1dHRvbiBvbiBoaWRlXG5cdFx0XHQuZmluZChcIltkYXRhLWFjdGlvbj1cXFwiY2xvc2VcXFwiXVwiKS5jbGljaygoKSA9PiB0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKSk7XG5cdFx0XG5cdFx0aWYgKGlkID4gLTEpIGxvY2F0aW9uLmhhc2ggPSBwYXJzZUludChpZCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBIaWRlIGRldGFpbCBwYWdlIHNob3duIHdpdGggc2hvd0RldGFpbFxuXHQgKi9cblx0aGlkZVRhYmxlUm93RGV0YWlscygpIHtcblx0XHQvLyBEZXNlbGVjdCBhbGwgcm93c1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0Ly8gRmlsdGVyIHRvIGNoZWNrIGlmIGFscmVhZHkgaGlkZGVuLCBkb24ndCBoaWRlIGFnYWluXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maWx0ZXIoKGksIGVsKSA9PiAkKGVsKS5wYXJlbnQoXCJkaXZcIikubGVuZ3RoID09PSAwKS53cmFwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXHRcdFxuXHRcdGxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYSBzZWxlY3QgZWxlbWVudCB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuXHQgKiBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gYSBkcm9wZG93biBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSAkc2VsZWN0IEEgcmVmZXJlbmNlIHRvIHRoZSBzZWxlY3QgZWxlbWVudCB0byBiZSBmaWxsZWRcblx0ICogQHBhcmFtIGRlZmF1bHRUZXh0IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzZWxlY3QgZWxlbWVudFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgTGlzdCBvZiBlbGVtZW50cyB0byBiZSBhZGRlZCBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb21cblx0ICogQHBhcmFtIGRlZmF1bHRPcHRpb25JZCBJRCBvZiBhIGRlZmF1bHQgb3B0aW9uIGZyb20gdGhlIGVsZW1lbnRzIGdpdmVuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgb2YgdGhlIHNlbGVjdCBmaWVsZCB0byBhY2Nlc3Mgc2VsZWN0ZWQgaXRlbSB3aXRoXG5cdCAqIEBwYXJhbSBnZXRBZGRpdGlvbmFsRGV0YWlscyBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGFkZGl0aW9uYWwgZGV0YWlscyB0byBiZSBzaG93biBmb3IgY3VycmVudCBpdGVtXG5cdCAqL1xuXHRwb3B1bGF0ZVNlbGVjdEZpZWxkKCRzZWxlY3QsIGRlZmF1bHRUZXh0LCBlbGVtZW50cywgZGVmYXVsdE9wdGlvbklkID0gbnVsbCwgcHJvcGVydHkgPSAnbmFtZScsIGdldEFkZGl0aW9uYWxEZXRhaWxzID0gbnVsbCkge1xuXHRcdC8vIERlZmF1bHQgZW1wdHkgY29udGVudCBmb3IgaW5wdXRcblx0XHRsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihkZWZhdWx0VGV4dCwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0b3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHQkc2VsZWN0LmVtcHR5KCkuYXBwZW5kKG9wdGlvbik7XG5cdFx0XG5cdFx0Ly8gRWFjaCBvcHRpb24gdG8gYmUgc2VsZWN0ZWQgZnJvbVxuXHRcdGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XG5cdFx0XHRpZiAoZ2V0QWRkaXRpb25hbERldGFpbHMgIT09IG51bGwpIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZ2V0QWRkaXRpb25hbERldGFpbHMoZSkgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRzZWxlY3Quc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBUaGUgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlYXJjaCB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSBvYmplY3RDYWxsYmFjayBhIGNhbGxiYWNrIHJldHVybmluZyBhbiBvYmplY3QgKHRoZSByb3cgc3RydWN0dXJlKVxuXHQgKiBAcGFyYW0gc2VhcmNoS2V5cyB0aGUgcHJvcGVydGllcyBpbiBvYmplY3RDYWxsYmFjayB0byBoaWdobGlnaHRcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgZWxlbWVudHMgPSBbXSwgb2JqZWN0Q2FsbGJhY2ssIHNlYXJjaEtleXMgPSBbXSkge1xuXHRcdGxldCBwYWdlID0gdGhpcztcblxuXHRcdHBhZ2UuY2xlYXJUYWJsZSgpO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0dmFyIG9iamVjdCA9IG9iamVjdENhbGxiYWNrKGVsKTtcblxuXHRcdFx0XHRzZWFyY2hLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IFN0cmluZyhvYmplY3Rba2V5XSkucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHF1ZXJ5ICsgJyknLCAnaWcnKSwgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHF1ZXJ5ID09PSAkKFwiLnNlYXJjaC1maWVsZCBpbnB1dFwiKS52YWwoKSkge1xuXHRcdFx0XHRcdHBhZ2UuYXBwZW5kVGFibGVSb3cob2JqZWN0KTtcblx0XHRcdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgJHtlbGVtZW50cy5sZW5ndGh9IHJlc3VsdCR7ZWxlbWVudHMubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGBObyByZXN1bHRzIGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgYSBtZXNzYWdlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIG92ZXIgYWxsIGVsZW1lbnRzLlxuXHQgKiBIaWRlIGFmdGVyIDYgc2Vjb25kcywgb3IgY29uZmlndXJhYmxlLlxuXHQgKlxuXHQgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBzdHJpbmcgdG8gYmUgc2hvd24gaW4gdGhlIG1lc3NhZ2UgYm94LlxuXHQgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBtZXNzYWdlLCBzdWNoIGFzIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJcblx0ICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzIGZvciB0aGUgbWVzc2FnZSB0byBiZSBzaG93biBmb3IuXG5cdCAqL1xuXHRzdGF0aWMgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cnJlZFwiLCB0eXBlID0gXCJkYW5nZXJcIiwgZHVyYXRpb24gPSA2KSB7XG5cdFx0Ly8gT25seSBzaG93IG9uZSBtZXNzYWdlIGF0IGEgdGltZVxuXHRcdCQoXCIjYWxlcnQtbm90aWZpY2F0aW9uXCIpLnJlbW92ZSgpO1xuXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRcblx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1zZy5pZCA9IFwiYWxlcnQtbm90aWZpY2F0aW9uXCI7XG5cdFx0bXNnLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiLCBgYWxlcnQtJHt0eXBlfWAsIFwiYWxlcnQtbm90aWZpY2F0aW9uXCIpO1xuXHRcdG1zZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYWxlcnRcIik7IC8vIEFjY2Vzc2liaWxpdHlcblx0XHQvLyBTZXQgY29udGVudCBhbmQgc2hvdyBvbiBzY3JlZW5cblxuXHRcdG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtc2cpO1xuXG5cdFx0Ly8gSGlkZSBhZnRlciBkdXJhdGlvblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gbXNnLnJlbW92ZSgpLCBkdXJhdGlvbiAqIDEwMDApO1xuXG5cdFx0Ly8gQ2xpY2sgdG8gaGlkZSBtZXNzYWdlXG5cdFx0JChtc2cpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vRGV2aWNlXCI7XG5cbi8qKlxuICogSGFyZHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGRldmljZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogSGFyZHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRldmljZXMgPSBhcGkuZGV2aWNlcy5tYXAoZSA9PiBuZXcgRGV2aWNlKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBUeXBlcyBpbiB0YWJsZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZVR5cGVzKCkge1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aGlzLmRldmljZXMubWFwKHQgPT4gdC50eXBlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIE1ha2VzIGZvciBhIHNwZWNpZmllZCBUeXBlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlTWFrZXNPZlR5cGUodHlwZSkge1xuXHRcdGxldCBkZXZpY2VzQnlUeXBlID0gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSk7XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQoZGV2aWNlc0J5VHlwZS5tYXAodCA9PiB0Lm1ha2UpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBkZXZpY2VzIHdpdGggYSBzcGVjaWZpZWQgVHlwZSBhbmQgTWFrZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdGdldERldmljZXNPZlR5cGVBbmRNYWtlKHR5cGUsbWFrZSkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlICYmIGRldmljZS5tYWtlID09IG1ha2UpO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGV2aWNlcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIGRldmljZXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0RGV2aWNlcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gaWRzLmluZGV4T2YoZGV2aWNlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIGRldmljZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIGRldmljZSBcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGRldmljZSA9PiBkZXZpY2UuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGV2aWNlIHdpdGggdGhlIGdpdmVuIHNlcmlhbCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIHNlcmlhbE51bWJlciBUaGUgc2VyaWFsIG51bWJlciBvZiB0aGUgZGV2aWNlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RGV2aWNlfVxuXHQgKi9cblx0Z2V0RGV2aWNlQnlTZXJpYWxOdW1iZXIoc2VyaWFsTnVtYmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGQgPT4gZC5zZXJpYWxfbm8gPT09IHNlcmlhbE51bWJlcik7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi9Qcm9ncmFtXCI7XG5cbi8qKlxuICogU29mdHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIHNvZnR3YXJlIHByb2dyYW1zIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIFNvZnR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvZnR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wcm9ncmFtcyA9IGFwaS5wcm9ncmFtcy5tYXAoZSA9PiBuZXcgUHJvZ3JhbShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJvZ3JhbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBwcm9ncmFtcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXRQcm9ncmFtcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBpZHMuaW5kZXhPZihwcm9ncmFtLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIHByb2dyYW1cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmluZChwcm9ncmFtID0+IHByb2dyYW0uaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCIvLyBTaW5jZSBuYXYgZWxlbWVudCBpcyBwZXJzaXN0ZWQgYmV0d2VlbiBwYWdlcywgd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGFjdGl2ZSBidXR0b25cbiQoXCIjbmF2XCIpLm9uKFwiY2xpY2tcIiwgXCJ1bCBsaSBhXCIsIGUgPT4ge1xuXHQkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUb29sdGlwcyBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggYSByZWxldmFudCB0b29sdGlwIEhUTUwgYXR0cmlidXRlXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4vLyBEYXRlL3RpbWUgcGlja2VyIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCByZWxldmFudCBjbGFzc1xuJCgnLnRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcigpO1xuXG4vLyBDcmVhdGUgbmV3IGVtcGxveWVlIHdoZW4gc2VhcmNoaW5nIGZvciBub24tZXhpc3RlbnQgYXNzaWduZWVcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdsaS5uby1yZXN1bHRzJywgZnVuY3Rpb24oZSkge1xuXHR2YXIgbmV3VmFsdWUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tbWVudS5vcGVuXCIpLmNoaWxkcmVuKFwiLmJzLXNlYXJjaGJveFwiKS5jaGlsZHJlbihcImlucHV0XCIpLnZhbCgpLFxuXHQgICAgJG1vZGFsICAgPSAkKCcjbmV3LXN0YWZmLW1vZGFsJyk7XG5cblx0JG1vZGFsLm1vZGFsKCdzaG93Jyk7XG5cblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJzdGFmZi5uYW1lXCJdJykudmFsKG5ld1ZhbHVlKTtcblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJldmVudF90YXJnZXRcIl0nKS52YWwoJCh0aGlzKS5jbG9zZXN0KCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJ3NlbGVjdCcpLmF0dHIoJ25hbWUnKSk7IC8vIHdoZW4gdGhlIHN0YWZmIG1lbWJlciBpcyBjcmVhdGVkLCB0aGlzIGlzIHRoZSBpbnB1dCBmaWVsZCBpdCdsbCB1cGRhdGVcbn0pO1xuXG4kKCcjbmV3LXN0YWZmLW1vZGFsLCAjbmV3LXRpY2tldC1tb2RhbCwgI2ZvbGxvdy11cC1jYWxsLW1vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cdCQodGhpcykuZmluZCgnaW5wdXQsIHRleHRhcmVhJylcblx0XHQubm90KCcubm8tY2xlYXItb24tc2hvdycpXG5cdFx0LnZhbCgnJyk7XG5cblx0JCh0aGlzKS5maW5kKCcjYWNjb3JkaW9uIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpJykucmVtb3ZlKCk7XG5cblx0dmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHQkKHRoaXMpLmZpbmQoJy50aW1lcGlja2VyJykudmFsKCgnMCcgKyAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLycgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyAnLycgKyBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpICsgJyAnICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5yZW1vdmUtYWNjb3JkaW9uJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0fSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2hpZGUuYnMuY29sbGFwc2Ugc2hvdy5icy5jb2xsYXBzZScsICcjYWNjb3JkaW9uIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcblx0bGV0IGlzU2hvdyA9IGUudHlwZS5zcGxpdChcIi5cIilbMF0gPT09IFwic2hvd1wiO1xuXHQkKHRoaXMpLnNpYmxpbmdzKCcuY2FyZC1oZWFkZXInKS5maW5kKCcudmlldy1hY2NvcmRpb24nKS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi11cCcsICFpc1Nob3cpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLWRvd24nLCBpc1Nob3cpO1xufSk7XG5cbiQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXG4vLyBCb290c3RyYXAgU2VsZWN0IEZpeDogQWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gc2VsZWN0IGZpZWxkXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmJvb3RzdHJhcC1zZWxlY3RcIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUub3BlbicpLnRvZ2dsZSgpO1xufSk7XG5cbi8vIEJvb3RzdHJhcCBtb2RhbHMgZml4OiBhZGQgYmFjayBldmVudCBsaXN0ZW5lclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImJvZHk6bm90KFtkYXRhLXBhZ2U9XFxcInN0YWZmXFxcIl0pIFtkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiXVwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzLmRhdGFzZXQudGFyZ2V0KS5tb2RhbChcInNob3dcIik7XG59KTtcblxuZnVuY3Rpb24gYWRkSXRlbVRvUGlja2VyKHBpY2tlckVsZW1lbnQsIHZhbHVlLCBuYW1lKSB7XG5cdCQocGlja2VyRWxlbWVudCkuYXBwZW5kKG5ldyBPcHRpb24obmFtZSwgdmFsdWUpKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIG5hbWUpO1xufVxuXG52YXIgdmFsaWRhdGlvblRpbWVvdXQgPSB3aW5kb3cudmFsaWRhdGlvblRpbWVvdXQgPSBudWxsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqXG4gKiBBIGNvbW1lbnQgaXMgbWFkZSBhYm91dCBhIHNwZWNpZmljIHRpY2tldCwgYnlcbiAqIGEgc3RhZmYgbWVtYmVyLlxuICogXG4gKiBDb250YWlucyB0aGUgVGlja2V0IHRoYXQgaXQgYmVsb25ncyB0b1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkOiBpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxsX2lkOiBjYWxsLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdGNvbnRlbnQsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxsICAgICAgICAgICAgPSBjYWxsO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0O1xuXHRcdHRoaXMuY29udGVudCAgICAgICAgID0gY29udGVudDtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgYXV0aG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXV0aG9yKTtcblx0fVxuXG5cdHNldCBhdXRob3IoYXV0aG9yKSB7XG5cdFx0dGhpcy5fYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0Z2V0IGNhbGwoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsKHRoaXMuX2NhbGwpO1xuXHR9XG5cblx0c2V0IGNhbGwoY2FsbCkge1xuXHRcdHRoaXMuX2NhbGwgPSBjYWxsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENhbGxcbiAqXG4gKiBFdmVyeSB0aW1lIHRoZSBIZWxwZGVzayBpcyBjYWxsZWQsIHRoaXMgaXMgY3JlYXRlZC5cbiAqIEEgY2FsbCBtYXkgaGF2ZSBtdWx0aXBsZSB0aWNrZXRzLCBhIHRpY2tldCBtYXkgaGF2ZVxuICogbXVsdGlwbGUgY2FsbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGwge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGltZSxcblx0XHRjYWxsZXJfaWQ6IGNhbGxlcixcblx0XHRvcGVyYXRvcl9pZDogb3BlcmF0b3IsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMudGltZSAgICAgPSB0aW1lO1xuXHRcdHRoaXMuY2FsbGVyICAgPSBjYWxsZXI7ICAgLy8gSUQgb2YgY2FsbGVyLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7IC8vIElEIG9mIG9wZXJhdG9yLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLnRpY2tldHMgID0gdGlja2V0czsgIC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgVGlja2V0J3Ncblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgb3BlcmF0b3Iob3BlcmF0b3IpIHtcblx0XHR0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzRnJvbUNhbGwodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEVtcGxveWVlXG4gKlxuICogQW4gZW1wbG95ZWUgb2YgdGhlIGNvbXBhbnlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRlbWFpbCxcblx0XHRqb2JfdGl0bGU6IGpvYixcblx0XHRkZXBhcnRtZW50LFxuXHRcdHBob25lX251bWJlcjogcGhvbmUsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBzcGVjaWFsaXNtcyA9IFtdLFxuXHRcdG9wZXJhdG9yID0gZmFsc2UsXG5cdFx0c3BlY2lhbGlzdCA9IHNwZWNpYWxpc21zLmxlbmd0aCA+IDAsXG5cdFx0YW5hbHlzdCA9IGZhbHNlLFxuXHRcdGFkbWluID0gZmFsc2Vcblx0fSkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLmpvYiA9IGpvYjtcblx0XHR0aGlzLmRlcGFydG1lbnQgPSBkZXBhcnRtZW50Lm5hbWU7XG5cdFx0dGhpcy5fZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQuaWQ7XG5cdFx0dGhpcy5waG9uZSA9IHBob25lO1xuXHRcdHRoaXMuc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0XHR0aGlzLmFjY2VzcyA9IHtvcGVyYXRvciwgYW5hbHlzdCwgYWRtaW59O1xuXHRcdFxuXHRcdC8vIElmIHVzZXIgaXMgYW55IG90aGVyIHBlcm1pc3Npb24gdGhlbiByZWFkIGlzIGdyYW50ZWRcblx0XHR0aGlzLmFjY2Vzcy5yZWFkID0gdGhpcy5hY2Nlc3Mub3BlcmF0b3IgfHwgdGhpcy5hY2Nlc3MuYW5hbHlzdCB8fCB0aGlzLmFjY2Vzcy5hZG1pbiB8fCB0aGlzLmFjY2Vzcy5yZWFkb25seSB8fCBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgcmVhZCBhY2Nlc3MgdG8gdGhlIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzUmVhZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MucmVhZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhIGhlbHAgZGVzayBvcGVyYXRvclxuXHQgKi9cblx0Z2V0IGlzT3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLm9wZXJhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gYW5hbHl0aWNhbCBkYXRhIGFib3V0IHRoZSBoZWxwIGRlc2sgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNBbmFseXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hbmFseXN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGFuIGFkbWluaXN0cmF0b3Igb24gdGhlIGhlbHAgZGVza1xuXHQgKi9cblx0Z2V0IGlzQWRtaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFkbWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIEEgbGlzdCBvZiBwcm9ibGVtIHR5cGVzIHRoZSB1c2VyIGlzIGEgc3BlY2lhbGlzdCBvZlxuXHQgKi9cblx0Z2V0IHNwZWNpYWxpc21zKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9zcGVjaWFsaXNtcyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHNwZWNpYWxpc21zIFNldCB0aGUgbGlzdCBvZiBzcGVjaWFsaXNtcyBmb3IgdGhpcyBwZXJzb24gb24gdGhlIHN5c3RlbVxuXHQgKi9cblx0c2V0IHNwZWNpYWxpc21zKHNwZWNpYWxpc21zKSB7XG5cdFx0dGhpcy5fc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQcmVwYXJlIGRhdGEgZm9yIHNlbmRpbmcgdG8gQVBJIGVuZHBvaW50LiBUaGUgQVBJIGhhcyBkaWZmZXJlbnRcblx0ICogZGF0YSBrZXlzIHJlcHJlc2VudGluZyB0aGUgZGF0YSBhY2Nlc3NpYmxlIGluIHRoZSB0YWJsZXMsIHNvIG5ld1xuXHQgKiBkYXRhIGFuZCB1cGRhdGVzIHRvIGRhdGEgbXVzdCB1c2UgdGhlc2Uga2V5IG5hbWVzLlxuXHQgKiBAcGFyYW0gZGF0YSB0byBiZSBjb252ZXJ0ZWRcblx0ICogQHJldHVybnMgZGF0YSB3aXRoIHVwZGF0ZWQga2V5IG5hbWVzXG5cdCAqL1xuXHRzdGF0aWMgcHJlcGFyZURhdGEoZGF0YSA9IHt9KSB7XG5cdFx0ZGF0YS5qb2JfdGl0bGUgPSBkYXRhLmpvYjtcblx0XHRkYXRhLnBob25lX251bWJlciA9IGRhdGEucGhvbmU7XG5cdFx0ZGF0YS5leHBlcnRpc2VfdHlwZXMgPSBkYXRhLnNwZWNpYWxpc21zO1xuXHRcdGRhdGEuZGVwYXJ0bWVudF9pZCA9IGRhdGEuZGVwYXJ0bWVudDtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cdFx0XHRkYXRhW2tleV0gPSBkYXRhLmFjY2Vzc1trZXldID8gKDEgJiYgKGRhdGEuc3BlY2lhbGlzdCA9IDEpKSA6IDA7XG5cdFx0fVxuXHRcdGRhdGEuc3BlY2lhbGlzdCA9IGRhdGEuc3BlY2lhbGlzdCB8fCAwO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRwYXJlbnRfaWQ6IHBhcmVudCxcblx0XHRjaGlsZHJlblxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgPSBuYW1lO1xuXHRcdHRoaXMucGFyZW50ICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuOyAvLyBJRCBvZiBFeHBlcnRpc2VUeXBlJ3MsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRXhwZXJ0aXNlVHlwZSdzXG5cdH1cblxuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX3BhcmVudCk7XG5cdH1cblxuXHRzZXQgcGFyZW50KHBhcmVudCkge1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGdldCBjaGlsZHJlbigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fY2hpbGRyZW4pO1xuXHR9XG5cblx0c2V0IGNoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwiaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVN0YWZmIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHN0YWZmX2lkOiBzdGFmZklkLFxuXHRcdGV4cGVydGlzZV90eXBlX2lkOiBleHBlcnRpc2VUeXBlSWQsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgPSBzdGFmZklkO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlSWQ7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9leHBlcnRpc2VfdHlwZSk7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGUoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhdHVzXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBTdGF0dXMuXG4gKiBDb250YWlucyBUaWNrZXRzIHRoYXQgZml0IGludG8gdGhlIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c2x1Zyxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICA9IGlkO1xuXHRcdHRoaXMuc2x1ZyAgICA9IHNsdWc7ICAgIC8vIHNsdWdfZXhhbXBsZVxuXHRcdHRoaXMubmFtZSAgICA9IG5hbWU7ICAgIC8vIE5hbWUgRXhhbXBsZSFcblx0XHR0aGlzLnRpY2tldHMgPSB0aWNrZXRzOyAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgVGlja2V0IGluc3RhbmNlc1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzV2l0aFNsdWcodGhpcy5zbHVnKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFRpY2tldC9Qcm9ibGVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbHMsXG5cdFx0c3RhdHVzLFxuXHRcdHN0YXR1c19oaXN0b3J5OiBzdGF0dXNIaXN0b3J5LFxuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHNvbHV0aW9uX2lkOiBzb2x1dGlvbixcblx0XHRkZXZpY2VzLFxuXHRcdHByb2dyYW1zLFxuXHRcdGNvbW1lbnRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbCxcblx0XHR1cGRhdGVkX2F0OiB1cGRhdGVkQXRSZWFsLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmX2lkOiBleHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0YXNzaWduZWRfdG9fb3BlcmF0b3JfaWQ6IGFzc2lnbmVkVG9PcGVyYXRvcklkXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICAgID0gY2FsbHM7ICAvLyBJRCBvZiBjYWxscywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDYWxsJ3Ncblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YXR1c19oaXN0b3J5ICAgICAgID0gc3RhdHVzSGlzdG9yeTtcblx0XHR0aGlzLnRpdGxlICAgICAgICAgICAgICAgID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiAgICAgICAgICA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuc29sdXRpb24gICAgICAgICAgICAgPSBzb2x1dGlvbjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICAgID0gZGV2aWNlczsgIC8vIElEIG9mIGRldmljZXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRGV2aWNlc1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgICAgPSBwcm9ncmFtczsgLy8gSUQgb2YgcHJvZ3JhbXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgUHJvZ3JhbXNcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICAgID0gY29tbWVudHM7IC8vIElEIG9mIGNvbW1lbnRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENvbW1lbnQnc1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0ICAgICAgICAgICA9IHVwZGF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCAgICAgID0gY3JlYXRlZEF0UmVhbDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRfcmVhbCAgICAgID0gdXBkYXRlZEF0UmVhbDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBjYWxscygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGxzQnlUaWNrZXRJZCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCBjYWxscyhjYWxscykge1xuXHRcdHRoaXMuX2NhbGxzID0gY2FsbHM7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXHRcblx0Z2V0IHN0YXR1c19oaXN0b3J5KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzSGlzdG9yeSh0aGlzLl9zdGF0dXNfaGlzdG9yeSk7XG5cdH1cblxuXHRzZXQgc3RhdHVzX2hpc3Rvcnkoc3RhdHVzSGlzdG9yeSkge1xuXHRcdHRoaXMuX3N0YXR1c19oaXN0b3J5ID0gc3RhdHVzSGlzdG9yeTtcblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgSGFyZHdhcmVNYW5hZ2VyKCkpLmdldERldmljZXModGhpcy5fZGV2aWNlcyk7XG5cdH1cblxuXHRzZXQgZGV2aWNlcyhkZXZpY2VzKSB7XG5cdFx0dGhpcy5fZGV2aWNlcyA9IGRldmljZXM7XG5cdH1cblxuXHRnZXQgcHJvZ3JhbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgU29mdHdhcmVNYW5hZ2VyKCkpLmdldFByb2dyYW1zKHRoaXMuX3Byb2dyYW1zKTtcblx0fVxuXG5cdHNldCBwcm9ncmFtcyhwcm9ncmFtcykge1xuXHRcdHRoaXMuX3Byb2dyYW1zID0gcHJvZ3JhbXM7XG5cdH1cblxuXHRnZXQgY29tbWVudHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50c0J5SWRzKHRoaXMuX2NvbW1lbnRzKTtcblx0fVxuXG5cdHNldCBjb21tZW50cyhjb21tZW50cykge1xuXHRcdHRoaXMuX2NvbW1lbnRzID0gY29tbWVudHM7XG5cdH1cblxuXHRnZXQgc29sdXRpb24oKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50KHRoaXMuX3NvbHV0aW9uKTtcblx0fVxuXG5cdHNldCBzb2x1dGlvbihzb2x1dGlvbikge1xuXHRcdHRoaXMuX3NvbHV0aW9uID0gc29sdXRpb247XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVTdGFmZih0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZik7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZklkO1xuXHR9XG5cblx0Z2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKGFzc2lnbmVkVG9PcGVyYXRvcklkKSB7XG5cdFx0dGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHR2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQwIC0gMSArIDEpKSArIDE7IC8vUmFuZG9tIGludCBiZXR3ZWVuIDEgYW5kIDQwXG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKSkuZ2V0RXhwZXJ0aXNlVHlwZShyYW5kb20pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBEZXZpY2VcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dHlwZSxcblx0XHRtYWtlLFxuXHRcdHNlcmlhbF9ubyxcblx0XHR0aWNrZXRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSlcblx0e1xuXHRcdHRoaXMuaWRcdFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy50eXBlXHRcdFx0PSB0eXBlO1xuXHRcdHRoaXMubWFrZSAgIFx0XHQ9IG1ha2U7XG5cdFx0dGhpcy5zZXJpYWxfbm8gICAgIFx0PSBzZXJpYWxfbm87XG5cdFx0dGhpcy5fdGlja2V0c1x0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5jcmVhdGVkX2F0XHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBQcm9ncmFtXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBTb2Z0d2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3JhbSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHMsXG5cdFx0b3BlcmF0aW5nX3N5c3RlbSxcblx0XHRleHBpcnlfZGF0ZSxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pIFxuXHR7XG5cdFx0dGhpcy5pZCAgICAgICAgIFx0XHQ9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgICBcdFx0PSBuYW1lO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5vcGVyYXRpbmdfc3lzdGVtXHQ9IG9wZXJhdGluZ19zeXN0ZW07XG5cdFx0dGhpcy5leHBpcnlfZGF0ZVx0XHQ9IGV4cGlyeV9kYXRlO1xuXHRcdHRoaXMuY3JlYXRlZF9hdCBcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCBcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0U29mdHdhcmVUeXBlKCkgeyBcblx0XHQvL0dldHMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgcHJvZ3JhbSBpcyBhbiBvcGVydGluZyBzeXN0ZW0gb3Igbm90XG5cdFx0aWYgKHRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiT3BlcmF0aW5nIFN5c3RlbVwiO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiQXBwbGljYXRpb25cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiLVwiO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFN0YXR1c1xuICpcbiAqIEludGVybWVkaWFyeSByZWxhdGlvbnNoaXAgYmV0d2VlbiBTdGF0dXNcbiAqIGFuZCBUaWNrZXQuIFRoaXMgc3RvcmVzIGEgaGlzdG9yeSBvZiBhXG4gKiBUaWNrZXQncyBzdGF0dXNlczsgdGhlIGxhc3QgZW50cnkgaXNcbiAqIHRoZSBUaWNrZXQncyBjdXJyZW50IHN0YXR1cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0U3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdHN0YXR1c19pZDogc3RhdHVzLFxuXHRcdHN0YWZmX2lkOiBzdGFmZixcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDsgLy8gSUQgb2YgdGlja2V0LCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgVGlja2V0XG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgID0gc3RhZmY7ICAvLyBJRCBvZiBzdGFmZiwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuL0R5bmFtaWNQYWdlXCI7XG5cbi8qKlxuICogQVBJXG4gKlxuICogT3JpZ2luYWxseSB1c2VkIHRvIHJldHJpZXZlIGFuZCBoYW5kbGUgZGF0YSBmcm9tXG4gKiBBUEkgZW5kcG9pbnRzLCBidXQgbW9kaWZpZWQgdG8gaG9sZCBsb2NhbCBkYXRhXG4gKiBpbiB0aGUgY29uc3RydWN0b3Igc2V0IGJ5IFdvcmRQcmVzcydzIFR3aWdcbiAqIChkb25lIHRvIHJldXNlIHByZXZpb3VzIGNvbXBvbmVudHMgdG8gc2F2ZSB0aW1lKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FsbHMgPSBbXSxcblx0XHRzdGF0dXNlcyA9IFtdLFxuXHRcdHRpY2tldHMgPSBbXSxcblx0XHR0aWNrZXRfc3RhdHVzZXM6IHRpY2tldFN0YXR1c2VzID0gW10sXG5cdFx0Y29tbWVudHMgPSBbXSxcblx0XHRzdGFmZiA9IFtdLFxuXHRcdGRldmljZXMgPSBbXSxcblx0XHRwcm9ncmFtcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlczogZXhwZXJ0aXNlVHlwZXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZjogZXhwZXJ0aXNlVHlwZVN0YWZmID0gW10sXG5cdFx0ZGVwYXJ0bWVudHMgPSBbXVxuXHR9KSB7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgPSBjYWxscztcblx0XHR0aGlzLnN0YXR1c2VzICAgICAgICAgICA9IHN0YXR1c2VzO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgICAgID0gdGlja2V0cztcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzICAgICA9IHRpY2tldFN0YXR1c2VzO1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgID0gY29tbWVudHM7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgICAgPSBzdGFmZjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICA9IGRldmljZXM7XG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgPSBwcm9ncmFtcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGV4cGVydGlzZVR5cGVzO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgICAgICAgID0gZGVwYXJ0bWVudHM7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGFmZlBhZ2VcbiAqXG4gKiBNZXRob2RzIHVzZWZ1bCBmb3IgcG9wdWxhdGluZyBhbmQgaGFuZGxpbmcgaW5wdXQgb24gU3RhZmYgcGFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZlBhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0Ly8gTm8gZW1wbG95ZWUgZGV0YWlsIHNob3duIGJ5IGRlZmF1bHRcblx0XHR0aGlzLmVtcGxveWVlID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW4gYW5kIHNob3cgYWxsIHN0YWZmIGluIGxpc3QgdmlldyB0YWJsZSBvbiBwYWdlXG5cdCAqL1xuXHRzaG93U3RhZmYoKSB7XG5cdFx0Ly8gRW5zdXJlIG5vIGxvY2FsbHktY2FjaGVkIGRhdGEgaXMgcHJlc2VudCBpbiBzdGFmZiB0YWJsZSBiZWZvcmUgcG9wdWxhdGluZ1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuZW1wdHkoKTtcblxuXHRcdC8vIENvbHVtbiB0byBmaWxsIHRpY2tldHMgbnVtYmVyIGludG9cblx0XHRsZXQgdGlja2V0c0NvbHVtbkluZGV4ID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0clwiKS5maXJzdCgpXG5cdFx0XHRcdC5jaGlsZHJlbihcIltkYXRhLXNsdWc9XFxcInRpY2tldHMuYXNzaWduZWRcXFwiXVwiKS5pbmRleCgpO1xuXG5cdFx0Ly8gVGVtcG9yYXJ5IGFycmF5IHRvIGhvbGQgc3RhZmYgSURzIHN0aWxsIGF3YWl0aW5nIHRpY2tldCBjb3VudHNcblx0XHRsZXQgc3RhZmZGb3JUaWNrZXRzID0gW107XG5cblx0XHQvLyBQdXQgZWFjaCBzdGFmZiBtZW1iZXIgb24gdGFibGVcblx0XHRsZXQgc3RhZmYgPSB0aGlzLnN0YWZmTWFuYWdlci5zdGFmZjtcblxuXHRcdC8vIEFkZCBlYWNoIHN0YWZmIG1lbWJlciB0byBhIG5ldyByb3cgaW4gdGhlIHRhYmxlXG5cdFx0Zm9yIChsZXQgZW1wbG95ZWUgb2Ygc3RhZmYpIHtcblx0XHRcdGxldCAkdGFibGVSb3cgPSB0aGlzLmFwcGVuZFRhYmxlUm93KGVtcGxveWVlKTtcblx0XHRcdHN0YWZmRm9yVGlja2V0cy5wdXNoKGVtcGxveWVlLmlkKTtcblx0XHR9XG5cblx0XHQvLyBIaWRlIHNwbGFzaCBzY3JlZW4gaWYgdGhlcmUgaXMgYXQgbGVhc3QgMSBzdGFmZiBtZW1iZXIgaW4gdmlld1xuXHRcdHRoaXMudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cblx0XHQvLyBHZXQgYXNzaWduZWQgdGlja2V0IGNvdW50cyBhc3luY2hyb25vdXNseVxuXHRcdChhc3luYyhpZHMpID0+IHtcblx0XHRcdC8vIEdldCBudW1iZXIgb2YgYXNzaWduZWQgdGlja2V0cyBhbmQgZmlsbCBjb2x1bW5cblx0XHRcdGxldCAkcm93cyA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuY2hpbGRyZW4oXCJ0clwiKTtcblx0XHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoaWRzKTtcblx0XHRcdCRyb3dzLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRcdGVsLmNoaWxkcmVuW3RpY2tldHNDb2x1bW5JbmRleF0udGV4dENvbnRlbnQgPSB0aWNrZXRzW2krMV0gPyAodGlja2V0c1tpKzFdLmxlbmd0aCB8fCAwKSA6IDA7XG5cdFx0XHR9KTtcblx0XHR9KShzdGFmZkZvclRpY2tldHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBzaG93aW5nIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuIFVzdWFsbHkgY2FsbGVkXG5cdCAqIHdoZW4gY2xpY2tpbmcgb24gYSByb3cgaW4gdGhlIHRhYmxlLCBidXQgY2FuIGFsc28gYmUgY2FsbGVkXG5cdCAqIGZvciBvdGhlciB0YWJsZSByb3cgY2hhbmdlIGlucHV0cywgc3VjaCBhcyBoYXNoIGZyYWdtZW50IG9yXG5cdCAqIGtleWJvYXJkIGlucHV0LlxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZSB0byBzaG93IGRldGFpbFxuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCkge1xuXHRcdC8vIEdldCBlbXBsb3llZSB3aXRoIElEXG5cdFx0dGhpcy5lbXBsb3llZSA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChpZCk7XG5cdFx0Ly8gQ2F0Y2ggaW52YWxpZCBJRHMgYW5kIHNob3cgbWVzc2FnZVxuXHRcdGlmICghdGhpcy5lbXBsb3llZSkge1xuXHRcdFx0Ly8gSGlkZSBzaW5nbGUgdmlldyBpZiBubyBkZXRhaWwgaXMgYWJsZSB0byBiZSBwcmVzZW50ZWRcblx0XHRcdC8vIGZvciByZXF1ZXN0ZWQgSUQsIGVuc3VyaW5nIHRoZSBwZXJzb24gdXNpbmcgdGhlIHN5c3RlbVxuXHRcdFx0Ly8gaXMgbm90IGNvbmZ1c2VkIGJ5IGRhdGEgc2hvd24gZm9yIHByZXZpb3VzbHkgYWNjZXNzZWQgdXNlci5cblx0XHRcdHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHRcdFx0RHluYW1pY1BhZ2Uuc2hvd05vdGlmaWNhdGlvbihcIk5vIGVtcGxveWVlIHdpdGggSUQgXCIgKyBpZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUHV0IGVtcGxveWVlIG5hbWUgaW4gdGl0bGUgYmFyIG9mIHNpbmdsZSB2aWV3XG5cdFx0dGhpcy51cGRhdGVTaW5nbGVWaWV3TmF2YmFyKHRoaXMuZW1wbG95ZWUubmFtZSk7XG5cdFx0XG5cdFx0Ly8gRmlsbCBpbiBjb250ZW50IGZvciBlYWNoIGZpZWxkIGF2YWlsYWJsZSBpbiBzdGFmZiBtZW1iZXJcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1zbHVnXVwiKS5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0Ly8gRWFjaCBzbHVnIGlzIGEgZGlmZmVyZW50IGZpZWxkIHRvIGJlIGZpbGxlZCwgc29cblx0XHRcdC8vIGdldCBlYWNoIHZhbHVlIGFuZCBzZXQgZWxlbWVudCBjb250ZW50IHRvIHZhbHVlXG5cdFx0XHRsZXQgdmFsdWUgPSBPYmplY3QucmVzb2x2ZShlbC5kYXRhc2V0LnNsdWcsIHRoaXMuZW1wbG95ZWUpO1xuXHRcdFx0Ly8gU29tZSB2YWx1ZXMgYXJlIG9wdGlvbmFsLCBzbyBkb24ndCBzaG93IHVuZGVmaW5lZCBpZiBubyBkYXRhXG5cdFx0XHRlbC50ZXh0Q29udGVudCA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHZhbHVlIDogXCLigJRcIjtcblx0XHR9KTtcblxuXHRcdC8vIFNvbWUgY29udGVudCByZXF1aXJlcyBzcGVjaWFsIGhhbmRsaW5nIGZvciBpbnB1dCBvZiBpbmZvcm1hdGlvblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZChcIltkYXRhLWN1c3RvbXNsdWddXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGVsLmRhdGFzZXQuY3VzdG9tc2x1Zykge1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gdG9rZW5zIG5lZWQgdG8gYmUgaGFuZGxlZCBzcGVjaWFsbHlcblx0XHRcdFx0Ly8gc2luY2UgdmFsdWUgaXMgbm90IG5vcm1hbCB0ZXh0XG5cdFx0XHRcdGNhc2UgXCJhY2Nlc3NcIjpcblx0XHRcdFx0XHRTdGFmZlBhZ2Uuc2hvd1Blcm1pc3Npb25zKGVsLCB0aGlzLmVtcGxveWVlKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwiYXZhdGFyXCI6XG5cdFx0XHRcdFx0ZWwuc3JjID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yNzV4Mjc1XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcInRpY2tldHMuYXNzaWduZWRcIjpcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IFwi4oCmXCI7XG5cdFx0XHRcdFx0KGFzeW5jKGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGhpcy5lbXBsb3llZS5pZCkubGVuZ3RoO1xuXHRcdFx0XHRcdH0pKGVsKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyBJZiBpbiBkb3VidCwgcHJlc3VtZSBkYXRhIGlzIGludmFsaWQgYW5kIHNob3cgc2FtZSBhcyBubyBkYXRhXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRHluYW1pY1BhZ2UgbmVlZHMgdG8gaGFuZGxlIHZpZXcgY29kZVxuXHRcdHN1cGVyLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpO1xuXG5cdFx0Ly8gUHJvYmxlbSB0eXBlcyB2aWV3IGhhbmRsaW5nIHRvIGJlIG9idGFpbmVkIGJ5IHNwZWNpZmljIHByb2JsZW0gdHlwZSBKU1xuXHRcdHdpbmRvdy5zdGFmZlByb2JsZW1UeXBlUGFnZS5jdXJyZW50U3BlY2lhbGlzbXMgPSB0aGlzLmVtcGxveWVlLl9zcGVjaWFsaXNtcztcblx0XHR3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UubG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcygkKCcudHlwZS1jb2x1bW5zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBkaXNwbGF5aW5nIHBlcm1pc3Npb25zIGZyb20gZGF0YSBvYmplY3Rcblx0ICogdG8gaW5kaXZpZHVhbCB0b2tlbnMgc2hvd24gaW4gaW5wdXQsIG9uZSBmb3IgZWFjaCBvZlxuXHQgKiB0aGUgcGVybWlzc2lvbiBsZXZlbHMgZ3JhbnRlZCB0byB0aGUgdXNlci5cblx0ICpcblx0ICogQHBhcmFtIGVsIFRoZSBlbGVtZW50IHRvIGZpbGwgd2l0aCB0aGUgcGVybWlzc2lvbiBkZXRhaWxzXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gZ2V0IHRoZSBncmFudGVkIHBlcm1pc3Npb24gaW5mb3JtYXRpb24gZnJvbVxuXHQgKi9cblx0c3RhdGljIHNob3dQZXJtaXNzaW9ucyhlbCwgZW1wbG95ZWUpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdC8vIERlZmluZSB0aGUgaWNvbnMgdG8gYmUgZGlzcGxheWVkIGZvciBlYWNoIG9mIHRoZSBwZXJtaXNzaW9uIGxldmVsc1xuXHRcdGxldCBpY29ucyA9IHtyZWFkOiBcImV5ZVwiLCBvcGVyYXRvcjogXCJ1c2VyLXNlY3JldFwiLCBhbmFseXN0OiBcImxpbmUtY2hhcnRcIiwgYWRtaW46IFwic2hpZWxkXCJ9O1xuXG5cdFx0Ly8gRWFjaCBwZXJtaXNzaW9uIGhhcyBpdHMgb3duIHRva2VuIGZvciByZXByZXNlbnRpbmcgaXRzZWxmXG5cdFx0Zm9yIChsZXQgcGVybWlzc2lvbiBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHdoZXRoZXIgZW1wbG95ZWUgaGFzIHBlcm1pc3Npb24gYW5kIG9ubHkgc2hvdyBpZiB0cnVlXG5cdFx0XHRpZiAoZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dKSB7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiBpY29uXG5cdFx0XHRcdGxldCBlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0XHRcdFx0ZWxJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLVwiICsgaWNvbnNbcGVybWlzc2lvbl0pO1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gbmFtZVxuXHRcdFx0XHRsZXQgZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRcdGVsVGV4dC50ZXh0Q29udGVudCA9IHBlcm1pc3Npb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwZXJtaXNzaW9uLnNsaWNlKDEpO1xuXG5cdFx0XHRcdC8vIEdyb3VwIGljb24gYW5kIG5hbWUgaW50byBzaW5nbGUgdG9rZW5cblx0XHRcdFx0bGV0IGVsUGVybWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRlbFBlcm1pc3Npb24uYXBwZW5kQ2hpbGQoZWxJY29uKTtcblx0XHRcdFx0ZWxQZXJtaXNzaW9uLmFwcGVuZENoaWxkKGVsVGV4dCk7XG5cblx0XHRcdFx0Ly8gRGlzcGxheSBwZXJtaXNzaW9uIHRva2VuIGluIGVsZW1lbnRcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZWxQZXJtaXNzaW9uKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggc3RhZmYgbWVtYmVycyBnaXZlbiBhIHNlYXJjaCBzdHJpbmdcblx0ICogdG8gZmlsdGVyIHRoZSB0YWJsZSBieSBlbXBsb3llZXMgbWF0Y2hpbmcgdGhlIHN0cmluZy5cblx0ICogVGhpcyBzZWFyY2hlcyB0aHJvdWdoIG1hbnkgc3RhZmYgdGFibGUgZmllbGRzOlxuXHQgKiBpZCwgbmFtZSwgam9iLCBkZXBhcnRtZW50IGFuZCBwaG9uZSBudW1iZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZyB0byBmaWx0ZXIgdGhlIGVtcGxveWVlcyBieVxuXHQgKi9cblx0YXN5bmMgc2VhcmNoKHF1ZXJ5KSB7XG5cdFx0Ly8gT25seSBzZWFyY2ggaWYgcXVlcnkgaXMgc3VmZmljaWVudCBmb3Igc2VhcmNoXG5cdFx0Ly8gVGhpcyBtYXR0ZXJzIG1vcmUgd2l0aCBsYXJnZXIgZGF0YXNldHMgd2hlcmUgXCJhXCIgY2FuIGhhdmVcblx0XHQvLyB0aG91c2FuZHMgb2YgcmVzdWx0cy4gQWx3YXlzIGVuc3VyZSBJRCBzZWFyY2hlcyBhcmUgcGVyZm9ybWVkXG5cdFx0Ly8gc2luY2UgSUQgaXMgaW5kZXhlZCBhbmQgY2FuIGJlIHNlYXJjaGVkIHZlcnkgcXVpY2tseS5cblx0XHRpZiAocXVlcnkubGVuZ3RoID49IDIgfHwgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgcXVlcnkgPT0gcGFyc2VJbnQocXVlcnkpKSkge1xuXG5cdFx0XHQvLyBEZWZpbmUgcHJvcGVydGllcyBvZiBlbXBsb3llZXMgdG8gYmUgc2VhcmNoZWQgZm9yIHF1ZXJ5IG1hdGNoXG5cdFx0XHR2YXIgcHJvcGVydGllcyA9IFtcImlkXCIsIFwibmFtZVwiLCBcImpvYlwiLCBcImRlcGFydG1lbnRcIiwgXCJwaG9uZVwiXTtcblx0XHRcdC8vIFBlcmZvcm0gdGhlIHNlYXJjaCB1c2luZyBzdXBlciBzZWFyY2ggYW5kIGFzc2lnbiByZXN1bHRzXG5cdFx0XHRzdXBlci5zZWFyY2gocXVlcnksIHRoaXMuc3RhZmZNYW5hZ2VyLnNlYXJjaChxdWVyeSwgcHJvcGVydGllcyksIG9iaiA9PiBPYmplY3QuYXNzaWduKHt9LCBvYmopLCBwcm9wZXJ0aWVzKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHNob3dpbmcgYWxsIHN0YWZmIGlmIHF1ZXJ5IGlzIG1pc3Npbmcgb3IgaW5zdWZmaWNpZW50XG5cdFx0XHQvLyBUaGlzIGlzIGRpc3RpbmN0IHRvIHRoZSBjYXNlIHdoZXJlIHRoZXJlIGFyZSBubyByZXN1bHRzIHRvXG5cdFx0XHQvLyBhIHN1Y2Nlc3NmdWwgcXVlcnkg4oCUIHRoaXMgaXMgaGFuZGxlZCBpbiBzdXBlcidzIHNlYXJjaCBtZXRob2Rcblx0XHRcdC8vIGFuZCBzaG93cyBhbiBhcHByb3ByaWF0ZSBtZXNzYWdlIGluc3RlYWQgb2YgYWxsIHRoZSBzdGFmZi5cblx0XHRcdHRoaXMuc2hvd1N0YWZmKCk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmUGFnZS5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZlBhZ2UgZnJvbSBcIi4uL3N0YWZmL1N0YWZmUGFnZVwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuXG4vKipcbiAqIFRpY2tldFBhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgdGlja2V0cyBwYWdlIC93IEpRdWVyeSB1c2luZyBkYXRhIGZyb21cbiAqIHRoZSBUaWNrZXRNYW5hZ2VyLiBNZXRob2RzIG1vc3RseSBnZXQgY2FsbGVkIGZyb20gdGlja2V0cy5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgICA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zb2Z0d2FyZU1hbmFnZXIgPSBuZXcgU29mdHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5oYXJkd2FyZU1hbmFnZXIgPSBuZXcgSGFyZHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgICAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmN1cnJlbnRUaWNrZXQgPSBudWxsOyAvLyBUaWNrZXQgYmVpbmcgc2hvd24gb24gdGhlIHJpZ2h0IHBhbmVsXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB0aWNrZXRzIHdoZXJlIHRoZWlyIHN0YXR1cyBpcyBpbiB0aGUgYXJyYXkgb2Zcblx0ICogc3RhdHVzIHNsdWdzLiBSZXBsYWNlcyB0aGUgY3VycmVudCBsaXN0LXZpZXcgd2l0aCB0aGVtLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICovXG5cdHNob3dGaWx0ZXJlZFRpY2tldHMoc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgc3RhdHVzLCBmaWx0ZXJlZFRpY2tldHMsIGZpbHRlcmVkVGlja2V0LCBpLCBqLFxuXHRcdFx0c3BsaXRTdGF0dXNTbHVncyA9IHN0YXR1c1NsdWdzLnNwbGl0KCcsJyk7XG5cblx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZignYXNzaWduZWRfdG8nKSA+IC0xKSB7XG5cdFx0XHRmaWx0ZXJlZFRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0TXlUaWNrZXRzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZpbHRlcmVkVGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzV2l0aFNsdWdJbihzcGxpdFN0YXR1c1NsdWdzKTtcblx0XHR9XG5cblx0XHRsZXQgJHJvd3MgPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHkgdHInKTtcblxuXHRcdGlmICgkcm93cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBmaWx0ZXJlZFRpY2tldHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZmlsdGVyZWRUaWNrZXQgPSBmaWx0ZXJlZFRpY2tldHNbal07XG5cdFx0XHRcdHN0YXR1cyAgICAgICAgID0gZmlsdGVyZWRUaWNrZXQuc3RhdHVzO1xuXG5cdFx0XHRcdHRoaXMuYXBwZW5kVGFibGVSb3coe1xuXHRcdFx0XHRcdGlkOiBmaWx0ZXJlZFRpY2tldC5pZCxcblx0XHRcdFx0XHR0aXRsZTogZmlsdGVyZWRUaWNrZXQudGl0bGUsXG5cdFx0XHRcdFx0c3RhdHVzX25hbWU6ICc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCIgZGF0YS1zbHVnPVwiJyArIHN0YXR1cy5zbHVnICsgJ1wiPicgKyBzdGF0dXMubmFtZSArICc8L3NwYW4+Jyxcblx0XHRcdFx0XHRjcmVhdGVkX2F0OiBmaWx0ZXJlZFRpY2tldC5jcmVhdGVkX2F0LFxuXHRcdFx0XHRcdHVwZGF0ZWRfYXQ6IGZpbHRlcmVkVGlja2V0LnVwZGF0ZWRfYXRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JHJvd3MuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmIChzcGxpdFN0YXR1c1NsdWdzLmluZGV4T2YoJCh0aGlzKS5maW5kKCd0ZCBzcGFuLmZpbHRlcicpLmRhdGEoJ3NsdWcnKSkgPT09IC0xKSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3Jvdy1oaWRkZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3Jvdy1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cblx0XHR0aGlzLmN1cnJlbnRUaWNrZXQgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXNlbnRzIGEgVGlja2V0IGluIHRoZSByaWdodCBwYW5lbCAodGlja2V0IHZpZXcpLlxuXHQgKiBcblx0ICogUG9wdWxhdGVzIGVsZW1lbnRzIG9uIHRoZSB0aWNrZXQgdmlldywgaW5jbHVkaW5nIGV4dGVybmFsXG5cdCAqIGl0ZW1zIHN1Y2ggYXM6XG5cdCAqICAgICAtIERldmljZXNcblx0ICogICAgIC0gUHJvZ3JhbXNcblx0ICogICAgIC0gQ2FsbHNcblx0ICogICAgIC0gQ29tbWVudHNcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRzaG93VGlja2V0Vmlldyh0aWNrZXRJZCkge1xuXHRcdGlmICh0aWNrZXRJZCAhPT0gbnVsbCkgeyAvLyBudWxsIHdoZW4gbm8gY3VycmVudFRpY2tldCBoYXMgYmVlbiBvcGVuZWQgeWV0LCBidXQgdXNlciBpcyBjaGFuZ2luZyB0aGUgY2F0ZWdvcnlcblx0XHRcdGxldCB0aWNrZXQgICAgICAgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0KHRpY2tldElkKSxcblx0XHRcdFx0dGlja2V0U3RhdHVzID0gdGlja2V0LnN0YXR1cztcblxuXHRcdFx0dGhpcy5jdXJyZW50VGlja2V0ID0gdGlja2V0O1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGlja2V0LnRpdGxlICsgJzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgdGlja2V0U3RhdHVzLnNsdWcuc3BsaXQoJ18nKVswXSArICdcIj4nICsgdGlja2V0U3RhdHVzLm5hbWUgKyAnPC9zcGFuPicpO1xuXG5cdFx0XHQkKCcjdGlja2V0LXZpZXcgI3RpY2tldC1vdmVydmlldycpLnRleHQoJyMnICsgdGlja2V0LmlkICsgJyB8ICcgKyB0aWNrZXQuY3JlYXRlZF9hdCArICcgfCAnICsgdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KS5uYW1lKTtcblx0XHRcdCQoJyN0aWNrZXQtdmlldyAjdGlja2V0LWRlc2NyaXB0aW9uIHAnKS50ZXh0KHRpY2tldC5kZXNjcmlwdGlvbik7XG5cblx0XHRcdHZhciAkdGlja2V0Q29tbWVudHMgICAgICAgICAgID0gJCgnI3RpY2tldC1jb21tZW50cycpLFxuXHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZSAgID0gJCgnI3RpY2tldC12aWV3ICNoYXJkd2FyZS1zb2Z0d2FyZS10YWJsZScpLFxuXHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlID0gJCgnI3RpY2tldC12aWV3ICNuby1oYXJkd2FyZS1zb2Z0d2FyZScpLFxuXHRcdFx0XHQkdGlja2V0Q2FsbEhpc3RvcnlCb2R5ICAgID0gJCgnI3RpY2tldC12aWV3ICNjYWxsLWhpc3RvcnktdGFibGUgdGJvZHknKS5lbXB0eSgpO1xuXG5cdFx0XHQkdGlja2V0Q29tbWVudHMudGV4dCgnTG9hZGluZyBjb21tZW50c+KApicpLnNob3coKTtcblx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdCR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUuaGlkZSgpO1xuXG5cdFx0XHQvLyBTaG93IGJhc2ljIGluZm8gd2hpbHN0IG90aGVyIGRhdGEgaXMgYmVpbmcgbG9hZGVkIGFzeW5jaHJvbm91c2x5XG5cdFx0XHR0aGlzLnNob3dUYWJsZVJvd0RldGFpbHModGlja2V0LmlkKTtcblxuXHRcdFx0Ly8gQWZmZWN0ZWQgaXRlbXMgKGRldmljZXMgYW5kIHByb2dyYW1zKVxuXHRcdFx0KGFzeW5jKCkgPT4ge1xuXHRcdFx0XHRsZXQgZGV2aWNlcyAgICAgICA9IHRpY2tldC5kZXZpY2VzLFxuXHRcdFx0XHRcdHByb2dyYW1zICAgICAgPSB0aWNrZXQucHJvZ3JhbXMsXG5cdFx0XHRcdFx0YWZmZWN0ZWRJdGVtcyA9IGRldmljZXMuY29uY2F0KHByb2dyYW1zKTtcblxuXHRcdFx0XHRpZiAoYWZmZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHsgLy8gaGlkZSB0aGUgSFcvU1cgdGFibGUgaWYgdGhlcmUncyBubyBhZmZlY3RlZCBpdGVtc1xuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlLnNob3coKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgJHRpY2tldEhhcmR3YXJlU29mdHdhcmVCb2R5ID0gJHRpY2tldEhhcmR3YXJlU29mdHdhcmUuZmluZCgndGJvZHknKTtcblxuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keS5lbXB0eSgpO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhZmZlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgYWZmZWN0ZWRJdGVtID0gYWZmZWN0ZWRJdGVtc1tpXSxcblx0XHRcdFx0XHRcdFx0dHlwZTtcblxuXHRcdFx0XHRcdFx0Ly8gZ2V0IHR5cGUgb2YgYWZmZWN0ZWRJdGVtIHRvIGRpc3BsYXkgaW4gdGlja2V0LXZpZXcgdGFibGVcblx0XHRcdFx0XHRcdGlmIChhZmZlY3RlZEl0ZW0uaGFzT3duUHJvcGVydHkoJ3NlcmlhbF9ubycpKSB7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAnSGFyZHdhcmUnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChhZmZlY3RlZEl0ZW0ub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0XHRcdFx0XHR0eXBlID0gJ09TJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAnU29mdHdhcmUnO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZUJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQnPHRyIGRhdGEtcm93aWQ9XCInICsgYWZmZWN0ZWRJdGVtLmlkICsgJ1wiIGRhdGEtcm93dHlwZT1cIicgKyAoYWZmZWN0ZWRJdGVtLmhhc093blByb3BlcnR5KCdzZXJpYWxfbm8nKSA/ICdoYXJkd2FyZScgOiAnc29mdHdhcmUnKSArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgKGFmZmVjdGVkSXRlbS50eXBlIHx8IGFmZmVjdGVkSXRlbS5uYW1lKSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyAoYWZmZWN0ZWRJdGVtLnNlcmlhbF9ubyB8fCAn4oCUJykgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdHlwZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLnNob3coKTtcblx0XHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblxuXHRcdFx0Ly8gQ2FsbHNcblx0XHRcdChhc3luYygpID0+IHtcblx0XHRcdFx0bGV0IGNhbGxzID0gdGlja2V0LmNhbGxzO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgY2FsbCAgID0gY2FsbHNbaV0sXG5cdFx0XHRcdFx0XHRjYWxsZXIgPSBjYWxsLmNhbGxlcjtcblxuXHRcdFx0XHRcdCR0aWNrZXRDYWxsSGlzdG9yeUJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIGNhbGwuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIGNhbGwuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgY2FsbGVyLm5hbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgY2FsbC50aW1lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHQvLyBDb21tZW50c1xuXHRcdFx0KGFzeW5jKCkgPT4ge1xuXHRcdFx0XHRsZXQgY29tbWVudHMgPSB0aWNrZXQuY29tbWVudHMsXG5cdFx0XHRcdFx0bWUgICAgICAgPSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcih0cnVlKTtcblxuXHRcdFx0XHRpZiAoY29tbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JHRpY2tldENvbW1lbnRzLnRleHQoJ05vIGNvbW1lbnRzIGhhdmUgYmVlbiBsZWZ0IHlldCEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGlja2V0Q29tbWVudHMudGV4dCgnTG9hZGluZyBjb21tZW50c+KApicpO1xuXG5cdFx0XHRcdFx0bGV0IHRpY2tldFN0YXR1c2VzID0gdGlja2V0UGFnZS50aWNrZXRNYW5hZ2VyLmdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXQuaWQpLFxuXHRcdFx0XHRcdFx0dGlja2V0RmVlZCAgICAgPSBjb21tZW50cy5jb25jYXQodGlja2V0U3RhdHVzZXMpLCAvLyBpbmNsdWRlcyBjb21tZW50cyBhbmQgdGlja2V0IHN0YXR1cyBoaXN0b3J5IGluIG9uZVxuXHRcdFx0XHRcdFx0JHRpY2tldEZlZWQgICAgPSAkKCc8ZGl2PicpO1xuXG5cdFx0XHRcdFx0Ly8gU29ydCB0aGUgZmVlZCBieSBkYXRlXG5cdFx0XHRcdFx0dGlja2V0RmVlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIERhdGUucGFyc2UoYS5jcmVhdGVkX2F0X3JlYWwpIC0gRGF0ZS5wYXJzZShiLmNyZWF0ZWRfYXRfcmVhbCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBpIGluIHRpY2tldEZlZWQpIHtcblx0XHRcdFx0XHRcdGxldCBwb3N0ID0gdGlja2V0RmVlZFtpXTtcblxuXHRcdFx0XHRcdFx0aWYgKHBvc3QgaW5zdGFuY2VvZiBDb21tZW50KSB7IC8vIENvbW1lbnRcblx0XHRcdFx0XHRcdFx0aWYgKHBvc3QuaWQgIT09IHRpY2tldC5fc29sdXRpb24pIHsgLy8gdGhpcyBjb21tZW50IGlzIG5vdCBhIHNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0JHRpY2tldEZlZWQuYXBwZW5kKHRoaXMuZ2V0Q29tbWVudChwb3N0LCBtZSkpLmZpbmQoJy5tZWRpYS1zaWRlIGknKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkdGlja2V0RmVlZC5wcmVwZW5kKHRoaXMuZ2V0Q29tbWVudChwb3N0LCBtZSwgdHJ1ZSkpLmZpbmQoJy5tZWRpYS1zaWRlIGknKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHsgLy8gVGlja2V0IFN0YXR1cyBDaGFuZ2UgKFRpY2tldFN0YXR1cy9TdGF0dXNIaXN0b3J5KVxuXHRcdFx0XHRcdFx0XHRsZXQgc3RhdHVzID0gcG9zdC5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0c3RhZmYgID0gcG9zdC5zdGFmZjtcblxuXHRcdFx0XHRcdFx0XHQkdGlja2V0RmVlZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JzxsaSBjbGFzcz1cInRpY2tldC1ldmVudFwiPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtdGlja2V0XCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JyBTdGF0dXMgQ2hhbmdlZCBieSAnICsgc3RhZmYubmFtZSArICc6ICcgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwidGlja2V0LWV2ZW50LWRldGFpbHNcIj4nICsgKHN0YXR1cy5uYW1lLnNwbGl0KCcgJylbMF0pICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInRpY2tldC1ldmVudC1kYXRlXCI+JyArIHBvc3QuY3JlYXRlZF9hdCArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzwvbGk+J1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhZGUgb3V0IGxvYWRpbmcgdGV4dCwgaW5zZXJ0IHRpY2tldEZlZWRcblx0XHRcdFx0XHQkdGlja2V0Q29tbWVudHMuZmFkZU91dCgyNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKCR0aWNrZXRGZWVkLnVud3JhcCgpKTtcblx0XHRcdFx0XHRcdCQodGhpcykuc2hvdygpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBIVE1MIGZvciBhIGNvbW1lbnQsIHdoaWNoIG1heSBsb29rIGRpZmZlcmVudFxuXHQgKiBpZiBpdCdzIGEgc29sdXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q29tbWVudH0gY29tbWVudFxuXHQgKiBAcGFyYW0ge0VtcGxveWVlfSBtZSBpbnN0YW5jZSBvZiB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGNvbW1lbnRcblx0ICovXG5cdGdldENvbW1lbnQocG9zdCwgbWUsIGlzU29sdXRpb24gPSBmYWxzZSkge1xuXHRcdGxldCBhdXRob3IgID0gcG9zdC5hdXRob3IsXG5cdFx0XHRjb21tZW50ID0gXG5cdFx0XHQnPGxpIGNsYXNzPVwibWVkaWEgJyArIChpc1NvbHV0aW9uID8gJ3NvbHV0aW9uJyA6ICcnKSArICdcIiBkYXRhLWNvbW1lbnQtaWQ9XCInICsgcG9zdC5pZCArICdcIj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZWRpYS1zaWRlXCI+JyArXG5cdFx0XHRcdFx0JzxhIGhyZWY9XCInICsgKGF1dGhvci5pZCA9PT0gbWUuaWQgPyAnL3NldHRpbmdzJyA6ICcvc3RhZmYjJyArIGF1dGhvci5pZCkgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQnPGltZyBzcmM9XCJodHRwczovL3BsYWNlaG9sZC5pdC8yNzV4Mjc1XCIgYWx0PVwiJyArIGF1dGhvci5uYW1lICsgJ1xcJ3MgUHJvZmlsZSBQaWN0dXJlXCI+JyArXG5cdFx0XHRcdFx0JzwvYT4nICtcblx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nICtcblx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj4nICtcblx0XHRcdFx0XHQnPGg1IGNsYXNzPVwibXQtMCBtYi0xXCI+JyArXG5cdFx0XHRcdFx0XHQnPGEgaHJlZj1cIi9zdGFmZiMnICsgYXV0aG9yLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHRhdXRob3IubmFtZSArXG5cdFx0XHRcdFx0XHQnPC9hPicgK1xuXHRcdFx0XHRcdFx0KGlzU29sdXRpb24gPyAnIDxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci1yZXNvbHZlZFwiPlNvbHV0aW9uPC9zcGFuPicgOiAnJykgK1xuXHRcdFx0XHRcdFx0KHBvc3QuX2NhbGwgIT09IG51bGwgPyAnIDxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci1uZXcgbm90ZS1hYm91dC1jYWxsXCIgZGF0YS1jYWxsLWlkPVwiJyArIHBvc3QuX2NhbGwgKyAnXCI+Tm90ZSBhYm91dCBhIGNhbGw8L3NwYW4+JyA6ICcnKSArXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJ0aWNrZXQtY29tbWVudC1kYXRlXCI+JyArIHBvc3QuY3JlYXRlZF9hdCArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0JzwvaDU+JyArXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJicmVha2VyXCI+PC9kaXY+JyArXG5cdFx0XHRcdFx0cG9zdC5jb250ZW50ICtcblx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0JzwvbGk+JztcblxuXHRcdHJldHVybiBjb21tZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gY2xpY2tpbmcgb24gYSBUaWNrZXQgZW50cnkgaW4gQ2FsbCBEZXRhaWxzLFxuXHQgKiBIaWRlIHRoZSBtb2RhbCBhbmQgc2hvdyB0aGF0IHRpY2tldC5cblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRzaG93Q2FsbFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdCQoJyN2aWV3LWNhbGwtaGlzdG9yeS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG5cblx0XHR2YXIgdGlja2V0ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldCh0aWNrZXRJZCk7XG5cblx0XHR0aGlzLnJlZnJlc2hQYWdlKHRpY2tldC5zdGF0dXMuc2x1ZywgdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBvcHVsYXRlIHRoZSBWaWV3IENhbGwgbW9kYWwgYnkgbG9hZGluZyBpblxuXHQgKiB0aGUgY2FsbCBkZXRhaWxzIGFuZCBpdHMgdGlja2V0cy5cblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIENhbGwuaWRcblx0ICovXG5cdHNob3dDYWxsVGlja2V0c01vZGFsKGNhbGxJZCkge1xuXHRcdHZhciBjYWxsICAgICAgICAgICAgID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldENhbGwoY2FsbElkKSxcblx0XHRcdCRjYWxsSGlzdG9yeSAgICAgPSAkKCcjdmlldy1jYWxsLWhpc3RvcnktbW9kYWwnKSxcblx0XHRcdCRjYWxsVGlja2V0VGFibGUgPSAkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtdGlja2V0cy10YWJsZSB0Ym9keScpO1xuXG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLWlkJykudGV4dChjYWxsLmlkKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtY2FsbGVyJykudGV4dChjYWxsLmNhbGxlci5uYW1lKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtb3BlcmF0b3InKS50ZXh0KGNhbGwub3BlcmF0b3IubmFtZSk7XG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLWRhdGUnKS50ZXh0KGNhbGwudGltZSk7XG5cblx0XHQvLyBTaG93IG1vZGFsIHdpdGggY2FsbCBkYXRhXG5cdFx0JGNhbGxUaWNrZXRUYWJsZS5lbXB0eSgpO1xuXHRcdCRjYWxsSGlzdG9yeS5tb2RhbCgnc2hvdycpO1xuXG5cdFx0Ly8gTG9hZCB0aWNrZXRzIHJlbGF0ZWQgdG8gY2FsbFxuXHRcdGNhbGwudGlja2V0cy5mb3JFYWNoKGFzeW5jIHRpY2tldCA9PiB7XG5cdFx0XHQvLyBBZGQgZWFjaCByZWxhdGVkIHRpY2tldCB0byBjYWxsIG1vZGFsXG5cdFx0XHQkY2FsbFRpY2tldFRhYmxlLmFwcGVuZChcblx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIHRpY2tldC5pZCArICdcIiAnICsgKHRpY2tldC5pZCA9PT0gdGhpcy5jdXJyZW50VGlja2V0LmlkID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJz4nICtcblx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQudGl0bGUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgdGlja2V0LnN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCI+JyArIHRpY2tldC5zdGF0dXMubmFtZSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgdGlja2V0LmNyZWF0ZWRfYXQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHQnPC90cj4nXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNuby1jYWxsLW5vdGVzJykuaGlkZSgpO1xuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1ub3RlcycpLmhpZGUoKTtcblxuXHRcdGxldCBjYWxsQ29tbWVudCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsLmlkKTtcblxuXHRcdGlmIChjYWxsQ29tbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLW5vdGVzJykudGV4dChjYWxsQ29tbWVudC5jb250ZW50KTtcblx0XHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1ub3RlcycpLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNuby1jYWxsLW5vdGVzJykuc2hvdygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2UgdGhlIGFjdGl2ZSBzdGF0dXMgaW4gdGhlIHNpZGUgbmF2IGJhci5cblx0ICogUmVsb2FkIHRoZSB0aWNrZXRzIHdpdGggdGhlIG5ldyBzdGF0dXMsIGFuZCBzaG93IHRoZVxuXHQgKiB0aWNrZXQgdmlldyBhZ2Fpbi5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIFN0YXR1cy5zbHVnXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgKG51bGxhYmxlKSByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRhc3luYyByZWZyZXNoUGFnZShzdGF0dXNTbHVnLCB0aWNrZXRJZCA9IG51bGwpIHtcblx0XHQkKCcuc2lkZS1uYXYtYmFyLW5lc3RlZCB1bCBsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLnNpZGUtbmF2LWJhci1uZXN0ZWQgdWwgbGlbZGF0YS1zbHVnPVwiJyArIHN0YXR1c1NsdWcgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy5zaG93RmlsdGVyZWRUaWNrZXRzKHN0YXR1c1NsdWcpO1xuXHRcdHRoaXMuc2hvd1RpY2tldFZpZXcodGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYW4gZW1wbG95ZWVzIGRldGFpbHMgaW50byBhIFN0YWZmIEluZm9ybWF0aW9uXG5cdCAqIERPTSBlbGVtZW50LiBMb2FkIGluIHJlbGV2YW50IGVtcGxveWVlIHBlcm1pc3Npb25zIHRvby5cblx0ICpcblx0ICogQHBhcmFtIHtET00gRWxlbWVudH0gJHN0YWZmSW5mb3JtYXRpb25cblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBlbXBsb3llZUlkIHJlcHJlc2VudGluZyBFbXBsb3llZS5pZCAoZW1wbG95ZWUgdXNlZCBmb3Igdmlld2luZylcblx0ICovXG5cdGFzeW5jIHNob3dTdGFmZkluZm9ybWF0aW9uKCRzdGFmZkluZm9ybWF0aW9uLCBlbXBsb3llZUlkKSB7XG5cdFx0bGV0IGVtcGxveWVlICA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChlbXBsb3llZUlkKTtcblxuXHRcdCRzdGFmZkluZm9ybWF0aW9uLmh0bWwoXG5cdFx0XHQnPHA+SUQgTnVtYmVyOiA8c3Ryb25nPicgKyBlbXBsb3llZS5pZCArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+TmFtZTogPHN0cm9uZz4nICsgZW1wbG95ZWUubmFtZSArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+Sm9iOiA8c3Ryb25nPicgKyBlbXBsb3llZS5qb2IgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPkRlcGFydG1lbnQ6IDxzdHJvbmc+JyArIGVtcGxveWVlLmRlcGFydG1lbnQgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPlBob25lOiA8c3Ryb25nPicgKyBlbXBsb3llZS5waG9uZSArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+PHN0cm9uZz48L3N0cm9uZz48L3A+J1xuXHRcdCk7XG5cblx0XHRTdGFmZlBhZ2Uuc2hvd1Blcm1pc3Npb25zKCRzdGFmZkluZm9ybWF0aW9uLmZpbmQoJ3A6bGFzdC1jaGlsZCBzdHJvbmcnKS5nZXQoMCksIGVtcGxveWVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSBUaWNrZXQgaXMgYXNzaWduZWQgdG86XG5cdCAqICAgICAtIChzZWxmKSAgICAgICBUaGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqICAgICAtIChvcGVyYXRvcikgICBBbm90aGVyIGhlbHBkZXNrIG9wZXJhdG9yXG5cdCAqICAgICAtIChzcGVjaWFsaXN0KSBTcGVjaWFsaXN0IG9mIEV4cGVydGlzZVR5cGUgKGZvdW5kIHRocm91Z2ggRXhwZXJ0aXNlVHlwZVN0YWZmIG9uIFRpY2tldClcblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldCBcblx0ICogQHJldHVybiB7U3RyaW5nfSB0aGUgdGlja2V0J3MgYXNzaWduZWQgdG8gdHlwZVxuXHQgKi9cblx0Z2V0QXNzaWduZWRUb1R5cGUodGlja2V0KSB7XG5cdFx0aWYgKHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkuaWQgPT09IHRoaXMuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpIHsgLy8gaWYgdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc2VsZlxuXHRcdFx0cmV0dXJuICdzZWxmJztcblx0XHR9IGVsc2UgaWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHsgLy8gSWYgYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwsIHVzZSB0aGF0IGluc3RlYWQgb2Ygc3BlY2lhbGlzdFxuXHRcdFx0cmV0dXJuICdvcGVyYXRvcic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdzcGVjaWFsaXN0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgdGhlIGJlc3Qgc3BlY2lhbGlzdCBmb3IgdGhlIEV4cGVydGlzZVR5cGUgYmFzZWQgb25cblx0ICogaG93IGJ1c3kgdGhleSBhcmUgY29tcGFyZWQgdG8gb3RoZXIgc3BlY2lhbGlzdHMuXG5cdCAqXG5cdCAqIFVwZGF0ZWQgd2hlbiBhIHVzZXIgY2xpY2tzIHRocm91Z2ggcHJvYmxlbSB0eXBlcyxcblx0ICogdXBkYXRlcyBpbiB0aGUgcmVsZXZhbnQgc2hvd2Nhc2UgZmllbGRzXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIEV4cGVydGlzZVR5cGUuaWQgXG5cdCAqIEBwYXJhbSB7RE9NIEVsZW1lbnR9ICRhc3NpZ25lZFRvT3B0aW9ucyBcIkFzc2lnbiB0byB4XCIgcmFkaW8gZmllbGRzIGluIGFjY29yZGlvbiBjYXJkc1xuXHQgKiBAcGFyYW0ge0VtcGxveWVlfSBiZXN0U3BlY2lhbGlzdCAobnVsbGFibGUpIE1hbnVhbGx5IGFzc2lnbiBlbXBsb3llZSBpZiB0aGV5IGhhdmUgdGhhdCBzcGVjaWFsaXNtXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgY29udGFpbmluZyBsaW5rIHRvIEV4cGVydGlzZVR5cGUgYW5kIFN0YWZmIHRhYmxlc1xuXHQgKi9cblx0c2V0U3BlY2lhbGlzdChleHBlcnRpc2VUeXBlSWQsICRhc3NpZ25lZFRvT3B0aW9ucywgYmVzdFNwZWNpYWxpc3QgPSBudWxsKSB7XG5cdFx0aWYgKGJlc3RTcGVjaWFsaXN0ID09PSBudWxsIHx8ICF0aGlzLnN0YWZmTWFuYWdlci5oYXNTcGVjaWFsaXNtKGJlc3RTcGVjaWFsaXN0LCBleHBlcnRpc2VUeXBlSWQpKSB7XG5cdFx0XHR2YXIgYmVzdEV4cGVydGlzZVR5cGVTdGFmZiA9IHN0YWZmUHJvYmxlbVR5cGVQYWdlLmdldEJlc3RFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpO1xuXG5cdFx0XHRiZXN0U3BlY2lhbGlzdCA9IGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYgIT09IG51bGwgPyBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmLnN0YWZmIDogbnVsbDsgLy8gbnVsbCBpZiBubyBzcGVjaWFsaXN0cyBmb3VuZCBpbiBwYXJlbnRzXG5cdFx0fVxuXG5cdFx0dmFyICRzcGVjaWFsaXN0SWQgICAgICAgPSAkYXNzaWduZWRUb09wdGlvbnMuZmluZCgnaW5wdXRbbmFtZSo9XCJzcGVjaWFsaXN0XCJdJyksXG5cdFx0XHQkc3BlY2lhbGlzdFNob3djYXNlID0gJGFzc2lnbmVkVG9PcHRpb25zLmZpbmQoJ2lucHV0W25hbWUqPVwic3BlY2lhbGlzdF9zaG93Y2FzZVwiXScpO1xuXG5cdFx0aWYgKGJlc3RTcGVjaWFsaXN0ICE9PSBudWxsKSB7XG5cdFx0XHQkc3BlY2lhbGlzdElkLnZhbChiZXN0U3BlY2lhbGlzdC5pZCk7XG5cdFx0XHQkc3BlY2lhbGlzdFNob3djYXNlLnZhbChiZXN0U3BlY2lhbGlzdC5uYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNwZWNpYWxpc3RJZC52YWwoJycpO1xuXHRcdFx0JHNwZWNpYWxpc3RTaG93Y2FzZS52YWwoJ05vIFNwZWNpYWxpc3QgZm9yIHRoZSBQcm9ibGVtIFR5cGUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVzdEV4cGVydGlzZVR5cGVTdGFmZjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGhyb3VnaCBhbGwgdGlja2V0cyBiYXNlZCBvblxuXHQgKiAgICAgLSBpZFxuXHQgKiAgICAgLSB0aXRsZVxuXHQgKlxuXHQgKiBTaG93IHRoZSByZXN1bHRzIGluIHRoZSBsaXN0LXZpZXdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFF1ZXJ5IHBvdGVudGlhbGx5IGNvbnRhaW5lZCBpbiBpZC90aXRsZVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5KSB7XG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+PSAyIHx8IChxdWVyeS5sZW5ndGggPiAwICYmIHF1ZXJ5ID09IHBhcnNlSW50KHF1ZXJ5KSkpIHtcblx0XHRcdHZhciBzZWFyY2hLZXlzID0gWydpZCcsICd0aXRsZSddLFxuXHRcdFx0XHR0aWNrZXRzICAgID0gdGhpcy50aWNrZXRNYW5hZ2VyLnNlYXJjaChxdWVyeSwgc2VhcmNoS2V5cyk7XG5cblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgdGlja2V0cywgYXN5bmMgZnVuY3Rpb24odGlja2V0KSB7XG5cdFx0XHRcdGxldCB0aWNrZXRTdGF0dXMgPSB0aWNrZXQuc3RhdHVzO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZDogdGlja2V0LmlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0aWNrZXQudGl0bGUsXG5cdFx0XHRcdFx0c3RhdHVzX25hbWU6ICc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHRpY2tldFN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCI+JyArIHRpY2tldFN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nLFxuXHRcdFx0XHRcdGNyZWF0ZWRfYXQ6IHRpY2tldC5jcmVhdGVkX2F0LFxuXHRcdFx0XHRcdHVwZGF0ZWRfYXQ6IHRpY2tldC51cGRhdGVkX2F0XG5cdFx0XHRcdH07IC8vIHRoZSBmb3JtYXQgcmVzdWx0cyBuZWVkIHRvIGJlIGluIGZvciB0aGUgdGhlIHJlc3VsdHMgdGFibGVcblx0XHRcdH0sIHNlYXJjaEtleXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dGaWx0ZXJlZFRpY2tldHMoJCgnLnNpZGUtbmF2LWJhci1uZXN0ZWQgbGkuYWN0aXZlJykuZGF0YSgnc2x1ZycpKTtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0UGFnZS5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVBhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgcHJvYmxlbXMgcGFnZSB3aXRoIGpRdWVyeSB1c2luZyBkYXRhIGZyb21cbiAqIHRoZSBFeHBlcnRpc2VUeXBlTWFuYWdlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVBhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKGlzUGFnZSA9IGZhbHNlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vIE1hbmFnZXJzXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICAgICAgICAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyICAgICAgICA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cblx0XHQvLyBUcnVlOiBodHRwOi8veC9wcm9ibGVtLXR5cGUsIEZhbHNlOiBQcm9ibGVtIHBpY2tlciBhcHBlYXJzIGluIGEgbW9kYWwgZXRjLlxuXHRcdHRoaXMuaXNQYWdlID0gaXNQYWdlO1xuXHR9XG5cblx0bG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlQ29sdW1ucywgJGxpID0gbnVsbCwgZXhwZXJ0aXNlVHlwZUlkID0gbnVsbCkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlID0gbnVsbDtcblxuXHRcdGlmICgkbGkpIHsgLy8gbGkgb2YgY3VycmVudCBFeHBlcnRpc2VUeXBlXG5cdFx0XHRleHBlcnRpc2VUeXBlID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCk7XG5cdFx0XHR0aGlzLmxvYWRFeHBlcnRpc2VUeXBlSW5mbyhleHBlcnRpc2VUeXBlKTtcblxuXHRcdFx0JGxpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuZmluZCgnc3Bhbi5zdWJ0bGUnKS50ZXh0KHRoaXMuZ2V0RXhwZXJ0aXNlVHlwZUJyZWFkY3J1bShleHBlcnRpc2VUeXBlKSk7XG5cblx0XHRcdCRsaS5wYXJlbnQoKS5uZXh0QWxsKCkucmVtb3ZlKCk7XG5cdFx0XHQkbGkucGFyZW50KCkuZmluZCgnbGkuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JGxpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2xpLmxhc3QtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2xhc3QtYWN0aXZlJyk7XG5cdFx0XHQkbGkuYWRkQ2xhc3MoJ2FjdGl2ZSBsYXN0LWFjdGl2ZScpO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZHJlbiAgICA9IFtdLFxuXHRcdFx0JHR5cGVDb2x1bW4gPSAkKCc8ZGl2IGNsYXNzPVwidHlwZS1jb2x1bW5cIj48L2Rpdj4nKTtcblxuXHRcdGlmIChleHBlcnRpc2VUeXBlSWQgPT09IG51bGwpIHtcblx0XHRcdGNoaWxkcmVuID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRSb290RXhwZXJ0aXNlVHlwZXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCRsaSkge1xuXHRcdFx0XHRjaGlsZHJlbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZS5fY2hpbGRyZW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGNoaWxkcmVuSWRzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCkuX2NoaWxkcmVuO1xuXHRcdFx0XHRjaGlsZHJlbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZXMoY2hpbGRyZW5JZHMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzcGVjaWFsaXN0cyA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldFNwZWNpYWxpc3RzKGNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5pZCkpO1xuXG5cdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcblx0XHRcdCR0eXBlQ29sdW1uLmFwcGVuZChcblx0XHRcdFx0JzxsaSAnICsgKGNoaWxkLl9jaGlsZHJlbi5sZW5ndGggPT09IDAgPyAnY2xhc3M9XCJuby1jaGlsZHJlblwiJyA6ICcnKSArICcgZGF0YS1leHBlcnRpc2UtdHlwZS1pZD1cIicgKyBjaGlsZC5pZCArICdcIj4nICtcblx0XHRcdFx0XHRjaGlsZC5uYW1lICtcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwZWNpYWxpc3QtY291bnRlclwiPicgK1xuXHRcdFx0XHRcdFx0KHNwZWNpYWxpc3RzW2ldLmxlbmd0aCA+IDAgPyBzcGVjaWFsaXN0c1tpXS5sZW5ndGggKyAnIDxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT4nIDogJzxpIGNsYXNzPVwiZmEgZmEtdXNlci10aW1lc1wiPjwvaT4nKSArXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWNhcmV0LXJpZ2h0XCI+PC9pPicgK1xuXHRcdFx0XHQnPC9saT4nXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQXBwZW5kIHRoZSBuZXcgLnR5cGUtY29sdW1uLCBzY3JvbGwgdG8gdGhlIHJpZ2h0IHRvIHZpZXcgaXRcblx0XHQkdHlwZUNvbHVtbnMuYXBwZW5kKCR0eXBlQ29sdW1uKTtcblx0XHQkdHlwZUNvbHVtbnMuc2Nyb2xsTGVmdCgkdHlwZUNvbHVtbnMud2lkdGgoKSk7XG5cdH1cblxuXHRsb2FkRXhwZXJ0aXNlVHlwZSgkdHlwZUNvbHVtbnMsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlICAgICAgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdGV4cGVydGlzZVR5cGVDaGFpbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpO1xuXG5cdFx0JHR5cGVDb2x1bW5zLmVtcHR5KCk7XG5cblx0XHR0aGlzLmxvYWRTdWJFeHBlcnRpc2VUeXBlcygkdHlwZUNvbHVtbnMpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGV4cGVydGlzZVR5cGVDaGFpbi5sZW5ndGggLSAyOyBpID49IC0xOyBpLS0pIHtcblx0XHRcdHByb2JsZW1UeXBlUGFnZS5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJHR5cGVDb2x1bW5zLCAkdHlwZUNvbHVtbnMuZmluZCgnLnR5cGUtY29sdW1uIGxpW2RhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCInICsgZXhwZXJ0aXNlVHlwZUNoYWluW2kgKyAxXS5pZCArICdcIl0nKSwgZXhwZXJ0aXNlVHlwZUNoYWluW2kgKyAxXS5pZCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9uIC9wcm9ibGVtLXR5cGVzLCBwb3B1bGF0ZSB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIGRldGFpbHNcblx0ICogcGFuZWwgb24gdGhlIHJpZ2h0IHdpdGggZGF0YSBmcm9tIGEgZ2l2ZW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgXG5cdCAqL1xuXHRsb2FkRXhwZXJ0aXNlVHlwZUluZm8oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciAkc2luZ2xlVmlldyBcdCAgICA9ICQodGhpcy5kZXRhaWxTZWxlY3RvciksXG5cdFx0XHQkbmF2QmFyICAgICAgICAgICAgID0gJHNpbmdsZVZpZXcuZmluZCgnLnRvcC1uYXYgaDQnKSxcblx0XHRcdCRzcGxhc2hTY3JlZW4gICAgICAgPSAkc2luZ2xlVmlldy5maW5kKCcuc3BsYXNoLXNjcmVlbicpLFxuXHRcdFx0JGV4cGVydGlzZVR5cGVWaWV3ICA9ICRzaW5nbGVWaWV3LmZpbmQoJyNwcm9ibGVtLXR5cGUtdmlldycpLFxuXHRcdFx0JGV4cGVydGlzZVR5cGVUYWJsZSA9ICRzaW5nbGVWaWV3LmZpbmQoJyNwcm9ibGVtLXR5cGVzLXRhYmxlIHRib2R5JyksXG5cdFx0XHQkc3BlY2lhbGlzdHNUYWJsZSAgID0gJHNpbmdsZVZpZXcuZmluZCgnI3NwZWNpYWxpc3RzLXRhYmxlIHRib2R5JyksXG5cdFx0XHQkdGlja2V0c1RhYmxlICAgICAgID0gJHNpbmdsZVZpZXcuZmluZCgnI3RpY2tldHMtdGFibGUgdGJvZHknKSxcblx0XHRcdCRub1NwZWNpYWxpc3RzRGF0YSAgPSAkc2luZ2xlVmlldy5maW5kKCcjbm8tc3BlY2lhbGlzdHMtZGF0YScpLFxuXHRcdFx0JG5vVGlja2V0c0RhdGEgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJyNuby10aWNrZXRzLWRhdGEnKTtcblxuXHRcdCRzcGxhc2hTY3JlZW4uYWRkQ2xhc3MoJ2Jsb2NrLWhpZGRlbicpO1xuXHRcdCRleHBlcnRpc2VUeXBlVmlldy5hZGRDbGFzcygnYmxvY2staGlkZGVuJyk7XG5cblx0XHRpZiAodGhpcy5pc1BhZ2UpIHtcblx0XHRcdCRuYXZCYXIudGV4dCh0aGlzLmdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0oZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblxuXHRcdCRleHBlcnRpc2VUeXBlVGFibGUuZW1wdHkoKTtcblx0XHQkc3BlY2lhbGlzdHNUYWJsZS5lbXB0eSgpLnBhcmVudCgpLmhpZGUoKTtcblx0XHQkdGlja2V0c1RhYmxlLmVtcHR5KCkucGFyZW50KCkuaGlkZSgpO1xuXG5cdFx0bGV0IGV4cGVydGlzZVR5cGVDaGFpbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpO1xuXG5cdFx0Ly8gU2hvdWxkIHByb2JhYmx5IG1vdmUgdGhlc2UgdG8gRHluYW1pY1BhZ2Vcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cGVydGlzZVR5cGVDaGFpbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGV4cGVydGlzZVR5cGUgPSBleHBlcnRpc2VUeXBlQ2hhaW5baV07XG5cblx0XHRcdCRleHBlcnRpc2VUeXBlVGFibGUucHJlcGVuZChcblx0XHRcdFx0Jzx0ciAnICsgKGkgPT09IDAgPyAnY2xhc3M9XCJoaWdobGlnaHRcIicgOiAnJykgKyAnIGRhdGEtcm93aWQ9XCInICsgZXhwZXJ0aXNlVHlwZS5pZCArICdcIj4nICtcblx0XHRcdFx0XHQnPHRkPicgKyBleHBlcnRpc2VUeXBlLmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgZXhwZXJ0aXNlVHlwZS5uYW1lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgKGV4cGVydGlzZVR5cGUuX3BhcmVudCAhPT0gbnVsbCA/IGV4cGVydGlzZVR5cGVDaGFpbltpICsgMV0ubmFtZSA6ICdOL0EnKSArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdCc8L3RyPidcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0JGV4cGVydGlzZVR5cGVWaWV3LnJlbW92ZUNsYXNzKCdibG9jay1oaWRkZW4nKTtcblxuXHRcdGxldCBzcGVjaWFsaXN0cyA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGUuaWQpO1xuXG5cdFx0aWYgKHNwZWNpYWxpc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdCRzcGVjaWFsaXN0c1RhYmxlLnBhcmVudCgpLnNob3coKTtcblx0XHRcdCRub1NwZWNpYWxpc3RzRGF0YS5oaWRlKCk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BlY2lhbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHNwZWNpYWxpc3QgPSBzcGVjaWFsaXN0c1tpXTtcblxuXHRcdFx0XHQkc3BlY2lhbGlzdHNUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdFx0Jzx0ciAnICsgKHNwZWNpYWxpc3QuaWQgPT09IHRoaXMuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkgPyAnY2xhc3M9XCJoaWdobGlnaHRcIicgOiAnJykgKyAnIGRhdGEtcm93aWQ9XCInICsgc3BlY2lhbGlzdC5pZCArICdcIj4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArIHNwZWNpYWxpc3QuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArIHNwZWNpYWxpc3QubmFtZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0Jzx0ZD4nICsgc3BlY2lhbGlzdC5qb2IgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArIHNwZWNpYWxpc3QucGhvbmUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNwZWNpYWxpc3RzVGFibGUucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0JG5vU3BlY2lhbGlzdHNEYXRhLnNob3coKTtcblx0XHR9XG5cblx0XHQvLyBPbmx5IGdldCB0aWNrZXRzIGlmIHRoZXJlIGlzIGEgdGFibGUgdG8gcHV0IHRoZSByZXN1bHRzIGluXG5cdFx0aWYgKCR0aWNrZXRzVGFibGUubGVuZ3RoID4gMCkge1xuXG5cdFx0XHQvLyBHZXQgdGlja2V0cyB0byBmaWxsIHJlbGF0ZWQgdGlja2V0cyB0YWJsZSBpbiBzaW5nbGUtdmlld1xuXHRcdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGUuaWQpO1xuXHRcdFx0XG5cdFx0XHQvLyBPbmx5IGZpbGwgdGlja2V0cyB0YWJsZSBpZiB0aGVyZSBhcmUgYW55IG1hdGNoaW5nIHRpY2tldHNcblx0XHRcdGlmICh0aWNrZXRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JHRpY2tldHNUYWJsZS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHRcdCRub1RpY2tldHNEYXRhLmhpZGUoKTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpY2tldHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgdGlja2V0ID0gdGlja2V0c1tpXTtcblxuXHRcdFx0XHRcdCR0aWNrZXRzVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIHRpY2tldC5pZCArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgdGlja2V0LmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyB0aWNrZXQudGl0bGUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJmaWx0ZXJcIj4nICsgdGlja2V0LnN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyB0aWNrZXQuY3JlYXRlZF9hdCArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPC90cj4nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNob3cgYSBtZXNzYWdlIGluc3RlYWQgb2YgdGhlIHRhYmxlXG5cdFx0XHRcdCR0aWNrZXRzVGFibGUucGFyZW50KCkuaGlkZSgpO1xuXHRcdFx0XHQkbm9UaWNrZXRzRGF0YS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgdGhlIG5hbWVzIG9mIGFuIEV4cGVydGlzZVR5cGUsIGFuZCBpdHMgcGFyZW50cyxcblx0ICogaW4gb3JkZXJlZCBmYXNoaW9uLlxuXHQgKlxuXHQgKiBlLmcuIFwiRWxlY3Ryb25pY3MgLyBQcmludGVyIC8gUHJpbnRlciBJbmsgLyBDeWFuIElua1wiXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gQnJlYWRjcnVtIG9mIEV4cGVydGlzZVR5cGUubmFtZSdzLCBmcm9tIHRoZSByb290IHRvIGEgRXhwZXJ0aXNlVHlwZSBcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZSxcblx0XHRcdGJyZWFkY3J1bSAgICAgICAgICAgPSAnJztcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGJyZWFkY3J1bSA9IGV4cGVydGlzZVR5cGVQYXJlbnQubmFtZSArIGJyZWFkY3J1bTtcblxuXHRcdFx0ZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGVQYXJlbnQucGFyZW50O1xuXG5cdFx0XHRpZiAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGJyZWFkY3J1bSA9ICcgLyAnICsgYnJlYWRjcnVtO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBicmVhZGNydW07XG5cdH1cblxuXHQvKipcblx0ICogRGlzcGxheSBFeHBlcnRpc2VUeXBlJ3MgYXMgYSB0YWJsZSBpZiB0aGVpciBuYW1lXG5cdCAqIGNvbnRhaW5zIHRoZSBxdWVyeSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUbyBjaGVjayBpZiBpbiBFeHBlcnRpc2VUeXBlLm5hbWVcblx0ICovXG5cdHNlYXJjaChxdWVyeSkge1xuXHRcdHZhciAkZXhwZXJ0aXNlVHlwZVBpY2tlciA9ICQoJy5wcm9ibGVtLXR5cGUtcGlja2VyJyksXG5cdFx0XHQkdGFibGVTZWN0aW9uICAgICAgICA9ICQodGhpcy50YWJsZVNlbGVjdG9yKTtcblxuXHRcdC8vIElmIHNlYXJjaCB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgaWdub3JlXG5cdFx0bGV0IHByZXZRdWVyeSA9ICQoXCIubWFpbi1jb250ZW50LXRpdGxlXCIpLnZhbCgpO1xuXG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0cXVlcnkgPT09IHByZXZRdWVyeS5zdWJzdHJpbmcocHJldlF1ZXJ5Lmxhc3RJbmRleE9mKFwi4oCYXCIpKzEscHJldlF1ZXJ5Lmxhc3RJbmRleE9mKFwi4oCZXCIpKSlcblx0XHRcdHJldHVybjtcblxuXHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJykuYWRkQ2xhc3MoJ2Jsb2NrLWhpZGRlbicpO1xuXG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+PSAyIHx8IChxdWVyeS5sZW5ndGggPiAwICYmIHF1ZXJ5ID09IHBhcnNlSW50KHF1ZXJ5KSkpIHtcblx0XHRcdCRleHBlcnRpc2VUeXBlUGlja2VyLmhpZGUoKTtcblx0XHRcdCR0YWJsZVNlY3Rpb24uc2hvdygpO1xuXG5cdFx0XHR2YXIgc2VhcmNoS2V5cyAgICAgPSBbJ25hbWUnXSwgLy8gb25seSBzZWFyY2ggb24gdGhpcyBwcm9wZXJ0eVxuXHRcdFx0XHRleHBlcnRpc2VUeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hLZXlzKTtcblxuXHRcdFx0c3VwZXIuc2VhcmNoKHF1ZXJ5LCBleHBlcnRpc2VUeXBlcywgYXN5bmMgZnVuY3Rpb24oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkOiBleHBlcnRpc2VUeXBlLmlkLFxuXHRcdFx0XHRcdG5hbWU6IGV4cGVydGlzZVR5cGUubmFtZSxcblx0XHRcdFx0XHRwYXJlbnQ6IChleHBlcnRpc2VUeXBlLl9wYXJlbnQgIT0gbnVsbCA/IGV4cGVydGlzZVR5cGUucGFyZW50Lm5hbWUgOiAnbi9hJylcblx0XHRcdFx0fTsgLy8gZm9ybWF0IG9mIHJlc3VsdHMgdGFibGVcblx0XHRcdH0sIHNlYXJjaEtleXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBIaWRlIHRhYmxlLCByZXN0b3JlIGJhY2sgdG8gbm9ybWFsXG5cdFx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcudG9wLW5hdiBoNCcpLnRleHQoJ1Byb2JsZW0gVHlwZXMnKTtcblx0XHRcdCRleHBlcnRpc2VUeXBlUGlja2VyLnNob3coKTtcblx0XHRcdCR0YWJsZVNlY3Rpb24uaGlkZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGFuZCBoaWdobGlnaHQgYSBFeHBlcnRpc2VUeXBlIGJ5IElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gaWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICovXG5cdGdvdG8oaWQpIHtcblx0XHQvLyBTaG93IGRldGFpbHNcblx0XHRsZXQgdHlwZSA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShpZCk7XG5cblx0XHQvLyBTaW11bHRhbmVvdXNseSAoYXN5bmNocm9ub3VzbHkp4oCmXG5cdFx0Ly8gLSBsb2FkIHRoZSBpbmRpdmlkdWFsIGV4cGVydGlzZSB0eXBlIGRldGFpbHNcblx0XHR0aGlzLmxvYWRFeHBlcnRpc2VUeXBlSW5mbyh0eXBlKTtcblxuXHRcdC8vIC0gbG9hZCB0aGUgaGllcmFyY2h5IGZvciB0aGUgZXhwZXJ0aXNlIHR5cGVcblx0XHRsZXQgdHlwZUNoYWluID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlQ2hhaW4odHlwZSk7XG5cblx0XHR3aGlsZSAodHlwZUNoYWluLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCB0eXBlICA9IHR5cGVDaGFpbi5wb3AoKSxcblx0XHRcdFx0JHR5cGUgPSAkKGBbZGF0YS1leHBlcnRpc2UtdHlwZS1pZD1cIiR7dHlwZS5pZH1cIl1gKS5hZGRDbGFzcyhcImFjdGl2ZSBsYXN0LWFjdGl2ZVwiKTtcblxuXHRcdFx0dGhpcy5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJHR5cGUucGFyZW50cyhcIi50eXBlLWNvbHVtbnNcIiksIG51bGwsIHR5cGUuaWQpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL1Byb2JsZW1UeXBlUGFnZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGFmZkV4cGVydGlzZVR5cGVQYWdlXG4gKlxuICogSW5jbHVkZXMgc3BlY2lhbGlzdCBhbGxvY2F0aW9ucyBvbiB0b3Agb2YgRXhwZXJ0aXNlVHlwZVBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZFeHBlcnRpc2VUeXBlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vIE1hbmFnZXJzXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcyA9IFtdO1xuXHR9XG5cblx0YXN5bmMgbG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcygkdHlwZUNvbHVtbnMsICRsaSA9IG51bGwsIGV4cGVydGlzZVR5cGVJZCA9IG51bGwpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZSA9IG51bGw7XG5cdFx0XG5cdFx0aWYgKCRsaSkge1xuXHRcdFx0ZXhwZXJ0aXNlVHlwZSA9IGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpO1xuXG5cdFx0XHQkbGkucGFyZW50KCkubmV4dEFsbCgpLnJlbW92ZSgpO1xuXHRcdFx0JGxpLnBhcmVudCgpLmZpbmQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCRsaS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdsaS5sYXN0LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdsYXN0LWFjdGl2ZScpO1xuXHRcdFx0JGxpLmFkZENsYXNzKCdhY3RpdmUgbGFzdC1hY3RpdmUnKTtcblxuXHRcdFx0aWYgKCRsaS5oYXNDbGFzcygnbm8tY2hpbGRyZW4nKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0eXBlQ29sdW1ucy5lbXB0eSgpO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZHJlbiAgICA9IFtdLFxuXHRcdFx0JHR5cGVDb2x1bW4gPSAkKCc8ZGl2IGNsYXNzPVwidHlwZS1jb2x1bW5cIj48L2Rpdj4nKTtcblxuXHRcdGlmIChleHBlcnRpc2VUeXBlSWQgPT09IG51bGwpIHtcblx0XHRcdGNoaWxkcmVuID0gYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRSb290RXhwZXJ0aXNlVHlwZXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRyZW4gPSBhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGUuX2NoaWxkcmVuKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuXHRcdFx0JHR5cGVDb2x1bW4uYXBwZW5kKFxuXHRcdFx0XHQnPGxpICcgKyAoY2hpbGQuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCA/ICdjbGFzcz1cIm5vLWNoaWxkcmVuXCInIDogJycpICsgJyBkYXRhLWV4cGVydGlzZS10eXBlLWlkPVwiJyArIGNoaWxkLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdGNoaWxkcmVuW2ldLm5hbWUgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3BlY2lhbGlzbS1jaGVja2JveCBwdWxsLXJpZ2h0XCI+JyArXG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuaW5kZXhPZihjaGlsZC5pZCkgPiAtMSA/ICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPicgOiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4nKSArXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHQnPC9saT4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdCR0eXBlQ29sdW1ucy5hcHBlbmQoJHR5cGVDb2x1bW4pO1xuXHRcdCR0eXBlQ29sdW1ucy5zY3JvbGxMZWZ0KCR0eXBlQ29sdW1ucy53aWR0aCgpKTtcblx0fVxuXG5cdGFzeW5jIHRvZ2dsZVNwZWNpYWxpc20oJHNwZWNpYWxpc21DaGVja2JveCkge1xuXHRcdGxldCBjbGlja2VkU3BlY2lhbGlzbUlkICAgICAgID0gTnVtYmVyKCRzcGVjaWFsaXNtQ2hlY2tib3gucGFyZW50KCkuZGF0YSgnZXhwZXJ0aXNlVHlwZUlkJykpLFxuXHRcdFx0Y3VycmVudFNwZWNpYWxpc21zSW5kZXhPZiA9IHRoaXMuY3VycmVudFNwZWNpYWxpc21zLmluZGV4T2YoY2xpY2tlZFNwZWNpYWxpc21JZCksXG5cdFx0XHQkaWNvbiAgICAgICAgICAgICAgICAgICAgID0gJHNwZWNpYWxpc21DaGVja2JveC5maW5kKCdpJyk7XG5cblx0XHQvLyBRdWlja2x5IGd1ZXNzIGFuZCBzZXQgaWNvbiBmb3IgcmVzcG9uc2l2ZSBVSVxuXHRcdCRpY29uLmhhc0NsYXNzKFwiZmEtY2hlY2tcIikgPyAkaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrXCIpIDogJGljb24uYWRkQ2xhc3MoXCJmYS1jaGVja1wiKTtcblxuXHRcdGxldFx0Y2hpbGRyZW4gPSBhd2FpdCAoYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGNsaWNrZWRTcGVjaWFsaXNtSWQpKS5jaGlsZHJlbjtcblxuXHRcdGlmIChjdXJyZW50U3BlY2lhbGlzbXNJbmRleE9mID4gLTEpIHtcblx0XHRcdHRoaXMuY3VycmVudFNwZWNpYWxpc21zLnNwbGljZShjdXJyZW50U3BlY2lhbGlzbXNJbmRleE9mLCAxKTtcblx0XHRcdCRpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKCdmYS10aW1lcycpO1xuXG5cdFx0XHRpZiAodGhpcy5zaG91bGRSZW1vdmVDaGlsZFNwZWNpYWxpc21zKGNoaWxkcmVuKSkge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUNoaWxkcmVuKGNoaWxkcmVuLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3VycmVudFNwZWNpYWxpc21zLnB1c2goY2xpY2tlZFNwZWNpYWxpc21JZCk7XG5cdFx0XHQkaWNvbi5yZW1vdmVDbGFzcygnZmEtdGltZXMnKS5hZGRDbGFzcygnZmEtY2hlY2snKTtcblxuXHRcdFx0dGhpcy50b2dnbGVDaGlsZHJlbihjaGlsZHJlbiwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlQ2hpbGRyZW4oY2hpbGRyZW4sIHN0YXR1cyA9IGZhbHNlKSB7XG5cdFx0Y2hpbGRyZW4uZm9yRWFjaChhc3luYyBjaGlsZCA9PiB7XG5cdFx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5pbmRleE9mKGNoaWxkLmlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5wdXNoKGNoaWxkLmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGluZGV4T2YgPSB0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5pbmRleE9mKGNoaWxkLmlkKTtcblxuXHRcdFx0XHRpZiAoaW5kZXhPZiA+IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuc3BsaWNlKGluZGV4T2YsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGl0ZXJhdGUgYWxsIGNoaWxkcmVuXG5cdFx0XHRsZXQgY2hpbGRyZW4gPSBhd2FpdCBjaGlsZC5jaGlsZHJlbjtcblx0XHRcdGlmIChjaGlsZHJlbikge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZUNoaWxkcmVuKGNoaWxkcmVuLCBzdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Lypcblx0ICogV2Ugc2hvdWxkIG9ubHkgbWVzcyB3aXRoIGNoaWxkcmVuIGlmIHRoZXlcblx0ICogYWxsIGhhdmUgdGhlIHNhbWUgc3RhdHVzXG5cdCAqL1xuXHRzaG91bGRSZW1vdmVDaGlsZFNwZWNpYWxpc21zKGNoaWxkcmVuKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG5cblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5pbmRleE9mKGNoaWxkLmlkKSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuc2hvdWxkUmVtb3ZlQ2hpbGRTcGVjaWFsaXNtcyhjaGlsZC5jaGlsZHJlbikpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0YXN5bmMgZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlID0gYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHRzcGVjaWFsaXN0cyAgID0gYXdhaXQgdGhpcy5zdGFmZk1hbmFnZXIuZ2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZUlkKTtcblxuXHRcdGlmIChzcGVjaWFsaXN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgYmVzdFNwZWNpYWxpc3QgPSBudWxsLFxuXHRcdFx0XHRiZXN0Q291bnQgICAgICA9IG51bGwsXG5cdFx0XHRcdG9wZW5UaWNrZXRzICAgID0gYXdhaXQgdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNXaXRoU2x1Z0luKFsnbmV3JywgJ3BlbmRpbmdfaW5fcHJvZ3Jlc3MnLCAncGVuZGluZ19hd2FpdGluZ19zdGFmZiddKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGVjaWFsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgc3BlY2lhbGlzdCAgICAgID0gc3BlY2lhbGlzdHNbaV0sXG5cdFx0XHRcdFx0YXNzaWduZWRUb0NvdW50ID0gMDtcblxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG9wZW5UaWNrZXRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKG9wZW5UaWNrZXRzW2pdLl9hc3NpZ25lZF90byA9PT0gc3BlY2lhbGlzdC5pZCkge1xuXHRcdFx0XHRcdFx0YXNzaWduZWRUb0NvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGJlc3RTcGVjaWFsaXN0ID09PSBudWxsIHx8IGFzc2lnbmVkVG9Db3VudCA8IGJlc3RDb3VudCkge1xuXHRcdFx0XHRcdGJlc3RTcGVjaWFsaXN0ID0gc3BlY2lhbGlzdDtcblx0XHRcdFx0XHRiZXN0Q291bnQgICAgICA9IGFzc2lnbmVkVG9Db3VudDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkKGV4cGVydGlzZVR5cGVJZCwgYmVzdFNwZWNpYWxpc3QuaWQpKTtcblx0XHR9XG5cblx0XHRpZiAoZXhwZXJ0aXNlVHlwZS5fcGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRCZXN0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZS5fcGFyZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlByb2JsZW1UeXBlUGFnZS5qcyIsImltcG9ydCBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBUaWNrZXRQYWdlIGZyb20gXCIuL1RpY2tldFBhZ2VcIjtcbmltcG9ydCBQcm9ibGVtVHlwZVBhZ2UgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvUHJvYmxlbVR5cGVQYWdlXCI7XG5pbXBvcnQgU3RhZmZQcm9ibGVtVHlwZVBhZ2UgZnJvbSBcIi4uL3N0YWZmL1N0YWZmUHJvYmxlbVR5cGVQYWdlXCI7XG5pbXBvcnQgQVBJIGZyb20gXCIuLi9BUElcIjtcblxuLyoqXG4gKiB0aWNrZXRzLmpzXG4gKlxuICogQWN0cyBhcyBhbiBhY2Nlc3MgcG9pbnQgZm9yXG4gKiAgICAtIFRpY2tldFBhZ2UuanNcbiAqICAgIC0gUHJvYmxlbVR5cGVQYWdlLmpzXG4gKiAgICAtIFN0YWZmUHJvYmxlbVR5cGVQYWdlLmpzXG4gKiBUaHJvdWdoIHdoaWNoLCB5b3UgY2FuIGFjY2VzcyB0aGUgbWFuYWdlcnMuXG4gKlxuICogdGlja2V0cy5qcyBjb250YWlucyBvbmx5IGluaXRpYWxpemF0aW9uIG1ldGhvZHMgZm9yIHRoZVxuICogdGlja2V0cyBwYWdlLCBhbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBlbGVtZW50c1xuICogb24gdGhlIHRpY2tldHMgcGFnZS5cbiAqL1xuXG5sZXQgdGlja2V0UGFnZSwgcHJvYmxlbVR5cGVQYWdlLCBzdGFmZlByb2JsZW1UeXBlUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cblx0dGlja2V0UGFnZSAgICAgICAgICAgPSB3aW5kb3cudGlja2V0UGFnZSAgICAgICAgICAgPSBuZXcgVGlja2V0UGFnZSgpO1xuXHRwcm9ibGVtVHlwZVBhZ2UgICAgICA9IHdpbmRvdy5wcm9ibGVtVHlwZVBhZ2UgICAgICA9IG5ldyBQcm9ibGVtVHlwZVBhZ2UodHJ1ZSk7XG5cdHN0YWZmUHJvYmxlbVR5cGVQYWdlID0gd2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlID0gbmV3IFN0YWZmUHJvYmxlbVR5cGVQYWdlKCk7XG5cblx0aWYgKCFsb2NhdGlvbi5oYXNoKSB0aWNrZXRQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTsgLy8gc2hvdyB0aGUgdGFibGUgdmlldyBpZiB0aGVyZSdzIG5vIGhhc2ggaW4gdGhlIFVSTFxuXG5cdC8vIEluaXRpYWxpemF0aW9uOiBTaG93IHRpY2tldHMgd2l0aCB0aGUgc3RhdHVzZXMgXCJOZXdcIiwgXCJQZW5kaW5nIC0gSW4gUHJvZ3Jlc3NcIiBhbmQgXCJSZXNvbHZlZFwiXG5cdHRpY2tldFBhZ2Uuc2hvd0ZpbHRlcmVkVGlja2V0cygnbmV3LHBlbmRpbmdfaW5fcHJvZ3Jlc3MscmVzb2x2ZWQnKTtcblxuXHRpZiAobG9jYXRpb24uaGFzaCkgdGlja2V0UGFnZS5zaG93VGlja2V0VmlldyhwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdC8vXG5cdC8vIEluaXRpYWxpc2UgRXZlbnQgTGlzdGVuZXJzOlxuXHQvL1xuXG5cdC8vIEZpbHRlciB0aGUgbGlzdCB3aGVuIGNsaWNraW5nIG9uIHN0YXR1c2VzIGluIHRoZSBsZWZ0IHNpZGUgbmF2IGJhclxuXHQkKCcuc2lkZS1uYXYtYmFyLW5lc3RlZCB1bCBsaVtkYXRhLXNsdWddJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoXCJcIik7XG5cdFx0dGlja2V0UGFnZS5yZWZyZXNoUGFnZSh0aGlzLmRhdGFzZXQuc2x1Zyk7XG5cdH0pO1xuXG5cdC8vIFNob3cgdGhlIHRpY2tldCdzIGRldGFpbHMgd2hlbiBjbGlja2luZyBvbiBvbmUgLS0gZGlzYWxsb3cgY2xpY2tzIG9uIHllbGxvdyBoaWdobGlnaHRlZCB0aWNrZXRzICh0aGUgY3VycmVudCBvbmUpXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjdGFibGUtc2VjdGlvbiAudGFibGUgdGJvZHkgdHI6bm90KC5oaWdobGlnaHQpJywgZnVuY3Rpb24oKSB7XG5cdFx0dGlja2V0UGFnZS5zaG93VGlja2V0VmlldyhOdW1iZXIodGhpcy5kYXRhc2V0LnJvd2lkKSk7XG5cdH0pO1xuXG5cdC8vIFRoZSBjbG9zZSBidXR0b24gaW4gdGhlIHRpY2tldCdzIGRldGFpbHNcblx0JCgnLnRpY2tldC1jbG9zZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHR0aWNrZXRQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0fSk7XG5cblx0Ly8gT3BlbiB0aGUgVmlldyBDYWxsIGhpc3RvcnkgZm9yIHRoZSBjbGlja2VkIGNhbGxcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN0aWNrZXQtdmlldyAjY2FsbC1oaXN0b3J5LXRhYmxlIHRib2R5IHRyJywgZnVuY3Rpb24oKSB7XG5cdFx0dGlja2V0UGFnZS5zaG93Q2FsbFRpY2tldHNNb2RhbChOdW1iZXIodGhpcy5kYXRhc2V0LnJvd2lkKSk7XG5cdH0pO1xuXG5cdC8vIEdvIHRvIHRoZSB0aWNrZXQgY2xpY2tlZCBpbiB0aGUgVmlldyBDYWxsIEhpc3RvcnkgbW9kYWxcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN2aWV3LWNhbGwtaGlzdG9yeS1tb2RhbCAjY2FsbC10aWNrZXRzLXRhYmxlIHRib2R5IHRyOm5vdCguaGlnaGxpZ2h0KScsIGZ1bmN0aW9uKCkge1xuXHRcdHRpY2tldFBhZ2Uuc2hvd0NhbGxUaWNrZXQoTnVtYmVyKHRoaXMuZGF0YXNldC5yb3dpZCkpO1xuXHR9KTtcblxuXHQvLyBOYXZpZ2F0ZSB0aHJvdWdoIHRoZSBwcm9ibGVtIHR5cGUgcGlja2VyLCBsb2FkIGluIHRoZSBjaGlsZHJlbiBhbmQgZ2V0IHRoZSBiZXN0IHNwZWNpYWxpc3QgZm9yIHRoZSBqb2Jcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wcm9ibGVtLXR5cGUtcGlja2VyOm5vdCgucHJvYmxlbS10eXBlLWNoZWNrYm94ZXMpIC50eXBlLWNvbHVtbiBsaScsIGZ1bmN0aW9uKCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlSWQgPSBOdW1iZXIoJCh0aGlzKS5kYXRhKCdleHBlcnRpc2VUeXBlSWQnKSk7XG5cblx0XHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCQodGhpcykuY2xvc2VzdCgnLnR5cGUtY29sdW1ucycpLCAkKHRoaXMpLCBleHBlcnRpc2VUeXBlSWQpO1xuXG5cdFx0bGV0IGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYgPSB0aWNrZXRQYWdlLnNldFNwZWNpYWxpc3QoZXhwZXJ0aXNlVHlwZUlkLCAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykubGVuZ3RoID4gMCA/ICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuYXNzaWduZWQtdG8tb3B0aW9ucycpIDogJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKS5maW5kKCcuYXNzaWduZWQtdG8tb3B0aW9ucycpKTtcblxuXHRcdCQodGhpcykuY2xvc2VzdCgnLnByb2JsZW0tdHlwZS1waWNrZXInKS5zaWJsaW5ncygnaW5wdXRbbmFtZSo9ZXhwZXJ0aXNlX3R5cGVfc3RhZmZdJykudmFsKGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYgIT09IG51bGwgPyBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmLmlkIDogJycpO1xuXHR9KTtcblxuXHQvLyBXaGVuIGEgY2hlY2tib3ggZm9yIGEgcHJvYmxlbSB0eXBlIGlzIGNsaWNrZWQsIGxvYWQgaW4gdGhlIGNoaWxkcmVuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvYmxlbS10eXBlLWNoZWNrYm94ZXMgLnR5cGUtY29sdW1uIGxpJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1jaGlsZHJlbicpKSB7XG5cdFx0XHRzdGFmZlByb2JsZW1UeXBlUGFnZS5sb2FkU3BlY2lhbGlzdFByb2JsZW1UeXBlcygkKHRoaXMpLmNsb3Nlc3QoJy50eXBlLWNvbHVtbnMnKSwgJCh0aGlzKSwgTnVtYmVyKCQodGhpcykuZGF0YSgnZXhwZXJ0aXNlVHlwZUlkJykpKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFRvZ2dsZSBhbGwgc3BlY2lhbGlzbXMgZm9yIHRoZSBjaGlsZHJlbiBvZiB0aGlzIHNwZWNpYWxpc21cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wcm9ibGVtLXR5cGUtY2hlY2tib3hlczpub3QoLnJlYWRvbmx5KSAudHlwZS1jb2x1bW4gbGkgLnNwZWNpYWxpc20tY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcblx0XHRzdGFmZlByb2JsZW1UeXBlUGFnZS50b2dnbGVTcGVjaWFsaXNtKCQodGhpcykpO1xuXHR9KTtcblxuXHQvLyBUcmlnZ2VyIGEgc2VhcmNoIG9uIFRpY2tldFBhZ2Ugd2hlbiB0aGUgU2VhcmNoIGZpZWxkIGhhcyBiZWVuIHR5cGVkIGluXG5cdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHR0aWNrZXRQYWdlLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcblx0fSk7XG5cblx0Ly8gQ3JlYXRlIGEgUHJvYmxlbSBUeXBlIGJhc2VkIG9uIHdoYXQgdGhlIHVzZXIncyB0eXBlZCBpbiwgcGxhY2UgaXQgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24gaW4gLnR5cGVzLWNvbHVtblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNyZWF0ZS1wcm9ibGVtLXR5cGUnLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgJHBhcmVudEV4cGVydGlzZVR5cGUgID0gJCh0aGlzKS5jbG9zZXN0KCcudHlwZS1jb2x1bW4nKS5wcmV2KCkuZmluZCgnLmFjdGl2ZScpLFxuXHRcdFx0cGFyZW50RXhwZXJ0aXNlVHlwZUlkID0gTnVtYmVyKCRwYXJlbnRFeHBlcnRpc2VUeXBlLmRhdGEoJ2V4cGVydGlzZVR5cGVJZCcpKTtcblxuXHRcdGlmICgkcGFyZW50RXhwZXJ0aXNlVHlwZS5sZW5ndGggPT09IDApIHsgLy8gTm8gcGFyZW50cyBhcmUgZm91bmQgKGl0J3MgaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0XHRcdHBhcmVudEV4cGVydGlzZVR5cGVJZCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cHJvYmxlbVR5cGVQYWdlLmNyZWF0ZUV4cGVydGlzZVR5cGUoJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKSwgcGFyZW50RXhwZXJ0aXNlVHlwZUlkKTtcblx0fSk7XG5cblx0Ly8gR28gdG8gdGhlIGNvcnJlY3QgaGFyZHdhcmUgb3Igc29mdHdhcmUgcGFnZSwgdmlld2luZyB0aGUgY2xpY2tlZCBpdGVtXG5cdCQoXCIjaGFyZHdhcmUtc29mdHdhcmUtdGFibGVcIikub24oXCJjbGlja1wiLCBcInRyW2RhdGEtcm93aWRdXCIsIGUgPT4ge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCkuc3BsaXQoXCIjXCIpWzBdLnJlcGxhY2UoXCJ0aWNrZXRzXCIsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd3R5cGUgKyBcIiNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTsgLy8gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93dHlwZSByZXR1cm5zIFwiaGFyZHdhcmVcIiBvciBcInNvZnR3YXJlXCJcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ub3RlLWFib3V0LWNhbGwnLCBmdW5jdGlvbigpIHtcblx0XHR0aWNrZXRQYWdlLnNob3dDYWxsVGlja2V0c01vZGFsKE51bWJlcigkKHRoaXMpLmRhdGEoJ2NhbGxJZCcpKSk7XG5cdH0pO1xuXG5cdC8vIEtleWJvYXJkIHNob3J0Y3V0c1xuXHQkKGRvY3VtZW50KS5rZXl1cChlID0+IHtcblx0XHQvLyBJZ25vcmUgaWYgaW4gaW5wdXRcblx0XHRpZiAoW1wiaW5wdXRcIiwgXCJ0ZXh0YXJlYVwiXS5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcblx0XHRcdGNhc2UgMzg6IC8vIHVwXG5cdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdGxldCBpZCA9IDE7XG5cdFx0XHRcdGlmIChsb2NhdGlvbi5oYXNoLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhhc2ggPSAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhhc2ggPSBpZCA9IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSArIChlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxKTsgLy8gdXAgb3IgZG93blxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCAkcm93ID0gJCh0aWNrZXRQYWdlLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBpZCArIFwiXFxcIl1cIik7XG5cdFx0XHRcdC8vIERvZXMgcm93IHdpdGggSUQgZXhpc3Rcblx0XHRcdFx0aWYgKCRyb3cubGVuZ3RoID09PSAwKSByZXR1cm47XG5cdFx0XHRcdCQodGlja2V0UGFnZS50YWJsZVNlbGVjdG9yKS5maW5kKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgaWQgKyBcIlxcXCJdXCIpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XHRcdHRpY2tldFBhZ2Uuc2hvd1RpY2tldFZpZXcoaWQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjc6IC8vIGVzY1xuXHRcdFx0XHR0aWNrZXRQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy90aWNrZXRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==