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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _MetricsPage = __webpack_require__(54);

var _MetricsPage2 = _interopRequireDefault(_MetricsPage);

var _API = __webpack_require__(19);

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metricsPage = void 0,
    api = void 0; /*
                  JS specific to Hardware page, used to handle rudamentary front end interactions.
                  Most front end logic occurs in MetricsPage.
                   */

window.init = function (data) {
	api = window.api = new _API2.default(data);

	metricsPage = window.metricsPage = new _MetricsPage2.default();

	//Setting default response if no result is found in the select/search box
	$('.selectpicker').selectpicker({
		noneResultsText: 'No results match {0}'
	});

	//Handler for changing the selected staff member
	$('#StaffNameSearch').change(function () {
		metricsPage.staffDropdownChange();
	});

	$("[data-rowid]").click(function (e) {
		location.href = location.href.toString().split("#")[0].replace("metrics.html", "staff.html#" + e.currentTarget.dataset.rowid);
	});

	$(function () {
		return metricsPage.hideTableRowDetails();
	});
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DynamicPage2 = __webpack_require__(4);

var _DynamicPage3 = _interopRequireDefault(_DynamicPage2);

var _TicketManager = __webpack_require__(0);

var _TicketManager2 = _interopRequireDefault(_TicketManager);

var _StaffManager = __webpack_require__(1);

var _StaffManager2 = _interopRequireDefault(_StaffManager);

var _ExpertiseTypeManager = __webpack_require__(2);

var _ExpertiseTypeManager2 = _interopRequireDefault(_ExpertiseTypeManager);

var _SoftwareManager = __webpack_require__(6);

var _SoftwareManager2 = _interopRequireDefault(_SoftwareManager);

var _HardwareManager = __webpack_require__(5);

var _HardwareManager2 = _interopRequireDefault(_HardwareManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MetricsPage
 *
 * Manipulates the metrics page /w JQuery using data from
 * various item Managers. 
 */

var MetricsPage = function (_DynamicPage) {
	_inherits(MetricsPage, _DynamicPage);

	function MetricsPage() {
		_classCallCheck(this, MetricsPage);

		//Declearing managers
		var _this = _possibleConstructorReturn(this, (MetricsPage.__proto__ || Object.getPrototypeOf(MetricsPage)).call(this));

		_this.ticketManager = new _TicketManager2.default();
		_this.staffManager = new _StaffManager2.default();
		_this.softwareManager = new _SoftwareManager2.default();
		_this.hardwareManager = new _HardwareManager2.default();
		_this.expertiseTypeManager = new _ExpertiseTypeManager2.default();

		_this.loggedInUser = null;
		_this.pageLoad();
		return _this;
	}

	_createClass(MetricsPage, [{
		key: "pageLoad",
		value: function pageLoad() {
			this.loggedInUser = this.staffManager.currentUser(true);
			var tickets = null;

			if (this.loggedInUser.isAnalyst) {
				//If an analyst is logged in
				//Load all staff members into Staff Drop down box, and display
				//system-wide statistics (using tickets assigned to any operator) 
				this.populateStaffNameSearch();
				tickets = this.ticketManager.tickets;
				this.showStats(true, tickets);
			} else {
				//If not, display the name of the logged in user and force
				//the page to display only data relating to them
				$("#StaffNameSearch").append("<option style='color:grey' value='" + this.loggedInUser.id + "' selected>" + this.loggedInUser.name + "</option>");
				$("#StaffNameSearch").attr("disabled", "true");
				$("#StaffNameSearch").selectpicker('refresh');
				tickets = this.ticketManager.getTicketsAssignedToStaffId(this.loggedInUser.id);
				this.openStaffInfo(this.loggedInUser, tickets);
			}
		}

		//Handles display data in the "Statistics" section

	}, {
		key: "showStats",
		value: function showStats(showingGlobalInfo, tickets) {
			if (showingGlobalInfo) {
				//If user is an Analyst and has not selected a specific staff member to view
				//Display information about Hardware and Software
				$("#HW_SW").attr("style", "");
				var programs = this.softwareManager.programs;
				var noOfSoftware = programs.length;
				var noOfSoftwareWithIssues = programs.filter(function (p) {
					return p._tickets.length > 0;
				}).length;

				var devices = this.hardwareManager.devices;
				var noOfHardware = devices.length;
				var noOfHardwareWithIssues = devices.filter(function (d) {
					return d._tickets.length > 0;
				}).length;

				$("#noOfSoftware").val(noOfSoftware);
				$("#noOfSoftwareWithIssues").val(noOfSoftwareWithIssues);
				$("#noOfDevices").val(noOfHardware);
				$("#noOfDevicesWithIssues").val(noOfHardwareWithIssues);
			} else {
				//Else don't display Hardware/Software information
				$("#HW_SW").attr("style", "display:none");
			}

			$("#totalTicketsAssigned").val(tickets.length); //Number of tickets in the system
			var solvedTickets = tickets.filter(function (t) {
				return t.status.slug == "resolved";
			}); //Number of resolved tickets in the system
			$("#totalTicketsSolved").val(solvedTickets.length);

			var totalTime = 0;
			var totalReplies = 0;
			for (var i = 0; i < tickets.length; i++) {
				totalReplies += tickets[i].comments.length;
				var ticketStatusHistory = this.ticketManager.getTicketStatusesByTicketId(tickets[i].id);
				var resolvedTicketStatus = ticketStatusHistory.filter(function (t) {
					return t._status == 1;
				});

				if (resolvedTicketStatus.length > 0) {
					var ticketCreated = new Date(tickets[i].created_at_real);
					var lastResolved = resolvedTicketStatus[resolvedTicketStatus.length - 1];
					var ticketResolved = new Date(lastResolved.created_at_real);
					var timeDiff = Math.abs(ticketResolved.getTime() - ticketCreated.getTime());
					var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					totalTime += diffDays;
				}
			}

			if (!tickets.length) {
				$("#avgTimeToSolveTicket").val("-");
				$("#avgRepliesPerTicket").val("-"); //If there are no tickets, use this so we don't divide by 0
			} else {
				$("#avgTimeToSolveTicket").val(totalTime / tickets.length);
				$("#avgRepliesPerTicket").val(totalReplies / tickets.length); //Calculates average replies per ticket
			}

			this.createLineGraph(tickets); //Load Backlog Graph
			this.createPieChart(tickets); //Load Problem Type graph
		}

		//This function takes a staff member object, and relevant tickets for that 
		//staff member and appropriately fills in values on the page

	}, {
		key: "openStaffInfo",
		value: function openStaffInfo(staff, tickets) {
			$(".collapsible").css("display", "block");
			$("#name").val(staff.name);
			$("#phone").val(staff.phone);
			$("#role").val(staff.job);
			$("#statsTitle").text("Statistics - " + staff.name);
			$("#ticketTitle").text("Ticket Backlog - " + staff.name);
			this.showStats(false, tickets);
		}

		//Function used to load all staff members in the system in the drop down box.

	}, {
		key: "populateStaffNameSearch",
		value: function populateStaffNameSearch() {
			$("#StaffNameSearch").html("");
			var staffMembers = this.staffManager.staff;
			$("#StaffNameSearch").append("<option>Search...</option>");
			for (var i = 0; i < staffMembers.length; i++) {
				$("#StaffNameSearch").append("<option value='" + staffMembers[i].id + "'>" + staffMembers[i].name + "</option>");
			}
			$("#StaffNameSearch").selectpicker('refresh');
		}

		//Handles a new item is selected in the drop down box.

	}, {
		key: "staffDropdownChange",
		value: function staffDropdownChange() {
			var index = $('#StaffNameSearch')[0].selectedIndex;
			if (index > 0) {
				//Staff Member selected
				var id = Number($('#StaffNameSearch').val());
				var staff = this.staffManager.get(id);
				tickets = this.ticketManager.getTicketsAssignedToStaffId(staff.id);
				this.openStaffInfo(staff, tickets); //Display correct page info for selected staff member
			} else {
				//Default option selected - close staff details
				$(".collapsible").css("display", "none");
				$("#name").val("");
				$("#phone").val("");
				$("#role").val("");
				$("#statsTitle").text("Statistics");
				$("#ticketTitle").text("Ticket Backlog");
				var tickets = this.ticketManager.tickets;
				this.showStats(true, tickets);
			}
		}

		//Responsible for displaying the backlog graph. Takes the paramater "tickets" and uses it calculate values tp display 

	}, {
		key: "createLineGraph",
		value: function createLineGraph(tickets) {
			var now = new Date();
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var months = new Array();
			var currentMonth = now.getMonth();
			for (var i = 0; i < 6; i++) {
				//gets the indexes of the previous 6 months and pushes them to an array
				months.push(currentMonth);
				currentMonth = currentMonth == 0 ? 11 : --currentMonth;
			}
			months.reverse();

			var ticketsOpened = new Array();
			var ticketsUnresolved = new Array();
			//For each of the previous 6 months, we calculate the amount of tickets opened and the corresponding amount of tickets that have been resolved from that month
			for (var j = 0; j < months.length; j++) {
				//Gets all tickets opening in the current month
				var opened = tickets.filter(function (t) {
					return new Date(t.created_at_real).getMonth() == months[j];
				});
				ticketsOpened.push(opened.length);
				//Gets all unresolved tickets that were opened in the current month
				var unresolved = tickets.filter(function (t) {
					return new Date(t.created_at_real).getMonth() == months[j] && t.status.slug != "resolved";
				});
				ticketsUnresolved.push(unresolved.length);
			}

			$('#ticket-backlog').html("<canvas id='ticketBacklog'></canvas>");
			var ctx = document.getElementById("ticketBacklog").getContext('2d');

			var opStatChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: [monthNames[months[0]], monthNames[months[1]], monthNames[months[2]], monthNames[months[3]], monthNames[months[4]], monthNames[months[5]]], //Labels of months
					datasets: [{
						label: '# Tickets Unresolved',
						data: [ticketsUnresolved[0], ticketsUnresolved[1], ticketsUnresolved[2], ticketsUnresolved[3], ticketsUnresolved[4], ticketsUnresolved[5]], //Data of unresolved tickets
						borderColor: 'rgba(255,99,132,1)',
						backgroundColor: 'rgba(255,209,218,0.8)'
					}, {
						label: '# Tickets Opened',
						data: [ticketsOpened[0], ticketsOpened[1], ticketsOpened[2], ticketsOpened[3], ticketsOpened[4], ticketsOpened[5]], //Data of total tickets opened
						borderColor: 'rgba(99,132,255,1)',
						backgroundColor: 'rgba(99,132,255,0.2)'
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
		}
	}, {
		key: "createPieChart",
		value: function createPieChart(tickets) {
			var rootProblemTypes = this.expertiseTypeManager.getRootExpertiseTypes(); //Gets the major/root Expertise types

			var ProblemTypeNames = new Array();
			var ticketsPerProblemType = new Array();
			for (var i = 0; i < rootProblemTypes.length; i++) {
				ProblemTypeNames.push(rootProblemTypes[i].name); //Adds the names of each root Expertise type to an array 

				var ticketCount = new Array();
				for (var j = 0; j < tickets.length; j++) {
					var probTypeChain = this.expertiseTypeManager.getExpertiseTypeChain(tickets[j].expertise_type);
					var rootProblemType = probTypeChain[probTypeChain.length - 1]; //Gets the root problem type for the current ticket.
					if (rootProblemTypes[i].id == rootProblemType.id) {
						//If the current ticket's root problem type and the currently selected problem type are the same
						//We add the ticket to an array and remove it from tickets (so we no longer have to search it each iteration. Helps to speed things up)	
						ticketCount.push(tickets[j]);
						tickets.splice(j, 1);
						--j;
					}
				}

				ticketsPerProblemType.push(ticketCount.length);
			}

			$('#problem-type-card').html("<canvas id='problemTypeSolved'></canvas>");
			var ctx = document.getElementById("problemTypeSolved").getContext('2d');
			var probTypeChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: ticketsPerProblemType, //Data for the pie chart
						backgroundColor: ['rgba(255,99,99,1)', 'rgba(99,255,99,1)', 'rgba(99,99,255,1)', 'rgba(255,99,255,1)', 'rgba(255,255,99,1)', 'rgba(99,255,255,1)', 'rgba(255,200,99,1)', 'rgba(200,255,150,1)']
					}],
					labels: ProblemTypeNames //Labels for the pie chart
				},
				options: {
					legend: {
						position: 'right'
					}
				}
			});
		}
	}]);

	return MetricsPage;
}(_DynamicPage3.default);

