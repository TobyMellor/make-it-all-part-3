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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Problem types page JS for loading and managing the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * different types of problems a ticket may have.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This page needs to load each problem type, and handle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * loading children for each type when the user selects one.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * The user can create and delete problem types, as well as see
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * how many staff have a specialism in each problem type. Each type
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * also provides quick links to tickets which have been created
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * about the problem type and links to the staff members with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * the specialism.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

__webpack_require__(7);

var _TicketPage = __webpack_require__(25);

var _TicketPage2 = _interopRequireDefault(_TicketPage);

var _ProblemTypePage = __webpack_require__(26);

var _ProblemTypePage2 = _interopRequireDefault(_ProblemTypePage);

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ticketPage = void 0,
    problemTypePage = void 0,
    api = void 0;

window.init = function (data) {
	api = window.api = new _API2.default(data);

	ticketPage = window.ticketPage = new _TicketPage2.default();
	problemTypePage = window.problemTypePage = new _ProblemTypePage2.default(true);

	// Initially, load all expertise types at the root (types without a parent)
	problemTypePage.loadSubExpertiseTypes($('.type-columns'));

	// Determine if the page should jump directly to a type by ID in the hash
	if (location.hash) {
		problemTypePage.goto(Number(location.hash.substring(1)));
	}

	// On clicking a problem type, load and display all children of this type
	$(document).on('click', '.type-column li', function () {
		var id = Number($(this).data('expertiseTypeId'));

		// Simultaneously (asynchronously) perform the following tasks
		// - show the details about the selected type in the single view on the right
		problemTypePage.showTableRowDetails(id);
		// - show the children of the selected type in the main view
		problemTypePage.loadSubExpertiseTypes($('.type-columns'), $(this), id);

		// Set the hash fragment for the unique URL for the type selected
		location.hash = id;
	});

	// Problem type info shows table with parent types
	// Clicking on a type takes you to the type you clicked
	$("#problem-types-table").on('click', 'tbody tr:not(.highlight)', function () {
		$(".problem-type-picker").find("[data-expertise-type-id=\"" + this.dataset.rowid + "\"]").click();
	});

	// Clicking on a search result takes you to the selected type and clears the search
	$(document).on('click', '#table-section tbody tr:not(.highlight)', function () {
		// Go to selected type
		problemTypePage.goto(parseInt(this.dataset["rowid"]));
		// Reset search
		$('.search-field input').val('');
		problemTypePage.search("");
	});

	// Creating a new problem type with the name given by the user
	$(document).on('click', '.create-problem-type', function () {
		// Get the new name of a problem type
		var name = $(this).parent().siblings('input').val();
		// Check if a name has been given, don't create a problem type with no name
		if (!name) {
			return;
		}
		// Get the parent if it exists for the new problem type to be added to
		var parentId = $(this).closest('.type-column').prev().find('.active').data("expertiseTypeId");
		// Create problem type
		problemTypePage.createExpertiseType(name, parentId);
	});

	$("#problem-type-view").on("click", ".btn-danger", function () {
		// Get info about the problem type to be deleted, including
		// ID and name of type and ID of parent if applicable
		var $row = $("#problem-types-table").find(".highlight");

		var _$row$children$map = $row.children("td:not(:last-child)").map(function (_, el) {
			return el.textContent;
		}),
		    _$row$children$map2 = _slicedToArray(_$row$children$map, 2),
		    id = _$row$children$map2[0],
		    name = _$row$children$map2[1];

		var parentId = $row.prev().children("td:first-child").text();

		// Ask for confirmation including specific name in error message (the Hawaii fixTM)
		if (!confirm("Are you sure you want to delete " + name + " (ID " + id + ")?")) return;

		// Perform API call to delete
		problemTypePage.delete(id).then(function () {
			// If the deleted type had a parent, reload just the siblings of the deleted type
			if (parentId) {
				$(".problem-type-picker").find("[data-expertise-type-id=\"" + parentId + "\"]").click();
			} else {
				// Otherwise, reload all
				window.Turbolinks.visit("/problem-types");
			}
		});
	});

	// Search problem types
	$('.search-field input').on('keyup', function () {
		problemTypePage.search(this.value);
	});

	// Hash fragment navigation for linking to staff and tickets from problem type detail
	$("#specialists-table").on("click", "tr[data-rowid]", function (e) {
		window.Turbolinks.visit("/staff#" + e.currentTarget.dataset.rowid);
	});
	$("#tickets-table").on("click", "tr[data-rowid]", function (e) {
		window.Turbolinks.visit("/tickets#" + e.currentTarget.dataset.rowid);
	});

	// Keyboard navigation
	// Keyboard shortcuts
	$(document).keyup(function (e) {
		// Ignore if in input
		if (document.activeElement.nodeName.toLowerCase() === "input") {
			if (e.key === "Enter") {
				e.target.nextElementSibling.children[0].click();
				return;
			}
			if (e.keyCode === 38) {
				e.target.parentElement.previousElementSibling.click();
				return;
			}
			if (e.keyCode === 37 && e.target.value === "") {
				document.activeElement.blur();
			}
			return;
		}
		// If no selection, select first item regardless of keypress
		var $lastActiveType = $(".problem-type-picker .last-active");
		if ($lastActiveType.length === 0) {
			$(".problem-type-picker [data-problem-type-id=\"1\"]").first().click();
			return;
		}
		var $row;
		switch (e.keyCode) {
			case 38: // up
			case 40:
				// down
				// Get row to select
				$row = $lastActiveType.first()[e.keyCode === 38 ? "prev" : "next"]();
				if (e.keyCode === 40 && $row.is(".input-group")) {
					$row.children("input").focus();
				} else {
					$row.click();
				}
				break;
			case 37: // left
			case 39:
				// right
				// Get column if exists to left or right
				var $column = $lastActiveType.first().closest(".type-column")[e.keyCode === 37 ? "prev" : "next"]();
				// Get row to be selected
				$row = $column.find(e.keyCode === 37 ? ".active" : "li").first();
				if (e.keyCode === 39 && $row.length === 0) {
					$column.find("input").focus();
				} else {
					$row.click();
				}
				break;
		}
	});
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY1MmFhMWU0OWFhYTI4Njg1YjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvUHJvYmxlbVR5cGVQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL3Byb2JsZW1fdHlwZXMuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJlIiwidGlja2V0cyIsImNvbW1lbnRzIiwic3RhdHVzZXMiLCJ0aWNrZXRTdGF0dXNlcyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIlN0YWZmTWFuYWdlciIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiTWFuYWdlciIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsIkNvbW1lbnQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwiQ2FsbCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsIkVtcGxveWVlIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJFeHBlcnRpc2VUeXBlIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsIkV4cGVydGlzZVR5cGVTdGFmZiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsIlN0YXR1cyIsImdldFRpY2tldHNXaXRoU2x1ZyIsIlRpY2tldCIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiRGV2aWNlIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJQcm9ncmFtIiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwiVGlja2V0U3RhdHVzIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiU3RhZmZQYWdlIiwidGlja2V0TWFuYWdlciIsInRpY2tldHNDb2x1bW5JbmRleCIsImluZGV4Iiwic3RhZmZGb3JUaWNrZXRzIiwiJHRhYmxlUm93IiwiJHJvd3MiLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzIiwic2hvd05vdGlmaWNhdGlvbiIsInVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIiLCJjdXN0b21zbHVnIiwic2hvd1Blcm1pc3Npb25zIiwic3JjIiwic3RhZmZQcm9ibGVtVHlwZVBhZ2UiLCJjdXJyZW50U3BlY2lhbGlzbXMiLCJsb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzIiwic2VhcmNoIiwiYXNzaWduIiwib2JqIiwic2hvd1N0YWZmIiwiaWNvbnMiLCJlbEljb24iLCJlbFRleHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImVsUGVybWlzc2lvbiIsIlRpY2tldFBhZ2UiLCJzb2Z0d2FyZU1hbmFnZXIiLCJoYXJkd2FyZU1hbmFnZXIiLCJjdXJyZW50VGlja2V0IiwiZmlsdGVyZWRUaWNrZXRzIiwiZmlsdGVyZWRUaWNrZXQiLCJqIiwic3BsaXRTdGF0dXNTbHVncyIsImdldE15VGlja2V0cyIsImdldFRpY2tldHNXaXRoU2x1Z0luIiwic3RhdHVzX25hbWUiLCIkdGlja2V0Q29tbWVudHMiLCIkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZSIsIiR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUiLCIkdGlja2V0Q2FsbEhpc3RvcnlCb2R5Iiwic2hvdyIsImhpZGUiLCJzaG93VGFibGVSb3dEZXRhaWxzIiwiYWZmZWN0ZWRJdGVtcyIsIiR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keSIsImFmZmVjdGVkSXRlbSIsImhhc093blByb3BlcnR5IiwibWUiLCJnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQiLCJ0aWNrZXRGZWVkIiwiJHRpY2tldEZlZWQiLCJzb3J0IiwiYSIsImIiLCJwYXJzZSIsInBvc3QiLCJwcmVwZW5kIiwiaXNTb2x1dGlvbiIsInJlZnJlc2hQYWdlIiwiJGNhbGxIaXN0b3J5IiwiJGNhbGxUaWNrZXRUYWJsZSIsImNhbGxDb21tZW50IiwiZ2V0Q2FsbE5vdGVzQnlDYWxsSWQiLCJzaG93RmlsdGVyZWRUaWNrZXRzIiwic2hvd1RpY2tldFZpZXciLCIkc3RhZmZJbmZvcm1hdGlvbiIsImVtcGxveWVlSWQiLCIkYXNzaWduZWRUb09wdGlvbnMiLCJiZXN0U3BlY2lhbGlzdCIsImhhc1NwZWNpYWxpc20iLCJiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmIiwiZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiJHNwZWNpYWxpc3RJZCIsIiRzcGVjaWFsaXN0U2hvd2Nhc2UiLCJFeHBlcnRpc2VUeXBlUGFnZSIsImlzUGFnZSIsIiR0eXBlQ29sdW1ucyIsIiRsaSIsImxvYWRFeHBlcnRpc2VUeXBlSW5mbyIsImdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0iLCJuZXh0QWxsIiwiJHR5cGVDb2x1bW4iLCJnZXRSb290RXhwZXJ0aXNlVHlwZXMiLCJjaGlsZHJlbklkcyIsInNwZWNpYWxpc3RzIiwiZ2V0U3BlY2lhbGlzdHMiLCJjaGlsZCIsInNjcm9sbExlZnQiLCJ3aWR0aCIsImV4cGVydGlzZVR5cGVDaGFpbiIsImdldEV4cGVydGlzZVR5cGVDaGFpbiIsImxvYWRTdWJFeHBlcnRpc2VUeXBlcyIsInByb2JsZW1UeXBlUGFnZSIsIiRzaW5nbGVWaWV3IiwiJG5hdkJhciIsIiRleHBlcnRpc2VUeXBlVmlldyIsIiRleHBlcnRpc2VUeXBlVGFibGUiLCIkc3BlY2lhbGlzdHNUYWJsZSIsIiR0aWNrZXRzVGFibGUiLCIkbm9TcGVjaWFsaXN0c0RhdGEiLCIkbm9UaWNrZXRzRGF0YSIsImdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZCIsImJyZWFkY3J1bSIsIiRleHBlcnRpc2VUeXBlUGlja2VyIiwicHJldlF1ZXJ5IiwibGFzdEluZGV4T2YiLCJ0eXBlQ2hhaW4iLCJwb3AiLCIkdHlwZSIsInBhcmVudHMiLCJpbml0IiwiZ290byIsIk51bWJlciIsInBhcmVudElkIiwicHJldiIsImNyZWF0ZUV4cGVydGlzZVR5cGUiLCIkcm93IiwiXyIsImNvbmZpcm0iLCJkZWxldGUiLCJ0aGVuIiwiVHVyYm9saW5rcyIsInZpc2l0Iiwia2V5dXAiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJrZXlDb2RlIiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJibHVyIiwiJGxhc3RBY3RpdmVUeXBlIiwiaXMiLCJmb2N1cyIsIiRjb2x1bW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGE7OztBQUNwQiwwQkFBYztBQUFBOztBQUFBOztBQUdiLFFBQUtDLG9CQUFMLEdBQTRCQyxPQUFPRCxvQkFBUCxJQUErQixvQ0FBM0Q7O0FBRUEsUUFBS0UsS0FBTCxHQUFnQkMsSUFBSUQsS0FBSixDQUFVRSxHQUFWLENBQWM7QUFBQSxVQUFLLG1CQUFTQyxDQUFULENBQUw7QUFBQSxHQUFkLENBQWhCO0FBQ0EsUUFB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFB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a2UtaXQtYWxsL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTY1MmFhMWU0OWFhYTI4Njg1YjEiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IENhbGwgZnJvbSBcIi4vQ2FsbFwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9TdGF0dXNcIjtcbmltcG9ydCBUaWNrZXQgZnJvbSBcIi4vVGlja2V0XCI7XG5pbXBvcnQgVGlja2V0U3RhdHVzIGZyb20gXCIuL1RpY2tldFN0YXR1c1wiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0TWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGF0dXNlc1xuICogYW5kIHRpY2tldHMgYW5kIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBUaWNrZXRNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0TWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IHdpbmRvdy5leHBlcnRpc2VUeXBlTWFuYWdlciB8fCBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY2FsbHMgICAgPSBhcGkuY2FsbHMubWFwKGUgPT4gbmV3IENhbGwoZSkpO1xuXHRcdHRoaXMudGlja2V0cyAgPSBhcGkudGlja2V0cy5tYXAoZSA9PiBuZXcgVGlja2V0KGUpKTtcblx0XHR0aGlzLmNvbW1lbnRzID0gYXBpLmNvbW1lbnRzLm1hcChlID0+IG5ldyBDb21tZW50KGUpKTtcblx0XHR0aGlzLnN0YXR1c2VzID0gYXBpLnN0YXR1c2VzLm1hcChlID0+IG5ldyBTdGF0dXMoZSkpO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgPSBhcGkudGlja2V0U3RhdHVzZXMubWFwKGUgPT4gbmV3IFRpY2tldFN0YXR1cyhlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDYWxsfSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ2FsbCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maW5kKGNhbGwgPT4gY2FsbC5pZCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbHMgcmVmZXJlbmNpbmcgYSBzcGVjaWZpYyB0aWNrZXRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDYWxsc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maWx0ZXIoY2FsbCA9PiBjYWxsLl90aWNrZXRzLmluZGV4T2YodGlja2V0SWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbm90ZXMgZm9yIGEgY2FsbFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGxOb3Rlc0J5Q2FsbElkKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50Ll9jYWxsID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBJRFxuXHQgKi9cblx0Z2V0U3RhdHVzKHN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLmlkID09PSBzdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBzbHVnXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggc3RhdHVzU2x1Z1xuXHQgKi9cblx0Z2V0U3RhdHVzQnlTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1ZykgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldH0gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldCB3aXRoIHRpY2tldElkXG5cdCAqL1xuXHRnZXRUaWNrZXQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbmQodGlja2V0ID0+IHRpY2tldC5pZCA9PT0gdGlja2V0SWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXRJZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1Zyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gc3RhdHVzZXNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gc3RhdHVzU2x1Z3MgQXJyYXkgb2YgU3RyaW5ncydzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gU3RhdHVzJ3Ncblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1Z0luKHN0YXR1c1NsdWdzKSB7XG5cdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldHMuc2xpY2UoMCk7XG5cblx0XHRmb3IgKGxldCBpID0gdGlja2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKHN0YXR1c1NsdWdzLmluZGV4T2YodGlja2V0c1tpXS5zdGF0dXMuc2x1ZykgPT09IC0xKSB0aWNrZXRzLnNwbGljZShpLCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGlja2V0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0cyByZWZlcmVuY2VkIGluIGEgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgcmVmZXJlbmNlZCBpbiBhIENhbGxcblx0ICovXG5cdGdldFRpY2tldHNGcm9tQ2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0Ll9jYWxscy5pbmRleE9mKGNhbGxJZCkgPiAtMSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQoc3RhZmZJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWQgfHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWRcblx0XHR9KTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoc3RhZmZJZHMpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0XHR0aWNrZXRzICAgICAgICAgICAgPSB0aGlzLnRpY2tldHMsXG5cdFx0XHRyZXN1bHQgICAgICAgICAgICAgPSB7fTtcblxuXHRcdHN0YWZmSWRzLmZvckVhY2goc3RhZmZJZCA9PiB7XG5cdFx0XHRyZXN1bHRbc3RhZmZJZF0gPSB0aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZFxuXHRcdFx0XHRcdFx0fHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRNeVRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3BlcmF0b3Igb3Igc3BlY2lhbGlzdCB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvLlxuXHQgKlxuXHQgKiBJZiBhbiBvcGVyYXRvciBpcyBub3QgYXNzaWduZWQsIHRoZW4gdGhlIEV4cGVydGlzZVR5cGVTdGFmZiB3aWxsXG5cdCAqIGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7RW1wbG95ZWV9IEVtcGxveWVlIHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSB7XG5cdFx0aWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHJldHVybiB0aWNrZXQuYXNzaWduZWRfdG9fb3BlcmF0b3I7XG5cblx0XHRyZXR1cm4gdGlja2V0LmV4cGVydGlzZV90eXBlX3N0YWZmLnN0YWZmOyAvLyBvbmx5IHVzZSBleHBlcnRpc2VfdHlwZV9zdGFmZiBpZiB0aGVyZSBpcyBubyBhc3NpZ25lZCBvcGVyYXRvclxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRpY2tldCBpcyBhc3NpZ25lZCB0byB0aGUgY3VycmVudGx5IGxvZ2dlZCBpblxuXHQgKiB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IElmIGFzc2lnbmVkIHRvIHNlbGZcblx0ICovXG5cdGlzVGlja2V0QXNzaWduZWRUb1NlbGYodGlja2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpID09PSB0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpOyBcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXMgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRTdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldF9zdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0U3RhdHVzIHdpdGggdGlja2V0U3RhdHVzSWRcblx0ICovXG5cdGdldFRpY2tldFN0YXR1cyh0aWNrZXRTdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbmQodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5pZCA9PT0gdGlja2V0U3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzZXMgZm9yIGEgdGlja2V0XG5cdCAqXG5cdCAqIEBwXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maWx0ZXIodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5fdGlja2V0ID09PSB0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjb21tZW50IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY29tbWVudElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY29tbWVudCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNvbW1lbnRJZFxuXHQgKi9cblx0Z2V0Q29tbWVudChjb21tZW50SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gY29tbWVudElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvbW1lbnRzXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBDb21tZW50IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q29tbWVudHNCeUlkcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBpZHMuaW5kZXhPZihjb21tZW50LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHRpY2tldHMgYXNzb2NpYXRlZCB3aXRoIGFuIGV4cGVydGlzZSB0eXBlIHN0YWZmXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlU3RhZmZJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHN0YWZmIHRvIGZpbmQgdGlja2V0cyBmb3Jcblx0ICogQHJldHVybnMge0FycmF5fSBBbGwgbWF0Y2hpbmcgdGlja2V0c1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdHRpY2tldElkcyAgICAgID0gW10uY29uY2F0KC4uLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IGUudGlja2V0cykpOyAvLyBtb3ZlIGFsbCBvZiBleHBlcnRpc2VUeXBlc1tpXS50aWNrZXRzIGludG8gYSBzaW5nbGUgYXJyYXlcblxuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCB0aWNrZXRzIG9uIGEgcHJvcGVydHkgZm9yIGEgcHJvdmlkZWQgc2VhcmNoIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHtBcnJheX0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBzYXRpc2Z5aW5nIHRoZSBzZWFyY2ggY29uZGl0aW9uXG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMudGlja2V0cywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb2xsZWN0aW9uIG9mIHRpY2tldHMgYnkgdGhlaXIgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGlkcyBUaGUgSURzIG9mIHRoZSByZXF1ZXN0ZWQgdGlja2V0cyBcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldFRpY2tldHNCeVRpY2tldElEcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gaWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRW1wbG95ZWUgZnJvbSBcIi4vRW1wbG95ZWVcIjtcblxuLyoqXG4gKiBTdGFmZk1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhZmZcbiAqIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBTdGFmZk1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhZmYgICAgICAgPSBhcGkuc3RhZmYubWFwKGUgPT4gbmV3IEVtcGxveWVlKGUpKTtcblx0XHR0aGlzLmRlcGFydG1lbnRzID0gYXBpLmRlcGFydG1lbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZW1wbG95ZWUgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBlbXBsb3llZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0VtcGxveWVlfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmluZChlbXBsb3llZSA9PiBlbXBsb3llZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBlbXBsb3llZXMgd2l0aCBhIHNwZWNpZmljIHZhbHVlIG9mIGEgcGVybWlzc2lvblxuXHQgKlxuXHQgKiBAcGFyYW0gcGVybWlzc2lvbiBUaGUgcGVybWlzc2lvbiB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIHBlcm1pc3Npb24gKHRydWUvZmFsc2UpIGZvciB3aGV0aGVyIHRoZSBwZXJtaXNzaW9uIGlzIGdyYW50ZWRcblx0ICovXG5cdGdldEVtcGxveWVlc1dpdGhQZXJtaXNzaW9uKHBlcm1pc3Npb24sIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmlsdGVyKGVtcGxveWVlID0+IGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSA9PSB2YWx1ZSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKlxuXHQgKiBAcGFyYW0gYXNFbXBsb3llZSBtZXRob2QgcmV0dXJucyBJRCBieSBkZWZhdWx0IG9yIEVtcGxveWVlIGlmIHRydXRoeVxuXHQgKi9cblx0Y3VycmVudFVzZXIoYXNFbXBsb3llZSA9IGZhbHNlKSB7XG5cdFx0bGV0IGlkID0gMTsgLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBXUFxuXG5cdFx0Ly8gR2V0IEVtcGxveWVlIHdpdGggSURcblx0XHRpZiAoYXNFbXBsb3llZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzcGVjaWFsaXN0cyB3aG8gc3BlY2lhbGlzZSBpbiBhIGNlcnRhaW4gcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBmaW5kIGVtcGxveWVlcyBmb3Jcblx0ICovXG5cdGdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGUpIHtcblx0XHRsZXQgc3RhZmYgID0gdGhpcy5zdGFmZixcblx0XHQgICAgZmlsdGVyID0gaWQgPT4gZW1wbG95ZWUgPT4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoaWQpID4gLTE7XG5cblx0XHRpZiAodHlwZW9mIGV4cGVydGlzZVR5cGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdGxldCBvdXRwdXQgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaWQgb2YgZXhwZXJ0aXNlVHlwZSkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdGFmZi5maWx0ZXIoZmlsdGVyKGlkKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RhZmYuZmlsdGVyKGZpbHRlcihleHBlcnRpc2VUeXBlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgZW1wbG95ZWUgaGFzIHRoZSBwYXNzZWQgcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gaW5zcGVjdFxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gbG9vayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGVtcGxveWVlIGhhcyB0aGUgcHJvYmxlbSB0eXBlIGFzIGEgc3BlY2lhbGlzbVxuXHQgKi9cblx0aGFzU3BlY2lhbGlzbShlbXBsb3llZSwgZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGV4cGVydGlzZVR5cGVJZCkgPiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggYWxsIGVtcGxveWVlcyBmb3IgdGhlIGdpdmVuIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybnMgQWxsIG1hdGNoaW5nIHJlc3VsdHMgdG8gdGhlIHF1ZXJ5XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuc3RhZmYsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3N0YWZmL1N0YWZmTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZSBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZVN0YWZmIGZyb20gXCIuL0V4cGVydGlzZVR5cGVTdGFmZlwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGV4cGVydGlzZSB0eXBlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGFwaS5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZShlKSk7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBhcGkuZXhwZXJ0aXNlVHlwZVN0YWZmLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlU3RhZmYoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhbGwgRXhwZXJ0aXNlVHlwZSdzIHdpdGggbm8gcGFyZW50IChpbiB0aGUgZmlyc3QgY29sdW1uKVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdGdldFJvb3RFeHBlcnRpc2VUeXBlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLl9wYXJlbnQgPT0gbnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maW5kKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5pZCA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgRXhwZXJ0aXNlVHlwZXMgd2l0aCBJRHMgZnJvbSBhbiBBcnJheSBvZiBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gZXhwZXJ0aXNlVHlwZUlkcyBBcnJheSBvZiBJbnRlZ2VycyByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZCdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlcyBzYXRpc2Z5aW5nIHRoZSBjb25kaXRpb25cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGVJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlSWRzLmluZGV4T2YoZXhwZXJ0aXNlVHlwZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maWx0ZXIoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9yZGVyZWQgYXJyYXkgb2YgcGFyZW50cyBvZiBhbiBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gZXhwZXJ0aXNlVHlwZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlIHRvIGZpbmQgcGFyZW50cyBmcm9tXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlIHBhcmVudHMsIGFuZCB0aGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRleHBlcnRpc2VUeXBlcyAgICAgID0gW2V4cGVydGlzZVR5cGVQYXJlbnRdO1xuXG5cdFx0d2hpbGUgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0ZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGVQYXJlbnQucGFyZW50O1xuXG5cdFx0XHRpZiAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGV4cGVydGlzZVR5cGVzLnB1c2goZXhwZXJ0aXNlVHlwZVBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV4cGVydGlzZVR5cGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiByZWNvcmQsIHdpdGggYW4gZXhhY3Rcblx0ICogRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiBhbmQgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSBJRCBwYWlyXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZlxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9IG51bGwsIG9yIHRoZSByZWNvcmQgZGVzaXJlZFxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkKGV4cGVydGlzZVR5cGVJZCwgc3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmID09PSBzdGFmZklkICYmIGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIGJ5IElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLmlkID09PSBleHBlcnRpc2VUeXBlU3RhZmZJZCkgfHwgbnVsbDtcblx0fVxuXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5leHBlcnRpc2VUeXBlcywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlci5qcyIsIi8qKlxuICogTWFuYWdlclxuICpcbiAqIEFic3RyYWN0IGNsYXNzIGV4dGVuZGVkIGJ5IGFsbCBtYW5hZ2VycyxcbiAqIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBtYXkgYmUgdXNlZnVsIHRvIHRoZSBtYW5hZ2Vycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZWFyY2ggYXJyYXkgb2YgZWxlbWVudHMgZm9yIHF1ZXJ5IGluIGdpdmVuIHByb3BlcnR5IG5hbWVzXG5cdCAqIFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBzZWFyY2hlZCB0aHJvdWdoXG5cdCAqIEBwYXJhbSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICovXG5cdHNlYXJjaChlbGVtZW50cyA9IFtdLCBxdWVyeSA9IFwiXCIsIHByb3BlcnRpZXMgPSBbXSkge1xuXHRcdHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTsgLy8gTm9ybWFsaXNlIHF1ZXJ5IChhbmQgcHJvcGVydGllcyBpbmRpdmlkdWFsbHkgbGF0ZXIpXG5cblx0XHRyZXR1cm4gZWxlbWVudHMuZmlsdGVyKGVsID0+IHsgLy8gR2V0IGFsbCBlbGVtZW50c1xuXHRcdFx0cmV0dXJuIHByb3BlcnRpZXMuc29tZShwcm9wID0+IHsgLy8gQ2hlY2sgcHJvcGVydGllcyB1bnRpbCBtYXRjaCBpcyBmb3VuZFxuXHRcdFx0XHRpZiAoU3RyaW5nKGVsW3Byb3BdKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgcmV0dXJuIHRydWU7IC8vIERldGVybWluZSBpZiBwcm9wZXJ0eSBpcyBhIG1hdGNoIGZvciBxdWVyeVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwiLyoqXG4gKiBEeW5hbWljUGFnZVxuICpcbiAqIEV4dGVuZGVkIGJ5IGV2ZXJ5IHBhZ2UsIGUuZy4gVGlja2V0UGFnZS5cbiAqIENvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IGFyZSByZXBlYXRlZCBvZnRlbiBhbW9uZ1xuICogcGFnZXMsIHN1Y2ggYXMgdXBkYXRpbmcgdGFibGVzIG9yIHVwZGF0aW5nIHRoZSBuYXZiYXJcbiAqL1xuY2xhc3MgRHluYW1pY1BhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgcGFnZSB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3JzXG5cdCAqIHRvIGRlZmluZSB0aGUgYm91bmRzIG9mIHRoZSBwYWdlLCBpbiBjYXNlcyB3aGVyZSB0aGlzIER5bmFtaWNQYWdlXG5cdCAqIGlzIG5vdCB0aGUgb25seSBwYWdlIG9uIHRoZSBzY3JlZW4sIHN1Y2ggYXMgaWYgYSBwYWdlIGlzIGJlaW5nXG5cdCAqIGRpc3BsYXllZCBpbiBhIG1vZGFsLlxuXHQgKlxuXHQgKiBOb3QgcHJvdmlkaW5nIGFueSBzZWxlY3RvcnMgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoZVxuXHQgKiBtYWluIHNlbGVjdG9ycyBmb3IgdGhlIGVudGlyZSBzY3JlZW4sIHN1Y2ggdGhhdFxuXHQgKiB0aGlzIHBhZ2UgYmVjb21lcyB0aGUgbWFpbiBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHNlY3Rpb25TZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmluZyB0YWJsZSB2aWV3XG5cdCAqIEBwYXJhbSB0YWJsZVNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGFibGUgd2l0aGluIHByZXZpb3VzIHNlY3Rpb25cblx0ICogQHBhcmFtIG5hdlNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgbmF2aWdhdGlvbiBiYXIgc2hvd24gYXQgdG9wIG9mIHNlY3Rpb25cblx0ICogQHBhcmFtIGRldGFpbFNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3Igc2luZ2xlIHZpZXcgZGV0YWlsIHNob3duIGZvciBhbiBpbmRpdmlkdWFsIHJvd1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNlY3Rpb25TZWxlY3RvciA9IFwiI2xpc3Qtdmlld1wiLFxuXHRcdHRhYmxlU2VsZWN0b3IgPSBcIiN0YWJsZS1zZWN0aW9uXCIsXG5cdFx0bmF2U2VsZWN0b3IsXG5cdFx0ZGV0YWlsU2VsZWN0b3Jcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5zZWN0aW9uU2VsZWN0b3IgPSBzZWN0aW9uU2VsZWN0b3I7XG5cdFx0dGhpcy50YWJsZVNlbGVjdG9yID0gdGFibGVTZWxlY3Rvcjtcblx0XHQvLyBTZXQgbmF2aWdhdGlvbiBzZWxlY3RvciB0byBmaXJzdCBjb21wb25lbnQgb2Ygc2VjdGlvbiBzZWxlY3RvciB3aXRoIOKAmC1uYXbigJkgYXBwZW5kZWQsIG90aGVyd2lzZSBkZWZhdWx0IENTUyBzZWxlY3RvclxuXHRcdHRoaXMubmF2U2VsZWN0b3IgPSBuYXZTZWxlY3RvciA/IG5hdlNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItbmF2XCIgOiBcIi5zaWRlLW5hdi1iYXItbmVzdGVkXCIpO1xuXHRcdHRoaXMuZGV0YWlsU2VsZWN0b3IgPSBkZXRhaWxTZWxlY3RvciA/IGRldGFpbFNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItZGV0YWlsXCIgOiBcIiNzaW5nbGUtdmlld1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpdGxlIGJhciBvZiB0aGUgc2luZ2xlIHZpZXcgdG8gdGhlIGdpdmVuIHN0cmluZ1xuXHQgKiBDQVVUSU9OOiBEb2VzIG5vdCBwZXJmb3JtIGVzY2FwaW5nIG9mIGlucHV0IHN0cmluZywgZG8gbm90IHBhc3Ncblx0ICogdXNlciBjb250ZW50IHRvIHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0gaHRtbCBIVE1MIHRvIHNldCB0aGUgc2luZ2xlIHZpZXcgdGl0bGUgdG9cblx0ICovXG5cdHVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIoaHRtbCkge1xuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS5odG1sKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBcIkxvYWRpbmfigKZcIiBzcGxhc2ggc2NyZWVuIGlmIGl0J3Mgc2hvd25cblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBcIk5vIFJlc3VsdHPigKZcIiBzcGxhc2ggc2NyZWVuXG5cdCAqIHNob3VsZCBiZSBzaG93biBvciBub3QuXG5cdCAqXG5cdCAqIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHVzaW5nIFwiYXBwZW5kVGFibGVcIlxuXHQgKi9cblx0dXBkYXRlU3BsYXNoU2NyZWVuKG5hdlRleHQgPSBudWxsKSB7XG5cdFx0Ly8gR2V0IHRhYmxlIGVsZW1lbnQgdG8gaW5zcGVjdCBjb250ZW50c1xuXHRcdHZhciAkdGFibGUgPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0XHRcdC8vIEdldCBudW1iZXIgb2YgcmVzdWx0cyB3aXRoaW4gdGFibGUgY3VycmVudGx5IGJlaW5nIHNob3duXG5cdFx0XHRcdC8vIFRoaXMgaXMgbm90IGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUgSFRNTFxuXHRcdFx0XHQvLyBzaW5jZSBzb21lIHRhYmxlIHJvd3MgbWF5IGJlIGhpZGRlbiwgd2hpY2ggbmVlZCB0byBiZVxuXHRcdFx0XHQvLyBkaXNjb3VudGVkIGZyb20gdGhlIHRvdGFsIGNvdW50LlxuXHRcdCAgICByZXN1bHRzQ291bnQgPSAkdGFibGUuZmluZCgndGJvZHkgdHInKS5maWx0ZXIoKGksIGVsKSA9PiAhJChlbCkuaGFzQ2xhc3MoXCJyb3ctaGlkZGVuXCIpKS5sZW5ndGgsXG5cdFx0XHRcdC8vIEdldCBzcGxhc2ggc2NyZWVuIGVsZW1lbnQgd2hpY2ggbWF5IGJlIGJlaW5nIHNob3duIGluc3RlYWQgb2YgdGFibGVcblx0XHQgICAgJHNwbGFzaFNjcmVlbiA9ICQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJyk7XG5cblx0XHQvLyBEZXBlbmRpbmcgb24gd2hldGhlciB0aGVyZSBhcmUgcmVzdWx0cywgdGhlIHNwbGFzaCBzY3JlZW4gb3IgdGFibGUgbmVlZHMgdG8gYmUgc2hvd25cblx0XHQvLyBhbmQgdGhlIG90aGVyIHN3YXBwZWQgb3V0IHVzaW5nIENTU1xuXHRcdHZhciBbJHNob3csICRoaWRlXSA9IHJlc3VsdHNDb3VudCA/IFskdGFibGUsICRzcGxhc2hTY3JlZW5dIDogWyRzcGxhc2hTY3JlZW4sICR0YWJsZV07XG5cdFx0JGhpZGUuYWRkQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cdFx0JHNob3cucmVtb3ZlQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cblx0XHQvLyBUaGUgbWFpbiB0b3AgYmFyIGZvciB0aGUgbGlzdCB2aWV3IGNvbnRhaW5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgc2hvd24gaW4gdGhlIHRhYmxlXG5cdFx0aWYgKCFuYXZUZXh0KSB7XG5cdFx0XHQvLyBTZXQgbmF2YmFyIHRleHQgYXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRhYmxlIHRoZW4gYXBwZW5kIGN1cnJlbnRseSBzZWxlY3RlZCBmaWx0ZXJcblx0XHRcdG5hdlRleHQgPSByZXN1bHRzQ291bnQgKyBcIiBcIiArICQodGhpcy5uYXZTZWxlY3RvcikuZmluZChcImxpLmFjdGl2ZVwiKS5maXJzdCgpLnRleHQoKS5yZXBsYWNlKFwiQWxsIFwiLCBcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBJZiB1bmFibGUgdG8gb2J0YWluIHJvd3MgY291bnQsIHNob3cgXCJMb2FkaW5n4oCmXCJcblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5jbG9zZXN0KFwic2VjdGlvblwiKS5maW5kKFwiLnRvcC1uYXYgaDRcIikudGV4dChyZXN1bHRzQ291bnQgIT09IHVuZGVmaW5lZCA/IG5hdlRleHQgOiBcIkxvYWRpbmfigKZcIik7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICogdXNpbmcgZGF0YSBmcm9tIFwib2JqZWN0XCIuXG5cdCAqXG5cdCAqIFRoZSBwcm9wZXJ0eSBuYW1lcyBzaG91bGQgY29ycmVzcG9uZCB3aXRoIHRoZSBcInNsdWdcIlxuXHQgKiBhdHRyaWJ1dGUgaW4gdGFibGUgaGVhZGVyLlxuXHQgKlxuXHQgKiBOT1RFOiBUaGlzIGFzc3VtZXMgdGhlIG9iamVjdCBoYXMgYW4gSUQgYXR0cmlidXRlLiBJbmNsdWRlIGl0XG5cdCAqIGV2ZW4gaWYgeW91IGRvbid0IHdpc2ggdG8gc2hvdyBpdC5cblx0ICpcblx0ICogQHBhcmFtIG9iamVjdCAtIFRoZSBkYXRhIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZVxuXHQgKiBzcGxhc2hzY3JlZW4gb24geW91ciBwYWdlXG5cdCAqL1xuXHRhcHBlbmRUYWJsZVJvdyhvYmplY3QpIHtcblx0XHR2YXIgJHRhYmxlU2VjdGlvbiA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHQgICAgJHRhYmxlSGVhZCAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGhlYWQgdHInKSxcblx0XHQgICAgJHRhYmxlQm9keSAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGJvZHknKSxcblx0XHQgICAgJG5ld1JvdyAgICAgICA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcblxuXHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSByb3cgdHdpY2Vcblx0XHRpZiAoJHRhYmxlQm9keS5jaGlsZHJlbihcIltkYXRhLXJvd2lkPVxcXCJcIiArIG9iamVjdC5pZCArIFwiXFxcIl1cIikubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG5cdFx0Ly8gU2V0IElEIG9uIHJvdyB0byByZWZlcmVuY2UgbGF0ZXJcblx0XHQkbmV3Um93WzBdLmRhdGFzZXQucm93aWQgPSBvYmplY3QuaWQ7XG5cdFx0JG5ld1Jvdy50b2dnbGVDbGFzcyhcImhpZ2hsaWdodFwiLCBvYmplY3QuaWQgPT0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHRcdCR0YWJsZUhlYWQuY2hpbGRyZW4oJ3RoJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzbHVnID0gdGhpcy5kYXRhc2V0LnNsdWcsIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG5cdFx0XHRpZiAoc2x1ZyA9PT0gJ2V5ZScpIHsgLy8gdGhlIG9uLWhvdmVyIGV5ZSBpbnZpc2libGUgcm93XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nO1xuXHRcdFx0fSBlbHNlIGlmIChzbHVnICYmIHNsdWcuaW5jbHVkZXMoXCJhY2Nlc3NcIikpIHtcblx0XHRcdFx0Ly8gQm9vbGVhbiB2YWx1ZSBzdXBwb3J0XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgPyB0aGlzLmlubmVySFRNTCA6IFwiwrdcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgIT09IHVuZGVmaW5lZCA/IG9iamVjdFtzbHVnXSA6IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCRuZXdSb3cuYXBwZW5kKHRkKTtcblx0XHR9KTtcblx0XHRcblx0XHQkdGFibGVCb2R5LmFwcGVuZCgkbmV3Um93KTtcblxuXHRcdHJldHVybiAkbmV3Um93WzBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyB0aGUgZGF0YSBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICovXG5cdGNsZWFyVGFibGUoKSB7XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNob3cgZGV0YWlsIHBhZ2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgdGFibGUgcm93IHRvIGJlIHNob3duIGluIHRoZSBzaW5nbGUgdmlld1xuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCA9IG51bGwpIHtcblx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGZvciBudWxsIGFzIG5vIHJvd3Mgd2lsbCBtYXRjaCBpZiBubyBJRCBwYXNzZWRcblx0XHQvLyAuc2libGluZ3MgZG9lcyBub3QgaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGYgc28gY2FuIGJlIGNoYWluZWQgYWZ0ZXIgZmluZGluZyBoaWdobGlnaHQgcm93IGZpcnN0XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnJvd2lkID09IGlkKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XG5cdFx0Ly8gTm8gbmVlZCB0byBzZXQgc3R5bGUgdXNpbmcgSlMgaGVyZSwgQ1NTIGhhbmRsZXMgZmxleFxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikudW53cmFwKFwiZGl2XCIpXG5cdFx0XHQvLyBDbG9zZSBidXR0b24gb24gaGlkZVxuXHRcdFx0LmZpbmQoXCJbZGF0YS1hY3Rpb249XFxcImNsb3NlXFxcIl1cIikuY2xpY2soKCkgPT4gdGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xuXHRcdFxuXHRcdGlmIChpZCA+IC0xKSBsb2NhdGlvbi5oYXNoID0gcGFyc2VJbnQoaWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogSGlkZSBkZXRhaWwgcGFnZSBzaG93biB3aXRoIHNob3dEZXRhaWxcblx0ICovXG5cdGhpZGVUYWJsZVJvd0RldGFpbHMoKSB7XG5cdFx0Ly8gRGVzZWxlY3QgYWxsIHJvd3Ncblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIEZpbHRlciB0byBjaGVjayBpZiBhbHJlYWR5IGhpZGRlbiwgZG9uJ3QgaGlkZSBhZ2FpblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KFwiZGl2XCIpLmxlbmd0aCA9PT0gMCkud3JhcChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblx0XHRcblx0XHRsb2NhdGlvbi5oYXNoID0gXCJcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGEgc2VsZWN0IGVsZW1lbnQgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcblx0ICogZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgZHJvcGRvd24gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdCBBIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYmUgZmlsbGVkXG5cdCAqIEBwYXJhbSBkZWZhdWx0VGV4dCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcblx0ICogQHBhcmFtIGVsZW1lbnRzIExpc3Qgb2YgZWxlbWVudHMgdG8gYmUgYWRkZWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tXG5cdCAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uSWQgSUQgb2YgYSBkZWZhdWx0IG9wdGlvbiBmcm9tIHRoZSBlbGVtZW50cyBnaXZlblxuXHQgKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IG9mIHRoZSBzZWxlY3QgZmllbGQgdG8gYWNjZXNzIHNlbGVjdGVkIGl0ZW0gd2l0aFxuXHQgKiBAcGFyYW0gZ2V0QWRkaXRpb25hbERldGFpbHMgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhZGRpdGlvbmFsIGRldGFpbHMgdG8gYmUgc2hvd24gZm9yIGN1cnJlbnQgaXRlbVxuXHQgKi9cblx0cG9wdWxhdGVTZWxlY3RGaWVsZCgkc2VsZWN0LCBkZWZhdWx0VGV4dCwgZWxlbWVudHMsIGRlZmF1bHRPcHRpb25JZCA9IG51bGwsIHByb3BlcnR5ID0gJ25hbWUnLCBnZXRBZGRpdGlvbmFsRGV0YWlscyA9IG51bGwpIHtcblx0XHQvLyBEZWZhdWx0IGVtcHR5IGNvbnRlbnQgZm9yIGlucHV0XG5cdFx0bGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGVmYXVsdFRleHQsIG51bGwsIHRydWUsIHRydWUpO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0JHNlbGVjdC5lbXB0eSgpLmFwcGVuZChvcHRpb24pO1xuXHRcdFxuXHRcdC8vIEVhY2ggb3B0aW9uIHRvIGJlIHNlbGVjdGVkIGZyb21cblx0XHRlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0aWYgKGdldEFkZGl0aW9uYWxEZXRhaWxzICE9PSBudWxsKSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGdldEFkZGl0aW9uYWxEZXRhaWxzKGUpICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZ1xuXHQgKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWFyY2ggdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gb2JqZWN0Q2FsbGJhY2sgYSBjYWxsYmFjayByZXR1cm5pbmcgYW4gb2JqZWN0ICh0aGUgcm93IHN0cnVjdHVyZSlcblx0ICogQHBhcmFtIHNlYXJjaEtleXMgdGhlIHByb3BlcnRpZXMgaW4gb2JqZWN0Q2FsbGJhY2sgdG8gaGlnaGxpZ2h0XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIGVsZW1lbnRzID0gW10sIG9iamVjdENhbGxiYWNrLCBzZWFyY2hLZXlzID0gW10pIHtcblx0XHRsZXQgcGFnZSA9IHRoaXM7XG5cblx0XHRwYWdlLmNsZWFyVGFibGUoKTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSBvYmplY3RDYWxsYmFjayhlbCk7XG5cblx0XHRcdFx0c2VhcmNoS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0b2JqZWN0W2tleV0gPSBTdHJpbmcob2JqZWN0W2tleV0pLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBxdWVyeSArICcpJywgJ2lnJyksICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChxdWVyeSA9PT0gJChcIi5zZWFyY2gtZmllbGQgaW5wdXRcIikudmFsKCkpIHtcblx0XHRcdFx0XHRwYWdlLmFwcGVuZFRhYmxlUm93KG9iamVjdCk7XG5cdFx0XHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYCR7ZWxlbWVudHMubGVuZ3RofSByZXN1bHQke2VsZW1lbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgTm8gcmVzdWx0cyBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGEgbWVzc2FnZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCBvdmVyIGFsbCBlbGVtZW50cy5cblx0ICogSGlkZSBhZnRlciA2IHNlY29uZHMsIG9yIGNvbmZpZ3VyYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugc3RyaW5nIHRvIGJlIHNob3duIGluIHRoZSBtZXNzYWdlIGJveC5cblx0ICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbWVzc2FnZSwgc3VjaCBhcyBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXG5cdCAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgdGhlIG1lc3NhZ2UgdG8gYmUgc2hvd24gZm9yLlxuXHQgKi9cblx0c3RhdGljIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgdHlwZSA9IFwiZGFuZ2VyXCIsIGR1cmF0aW9uID0gNikge1xuXHRcdC8vIE9ubHkgc2hvdyBvbmUgbWVzc2FnZSBhdCBhIHRpbWVcblx0XHQkKFwiI2FsZXJ0LW5vdGlmaWNhdGlvblwiKS5yZW1vdmUoKTtcblxuXHRcdC8vIENyZWF0ZSBlbGVtZW50XG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtc2cuaWQgPSBcImFsZXJ0LW5vdGlmaWNhdGlvblwiO1xuXHRcdG1zZy5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIiwgYGFsZXJ0LSR7dHlwZX1gLCBcImFsZXJ0LW5vdGlmaWNhdGlvblwiKTtcblx0XHRtc2cuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpOyAvLyBBY2Nlc3NpYmlsaXR5XG5cdFx0Ly8gU2V0IGNvbnRlbnQgYW5kIHNob3cgb24gc2NyZWVuXG5cblx0XHRtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXNnKTtcblxuXHRcdC8vIEhpZGUgYWZ0ZXIgZHVyYXRpb25cblx0XHRzZXRUaW1lb3V0KCgpID0+IG1zZy5yZW1vdmUoKSwgZHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdC8vIENsaWNrIHRvIGhpZGUgbWVzc2FnZVxuXHRcdCQobXNnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vRGV2aWNlXCI7XG5cbi8qKlxuICogSGFyZHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGRldmljZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogSGFyZHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRldmljZXMgPSBhcGkuZGV2aWNlcy5tYXAoZSA9PiBuZXcgRGV2aWNlKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBUeXBlcyBpbiB0YWJsZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZVR5cGVzKCkge1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aGlzLmRldmljZXMubWFwKHQgPT4gdC50eXBlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIE1ha2VzIGZvciBhIHNwZWNpZmllZCBUeXBlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlTWFrZXNPZlR5cGUodHlwZSkge1xuXHRcdGxldCBkZXZpY2VzQnlUeXBlID0gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSk7XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQoZGV2aWNlc0J5VHlwZS5tYXAodCA9PiB0Lm1ha2UpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBkZXZpY2VzIHdpdGggYSBzcGVjaWZpZWQgVHlwZSBhbmQgTWFrZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdGdldERldmljZXNPZlR5cGVBbmRNYWtlKHR5cGUsbWFrZSkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlICYmIGRldmljZS5tYWtlID09IG1ha2UpO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGV2aWNlcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIGRldmljZXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0RGV2aWNlcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gaWRzLmluZGV4T2YoZGV2aWNlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIGRldmljZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIGRldmljZSBcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGRldmljZSA9PiBkZXZpY2UuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGV2aWNlIHdpdGggdGhlIGdpdmVuIHNlcmlhbCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIHNlcmlhbE51bWJlciBUaGUgc2VyaWFsIG51bWJlciBvZiB0aGUgZGV2aWNlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RGV2aWNlfVxuXHQgKi9cblx0Z2V0RGV2aWNlQnlTZXJpYWxOdW1iZXIoc2VyaWFsTnVtYmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGQgPT4gZC5zZXJpYWxfbm8gPT09IHNlcmlhbE51bWJlcik7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBQcm9ncmFtIGZyb20gXCIuL1Byb2dyYW1cIjtcblxuLyoqXG4gKiBTb2Z0d2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogc29mdHdhcmUgcHJvZ3JhbXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogU29mdHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29mdHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnByb2dyYW1zID0gYXBpLnByb2dyYW1zLm1hcChlID0+IG5ldyBQcm9ncmFtKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcm9ncmFtcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIHByb2dyYW1zIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldFByb2dyYW1zKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbHRlcihwcm9ncmFtID0+IGlkcy5pbmRleE9mKHByb2dyYW0uaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIHByb2dyYW1cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maW5kKHByb2dyYW0gPT4gcHJvZ3JhbS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwiLy8gU2luY2UgbmF2IGVsZW1lbnQgaXMgcGVyc2lzdGVkIGJldHdlZW4gcGFnZXMsIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBhY3RpdmUgYnV0dG9uXG4kKFwiI25hdlwiKS5vbihcImNsaWNrXCIsIFwidWwgbGkgYVwiLCBlID0+IHtcblx0JChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuLy8gVG9vbHRpcHMgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIGEgcmVsZXZhbnQgdG9vbHRpcCBIVE1MIGF0dHJpYnV0ZVxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuLy8gRGF0ZS90aW1lIHBpY2tlciBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggcmVsZXZhbnQgY2xhc3NcbiQoJy50aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoKTtcblxuLy8gQ3JlYXRlIG5ldyBlbXBsb3llZSB3aGVuIHNlYXJjaGluZyBmb3Igbm9uLWV4aXN0ZW50IGFzc2lnbmVlXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnbGkubm8tcmVzdWx0cycsIGZ1bmN0aW9uKGUpIHtcblx0dmFyIG5ld1ZhbHVlID0gJCh0aGlzKS5jbG9zZXN0KFwiLmRyb3Bkb3duLW1lbnUub3BlblwiKS5jaGlsZHJlbihcIi5icy1zZWFyY2hib3hcIikuY2hpbGRyZW4oXCJpbnB1dFwiKS52YWwoKSxcblx0ICAgICRtb2RhbCAgID0gJCgnI25ldy1zdGFmZi1tb2RhbCcpO1xuXG5cdCRtb2RhbC5tb2RhbCgnc2hvdycpO1xuXG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwic3RhZmYubmFtZVwiXScpLnZhbChuZXdWYWx1ZSk7XG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwiZXZlbnRfdGFyZ2V0XCJdJykudmFsKCQodGhpcykuY2xvc2VzdCgnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCdzZWxlY3QnKS5hdHRyKCduYW1lJykpOyAvLyB3aGVuIHRoZSBzdGFmZiBtZW1iZXIgaXMgY3JlYXRlZCwgdGhpcyBpcyB0aGUgaW5wdXQgZmllbGQgaXQnbGwgdXBkYXRlXG59KTtcblxuJCgnI25ldy1zdGFmZi1tb2RhbCwgI25ldy10aWNrZXQtbW9kYWwsICNmb2xsb3ctdXAtY2FsbC1tb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuXHQkKHRoaXMpLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpXG5cdFx0Lm5vdCgnLm5vLWNsZWFyLW9uLXNob3cnKVxuXHRcdC52YWwoJycpO1xuXG5cdCQodGhpcykuZmluZCgnI2FjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZSgpO1xuXG5cdHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0JCh0aGlzKS5maW5kKCcudGltZXBpY2tlcicpLnZhbCgoJzAnICsgKGN1cnJlbnRUaW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy8nICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldERhdGUoKSkuc2xpY2UoLTIpICsgJy8nICsgY3VycmVudFRpbWUuZ2V0RnVsbFllYXIoKSArICcgJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMikpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3RvZ2dsZScpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAucmVtb3ZlLWFjY29yZGlvbicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdoaWRlLmJzLmNvbGxhcHNlIHNob3cuYnMuY29sbGFwc2UnLCAnI2FjY29yZGlvbiAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG5cdGxldCBpc1Nob3cgPSBlLnR5cGUuc3BsaXQoXCIuXCIpWzBdID09PSBcInNob3dcIjtcblx0JCh0aGlzKS5zaWJsaW5ncygnLmNhcmQtaGVhZGVyJykuZmluZCgnLnZpZXctYWNjb3JkaW9uJykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tdXAnLCAhaXNTaG93KS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi1kb3duJywgaXNTaG93KTtcbn0pO1xuXG4kKCcuc2VhcmNoLWZpZWxkIGlucHV0JykudmFsKCcnKTtcblxuLy8gQm9vdHN0cmFwIFNlbGVjdCBGaXg6IEFkZCBiYWNrIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIHNlbGVjdCBmaWVsZFxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5ib290c3RyYXAtc2VsZWN0XCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51Lm9wZW4nKS50b2dnbGUoKTtcbn0pO1xuXG4vLyBCb290c3RyYXAgbW9kYWxzIGZpeDogYWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJib2R5Om5vdChbZGF0YS1wYWdlPVxcXCJzdGFmZlxcXCJdKSBbZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIl1cIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcy5kYXRhc2V0LnRhcmdldCkubW9kYWwoXCJzaG93XCIpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1BpY2tlcihwaWNrZXJFbGVtZW50LCB2YWx1ZSwgbmFtZSkge1xuXHQkKHBpY2tlckVsZW1lbnQpLmFwcGVuZChuZXcgT3B0aW9uKG5hbWUsIHZhbHVlKSkuc2VsZWN0cGlja2VyKCdyZWZyZXNoJykuc2VsZWN0cGlja2VyKCd2YWwnLCBuYW1lKTtcbn1cblxudmFyIHZhbGlkYXRpb25UaW1lb3V0ID0gd2luZG93LnZhbGlkYXRpb25UaW1lb3V0ID0gbnVsbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvbWFpbi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqXG4gKiBBIGNvbW1lbnQgaXMgbWFkZSBhYm91dCBhIHNwZWNpZmljIHRpY2tldCwgYnlcbiAqIGEgc3RhZmYgbWVtYmVyLlxuICogXG4gKiBDb250YWlucyB0aGUgVGlja2V0IHRoYXQgaXQgYmVsb25ncyB0b1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkOiBpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxsX2lkOiBjYWxsLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdGNvbnRlbnQsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxsICAgICAgICAgICAgPSBjYWxsO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0O1xuXHRcdHRoaXMuY29udGVudCAgICAgICAgID0gY29udGVudDtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgYXV0aG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXV0aG9yKTtcblx0fVxuXG5cdHNldCBhdXRob3IoYXV0aG9yKSB7XG5cdFx0dGhpcy5fYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0Z2V0IGNhbGwoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsKHRoaXMuX2NhbGwpO1xuXHR9XG5cblx0c2V0IGNhbGwoY2FsbCkge1xuXHRcdHRoaXMuX2NhbGwgPSBjYWxsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9Db21tZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ2FsbFxuICpcbiAqIEV2ZXJ5IHRpbWUgdGhlIEhlbHBkZXNrIGlzIGNhbGxlZCwgdGhpcyBpcyBjcmVhdGVkLlxuICogQSBjYWxsIG1heSBoYXZlIG11bHRpcGxlIHRpY2tldHMsIGEgdGlja2V0IG1heSBoYXZlXG4gKiBtdWx0aXBsZSBjYWxscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aW1lLFxuXHRcdGNhbGxlcl9pZDogY2FsbGVyLFxuXHRcdG9wZXJhdG9yX2lkOiBvcGVyYXRvcixcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aW1lICAgICA9IHRpbWU7XG5cdFx0dGhpcy5jYWxsZXIgICA9IGNhbGxlcjsgICAvLyBJRCBvZiBjYWxsZXIsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjsgLy8gSUQgb2Ygb3BlcmF0b3IsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMudGlja2V0cyAgPSB0aWNrZXRzOyAgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBUaWNrZXQnc1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBvcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBvcGVyYXRvcihvcGVyYXRvcikge1xuXHRcdHRoaXMuX29wZXJhdG9yID0gb3BlcmF0b3I7XG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNGcm9tQ2FsbCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL0NhbGwuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFbXBsb3llZVxuICpcbiAqIEFuIGVtcGxveWVlIG9mIHRoZSBjb21wYW55XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0am9iX3RpdGxlOiBqb2IsXG5cdFx0ZGVwYXJ0bWVudCxcblx0XHRwaG9uZV9udW1iZXI6IHBob25lLFxuXHRcdGV4cGVydGlzZV90eXBlczogc3BlY2lhbGlzbXMgPSBbXSxcblx0XHRvcGVyYXRvciA9IGZhbHNlLFxuXHRcdHNwZWNpYWxpc3QgPSBzcGVjaWFsaXNtcy5sZW5ndGggPiAwLFxuXHRcdGFuYWx5c3QgPSBmYWxzZSxcblx0XHRhZG1pbiA9IGZhbHNlXG5cdH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5qb2IgPSBqb2I7XG5cdFx0dGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5uYW1lO1xuXHRcdHRoaXMuX2RlcGFydG1lbnQgPSBkZXBhcnRtZW50LmlkO1xuXHRcdHRoaXMucGhvbmUgPSBwaG9uZTtcblx0XHR0aGlzLnNwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdFx0dGhpcy5hY2Nlc3MgPSB7b3BlcmF0b3IsIGFuYWx5c3QsIGFkbWlufTtcblx0XHRcblx0XHQvLyBJZiB1c2VyIGlzIGFueSBvdGhlciBwZXJtaXNzaW9uIHRoZW4gcmVhZCBpcyBncmFudGVkXG5cdFx0dGhpcy5hY2Nlc3MucmVhZCA9IHRoaXMuYWNjZXNzLm9wZXJhdG9yIHx8IHRoaXMuYWNjZXNzLmFuYWx5c3QgfHwgdGhpcy5hY2Nlc3MuYWRtaW4gfHwgdGhpcy5hY2Nlc3MucmVhZG9ubHkgfHwgZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIHJlYWQgYWNjZXNzIHRvIHRoZSBzeXN0ZW1cblx0ICovXG5cdGdldCBpc1JlYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLnJlYWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBoZWxwIGRlc2sgb3BlcmF0b3Jcblx0ICovXG5cdGdldCBpc09wZXJhdG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5vcGVyYXRvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIGFuYWx5dGljYWwgZGF0YSBhYm91dCB0aGUgaGVscCBkZXNrIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzQW5hbHlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYW5hbHlzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhbiBhZG1pbmlzdHJhdG9yIG9uIHRoZSBoZWxwIGRlc2tcblx0ICovXG5cdGdldCBpc0FkbWluKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hZG1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcHJvYmxlbSB0eXBlcyB0aGUgdXNlciBpcyBhIHNwZWNpYWxpc3Qgb2Zcblx0ICovXG5cdGdldCBzcGVjaWFsaXNtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fc3BlY2lhbGlzbXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzcGVjaWFsaXNtcyBTZXQgdGhlIGxpc3Qgb2Ygc3BlY2lhbGlzbXMgZm9yIHRoaXMgcGVyc29uIG9uIHRoZSBzeXN0ZW1cblx0ICovXG5cdHNldCBzcGVjaWFsaXNtcyhzcGVjaWFsaXNtcykge1xuXHRcdHRoaXMuX3NwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdH1cblxuXHQvKipcblx0ICogUHJlcGFyZSBkYXRhIGZvciBzZW5kaW5nIHRvIEFQSSBlbmRwb2ludC4gVGhlIEFQSSBoYXMgZGlmZmVyZW50XG5cdCAqIGRhdGEga2V5cyByZXByZXNlbnRpbmcgdGhlIGRhdGEgYWNjZXNzaWJsZSBpbiB0aGUgdGFibGVzLCBzbyBuZXdcblx0ICogZGF0YSBhbmQgdXBkYXRlcyB0byBkYXRhIG11c3QgdXNlIHRoZXNlIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGRhdGEgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm5zIGRhdGEgd2l0aCB1cGRhdGVkIGtleSBuYW1lc1xuXHQgKi9cblx0c3RhdGljIHByZXBhcmVEYXRhKGRhdGEgPSB7fSkge1xuXHRcdGRhdGEuam9iX3RpdGxlID0gZGF0YS5qb2I7XG5cdFx0ZGF0YS5waG9uZV9udW1iZXIgPSBkYXRhLnBob25lO1xuXHRcdGRhdGEuZXhwZXJ0aXNlX3R5cGVzID0gZGF0YS5zcGVjaWFsaXNtcztcblx0XHRkYXRhLmRlcGFydG1lbnRfaWQgPSBkYXRhLmRlcGFydG1lbnQ7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXHRcdFx0ZGF0YVtrZXldID0gZGF0YS5hY2Nlc3Nba2V5XSA/ICgxICYmIChkYXRhLnNwZWNpYWxpc3QgPSAxKSkgOiAwO1xuXHRcdH1cblx0XHRkYXRhLnNwZWNpYWxpc3QgPSBkYXRhLnNwZWNpYWxpc3QgfHwgMDtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRwYXJlbnRfaWQ6IHBhcmVudCxcblx0XHRjaGlsZHJlblxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgPSBuYW1lO1xuXHRcdHRoaXMucGFyZW50ICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuOyAvLyBJRCBvZiBFeHBlcnRpc2VUeXBlJ3MsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRXhwZXJ0aXNlVHlwZSdzXG5cdH1cblxuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX3BhcmVudCk7XG5cdH1cblxuXHRzZXQgcGFyZW50KHBhcmVudCkge1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGdldCBjaGlsZHJlbigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fY2hpbGRyZW4pO1xuXHR9XG5cblx0c2V0IGNoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGUuanMiLCJpbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlU3RhZmYge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmSWQsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfaWQ6IGV4cGVydGlzZVR5cGVJZCxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICA9IHN0YWZmSWQ7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGVJZDtcblx0XHR0aGlzLnRpY2tldHMgICAgICAgID0gdGlja2V0cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX2V4cGVydGlzZV90eXBlKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZShleHBlcnRpc2VUeXBlKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZVN0YWZmLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YXR1c1xuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgU3RhdHVzLlxuICogQ29udGFpbnMgVGlja2V0cyB0aGF0IGZpdCBpbnRvIHRoZSBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHNsdWcsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgPSBpZDtcblx0XHR0aGlzLnNsdWcgICAgPSBzbHVnOyAgICAvLyBzbHVnX2V4YW1wbGVcblx0XHR0aGlzLm5hbWUgICAgPSBuYW1lOyAgICAvLyBOYW1lIEV4YW1wbGUhXG5cdFx0dGhpcy50aWNrZXRzID0gdGlja2V0czsgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIFRpY2tldCBpbnN0YW5jZXNcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c1dpdGhTbHVnKHRoaXMuc2x1Zyk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFRpY2tldC9Qcm9ibGVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbHMsXG5cdFx0c3RhdHVzLFxuXHRcdHN0YXR1c19oaXN0b3J5OiBzdGF0dXNIaXN0b3J5LFxuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHNvbHV0aW9uX2lkOiBzb2x1dGlvbixcblx0XHRkZXZpY2VzLFxuXHRcdHByb2dyYW1zLFxuXHRcdGNvbW1lbnRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbCxcblx0XHR1cGRhdGVkX2F0OiB1cGRhdGVkQXRSZWFsLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmX2lkOiBleHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0YXNzaWduZWRfdG9fb3BlcmF0b3JfaWQ6IGFzc2lnbmVkVG9PcGVyYXRvcklkXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICAgID0gY2FsbHM7ICAvLyBJRCBvZiBjYWxscywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDYWxsJ3Ncblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YXR1c19oaXN0b3J5ICAgICAgID0gc3RhdHVzSGlzdG9yeTtcblx0XHR0aGlzLnRpdGxlICAgICAgICAgICAgICAgID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiAgICAgICAgICA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuc29sdXRpb24gICAgICAgICAgICAgPSBzb2x1dGlvbjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICAgID0gZGV2aWNlczsgIC8vIElEIG9mIGRldmljZXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRGV2aWNlc1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgICAgPSBwcm9ncmFtczsgLy8gSUQgb2YgcHJvZ3JhbXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgUHJvZ3JhbXNcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICAgID0gY29tbWVudHM7IC8vIElEIG9mIGNvbW1lbnRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENvbW1lbnQnc1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0ICAgICAgICAgICA9IHVwZGF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCAgICAgID0gY3JlYXRlZEF0UmVhbDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRfcmVhbCAgICAgID0gdXBkYXRlZEF0UmVhbDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBjYWxscygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGxzQnlUaWNrZXRJZCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCBjYWxscyhjYWxscykge1xuXHRcdHRoaXMuX2NhbGxzID0gY2FsbHM7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXHRcblx0Z2V0IHN0YXR1c19oaXN0b3J5KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzSGlzdG9yeSh0aGlzLl9zdGF0dXNfaGlzdG9yeSk7XG5cdH1cblxuXHRzZXQgc3RhdHVzX2hpc3Rvcnkoc3RhdHVzSGlzdG9yeSkge1xuXHRcdHRoaXMuX3N0YXR1c19oaXN0b3J5ID0gc3RhdHVzSGlzdG9yeTtcblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgSGFyZHdhcmVNYW5hZ2VyKCkpLmdldERldmljZXModGhpcy5fZGV2aWNlcyk7XG5cdH1cblxuXHRzZXQgZGV2aWNlcyhkZXZpY2VzKSB7XG5cdFx0dGhpcy5fZGV2aWNlcyA9IGRldmljZXM7XG5cdH1cblxuXHRnZXQgcHJvZ3JhbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgU29mdHdhcmVNYW5hZ2VyKCkpLmdldFByb2dyYW1zKHRoaXMuX3Byb2dyYW1zKTtcblx0fVxuXG5cdHNldCBwcm9ncmFtcyhwcm9ncmFtcykge1xuXHRcdHRoaXMuX3Byb2dyYW1zID0gcHJvZ3JhbXM7XG5cdH1cblxuXHRnZXQgY29tbWVudHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50c0J5SWRzKHRoaXMuX2NvbW1lbnRzKTtcblx0fVxuXG5cdHNldCBjb21tZW50cyhjb21tZW50cykge1xuXHRcdHRoaXMuX2NvbW1lbnRzID0gY29tbWVudHM7XG5cdH1cblxuXHRnZXQgc29sdXRpb24oKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50KHRoaXMuX3NvbHV0aW9uKTtcblx0fVxuXG5cdHNldCBzb2x1dGlvbihzb2x1dGlvbikge1xuXHRcdHRoaXMuX3NvbHV0aW9uID0gc29sdXRpb247XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVTdGFmZih0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZik7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZklkO1xuXHR9XG5cblx0Z2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKGFzc2lnbmVkVG9PcGVyYXRvcklkKSB7XG5cdFx0dGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHR2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQwIC0gMSArIDEpKSArIDE7IC8vUmFuZG9tIGludCBiZXR3ZWVuIDEgYW5kIDQwXG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKSkuZ2V0RXhwZXJ0aXNlVHlwZShyYW5kb20pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIERldmljZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0eXBlLFxuXHRcdG1ha2UsXG5cdFx0c2VyaWFsX25vLFxuXHRcdHRpY2tldHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KVxuXHR7XG5cdFx0dGhpcy5pZFx0XHRcdFx0PSBpZDtcblx0XHR0aGlzLnR5cGVcdFx0XHQ9IHR5cGU7XG5cdFx0dGhpcy5tYWtlICAgXHRcdD0gbWFrZTtcblx0XHR0aGlzLnNlcmlhbF9ubyAgICAgXHQ9IHNlcmlhbF9ubztcblx0XHR0aGlzLl90aWNrZXRzXHRcdD0gdGlja2V0cztcblx0XHR0aGlzLmNyZWF0ZWRfYXRcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL0RldmljZS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogUHJvZ3JhbVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgU29mdHdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyYW0ge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzLFxuXHRcdG9wZXJhdGluZ19zeXN0ZW0sXG5cdFx0ZXhwaXJ5X2RhdGUsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KSBcblx0e1xuXHRcdHRoaXMuaWQgICAgICAgICBcdFx0PSBpZDtcblx0XHR0aGlzLm5hbWUgICAgICAgXHRcdD0gbmFtZTtcblx0XHR0aGlzLl90aWNrZXRzXHRcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMub3BlcmF0aW5nX3N5c3RlbVx0PSBvcGVyYXRpbmdfc3lzdGVtO1xuXHRcdHRoaXMuZXhwaXJ5X2RhdGVcdFx0PSBleHBpcnlfZGF0ZTtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgXHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgXHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxuXG5cdGdldFNvZnR3YXJlVHlwZSgpIHsgXG5cdFx0Ly9HZXRzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIHByb2dyYW0gaXMgYW4gb3BlcnRpbmcgc3lzdGVtIG9yIG5vdFxuXHRcdGlmICh0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIk9wZXJhdGluZyBTeXN0ZW1cIjtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIkFwcGxpY2F0aW9uXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBcIi1cIjtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFN0YXR1c1xuICpcbiAqIEludGVybWVkaWFyeSByZWxhdGlvbnNoaXAgYmV0d2VlbiBTdGF0dXNcbiAqIGFuZCBUaWNrZXQuIFRoaXMgc3RvcmVzIGEgaGlzdG9yeSBvZiBhXG4gKiBUaWNrZXQncyBzdGF0dXNlczsgdGhlIGxhc3QgZW50cnkgaXNcbiAqIHRoZSBUaWNrZXQncyBjdXJyZW50IHN0YXR1cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0U3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdHN0YXR1c19pZDogc3RhdHVzLFxuXHRcdHN0YWZmX2lkOiBzdGFmZixcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDsgLy8gSUQgb2YgdGlja2V0LCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgVGlja2V0XG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgID0gc3RhZmY7ICAvLyBJRCBvZiBzdGFmZiwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRTdGF0dXMuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4vRHluYW1pY1BhZ2VcIjtcblxuLyoqXG4gKiBBUElcbiAqXG4gKiBPcmlnaW5hbGx5IHVzZWQgdG8gcmV0cmlldmUgYW5kIGhhbmRsZSBkYXRhIGZyb21cbiAqIEFQSSBlbmRwb2ludHMsIGJ1dCBtb2RpZmllZCB0byBob2xkIGxvY2FsIGRhdGFcbiAqIGluIHRoZSBjb25zdHJ1Y3RvciBzZXQgYnkgV29yZFByZXNzJ3MgVHdpZ1xuICogKGRvbmUgdG8gcmV1c2UgcHJldmlvdXMgY29tcG9uZW50cyB0byBzYXZlIHRpbWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRjYWxscyA9IFtdLFxuXHRcdHN0YXR1c2VzID0gW10sXG5cdFx0dGlja2V0cyA9IFtdLFxuXHRcdHRpY2tldF9zdGF0dXNlczogdGlja2V0U3RhdHVzZXMgPSBbXSxcblx0XHRjb21tZW50cyA9IFtdLFxuXHRcdHN0YWZmID0gW10sXG5cdFx0ZGV2aWNlcyA9IFtdLFxuXHRcdHByb2dyYW1zID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBleHBlcnRpc2VUeXBlcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmOiBleHBlcnRpc2VUeXBlU3RhZmYgPSBbXSxcblx0XHRkZXBhcnRtZW50cyA9IFtdXG5cdH0pIHtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICA9IGNhbGxzO1xuXHRcdHRoaXMuc3RhdHVzZXMgICAgICAgICAgID0gc3RhdHVzZXM7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICAgICAgPSB0aWNrZXRzO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgICAgID0gdGlja2V0U3RhdHVzZXM7XG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgPSBjb21tZW50cztcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICAgICA9IHN0YWZmO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgID0gZGV2aWNlcztcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICA9IHByb2dyYW1zO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gZXhwZXJ0aXNlVHlwZXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyAgICAgICAgPSBkZXBhcnRtZW50cztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL0FQSS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4vU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhZmZQYWdlXG4gKlxuICogTWV0aG9kcyB1c2VmdWwgZm9yIHBvcHVsYXRpbmcgYW5kIGhhbmRsaW5nIGlucHV0IG9uIFN0YWZmIHBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblxuXHRcdC8vIE5vIGVtcGxveWVlIGRldGFpbCBzaG93biBieSBkZWZhdWx0XG5cdFx0dGhpcy5lbXBsb3llZSA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWluIGFuZCBzaG93IGFsbCBzdGFmZiBpbiBsaXN0IHZpZXcgdGFibGUgb24gcGFnZVxuXHQgKi9cblx0c2hvd1N0YWZmKCkge1xuXHRcdC8vIEVuc3VyZSBubyBsb2NhbGx5LWNhY2hlZCBkYXRhIGlzIHByZXNlbnQgaW4gc3RhZmYgdGFibGUgYmVmb3JlIHBvcHVsYXRpbmdcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5XCIpLmVtcHR5KCk7XG5cblx0XHQvLyBDb2x1bW4gdG8gZmlsbCB0aWNrZXRzIG51bWJlciBpbnRvXG5cdFx0bGV0IHRpY2tldHNDb2x1bW5JbmRleCA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidHJcIikuZmlyc3QoKVxuXHRcdFx0XHQuY2hpbGRyZW4oXCJbZGF0YS1zbHVnPVxcXCJ0aWNrZXRzLmFzc2lnbmVkXFxcIl1cIikuaW5kZXgoKTtcblxuXHRcdC8vIFRlbXBvcmFyeSBhcnJheSB0byBob2xkIHN0YWZmIElEcyBzdGlsbCBhd2FpdGluZyB0aWNrZXQgY291bnRzXG5cdFx0bGV0IHN0YWZmRm9yVGlja2V0cyA9IFtdO1xuXG5cdFx0Ly8gUHV0IGVhY2ggc3RhZmYgbWVtYmVyIG9uIHRhYmxlXG5cdFx0bGV0IHN0YWZmID0gdGhpcy5zdGFmZk1hbmFnZXIuc3RhZmY7XG5cblx0XHQvLyBBZGQgZWFjaCBzdGFmZiBtZW1iZXIgdG8gYSBuZXcgcm93IGluIHRoZSB0YWJsZVxuXHRcdGZvciAobGV0IGVtcGxveWVlIG9mIHN0YWZmKSB7XG5cdFx0XHRsZXQgJHRhYmxlUm93ID0gdGhpcy5hcHBlbmRUYWJsZVJvdyhlbXBsb3llZSk7XG5cdFx0XHRzdGFmZkZvclRpY2tldHMucHVzaChlbXBsb3llZS5pZCk7XG5cdFx0fVxuXG5cdFx0Ly8gSGlkZSBzcGxhc2ggc2NyZWVuIGlmIHRoZXJlIGlzIGF0IGxlYXN0IDEgc3RhZmYgbWVtYmVyIGluIHZpZXdcblx0XHR0aGlzLnVwZGF0ZVNwbGFzaFNjcmVlbigpO1xuXG5cdFx0Ly8gR2V0IGFzc2lnbmVkIHRpY2tldCBjb3VudHMgYXN5bmNocm9ub3VzbHlcblx0XHQoYXN5bmMoaWRzKSA9PiB7XG5cdFx0XHQvLyBHZXQgbnVtYmVyIG9mIGFzc2lnbmVkIHRpY2tldHMgYW5kIGZpbGwgY29sdW1uXG5cdFx0XHRsZXQgJHJvd3MgPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5XCIpLmNoaWxkcmVuKFwidHJcIik7XG5cdFx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKGlkcyk7XG5cdFx0XHQkcm93cy5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0XHRlbC5jaGlsZHJlblt0aWNrZXRzQ29sdW1uSW5kZXhdLnRleHRDb250ZW50ID0gdGlja2V0c1tpKzFdID8gKHRpY2tldHNbaSsxXS5sZW5ndGggfHwgMCkgOiAwO1xuXHRcdFx0fSk7XG5cdFx0fSkoc3RhZmZGb3JUaWNrZXRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgc2hvd2luZyBkZXRhaWxzIGZvciBhIHNwZWNpZmljIGVtcGxveWVlLiBVc3VhbGx5IGNhbGxlZFxuXHQgKiB3aGVuIGNsaWNraW5nIG9uIGEgcm93IGluIHRoZSB0YWJsZSwgYnV0IGNhbiBhbHNvIGJlIGNhbGxlZFxuXHQgKiBmb3Igb3RoZXIgdGFibGUgcm93IGNoYW5nZSBpbnB1dHMsIHN1Y2ggYXMgaGFzaCBmcmFnbWVudCBvclxuXHQgKiBrZXlib2FyZCBpbnB1dC5cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgZW1wbG95ZWUgdG8gc2hvdyBkZXRhaWxcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQpIHtcblx0XHQvLyBHZXQgZW1wbG95ZWUgd2l0aCBJRFxuXHRcdHRoaXMuZW1wbG95ZWUgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXQoaWQpO1xuXHRcdC8vIENhdGNoIGludmFsaWQgSURzIGFuZCBzaG93IG1lc3NhZ2Vcblx0XHRpZiAoIXRoaXMuZW1wbG95ZWUpIHtcblx0XHRcdC8vIEhpZGUgc2luZ2xlIHZpZXcgaWYgbm8gZGV0YWlsIGlzIGFibGUgdG8gYmUgcHJlc2VudGVkXG5cdFx0XHQvLyBmb3IgcmVxdWVzdGVkIElELCBlbnN1cmluZyB0aGUgcGVyc29uIHVzaW5nIHRoZSBzeXN0ZW1cblx0XHRcdC8vIGlzIG5vdCBjb25mdXNlZCBieSBkYXRhIHNob3duIGZvciBwcmV2aW91c2x5IGFjY2Vzc2VkIHVzZXIuXG5cdFx0XHR0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0XHRcdER5bmFtaWNQYWdlLnNob3dOb3RpZmljYXRpb24oXCJObyBlbXBsb3llZSB3aXRoIElEIFwiICsgaWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFB1dCBlbXBsb3llZSBuYW1lIGluIHRpdGxlIGJhciBvZiBzaW5nbGUgdmlld1xuXHRcdHRoaXMudXBkYXRlU2luZ2xlVmlld05hdmJhcih0aGlzLmVtcGxveWVlLm5hbWUpO1xuXHRcdFxuXHRcdC8vIEZpbGwgaW4gY29udGVudCBmb3IgZWFjaCBmaWVsZCBhdmFpbGFibGUgaW4gc3RhZmYgbWVtYmVyXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKFwiW2RhdGEtc2x1Z11cIikuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdC8vIEVhY2ggc2x1ZyBpcyBhIGRpZmZlcmVudCBmaWVsZCB0byBiZSBmaWxsZWQsIHNvXG5cdFx0XHQvLyBnZXQgZWFjaCB2YWx1ZSBhbmQgc2V0IGVsZW1lbnQgY29udGVudCB0byB2YWx1ZVxuXHRcdFx0bGV0IHZhbHVlID0gT2JqZWN0LnJlc29sdmUoZWwuZGF0YXNldC5zbHVnLCB0aGlzLmVtcGxveWVlKTtcblx0XHRcdC8vIFNvbWUgdmFsdWVzIGFyZSBvcHRpb25hbCwgc28gZG9uJ3Qgc2hvdyB1bmRlZmluZWQgaWYgbm8gZGF0YVxuXHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgPyB2YWx1ZSA6IFwi4oCUXCI7XG5cdFx0fSk7XG5cblx0XHQvLyBTb21lIGNvbnRlbnQgcmVxdWlyZXMgc3BlY2lhbCBoYW5kbGluZyBmb3IgaW5wdXQgb2YgaW5mb3JtYXRpb25cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1jdXN0b21zbHVnXVwiKS5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0c3dpdGNoIChlbC5kYXRhc2V0LmN1c3RvbXNsdWcpIHtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIHRva2VucyBuZWVkIHRvIGJlIGhhbmRsZWQgc3BlY2lhbGx5XG5cdFx0XHRcdC8vIHNpbmNlIHZhbHVlIGlzIG5vdCBub3JtYWwgdGV4dFxuXHRcdFx0XHRjYXNlIFwiYWNjZXNzXCI6XG5cdFx0XHRcdFx0U3RhZmZQYWdlLnNob3dQZXJtaXNzaW9ucyhlbCwgdGhpcy5lbXBsb3llZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcImF2YXRhclwiOlxuXHRcdFx0XHRcdGVsLnNyYyA9IFwiaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMjc1eDI3NVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJ0aWNrZXRzLmFzc2lnbmVkXCI6XG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBcIuKAplwiO1xuXHRcdFx0XHRcdChhc3luYyhlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRoaXMuZW1wbG95ZWUuaWQpLmxlbmd0aDtcblx0XHRcdFx0XHR9KShlbCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8gSWYgaW4gZG91YnQsIHByZXN1bWUgZGF0YSBpcyBpbnZhbGlkIGFuZCBzaG93IHNhbWUgYXMgbm8gZGF0YVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gXCLigJRcIjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIER5bmFtaWNQYWdlIG5lZWRzIHRvIGhhbmRsZSB2aWV3IGNvZGVcblx0XHRzdXBlci5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblxuXHRcdC8vIFByb2JsZW0gdHlwZXMgdmlldyBoYW5kbGluZyB0byBiZSBvYnRhaW5lZCBieSBzcGVjaWZpYyBwcm9ibGVtIHR5cGUgSlNcblx0XHR3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UuY3VycmVudFNwZWNpYWxpc21zID0gdGhpcy5lbXBsb3llZS5fc3BlY2lhbGlzbXM7XG5cdFx0d2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlLmxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMoJCgnLnR5cGUtY29sdW1ucycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZGlzcGxheWluZyBwZXJtaXNzaW9ucyBmcm9tIGRhdGEgb2JqZWN0XG5cdCAqIHRvIGluZGl2aWR1YWwgdG9rZW5zIHNob3duIGluIGlucHV0LCBvbmUgZm9yIGVhY2ggb2Zcblx0ICogdGhlIHBlcm1pc3Npb24gbGV2ZWxzIGdyYW50ZWQgdG8gdGhlIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudCB0byBmaWxsIHdpdGggdGhlIHBlcm1pc3Npb24gZGV0YWlsc1xuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGdldCB0aGUgZ3JhbnRlZCBwZXJtaXNzaW9uIGluZm9ybWF0aW9uIGZyb21cblx0ICovXG5cdHN0YXRpYyBzaG93UGVybWlzc2lvbnMoZWwsIGVtcGxveWVlKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gXCJcIjtcblx0XHQvLyBEZWZpbmUgdGhlIGljb25zIHRvIGJlIGRpc3BsYXllZCBmb3IgZWFjaCBvZiB0aGUgcGVybWlzc2lvbiBsZXZlbHNcblx0XHRsZXQgaWNvbnMgPSB7cmVhZDogXCJleWVcIiwgb3BlcmF0b3I6IFwidXNlci1zZWNyZXRcIiwgYW5hbHlzdDogXCJsaW5lLWNoYXJ0XCIsIGFkbWluOiBcInNoaWVsZFwifTtcblxuXHRcdC8vIEVhY2ggcGVybWlzc2lvbiBoYXMgaXRzIG93biB0b2tlbiBmb3IgcmVwcmVzZW50aW5nIGl0c2VsZlxuXHRcdGZvciAobGV0IHBlcm1pc3Npb24gb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cblx0XHRcdC8vIERldGVybWluZSB3aGV0aGVyIGVtcGxveWVlIGhhcyBwZXJtaXNzaW9uIGFuZCBvbmx5IHNob3cgaWYgdHJ1ZVxuXHRcdFx0aWYgKGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSkge1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gaWNvblxuXHRcdFx0XHRsZXQgZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cdFx0XHRcdGVsSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1cIiArIGljb25zW3Blcm1pc3Npb25dKTtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIG5hbWVcblx0XHRcdFx0bGV0IGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRlbFRleHQudGV4dENvbnRlbnQgPSBwZXJtaXNzaW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGVybWlzc2lvbi5zbGljZSgxKTtcblxuXHRcdFx0XHQvLyBHcm91cCBpY29uIGFuZCBuYW1lIGludG8gc2luZ2xlIHRva2VuXG5cdFx0XHRcdGxldCBlbFBlcm1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0ZWxQZXJtaXNzaW9uLmFwcGVuZENoaWxkKGVsSWNvbik7XG5cdFx0XHRcdGVsUGVybWlzc2lvbi5hcHBlbmRDaGlsZChlbFRleHQpO1xuXG5cdFx0XHRcdC8vIERpc3BsYXkgcGVybWlzc2lvbiB0b2tlbiBpbiBlbGVtZW50XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGVsUGVybWlzc2lvbik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHN0YWZmIG1lbWJlcnMgZ2l2ZW4gYSBzZWFyY2ggc3RyaW5nXG5cdCAqIHRvIGZpbHRlciB0aGUgdGFibGUgYnkgZW1wbG95ZWVzIG1hdGNoaW5nIHRoZSBzdHJpbmcuXG5cdCAqIFRoaXMgc2VhcmNoZXMgdGhyb3VnaCBtYW55IHN0YWZmIHRhYmxlIGZpZWxkczpcblx0ICogaWQsIG5hbWUsIGpvYiwgZGVwYXJ0bWVudCBhbmQgcGhvbmUgbnVtYmVyLlxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmcgdG8gZmlsdGVyIHRoZSBlbXBsb3llZXMgYnlcblx0ICovXG5cdGFzeW5jIHNlYXJjaChxdWVyeSkge1xuXHRcdC8vIE9ubHkgc2VhcmNoIGlmIHF1ZXJ5IGlzIHN1ZmZpY2llbnQgZm9yIHNlYXJjaFxuXHRcdC8vIFRoaXMgbWF0dGVycyBtb3JlIHdpdGggbGFyZ2VyIGRhdGFzZXRzIHdoZXJlIFwiYVwiIGNhbiBoYXZlXG5cdFx0Ly8gdGhvdXNhbmRzIG9mIHJlc3VsdHMuIEFsd2F5cyBlbnN1cmUgSUQgc2VhcmNoZXMgYXJlIHBlcmZvcm1lZFxuXHRcdC8vIHNpbmNlIElEIGlzIGluZGV4ZWQgYW5kIGNhbiBiZSBzZWFyY2hlZCB2ZXJ5IHF1aWNrbHkuXG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+PSAyIHx8IChxdWVyeS5sZW5ndGggPiAwICYmIHF1ZXJ5ID09IHBhcnNlSW50KHF1ZXJ5KSkpIHtcblxuXHRcdFx0Ly8gRGVmaW5lIHByb3BlcnRpZXMgb2YgZW1wbG95ZWVzIHRvIGJlIHNlYXJjaGVkIGZvciBxdWVyeSBtYXRjaFxuXHRcdFx0dmFyIHByb3BlcnRpZXMgPSBbXCJpZFwiLCBcIm5hbWVcIiwgXCJqb2JcIiwgXCJkZXBhcnRtZW50XCIsIFwicGhvbmVcIl07XG5cdFx0XHQvLyBQZXJmb3JtIHRoZSBzZWFyY2ggdXNpbmcgc3VwZXIgc2VhcmNoIGFuZCBhc3NpZ24gcmVzdWx0c1xuXHRcdFx0c3VwZXIuc2VhcmNoKHF1ZXJ5LCB0aGlzLnN0YWZmTWFuYWdlci5zZWFyY2gocXVlcnksIHByb3BlcnRpZXMpLCBvYmogPT4gT2JqZWN0LmFzc2lnbih7fSwgb2JqKSwgcHJvcGVydGllcyk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRGVmYXVsdCB0byBzaG93aW5nIGFsbCBzdGFmZiBpZiBxdWVyeSBpcyBtaXNzaW5nIG9yIGluc3VmZmljaWVudFxuXHRcdFx0Ly8gVGhpcyBpcyBkaXN0aW5jdCB0byB0aGUgY2FzZSB3aGVyZSB0aGVyZSBhcmUgbm8gcmVzdWx0cyB0b1xuXHRcdFx0Ly8gYSBzdWNjZXNzZnVsIHF1ZXJ5IOKAlCB0aGlzIGlzIGhhbmRsZWQgaW4gc3VwZXIncyBzZWFyY2ggbWV0aG9kXG5cdFx0XHQvLyBhbmQgc2hvd3MgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBpbnN0ZWFkIG9mIGFsbCB0aGUgc3RhZmYuXG5cdFx0XHR0aGlzLnNob3dTdGFmZigpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3N0YWZmL1N0YWZmUGFnZS5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZlBhZ2UgZnJvbSBcIi4uL3N0YWZmL1N0YWZmUGFnZVwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuXG4vKipcbiAqIFRpY2tldFBhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgdGlja2V0cyBwYWdlIC93IEpRdWVyeSB1c2luZyBkYXRhIGZyb21cbiAqIHRoZSBUaWNrZXRNYW5hZ2VyLiBNZXRob2RzIG1vc3RseSBnZXQgY2FsbGVkIGZyb20gdGlja2V0cy5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgICA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zb2Z0d2FyZU1hbmFnZXIgPSBuZXcgU29mdHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5oYXJkd2FyZU1hbmFnZXIgPSBuZXcgSGFyZHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgICAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmN1cnJlbnRUaWNrZXQgPSBudWxsOyAvLyBUaWNrZXQgYmVpbmcgc2hvd24gb24gdGhlIHJpZ2h0IHBhbmVsXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB0aWNrZXRzIHdoZXJlIHRoZWlyIHN0YXR1cyBpcyBpbiB0aGUgYXJyYXkgb2Zcblx0ICogc3RhdHVzIHNsdWdzLiBSZXBsYWNlcyB0aGUgY3VycmVudCBsaXN0LXZpZXcgd2l0aCB0aGVtLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICovXG5cdHNob3dGaWx0ZXJlZFRpY2tldHMoc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgc3RhdHVzLCBmaWx0ZXJlZFRpY2tldHMsIGZpbHRlcmVkVGlja2V0LCBpLCBqLFxuXHRcdFx0c3BsaXRTdGF0dXNTbHVncyA9IHN0YXR1c1NsdWdzLnNwbGl0KCcsJyk7XG5cblx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZignYXNzaWduZWRfdG8nKSA+IC0xKSB7XG5cdFx0XHRmaWx0ZXJlZFRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0TXlUaWNrZXRzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZpbHRlcmVkVGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzV2l0aFNsdWdJbihzcGxpdFN0YXR1c1NsdWdzKTtcblx0XHR9XG5cblx0XHRsZXQgJHJvd3MgPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHkgdHInKTtcblxuXHRcdGlmICgkcm93cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBmaWx0ZXJlZFRpY2tldHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZmlsdGVyZWRUaWNrZXQgPSBmaWx0ZXJlZFRpY2tldHNbal07XG5cdFx0XHRcdHN0YXR1cyAgICAgICAgID0gZmlsdGVyZWRUaWNrZXQuc3RhdHVzO1xuXG5cdFx0XHRcdHRoaXMuYXBwZW5kVGFibGVSb3coe1xuXHRcdFx0XHRcdGlkOiBmaWx0ZXJlZFRpY2tldC5pZCxcblx0XHRcdFx0XHR0aXRsZTogZmlsdGVyZWRUaWNrZXQudGl0bGUsXG5cdFx0XHRcdFx0c3RhdHVzX25hbWU6ICc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCIgZGF0YS1zbHVnPVwiJyArIHN0YXR1cy5zbHVnICsgJ1wiPicgKyBzdGF0dXMubmFtZSArICc8L3NwYW4+Jyxcblx0XHRcdFx0XHRjcmVhdGVkX2F0OiBmaWx0ZXJlZFRpY2tldC5jcmVhdGVkX2F0LFxuXHRcdFx0XHRcdHVwZGF0ZWRfYXQ6IGZpbHRlcmVkVGlja2V0LnVwZGF0ZWRfYXRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JHJvd3MuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmIChzcGxpdFN0YXR1c1NsdWdzLmluZGV4T2YoJCh0aGlzKS5maW5kKCd0ZCBzcGFuLmZpbHRlcicpLmRhdGEoJ3NsdWcnKSkgPT09IC0xKSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3Jvdy1oaWRkZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3Jvdy1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cblx0XHR0aGlzLmN1cnJlbnRUaWNrZXQgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXNlbnRzIGEgVGlja2V0IGluIHRoZSByaWdodCBwYW5lbCAodGlja2V0IHZpZXcpLlxuXHQgKiBcblx0ICogUG9wdWxhdGVzIGVsZW1lbnRzIG9uIHRoZSB0aWNrZXQgdmlldywgaW5jbHVkaW5nIGV4dGVybmFsXG5cdCAqIGl0ZW1zIHN1Y2ggYXM6XG5cdCAqICAgICAtIERldmljZXNcblx0ICogICAgIC0gUHJvZ3JhbXNcblx0ICogICAgIC0gQ2FsbHNcblx0ICogICAgIC0gQ29tbWVudHNcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRzaG93VGlja2V0Vmlldyh0aWNrZXRJZCkge1xuXHRcdGlmICh0aWNrZXRJZCAhPT0gbnVsbCkgeyAvLyBudWxsIHdoZW4gbm8gY3VycmVudFRpY2tldCBoYXMgYmVlbiBvcGVuZWQgeWV0LCBidXQgdXNlciBpcyBjaGFuZ2luZyB0aGUgY2F0ZWdvcnlcblx0XHRcdGxldCB0aWNrZXQgICAgICAgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0KHRpY2tldElkKSxcblx0XHRcdFx0dGlja2V0U3RhdHVzID0gdGlja2V0LnN0YXR1cztcblxuXHRcdFx0dGhpcy5jdXJyZW50VGlja2V0ID0gdGlja2V0O1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGlja2V0LnRpdGxlICsgJzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgdGlja2V0U3RhdHVzLnNsdWcuc3BsaXQoJ18nKVswXSArICdcIj4nICsgdGlja2V0U3RhdHVzLm5hbWUgKyAnPC9zcGFuPicpO1xuXG5cdFx0XHQkKCcjdGlja2V0LXZpZXcgI3RpY2tldC1vdmVydmlldycpLnRleHQoJyMnICsgdGlja2V0LmlkICsgJyB8ICcgKyB0aWNrZXQuY3JlYXRlZF9hdCArICcgfCAnICsgdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KS5uYW1lKTtcblx0XHRcdCQoJyN0aWNrZXQtdmlldyAjdGlja2V0LWRlc2NyaXB0aW9uIHAnKS50ZXh0KHRpY2tldC5kZXNjcmlwdGlvbik7XG5cblx0XHRcdHZhciAkdGlja2V0Q29tbWVudHMgICAgICAgICAgID0gJCgnI3RpY2tldC1jb21tZW50cycpLFxuXHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZSAgID0gJCgnI3RpY2tldC12aWV3ICNoYXJkd2FyZS1zb2Z0d2FyZS10YWJsZScpLFxuXHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlID0gJCgnI3RpY2tldC12aWV3ICNuby1oYXJkd2FyZS1zb2Z0d2FyZScpLFxuXHRcdFx0XHQkdGlja2V0Q2FsbEhpc3RvcnlCb2R5ICAgID0gJCgnI3RpY2tldC12aWV3ICNjYWxsLWhpc3RvcnktdGFibGUgdGJvZHknKS5lbXB0eSgpO1xuXG5cdFx0XHQkdGlja2V0Q29tbWVudHMudGV4dCgnTG9hZGluZyBjb21tZW50c+KApicpLnNob3coKTtcblx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdCR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUuaGlkZSgpO1xuXG5cdFx0XHQvLyBTaG93IGJhc2ljIGluZm8gd2hpbHN0IG90aGVyIGRhdGEgaXMgYmVpbmcgbG9hZGVkIGFzeW5jaHJvbm91c2x5XG5cdFx0XHR0aGlzLnNob3dUYWJsZVJvd0RldGFpbHModGlja2V0LmlkKTtcblxuXHRcdFx0Ly8gQWZmZWN0ZWQgaXRlbXMgKGRldmljZXMgYW5kIHByb2dyYW1zKVxuXHRcdFx0KGFzeW5jKCkgPT4ge1xuXHRcdFx0XHRsZXQgZGV2aWNlcyAgICAgICA9IHRpY2tldC5kZXZpY2VzLFxuXHRcdFx0XHRcdHByb2dyYW1zICAgICAgPSB0aWNrZXQucHJvZ3JhbXMsXG5cdFx0XHRcdFx0YWZmZWN0ZWRJdGVtcyA9IGRldmljZXMuY29uY2F0KHByb2dyYW1zKTtcblxuXHRcdFx0XHRpZiAoYWZmZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHsgLy8gaGlkZSB0aGUgSFcvU1cgdGFibGUgaWYgdGhlcmUncyBubyBhZmZlY3RlZCBpdGVtc1xuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlLnNob3coKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgJHRpY2tldEhhcmR3YXJlU29mdHdhcmVCb2R5ID0gJHRpY2tldEhhcmR3YXJlU29mdHdhcmUuZmluZCgndGJvZHknKTtcblxuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keS5lbXB0eSgpO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhZmZlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgYWZmZWN0ZWRJdGVtID0gYWZmZWN0ZWRJdGVtc1tpXSxcblx0XHRcdFx0XHRcdFx0dHlwZTtcblxuXHRcdFx0XHRcdFx0Ly8gZ2V0IHR5cGUgb2YgYWZmZWN0ZWRJdGVtIHRvIGRpc3BsYXkgaW4gdGlja2V0LXZpZXcgdGFibGVcblx0XHRcdFx0XHRcdGlmIChhZmZlY3RlZEl0ZW0uaGFzT3duUHJvcGVydHkoJ3NlcmlhbF9ubycpKSB7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAnSGFyZHdhcmUnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChhZmZlY3RlZEl0ZW0ub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0XHRcdFx0XHR0eXBlID0gJ09TJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAnU29mdHdhcmUnO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZUJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQnPHRyIGRhdGEtcm93aWQ9XCInICsgYWZmZWN0ZWRJdGVtLmlkICsgJ1wiIGRhdGEtcm93dHlwZT1cIicgKyAoYWZmZWN0ZWRJdGVtLmhhc093blByb3BlcnR5KCdzZXJpYWxfbm8nKSA/ICdoYXJkd2FyZScgOiAnc29mdHdhcmUnKSArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgKGFmZmVjdGVkSXRlbS50eXBlIHx8IGFmZmVjdGVkSXRlbS5uYW1lKSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyAoYWZmZWN0ZWRJdGVtLnNlcmlhbF9ubyB8fCAn4oCUJykgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdHlwZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLnNob3coKTtcblx0XHRcdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblxuXHRcdFx0Ly8gQ2FsbHNcblx0XHRcdChhc3luYygpID0+IHtcblx0XHRcdFx0bGV0IGNhbGxzID0gdGlja2V0LmNhbGxzO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgY2FsbCAgID0gY2FsbHNbaV0sXG5cdFx0XHRcdFx0XHRjYWxsZXIgPSBjYWxsLmNhbGxlcjtcblxuXHRcdFx0XHRcdCR0aWNrZXRDYWxsSGlzdG9yeUJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIGNhbGwuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIGNhbGwuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgY2FsbGVyLm5hbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgY2FsbC50aW1lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHQvLyBDb21tZW50c1xuXHRcdFx0KGFzeW5jKCkgPT4ge1xuXHRcdFx0XHRsZXQgY29tbWVudHMgPSB0aWNrZXQuY29tbWVudHMsXG5cdFx0XHRcdFx0bWUgICAgICAgPSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcih0cnVlKTtcblxuXHRcdFx0XHRpZiAoY29tbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JHRpY2tldENvbW1lbnRzLnRleHQoJ05vIGNvbW1lbnRzIGhhdmUgYmVlbiBsZWZ0IHlldCEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGlja2V0Q29tbWVudHMudGV4dCgnTG9hZGluZyBjb21tZW50c+KApicpO1xuXG5cdFx0XHRcdFx0bGV0IHRpY2tldFN0YXR1c2VzID0gdGlja2V0UGFnZS50aWNrZXRNYW5hZ2VyLmdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXQuaWQpLFxuXHRcdFx0XHRcdFx0dGlja2V0RmVlZCAgICAgPSBjb21tZW50cy5jb25jYXQodGlja2V0U3RhdHVzZXMpLCAvLyBpbmNsdWRlcyBjb21tZW50cyBhbmQgdGlja2V0IHN0YXR1cyBoaXN0b3J5IGluIG9uZVxuXHRcdFx0XHRcdFx0JHRpY2tldEZlZWQgICAgPSAkKCc8ZGl2PicpO1xuXG5cdFx0XHRcdFx0Ly8gU29ydCB0aGUgZmVlZCBieSBkYXRlXG5cdFx0XHRcdFx0dGlja2V0RmVlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIERhdGUucGFyc2UoYS5jcmVhdGVkX2F0X3JlYWwpIC0gRGF0ZS5wYXJzZShiLmNyZWF0ZWRfYXRfcmVhbCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBpIGluIHRpY2tldEZlZWQpIHtcblx0XHRcdFx0XHRcdGxldCBwb3N0ID0gdGlja2V0RmVlZFtpXTtcblxuXHRcdFx0XHRcdFx0aWYgKHBvc3QgaW5zdGFuY2VvZiBDb21tZW50KSB7IC8vIENvbW1lbnRcblx0XHRcdFx0XHRcdFx0aWYgKHBvc3QuaWQgIT09IHRpY2tldC5fc29sdXRpb24pIHsgLy8gdGhpcyBjb21tZW50IGlzIG5vdCBhIHNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0JHRpY2tldEZlZWQuYXBwZW5kKHRoaXMuZ2V0Q29tbWVudChwb3N0LCBtZSkpLmZpbmQoJy5tZWRpYS1zaWRlIGknKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQkdGlja2V0RmVlZC5wcmVwZW5kKHRoaXMuZ2V0Q29tbWVudChwb3N0LCBtZSwgdHJ1ZSkpLmZpbmQoJy5tZWRpYS1zaWRlIGknKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHsgLy8gVGlja2V0IFN0YXR1cyBDaGFuZ2UgKFRpY2tldFN0YXR1cy9TdGF0dXNIaXN0b3J5KVxuXHRcdFx0XHRcdFx0XHRsZXQgc3RhdHVzID0gcG9zdC5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0c3RhZmYgID0gcG9zdC5zdGFmZjtcblxuXHRcdFx0XHRcdFx0XHQkdGlja2V0RmVlZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JzxsaSBjbGFzcz1cInRpY2tldC1ldmVudFwiPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtdGlja2V0XCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JyBTdGF0dXMgQ2hhbmdlZCBieSAnICsgc3RhZmYubmFtZSArICc6ICcgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwidGlja2V0LWV2ZW50LWRldGFpbHNcIj4nICsgKHN0YXR1cy5uYW1lLnNwbGl0KCcgJylbMF0pICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInRpY2tldC1ldmVudC1kYXRlXCI+JyArIHBvc3QuY3JlYXRlZF9hdCArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzwvbGk+J1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhZGUgb3V0IGxvYWRpbmcgdGV4dCwgaW5zZXJ0IHRpY2tldEZlZWRcblx0XHRcdFx0XHQkdGlja2V0Q29tbWVudHMuZmFkZU91dCgyNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKCR0aWNrZXRGZWVkLnVud3JhcCgpKTtcblx0XHRcdFx0XHRcdCQodGhpcykuc2hvdygpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBIVE1MIGZvciBhIGNvbW1lbnQsIHdoaWNoIG1heSBsb29rIGRpZmZlcmVudFxuXHQgKiBpZiBpdCdzIGEgc29sdXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7Q29tbWVudH0gY29tbWVudFxuXHQgKiBAcGFyYW0ge0VtcGxveWVlfSBtZSBpbnN0YW5jZSBvZiB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGNvbW1lbnRcblx0ICovXG5cdGdldENvbW1lbnQocG9zdCwgbWUsIGlzU29sdXRpb24gPSBmYWxzZSkge1xuXHRcdGxldCBhdXRob3IgID0gcG9zdC5hdXRob3IsXG5cdFx0XHRjb21tZW50ID0gXG5cdFx0XHQnPGxpIGNsYXNzPVwibWVkaWEgJyArIChpc1NvbHV0aW9uID8gJ3NvbHV0aW9uJyA6ICcnKSArICdcIiBkYXRhLWNvbW1lbnQtaWQ9XCInICsgcG9zdC5pZCArICdcIj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZWRpYS1zaWRlXCI+JyArXG5cdFx0XHRcdFx0JzxhIGhyZWY9XCInICsgKGF1dGhvci5pZCA9PT0gbWUuaWQgPyAnL3NldHRpbmdzJyA6ICcvc3RhZmYjJyArIGF1dGhvci5pZCkgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQnPGltZyBzcmM9XCJodHRwczovL3BsYWNlaG9sZC5pdC8yNzV4Mjc1XCIgYWx0PVwiJyArIGF1dGhvci5uYW1lICsgJ1xcJ3MgUHJvZmlsZSBQaWN0dXJlXCI+JyArXG5cdFx0XHRcdFx0JzwvYT4nICtcblx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nICtcblx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj4nICtcblx0XHRcdFx0XHQnPGg1IGNsYXNzPVwibXQtMCBtYi0xXCI+JyArXG5cdFx0XHRcdFx0XHQnPGEgaHJlZj1cIi9zdGFmZiMnICsgYXV0aG9yLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHRhdXRob3IubmFtZSArXG5cdFx0XHRcdFx0XHQnPC9hPicgK1xuXHRcdFx0XHRcdFx0KGlzU29sdXRpb24gPyAnIDxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci1yZXNvbHZlZFwiPlNvbHV0aW9uPC9zcGFuPicgOiAnJykgK1xuXHRcdFx0XHRcdFx0KHBvc3QuX2NhbGwgIT09IG51bGwgPyAnIDxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci1uZXcgbm90ZS1hYm91dC1jYWxsXCIgZGF0YS1jYWxsLWlkPVwiJyArIHBvc3QuX2NhbGwgKyAnXCI+Tm90ZSBhYm91dCBhIGNhbGw8L3NwYW4+JyA6ICcnKSArXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJ0aWNrZXQtY29tbWVudC1kYXRlXCI+JyArIHBvc3QuY3JlYXRlZF9hdCArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0JzwvaDU+JyArXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJicmVha2VyXCI+PC9kaXY+JyArXG5cdFx0XHRcdFx0cG9zdC5jb250ZW50ICtcblx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0JzwvbGk+JztcblxuXHRcdHJldHVybiBjb21tZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gY2xpY2tpbmcgb24gYSBUaWNrZXQgZW50cnkgaW4gQ2FsbCBEZXRhaWxzLFxuXHQgKiBIaWRlIHRoZSBtb2RhbCBhbmQgc2hvdyB0aGF0IHRpY2tldC5cblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRzaG93Q2FsbFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdCQoJyN2aWV3LWNhbGwtaGlzdG9yeS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG5cblx0XHR2YXIgdGlja2V0ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldCh0aWNrZXRJZCk7XG5cblx0XHR0aGlzLnJlZnJlc2hQYWdlKHRpY2tldC5zdGF0dXMuc2x1ZywgdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBvcHVsYXRlIHRoZSBWaWV3IENhbGwgbW9kYWwgYnkgbG9hZGluZyBpblxuXHQgKiB0aGUgY2FsbCBkZXRhaWxzIGFuZCBpdHMgdGlja2V0cy5cblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIENhbGwuaWRcblx0ICovXG5cdHNob3dDYWxsVGlja2V0c01vZGFsKGNhbGxJZCkge1xuXHRcdHZhciBjYWxsICAgICAgICAgICAgID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldENhbGwoY2FsbElkKSxcblx0XHRcdCRjYWxsSGlzdG9yeSAgICAgPSAkKCcjdmlldy1jYWxsLWhpc3RvcnktbW9kYWwnKSxcblx0XHRcdCRjYWxsVGlja2V0VGFibGUgPSAkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtdGlja2V0cy10YWJsZSB0Ym9keScpO1xuXG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLWlkJykudGV4dChjYWxsLmlkKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtY2FsbGVyJykudGV4dChjYWxsLmNhbGxlci5uYW1lKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtb3BlcmF0b3InKS50ZXh0KGNhbGwub3BlcmF0b3IubmFtZSk7XG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLWRhdGUnKS50ZXh0KGNhbGwudGltZSk7XG5cblx0XHQvLyBTaG93IG1vZGFsIHdpdGggY2FsbCBkYXRhXG5cdFx0JGNhbGxUaWNrZXRUYWJsZS5lbXB0eSgpO1xuXHRcdCRjYWxsSGlzdG9yeS5tb2RhbCgnc2hvdycpO1xuXG5cdFx0Ly8gTG9hZCB0aWNrZXRzIHJlbGF0ZWQgdG8gY2FsbFxuXHRcdGNhbGwudGlja2V0cy5mb3JFYWNoKGFzeW5jIHRpY2tldCA9PiB7XG5cdFx0XHQvLyBBZGQgZWFjaCByZWxhdGVkIHRpY2tldCB0byBjYWxsIG1vZGFsXG5cdFx0XHQkY2FsbFRpY2tldFRhYmxlLmFwcGVuZChcblx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIHRpY2tldC5pZCArICdcIiAnICsgKHRpY2tldC5pZCA9PT0gdGhpcy5jdXJyZW50VGlja2V0LmlkID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJz4nICtcblx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQudGl0bGUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgdGlja2V0LnN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCI+JyArIHRpY2tldC5zdGF0dXMubmFtZSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgdGlja2V0LmNyZWF0ZWRfYXQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHQnPC90cj4nXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNuby1jYWxsLW5vdGVzJykuaGlkZSgpO1xuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1ub3RlcycpLmhpZGUoKTtcblxuXHRcdGxldCBjYWxsQ29tbWVudCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsLmlkKTtcblxuXHRcdGlmIChjYWxsQ29tbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLW5vdGVzJykudGV4dChjYWxsQ29tbWVudC5jb250ZW50KTtcblx0XHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1ub3RlcycpLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNuby1jYWxsLW5vdGVzJykuc2hvdygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2UgdGhlIGFjdGl2ZSBzdGF0dXMgaW4gdGhlIHNpZGUgbmF2IGJhci5cblx0ICogUmVsb2FkIHRoZSB0aWNrZXRzIHdpdGggdGhlIG5ldyBzdGF0dXMsIGFuZCBzaG93IHRoZVxuXHQgKiB0aWNrZXQgdmlldyBhZ2Fpbi5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIFN0YXR1cy5zbHVnXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgKG51bGxhYmxlKSByZXByZXNlbnRpbmcgVGlja2V0LmlkXG5cdCAqL1xuXHRhc3luYyByZWZyZXNoUGFnZShzdGF0dXNTbHVnLCB0aWNrZXRJZCA9IG51bGwpIHtcblx0XHQkKCcuc2lkZS1uYXYtYmFyLW5lc3RlZCB1bCBsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLnNpZGUtbmF2LWJhci1uZXN0ZWQgdWwgbGlbZGF0YS1zbHVnPVwiJyArIHN0YXR1c1NsdWcgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy5zaG93RmlsdGVyZWRUaWNrZXRzKHN0YXR1c1NsdWcpO1xuXHRcdHRoaXMuc2hvd1RpY2tldFZpZXcodGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYW4gZW1wbG95ZWVzIGRldGFpbHMgaW50byBhIFN0YWZmIEluZm9ybWF0aW9uXG5cdCAqIERPTSBlbGVtZW50LiBMb2FkIGluIHJlbGV2YW50IGVtcGxveWVlIHBlcm1pc3Npb25zIHRvby5cblx0ICpcblx0ICogQHBhcmFtIHtET00gRWxlbWVudH0gJHN0YWZmSW5mb3JtYXRpb25cblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBlbXBsb3llZUlkIHJlcHJlc2VudGluZyBFbXBsb3llZS5pZCAoZW1wbG95ZWUgdXNlZCBmb3Igdmlld2luZylcblx0ICovXG5cdGFzeW5jIHNob3dTdGFmZkluZm9ybWF0aW9uKCRzdGFmZkluZm9ybWF0aW9uLCBlbXBsb3llZUlkKSB7XG5cdFx0bGV0IGVtcGxveWVlICA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChlbXBsb3llZUlkKTtcblxuXHRcdCRzdGFmZkluZm9ybWF0aW9uLmh0bWwoXG5cdFx0XHQnPHA+SUQgTnVtYmVyOiA8c3Ryb25nPicgKyBlbXBsb3llZS5pZCArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+TmFtZTogPHN0cm9uZz4nICsgZW1wbG95ZWUubmFtZSArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+Sm9iOiA8c3Ryb25nPicgKyBlbXBsb3llZS5qb2IgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPkRlcGFydG1lbnQ6IDxzdHJvbmc+JyArIGVtcGxveWVlLmRlcGFydG1lbnQgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPlBob25lOiA8c3Ryb25nPicgKyBlbXBsb3llZS5waG9uZSArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+PHN0cm9uZz48L3N0cm9uZz48L3A+J1xuXHRcdCk7XG5cblx0XHRTdGFmZlBhZ2Uuc2hvd1Blcm1pc3Npb25zKCRzdGFmZkluZm9ybWF0aW9uLmZpbmQoJ3A6bGFzdC1jaGlsZCBzdHJvbmcnKS5nZXQoMCksIGVtcGxveWVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgYSBUaWNrZXQgaXMgYXNzaWduZWQgdG86XG5cdCAqICAgICAtIChzZWxmKSAgICAgICBUaGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqICAgICAtIChvcGVyYXRvcikgICBBbm90aGVyIGhlbHBkZXNrIG9wZXJhdG9yXG5cdCAqICAgICAtIChzcGVjaWFsaXN0KSBTcGVjaWFsaXN0IG9mIEV4cGVydGlzZVR5cGUgKGZvdW5kIHRocm91Z2ggRXhwZXJ0aXNlVHlwZVN0YWZmIG9uIFRpY2tldClcblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldCBcblx0ICogQHJldHVybiB7U3RyaW5nfSB0aGUgdGlja2V0J3MgYXNzaWduZWQgdG8gdHlwZVxuXHQgKi9cblx0Z2V0QXNzaWduZWRUb1R5cGUodGlja2V0KSB7XG5cdFx0aWYgKHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkuaWQgPT09IHRoaXMuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpIHsgLy8gaWYgdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc2VsZlxuXHRcdFx0cmV0dXJuICdzZWxmJztcblx0XHR9IGVsc2UgaWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHsgLy8gSWYgYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwsIHVzZSB0aGF0IGluc3RlYWQgb2Ygc3BlY2lhbGlzdFxuXHRcdFx0cmV0dXJuICdvcGVyYXRvcic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdzcGVjaWFsaXN0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgdGhlIGJlc3Qgc3BlY2lhbGlzdCBmb3IgdGhlIEV4cGVydGlzZVR5cGUgYmFzZWQgb25cblx0ICogaG93IGJ1c3kgdGhleSBhcmUgY29tcGFyZWQgdG8gb3RoZXIgc3BlY2lhbGlzdHMuXG5cdCAqXG5cdCAqIFVwZGF0ZWQgd2hlbiBhIHVzZXIgY2xpY2tzIHRocm91Z2ggcHJvYmxlbSB0eXBlcyxcblx0ICogdXBkYXRlcyBpbiB0aGUgcmVsZXZhbnQgc2hvd2Nhc2UgZmllbGRzXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIEV4cGVydGlzZVR5cGUuaWQgXG5cdCAqIEBwYXJhbSB7RE9NIEVsZW1lbnR9ICRhc3NpZ25lZFRvT3B0aW9ucyBcIkFzc2lnbiB0byB4XCIgcmFkaW8gZmllbGRzIGluIGFjY29yZGlvbiBjYXJkc1xuXHQgKiBAcGFyYW0ge0VtcGxveWVlfSBiZXN0U3BlY2lhbGlzdCAobnVsbGFibGUpIE1hbnVhbGx5IGFzc2lnbiBlbXBsb3llZSBpZiB0aGV5IGhhdmUgdGhhdCBzcGVjaWFsaXNtXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgY29udGFpbmluZyBsaW5rIHRvIEV4cGVydGlzZVR5cGUgYW5kIFN0YWZmIHRhYmxlc1xuXHQgKi9cblx0c2V0U3BlY2lhbGlzdChleHBlcnRpc2VUeXBlSWQsICRhc3NpZ25lZFRvT3B0aW9ucywgYmVzdFNwZWNpYWxpc3QgPSBudWxsKSB7XG5cdFx0aWYgKGJlc3RTcGVjaWFsaXN0ID09PSBudWxsIHx8ICF0aGlzLnN0YWZmTWFuYWdlci5oYXNTcGVjaWFsaXNtKGJlc3RTcGVjaWFsaXN0LCBleHBlcnRpc2VUeXBlSWQpKSB7XG5cdFx0XHR2YXIgYmVzdEV4cGVydGlzZVR5cGVTdGFmZiA9IHN0YWZmUHJvYmxlbVR5cGVQYWdlLmdldEJlc3RFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpO1xuXG5cdFx0XHRiZXN0U3BlY2lhbGlzdCA9IGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYgIT09IG51bGwgPyBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmLnN0YWZmIDogbnVsbDsgLy8gbnVsbCBpZiBubyBzcGVjaWFsaXN0cyBmb3VuZCBpbiBwYXJlbnRzXG5cdFx0fVxuXG5cdFx0dmFyICRzcGVjaWFsaXN0SWQgICAgICAgPSAkYXNzaWduZWRUb09wdGlvbnMuZmluZCgnaW5wdXRbbmFtZSo9XCJzcGVjaWFsaXN0XCJdJyksXG5cdFx0XHQkc3BlY2lhbGlzdFNob3djYXNlID0gJGFzc2lnbmVkVG9PcHRpb25zLmZpbmQoJ2lucHV0W25hbWUqPVwic3BlY2lhbGlzdF9zaG93Y2FzZVwiXScpO1xuXG5cdFx0aWYgKGJlc3RTcGVjaWFsaXN0ICE9PSBudWxsKSB7XG5cdFx0XHQkc3BlY2lhbGlzdElkLnZhbChiZXN0U3BlY2lhbGlzdC5pZCk7XG5cdFx0XHQkc3BlY2lhbGlzdFNob3djYXNlLnZhbChiZXN0U3BlY2lhbGlzdC5uYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNwZWNpYWxpc3RJZC52YWwoJycpO1xuXHRcdFx0JHNwZWNpYWxpc3RTaG93Y2FzZS52YWwoJ05vIFNwZWNpYWxpc3QgZm9yIHRoZSBQcm9ibGVtIFR5cGUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVzdEV4cGVydGlzZVR5cGVTdGFmZjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGhyb3VnaCBhbGwgdGlja2V0cyBiYXNlZCBvblxuXHQgKiAgICAgLSBpZFxuXHQgKiAgICAgLSB0aXRsZVxuXHQgKlxuXHQgKiBTaG93IHRoZSByZXN1bHRzIGluIHRoZSBsaXN0LXZpZXdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFF1ZXJ5IHBvdGVudGlhbGx5IGNvbnRhaW5lZCBpbiBpZC90aXRsZVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5KSB7XG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+PSAyIHx8IChxdWVyeS5sZW5ndGggPiAwICYmIHF1ZXJ5ID09IHBhcnNlSW50KHF1ZXJ5KSkpIHtcblx0XHRcdHZhciBzZWFyY2hLZXlzID0gWydpZCcsICd0aXRsZSddLFxuXHRcdFx0XHR0aWNrZXRzICAgID0gdGhpcy50aWNrZXRNYW5hZ2VyLnNlYXJjaChxdWVyeSwgc2VhcmNoS2V5cyk7XG5cblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgdGlja2V0cywgYXN5bmMgZnVuY3Rpb24odGlja2V0KSB7XG5cdFx0XHRcdGxldCB0aWNrZXRTdGF0dXMgPSB0aWNrZXQuc3RhdHVzO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZDogdGlja2V0LmlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0aWNrZXQudGl0bGUsXG5cdFx0XHRcdFx0c3RhdHVzX25hbWU6ICc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHRpY2tldFN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCI+JyArIHRpY2tldFN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nLFxuXHRcdFx0XHRcdGNyZWF0ZWRfYXQ6IHRpY2tldC5jcmVhdGVkX2F0LFxuXHRcdFx0XHRcdHVwZGF0ZWRfYXQ6IHRpY2tldC51cGRhdGVkX2F0XG5cdFx0XHRcdH07IC8vIHRoZSBmb3JtYXQgcmVzdWx0cyBuZWVkIHRvIGJlIGluIGZvciB0aGUgdGhlIHJlc3VsdHMgdGFibGVcblx0XHRcdH0sIHNlYXJjaEtleXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dGaWx0ZXJlZFRpY2tldHMoJCgnLnNpZGUtbmF2LWJhci1uZXN0ZWQgbGkuYWN0aXZlJykuZGF0YSgnc2x1ZycpKTtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRQYWdlLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlUGFnZVxuICpcbiAqIE1hbmlwdWxhdGVzIHRoZSBwcm9ibGVtcyBwYWdlIHdpdGggalF1ZXJ5IHVzaW5nIGRhdGEgZnJvbVxuICogdGhlIEV4cGVydGlzZVR5cGVNYW5hZ2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlUGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoaXNQYWdlID0gZmFsc2UpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgICAgICAgICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgICAgICAgID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblxuXHRcdC8vIFRydWU6IGh0dHA6Ly94L3Byb2JsZW0tdHlwZSwgRmFsc2U6IFByb2JsZW0gcGlja2VyIGFwcGVhcnMgaW4gYSBtb2RhbCBldGMuXG5cdFx0dGhpcy5pc1BhZ2UgPSBpc1BhZ2U7XG5cdH1cblxuXHRsb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJHR5cGVDb2x1bW5zLCAkbGkgPSBudWxsLCBleHBlcnRpc2VUeXBlSWQgPSBudWxsKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGUgPSBudWxsO1xuXG5cdFx0aWYgKCRsaSkgeyAvLyBsaSBvZiBjdXJyZW50IEV4cGVydGlzZVR5cGVcblx0XHRcdGV4cGVydGlzZVR5cGUgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKTtcblx0XHRcdHRoaXMubG9hZEV4cGVydGlzZVR5cGVJbmZvKGV4cGVydGlzZVR5cGUpO1xuXG5cdFx0XHQkbGkuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5maW5kKCdzcGFuLnN1YnRsZScpLnRleHQodGhpcy5nZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtKGV4cGVydGlzZVR5cGUpKTtcblxuXHRcdFx0JGxpLnBhcmVudCgpLm5leHRBbGwoKS5yZW1vdmUoKTtcblx0XHRcdCRsaS5wYXJlbnQoKS5maW5kKCdsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkbGkucGFyZW50KCkucGFyZW50KCkuZmluZCgnbGkubGFzdC1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbGFzdC1hY3RpdmUnKTtcblx0XHRcdCRsaS5hZGRDbGFzcygnYWN0aXZlIGxhc3QtYWN0aXZlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoaWxkcmVuICAgID0gW10sXG5cdFx0XHQkdHlwZUNvbHVtbiA9ICQoJzxkaXYgY2xhc3M9XCJ0eXBlLWNvbHVtblwiPjwvZGl2PicpO1xuXG5cdFx0aWYgKGV4cGVydGlzZVR5cGVJZCA9PT0gbnVsbCkge1xuXHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldFJvb3RFeHBlcnRpc2VUeXBlcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoJGxpKSB7XG5cdFx0XHRcdGNoaWxkcmVuID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlLl9jaGlsZHJlbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgY2hpbGRyZW5JZHMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKS5fY2hpbGRyZW47XG5cdFx0XHRcdGNoaWxkcmVuID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlcyhjaGlsZHJlbklkcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNwZWNpYWxpc3RzID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0U3BlY2lhbGlzdHMoY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLmlkKSk7XG5cblx0XHRjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuXHRcdFx0JHR5cGVDb2x1bW4uYXBwZW5kKFxuXHRcdFx0XHQnPGxpICcgKyAoY2hpbGQuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCA/ICdjbGFzcz1cIm5vLWNoaWxkcmVuXCInIDogJycpICsgJyBkYXRhLWV4cGVydGlzZS10eXBlLWlkPVwiJyArIGNoaWxkLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdGNoaWxkLm5hbWUgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3BlY2lhbGlzdC1jb3VudGVyXCI+JyArXG5cdFx0XHRcdFx0XHQoc3BlY2lhbGlzdHNbaV0ubGVuZ3RoID4gMCA/IHNwZWNpYWxpc3RzW2ldLmxlbmd0aCArICcgPGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPicgOiAnPGkgY2xhc3M9XCJmYSBmYS11c2VyLXRpbWVzXCI+PC9pPicpICtcblx0XHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2k+JyArXG5cdFx0XHRcdCc8L2xpPidcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQvLyBBcHBlbmQgdGhlIG5ldyAudHlwZS1jb2x1bW4sIHNjcm9sbCB0byB0aGUgcmlnaHQgdG8gdmlldyBpdFxuXHRcdCR0eXBlQ29sdW1ucy5hcHBlbmQoJHR5cGVDb2x1bW4pO1xuXHRcdCR0eXBlQ29sdW1ucy5zY3JvbGxMZWZ0KCR0eXBlQ29sdW1ucy53aWR0aCgpKTtcblx0fVxuXG5cdGxvYWRFeHBlcnRpc2VUeXBlKCR0eXBlQ29sdW1ucywgZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGUgICAgICA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZUNoYWluID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSk7XG5cblx0XHQkdHlwZUNvbHVtbnMuZW1wdHkoKTtcblxuXHRcdHRoaXMubG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlQ29sdW1ucyk7XG5cblx0XHRmb3IgKGxldCBpID0gZXhwZXJ0aXNlVHlwZUNoYWluLmxlbmd0aCAtIDI7IGkgPj0gLTE7IGktLSkge1xuXHRcdFx0cHJvYmxlbVR5cGVQYWdlLmxvYWRTdWJFeHBlcnRpc2VUeXBlcygkdHlwZUNvbHVtbnMsICR0eXBlQ29sdW1ucy5maW5kKCcudHlwZS1jb2x1bW4gbGlbZGF0YS1leHBlcnRpc2UtdHlwZS1pZD1cIicgKyBleHBlcnRpc2VUeXBlQ2hhaW5baSArIDFdLmlkICsgJ1wiXScpLCBleHBlcnRpc2VUeXBlQ2hhaW5baSArIDFdLmlkKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gL3Byb2JsZW0tdHlwZXMsIHBvcHVsYXRlIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGUgZGV0YWlsc1xuXHQgKiBwYW5lbCBvbiB0aGUgcmlnaHQgd2l0aCBkYXRhIGZyb20gYSBnaXZlbiBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gZXhwZXJ0aXNlVHlwZSBcblx0ICovXG5cdGxvYWRFeHBlcnRpc2VUeXBlSW5mbyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyICRzaW5nbGVWaWV3IFx0ICAgID0gJCh0aGlzLmRldGFpbFNlbGVjdG9yKSxcblx0XHRcdCRuYXZCYXIgICAgICAgICAgICAgPSAkc2luZ2xlVmlldy5maW5kKCcudG9wLW5hdiBoNCcpLFxuXHRcdFx0JHNwbGFzaFNjcmVlbiAgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJy5zcGxhc2gtc2NyZWVuJyksXG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVZpZXcgID0gJHNpbmdsZVZpZXcuZmluZCgnI3Byb2JsZW0tdHlwZS12aWV3JyksXG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVRhYmxlID0gJHNpbmdsZVZpZXcuZmluZCgnI3Byb2JsZW0tdHlwZXMtdGFibGUgdGJvZHknKSxcblx0XHRcdCRzcGVjaWFsaXN0c1RhYmxlICAgPSAkc2luZ2xlVmlldy5maW5kKCcjc3BlY2lhbGlzdHMtdGFibGUgdGJvZHknKSxcblx0XHRcdCR0aWNrZXRzVGFibGUgICAgICAgPSAkc2luZ2xlVmlldy5maW5kKCcjdGlja2V0cy10YWJsZSB0Ym9keScpLFxuXHRcdFx0JG5vU3BlY2lhbGlzdHNEYXRhICA9ICRzaW5nbGVWaWV3LmZpbmQoJyNuby1zcGVjaWFsaXN0cy1kYXRhJyksXG5cdFx0XHQkbm9UaWNrZXRzRGF0YSAgICAgID0gJHNpbmdsZVZpZXcuZmluZCgnI25vLXRpY2tldHMtZGF0YScpO1xuXG5cdFx0JHNwbGFzaFNjcmVlbi5hZGRDbGFzcygnYmxvY2staGlkZGVuJyk7XG5cdFx0JGV4cGVydGlzZVR5cGVWaWV3LmFkZENsYXNzKCdibG9jay1oaWRkZW4nKTtcblxuXHRcdGlmICh0aGlzLmlzUGFnZSkge1xuXHRcdFx0JG5hdkJhci50ZXh0KHRoaXMuZ2V0RXhwZXJ0aXNlVHlwZUJyZWFkY3J1bShleHBlcnRpc2VUeXBlKSk7XG5cdFx0fVxuXG5cdFx0JGV4cGVydGlzZVR5cGVUYWJsZS5lbXB0eSgpO1xuXHRcdCRzcGVjaWFsaXN0c1RhYmxlLmVtcHR5KCkucGFyZW50KCkuaGlkZSgpO1xuXHRcdCR0aWNrZXRzVGFibGUuZW1wdHkoKS5wYXJlbnQoKS5oaWRlKCk7XG5cblx0XHRsZXQgZXhwZXJ0aXNlVHlwZUNoYWluID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSk7XG5cblx0XHQvLyBTaG91bGQgcHJvYmFibHkgbW92ZSB0aGVzZSB0byBEeW5hbWljUGFnZVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZXhwZXJ0aXNlVHlwZUNoYWluLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZXhwZXJ0aXNlVHlwZSA9IGV4cGVydGlzZVR5cGVDaGFpbltpXTtcblxuXHRcdFx0JGV4cGVydGlzZVR5cGVUYWJsZS5wcmVwZW5kKFxuXHRcdFx0XHQnPHRyICcgKyAoaSA9PT0gMCA/ICdjbGFzcz1cImhpZ2hsaWdodFwiJyA6ICcnKSArICcgZGF0YS1yb3dpZD1cIicgKyBleHBlcnRpc2VUeXBlLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIGV4cGVydGlzZVR5cGUuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgKyBleHBlcnRpc2VUeXBlLm5hbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgKyAoZXhwZXJ0aXNlVHlwZS5fcGFyZW50ICE9PSBudWxsID8gZXhwZXJ0aXNlVHlwZUNoYWluW2kgKyAxXS5uYW1lIDogJ04vQScpICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQkZXhwZXJ0aXNlVHlwZVZpZXcucmVtb3ZlQ2xhc3MoJ2Jsb2NrLWhpZGRlbicpO1xuXG5cdFx0bGV0IHNwZWNpYWxpc3RzID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZS5pZCk7XG5cblx0XHRpZiAoc3BlY2lhbGlzdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0JHNwZWNpYWxpc3RzVGFibGUucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0JG5vU3BlY2lhbGlzdHNEYXRhLmhpZGUoKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGVjaWFsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgc3BlY2lhbGlzdCA9IHNwZWNpYWxpc3RzW2ldO1xuXG5cdFx0XHRcdCRzcGVjaWFsaXN0c1RhYmxlLmFwcGVuZChcblx0XHRcdFx0XHQnPHRyICcgKyAoc3BlY2lhbGlzdC5pZCA9PT0gdGhpcy5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSA/ICdjbGFzcz1cImhpZ2hsaWdodFwiJyA6ICcnKSArICcgZGF0YS1yb3dpZD1cIicgKyBzcGVjaWFsaXN0LmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0Jzx0ZD4nICsgc3BlY2lhbGlzdC5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0Jzx0ZD4nICsgc3BlY2lhbGlzdC5uYW1lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0LmpvYiArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0Jzx0ZD4nICsgc3BlY2lhbGlzdC5waG9uZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3BlY2lhbGlzdHNUYWJsZS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHQkbm9TcGVjaWFsaXN0c0RhdGEuc2hvdygpO1xuXHRcdH1cblxuXHRcdC8vIE9ubHkgZ2V0IHRpY2tldHMgaWYgdGhlcmUgaXMgYSB0YWJsZSB0byBwdXQgdGhlIHJlc3VsdHMgaW5cblx0XHRpZiAoJHRpY2tldHNUYWJsZS5sZW5ndGggPiAwKSB7XG5cblx0XHRcdC8vIEdldCB0aWNrZXRzIHRvIGZpbGwgcmVsYXRlZCB0aWNrZXRzIHRhYmxlIGluIHNpbmdsZS12aWV3XG5cdFx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZS5pZCk7XG5cdFx0XHRcblx0XHRcdC8vIE9ubHkgZmlsbCB0aWNrZXRzIHRhYmxlIGlmIHRoZXJlIGFyZSBhbnkgbWF0Y2hpbmcgdGlja2V0c1xuXHRcdFx0aWYgKHRpY2tldHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkdGlja2V0c1RhYmxlLnBhcmVudCgpLnNob3coKTtcblx0XHRcdFx0JG5vVGlja2V0c0RhdGEuaGlkZSgpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGlja2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciB0aWNrZXQgPSB0aWNrZXRzW2ldO1xuXG5cdFx0XHRcdFx0JHRpY2tldHNUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQnPHRyIGRhdGEtcm93aWQ9XCInICsgdGlja2V0LmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQuaWQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cInRydW5jYXRlXCI+JyArIHRpY2tldC50aXRsZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImZpbHRlclwiPicgKyB0aWNrZXQuc3RhdHVzLm5hbWUgKyAnPC9zcGFuPicgK1xuXHRcdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cInRydW5jYXRlXCI+JyArIHRpY2tldC5jcmVhdGVkX2F0ICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8L3RyPidcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBPdGhlcndpc2Ugc2hvdyBhIG1lc3NhZ2UgaW5zdGVhZCBvZiB0aGUgdGFibGVcblx0XHRcdFx0JHRpY2tldHNUYWJsZS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0XHRcdCRub1RpY2tldHNEYXRhLnNob3coKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGlzcGxheSB0aGUgbmFtZXMgb2YgYW4gRXhwZXJ0aXNlVHlwZSwgYW5kIGl0cyBwYXJlbnRzLFxuXHQgKiBpbiBvcmRlcmVkIGZhc2hpb24uXG5cdCAqXG5cdCAqIGUuZy4gXCJFbGVjdHJvbmljcyAvIFByaW50ZXIgLyBQcmludGVyIEluayAvIEN5YW4gSW5rXCJcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBcblx0ICogQHJldHVybiB7U3RyaW5nfSBCcmVhZGNydW0gb2YgRXhwZXJ0aXNlVHlwZS5uYW1lJ3MsIGZyb20gdGhlIHJvb3QgdG8gYSBFeHBlcnRpc2VUeXBlIFxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZUJyZWFkY3J1bShleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0YnJlYWRjcnVtICAgICAgICAgICA9ICcnO1xuXG5cdFx0d2hpbGUgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0YnJlYWRjcnVtID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5uYW1lICsgYnJlYWRjcnVtO1xuXG5cdFx0XHRleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5wYXJlbnQ7XG5cblx0XHRcdGlmIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0YnJlYWRjcnVtID0gJyAvICcgKyBicmVhZGNydW07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJyZWFkY3J1bTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5IEV4cGVydGlzZVR5cGUncyBhcyBhIHRhYmxlIGlmIHRoZWlyIG5hbWVcblx0ICogY29udGFpbnMgdGhlIHF1ZXJ5IHN0cmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFRvIGNoZWNrIGlmIGluIEV4cGVydGlzZVR5cGUubmFtZVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5KSB7XG5cdFx0dmFyICRleHBlcnRpc2VUeXBlUGlja2VyID0gJCgnLnByb2JsZW0tdHlwZS1waWNrZXInKSxcblx0XHRcdCR0YWJsZVNlY3Rpb24gICAgICAgID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpO1xuXG5cdFx0Ly8gSWYgc2VhcmNoIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBpZ25vcmVcblx0XHRsZXQgcHJldlF1ZXJ5ID0gJChcIi5tYWluLWNvbnRlbnQtdGl0bGVcIikudmFsKCk7XG5cblx0XHRpZiAocXVlcnkubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRxdWVyeSA9PT0gcHJldlF1ZXJ5LnN1YnN0cmluZyhwcmV2UXVlcnkubGFzdEluZGV4T2YoXCLigJhcIikrMSxwcmV2UXVlcnkubGFzdEluZGV4T2YoXCLigJlcIikpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnNwbGFzaC1zY3JlZW4nKS5hZGRDbGFzcygnYmxvY2staGlkZGVuJyk7XG5cblx0XHRpZiAocXVlcnkubGVuZ3RoID49IDIgfHwgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgcXVlcnkgPT0gcGFyc2VJbnQocXVlcnkpKSkge1xuXHRcdFx0JGV4cGVydGlzZVR5cGVQaWNrZXIuaGlkZSgpO1xuXHRcdFx0JHRhYmxlU2VjdGlvbi5zaG93KCk7XG5cblx0XHRcdHZhciBzZWFyY2hLZXlzICAgICA9IFsnbmFtZSddLCAvLyBvbmx5IHNlYXJjaCBvbiB0aGlzIHByb3BlcnR5XG5cdFx0XHRcdGV4cGVydGlzZVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5zZWFyY2gocXVlcnksIHNlYXJjaEtleXMpO1xuXG5cdFx0XHRzdXBlci5zZWFyY2gocXVlcnksIGV4cGVydGlzZVR5cGVzLCBhc3luYyBmdW5jdGlvbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWQ6IGV4cGVydGlzZVR5cGUuaWQsXG5cdFx0XHRcdFx0bmFtZTogZXhwZXJ0aXNlVHlwZS5uYW1lLFxuXHRcdFx0XHRcdHBhcmVudDogKGV4cGVydGlzZVR5cGUuX3BhcmVudCAhPSBudWxsID8gZXhwZXJ0aXNlVHlwZS5wYXJlbnQubmFtZSA6ICduL2EnKVxuXHRcdFx0XHR9OyAvLyBmb3JtYXQgb2YgcmVzdWx0cyB0YWJsZVxuXHRcdFx0fSwgc2VhcmNoS2V5cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEhpZGUgdGFibGUsIHJlc3RvcmUgYmFjayB0byBub3JtYWxcblx0XHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykudGV4dCgnUHJvYmxlbSBUeXBlcycpO1xuXHRcdFx0JGV4cGVydGlzZVR5cGVQaWNrZXIuc2hvdygpO1xuXHRcdFx0JHRhYmxlU2VjdGlvbi5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgYW5kIGhpZ2hsaWdodCBhIEV4cGVydGlzZVR5cGUgYnkgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBpZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKi9cblx0Z290byhpZCkge1xuXHRcdC8vIFNob3cgZGV0YWlsc1xuXHRcdGxldCB0eXBlID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGlkKTtcblxuXHRcdC8vIFNpbXVsdGFuZW91c2x5IChhc3luY2hyb25vdXNseSnigKZcblx0XHQvLyAtIGxvYWQgdGhlIGluZGl2aWR1YWwgZXhwZXJ0aXNlIHR5cGUgZGV0YWlsc1xuXHRcdHRoaXMubG9hZEV4cGVydGlzZVR5cGVJbmZvKHR5cGUpO1xuXG5cdFx0Ly8gLSBsb2FkIHRoZSBoaWVyYXJjaHkgZm9yIHRoZSBleHBlcnRpc2UgdHlwZVxuXHRcdGxldCB0eXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbih0eXBlKTtcblxuXHRcdHdoaWxlICh0eXBlQ2hhaW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IHR5cGUgID0gdHlwZUNoYWluLnBvcCgpLFxuXHRcdFx0XHQkdHlwZSA9ICQoYFtkYXRhLWV4cGVydGlzZS10eXBlLWlkPVwiJHt0eXBlLmlkfVwiXWApLmFkZENsYXNzKFwiYWN0aXZlIGxhc3QtYWN0aXZlXCIpO1xuXG5cdFx0XHR0aGlzLmxvYWRTdWJFeHBlcnRpc2VUeXBlcygkdHlwZS5wYXJlbnRzKFwiLnR5cGUtY29sdW1uc1wiKSwgbnVsbCwgdHlwZS5pZCk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9Qcm9ibGVtVHlwZVBhZ2UuanMiLCIvKipcbiAqIFByb2JsZW0gdHlwZXMgcGFnZSBKUyBmb3IgbG9hZGluZyBhbmQgbWFuYWdpbmcgdGhlXG4gKiBkaWZmZXJlbnQgdHlwZXMgb2YgcHJvYmxlbXMgYSB0aWNrZXQgbWF5IGhhdmUuXG4gKlxuICogVGhpcyBwYWdlIG5lZWRzIHRvIGxvYWQgZWFjaCBwcm9ibGVtIHR5cGUsIGFuZCBoYW5kbGVcbiAqIGxvYWRpbmcgY2hpbGRyZW4gZm9yIGVhY2ggdHlwZSB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgb25lLlxuICogVGhlIHVzZXIgY2FuIGNyZWF0ZSBhbmQgZGVsZXRlIHByb2JsZW0gdHlwZXMsIGFzIHdlbGwgYXMgc2VlXG4gKiBob3cgbWFueSBzdGFmZiBoYXZlIGEgc3BlY2lhbGlzbSBpbiBlYWNoIHByb2JsZW0gdHlwZS4gRWFjaCB0eXBlXG4gKiBhbHNvIHByb3ZpZGVzIHF1aWNrIGxpbmtzIHRvIHRpY2tldHMgd2hpY2ggaGF2ZSBiZWVuIGNyZWF0ZWRcbiAqIGFib3V0IHRoZSBwcm9ibGVtIHR5cGUgYW5kIGxpbmtzIHRvIHRoZSBzdGFmZiBtZW1iZXJzIHdpdGhcbiAqIHRoZSBzcGVjaWFsaXNtLlxuICovXG5cbmltcG9ydCBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBUaWNrZXRQYWdlIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldFBhZ2VcIjtcbmltcG9ydCBQcm9ibGVtVHlwZVBhZ2UgZnJvbSBcIi4vUHJvYmxlbVR5cGVQYWdlXCI7XG5pbXBvcnQgQVBJIGZyb20gXCIuLi9BUElcIjtcblxubGV0IHRpY2tldFBhZ2UsIHByb2JsZW1UeXBlUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cbiAgICB0aWNrZXRQYWdlID0gd2luZG93LnRpY2tldFBhZ2UgPSBuZXcgVGlja2V0UGFnZSgpO1xuICAgIHByb2JsZW1UeXBlUGFnZSA9IHdpbmRvdy5wcm9ibGVtVHlwZVBhZ2UgPSBuZXcgUHJvYmxlbVR5cGVQYWdlKHRydWUpO1xuXG5cdC8vIEluaXRpYWxseSwgbG9hZCBhbGwgZXhwZXJ0aXNlIHR5cGVzIGF0IHRoZSByb290ICh0eXBlcyB3aXRob3V0IGEgcGFyZW50KVxuXHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSk7XG5cblx0Ly8gRGV0ZXJtaW5lIGlmIHRoZSBwYWdlIHNob3VsZCBqdW1wIGRpcmVjdGx5IHRvIGEgdHlwZSBieSBJRCBpbiB0aGUgaGFzaFxuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdHByb2JsZW1UeXBlUGFnZS5nb3RvKE51bWJlcihsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXHR9XG5cblx0Ly8gT24gY2xpY2tpbmcgYSBwcm9ibGVtIHR5cGUsIGxvYWQgYW5kIGRpc3BsYXkgYWxsIGNoaWxkcmVuIG9mIHRoaXMgdHlwZVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnR5cGUtY29sdW1uIGxpJywgZnVuY3Rpb24oKSB7XG5cdFx0bGV0IGlkID0gTnVtYmVyKCQodGhpcykuZGF0YSgnZXhwZXJ0aXNlVHlwZUlkJykpO1xuXG5cdFx0Ly8gU2ltdWx0YW5lb3VzbHkgKGFzeW5jaHJvbm91c2x5KSBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgdGFza3Ncblx0XHQvLyAtIHNob3cgdGhlIGRldGFpbHMgYWJvdXQgdGhlIHNlbGVjdGVkIHR5cGUgaW4gdGhlIHNpbmdsZSB2aWV3IG9uIHRoZSByaWdodFxuXHRcdHByb2JsZW1UeXBlUGFnZS5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblx0XHQvLyAtIHNob3cgdGhlIGNoaWxkcmVuIG9mIHRoZSBzZWxlY3RlZCB0eXBlIGluIHRoZSBtYWluIHZpZXdcblx0XHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSwgJCh0aGlzKSwgaWQpO1xuXG5cdFx0Ly8gU2V0IHRoZSBoYXNoIGZyYWdtZW50IGZvciB0aGUgdW5pcXVlIFVSTCBmb3IgdGhlIHR5cGUgc2VsZWN0ZWRcblx0XHRsb2NhdGlvbi5oYXNoID0gaWQ7XG5cdH0pO1xuXG5cdC8vIFByb2JsZW0gdHlwZSBpbmZvIHNob3dzIHRhYmxlIHdpdGggcGFyZW50IHR5cGVzXG5cdC8vIENsaWNraW5nIG9uIGEgdHlwZSB0YWtlcyB5b3UgdG8gdGhlIHR5cGUgeW91IGNsaWNrZWRcblx0JChcIiNwcm9ibGVtLXR5cGVzLXRhYmxlXCIpLm9uKCdjbGljaycsICd0Ym9keSB0cjpub3QoLmhpZ2hsaWdodCknLCBmdW5jdGlvbigpIHtcblx0XHQkKFwiLnByb2JsZW0tdHlwZS1waWNrZXJcIikuZmluZChcIltkYXRhLWV4cGVydGlzZS10eXBlLWlkPVxcXCJcIiArIHRoaXMuZGF0YXNldC5yb3dpZCArIFwiXFxcIl1cIikuY2xpY2soKTtcblx0fSk7XG5cblx0Ly8gQ2xpY2tpbmcgb24gYSBzZWFyY2ggcmVzdWx0IHRha2VzIHlvdSB0byB0aGUgc2VsZWN0ZWQgdHlwZSBhbmQgY2xlYXJzIHRoZSBzZWFyY2hcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN0YWJsZS1zZWN0aW9uIHRib2R5IHRyOm5vdCguaGlnaGxpZ2h0KScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdvIHRvIHNlbGVjdGVkIHR5cGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuZ290byhwYXJzZUludCh0aGlzLmRhdGFzZXRbXCJyb3dpZFwiXSkpO1xuXHRcdC8vIFJlc2V0IHNlYXJjaFxuXHRcdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXHRcdHByb2JsZW1UeXBlUGFnZS5zZWFyY2goXCJcIik7XG5cdH0pO1xuXG5cdC8vIENyZWF0aW5nIGEgbmV3IHByb2JsZW0gdHlwZSB3aXRoIHRoZSBuYW1lIGdpdmVuIGJ5IHRoZSB1c2VyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3JlYXRlLXByb2JsZW0tdHlwZScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdldCB0aGUgbmV3IG5hbWUgb2YgYSBwcm9ibGVtIHR5cGVcblx0XHRsZXQgbmFtZSA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJ2lucHV0JykudmFsKCk7XG5cdFx0Ly8gQ2hlY2sgaWYgYSBuYW1lIGhhcyBiZWVuIGdpdmVuLCBkb24ndCBjcmVhdGUgYSBwcm9ibGVtIHR5cGUgd2l0aCBubyBuYW1lXG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEdldCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0cyBmb3IgdGhlIG5ldyBwcm9ibGVtIHR5cGUgdG8gYmUgYWRkZWQgdG9cblx0XHRjb25zdCBwYXJlbnRJZCA9ICQodGhpcykuY2xvc2VzdCgnLnR5cGUtY29sdW1uJykucHJldigpLmZpbmQoJy5hY3RpdmUnKS5kYXRhKFwiZXhwZXJ0aXNlVHlwZUlkXCIpO1xuXHRcdC8vIENyZWF0ZSBwcm9ibGVtIHR5cGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuY3JlYXRlRXhwZXJ0aXNlVHlwZShuYW1lLCBwYXJlbnRJZCk7XG5cdH0pO1xuXG5cdCQoXCIjcHJvYmxlbS10eXBlLXZpZXdcIikub24oXCJjbGlja1wiLCBcIi5idG4tZGFuZ2VyXCIsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdldCBpbmZvIGFib3V0IHRoZSBwcm9ibGVtIHR5cGUgdG8gYmUgZGVsZXRlZCwgaW5jbHVkaW5nXG5cdFx0Ly8gSUQgYW5kIG5hbWUgb2YgdHlwZSBhbmQgSUQgb2YgcGFyZW50IGlmIGFwcGxpY2FibGVcblx0XHRsZXQgJHJvdyA9ICQoXCIjcHJvYmxlbS10eXBlcy10YWJsZVwiKS5maW5kKFwiLmhpZ2hsaWdodFwiKTtcblx0XHRsZXQgW2lkLCBuYW1lXSA9ICRyb3cuY2hpbGRyZW4oXCJ0ZDpub3QoOmxhc3QtY2hpbGQpXCIpLm1hcCgoXywgZWwpID0+IGVsLnRleHRDb250ZW50KTtcblx0XHRsZXQgcGFyZW50SWQgPSAkcm93LnByZXYoKS5jaGlsZHJlbihcInRkOmZpcnN0LWNoaWxkXCIpLnRleHQoKTtcblxuXHRcdC8vIEFzayBmb3IgY29uZmlybWF0aW9uIGluY2x1ZGluZyBzcGVjaWZpYyBuYW1lIGluIGVycm9yIG1lc3NhZ2UgKHRoZSBIYXdhaWkgZml4VE0pXG5cdFx0aWYgKCFjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bmFtZX0gKElEICR7aWR9KT9gKSkgcmV0dXJuO1xuXG5cdFx0Ly8gUGVyZm9ybSBBUEkgY2FsbCB0byBkZWxldGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuZGVsZXRlKGlkKVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRlbGV0ZWQgdHlwZSBoYWQgYSBwYXJlbnQsIHJlbG9hZCBqdXN0IHRoZSBzaWJsaW5ncyBvZiB0aGUgZGVsZXRlZCB0eXBlXG5cdFx0XHRcdFx0aWYgKHBhcmVudElkKSB7XG5cdFx0XHRcdFx0XHQkKFwiLnByb2JsZW0tdHlwZS1waWNrZXJcIikuZmluZChcIltkYXRhLWV4cGVydGlzZS10eXBlLWlkPVxcXCJcIiArIHBhcmVudElkICsgXCJcXFwiXVwiKS5jbGljaygpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIHJlbG9hZCBhbGxcblx0XHRcdFx0XHRcdHdpbmRvdy5UdXJib2xpbmtzLnZpc2l0KFwiL3Byb2JsZW0tdHlwZXNcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHR9KTtcblxuXHQvLyBTZWFyY2ggcHJvYmxlbSB0eXBlc1xuXHQkKCcuc2VhcmNoLWZpZWxkIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0cHJvYmxlbVR5cGVQYWdlLnNlYXJjaCh0aGlzLnZhbHVlKTtcblx0fSk7XG5cblx0Ly8gSGFzaCBmcmFnbWVudCBuYXZpZ2F0aW9uIGZvciBsaW5raW5nIHRvIHN0YWZmIGFuZCB0aWNrZXRzIGZyb20gcHJvYmxlbSB0eXBlIGRldGFpbFxuXHQkKFwiI3NwZWNpYWxpc3RzLXRhYmxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0cltkYXRhLXJvd2lkXVwiLCBlID0+IHtcblx0XHR3aW5kb3cuVHVyYm9saW5rcy52aXNpdChcIi9zdGFmZiNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cdCQoXCIjdGlja2V0cy10YWJsZVwiKS5vbihcImNsaWNrXCIsIFwidHJbZGF0YS1yb3dpZF1cIiwgZSA9PiB7XG5cdFx0d2luZG93LlR1cmJvbGlua3MudmlzaXQoXCIvdGlja2V0cyNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cblx0Ly8gS2V5Ym9hcmQgbmF2aWdhdGlvblxuXHQvLyBLZXlib2FyZCBzaG9ydGN1dHNcblx0JChkb2N1bWVudCkua2V5dXAoZSA9PiB7XG5cdFx0Ly8gSWdub3JlIGlmIGluIGlucHV0XG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0XHRlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0uY2xpY2soKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcblx0XHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJZiBubyBzZWxlY3Rpb24sIHNlbGVjdCBmaXJzdCBpdGVtIHJlZ2FyZGxlc3Mgb2Yga2V5cHJlc3Ncblx0XHRsZXQgJGxhc3RBY3RpdmVUeXBlID0gJChcIi5wcm9ibGVtLXR5cGUtcGlja2VyIC5sYXN0LWFjdGl2ZVwiKTtcblx0XHRpZiAoJGxhc3RBY3RpdmVUeXBlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JChcIi5wcm9ibGVtLXR5cGUtcGlja2VyIFtkYXRhLXByb2JsZW0tdHlwZS1pZD1cXFwiMVxcXCJdXCIpLmZpcnN0KCkuY2xpY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyICRyb3c7XG5cdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcblx0XHRcdGNhc2UgMzg6IC8vIHVwXG5cdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdC8vIEdldCByb3cgdG8gc2VsZWN0XG5cdFx0XHRcdCRyb3cgPSAkbGFzdEFjdGl2ZVR5cGUuZmlyc3QoKVtlLmtleUNvZGUgPT09IDM4ID8gXCJwcmV2XCIgOiBcIm5leHRcIl0oKTtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgJHJvdy5pcyhcIi5pbnB1dC1ncm91cFwiKSkge1xuXHRcdFx0XHRcdCRyb3cuY2hpbGRyZW4oXCJpbnB1dFwiKS5mb2N1cygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRyb3cuY2xpY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcblx0XHRcdGNhc2UgMzk6IC8vIHJpZ2h0XG5cdFx0XHRcdC8vIEdldCBjb2x1bW4gaWYgZXhpc3RzIHRvIGxlZnQgb3IgcmlnaHRcblx0XHRcdFx0bGV0ICRjb2x1bW4gPSAkbGFzdEFjdGl2ZVR5cGUuZmlyc3QoKS5jbG9zZXN0KFwiLnR5cGUtY29sdW1uXCIpW2Uua2V5Q29kZSA9PT0gMzcgPyBcInByZXZcIiA6IFwibmV4dFwiXSgpO1xuXHRcdFx0XHQvLyBHZXQgcm93IHRvIGJlIHNlbGVjdGVkXG5cdFx0XHRcdCRyb3cgPSAkY29sdW1uLmZpbmQoZS5rZXlDb2RlID09PSAzNyA/IFwiLmFjdGl2ZVwiIDogXCJsaVwiKS5maXJzdCgpO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAkcm93Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdCRjb2x1bW4uZmluZChcImlucHV0XCIpLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHJvdy5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9wcm9ibGVtX3R5cGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==