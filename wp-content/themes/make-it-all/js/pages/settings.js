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


__webpack_require__(7);

var _DynamicPage = __webpack_require__(4);

var _DynamicPage2 = _interopRequireDefault(_DynamicPage);

var _SettingsPage = __webpack_require__(56);

var _SettingsPage2 = _interopRequireDefault(_SettingsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settingsPage = window.settingsPage = new _SettingsPage2.default();

// Load all initial personal data on page
/*
Settings page JS for populating current user info into page
and handling user input for security section (changing password)
 */

settingsPage.loadData();

// Handle page navigation in nested sidebar
$(".side-nav-bar-nested ul").on("click", "li", function () {
	// Only change page if user selects different page
	if (!this.classList.contains("active")) {
		// Toggle out current page and in for new page
		$(".section:visible").addClass("block-hidden");
		document.getElementById(this.dataset.slug + "-section").classList.remove("block-hidden");
		// Highlight selected page in sidebar
		$(this).addClass("active").siblings().removeClass("active");
		// Set top bar title to new page name
		$(".top-nav h4").text(this.textContent);
	}
});

// Security settings
var $security = $("#security-section");
$security.find(".save-changes").click(function () {
	// Get user input
	var oldValue = $security.find("[name=\"password.old\"]").val();
	var newValue = $security.find("[name=\"password.new\"]").val();
	var newValueConfirm = $security.find("[name=\"password.confirm\"]").val();
	// Preliminary validation
	if (!oldValue || !newValue || !newValueConfirm) {
		_DynamicPage2.default.showNotification("All password fields are required.");
		return;
	}
	if (newValue !== newValueConfirm) {
		_DynamicPage2.default.showNotification("New passwords are not the same.");
		$security.find("[name=\"password.confirm\"]").focus();
		return;
	}
	// API auth call
	settingsPage.changePassword(oldValue, newValue);
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

var _DynamicPage = __webpack_require__(4);

var _DynamicPage2 = _interopRequireDefault(_DynamicPage);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _StaffPage = __webpack_require__(23);

var _StaffPage2 = _interopRequireDefault(_StaffPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SettingsPage
 *
 * Front-end management of Settings page, for filling information
 * and handling user input.
 */
var SettingsPage = function () {
	function SettingsPage() {
		_classCallCheck(this, SettingsPage);

		this.staffManager = new _StaffManager2.default();
	}

	/**
  * Load all fields and card details for settings page
  * based on currently logged in user information,
  * since the Settings page is purely personal.
  */


	_createClass(SettingsPage, [{
		key: "loadData",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var me, $view, $card;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.staffManager.currentUser(true);

							case 2:
								me = _context.sent;
								$view = $("[data-path=\"settings\"] #list-view");

								// Fill main fields

								Object.entries(me).forEach(function (_ref2) {
									var _ref3 = _slicedToArray(_ref2, 2),
									    key = _ref3[0],
									    value = _ref3[1];

									$view.find("[name=\"staff." + key + "\"]").val(value);
								});

								// Fill card data (on the right)
								$card = $view.find(".card");

								$card.find(".card-img-top").prop("src", "/res/avatar/" + me.email);
								$card.find("[data-slug=\"name\"]").text(me.name).append($("<p class=\"card-text\" data-slug=\"job\">").text(me.job));

								// Fill individual permission tokens in permissions field
								_StaffPage2.default.showPermissions(document.getElementById("staff-permissions"), me);

							case 9:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function loadData() {
				return _ref.apply(this, arguments);
			}

			return loadData;
		}()

		/**
   * Change current user's password
   *
   * @param oldValue Current user password for validating
   * @param newValue New password to change to
   */

	}, {
		key: "changePassword",
		value: function changePassword(oldValue, newValue) {
			_API2.default.call("/api/settings/changepassword", "POST", { oldValue: oldValue, newValue: newValue }).done(function (response) {
				return _DynamicPage2.default.showNotification(response.responseJSON["success"], "success");
			}).fail(function (response) {
				return _DynamicPage2.default.showNotification(response.responseJSON["error"], "danger");
			});
		}
	}]);

	return SettingsPage;
}();

exports.default = SettingsPage;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL1NldHRpbmdzUGFnZS5qcyJdLCJuYW1lcyI6WyJUaWNrZXRNYW5hZ2VyIiwiZXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJ3aW5kb3ciLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsImNhbGxzIiwiYXBpIiwibWFwIiwiQ2FsbCIsImUiLCJ0aWNrZXRzIiwiVGlja2V0IiwiY29tbWVudHMiLCJDb21tZW50Iiwic3RhdHVzZXMiLCJTdGF0dXMiLCJ0aWNrZXRTdGF0dXNlcyIsIlRpY2tldFN0YXR1cyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIk1hbmFnZXIiLCJTdGFmZk1hbmFnZXIiLCJFbXBsb3llZSIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlIiwiRXhwZXJ0aXNlVHlwZVN0YWZmIiwiX3BhcmVudCIsImV4cGVydGlzZVR5cGVJZHMiLCJfZXhwZXJ0aXNlX3R5cGUiLCJleHBlcnRpc2VUeXBlUGFyZW50IiwicGFyZW50IiwiZXhwZXJ0aXNlVHlwZVN0YWZmSWQiLCJlbGVtZW50cyIsInRvTG93ZXJDYXNlIiwic29tZSIsIlN0cmluZyIsImVsIiwicHJvcCIsImluY2x1ZGVzIiwiRHluYW1pY1BhZ2UiLCJzZWN0aW9uU2VsZWN0b3IiLCJ0YWJsZVNlbGVjdG9yIiwibmF2U2VsZWN0b3IiLCJkZXRhaWxTZWxlY3RvciIsInNwbGl0IiwiaHRtbCIsIiQiLCJuYXZUZXh0IiwiJHRhYmxlIiwicmVzdWx0c0NvdW50IiwiaGFzQ2xhc3MiLCIkc3BsYXNoU2NyZWVuIiwiJHNob3ciLCIkaGlkZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaXJzdCIsInRleHQiLCJyZXBsYWNlIiwiY2xvc2VzdCIsInVuZGVmaW5lZCIsIm9iamVjdCIsIiR0YWJsZVNlY3Rpb24iLCIkdGFibGVIZWFkIiwiJHRhYmxlQm9keSIsIiRuZXdSb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImRhdGFzZXQiLCJyb3dpZCIsInRvZ2dsZUNsYXNzIiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJlYWNoIiwidGQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJyZXNvbHZlIiwiYXBwZW5kIiwiZW1wdHkiLCJzaWJsaW5ncyIsInVud3JhcCIsImNsaWNrIiwiaGlkZVRhYmxlUm93RGV0YWlscyIsIndyYXAiLCIkc2VsZWN0IiwiZGVmYXVsdFRleHQiLCJkZWZhdWx0T3B0aW9uSWQiLCJwcm9wZXJ0eSIsImdldEFkZGl0aW9uYWxEZXRhaWxzIiwib3B0aW9uIiwiT3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RwaWNrZXIiLCJvYmplY3RDYWxsYmFjayIsInNlYXJjaEtleXMiLCJwYWdlIiwiY2xlYXJUYWJsZSIsImtleSIsIlJlZ0V4cCIsInZhbCIsImFwcGVuZFRhYmxlUm93IiwidXBkYXRlU3BsYXNoU2NyZWVuIiwibWVzc2FnZSIsInR5cGUiLCJkdXJhdGlvbiIsInJlbW92ZSIsIm1zZyIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJIYXJkd2FyZU1hbmFnZXIiLCJkZXZpY2VzIiwiRGV2aWNlIiwiU2V0IiwidCIsImRldmljZXNCeVR5cGUiLCJkZXZpY2UiLCJtYWtlIiwic2VyaWFsTnVtYmVyIiwiZCIsInNlcmlhbF9ubyIsIlNvZnR3YXJlTWFuYWdlciIsInByb2dyYW1zIiwiUHJvZ3JhbSIsInByb2dyYW0iLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJ0b29sdGlwIiwiZGF0ZXRpbWVwaWNrZXIiLCJuZXdWYWx1ZSIsIiRtb2RhbCIsIm1vZGFsIiwiYXR0ciIsIm5vdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29sbGFwc2UiLCJpc1Nob3ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRJdGVtVG9QaWNrZXIiLCJwaWNrZXJFbGVtZW50IiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0IiwiYXV0aG9yIiwiYXV0aG9yX2lkIiwiY2FsbF9pZCIsInRpY2tldF9pZCIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0X2h1bWFuIiwiY3JlYXRlZEF0UmVhbCIsImNyZWF0ZWRfYXQiLCJjcmVhdGVkX2F0X3JlYWwiLCJfYXV0aG9yIiwiZ2V0Q2FsbCIsImdldFRpY2tldCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsImVtYWlsIiwiam9iIiwiam9iX3RpdGxlIiwiZGVwYXJ0bWVudCIsInBob25lIiwicGhvbmVfbnVtYmVyIiwiZXhwZXJ0aXNlX3R5cGVzIiwic3BlY2lhbGlzbXMiLCJzcGVjaWFsaXN0IiwiYW5hbHlzdCIsImFkbWluIiwiX2RlcGFydG1lbnQiLCJyZWFkIiwicmVhZG9ubHkiLCJnZXRFeHBlcnRpc2VUeXBlcyIsImRhdGEiLCJkZXBhcnRtZW50X2lkIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsImdldFRpY2tldHNXaXRoU2x1ZyIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJvcGVyYXRpbmdfc3lzdGVtIiwiZXhwaXJ5X2RhdGUiLCJzdGF0dXNfaWQiLCJBUEkiLCJ0aWNrZXRfc3RhdHVzZXMiLCJTdGFmZlBhZ2UiLCJ0aWNrZXRNYW5hZ2VyIiwidGlja2V0c0NvbHVtbkluZGV4IiwiaW5kZXgiLCJzdGFmZkZvclRpY2tldHMiLCIkdGFibGVSb3ciLCIkcm93cyIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMiLCJzaG93Tm90aWZpY2F0aW9uIiwidXBkYXRlU2luZ2xlVmlld05hdmJhciIsImN1c3RvbXNsdWciLCJzaG93UGVybWlzc2lvbnMiLCJzcmMiLCJzdGFmZlByb2JsZW1UeXBlUGFnZSIsImN1cnJlbnRTcGVjaWFsaXNtcyIsImxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMiLCJzZWFyY2giLCJhc3NpZ24iLCJvYmoiLCJzaG93U3RhZmYiLCJpY29ucyIsImVsSWNvbiIsImVsVGV4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZWxQZXJtaXNzaW9uIiwic2V0dGluZ3NQYWdlIiwiU2V0dGluZ3NQYWdlIiwibG9hZERhdGEiLCJjb250YWlucyIsImdldEVsZW1lbnRCeUlkIiwiJHNlY3VyaXR5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZUNvbmZpcm0iLCJmb2N1cyIsImNoYW5nZVBhc3N3b3JkIiwibWUiLCIkdmlldyIsImVudHJpZXMiLCIkY2FyZCIsImRvbmUiLCJyZXNwb25zZSIsInJlc3BvbnNlSlNPTiIsImZhaWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QkFBVVcsZUFBVixDQUEwQjFMLFNBQVM2TSxjQUFULENBQXdCLG1CQUF4QixDQUExQixFQUF3RU0sRUFBeEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Q7Ozs7Ozs7OztpQ0FNZUosUSxFQUFVdkksUSxFQUFVO0FBQ2xDcUcsaUJBQUlyUixJQUFKLENBQVMsOEJBQVQsRUFBeUMsTUFBekMsRUFBaUQsRUFBQ3VULGtCQUFELEVBQVd2SSxrQkFBWCxFQUFqRCxFQUNHK0ksSUFESCxDQUNRO0FBQUEsV0FBWWxQLHNCQUFZa04sZ0JBQVosQ0FBNkJpQyxTQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQTdCLEVBQStELFNBQS9ELENBQVo7QUFBQSxJQURSLEVBRUdDLElBRkgsQ0FFUTtBQUFBLFdBQVlyUCxzQkFBWWtOLGdCQUFaLENBQTZCaUMsU0FBU0MsWUFBVCxDQUFzQixPQUF0QixDQUE3QixFQUE2RCxRQUE3RCxDQUFaO0FBQUEsSUFGUjtBQUdBOzs7Ozs7a0JBR2FmLFkiLCJmaWxlIjoiL2pzL3BhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAyYTk2YzY0NjJjNTVlMDRhMjI0IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL0NhbGxcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vU3RhdHVzXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldFwiO1xuaW1wb3J0IFRpY2tldFN0YXR1cyBmcm9tIFwiLi9UaWNrZXRTdGF0dXNcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldE1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhdHVzZXNcbiAqIGFuZCB0aWNrZXRzIGFuZCBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogVGlja2V0TWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSB3aW5kb3cuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgfHwgbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmNhbGxzICAgID0gYXBpLmNhbGxzLm1hcChlID0+IG5ldyBDYWxsKGUpKTtcblx0XHR0aGlzLnRpY2tldHMgID0gYXBpLnRpY2tldHMubWFwKGUgPT4gbmV3IFRpY2tldChlKSk7XG5cdFx0dGhpcy5jb21tZW50cyA9IGFwaS5jb21tZW50cy5tYXAoZSA9PiBuZXcgQ29tbWVudChlKSk7XG5cdFx0dGhpcy5zdGF0dXNlcyA9IGFwaS5zdGF0dXNlcy5tYXAoZSA9PiBuZXcgU3RhdHVzKGUpKTtcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzID0gYXBpLnRpY2tldFN0YXR1c2VzLm1hcChlID0+IG5ldyBUaWNrZXRTdGF0dXMoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q2FsbH0gc2luZ2xlIGluc3RhbmNlIG9mIENhbGwgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmluZChjYWxsID0+IGNhbGwuaWQgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGxzIHJlZmVyZW5jaW5nIGEgc3BlY2lmaWMgdGlja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q2FsbHNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmlsdGVyKGNhbGwgPT4gY2FsbC5fdGlja2V0cy5pbmRleE9mKHRpY2tldElkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG5vdGVzIGZvciBhIGNhbGxcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5fY2FsbCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggSURcblx0ICovXG5cdGdldFN0YXR1cyhzdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5pZCA9PT0gc3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgc2x1Z1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIHN0YXR1c1NsdWdcblx0ICovXG5cdGdldFN0YXR1c0J5U2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXR9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXQgd2l0aCB0aWNrZXRJZFxuXHQgKi9cblx0Z2V0VGlja2V0KHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maW5kKHRpY2tldCA9PiB0aWNrZXQuaWQgPT09IHRpY2tldElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0SWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIG9uZSBvZiBtYW55IGdpdmVuIHN0YXR1c2VzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHN0YXR1c1NsdWdzIEFycmF5IG9mIFN0cmluZ3MncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIG9uZSBvZiBtYW55IGdpdmVuIFN0YXR1cydzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWdJbihzdGF0dXNTbHVncykge1xuXHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRzLnNsaWNlKDApO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHRpY2tldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKHRpY2tldHNbaV0uc3RhdHVzLnNsdWcpID09PSAtMSkgdGlja2V0cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRpY2tldHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldHMgcmVmZXJlbmNlZCBpbiBhIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHJlZmVyZW5jZWQgaW4gYSBDYWxsXG5cdCAqL1xuXHRnZXRUaWNrZXRzRnJvbUNhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5fY2FsbHMuaW5kZXhPZihjYWxsSWQpID4gLTEpO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkIHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKHN0YWZmSWRzKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdFx0dGlja2V0cyAgICAgICAgICAgID0gdGhpcy50aWNrZXRzLFxuXHRcdFx0cmVzdWx0ICAgICAgICAgICAgID0ge307XG5cblx0XHRzdGFmZklkcy5mb3JFYWNoKHN0YWZmSWQgPT4ge1xuXHRcdFx0cmVzdWx0W3N0YWZmSWRdID0gdGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWRcblx0XHRcdFx0XHRcdHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0TXlUaWNrZXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wZXJhdG9yIG9yIHNwZWNpYWxpc3QgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0by5cblx0ICpcblx0ICogSWYgYW4gb3BlcmF0b3IgaXMgbm90IGFzc2lnbmVkLCB0aGVuIHRoZSBFeHBlcnRpc2VUeXBlU3RhZmYgd2lsbFxuXHQgKiBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0VtcGxveWVlfSBFbXBsb3llZSB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkge1xuXHRcdGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSByZXR1cm4gdGlja2V0LmFzc2lnbmVkX3RvX29wZXJhdG9yO1xuXG5cdFx0cmV0dXJuIHRpY2tldC5leHBlcnRpc2VfdHlwZV9zdGFmZi5zdGFmZjsgLy8gb25seSB1c2UgZXhwZXJ0aXNlX3R5cGVfc3RhZmYgaWYgdGhlcmUgaXMgbm8gYXNzaWduZWQgb3BlcmF0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0aWNrZXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cblx0ICogdXNlci5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBJZiBhc3NpZ25lZCB0byBzZWxmXG5cdCAqL1xuXHRpc1RpY2tldEFzc2lnbmVkVG9TZWxmKHRpY2tldCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSA9PT0gdGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKTsgXG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0U3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXRfc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldFN0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldFN0YXR1cyB3aXRoIHRpY2tldFN0YXR1c0lkXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXModGlja2V0U3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maW5kKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuaWQgPT09IHRpY2tldFN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1c2VzIGZvciBhIHRpY2tldFxuXHQgKlxuXHQgKiBAcFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmlsdGVyKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuX3RpY2tldCA9PT0gdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29tbWVudCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNvbW1lbnRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNvbW1lbnQgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjb21tZW50SWRcblx0ICovXG5cdGdldENvbW1lbnQoY29tbWVudElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb21tZW50c1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgQ29tbWVudCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENvbW1lbnRzQnlJZHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gaWRzLmluZGV4T2YoY29tbWVudC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB0aWNrZXRzIGFzc29jaWF0ZWQgd2l0aCBhbiBleHBlcnRpc2UgdHlwZSBzdGFmZlxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSBzdGFmZiB0byBmaW5kIHRpY2tldHMgZm9yXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQWxsIG1hdGNoaW5nIHRpY2tldHNcblx0ICovXG5cdGdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHR0aWNrZXRJZHMgICAgICA9IFtdLmNvbmNhdCguLi5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBlLnRpY2tldHMpKTsgLy8gbW92ZSBhbGwgb2YgZXhwZXJ0aXNlVHlwZXNbaV0udGlja2V0cyBpbnRvIGEgc2luZ2xlIGFycmF5XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGlja2V0cyBvbiBhIHByb3BlcnR5IGZvciBhIHByb3ZpZGVkIHNlYXJjaCBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgc2F0aXNmeWluZyB0aGUgc2VhcmNoIGNvbmRpdGlvblxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnRpY2tldHMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29sbGVjdGlvbiBvZiB0aWNrZXRzIGJ5IHRoZWlyIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBpZHMgVGhlIElEcyBvZiB0aGUgcmVxdWVzdGVkIHRpY2tldHMgXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlUaWNrZXRJRHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IGlkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFbXBsb3llZSBmcm9tIFwiLi9FbXBsb3llZVwiO1xuXG4vKipcbiAqIFN0YWZmTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGFmZlxuICogY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFN0YWZmTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGFmZiAgICAgICA9IGFwaS5zdGFmZi5tYXAoZSA9PiBuZXcgRW1wbG95ZWUoZSkpO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgPSBhcGkuZGVwYXJ0bWVudHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBlbXBsb3llZSB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIGVtcGxveWVlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RW1wbG95ZWV9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maW5kKGVtcGxveWVlID0+IGVtcGxveWVlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGVtcGxveWVlcyB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgb2YgYSBwZXJtaXNzaW9uXG5cdCAqXG5cdCAqIEBwYXJhbSBwZXJtaXNzaW9uIFRoZSBwZXJtaXNzaW9uIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcGVybWlzc2lvbiAodHJ1ZS9mYWxzZSkgZm9yIHdoZXRoZXIgdGhlIHBlcm1pc3Npb24gaXMgZ3JhbnRlZFxuXHQgKi9cblx0Z2V0RW1wbG95ZWVzV2l0aFBlcm1pc3Npb24ocGVybWlzc2lvbiwgdmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maWx0ZXIoZW1wbG95ZWUgPT4gZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dID09IHZhbHVlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqXG5cdCAqIEBwYXJhbSBhc0VtcGxveWVlIG1ldGhvZCByZXR1cm5zIElEIGJ5IGRlZmF1bHQgb3IgRW1wbG95ZWUgaWYgdHJ1dGh5XG5cdCAqL1xuXHRjdXJyZW50VXNlcihhc0VtcGxveWVlID0gZmFsc2UpIHtcblx0XHRsZXQgaWQgPSAxOyAvLyBUT0RPOiBnZXQgdXNlciBmcm9tIFdQXG5cblx0XHQvLyBHZXQgRW1wbG95ZWUgd2l0aCBJRFxuXHRcdGlmIChhc0VtcGxveWVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoaWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNwZWNpYWxpc3RzIHdobyBzcGVjaWFsaXNlIGluIGEgY2VydGFpbiBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGZpbmQgZW1wbG95ZWVzIGZvclxuXHQgKi9cblx0Z2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdGxldCBzdGFmZiAgPSB0aGlzLnN0YWZmLFxuXHRcdCAgICBmaWx0ZXIgPSBpZCA9PiBlbXBsb3llZSA9PiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihpZCkgPiAtMTtcblxuXHRcdGlmICh0eXBlb2YgZXhwZXJ0aXNlVHlwZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0bGV0IG91dHB1dCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpZCBvZiBleHBlcnRpc2VUeXBlKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0YWZmLmZpbHRlcihmaWx0ZXIoaWQpKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdGFmZi5maWx0ZXIoZmlsdGVyKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhc3NlZCBlbXBsb3llZSBoYXMgdGhlIHBhc3NlZCBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBpbnNwZWN0XG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBsb29rIGZvclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZW1wbG95ZWUgaGFzIHRoZSBwcm9ibGVtIHR5cGUgYXMgYSBzcGVjaWFsaXNtXG5cdCAqL1xuXHRoYXNTcGVjaWFsaXNtKGVtcGxveWVlLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoZXhwZXJ0aXNlVHlwZUlkKSA+IC0xO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBhbGwgZW1wbG95ZWVzIGZvciB0aGUgZ2l2ZW4gcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJucyBBbGwgbWF0Y2hpbmcgcmVzdWx0cyB0byB0aGUgcXVlcnlcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5zdGFmZiwgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZSBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZVN0YWZmIGZyb20gXCIuL0V4cGVydGlzZVR5cGVTdGFmZlwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGV4cGVydGlzZSB0eXBlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGFwaS5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZShlKSk7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBhcGkuZXhwZXJ0aXNlVHlwZVN0YWZmLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlU3RhZmYoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhbGwgRXhwZXJ0aXNlVHlwZSdzIHdpdGggbm8gcGFyZW50IChpbiB0aGUgZmlyc3QgY29sdW1uKVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdGdldFJvb3RFeHBlcnRpc2VUeXBlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLl9wYXJlbnQgPT0gbnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maW5kKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5pZCA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgRXhwZXJ0aXNlVHlwZXMgd2l0aCBJRHMgZnJvbSBhbiBBcnJheSBvZiBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gZXhwZXJ0aXNlVHlwZUlkcyBBcnJheSBvZiBJbnRlZ2VycyByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZCdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlcyBzYXRpc2Z5aW5nIHRoZSBjb25kaXRpb25cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGVJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlSWRzLmluZGV4T2YoZXhwZXJ0aXNlVHlwZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maWx0ZXIoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9yZGVyZWQgYXJyYXkgb2YgcGFyZW50cyBvZiBhbiBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gZXhwZXJ0aXNlVHlwZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlIHRvIGZpbmQgcGFyZW50cyBmcm9tXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlIHBhcmVudHMsIGFuZCB0aGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRleHBlcnRpc2VUeXBlcyAgICAgID0gW2V4cGVydGlzZVR5cGVQYXJlbnRdO1xuXG5cdFx0d2hpbGUgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0ZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGVQYXJlbnQucGFyZW50O1xuXG5cdFx0XHRpZiAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGV4cGVydGlzZVR5cGVzLnB1c2goZXhwZXJ0aXNlVHlwZVBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV4cGVydGlzZVR5cGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiByZWNvcmQsIHdpdGggYW4gZXhhY3Rcblx0ICogRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiBhbmQgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSBJRCBwYWlyXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZlxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9IG51bGwsIG9yIHRoZSByZWNvcmQgZGVzaXJlZFxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkKGV4cGVydGlzZVR5cGVJZCwgc3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmID09PSBzdGFmZklkICYmIGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIGJ5IElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLmlkID09PSBleHBlcnRpc2VUeXBlU3RhZmZJZCkgfHwgbnVsbDtcblx0fVxuXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5leHBlcnRpc2VUeXBlcywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXIuanMiLCIvKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBBYnN0cmFjdCBjbGFzcyBleHRlbmRlZCBieSBhbGwgbWFuYWdlcnMsXG4gKiBjb250YWlucyBtZXRob2RzIHRoYXQgbWF5IGJlIHVzZWZ1bCB0byB0aGUgbWFuYWdlcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VhcmNoIGFycmF5IG9mIGVsZW1lbnRzIGZvciBxdWVyeSBpbiBnaXZlbiBwcm9wZXJ0eSBuYW1lc1xuXHQgKiBcblx0ICogQHBhcmFtIGVsZW1lbnRzIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgc2VhcmNoZWQgdGhyb3VnaFxuXHQgKiBAcGFyYW0gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqL1xuXHRzZWFyY2goZWxlbWVudHMgPSBbXSwgcXVlcnkgPSBcIlwiLCBwcm9wZXJ0aWVzID0gW10pIHtcblx0XHRxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7IC8vIE5vcm1hbGlzZSBxdWVyeSAoYW5kIHByb3BlcnRpZXMgaW5kaXZpZHVhbGx5IGxhdGVyKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzLmZpbHRlcihlbCA9PiB7IC8vIEdldCBhbGwgZWxlbWVudHNcblx0XHRcdHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcCA9PiB7IC8vIENoZWNrIHByb3BlcnRpZXMgdW50aWwgbWF0Y2ggaXMgZm91bmRcblx0XHRcdFx0aWYgKFN0cmluZyhlbFtwcm9wXSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHJldHVybiB0cnVlOyAvLyBEZXRlcm1pbmUgaWYgcHJvcGVydHkgaXMgYSBtYXRjaCBmb3IgcXVlcnlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL01hbmFnZXIuanMiLCIvKipcbiAqIER5bmFtaWNQYWdlXG4gKlxuICogRXh0ZW5kZWQgYnkgZXZlcnkgcGFnZSwgZS5nLiBUaWNrZXRQYWdlLlxuICogQ29udGFpbnMgZnVuY3Rpb25zIHRoYXQgYXJlIHJlcGVhdGVkIG9mdGVuIGFtb25nXG4gKiBwYWdlcywgc3VjaCBhcyB1cGRhdGluZyB0YWJsZXMgb3IgdXBkYXRpbmcgdGhlIG5hdmJhclxuICovXG5jbGFzcyBEeW5hbWljUGFnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwYWdlIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3RvcnNcblx0ICogdG8gZGVmaW5lIHRoZSBib3VuZHMgb2YgdGhlIHBhZ2UsIGluIGNhc2VzIHdoZXJlIHRoaXMgRHluYW1pY1BhZ2Vcblx0ICogaXMgbm90IHRoZSBvbmx5IHBhZ2Ugb24gdGhlIHNjcmVlbiwgc3VjaCBhcyBpZiBhIHBhZ2UgaXMgYmVpbmdcblx0ICogZGlzcGxheWVkIGluIGEgbW9kYWwuXG5cdCAqXG5cdCAqIE5vdCBwcm92aWRpbmcgYW55IHNlbGVjdG9ycyB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhlXG5cdCAqIG1haW4gc2VsZWN0b3JzIGZvciB0aGUgZW50aXJlIHNjcmVlbiwgc3VjaCB0aGF0XG5cdCAqIHRoaXMgcGFnZSBiZWNvbWVzIHRoZSBtYWluIHBhZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gc2VjdGlvblNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIG1haW4gc2VjdGlvbiBjb250YWluaW5nIHRhYmxlIHZpZXdcblx0ICogQHBhcmFtIHRhYmxlU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0YWJsZSB3aXRoaW4gcHJldmlvdXMgc2VjdGlvblxuXHQgKiBAcGFyYW0gbmF2U2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBuYXZpZ2F0aW9uIGJhciBzaG93biBhdCB0b3Agb2Ygc2VjdGlvblxuXHQgKiBAcGFyYW0gZGV0YWlsU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBzaW5nbGUgdmlldyBkZXRhaWwgc2hvd24gZm9yIGFuIGluZGl2aWR1YWwgcm93XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2VjdGlvblNlbGVjdG9yID0gXCIjbGlzdC12aWV3XCIsXG5cdFx0dGFibGVTZWxlY3RvciA9IFwiI3RhYmxlLXNlY3Rpb25cIixcblx0XHRuYXZTZWxlY3Rvcixcblx0XHRkZXRhaWxTZWxlY3RvclxuXHR9ID0ge30pIHtcblx0XHR0aGlzLnNlY3Rpb25TZWxlY3RvciA9IHNlY3Rpb25TZWxlY3Rvcjtcblx0XHR0aGlzLnRhYmxlU2VsZWN0b3IgPSB0YWJsZVNlbGVjdG9yO1xuXHRcdC8vIFNldCBuYXZpZ2F0aW9uIHNlbGVjdG9yIHRvIGZpcnN0IGNvbXBvbmVudCBvZiBzZWN0aW9uIHNlbGVjdG9yIHdpdGgg4oCYLW5hduKAmSBhcHBlbmRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgQ1NTIHNlbGVjdG9yXG5cdFx0dGhpcy5uYXZTZWxlY3RvciA9IG5hdlNlbGVjdG9yID8gbmF2U2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1uYXZcIiA6IFwiLnNpZGUtbmF2LWJhci1uZXN0ZWRcIik7XG5cdFx0dGhpcy5kZXRhaWxTZWxlY3RvciA9IGRldGFpbFNlbGVjdG9yID8gZGV0YWlsU2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1kZXRhaWxcIiA6IFwiI3NpbmdsZS12aWV3XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGl0bGUgYmFyIG9mIHRoZSBzaW5nbGUgdmlldyB0byB0aGUgZ2l2ZW4gc3RyaW5nXG5cdCAqIENBVVRJT046IERvZXMgbm90IHBlcmZvcm0gZXNjYXBpbmcgb2YgaW5wdXQgc3RyaW5nLCBkbyBub3QgcGFzc1xuXHQgKiB1c2VyIGNvbnRlbnQgdG8gdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSBodG1sIEhUTUwgdG8gc2V0IHRoZSBzaW5nbGUgdmlldyB0aXRsZSB0b1xuXHQgKi9cblx0dXBkYXRlU2luZ2xlVmlld05hdmJhcihodG1sKSB7XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKCcudG9wLW5hdiBoNCcpLmh0bWwoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIFwiTG9hZGluZ+KAplwiIHNwbGFzaCBzY3JlZW4gaWYgaXQncyBzaG93blxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFwiTm8gUmVzdWx0c+KAplwiIHNwbGFzaCBzY3JlZW5cblx0ICogc2hvdWxkIGJlIHNob3duIG9yIG5vdC5cblx0ICpcblx0ICogWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgdXNpbmcgXCJhcHBlbmRUYWJsZVwiXG5cdCAqL1xuXHR1cGRhdGVTcGxhc2hTY3JlZW4obmF2VGV4dCA9IG51bGwpIHtcblx0XHQvLyBHZXQgdGFibGUgZWxlbWVudCB0byBpbnNwZWN0IGNvbnRlbnRzXG5cdFx0dmFyICR0YWJsZSA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHRcdFx0Ly8gR2V0IG51bWJlciBvZiByZXN1bHRzIHdpdGhpbiB0YWJsZSBjdXJyZW50bHkgYmVpbmcgc2hvd25cblx0XHRcdFx0Ly8gVGhpcyBpcyBub3QgZXF1YWwgdG8gdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZSBIVE1MXG5cdFx0XHRcdC8vIHNpbmNlIHNvbWUgdGFibGUgcm93cyBtYXkgYmUgaGlkZGVuLCB3aGljaCBuZWVkIHRvIGJlXG5cdFx0XHRcdC8vIGRpc2NvdW50ZWQgZnJvbSB0aGUgdG90YWwgY291bnQuXG5cdFx0ICAgIHJlc3VsdHNDb3VudCA9ICR0YWJsZS5maW5kKCd0Ym9keSB0cicpLmZpbHRlcigoaSwgZWwpID0+ICEkKGVsKS5oYXNDbGFzcyhcInJvdy1oaWRkZW5cIikpLmxlbmd0aCxcblx0XHRcdFx0Ly8gR2V0IHNwbGFzaCBzY3JlZW4gZWxlbWVudCB3aGljaCBtYXkgYmUgYmVpbmcgc2hvd24gaW5zdGVhZCBvZiB0YWJsZVxuXHRcdCAgICAkc3BsYXNoU2NyZWVuID0gJCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnNwbGFzaC1zY3JlZW4nKTtcblxuXHRcdC8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXJlIGFyZSByZXN1bHRzLCB0aGUgc3BsYXNoIHNjcmVlbiBvciB0YWJsZSBuZWVkcyB0byBiZSBzaG93blxuXHRcdC8vIGFuZCB0aGUgb3RoZXIgc3dhcHBlZCBvdXQgdXNpbmcgQ1NTXG5cdFx0dmFyIFskc2hvdywgJGhpZGVdID0gcmVzdWx0c0NvdW50ID8gWyR0YWJsZSwgJHNwbGFzaFNjcmVlbl0gOiBbJHNwbGFzaFNjcmVlbiwgJHRhYmxlXTtcblx0XHQkaGlkZS5hZGRDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblx0XHQkc2hvdy5yZW1vdmVDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblxuXHRcdC8vIFRoZSBtYWluIHRvcCBiYXIgZm9yIHRoZSBsaXN0IHZpZXcgY29udGFpbnMgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBiZWluZyBzaG93biBpbiB0aGUgdGFibGVcblx0XHRpZiAoIW5hdlRleHQpIHtcblx0XHRcdC8vIFNldCBuYXZiYXIgdGV4dCBhcyBudW1iZXIgb2YgaXRlbXMgaW4gdGFibGUgdGhlbiBhcHBlbmQgY3VycmVudGx5IHNlbGVjdGVkIGZpbHRlclxuXHRcdFx0bmF2VGV4dCA9IHJlc3VsdHNDb3VudCArIFwiIFwiICsgJCh0aGlzLm5hdlNlbGVjdG9yKS5maW5kKFwibGkuYWN0aXZlXCIpLmZpcnN0KCkudGV4dCgpLnJlcGxhY2UoXCJBbGwgXCIsIFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIElmIHVuYWJsZSB0byBvYnRhaW4gcm93cyBjb3VudCwgc2hvdyBcIkxvYWRpbmfigKZcIlxuXHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmNsb3Nlc3QoXCJzZWN0aW9uXCIpLmZpbmQoXCIudG9wLW5hdiBoNFwiKS50ZXh0KHJlc3VsdHNDb3VudCAhPT0gdW5kZWZpbmVkID8gbmF2VGV4dCA6IFwiTG9hZGluZ+KAplwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgcm93IGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKiB1c2luZyBkYXRhIGZyb20gXCJvYmplY3RcIi5cblx0ICpcblx0ICogVGhlIHByb3BlcnR5IG5hbWVzIHNob3VsZCBjb3JyZXNwb25kIHdpdGggdGhlIFwic2x1Z1wiXG5cdCAqIGF0dHJpYnV0ZSBpbiB0YWJsZSBoZWFkZXIuXG5cdCAqXG5cdCAqIE5PVEU6IFRoaXMgYXNzdW1lcyB0aGUgb2JqZWN0IGhhcyBhbiBJRCBhdHRyaWJ1dGUuIEluY2x1ZGUgaXRcblx0ICogZXZlbiBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzaG93IGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIGRhdGEgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHRhYmxlXG5cdCAqIHNwbGFzaHNjcmVlbiBvbiB5b3VyIHBhZ2Vcblx0ICovXG5cdGFwcGVuZFRhYmxlUm93KG9iamVjdCkge1xuXHRcdHZhciAkdGFibGVTZWN0aW9uID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdCAgICAkdGFibGVIZWFkICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0aGVhZCB0cicpLFxuXHRcdCAgICAkdGFibGVCb2R5ICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0Ym9keScpLFxuXHRcdCAgICAkbmV3Um93ICAgICAgID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xuXG5cdFx0Ly8gRG9uJ3QgYWRkIHRoZSBzYW1lIHJvdyB0d2ljZVxuXHRcdGlmICgkdGFibGVCb2R5LmNoaWxkcmVuKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgb2JqZWN0LmlkICsgXCJcXFwiXVwiKS5sZW5ndGggPiAwKSByZXR1cm47XG5cblx0XHQvLyBTZXQgSUQgb24gcm93IHRvIHJlZmVyZW5jZSBsYXRlclxuXHRcdCRuZXdSb3dbMF0uZGF0YXNldC5yb3dpZCA9IG9iamVjdC5pZDtcblx0XHQkbmV3Um93LnRvZ2dsZUNsYXNzKFwiaGlnaGxpZ2h0XCIsIG9iamVjdC5pZCA9PSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdFx0JHRhYmxlSGVhZC5jaGlsZHJlbigndGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNsdWcgPSB0aGlzLmRhdGFzZXQuc2x1ZywgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cblx0XHRcdGlmIChzbHVnID09PSAnZXllJykgeyAvLyB0aGUgb24taG92ZXIgZXllIGludmlzaWJsZSByb3dcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPic7XG5cdFx0XHR9IGVsc2UgaWYgKHNsdWcgJiYgc2x1Zy5pbmNsdWRlcyhcImFjY2Vzc1wiKSkge1xuXHRcdFx0XHQvLyBCb29sZWFuIHZhbHVlIHN1cHBvcnRcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSA/IHRoaXMuaW5uZXJIVE1MIDogXCLCt1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSAhPT0gdW5kZWZpbmVkID8gb2JqZWN0W3NsdWddIDogXCLigJRcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0JG5ld1Jvdy5hcHBlbmQodGQpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdCR0YWJsZUJvZHkuYXBwZW5kKCRuZXdSb3cpO1xuXG5cdFx0cmV0dXJuICRuZXdSb3dbMF07XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJzIHRoZSBkYXRhIGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKi9cblx0Y2xlYXJUYWJsZSgpIHtcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2hvdyBkZXRhaWwgcGFnZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSB0YWJsZSByb3cgdG8gYmUgc2hvd24gaW4gdGhlIHNpbmdsZSB2aWV3XG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkID0gbnVsbCkge1xuXHRcdC8vIE5vIG5lZWQgdG8gY2hlY2sgZm9yIG51bGwgYXMgbm8gcm93cyB3aWxsIG1hdGNoIGlmIG5vIElEIHBhc3NlZFxuXHRcdC8vIC5zaWJsaW5ncyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBlbGVtZW50IGl0c2VsZiBzbyBjYW4gYmUgY2hhaW5lZCBhZnRlciBmaW5kaW5nIGhpZ2hsaWdodCByb3cgZmlyc3Rcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQucm93aWQgPT0gaWQpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHRcblx0XHQvLyBObyBuZWVkIHRvIHNldCBzdHlsZSB1c2luZyBKUyBoZXJlLCBDU1MgaGFuZGxlcyBmbGV4XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS51bndyYXAoXCJkaXZcIilcblx0XHRcdC8vIENsb3NlIGJ1dHRvbiBvbiBoaWRlXG5cdFx0XHQuZmluZChcIltkYXRhLWFjdGlvbj1cXFwiY2xvc2VcXFwiXVwiKS5jbGljaygoKSA9PiB0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKSk7XG5cdFx0XG5cdFx0aWYgKGlkID4gLTEpIGxvY2F0aW9uLmhhc2ggPSBwYXJzZUludChpZCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBIaWRlIGRldGFpbCBwYWdlIHNob3duIHdpdGggc2hvd0RldGFpbFxuXHQgKi9cblx0aGlkZVRhYmxlUm93RGV0YWlscygpIHtcblx0XHQvLyBEZXNlbGVjdCBhbGwgcm93c1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0Ly8gRmlsdGVyIHRvIGNoZWNrIGlmIGFscmVhZHkgaGlkZGVuLCBkb24ndCBoaWRlIGFnYWluXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maWx0ZXIoKGksIGVsKSA9PiAkKGVsKS5wYXJlbnQoXCJkaXZcIikubGVuZ3RoID09PSAwKS53cmFwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXHRcdFxuXHRcdGxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYSBzZWxlY3QgZWxlbWVudCB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuXHQgKiBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gYSBkcm9wZG93biBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSAkc2VsZWN0IEEgcmVmZXJlbmNlIHRvIHRoZSBzZWxlY3QgZWxlbWVudCB0byBiZSBmaWxsZWRcblx0ICogQHBhcmFtIGRlZmF1bHRUZXh0IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzZWxlY3QgZWxlbWVudFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgTGlzdCBvZiBlbGVtZW50cyB0byBiZSBhZGRlZCBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb21cblx0ICogQHBhcmFtIGRlZmF1bHRPcHRpb25JZCBJRCBvZiBhIGRlZmF1bHQgb3B0aW9uIGZyb20gdGhlIGVsZW1lbnRzIGdpdmVuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgb2YgdGhlIHNlbGVjdCBmaWVsZCB0byBhY2Nlc3Mgc2VsZWN0ZWQgaXRlbSB3aXRoXG5cdCAqIEBwYXJhbSBnZXRBZGRpdGlvbmFsRGV0YWlscyBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGFkZGl0aW9uYWwgZGV0YWlscyB0byBiZSBzaG93biBmb3IgY3VycmVudCBpdGVtXG5cdCAqL1xuXHRwb3B1bGF0ZVNlbGVjdEZpZWxkKCRzZWxlY3QsIGRlZmF1bHRUZXh0LCBlbGVtZW50cywgZGVmYXVsdE9wdGlvbklkID0gbnVsbCwgcHJvcGVydHkgPSAnbmFtZScsIGdldEFkZGl0aW9uYWxEZXRhaWxzID0gbnVsbCkge1xuXHRcdC8vIERlZmF1bHQgZW1wdHkgY29udGVudCBmb3IgaW5wdXRcblx0XHRsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihkZWZhdWx0VGV4dCwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0b3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHQkc2VsZWN0LmVtcHR5KCkuYXBwZW5kKG9wdGlvbik7XG5cdFx0XG5cdFx0Ly8gRWFjaCBvcHRpb24gdG8gYmUgc2VsZWN0ZWQgZnJvbVxuXHRcdGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XG5cdFx0XHRpZiAoZ2V0QWRkaXRpb25hbERldGFpbHMgIT09IG51bGwpIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZ2V0QWRkaXRpb25hbERldGFpbHMoZSkgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRzZWxlY3Quc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBUaGUgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlYXJjaCB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSBvYmplY3RDYWxsYmFjayBhIGNhbGxiYWNrIHJldHVybmluZyBhbiBvYmplY3QgKHRoZSByb3cgc3RydWN0dXJlKVxuXHQgKiBAcGFyYW0gc2VhcmNoS2V5cyB0aGUgcHJvcGVydGllcyBpbiBvYmplY3RDYWxsYmFjayB0byBoaWdobGlnaHRcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgZWxlbWVudHMgPSBbXSwgb2JqZWN0Q2FsbGJhY2ssIHNlYXJjaEtleXMgPSBbXSkge1xuXHRcdGxldCBwYWdlID0gdGhpcztcblxuXHRcdHBhZ2UuY2xlYXJUYWJsZSgpO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0dmFyIG9iamVjdCA9IG9iamVjdENhbGxiYWNrKGVsKTtcblxuXHRcdFx0XHRzZWFyY2hLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IFN0cmluZyhvYmplY3Rba2V5XSkucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHF1ZXJ5ICsgJyknLCAnaWcnKSwgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHF1ZXJ5ID09PSAkKFwiLnNlYXJjaC1maWVsZCBpbnB1dFwiKS52YWwoKSkge1xuXHRcdFx0XHRcdHBhZ2UuYXBwZW5kVGFibGVSb3cob2JqZWN0KTtcblx0XHRcdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgJHtlbGVtZW50cy5sZW5ndGh9IHJlc3VsdCR7ZWxlbWVudHMubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGBObyByZXN1bHRzIGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgYSBtZXNzYWdlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIG92ZXIgYWxsIGVsZW1lbnRzLlxuXHQgKiBIaWRlIGFmdGVyIDYgc2Vjb25kcywgb3IgY29uZmlndXJhYmxlLlxuXHQgKlxuXHQgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBzdHJpbmcgdG8gYmUgc2hvd24gaW4gdGhlIG1lc3NhZ2UgYm94LlxuXHQgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBtZXNzYWdlLCBzdWNoIGFzIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJcblx0ICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzIGZvciB0aGUgbWVzc2FnZSB0byBiZSBzaG93biBmb3IuXG5cdCAqL1xuXHRzdGF0aWMgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cnJlZFwiLCB0eXBlID0gXCJkYW5nZXJcIiwgZHVyYXRpb24gPSA2KSB7XG5cdFx0Ly8gT25seSBzaG93IG9uZSBtZXNzYWdlIGF0IGEgdGltZVxuXHRcdCQoXCIjYWxlcnQtbm90aWZpY2F0aW9uXCIpLnJlbW92ZSgpO1xuXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRcblx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1zZy5pZCA9IFwiYWxlcnQtbm90aWZpY2F0aW9uXCI7XG5cdFx0bXNnLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiLCBgYWxlcnQtJHt0eXBlfWAsIFwiYWxlcnQtbm90aWZpY2F0aW9uXCIpO1xuXHRcdG1zZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYWxlcnRcIik7IC8vIEFjY2Vzc2liaWxpdHlcblx0XHQvLyBTZXQgY29udGVudCBhbmQgc2hvdyBvbiBzY3JlZW5cblxuXHRcdG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtc2cpO1xuXG5cdFx0Ly8gSGlkZSBhZnRlciBkdXJhdGlvblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gbXNnLnJlbW92ZSgpLCBkdXJhdGlvbiAqIDEwMDApO1xuXG5cdFx0Ly8gQ2xpY2sgdG8gaGlkZSBtZXNzYWdlXG5cdFx0JChtc2cpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vRGV2aWNlXCI7XG5cbi8qKlxuICogSGFyZHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGRldmljZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogSGFyZHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRldmljZXMgPSBhcGkuZGV2aWNlcy5tYXAoZSA9PiBuZXcgRGV2aWNlKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBUeXBlcyBpbiB0YWJsZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZVR5cGVzKCkge1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aGlzLmRldmljZXMubWFwKHQgPT4gdC50eXBlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIE1ha2VzIGZvciBhIHNwZWNpZmllZCBUeXBlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlTWFrZXNPZlR5cGUodHlwZSkge1xuXHRcdGxldCBkZXZpY2VzQnlUeXBlID0gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSk7XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQoZGV2aWNlc0J5VHlwZS5tYXAodCA9PiB0Lm1ha2UpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBkZXZpY2VzIHdpdGggYSBzcGVjaWZpZWQgVHlwZSBhbmQgTWFrZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdGdldERldmljZXNPZlR5cGVBbmRNYWtlKHR5cGUsbWFrZSkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlICYmIGRldmljZS5tYWtlID09IG1ha2UpO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGV2aWNlcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIGRldmljZXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0RGV2aWNlcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gaWRzLmluZGV4T2YoZGV2aWNlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIGRldmljZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIGRldmljZSBcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGRldmljZSA9PiBkZXZpY2UuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGV2aWNlIHdpdGggdGhlIGdpdmVuIHNlcmlhbCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIHNlcmlhbE51bWJlciBUaGUgc2VyaWFsIG51bWJlciBvZiB0aGUgZGV2aWNlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RGV2aWNlfVxuXHQgKi9cblx0Z2V0RGV2aWNlQnlTZXJpYWxOdW1iZXIoc2VyaWFsTnVtYmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGQgPT4gZC5zZXJpYWxfbm8gPT09IHNlcmlhbE51bWJlcik7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi9Qcm9ncmFtXCI7XG5cbi8qKlxuICogU29mdHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIHNvZnR3YXJlIHByb2dyYW1zIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIFNvZnR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvZnR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wcm9ncmFtcyA9IGFwaS5wcm9ncmFtcy5tYXAoZSA9PiBuZXcgUHJvZ3JhbShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJvZ3JhbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBwcm9ncmFtcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXRQcm9ncmFtcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBpZHMuaW5kZXhPZihwcm9ncmFtLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIHByb2dyYW1cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmluZChwcm9ncmFtID0+IHByb2dyYW0uaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCIvLyBTaW5jZSBuYXYgZWxlbWVudCBpcyBwZXJzaXN0ZWQgYmV0d2VlbiBwYWdlcywgd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGFjdGl2ZSBidXR0b25cbiQoXCIjbmF2XCIpLm9uKFwiY2xpY2tcIiwgXCJ1bCBsaSBhXCIsIGUgPT4ge1xuXHQkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUb29sdGlwcyBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggYSByZWxldmFudCB0b29sdGlwIEhUTUwgYXR0cmlidXRlXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4vLyBEYXRlL3RpbWUgcGlja2VyIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCByZWxldmFudCBjbGFzc1xuJCgnLnRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcigpO1xuXG4vLyBDcmVhdGUgbmV3IGVtcGxveWVlIHdoZW4gc2VhcmNoaW5nIGZvciBub24tZXhpc3RlbnQgYXNzaWduZWVcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdsaS5uby1yZXN1bHRzJywgZnVuY3Rpb24oZSkge1xuXHR2YXIgbmV3VmFsdWUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tbWVudS5vcGVuXCIpLmNoaWxkcmVuKFwiLmJzLXNlYXJjaGJveFwiKS5jaGlsZHJlbihcImlucHV0XCIpLnZhbCgpLFxuXHQgICAgJG1vZGFsICAgPSAkKCcjbmV3LXN0YWZmLW1vZGFsJyk7XG5cblx0JG1vZGFsLm1vZGFsKCdzaG93Jyk7XG5cblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJzdGFmZi5uYW1lXCJdJykudmFsKG5ld1ZhbHVlKTtcblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJldmVudF90YXJnZXRcIl0nKS52YWwoJCh0aGlzKS5jbG9zZXN0KCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJ3NlbGVjdCcpLmF0dHIoJ25hbWUnKSk7IC8vIHdoZW4gdGhlIHN0YWZmIG1lbWJlciBpcyBjcmVhdGVkLCB0aGlzIGlzIHRoZSBpbnB1dCBmaWVsZCBpdCdsbCB1cGRhdGVcbn0pO1xuXG4kKCcjbmV3LXN0YWZmLW1vZGFsLCAjbmV3LXRpY2tldC1tb2RhbCwgI2ZvbGxvdy11cC1jYWxsLW1vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cdCQodGhpcykuZmluZCgnaW5wdXQsIHRleHRhcmVhJylcblx0XHQubm90KCcubm8tY2xlYXItb24tc2hvdycpXG5cdFx0LnZhbCgnJyk7XG5cblx0JCh0aGlzKS5maW5kKCcjYWNjb3JkaW9uIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpJykucmVtb3ZlKCk7XG5cblx0dmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHQkKHRoaXMpLmZpbmQoJy50aW1lcGlja2VyJykudmFsKCgnMCcgKyAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLycgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyAnLycgKyBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpICsgJyAnICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5yZW1vdmUtYWNjb3JkaW9uJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0fSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2hpZGUuYnMuY29sbGFwc2Ugc2hvdy5icy5jb2xsYXBzZScsICcjYWNjb3JkaW9uIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcblx0bGV0IGlzU2hvdyA9IGUudHlwZS5zcGxpdChcIi5cIilbMF0gPT09IFwic2hvd1wiO1xuXHQkKHRoaXMpLnNpYmxpbmdzKCcuY2FyZC1oZWFkZXInKS5maW5kKCcudmlldy1hY2NvcmRpb24nKS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi11cCcsICFpc1Nob3cpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLWRvd24nLCBpc1Nob3cpO1xufSk7XG5cbiQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXG4vLyBCb290c3RyYXAgU2VsZWN0IEZpeDogQWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gc2VsZWN0IGZpZWxkXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmJvb3RzdHJhcC1zZWxlY3RcIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUub3BlbicpLnRvZ2dsZSgpO1xufSk7XG5cbi8vIEJvb3RzdHJhcCBtb2RhbHMgZml4OiBhZGQgYmFjayBldmVudCBsaXN0ZW5lclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImJvZHk6bm90KFtkYXRhLXBhZ2U9XFxcInN0YWZmXFxcIl0pIFtkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiXVwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzLmRhdGFzZXQudGFyZ2V0KS5tb2RhbChcInNob3dcIik7XG59KTtcblxuZnVuY3Rpb24gYWRkSXRlbVRvUGlja2VyKHBpY2tlckVsZW1lbnQsIHZhbHVlLCBuYW1lKSB7XG5cdCQocGlja2VyRWxlbWVudCkuYXBwZW5kKG5ldyBPcHRpb24obmFtZSwgdmFsdWUpKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIG5hbWUpO1xufVxuXG52YXIgdmFsaWRhdGlvblRpbWVvdXQgPSB3aW5kb3cudmFsaWRhdGlvblRpbWVvdXQgPSBudWxsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqXG4gKiBBIGNvbW1lbnQgaXMgbWFkZSBhYm91dCBhIHNwZWNpZmljIHRpY2tldCwgYnlcbiAqIGEgc3RhZmYgbWVtYmVyLlxuICogXG4gKiBDb250YWlucyB0aGUgVGlja2V0IHRoYXQgaXQgYmVsb25ncyB0b1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkOiBpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxsX2lkOiBjYWxsLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdGNvbnRlbnQsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxsICAgICAgICAgICAgPSBjYWxsO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0O1xuXHRcdHRoaXMuY29udGVudCAgICAgICAgID0gY29udGVudDtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgYXV0aG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXV0aG9yKTtcblx0fVxuXG5cdHNldCBhdXRob3IoYXV0aG9yKSB7XG5cdFx0dGhpcy5fYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0Z2V0IGNhbGwoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsKHRoaXMuX2NhbGwpO1xuXHR9XG5cblx0c2V0IGNhbGwoY2FsbCkge1xuXHRcdHRoaXMuX2NhbGwgPSBjYWxsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENhbGxcbiAqXG4gKiBFdmVyeSB0aW1lIHRoZSBIZWxwZGVzayBpcyBjYWxsZWQsIHRoaXMgaXMgY3JlYXRlZC5cbiAqIEEgY2FsbCBtYXkgaGF2ZSBtdWx0aXBsZSB0aWNrZXRzLCBhIHRpY2tldCBtYXkgaGF2ZVxuICogbXVsdGlwbGUgY2FsbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGwge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGltZSxcblx0XHRjYWxsZXJfaWQ6IGNhbGxlcixcblx0XHRvcGVyYXRvcl9pZDogb3BlcmF0b3IsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMudGltZSAgICAgPSB0aW1lO1xuXHRcdHRoaXMuY2FsbGVyICAgPSBjYWxsZXI7ICAgLy8gSUQgb2YgY2FsbGVyLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7IC8vIElEIG9mIG9wZXJhdG9yLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLnRpY2tldHMgID0gdGlja2V0czsgIC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgVGlja2V0J3Ncblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgb3BlcmF0b3Iob3BlcmF0b3IpIHtcblx0XHR0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzRnJvbUNhbGwodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEVtcGxveWVlXG4gKlxuICogQW4gZW1wbG95ZWUgb2YgdGhlIGNvbXBhbnlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRlbWFpbCxcblx0XHRqb2JfdGl0bGU6IGpvYixcblx0XHRkZXBhcnRtZW50LFxuXHRcdHBob25lX251bWJlcjogcGhvbmUsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBzcGVjaWFsaXNtcyA9IFtdLFxuXHRcdG9wZXJhdG9yID0gZmFsc2UsXG5cdFx0c3BlY2lhbGlzdCA9IHNwZWNpYWxpc21zLmxlbmd0aCA+IDAsXG5cdFx0YW5hbHlzdCA9IGZhbHNlLFxuXHRcdGFkbWluID0gZmFsc2Vcblx0fSkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLmpvYiA9IGpvYjtcblx0XHR0aGlzLmRlcGFydG1lbnQgPSBkZXBhcnRtZW50Lm5hbWU7XG5cdFx0dGhpcy5fZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQuaWQ7XG5cdFx0dGhpcy5waG9uZSA9IHBob25lO1xuXHRcdHRoaXMuc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0XHR0aGlzLmFjY2VzcyA9IHtvcGVyYXRvciwgYW5hbHlzdCwgYWRtaW59O1xuXHRcdFxuXHRcdC8vIElmIHVzZXIgaXMgYW55IG90aGVyIHBlcm1pc3Npb24gdGhlbiByZWFkIGlzIGdyYW50ZWRcblx0XHR0aGlzLmFjY2Vzcy5yZWFkID0gdGhpcy5hY2Nlc3Mub3BlcmF0b3IgfHwgdGhpcy5hY2Nlc3MuYW5hbHlzdCB8fCB0aGlzLmFjY2Vzcy5hZG1pbiB8fCB0aGlzLmFjY2Vzcy5yZWFkb25seSB8fCBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgcmVhZCBhY2Nlc3MgdG8gdGhlIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzUmVhZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MucmVhZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhIGhlbHAgZGVzayBvcGVyYXRvclxuXHQgKi9cblx0Z2V0IGlzT3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLm9wZXJhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gYW5hbHl0aWNhbCBkYXRhIGFib3V0IHRoZSBoZWxwIGRlc2sgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNBbmFseXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hbmFseXN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGFuIGFkbWluaXN0cmF0b3Igb24gdGhlIGhlbHAgZGVza1xuXHQgKi9cblx0Z2V0IGlzQWRtaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFkbWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIEEgbGlzdCBvZiBwcm9ibGVtIHR5cGVzIHRoZSB1c2VyIGlzIGEgc3BlY2lhbGlzdCBvZlxuXHQgKi9cblx0Z2V0IHNwZWNpYWxpc21zKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9zcGVjaWFsaXNtcyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHNwZWNpYWxpc21zIFNldCB0aGUgbGlzdCBvZiBzcGVjaWFsaXNtcyBmb3IgdGhpcyBwZXJzb24gb24gdGhlIHN5c3RlbVxuXHQgKi9cblx0c2V0IHNwZWNpYWxpc21zKHNwZWNpYWxpc21zKSB7XG5cdFx0dGhpcy5fc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQcmVwYXJlIGRhdGEgZm9yIHNlbmRpbmcgdG8gQVBJIGVuZHBvaW50LiBUaGUgQVBJIGhhcyBkaWZmZXJlbnRcblx0ICogZGF0YSBrZXlzIHJlcHJlc2VudGluZyB0aGUgZGF0YSBhY2Nlc3NpYmxlIGluIHRoZSB0YWJsZXMsIHNvIG5ld1xuXHQgKiBkYXRhIGFuZCB1cGRhdGVzIHRvIGRhdGEgbXVzdCB1c2UgdGhlc2Uga2V5IG5hbWVzLlxuXHQgKiBAcGFyYW0gZGF0YSB0byBiZSBjb252ZXJ0ZWRcblx0ICogQHJldHVybnMgZGF0YSB3aXRoIHVwZGF0ZWQga2V5IG5hbWVzXG5cdCAqL1xuXHRzdGF0aWMgcHJlcGFyZURhdGEoZGF0YSA9IHt9KSB7XG5cdFx0ZGF0YS5qb2JfdGl0bGUgPSBkYXRhLmpvYjtcblx0XHRkYXRhLnBob25lX251bWJlciA9IGRhdGEucGhvbmU7XG5cdFx0ZGF0YS5leHBlcnRpc2VfdHlwZXMgPSBkYXRhLnNwZWNpYWxpc21zO1xuXHRcdGRhdGEuZGVwYXJ0bWVudF9pZCA9IGRhdGEuZGVwYXJ0bWVudDtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cdFx0XHRkYXRhW2tleV0gPSBkYXRhLmFjY2Vzc1trZXldID8gKDEgJiYgKGRhdGEuc3BlY2lhbGlzdCA9IDEpKSA6IDA7XG5cdFx0fVxuXHRcdGRhdGEuc3BlY2lhbGlzdCA9IGRhdGEuc3BlY2lhbGlzdCB8fCAwO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRwYXJlbnRfaWQ6IHBhcmVudCxcblx0XHRjaGlsZHJlblxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgPSBuYW1lO1xuXHRcdHRoaXMucGFyZW50ICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuOyAvLyBJRCBvZiBFeHBlcnRpc2VUeXBlJ3MsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRXhwZXJ0aXNlVHlwZSdzXG5cdH1cblxuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX3BhcmVudCk7XG5cdH1cblxuXHRzZXQgcGFyZW50KHBhcmVudCkge1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGdldCBjaGlsZHJlbigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fY2hpbGRyZW4pO1xuXHR9XG5cblx0c2V0IGNoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwiaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVN0YWZmIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHN0YWZmX2lkOiBzdGFmZklkLFxuXHRcdGV4cGVydGlzZV90eXBlX2lkOiBleHBlcnRpc2VUeXBlSWQsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgPSBzdGFmZklkO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlSWQ7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9leHBlcnRpc2VfdHlwZSk7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGUoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhdHVzXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBTdGF0dXMuXG4gKiBDb250YWlucyBUaWNrZXRzIHRoYXQgZml0IGludG8gdGhlIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c2x1Zyxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICA9IGlkO1xuXHRcdHRoaXMuc2x1ZyAgICA9IHNsdWc7ICAgIC8vIHNsdWdfZXhhbXBsZVxuXHRcdHRoaXMubmFtZSAgICA9IG5hbWU7ICAgIC8vIE5hbWUgRXhhbXBsZSFcblx0XHR0aGlzLnRpY2tldHMgPSB0aWNrZXRzOyAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgVGlja2V0IGluc3RhbmNlc1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzV2l0aFNsdWcodGhpcy5zbHVnKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFRpY2tldC9Qcm9ibGVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbHMsXG5cdFx0c3RhdHVzLFxuXHRcdHN0YXR1c19oaXN0b3J5OiBzdGF0dXNIaXN0b3J5LFxuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHNvbHV0aW9uX2lkOiBzb2x1dGlvbixcblx0XHRkZXZpY2VzLFxuXHRcdHByb2dyYW1zLFxuXHRcdGNvbW1lbnRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbCxcblx0XHR1cGRhdGVkX2F0OiB1cGRhdGVkQXRSZWFsLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmX2lkOiBleHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0YXNzaWduZWRfdG9fb3BlcmF0b3JfaWQ6IGFzc2lnbmVkVG9PcGVyYXRvcklkXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICAgID0gY2FsbHM7ICAvLyBJRCBvZiBjYWxscywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDYWxsJ3Ncblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YXR1c19oaXN0b3J5ICAgICAgID0gc3RhdHVzSGlzdG9yeTtcblx0XHR0aGlzLnRpdGxlICAgICAgICAgICAgICAgID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiAgICAgICAgICA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuc29sdXRpb24gICAgICAgICAgICAgPSBzb2x1dGlvbjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICAgID0gZGV2aWNlczsgIC8vIElEIG9mIGRldmljZXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRGV2aWNlc1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgICAgPSBwcm9ncmFtczsgLy8gSUQgb2YgcHJvZ3JhbXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgUHJvZ3JhbXNcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICAgID0gY29tbWVudHM7IC8vIElEIG9mIGNvbW1lbnRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENvbW1lbnQnc1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0ICAgICAgICAgICA9IHVwZGF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCAgICAgID0gY3JlYXRlZEF0UmVhbDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRfcmVhbCAgICAgID0gdXBkYXRlZEF0UmVhbDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBjYWxscygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGxzQnlUaWNrZXRJZCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCBjYWxscyhjYWxscykge1xuXHRcdHRoaXMuX2NhbGxzID0gY2FsbHM7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXHRcblx0Z2V0IHN0YXR1c19oaXN0b3J5KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzSGlzdG9yeSh0aGlzLl9zdGF0dXNfaGlzdG9yeSk7XG5cdH1cblxuXHRzZXQgc3RhdHVzX2hpc3Rvcnkoc3RhdHVzSGlzdG9yeSkge1xuXHRcdHRoaXMuX3N0YXR1c19oaXN0b3J5ID0gc3RhdHVzSGlzdG9yeTtcblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgSGFyZHdhcmVNYW5hZ2VyKCkpLmdldERldmljZXModGhpcy5fZGV2aWNlcyk7XG5cdH1cblxuXHRzZXQgZGV2aWNlcyhkZXZpY2VzKSB7XG5cdFx0dGhpcy5fZGV2aWNlcyA9IGRldmljZXM7XG5cdH1cblxuXHRnZXQgcHJvZ3JhbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgU29mdHdhcmVNYW5hZ2VyKCkpLmdldFByb2dyYW1zKHRoaXMuX3Byb2dyYW1zKTtcblx0fVxuXG5cdHNldCBwcm9ncmFtcyhwcm9ncmFtcykge1xuXHRcdHRoaXMuX3Byb2dyYW1zID0gcHJvZ3JhbXM7XG5cdH1cblxuXHRnZXQgY29tbWVudHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50c0J5SWRzKHRoaXMuX2NvbW1lbnRzKTtcblx0fVxuXG5cdHNldCBjb21tZW50cyhjb21tZW50cykge1xuXHRcdHRoaXMuX2NvbW1lbnRzID0gY29tbWVudHM7XG5cdH1cblxuXHRnZXQgc29sdXRpb24oKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50KHRoaXMuX3NvbHV0aW9uKTtcblx0fVxuXG5cdHNldCBzb2x1dGlvbihzb2x1dGlvbikge1xuXHRcdHRoaXMuX3NvbHV0aW9uID0gc29sdXRpb247XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVTdGFmZih0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZik7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZklkO1xuXHR9XG5cblx0Z2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKGFzc2lnbmVkVG9PcGVyYXRvcklkKSB7XG5cdFx0dGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHR2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQwIC0gMSArIDEpKSArIDE7IC8vUmFuZG9tIGludCBiZXR3ZWVuIDEgYW5kIDQwXG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKSkuZ2V0RXhwZXJ0aXNlVHlwZShyYW5kb20pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBEZXZpY2VcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dHlwZSxcblx0XHRtYWtlLFxuXHRcdHNlcmlhbF9ubyxcblx0XHR0aWNrZXRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSlcblx0e1xuXHRcdHRoaXMuaWRcdFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy50eXBlXHRcdFx0PSB0eXBlO1xuXHRcdHRoaXMubWFrZSAgIFx0XHQ9IG1ha2U7XG5cdFx0dGhpcy5zZXJpYWxfbm8gICAgIFx0PSBzZXJpYWxfbm87XG5cdFx0dGhpcy5fdGlja2V0c1x0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5jcmVhdGVkX2F0XHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBQcm9ncmFtXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBTb2Z0d2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3JhbSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHMsXG5cdFx0b3BlcmF0aW5nX3N5c3RlbSxcblx0XHRleHBpcnlfZGF0ZSxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pIFxuXHR7XG5cdFx0dGhpcy5pZCAgICAgICAgIFx0XHQ9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgICBcdFx0PSBuYW1lO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5vcGVyYXRpbmdfc3lzdGVtXHQ9IG9wZXJhdGluZ19zeXN0ZW07XG5cdFx0dGhpcy5leHBpcnlfZGF0ZVx0XHQ9IGV4cGlyeV9kYXRlO1xuXHRcdHRoaXMuY3JlYXRlZF9hdCBcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCBcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0U29mdHdhcmVUeXBlKCkgeyBcblx0XHQvL0dldHMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgcHJvZ3JhbSBpcyBhbiBvcGVydGluZyBzeXN0ZW0gb3Igbm90XG5cdFx0aWYgKHRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiT3BlcmF0aW5nIFN5c3RlbVwiO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiQXBwbGljYXRpb25cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiLVwiO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFN0YXR1c1xuICpcbiAqIEludGVybWVkaWFyeSByZWxhdGlvbnNoaXAgYmV0d2VlbiBTdGF0dXNcbiAqIGFuZCBUaWNrZXQuIFRoaXMgc3RvcmVzIGEgaGlzdG9yeSBvZiBhXG4gKiBUaWNrZXQncyBzdGF0dXNlczsgdGhlIGxhc3QgZW50cnkgaXNcbiAqIHRoZSBUaWNrZXQncyBjdXJyZW50IHN0YXR1cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0U3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdHN0YXR1c19pZDogc3RhdHVzLFxuXHRcdHN0YWZmX2lkOiBzdGFmZixcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDsgLy8gSUQgb2YgdGlja2V0LCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgVGlja2V0XG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgID0gc3RhZmY7ICAvLyBJRCBvZiBzdGFmZiwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuL0R5bmFtaWNQYWdlXCI7XG5cbi8qKlxuICogQVBJXG4gKlxuICogT3JpZ2luYWxseSB1c2VkIHRvIHJldHJpZXZlIGFuZCBoYW5kbGUgZGF0YSBmcm9tXG4gKiBBUEkgZW5kcG9pbnRzLCBidXQgbW9kaWZpZWQgdG8gaG9sZCBsb2NhbCBkYXRhXG4gKiBpbiB0aGUgY29uc3RydWN0b3Igc2V0IGJ5IFdvcmRQcmVzcydzIFR3aWdcbiAqIChkb25lIHRvIHJldXNlIHByZXZpb3VzIGNvbXBvbmVudHMgdG8gc2F2ZSB0aW1lKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FsbHMgPSBbXSxcblx0XHRzdGF0dXNlcyA9IFtdLFxuXHRcdHRpY2tldHMgPSBbXSxcblx0XHR0aWNrZXRfc3RhdHVzZXM6IHRpY2tldFN0YXR1c2VzID0gW10sXG5cdFx0Y29tbWVudHMgPSBbXSxcblx0XHRzdGFmZiA9IFtdLFxuXHRcdGRldmljZXMgPSBbXSxcblx0XHRwcm9ncmFtcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlczogZXhwZXJ0aXNlVHlwZXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZjogZXhwZXJ0aXNlVHlwZVN0YWZmID0gW10sXG5cdFx0ZGVwYXJ0bWVudHMgPSBbXVxuXHR9KSB7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgPSBjYWxscztcblx0XHR0aGlzLnN0YXR1c2VzICAgICAgICAgICA9IHN0YXR1c2VzO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgICAgID0gdGlja2V0cztcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzICAgICA9IHRpY2tldFN0YXR1c2VzO1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgID0gY29tbWVudHM7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgICAgPSBzdGFmZjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICA9IGRldmljZXM7XG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgPSBwcm9ncmFtcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGV4cGVydGlzZVR5cGVzO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgICAgICAgID0gZGVwYXJ0bWVudHM7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGFmZlBhZ2VcbiAqXG4gKiBNZXRob2RzIHVzZWZ1bCBmb3IgcG9wdWxhdGluZyBhbmQgaGFuZGxpbmcgaW5wdXQgb24gU3RhZmYgcGFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZlBhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0Ly8gTm8gZW1wbG95ZWUgZGV0YWlsIHNob3duIGJ5IGRlZmF1bHRcblx0XHR0aGlzLmVtcGxveWVlID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW4gYW5kIHNob3cgYWxsIHN0YWZmIGluIGxpc3QgdmlldyB0YWJsZSBvbiBwYWdlXG5cdCAqL1xuXHRzaG93U3RhZmYoKSB7XG5cdFx0Ly8gRW5zdXJlIG5vIGxvY2FsbHktY2FjaGVkIGRhdGEgaXMgcHJlc2VudCBpbiBzdGFmZiB0YWJsZSBiZWZvcmUgcG9wdWxhdGluZ1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuZW1wdHkoKTtcblxuXHRcdC8vIENvbHVtbiB0byBmaWxsIHRpY2tldHMgbnVtYmVyIGludG9cblx0XHRsZXQgdGlja2V0c0NvbHVtbkluZGV4ID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0clwiKS5maXJzdCgpXG5cdFx0XHRcdC5jaGlsZHJlbihcIltkYXRhLXNsdWc9XFxcInRpY2tldHMuYXNzaWduZWRcXFwiXVwiKS5pbmRleCgpO1xuXG5cdFx0Ly8gVGVtcG9yYXJ5IGFycmF5IHRvIGhvbGQgc3RhZmYgSURzIHN0aWxsIGF3YWl0aW5nIHRpY2tldCBjb3VudHNcblx0XHRsZXQgc3RhZmZGb3JUaWNrZXRzID0gW107XG5cblx0XHQvLyBQdXQgZWFjaCBzdGFmZiBtZW1iZXIgb24gdGFibGVcblx0XHRsZXQgc3RhZmYgPSB0aGlzLnN0YWZmTWFuYWdlci5zdGFmZjtcblxuXHRcdC8vIEFkZCBlYWNoIHN0YWZmIG1lbWJlciB0byBhIG5ldyByb3cgaW4gdGhlIHRhYmxlXG5cdFx0Zm9yIChsZXQgZW1wbG95ZWUgb2Ygc3RhZmYpIHtcblx0XHRcdGxldCAkdGFibGVSb3cgPSB0aGlzLmFwcGVuZFRhYmxlUm93KGVtcGxveWVlKTtcblx0XHRcdHN0YWZmRm9yVGlja2V0cy5wdXNoKGVtcGxveWVlLmlkKTtcblx0XHR9XG5cblx0XHQvLyBIaWRlIHNwbGFzaCBzY3JlZW4gaWYgdGhlcmUgaXMgYXQgbGVhc3QgMSBzdGFmZiBtZW1iZXIgaW4gdmlld1xuXHRcdHRoaXMudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cblx0XHQvLyBHZXQgYXNzaWduZWQgdGlja2V0IGNvdW50cyBhc3luY2hyb25vdXNseVxuXHRcdChhc3luYyhpZHMpID0+IHtcblx0XHRcdC8vIEdldCBudW1iZXIgb2YgYXNzaWduZWQgdGlja2V0cyBhbmQgZmlsbCBjb2x1bW5cblx0XHRcdGxldCAkcm93cyA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuY2hpbGRyZW4oXCJ0clwiKTtcblx0XHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoaWRzKTtcblx0XHRcdCRyb3dzLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRcdGVsLmNoaWxkcmVuW3RpY2tldHNDb2x1bW5JbmRleF0udGV4dENvbnRlbnQgPSB0aWNrZXRzW2krMV0gPyAodGlja2V0c1tpKzFdLmxlbmd0aCB8fCAwKSA6IDA7XG5cdFx0XHR9KTtcblx0XHR9KShzdGFmZkZvclRpY2tldHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBzaG93aW5nIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuIFVzdWFsbHkgY2FsbGVkXG5cdCAqIHdoZW4gY2xpY2tpbmcgb24gYSByb3cgaW4gdGhlIHRhYmxlLCBidXQgY2FuIGFsc28gYmUgY2FsbGVkXG5cdCAqIGZvciBvdGhlciB0YWJsZSByb3cgY2hhbmdlIGlucHV0cywgc3VjaCBhcyBoYXNoIGZyYWdtZW50IG9yXG5cdCAqIGtleWJvYXJkIGlucHV0LlxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZSB0byBzaG93IGRldGFpbFxuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCkge1xuXHRcdC8vIEdldCBlbXBsb3llZSB3aXRoIElEXG5cdFx0dGhpcy5lbXBsb3llZSA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChpZCk7XG5cdFx0Ly8gQ2F0Y2ggaW52YWxpZCBJRHMgYW5kIHNob3cgbWVzc2FnZVxuXHRcdGlmICghdGhpcy5lbXBsb3llZSkge1xuXHRcdFx0Ly8gSGlkZSBzaW5nbGUgdmlldyBpZiBubyBkZXRhaWwgaXMgYWJsZSB0byBiZSBwcmVzZW50ZWRcblx0XHRcdC8vIGZvciByZXF1ZXN0ZWQgSUQsIGVuc3VyaW5nIHRoZSBwZXJzb24gdXNpbmcgdGhlIHN5c3RlbVxuXHRcdFx0Ly8gaXMgbm90IGNvbmZ1c2VkIGJ5IGRhdGEgc2hvd24gZm9yIHByZXZpb3VzbHkgYWNjZXNzZWQgdXNlci5cblx0XHRcdHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHRcdFx0RHluYW1pY1BhZ2Uuc2hvd05vdGlmaWNhdGlvbihcIk5vIGVtcGxveWVlIHdpdGggSUQgXCIgKyBpZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUHV0IGVtcGxveWVlIG5hbWUgaW4gdGl0bGUgYmFyIG9mIHNpbmdsZSB2aWV3XG5cdFx0dGhpcy51cGRhdGVTaW5nbGVWaWV3TmF2YmFyKHRoaXMuZW1wbG95ZWUubmFtZSk7XG5cdFx0XG5cdFx0Ly8gRmlsbCBpbiBjb250ZW50IGZvciBlYWNoIGZpZWxkIGF2YWlsYWJsZSBpbiBzdGFmZiBtZW1iZXJcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1zbHVnXVwiKS5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0Ly8gRWFjaCBzbHVnIGlzIGEgZGlmZmVyZW50IGZpZWxkIHRvIGJlIGZpbGxlZCwgc29cblx0XHRcdC8vIGdldCBlYWNoIHZhbHVlIGFuZCBzZXQgZWxlbWVudCBjb250ZW50IHRvIHZhbHVlXG5cdFx0XHRsZXQgdmFsdWUgPSBPYmplY3QucmVzb2x2ZShlbC5kYXRhc2V0LnNsdWcsIHRoaXMuZW1wbG95ZWUpO1xuXHRcdFx0Ly8gU29tZSB2YWx1ZXMgYXJlIG9wdGlvbmFsLCBzbyBkb24ndCBzaG93IHVuZGVmaW5lZCBpZiBubyBkYXRhXG5cdFx0XHRlbC50ZXh0Q29udGVudCA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHZhbHVlIDogXCLigJRcIjtcblx0XHR9KTtcblxuXHRcdC8vIFNvbWUgY29udGVudCByZXF1aXJlcyBzcGVjaWFsIGhhbmRsaW5nIGZvciBpbnB1dCBvZiBpbmZvcm1hdGlvblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZChcIltkYXRhLWN1c3RvbXNsdWddXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGVsLmRhdGFzZXQuY3VzdG9tc2x1Zykge1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gdG9rZW5zIG5lZWQgdG8gYmUgaGFuZGxlZCBzcGVjaWFsbHlcblx0XHRcdFx0Ly8gc2luY2UgdmFsdWUgaXMgbm90IG5vcm1hbCB0ZXh0XG5cdFx0XHRcdGNhc2UgXCJhY2Nlc3NcIjpcblx0XHRcdFx0XHRTdGFmZlBhZ2Uuc2hvd1Blcm1pc3Npb25zKGVsLCB0aGlzLmVtcGxveWVlKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwiYXZhdGFyXCI6XG5cdFx0XHRcdFx0ZWwuc3JjID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yNzV4Mjc1XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcInRpY2tldHMuYXNzaWduZWRcIjpcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IFwi4oCmXCI7XG5cdFx0XHRcdFx0KGFzeW5jKGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGhpcy5lbXBsb3llZS5pZCkubGVuZ3RoO1xuXHRcdFx0XHRcdH0pKGVsKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyBJZiBpbiBkb3VidCwgcHJlc3VtZSBkYXRhIGlzIGludmFsaWQgYW5kIHNob3cgc2FtZSBhcyBubyBkYXRhXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRHluYW1pY1BhZ2UgbmVlZHMgdG8gaGFuZGxlIHZpZXcgY29kZVxuXHRcdHN1cGVyLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpO1xuXG5cdFx0Ly8gUHJvYmxlbSB0eXBlcyB2aWV3IGhhbmRsaW5nIHRvIGJlIG9idGFpbmVkIGJ5IHNwZWNpZmljIHByb2JsZW0gdHlwZSBKU1xuXHRcdHdpbmRvdy5zdGFmZlByb2JsZW1UeXBlUGFnZS5jdXJyZW50U3BlY2lhbGlzbXMgPSB0aGlzLmVtcGxveWVlLl9zcGVjaWFsaXNtcztcblx0XHR3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UubG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcygkKCcudHlwZS1jb2x1bW5zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBkaXNwbGF5aW5nIHBlcm1pc3Npb25zIGZyb20gZGF0YSBvYmplY3Rcblx0ICogdG8gaW5kaXZpZHVhbCB0b2tlbnMgc2hvd24gaW4gaW5wdXQsIG9uZSBmb3IgZWFjaCBvZlxuXHQgKiB0aGUgcGVybWlzc2lvbiBsZXZlbHMgZ3JhbnRlZCB0byB0aGUgdXNlci5cblx0ICpcblx0ICogQHBhcmFtIGVsIFRoZSBlbGVtZW50IHRvIGZpbGwgd2l0aCB0aGUgcGVybWlzc2lvbiBkZXRhaWxzXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gZ2V0IHRoZSBncmFudGVkIHBlcm1pc3Npb24gaW5mb3JtYXRpb24gZnJvbVxuXHQgKi9cblx0c3RhdGljIHNob3dQZXJtaXNzaW9ucyhlbCwgZW1wbG95ZWUpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdC8vIERlZmluZSB0aGUgaWNvbnMgdG8gYmUgZGlzcGxheWVkIGZvciBlYWNoIG9mIHRoZSBwZXJtaXNzaW9uIGxldmVsc1xuXHRcdGxldCBpY29ucyA9IHtyZWFkOiBcImV5ZVwiLCBvcGVyYXRvcjogXCJ1c2VyLXNlY3JldFwiLCBhbmFseXN0OiBcImxpbmUtY2hhcnRcIiwgYWRtaW46IFwic2hpZWxkXCJ9O1xuXG5cdFx0Ly8gRWFjaCBwZXJtaXNzaW9uIGhhcyBpdHMgb3duIHRva2VuIGZvciByZXByZXNlbnRpbmcgaXRzZWxmXG5cdFx0Zm9yIChsZXQgcGVybWlzc2lvbiBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHdoZXRoZXIgZW1wbG95ZWUgaGFzIHBlcm1pc3Npb24gYW5kIG9ubHkgc2hvdyBpZiB0cnVlXG5cdFx0XHRpZiAoZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dKSB7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiBpY29uXG5cdFx0XHRcdGxldCBlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0XHRcdFx0ZWxJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLVwiICsgaWNvbnNbcGVybWlzc2lvbl0pO1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gbmFtZVxuXHRcdFx0XHRsZXQgZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRcdGVsVGV4dC50ZXh0Q29udGVudCA9IHBlcm1pc3Npb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwZXJtaXNzaW9uLnNsaWNlKDEpO1xuXG5cdFx0XHRcdC8vIEdyb3VwIGljb24gYW5kIG5hbWUgaW50byBzaW5nbGUgdG9rZW5cblx0XHRcdFx0bGV0IGVsUGVybWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRlbFBlcm1pc3Npb24uYXBwZW5kQ2hpbGQoZWxJY29uKTtcblx0XHRcdFx0ZWxQZXJtaXNzaW9uLmFwcGVuZENoaWxkKGVsVGV4dCk7XG5cblx0XHRcdFx0Ly8gRGlzcGxheSBwZXJtaXNzaW9uIHRva2VuIGluIGVsZW1lbnRcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZWxQZXJtaXNzaW9uKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggc3RhZmYgbWVtYmVycyBnaXZlbiBhIHNlYXJjaCBzdHJpbmdcblx0ICogdG8gZmlsdGVyIHRoZSB0YWJsZSBieSBlbXBsb3llZXMgbWF0Y2hpbmcgdGhlIHN0cmluZy5cblx0ICogVGhpcyBzZWFyY2hlcyB0aHJvdWdoIG1hbnkgc3RhZmYgdGFibGUgZmllbGRzOlxuXHQgKiBpZCwgbmFtZSwgam9iLCBkZXBhcnRtZW50IGFuZCBwaG9uZSBudW1iZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZyB0byBmaWx0ZXIgdGhlIGVtcGxveWVlcyBieVxuXHQgKi9cblx0YXN5bmMgc2VhcmNoKHF1ZXJ5KSB7XG5cdFx0Ly8gT25seSBzZWFyY2ggaWYgcXVlcnkgaXMgc3VmZmljaWVudCBmb3Igc2VhcmNoXG5cdFx0Ly8gVGhpcyBtYXR0ZXJzIG1vcmUgd2l0aCBsYXJnZXIgZGF0YXNldHMgd2hlcmUgXCJhXCIgY2FuIGhhdmVcblx0XHQvLyB0aG91c2FuZHMgb2YgcmVzdWx0cy4gQWx3YXlzIGVuc3VyZSBJRCBzZWFyY2hlcyBhcmUgcGVyZm9ybWVkXG5cdFx0Ly8gc2luY2UgSUQgaXMgaW5kZXhlZCBhbmQgY2FuIGJlIHNlYXJjaGVkIHZlcnkgcXVpY2tseS5cblx0XHRpZiAocXVlcnkubGVuZ3RoID49IDIgfHwgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgcXVlcnkgPT0gcGFyc2VJbnQocXVlcnkpKSkge1xuXG5cdFx0XHQvLyBEZWZpbmUgcHJvcGVydGllcyBvZiBlbXBsb3llZXMgdG8gYmUgc2VhcmNoZWQgZm9yIHF1ZXJ5IG1hdGNoXG5cdFx0XHR2YXIgcHJvcGVydGllcyA9IFtcImlkXCIsIFwibmFtZVwiLCBcImpvYlwiLCBcImRlcGFydG1lbnRcIiwgXCJwaG9uZVwiXTtcblx0XHRcdC8vIFBlcmZvcm0gdGhlIHNlYXJjaCB1c2luZyBzdXBlciBzZWFyY2ggYW5kIGFzc2lnbiByZXN1bHRzXG5cdFx0XHRzdXBlci5zZWFyY2gocXVlcnksIHRoaXMuc3RhZmZNYW5hZ2VyLnNlYXJjaChxdWVyeSwgcHJvcGVydGllcyksIG9iaiA9PiBPYmplY3QuYXNzaWduKHt9LCBvYmopLCBwcm9wZXJ0aWVzKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHNob3dpbmcgYWxsIHN0YWZmIGlmIHF1ZXJ5IGlzIG1pc3Npbmcgb3IgaW5zdWZmaWNpZW50XG5cdFx0XHQvLyBUaGlzIGlzIGRpc3RpbmN0IHRvIHRoZSBjYXNlIHdoZXJlIHRoZXJlIGFyZSBubyByZXN1bHRzIHRvXG5cdFx0XHQvLyBhIHN1Y2Nlc3NmdWwgcXVlcnkg4oCUIHRoaXMgaXMgaGFuZGxlZCBpbiBzdXBlcidzIHNlYXJjaCBtZXRob2Rcblx0XHRcdC8vIGFuZCBzaG93cyBhbiBhcHByb3ByaWF0ZSBtZXNzYWdlIGluc3RlYWQgb2YgYWxsIHRoZSBzdGFmZi5cblx0XHRcdHRoaXMuc2hvd1N0YWZmKCk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL1N0YWZmUGFnZS5qcyIsIi8qXG5TZXR0aW5ncyBwYWdlIEpTIGZvciBwb3B1bGF0aW5nIGN1cnJlbnQgdXNlciBpbmZvIGludG8gcGFnZVxuYW5kIGhhbmRsaW5nIHVzZXIgaW5wdXQgZm9yIHNlY3VyaXR5IHNlY3Rpb24gKGNoYW5naW5nIHBhc3N3b3JkKVxuICovXG5cbmltcG9ydCBcIi4uLy4uL21haW5cIjtcblxuaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tIFwiLi9TZXR0aW5nc1BhZ2VcIjtcbmNvbnN0IHNldHRpbmdzUGFnZSA9IHdpbmRvdy5zZXR0aW5nc1BhZ2UgPSBuZXcgU2V0dGluZ3NQYWdlKCk7XG5cbi8vIExvYWQgYWxsIGluaXRpYWwgcGVyc29uYWwgZGF0YSBvbiBwYWdlXG5zZXR0aW5nc1BhZ2UubG9hZERhdGEoKTtcblxuLy8gSGFuZGxlIHBhZ2UgbmF2aWdhdGlvbiBpbiBuZXN0ZWQgc2lkZWJhclxuJChcIi5zaWRlLW5hdi1iYXItbmVzdGVkIHVsXCIpLm9uKFwiY2xpY2tcIiwgXCJsaVwiLCBmdW5jdGlvbigpIHtcblx0Ly8gT25seSBjaGFuZ2UgcGFnZSBpZiB1c2VyIHNlbGVjdHMgZGlmZmVyZW50IHBhZ2Vcblx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuXHRcdC8vIFRvZ2dsZSBvdXQgY3VycmVudCBwYWdlIGFuZCBpbiBmb3IgbmV3IHBhZ2Vcblx0XHQkKFwiLnNlY3Rpb246dmlzaWJsZVwiKS5hZGRDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQuc2x1ZyArIFwiLXNlY3Rpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrLWhpZGRlblwiKTtcblx0XHQvLyBIaWdobGlnaHQgc2VsZWN0ZWQgcGFnZSBpbiBzaWRlYmFyXG5cdFx0JCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdC8vIFNldCB0b3AgYmFyIHRpdGxlIHRvIG5ldyBwYWdlIG5hbWVcblx0XHQkKFwiLnRvcC1uYXYgaDRcIikudGV4dCh0aGlzLnRleHRDb250ZW50KTtcblx0fVxufSk7XG5cbi8vIFNlY3VyaXR5IHNldHRpbmdzXG5jb25zdCAkc2VjdXJpdHkgPSAkKFwiI3NlY3VyaXR5LXNlY3Rpb25cIik7XG4kc2VjdXJpdHkuZmluZChcIi5zYXZlLWNoYW5nZXNcIikuY2xpY2soKCkgPT4ge1xuXHQvLyBHZXQgdXNlciBpbnB1dFxuXHRjb25zdCBvbGRWYWx1ZSA9ICRzZWN1cml0eS5maW5kKFwiW25hbWU9XFxcInBhc3N3b3JkLm9sZFxcXCJdXCIpLnZhbCgpO1xuXHRjb25zdCBuZXdWYWx1ZSA9ICRzZWN1cml0eS5maW5kKFwiW25hbWU9XFxcInBhc3N3b3JkLm5ld1xcXCJdXCIpLnZhbCgpO1xuXHRjb25zdCBuZXdWYWx1ZUNvbmZpcm0gPSAkc2VjdXJpdHkuZmluZChcIltuYW1lPVxcXCJwYXNzd29yZC5jb25maXJtXFxcIl1cIikudmFsKCk7XG5cdC8vIFByZWxpbWluYXJ5IHZhbGlkYXRpb25cblx0aWYgKCFvbGRWYWx1ZSB8fCAhbmV3VmFsdWUgfHwgIW5ld1ZhbHVlQ29uZmlybSkge1xuXHRcdER5bmFtaWNQYWdlLnNob3dOb3RpZmljYXRpb24oXCJBbGwgcGFzc3dvcmQgZmllbGRzIGFyZSByZXF1aXJlZC5cIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChuZXdWYWx1ZSAhPT0gbmV3VmFsdWVDb25maXJtKSB7XG5cdFx0RHluYW1pY1BhZ2Uuc2hvd05vdGlmaWNhdGlvbihcIk5ldyBwYXNzd29yZHMgYXJlIG5vdCB0aGUgc2FtZS5cIik7XG5cdFx0JHNlY3VyaXR5LmZpbmQoXCJbbmFtZT1cXFwicGFzc3dvcmQuY29uZmlybVxcXCJdXCIpLmZvY3VzKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEFQSSBhdXRoIGNhbGxcblx0c2V0dGluZ3NQYWdlLmNoYW5nZVBhc3N3b3JkKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuanMiLCJpbXBvcnQgQVBJIGZyb20gXCIuLi9BUElcIjtcbmltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmUGFnZSBmcm9tIFwiLi4vc3RhZmYvU3RhZmZQYWdlXCI7XG5cbi8qKlxuICogU2V0dGluZ3NQYWdlXG4gKlxuICogRnJvbnQtZW5kIG1hbmFnZW1lbnQgb2YgU2V0dGluZ3MgcGFnZSwgZm9yIGZpbGxpbmcgaW5mb3JtYXRpb25cbiAqIGFuZCBoYW5kbGluZyB1c2VyIGlucHV0LlxuICovXG5jbGFzcyBTZXR0aW5nc1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2FkIGFsbCBmaWVsZHMgYW5kIGNhcmQgZGV0YWlscyBmb3Igc2V0dGluZ3MgcGFnZVxuXHQgKiBiYXNlZCBvbiBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIgaW5mb3JtYXRpb24sXG5cdCAqIHNpbmNlIHRoZSBTZXR0aW5ncyBwYWdlIGlzIHB1cmVseSBwZXJzb25hbC5cblx0ICovXG5cdGFzeW5jIGxvYWREYXRhKCkge1xuXHRcdC8vIEdldCB0aGUgY3VycmVudCBlbXBsb3llZVxuXHRcdGNvbnN0IG1lID0gYXdhaXQgdGhpcy5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIodHJ1ZSk7XG5cblx0XHRsZXQgJHZpZXcgPSAkKFwiW2RhdGEtcGF0aD1cXFwic2V0dGluZ3NcXFwiXSAjbGlzdC12aWV3XCIpO1xuXG5cdFx0Ly8gRmlsbCBtYWluIGZpZWxkc1xuXHRcdE9iamVjdC5lbnRyaWVzKG1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRcdCR2aWV3LmZpbmQoYFtuYW1lPVwic3RhZmYuJHtrZXl9XCJdYCkudmFsKHZhbHVlKTtcblx0XHR9KTtcblxuXHRcdC8vIEZpbGwgY2FyZCBkYXRhIChvbiB0aGUgcmlnaHQpXG5cdFx0bGV0ICRjYXJkID0gJHZpZXcuZmluZChcIi5jYXJkXCIpO1xuXHRcdCRjYXJkLmZpbmQoXCIuY2FyZC1pbWctdG9wXCIpLnByb3AoXCJzcmNcIiwgXCIvcmVzL2F2YXRhci9cIiArIG1lLmVtYWlsKTtcblx0XHQkY2FyZC5maW5kKFwiW2RhdGEtc2x1Zz1cXFwibmFtZVxcXCJdXCIpLnRleHQobWUubmFtZSlcblx0XHRcdFx0LmFwcGVuZCgkKFwiPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCIgZGF0YS1zbHVnPVxcXCJqb2JcXFwiPlwiKS50ZXh0KG1lLmpvYikpO1xuXG5cdFx0Ly8gRmlsbCBpbmRpdmlkdWFsIHBlcm1pc3Npb24gdG9rZW5zIGluIHBlcm1pc3Npb25zIGZpZWxkXG5cdFx0U3RhZmZQYWdlLnNob3dQZXJtaXNzaW9ucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWZmLXBlcm1pc3Npb25zXCIpLCBtZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIGN1cnJlbnQgdXNlcidzIHBhc3N3b3JkXG5cdCAqXG5cdCAqIEBwYXJhbSBvbGRWYWx1ZSBDdXJyZW50IHVzZXIgcGFzc3dvcmQgZm9yIHZhbGlkYXRpbmdcblx0ICogQHBhcmFtIG5ld1ZhbHVlIE5ldyBwYXNzd29yZCB0byBjaGFuZ2UgdG9cblx0ICovXG5cdGNoYW5nZVBhc3N3b3JkKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdEFQSS5jYWxsKFwiL2FwaS9zZXR0aW5ncy9jaGFuZ2VwYXNzd29yZFwiLCBcIlBPU1RcIiwge29sZFZhbHVlLCBuZXdWYWx1ZX0pXG5cdFx0XHRcdC5kb25lKHJlc3BvbnNlID0+IER5bmFtaWNQYWdlLnNob3dOb3RpZmljYXRpb24ocmVzcG9uc2UucmVzcG9uc2VKU09OW1wic3VjY2Vzc1wiXSwgXCJzdWNjZXNzXCIpKVxuXHRcdFx0XHQuZmFpbChyZXNwb25zZSA9PiBEeW5hbWljUGFnZS5zaG93Tm90aWZpY2F0aW9uKHJlc3BvbnNlLnJlc3BvbnNlSlNPTltcImVycm9yXCJdLCBcImRhbmdlclwiKSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9