exports.default = MetricsPage;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL21ldHJpY3MvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvbWV0cmljcy9NZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJUaWNrZXRNYW5hZ2VyIiwiZXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJ3aW5kb3ciLCJjYWxscyIsImFwaSIsIm1hcCIsImUiLCJ0aWNrZXRzIiwiY29tbWVudHMiLCJzdGF0dXNlcyIsInRpY2tldFN0YXR1c2VzIiwiY2FsbElkIiwiZmluZCIsImNhbGwiLCJpZCIsInRpY2tldElkIiwiZmlsdGVyIiwiX3RpY2tldHMiLCJpbmRleE9mIiwiY29tbWVudCIsIl9jYWxsIiwic3RhdHVzSWQiLCJzdGF0dXMiLCJzdGF0dXNTbHVnIiwic2x1ZyIsInRpY2tldCIsInRpY2tldElkcyIsInN0YXR1c1NsdWdzIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiX2NhbGxzIiwic3RhZmZJZCIsImV4cGVydGlzZVR5cGVTdGFmZiIsIl9hc3NpZ25lZF90b19vcGVyYXRvciIsIl9leHBlcnRpc2VfdHlwZV9zdGFmZiIsIl9zdGFmZiIsInN0YWZmSWRzIiwicmVzdWx0IiwiZm9yRWFjaCIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCIsInRpY2tldFBhZ2UiLCJzdGFmZk1hbmFnZXIiLCJjdXJyZW50VXNlciIsImFzc2lnbmVkX3RvX29wZXJhdG9yIiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJzdGFmZiIsImdldFRpY2tldEFzc2lnbmVkVG8iLCJ0aWNrZXRTdGF0dXNJZCIsInRpY2tldFN0YXR1cyIsIl90aWNrZXQiLCJjb21tZW50SWQiLCJpZHMiLCJleHBlcnRpc2VUeXBlSWQiLCJleHBlcnRpc2VUeXBlcyIsImdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiY29uY2F0IiwiZ2V0VGlja2V0c1dpdGhJZEluIiwicXVlcnkiLCJwcm9wZXJ0aWVzIiwiU3RhZmZNYW5hZ2VyIiwiZGVwYXJ0bWVudHMiLCJlbXBsb3llZSIsInBlcm1pc3Npb24iLCJ2YWx1ZSIsImFjY2VzcyIsImFzRW1wbG95ZWUiLCJnZXQiLCJleHBlcnRpc2VUeXBlIiwiX3NwZWNpYWxpc21zIiwib3V0cHV0IiwicHVzaCIsIkV4cGVydGlzZVR5cGVNYW5hZ2VyIiwiX3BhcmVudCIsImV4cGVydGlzZVR5cGVJZHMiLCJfZXhwZXJ0aXNlX3R5cGUiLCJleHBlcnRpc2VUeXBlUGFyZW50IiwicGFyZW50IiwiZXhwZXJ0aXNlVHlwZVN0YWZmSWQiLCJNYW5hZ2VyIiwiZWxlbWVudHMiLCJ0b0xvd2VyQ2FzZSIsInNvbWUiLCJTdHJpbmciLCJlbCIsInByb3AiLCJpbmNsdWRlcyIsIkR5bmFtaWNQYWdlIiwic2VjdGlvblNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsIm5hdlNlbGVjdG9yIiwiZGV0YWlsU2VsZWN0b3IiLCJzcGxpdCIsImh0bWwiLCIkIiwibmF2VGV4dCIsIiR0YWJsZSIsInJlc3VsdHNDb3VudCIsImhhc0NsYXNzIiwiJHNwbGFzaFNjcmVlbiIsIiRzaG93IiwiJGhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmlyc3QiLCJ0ZXh0IiwicmVwbGFjZSIsImNsb3Nlc3QiLCJ1bmRlZmluZWQiLCJvYmplY3QiLCIkdGFibGVTZWN0aW9uIiwiJHRhYmxlSGVhZCIsIiR0YWJsZUJvZHkiLCIkbmV3Um93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJkYXRhc2V0Iiwicm93aWQiLCJ0b2dnbGVDbGFzcyIsInBhcnNlSW50IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyaW5nIiwiZWFjaCIsInRkIiwiaW5uZXJIVE1MIiwiT2JqZWN0IiwicmVzb2x2ZSIsImFwcGVuZCIsImVtcHR5Iiwic2libGluZ3MiLCJ1bndyYXAiLCJjbGljayIsImhpZGVUYWJsZVJvd0RldGFpbHMiLCJ3cmFwIiwiJHNlbGVjdCIsImRlZmF1bHRUZXh0IiwiZGVmYXVsdE9wdGlvbklkIiwicHJvcGVydHkiLCJnZXRBZGRpdGlvbmFsRGV0YWlscyIsIm9wdGlvbiIsIk9wdGlvbiIsImRpc2FibGVkIiwic2VsZWN0cGlja2VyIiwib2JqZWN0Q2FsbGJhY2siLCJzZWFyY2hLZXlzIiwicGFnZSIsImNsZWFyVGFibGUiLCJrZXkiLCJSZWdFeHAiLCJ2YWwiLCJhcHBlbmRUYWJsZVJvdyIsInVwZGF0ZVNwbGFzaFNjcmVlbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZHVyYXRpb24iLCJyZW1vdmUiLCJtc2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiSGFyZHdhcmVNYW5hZ2VyIiwiZGV2aWNlcyIsIlNldCIsInQiLCJkZXZpY2VzQnlUeXBlIiwiZGV2aWNlIiwibWFrZSIsInNlcmlhbE51bWJlciIsImQiLCJzZXJpYWxfbm8iLCJTb2Z0d2FyZU1hbmFnZXIiLCJwcm9ncmFtcyIsInByb2dyYW0iLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJ0b29sdGlwIiwiZGF0ZXRpbWVwaWNrZXIiLCJuZXdWYWx1ZSIsIiRtb2RhbCIsIm1vZGFsIiwiYXR0ciIsIm5vdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29sbGFwc2UiLCJpc1Nob3ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRJdGVtVG9QaWNrZXIiLCJwaWNrZXJFbGVtZW50IiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0IiwiQ29tbWVudCIsImF1dGhvciIsImF1dGhvcl9pZCIsImNhbGxfaWQiLCJ0aWNrZXRfaWQiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdF9odW1hbiIsImNyZWF0ZWRBdFJlYWwiLCJjcmVhdGVkX2F0IiwiY3JlYXRlZF9hdF9yZWFsIiwiX2F1dGhvciIsImdldENhbGwiLCJnZXRUaWNrZXQiLCJDYWxsIiwidGltZSIsImNhbGxlciIsImNhbGxlcl9pZCIsIm9wZXJhdG9yIiwib3BlcmF0b3JfaWQiLCJfY2FsbGVyIiwiX29wZXJhdG9yIiwiZ2V0VGlja2V0c0Zyb21DYWxsIiwiRW1wbG95ZWUiLCJlbWFpbCIsImpvYiIsImpvYl90aXRsZSIsImRlcGFydG1lbnQiLCJwaG9uZSIsInBob25lX251bWJlciIsImV4cGVydGlzZV90eXBlcyIsInNwZWNpYWxpc21zIiwic3BlY2lhbGlzdCIsImFuYWx5c3QiLCJhZG1pbiIsIl9kZXBhcnRtZW50IiwicmVhZCIsInJlYWRvbmx5IiwiZ2V0RXhwZXJ0aXNlVHlwZXMiLCJkYXRhIiwiZGVwYXJ0bWVudF9pZCIsIkV4cGVydGlzZVR5cGUiLCJwYXJlbnRfaWQiLCJnZXRFeHBlcnRpc2VUeXBlIiwiX2NoaWxkcmVuIiwiRXhwZXJ0aXNlVHlwZVN0YWZmIiwic3RhZmZfaWQiLCJleHBlcnRpc2VfdHlwZV9pZCIsImV4cGVydGlzZV90eXBlIiwiU3RhdHVzIiwiZ2V0VGlja2V0c1dpdGhTbHVnIiwiVGlja2V0Iiwic3RhdHVzSGlzdG9yeSIsInN0YXR1c19oaXN0b3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvbHV0aW9uIiwic29sdXRpb25faWQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0X2h1bWFuIiwidXBkYXRlZEF0UmVhbCIsInVwZGF0ZWRfYXQiLCJleHBlcnRpc2VfdHlwZV9zdGFmZl9pZCIsImFzc2lnbmVkVG9PcGVyYXRvcklkIiwiYXNzaWduZWRfdG9fb3BlcmF0b3JfaWQiLCJ1cGRhdGVkX2F0X3JlYWwiLCJnZXRDYWxsc0J5VGlja2V0SWQiLCJnZXRTdGF0dXMiLCJfc3RhdHVzIiwiZ2V0U3RhdHVzSGlzdG9yeSIsIl9zdGF0dXNfaGlzdG9yeSIsImdldERldmljZXMiLCJfZGV2aWNlcyIsImdldFByb2dyYW1zIiwiX3Byb2dyYW1zIiwiZ2V0Q29tbWVudHNCeUlkcyIsIl9jb21tZW50cyIsImdldENvbW1lbnQiLCJfc29sdXRpb24iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmYiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJEZXZpY2UiLCJnZXRUaWNrZXRzQnlUaWNrZXRJRHMiLCJBcnJheSIsIlByb2dyYW0iLCJvcGVyYXRpbmdfc3lzdGVtIiwiZXhwaXJ5X2RhdGUiLCJUaWNrZXRTdGF0dXMiLCJzdGF0dXNfaWQiLCJBUEkiLCJ0aWNrZXRfc3RhdHVzZXMiLCJtZXRyaWNzUGFnZSIsImluaXQiLCJub25lUmVzdWx0c1RleHQiLCJjaGFuZ2UiLCJzdGFmZkRyb3Bkb3duQ2hhbmdlIiwiaHJlZiIsInRvU3RyaW5nIiwiTWV0cmljc1BhZ2UiLCJ0aWNrZXRNYW5hZ2VyIiwic29mdHdhcmVNYW5hZ2VyIiwiaGFyZHdhcmVNYW5hZ2VyIiwibG9nZ2VkSW5Vc2VyIiwicGFnZUxvYWQiLCJpc0FuYWx5c3QiLCJwb3B1bGF0ZVN0YWZmTmFtZVNlYXJjaCIsInNob3dTdGF0cyIsIm9wZW5TdGFmZkluZm8iLCJzaG93aW5nR2xvYmFsSW5mbyIsIm5vT2ZTb2Z0d2FyZSIsIm5vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXMiLCJwIiwibm9PZkhhcmR3YXJlIiwibm9PZkhhcmR3YXJlV2l0aElzc3VlcyIsInNvbHZlZFRpY2tldHMiLCJ0b3RhbFRpbWUiLCJ0b3RhbFJlcGxpZXMiLCJ0aWNrZXRTdGF0dXNIaXN0b3J5IiwiZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkIiwicmVzb2x2ZWRUaWNrZXRTdGF0dXMiLCJ0aWNrZXRDcmVhdGVkIiwibGFzdFJlc29sdmVkIiwidGlja2V0UmVzb2x2ZWQiLCJ0aW1lRGlmZiIsImFicyIsImdldFRpbWUiLCJkaWZmRGF5cyIsImNlaWwiLCJjcmVhdGVMaW5lR3JhcGgiLCJjcmVhdGVQaWVDaGFydCIsImNzcyIsInN0YWZmTWVtYmVycyIsImluZGV4Iiwic2VsZWN0ZWRJbmRleCIsIk51bWJlciIsIm5vdyIsIm1vbnRoTmFtZXMiLCJtb250aHMiLCJjdXJyZW50TW9udGgiLCJyZXZlcnNlIiwidGlja2V0c09wZW5lZCIsInRpY2tldHNVbnJlc29sdmVkIiwiaiIsIm9wZW5lZCIsInVucmVzb2x2ZWQiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJvcFN0YXRDaGFydCIsIkNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwicm9vdFByb2JsZW1UeXBlcyIsImdldFJvb3RFeHBlcnRpc2VUeXBlcyIsIlByb2JsZW1UeXBlTmFtZXMiLCJ0aWNrZXRzUGVyUHJvYmxlbVR5cGUiLCJ0aWNrZXRDb3VudCIsInByb2JUeXBlQ2hhaW4iLCJnZXRFeHBlcnRpc2VUeXBlQ2hhaW4iLCJyb290UHJvYmxlbVR5cGUiLCJwcm9iVHlwZUNoYXJ0IiwibGVnZW5kIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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Z2VzL21ldHJpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IENhbGwgZnJvbSBcIi4vQ2FsbFwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9TdGF0dXNcIjtcbmltcG9ydCBUaWNrZXQgZnJvbSBcIi4vVGlja2V0XCI7XG5pbXBvcnQgVGlja2V0U3RhdHVzIGZyb20gXCIuL1RpY2tldFN0YXR1c1wiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0TWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGF0dXNlc1xuICogYW5kIHRpY2tldHMgYW5kIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBUaWNrZXRNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0TWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IHdpbmRvdy5leHBlcnRpc2VUeXBlTWFuYWdlciB8fCBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY2FsbHMgICAgPSBhcGkuY2FsbHMubWFwKGUgPT4gbmV3IENhbGwoZSkpO1xuXHRcdHRoaXMudGlja2V0cyAgPSBhcGkudGlja2V0cy5tYXAoZSA9PiBuZXcgVGlja2V0KGUpKTtcblx0XHR0aGlzLmNvbW1lbnRzID0gYXBpLmNvbW1lbnRzLm1hcChlID0+IG5ldyBDb21tZW50KGUpKTtcblx0XHR0aGlzLnN0YXR1c2VzID0gYXBpLnN0YXR1c2VzLm1hcChlID0+IG5ldyBTdGF0dXMoZSkpO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgPSBhcGkudGlja2V0U3RhdHVzZXMubWFwKGUgPT4gbmV3IFRpY2tldFN0YXR1cyhlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDYWxsfSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ2FsbCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maW5kKGNhbGwgPT4gY2FsbC5pZCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbHMgcmVmZXJlbmNpbmcgYSBzcGVjaWZpYyB0aWNrZXRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDYWxsc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maWx0ZXIoY2FsbCA9PiBjYWxsLl90aWNrZXRzLmluZGV4T2YodGlja2V0SWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbm90ZXMgZm9yIGEgY2FsbFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGxOb3Rlc0J5Q2FsbElkKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50Ll9jYWxsID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBJRFxuXHQgKi9cblx0Z2V0U3RhdHVzKHN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLmlkID09PSBzdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBzbHVnXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggc3RhdHVzU2x1Z1xuXHQgKi9cblx0Z2V0U3RhdHVzQnlTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1ZykgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldH0gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldCB3aXRoIHRpY2tldElkXG5cdCAqL1xuXHRnZXRUaWNrZXQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbmQodGlja2V0ID0+IHRpY2tldC5pZCA9PT0gdGlja2V0SWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXRJZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1Zyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gc3RhdHVzZXNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gc3RhdHVzU2x1Z3MgQXJyYXkgb2YgU3RyaW5ncydzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gU3RhdHVzJ3Ncblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1Z0luKHN0YXR1c1NsdWdzKSB7XG5cdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldHMuc2xpY2UoMCk7XG5cblx0XHRmb3IgKGxldCBpID0gdGlja2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKHN0YXR1c1NsdWdzLmluZGV4T2YodGlja2V0c1tpXS5zdGF0dXMuc2x1ZykgPT09IC0xKSB0aWNrZXRzLnNwbGljZShpLCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGlja2V0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0cyByZWZlcmVuY2VkIGluIGEgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgcmVmZXJlbmNlZCBpbiBhIENhbGxcblx0ICovXG5cdGdldFRpY2tldHNGcm9tQ2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0Ll9jYWxscy5pbmRleE9mKGNhbGxJZCkgPiAtMSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQoc3RhZmZJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWQgfHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWRcblx0XHR9KTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoc3RhZmZJZHMpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0XHR0aWNrZXRzICAgICAgICAgICAgPSB0aGlzLnRpY2tldHMsXG5cdFx0XHRyZXN1bHQgICAgICAgICAgICAgPSB7fTtcblxuXHRcdHN0YWZmSWRzLmZvckVhY2goc3RhZmZJZCA9PiB7XG5cdFx0XHRyZXN1bHRbc3RhZmZJZF0gPSB0aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZFxuXHRcdFx0XHRcdFx0fHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRNeVRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3BlcmF0b3Igb3Igc3BlY2lhbGlzdCB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvLlxuXHQgKlxuXHQgKiBJZiBhbiBvcGVyYXRvciBpcyBub3QgYXNzaWduZWQsIHRoZW4gdGhlIEV4cGVydGlzZVR5cGVTdGFmZiB3aWxsXG5cdCAqIGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7RW1wbG95ZWV9IEVtcGxveWVlIHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSB7XG5cdFx0aWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHJldHVybiB0aWNrZXQuYXNzaWduZWRfdG9fb3BlcmF0b3I7XG5cblx0XHRyZXR1cm4gdGlja2V0LmV4cGVydGlzZV90eXBlX3N0YWZmLnN0YWZmOyAvLyBvbmx5IHVzZSBleHBlcnRpc2VfdHlwZV9zdGFmZiBpZiB0aGVyZSBpcyBubyBhc3NpZ25lZCBvcGVyYXRvclxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRpY2tldCBpcyBhc3NpZ25lZCB0byB0aGUgY3VycmVudGx5IGxvZ2dlZCBpblxuXHQgKiB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IElmIGFzc2lnbmVkIHRvIHNlbGZcblx0ICovXG5cdGlzVGlja2V0QXNzaWduZWRUb1NlbGYodGlja2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpID09PSB0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpOyBcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXMgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRTdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldF9zdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0U3RhdHVzIHdpdGggdGlja2V0U3RhdHVzSWRcblx0ICovXG5cdGdldFRpY2tldFN0YXR1cyh0aWNrZXRTdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbmQodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5pZCA9PT0gdGlja2V0U3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzZXMgZm9yIGEgdGlja2V0XG5cdCAqXG5cdCAqIEBwXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maWx0ZXIodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5fdGlja2V0ID09PSB0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjb21tZW50IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY29tbWVudElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY29tbWVudCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNvbW1lbnRJZFxuXHQgKi9cblx0Z2V0Q29tbWVudChjb21tZW50SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gY29tbWVudElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvbW1lbnRzXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBDb21tZW50IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q29tbWVudHNCeUlkcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBpZHMuaW5kZXhPZihjb21tZW50LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHRpY2tldHMgYXNzb2NpYXRlZCB3aXRoIGFuIGV4cGVydGlzZSB0eXBlIHN0YWZmXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlU3RhZmZJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHN0YWZmIHRvIGZpbmQgdGlja2V0cyBmb3Jcblx0ICogQHJldHVybnMge0FycmF5fSBBbGwgbWF0Y2hpbmcgdGlja2V0c1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdHRpY2tldElkcyAgICAgID0gW10uY29uY2F0KC4uLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IGUudGlja2V0cykpOyAvLyBtb3ZlIGFsbCBvZiBleHBlcnRpc2VUeXBlc1tpXS50aWNrZXRzIGludG8gYSBzaW5nbGUgYXJyYXlcblxuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCB0aWNrZXRzIG9uIGEgcHJvcGVydHkgZm9yIGEgcHJvdmlkZWQgc2VhcmNoIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHtBcnJheX0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBzYXRpc2Z5aW5nIHRoZSBzZWFyY2ggY29uZGl0aW9uXG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMudGlja2V0cywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb2xsZWN0aW9uIG9mIHRpY2tldHMgYnkgdGhlaXIgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGlkcyBUaGUgSURzIG9mIHRoZSByZXF1ZXN0ZWQgdGlja2V0cyBcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldFRpY2tldHNCeVRpY2tldElEcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gaWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRW1wbG95ZWUgZnJvbSBcIi4vRW1wbG95ZWVcIjtcblxuLyoqXG4gKiBTdGFmZk1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhZmZcbiAqIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBTdGFmZk1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhZmYgICAgICAgPSBhcGkuc3RhZmYubWFwKGUgPT4gbmV3IEVtcGxveWVlKGUpKTtcblx0XHR0aGlzLmRlcGFydG1lbnRzID0gYXBpLmRlcGFydG1lbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZW1wbG95ZWUgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBlbXBsb3llZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0VtcGxveWVlfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmluZChlbXBsb3llZSA9PiBlbXBsb3llZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBlbXBsb3llZXMgd2l0aCBhIHNwZWNpZmljIHZhbHVlIG9mIGEgcGVybWlzc2lvblxuXHQgKlxuXHQgKiBAcGFyYW0gcGVybWlzc2lvbiBUaGUgcGVybWlzc2lvbiB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIHBlcm1pc3Npb24gKHRydWUvZmFsc2UpIGZvciB3aGV0aGVyIHRoZSBwZXJtaXNzaW9uIGlzIGdyYW50ZWRcblx0ICovXG5cdGdldEVtcGxveWVlc1dpdGhQZXJtaXNzaW9uKHBlcm1pc3Npb24sIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmlsdGVyKGVtcGxveWVlID0+IGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSA9PSB2YWx1ZSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKlxuXHQgKiBAcGFyYW0gYXNFbXBsb3llZSBtZXRob2QgcmV0dXJucyBJRCBieSBkZWZhdWx0IG9yIEVtcGxveWVlIGlmIHRydXRoeVxuXHQgKi9cblx0Y3VycmVudFVzZXIoYXNFbXBsb3llZSA9IGZhbHNlKSB7XG5cdFx0bGV0IGlkID0gMTsgLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBXUFxuXG5cdFx0Ly8gR2V0IEVtcGxveWVlIHdpdGggSURcblx0XHRpZiAoYXNFbXBsb3llZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzcGVjaWFsaXN0cyB3aG8gc3BlY2lhbGlzZSBpbiBhIGNlcnRhaW4gcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBmaW5kIGVtcGxveWVlcyBmb3Jcblx0ICovXG5cdGdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGUpIHtcblx0XHRsZXQgc3RhZmYgID0gdGhpcy5zdGFmZixcblx0XHQgICAgZmlsdGVyID0gaWQgPT4gZW1wbG95ZWUgPT4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoaWQpID4gLTE7XG5cblx0XHRpZiAodHlwZW9mIGV4cGVydGlzZVR5cGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdGxldCBvdXRwdXQgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaWQgb2YgZXhwZXJ0aXNlVHlwZSkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdGFmZi5maWx0ZXIoZmlsdGVyKGlkKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RhZmYuZmlsdGVyKGZpbHRlcihleHBlcnRpc2VUeXBlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgZW1wbG95ZWUgaGFzIHRoZSBwYXNzZWQgcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gaW5zcGVjdFxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gbG9vayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGVtcGxveWVlIGhhcyB0aGUgcHJvYmxlbSB0eXBlIGFzIGEgc3BlY2lhbGlzbVxuXHQgKi9cblx0aGFzU3BlY2lhbGlzbShlbXBsb3llZSwgZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGV4cGVydGlzZVR5cGVJZCkgPiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggYWxsIGVtcGxveWVlcyBmb3IgdGhlIGdpdmVuIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybnMgQWxsIG1hdGNoaW5nIHJlc3VsdHMgdG8gdGhlIHF1ZXJ5XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuc3RhZmYsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3N0YWZmL1N0YWZmTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZSBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZVN0YWZmIGZyb20gXCIuL0V4cGVydGlzZVR5cGVTdGFmZlwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGV4cGVydGlzZSB0eXBlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGFwaS5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZShlKSk7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBhcGkuZXhwZXJ0aXNlVHlwZVN0YWZmLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlU3RhZmYoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhbGwgRXhwZXJ0aXNlVHlwZSdzIHdpdGggbm8gcGFyZW50IChpbiB0aGUgZmlyc3QgY29sdW1uKVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdGdldFJvb3RFeHBlcnRpc2VUeXBlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLl9wYXJlbnQgPT0gbnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maW5kKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5pZCA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgRXhwZXJ0aXNlVHlwZXMgd2l0aCBJRHMgZnJvbSBhbiBBcnJheSBvZiBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gZXhwZXJ0aXNlVHlwZUlkcyBBcnJheSBvZiBJbnRlZ2VycyByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZCdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlcyBzYXRpc2Z5aW5nIHRoZSBjb25kaXRpb25cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGVJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlcy5maWx0ZXIoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlSWRzLmluZGV4T2YoZXhwZXJ0aXNlVHlwZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZS5pZFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maWx0ZXIoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9yZGVyZWQgYXJyYXkgb2YgcGFyZW50cyBvZiBhbiBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXhwZXJ0aXNlVHlwZX0gZXhwZXJ0aXNlVHlwZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlIHRvIGZpbmQgcGFyZW50cyBmcm9tXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBFeHBlcnRpc2VUeXBlIHBhcmVudHMsIGFuZCB0aGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZUNoYWluKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRleHBlcnRpc2VUeXBlcyAgICAgID0gW2V4cGVydGlzZVR5cGVQYXJlbnRdO1xuXG5cdFx0d2hpbGUgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0ZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGVQYXJlbnQucGFyZW50O1xuXG5cdFx0XHRpZiAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdGV4cGVydGlzZVR5cGVzLnB1c2goZXhwZXJ0aXNlVHlwZVBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV4cGVydGlzZVR5cGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiByZWNvcmQsIHdpdGggYW4gZXhhY3Rcblx0ICogRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiBhbmQgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSBJRCBwYWlyXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZlxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9IG51bGwsIG9yIHRoZSByZWNvcmQgZGVzaXJlZFxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlTdGFmZklkKGV4cGVydGlzZVR5cGVJZCwgc3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmID09PSBzdGFmZklkICYmIGV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIGJ5IElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5pZFxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLmlkID09PSBleHBlcnRpc2VUeXBlU3RhZmZJZCkgfHwgbnVsbDtcblx0fVxuXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5leHBlcnRpc2VUeXBlcywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlci5qcyIsIi8qKlxuICogTWFuYWdlclxuICpcbiAqIEFic3RyYWN0IGNsYXNzIGV4dGVuZGVkIGJ5IGFsbCBtYW5hZ2VycyxcbiAqIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBtYXkgYmUgdXNlZnVsIHRvIHRoZSBtYW5hZ2Vycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZWFyY2ggYXJyYXkgb2YgZWxlbWVudHMgZm9yIHF1ZXJ5IGluIGdpdmVuIHByb3BlcnR5IG5hbWVzXG5cdCAqIFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBzZWFyY2hlZCB0aHJvdWdoXG5cdCAqIEBwYXJhbSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICovXG5cdHNlYXJjaChlbGVtZW50cyA9IFtdLCBxdWVyeSA9IFwiXCIsIHByb3BlcnRpZXMgPSBbXSkge1xuXHRcdHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTsgLy8gTm9ybWFsaXNlIHF1ZXJ5IChhbmQgcHJvcGVydGllcyBpbmRpdmlkdWFsbHkgbGF0ZXIpXG5cblx0XHRyZXR1cm4gZWxlbWVudHMuZmlsdGVyKGVsID0+IHsgLy8gR2V0IGFsbCBlbGVtZW50c1xuXHRcdFx0cmV0dXJuIHByb3BlcnRpZXMuc29tZShwcm9wID0+IHsgLy8gQ2hlY2sgcHJvcGVydGllcyB1bnRpbCBtYXRjaCBpcyBmb3VuZFxuXHRcdFx0XHRpZiAoU3RyaW5nKGVsW3Byb3BdKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgcmV0dXJuIHRydWU7IC8vIERldGVybWluZSBpZiBwcm9wZXJ0eSBpcyBhIG1hdGNoIGZvciBxdWVyeVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwiLyoqXG4gKiBEeW5hbWljUGFnZVxuICpcbiAqIEV4dGVuZGVkIGJ5IGV2ZXJ5IHBhZ2UsIGUuZy4gVGlja2V0UGFnZS5cbiAqIENvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IGFyZSByZXBlYXRlZCBvZnRlbiBhbW9uZ1xuICogcGFnZXMsIHN1Y2ggYXMgdXBkYXRpbmcgdGFibGVzIG9yIHVwZGF0aW5nIHRoZSBuYXZiYXJcbiAqL1xuY2xhc3MgRHluYW1pY1BhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgcGFnZSB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3JzXG5cdCAqIHRvIGRlZmluZSB0aGUgYm91bmRzIG9mIHRoZSBwYWdlLCBpbiBjYXNlcyB3aGVyZSB0aGlzIER5bmFtaWNQYWdlXG5cdCAqIGlzIG5vdCB0aGUgb25seSBwYWdlIG9uIHRoZSBzY3JlZW4sIHN1Y2ggYXMgaWYgYSBwYWdlIGlzIGJlaW5nXG5cdCAqIGRpc3BsYXllZCBpbiBhIG1vZGFsLlxuXHQgKlxuXHQgKiBOb3QgcHJvdmlkaW5nIGFueSBzZWxlY3RvcnMgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoZVxuXHQgKiBtYWluIHNlbGVjdG9ycyBmb3IgdGhlIGVudGlyZSBzY3JlZW4sIHN1Y2ggdGhhdFxuXHQgKiB0aGlzIHBhZ2UgYmVjb21lcyB0aGUgbWFpbiBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHNlY3Rpb25TZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmluZyB0YWJsZSB2aWV3XG5cdCAqIEBwYXJhbSB0YWJsZVNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGFibGUgd2l0aGluIHByZXZpb3VzIHNlY3Rpb25cblx0ICogQHBhcmFtIG5hdlNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgbmF2aWdhdGlvbiBiYXIgc2hvd24gYXQgdG9wIG9mIHNlY3Rpb25cblx0ICogQHBhcmFtIGRldGFpbFNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3Igc2luZ2xlIHZpZXcgZGV0YWlsIHNob3duIGZvciBhbiBpbmRpdmlkdWFsIHJvd1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNlY3Rpb25TZWxlY3RvciA9IFwiI2xpc3Qtdmlld1wiLFxuXHRcdHRhYmxlU2VsZWN0b3IgPSBcIiN0YWJsZS1zZWN0aW9uXCIsXG5cdFx0bmF2U2VsZWN0b3IsXG5cdFx0ZGV0YWlsU2VsZWN0b3Jcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5zZWN0aW9uU2VsZWN0b3IgPSBzZWN0aW9uU2VsZWN0b3I7XG5cdFx0dGhpcy50YWJsZVNlbGVjdG9yID0gdGFibGVTZWxlY3Rvcjtcblx0XHQvLyBTZXQgbmF2aWdhdGlvbiBzZWxlY3RvciB0byBmaXJzdCBjb21wb25lbnQgb2Ygc2VjdGlvbiBzZWxlY3RvciB3aXRoIOKAmC1uYXbigJkgYXBwZW5kZWQsIG90aGVyd2lzZSBkZWZhdWx0IENTUyBzZWxlY3RvclxuXHRcdHRoaXMubmF2U2VsZWN0b3IgPSBuYXZTZWxlY3RvciA/IG5hdlNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItbmF2XCIgOiBcIi5zaWRlLW5hdi1iYXItbmVzdGVkXCIpO1xuXHRcdHRoaXMuZGV0YWlsU2VsZWN0b3IgPSBkZXRhaWxTZWxlY3RvciA/IGRldGFpbFNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItZGV0YWlsXCIgOiBcIiNzaW5nbGUtdmlld1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpdGxlIGJhciBvZiB0aGUgc2luZ2xlIHZpZXcgdG8gdGhlIGdpdmVuIHN0cmluZ1xuXHQgKiBDQVVUSU9OOiBEb2VzIG5vdCBwZXJmb3JtIGVzY2FwaW5nIG9mIGlucHV0IHN0cmluZywgZG8gbm90IHBhc3Ncblx0ICogdXNlciBjb250ZW50IHRvIHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0gaHRtbCBIVE1MIHRvIHNldCB0aGUgc2luZ2xlIHZpZXcgdGl0bGUgdG9cblx0ICovXG5cdHVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIoaHRtbCkge1xuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS5odG1sKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBcIkxvYWRpbmfigKZcIiBzcGxhc2ggc2NyZWVuIGlmIGl0J3Mgc2hvd25cblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBcIk5vIFJlc3VsdHPigKZcIiBzcGxhc2ggc2NyZWVuXG5cdCAqIHNob3VsZCBiZSBzaG93biBvciBub3QuXG5cdCAqXG5cdCAqIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHVzaW5nIFwiYXBwZW5kVGFibGVcIlxuXHQgKi9cblx0dXBkYXRlU3BsYXNoU2NyZWVuKG5hdlRleHQgPSBudWxsKSB7XG5cdFx0Ly8gR2V0IHRhYmxlIGVsZW1lbnQgdG8gaW5zcGVjdCBjb250ZW50c1xuXHRcdHZhciAkdGFibGUgPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0XHRcdC8vIEdldCBudW1iZXIgb2YgcmVzdWx0cyB3aXRoaW4gdGFibGUgY3VycmVudGx5IGJlaW5nIHNob3duXG5cdFx0XHRcdC8vIFRoaXMgaXMgbm90IGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUgSFRNTFxuXHRcdFx0XHQvLyBzaW5jZSBzb21lIHRhYmxlIHJvd3MgbWF5IGJlIGhpZGRlbiwgd2hpY2ggbmVlZCB0byBiZVxuXHRcdFx0XHQvLyBkaXNjb3VudGVkIGZyb20gdGhlIHRvdGFsIGNvdW50LlxuXHRcdCAgICByZXN1bHRzQ291bnQgPSAkdGFibGUuZmluZCgndGJvZHkgdHInKS5maWx0ZXIoKGksIGVsKSA9PiAhJChlbCkuaGFzQ2xhc3MoXCJyb3ctaGlkZGVuXCIpKS5sZW5ndGgsXG5cdFx0XHRcdC8vIEdldCBzcGxhc2ggc2NyZWVuIGVsZW1lbnQgd2hpY2ggbWF5IGJlIGJlaW5nIHNob3duIGluc3RlYWQgb2YgdGFibGVcblx0XHQgICAgJHNwbGFzaFNjcmVlbiA9ICQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJyk7XG5cblx0XHQvLyBEZXBlbmRpbmcgb24gd2hldGhlciB0aGVyZSBhcmUgcmVzdWx0cywgdGhlIHNwbGFzaCBzY3JlZW4gb3IgdGFibGUgbmVlZHMgdG8gYmUgc2hvd25cblx0XHQvLyBhbmQgdGhlIG90aGVyIHN3YXBwZWQgb3V0IHVzaW5nIENTU1xuXHRcdHZhciBbJHNob3csICRoaWRlXSA9IHJlc3VsdHNDb3VudCA/IFskdGFibGUsICRzcGxhc2hTY3JlZW5dIDogWyRzcGxhc2hTY3JlZW4sICR0YWJsZV07XG5cdFx0JGhpZGUuYWRkQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cdFx0JHNob3cucmVtb3ZlQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cblx0XHQvLyBUaGUgbWFpbiB0b3AgYmFyIGZvciB0aGUgbGlzdCB2aWV3IGNvbnRhaW5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgc2hvd24gaW4gdGhlIHRhYmxlXG5cdFx0aWYgKCFuYXZUZXh0KSB7XG5cdFx0XHQvLyBTZXQgbmF2YmFyIHRleHQgYXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRhYmxlIHRoZW4gYXBwZW5kIGN1cnJlbnRseSBzZWxlY3RlZCBmaWx0ZXJcblx0XHRcdG5hdlRleHQgPSByZXN1bHRzQ291bnQgKyBcIiBcIiArICQodGhpcy5uYXZTZWxlY3RvcikuZmluZChcImxpLmFjdGl2ZVwiKS5maXJzdCgpLnRleHQoKS5yZXBsYWNlKFwiQWxsIFwiLCBcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBJZiB1bmFibGUgdG8gb2J0YWluIHJvd3MgY291bnQsIHNob3cgXCJMb2FkaW5n4oCmXCJcblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5jbG9zZXN0KFwic2VjdGlvblwiKS5maW5kKFwiLnRvcC1uYXYgaDRcIikudGV4dChyZXN1bHRzQ291bnQgIT09IHVuZGVmaW5lZCA/IG5hdlRleHQgOiBcIkxvYWRpbmfigKZcIik7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICogdXNpbmcgZGF0YSBmcm9tIFwib2JqZWN0XCIuXG5cdCAqXG5cdCAqIFRoZSBwcm9wZXJ0eSBuYW1lcyBzaG91bGQgY29ycmVzcG9uZCB3aXRoIHRoZSBcInNsdWdcIlxuXHQgKiBhdHRyaWJ1dGUgaW4gdGFibGUgaGVhZGVyLlxuXHQgKlxuXHQgKiBOT1RFOiBUaGlzIGFzc3VtZXMgdGhlIG9iamVjdCBoYXMgYW4gSUQgYXR0cmlidXRlLiBJbmNsdWRlIGl0XG5cdCAqIGV2ZW4gaWYgeW91IGRvbid0IHdpc2ggdG8gc2hvdyBpdC5cblx0ICpcblx0ICogQHBhcmFtIG9iamVjdCAtIFRoZSBkYXRhIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZVxuXHQgKiBzcGxhc2hzY3JlZW4gb24geW91ciBwYWdlXG5cdCAqL1xuXHRhcHBlbmRUYWJsZVJvdyhvYmplY3QpIHtcblx0XHR2YXIgJHRhYmxlU2VjdGlvbiA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHQgICAgJHRhYmxlSGVhZCAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGhlYWQgdHInKSxcblx0XHQgICAgJHRhYmxlQm9keSAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGJvZHknKSxcblx0XHQgICAgJG5ld1JvdyAgICAgICA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcblxuXHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSByb3cgdHdpY2Vcblx0XHRpZiAoJHRhYmxlQm9keS5jaGlsZHJlbihcIltkYXRhLXJvd2lkPVxcXCJcIiArIG9iamVjdC5pZCArIFwiXFxcIl1cIikubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG5cdFx0Ly8gU2V0IElEIG9uIHJvdyB0byByZWZlcmVuY2UgbGF0ZXJcblx0XHQkbmV3Um93WzBdLmRhdGFzZXQucm93aWQgPSBvYmplY3QuaWQ7XG5cdFx0JG5ld1Jvdy50b2dnbGVDbGFzcyhcImhpZ2hsaWdodFwiLCBvYmplY3QuaWQgPT0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHRcdCR0YWJsZUhlYWQuY2hpbGRyZW4oJ3RoJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzbHVnID0gdGhpcy5kYXRhc2V0LnNsdWcsIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG5cdFx0XHRpZiAoc2x1ZyA9PT0gJ2V5ZScpIHsgLy8gdGhlIG9uLWhvdmVyIGV5ZSBpbnZpc2libGUgcm93XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nO1xuXHRcdFx0fSBlbHNlIGlmIChzbHVnICYmIHNsdWcuaW5jbHVkZXMoXCJhY2Nlc3NcIikpIHtcblx0XHRcdFx0Ly8gQm9vbGVhbiB2YWx1ZSBzdXBwb3J0XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgPyB0aGlzLmlubmVySFRNTCA6IFwiwrdcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgIT09IHVuZGVmaW5lZCA/IG9iamVjdFtzbHVnXSA6IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCRuZXdSb3cuYXBwZW5kKHRkKTtcblx0XHR9KTtcblx0XHRcblx0XHQkdGFibGVCb2R5LmFwcGVuZCgkbmV3Um93KTtcblxuXHRcdHJldHVybiAkbmV3Um93WzBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyB0aGUgZGF0YSBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICovXG5cdGNsZWFyVGFibGUoKSB7XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNob3cgZGV0YWlsIHBhZ2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgdGFibGUgcm93IHRvIGJlIHNob3duIGluIHRoZSBzaW5nbGUgdmlld1xuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCA9IG51bGwpIHtcblx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGZvciBudWxsIGFzIG5vIHJvd3Mgd2lsbCBtYXRjaCBpZiBubyBJRCBwYXNzZWRcblx0XHQvLyAuc2libGluZ3MgZG9lcyBub3QgaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGYgc28gY2FuIGJlIGNoYWluZWQgYWZ0ZXIgZmluZGluZyBoaWdobGlnaHQgcm93IGZpcnN0XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnJvd2lkID09IGlkKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XG5cdFx0Ly8gTm8gbmVlZCB0byBzZXQgc3R5bGUgdXNpbmcgSlMgaGVyZSwgQ1NTIGhhbmRsZXMgZmxleFxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikudW53cmFwKFwiZGl2XCIpXG5cdFx0XHQvLyBDbG9zZSBidXR0b24gb24gaGlkZVxuXHRcdFx0LmZpbmQoXCJbZGF0YS1hY3Rpb249XFxcImNsb3NlXFxcIl1cIikuY2xpY2soKCkgPT4gdGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xuXHRcdFxuXHRcdGlmIChpZCA+IC0xKSBsb2NhdGlvbi5oYXNoID0gcGFyc2VJbnQoaWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogSGlkZSBkZXRhaWwgcGFnZSBzaG93biB3aXRoIHNob3dEZXRhaWxcblx0ICovXG5cdGhpZGVUYWJsZVJvd0RldGFpbHMoKSB7XG5cdFx0Ly8gRGVzZWxlY3QgYWxsIHJvd3Ncblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIEZpbHRlciB0byBjaGVjayBpZiBhbHJlYWR5IGhpZGRlbiwgZG9uJ3QgaGlkZSBhZ2FpblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KFwiZGl2XCIpLmxlbmd0aCA9PT0gMCkud3JhcChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblx0XHRcblx0XHRsb2NhdGlvbi5oYXNoID0gXCJcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGEgc2VsZWN0IGVsZW1lbnQgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcblx0ICogZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgZHJvcGRvd24gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdCBBIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYmUgZmlsbGVkXG5cdCAqIEBwYXJhbSBkZWZhdWx0VGV4dCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcblx0ICogQHBhcmFtIGVsZW1lbnRzIExpc3Qgb2YgZWxlbWVudHMgdG8gYmUgYWRkZWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tXG5cdCAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uSWQgSUQgb2YgYSBkZWZhdWx0IG9wdGlvbiBmcm9tIHRoZSBlbGVtZW50cyBnaXZlblxuXHQgKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IG9mIHRoZSBzZWxlY3QgZmllbGQgdG8gYWNjZXNzIHNlbGVjdGVkIGl0ZW0gd2l0aFxuXHQgKiBAcGFyYW0gZ2V0QWRkaXRpb25hbERldGFpbHMgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhZGRpdGlvbmFsIGRldGFpbHMgdG8gYmUgc2hvd24gZm9yIGN1cnJlbnQgaXRlbVxuXHQgKi9cblx0cG9wdWxhdGVTZWxlY3RGaWVsZCgkc2VsZWN0LCBkZWZhdWx0VGV4dCwgZWxlbWVudHMsIGRlZmF1bHRPcHRpb25JZCA9IG51bGwsIHByb3BlcnR5ID0gJ25hbWUnLCBnZXRBZGRpdGlvbmFsRGV0YWlscyA9IG51bGwpIHtcblx0XHQvLyBEZWZhdWx0IGVtcHR5IGNvbnRlbnQgZm9yIGlucHV0XG5cdFx0bGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGVmYXVsdFRleHQsIG51bGwsIHRydWUsIHRydWUpO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0JHNlbGVjdC5lbXB0eSgpLmFwcGVuZChvcHRpb24pO1xuXHRcdFxuXHRcdC8vIEVhY2ggb3B0aW9uIHRvIGJlIHNlbGVjdGVkIGZyb21cblx0XHRlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0aWYgKGdldEFkZGl0aW9uYWxEZXRhaWxzICE9PSBudWxsKSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGdldEFkZGl0aW9uYWxEZXRhaWxzKGUpICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZ1xuXHQgKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWFyY2ggdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gb2JqZWN0Q2FsbGJhY2sgYSBjYWxsYmFjayByZXR1cm5pbmcgYW4gb2JqZWN0ICh0aGUgcm93IHN0cnVjdHVyZSlcblx0ICogQHBhcmFtIHNlYXJjaEtleXMgdGhlIHByb3BlcnRpZXMgaW4gb2JqZWN0Q2FsbGJhY2sgdG8gaGlnaGxpZ2h0XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIGVsZW1lbnRzID0gW10sIG9iamVjdENhbGxiYWNrLCBzZWFyY2hLZXlzID0gW10pIHtcblx0XHRsZXQgcGFnZSA9IHRoaXM7XG5cblx0XHRwYWdlLmNsZWFyVGFibGUoKTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSBvYmplY3RDYWxsYmFjayhlbCk7XG5cblx0XHRcdFx0c2VhcmNoS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0b2JqZWN0W2tleV0gPSBTdHJpbmcob2JqZWN0W2tleV0pLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBxdWVyeSArICcpJywgJ2lnJyksICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChxdWVyeSA9PT0gJChcIi5zZWFyY2gtZmllbGQgaW5wdXRcIikudmFsKCkpIHtcblx0XHRcdFx0XHRwYWdlLmFwcGVuZFRhYmxlUm93KG9iamVjdCk7XG5cdFx0XHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYCR7ZWxlbWVudHMubGVuZ3RofSByZXN1bHQke2VsZW1lbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgTm8gcmVzdWx0cyBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGEgbWVzc2FnZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCBvdmVyIGFsbCBlbGVtZW50cy5cblx0ICogSGlkZSBhZnRlciA2IHNlY29uZHMsIG9yIGNvbmZpZ3VyYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugc3RyaW5nIHRvIGJlIHNob3duIGluIHRoZSBtZXNzYWdlIGJveC5cblx0ICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbWVzc2FnZSwgc3VjaCBhcyBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXG5cdCAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgdGhlIG1lc3NhZ2UgdG8gYmUgc2hvd24gZm9yLlxuXHQgKi9cblx0c3RhdGljIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgdHlwZSA9IFwiZGFuZ2VyXCIsIGR1cmF0aW9uID0gNikge1xuXHRcdC8vIE9ubHkgc2hvdyBvbmUgbWVzc2FnZSBhdCBhIHRpbWVcblx0XHQkKFwiI2FsZXJ0LW5vdGlmaWNhdGlvblwiKS5yZW1vdmUoKTtcblxuXHRcdC8vIENyZWF0ZSBlbGVtZW50XG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtc2cuaWQgPSBcImFsZXJ0LW5vdGlmaWNhdGlvblwiO1xuXHRcdG1zZy5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIiwgYGFsZXJ0LSR7dHlwZX1gLCBcImFsZXJ0LW5vdGlmaWNhdGlvblwiKTtcblx0XHRtc2cuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpOyAvLyBBY2Nlc3NpYmlsaXR5XG5cdFx0Ly8gU2V0IGNvbnRlbnQgYW5kIHNob3cgb24gc2NyZWVuXG5cblx0XHRtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXNnKTtcblxuXHRcdC8vIEhpZGUgYWZ0ZXIgZHVyYXRpb25cblx0XHRzZXRUaW1lb3V0KCgpID0+IG1zZy5yZW1vdmUoKSwgZHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdC8vIENsaWNrIHRvIGhpZGUgbWVzc2FnZVxuXHRcdCQobXNnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4vRGV2aWNlXCI7XG5cbi8qKlxuICogSGFyZHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIGRldmljZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogSGFyZHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRldmljZXMgPSBhcGkuZGV2aWNlcy5tYXAoZSA9PiBuZXcgRGV2aWNlKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBUeXBlcyBpbiB0YWJsZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZVR5cGVzKCkge1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aGlzLmRldmljZXMubWFwKHQgPT4gdC50eXBlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIE1ha2VzIGZvciBhIHNwZWNpZmllZCBUeXBlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlTWFrZXNPZlR5cGUodHlwZSkge1xuXHRcdGxldCBkZXZpY2VzQnlUeXBlID0gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSk7XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQoZGV2aWNlc0J5VHlwZS5tYXAodCA9PiB0Lm1ha2UpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBkZXZpY2VzIHdpdGggYSBzcGVjaWZpZWQgVHlwZSBhbmQgTWFrZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdGdldERldmljZXNPZlR5cGVBbmRNYWtlKHR5cGUsbWFrZSkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlICYmIGRldmljZS5tYWtlID09IG1ha2UpO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGV2aWNlcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIGRldmljZXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0RGV2aWNlcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gaWRzLmluZGV4T2YoZGV2aWNlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIGRldmljZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIGRldmljZSBcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGRldmljZSA9PiBkZXZpY2UuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGV2aWNlIHdpdGggdGhlIGdpdmVuIHNlcmlhbCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIHNlcmlhbE51bWJlciBUaGUgc2VyaWFsIG51bWJlciBvZiB0aGUgZGV2aWNlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RGV2aWNlfVxuXHQgKi9cblx0Z2V0RGV2aWNlQnlTZXJpYWxOdW1iZXIoc2VyaWFsTnVtYmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maW5kKGQgPT4gZC5zZXJpYWxfbm8gPT09IHNlcmlhbE51bWJlcik7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBQcm9ncmFtIGZyb20gXCIuL1Byb2dyYW1cIjtcblxuLyoqXG4gKiBTb2Z0d2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogc29mdHdhcmUgcHJvZ3JhbXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogU29mdHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29mdHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnByb2dyYW1zID0gYXBpLnByb2dyYW1zLm1hcChlID0+IG5ldyBQcm9ncmFtKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcm9ncmFtcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIHByb2dyYW1zIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldFByb2dyYW1zKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbHRlcihwcm9ncmFtID0+IGlkcy5pbmRleE9mKHByb2dyYW0uaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIHByb2dyYW1cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maW5kKHByb2dyYW0gPT4gcHJvZ3JhbS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwiLy8gU2luY2UgbmF2IGVsZW1lbnQgaXMgcGVyc2lzdGVkIGJldHdlZW4gcGFnZXMsIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBhY3RpdmUgYnV0dG9uXG4kKFwiI25hdlwiKS5vbihcImNsaWNrXCIsIFwidWwgbGkgYVwiLCBlID0+IHtcblx0JChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuLy8gVG9vbHRpcHMgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIGEgcmVsZXZhbnQgdG9vbHRpcCBIVE1MIGF0dHJpYnV0ZVxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuLy8gRGF0ZS90aW1lIHBpY2tlciBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggcmVsZXZhbnQgY2xhc3NcbiQoJy50aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoKTtcblxuLy8gQ3JlYXRlIG5ldyBlbXBsb3llZSB3aGVuIHNlYXJjaGluZyBmb3Igbm9uLWV4aXN0ZW50IGFzc2lnbmVlXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnbGkubm8tcmVzdWx0cycsIGZ1bmN0aW9uKGUpIHtcblx0dmFyIG5ld1ZhbHVlID0gJCh0aGlzKS5jbG9zZXN0KFwiLmRyb3Bkb3duLW1lbnUub3BlblwiKS5jaGlsZHJlbihcIi5icy1zZWFyY2hib3hcIikuY2hpbGRyZW4oXCJpbnB1dFwiKS52YWwoKSxcblx0ICAgICRtb2RhbCAgID0gJCgnI25ldy1zdGFmZi1tb2RhbCcpO1xuXG5cdCRtb2RhbC5tb2RhbCgnc2hvdycpO1xuXG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwic3RhZmYubmFtZVwiXScpLnZhbChuZXdWYWx1ZSk7XG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwiZXZlbnRfdGFyZ2V0XCJdJykudmFsKCQodGhpcykuY2xvc2VzdCgnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCdzZWxlY3QnKS5hdHRyKCduYW1lJykpOyAvLyB3aGVuIHRoZSBzdGFmZiBtZW1iZXIgaXMgY3JlYXRlZCwgdGhpcyBpcyB0aGUgaW5wdXQgZmllbGQgaXQnbGwgdXBkYXRlXG59KTtcblxuJCgnI25ldy1zdGFmZi1tb2RhbCwgI25ldy10aWNrZXQtbW9kYWwsICNmb2xsb3ctdXAtY2FsbC1tb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuXHQkKHRoaXMpLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpXG5cdFx0Lm5vdCgnLm5vLWNsZWFyLW9uLXNob3cnKVxuXHRcdC52YWwoJycpO1xuXG5cdCQodGhpcykuZmluZCgnI2FjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZSgpO1xuXG5cdHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0JCh0aGlzKS5maW5kKCcudGltZXBpY2tlcicpLnZhbCgoJzAnICsgKGN1cnJlbnRUaW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy8nICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldERhdGUoKSkuc2xpY2UoLTIpICsgJy8nICsgY3VycmVudFRpbWUuZ2V0RnVsbFllYXIoKSArICcgJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMikpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3RvZ2dsZScpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAucmVtb3ZlLWFjY29yZGlvbicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdoaWRlLmJzLmNvbGxhcHNlIHNob3cuYnMuY29sbGFwc2UnLCAnI2FjY29yZGlvbiAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG5cdGxldCBpc1Nob3cgPSBlLnR5cGUuc3BsaXQoXCIuXCIpWzBdID09PSBcInNob3dcIjtcblx0JCh0aGlzKS5zaWJsaW5ncygnLmNhcmQtaGVhZGVyJykuZmluZCgnLnZpZXctYWNjb3JkaW9uJykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tdXAnLCAhaXNTaG93KS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi1kb3duJywgaXNTaG93KTtcbn0pO1xuXG4kKCcuc2VhcmNoLWZpZWxkIGlucHV0JykudmFsKCcnKTtcblxuLy8gQm9vdHN0cmFwIFNlbGVjdCBGaXg6IEFkZCBiYWNrIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIHNlbGVjdCBmaWVsZFxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5ib290c3RyYXAtc2VsZWN0XCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51Lm9wZW4nKS50b2dnbGUoKTtcbn0pO1xuXG4vLyBCb290c3RyYXAgbW9kYWxzIGZpeDogYWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJib2R5Om5vdChbZGF0YS1wYWdlPVxcXCJzdGFmZlxcXCJdKSBbZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIl1cIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcy5kYXRhc2V0LnRhcmdldCkubW9kYWwoXCJzaG93XCIpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1BpY2tlcihwaWNrZXJFbGVtZW50LCB2YWx1ZSwgbmFtZSkge1xuXHQkKHBpY2tlckVsZW1lbnQpLmFwcGVuZChuZXcgT3B0aW9uKG5hbWUsIHZhbHVlKSkuc2VsZWN0cGlja2VyKCdyZWZyZXNoJykuc2VsZWN0cGlja2VyKCd2YWwnLCBuYW1lKTtcbn1cblxudmFyIHZhbGlkYXRpb25UaW1lb3V0ID0gd2luZG93LnZhbGlkYXRpb25UaW1lb3V0ID0gbnVsbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvbWFpbi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqXG4gKiBBIGNvbW1lbnQgaXMgbWFkZSBhYm91dCBhIHNwZWNpZmljIHRpY2tldCwgYnlcbiAqIGEgc3RhZmYgbWVtYmVyLlxuICogXG4gKiBDb250YWlucyB0aGUgVGlja2V0IHRoYXQgaXQgYmVsb25ncyB0b1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkOiBpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxsX2lkOiBjYWxsLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdGNvbnRlbnQsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxsICAgICAgICAgICAgPSBjYWxsO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0O1xuXHRcdHRoaXMuY29udGVudCAgICAgICAgID0gY29udGVudDtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgYXV0aG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXV0aG9yKTtcblx0fVxuXG5cdHNldCBhdXRob3IoYXV0aG9yKSB7XG5cdFx0dGhpcy5fYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0Z2V0IGNhbGwoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsKHRoaXMuX2NhbGwpO1xuXHR9XG5cblx0c2V0IGNhbGwoY2FsbCkge1xuXHRcdHRoaXMuX2NhbGwgPSBjYWxsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9Db21tZW50LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ2FsbFxuICpcbiAqIEV2ZXJ5IHRpbWUgdGhlIEhlbHBkZXNrIGlzIGNhbGxlZCwgdGhpcyBpcyBjcmVhdGVkLlxuICogQSBjYWxsIG1heSBoYXZlIG11bHRpcGxlIHRpY2tldHMsIGEgdGlja2V0IG1heSBoYXZlXG4gKiBtdWx0aXBsZSBjYWxscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aW1lLFxuXHRcdGNhbGxlcl9pZDogY2FsbGVyLFxuXHRcdG9wZXJhdG9yX2lkOiBvcGVyYXRvcixcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aW1lICAgICA9IHRpbWU7XG5cdFx0dGhpcy5jYWxsZXIgICA9IGNhbGxlcjsgICAvLyBJRCBvZiBjYWxsZXIsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjsgLy8gSUQgb2Ygb3BlcmF0b3IsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMudGlja2V0cyAgPSB0aWNrZXRzOyAgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBUaWNrZXQnc1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBvcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBvcGVyYXRvcihvcGVyYXRvcikge1xuXHRcdHRoaXMuX29wZXJhdG9yID0gb3BlcmF0b3I7XG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNGcm9tQ2FsbCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL0NhbGwuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFbXBsb3llZVxuICpcbiAqIEFuIGVtcGxveWVlIG9mIHRoZSBjb21wYW55XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0am9iX3RpdGxlOiBqb2IsXG5cdFx0ZGVwYXJ0bWVudCxcblx0XHRwaG9uZV9udW1iZXI6IHBob25lLFxuXHRcdGV4cGVydGlzZV90eXBlczogc3BlY2lhbGlzbXMgPSBbXSxcblx0XHRvcGVyYXRvciA9IGZhbHNlLFxuXHRcdHNwZWNpYWxpc3QgPSBzcGVjaWFsaXNtcy5sZW5ndGggPiAwLFxuXHRcdGFuYWx5c3QgPSBmYWxzZSxcblx0XHRhZG1pbiA9IGZhbHNlXG5cdH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5qb2IgPSBqb2I7XG5cdFx0dGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5uYW1lO1xuXHRcdHRoaXMuX2RlcGFydG1lbnQgPSBkZXBhcnRtZW50LmlkO1xuXHRcdHRoaXMucGhvbmUgPSBwaG9uZTtcblx0XHR0aGlzLnNwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdFx0dGhpcy5hY2Nlc3MgPSB7b3BlcmF0b3IsIGFuYWx5c3QsIGFkbWlufTtcblx0XHRcblx0XHQvLyBJZiB1c2VyIGlzIGFueSBvdGhlciBwZXJtaXNzaW9uIHRoZW4gcmVhZCBpcyBncmFudGVkXG5cdFx0dGhpcy5hY2Nlc3MucmVhZCA9IHRoaXMuYWNjZXNzLm9wZXJhdG9yIHx8IHRoaXMuYWNjZXNzLmFuYWx5c3QgfHwgdGhpcy5hY2Nlc3MuYWRtaW4gfHwgdGhpcy5hY2Nlc3MucmVhZG9ubHkgfHwgZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIHJlYWQgYWNjZXNzIHRvIHRoZSBzeXN0ZW1cblx0ICovXG5cdGdldCBpc1JlYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLnJlYWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBoZWxwIGRlc2sgb3BlcmF0b3Jcblx0ICovXG5cdGdldCBpc09wZXJhdG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5vcGVyYXRvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIGFuYWx5dGljYWwgZGF0YSBhYm91dCB0aGUgaGVscCBkZXNrIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzQW5hbHlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYW5hbHlzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhbiBhZG1pbmlzdHJhdG9yIG9uIHRoZSBoZWxwIGRlc2tcblx0ICovXG5cdGdldCBpc0FkbWluKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hZG1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcHJvYmxlbSB0eXBlcyB0aGUgdXNlciBpcyBhIHNwZWNpYWxpc3Qgb2Zcblx0ICovXG5cdGdldCBzcGVjaWFsaXNtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fc3BlY2lhbGlzbXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzcGVjaWFsaXNtcyBTZXQgdGhlIGxpc3Qgb2Ygc3BlY2lhbGlzbXMgZm9yIHRoaXMgcGVyc29uIG9uIHRoZSBzeXN0ZW1cblx0ICovXG5cdHNldCBzcGVjaWFsaXNtcyhzcGVjaWFsaXNtcykge1xuXHRcdHRoaXMuX3NwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdH1cblxuXHQvKipcblx0ICogUHJlcGFyZSBkYXRhIGZvciBzZW5kaW5nIHRvIEFQSSBlbmRwb2ludC4gVGhlIEFQSSBoYXMgZGlmZmVyZW50XG5cdCAqIGRhdGEga2V5cyByZXByZXNlbnRpbmcgdGhlIGRhdGEgYWNjZXNzaWJsZSBpbiB0aGUgdGFibGVzLCBzbyBuZXdcblx0ICogZGF0YSBhbmQgdXBkYXRlcyB0byBkYXRhIG11c3QgdXNlIHRoZXNlIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGRhdGEgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm5zIGRhdGEgd2l0aCB1cGRhdGVkIGtleSBuYW1lc1xuXHQgKi9cblx0c3RhdGljIHByZXBhcmVEYXRhKGRhdGEgPSB7fSkge1xuXHRcdGRhdGEuam9iX3RpdGxlID0gZGF0YS5qb2I7XG5cdFx0ZGF0YS5waG9uZV9udW1iZXIgPSBkYXRhLnBob25lO1xuXHRcdGRhdGEuZXhwZXJ0aXNlX3R5cGVzID0gZGF0YS5zcGVjaWFsaXNtcztcblx0XHRkYXRhLmRlcGFydG1lbnRfaWQgPSBkYXRhLmRlcGFydG1lbnQ7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXHRcdFx0ZGF0YVtrZXldID0gZGF0YS5hY2Nlc3Nba2V5XSA/ICgxICYmIChkYXRhLnNwZWNpYWxpc3QgPSAxKSkgOiAwO1xuXHRcdH1cblx0XHRkYXRhLnNwZWNpYWxpc3QgPSBkYXRhLnNwZWNpYWxpc3QgfHwgMDtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRwYXJlbnRfaWQ6IHBhcmVudCxcblx0XHRjaGlsZHJlblxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgPSBuYW1lO1xuXHRcdHRoaXMucGFyZW50ICAgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuOyAvLyBJRCBvZiBFeHBlcnRpc2VUeXBlJ3MsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRXhwZXJ0aXNlVHlwZSdzXG5cdH1cblxuXHRnZXQgcGFyZW50KCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX3BhcmVudCk7XG5cdH1cblxuXHRzZXQgcGFyZW50KHBhcmVudCkge1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGdldCBjaGlsZHJlbigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fY2hpbGRyZW4pO1xuXHR9XG5cblx0c2V0IGNoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGUuanMiLCJpbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlU3RhZmYge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmSWQsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfaWQ6IGV4cGVydGlzZVR5cGVJZCxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICA9IHN0YWZmSWQ7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGVJZDtcblx0XHR0aGlzLnRpY2tldHMgICAgICAgID0gdGlja2V0cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX2V4cGVydGlzZV90eXBlKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZShleHBlcnRpc2VUeXBlKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZVN0YWZmLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YXR1c1xuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgU3RhdHVzLlxuICogQ29udGFpbnMgVGlja2V0cyB0aGF0IGZpdCBpbnRvIHRoZSBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHNsdWcsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgPSBpZDtcblx0XHR0aGlzLnNsdWcgICAgPSBzbHVnOyAgICAvLyBzbHVnX2V4YW1wbGVcblx0XHR0aGlzLm5hbWUgICAgPSBuYW1lOyAgICAvLyBOYW1lIEV4YW1wbGUhXG5cdFx0dGhpcy50aWNrZXRzID0gdGlja2V0czsgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIFRpY2tldCBpbnN0YW5jZXNcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c1dpdGhTbHVnKHRoaXMuc2x1Zyk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFRpY2tldC9Qcm9ibGVtLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbHMsXG5cdFx0c3RhdHVzLFxuXHRcdHN0YXR1c19oaXN0b3J5OiBzdGF0dXNIaXN0b3J5LFxuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdHNvbHV0aW9uX2lkOiBzb2x1dGlvbixcblx0XHRkZXZpY2VzLFxuXHRcdHByb2dyYW1zLFxuXHRcdGNvbW1lbnRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbCxcblx0XHR1cGRhdGVkX2F0OiB1cGRhdGVkQXRSZWFsLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmX2lkOiBleHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0YXNzaWduZWRfdG9fb3BlcmF0b3JfaWQ6IGFzc2lnbmVkVG9PcGVyYXRvcklkXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5hdXRob3IgICAgICAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICAgID0gY2FsbHM7ICAvLyBJRCBvZiBjYWxscywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDYWxsJ3Ncblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YXR1c19oaXN0b3J5ICAgICAgID0gc3RhdHVzSGlzdG9yeTtcblx0XHR0aGlzLnRpdGxlICAgICAgICAgICAgICAgID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiAgICAgICAgICA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuc29sdXRpb24gICAgICAgICAgICAgPSBzb2x1dGlvbjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICAgID0gZGV2aWNlczsgIC8vIElEIG9mIGRldmljZXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgRGV2aWNlc1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgICAgPSBwcm9ncmFtczsgLy8gSUQgb2YgcHJvZ3JhbXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgUHJvZ3JhbXNcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICAgID0gY29tbWVudHM7IC8vIElEIG9mIGNvbW1lbnRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENvbW1lbnQnc1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0ICAgICAgICAgICA9IHVwZGF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCAgICAgID0gY3JlYXRlZEF0UmVhbDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRfcmVhbCAgICAgID0gdXBkYXRlZEF0UmVhbDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBjYWxscygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGxzQnlUaWNrZXRJZCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCBjYWxscyhjYWxscykge1xuXHRcdHRoaXMuX2NhbGxzID0gY2FsbHM7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXHRcblx0Z2V0IHN0YXR1c19oaXN0b3J5KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzSGlzdG9yeSh0aGlzLl9zdGF0dXNfaGlzdG9yeSk7XG5cdH1cblxuXHRzZXQgc3RhdHVzX2hpc3Rvcnkoc3RhdHVzSGlzdG9yeSkge1xuXHRcdHRoaXMuX3N0YXR1c19oaXN0b3J5ID0gc3RhdHVzSGlzdG9yeTtcblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgSGFyZHdhcmVNYW5hZ2VyKCkpLmdldERldmljZXModGhpcy5fZGV2aWNlcyk7XG5cdH1cblxuXHRzZXQgZGV2aWNlcyhkZXZpY2VzKSB7XG5cdFx0dGhpcy5fZGV2aWNlcyA9IGRldmljZXM7XG5cdH1cblxuXHRnZXQgcHJvZ3JhbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgU29mdHdhcmVNYW5hZ2VyKCkpLmdldFByb2dyYW1zKHRoaXMuX3Byb2dyYW1zKTtcblx0fVxuXG5cdHNldCBwcm9ncmFtcyhwcm9ncmFtcykge1xuXHRcdHRoaXMuX3Byb2dyYW1zID0gcHJvZ3JhbXM7XG5cdH1cblxuXHRnZXQgY29tbWVudHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50c0J5SWRzKHRoaXMuX2NvbW1lbnRzKTtcblx0fVxuXG5cdHNldCBjb21tZW50cyhjb21tZW50cykge1xuXHRcdHRoaXMuX2NvbW1lbnRzID0gY29tbWVudHM7XG5cdH1cblxuXHRnZXQgc29sdXRpb24oKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDb21tZW50KHRoaXMuX3NvbHV0aW9uKTtcblx0fVxuXG5cdHNldCBzb2x1dGlvbihzb2x1dGlvbikge1xuXHRcdHRoaXMuX3NvbHV0aW9uID0gc29sdXRpb247XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVTdGFmZih0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZik7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGVfc3RhZmYoZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZklkO1xuXHR9XG5cblx0Z2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IGFzc2lnbmVkX3RvX29wZXJhdG9yKGFzc2lnbmVkVG9PcGVyYXRvcklkKSB7XG5cdFx0dGhpcy5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPSBhc3NpZ25lZFRvT3BlcmF0b3JJZDtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHR2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQwIC0gMSArIDEpKSArIDE7IC8vUmFuZG9tIGludCBiZXR3ZWVuIDEgYW5kIDQwXG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKSkuZ2V0RXhwZXJ0aXNlVHlwZShyYW5kb20pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIERldmljZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0eXBlLFxuXHRcdG1ha2UsXG5cdFx0c2VyaWFsX25vLFxuXHRcdHRpY2tldHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KVxuXHR7XG5cdFx0dGhpcy5pZFx0XHRcdFx0PSBpZDtcblx0XHR0aGlzLnR5cGVcdFx0XHQ9IHR5cGU7XG5cdFx0dGhpcy5tYWtlICAgXHRcdD0gbWFrZTtcblx0XHR0aGlzLnNlcmlhbF9ubyAgICAgXHQ9IHNlcmlhbF9ubztcblx0XHR0aGlzLl90aWNrZXRzXHRcdD0gdGlja2V0cztcblx0XHR0aGlzLmNyZWF0ZWRfYXRcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL0RldmljZS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogUHJvZ3JhbVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgU29mdHdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyYW0ge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzLFxuXHRcdG9wZXJhdGluZ19zeXN0ZW0sXG5cdFx0ZXhwaXJ5X2RhdGUsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KSBcblx0e1xuXHRcdHRoaXMuaWQgICAgICAgICBcdFx0PSBpZDtcblx0XHR0aGlzLm5hbWUgICAgICAgXHRcdD0gbmFtZTtcblx0XHR0aGlzLl90aWNrZXRzXHRcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMub3BlcmF0aW5nX3N5c3RlbVx0PSBvcGVyYXRpbmdfc3lzdGVtO1xuXHRcdHRoaXMuZXhwaXJ5X2RhdGVcdFx0PSBleHBpcnlfZGF0ZTtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgXHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgXHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxuXG5cdGdldFNvZnR3YXJlVHlwZSgpIHsgXG5cdFx0Ly9HZXRzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIHByb2dyYW0gaXMgYW4gb3BlcnRpbmcgc3lzdGVtIG9yIG5vdFxuXHRcdGlmICh0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIk9wZXJhdGluZyBTeXN0ZW1cIjtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIkFwcGxpY2F0aW9uXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBcIi1cIjtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFN0YXR1c1xuICpcbiAqIEludGVybWVkaWFyeSByZWxhdGlvbnNoaXAgYmV0d2VlbiBTdGF0dXNcbiAqIGFuZCBUaWNrZXQuIFRoaXMgc3RvcmVzIGEgaGlzdG9yeSBvZiBhXG4gKiBUaWNrZXQncyBzdGF0dXNlczsgdGhlIGxhc3QgZW50cnkgaXNcbiAqIHRoZSBUaWNrZXQncyBjdXJyZW50IHN0YXR1cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0U3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpY2tldF9pZDogdGlja2V0LFxuXHRcdHN0YXR1c19pZDogc3RhdHVzLFxuXHRcdHN0YWZmX2lkOiBzdGFmZixcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDsgLy8gSUQgb2YgdGlja2V0LCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgVGlja2V0XG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgID0gc3RhZmY7ICAvLyBJRCBvZiBzdGFmZiwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IHRpY2tldCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldCh0aGlzLl90aWNrZXQpO1xuXHR9XG5cblx0c2V0IHRpY2tldCh0aWNrZXQpIHtcblx0XHR0aGlzLl90aWNrZXQgPSB0aWNrZXQ7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0U3RhdHVzKHRoaXMuX3N0YXR1cyk7XG5cdH1cblxuXHRzZXQgc3RhdHVzKHN0YXR1cykge1xuXHRcdHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRTdGF0dXMuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4vRHluYW1pY1BhZ2VcIjtcblxuLyoqXG4gKiBBUElcbiAqXG4gKiBPcmlnaW5hbGx5IHVzZWQgdG8gcmV0cmlldmUgYW5kIGhhbmRsZSBkYXRhIGZyb21cbiAqIEFQSSBlbmRwb2ludHMsIGJ1dCBtb2RpZmllZCB0byBob2xkIGxvY2FsIGRhdGFcbiAqIGluIHRoZSBjb25zdHJ1Y3RvciBzZXQgYnkgV29yZFByZXNzJ3MgVHdpZ1xuICogKGRvbmUgdG8gcmV1c2UgcHJldmlvdXMgY29tcG9uZW50cyB0byBzYXZlIHRpbWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRjYWxscyA9IFtdLFxuXHRcdHN0YXR1c2VzID0gW10sXG5cdFx0dGlja2V0cyA9IFtdLFxuXHRcdHRpY2tldF9zdGF0dXNlczogdGlja2V0U3RhdHVzZXMgPSBbXSxcblx0XHRjb21tZW50cyA9IFtdLFxuXHRcdHN0YWZmID0gW10sXG5cdFx0ZGV2aWNlcyA9IFtdLFxuXHRcdHByb2dyYW1zID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBleHBlcnRpc2VUeXBlcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmOiBleHBlcnRpc2VUeXBlU3RhZmYgPSBbXSxcblx0XHRkZXBhcnRtZW50cyA9IFtdXG5cdH0pIHtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICA9IGNhbGxzO1xuXHRcdHRoaXMuc3RhdHVzZXMgICAgICAgICAgID0gc3RhdHVzZXM7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICAgICAgPSB0aWNrZXRzO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgICAgID0gdGlja2V0U3RhdHVzZXM7XG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgPSBjb21tZW50cztcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICAgICA9IHN0YWZmO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgID0gZGV2aWNlcztcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICA9IHByb2dyYW1zO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gZXhwZXJ0aXNlVHlwZXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyAgICAgICAgPSBkZXBhcnRtZW50cztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL0FQSS5qcyIsIi8qXG5KUyBzcGVjaWZpYyB0byBIYXJkd2FyZSBwYWdlLCB1c2VkIHRvIGhhbmRsZSBydWRhbWVudGFyeSBmcm9udCBlbmQgaW50ZXJhY3Rpb25zLlxuTW9zdCBmcm9udCBlbmQgbG9naWMgb2NjdXJzIGluIE1ldHJpY3NQYWdlLlxuICovXG5cbmltcG9ydCBNYWtlSXRBbGwgZnJvbSBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBNZXRyaWNzUGFnZSBmcm9tIFwiLi9NZXRyaWNzUGFnZVwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiLi4vQVBJXCI7XG5cbmxldCBtZXRyaWNzUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cblx0bWV0cmljc1BhZ2UgPSB3aW5kb3cubWV0cmljc1BhZ2UgPSBuZXcgTWV0cmljc1BhZ2UoKTtcblxuXHQvL1NldHRpbmcgZGVmYXVsdCByZXNwb25zZSBpZiBubyByZXN1bHQgaXMgZm91bmQgaW4gdGhlIHNlbGVjdC9zZWFyY2ggYm94XG5cdCQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoe1xuXHRcdG5vbmVSZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgbWF0Y2ggezB9J1xuXHR9KTtcblxuXHQvL0hhbmRsZXIgZm9yIGNoYW5naW5nIHRoZSBzZWxlY3RlZCBzdGFmZiBtZW1iZXJcblx0JCgnI1N0YWZmTmFtZVNlYXJjaCcpLmNoYW5nZShmdW5jdGlvbigpIHsgXG5cdFx0bWV0cmljc1BhZ2Uuc3RhZmZEcm9wZG93bkNoYW5nZSgpO1xuXHR9KTtcblxuXHQkKFwiW2RhdGEtcm93aWRdXCIpLmNsaWNrKGUgPT4ge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCkuc3BsaXQoXCIjXCIpWzBdLnJlcGxhY2UoXCJtZXRyaWNzLmh0bWxcIiwgXCJzdGFmZi5odG1sI1wiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpO1xuXHR9KTtcblxuXHQkKCgpID0+IG1ldHJpY3NQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL21ldHJpY3MvbWV0cmljcy5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuXG5cbi8qKlxuICogTWV0cmljc1BhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgbWV0cmljcyBwYWdlIC93IEpRdWVyeSB1c2luZyBkYXRhIGZyb21cbiAqIHZhcmlvdXMgaXRlbSBNYW5hZ2Vycy4gXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc1BhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvL0RlY2xlYXJpbmcgbWFuYWdlcnNcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgICAgICAgID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgICAgICAgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMuc29mdHdhcmVNYW5hZ2VyICAgICAgPSBuZXcgU29mdHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5oYXJkd2FyZU1hbmFnZXIgICAgICA9IG5ldyBIYXJkd2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmxvZ2dlZEluVXNlciA9IG51bGw7XG5cdFx0dGhpcy5wYWdlTG9hZCgpO1xuXHR9XG5cblx0cGFnZUxvYWQoKSB7XG5cdFx0dGhpcy5sb2dnZWRJblVzZXIgPSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcih0cnVlKTtcblx0XHR2YXIgdGlja2V0cyA9IG51bGw7XG5cblx0XHRpZiAodGhpcy5sb2dnZWRJblVzZXIuaXNBbmFseXN0KSB7IC8vSWYgYW4gYW5hbHlzdCBpcyBsb2dnZWQgaW5cblx0XHRcdC8vTG9hZCBhbGwgc3RhZmYgbWVtYmVycyBpbnRvIFN0YWZmIERyb3AgZG93biBib3gsIGFuZCBkaXNwbGF5XG5cdFx0XHQvL3N5c3RlbS13aWRlIHN0YXRpc3RpY3MgKHVzaW5nIHRpY2tldHMgYXNzaWduZWQgdG8gYW55IG9wZXJhdG9yKSBcblx0XHRcdHRoaXMucG9wdWxhdGVTdGFmZk5hbWVTZWFyY2goKTtcblx0XHRcdHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIudGlja2V0cztcblx0XHRcdHRoaXMuc2hvd1N0YXRzKHRydWUsIHRpY2tldHMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vSWYgbm90LCBkaXNwbGF5IHRoZSBuYW1lIG9mIHRoZSBsb2dnZWQgaW4gdXNlciBhbmQgZm9yY2Vcblx0XHRcdC8vdGhlIHBhZ2UgdG8gZGlzcGxheSBvbmx5IGRhdGEgcmVsYXRpbmcgdG8gdGhlbVxuXHRcdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuYXBwZW5kKFwiPG9wdGlvbiBzdHlsZT0nY29sb3I6Z3JleScgdmFsdWU9J1wiICsgdGhpcy5sb2dnZWRJblVzZXIuaWQgKyBcIicgc2VsZWN0ZWQ+XCIgKyB0aGlzLmxvZ2dlZEluVXNlci5uYW1lICsgXCI8L29wdGlvbj5cIik7XG5cdFx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcInRydWVcIik7XG5cdFx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0XHRcdHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRoaXMubG9nZ2VkSW5Vc2VyLmlkKTtcblx0XHRcdHRoaXMub3BlblN0YWZmSW5mbyh0aGlzLmxvZ2dlZEluVXNlciwgdGlja2V0cyk7XG5cdFx0fVxuXHR9XG5cblx0Ly9IYW5kbGVzIGRpc3BsYXkgZGF0YSBpbiB0aGUgXCJTdGF0aXN0aWNzXCIgc2VjdGlvblxuXHRzaG93U3RhdHMoc2hvd2luZ0dsb2JhbEluZm8sIHRpY2tldHMpIHtcblx0XHRpZiAoc2hvd2luZ0dsb2JhbEluZm8pIHsgXG5cdFx0XHQvL0lmIHVzZXIgaXMgYW4gQW5hbHlzdCBhbmQgaGFzIG5vdCBzZWxlY3RlZCBhIHNwZWNpZmljIHN0YWZmIG1lbWJlciB0byB2aWV3XG5cdFx0XHQvL0Rpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgSGFyZHdhcmUgYW5kIFNvZnR3YXJlXG5cdFx0XHQkKFwiI0hXX1NXXCIpLmF0dHIoXCJzdHlsZVwiLFwiXCIpXG5cdFx0XHR2YXIgcHJvZ3JhbXMgPSB0aGlzLnNvZnR3YXJlTWFuYWdlci5wcm9ncmFtcztcblx0XHRcdHZhciBub09mU29mdHdhcmUgPSBwcm9ncmFtcy5sZW5ndGg7XG5cdFx0XHR2YXIgbm9PZlNvZnR3YXJlV2l0aElzc3VlcyA9IHByb2dyYW1zLmZpbHRlcihwID0+IHAuX3RpY2tldHMubGVuZ3RoID4gMCkubGVuZ3RoO1xuXHRcdFx0XG5cdFx0XHR2YXIgZGV2aWNlcyA9IHRoaXMuaGFyZHdhcmVNYW5hZ2VyLmRldmljZXM7XG5cdFx0XHR2YXIgbm9PZkhhcmR3YXJlID0gZGV2aWNlcy5sZW5ndGg7XG5cdFx0XHR2YXIgbm9PZkhhcmR3YXJlV2l0aElzc3VlcyA9IGRldmljZXMuZmlsdGVyKGQgPT4gZC5fdGlja2V0cy5sZW5ndGggPiAwKS5sZW5ndGg7XG5cblx0XHRcdCQoXCIjbm9PZlNvZnR3YXJlXCIpLnZhbChub09mU29mdHdhcmUpO1xuXHRcdFx0JChcIiNub09mU29mdHdhcmVXaXRoSXNzdWVzXCIpLnZhbChub09mU29mdHdhcmVXaXRoSXNzdWVzKTtcblx0XHRcdCQoXCIjbm9PZkRldmljZXNcIikudmFsKG5vT2ZIYXJkd2FyZSk7XG5cdFx0XHQkKFwiI25vT2ZEZXZpY2VzV2l0aElzc3Vlc1wiKS52YWwobm9PZkhhcmR3YXJlV2l0aElzc3Vlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vRWxzZSBkb24ndCBkaXNwbGF5IEhhcmR3YXJlL1NvZnR3YXJlIGluZm9ybWF0aW9uXG5cdFx0XHQkKFwiI0hXX1NXXCIpLmF0dHIoXCJzdHlsZVwiLFwiZGlzcGxheTpub25lXCIpO1xuXHRcdH1cblxuXHRcdCQoXCIjdG90YWxUaWNrZXRzQXNzaWduZWRcIikudmFsKHRpY2tldHMubGVuZ3RoKTsgLy9OdW1iZXIgb2YgdGlja2V0cyBpbiB0aGUgc3lzdGVtXG5cdFx0dmFyIHNvbHZlZFRpY2tldHMgPSB0aWNrZXRzLmZpbHRlcih0ID0+IHQuc3RhdHVzLnNsdWcgPT0gXCJyZXNvbHZlZFwiKTsgLy9OdW1iZXIgb2YgcmVzb2x2ZWQgdGlja2V0cyBpbiB0aGUgc3lzdGVtXG5cdFx0JChcIiN0b3RhbFRpY2tldHNTb2x2ZWRcIikudmFsKHNvbHZlZFRpY2tldHMubGVuZ3RoKTtcblxuXHRcdHZhciB0b3RhbFRpbWUgPSAwO1xuXHRcdHZhciB0b3RhbFJlcGxpZXMgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG90YWxSZXBsaWVzICs9IHRpY2tldHNbaV0uY29tbWVudHMubGVuZ3RoO1xuXHRcdFx0dmFyIHRpY2tldFN0YXR1c0hpc3RvcnkgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldHNbaV0uaWQpO1xuXHRcdFx0dmFyIHJlc29sdmVkVGlja2V0U3RhdHVzID0gdGlja2V0U3RhdHVzSGlzdG9yeS5maWx0ZXIodCA9PiB0Ll9zdGF0dXMgPT0gMSk7XG5cblx0XHRcdGlmIChyZXNvbHZlZFRpY2tldFN0YXR1cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciB0aWNrZXRDcmVhdGVkID0gbmV3IERhdGUodGlja2V0c1tpXS5jcmVhdGVkX2F0X3JlYWwpO1xuXHRcdFx0XHR2YXIgbGFzdFJlc29sdmVkID0gcmVzb2x2ZWRUaWNrZXRTdGF0dXNbcmVzb2x2ZWRUaWNrZXRTdGF0dXMubGVuZ3RoIC0gMV1cblx0XHRcdFx0dmFyIHRpY2tldFJlc29sdmVkID0gbmV3IERhdGUobGFzdFJlc29sdmVkLmNyZWF0ZWRfYXRfcmVhbCk7XG5cdFx0XHRcdHZhciB0aW1lRGlmZiA9IE1hdGguYWJzKHRpY2tldFJlc29sdmVkLmdldFRpbWUoKSAtIHRpY2tldENyZWF0ZWQuZ2V0VGltZSgpKTtcblx0XHRcdFx0dmFyIGRpZmZEYXlzID0gTWF0aC5jZWlsKHRpbWVEaWZmIC8gKDEwMDAgKiAzNjAwICogMjQpKTsgXG5cdFx0XHRcdHRvdGFsVGltZSArPSBkaWZmRGF5cztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoISh0aWNrZXRzLmxlbmd0aCkpIHtcblx0XHRcdCQoXCIjYXZnVGltZVRvU29sdmVUaWNrZXRcIikudmFsKFwiLVwiKTsgXG5cdFx0XHQkKFwiI2F2Z1JlcGxpZXNQZXJUaWNrZXRcIikudmFsKFwiLVwiKTsgLy9JZiB0aGVyZSBhcmUgbm8gdGlja2V0cywgdXNlIHRoaXMgc28gd2UgZG9uJ3QgZGl2aWRlIGJ5IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcIiNhdmdUaW1lVG9Tb2x2ZVRpY2tldFwiKS52YWwodG90YWxUaW1lL3RpY2tldHMubGVuZ3RoKTsgXG5cdFx0XHQkKFwiI2F2Z1JlcGxpZXNQZXJUaWNrZXRcIikudmFsKHRvdGFsUmVwbGllcy90aWNrZXRzLmxlbmd0aCk7IC8vQ2FsY3VsYXRlcyBhdmVyYWdlIHJlcGxpZXMgcGVyIHRpY2tldFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTGluZUdyYXBoKHRpY2tldHMpOyAvL0xvYWQgQmFja2xvZyBHcmFwaFxuXHRcdHRoaXMuY3JlYXRlUGllQ2hhcnQodGlja2V0cyk7IC8vTG9hZCBQcm9ibGVtIFR5cGUgZ3JhcGhcblx0fVxuXG5cdC8vVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHN0YWZmIG1lbWJlciBvYmplY3QsIGFuZCByZWxldmFudCB0aWNrZXRzIGZvciB0aGF0IFxuXHQvL3N0YWZmIG1lbWJlciBhbmQgYXBwcm9wcmlhdGVseSBmaWxscyBpbiB2YWx1ZXMgb24gdGhlIHBhZ2Vcblx0b3BlblN0YWZmSW5mbyhzdGFmZix0aWNrZXRzKSB7XG5cdFx0JChcIi5jb2xsYXBzaWJsZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcblx0XHQkKFwiI25hbWVcIikudmFsKHN0YWZmLm5hbWUpO1xuXHRcdCQoXCIjcGhvbmVcIikudmFsKHN0YWZmLnBob25lKTtcblx0XHQkKFwiI3JvbGVcIikudmFsKHN0YWZmLmpvYik7XG5cdFx0JChcIiNzdGF0c1RpdGxlXCIpLnRleHQoXCJTdGF0aXN0aWNzIC0gXCIgKyBzdGFmZi5uYW1lKTtcblx0XHQkKFwiI3RpY2tldFRpdGxlXCIpLnRleHQoXCJUaWNrZXQgQmFja2xvZyAtIFwiICsgc3RhZmYubmFtZSk7XG5cdFx0dGhpcy5zaG93U3RhdHMoZmFsc2UsdGlja2V0cyk7XG5cdH1cblxuXHQvL0Z1bmN0aW9uIHVzZWQgdG8gbG9hZCBhbGwgc3RhZmYgbWVtYmVycyBpbiB0aGUgc3lzdGVtIGluIHRoZSBkcm9wIGRvd24gYm94LlxuXHRwb3B1bGF0ZVN0YWZmTmFtZVNlYXJjaCgpIHtcblx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5odG1sKFwiXCIpO1xuXHRcdHZhciBzdGFmZk1lbWJlcnMgPSB0aGlzLnN0YWZmTWFuYWdlci5zdGFmZjtcblx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5hcHBlbmQoXCI8b3B0aW9uPlNlYXJjaC4uLjwvb3B0aW9uPlwiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YWZmTWVtYmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBzdGFmZk1lbWJlcnNbaV0uaWQgKyBcIic+XCIgKyBzdGFmZk1lbWJlcnNbaV0ubmFtZSArIFwiPC9vcHRpb24+XCIpO1xuXHRcdH1cblx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8vSGFuZGxlcyBhIG5ldyBpdGVtIGlzIHNlbGVjdGVkIGluIHRoZSBkcm9wIGRvd24gYm94LlxuXHRzdGFmZkRyb3Bkb3duQ2hhbmdlKCkge1xuXHRcdHZhciBpbmRleCA9ICQoJyNTdGFmZk5hbWVTZWFyY2gnKVswXS5zZWxlY3RlZEluZGV4O1xuXHRcdGlmIChpbmRleCA+IDApIHsgLy9TdGFmZiBNZW1iZXIgc2VsZWN0ZWRcblx0XHRcdHZhciBpZCA9IE51bWJlcigkKCcjU3RhZmZOYW1lU2VhcmNoJykudmFsKCkpO1xuXHRcdFx0dmFyIHN0YWZmID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0KGlkKVxuXHRcdFx0dGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQoc3RhZmYuaWQpO1xuXHRcdFx0dGhpcy5vcGVuU3RhZmZJbmZvKHN0YWZmLCB0aWNrZXRzKTsgLy9EaXNwbGF5IGNvcnJlY3QgcGFnZSBpbmZvIGZvciBzZWxlY3RlZCBzdGFmZiBtZW1iZXJcblx0XHR9IGVsc2UgeyAvL0RlZmF1bHQgb3B0aW9uIHNlbGVjdGVkIC0gY2xvc2Ugc3RhZmYgZGV0YWlsc1xuXHRcdFx0JChcIi5jb2xsYXBzaWJsZVwiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXHRcdFx0JChcIiNuYW1lXCIpLnZhbChcIlwiKTtcblx0XHRcdCQoXCIjcGhvbmVcIikudmFsKFwiXCIpO1xuXHRcdFx0JChcIiNyb2xlXCIpLnZhbChcIlwiKTtcblx0XHRcdCQoXCIjc3RhdHNUaXRsZVwiKS50ZXh0KFwiU3RhdGlzdGljc1wiKTtcblx0XHRcdCQoXCIjdGlja2V0VGl0bGVcIikudGV4dChcIlRpY2tldCBCYWNrbG9nXCIpO1xuXHRcdFx0dmFyIHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIudGlja2V0cztcblx0XHRcdHRoaXMuc2hvd1N0YXRzKHRydWUsIHRpY2tldHMpXG5cdFx0fVxuXHR9XG5cblx0Ly9SZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyB0aGUgYmFja2xvZyBncmFwaC4gVGFrZXMgdGhlIHBhcmFtYXRlciBcInRpY2tldHNcIiBhbmQgdXNlcyBpdCBjYWxjdWxhdGUgdmFsdWVzIHRwIGRpc3BsYXkgXG5cdGNyZWF0ZUxpbmVHcmFwaCh0aWNrZXRzKSB7XG5cdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0dmFyIG1vbnRoTmFtZXMgPSBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5cdFx0dmFyIG1vbnRocyA9IG5ldyBBcnJheSgpO1xuXHRcdHZhciBjdXJyZW50TW9udGggPSBub3cuZ2V0TW9udGgoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykgeyAvL2dldHMgdGhlIGluZGV4ZXMgb2YgdGhlIHByZXZpb3VzIDYgbW9udGhzIGFuZCBwdXNoZXMgdGhlbSB0byBhbiBhcnJheVxuXHRcdFx0bW9udGhzLnB1c2goY3VycmVudE1vbnRoKTtcblx0XHRcdGN1cnJlbnRNb250aCA9IGN1cnJlbnRNb250aCA9PSAwID8gMTEgOiAtLWN1cnJlbnRNb250aDtcblx0XHR9XG5cdFx0bW9udGhzLnJldmVyc2UoKTtcblxuXHRcdHZhciB0aWNrZXRzT3BlbmVkID0gbmV3IEFycmF5KCk7XG5cdFx0dmFyIHRpY2tldHNVbnJlc29sdmVkID0gbmV3IEFycmF5KCk7XG5cdFx0Ly9Gb3IgZWFjaCBvZiB0aGUgcHJldmlvdXMgNiBtb250aHMsIHdlIGNhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHRpY2tldHMgb3BlbmVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBhbW91bnQgb2YgdGlja2V0cyB0aGF0IGhhdmUgYmVlbiByZXNvbHZlZCBmcm9tIHRoYXQgbW9udGhcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vbnRocy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9HZXRzIGFsbCB0aWNrZXRzIG9wZW5pbmcgaW4gdGhlIGN1cnJlbnQgbW9udGhcblx0XHRcdHZhciBvcGVuZWQgPSB0aWNrZXRzLmZpbHRlcih0ID0+IG5ldyBEYXRlKHQuY3JlYXRlZF9hdF9yZWFsKS5nZXRNb250aCgpID09IG1vbnRoc1tqXSlcblx0XHRcdHRpY2tldHNPcGVuZWQucHVzaChvcGVuZWQubGVuZ3RoKTtcblx0XHRcdC8vR2V0cyBhbGwgdW5yZXNvbHZlZCB0aWNrZXRzIHRoYXQgd2VyZSBvcGVuZWQgaW4gdGhlIGN1cnJlbnQgbW9udGhcblx0XHRcdHZhciB1bnJlc29sdmVkID0gdGlja2V0cy5maWx0ZXIodCA9PiAobmV3IERhdGUodC5jcmVhdGVkX2F0X3JlYWwpLmdldE1vbnRoKCkgPT0gbW9udGhzW2pdICYmIHQuc3RhdHVzLnNsdWcgIT0gXCJyZXNvbHZlZFwiKSlcblx0XHRcdHRpY2tldHNVbnJlc29sdmVkLnB1c2godW5yZXNvbHZlZC5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdCQoJyN0aWNrZXQtYmFja2xvZycpLmh0bWwoXCI8Y2FudmFzIGlkPSd0aWNrZXRCYWNrbG9nJz48L2NhbnZhcz5cIik7XG5cdFx0dmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlja2V0QmFja2xvZ1wiKS5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0dmFyIG9wU3RhdENoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuXHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRsYWJlbHM6IFttb250aE5hbWVzW21vbnRoc1swXV0sIG1vbnRoTmFtZXNbbW9udGhzWzFdXSwgbW9udGhOYW1lc1ttb250aHNbMl1dLCBtb250aE5hbWVzW21vbnRoc1szXV0sIG1vbnRoTmFtZXNbbW9udGhzWzRdXSwgbW9udGhOYW1lc1ttb250aHNbNV1dXSwgLy9MYWJlbHMgb2YgbW9udGhzXG5cdFx0XHRcdGRhdGFzZXRzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICcjIFRpY2tldHMgVW5yZXNvbHZlZCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbdGlja2V0c1VucmVzb2x2ZWRbMF0sIHRpY2tldHNVbnJlc29sdmVkWzFdLCB0aWNrZXRzVW5yZXNvbHZlZFsyXSwgdGlja2V0c1VucmVzb2x2ZWRbM10sIHRpY2tldHNVbnJlc29sdmVkWzRdLCB0aWNrZXRzVW5yZXNvbHZlZFs1XV0sIC8vRGF0YSBvZiB1bnJlc29sdmVkIHRpY2tldHNcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiYSgyNTUsOTksMTMyLDEpJyxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDIwOSwyMTgsMC44KSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcdFxuXHRcdFx0XHRcdFx0bGFiZWw6ICcjIFRpY2tldHMgT3BlbmVkJyxcblx0XHRcdFx0XHRcdGRhdGE6IFt0aWNrZXRzT3BlbmVkWzBdLCB0aWNrZXRzT3BlbmVkWzFdLCB0aWNrZXRzT3BlbmVkWzJdLCB0aWNrZXRzT3BlbmVkWzNdLCB0aWNrZXRzT3BlbmVkWzRdLCB0aWNrZXRzT3BlbmVkWzVdXSwgLy9EYXRhIG9mIHRvdGFsIHRpY2tldHMgb3BlbmVkXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogJ3JnYmEoOTksMTMyLDI1NSwxKScsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDk5LDEzMiwyNTUsMC4yKSdcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0cmVzcG9uc2l2ZTp0cnVlLFxuXHRcdFx0XHRtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcblx0XHRcdFx0c2NhbGVzOiB7XG5cdFx0XHRcdFx0eUF4ZXM6IFt7XG5cdFx0XHRcdFx0XHR0aWNrczoge1xuXHRcdFx0XHRcdFx0XHRiZWdpbkF0WmVybzp0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fV1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlUGllQ2hhcnQodGlja2V0cykge1xuXHRcdHZhciByb290UHJvYmxlbVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRSb290RXhwZXJ0aXNlVHlwZXMoKTsgLy9HZXRzIHRoZSBtYWpvci9yb290IEV4cGVydGlzZSB0eXBlc1xuXHRcdFxuXHRcdHZhciBQcm9ibGVtVHlwZU5hbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0dmFyIHRpY2tldHNQZXJQcm9ibGVtVHlwZSA9IG5ldyBBcnJheSgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdFByb2JsZW1UeXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0UHJvYmxlbVR5cGVOYW1lcy5wdXNoKHJvb3RQcm9ibGVtVHlwZXNbaV0ubmFtZSk7IC8vQWRkcyB0aGUgbmFtZXMgb2YgZWFjaCByb290IEV4cGVydGlzZSB0eXBlIHRvIGFuIGFycmF5IFxuXG5cdFx0XHR2YXIgdGlja2V0Q291bnQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdGlja2V0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR2YXIgcHJvYlR5cGVDaGFpbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZUNoYWluKHRpY2tldHNbal0uZXhwZXJ0aXNlX3R5cGUpO1xuXHRcdFx0XHR2YXIgcm9vdFByb2JsZW1UeXBlID0gcHJvYlR5cGVDaGFpbltwcm9iVHlwZUNoYWluLmxlbmd0aCAtIDFdOyAvL0dldHMgdGhlIHJvb3QgcHJvYmxlbSB0eXBlIGZvciB0aGUgY3VycmVudCB0aWNrZXQuXG5cdFx0XHRcdGlmIChyb290UHJvYmxlbVR5cGVzW2ldLmlkID09IHJvb3RQcm9ibGVtVHlwZS5pZCkgeyAvL0lmIHRoZSBjdXJyZW50IHRpY2tldCdzIHJvb3QgcHJvYmxlbSB0eXBlIGFuZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2JsZW0gdHlwZSBhcmUgdGhlIHNhbWVcblx0XHRcdFx0XHQvL1dlIGFkZCB0aGUgdGlja2V0IHRvIGFuIGFycmF5IGFuZCByZW1vdmUgaXQgZnJvbSB0aWNrZXRzIChzbyB3ZSBubyBsb25nZXIgaGF2ZSB0byBzZWFyY2ggaXQgZWFjaCBpdGVyYXRpb24uIEhlbHBzIHRvIHNwZWVkIHRoaW5ncyB1cClcdFxuXHRcdFx0XHRcdHRpY2tldENvdW50LnB1c2godGlja2V0c1tqXSk7XG5cdFx0XHRcdFx0dGlja2V0cy5zcGxpY2UoaiwxKTtcblx0XHRcdFx0XHQtLWo7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGlja2V0c1BlclByb2JsZW1UeXBlLnB1c2godGlja2V0Q291bnQubGVuZ3RoKTsgXG5cdFx0fVxuXG5cdFx0JCgnI3Byb2JsZW0tdHlwZS1jYXJkJykuaHRtbChcIjxjYW52YXMgaWQ9J3Byb2JsZW1UeXBlU29sdmVkJz48L2NhbnZhcz5cIik7XG5cdFx0dmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvYmxlbVR5cGVTb2x2ZWRcIikuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHR2YXIgcHJvYlR5cGVDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcblx0XHRcdHR5cGU6ICdkb3VnaG51dCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRhdGFzZXRzOiBbe1xuXHRcdFx0XHRcdGRhdGE6IHRpY2tldHNQZXJQcm9ibGVtVHlwZSwgLy9EYXRhIGZvciB0aGUgcGllIGNoYXJ0XG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBbXG5cdFx0XHRcdFx0XHQncmdiYSgyNTUsOTksOTksMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoOTksMjU1LDk5LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDk5LDk5LDI1NSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSgyNTUsOTksMjU1LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDI1NSwyNTUsOTksMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoOTksMjU1LDI1NSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSgyNTUsMjAwLDk5LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDIwMCwyNTUsMTUwLDEpJ1xuXHRcdFx0XHRcdF1cblx0XHRcdFx0fV0sXG5cdFx0XHRcdGxhYmVsczogUHJvYmxlbVR5cGVOYW1lcyAvL0xhYmVscyBmb3IgdGhlIHBpZSBjaGFydFxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0bGVnZW5kOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246J3JpZ2h0J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvbWV0cmljcy9NZXRyaWNzUGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=