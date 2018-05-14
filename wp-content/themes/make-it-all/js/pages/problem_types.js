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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 53 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL1Byb2JsZW1UeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvcHJvYmxlbV90eXBlcy5qcyJdLCJuYW1lcyI6WyJUaWNrZXRNYW5hZ2VyIiwiZXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJ3aW5kb3ciLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsImNhbGxzIiwiYXBpIiwibWFwIiwiQ2FsbCIsImUiLCJ0aWNrZXRzIiwiVGlja2V0IiwiY29tbWVudHMiLCJDb21tZW50Iiwic3RhdHVzZXMiLCJTdGF0dXMiLCJ0aWNrZXRTdGF0dXNlcyIsIlRpY2tldFN0YXR1cyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIk1hbmFnZXIiLCJTdGFmZk1hbmFnZXIiLCJFbXBsb3llZSIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlIiwiRXhwZXJ0aXNlVHlwZVN0YWZmIiwiX3BhcmVudCIsImV4cGVydGlzZVR5cGVJZHMiLCJfZXhwZXJ0aXNlX3R5cGUiLCJleHBlcnRpc2VUeXBlUGFyZW50IiwicGFyZW50IiwiZXhwZXJ0aXNlVHlwZVN0YWZmSWQiLCJlbGVtZW50cyIsInRvTG93ZXJDYXNlIiwic29tZSIsIlN0cmluZyIsImVsIiwicHJvcCIsImluY2x1ZGVzIiwiRHluYW1pY1BhZ2UiLCJzZWN0aW9uU2VsZWN0b3IiLCJ0YWJsZVNlbGVjdG9yIiwibmF2U2VsZWN0b3IiLCJkZXRhaWxTZWxlY3RvciIsInNwbGl0IiwiaHRtbCIsIiQiLCJuYXZUZXh0IiwiJHRhYmxlIiwicmVzdWx0c0NvdW50IiwiaGFzQ2xhc3MiLCIkc3BsYXNoU2NyZWVuIiwiJHNob3ciLCIkaGlkZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaXJzdCIsInRleHQiLCJyZXBsYWNlIiwiY2xvc2VzdCIsInVuZGVmaW5lZCIsIm9iamVjdCIsIiR0YWJsZVNlY3Rpb24iLCIkdGFibGVIZWFkIiwiJHRhYmxlQm9keSIsIiRuZXdSb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImRhdGFzZXQiLCJyb3dpZCIsInRvZ2dsZUNsYXNzIiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJlYWNoIiwidGQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJyZXNvbHZlIiwiYXBwZW5kIiwiZW1wdHkiLCJzaWJsaW5ncyIsInVud3JhcCIsImNsaWNrIiwiaGlkZVRhYmxlUm93RGV0YWlscyIsIndyYXAiLCIkc2VsZWN0IiwiZGVmYXVsdFRleHQiLCJkZWZhdWx0T3B0aW9uSWQiLCJwcm9wZXJ0eSIsImdldEFkZGl0aW9uYWxEZXRhaWxzIiwib3B0aW9uIiwiT3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RwaWNrZXIiLCJvYmplY3RDYWxsYmFjayIsInNlYXJjaEtleXMiLCJwYWdlIiwiY2xlYXJUYWJsZSIsImtleSIsIlJlZ0V4cCIsInZhbCIsImFwcGVuZFRhYmxlUm93IiwidXBkYXRlU3BsYXNoU2NyZWVuIiwibWVzc2FnZSIsInR5cGUiLCJkdXJhdGlvbiIsInJlbW92ZSIsIm1zZyIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJIYXJkd2FyZU1hbmFnZXIiLCJkZXZpY2VzIiwiRGV2aWNlIiwiU2V0IiwidCIsImRldmljZXNCeVR5cGUiLCJkZXZpY2UiLCJtYWtlIiwic2VyaWFsTnVtYmVyIiwiZCIsInNlcmlhbF9ubyIsIlNvZnR3YXJlTWFuYWdlciIsInByb2dyYW1zIiwiUHJvZ3JhbSIsInByb2dyYW0iLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJ0b29sdGlwIiwiZGF0ZXRpbWVwaWNrZXIiLCJuZXdWYWx1ZSIsIiRtb2RhbCIsIm1vZGFsIiwiYXR0ciIsIm5vdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29sbGFwc2UiLCJpc1Nob3ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRJdGVtVG9QaWNrZXIiLCJwaWNrZXJFbGVtZW50IiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0IiwiYXV0aG9yIiwiYXV0aG9yX2lkIiwiY2FsbF9pZCIsInRpY2tldF9pZCIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0X2h1bWFuIiwiY3JlYXRlZEF0UmVhbCIsImNyZWF0ZWRfYXQiLCJjcmVhdGVkX2F0X3JlYWwiLCJfYXV0aG9yIiwiZ2V0Q2FsbCIsImdldFRpY2tldCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsImVtYWlsIiwiam9iIiwiam9iX3RpdGxlIiwiZGVwYXJ0bWVudCIsInBob25lIiwicGhvbmVfbnVtYmVyIiwiZXhwZXJ0aXNlX3R5cGVzIiwic3BlY2lhbGlzbXMiLCJzcGVjaWFsaXN0IiwiYW5hbHlzdCIsImFkbWluIiwiX2RlcGFydG1lbnQiLCJyZWFkIiwicmVhZG9ubHkiLCJnZXRFeHBlcnRpc2VUeXBlcyIsImRhdGEiLCJkZXBhcnRtZW50X2lkIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsImdldFRpY2tldHNXaXRoU2x1ZyIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJvcGVyYXRpbmdfc3lzdGVtIiwiZXhwaXJ5X2RhdGUiLCJzdGF0dXNfaWQiLCJBUEkiLCJ0aWNrZXRfc3RhdHVzZXMiLCJTdGFmZlBhZ2UiLCJ0aWNrZXRNYW5hZ2VyIiwidGlja2V0c0NvbHVtbkluZGV4IiwiaW5kZXgiLCJzdGFmZkZvclRpY2tldHMiLCIkdGFibGVSb3ciLCIkcm93cyIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMiLCJzaG93Tm90aWZpY2F0aW9uIiwidXBkYXRlU2luZ2xlVmlld05hdmJhciIsImN1c3RvbXNsdWciLCJzaG93UGVybWlzc2lvbnMiLCJzcmMiLCJzdGFmZlByb2JsZW1UeXBlUGFnZSIsImN1cnJlbnRTcGVjaWFsaXNtcyIsImxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMiLCJzZWFyY2giLCJhc3NpZ24iLCJvYmoiLCJzaG93U3RhZmYiLCJpY29ucyIsImVsSWNvbiIsImVsVGV4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZWxQZXJtaXNzaW9uIiwiVGlja2V0UGFnZSIsInNvZnR3YXJlTWFuYWdlciIsImhhcmR3YXJlTWFuYWdlciIsImN1cnJlbnRUaWNrZXQiLCJmaWx0ZXJlZFRpY2tldHMiLCJmaWx0ZXJlZFRpY2tldCIsImoiLCJzcGxpdFN0YXR1c1NsdWdzIiwiZ2V0TXlUaWNrZXRzIiwiZ2V0VGlja2V0c1dpdGhTbHVnSW4iLCJzdGF0dXNfbmFtZSIsIiR0aWNrZXRDb21tZW50cyIsIiR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlIiwiJHRpY2tldE5vSGFyZHdhcmVTb2Z0d2FyZSIsIiR0aWNrZXRDYWxsSGlzdG9yeUJvZHkiLCJzaG93IiwiaGlkZSIsInNob3dUYWJsZVJvd0RldGFpbHMiLCJhZmZlY3RlZEl0ZW1zIiwiJHRpY2tldEhhcmR3YXJlU29mdHdhcmVCb2R5IiwiYWZmZWN0ZWRJdGVtIiwiaGFzT3duUHJvcGVydHkiLCJtZSIsImdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCIsInRpY2tldEZlZWQiLCIkdGlja2V0RmVlZCIsInNvcnQiLCJhIiwiYiIsInBhcnNlIiwicG9zdCIsInByZXBlbmQiLCJpc1NvbHV0aW9uIiwicmVmcmVzaFBhZ2UiLCIkY2FsbEhpc3RvcnkiLCIkY2FsbFRpY2tldFRhYmxlIiwiY2FsbENvbW1lbnQiLCJnZXRDYWxsTm90ZXNCeUNhbGxJZCIsInNob3dGaWx0ZXJlZFRpY2tldHMiLCJzaG93VGlja2V0VmlldyIsIiRzdGFmZkluZm9ybWF0aW9uIiwiZW1wbG95ZWVJZCIsIiRhc3NpZ25lZFRvT3B0aW9ucyIsImJlc3RTcGVjaWFsaXN0IiwiaGFzU3BlY2lhbGlzbSIsImJlc3RFeHBlcnRpc2VUeXBlU3RhZmYiLCJnZXRCZXN0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQiLCIkc3BlY2lhbGlzdElkIiwiJHNwZWNpYWxpc3RTaG93Y2FzZSIsIkV4cGVydGlzZVR5cGVQYWdlIiwiaXNQYWdlIiwiJHR5cGVDb2x1bW5zIiwiJGxpIiwibG9hZEV4cGVydGlzZVR5cGVJbmZvIiwiZ2V0RXhwZXJ0aXNlVHlwZUJyZWFkY3J1bSIsIm5leHRBbGwiLCIkdHlwZUNvbHVtbiIsImdldFJvb3RFeHBlcnRpc2VUeXBlcyIsImNoaWxkcmVuSWRzIiwic3BlY2lhbGlzdHMiLCJnZXRTcGVjaWFsaXN0cyIsImNoaWxkIiwic2Nyb2xsTGVmdCIsIndpZHRoIiwiZXhwZXJ0aXNlVHlwZUNoYWluIiwiZ2V0RXhwZXJ0aXNlVHlwZUNoYWluIiwibG9hZFN1YkV4cGVydGlzZVR5cGVzIiwicHJvYmxlbVR5cGVQYWdlIiwiJHNpbmdsZVZpZXciLCIkbmF2QmFyIiwiJGV4cGVydGlzZVR5cGVWaWV3IiwiJGV4cGVydGlzZVR5cGVUYWJsZSIsIiRzcGVjaWFsaXN0c1RhYmxlIiwiJHRpY2tldHNUYWJsZSIsIiRub1NwZWNpYWxpc3RzRGF0YSIsIiRub1RpY2tldHNEYXRhIiwiZ2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkIiwiYnJlYWRjcnVtIiwiJGV4cGVydGlzZVR5cGVQaWNrZXIiLCJwcmV2UXVlcnkiLCJsYXN0SW5kZXhPZiIsInR5cGVDaGFpbiIsInBvcCIsIiR0eXBlIiwicGFyZW50cyIsImluaXQiLCJQcm9ibGVtVHlwZVBhZ2UiLCJnb3RvIiwiTnVtYmVyIiwicGFyZW50SWQiLCJwcmV2IiwiY3JlYXRlRXhwZXJ0aXNlVHlwZSIsIiRyb3ciLCJfIiwiY29uZmlybSIsImRlbGV0ZSIsInRoZW4iLCJUdXJib2xpbmtzIiwidmlzaXQiLCJrZXl1cCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsIm5leHRFbGVtZW50U2libGluZyIsImtleUNvZGUiLCJwYXJlbnRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImJsdXIiLCIkbGFzdEFjdGl2ZVR5cGUiLCJpcyIsImZvY3VzIiwiJGNvbHVtbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsYTs7O0FBQ3BCLDBCQUFjO0FBQUE7O0FBQUE7O0FBR2IsUUFBS0Msb0JBQUwsR0FBNEJDLE9BQU9ELG9CQUFQLElBQStCLElBQUlFLDhCQUFKLEVBQTNEOztBQUVBLFFBQUtDLEtBQUwsR0FBZ0JDLElBQUlELEtBQUosQ0FBVUUsR0FBVixDQUFjO0FBQUEsVUFBSyxJQUFJQyxjQUFKLENBQVNDLENBQVQsQ0FBTDtBQUFBLEdBQWQsQ0FBaEI7QUFDQSxRQUFLQyxPQUFMLEdBQWdCSixJQUFJSSxPQUFKLENBQVlILEdBQVosQ0FBZ0I7QUFBQSxVQUFLLElBQUlJLGdCQUFKLENBQVdGLENBQVgsQ0FBTDtBQUFBLEdBQWhCLENBQWhCO0FBQ0EsUUFBS0csUUFBTCxHQUFnQk4sSUFBSU0sUUFBSixDQUFhTCxHQUFiLENBQWlCO0FBQUEsVUFBSyxJQUFJTSxpQkFBSixDQUFZSixDQUFaLENBQUw7QUFBQSxHQUFqQixDQUFoQjtBQUNBLFFBQUtLLFFBQUwsR0FBZ0JSLElBQUlRLFFBQUosQ0FBYVAsR0FBYixDQUFpQjtBQUFBLFVBQUssSUFBSVEsZ0JBQUosQ0FBV04sQ0FBWCxDQUFMO0FBQUEsR0FBakIsQ0FBaEI7QUFDQSxRQUFLTyxjQUFMLEdBQXNCVixJQUFJVSxjQUFKLENBQW1CVCxHQUFuQixDQUF1QjtBQUFBLFVBQUssSUFBSVUsc0JBQUosQ0FBaUJSLENBQWpCLENBQUw7QUFBQSxHQUF2QixDQUF0QjtBQVRhO0FBVWI7O0FBRUQ7Ozs7Ozs7Ozs7MEJBTVFTLE0sRUFBUTtBQUNmLFVBQU8sS0FBS2IsS0FBTCxDQUFXYyxJQUFYLENBQWdCO0FBQUEsV0FBUUMsS0FBS0MsRUFBTCxLQUFZSCxNQUFwQjtBQUFBLElBQWhCLEtBQStDLElBQXREO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztxQ0FNbUJJLFEsRUFBVTtBQUM1QixVQUFPLEtBQUtqQixLQUFMLENBQVdrQixNQUFYLENBQWtCO0FBQUEsV0FBUUgsS0FBS0ksUUFBTCxDQUFjQyxPQUFkLENBQXNCSCxRQUF0QixJQUFrQyxDQUFDLENBQTNDO0FBQUEsSUFBbEIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7dUNBTXFCSixNLEVBQVE7QUFDNUIsVUFBTyxLQUFLTixRQUFMLENBQWNPLElBQWQsQ0FBbUI7QUFBQSxXQUFXTyxRQUFRQyxLQUFSLEtBQWtCVCxNQUE3QjtBQUFBLElBQW5CLEtBQTJELElBQWxFO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs0QkFNVVUsUSxFQUFVO0FBQ25CLFVBQU8sS0FBS2QsUUFBTCxDQUFjSyxJQUFkLENBQW1CO0FBQUEsV0FBVVUsT0FBT1IsRUFBUCxLQUFjTyxRQUF4QjtBQUFBLElBQW5CLEtBQXdELElBQS9EO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztrQ0FNZ0JFLFUsRUFBWTtBQUMzQixVQUFPLEtBQUtoQixRQUFMLENBQWNLLElBQWQsQ0FBbUI7QUFBQSxXQUFVVSxPQUFPRSxJQUFQLEtBQWdCRCxVQUExQjtBQUFBLElBQW5CLEtBQTRELElBQW5FO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs0QkFNVVIsUSxFQUFVO0FBQ25CLFVBQU8sS0FBS1osT0FBTCxDQUFhUyxJQUFiLENBQWtCO0FBQUEsV0FBVWEsT0FBT1gsRUFBUCxLQUFjQyxRQUF4QjtBQUFBLElBQWxCLEtBQXVELElBQTlEO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztxQ0FNbUJXLFMsRUFBVztBQUM3QixVQUFPLEtBQUt2QixPQUFMLENBQWFhLE1BQWIsQ0FBb0I7QUFBQSxXQUFVVSxVQUFVUixPQUFWLENBQWtCTyxPQUFPWCxFQUF6QixJQUErQixDQUFDLENBQTFDO0FBQUEsSUFBcEIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7cUNBTW1CUyxVLEVBQVk7QUFDOUIsVUFBTyxLQUFLcEIsT0FBTCxDQUFhYSxNQUFiLENBQW9CO0FBQUEsV0FBVVMsT0FBT0gsTUFBUCxDQUFjRSxJQUFkLEtBQXVCRCxVQUFqQztBQUFBLElBQXBCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VDQU1xQkksVyxFQUFhO0FBQ2pDLE9BQUl4QixVQUFVLEtBQUtBLE9BQUwsQ0FBYXlCLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBZDs7QUFFQSxRQUFLLElBQUlDLElBQUkxQixRQUFRMkIsTUFBUixHQUFpQixDQUE5QixFQUFpQ0QsS0FBSyxDQUF0QyxFQUF5Q0EsR0FBekMsRUFBOEM7QUFDN0MsUUFBSUYsWUFBWVQsT0FBWixDQUFvQmYsUUFBUTBCLENBQVIsRUFBV1AsTUFBWCxDQUFrQkUsSUFBdEMsTUFBZ0QsQ0FBQyxDQUFyRCxFQUF3RHJCLFFBQVE0QixNQUFSLENBQWVGLENBQWYsRUFBa0IsQ0FBbEI7QUFDeEQ7O0FBRUQsVUFBTzFCLE9BQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3FDQU1tQlEsTSxFQUFRO0FBQzFCLFVBQU8sS0FBS1IsT0FBTCxDQUFhYSxNQUFiLENBQW9CO0FBQUEsV0FBVVMsT0FBT08sTUFBUCxDQUFjZCxPQUFkLENBQXNCUCxNQUF0QixJQUFnQyxDQUFDLENBQTNDO0FBQUEsSUFBcEIsQ0FBUDtBQUNBOzs7OENBRTJCc0IsTyxFQUFTO0FBQ3BDLE9BQUlDLHFCQUFxQixLQUFLdkMsb0JBQUwsQ0FBMEJ1QyxrQkFBbkQ7O0FBRUEsVUFBTyxLQUFLL0IsT0FBTCxDQUFhYSxNQUFiLENBQW9CLGtCQUFVO0FBQ3BDLFdBQU9TLE9BQU9VLHFCQUFQLEtBQWlDRixPQUFqQyxJQUE0Q0MsbUJBQW1CdEIsSUFBbkIsQ0FBd0I7QUFBQSxZQUFLVixFQUFFWSxFQUFGLEtBQVNXLE9BQU9XLHFCQUFyQjtBQUFBLEtBQXhCLEVBQW9FQyxNQUFwRSxLQUErRUosT0FBbEk7QUFDQSxJQUZNLENBQVA7QUFHQTs7OytDQUU0QkssUSxFQUFVO0FBQ3RDLE9BQUlKLHFCQUFxQixLQUFLdkMsb0JBQUwsQ0FBMEJ1QyxrQkFBbkQ7QUFBQSxPQUNDL0IsVUFBcUIsS0FBS0EsT0FEM0I7QUFBQSxPQUVDb0MsU0FBcUIsRUFGdEI7O0FBSUFELFlBQVNFLE9BQVQsQ0FBaUIsbUJBQVc7QUFDM0JELFdBQU9OLE9BQVAsSUFBa0I5QixRQUFRYSxNQUFSLENBQWUsa0JBQVU7QUFDMUMsWUFBT1MsT0FBT1UscUJBQVAsS0FBaUNGLE9BQWpDLElBQ0ZDLG1CQUFtQnRCLElBQW5CLENBQXdCO0FBQUEsYUFBS1YsRUFBRVksRUFBRixLQUFTVyxPQUFPVyxxQkFBckI7QUFBQSxNQUF4QixFQUFvRUMsTUFBcEUsS0FBK0VKLE9BRHBGO0FBRUEsS0FIaUIsQ0FBbEI7QUFJQSxJQUxEOztBQU9BLFVBQU9NLE1BQVA7QUFDQTs7O2lDQUVjO0FBQ2QsVUFBTyxLQUFLRSwyQkFBTCxDQUFpQ0MsV0FBV0MsWUFBWCxDQUF3QkMsV0FBeEIsRUFBakMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7c0NBU29CbkIsTSxFQUFRO0FBQzNCLE9BQUlBLE9BQU9VLHFCQUFQLEtBQWlDLElBQXJDLEVBQTJDLE9BQU9WLE9BQU9vQixvQkFBZDs7QUFFM0MsVUFBT3BCLE9BQU9xQixvQkFBUCxDQUE0QkMsS0FBbkMsQ0FIMkIsQ0FHZTtBQUMxQzs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPdUJ0QixNLEVBQVE7QUFDOUIsVUFBTyxLQUFLdUIsbUJBQUwsQ0FBeUJ2QixNQUF6QixNQUFxQ2lCLFdBQVdDLFlBQVgsQ0FBd0JDLFdBQXhCLEVBQTVDO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztrQ0FNZ0JLLGMsRUFBZ0I7QUFDL0IsVUFBTyxLQUFLeEMsY0FBTCxDQUFvQkcsSUFBcEIsQ0FBeUI7QUFBQSxXQUFnQnNDLGFBQWFwQyxFQUFiLEtBQW9CbUMsY0FBcEM7QUFBQSxJQUF6QixLQUFnRixJQUF2RjtBQUNBOztBQUVEOzs7Ozs7Ozs4Q0FLNEJsQyxRLEVBQVU7QUFDckMsVUFBTyxLQUFLTixjQUFMLENBQW9CTyxNQUFwQixDQUEyQjtBQUFBLFdBQWdCa0MsYUFBYUMsT0FBYixLQUF5QnBDLFFBQXpDO0FBQUEsSUFBM0IsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7NkJBTVdxQyxTLEVBQVc7QUFDckIsVUFBTyxLQUFLL0MsUUFBTCxDQUFjTyxJQUFkLENBQW1CO0FBQUEsV0FBV08sUUFBUUwsRUFBUixLQUFlc0MsU0FBMUI7QUFBQSxJQUFuQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O21DQUtpQkMsRyxFQUFLO0FBQ3JCLFVBQU8sS0FBS2hELFFBQUwsQ0FBY1csTUFBZCxDQUFxQjtBQUFBLFdBQVdxQyxJQUFJbkMsT0FBSixDQUFZQyxRQUFRTCxFQUFwQixJQUEwQixDQUFDLENBQXRDO0FBQUEsSUFBckIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OENBTTRCd0MsZSxFQUFpQjtBQUFBOztBQUM1QyxPQUFJQyxpQkFBaUIsS0FBSzVELG9CQUFMLENBQTBCNkQsc0NBQTFCLENBQWlFRixlQUFqRSxDQUFyQjtBQUFBLE9BQ0M1QixZQUFpQixZQUFHK0IsTUFBSCxnQ0FBYUYsZUFBZXZELEdBQWYsQ0FBbUI7QUFBQSxXQUFLRSxFQUFFQyxPQUFQO0FBQUEsSUFBbkIsQ0FBYixFQURsQixDQUQ0QyxDQUV3Qjs7QUFFcEUsVUFBTyxLQUFLdUQsa0JBQUwsQ0FBd0JoQyxTQUF4QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7eUJBT09pQyxLLEVBQU9DLFUsRUFBWTtBQUN6QiwrSEFBb0IsS0FBS3pELE9BQXpCLEVBQWtDd0QsS0FBbEMsRUFBeUNDLFVBQXpDO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNc0JQLEcsRUFBSztBQUMxQixVQUFPLEtBQUtsRCxPQUFMLENBQWFhLE1BQWIsQ0FBb0I7QUFBQSxXQUFVcUMsSUFBSW5DLE9BQUosQ0FBWU8sT0FBT1gsRUFBbkIsSUFBeUIsQ0FBQyxDQUFwQztBQUFBLElBQXBCLENBQVA7QUFDQTs7OztFQWxQeUMrQyxpQjs7a0JBQXRCbkUsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQm9FLFk7OztBQUNwQix5QkFBYztBQUFBOztBQUFBOztBQUdiLFFBQUtmLEtBQUwsR0FBbUJoRCxJQUFJZ0QsS0FBSixDQUFVL0MsR0FBVixDQUFjO0FBQUEsVUFBSyxJQUFJK0Qsa0JBQUosQ0FBYTdELENBQWIsQ0FBTDtBQUFBLEdBQWQsQ0FBbkI7QUFDQSxRQUFLOEQsV0FBTCxHQUFtQmpFLElBQUlpRSxXQUF2QjtBQUphO0FBS2I7O0FBRUQ7Ozs7Ozs7Ozs7c0JBTUlsRCxFLEVBQUk7QUFDUCxVQUFPLEtBQUtpQyxLQUFMLENBQVduQyxJQUFYLENBQWdCO0FBQUEsV0FBWXFELFNBQVNuRCxFQUFULEtBQWdCQSxFQUE1QjtBQUFBLElBQWhCLEtBQW1ELElBQTFEO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs2Q0FNMkJvRCxVLEVBQVlDLEssRUFBTztBQUM3QyxVQUFPLEtBQUtwQixLQUFMLENBQVcvQixNQUFYLENBQWtCO0FBQUEsV0FBWWlELFNBQVNHLE1BQVQsQ0FBZ0JGLFVBQWhCLEtBQStCQyxLQUEzQztBQUFBLElBQWxCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Z0NBS2dDO0FBQUEsT0FBcEJFLFVBQW9CLHVFQUFQLEtBQU87O0FBQy9CLE9BQUl2RCxLQUFLLENBQVQsQ0FEK0IsQ0FDbkI7O0FBRVo7QUFDQSxPQUFJdUQsVUFBSixFQUFnQjtBQUNmLFdBQU8sS0FBS0MsR0FBTCxDQUFTeEQsRUFBVCxDQUFQO0FBQ0E7O0FBRUQsVUFBT0EsRUFBUDtBQUNBOztBQUVEOzs7Ozs7OztpQ0FLZXlELGEsRUFBZTtBQUM3QixPQUFJeEIsUUFBUyxLQUFLQSxLQUFsQjtBQUFBLE9BQ0kvQixTQUFTLFNBQVRBLE1BQVM7QUFBQSxXQUFNO0FBQUEsWUFBWWlELFNBQVNPLFlBQVQsQ0FBc0J0RCxPQUF0QixDQUE4QkosRUFBOUIsSUFBb0MsQ0FBQyxDQUFqRDtBQUFBLEtBQU47QUFBQSxJQURiOztBQUdBLE9BQUksUUFBT3lELGFBQVAseUNBQU9BLGFBQVAsT0FBeUIsUUFBN0IsRUFBdUM7QUFDdEMsUUFBSUUsU0FBUyxFQUFiOztBQURzQztBQUFBO0FBQUE7O0FBQUE7QUFHdEMsMEJBQWVGLGFBQWYsOEhBQThCO0FBQUEsVUFBckJ6RCxFQUFxQjs7QUFDN0IyRCxhQUFPQyxJQUFQLENBQVkzQixNQUFNL0IsTUFBTixDQUFhQSxPQUFPRixFQUFQLENBQWIsQ0FBWjtBQUNBO0FBTHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3RDLFdBQU8yRCxNQUFQO0FBQ0EsSUFSRCxNQVFPO0FBQ04sV0FBTzFCLE1BQU0vQixNQUFOLENBQWFBLE9BQU91RCxhQUFQLENBQWIsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT2NOLFEsRUFBVVgsZSxFQUFpQjtBQUN4QyxVQUFPVyxTQUFTTyxZQUFULENBQXNCdEQsT0FBdEIsQ0FBOEJvQyxlQUE5QixJQUFpRCxDQUFDLENBQXpEO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7eUJBT09LLEssRUFBT0MsVSxFQUFZO0FBQ3pCLDZIQUFvQixLQUFLYixLQUF6QixFQUFnQ1ksS0FBaEMsRUFBdUNDLFVBQXZDO0FBQ0E7Ozs7RUF0RndDQyxpQjs7a0JBQXJCQyxZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQmpFLG9COzs7QUFDcEIsaUNBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLMEQsY0FBTCxHQUEwQnhELElBQUl3RCxjQUFKLENBQW1CdkQsR0FBbkIsQ0FBdUI7QUFBQSxVQUFLLElBQUkyRSx1QkFBSixDQUFrQnpFLENBQWxCLENBQUw7QUFBQSxHQUF2QixDQUExQjtBQUNBLFFBQUtnQyxrQkFBTCxHQUEwQm5DLElBQUltQyxrQkFBSixDQUF1QmxDLEdBQXZCLENBQTJCO0FBQUEsVUFBSyxJQUFJNEUsNEJBQUosQ0FBdUIxRSxDQUF2QixDQUFMO0FBQUEsR0FBM0IsQ0FBMUI7QUFKYTtBQUtiOztBQUVEOzs7Ozs7Ozs7MENBS3dCO0FBQ3ZCLFVBQU8sS0FBS3FELGNBQUwsQ0FBb0J2QyxNQUFwQixDQUEyQjtBQUFBLFdBQWlCdUQsY0FBY00sT0FBZCxJQUF5QixJQUExQztBQUFBLElBQTNCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O21DQU1pQnZCLGUsRUFBaUI7QUFDakMsVUFBTyxLQUFLQyxjQUFMLENBQW9CM0MsSUFBcEIsQ0FBeUI7QUFBQSxXQUFpQjJELGNBQWN6RCxFQUFkLEtBQXFCd0MsZUFBdEM7QUFBQSxJQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztvQ0FNa0J3QixnQixFQUFrQjtBQUNuQyxVQUFPLEtBQUt2QixjQUFMLENBQW9CdkMsTUFBcEIsQ0FBMkI7QUFBQSxXQUFpQjhELGlCQUFpQjVELE9BQWpCLENBQXlCcUQsY0FBY3pELEVBQXZDLElBQTZDLENBQUMsQ0FBL0Q7QUFBQSxJQUEzQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt5REFNdUN3QyxlLEVBQWlCO0FBQ3ZELFVBQU8sS0FBS3BCLGtCQUFMLENBQXdCbEIsTUFBeEIsQ0FBK0I7QUFBQSxXQUFzQmtCLG1CQUFtQjZDLGVBQW5CLEtBQXVDekIsZUFBN0Q7QUFBQSxJQUEvQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNc0JpQixhLEVBQWU7QUFDcEMsT0FBSVMsc0JBQXNCVCxhQUExQjtBQUFBLE9BQ0NoQixpQkFBc0IsQ0FBQ3lCLG1CQUFELENBRHZCOztBQUdBLFVBQU9BLHVCQUF1QixJQUE5QixFQUFvQztBQUNuQ0EsMEJBQXNCQSxvQkFBb0JDLE1BQTFDOztBQUVBLFFBQUlELHVCQUF1QixJQUEzQixFQUFpQztBQUNoQ3pCLG9CQUFlbUIsSUFBZixDQUFvQk0sbUJBQXBCO0FBQ0E7QUFDRDs7QUFFRCxVQUFPekIsY0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztpREFRK0JELGUsRUFBaUJyQixPLEVBQVM7QUFDeEQsVUFBTyxLQUFLQyxrQkFBTCxDQUF3QnRCLElBQXhCLENBQTZCO0FBQUEsV0FBc0JzQixtQkFBbUJHLE1BQW5CLEtBQThCSixPQUE5QixJQUF5Q0MsbUJBQW1CNkMsZUFBbEY7QUFBQSxJQUE3QixLQUFtSSxJQUExSTtBQUNBOztBQUVEOzs7Ozs7Ozs7d0NBTXNCRyxvQixFQUFzQjtBQUMzQyxVQUFPLEtBQUtoRCxrQkFBTCxDQUF3QnRCLElBQXhCLENBQTZCO0FBQUEsV0FBc0JzQixtQkFBbUJwQixFQUFuQixLQUEwQm9FLG9CQUFoRDtBQUFBLElBQTdCLEtBQXNHLElBQTdHO0FBQ0E7Ozt5QkFFTXZCLEssRUFBT0MsVSxFQUFZO0FBQ3pCLDZJQUFvQixLQUFLTCxjQUF6QixFQUF5Q0ksS0FBekMsRUFBZ0RDLFVBQWhEO0FBQ0E7Ozs7RUE1RmdEQyxpQjs7a0JBQTdCaEUsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnJCOzs7Ozs7SUFNcUJnRSxPO0FBQ3BCLG9CQUFjO0FBQUE7QUFFYjtBQURBOzs7QUFHRDs7Ozs7Ozs7Ozs7MkJBT21EO0FBQUEsT0FBNUNzQixRQUE0Qyx1RUFBakMsRUFBaUM7QUFBQSxPQUE3QnhCLEtBQTZCLHVFQUFyQixFQUFxQjtBQUFBLE9BQWpCQyxVQUFpQix1RUFBSixFQUFJOztBQUNsREQsV0FBUUEsTUFBTXlCLFdBQU4sRUFBUixDQURrRCxDQUNyQjs7QUFFN0IsVUFBT0QsU0FBU25FLE1BQVQsQ0FBZ0IsY0FBTTtBQUFFO0FBQzlCLFdBQU80QyxXQUFXeUIsSUFBWCxDQUFnQixnQkFBUTtBQUFFO0FBQ2hDLFNBQUlDLE9BQU9DLEdBQUdDLElBQUgsQ0FBUCxFQUFpQkosV0FBakIsR0FBK0JLLFFBQS9CLENBQXdDOUIsS0FBeEMsQ0FBSixFQUFvRCxPQUFPLElBQVAsQ0FEdEIsQ0FDbUM7QUFDakUsS0FGTSxDQUFQO0FBR0EsSUFKTSxDQUFQO0FBS0E7Ozs7OztrQkFwQm1CRSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7Ozs7O0lBT002QixXO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQWVBLHdCQUtRO0FBQUEsaUZBQUosRUFBSTtBQUFBLGtDQUpQQyxlQUlPO0FBQUEsTUFKUEEsZUFJTyx3Q0FKVyxZQUlYO0FBQUEsZ0NBSFBDLGFBR087QUFBQSxNQUhQQSxhQUdPLHNDQUhTLGdCQUdUO0FBQUEsTUFGUEMsV0FFTyxRQUZQQSxXQUVPO0FBQUEsTUFEUEMsY0FDTyxRQURQQSxjQUNPOztBQUFBOztBQUNQLE9BQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQTtBQUNBLE9BQUtDLFdBQUwsR0FBbUJBLGNBQWNBLFdBQWQsR0FBNkJGLG9CQUFvQixZQUFwQixHQUFtQ0EsZ0JBQWdCSSxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixJQUFnQyxNQUFuRSxHQUE0RSxzQkFBNUg7QUFDQSxPQUFLRCxjQUFMLEdBQXNCQSxpQkFBaUJBLGNBQWpCLEdBQW1DSCxvQkFBb0IsWUFBcEIsR0FBbUNBLGdCQUFnQkksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsSUFBZ0MsU0FBbkUsR0FBK0UsY0FBeEk7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7eUNBT3VCQyxJLEVBQU07QUFDNUJDLEtBQUUsS0FBS0gsY0FBUCxFQUF1QmxGLElBQXZCLENBQTRCLGFBQTVCLEVBQTJDb0YsSUFBM0MsQ0FBZ0RBLElBQWhEO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7dUNBT21DO0FBQUEsT0FBaEJFLE9BQWdCLHVFQUFOLElBQU07O0FBQ2xDO0FBQ0EsT0FBSUMsU0FBU0YsRUFBRSxLQUFLTCxhQUFQLENBQWI7O0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDRVEsa0JBQWVELE9BQU92RixJQUFQLENBQVksVUFBWixFQUF3QkksTUFBeEIsQ0FBK0IsVUFBQ2EsQ0FBRCxFQUFJMEQsRUFBSjtBQUFBLFdBQVcsQ0FBQ1UsRUFBRVYsRUFBRixFQUFNYyxRQUFOLENBQWUsWUFBZixDQUFaO0FBQUEsSUFBL0IsRUFBeUV2RSxNQUw1Rjs7QUFNRTtBQUNFd0UsbUJBQWdCTCxFQUFFLEtBQUtOLGVBQVAsRUFBd0IvRSxJQUF4QixDQUE2QixnQkFBN0IsQ0FQcEI7O0FBU0E7QUFDQTs7QUFaa0MsZUFhYndGLGVBQWUsQ0FBQ0QsTUFBRCxFQUFTRyxhQUFULENBQWYsR0FBeUMsQ0FBQ0EsYUFBRCxFQUFnQkgsTUFBaEIsQ0FiNUI7QUFBQTtBQUFBLE9BYTdCSSxLQWI2QjtBQUFBLE9BYXRCQyxLQWJzQjs7QUFjbENBLFNBQU1DLFFBQU4sQ0FBZSxjQUFmO0FBQ0FGLFNBQU1HLFdBQU4sQ0FBa0IsY0FBbEI7O0FBRUE7QUFDQSxPQUFJLENBQUNSLE9BQUwsRUFBYztBQUNiO0FBQ0FBLGNBQVVFLGVBQWUsR0FBZixHQUFxQkgsRUFBRSxLQUFLSixXQUFQLEVBQW9CakYsSUFBcEIsQ0FBeUIsV0FBekIsRUFBc0MrRixLQUF0QyxHQUE4Q0MsSUFBOUMsR0FBcURDLE9BQXJELENBQTZELE1BQTdELEVBQXFFLEVBQXJFLENBQS9CO0FBQ0E7O0FBRUQ7QUFDQVosS0FBRSxLQUFLTixlQUFQLEVBQXdCbUIsT0FBeEIsQ0FBZ0MsU0FBaEMsRUFBMkNsRyxJQUEzQyxDQUFnRCxhQUFoRCxFQUErRGdHLElBQS9ELENBQW9FUixpQkFBaUJXLFNBQWpCLEdBQTZCYixPQUE3QixHQUF1QyxVQUEzRztBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O2lDQWFlYyxNLEVBQVE7QUFDdEIsT0FBSUMsZ0JBQWdCaEIsRUFBRSxLQUFLTCxhQUFQLENBQXBCO0FBQUEsT0FDSXNCLGFBQWdCRCxjQUFjckcsSUFBZCxDQUFtQixnQkFBbkIsQ0FEcEI7QUFBQSxPQUVJdUcsYUFBZ0JGLGNBQWNyRyxJQUFkLENBQW1CLGFBQW5CLENBRnBCO0FBQUEsT0FHSXdHLFVBQWdCbkIsRUFBRW9CLFNBQVNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRixDQUhwQjs7QUFLQTtBQUNBLE9BQUlILFdBQVdJLFFBQVgsQ0FBb0IsbUJBQW1CUCxPQUFPbEcsRUFBMUIsR0FBK0IsS0FBbkQsRUFBMERnQixNQUExRCxHQUFtRSxDQUF2RSxFQUEwRTs7QUFFMUU7QUFDQXNGLFdBQVEsQ0FBUixFQUFXSSxPQUFYLENBQW1CQyxLQUFuQixHQUEyQlQsT0FBT2xHLEVBQWxDO0FBQ0FzRyxXQUFRTSxXQUFSLENBQW9CLFdBQXBCLEVBQWlDVixPQUFPbEcsRUFBUCxJQUFhNkcsU0FBU0MsU0FBU0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCLENBQXhCLENBQVQsQ0FBOUM7O0FBRUFaLGNBQVdLLFFBQVgsQ0FBb0IsSUFBcEIsRUFBMEJRLElBQTFCLENBQStCLFlBQVc7QUFDekMsUUFBSXZHLE9BQU8sS0FBS2dHLE9BQUwsQ0FBYWhHLElBQXhCO0FBQUEsUUFBOEJ3RyxLQUFLWCxTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQW5DOztBQUVBLFFBQUk5RixTQUFTLEtBQWIsRUFBb0I7QUFBRTtBQUNyQndHLFFBQUdDLFNBQUgsR0FBZSwyQkFBZjtBQUNBLEtBRkQsTUFFTyxJQUFJekcsUUFBUUEsS0FBS2lFLFFBQUwsQ0FBYyxRQUFkLENBQVosRUFBcUM7QUFDM0M7QUFDQXVDLFFBQUdDLFNBQUgsR0FBZUMsT0FBT0MsT0FBUCxDQUFlM0csSUFBZixFQUFxQndGLE1BQXJCLElBQStCLEtBQUtpQixTQUFwQyxHQUFnRCxHQUEvRDtBQUNBLEtBSE0sTUFHQTtBQUNORCxRQUFHQyxTQUFILEdBQWVDLE9BQU9DLE9BQVAsQ0FBZTNHLElBQWYsRUFBcUJ3RixNQUFyQixNQUFpQ0QsU0FBakMsR0FBNkNDLE9BQU94RixJQUFQLENBQTdDLEdBQTRELEdBQTNFO0FBQ0E7O0FBRUQ0RixZQUFRZ0IsTUFBUixDQUFlSixFQUFmO0FBQ0EsSUFiRDs7QUFlQWIsY0FBV2lCLE1BQVgsQ0FBa0JoQixPQUFsQjs7QUFFQSxVQUFPQSxRQUFRLENBQVIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7K0JBR2E7QUFDWm5CLEtBQUUsS0FBS0wsYUFBUCxFQUFzQmhGLElBQXRCLENBQTJCLE9BQTNCLEVBQW9DeUgsS0FBcEM7QUFDQTs7QUFFRDs7Ozs7Ozs7d0NBSytCO0FBQUE7O0FBQUEsT0FBWHZILEVBQVcsdUVBQU4sSUFBTTs7QUFDOUI7QUFDQTtBQUNBbUYsS0FBRSxLQUFLTCxhQUFQLEVBQXNCaEYsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUNJLE1BQXZDLENBQThDLFVBQUNhLENBQUQsRUFBSTBELEVBQUo7QUFBQSxXQUFXQSxHQUFHaUMsT0FBSCxDQUFXQyxLQUFYLElBQW9CM0csRUFBL0I7QUFBQSxJQUE5QyxFQUFpRjJGLFFBQWpGLENBQTBGLFdBQTFGLEVBQXVHRSxLQUF2RyxHQUErRzJCLFFBQS9HLEdBQTBINUIsV0FBMUgsQ0FBc0ksV0FBdEk7O0FBRUE7QUFDQVQsS0FBRSxLQUFLSCxjQUFQLEVBQXVCeUMsTUFBdkIsQ0FBOEIsS0FBOUI7QUFDQztBQURELElBRUUzSCxJQUZGLENBRU8seUJBRlAsRUFFa0M0SCxLQUZsQyxDQUV3QztBQUFBLFdBQU0sTUFBS0MsbUJBQUwsRUFBTjtBQUFBLElBRnhDOztBQUlBLE9BQUkzSCxLQUFLLENBQUMsQ0FBVixFQUFhOEcsU0FBU0MsSUFBVCxHQUFnQkYsU0FBUzdHLEVBQVQsQ0FBaEI7QUFDYjs7QUFFRDs7Ozs7O3dDQUdzQjtBQUNyQjtBQUNBbUYsS0FBRSxLQUFLTCxhQUFQLEVBQXNCaEYsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUM4RixXQUF2QyxDQUFtRCxXQUFuRDtBQUNBO0FBQ0FULEtBQUUsS0FBS0gsY0FBUCxFQUF1QjlFLE1BQXZCLENBQThCLFVBQUNhLENBQUQsRUFBSTBELEVBQUo7QUFBQSxXQUFXVSxFQUFFVixFQUFGLEVBQU1OLE1BQU4sQ0FBYSxLQUFiLEVBQW9CbkQsTUFBcEIsS0FBK0IsQ0FBMUM7QUFBQSxJQUE5QixFQUEyRTRHLElBQTNFLENBQWdGckIsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFoRjs7QUFFQU0sWUFBU0MsSUFBVCxHQUFnQixFQUFoQjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7OztzQ0FXb0JjLE8sRUFBU0MsVyxFQUFhekQsUSxFQUFrRjtBQUFBLE9BQXhFMEQsZUFBd0UsdUVBQXRELElBQXNEO0FBQUEsT0FBaERDLFFBQWdELHVFQUFyQyxNQUFxQztBQUFBLE9BQTdCQyxvQkFBNkIsdUVBQU4sSUFBTTs7QUFDM0g7QUFDQSxPQUFJQyxTQUFTLElBQUlDLE1BQUosQ0FBV0wsV0FBWCxFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxJQUFwQyxDQUFiO0FBQ0FJLFVBQU9FLFFBQVAsR0FBa0IsSUFBbEI7QUFDQVAsV0FBUU4sS0FBUixHQUFnQkQsTUFBaEIsQ0FBdUJZLE1BQXZCOztBQUVBO0FBQ0E3RCxZQUFTM0MsT0FBVCxDQUFpQixhQUFLO0FBQ3JCLFFBQUl1Ryx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDbENKLGFBQVFQLE1BQVIsQ0FBZSxJQUFJYSxNQUFKLENBQVcsTUFBTS9JLEVBQUVZLEVBQVIsR0FBYSxHQUFiLEdBQW1CaUkscUJBQXFCN0ksQ0FBckIsQ0FBbkIsR0FBNkMsR0FBN0MsR0FBbURBLEVBQUU0SSxRQUFGLENBQTlELEVBQTJFNUksRUFBRVksRUFBN0UsRUFBaUYsS0FBakYsRUFBd0ZaLEVBQUVZLEVBQUYsS0FBUytILGVBQWpHLENBQWY7QUFDQSxLQUZELE1BRU87QUFDTkYsYUFBUVAsTUFBUixDQUFlLElBQUlhLE1BQUosQ0FBVyxNQUFNL0ksRUFBRVksRUFBUixHQUFhLEdBQWIsR0FBbUJaLEVBQUU0SSxRQUFGLENBQTlCLEVBQTJDNUksRUFBRVksRUFBN0MsRUFBaUQsS0FBakQsRUFBd0RaLEVBQUVZLEVBQUYsS0FBUytILGVBQWpFLENBQWY7QUFDQTtBQUNELElBTkQ7O0FBUUFGLFdBQVFRLFlBQVIsQ0FBcUIsU0FBckI7QUFDQTs7QUFFRDs7Ozs7Ozs7O3lCQU1PeEYsSyxFQUF1RDtBQUFBLE9BQWhEd0IsUUFBZ0QsdUVBQXJDLEVBQXFDO0FBQUEsT0FBakNpRSxjQUFpQztBQUFBLE9BQWpCQyxVQUFpQix1RUFBSixFQUFJOztBQUM3RCxPQUFJQyxPQUFPLElBQVg7O0FBRUFBLFFBQUtDLFVBQUw7O0FBRUEsT0FBSXBFLFNBQVNyRCxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3hCcUQsYUFBUzNDLE9BQVQsQ0FBaUIsVUFBUytDLEVBQVQsRUFBYTtBQUM3QixTQUFJeUIsU0FBU29DLGVBQWU3RCxFQUFmLENBQWI7O0FBRUE4RCxnQkFBVzdHLE9BQVgsQ0FBbUIsZUFBTztBQUN6QndFLGFBQU93QyxHQUFQLElBQWNsRSxPQUFPMEIsT0FBT3dDLEdBQVAsQ0FBUCxFQUFvQjNDLE9BQXBCLENBQTRCLElBQUk0QyxNQUFKLENBQVcsTUFBTTlGLEtBQU4sR0FBYyxHQUF6QixFQUE4QixJQUE5QixDQUE1QixFQUFpRSxxQkFBakUsQ0FBZDtBQUNBLE1BRkQ7O0FBSUEsU0FBSUEsVUFBVXNDLEVBQUUscUJBQUYsRUFBeUJ5RCxHQUF6QixFQUFkLEVBQThDO0FBQzdDSixXQUFLSyxjQUFMLENBQW9CM0MsTUFBcEI7QUFDQXNDLFdBQUtNLGtCQUFMLENBQTJCekUsU0FBU3JELE1BQXBDLGdCQUFvRHFELFNBQVNyRCxNQUFULEtBQW9CLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCLEVBQWxGLG9CQUE2RjZCLEtBQTdGO0FBQ0E7QUFDRCxLQVhEO0FBWUEsSUFiRCxNQWFPO0FBQ04yRixTQUFLTSxrQkFBTCwyQkFBMkNqRyxLQUEzQztBQUNBO0FBRUQ7O0FBRUQ7Ozs7Ozs7Ozs7O3FDQVFzRjtBQUFBLE9BQTlEa0csT0FBOEQsdUVBQXBELG1CQUFvRDtBQUFBLE9BQS9CQyxJQUErQix1RUFBeEIsUUFBd0I7QUFBQSxPQUFkQyxRQUFjLHVFQUFILENBQUc7O0FBQ3JGO0FBQ0E5RCxLQUFFLHFCQUFGLEVBQXlCK0QsTUFBekI7O0FBRUE7QUFDQSxPQUFNQyxNQUFNNUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EyQyxPQUFJbkosRUFBSixHQUFTLG9CQUFUO0FBQ0FtSixPQUFJQyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsT0FBbEIsYUFBb0NMLElBQXBDLEVBQTRDLG9CQUE1QztBQUNBRyxPQUFJRyxZQUFKLENBQWlCLE1BQWpCLEVBQXlCLE9BQXpCLEVBUnFGLENBUWxEO0FBQ25DOztBQUVBSCxPQUFJSSxXQUFKLEdBQWtCUixPQUFsQjtBQUNBeEMsWUFBU2lELElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sR0FBMUI7O0FBRUE7QUFDQU8sY0FBVztBQUFBLFdBQU1QLElBQUlELE1BQUosRUFBTjtBQUFBLElBQVgsRUFBK0JELFdBQVcsSUFBMUM7O0FBRUE7QUFDQTlELEtBQUVnRSxHQUFGLEVBQU96QixLQUFQLENBQWEsWUFBVztBQUN2QnZDLE1BQUUsSUFBRixFQUFRd0UsT0FBUjtBQUNBLElBRkQ7QUFHQTs7Ozs7O2tCQUdhL0UsVzs7Ozs7Ozs7Ozs7Ozs7O0FDL1BmOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCZ0YsZTs7O0FBQ3BCLDRCQUFjO0FBQUE7O0FBQUE7O0FBR2IsUUFBS0MsT0FBTCxHQUFlNUssSUFBSTRLLE9BQUosQ0FBWTNLLEdBQVosQ0FBZ0I7QUFBQSxVQUFLLElBQUk0SyxnQkFBSixDQUFXMUssQ0FBWCxDQUFMO0FBQUEsR0FBaEIsQ0FBZjtBQUhhO0FBSWI7O0FBRUQ7Ozs7Ozs7OztnQ0FLYztBQUNiLHVDQUFXLElBQUkySyxHQUFKLENBQVEsS0FBS0YsT0FBTCxDQUFhM0ssR0FBYixDQUFpQjtBQUFBLFdBQUs4SyxFQUFFaEIsSUFBUDtBQUFBLElBQWpCLENBQVIsQ0FBWDtBQUNBOztBQUVEOzs7Ozs7OztvQ0FLa0JBLEksRUFBTTtBQUN2QixPQUFJaUIsZ0JBQWdCLEtBQUtKLE9BQUwsQ0FBYTNKLE1BQWIsQ0FBb0I7QUFBQSxXQUFVZ0ssT0FBT2xCLElBQVAsSUFBZUEsSUFBekI7QUFBQSxJQUFwQixDQUFwQjs7QUFFQSx1Q0FBVyxJQUFJZSxHQUFKLENBQVFFLGNBQWMvSyxHQUFkLENBQWtCO0FBQUEsV0FBSzhLLEVBQUVHLElBQVA7QUFBQSxJQUFsQixDQUFSLENBQVg7QUFDQTs7QUFFRDs7Ozs7Ozs7MENBS3dCbkIsSSxFQUFLbUIsSSxFQUFNO0FBQ2xDLFVBQU8sS0FBS04sT0FBTCxDQUFhM0osTUFBYixDQUFvQjtBQUFBLFdBQVVnSyxPQUFPbEIsSUFBUCxJQUFlQSxJQUFmLElBQXVCa0IsT0FBT0MsSUFBUCxJQUFlQSxJQUFoRDtBQUFBLElBQXBCLENBQVA7QUFDQTs7QUFHRDs7Ozs7Ozs7OzZCQU1XNUgsRyxFQUFLO0FBQ2YsVUFBTyxLQUFLc0gsT0FBTCxDQUFhM0osTUFBYixDQUFvQjtBQUFBLFdBQVVxQyxJQUFJbkMsT0FBSixDQUFZOEosT0FBT2xLLEVBQW5CLElBQXlCLENBQUMsQ0FBcEM7QUFBQSxJQUFwQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztzQkFNSUEsRSxFQUFJO0FBQ1AsVUFBTyxLQUFLNkosT0FBTCxDQUFhL0osSUFBYixDQUFrQjtBQUFBLFdBQVVvSyxPQUFPbEssRUFBUCxLQUFjQSxFQUF4QjtBQUFBLElBQWxCLEtBQWlELElBQXhEO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzswQ0FNd0JvSyxZLEVBQWM7QUFDckMsVUFBTyxLQUFLUCxPQUFMLENBQWEvSixJQUFiLENBQWtCO0FBQUEsV0FBS3VLLEVBQUVDLFNBQUYsS0FBZ0JGLFlBQXJCO0FBQUEsSUFBbEIsQ0FBUDtBQUNBOzs7O0VBakUyQ3JILGlCOztrQkFBeEI2RyxlOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCVyxlOzs7QUFDcEIsNEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxRQUFMLEdBQWdCdkwsSUFBSXVMLFFBQUosQ0FBYXRMLEdBQWIsQ0FBaUI7QUFBQSxVQUFLLElBQUl1TCxpQkFBSixDQUFZckwsQ0FBWixDQUFMO0FBQUEsR0FBakIsQ0FBaEI7QUFIYTtBQUliOztBQUVEOzs7Ozs7Ozs7OzhCQU1ZbUQsRyxFQUFLO0FBQ2hCLFVBQU8sS0FBS2lJLFFBQUwsQ0FBY3RLLE1BQWQsQ0FBcUI7QUFBQSxXQUFXcUMsSUFBSW5DLE9BQUosQ0FBWXNLLFFBQVExSyxFQUFwQixJQUEwQixDQUFDLENBQXRDO0FBQUEsSUFBckIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7c0JBTUlBLEUsRUFBSTtBQUNQLFVBQU8sS0FBS3dLLFFBQUwsQ0FBYzFLLElBQWQsQ0FBbUI7QUFBQSxXQUFXNEssUUFBUTFLLEVBQVIsS0FBZUEsRUFBMUI7QUFBQSxJQUFuQixLQUFvRCxJQUEzRDtBQUNBOzs7O0VBekIyQytDLGlCOztrQkFBeEJ3SCxlOzs7Ozs7Ozs7QUNYckI7QUFDQXBGLEVBQUUsTUFBRixFQUFVd0YsRUFBVixDQUFhLE9BQWIsRUFBc0IsU0FBdEIsRUFBaUMsYUFBSztBQUNyQ3hGLEdBQUUvRixFQUFFd0wsYUFBSixFQUFtQnpHLE1BQW5CLEdBQTRCd0IsUUFBNUIsQ0FBcUMsUUFBckMsRUFBK0M2QixRQUEvQyxHQUEwRDVCLFdBQTFELENBQXNFLFFBQXRFO0FBQ0EsQ0FGRDs7QUFJQTtBQUNBVCxFQUFFLHlCQUFGLEVBQTZCMEYsT0FBN0I7O0FBRUE7QUFDQTFGLEVBQUUsYUFBRixFQUFpQjJGLGNBQWpCOztBQUVBO0FBQ0EzRixFQUFFb0IsUUFBRixFQUFZb0UsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsVUFBU3ZMLENBQVQsRUFBWTtBQUNwRCxLQUFJMkwsV0FBVzVGLEVBQUUsSUFBRixFQUFRYSxPQUFSLENBQWdCLHFCQUFoQixFQUF1Q1MsUUFBdkMsQ0FBZ0QsZUFBaEQsRUFBaUVBLFFBQWpFLENBQTBFLE9BQTFFLEVBQW1GbUMsR0FBbkYsRUFBZjtBQUFBLEtBQ0lvQyxTQUFXN0YsRUFBRSxrQkFBRixDQURmOztBQUdBNkYsUUFBT0MsS0FBUCxDQUFhLE1BQWI7O0FBRUFELFFBQU9sTCxJQUFQLENBQVksMEJBQVosRUFBd0M4SSxHQUF4QyxDQUE0Q21DLFFBQTVDO0FBQ0FDLFFBQU9sTCxJQUFQLENBQVksNEJBQVosRUFBMEM4SSxHQUExQyxDQUE4Q3pELEVBQUUsSUFBRixFQUFRYSxPQUFSLENBQWdCLG1CQUFoQixFQUFxQ2xHLElBQXJDLENBQTBDLFFBQTFDLEVBQW9Eb0wsSUFBcEQsQ0FBeUQsTUFBekQsQ0FBOUMsRUFQb0QsQ0FPNkQ7QUFDakgsQ0FSRDs7QUFVQS9GLEVBQUUsNERBQUYsRUFBZ0V3RixFQUFoRSxDQUFtRSxlQUFuRSxFQUFvRixZQUFZO0FBQy9GeEYsR0FBRSxJQUFGLEVBQVFyRixJQUFSLENBQWEsaUJBQWIsRUFDRXFMLEdBREYsQ0FDTSxtQkFETixFQUVFdkMsR0FGRixDQUVNLEVBRk47O0FBSUF6RCxHQUFFLElBQUYsRUFBUXJGLElBQVIsQ0FBYSxvQ0FBYixFQUFtRG9KLE1BQW5EOztBQUVBLEtBQUlrQyxjQUFjLElBQUlDLElBQUosRUFBbEI7O0FBRUFsRyxHQUFFLElBQUYsRUFBUXJGLElBQVIsQ0FBYSxhQUFiLEVBQTRCOEksR0FBNUIsQ0FBZ0MsQ0FBQyxPQUFPd0MsWUFBWUUsUUFBWixLQUF5QixDQUFoQyxDQUFELEVBQXFDeEssS0FBckMsQ0FBMkMsQ0FBQyxDQUE1QyxJQUFpRCxHQUFqRCxHQUF1RCxDQUFDLE1BQU1zSyxZQUFZRyxPQUFaLEVBQVAsRUFBOEJ6SyxLQUE5QixDQUFvQyxDQUFDLENBQXJDLENBQXZELEdBQWlHLEdBQWpHLEdBQXVHc0ssWUFBWUksV0FBWixFQUF2RyxHQUFtSSxHQUFuSSxHQUF5SSxDQUFDLE1BQU1KLFlBQVlLLFFBQVosRUFBUCxFQUErQjNLLEtBQS9CLENBQXFDLENBQUMsQ0FBdEMsQ0FBekksR0FBb0wsR0FBcEwsR0FBMEwsQ0FBQyxNQUFNc0ssWUFBWU0sVUFBWixFQUFQLEVBQWlDNUssS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUExTjtBQUNBLENBVkQ7O0FBWUFxRSxFQUFFb0IsUUFBRixFQUFZb0UsRUFBWixDQUFlLE9BQWYsRUFBd0IsK0JBQXhCLEVBQXlELFlBQVc7QUFDbkV4RixHQUFFLElBQUYsRUFBUWEsT0FBUixDQUFnQixPQUFoQixFQUF5QmxHLElBQXpCLENBQThCLFdBQTlCLEVBQTJDNkwsUUFBM0MsQ0FBb0QsUUFBcEQ7QUFDQSxDQUZEOztBQUlBeEcsRUFBRW9CLFFBQUYsRUFBWW9FLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlEQUF4QixFQUEyRSxZQUFXO0FBQ3JGeEYsR0FBRSxJQUFGLEVBQVFhLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIyRCxPQUF6QixDQUFpQyxHQUFqQyxFQUFzQyxZQUFXO0FBQ2hEeEUsSUFBRSxJQUFGLEVBQVErRCxNQUFSO0FBQ0EsRUFGRDtBQUdBLENBSkQ7O0FBTUEvRCxFQUFFb0IsUUFBRixFQUFZb0UsRUFBWixDQUFlLG1DQUFmLEVBQW9ELHNCQUFwRCxFQUE0RSxVQUFTdkwsQ0FBVCxFQUFZO0FBQ3ZGLEtBQUl3TSxTQUFTeE0sRUFBRTRKLElBQUYsQ0FBTy9ELEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLE1BQXlCLE1BQXRDO0FBQ0FFLEdBQUUsSUFBRixFQUFRcUMsUUFBUixDQUFpQixjQUFqQixFQUFpQzFILElBQWpDLENBQXNDLGlCQUF0QyxFQUF5RDhHLFdBQXpELENBQXFFLGVBQXJFLEVBQXNGLENBQUNnRixNQUF2RixFQUErRmhGLFdBQS9GLENBQTJHLGlCQUEzRyxFQUE4SGdGLE1BQTlIO0FBQ0EsQ0FIRDs7QUFLQXpHLEVBQUUscUJBQUYsRUFBeUJ5RCxHQUF6QixDQUE2QixFQUE3Qjs7QUFFQTtBQUNBekQsRUFBRW9CLFFBQUYsRUFBWW9FLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG1CQUF4QixFQUE2QyxZQUFXO0FBQ3ZEeEYsR0FBRSxJQUFGLEVBQVFyRixJQUFSLENBQWEscUJBQWIsRUFBb0MrTCxNQUFwQztBQUNBLENBRkQ7O0FBSUE7QUFDQTFHLEVBQUVvQixRQUFGLEVBQVlvRSxFQUFaLENBQWUsT0FBZixFQUF3Qix5REFBeEIsRUFBbUYsWUFBVztBQUM3RnhGLEdBQUUsS0FBS3VCLE9BQUwsQ0FBYW9GLE1BQWYsRUFBdUJiLEtBQXZCLENBQTZCLE1BQTdCO0FBQ0EsQ0FGRDs7QUFJQSxTQUFTYyxlQUFULENBQXlCQyxhQUF6QixFQUF3QzNJLEtBQXhDLEVBQStDNEksSUFBL0MsRUFBcUQ7QUFDcEQ5RyxHQUFFNkcsYUFBRixFQUFpQjFFLE1BQWpCLENBQXdCLElBQUlhLE1BQUosQ0FBVzhELElBQVgsRUFBaUI1SSxLQUFqQixDQUF4QixFQUFpRGdGLFlBQWpELENBQThELFNBQTlELEVBQXlFQSxZQUF6RSxDQUFzRixLQUF0RixFQUE2RjRELElBQTdGO0FBQ0E7O0FBRUQsSUFBSUMsb0JBQW9CcE4sT0FBT29OLGlCQUFQLEdBQTJCLElBQW5ELEM7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQjFNLE87QUFDcEIsd0JBUUc7QUFBQSxNQVBFUSxFQU9GLFFBUEZBLEVBT0U7QUFBQSxNQU5TbU0sTUFNVCxRQU5GQyxTQU1FO0FBQUEsTUFMT3JNLElBS1AsUUFMRnNNLE9BS0U7QUFBQSxNQUpTMUwsTUFJVCxRQUpGMkwsU0FJRTtBQUFBLE1BSEZDLE9BR0UsUUFIRkEsT0FHRTtBQUFBLE1BRmdCQyxTQUVoQixRQUZGQyxnQkFFRTtBQUFBLE1BRFVDLGFBQ1YsUUFERkMsVUFDRTs7QUFBQTs7QUFDRixPQUFLM00sRUFBTCxHQUF1QkEsRUFBdkI7QUFDQSxPQUFLbU0sTUFBTCxHQUF1QkEsTUFBdkI7QUFDQSxPQUFLcE0sSUFBTCxHQUF1QkEsSUFBdkI7QUFDQSxPQUFLWSxNQUFMLEdBQXVCQSxNQUF2QjtBQUNBLE9BQUs0TCxPQUFMLEdBQXVCQSxPQUF2QjtBQUNBLE9BQUtJLFVBQUwsR0FBdUJILFNBQXZCO0FBQ0EsT0FBS0ksZUFBTCxHQUF1QkYsYUFBdkI7QUFDQTs7OztzQkFFWTtBQUNaLFVBQVEsSUFBSTFKLHNCQUFKLEVBQUQsQ0FBcUJRLEdBQXJCLENBQXlCLEtBQUtxSixPQUE5QixDQUFQO0FBQ0EsRztvQkFFVVYsTSxFQUFRO0FBQ2xCLFFBQUtVLE9BQUwsR0FBZVYsTUFBZjtBQUNBOzs7c0JBRVU7QUFDVixVQUFRLElBQUl2Tix1QkFBSixFQUFELENBQXNCa08sT0FBdEIsQ0FBOEIsS0FBS3hNLEtBQW5DLENBQVA7QUFDQSxHO29CQUVRUCxJLEVBQU07QUFDZCxRQUFLTyxLQUFMLEdBQWFQLElBQWI7QUFDQTs7O3NCQUVZO0FBQ1osVUFBUSxJQUFJbkIsdUJBQUosRUFBRCxDQUFzQm1PLFNBQXRCLENBQWdDLEtBQUsxSyxPQUFyQyxDQUFQO0FBQ0EsRztvQkFFVTFCLE0sRUFBUTtBQUNsQixRQUFLMEIsT0FBTCxHQUFlMUIsTUFBZjtBQUNBOzs7Ozs7a0JBekNtQm5CLE87Ozs7OztBQ1hyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJMLEk7QUFDcEIscUJBTUc7QUFBQSxNQUxGYSxFQUtFLFFBTEZBLEVBS0U7QUFBQSxNQUpGZ04sSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIU0MsTUFHVCxRQUhGQyxTQUdFO0FBQUEsTUFGV0MsUUFFWCxRQUZGQyxXQUVFO0FBQUEsTUFERi9OLE9BQ0UsUUFERkEsT0FDRTs7QUFBQTs7QUFDRixPQUFLVyxFQUFMLEdBQWdCQSxFQUFoQjtBQUNBLE9BQUtnTixJQUFMLEdBQWdCQSxJQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBZ0JBLE1BQWhCLENBSEUsQ0FHd0I7QUFDMUIsT0FBS0UsUUFBTCxHQUFnQkEsUUFBaEIsQ0FKRSxDQUl3QjtBQUMxQixPQUFLOU4sT0FBTCxHQUFnQkEsT0FBaEIsQ0FMRSxDQUt3QjtBQUMxQjs7OztzQkFFWTtBQUNaLFVBQVEsSUFBSTJELHNCQUFKLEVBQUQsQ0FBcUJRLEdBQXJCLENBQXlCLEtBQUs2SixPQUE5QixDQUFQO0FBQ0EsRztvQkFFVUosTSxFQUFRO0FBQ2xCLFFBQUtJLE9BQUwsR0FBZUosTUFBZjtBQUNBOzs7c0JBRWM7QUFDZCxVQUFRLElBQUlqSyxzQkFBSixFQUFELENBQXFCUSxHQUFyQixDQUF5QixLQUFLOEosU0FBOUIsQ0FBUDtBQUNBLEc7b0JBRVlILFEsRUFBVTtBQUN0QixRQUFLRyxTQUFMLEdBQWlCSCxRQUFqQjtBQUNBOzs7c0JBRWE7QUFDYixVQUFRLElBQUl2Tyx1QkFBSixFQUFELENBQXNCMk8sa0JBQXRCLENBQXlDLEtBQUt2TixFQUE5QyxDQUFQO0FBQ0EsRztvQkFFV1gsTyxFQUFTO0FBQ3BCLFFBQUtjLFFBQUwsR0FBZ0JkLE9BQWhCO0FBQ0E7Ozs7OztrQkFyQ21CRixJOzs7Ozs7Ozs7Ozs7Ozs7QUNWckI7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCOEQsUTtBQUNwQix5QkFZRztBQUFBLE1BWEZqRCxFQVdFLFFBWEZBLEVBV0U7QUFBQSxNQVZGaU0sSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURnVCLEtBU0UsUUFURkEsS0FTRTtBQUFBLE1BUlNDLEdBUVQsUUFSRkMsU0FRRTtBQUFBLE1BUEZDLFVBT0UsUUFQRkEsVUFPRTtBQUFBLE1BTllDLEtBTVosUUFORkMsWUFNRTtBQUFBLGtDQUxGQyxlQUtFO0FBQUEsTUFMZUMsV0FLZix3Q0FMNkIsRUFLN0I7QUFBQSwyQkFKRlosUUFJRTtBQUFBLE1BSkZBLFFBSUUsaUNBSlMsS0FJVDtBQUFBLDZCQUhGYSxVQUdFO0FBQUEsTUFIRkEsVUFHRSxtQ0FIV0QsWUFBWS9NLE1BQVosR0FBcUIsQ0FHaEM7QUFBQSwwQkFGRmlOLE9BRUU7QUFBQSxNQUZGQSxPQUVFLGdDQUZRLEtBRVI7QUFBQSx3QkFERkMsS0FDRTtBQUFBLE1BREZBLEtBQ0UsOEJBRE0sS0FDTjs7QUFBQTs7QUFDRixPQUFLbE8sRUFBTCxHQUFVQSxFQUFWO0FBQ0EsT0FBS2lNLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUt1QixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLRSxVQUFMLEdBQWtCQSxXQUFXMUIsSUFBN0I7QUFDQSxPQUFLa0MsV0FBTCxHQUFtQlIsV0FBVzNOLEVBQTlCO0FBQ0EsT0FBSzROLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtHLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS3pLLE1BQUwsR0FBYyxFQUFDNkosa0JBQUQsRUFBV2MsZ0JBQVgsRUFBb0JDLFlBQXBCLEVBQWQ7O0FBRUE7QUFDQSxPQUFLNUssTUFBTCxDQUFZOEssSUFBWixHQUFtQixLQUFLOUssTUFBTCxDQUFZNkosUUFBWixJQUF3QixLQUFLN0osTUFBTCxDQUFZMkssT0FBcEMsSUFBK0MsS0FBSzNLLE1BQUwsQ0FBWTRLLEtBQTNELElBQW9FLEtBQUs1SyxNQUFMLENBQVkrSyxRQUFoRixJQUE0RixLQUEvRztBQUNBOztBQUVEOzs7Ozs7O3NCQUdhO0FBQ1osVUFBTyxLQUFLL0ssTUFBTCxDQUFZOEssSUFBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdpQjtBQUNoQixVQUFPLEtBQUs5SyxNQUFMLENBQVk2SixRQUFuQjtBQUNBOztBQUVEOzs7Ozs7c0JBR2dCO0FBQ2YsVUFBTyxLQUFLN0osTUFBTCxDQUFZMkssT0FBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdjO0FBQ2IsVUFBTyxLQUFLM0ssTUFBTCxDQUFZNEssS0FBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdrQjtBQUNqQixVQUFRLElBQUluUCw4QkFBSixFQUFELENBQTJCdVAsaUJBQTNCLENBQTZDLEtBQUs1SyxZQUFsRCxDQUFQO0FBQ0E7O0FBRUQ7Ozs7b0JBR2dCcUssVyxFQUFhO0FBQzVCLFFBQUtySyxZQUFMLEdBQW9CcUssV0FBcEI7QUFDQTs7QUFFRDs7Ozs7Ozs7OztnQ0FPOEI7QUFBQSxPQUFYUSxJQUFXLHVFQUFKLEVBQUk7O0FBQzdCQSxRQUFLYixTQUFMLEdBQWlCYSxLQUFLZCxHQUF0QjtBQUNBYyxRQUFLVixZQUFMLEdBQW9CVSxLQUFLWCxLQUF6QjtBQUNBVyxRQUFLVCxlQUFMLEdBQXVCUyxLQUFLUixXQUE1QjtBQUNBUSxRQUFLQyxhQUFMLEdBQXFCRCxLQUFLWixVQUExQjtBQUo2QixjQUtiLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0MsT0FBaEMsQ0FMYTtBQUs3Qiw0Q0FBMEQ7QUFBckQsUUFBSWpGLGNBQUo7QUFDSjZGLFNBQUs3RixHQUFMLElBQVk2RixLQUFLakwsTUFBTCxDQUFZb0YsR0FBWixJQUFvQixNQUFNNkYsS0FBS1AsVUFBTCxHQUFrQixDQUF4QixDQUFwQixHQUFrRCxDQUE5RDtBQUNBO0FBQ0RPLFFBQUtQLFVBQUwsR0FBa0JPLEtBQUtQLFVBQUwsSUFBbUIsQ0FBckM7QUFDQSxVQUFPTyxJQUFQO0FBQ0E7Ozs7OztrQkF2Rm1CdEwsUTs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJZLGE7QUFDcEIsOEJBS0c7QUFBQSxNQUpGN0QsRUFJRSxRQUpGQSxFQUlFO0FBQUEsTUFIRmlNLElBR0UsUUFIRkEsSUFHRTtBQUFBLE1BRlM5SCxNQUVULFFBRkZzSyxTQUVFO0FBQUEsTUFERmhJLFFBQ0UsUUFERkEsUUFDRTs7QUFBQTs7QUFDRixPQUFLekcsRUFBTCxHQUFnQkEsRUFBaEI7QUFDQSxPQUFLaU0sSUFBTCxHQUFnQkEsSUFBaEI7QUFDQSxPQUFLOUgsTUFBTCxHQUFnQkEsTUFBaEI7QUFDQSxPQUFLc0MsUUFBTCxHQUFnQkEsUUFBaEIsQ0FKRSxDQUl3QjtBQUMxQjs7OztzQkFFWTtBQUNaLFVBQVEsSUFBSTFILDhCQUFKLEVBQUQsQ0FBMkIyUCxnQkFBM0IsQ0FBNEMsS0FBSzNLLE9BQWpELENBQVA7QUFDQSxHO29CQUVVSSxNLEVBQVE7QUFDbEIsUUFBS0osT0FBTCxHQUFlSSxNQUFmO0FBQ0E7OztzQkFFYztBQUNkLFVBQVEsSUFBSXBGLDhCQUFKLEVBQUQsQ0FBMkJ1UCxpQkFBM0IsQ0FBNkMsS0FBS0ssU0FBbEQsQ0FBUDtBQUNBLEc7b0JBRVlsSSxRLEVBQVU7QUFDdEIsUUFBS2tJLFNBQUwsR0FBaUJsSSxRQUFqQjtBQUNBOzs7Ozs7a0JBM0JtQjVDLGE7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJDLGtCO0FBQ3BCLG1DQUtHO0FBQUEsTUFKRjlELEVBSUUsUUFKRkEsRUFJRTtBQUFBLE1BSFFtQixPQUdSLFFBSEZ5TixRQUdFO0FBQUEsTUFGaUJwTSxlQUVqQixRQUZGcU0saUJBRUU7QUFBQSxNQURGeFAsT0FDRSxRQURGQSxPQUNFOztBQUFBOztBQUNGLE9BQUtXLEVBQUwsR0FBc0JBLEVBQXRCO0FBQ0EsT0FBS2lDLEtBQUwsR0FBc0JkLE9BQXRCO0FBQ0EsT0FBSzJOLGNBQUwsR0FBc0J0TSxlQUF0QjtBQUNBLE9BQUtuRCxPQUFMLEdBQXNCQSxPQUF0QjtBQUNBOzs7O3NCQUVXO0FBQ1gsVUFBUSxJQUFJMkQsc0JBQUosRUFBRCxDQUFtQlEsR0FBbkIsQ0FBdUIsS0FBS2pDLE1BQTVCLENBQVA7QUFDQSxHO29CQUVTVSxLLEVBQU87QUFDaEIsUUFBS1YsTUFBTCxHQUFjVSxLQUFkO0FBQ0E7OztzQkFFb0I7QUFDcEIsVUFBUSxJQUFJbEQsOEJBQUosRUFBRCxDQUEyQjJQLGdCQUEzQixDQUE0QyxLQUFLekssZUFBakQsQ0FBUDtBQUNBLEc7b0JBRWtCUixhLEVBQWU7QUFDakMsUUFBS1EsZUFBTCxHQUF1QlIsYUFBdkI7QUFDQTs7Ozs7O2tCQTNCbUJLLGtCOzs7Ozs7Ozs7Ozs7Ozs7QUNUckI7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQnBFLE07QUFDcEIsdUJBS0c7QUFBQSxNQUpGTSxFQUlFLFFBSkZBLEVBSUU7QUFBQSxNQUhGVSxJQUdFLFFBSEZBLElBR0U7QUFBQSxNQUZGdUwsSUFFRSxRQUZGQSxJQUVFO0FBQUEsTUFERjVNLE9BQ0UsUUFERkEsT0FDRTs7QUFBQTs7QUFDRixPQUFLVyxFQUFMLEdBQWVBLEVBQWY7QUFDQSxPQUFLVSxJQUFMLEdBQWVBLElBQWYsQ0FGRSxDQUVzQjtBQUN4QixPQUFLdUwsSUFBTCxHQUFlQSxJQUFmLENBSEUsQ0FHc0I7QUFDeEIsT0FBSzVNLE9BQUwsR0FBZUEsT0FBZixDQUpFLENBSXNCO0FBQ3hCOzs7O3NCQUVhO0FBQ2IsVUFBUSxJQUFJVCx1QkFBSixFQUFELENBQXNCbVEsa0JBQXRCLENBQXlDLEtBQUtyTyxJQUE5QyxDQUFQO0FBQ0EsRztvQkFFV3JCLE8sRUFBUztBQUNwQixRQUFLYyxRQUFMLEdBQWdCZCxPQUFoQjtBQUNBOzs7Ozs7a0JBbkJtQkssTTs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCSixNO0FBQ3BCLHVCQWtCRztBQUFBLE1BakJGVSxFQWlCRSxRQWpCRkEsRUFpQkU7QUFBQSxNQWhCU21NLE1BZ0JULFFBaEJGQyxTQWdCRTtBQUFBLE1BZkZwTixLQWVFLFFBZkZBLEtBZUU7QUFBQSxNQWRGd0IsTUFjRSxRQWRGQSxNQWNFO0FBQUEsTUFiY3dPLGFBYWQsUUFiRkMsY0FhRTtBQUFBLE1BWkZDLEtBWUUsUUFaRkEsS0FZRTtBQUFBLE1BWEZDLFdBV0UsUUFYRkEsV0FXRTtBQUFBLE1BVldDLFFBVVgsUUFWRkMsV0FVRTtBQUFBLE1BVEZ4RixPQVNFLFFBVEZBLE9BU0U7QUFBQSxNQVJGVyxRQVFFLFFBUkZBLFFBUUU7QUFBQSxNQVBGakwsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFOZ0JpTixTQU1oQixRQU5GQyxnQkFNRTtBQUFBLE1BTGdCNkMsU0FLaEIsUUFMRkMsZ0JBS0U7QUFBQSxNQUpVN0MsYUFJVixRQUpGQyxVQUlFO0FBQUEsTUFIVTZDLGFBR1YsUUFIRkMsVUFHRTtBQUFBLE1BRnVCck8sa0JBRXZCLFFBRkZzTyx1QkFFRTtBQUFBLE1BRHVCQyxvQkFDdkIsUUFERkMsdUJBQ0U7O0FBQUE7O0FBQ0YsT0FBSzVQLEVBQUwsR0FBNEJBLEVBQTVCO0FBQ0EsT0FBS21NLE1BQUwsR0FBNEJBLE1BQTVCO0FBQ0EsT0FBS25OLEtBQUwsR0FBNEJBLEtBQTVCLENBSEUsQ0FHa0M7QUFDcEMsT0FBS3dCLE1BQUwsR0FBNEJBLE1BQTVCLENBSkUsQ0FJa0M7QUFDcEMsT0FBS3lPLGNBQUwsR0FBNEJELGFBQTVCO0FBQ0EsT0FBS0UsS0FBTCxHQUE0QkEsS0FBNUI7QUFDQSxPQUFLQyxXQUFMLEdBQTRCQSxXQUE1QjtBQUNBLE9BQUtDLFFBQUwsR0FBNEJBLFFBQTVCO0FBQ0EsT0FBS3ZGLE9BQUwsR0FBNEJBLE9BQTVCLENBVEUsQ0FTb0M7QUFDdEMsT0FBS1csUUFBTCxHQUE0QkEsUUFBNUIsQ0FWRSxDQVVvQztBQUN0QyxPQUFLakwsUUFBTCxHQUE0QkEsUUFBNUIsQ0FYRSxDQVdvQztBQUN0QyxPQUFLb04sVUFBTCxHQUE0QkgsU0FBNUI7QUFDQSxPQUFLaUQsVUFBTCxHQUE0QkgsU0FBNUI7QUFDQSxPQUFLMUMsZUFBTCxHQUE0QkYsYUFBNUI7QUFDQSxPQUFLbUQsZUFBTCxHQUE0QkwsYUFBNUI7QUFDQSxPQUFLeE4sb0JBQUwsR0FBNEJaLGtCQUE1QjtBQUNBLE9BQUtXLG9CQUFMLEdBQTRCNE4sb0JBQTVCO0FBQ0E7Ozs7c0JBRVc7QUFDWCxVQUFRLElBQUkvUSx1QkFBSixFQUFELENBQXNCa1Isa0JBQXRCLENBQXlDLEtBQUs5UCxFQUE5QyxDQUFQO0FBQ0EsRztvQkFFU2hCLEssRUFBTztBQUNoQixRQUFLa0MsTUFBTCxHQUFjbEMsS0FBZDtBQUNBOzs7c0JBRVk7QUFDWixVQUFRLElBQUlKLHVCQUFKLEVBQUQsQ0FBc0JtUixTQUF0QixDQUFnQyxLQUFLQyxPQUFyQyxDQUFQO0FBQ0EsRztvQkFFVXhQLE0sRUFBUTtBQUNsQixRQUFLd1AsT0FBTCxHQUFleFAsTUFBZjtBQUNBOzs7c0JBRW9CO0FBQ3BCLFVBQVEsSUFBSTVCLHVCQUFKLEVBQUQsQ0FBc0JxUixnQkFBdEIsQ0FBdUMsS0FBS0MsZUFBNUMsQ0FBUDtBQUNBLEc7b0JBRWtCbEIsYSxFQUFlO0FBQ2pDLFFBQUtrQixlQUFMLEdBQXVCbEIsYUFBdkI7QUFDQTs7O3NCQUVZO0FBQ1osVUFBUSxJQUFJaE0sc0JBQUosRUFBRCxDQUFtQlEsR0FBbkIsQ0FBdUIsS0FBSzZKLE9BQTVCLENBQVA7QUFDQSxHO29CQUVVSixNLEVBQVE7QUFDbEIsUUFBS0ksT0FBTCxHQUFlSixNQUFmO0FBQ0E7OztzQkFFYTtBQUNiLFVBQVEsSUFBSXJELHlCQUFKLEVBQUQsQ0FBd0J1RyxVQUF4QixDQUFtQyxLQUFLQyxRQUF4QyxDQUFQO0FBQ0EsRztvQkFFV3ZHLE8sRUFBUztBQUNwQixRQUFLdUcsUUFBTCxHQUFnQnZHLE9BQWhCO0FBQ0E7OztzQkFFYztBQUNkLFVBQVEsSUFBSVUseUJBQUosRUFBRCxDQUF3QjhGLFdBQXhCLENBQW9DLEtBQUtDLFNBQXpDLENBQVA7QUFDQSxHO29CQUVZOUYsUSxFQUFVO0FBQ3RCLFFBQUs4RixTQUFMLEdBQWlCOUYsUUFBakI7QUFDQTs7O3NCQUVjO0FBQ2QsVUFBUSxJQUFJNUwsdUJBQUosRUFBRCxDQUFzQjJSLGdCQUF0QixDQUF1QyxLQUFLQyxTQUE1QyxDQUFQO0FBQ0EsRztvQkFFWWpSLFEsRUFBVTtBQUN0QixRQUFLaVIsU0FBTCxHQUFpQmpSLFFBQWpCO0FBQ0E7OztzQkFFYztBQUNkLFVBQVEsSUFBSVgsdUJBQUosRUFBRCxDQUFzQjZSLFVBQXRCLENBQWlDLEtBQUtDLFNBQXRDLENBQVA7QUFDQSxHO29CQUVZdEIsUSxFQUFVO0FBQ3RCLFFBQUtzQixTQUFMLEdBQWlCdEIsUUFBakI7QUFDQTs7O3NCQUUwQjtBQUMxQixVQUFRLElBQUlyUSw4QkFBSixFQUFELENBQTJCNFIscUJBQTNCLENBQWlELEtBQUtyUCxxQkFBdEQsQ0FBUDtBQUNBLEc7b0JBRXdCOEMsb0IsRUFBc0I7QUFDOUMsUUFBSzlDLHFCQUFMLEdBQTZCOEMsb0JBQTdCO0FBQ0E7OztzQkFFMEI7QUFDMUIsVUFBUSxJQUFJcEIsc0JBQUosRUFBRCxDQUFxQlEsR0FBckIsQ0FBeUIsS0FBS25DLHFCQUE5QixDQUFQO0FBQ0EsRztvQkFFd0JzTyxvQixFQUFzQjtBQUM5QyxRQUFLdE8scUJBQUwsR0FBNkJzTyxvQkFBN0I7QUFDQTs7O3NCQUVvQjtBQUNwQixPQUFJaUIsU0FBU0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRCxNQUFMLE1BQWlCLEtBQUssQ0FBTCxHQUFTLENBQTFCLENBQVgsSUFBMkMsQ0FBeEQsQ0FEb0IsQ0FDdUM7QUFDM0QsVUFBUSxJQUFJN1IsOEJBQUosRUFBRCxDQUE2QjJQLGdCQUE3QixDQUE4Q2tDLE1BQTlDLENBQVA7QUFDQTs7Ozs7O2tCQTFIbUJ0UixNOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7Ozs7O0FBQ0E7Ozs7OztJQU1xQndLLE07QUFDcEIsdUJBU0E7QUFBQSxNQVJDOUosRUFRRCxRQVJDQSxFQVFEO0FBQUEsTUFQQ2dKLElBT0QsUUFQQ0EsSUFPRDtBQUFBLE1BTkNtQixJQU1ELFFBTkNBLElBTUQ7QUFBQSxNQUxDRyxTQUtELFFBTENBLFNBS0Q7QUFBQSxNQUpDakwsT0FJRCxRQUpDQSxPQUlEO0FBQUEsTUFIbUJzTixVQUduQixRQUhDRixnQkFHRDtBQUFBLE1BRm1CZ0QsVUFFbkIsUUFGQ0YsZ0JBRUQ7O0FBQUE7O0FBQ0MsT0FBS3ZQLEVBQUwsR0FBYUEsRUFBYjtBQUNBLE9BQUtnSixJQUFMLEdBQWNBLElBQWQ7QUFDQSxPQUFLbUIsSUFBTCxHQUFnQkEsSUFBaEI7QUFDQSxPQUFLRyxTQUFMLEdBQXNCQSxTQUF0QjtBQUNBLE9BQUtuSyxRQUFMLEdBQWlCZCxPQUFqQjtBQUNBLE9BQUtzTixVQUFMLEdBQW1CQSxVQUFuQjtBQUNBLE9BQUs4QyxVQUFMLEdBQW1CQSxVQUFuQjtBQUNBOztBQUVEOzs7Ozs7O3NCQUdjO0FBQ2IsT0FBSSxLQUFLdFAsUUFBVCxFQUFtQjtBQUNsQixXQUFRLElBQUl2Qix1QkFBSixFQUFELENBQXNCbVMscUJBQXRCLENBQTRDLEtBQUs1USxRQUFqRCxDQUFQO0FBQ0E7QUFDRCxVQUFPLElBQUk2USxLQUFKLEVBQVA7QUFDQTs7QUFFRDs7OztvQkFHWTNSLE8sRUFBUztBQUNwQixRQUFLYyxRQUFMLEdBQWdCZCxPQUFoQjtBQUNBOzs7Ozs7a0JBbkNtQnlLLE07Ozs7Ozs7Ozs7Ozs7OztBQ1ByQjs7Ozs7Ozs7QUFDQTs7Ozs7SUFLcUJXLE87QUFDcEIsd0JBU0E7QUFBQSxNQVJDekssRUFRRCxRQVJDQSxFQVFEO0FBQUEsTUFQQ2lNLElBT0QsUUFQQ0EsSUFPRDtBQUFBLE1BTkM1TSxPQU1ELFFBTkNBLE9BTUQ7QUFBQSxNQUxDNFIsZ0JBS0QsUUFMQ0EsZ0JBS0Q7QUFBQSxNQUpDQyxXQUlELFFBSkNBLFdBSUQ7QUFBQSxNQUhtQnZFLFVBR25CLFFBSENGLGdCQUdEO0FBQUEsTUFGbUJnRCxVQUVuQixRQUZDRixnQkFFRDs7QUFBQTs7QUFDQyxPQUFLdlAsRUFBTCxHQUFvQkEsRUFBcEI7QUFDQSxPQUFLaU0sSUFBTCxHQUFvQkEsSUFBcEI7QUFDQSxPQUFLOUwsUUFBTCxHQUFrQmQsT0FBbEI7QUFDQSxPQUFLNFIsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLE9BQUtDLFdBQUwsR0FBb0JBLFdBQXBCO0FBQ0EsT0FBS3ZFLFVBQUwsR0FBb0JBLFVBQXBCO0FBQ0EsT0FBSzhDLFVBQUwsR0FBb0JBLFVBQXBCO0FBQ0E7O0FBRUQ7Ozs7Ozs7b0NBaUJrQjtBQUNqQjtBQUNBLE9BQUksS0FBS3dCLGdCQUFULEVBQTJCO0FBQzFCLFdBQU8sa0JBQVA7QUFDQSxJQUZELE1BRU8sSUFBSSxDQUFDLEtBQUtBLGdCQUFWLEVBQTRCO0FBQ2xDLFdBQU8sYUFBUDtBQUNBLElBRk0sTUFFQTtBQUNOLFdBQU8sR0FBUDtBQUNBO0FBQ0Q7OztzQkF2QmE7QUFDYixPQUFJLEtBQUs5USxRQUFULEVBQW1CO0FBQ2xCLFdBQVEsSUFBSXZCLHVCQUFKLEVBQUQsQ0FBc0JtUyxxQkFBdEIsQ0FBNEMsS0FBSzVRLFFBQWpELENBQVA7QUFDQTtBQUNELFVBQU8sSUFBSTZRLEtBQUosRUFBUDtBQUNBOztBQUVEOzs7O29CQUdZM1IsTyxFQUFTO0FBQ3BCLFFBQUtjLFFBQUwsR0FBZ0JkLE9BQWhCO0FBQ0E7Ozs7OztrQkFuQ21Cb0wsTzs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCN0ssWTtBQUNwQiw2QkFPRztBQUFBLE1BTkZJLEVBTUUsUUFORkEsRUFNRTtBQUFBLE1BTFNXLE1BS1QsUUFMRjJMLFNBS0U7QUFBQSxNQUpTOUwsTUFJVCxRQUpGMlEsU0FJRTtBQUFBLE1BSFFsUCxLQUdSLFFBSEYyTSxRQUdFO0FBQUEsTUFGZ0JwQyxTQUVoQixRQUZGQyxnQkFFRTtBQUFBLE1BRFVDLGFBQ1YsUUFERkMsVUFDRTs7QUFBQTs7QUFDRixPQUFLM00sRUFBTCxHQUF1QkEsRUFBdkI7QUFDQSxPQUFLVyxNQUFMLEdBQXVCQSxNQUF2QixDQUZFLENBRTZCO0FBQy9CLE9BQUtILE1BQUwsR0FBdUJBLE1BQXZCLENBSEUsQ0FHNkI7QUFDL0IsT0FBS3lCLEtBQUwsR0FBdUJBLEtBQXZCLENBSkUsQ0FJNkI7QUFDL0IsT0FBSzBLLFVBQUwsR0FBdUJILFNBQXZCO0FBQ0EsT0FBS0ksZUFBTCxHQUF1QkYsYUFBdkI7QUFDQTs7OztzQkFFWTtBQUNaLFVBQVEsSUFBSTlOLHVCQUFKLEVBQUQsQ0FBc0JtTyxTQUF0QixDQUFnQyxLQUFLMUssT0FBckMsQ0FBUDtBQUNBLEc7b0JBRVUxQixNLEVBQVE7QUFDbEIsUUFBSzBCLE9BQUwsR0FBZTFCLE1BQWY7QUFDQTs7O3NCQUVZO0FBQ1osVUFBUSxJQUFJL0IsdUJBQUosRUFBRCxDQUFzQm1SLFNBQXRCLENBQWdDLEtBQUtDLE9BQXJDLENBQVA7QUFDQSxHO29CQUVVeFAsTSxFQUFRO0FBQ2xCLFFBQUt3UCxPQUFMLEdBQWV4UCxNQUFmO0FBQ0E7OztzQkFFVztBQUNYLFVBQVEsSUFBSXdDLHNCQUFKLEVBQUQsQ0FBcUJRLEdBQXJCLENBQXlCLEtBQUtqQyxNQUE5QixDQUFQO0FBQ0EsRztvQkFFU1UsSyxFQUFPO0FBQ2hCLFFBQUtWLE1BQUwsR0FBY1UsS0FBZDtBQUNBOzs7Ozs7a0JBdkNtQnJDLFk7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCd1IsRyxHQUNwQixtQkFZRztBQUFBLHVCQVhGcFMsS0FXRTtBQUFBLEtBWEZBLEtBV0UsOEJBWE0sRUFXTjtBQUFBLDBCQVZGUyxRQVVFO0FBQUEsS0FWRkEsUUFVRSxpQ0FWUyxFQVVUO0FBQUEseUJBVEZKLE9BU0U7QUFBQSxLQVRGQSxPQVNFLGdDQVRRLEVBU1I7QUFBQSxpQ0FSRmdTLGVBUUU7QUFBQSxLQVJlMVIsY0FRZix3Q0FSZ0MsRUFRaEM7QUFBQSwwQkFQRkosUUFPRTtBQUFBLEtBUEZBLFFBT0UsaUNBUFMsRUFPVDtBQUFBLHVCQU5GMEMsS0FNRTtBQUFBLEtBTkZBLEtBTUUsOEJBTk0sRUFNTjtBQUFBLHlCQUxGNEgsT0FLRTtBQUFBLEtBTEZBLE9BS0UsZ0NBTFEsRUFLUjtBQUFBLDBCQUpGVyxRQUlFO0FBQUEsS0FKRkEsUUFJRSxpQ0FKUyxFQUlUO0FBQUEsaUNBSEZzRCxlQUdFO0FBQUEsS0FIZXJMLGNBR2Ysd0NBSGdDLEVBR2hDO0FBQUEsa0NBRkZULG9CQUVFO0FBQUEsS0FGb0JaLGtCQUVwQix5Q0FGeUMsRUFFekM7QUFBQSw2QkFERjhCLFdBQ0U7QUFBQSxLQURGQSxXQUNFLG9DQURZLEVBQ1o7O0FBQUE7O0FBQ0YsTUFBS2xFLEtBQUwsR0FBMEJBLEtBQTFCO0FBQ0EsTUFBS1MsUUFBTCxHQUEwQkEsUUFBMUI7QUFDQSxNQUFLSixPQUFMLEdBQTBCQSxPQUExQjtBQUNBLE1BQUtNLGNBQUwsR0FBMEJBLGNBQTFCO0FBQ0EsTUFBS0osUUFBTCxHQUEwQkEsUUFBMUI7QUFDQSxNQUFLMEMsS0FBTCxHQUEwQkEsS0FBMUI7QUFDQSxNQUFLNEgsT0FBTCxHQUEwQkEsT0FBMUI7QUFDQSxNQUFLVyxRQUFMLEdBQTBCQSxRQUExQjtBQUNBLE1BQUsvSCxjQUFMLEdBQTBCQSxjQUExQjtBQUNBLE1BQUtyQixrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsTUFBSzhCLFdBQUwsR0FBMEJBLFdBQTFCO0FBQ0EsQzs7a0JBekJtQmtPLEc7Ozs7Ozs7QUNWckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFtQixNQUFuQixHQUE0QixNQUFwRCxHQUFQO0FBQ0EsUUFBSW5hLEVBQUVtYSxPQUFGLEtBQWMsRUFBZCxJQUFvQlgsS0FBS2dCLEVBQUwsQ0FBUSxjQUFSLENBQXhCLEVBQWlEO0FBQ2hEaEIsVUFBS25TLFFBQUwsQ0FBYyxPQUFkLEVBQXVCb1QsS0FBdkI7QUFDQSxLQUZELE1BRU87QUFDTmpCLFVBQUtsUixLQUFMO0FBQ0E7QUFDRDtBQUNELFFBQUssRUFBTCxDQVhELENBV1U7QUFDVCxRQUFLLEVBQUw7QUFBUztBQUNSO0FBQ0EsUUFBSW9TLFVBQVVILGdCQUFnQjlULEtBQWhCLEdBQXdCRyxPQUF4QixDQUFnQyxjQUFoQyxFQUFnRDVHLEVBQUVtYSxPQUFGLEtBQWMsRUFBZCxHQUFtQixNQUFuQixHQUE0QixNQUE1RSxHQUFkO0FBQ0E7QUFDQVgsV0FBT2tCLFFBQVFoYSxJQUFSLENBQWFWLEVBQUVtYSxPQUFGLEtBQWMsRUFBZCxHQUFtQixTQUFuQixHQUErQixJQUE1QyxFQUFrRDFULEtBQWxELEVBQVA7QUFDQSxRQUFJekcsRUFBRW1hLE9BQUYsS0FBYyxFQUFkLElBQW9CWCxLQUFLNVgsTUFBTCxLQUFnQixDQUF4QyxFQUEyQztBQUMxQzhZLGFBQVFoYSxJQUFSLENBQWEsT0FBYixFQUFzQitaLEtBQXRCO0FBQ0EsS0FGRCxNQUVPO0FBQ05qQixVQUFLbFIsS0FBTDtBQUNBO0FBQ0Q7QUF0QkY7QUF3QkEsRUEvQ0Q7QUFnREEsQ0EvSUQsQyIsImZpbGUiOiIvanMvcGFnZXMvcHJvYmxlbV90eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMmE5NmM2NDYyYzU1ZTA0YTIyNCIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FsbCBmcm9tIFwiLi9DYWxsXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL1N0YXR1c1wiO1xuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXRcIjtcbmltcG9ydCBUaWNrZXRTdGF0dXMgZnJvbSBcIi4vVGlja2V0U3RhdHVzXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YXR1c2VzXG4gKiBhbmQgdGlja2V0cyBhbmQgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFRpY2tldE1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gd2luZG93LmV4cGVydGlzZVR5cGVNYW5hZ2VyIHx8IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jYWxscyAgICA9IGFwaS5jYWxscy5tYXAoZSA9PiBuZXcgQ2FsbChlKSk7XG5cdFx0dGhpcy50aWNrZXRzICA9IGFwaS50aWNrZXRzLm1hcChlID0+IG5ldyBUaWNrZXQoZSkpO1xuXHRcdHRoaXMuY29tbWVudHMgPSBhcGkuY29tbWVudHMubWFwKGUgPT4gbmV3IENvbW1lbnQoZSkpO1xuXHRcdHRoaXMuc3RhdHVzZXMgPSBhcGkuc3RhdHVzZXMubWFwKGUgPT4gbmV3IFN0YXR1cyhlKSk7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyA9IGFwaS50aWNrZXRTdGF0dXNlcy5tYXAoZSA9PiBuZXcgVGlja2V0U3RhdHVzKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NhbGx9IHNpbmdsZSBpbnN0YW5jZSBvZiBDYWxsIHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbmQoY2FsbCA9PiBjYWxsLmlkID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxscyByZWZlcmVuY2luZyBhIHNwZWNpZmljIHRpY2tldFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENhbGxzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbHRlcihjYWxsID0+IGNhbGwuX3RpY2tldHMuaW5kZXhPZih0aWNrZXRJZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBub3RlcyBmb3IgYSBjYWxsXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbE5vdGVzQnlDYWxsSWQoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuX2NhbGwgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIElEXG5cdCAqL1xuXHRnZXRTdGF0dXMoc3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuaWQgPT09IHN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIHNsdWdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBzdGF0dXNTbHVnXG5cdCAqL1xuXHRnZXRTdGF0dXNCeVNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0fSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0IHdpdGggdGlja2V0SWRcblx0ICovXG5cdGdldFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmluZCh0aWNrZXQgPT4gdGlja2V0LmlkID09PSB0aWNrZXRJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldElkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0LnN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBvbmUgb2YgbWFueSBnaXZlbiBzdGF0dXNlc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBzdGF0dXNTbHVncyBBcnJheSBvZiBTdHJpbmdzJ3MgcmVwcmVzZW50aW5nIHN0YXR1cyBzbHVnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBvbmUgb2YgbWFueSBnaXZlbiBTdGF0dXMnc1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnSW4oc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0cy5zbGljZSgwKTtcblxuXHRcdGZvciAobGV0IGkgPSB0aWNrZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZih0aWNrZXRzW2ldLnN0YXR1cy5zbHVnKSA9PT0gLTEpIHRpY2tldHMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aWNrZXRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXRzIHJlZmVyZW5jZWQgaW4gYSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyByZWZlcmVuY2VkIGluIGEgQ2FsbFxuXHQgKi9cblx0Z2V0VGlja2V0c0Zyb21DYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuX2NhbGxzLmluZGV4T2YoY2FsbElkKSA+IC0xKTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZChzdGFmZklkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZCB8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhzdGFmZklkcykge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRcdHRpY2tldHMgICAgICAgICAgICA9IHRoaXMudGlja2V0cyxcblx0XHRcdHJlc3VsdCAgICAgICAgICAgICA9IHt9O1xuXG5cdFx0c3RhZmZJZHMuZm9yRWFjaChzdGFmZklkID0+IHtcblx0XHRcdHJlc3VsdFtzdGFmZklkXSA9IHRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkXG5cdFx0XHRcdFx0XHR8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldE15VGlja2V0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBvcGVyYXRvciBvciBzcGVjaWFsaXN0IHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG8uXG5cdCAqXG5cdCAqIElmIGFuIG9wZXJhdG9yIGlzIG5vdCBhc3NpZ25lZCwgdGhlbiB0aGUgRXhwZXJ0aXNlVHlwZVN0YWZmIHdpbGxcblx0ICogYmUgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtFbXBsb3llZX0gRW1wbG95ZWUgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpIHtcblx0XHRpZiAodGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCkgcmV0dXJuIHRpY2tldC5hc3NpZ25lZF90b19vcGVyYXRvcjtcblxuXHRcdHJldHVybiB0aWNrZXQuZXhwZXJ0aXNlX3R5cGVfc3RhZmYuc3RhZmY7IC8vIG9ubHkgdXNlIGV4cGVydGlzZV90eXBlX3N0YWZmIGlmIHRoZXJlIGlzIG5vIGFzc2lnbmVkIG9wZXJhdG9yXG5cdH1cblxuXHQvKipcblx0ICogSWYgdGlja2V0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluXG5cdCAqIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gSWYgYXNzaWduZWQgdG8gc2VsZlxuXHQgKi9cblx0aXNUaWNrZXRBc3NpZ25lZFRvU2VsZih0aWNrZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkgPT09IHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCk7IFxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1cyB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldFN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0X3N0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXRTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXRTdGF0dXMgd2l0aCB0aWNrZXRTdGF0dXNJZFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzKHRpY2tldFN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmluZCh0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLmlkID09PSB0aWNrZXRTdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXNlcyBmb3IgYSB0aWNrZXRcblx0ICpcblx0ICogQHBcblx0ICovXG5cdGdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbHRlcih0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLl90aWNrZXQgPT09IHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNvbW1lbnQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjb21tZW50SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjb21tZW50IHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY29tbWVudElkXG5cdCAqL1xuXHRnZXRDb21tZW50KGNvbW1lbnRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50LmlkID09PSBjb21tZW50SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29tbWVudHNcblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIENvbW1lbnQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDb21tZW50c0J5SWRzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGlkcy5pbmRleE9mKGNvbW1lbnQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdGlja2V0cyBhc3NvY2lhdGVkIHdpdGggYW4gZXhwZXJ0aXNlIHR5cGUgc3RhZmZcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVTdGFmZklkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgc3RhZmYgdG8gZmluZCB0aWNrZXRzIGZvclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEFsbCBtYXRjaGluZyB0aWNrZXRzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0dGlja2V0SWRzICAgICAgPSBbXS5jb25jYXQoLi4uZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gZS50aWNrZXRzKSk7IC8vIG1vdmUgYWxsIG9mIGV4cGVydGlzZVR5cGVzW2ldLnRpY2tldHMgaW50byBhIHNpbmdsZSBhcnJheVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcyk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHRpY2tldHMgb24gYSBwcm9wZXJ0eSBmb3IgYSBwcm92aWRlZCBzZWFyY2ggcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0ge0FycmF5fSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHNhdGlzZnlpbmcgdGhlIHNlYXJjaCBjb25kaXRpb25cblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy50aWNrZXRzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGNvbGxlY3Rpb24gb2YgdGlja2V0cyBieSB0aGVpciBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gaWRzIFRoZSBJRHMgb2YgdGhlIHJlcXVlc3RlZCB0aWNrZXRzIFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5VGlja2V0SURzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiBpZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRW1wbG95ZWUgZnJvbSBcIi4vRW1wbG95ZWVcIjtcblxuLyoqXG4gKiBTdGFmZk1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhZmZcbiAqIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBTdGFmZk1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhZmYgICAgICAgPSBhcGkuc3RhZmYubWFwKGUgPT4gbmV3IEVtcGxveWVlKGUpKTtcblx0XHR0aGlzLmRlcGFydG1lbnRzID0gYXBpLmRlcGFydG1lbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZW1wbG95ZWUgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBlbXBsb3llZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0VtcGxveWVlfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmluZChlbXBsb3llZSA9PiBlbXBsb3llZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBlbXBsb3llZXMgd2l0aCBhIHNwZWNpZmljIHZhbHVlIG9mIGEgcGVybWlzc2lvblxuXHQgKlxuXHQgKiBAcGFyYW0gcGVybWlzc2lvbiBUaGUgcGVybWlzc2lvbiB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIHBlcm1pc3Npb24gKHRydWUvZmFsc2UpIGZvciB3aGV0aGVyIHRoZSBwZXJtaXNzaW9uIGlzIGdyYW50ZWRcblx0ICovXG5cdGdldEVtcGxveWVlc1dpdGhQZXJtaXNzaW9uKHBlcm1pc3Npb24sIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmlsdGVyKGVtcGxveWVlID0+IGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSA9PSB2YWx1ZSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKlxuXHQgKiBAcGFyYW0gYXNFbXBsb3llZSBtZXRob2QgcmV0dXJucyBJRCBieSBkZWZhdWx0IG9yIEVtcGxveWVlIGlmIHRydXRoeVxuXHQgKi9cblx0Y3VycmVudFVzZXIoYXNFbXBsb3llZSA9IGZhbHNlKSB7XG5cdFx0bGV0IGlkID0gMTsgLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBXUFxuXG5cdFx0Ly8gR2V0IEVtcGxveWVlIHdpdGggSURcblx0XHRpZiAoYXNFbXBsb3llZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzcGVjaWFsaXN0cyB3aG8gc3BlY2lhbGlzZSBpbiBhIGNlcnRhaW4gcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBmaW5kIGVtcGxveWVlcyBmb3Jcblx0ICovXG5cdGdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGUpIHtcblx0XHRsZXQgc3RhZmYgID0gdGhpcy5zdGFmZixcblx0XHQgICAgZmlsdGVyID0gaWQgPT4gZW1wbG95ZWUgPT4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoaWQpID4gLTE7XG5cblx0XHRpZiAodHlwZW9mIGV4cGVydGlzZVR5cGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdGxldCBvdXRwdXQgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaWQgb2YgZXhwZXJ0aXNlVHlwZSkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdGFmZi5maWx0ZXIoZmlsdGVyKGlkKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RhZmYuZmlsdGVyKGZpbHRlcihleHBlcnRpc2VUeXBlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgZW1wbG95ZWUgaGFzIHRoZSBwYXNzZWQgcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gaW5zcGVjdFxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gbG9vayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGVtcGxveWVlIGhhcyB0aGUgcHJvYmxlbSB0eXBlIGFzIGEgc3BlY2lhbGlzbVxuXHQgKi9cblx0aGFzU3BlY2lhbGlzbShlbXBsb3llZSwgZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGV4cGVydGlzZVR5cGVJZCkgPiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggYWxsIGVtcGxveWVlcyBmb3IgdGhlIGdpdmVuIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybnMgQWxsIG1hdGNoaW5nIHJlc3VsdHMgdG8gdGhlIHF1ZXJ5XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuc3RhZmYsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGUgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVTdGFmZiBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlU3RhZmZcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBleHBlcnRpc2UgdHlwZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBhcGkuZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGUoZSkpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gYXBpLmV4cGVydGlzZVR5cGVTdGFmZi5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZVN0YWZmKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYWxsIEV4cGVydGlzZVR5cGUncyB3aXRoIG5vIHBhcmVudCAoaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRSb290RXhwZXJ0aXNlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5fcGFyZW50ID09IG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZX1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmluZChleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuaWQgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IEV4cGVydGlzZVR5cGVzIHdpdGggSURzIGZyb20gYW4gQXJyYXkgb2YgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGV4cGVydGlzZVR5cGVJZHMgQXJyYXkgb2YgSW50ZWdlcnMgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWQnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZXMgc2F0aXNmeWluZyB0aGUgY29uZGl0aW9uXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlSWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZUlkcy5pbmRleE9mKGV4cGVydGlzZVR5cGUuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmlsdGVyKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcmRlcmVkIGFycmF5IG9mIHBhcmVudHMgb2YgYW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZSB0byBmaW5kIHBhcmVudHMgZnJvbVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZSBwYXJlbnRzLCBhbmQgdGhlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZXMgICAgICA9IFtleHBlcnRpc2VUeXBlUGFyZW50XTtcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRleHBlcnRpc2VUeXBlcy5wdXNoKGV4cGVydGlzZVR5cGVQYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBleHBlcnRpc2VUeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCB3aXRoIGFuIGV4YWN0XG5cdCAqIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgYW5kIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgSUQgcGFpclxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZVxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmZcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBudWxsLCBvciB0aGUgcmVjb3JkIGRlc2lyZWRcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIHN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiA9PT0gc3RhZmZJZCAmJiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVTdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5pZCA9PT0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHx8IG51bGw7XG5cdH1cblxuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuZXhwZXJ0aXNlVHlwZXMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwiLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQWJzdHJhY3QgY2xhc3MgZXh0ZW5kZWQgYnkgYWxsIG1hbmFnZXJzLFxuICogY29udGFpbnMgbWV0aG9kcyB0aGF0IG1heSBiZSB1c2VmdWwgdG8gdGhlIG1hbmFnZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly9cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlYXJjaCBhcnJheSBvZiBlbGVtZW50cyBmb3IgcXVlcnkgaW4gZ2l2ZW4gcHJvcGVydHkgbmFtZXNcblx0ICogXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBBcnJheSBvZiBvYmplY3RzIHRvIGJlIHNlYXJjaGVkIHRocm91Z2hcblx0ICogQHBhcmFtIHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKi9cblx0c2VhcmNoKGVsZW1lbnRzID0gW10sIHF1ZXJ5ID0gXCJcIiwgcHJvcGVydGllcyA9IFtdKSB7XG5cdFx0cXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpc2UgcXVlcnkgKGFuZCBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSBsYXRlcilcblxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWwgPT4geyAvLyBHZXQgYWxsIGVsZW1lbnRzXG5cdFx0XHRyZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3AgPT4geyAvLyBDaGVjayBwcm9wZXJ0aWVzIHVudGlsIG1hdGNoIGlzIGZvdW5kXG5cdFx0XHRcdGlmIChTdHJpbmcoZWxbcHJvcF0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSByZXR1cm4gdHJ1ZTsgLy8gRGV0ZXJtaW5lIGlmIHByb3BlcnR5IGlzIGEgbWF0Y2ggZm9yIHF1ZXJ5XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwiLyoqXG4gKiBEeW5hbWljUGFnZVxuICpcbiAqIEV4dGVuZGVkIGJ5IGV2ZXJ5IHBhZ2UsIGUuZy4gVGlja2V0UGFnZS5cbiAqIENvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IGFyZSByZXBlYXRlZCBvZnRlbiBhbW9uZ1xuICogcGFnZXMsIHN1Y2ggYXMgdXBkYXRpbmcgdGFibGVzIG9yIHVwZGF0aW5nIHRoZSBuYXZiYXJcbiAqL1xuY2xhc3MgRHluYW1pY1BhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgcGFnZSB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3JzXG5cdCAqIHRvIGRlZmluZSB0aGUgYm91bmRzIG9mIHRoZSBwYWdlLCBpbiBjYXNlcyB3aGVyZSB0aGlzIER5bmFtaWNQYWdlXG5cdCAqIGlzIG5vdCB0aGUgb25seSBwYWdlIG9uIHRoZSBzY3JlZW4sIHN1Y2ggYXMgaWYgYSBwYWdlIGlzIGJlaW5nXG5cdCAqIGRpc3BsYXllZCBpbiBhIG1vZGFsLlxuXHQgKlxuXHQgKiBOb3QgcHJvdmlkaW5nIGFueSBzZWxlY3RvcnMgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoZVxuXHQgKiBtYWluIHNlbGVjdG9ycyBmb3IgdGhlIGVudGlyZSBzY3JlZW4sIHN1Y2ggdGhhdFxuXHQgKiB0aGlzIHBhZ2UgYmVjb21lcyB0aGUgbWFpbiBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHNlY3Rpb25TZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmluZyB0YWJsZSB2aWV3XG5cdCAqIEBwYXJhbSB0YWJsZVNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGFibGUgd2l0aGluIHByZXZpb3VzIHNlY3Rpb25cblx0ICogQHBhcmFtIG5hdlNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgbmF2aWdhdGlvbiBiYXIgc2hvd24gYXQgdG9wIG9mIHNlY3Rpb25cblx0ICogQHBhcmFtIGRldGFpbFNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3Igc2luZ2xlIHZpZXcgZGV0YWlsIHNob3duIGZvciBhbiBpbmRpdmlkdWFsIHJvd1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNlY3Rpb25TZWxlY3RvciA9IFwiI2xpc3Qtdmlld1wiLFxuXHRcdHRhYmxlU2VsZWN0b3IgPSBcIiN0YWJsZS1zZWN0aW9uXCIsXG5cdFx0bmF2U2VsZWN0b3IsXG5cdFx0ZGV0YWlsU2VsZWN0b3Jcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5zZWN0aW9uU2VsZWN0b3IgPSBzZWN0aW9uU2VsZWN0b3I7XG5cdFx0dGhpcy50YWJsZVNlbGVjdG9yID0gdGFibGVTZWxlY3Rvcjtcblx0XHQvLyBTZXQgbmF2aWdhdGlvbiBzZWxlY3RvciB0byBmaXJzdCBjb21wb25lbnQgb2Ygc2VjdGlvbiBzZWxlY3RvciB3aXRoIOKAmC1uYXbigJkgYXBwZW5kZWQsIG90aGVyd2lzZSBkZWZhdWx0IENTUyBzZWxlY3RvclxuXHRcdHRoaXMubmF2U2VsZWN0b3IgPSBuYXZTZWxlY3RvciA/IG5hdlNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItbmF2XCIgOiBcIi5zaWRlLW5hdi1iYXItbmVzdGVkXCIpO1xuXHRcdHRoaXMuZGV0YWlsU2VsZWN0b3IgPSBkZXRhaWxTZWxlY3RvciA/IGRldGFpbFNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItZGV0YWlsXCIgOiBcIiNzaW5nbGUtdmlld1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpdGxlIGJhciBvZiB0aGUgc2luZ2xlIHZpZXcgdG8gdGhlIGdpdmVuIHN0cmluZ1xuXHQgKiBDQVVUSU9OOiBEb2VzIG5vdCBwZXJmb3JtIGVzY2FwaW5nIG9mIGlucHV0IHN0cmluZywgZG8gbm90IHBhc3Ncblx0ICogdXNlciBjb250ZW50IHRvIHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0gaHRtbCBIVE1MIHRvIHNldCB0aGUgc2luZ2xlIHZpZXcgdGl0bGUgdG9cblx0ICovXG5cdHVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIoaHRtbCkge1xuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS5odG1sKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBcIkxvYWRpbmfigKZcIiBzcGxhc2ggc2NyZWVuIGlmIGl0J3Mgc2hvd25cblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBcIk5vIFJlc3VsdHPigKZcIiBzcGxhc2ggc2NyZWVuXG5cdCAqIHNob3VsZCBiZSBzaG93biBvciBub3QuXG5cdCAqXG5cdCAqIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHVzaW5nIFwiYXBwZW5kVGFibGVcIlxuXHQgKi9cblx0dXBkYXRlU3BsYXNoU2NyZWVuKG5hdlRleHQgPSBudWxsKSB7XG5cdFx0Ly8gR2V0IHRhYmxlIGVsZW1lbnQgdG8gaW5zcGVjdCBjb250ZW50c1xuXHRcdHZhciAkdGFibGUgPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0XHRcdC8vIEdldCBudW1iZXIgb2YgcmVzdWx0cyB3aXRoaW4gdGFibGUgY3VycmVudGx5IGJlaW5nIHNob3duXG5cdFx0XHRcdC8vIFRoaXMgaXMgbm90IGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUgSFRNTFxuXHRcdFx0XHQvLyBzaW5jZSBzb21lIHRhYmxlIHJvd3MgbWF5IGJlIGhpZGRlbiwgd2hpY2ggbmVlZCB0byBiZVxuXHRcdFx0XHQvLyBkaXNjb3VudGVkIGZyb20gdGhlIHRvdGFsIGNvdW50LlxuXHRcdCAgICByZXN1bHRzQ291bnQgPSAkdGFibGUuZmluZCgndGJvZHkgdHInKS5maWx0ZXIoKGksIGVsKSA9PiAhJChlbCkuaGFzQ2xhc3MoXCJyb3ctaGlkZGVuXCIpKS5sZW5ndGgsXG5cdFx0XHRcdC8vIEdldCBzcGxhc2ggc2NyZWVuIGVsZW1lbnQgd2hpY2ggbWF5IGJlIGJlaW5nIHNob3duIGluc3RlYWQgb2YgdGFibGVcblx0XHQgICAgJHNwbGFzaFNjcmVlbiA9ICQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJyk7XG5cblx0XHQvLyBEZXBlbmRpbmcgb24gd2hldGhlciB0aGVyZSBhcmUgcmVzdWx0cywgdGhlIHNwbGFzaCBzY3JlZW4gb3IgdGFibGUgbmVlZHMgdG8gYmUgc2hvd25cblx0XHQvLyBhbmQgdGhlIG90aGVyIHN3YXBwZWQgb3V0IHVzaW5nIENTU1xuXHRcdHZhciBbJHNob3csICRoaWRlXSA9IHJlc3VsdHNDb3VudCA/IFskdGFibGUsICRzcGxhc2hTY3JlZW5dIDogWyRzcGxhc2hTY3JlZW4sICR0YWJsZV07XG5cdFx0JGhpZGUuYWRkQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cdFx0JHNob3cucmVtb3ZlQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cblx0XHQvLyBUaGUgbWFpbiB0b3AgYmFyIGZvciB0aGUgbGlzdCB2aWV3IGNvbnRhaW5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgc2hvd24gaW4gdGhlIHRhYmxlXG5cdFx0aWYgKCFuYXZUZXh0KSB7XG5cdFx0XHQvLyBTZXQgbmF2YmFyIHRleHQgYXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRhYmxlIHRoZW4gYXBwZW5kIGN1cnJlbnRseSBzZWxlY3RlZCBmaWx0ZXJcblx0XHRcdG5hdlRleHQgPSByZXN1bHRzQ291bnQgKyBcIiBcIiArICQodGhpcy5uYXZTZWxlY3RvcikuZmluZChcImxpLmFjdGl2ZVwiKS5maXJzdCgpLnRleHQoKS5yZXBsYWNlKFwiQWxsIFwiLCBcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBJZiB1bmFibGUgdG8gb2J0YWluIHJvd3MgY291bnQsIHNob3cgXCJMb2FkaW5n4oCmXCJcblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5jbG9zZXN0KFwic2VjdGlvblwiKS5maW5kKFwiLnRvcC1uYXYgaDRcIikudGV4dChyZXN1bHRzQ291bnQgIT09IHVuZGVmaW5lZCA/IG5hdlRleHQgOiBcIkxvYWRpbmfigKZcIik7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICogdXNpbmcgZGF0YSBmcm9tIFwib2JqZWN0XCIuXG5cdCAqXG5cdCAqIFRoZSBwcm9wZXJ0eSBuYW1lcyBzaG91bGQgY29ycmVzcG9uZCB3aXRoIHRoZSBcInNsdWdcIlxuXHQgKiBhdHRyaWJ1dGUgaW4gdGFibGUgaGVhZGVyLlxuXHQgKlxuXHQgKiBOT1RFOiBUaGlzIGFzc3VtZXMgdGhlIG9iamVjdCBoYXMgYW4gSUQgYXR0cmlidXRlLiBJbmNsdWRlIGl0XG5cdCAqIGV2ZW4gaWYgeW91IGRvbid0IHdpc2ggdG8gc2hvdyBpdC5cblx0ICpcblx0ICogQHBhcmFtIG9iamVjdCAtIFRoZSBkYXRhIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZVxuXHQgKiBzcGxhc2hzY3JlZW4gb24geW91ciBwYWdlXG5cdCAqL1xuXHRhcHBlbmRUYWJsZVJvdyhvYmplY3QpIHtcblx0XHR2YXIgJHRhYmxlU2VjdGlvbiA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHQgICAgJHRhYmxlSGVhZCAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGhlYWQgdHInKSxcblx0XHQgICAgJHRhYmxlQm9keSAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGJvZHknKSxcblx0XHQgICAgJG5ld1JvdyAgICAgICA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcblxuXHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSByb3cgdHdpY2Vcblx0XHRpZiAoJHRhYmxlQm9keS5jaGlsZHJlbihcIltkYXRhLXJvd2lkPVxcXCJcIiArIG9iamVjdC5pZCArIFwiXFxcIl1cIikubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG5cdFx0Ly8gU2V0IElEIG9uIHJvdyB0byByZWZlcmVuY2UgbGF0ZXJcblx0XHQkbmV3Um93WzBdLmRhdGFzZXQucm93aWQgPSBvYmplY3QuaWQ7XG5cdFx0JG5ld1Jvdy50b2dnbGVDbGFzcyhcImhpZ2hsaWdodFwiLCBvYmplY3QuaWQgPT0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHRcdCR0YWJsZUhlYWQuY2hpbGRyZW4oJ3RoJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzbHVnID0gdGhpcy5kYXRhc2V0LnNsdWcsIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG5cdFx0XHRpZiAoc2x1ZyA9PT0gJ2V5ZScpIHsgLy8gdGhlIG9uLWhvdmVyIGV5ZSBpbnZpc2libGUgcm93XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nO1xuXHRcdFx0fSBlbHNlIGlmIChzbHVnICYmIHNsdWcuaW5jbHVkZXMoXCJhY2Nlc3NcIikpIHtcblx0XHRcdFx0Ly8gQm9vbGVhbiB2YWx1ZSBzdXBwb3J0XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgPyB0aGlzLmlubmVySFRNTCA6IFwiwrdcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgIT09IHVuZGVmaW5lZCA/IG9iamVjdFtzbHVnXSA6IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCRuZXdSb3cuYXBwZW5kKHRkKTtcblx0XHR9KTtcblx0XHRcblx0XHQkdGFibGVCb2R5LmFwcGVuZCgkbmV3Um93KTtcblxuXHRcdHJldHVybiAkbmV3Um93WzBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyB0aGUgZGF0YSBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICovXG5cdGNsZWFyVGFibGUoKSB7XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNob3cgZGV0YWlsIHBhZ2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgdGFibGUgcm93IHRvIGJlIHNob3duIGluIHRoZSBzaW5nbGUgdmlld1xuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCA9IG51bGwpIHtcblx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGZvciBudWxsIGFzIG5vIHJvd3Mgd2lsbCBtYXRjaCBpZiBubyBJRCBwYXNzZWRcblx0XHQvLyAuc2libGluZ3MgZG9lcyBub3QgaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGYgc28gY2FuIGJlIGNoYWluZWQgYWZ0ZXIgZmluZGluZyBoaWdobGlnaHQgcm93IGZpcnN0XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnJvd2lkID09IGlkKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XG5cdFx0Ly8gTm8gbmVlZCB0byBzZXQgc3R5bGUgdXNpbmcgSlMgaGVyZSwgQ1NTIGhhbmRsZXMgZmxleFxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikudW53cmFwKFwiZGl2XCIpXG5cdFx0XHQvLyBDbG9zZSBidXR0b24gb24gaGlkZVxuXHRcdFx0LmZpbmQoXCJbZGF0YS1hY3Rpb249XFxcImNsb3NlXFxcIl1cIikuY2xpY2soKCkgPT4gdGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xuXHRcdFxuXHRcdGlmIChpZCA+IC0xKSBsb2NhdGlvbi5oYXNoID0gcGFyc2VJbnQoaWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogSGlkZSBkZXRhaWwgcGFnZSBzaG93biB3aXRoIHNob3dEZXRhaWxcblx0ICovXG5cdGhpZGVUYWJsZVJvd0RldGFpbHMoKSB7XG5cdFx0Ly8gRGVzZWxlY3QgYWxsIHJvd3Ncblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIEZpbHRlciB0byBjaGVjayBpZiBhbHJlYWR5IGhpZGRlbiwgZG9uJ3QgaGlkZSBhZ2FpblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KFwiZGl2XCIpLmxlbmd0aCA9PT0gMCkud3JhcChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblx0XHRcblx0XHRsb2NhdGlvbi5oYXNoID0gXCJcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGEgc2VsZWN0IGVsZW1lbnQgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcblx0ICogZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgZHJvcGRvd24gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdCBBIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYmUgZmlsbGVkXG5cdCAqIEBwYXJhbSBkZWZhdWx0VGV4dCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcblx0ICogQHBhcmFtIGVsZW1lbnRzIExpc3Qgb2YgZWxlbWVudHMgdG8gYmUgYWRkZWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tXG5cdCAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uSWQgSUQgb2YgYSBkZWZhdWx0IG9wdGlvbiBmcm9tIHRoZSBlbGVtZW50cyBnaXZlblxuXHQgKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IG9mIHRoZSBzZWxlY3QgZmllbGQgdG8gYWNjZXNzIHNlbGVjdGVkIGl0ZW0gd2l0aFxuXHQgKiBAcGFyYW0gZ2V0QWRkaXRpb25hbERldGFpbHMgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhZGRpdGlvbmFsIGRldGFpbHMgdG8gYmUgc2hvd24gZm9yIGN1cnJlbnQgaXRlbVxuXHQgKi9cblx0cG9wdWxhdGVTZWxlY3RGaWVsZCgkc2VsZWN0LCBkZWZhdWx0VGV4dCwgZWxlbWVudHMsIGRlZmF1bHRPcHRpb25JZCA9IG51bGwsIHByb3BlcnR5ID0gJ25hbWUnLCBnZXRBZGRpdGlvbmFsRGV0YWlscyA9IG51bGwpIHtcblx0XHQvLyBEZWZhdWx0IGVtcHR5IGNvbnRlbnQgZm9yIGlucHV0XG5cdFx0bGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGVmYXVsdFRleHQsIG51bGwsIHRydWUsIHRydWUpO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0JHNlbGVjdC5lbXB0eSgpLmFwcGVuZChvcHRpb24pO1xuXHRcdFxuXHRcdC8vIEVhY2ggb3B0aW9uIHRvIGJlIHNlbGVjdGVkIGZyb21cblx0XHRlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0aWYgKGdldEFkZGl0aW9uYWxEZXRhaWxzICE9PSBudWxsKSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGdldEFkZGl0aW9uYWxEZXRhaWxzKGUpICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZ1xuXHQgKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWFyY2ggdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gb2JqZWN0Q2FsbGJhY2sgYSBjYWxsYmFjayByZXR1cm5pbmcgYW4gb2JqZWN0ICh0aGUgcm93IHN0cnVjdHVyZSlcblx0ICogQHBhcmFtIHNlYXJjaEtleXMgdGhlIHByb3BlcnRpZXMgaW4gb2JqZWN0Q2FsbGJhY2sgdG8gaGlnaGxpZ2h0XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIGVsZW1lbnRzID0gW10sIG9iamVjdENhbGxiYWNrLCBzZWFyY2hLZXlzID0gW10pIHtcblx0XHRsZXQgcGFnZSA9IHRoaXM7XG5cblx0XHRwYWdlLmNsZWFyVGFibGUoKTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSBvYmplY3RDYWxsYmFjayhlbCk7XG5cblx0XHRcdFx0c2VhcmNoS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0b2JqZWN0W2tleV0gPSBTdHJpbmcob2JqZWN0W2tleV0pLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBxdWVyeSArICcpJywgJ2lnJyksICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChxdWVyeSA9PT0gJChcIi5zZWFyY2gtZmllbGQgaW5wdXRcIikudmFsKCkpIHtcblx0XHRcdFx0XHRwYWdlLmFwcGVuZFRhYmxlUm93KG9iamVjdCk7XG5cdFx0XHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYCR7ZWxlbWVudHMubGVuZ3RofSByZXN1bHQke2VsZW1lbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgTm8gcmVzdWx0cyBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGEgbWVzc2FnZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCBvdmVyIGFsbCBlbGVtZW50cy5cblx0ICogSGlkZSBhZnRlciA2IHNlY29uZHMsIG9yIGNvbmZpZ3VyYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugc3RyaW5nIHRvIGJlIHNob3duIGluIHRoZSBtZXNzYWdlIGJveC5cblx0ICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbWVzc2FnZSwgc3VjaCBhcyBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXG5cdCAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgdGhlIG1lc3NhZ2UgdG8gYmUgc2hvd24gZm9yLlxuXHQgKi9cblx0c3RhdGljIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgdHlwZSA9IFwiZGFuZ2VyXCIsIGR1cmF0aW9uID0gNikge1xuXHRcdC8vIE9ubHkgc2hvdyBvbmUgbWVzc2FnZSBhdCBhIHRpbWVcblx0XHQkKFwiI2FsZXJ0LW5vdGlmaWNhdGlvblwiKS5yZW1vdmUoKTtcblxuXHRcdC8vIENyZWF0ZSBlbGVtZW50XG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtc2cuaWQgPSBcImFsZXJ0LW5vdGlmaWNhdGlvblwiO1xuXHRcdG1zZy5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIiwgYGFsZXJ0LSR7dHlwZX1gLCBcImFsZXJ0LW5vdGlmaWNhdGlvblwiKTtcblx0XHRtc2cuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpOyAvLyBBY2Nlc3NpYmlsaXR5XG5cdFx0Ly8gU2V0IGNvbnRlbnQgYW5kIHNob3cgb24gc2NyZWVuXG5cblx0XHRtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXNnKTtcblxuXHRcdC8vIEhpZGUgYWZ0ZXIgZHVyYXRpb25cblx0XHRzZXRUaW1lb3V0KCgpID0+IG1zZy5yZW1vdmUoKSwgZHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdC8vIENsaWNrIHRvIGhpZGUgbWVzc2FnZVxuXHRcdCQobXNnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuXG4vKipcbiAqIEhhcmR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBkZXZpY2VzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEhhcmR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kZXZpY2VzID0gYXBpLmRldmljZXMubWFwKGUgPT4gbmV3IERldmljZShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgVHlwZXMgaW4gdGFibGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVUeXBlcygpIHtcblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5kZXZpY2VzLm1hcCh0ID0+IHQudHlwZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBNYWtlcyBmb3IgYSBzcGVjaWZpZWQgVHlwZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZU1ha2VzT2ZUeXBlKHR5cGUpIHtcblx0XHRsZXQgZGV2aWNlc0J5VHlwZSA9IHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUpO1xuXG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KGRldmljZXNCeVR5cGUubWFwKHQgPT4gdC5tYWtlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZGV2aWNlcyB3aXRoIGEgc3BlY2lmaWVkIFR5cGUgYW5kIE1ha2Vcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHRnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSh0eXBlLG1ha2UpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSAmJiBkZXZpY2UubWFrZSA9PSBtYWtlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRldmljZXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBkZXZpY2VzIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldERldmljZXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGlkcy5pbmRleE9mKGRldmljZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBkZXZpY2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBkZXZpY2UgXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkZXZpY2UgPT4gZGV2aWNlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRldmljZSB3aXRoIHRoZSBnaXZlbiBzZXJpYWwgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBzZXJpYWxOdW1iZXIgVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlIGRldmljZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0RldmljZX1cblx0ICovXG5cdGdldERldmljZUJ5U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkID0+IGQuc2VyaWFsX25vID09PSBzZXJpYWxOdW1iZXIpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4vUHJvZ3JhbVwiO1xuXG4vKipcbiAqIFNvZnR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBzb2Z0d2FyZSBwcm9ncmFtcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBTb2Z0d2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2Z0d2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMucHJvZ3JhbXMgPSBhcGkucHJvZ3JhbXMubWFwKGUgPT4gbmV3IFByb2dyYW0oZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHByb2dyYW1zIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgcHJvZ3JhbXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0UHJvZ3JhbXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmlsdGVyKHByb2dyYW0gPT4gaWRzLmluZGV4T2YocHJvZ3JhbS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKiBAcmV0dXJucyB7UHJvZ3JhbX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbmQocHJvZ3JhbSA9PiBwcm9ncmFtLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwiLy8gU2luY2UgbmF2IGVsZW1lbnQgaXMgcGVyc2lzdGVkIGJldHdlZW4gcGFnZXMsIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBhY3RpdmUgYnV0dG9uXG4kKFwiI25hdlwiKS5vbihcImNsaWNrXCIsIFwidWwgbGkgYVwiLCBlID0+IHtcblx0JChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuLy8gVG9vbHRpcHMgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIGEgcmVsZXZhbnQgdG9vbHRpcCBIVE1MIGF0dHJpYnV0ZVxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuLy8gRGF0ZS90aW1lIHBpY2tlciBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggcmVsZXZhbnQgY2xhc3NcbiQoJy50aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoKTtcblxuLy8gQ3JlYXRlIG5ldyBlbXBsb3llZSB3aGVuIHNlYXJjaGluZyBmb3Igbm9uLWV4aXN0ZW50IGFzc2lnbmVlXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnbGkubm8tcmVzdWx0cycsIGZ1bmN0aW9uKGUpIHtcblx0dmFyIG5ld1ZhbHVlID0gJCh0aGlzKS5jbG9zZXN0KFwiLmRyb3Bkb3duLW1lbnUub3BlblwiKS5jaGlsZHJlbihcIi5icy1zZWFyY2hib3hcIikuY2hpbGRyZW4oXCJpbnB1dFwiKS52YWwoKSxcblx0ICAgICRtb2RhbCAgID0gJCgnI25ldy1zdGFmZi1tb2RhbCcpO1xuXG5cdCRtb2RhbC5tb2RhbCgnc2hvdycpO1xuXG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwic3RhZmYubmFtZVwiXScpLnZhbChuZXdWYWx1ZSk7XG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwiZXZlbnRfdGFyZ2V0XCJdJykudmFsKCQodGhpcykuY2xvc2VzdCgnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCdzZWxlY3QnKS5hdHRyKCduYW1lJykpOyAvLyB3aGVuIHRoZSBzdGFmZiBtZW1iZXIgaXMgY3JlYXRlZCwgdGhpcyBpcyB0aGUgaW5wdXQgZmllbGQgaXQnbGwgdXBkYXRlXG59KTtcblxuJCgnI25ldy1zdGFmZi1tb2RhbCwgI25ldy10aWNrZXQtbW9kYWwsICNmb2xsb3ctdXAtY2FsbC1tb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuXHQkKHRoaXMpLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpXG5cdFx0Lm5vdCgnLm5vLWNsZWFyLW9uLXNob3cnKVxuXHRcdC52YWwoJycpO1xuXG5cdCQodGhpcykuZmluZCgnI2FjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZSgpO1xuXG5cdHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0JCh0aGlzKS5maW5kKCcudGltZXBpY2tlcicpLnZhbCgoJzAnICsgKGN1cnJlbnRUaW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy8nICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldERhdGUoKSkuc2xpY2UoLTIpICsgJy8nICsgY3VycmVudFRpbWUuZ2V0RnVsbFllYXIoKSArICcgJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMikpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3RvZ2dsZScpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAucmVtb3ZlLWFjY29yZGlvbicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdoaWRlLmJzLmNvbGxhcHNlIHNob3cuYnMuY29sbGFwc2UnLCAnI2FjY29yZGlvbiAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG5cdGxldCBpc1Nob3cgPSBlLnR5cGUuc3BsaXQoXCIuXCIpWzBdID09PSBcInNob3dcIjtcblx0JCh0aGlzKS5zaWJsaW5ncygnLmNhcmQtaGVhZGVyJykuZmluZCgnLnZpZXctYWNjb3JkaW9uJykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tdXAnLCAhaXNTaG93KS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi1kb3duJywgaXNTaG93KTtcbn0pO1xuXG4kKCcuc2VhcmNoLWZpZWxkIGlucHV0JykudmFsKCcnKTtcblxuLy8gQm9vdHN0cmFwIFNlbGVjdCBGaXg6IEFkZCBiYWNrIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIHNlbGVjdCBmaWVsZFxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5ib290c3RyYXAtc2VsZWN0XCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51Lm9wZW4nKS50b2dnbGUoKTtcbn0pO1xuXG4vLyBCb290c3RyYXAgbW9kYWxzIGZpeDogYWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJib2R5Om5vdChbZGF0YS1wYWdlPVxcXCJzdGFmZlxcXCJdKSBbZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIl1cIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcy5kYXRhc2V0LnRhcmdldCkubW9kYWwoXCJzaG93XCIpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1BpY2tlcihwaWNrZXJFbGVtZW50LCB2YWx1ZSwgbmFtZSkge1xuXHQkKHBpY2tlckVsZW1lbnQpLmFwcGVuZChuZXcgT3B0aW9uKG5hbWUsIHZhbHVlKSkuc2VsZWN0cGlja2VyKCdyZWZyZXNoJykuc2VsZWN0cGlja2VyKCd2YWwnLCBuYW1lKTtcbn1cblxudmFyIHZhbGlkYXRpb25UaW1lb3V0ID0gd2luZG93LnZhbGlkYXRpb25UaW1lb3V0ID0gbnVsbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDb21tZW50XG4gKlxuICogQSBjb21tZW50IGlzIG1hZGUgYWJvdXQgYSBzcGVjaWZpYyB0aWNrZXQsIGJ5XG4gKiBhIHN0YWZmIG1lbWJlci5cbiAqIFxuICogQ29udGFpbnMgdGhlIFRpY2tldCB0aGF0IGl0IGJlbG9uZ3MgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZDogaWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbF9pZDogY2FsbCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbCAgICAgICAgICAgID0gY2FsbDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDtcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IGF1dGhvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2F1dGhvcik7XG5cdH1cblxuXHRzZXQgYXV0aG9yKGF1dGhvcikge1xuXHRcdHRoaXMuX2F1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdGdldCBjYWxsKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbCh0aGlzLl9jYWxsKTtcblx0fVxuXG5cdHNldCBjYWxsKGNhbGwpIHtcblx0XHR0aGlzLl9jYWxsID0gY2FsbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL0NvbW1lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDYWxsXG4gKlxuICogRXZlcnkgdGltZSB0aGUgSGVscGRlc2sgaXMgY2FsbGVkLCB0aGlzIGlzIGNyZWF0ZWQuXG4gKiBBIGNhbGwgbWF5IGhhdmUgbXVsdGlwbGUgdGlja2V0cywgYSB0aWNrZXQgbWF5IGhhdmVcbiAqIG11bHRpcGxlIGNhbGxzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpbWUsXG5cdFx0Y2FsbGVyX2lkOiBjYWxsZXIsXG5cdFx0b3BlcmF0b3JfaWQ6IG9wZXJhdG9yLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpbWUgICAgID0gdGltZTtcblx0XHR0aGlzLmNhbGxlciAgID0gY2FsbGVyOyAgIC8vIElEIG9mIGNhbGxlciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yOyAvLyBJRCBvZiBvcGVyYXRvciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy50aWNrZXRzICA9IHRpY2tldHM7ICAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFRpY2tldCdzXG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IG9wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IG9wZXJhdG9yKG9wZXJhdG9yKSB7XG5cdFx0dGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0Zyb21DYWxsKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL0NhbGwuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFbXBsb3llZVxuICpcbiAqIEFuIGVtcGxveWVlIG9mIHRoZSBjb21wYW55XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0am9iX3RpdGxlOiBqb2IsXG5cdFx0ZGVwYXJ0bWVudCxcblx0XHRwaG9uZV9udW1iZXI6IHBob25lLFxuXHRcdGV4cGVydGlzZV90eXBlczogc3BlY2lhbGlzbXMgPSBbXSxcblx0XHRvcGVyYXRvciA9IGZhbHNlLFxuXHRcdHNwZWNpYWxpc3QgPSBzcGVjaWFsaXNtcy5sZW5ndGggPiAwLFxuXHRcdGFuYWx5c3QgPSBmYWxzZSxcblx0XHRhZG1pbiA9IGZhbHNlXG5cdH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5qb2IgPSBqb2I7XG5cdFx0dGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5uYW1lO1xuXHRcdHRoaXMuX2RlcGFydG1lbnQgPSBkZXBhcnRtZW50LmlkO1xuXHRcdHRoaXMucGhvbmUgPSBwaG9uZTtcblx0XHR0aGlzLnNwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdFx0dGhpcy5hY2Nlc3MgPSB7b3BlcmF0b3IsIGFuYWx5c3QsIGFkbWlufTtcblx0XHRcblx0XHQvLyBJZiB1c2VyIGlzIGFueSBvdGhlciBwZXJtaXNzaW9uIHRoZW4gcmVhZCBpcyBncmFudGVkXG5cdFx0dGhpcy5hY2Nlc3MucmVhZCA9IHRoaXMuYWNjZXNzLm9wZXJhdG9yIHx8IHRoaXMuYWNjZXNzLmFuYWx5c3QgfHwgdGhpcy5hY2Nlc3MuYWRtaW4gfHwgdGhpcy5hY2Nlc3MucmVhZG9ubHkgfHwgZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIHJlYWQgYWNjZXNzIHRvIHRoZSBzeXN0ZW1cblx0ICovXG5cdGdldCBpc1JlYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLnJlYWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBoZWxwIGRlc2sgb3BlcmF0b3Jcblx0ICovXG5cdGdldCBpc09wZXJhdG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5vcGVyYXRvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIGFuYWx5dGljYWwgZGF0YSBhYm91dCB0aGUgaGVscCBkZXNrIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzQW5hbHlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYW5hbHlzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhbiBhZG1pbmlzdHJhdG9yIG9uIHRoZSBoZWxwIGRlc2tcblx0ICovXG5cdGdldCBpc0FkbWluKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hZG1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcHJvYmxlbSB0eXBlcyB0aGUgdXNlciBpcyBhIHNwZWNpYWxpc3Qgb2Zcblx0ICovXG5cdGdldCBzcGVjaWFsaXNtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fc3BlY2lhbGlzbXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzcGVjaWFsaXNtcyBTZXQgdGhlIGxpc3Qgb2Ygc3BlY2lhbGlzbXMgZm9yIHRoaXMgcGVyc29uIG9uIHRoZSBzeXN0ZW1cblx0ICovXG5cdHNldCBzcGVjaWFsaXNtcyhzcGVjaWFsaXNtcykge1xuXHRcdHRoaXMuX3NwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdH1cblxuXHQvKipcblx0ICogUHJlcGFyZSBkYXRhIGZvciBzZW5kaW5nIHRvIEFQSSBlbmRwb2ludC4gVGhlIEFQSSBoYXMgZGlmZmVyZW50XG5cdCAqIGRhdGEga2V5cyByZXByZXNlbnRpbmcgdGhlIGRhdGEgYWNjZXNzaWJsZSBpbiB0aGUgdGFibGVzLCBzbyBuZXdcblx0ICogZGF0YSBhbmQgdXBkYXRlcyB0byBkYXRhIG11c3QgdXNlIHRoZXNlIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGRhdGEgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm5zIGRhdGEgd2l0aCB1cGRhdGVkIGtleSBuYW1lc1xuXHQgKi9cblx0c3RhdGljIHByZXBhcmVEYXRhKGRhdGEgPSB7fSkge1xuXHRcdGRhdGEuam9iX3RpdGxlID0gZGF0YS5qb2I7XG5cdFx0ZGF0YS5waG9uZV9udW1iZXIgPSBkYXRhLnBob25lO1xuXHRcdGRhdGEuZXhwZXJ0aXNlX3R5cGVzID0gZGF0YS5zcGVjaWFsaXNtcztcblx0XHRkYXRhLmRlcGFydG1lbnRfaWQgPSBkYXRhLmRlcGFydG1lbnQ7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXHRcdFx0ZGF0YVtrZXldID0gZGF0YS5hY2Nlc3Nba2V5XSA/ICgxICYmIChkYXRhLnNwZWNpYWxpc3QgPSAxKSkgOiAwO1xuXHRcdH1cblx0XHRkYXRhLnNwZWNpYWxpc3QgPSBkYXRhLnNwZWNpYWxpc3QgfHwgMDtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0cGFyZW50X2lkOiBwYXJlbnQsXG5cdFx0Y2hpbGRyZW5cblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLm5hbWUgICAgID0gbmFtZTtcblx0XHR0aGlzLnBhcmVudCAgID0gcGFyZW50O1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjsgLy8gSUQgb2YgRXhwZXJ0aXNlVHlwZSdzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIEV4cGVydGlzZVR5cGUnc1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9wYXJlbnQpO1xuXHR9XG5cblx0c2V0IHBhcmVudChwYXJlbnQpIHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX2NoaWxkcmVuKTtcblx0fVxuXG5cdHNldCBjaGlsZHJlbihjaGlsZHJlbikge1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZS5qcyIsImltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVTdGFmZiB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzdGFmZl9pZDogc3RhZmZJZCxcblx0XHRleHBlcnRpc2VfdHlwZV9pZDogZXhwZXJ0aXNlVHlwZUlkLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnN0YWZmICAgICAgICAgID0gc3RhZmZJZDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZUlkO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fZXhwZXJ0aXNlX3R5cGUpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlKGV4cGVydGlzZVR5cGUpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZVN0YWZmLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YXR1c1xuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgU3RhdHVzLlxuICogQ29udGFpbnMgVGlja2V0cyB0aGF0IGZpdCBpbnRvIHRoZSBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHNsdWcsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgPSBpZDtcblx0XHR0aGlzLnNsdWcgICAgPSBzbHVnOyAgICAvLyBzbHVnX2V4YW1wbGVcblx0XHR0aGlzLm5hbWUgICAgPSBuYW1lOyAgICAvLyBOYW1lIEV4YW1wbGUhXG5cdFx0dGhpcy50aWNrZXRzID0gdGlja2V0czsgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIFRpY2tldCBpbnN0YW5jZXNcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c1dpdGhTbHVnKHRoaXMuc2x1Zyk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvU3RhdHVzLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0XG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBUaWNrZXQvUHJvYmxlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxzLFxuXHRcdHN0YXR1cyxcblx0XHRzdGF0dXNfaGlzdG9yeTogc3RhdHVzSGlzdG9yeSxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRzb2x1dGlvbl9pZDogc29sdXRpb24sXG5cdFx0ZGV2aWNlcyxcblx0XHRwcm9ncmFtcyxcblx0XHRjb21tZW50cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWwsXG5cdFx0dXBkYXRlZF9hdDogdXBkYXRlZEF0UmVhbCxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZl9pZDogZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdGFzc2lnbmVkX3RvX29wZXJhdG9yX2lkOiBhc3NpZ25lZFRvT3BlcmF0b3JJZFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgICA9IGNhbGxzOyAgLy8gSUQgb2YgY2FsbHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ2FsbCdzXG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGF0dXNfaGlzdG9yeSAgICAgICA9IHN0YXR1c0hpc3Rvcnk7XG5cdFx0dGhpcy50aXRsZSAgICAgICAgICAgICAgICA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gICAgICAgICAgPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnNvbHV0aW9uICAgICAgICAgICAgID0gc29sdXRpb247XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgICA9IGRldmljZXM7ICAvLyBJRCBvZiBkZXZpY2VzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIERldmljZXNcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICAgID0gcHJvZ3JhbXM7IC8vIElEIG9mIHByb2dyYW1zLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFByb2dyYW1zXG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgICA9IGNvbW1lbnRzOyAvLyBJRCBvZiBjb21tZW50cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDb21tZW50J3Ncblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCAgICAgICAgICAgPSB1cGRhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgICAgICA9IGNyZWF0ZWRBdFJlYWw7XG5cdFx0dGhpcy51cGRhdGVkX2F0X3JlYWwgICAgICA9IHVwZGF0ZWRBdFJlYWw7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmFzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgY2FsbHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsc0J5VGlja2V0SWQodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgY2FsbHMoY2FsbHMpIHtcblx0XHR0aGlzLl9jYWxscyA9IGNhbGxzO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblx0XG5cdGdldCBzdGF0dXNfaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1c0hpc3RvcnkodGhpcy5fc3RhdHVzX2hpc3RvcnkpO1xuXHR9XG5cblx0c2V0IHN0YXR1c19oaXN0b3J5KHN0YXR1c0hpc3RvcnkpIHtcblx0XHR0aGlzLl9zdGF0dXNfaGlzdG9yeSA9IHN0YXR1c0hpc3Rvcnk7XG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBkZXZpY2VzKCkge1xuXHRcdHJldHVybiAobmV3IEhhcmR3YXJlTWFuYWdlcigpKS5nZXREZXZpY2VzKHRoaXMuX2RldmljZXMpO1xuXHR9XG5cblx0c2V0IGRldmljZXMoZGV2aWNlcykge1xuXHRcdHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuXHR9XG5cblx0Z2V0IHByb2dyYW1zKCkge1xuXHRcdHJldHVybiAobmV3IFNvZnR3YXJlTWFuYWdlcigpKS5nZXRQcm9ncmFtcyh0aGlzLl9wcm9ncmFtcyk7XG5cdH1cblxuXHRzZXQgcHJvZ3JhbXMocHJvZ3JhbXMpIHtcblx0XHR0aGlzLl9wcm9ncmFtcyA9IHByb2dyYW1zO1xuXHR9XG5cblx0Z2V0IGNvbW1lbnRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudHNCeUlkcyh0aGlzLl9jb21tZW50cyk7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHMpIHtcblx0XHR0aGlzLl9jb21tZW50cyA9IGNvbW1lbnRzO1xuXHR9XG5cblx0Z2V0IHNvbHV0aW9uKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudCh0aGlzLl9zb2x1dGlvbik7XG5cdH1cblxuXHRzZXQgc29sdXRpb24oc29sdXRpb24pIHtcblx0XHR0aGlzLl9zb2x1dGlvbiA9IHNvbHV0aW9uO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlU3RhZmYodGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmZJZDtcblx0fVxuXG5cdGdldCBhc3NpZ25lZF90b19vcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBhc3NpZ25lZF90b19vcGVyYXRvcihhc3NpZ25lZFRvT3BlcmF0b3JJZCkge1xuXHRcdHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0dmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MCAtIDEgKyAxKSkgKyAxOyAvL1JhbmRvbSBpbnQgYmV0d2VlbiAxIGFuZCA0MFxuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCkpLmdldEV4cGVydGlzZVR5cGUocmFuZG9tKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogRGV2aWNlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHR5cGUsXG5cdFx0bWFrZSxcblx0XHRzZXJpYWxfbm8sXG5cdFx0dGlja2V0cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pXG5cdHtcblx0XHR0aGlzLmlkXHRcdFx0XHQ9IGlkO1xuXHRcdHRoaXMudHlwZVx0XHRcdD0gdHlwZTtcblx0XHR0aGlzLm1ha2UgICBcdFx0PSBtYWtlO1xuXHRcdHRoaXMuc2VyaWFsX25vICAgICBcdD0gc2VyaWFsX25vO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMuY3JlYXRlZF9hdFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0XHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hhcmR3YXJlL0RldmljZS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogUHJvZ3JhbVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgU29mdHdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyYW0ge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzLFxuXHRcdG9wZXJhdGluZ19zeXN0ZW0sXG5cdFx0ZXhwaXJ5X2RhdGUsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KSBcblx0e1xuXHRcdHRoaXMuaWQgICAgICAgICBcdFx0PSBpZDtcblx0XHR0aGlzLm5hbWUgICAgICAgXHRcdD0gbmFtZTtcblx0XHR0aGlzLl90aWNrZXRzXHRcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMub3BlcmF0aW5nX3N5c3RlbVx0PSBvcGVyYXRpbmdfc3lzdGVtO1xuXHRcdHRoaXMuZXhwaXJ5X2RhdGVcdFx0PSBleHBpcnlfZGF0ZTtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgXHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgXHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxuXG5cdGdldFNvZnR3YXJlVHlwZSgpIHsgXG5cdFx0Ly9HZXRzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIHByb2dyYW0gaXMgYW4gb3BlcnRpbmcgc3lzdGVtIG9yIG5vdFxuXHRcdGlmICh0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIk9wZXJhdGluZyBTeXN0ZW1cIjtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIkFwcGxpY2F0aW9uXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBcIi1cIjtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRTdGF0dXNcbiAqXG4gKiBJbnRlcm1lZGlhcnkgcmVsYXRpb25zaGlwIGJldHdlZW4gU3RhdHVzXG4gKiBhbmQgVGlja2V0LiBUaGlzIHN0b3JlcyBhIGhpc3Rvcnkgb2YgYVxuICogVGlja2V0J3Mgc3RhdHVzZXM7IHRoZSBsYXN0IGVudHJ5IGlzXG4gKiB0aGUgVGlja2V0J3MgY3VycmVudCBzdGF0dXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRzdGF0dXNfaWQ6IHN0YXR1cyxcblx0XHRzdGFmZl9pZDogc3RhZmYsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7IC8vIElEIG9mIHRpY2tldCwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFRpY2tldFxuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICA9IHN0YWZmOyAgLy8gSUQgb2Ygc3RhZmYsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFN0YXR1cy5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi9EeW5hbWljUGFnZVwiO1xuXG4vKipcbiAqIEFQSVxuICpcbiAqIE9yaWdpbmFsbHkgdXNlZCB0byByZXRyaWV2ZSBhbmQgaGFuZGxlIGRhdGEgZnJvbVxuICogQVBJIGVuZHBvaW50cywgYnV0IG1vZGlmaWVkIHRvIGhvbGQgbG9jYWwgZGF0YVxuICogaW4gdGhlIGNvbnN0cnVjdG9yIHNldCBieSBXb3JkUHJlc3MncyBUd2lnXG4gKiAoZG9uZSB0byByZXVzZSBwcmV2aW91cyBjb21wb25lbnRzIHRvIHNhdmUgdGltZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGNhbGxzID0gW10sXG5cdFx0c3RhdHVzZXMgPSBbXSxcblx0XHR0aWNrZXRzID0gW10sXG5cdFx0dGlja2V0X3N0YXR1c2VzOiB0aWNrZXRTdGF0dXNlcyA9IFtdLFxuXHRcdGNvbW1lbnRzID0gW10sXG5cdFx0c3RhZmYgPSBbXSxcblx0XHRkZXZpY2VzID0gW10sXG5cdFx0cHJvZ3JhbXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IGV4cGVydGlzZVR5cGVzID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmY6IGV4cGVydGlzZVR5cGVTdGFmZiA9IFtdLFxuXHRcdGRlcGFydG1lbnRzID0gW11cblx0fSkge1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgID0gY2FsbHM7XG5cdFx0dGhpcy5zdGF0dXNlcyAgICAgICAgICAgPSBzdGF0dXNlcztcblx0XHR0aGlzLnRpY2tldHMgICAgICAgICAgICA9IHRpY2tldHM7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyAgICAgPSB0aWNrZXRTdGF0dXNlcztcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICA9IGNvbW1lbnRzO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgICAgID0gc3RhZmY7XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgPSBkZXZpY2VzO1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgID0gcHJvZ3JhbXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBleHBlcnRpc2VUeXBlcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmRlcGFydG1lbnRzICAgICAgICA9IGRlcGFydG1lbnRzO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0FQSS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4vU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhZmZQYWdlXG4gKlxuICogTWV0aG9kcyB1c2VmdWwgZm9yIHBvcHVsYXRpbmcgYW5kIGhhbmRsaW5nIGlucHV0IG9uIFN0YWZmIHBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFuYWdlcnNcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblxuXHRcdC8vIE5vIGVtcGxveWVlIGRldGFpbCBzaG93biBieSBkZWZhdWx0XG5cdFx0dGhpcy5lbXBsb3llZSA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWluIGFuZCBzaG93IGFsbCBzdGFmZiBpbiBsaXN0IHZpZXcgdGFibGUgb24gcGFnZVxuXHQgKi9cblx0c2hvd1N0YWZmKCkge1xuXHRcdC8vIEVuc3VyZSBubyBsb2NhbGx5LWNhY2hlZCBkYXRhIGlzIHByZXNlbnQgaW4gc3RhZmYgdGFibGUgYmVmb3JlIHBvcHVsYXRpbmdcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5XCIpLmVtcHR5KCk7XG5cblx0XHQvLyBDb2x1bW4gdG8gZmlsbCB0aWNrZXRzIG51bWJlciBpbnRvXG5cdFx0bGV0IHRpY2tldHNDb2x1bW5JbmRleCA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidHJcIikuZmlyc3QoKVxuXHRcdFx0XHQuY2hpbGRyZW4oXCJbZGF0YS1zbHVnPVxcXCJ0aWNrZXRzLmFzc2lnbmVkXFxcIl1cIikuaW5kZXgoKTtcblxuXHRcdC8vIFRlbXBvcmFyeSBhcnJheSB0byBob2xkIHN0YWZmIElEcyBzdGlsbCBhd2FpdGluZyB0aWNrZXQgY291bnRzXG5cdFx0bGV0IHN0YWZmRm9yVGlja2V0cyA9IFtdO1xuXG5cdFx0Ly8gUHV0IGVhY2ggc3RhZmYgbWVtYmVyIG9uIHRhYmxlXG5cdFx0bGV0IHN0YWZmID0gdGhpcy5zdGFmZk1hbmFnZXIuc3RhZmY7XG5cblx0XHQvLyBBZGQgZWFjaCBzdGFmZiBtZW1iZXIgdG8gYSBuZXcgcm93IGluIHRoZSB0YWJsZVxuXHRcdGZvciAobGV0IGVtcGxveWVlIG9mIHN0YWZmKSB7XG5cdFx0XHRsZXQgJHRhYmxlUm93ID0gdGhpcy5hcHBlbmRUYWJsZVJvdyhlbXBsb3llZSk7XG5cdFx0XHRzdGFmZkZvclRpY2tldHMucHVzaChlbXBsb3llZS5pZCk7XG5cdFx0fVxuXG5cdFx0Ly8gSGlkZSBzcGxhc2ggc2NyZWVuIGlmIHRoZXJlIGlzIGF0IGxlYXN0IDEgc3RhZmYgbWVtYmVyIGluIHZpZXdcblx0XHR0aGlzLnVwZGF0ZVNwbGFzaFNjcmVlbigpO1xuXG5cdFx0Ly8gR2V0IGFzc2lnbmVkIHRpY2tldCBjb3VudHMgYXN5bmNocm9ub3VzbHlcblx0XHQoYXN5bmMoaWRzKSA9PiB7XG5cdFx0XHQvLyBHZXQgbnVtYmVyIG9mIGFzc2lnbmVkIHRpY2tldHMgYW5kIGZpbGwgY29sdW1uXG5cdFx0XHRsZXQgJHJvd3MgPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5XCIpLmNoaWxkcmVuKFwidHJcIik7XG5cdFx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKGlkcyk7XG5cdFx0XHQkcm93cy5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0XHRlbC5jaGlsZHJlblt0aWNrZXRzQ29sdW1uSW5kZXhdLnRleHRDb250ZW50ID0gdGlja2V0c1tpKzFdID8gKHRpY2tldHNbaSsxXS5sZW5ndGggfHwgMCkgOiAwO1xuXHRcdFx0fSk7XG5cdFx0fSkoc3RhZmZGb3JUaWNrZXRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgc2hvd2luZyBkZXRhaWxzIGZvciBhIHNwZWNpZmljIGVtcGxveWVlLiBVc3VhbGx5IGNhbGxlZFxuXHQgKiB3aGVuIGNsaWNraW5nIG9uIGEgcm93IGluIHRoZSB0YWJsZSwgYnV0IGNhbiBhbHNvIGJlIGNhbGxlZFxuXHQgKiBmb3Igb3RoZXIgdGFibGUgcm93IGNoYW5nZSBpbnB1dHMsIHN1Y2ggYXMgaGFzaCBmcmFnbWVudCBvclxuXHQgKiBrZXlib2FyZCBpbnB1dC5cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgZW1wbG95ZWUgdG8gc2hvdyBkZXRhaWxcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQpIHtcblx0XHQvLyBHZXQgZW1wbG95ZWUgd2l0aCBJRFxuXHRcdHRoaXMuZW1wbG95ZWUgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXQoaWQpO1xuXHRcdC8vIENhdGNoIGludmFsaWQgSURzIGFuZCBzaG93IG1lc3NhZ2Vcblx0XHRpZiAoIXRoaXMuZW1wbG95ZWUpIHtcblx0XHRcdC8vIEhpZGUgc2luZ2xlIHZpZXcgaWYgbm8gZGV0YWlsIGlzIGFibGUgdG8gYmUgcHJlc2VudGVkXG5cdFx0XHQvLyBmb3IgcmVxdWVzdGVkIElELCBlbnN1cmluZyB0aGUgcGVyc29uIHVzaW5nIHRoZSBzeXN0ZW1cblx0XHRcdC8vIGlzIG5vdCBjb25mdXNlZCBieSBkYXRhIHNob3duIGZvciBwcmV2aW91c2x5IGFjY2Vzc2VkIHVzZXIuXG5cdFx0XHR0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0XHRcdER5bmFtaWNQYWdlLnNob3dOb3RpZmljYXRpb24oXCJObyBlbXBsb3llZSB3aXRoIElEIFwiICsgaWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFB1dCBlbXBsb3llZSBuYW1lIGluIHRpdGxlIGJhciBvZiBzaW5nbGUgdmlld1xuXHRcdHRoaXMudXBkYXRlU2luZ2xlVmlld05hdmJhcih0aGlzLmVtcGxveWVlLm5hbWUpO1xuXHRcdFxuXHRcdC8vIEZpbGwgaW4gY29udGVudCBmb3IgZWFjaCBmaWVsZCBhdmFpbGFibGUgaW4gc3RhZmYgbWVtYmVyXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKFwiW2RhdGEtc2x1Z11cIikuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdC8vIEVhY2ggc2x1ZyBpcyBhIGRpZmZlcmVudCBmaWVsZCB0byBiZSBmaWxsZWQsIHNvXG5cdFx0XHQvLyBnZXQgZWFjaCB2YWx1ZSBhbmQgc2V0IGVsZW1lbnQgY29udGVudCB0byB2YWx1ZVxuXHRcdFx0bGV0IHZhbHVlID0gT2JqZWN0LnJlc29sdmUoZWwuZGF0YXNldC5zbHVnLCB0aGlzLmVtcGxveWVlKTtcblx0XHRcdC8vIFNvbWUgdmFsdWVzIGFyZSBvcHRpb25hbCwgc28gZG9uJ3Qgc2hvdyB1bmRlZmluZWQgaWYgbm8gZGF0YVxuXHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgPyB2YWx1ZSA6IFwi4oCUXCI7XG5cdFx0fSk7XG5cblx0XHQvLyBTb21lIGNvbnRlbnQgcmVxdWlyZXMgc3BlY2lhbCBoYW5kbGluZyBmb3IgaW5wdXQgb2YgaW5mb3JtYXRpb25cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1jdXN0b21zbHVnXVwiKS5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0c3dpdGNoIChlbC5kYXRhc2V0LmN1c3RvbXNsdWcpIHtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIHRva2VucyBuZWVkIHRvIGJlIGhhbmRsZWQgc3BlY2lhbGx5XG5cdFx0XHRcdC8vIHNpbmNlIHZhbHVlIGlzIG5vdCBub3JtYWwgdGV4dFxuXHRcdFx0XHRjYXNlIFwiYWNjZXNzXCI6XG5cdFx0XHRcdFx0U3RhZmZQYWdlLnNob3dQZXJtaXNzaW9ucyhlbCwgdGhpcy5lbXBsb3llZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcImF2YXRhclwiOlxuXHRcdFx0XHRcdGVsLnNyYyA9IFwiaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMjc1eDI3NVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJ0aWNrZXRzLmFzc2lnbmVkXCI6XG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBcIuKAplwiO1xuXHRcdFx0XHRcdChhc3luYyhlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRoaXMuZW1wbG95ZWUuaWQpLmxlbmd0aDtcblx0XHRcdFx0XHR9KShlbCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8gSWYgaW4gZG91YnQsIHByZXN1bWUgZGF0YSBpcyBpbnZhbGlkIGFuZCBzaG93IHNhbWUgYXMgbm8gZGF0YVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gXCLigJRcIjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIER5bmFtaWNQYWdlIG5lZWRzIHRvIGhhbmRsZSB2aWV3IGNvZGVcblx0XHRzdXBlci5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblxuXHRcdC8vIFByb2JsZW0gdHlwZXMgdmlldyBoYW5kbGluZyB0byBiZSBvYnRhaW5lZCBieSBzcGVjaWZpYyBwcm9ibGVtIHR5cGUgSlNcblx0XHR3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UuY3VycmVudFNwZWNpYWxpc21zID0gdGhpcy5lbXBsb3llZS5fc3BlY2lhbGlzbXM7XG5cdFx0d2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlLmxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMoJCgnLnR5cGUtY29sdW1ucycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZGlzcGxheWluZyBwZXJtaXNzaW9ucyBmcm9tIGRhdGEgb2JqZWN0XG5cdCAqIHRvIGluZGl2aWR1YWwgdG9rZW5zIHNob3duIGluIGlucHV0LCBvbmUgZm9yIGVhY2ggb2Zcblx0ICogdGhlIHBlcm1pc3Npb24gbGV2ZWxzIGdyYW50ZWQgdG8gdGhlIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudCB0byBmaWxsIHdpdGggdGhlIHBlcm1pc3Npb24gZGV0YWlsc1xuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGdldCB0aGUgZ3JhbnRlZCBwZXJtaXNzaW9uIGluZm9ybWF0aW9uIGZyb21cblx0ICovXG5cdHN0YXRpYyBzaG93UGVybWlzc2lvbnMoZWwsIGVtcGxveWVlKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gXCJcIjtcblx0XHQvLyBEZWZpbmUgdGhlIGljb25zIHRvIGJlIGRpc3BsYXllZCBmb3IgZWFjaCBvZiB0aGUgcGVybWlzc2lvbiBsZXZlbHNcblx0XHRsZXQgaWNvbnMgPSB7cmVhZDogXCJleWVcIiwgb3BlcmF0b3I6IFwidXNlci1zZWNyZXRcIiwgYW5hbHlzdDogXCJsaW5lLWNoYXJ0XCIsIGFkbWluOiBcInNoaWVsZFwifTtcblxuXHRcdC8vIEVhY2ggcGVybWlzc2lvbiBoYXMgaXRzIG93biB0b2tlbiBmb3IgcmVwcmVzZW50aW5nIGl0c2VsZlxuXHRcdGZvciAobGV0IHBlcm1pc3Npb24gb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cblx0XHRcdC8vIERldGVybWluZSB3aGV0aGVyIGVtcGxveWVlIGhhcyBwZXJtaXNzaW9uIGFuZCBvbmx5IHNob3cgaWYgdHJ1ZVxuXHRcdFx0aWYgKGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSkge1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gaWNvblxuXHRcdFx0XHRsZXQgZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cdFx0XHRcdGVsSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1cIiArIGljb25zW3Blcm1pc3Npb25dKTtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIG5hbWVcblx0XHRcdFx0bGV0IGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRlbFRleHQudGV4dENvbnRlbnQgPSBwZXJtaXNzaW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGVybWlzc2lvbi5zbGljZSgxKTtcblxuXHRcdFx0XHQvLyBHcm91cCBpY29uIGFuZCBuYW1lIGludG8gc2luZ2xlIHRva2VuXG5cdFx0XHRcdGxldCBlbFBlcm1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0ZWxQZXJtaXNzaW9uLmFwcGVuZENoaWxkKGVsSWNvbik7XG5cdFx0XHRcdGVsUGVybWlzc2lvbi5hcHBlbmRDaGlsZChlbFRleHQpO1xuXG5cdFx0XHRcdC8vIERpc3BsYXkgcGVybWlzc2lvbiB0b2tlbiBpbiBlbGVtZW50XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGVsUGVybWlzc2lvbik7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHN0YWZmIG1lbWJlcnMgZ2l2ZW4gYSBzZWFyY2ggc3RyaW5nXG5cdCAqIHRvIGZpbHRlciB0aGUgdGFibGUgYnkgZW1wbG95ZWVzIG1hdGNoaW5nIHRoZSBzdHJpbmcuXG5cdCAqIFRoaXMgc2VhcmNoZXMgdGhyb3VnaCBtYW55IHN0YWZmIHRhYmxlIGZpZWxkczpcblx0ICogaWQsIG5hbWUsIGpvYiwgZGVwYXJ0bWVudCBhbmQgcGhvbmUgbnVtYmVyLlxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmcgdG8gZmlsdGVyIHRoZSBlbXBsb3llZXMgYnlcblx0ICovXG5cdGFzeW5jIHNlYXJjaChxdWVyeSkge1xuXHRcdC8vIE9ubHkgc2VhcmNoIGlmIHF1ZXJ5IGlzIHN1ZmZpY2llbnQgZm9yIHNlYXJjaFxuXHRcdC8vIFRoaXMgbWF0dGVycyBtb3JlIHdpdGggbGFyZ2VyIGRhdGFzZXRzIHdoZXJlIFwiYVwiIGNhbiBoYXZlXG5cdFx0Ly8gdGhvdXNhbmRzIG9mIHJlc3VsdHMuIEFsd2F5cyBlbnN1cmUgSUQgc2VhcmNoZXMgYXJlIHBlcmZvcm1lZFxuXHRcdC8vIHNpbmNlIElEIGlzIGluZGV4ZWQgYW5kIGNhbiBiZSBzZWFyY2hlZCB2ZXJ5IHF1aWNrbHkuXG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCA+PSAyIHx8IChxdWVyeS5sZW5ndGggPiAwICYmIHF1ZXJ5ID09IHBhcnNlSW50KHF1ZXJ5KSkpIHtcblxuXHRcdFx0Ly8gRGVmaW5lIHByb3BlcnRpZXMgb2YgZW1wbG95ZWVzIHRvIGJlIHNlYXJjaGVkIGZvciBxdWVyeSBtYXRjaFxuXHRcdFx0dmFyIHByb3BlcnRpZXMgPSBbXCJpZFwiLCBcIm5hbWVcIiwgXCJqb2JcIiwgXCJkZXBhcnRtZW50XCIsIFwicGhvbmVcIl07XG5cdFx0XHQvLyBQZXJmb3JtIHRoZSBzZWFyY2ggdXNpbmcgc3VwZXIgc2VhcmNoIGFuZCBhc3NpZ24gcmVzdWx0c1xuXHRcdFx0c3VwZXIuc2VhcmNoKHF1ZXJ5LCB0aGlzLnN0YWZmTWFuYWdlci5zZWFyY2gocXVlcnksIHByb3BlcnRpZXMpLCBvYmogPT4gT2JqZWN0LmFzc2lnbih7fSwgb2JqKSwgcHJvcGVydGllcyk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRGVmYXVsdCB0byBzaG93aW5nIGFsbCBzdGFmZiBpZiBxdWVyeSBpcyBtaXNzaW5nIG9yIGluc3VmZmljaWVudFxuXHRcdFx0Ly8gVGhpcyBpcyBkaXN0aW5jdCB0byB0aGUgY2FzZSB3aGVyZSB0aGVyZSBhcmUgbm8gcmVzdWx0cyB0b1xuXHRcdFx0Ly8gYSBzdWNjZXNzZnVsIHF1ZXJ5IOKAlCB0aGlzIGlzIGhhbmRsZWQgaW4gc3VwZXIncyBzZWFyY2ggbWV0aG9kXG5cdFx0XHQvLyBhbmQgc2hvd3MgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBpbnN0ZWFkIG9mIGFsbCB0aGUgc3RhZmYuXG5cdFx0XHR0aGlzLnNob3dTdGFmZigpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZQYWdlIGZyb20gXCIuLi9zdGFmZi9TdGFmZlBhZ2VcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcblxuLyoqXG4gKiBUaWNrZXRQYWdlXG4gKlxuICogTWFuaXB1bGF0ZXMgdGhlIHRpY2tldHMgcGFnZSAvdyBKUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB0aGUgVGlja2V0TWFuYWdlci4gTWV0aG9kcyBtb3N0bHkgZ2V0IGNhbGxlZCBmcm9tIHRpY2tldHMuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0UGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vIE1hbmFnZXJzXG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyICAgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXHRcdHRoaXMuc29mdHdhcmVNYW5hZ2VyID0gbmV3IFNvZnR3YXJlTWFuYWdlcigpO1xuXHRcdHRoaXMuaGFyZHdhcmVNYW5hZ2VyID0gbmV3IEhhcmR3YXJlTWFuYWdlcigpO1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICAgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jdXJyZW50VGlja2V0ID0gbnVsbDsgLy8gVGlja2V0IGJlaW5nIHNob3duIG9uIHRoZSByaWdodCBwYW5lbFxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgdGlja2V0cyB3aGVyZSB0aGVpciBzdGF0dXMgaXMgaW4gdGhlIGFycmF5IG9mXG5cdCAqIHN0YXR1cyBzbHVncy4gUmVwbGFjZXMgdGhlIGN1cnJlbnQgbGlzdC12aWV3IHdpdGggdGhlbS5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqL1xuXHRzaG93RmlsdGVyZWRUaWNrZXRzKHN0YXR1c1NsdWdzKSB7XG5cdFx0bGV0IHN0YXR1cywgZmlsdGVyZWRUaWNrZXRzLCBmaWx0ZXJlZFRpY2tldCwgaSwgaixcblx0XHRcdHNwbGl0U3RhdHVzU2x1Z3MgPSBzdGF0dXNTbHVncy5zcGxpdCgnLCcpO1xuXG5cdFx0aWYgKHN0YXR1c1NsdWdzLmluZGV4T2YoJ2Fzc2lnbmVkX3RvJykgPiAtMSkge1xuXHRcdFx0ZmlsdGVyZWRUaWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldE15VGlja2V0cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmaWx0ZXJlZFRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c1dpdGhTbHVnSW4oc3BsaXRTdGF0dXNTbHVncyk7XG5cdFx0fVxuXG5cdFx0bGV0ICRyb3dzID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5IHRyJyk7XG5cblx0XHRpZiAoJHJvd3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgZmlsdGVyZWRUaWNrZXRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGZpbHRlcmVkVGlja2V0ID0gZmlsdGVyZWRUaWNrZXRzW2pdO1xuXHRcdFx0XHRzdGF0dXMgICAgICAgICA9IGZpbHRlcmVkVGlja2V0LnN0YXR1cztcblxuXHRcdFx0XHR0aGlzLmFwcGVuZFRhYmxlUm93KHtcblx0XHRcdFx0XHRpZDogZmlsdGVyZWRUaWNrZXQuaWQsXG5cdFx0XHRcdFx0dGl0bGU6IGZpbHRlcmVkVGlja2V0LnRpdGxlLFxuXHRcdFx0XHRcdHN0YXR1c19uYW1lOiAnPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLScgKyBzdGF0dXMuc2x1Zy5zcGxpdCgnXycpWzBdICsgJ1wiIGRhdGEtc2x1Zz1cIicgKyBzdGF0dXMuc2x1ZyArICdcIj4nICsgc3RhdHVzLm5hbWUgKyAnPC9zcGFuPicsXG5cdFx0XHRcdFx0Y3JlYXRlZF9hdDogZmlsdGVyZWRUaWNrZXQuY3JlYXRlZF9hdCxcblx0XHRcdFx0XHR1cGRhdGVkX2F0OiBmaWx0ZXJlZFRpY2tldC51cGRhdGVkX2F0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCRyb3dzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc3BsaXRTdGF0dXNTbHVncy5pbmRleE9mKCQodGhpcykuZmluZCgndGQgc3Bhbi5maWx0ZXInKS5kYXRhKCdzbHVnJykpID09PSAtMSkge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdyb3ctaGlkZGVuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdyb3ctaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwZGF0ZVNwbGFzaFNjcmVlbigpO1xuXG5cdFx0dGhpcy5jdXJyZW50VGlja2V0ID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcmVzZW50cyBhIFRpY2tldCBpbiB0aGUgcmlnaHQgcGFuZWwgKHRpY2tldCB2aWV3KS5cblx0ICogXG5cdCAqIFBvcHVsYXRlcyBlbGVtZW50cyBvbiB0aGUgdGlja2V0IHZpZXcsIGluY2x1ZGluZyBleHRlcm5hbFxuXHQgKiBpdGVtcyBzdWNoIGFzOlxuXHQgKiAgICAgLSBEZXZpY2VzXG5cdCAqICAgICAtIFByb2dyYW1zXG5cdCAqICAgICAtIENhbGxzXG5cdCAqICAgICAtIENvbW1lbnRzXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIFRpY2tldC5pZFxuXHQgKi9cblx0c2hvd1RpY2tldFZpZXcodGlja2V0SWQpIHtcblx0XHRpZiAodGlja2V0SWQgIT09IG51bGwpIHsgLy8gbnVsbCB3aGVuIG5vIGN1cnJlbnRUaWNrZXQgaGFzIGJlZW4gb3BlbmVkIHlldCwgYnV0IHVzZXIgaXMgY2hhbmdpbmcgdGhlIGNhdGVnb3J5XG5cdFx0XHRsZXQgdGlja2V0ICAgICAgID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldCh0aWNrZXRJZCksXG5cdFx0XHRcdHRpY2tldFN0YXR1cyA9IHRpY2tldC5zdGF0dXM7XG5cblx0XHRcdHRoaXMuY3VycmVudFRpY2tldCA9IHRpY2tldDtcblxuXHRcdFx0dGhpcy51cGRhdGVTaW5nbGVWaWV3TmF2YmFyKHRpY2tldC50aXRsZSArICc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHRpY2tldFN0YXR1cy5zbHVnLnNwbGl0KCdfJylbMF0gKyAnXCI+JyArIHRpY2tldFN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nKTtcblxuXHRcdFx0JCgnI3RpY2tldC12aWV3ICN0aWNrZXQtb3ZlcnZpZXcnKS50ZXh0KCcjJyArIHRpY2tldC5pZCArICcgfCAnICsgdGlja2V0LmNyZWF0ZWRfYXQgKyAnIHwgJyArIHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkubmFtZSk7XG5cdFx0XHQkKCcjdGlja2V0LXZpZXcgI3RpY2tldC1kZXNjcmlwdGlvbiBwJykudGV4dCh0aWNrZXQuZGVzY3JpcHRpb24pO1xuXG5cdFx0XHR2YXIgJHRpY2tldENvbW1lbnRzICAgICAgICAgICA9ICQoJyN0aWNrZXQtY29tbWVudHMnKSxcblx0XHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmUgICA9ICQoJyN0aWNrZXQtdmlldyAjaGFyZHdhcmUtc29mdHdhcmUtdGFibGUnKSxcblx0XHRcdFx0JHRpY2tldE5vSGFyZHdhcmVTb2Z0d2FyZSA9ICQoJyN0aWNrZXQtdmlldyAjbm8taGFyZHdhcmUtc29mdHdhcmUnKSxcblx0XHRcdFx0JHRpY2tldENhbGxIaXN0b3J5Qm9keSAgICA9ICQoJyN0aWNrZXQtdmlldyAjY2FsbC1oaXN0b3J5LXRhYmxlIHRib2R5JykuZW1wdHkoKTtcblxuXHRcdFx0JHRpY2tldENvbW1lbnRzLnRleHQoJ0xvYWRpbmcgY29tbWVudHPigKYnKS5zaG93KCk7XG5cdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZS5oaWRlKCk7XG5cdFx0XHQkdGlja2V0Tm9IYXJkd2FyZVNvZnR3YXJlLmhpZGUoKTtcblxuXHRcdFx0Ly8gU2hvdyBiYXNpYyBpbmZvIHdoaWxzdCBvdGhlciBkYXRhIGlzIGJlaW5nIGxvYWRlZCBhc3luY2hyb25vdXNseVxuXHRcdFx0dGhpcy5zaG93VGFibGVSb3dEZXRhaWxzKHRpY2tldC5pZCk7XG5cblx0XHRcdC8vIEFmZmVjdGVkIGl0ZW1zIChkZXZpY2VzIGFuZCBwcm9ncmFtcylcblx0XHRcdChhc3luYygpID0+IHtcblx0XHRcdFx0bGV0IGRldmljZXMgICAgICAgPSB0aWNrZXQuZGV2aWNlcyxcblx0XHRcdFx0XHRwcm9ncmFtcyAgICAgID0gdGlja2V0LnByb2dyYW1zLFxuXHRcdFx0XHRcdGFmZmVjdGVkSXRlbXMgPSBkZXZpY2VzLmNvbmNhdChwcm9ncmFtcyk7XG5cblx0XHRcdFx0aWYgKGFmZmVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7IC8vIGhpZGUgdGhlIEhXL1NXIHRhYmxlIGlmIHRoZXJlJ3Mgbm8gYWZmZWN0ZWQgaXRlbXNcblx0XHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZS5oaWRlKCk7XG5cdFx0XHRcdFx0JHRpY2tldE5vSGFyZHdhcmVTb2Z0d2FyZS5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyICR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keSA9ICR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlLmZpbmQoJ3Rib2R5Jyk7XG5cblx0XHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZUJvZHkuZW1wdHkoKTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWZmZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGFmZmVjdGVkSXRlbSA9IGFmZmVjdGVkSXRlbXNbaV0sXG5cdFx0XHRcdFx0XHRcdHR5cGU7XG5cblx0XHRcdFx0XHRcdC8vIGdldCB0eXBlIG9mIGFmZmVjdGVkSXRlbSB0byBkaXNwbGF5IGluIHRpY2tldC12aWV3IHRhYmxlXG5cdFx0XHRcdFx0XHRpZiAoYWZmZWN0ZWRJdGVtLmhhc093blByb3BlcnR5KCdzZXJpYWxfbm8nKSkge1xuXHRcdFx0XHRcdFx0XHR0eXBlID0gJ0hhcmR3YXJlJztcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYWZmZWN0ZWRJdGVtLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdFx0XHRcdFx0dHlwZSA9ICdPUyc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0eXBlID0gJ1NvZnR3YXJlJztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmVCb2R5LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0Jzx0ciBkYXRhLXJvd2lkPVwiJyArIGFmZmVjdGVkSXRlbS5pZCArICdcIiBkYXRhLXJvd3R5cGU9XCInICsgKGFmZmVjdGVkSXRlbS5oYXNPd25Qcm9wZXJ0eSgnc2VyaWFsX25vJykgPyAnaGFyZHdhcmUnIDogJ3NvZnR3YXJlJykgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cInRydW5jYXRlXCI+JyArIChhZmZlY3RlZEl0ZW0udHlwZSB8fCBhZmZlY3RlZEl0ZW0ubmFtZSkgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgKGFmZmVjdGVkSXRlbS5zZXJpYWxfbm8gfHwgJ+KAlCcpICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cInRydW5jYXRlXCI+JyArIHR5cGUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPC90cj4nXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZS5zaG93KCk7XG5cdFx0XHRcdFx0JHRpY2tldE5vSGFyZHdhcmVTb2Z0d2FyZS5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdC8vIENhbGxzXG5cdFx0XHQoYXN5bmMoKSA9PiB7XG5cdFx0XHRcdGxldCBjYWxscyA9IHRpY2tldC5jYWxscztcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGV0IGNhbGwgICA9IGNhbGxzW2ldLFxuXHRcdFx0XHRcdFx0Y2FsbGVyID0gY2FsbC5jYWxsZXI7XG5cblx0XHRcdFx0XHQkdGlja2V0Q2FsbEhpc3RvcnlCb2R5LmFwcGVuZChcblx0XHRcdFx0XHRcdCc8dHIgZGF0YS1yb3dpZD1cIicgKyBjYWxsLmlkICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgKyBjYWxsLmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIGNhbGxlci5uYW1lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIGNhbGwudGltZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPC90cj4nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblxuXHRcdFx0Ly8gQ29tbWVudHNcblx0XHRcdChhc3luYygpID0+IHtcblx0XHRcdFx0bGV0IGNvbW1lbnRzID0gdGlja2V0LmNvbW1lbnRzLFxuXHRcdFx0XHRcdG1lICAgICAgID0gdGhpcy5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIodHJ1ZSk7XG5cblx0XHRcdFx0aWYgKGNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdCR0aWNrZXRDb21tZW50cy50ZXh0KCdObyBjb21tZW50cyBoYXZlIGJlZW4gbGVmdCB5ZXQhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHRpY2tldENvbW1lbnRzLnRleHQoJ0xvYWRpbmcgY29tbWVudHPigKYnKTtcblxuXHRcdFx0XHRcdGxldCB0aWNrZXRTdGF0dXNlcyA9IHRpY2tldFBhZ2UudGlja2V0TWFuYWdlci5nZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0LmlkKSxcblx0XHRcdFx0XHRcdHRpY2tldEZlZWQgICAgID0gY29tbWVudHMuY29uY2F0KHRpY2tldFN0YXR1c2VzKSwgLy8gaW5jbHVkZXMgY29tbWVudHMgYW5kIHRpY2tldCBzdGF0dXMgaGlzdG9yeSBpbiBvbmVcblx0XHRcdFx0XHRcdCR0aWNrZXRGZWVkICAgID0gJCgnPGRpdj4nKTtcblxuXHRcdFx0XHRcdC8vIFNvcnQgdGhlIGZlZWQgYnkgZGF0ZVxuXHRcdFx0XHRcdHRpY2tldEZlZWQuc29ydChmdW5jdGlvbihhLCBiKXtcblx0XHRcdFx0XHRcdHJldHVybiBEYXRlLnBhcnNlKGEuY3JlYXRlZF9hdF9yZWFsKSAtIERhdGUucGFyc2UoYi5jcmVhdGVkX2F0X3JlYWwpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aWNrZXRGZWVkKSB7XG5cdFx0XHRcdFx0XHRsZXQgcG9zdCA9IHRpY2tldEZlZWRbaV07XG5cblx0XHRcdFx0XHRcdGlmIChwb3N0IGluc3RhbmNlb2YgQ29tbWVudCkgeyAvLyBDb21tZW50XG5cdFx0XHRcdFx0XHRcdGlmIChwb3N0LmlkICE9PSB0aWNrZXQuX3NvbHV0aW9uKSB7IC8vIHRoaXMgY29tbWVudCBpcyBub3QgYSBzb2x1dGlvblxuXHRcdFx0XHRcdFx0XHRcdCR0aWNrZXRGZWVkLmFwcGVuZCh0aGlzLmdldENvbW1lbnQocG9zdCwgbWUpKS5maW5kKCcubWVkaWEtc2lkZSBpJyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JHRpY2tldEZlZWQucHJlcGVuZCh0aGlzLmdldENvbW1lbnQocG9zdCwgbWUsIHRydWUpKS5maW5kKCcubWVkaWEtc2lkZSBpJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7IC8vIFRpY2tldCBTdGF0dXMgQ2hhbmdlIChUaWNrZXRTdGF0dXMvU3RhdHVzSGlzdG9yeSlcblx0XHRcdFx0XHRcdFx0bGV0IHN0YXR1cyA9IHBvc3Quc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdHN0YWZmICA9IHBvc3Quc3RhZmY7XG5cblx0XHRcdFx0XHRcdFx0JHRpY2tldEZlZWQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCc8bGkgY2xhc3M9XCJ0aWNrZXQtZXZlbnRcIj4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLXRpY2tldFwiPjwvaT4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCcgU3RhdHVzIENoYW5nZWQgYnkgJyArIHN0YWZmLm5hbWUgKyAnOiAnICtcblx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInRpY2tldC1ldmVudC1kZXRhaWxzXCI+JyArIChzdGF0dXMubmFtZS5zcGxpdCgnICcpWzBdKSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJ0aWNrZXQtZXZlbnQtZGF0ZVwiPicgKyBwb3N0LmNyZWF0ZWRfYXQgKyAnPC9zcGFuPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8L2xpPidcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGYWRlIG91dCBsb2FkaW5nIHRleHQsIGluc2VydCB0aWNrZXRGZWVkXG5cdFx0XHRcdFx0JHRpY2tldENvbW1lbnRzLmZhZGVPdXQoMjUwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuaHRtbCgkdGlja2V0RmVlZC51bndyYXAoKSk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnNob3coKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBmb3IgYSBjb21tZW50LCB3aGljaCBtYXkgbG9vayBkaWZmZXJlbnRcblx0ICogaWYgaXQncyBhIHNvbHV0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvbW1lbnR9IGNvbW1lbnRcblx0ICogQHBhcmFtIHtFbXBsb3llZX0gbWUgaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBjb21tZW50XG5cdCAqL1xuXHRnZXRDb21tZW50KHBvc3QsIG1lLCBpc1NvbHV0aW9uID0gZmFsc2UpIHtcblx0XHRsZXQgYXV0aG9yICA9IHBvc3QuYXV0aG9yLFxuXHRcdFx0Y29tbWVudCA9IFxuXHRcdFx0JzxsaSBjbGFzcz1cIm1lZGlhICcgKyAoaXNTb2x1dGlvbiA/ICdzb2x1dGlvbicgOiAnJykgKyAnXCIgZGF0YS1jb21tZW50LWlkPVwiJyArIHBvc3QuaWQgKyAnXCI+JyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWVkaWEtc2lkZVwiPicgK1xuXHRcdFx0XHRcdCc8YSBocmVmPVwiJyArIChhdXRob3IuaWQgPT09IG1lLmlkID8gJy9zZXR0aW5ncycgOiAnL3N0YWZmIycgKyBhdXRob3IuaWQpICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0JzxpbWcgc3JjPVwiaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMjc1eDI3NVwiIGFsdD1cIicgKyBhdXRob3IubmFtZSArICdcXCdzIFByb2ZpbGUgUGljdHVyZVwiPicgK1xuXHRcdFx0XHRcdCc8L2E+JyArXG5cdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+JyArXG5cdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+JyArXG5cdFx0XHRcdFx0JzxoNSBjbGFzcz1cIm10LTAgbWItMVwiPicgK1xuXHRcdFx0XHRcdFx0JzxhIGhyZWY9XCIvc3RhZmYjJyArIGF1dGhvci5pZCArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0YXV0aG9yLm5hbWUgK1xuXHRcdFx0XHRcdFx0JzwvYT4nICtcblx0XHRcdFx0XHRcdChpc1NvbHV0aW9uID8gJyA8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItcmVzb2x2ZWRcIj5Tb2x1dGlvbjwvc3Bhbj4nIDogJycpICtcblx0XHRcdFx0XHRcdChwb3N0Ll9jYWxsICE9PSBudWxsID8gJyA8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItbmV3IG5vdGUtYWJvdXQtY2FsbFwiIGRhdGEtY2FsbC1pZD1cIicgKyBwb3N0Ll9jYWxsICsgJ1wiPk5vdGUgYWJvdXQgYSBjYWxsPC9zcGFuPicgOiAnJykgK1xuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwidGlja2V0LWNvbW1lbnQtZGF0ZVwiPicgKyBwb3N0LmNyZWF0ZWRfYXQgKyAnPC9zcGFuPicgK1xuXHRcdFx0XHRcdCc8L2g1PicgK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiYnJlYWtlclwiPjwvZGl2PicgK1xuXHRcdFx0XHRcdHBvc3QuY29udGVudCArXG5cdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdCc8L2xpPic7XG5cblx0XHRyZXR1cm4gY29tbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGVuIGNsaWNraW5nIG9uIGEgVGlja2V0IGVudHJ5IGluIENhbGwgRGV0YWlscyxcblx0ICogSGlkZSB0aGUgbW9kYWwgYW5kIHNob3cgdGhhdCB0aWNrZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIFRpY2tldC5pZFxuXHQgKi9cblx0c2hvd0NhbGxUaWNrZXQodGlja2V0SWQpIHtcblx0XHQkKCcjdmlldy1jYWxsLWhpc3RvcnktbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuXG5cdFx0dmFyIHRpY2tldCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXQodGlja2V0SWQpO1xuXG5cdFx0dGhpcy5yZWZyZXNoUGFnZSh0aWNrZXQuc3RhdHVzLnNsdWcsIHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZSB0aGUgVmlldyBDYWxsIG1vZGFsIGJ5IGxvYWRpbmcgaW5cblx0ICogdGhlIGNhbGwgZGV0YWlscyBhbmQgaXRzIHRpY2tldHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBDYWxsLmlkXG5cdCAqL1xuXHRzaG93Q2FsbFRpY2tldHNNb2RhbChjYWxsSWQpIHtcblx0XHR2YXIgY2FsbCAgICAgICAgICAgICA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRDYWxsKGNhbGxJZCksXG5cdFx0XHQkY2FsbEhpc3RvcnkgICAgID0gJCgnI3ZpZXctY2FsbC1oaXN0b3J5LW1vZGFsJyksXG5cdFx0XHQkY2FsbFRpY2tldFRhYmxlID0gJGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLXRpY2tldHMtdGFibGUgdGJvZHknKTtcblxuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1pZCcpLnRleHQoY2FsbC5pZCk7XG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLWNhbGxlcicpLnRleHQoY2FsbC5jYWxsZXIubmFtZSk7XG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLW9wZXJhdG9yJykudGV4dChjYWxsLm9wZXJhdG9yLm5hbWUpO1xuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1kYXRlJykudGV4dChjYWxsLnRpbWUpO1xuXG5cdFx0Ly8gU2hvdyBtb2RhbCB3aXRoIGNhbGwgZGF0YVxuXHRcdCRjYWxsVGlja2V0VGFibGUuZW1wdHkoKTtcblx0XHQkY2FsbEhpc3RvcnkubW9kYWwoJ3Nob3cnKTtcblxuXHRcdC8vIExvYWQgdGlja2V0cyByZWxhdGVkIHRvIGNhbGxcblx0XHRjYWxsLnRpY2tldHMuZm9yRWFjaChhc3luYyB0aWNrZXQgPT4ge1xuXHRcdFx0Ly8gQWRkIGVhY2ggcmVsYXRlZCB0aWNrZXQgdG8gY2FsbCBtb2RhbFxuXHRcdFx0JGNhbGxUaWNrZXRUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdCc8dHIgZGF0YS1yb3dpZD1cIicgKyB0aWNrZXQuaWQgKyAnXCIgJyArICh0aWNrZXQuaWQgPT09IHRoaXMuY3VycmVudFRpY2tldC5pZCA/ICdjbGFzcz1cImhpZ2hsaWdodFwiJyA6ICcnKSArICc+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgdGlja2V0LmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgdGlja2V0LnRpdGxlICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItJyArIHRpY2tldC5zdGF0dXMuc2x1Zy5zcGxpdCgnXycpWzBdICsgJ1wiPicgKyB0aWNrZXQuc3RhdHVzLm5hbWUgKyAnPC9zcGFuPicgK1xuXHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIHRpY2tldC5jcmVhdGVkX2F0ICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjbm8tY2FsbC1ub3RlcycpLmhpZGUoKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtbm90ZXMnKS5oaWRlKCk7XG5cblx0XHRsZXQgY2FsbENvbW1lbnQgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0Q2FsbE5vdGVzQnlDYWxsSWQoY2FsbC5pZCk7XG5cblx0XHRpZiAoY2FsbENvbW1lbnQgIT09IG51bGwpIHtcblx0XHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1ub3RlcycpLnRleHQoY2FsbENvbW1lbnQuY29udGVudCk7XG5cdFx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtbm90ZXMnKS5zaG93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjbm8tY2FsbC1ub3RlcycpLnNob3coKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHRoZSBhY3RpdmUgc3RhdHVzIGluIHRoZSBzaWRlIG5hdiBiYXIuXG5cdCAqIFJlbG9hZCB0aGUgdGlja2V0cyB3aXRoIHRoZSBuZXcgc3RhdHVzLCBhbmQgc2hvdyB0aGVcblx0ICogdGlja2V0IHZpZXcgYWdhaW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBTdGF0dXMuc2x1Z1xuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIChudWxsYWJsZSkgcmVwcmVzZW50aW5nIFRpY2tldC5pZFxuXHQgKi9cblx0YXN5bmMgcmVmcmVzaFBhZ2Uoc3RhdHVzU2x1ZywgdGlja2V0SWQgPSBudWxsKSB7XG5cdFx0JCgnLnNpZGUtbmF2LWJhci1uZXN0ZWQgdWwgbGkuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJy5zaWRlLW5hdi1iYXItbmVzdGVkIHVsIGxpW2RhdGEtc2x1Zz1cIicgKyBzdGF0dXNTbHVnICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHRoaXMuc2hvd0ZpbHRlcmVkVGlja2V0cyhzdGF0dXNTbHVnKTtcblx0XHR0aGlzLnNob3dUaWNrZXRWaWV3KHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGFuIGVtcGxveWVlcyBkZXRhaWxzIGludG8gYSBTdGFmZiBJbmZvcm1hdGlvblxuXHQgKiBET00gZWxlbWVudC4gTG9hZCBpbiByZWxldmFudCBlbXBsb3llZSBwZXJtaXNzaW9ucyB0b28uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RE9NIEVsZW1lbnR9ICRzdGFmZkluZm9ybWF0aW9uXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZW1wbG95ZWVJZCByZXByZXNlbnRpbmcgRW1wbG95ZWUuaWQgKGVtcGxveWVlIHVzZWQgZm9yIHZpZXdpbmcpXG5cdCAqL1xuXHRhc3luYyBzaG93U3RhZmZJbmZvcm1hdGlvbigkc3RhZmZJbmZvcm1hdGlvbiwgZW1wbG95ZWVJZCkge1xuXHRcdGxldCBlbXBsb3llZSAgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXQoZW1wbG95ZWVJZCk7XG5cblx0XHQkc3RhZmZJbmZvcm1hdGlvbi5odG1sKFxuXHRcdFx0JzxwPklEIE51bWJlcjogPHN0cm9uZz4nICsgZW1wbG95ZWUuaWQgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPk5hbWU6IDxzdHJvbmc+JyArIGVtcGxveWVlLm5hbWUgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPkpvYjogPHN0cm9uZz4nICsgZW1wbG95ZWUuam9iICsgJzwvc3Ryb25nPjwvcD4nICtcblx0XHRcdCc8cD5EZXBhcnRtZW50OiA8c3Ryb25nPicgKyBlbXBsb3llZS5kZXBhcnRtZW50ICsgJzwvc3Ryb25nPjwvcD4nICtcblx0XHRcdCc8cD5QaG9uZTogPHN0cm9uZz4nICsgZW1wbG95ZWUucGhvbmUgKyAnPC9zdHJvbmc+PC9wPicgK1xuXHRcdFx0JzxwPjxzdHJvbmc+PC9zdHJvbmc+PC9wPidcblx0XHQpO1xuXG5cdFx0U3RhZmZQYWdlLnNob3dQZXJtaXNzaW9ucygkc3RhZmZJbmZvcm1hdGlvbi5maW5kKCdwOmxhc3QtY2hpbGQgc3Ryb25nJykuZ2V0KDApLCBlbXBsb3llZSk7XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIGlmIGEgVGlja2V0IGlzIGFzc2lnbmVkIHRvOlxuXHQgKiAgICAgLSAoc2VsZikgICAgICAgVGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKiAgICAgLSAob3BlcmF0b3IpICAgQW5vdGhlciBoZWxwZGVzayBvcGVyYXRvclxuXHQgKiAgICAgLSAoc3BlY2lhbGlzdCkgU3BlY2lhbGlzdCBvZiBFeHBlcnRpc2VUeXBlIChmb3VuZCB0aHJvdWdoIEV4cGVydGlzZVR5cGVTdGFmZiBvbiBUaWNrZXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXQgXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHRpY2tldCdzIGFzc2lnbmVkIHRvIHR5cGVcblx0ICovXG5cdGdldEFzc2lnbmVkVG9UeXBlKHRpY2tldCkge1xuXHRcdGlmICh0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpLmlkID09PSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKSB7IC8vIGlmIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHNlbGZcblx0XHRcdHJldHVybiAnc2VsZic7XG5cdFx0fSBlbHNlIGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSB7IC8vIElmIGFzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHNwZWNpYWxpc3Rcblx0XHRcdHJldHVybiAnb3BlcmF0b3InO1xuXHRcdH1cblxuXHRcdHJldHVybiAnc3BlY2lhbGlzdCc7XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHRoZSBiZXN0IHNwZWNpYWxpc3QgZm9yIHRoZSBFeHBlcnRpc2VUeXBlIGJhc2VkIG9uXG5cdCAqIGhvdyBidXN5IHRoZXkgYXJlIGNvbXBhcmVkIHRvIG90aGVyIHNwZWNpYWxpc3RzLlxuXHQgKlxuXHQgKiBVcGRhdGVkIHdoZW4gYSB1c2VyIGNsaWNrcyB0aHJvdWdoIHByb2JsZW0gdHlwZXMsXG5cdCAqIHVwZGF0ZXMgaW4gdGhlIHJlbGV2YW50IHNob3djYXNlIGZpZWxkc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCBFeHBlcnRpc2VUeXBlLmlkIFxuXHQgKiBAcGFyYW0ge0RPTSBFbGVtZW50fSAkYXNzaWduZWRUb09wdGlvbnMgXCJBc3NpZ24gdG8geFwiIHJhZGlvIGZpZWxkcyBpbiBhY2NvcmRpb24gY2FyZHNcblx0ICogQHBhcmFtIHtFbXBsb3llZX0gYmVzdFNwZWNpYWxpc3QgKG51bGxhYmxlKSBNYW51YWxseSBhc3NpZ24gZW1wbG95ZWUgaWYgdGhleSBoYXZlIHRoYXQgc3BlY2lhbGlzbVxuXHQgKiBAcmV0dXJuIHtFeHBlcnRpc2VUeXBlU3RhZmZ9IEV4cGVydGlzZVR5cGVTdGFmZiByZWNvcmQsIGNvbnRhaW5pbmcgbGluayB0byBFeHBlcnRpc2VUeXBlIGFuZCBTdGFmZiB0YWJsZXNcblx0ICovXG5cdHNldFNwZWNpYWxpc3QoZXhwZXJ0aXNlVHlwZUlkLCAkYXNzaWduZWRUb09wdGlvbnMsIGJlc3RTcGVjaWFsaXN0ID0gbnVsbCkge1xuXHRcdGlmIChiZXN0U3BlY2lhbGlzdCA9PT0gbnVsbCB8fCAhdGhpcy5zdGFmZk1hbmFnZXIuaGFzU3BlY2lhbGlzbShiZXN0U3BlY2lhbGlzdCwgZXhwZXJ0aXNlVHlwZUlkKSkge1xuXHRcdFx0dmFyIGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYgPSBzdGFmZlByb2JsZW1UeXBlUGFnZS5nZXRCZXN0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKTtcblxuXHRcdFx0YmVzdFNwZWNpYWxpc3QgPSBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmICE9PSBudWxsID8gYmVzdEV4cGVydGlzZVR5cGVTdGFmZi5zdGFmZiA6IG51bGw7IC8vIG51bGwgaWYgbm8gc3BlY2lhbGlzdHMgZm91bmQgaW4gcGFyZW50c1xuXHRcdH1cblxuXHRcdHZhciAkc3BlY2lhbGlzdElkICAgICAgID0gJGFzc2lnbmVkVG9PcHRpb25zLmZpbmQoJ2lucHV0W25hbWUqPVwic3BlY2lhbGlzdFwiXScpLFxuXHRcdFx0JHNwZWNpYWxpc3RTaG93Y2FzZSA9ICRhc3NpZ25lZFRvT3B0aW9ucy5maW5kKCdpbnB1dFtuYW1lKj1cInNwZWNpYWxpc3Rfc2hvd2Nhc2VcIl0nKTtcblxuXHRcdGlmIChiZXN0U3BlY2lhbGlzdCAhPT0gbnVsbCkge1xuXHRcdFx0JHNwZWNpYWxpc3RJZC52YWwoYmVzdFNwZWNpYWxpc3QuaWQpO1xuXHRcdFx0JHNwZWNpYWxpc3RTaG93Y2FzZS52YWwoYmVzdFNwZWNpYWxpc3QubmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzcGVjaWFsaXN0SWQudmFsKCcnKTtcblx0XHRcdCRzcGVjaWFsaXN0U2hvd2Nhc2UudmFsKCdObyBTcGVjaWFsaXN0IGZvciB0aGUgUHJvYmxlbSBUeXBlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlc3RFeHBlcnRpc2VUeXBlU3RhZmY7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHRocm91Z2ggYWxsIHRpY2tldHMgYmFzZWQgb25cblx0ICogICAgIC0gaWRcblx0ICogICAgIC0gdGl0bGVcblx0ICpcblx0ICogU2hvdyB0aGUgcmVzdWx0cyBpbiB0aGUgbGlzdC12aWV3XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBRdWVyeSBwb3RlbnRpYWxseSBjb250YWluZWQgaW4gaWQvdGl0bGVcblx0ICovXG5cdHNlYXJjaChxdWVyeSkge1xuXHRcdGlmIChxdWVyeS5sZW5ndGggPj0gMiB8fCAocXVlcnkubGVuZ3RoID4gMCAmJiBxdWVyeSA9PSBwYXJzZUludChxdWVyeSkpKSB7XG5cdFx0XHR2YXIgc2VhcmNoS2V5cyA9IFsnaWQnLCAndGl0bGUnXSxcblx0XHRcdFx0dGlja2V0cyAgICA9IHRoaXMudGlja2V0TWFuYWdlci5zZWFyY2gocXVlcnksIHNlYXJjaEtleXMpO1xuXG5cdFx0XHRzdXBlci5zZWFyY2gocXVlcnksIHRpY2tldHMsIGFzeW5jIGZ1bmN0aW9uKHRpY2tldCkge1xuXHRcdFx0XHRsZXQgdGlja2V0U3RhdHVzID0gdGlja2V0LnN0YXR1cztcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWQ6IHRpY2tldC5pZCxcblx0XHRcdFx0XHR0aXRsZTogdGlja2V0LnRpdGxlLFxuXHRcdFx0XHRcdHN0YXR1c19uYW1lOiAnPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLScgKyB0aWNrZXRTdGF0dXMuc2x1Zy5zcGxpdCgnXycpWzBdICsgJ1wiPicgKyB0aWNrZXRTdGF0dXMubmFtZSArICc8L3NwYW4+Jyxcblx0XHRcdFx0XHRjcmVhdGVkX2F0OiB0aWNrZXQuY3JlYXRlZF9hdCxcblx0XHRcdFx0XHR1cGRhdGVkX2F0OiB0aWNrZXQudXBkYXRlZF9hdFxuXHRcdFx0XHR9OyAvLyB0aGUgZm9ybWF0IHJlc3VsdHMgbmVlZCB0byBiZSBpbiBmb3IgdGhlIHRoZSByZXN1bHRzIHRhYmxlXG5cdFx0XHR9LCBzZWFyY2hLZXlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93RmlsdGVyZWRUaWNrZXRzKCQoJy5zaWRlLW5hdi1iYXItbmVzdGVkIGxpLmFjdGl2ZScpLmRhdGEoJ3NsdWcnKSk7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVQYWdlXG4gKlxuICogTWFuaXB1bGF0ZXMgdGhlIHByb2JsZW1zIHBhZ2Ugd2l0aCBqUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB0aGUgRXhwZXJ0aXNlVHlwZU1hbmFnZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihpc1BhZ2UgPSBmYWxzZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgICAgICAgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgICAgICAgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0Ly8gVHJ1ZTogaHR0cDovL3gvcHJvYmxlbS10eXBlLCBGYWxzZTogUHJvYmxlbSBwaWNrZXIgYXBwZWFycyBpbiBhIG1vZGFsIGV0Yy5cblx0XHR0aGlzLmlzUGFnZSA9IGlzUGFnZTtcblx0fVxuXG5cdGxvYWRTdWJFeHBlcnRpc2VUeXBlcygkdHlwZUNvbHVtbnMsICRsaSA9IG51bGwsIGV4cGVydGlzZVR5cGVJZCA9IG51bGwpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZSA9IG51bGw7XG5cblx0XHRpZiAoJGxpKSB7IC8vIGxpIG9mIGN1cnJlbnQgRXhwZXJ0aXNlVHlwZVxuXHRcdFx0ZXhwZXJ0aXNlVHlwZSA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpO1xuXHRcdFx0dGhpcy5sb2FkRXhwZXJ0aXNlVHlwZUluZm8oZXhwZXJ0aXNlVHlwZSk7XG5cblx0XHRcdCRsaS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmZpbmQoJ3NwYW4uc3VidGxlJykudGV4dCh0aGlzLmdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0oZXhwZXJ0aXNlVHlwZSkpO1xuXG5cdFx0XHQkbGkucGFyZW50KCkubmV4dEFsbCgpLnJlbW92ZSgpO1xuXHRcdFx0JGxpLnBhcmVudCgpLmZpbmQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCRsaS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdsaS5sYXN0LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdsYXN0LWFjdGl2ZScpO1xuXHRcdFx0JGxpLmFkZENsYXNzKCdhY3RpdmUgbGFzdC1hY3RpdmUnKTtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRyZW4gICAgPSBbXSxcblx0XHRcdCR0eXBlQ29sdW1uID0gJCgnPGRpdiBjbGFzcz1cInR5cGUtY29sdW1uXCI+PC9kaXY+Jyk7XG5cblx0XHRpZiAoZXhwZXJ0aXNlVHlwZUlkID09PSBudWxsKSB7XG5cdFx0XHRjaGlsZHJlbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0Um9vdEV4cGVydGlzZVR5cGVzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgkbGkpIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGUuX2NoaWxkcmVuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBjaGlsZHJlbklkcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpLl9jaGlsZHJlbjtcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVzKGNoaWxkcmVuSWRzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc3BlY2lhbGlzdHMgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXRTcGVjaWFsaXN0cyhjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQuaWQpKTtcblxuXHRcdGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHQkdHlwZUNvbHVtbi5hcHBlbmQoXG5cdFx0XHRcdCc8bGkgJyArIChjaGlsZC5fY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2NsYXNzPVwibm8tY2hpbGRyZW5cIicgOiAnJykgKyAnIGRhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCInICsgY2hpbGQuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSArXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJzcGVjaWFsaXN0LWNvdW50ZXJcIj4nICtcblx0XHRcdFx0XHRcdChzcGVjaWFsaXN0c1tpXS5sZW5ndGggPiAwID8gc3BlY2lhbGlzdHNbaV0ubGVuZ3RoICsgJyA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+JyA6ICc8aSBjbGFzcz1cImZhIGZhLXVzZXItdGltZXNcIj48L2k+JykgK1xuXHRcdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvaT4nICtcblx0XHRcdFx0JzwvbGk+J1xuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0aGUgbmV3IC50eXBlLWNvbHVtbiwgc2Nyb2xsIHRvIHRoZSByaWdodCB0byB2aWV3IGl0XG5cdFx0JHR5cGVDb2x1bW5zLmFwcGVuZCgkdHlwZUNvbHVtbik7XG5cdFx0JHR5cGVDb2x1bW5zLnNjcm9sbExlZnQoJHR5cGVDb2x1bW5zLndpZHRoKCkpO1xuXHR9XG5cblx0bG9hZEV4cGVydGlzZVR5cGUoJHR5cGVDb2x1bW5zLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZSAgICAgID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHRleHBlcnRpc2VUeXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKTtcblxuXHRcdCR0eXBlQ29sdW1ucy5lbXB0eSgpO1xuXG5cdFx0dGhpcy5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJHR5cGVDb2x1bW5zKTtcblxuXHRcdGZvciAobGV0IGkgPSBleHBlcnRpc2VUeXBlQ2hhaW4ubGVuZ3RoIC0gMjsgaSA+PSAtMTsgaS0tKSB7XG5cdFx0XHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlQ29sdW1ucywgJHR5cGVDb2x1bW5zLmZpbmQoJy50eXBlLWNvbHVtbiBsaVtkYXRhLWV4cGVydGlzZS10eXBlLWlkPVwiJyArIGV4cGVydGlzZVR5cGVDaGFpbltpICsgMV0uaWQgKyAnXCJdJyksIGV4cGVydGlzZVR5cGVDaGFpbltpICsgMV0uaWQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiAvcHJvYmxlbS10eXBlcywgcG9wdWxhdGUgdGhlIGluZm9ybWF0aW9uIGluIHRoZSBkZXRhaWxzXG5cdCAqIHBhbmVsIG9uIHRoZSByaWdodCB3aXRoIGRhdGEgZnJvbSBhIGdpdmVuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIFxuXHQgKi9cblx0bG9hZEV4cGVydGlzZVR5cGVJbmZvKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgJHNpbmdsZVZpZXcgXHQgICAgPSAkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLFxuXHRcdFx0JG5hdkJhciAgICAgICAgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJy50b3AtbmF2IGg0JyksXG5cdFx0XHQkc3BsYXNoU2NyZWVuICAgICAgID0gJHNpbmdsZVZpZXcuZmluZCgnLnNwbGFzaC1zY3JlZW4nKSxcblx0XHRcdCRleHBlcnRpc2VUeXBlVmlldyAgPSAkc2luZ2xlVmlldy5maW5kKCcjcHJvYmxlbS10eXBlLXZpZXcnKSxcblx0XHRcdCRleHBlcnRpc2VUeXBlVGFibGUgPSAkc2luZ2xlVmlldy5maW5kKCcjcHJvYmxlbS10eXBlcy10YWJsZSB0Ym9keScpLFxuXHRcdFx0JHNwZWNpYWxpc3RzVGFibGUgICA9ICRzaW5nbGVWaWV3LmZpbmQoJyNzcGVjaWFsaXN0cy10YWJsZSB0Ym9keScpLFxuXHRcdFx0JHRpY2tldHNUYWJsZSAgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJyN0aWNrZXRzLXRhYmxlIHRib2R5JyksXG5cdFx0XHQkbm9TcGVjaWFsaXN0c0RhdGEgID0gJHNpbmdsZVZpZXcuZmluZCgnI25vLXNwZWNpYWxpc3RzLWRhdGEnKSxcblx0XHRcdCRub1RpY2tldHNEYXRhICAgICAgPSAkc2luZ2xlVmlldy5maW5kKCcjbm8tdGlja2V0cy1kYXRhJyk7XG5cblx0XHQkc3BsYXNoU2NyZWVuLmFkZENsYXNzKCdibG9jay1oaWRkZW4nKTtcblx0XHQkZXhwZXJ0aXNlVHlwZVZpZXcuYWRkQ2xhc3MoJ2Jsb2NrLWhpZGRlbicpO1xuXG5cdFx0aWYgKHRoaXMuaXNQYWdlKSB7XG5cdFx0XHQkbmF2QmFyLnRleHQodGhpcy5nZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cblx0XHQkZXhwZXJ0aXNlVHlwZVRhYmxlLmVtcHR5KCk7XG5cdFx0JHNwZWNpYWxpc3RzVGFibGUuZW1wdHkoKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0JHRpY2tldHNUYWJsZS5lbXB0eSgpLnBhcmVudCgpLmhpZGUoKTtcblxuXHRcdGxldCBleHBlcnRpc2VUeXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKTtcblxuXHRcdC8vIFNob3VsZCBwcm9iYWJseSBtb3ZlIHRoZXNlIHRvIER5bmFtaWNQYWdlXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBleHBlcnRpc2VUeXBlQ2hhaW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBleHBlcnRpc2VUeXBlID0gZXhwZXJ0aXNlVHlwZUNoYWluW2ldO1xuXG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVRhYmxlLnByZXBlbmQoXG5cdFx0XHRcdCc8dHIgJyArIChpID09PSAwID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJyBkYXRhLXJvd2lkPVwiJyArIGV4cGVydGlzZVR5cGUuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgZXhwZXJ0aXNlVHlwZS5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIGV4cGVydGlzZVR5cGUubmFtZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIChleHBlcnRpc2VUeXBlLl9wYXJlbnQgIT09IG51bGwgPyBleHBlcnRpc2VUeXBlQ2hhaW5baSArIDFdLm5hbWUgOiAnTi9BJykgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHQnPC90cj4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdCRleHBlcnRpc2VUeXBlVmlldy5yZW1vdmVDbGFzcygnYmxvY2staGlkZGVuJyk7XG5cblx0XHRsZXQgc3BlY2lhbGlzdHMgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlLmlkKTtcblxuXHRcdGlmIChzcGVjaWFsaXN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHQkc3BlY2lhbGlzdHNUYWJsZS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHQkbm9TcGVjaWFsaXN0c0RhdGEuaGlkZSgpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwZWNpYWxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBzcGVjaWFsaXN0ID0gc3BlY2lhbGlzdHNbaV07XG5cblx0XHRcdFx0JHNwZWNpYWxpc3RzVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdCc8dHIgJyArIChzcGVjaWFsaXN0LmlkID09PSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJyBkYXRhLXJvd2lkPVwiJyArIHNwZWNpYWxpc3QuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0LmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0Lm5hbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArIHNwZWNpYWxpc3Quam9iICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0LnBob25lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHQnPC90cj4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzcGVjaWFsaXN0c1RhYmxlLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdCRub1NwZWNpYWxpc3RzRGF0YS5zaG93KCk7XG5cdFx0fVxuXG5cdFx0Ly8gT25seSBnZXQgdGlja2V0cyBpZiB0aGVyZSBpcyBhIHRhYmxlIHRvIHB1dCB0aGUgcmVzdWx0cyBpblxuXHRcdGlmICgkdGlja2V0c1RhYmxlLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0Ly8gR2V0IHRpY2tldHMgdG8gZmlsbCByZWxhdGVkIHRpY2tldHMgdGFibGUgaW4gc2luZ2xlLXZpZXdcblx0XHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlLmlkKTtcblx0XHRcdFxuXHRcdFx0Ly8gT25seSBmaWxsIHRpY2tldHMgdGFibGUgaWYgdGhlcmUgYXJlIGFueSBtYXRjaGluZyB0aWNrZXRzXG5cdFx0XHRpZiAodGlja2V0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCR0aWNrZXRzVGFibGUucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHQkbm9UaWNrZXRzRGF0YS5oaWRlKCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aWNrZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIHRpY2tldCA9IHRpY2tldHNbaV07XG5cblx0XHRcdFx0XHQkdGlja2V0c1RhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdCc8dHIgZGF0YS1yb3dpZD1cIicgKyB0aWNrZXQuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIHRpY2tldC5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdGlja2V0LnRpdGxlICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiZmlsdGVyXCI+JyArIHRpY2tldC5zdGF0dXMubmFtZSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdGlja2V0LmNyZWF0ZWRfYXQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE90aGVyd2lzZSBzaG93IGEgbWVzc2FnZSBpbnN0ZWFkIG9mIHRoZSB0YWJsZVxuXHRcdFx0XHQkdGlja2V0c1RhYmxlLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdFx0JG5vVGlja2V0c0RhdGEuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSBuYW1lcyBvZiBhbiBFeHBlcnRpc2VUeXBlLCBhbmQgaXRzIHBhcmVudHMsXG5cdCAqIGluIG9yZGVyZWQgZmFzaGlvbi5cblx0ICpcblx0ICogZS5nLiBcIkVsZWN0cm9uaWNzIC8gUHJpbnRlciAvIFByaW50ZXIgSW5rIC8gQ3lhbiBJbmtcIlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEJyZWFkY3J1bSBvZiBFeHBlcnRpc2VUeXBlLm5hbWUncywgZnJvbSB0aGUgcm9vdCB0byBhIEV4cGVydGlzZVR5cGUgXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRicmVhZGNydW0gICAgICAgICAgID0gJyc7XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRicmVhZGNydW0gPSBleHBlcnRpc2VUeXBlUGFyZW50Lm5hbWUgKyBicmVhZGNydW07XG5cblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRicmVhZGNydW0gPSAnIC8gJyArIGJyZWFkY3J1bTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYnJlYWRjcnVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgRXhwZXJ0aXNlVHlwZSdzIGFzIGEgdGFibGUgaWYgdGhlaXIgbmFtZVxuXHQgKiBjb250YWlucyB0aGUgcXVlcnkgc3RyaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVG8gY2hlY2sgaWYgaW4gRXhwZXJ0aXNlVHlwZS5uYW1lXG5cdCAqL1xuXHRzZWFyY2gocXVlcnkpIHtcblx0XHR2YXIgJGV4cGVydGlzZVR5cGVQaWNrZXIgPSAkKCcucHJvYmxlbS10eXBlLXBpY2tlcicpLFxuXHRcdFx0JHRhYmxlU2VjdGlvbiAgICAgICAgPSAkKHRoaXMudGFibGVTZWxlY3Rvcik7XG5cblx0XHQvLyBJZiBzZWFyY2ggdmFsdWUgaGFzbid0IGNoYW5nZWQsIGlnbm9yZVxuXHRcdGxldCBwcmV2UXVlcnkgPSAkKFwiLm1haW4tY29udGVudC10aXRsZVwiKS52YWwoKTtcblxuXHRcdGlmIChxdWVyeS5sZW5ndGggPiAwICYmXG5cdFx0XHRcdHF1ZXJ5ID09PSBwcmV2UXVlcnkuc3Vic3RyaW5nKHByZXZRdWVyeS5sYXN0SW5kZXhPZihcIuKAmFwiKSsxLHByZXZRdWVyeS5sYXN0SW5kZXhPZihcIuKAmVwiKSkpXG5cdFx0XHRyZXR1cm47XG5cblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdibG9jay1oaWRkZW4nKTtcblxuXHRcdGlmIChxdWVyeS5sZW5ndGggPj0gMiB8fCAocXVlcnkubGVuZ3RoID4gMCAmJiBxdWVyeSA9PSBwYXJzZUludChxdWVyeSkpKSB7XG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVBpY2tlci5oaWRlKCk7XG5cdFx0XHQkdGFibGVTZWN0aW9uLnNob3coKTtcblxuXHRcdFx0dmFyIHNlYXJjaEtleXMgICAgID0gWyduYW1lJ10sIC8vIG9ubHkgc2VhcmNoIG9uIHRoaXMgcHJvcGVydHlcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLnNlYXJjaChxdWVyeSwgc2VhcmNoS2V5cyk7XG5cblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgZXhwZXJ0aXNlVHlwZXMsIGFzeW5jIGZ1bmN0aW9uKGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZDogZXhwZXJ0aXNlVHlwZS5pZCxcblx0XHRcdFx0XHRuYW1lOiBleHBlcnRpc2VUeXBlLm5hbWUsXG5cdFx0XHRcdFx0cGFyZW50OiAoZXhwZXJ0aXNlVHlwZS5fcGFyZW50ICE9IG51bGwgPyBleHBlcnRpc2VUeXBlLnBhcmVudC5uYW1lIDogJ24vYScpXG5cdFx0XHRcdH07IC8vIGZvcm1hdCBvZiByZXN1bHRzIHRhYmxlXG5cdFx0XHR9LCBzZWFyY2hLZXlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSGlkZSB0YWJsZSwgcmVzdG9yZSBiYWNrIHRvIG5vcm1hbFxuXHRcdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS50ZXh0KCdQcm9ibGVtIFR5cGVzJyk7XG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVBpY2tlci5zaG93KCk7XG5cdFx0XHQkdGFibGVTZWN0aW9uLmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhbmQgaGlnaGxpZ2h0IGEgRXhwZXJ0aXNlVHlwZSBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqL1xuXHRnb3RvKGlkKSB7XG5cdFx0Ly8gU2hvdyBkZXRhaWxzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoaWQpO1xuXG5cdFx0Ly8gU2ltdWx0YW5lb3VzbHkgKGFzeW5jaHJvbm91c2x5KeKAplxuXHRcdC8vIC0gbG9hZCB0aGUgaW5kaXZpZHVhbCBleHBlcnRpc2UgdHlwZSBkZXRhaWxzXG5cdFx0dGhpcy5sb2FkRXhwZXJ0aXNlVHlwZUluZm8odHlwZSk7XG5cblx0XHQvLyAtIGxvYWQgdGhlIGhpZXJhcmNoeSBmb3IgdGhlIGV4cGVydGlzZSB0eXBlXG5cdFx0bGV0IHR5cGVDaGFpbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZUNoYWluKHR5cGUpO1xuXG5cdFx0d2hpbGUgKHR5cGVDaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgdHlwZSAgPSB0eXBlQ2hhaW4ucG9wKCksXG5cdFx0XHRcdCR0eXBlID0gJChgW2RhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCIke3R5cGUuaWR9XCJdYCkuYWRkQ2xhc3MoXCJhY3RpdmUgbGFzdC1hY3RpdmVcIik7XG5cblx0XHRcdHRoaXMubG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlLnBhcmVudHMoXCIudHlwZS1jb2x1bW5zXCIpLCBudWxsLCB0eXBlLmlkKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9Qcm9ibGVtVHlwZVBhZ2UuanMiLCIvKipcbiAqIFByb2JsZW0gdHlwZXMgcGFnZSBKUyBmb3IgbG9hZGluZyBhbmQgbWFuYWdpbmcgdGhlXG4gKiBkaWZmZXJlbnQgdHlwZXMgb2YgcHJvYmxlbXMgYSB0aWNrZXQgbWF5IGhhdmUuXG4gKlxuICogVGhpcyBwYWdlIG5lZWRzIHRvIGxvYWQgZWFjaCBwcm9ibGVtIHR5cGUsIGFuZCBoYW5kbGVcbiAqIGxvYWRpbmcgY2hpbGRyZW4gZm9yIGVhY2ggdHlwZSB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgb25lLlxuICogVGhlIHVzZXIgY2FuIGNyZWF0ZSBhbmQgZGVsZXRlIHByb2JsZW0gdHlwZXMsIGFzIHdlbGwgYXMgc2VlXG4gKiBob3cgbWFueSBzdGFmZiBoYXZlIGEgc3BlY2lhbGlzbSBpbiBlYWNoIHByb2JsZW0gdHlwZS4gRWFjaCB0eXBlXG4gKiBhbHNvIHByb3ZpZGVzIHF1aWNrIGxpbmtzIHRvIHRpY2tldHMgd2hpY2ggaGF2ZSBiZWVuIGNyZWF0ZWRcbiAqIGFib3V0IHRoZSBwcm9ibGVtIHR5cGUgYW5kIGxpbmtzIHRvIHRoZSBzdGFmZiBtZW1iZXJzIHdpdGhcbiAqIHRoZSBzcGVjaWFsaXNtLlxuICovXG5cbmltcG9ydCBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBUaWNrZXRQYWdlIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldFBhZ2VcIjtcbmltcG9ydCBQcm9ibGVtVHlwZVBhZ2UgZnJvbSBcIi4vUHJvYmxlbVR5cGVQYWdlXCI7XG5pbXBvcnQgQVBJIGZyb20gXCIuLi9BUElcIjtcblxubGV0IHRpY2tldFBhZ2UsIHByb2JsZW1UeXBlUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cbiAgICB0aWNrZXRQYWdlID0gd2luZG93LnRpY2tldFBhZ2UgPSBuZXcgVGlja2V0UGFnZSgpO1xuICAgIHByb2JsZW1UeXBlUGFnZSA9IHdpbmRvdy5wcm9ibGVtVHlwZVBhZ2UgPSBuZXcgUHJvYmxlbVR5cGVQYWdlKHRydWUpO1xuXG5cdC8vIEluaXRpYWxseSwgbG9hZCBhbGwgZXhwZXJ0aXNlIHR5cGVzIGF0IHRoZSByb290ICh0eXBlcyB3aXRob3V0IGEgcGFyZW50KVxuXHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSk7XG5cblx0Ly8gRGV0ZXJtaW5lIGlmIHRoZSBwYWdlIHNob3VsZCBqdW1wIGRpcmVjdGx5IHRvIGEgdHlwZSBieSBJRCBpbiB0aGUgaGFzaFxuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdHByb2JsZW1UeXBlUGFnZS5nb3RvKE51bWJlcihsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXHR9XG5cblx0Ly8gT24gY2xpY2tpbmcgYSBwcm9ibGVtIHR5cGUsIGxvYWQgYW5kIGRpc3BsYXkgYWxsIGNoaWxkcmVuIG9mIHRoaXMgdHlwZVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnR5cGUtY29sdW1uIGxpJywgZnVuY3Rpb24oKSB7XG5cdFx0bGV0IGlkID0gTnVtYmVyKCQodGhpcykuZGF0YSgnZXhwZXJ0aXNlVHlwZUlkJykpO1xuXG5cdFx0Ly8gU2ltdWx0YW5lb3VzbHkgKGFzeW5jaHJvbm91c2x5KSBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgdGFza3Ncblx0XHQvLyAtIHNob3cgdGhlIGRldGFpbHMgYWJvdXQgdGhlIHNlbGVjdGVkIHR5cGUgaW4gdGhlIHNpbmdsZSB2aWV3IG9uIHRoZSByaWdodFxuXHRcdHByb2JsZW1UeXBlUGFnZS5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblx0XHQvLyAtIHNob3cgdGhlIGNoaWxkcmVuIG9mIHRoZSBzZWxlY3RlZCB0eXBlIGluIHRoZSBtYWluIHZpZXdcblx0XHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSwgJCh0aGlzKSwgaWQpO1xuXG5cdFx0Ly8gU2V0IHRoZSBoYXNoIGZyYWdtZW50IGZvciB0aGUgdW5pcXVlIFVSTCBmb3IgdGhlIHR5cGUgc2VsZWN0ZWRcblx0XHRsb2NhdGlvbi5oYXNoID0gaWQ7XG5cdH0pO1xuXG5cdC8vIFByb2JsZW0gdHlwZSBpbmZvIHNob3dzIHRhYmxlIHdpdGggcGFyZW50IHR5cGVzXG5cdC8vIENsaWNraW5nIG9uIGEgdHlwZSB0YWtlcyB5b3UgdG8gdGhlIHR5cGUgeW91IGNsaWNrZWRcblx0JChcIiNwcm9ibGVtLXR5cGVzLXRhYmxlXCIpLm9uKCdjbGljaycsICd0Ym9keSB0cjpub3QoLmhpZ2hsaWdodCknLCBmdW5jdGlvbigpIHtcblx0XHQkKFwiLnByb2JsZW0tdHlwZS1waWNrZXJcIikuZmluZChcIltkYXRhLWV4cGVydGlzZS10eXBlLWlkPVxcXCJcIiArIHRoaXMuZGF0YXNldC5yb3dpZCArIFwiXFxcIl1cIikuY2xpY2soKTtcblx0fSk7XG5cblx0Ly8gQ2xpY2tpbmcgb24gYSBzZWFyY2ggcmVzdWx0IHRha2VzIHlvdSB0byB0aGUgc2VsZWN0ZWQgdHlwZSBhbmQgY2xlYXJzIHRoZSBzZWFyY2hcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN0YWJsZS1zZWN0aW9uIHRib2R5IHRyOm5vdCguaGlnaGxpZ2h0KScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdvIHRvIHNlbGVjdGVkIHR5cGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuZ290byhwYXJzZUludCh0aGlzLmRhdGFzZXRbXCJyb3dpZFwiXSkpO1xuXHRcdC8vIFJlc2V0IHNlYXJjaFxuXHRcdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXHRcdHByb2JsZW1UeXBlUGFnZS5zZWFyY2goXCJcIik7XG5cdH0pO1xuXG5cdC8vIENyZWF0aW5nIGEgbmV3IHByb2JsZW0gdHlwZSB3aXRoIHRoZSBuYW1lIGdpdmVuIGJ5IHRoZSB1c2VyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3JlYXRlLXByb2JsZW0tdHlwZScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdldCB0aGUgbmV3IG5hbWUgb2YgYSBwcm9ibGVtIHR5cGVcblx0XHRsZXQgbmFtZSA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJ2lucHV0JykudmFsKCk7XG5cdFx0Ly8gQ2hlY2sgaWYgYSBuYW1lIGhhcyBiZWVuIGdpdmVuLCBkb24ndCBjcmVhdGUgYSBwcm9ibGVtIHR5cGUgd2l0aCBubyBuYW1lXG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEdldCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0cyBmb3IgdGhlIG5ldyBwcm9ibGVtIHR5cGUgdG8gYmUgYWRkZWQgdG9cblx0XHRjb25zdCBwYXJlbnRJZCA9ICQodGhpcykuY2xvc2VzdCgnLnR5cGUtY29sdW1uJykucHJldigpLmZpbmQoJy5hY3RpdmUnKS5kYXRhKFwiZXhwZXJ0aXNlVHlwZUlkXCIpO1xuXHRcdC8vIENyZWF0ZSBwcm9ibGVtIHR5cGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuY3JlYXRlRXhwZXJ0aXNlVHlwZShuYW1lLCBwYXJlbnRJZCk7XG5cdH0pO1xuXG5cdCQoXCIjcHJvYmxlbS10eXBlLXZpZXdcIikub24oXCJjbGlja1wiLCBcIi5idG4tZGFuZ2VyXCIsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIEdldCBpbmZvIGFib3V0IHRoZSBwcm9ibGVtIHR5cGUgdG8gYmUgZGVsZXRlZCwgaW5jbHVkaW5nXG5cdFx0Ly8gSUQgYW5kIG5hbWUgb2YgdHlwZSBhbmQgSUQgb2YgcGFyZW50IGlmIGFwcGxpY2FibGVcblx0XHRsZXQgJHJvdyA9ICQoXCIjcHJvYmxlbS10eXBlcy10YWJsZVwiKS5maW5kKFwiLmhpZ2hsaWdodFwiKTtcblx0XHRsZXQgW2lkLCBuYW1lXSA9ICRyb3cuY2hpbGRyZW4oXCJ0ZDpub3QoOmxhc3QtY2hpbGQpXCIpLm1hcCgoXywgZWwpID0+IGVsLnRleHRDb250ZW50KTtcblx0XHRsZXQgcGFyZW50SWQgPSAkcm93LnByZXYoKS5jaGlsZHJlbihcInRkOmZpcnN0LWNoaWxkXCIpLnRleHQoKTtcblxuXHRcdC8vIEFzayBmb3IgY29uZmlybWF0aW9uIGluY2x1ZGluZyBzcGVjaWZpYyBuYW1lIGluIGVycm9yIG1lc3NhZ2UgKHRoZSBIYXdhaWkgZml4VE0pXG5cdFx0aWYgKCFjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bmFtZX0gKElEICR7aWR9KT9gKSkgcmV0dXJuO1xuXG5cdFx0Ly8gUGVyZm9ybSBBUEkgY2FsbCB0byBkZWxldGVcblx0XHRwcm9ibGVtVHlwZVBhZ2UuZGVsZXRlKGlkKVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRlbGV0ZWQgdHlwZSBoYWQgYSBwYXJlbnQsIHJlbG9hZCBqdXN0IHRoZSBzaWJsaW5ncyBvZiB0aGUgZGVsZXRlZCB0eXBlXG5cdFx0XHRcdFx0aWYgKHBhcmVudElkKSB7XG5cdFx0XHRcdFx0XHQkKFwiLnByb2JsZW0tdHlwZS1waWNrZXJcIikuZmluZChcIltkYXRhLWV4cGVydGlzZS10eXBlLWlkPVxcXCJcIiArIHBhcmVudElkICsgXCJcXFwiXVwiKS5jbGljaygpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIHJlbG9hZCBhbGxcblx0XHRcdFx0XHRcdHdpbmRvdy5UdXJib2xpbmtzLnZpc2l0KFwiL3Byb2JsZW0tdHlwZXNcIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHR9KTtcblxuXHQvLyBTZWFyY2ggcHJvYmxlbSB0eXBlc1xuXHQkKCcuc2VhcmNoLWZpZWxkIGlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0cHJvYmxlbVR5cGVQYWdlLnNlYXJjaCh0aGlzLnZhbHVlKTtcblx0fSk7XG5cblx0Ly8gSGFzaCBmcmFnbWVudCBuYXZpZ2F0aW9uIGZvciBsaW5raW5nIHRvIHN0YWZmIGFuZCB0aWNrZXRzIGZyb20gcHJvYmxlbSB0eXBlIGRldGFpbFxuXHQkKFwiI3NwZWNpYWxpc3RzLXRhYmxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0cltkYXRhLXJvd2lkXVwiLCBlID0+IHtcblx0XHR3aW5kb3cuVHVyYm9saW5rcy52aXNpdChcIi9zdGFmZiNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cdCQoXCIjdGlja2V0cy10YWJsZVwiKS5vbihcImNsaWNrXCIsIFwidHJbZGF0YS1yb3dpZF1cIiwgZSA9PiB7XG5cdFx0d2luZG93LlR1cmJvbGlua3MudmlzaXQoXCIvdGlja2V0cyNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cblx0Ly8gS2V5Ym9hcmQgbmF2aWdhdGlvblxuXHQvLyBLZXlib2FyZCBzaG9ydGN1dHNcblx0JChkb2N1bWVudCkua2V5dXAoZSA9PiB7XG5cdFx0Ly8gSWdub3JlIGlmIGluIGlucHV0XG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0XHRlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0uY2xpY2soKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcblx0XHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3ICYmIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJZiBubyBzZWxlY3Rpb24sIHNlbGVjdCBmaXJzdCBpdGVtIHJlZ2FyZGxlc3Mgb2Yga2V5cHJlc3Ncblx0XHRsZXQgJGxhc3RBY3RpdmVUeXBlID0gJChcIi5wcm9ibGVtLXR5cGUtcGlja2VyIC5sYXN0LWFjdGl2ZVwiKTtcblx0XHRpZiAoJGxhc3RBY3RpdmVUeXBlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JChcIi5wcm9ibGVtLXR5cGUtcGlja2VyIFtkYXRhLXByb2JsZW0tdHlwZS1pZD1cXFwiMVxcXCJdXCIpLmZpcnN0KCkuY2xpY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyICRyb3c7XG5cdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcblx0XHRcdGNhc2UgMzg6IC8vIHVwXG5cdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdC8vIEdldCByb3cgdG8gc2VsZWN0XG5cdFx0XHRcdCRyb3cgPSAkbGFzdEFjdGl2ZVR5cGUuZmlyc3QoKVtlLmtleUNvZGUgPT09IDM4ID8gXCJwcmV2XCIgOiBcIm5leHRcIl0oKTtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gNDAgJiYgJHJvdy5pcyhcIi5pbnB1dC1ncm91cFwiKSkge1xuXHRcdFx0XHRcdCRyb3cuY2hpbGRyZW4oXCJpbnB1dFwiKS5mb2N1cygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRyb3cuY2xpY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcblx0XHRcdGNhc2UgMzk6IC8vIHJpZ2h0XG5cdFx0XHRcdC8vIEdldCBjb2x1bW4gaWYgZXhpc3RzIHRvIGxlZnQgb3IgcmlnaHRcblx0XHRcdFx0bGV0ICRjb2x1bW4gPSAkbGFzdEFjdGl2ZVR5cGUuZmlyc3QoKS5jbG9zZXN0KFwiLnR5cGUtY29sdW1uXCIpW2Uua2V5Q29kZSA9PT0gMzcgPyBcInByZXZcIiA6IFwibmV4dFwiXSgpO1xuXHRcdFx0XHQvLyBHZXQgcm93IHRvIGJlIHNlbGVjdGVkXG5cdFx0XHRcdCRyb3cgPSAkY29sdW1uLmZpbmQoZS5rZXlDb2RlID09PSAzNyA/IFwiLmFjdGl2ZVwiIDogXCJsaVwiKS5maXJzdCgpO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAzOSAmJiAkcm93Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdCRjb2x1bW4uZmluZChcImlucHV0XCIpLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHJvdy5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvcHJvYmxlbV90eXBlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=