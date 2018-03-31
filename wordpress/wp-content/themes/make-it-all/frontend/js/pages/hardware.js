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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _HardwarePage = __webpack_require__(48);

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
/* 48 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL2hhcmR3YXJlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZVBhZ2UuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJlIiwidGlja2V0cyIsImNvbW1lbnRzIiwic3RhdHVzZXMiLCJ0aWNrZXRTdGF0dXNlcyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIlN0YWZmTWFuYWdlciIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiTWFuYWdlciIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsIkNvbW1lbnQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwiQ2FsbCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsIkVtcGxveWVlIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJFeHBlcnRpc2VUeXBlIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsIkV4cGVydGlzZVR5cGVTdGFmZiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsIlN0YXR1cyIsImdldFRpY2tldHNXaXRoU2x1ZyIsIlRpY2tldCIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiRGV2aWNlIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJQcm9ncmFtIiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwiVGlja2V0U3RhdHVzIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiaGFyZHdhcmVQYWdlIiwiaW5pdCIsInBvcHVsYXRlVHlwZXMiLCJwYXJlbnRFbGVtZW50IiwicG9wdWxhdGVNYWtlIiwic2hvd0RldmljZXMiLCJOdW1iZXIiLCJzaG93VGFibGVSb3dEZXRhaWxzIiwiaGFzTG9jYXRpb25IYXNoIiwiaGFyZHdhcmVNYW5hZ2VyIiwiVHVyYm9saW5rcyIsInZpc2l0IiwiSGFyZHdhcmVQYWdlIiwidGlja2V0TWFuYWdlciIsInNvZnR3YXJlTWFuYWdlciIsInR5cGVMaXN0IiwidW5pcXVlVHlwZXMiLCJyb3ciLCJtYWtlTGlzdCIsInVuaXF1ZU1ha2UiLCJ1bmlxdWVNYWtlc09mVHlwZSIsInJlc3VsdHMiLCJnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSIsImFsZXJ0Iiwic3RhdHVzQ2xhc3MiLCJzdGF0dXNUZXh0IiwiaiIsImsiLCJnZXRTb2Z0d2FyZVR5cGUiLCJ1cGRhdGVTaW5nbGVWaWV3TmF2YmFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxhOzs7QUFDcEIsMEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxvQkFBTCxHQUE0QkMsT0FBT0Qsb0JBQVAsSUFBK0Isb0NBQTNEOztBQUVBLFFBQUtFLEtBQUwsR0FBZ0JDLElBQUlELEtBQUosQ0FBVUUsR0FBVixDQUFjO0FBQUEsVUFBSyxtQkFBU0MsQ0FBVCxDQUFMO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFFBQUtDLE9BQUwsR0FBZ0JILElBQUlHLE9BQUosQ0FBWUYsR0FBWixDQUFnQjtBQUFBLFVBQUsscUJBQVdDLENBQVgsQ0FBTDtBQUFBLEdBQWhCLENBQWhCO0FBQ0EsUUFBS0UsUUFBTCxHQUFnQkosSUFBSUksUUFBSixDQUFhSCxHQUFiLENBQWlCO0FBQUEsVUFBSyxzQkFBWUMsQ0FBWixDQUFMO0FBQUEsR0FB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QUFDekN0TyxNQUFFLFdBQUYsRUFBZW1DLE1BQWYsQ0FBc0IsaUZBQzhDaUQsU0FBU2tKLENBQVQsRUFBWXZULEVBRDFELHVCQUVoQnFLLFNBQVNrSixDQUFULEVBQVlDLGVBQVosRUFGZ0IsV0FFd0JuSixTQUFTa0osQ0FBVCxFQUFZMUgsSUFGcEMsNEJBQXRCO0FBS0E7O0FBRUQ1RyxLQUFFLGVBQUYsRUFBbUJELElBQW5CLENBQXdCLFlBQVl2RixRQUFRdUIsTUFBNUM7QUFDQWlFLEtBQUUsaUJBQUYsRUFBcUJELElBQXJCLENBQTBCLFlBQVlxRixTQUFTckosTUFBL0M7O0FBRUE7QUFDQSxRQUFLeVMsc0JBQUwsQ0FBNEIsS0FBSzFKLE1BQUwsQ0FBWWpCLElBQVosR0FBbUIsS0FBbkIsR0FBMkIsS0FBS2lCLE1BQUwsQ0FBWUMsSUFBdkMsR0FBOEMsS0FBOUMsR0FBc0QsS0FBS0QsTUFBTCxDQUFZSSxTQUE5RjtBQUNBOzs7Ozs7a0JBdkhtQnFJLFkiLCJmaWxlIjoiL3dvcmRwcmVzcy93cC1jb250ZW50L3RoZW1lcy9tYWtlLWl0LWFsbC9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZGY4OTliNzY3NWZmZmNhNWJkNyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FsbCBmcm9tIFwiLi9DYWxsXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL1N0YXR1c1wiO1xuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXRcIjtcbmltcG9ydCBUaWNrZXRTdGF0dXMgZnJvbSBcIi4vVGlja2V0U3RhdHVzXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YXR1c2VzXG4gKiBhbmQgdGlja2V0cyBhbmQgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFRpY2tldE1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gd2luZG93LmV4cGVydGlzZVR5cGVNYW5hZ2VyIHx8IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jYWxscyAgICA9IGFwaS5jYWxscy5tYXAoZSA9PiBuZXcgQ2FsbChlKSk7XG5cdFx0dGhpcy50aWNrZXRzICA9IGFwaS50aWNrZXRzLm1hcChlID0+IG5ldyBUaWNrZXQoZSkpO1xuXHRcdHRoaXMuY29tbWVudHMgPSBhcGkuY29tbWVudHMubWFwKGUgPT4gbmV3IENvbW1lbnQoZSkpO1xuXHRcdHRoaXMuc3RhdHVzZXMgPSBhcGkuc3RhdHVzZXMubWFwKGUgPT4gbmV3IFN0YXR1cyhlKSk7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyA9IGFwaS50aWNrZXRTdGF0dXNlcy5tYXAoZSA9PiBuZXcgVGlja2V0U3RhdHVzKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NhbGx9IHNpbmdsZSBpbnN0YW5jZSBvZiBDYWxsIHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbmQoY2FsbCA9PiBjYWxsLmlkID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxscyByZWZlcmVuY2luZyBhIHNwZWNpZmljIHRpY2tldFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENhbGxzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbHRlcihjYWxsID0+IGNhbGwuX3RpY2tldHMuaW5kZXhPZih0aWNrZXRJZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBub3RlcyBmb3IgYSBjYWxsXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbE5vdGVzQnlDYWxsSWQoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuX2NhbGwgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIElEXG5cdCAqL1xuXHRnZXRTdGF0dXMoc3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuaWQgPT09IHN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIHNsdWdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBzdGF0dXNTbHVnXG5cdCAqL1xuXHRnZXRTdGF0dXNCeVNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0fSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0IHdpdGggdGlja2V0SWRcblx0ICovXG5cdGdldFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmluZCh0aWNrZXQgPT4gdGlja2V0LmlkID09PSB0aWNrZXRJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldElkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0LnN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBvbmUgb2YgbWFueSBnaXZlbiBzdGF0dXNlc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBzdGF0dXNTbHVncyBBcnJheSBvZiBTdHJpbmdzJ3MgcmVwcmVzZW50aW5nIHN0YXR1cyBzbHVnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBvbmUgb2YgbWFueSBnaXZlbiBTdGF0dXMnc1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnSW4oc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0cy5zbGljZSgwKTtcblxuXHRcdGZvciAobGV0IGkgPSB0aWNrZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZih0aWNrZXRzW2ldLnN0YXR1cy5zbHVnKSA9PT0gLTEpIHRpY2tldHMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aWNrZXRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXRzIHJlZmVyZW5jZWQgaW4gYSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyByZWZlcmVuY2VkIGluIGEgQ2FsbFxuXHQgKi9cblx0Z2V0VGlja2V0c0Zyb21DYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuX2NhbGxzLmluZGV4T2YoY2FsbElkKSA+IC0xKTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZChzdGFmZklkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZCB8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhzdGFmZklkcykge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRcdHRpY2tldHMgICAgICAgICAgICA9IHRoaXMudGlja2V0cyxcblx0XHRcdHJlc3VsdCAgICAgICAgICAgICA9IHt9O1xuXG5cdFx0c3RhZmZJZHMuZm9yRWFjaChzdGFmZklkID0+IHtcblx0XHRcdHJlc3VsdFtzdGFmZklkXSA9IHRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkXG5cdFx0XHRcdFx0XHR8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldE15VGlja2V0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBvcGVyYXRvciBvciBzcGVjaWFsaXN0IHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG8uXG5cdCAqXG5cdCAqIElmIGFuIG9wZXJhdG9yIGlzIG5vdCBhc3NpZ25lZCwgdGhlbiB0aGUgRXhwZXJ0aXNlVHlwZVN0YWZmIHdpbGxcblx0ICogYmUgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtFbXBsb3llZX0gRW1wbG95ZWUgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpIHtcblx0XHRpZiAodGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCkgcmV0dXJuIHRpY2tldC5hc3NpZ25lZF90b19vcGVyYXRvcjtcblxuXHRcdHJldHVybiB0aWNrZXQuZXhwZXJ0aXNlX3R5cGVfc3RhZmYuc3RhZmY7IC8vIG9ubHkgdXNlIGV4cGVydGlzZV90eXBlX3N0YWZmIGlmIHRoZXJlIGlzIG5vIGFzc2lnbmVkIG9wZXJhdG9yXG5cdH1cblxuXHQvKipcblx0ICogSWYgdGlja2V0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluXG5cdCAqIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gSWYgYXNzaWduZWQgdG8gc2VsZlxuXHQgKi9cblx0aXNUaWNrZXRBc3NpZ25lZFRvU2VsZih0aWNrZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkgPT09IHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCk7IFxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1cyB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldFN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0X3N0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXRTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXRTdGF0dXMgd2l0aCB0aWNrZXRTdGF0dXNJZFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzKHRpY2tldFN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmluZCh0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLmlkID09PSB0aWNrZXRTdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXNlcyBmb3IgYSB0aWNrZXRcblx0ICpcblx0ICogQHBcblx0ICovXG5cdGdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbHRlcih0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLl90aWNrZXQgPT09IHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNvbW1lbnQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjb21tZW50SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjb21tZW50IHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY29tbWVudElkXG5cdCAqL1xuXHRnZXRDb21tZW50KGNvbW1lbnRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50LmlkID09PSBjb21tZW50SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29tbWVudHNcblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIENvbW1lbnQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDb21tZW50c0J5SWRzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGlkcy5pbmRleE9mKGNvbW1lbnQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdGlja2V0cyBhc3NvY2lhdGVkIHdpdGggYW4gZXhwZXJ0aXNlIHR5cGUgc3RhZmZcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVTdGFmZklkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgc3RhZmYgdG8gZmluZCB0aWNrZXRzIGZvclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEFsbCBtYXRjaGluZyB0aWNrZXRzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0dGlja2V0SWRzICAgICAgPSBbXS5jb25jYXQoLi4uZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gZS50aWNrZXRzKSk7IC8vIG1vdmUgYWxsIG9mIGV4cGVydGlzZVR5cGVzW2ldLnRpY2tldHMgaW50byBhIHNpbmdsZSBhcnJheVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcyk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHRpY2tldHMgb24gYSBwcm9wZXJ0eSBmb3IgYSBwcm92aWRlZCBzZWFyY2ggcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0ge0FycmF5fSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHNhdGlzZnlpbmcgdGhlIHNlYXJjaCBjb25kaXRpb25cblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy50aWNrZXRzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGNvbGxlY3Rpb24gb2YgdGlja2V0cyBieSB0aGVpciBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gaWRzIFRoZSBJRHMgb2YgdGhlIHJlcXVlc3RlZCB0aWNrZXRzIFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5VGlja2V0SURzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiBpZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFbXBsb3llZSBmcm9tIFwiLi9FbXBsb3llZVwiO1xuXG4vKipcbiAqIFN0YWZmTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGFmZlxuICogY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFN0YWZmTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGFmZiAgICAgICA9IGFwaS5zdGFmZi5tYXAoZSA9PiBuZXcgRW1wbG95ZWUoZSkpO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgPSBhcGkuZGVwYXJ0bWVudHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBlbXBsb3llZSB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIGVtcGxveWVlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RW1wbG95ZWV9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maW5kKGVtcGxveWVlID0+IGVtcGxveWVlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGVtcGxveWVlcyB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgb2YgYSBwZXJtaXNzaW9uXG5cdCAqXG5cdCAqIEBwYXJhbSBwZXJtaXNzaW9uIFRoZSBwZXJtaXNzaW9uIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcGVybWlzc2lvbiAodHJ1ZS9mYWxzZSkgZm9yIHdoZXRoZXIgdGhlIHBlcm1pc3Npb24gaXMgZ3JhbnRlZFxuXHQgKi9cblx0Z2V0RW1wbG95ZWVzV2l0aFBlcm1pc3Npb24ocGVybWlzc2lvbiwgdmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maWx0ZXIoZW1wbG95ZWUgPT4gZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dID09IHZhbHVlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqXG5cdCAqIEBwYXJhbSBhc0VtcGxveWVlIG1ldGhvZCByZXR1cm5zIElEIGJ5IGRlZmF1bHQgb3IgRW1wbG95ZWUgaWYgdHJ1dGh5XG5cdCAqL1xuXHRjdXJyZW50VXNlcihhc0VtcGxveWVlID0gZmFsc2UpIHtcblx0XHRsZXQgaWQgPSAxOyAvLyBUT0RPOiBnZXQgdXNlciBmcm9tIFdQXG5cblx0XHQvLyBHZXQgRW1wbG95ZWUgd2l0aCBJRFxuXHRcdGlmIChhc0VtcGxveWVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoaWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNwZWNpYWxpc3RzIHdobyBzcGVjaWFsaXNlIGluIGEgY2VydGFpbiBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGZpbmQgZW1wbG95ZWVzIGZvclxuXHQgKi9cblx0Z2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdGxldCBzdGFmZiAgPSB0aGlzLnN0YWZmLFxuXHRcdCAgICBmaWx0ZXIgPSBpZCA9PiBlbXBsb3llZSA9PiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihpZCkgPiAtMTtcblxuXHRcdGlmICh0eXBlb2YgZXhwZXJ0aXNlVHlwZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0bGV0IG91dHB1dCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpZCBvZiBleHBlcnRpc2VUeXBlKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0YWZmLmZpbHRlcihmaWx0ZXIoaWQpKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdGFmZi5maWx0ZXIoZmlsdGVyKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhc3NlZCBlbXBsb3llZSBoYXMgdGhlIHBhc3NlZCBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBpbnNwZWN0XG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBsb29rIGZvclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZW1wbG95ZWUgaGFzIHRoZSBwcm9ibGVtIHR5cGUgYXMgYSBzcGVjaWFsaXNtXG5cdCAqL1xuXHRoYXNTcGVjaWFsaXNtKGVtcGxveWVlLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoZXhwZXJ0aXNlVHlwZUlkKSA+IC0xO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBhbGwgZW1wbG95ZWVzIGZvciB0aGUgZ2l2ZW4gcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJucyBBbGwgbWF0Y2hpbmcgcmVzdWx0cyB0byB0aGUgcXVlcnlcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5zdGFmZiwgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlIGZyb20gXCIuL0V4cGVydGlzZVR5cGVcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlU3RhZmYgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVN0YWZmXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZXhwZXJ0aXNlIHR5cGVzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gYXBpLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlKGUpKTtcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGFwaS5leHBlcnRpc2VUeXBlU3RhZmYubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGVTdGFmZihlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGFsbCBFeHBlcnRpc2VUeXBlJ3Mgd2l0aCBubyBwYXJlbnQgKGluIHRoZSBmaXJzdCBjb2x1bW4pXG5cdCAqXG5cdCAqIEByZXR1cm4ge0FycmF5fVxuXHQgKi9cblx0Z2V0Um9vdEV4cGVydGlzZVR5cGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuX3BhcmVudCA9PSBudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGV9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbmQoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLmlkID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBFeHBlcnRpc2VUeXBlcyB3aXRoIElEcyBmcm9tIGFuIEFycmF5IG9mIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBleHBlcnRpc2VUeXBlSWRzIEFycmF5IG9mIEludGVnZXJzIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkJ3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGVzIHNhdGlzZnlpbmcgdGhlIGNvbmRpdGlvblxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZUlkcykge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGVJZHMuaW5kZXhPZihleHBlcnRpc2VUeXBlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbHRlcihleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgb3JkZXJlZCBhcnJheSBvZiBwYXJlbnRzIG9mIGFuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGUgdG8gZmluZCBwYXJlbnRzIGZyb21cblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGUgcGFyZW50cywgYW5kIHRoZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZSxcblx0XHRcdGV4cGVydGlzZVR5cGVzICAgICAgPSBbZXhwZXJ0aXNlVHlwZVBhcmVudF07XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5wYXJlbnQ7XG5cblx0XHRcdGlmIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMucHVzaChleHBlcnRpc2VUeXBlUGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXhwZXJ0aXNlVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgd2l0aCBhbiBleGFjdFxuXHQgKiBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmIGFuZCBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlIElEIHBhaXJcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGVcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gbnVsbCwgb3IgdGhlIHJlY29yZCBkZXNpcmVkXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQoZXhwZXJ0aXNlVHlwZUlkLCBzdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgPT09IHN0YWZmSWQgJiYgZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgYnkgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlU3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuaWQgPT09IGV4cGVydGlzZVR5cGVTdGFmZklkKSB8fCBudWxsO1xuXHR9XG5cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLmV4cGVydGlzZVR5cGVzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwiLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQWJzdHJhY3QgY2xhc3MgZXh0ZW5kZWQgYnkgYWxsIG1hbmFnZXJzLFxuICogY29udGFpbnMgbWV0aG9kcyB0aGF0IG1heSBiZSB1c2VmdWwgdG8gdGhlIG1hbmFnZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly9cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlYXJjaCBhcnJheSBvZiBlbGVtZW50cyBmb3IgcXVlcnkgaW4gZ2l2ZW4gcHJvcGVydHkgbmFtZXNcblx0ICogXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBBcnJheSBvZiBvYmplY3RzIHRvIGJlIHNlYXJjaGVkIHRocm91Z2hcblx0ICogQHBhcmFtIHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKi9cblx0c2VhcmNoKGVsZW1lbnRzID0gW10sIHF1ZXJ5ID0gXCJcIiwgcHJvcGVydGllcyA9IFtdKSB7XG5cdFx0cXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpc2UgcXVlcnkgKGFuZCBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSBsYXRlcilcblxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWwgPT4geyAvLyBHZXQgYWxsIGVsZW1lbnRzXG5cdFx0XHRyZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3AgPT4geyAvLyBDaGVjayBwcm9wZXJ0aWVzIHVudGlsIG1hdGNoIGlzIGZvdW5kXG5cdFx0XHRcdGlmIChTdHJpbmcoZWxbcHJvcF0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSByZXR1cm4gdHJ1ZTsgLy8gRGV0ZXJtaW5lIGlmIHByb3BlcnR5IGlzIGEgbWF0Y2ggZm9yIHF1ZXJ5XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL01hbmFnZXIuanMiLCIvKipcbiAqIER5bmFtaWNQYWdlXG4gKlxuICogRXh0ZW5kZWQgYnkgZXZlcnkgcGFnZSwgZS5nLiBUaWNrZXRQYWdlLlxuICogQ29udGFpbnMgZnVuY3Rpb25zIHRoYXQgYXJlIHJlcGVhdGVkIG9mdGVuIGFtb25nXG4gKiBwYWdlcywgc3VjaCBhcyB1cGRhdGluZyB0YWJsZXMgb3IgdXBkYXRpbmcgdGhlIG5hdmJhclxuICovXG5jbGFzcyBEeW5hbWljUGFnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwYWdlIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3RvcnNcblx0ICogdG8gZGVmaW5lIHRoZSBib3VuZHMgb2YgdGhlIHBhZ2UsIGluIGNhc2VzIHdoZXJlIHRoaXMgRHluYW1pY1BhZ2Vcblx0ICogaXMgbm90IHRoZSBvbmx5IHBhZ2Ugb24gdGhlIHNjcmVlbiwgc3VjaCBhcyBpZiBhIHBhZ2UgaXMgYmVpbmdcblx0ICogZGlzcGxheWVkIGluIGEgbW9kYWwuXG5cdCAqXG5cdCAqIE5vdCBwcm92aWRpbmcgYW55IHNlbGVjdG9ycyB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhlXG5cdCAqIG1haW4gc2VsZWN0b3JzIGZvciB0aGUgZW50aXJlIHNjcmVlbiwgc3VjaCB0aGF0XG5cdCAqIHRoaXMgcGFnZSBiZWNvbWVzIHRoZSBtYWluIHBhZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gc2VjdGlvblNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIG1haW4gc2VjdGlvbiBjb250YWluaW5nIHRhYmxlIHZpZXdcblx0ICogQHBhcmFtIHRhYmxlU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0YWJsZSB3aXRoaW4gcHJldmlvdXMgc2VjdGlvblxuXHQgKiBAcGFyYW0gbmF2U2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBuYXZpZ2F0aW9uIGJhciBzaG93biBhdCB0b3Agb2Ygc2VjdGlvblxuXHQgKiBAcGFyYW0gZGV0YWlsU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBzaW5nbGUgdmlldyBkZXRhaWwgc2hvd24gZm9yIGFuIGluZGl2aWR1YWwgcm93XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2VjdGlvblNlbGVjdG9yID0gXCIjbGlzdC12aWV3XCIsXG5cdFx0dGFibGVTZWxlY3RvciA9IFwiI3RhYmxlLXNlY3Rpb25cIixcblx0XHRuYXZTZWxlY3Rvcixcblx0XHRkZXRhaWxTZWxlY3RvclxuXHR9ID0ge30pIHtcblx0XHR0aGlzLnNlY3Rpb25TZWxlY3RvciA9IHNlY3Rpb25TZWxlY3Rvcjtcblx0XHR0aGlzLnRhYmxlU2VsZWN0b3IgPSB0YWJsZVNlbGVjdG9yO1xuXHRcdC8vIFNldCBuYXZpZ2F0aW9uIHNlbGVjdG9yIHRvIGZpcnN0IGNvbXBvbmVudCBvZiBzZWN0aW9uIHNlbGVjdG9yIHdpdGgg4oCYLW5hduKAmSBhcHBlbmRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgQ1NTIHNlbGVjdG9yXG5cdFx0dGhpcy5uYXZTZWxlY3RvciA9IG5hdlNlbGVjdG9yID8gbmF2U2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1uYXZcIiA6IFwiLnNpZGUtbmF2LWJhci1uZXN0ZWRcIik7XG5cdFx0dGhpcy5kZXRhaWxTZWxlY3RvciA9IGRldGFpbFNlbGVjdG9yID8gZGV0YWlsU2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1kZXRhaWxcIiA6IFwiI3NpbmdsZS12aWV3XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGl0bGUgYmFyIG9mIHRoZSBzaW5nbGUgdmlldyB0byB0aGUgZ2l2ZW4gc3RyaW5nXG5cdCAqIENBVVRJT046IERvZXMgbm90IHBlcmZvcm0gZXNjYXBpbmcgb2YgaW5wdXQgc3RyaW5nLCBkbyBub3QgcGFzc1xuXHQgKiB1c2VyIGNvbnRlbnQgdG8gdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSBodG1sIEhUTUwgdG8gc2V0IHRoZSBzaW5nbGUgdmlldyB0aXRsZSB0b1xuXHQgKi9cblx0dXBkYXRlU2luZ2xlVmlld05hdmJhcihodG1sKSB7XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKCcudG9wLW5hdiBoNCcpLmh0bWwoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIFwiTG9hZGluZ+KAplwiIHNwbGFzaCBzY3JlZW4gaWYgaXQncyBzaG93blxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFwiTm8gUmVzdWx0c+KAplwiIHNwbGFzaCBzY3JlZW5cblx0ICogc2hvdWxkIGJlIHNob3duIG9yIG5vdC5cblx0ICpcblx0ICogWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgdXNpbmcgXCJhcHBlbmRUYWJsZVwiXG5cdCAqL1xuXHR1cGRhdGVTcGxhc2hTY3JlZW4obmF2VGV4dCA9IG51bGwpIHtcblx0XHQvLyBHZXQgdGFibGUgZWxlbWVudCB0byBpbnNwZWN0IGNvbnRlbnRzXG5cdFx0dmFyICR0YWJsZSA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHRcdFx0Ly8gR2V0IG51bWJlciBvZiByZXN1bHRzIHdpdGhpbiB0YWJsZSBjdXJyZW50bHkgYmVpbmcgc2hvd25cblx0XHRcdFx0Ly8gVGhpcyBpcyBub3QgZXF1YWwgdG8gdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZSBIVE1MXG5cdFx0XHRcdC8vIHNpbmNlIHNvbWUgdGFibGUgcm93cyBtYXkgYmUgaGlkZGVuLCB3aGljaCBuZWVkIHRvIGJlXG5cdFx0XHRcdC8vIGRpc2NvdW50ZWQgZnJvbSB0aGUgdG90YWwgY291bnQuXG5cdFx0ICAgIHJlc3VsdHNDb3VudCA9ICR0YWJsZS5maW5kKCd0Ym9keSB0cicpLmZpbHRlcigoaSwgZWwpID0+ICEkKGVsKS5oYXNDbGFzcyhcInJvdy1oaWRkZW5cIikpLmxlbmd0aCxcblx0XHRcdFx0Ly8gR2V0IHNwbGFzaCBzY3JlZW4gZWxlbWVudCB3aGljaCBtYXkgYmUgYmVpbmcgc2hvd24gaW5zdGVhZCBvZiB0YWJsZVxuXHRcdCAgICAkc3BsYXNoU2NyZWVuID0gJCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnNwbGFzaC1zY3JlZW4nKTtcblxuXHRcdC8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXJlIGFyZSByZXN1bHRzLCB0aGUgc3BsYXNoIHNjcmVlbiBvciB0YWJsZSBuZWVkcyB0byBiZSBzaG93blxuXHRcdC8vIGFuZCB0aGUgb3RoZXIgc3dhcHBlZCBvdXQgdXNpbmcgQ1NTXG5cdFx0dmFyIFskc2hvdywgJGhpZGVdID0gcmVzdWx0c0NvdW50ID8gWyR0YWJsZSwgJHNwbGFzaFNjcmVlbl0gOiBbJHNwbGFzaFNjcmVlbiwgJHRhYmxlXTtcblx0XHQkaGlkZS5hZGRDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblx0XHQkc2hvdy5yZW1vdmVDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblxuXHRcdC8vIFRoZSBtYWluIHRvcCBiYXIgZm9yIHRoZSBsaXN0IHZpZXcgY29udGFpbnMgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBiZWluZyBzaG93biBpbiB0aGUgdGFibGVcblx0XHRpZiAoIW5hdlRleHQpIHtcblx0XHRcdC8vIFNldCBuYXZiYXIgdGV4dCBhcyBudW1iZXIgb2YgaXRlbXMgaW4gdGFibGUgdGhlbiBhcHBlbmQgY3VycmVudGx5IHNlbGVjdGVkIGZpbHRlclxuXHRcdFx0bmF2VGV4dCA9IHJlc3VsdHNDb3VudCArIFwiIFwiICsgJCh0aGlzLm5hdlNlbGVjdG9yKS5maW5kKFwibGkuYWN0aXZlXCIpLmZpcnN0KCkudGV4dCgpLnJlcGxhY2UoXCJBbGwgXCIsIFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIElmIHVuYWJsZSB0byBvYnRhaW4gcm93cyBjb3VudCwgc2hvdyBcIkxvYWRpbmfigKZcIlxuXHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmNsb3Nlc3QoXCJzZWN0aW9uXCIpLmZpbmQoXCIudG9wLW5hdiBoNFwiKS50ZXh0KHJlc3VsdHNDb3VudCAhPT0gdW5kZWZpbmVkID8gbmF2VGV4dCA6IFwiTG9hZGluZ+KAplwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgcm93IGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKiB1c2luZyBkYXRhIGZyb20gXCJvYmplY3RcIi5cblx0ICpcblx0ICogVGhlIHByb3BlcnR5IG5hbWVzIHNob3VsZCBjb3JyZXNwb25kIHdpdGggdGhlIFwic2x1Z1wiXG5cdCAqIGF0dHJpYnV0ZSBpbiB0YWJsZSBoZWFkZXIuXG5cdCAqXG5cdCAqIE5PVEU6IFRoaXMgYXNzdW1lcyB0aGUgb2JqZWN0IGhhcyBhbiBJRCBhdHRyaWJ1dGUuIEluY2x1ZGUgaXRcblx0ICogZXZlbiBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzaG93IGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIGRhdGEgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHRhYmxlXG5cdCAqIHNwbGFzaHNjcmVlbiBvbiB5b3VyIHBhZ2Vcblx0ICovXG5cdGFwcGVuZFRhYmxlUm93KG9iamVjdCkge1xuXHRcdHZhciAkdGFibGVTZWN0aW9uID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdCAgICAkdGFibGVIZWFkICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0aGVhZCB0cicpLFxuXHRcdCAgICAkdGFibGVCb2R5ICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0Ym9keScpLFxuXHRcdCAgICAkbmV3Um93ICAgICAgID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xuXG5cdFx0Ly8gRG9uJ3QgYWRkIHRoZSBzYW1lIHJvdyB0d2ljZVxuXHRcdGlmICgkdGFibGVCb2R5LmNoaWxkcmVuKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgb2JqZWN0LmlkICsgXCJcXFwiXVwiKS5sZW5ndGggPiAwKSByZXR1cm47XG5cblx0XHQvLyBTZXQgSUQgb24gcm93IHRvIHJlZmVyZW5jZSBsYXRlclxuXHRcdCRuZXdSb3dbMF0uZGF0YXNldC5yb3dpZCA9IG9iamVjdC5pZDtcblx0XHQkbmV3Um93LnRvZ2dsZUNsYXNzKFwiaGlnaGxpZ2h0XCIsIG9iamVjdC5pZCA9PSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdFx0JHRhYmxlSGVhZC5jaGlsZHJlbigndGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNsdWcgPSB0aGlzLmRhdGFzZXQuc2x1ZywgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cblx0XHRcdGlmIChzbHVnID09PSAnZXllJykgeyAvLyB0aGUgb24taG92ZXIgZXllIGludmlzaWJsZSByb3dcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPic7XG5cdFx0XHR9IGVsc2UgaWYgKHNsdWcgJiYgc2x1Zy5pbmNsdWRlcyhcImFjY2Vzc1wiKSkge1xuXHRcdFx0XHQvLyBCb29sZWFuIHZhbHVlIHN1cHBvcnRcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSA/IHRoaXMuaW5uZXJIVE1MIDogXCLCt1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSAhPT0gdW5kZWZpbmVkID8gb2JqZWN0W3NsdWddIDogXCLigJRcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0JG5ld1Jvdy5hcHBlbmQodGQpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdCR0YWJsZUJvZHkuYXBwZW5kKCRuZXdSb3cpO1xuXG5cdFx0cmV0dXJuICRuZXdSb3dbMF07XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJzIHRoZSBkYXRhIGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKi9cblx0Y2xlYXJUYWJsZSgpIHtcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2hvdyBkZXRhaWwgcGFnZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSB0YWJsZSByb3cgdG8gYmUgc2hvd24gaW4gdGhlIHNpbmdsZSB2aWV3XG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkID0gbnVsbCkge1xuXHRcdC8vIE5vIG5lZWQgdG8gY2hlY2sgZm9yIG51bGwgYXMgbm8gcm93cyB3aWxsIG1hdGNoIGlmIG5vIElEIHBhc3NlZFxuXHRcdC8vIC5zaWJsaW5ncyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBlbGVtZW50IGl0c2VsZiBzbyBjYW4gYmUgY2hhaW5lZCBhZnRlciBmaW5kaW5nIGhpZ2hsaWdodCByb3cgZmlyc3Rcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQucm93aWQgPT0gaWQpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHRcblx0XHQvLyBObyBuZWVkIHRvIHNldCBzdHlsZSB1c2luZyBKUyBoZXJlLCBDU1MgaGFuZGxlcyBmbGV4XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS51bndyYXAoXCJkaXZcIilcblx0XHRcdC8vIENsb3NlIGJ1dHRvbiBvbiBoaWRlXG5cdFx0XHQuZmluZChcIltkYXRhLWFjdGlvbj1cXFwiY2xvc2VcXFwiXVwiKS5jbGljaygoKSA9PiB0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKSk7XG5cdFx0XG5cdFx0aWYgKGlkID4gLTEpIGxvY2F0aW9uLmhhc2ggPSBwYXJzZUludChpZCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBIaWRlIGRldGFpbCBwYWdlIHNob3duIHdpdGggc2hvd0RldGFpbFxuXHQgKi9cblx0aGlkZVRhYmxlUm93RGV0YWlscygpIHtcblx0XHQvLyBEZXNlbGVjdCBhbGwgcm93c1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0Ly8gRmlsdGVyIHRvIGNoZWNrIGlmIGFscmVhZHkgaGlkZGVuLCBkb24ndCBoaWRlIGFnYWluXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maWx0ZXIoKGksIGVsKSA9PiAkKGVsKS5wYXJlbnQoXCJkaXZcIikubGVuZ3RoID09PSAwKS53cmFwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXHRcdFxuXHRcdGxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYSBzZWxlY3QgZWxlbWVudCB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuXHQgKiBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gYSBkcm9wZG93biBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSAkc2VsZWN0IEEgcmVmZXJlbmNlIHRvIHRoZSBzZWxlY3QgZWxlbWVudCB0byBiZSBmaWxsZWRcblx0ICogQHBhcmFtIGRlZmF1bHRUZXh0IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzZWxlY3QgZWxlbWVudFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgTGlzdCBvZiBlbGVtZW50cyB0byBiZSBhZGRlZCBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb21cblx0ICogQHBhcmFtIGRlZmF1bHRPcHRpb25JZCBJRCBvZiBhIGRlZmF1bHQgb3B0aW9uIGZyb20gdGhlIGVsZW1lbnRzIGdpdmVuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgb2YgdGhlIHNlbGVjdCBmaWVsZCB0byBhY2Nlc3Mgc2VsZWN0ZWQgaXRlbSB3aXRoXG5cdCAqIEBwYXJhbSBnZXRBZGRpdGlvbmFsRGV0YWlscyBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGFkZGl0aW9uYWwgZGV0YWlscyB0byBiZSBzaG93biBmb3IgY3VycmVudCBpdGVtXG5cdCAqL1xuXHRwb3B1bGF0ZVNlbGVjdEZpZWxkKCRzZWxlY3QsIGRlZmF1bHRUZXh0LCBlbGVtZW50cywgZGVmYXVsdE9wdGlvbklkID0gbnVsbCwgcHJvcGVydHkgPSAnbmFtZScsIGdldEFkZGl0aW9uYWxEZXRhaWxzID0gbnVsbCkge1xuXHRcdC8vIERlZmF1bHQgZW1wdHkgY29udGVudCBmb3IgaW5wdXRcblx0XHRsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihkZWZhdWx0VGV4dCwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0b3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHQkc2VsZWN0LmVtcHR5KCkuYXBwZW5kKG9wdGlvbik7XG5cdFx0XG5cdFx0Ly8gRWFjaCBvcHRpb24gdG8gYmUgc2VsZWN0ZWQgZnJvbVxuXHRcdGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XG5cdFx0XHRpZiAoZ2V0QWRkaXRpb25hbERldGFpbHMgIT09IG51bGwpIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZ2V0QWRkaXRpb25hbERldGFpbHMoZSkgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRzZWxlY3Quc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBUaGUgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlYXJjaCB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSBvYmplY3RDYWxsYmFjayBhIGNhbGxiYWNrIHJldHVybmluZyBhbiBvYmplY3QgKHRoZSByb3cgc3RydWN0dXJlKVxuXHQgKiBAcGFyYW0gc2VhcmNoS2V5cyB0aGUgcHJvcGVydGllcyBpbiBvYmplY3RDYWxsYmFjayB0byBoaWdobGlnaHRcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgZWxlbWVudHMgPSBbXSwgb2JqZWN0Q2FsbGJhY2ssIHNlYXJjaEtleXMgPSBbXSkge1xuXHRcdGxldCBwYWdlID0gdGhpcztcblxuXHRcdHBhZ2UuY2xlYXJUYWJsZSgpO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0dmFyIG9iamVjdCA9IG9iamVjdENhbGxiYWNrKGVsKTtcblxuXHRcdFx0XHRzZWFyY2hLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IFN0cmluZyhvYmplY3Rba2V5XSkucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHF1ZXJ5ICsgJyknLCAnaWcnKSwgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHF1ZXJ5ID09PSAkKFwiLnNlYXJjaC1maWVsZCBpbnB1dFwiKS52YWwoKSkge1xuXHRcdFx0XHRcdHBhZ2UuYXBwZW5kVGFibGVSb3cob2JqZWN0KTtcblx0XHRcdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgJHtlbGVtZW50cy5sZW5ndGh9IHJlc3VsdCR7ZWxlbWVudHMubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGBObyByZXN1bHRzIGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgYSBtZXNzYWdlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIG92ZXIgYWxsIGVsZW1lbnRzLlxuXHQgKiBIaWRlIGFmdGVyIDYgc2Vjb25kcywgb3IgY29uZmlndXJhYmxlLlxuXHQgKlxuXHQgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBzdHJpbmcgdG8gYmUgc2hvd24gaW4gdGhlIG1lc3NhZ2UgYm94LlxuXHQgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBtZXNzYWdlLCBzdWNoIGFzIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJcblx0ICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzIGZvciB0aGUgbWVzc2FnZSB0byBiZSBzaG93biBmb3IuXG5cdCAqL1xuXHRzdGF0aWMgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cnJlZFwiLCB0eXBlID0gXCJkYW5nZXJcIiwgZHVyYXRpb24gPSA2KSB7XG5cdFx0Ly8gT25seSBzaG93IG9uZSBtZXNzYWdlIGF0IGEgdGltZVxuXHRcdCQoXCIjYWxlcnQtbm90aWZpY2F0aW9uXCIpLnJlbW92ZSgpO1xuXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRcblx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1zZy5pZCA9IFwiYWxlcnQtbm90aWZpY2F0aW9uXCI7XG5cdFx0bXNnLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiLCBgYWxlcnQtJHt0eXBlfWAsIFwiYWxlcnQtbm90aWZpY2F0aW9uXCIpO1xuXHRcdG1zZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYWxlcnRcIik7IC8vIEFjY2Vzc2liaWxpdHlcblx0XHQvLyBTZXQgY29udGVudCBhbmQgc2hvdyBvbiBzY3JlZW5cblxuXHRcdG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtc2cpO1xuXG5cdFx0Ly8gSGlkZSBhZnRlciBkdXJhdGlvblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gbXNnLnJlbW92ZSgpLCBkdXJhdGlvbiAqIDEwMDApO1xuXG5cdFx0Ly8gQ2xpY2sgdG8gaGlkZSBtZXNzYWdlXG5cdFx0JChtc2cpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvRHluYW1pY1BhZ2UuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi9EZXZpY2VcIjtcblxuLyoqXG4gKiBIYXJkd2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZGV2aWNlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBIYXJkd2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkd2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZGV2aWNlcyA9IGFwaS5kZXZpY2VzLm1hcChlID0+IG5ldyBEZXZpY2UoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIFR5cGVzIGluIHRhYmxlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRoaXMuZGV2aWNlcy5tYXAodCA9PiB0LnR5cGUpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgTWFrZXMgZm9yIGEgc3BlY2lmaWVkIFR5cGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVNYWtlc09mVHlwZSh0eXBlKSB7XG5cdFx0bGV0IGRldmljZXNCeVR5cGUgPSB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlKTtcblxuXHRcdHJldHVybiBbLi4ubmV3IFNldChkZXZpY2VzQnlUeXBlLm1hcCh0ID0+IHQubWFrZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGRldmljZXMgd2l0aCBhIHNwZWNpZmllZCBUeXBlIGFuZCBNYWtlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0Z2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUgJiYgZGV2aWNlLm1ha2UgPT0gbWFrZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkZXZpY2VzIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgZGV2aWNlcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXREZXZpY2VzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBpZHMuaW5kZXhPZihkZXZpY2UuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgZGV2aWNlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgZGV2aWNlIFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZGV2aWNlID0+IGRldmljZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkZXZpY2Ugd2l0aCB0aGUgZ2l2ZW4gc2VyaWFsIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gc2VyaWFsTnVtYmVyIFRoZSBzZXJpYWwgbnVtYmVyIG9mIHRoZSBkZXZpY2UgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtEZXZpY2V9XG5cdCAqL1xuXHRnZXREZXZpY2VCeVNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLnNlcmlhbF9ubyA9PT0gc2VyaWFsTnVtYmVyKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4vUHJvZ3JhbVwiO1xuXG4vKipcbiAqIFNvZnR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBzb2Z0d2FyZSBwcm9ncmFtcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBTb2Z0d2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2Z0d2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMucHJvZ3JhbXMgPSBhcGkucHJvZ3JhbXMubWFwKGUgPT4gbmV3IFByb2dyYW0oZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHByb2dyYW1zIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgcHJvZ3JhbXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0UHJvZ3JhbXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmlsdGVyKHByb2dyYW0gPT4gaWRzLmluZGV4T2YocHJvZ3JhbS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKiBAcmV0dXJucyB7UHJvZ3JhbX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbmQocHJvZ3JhbSA9PiBwcm9ncmFtLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCIvLyBTaW5jZSBuYXYgZWxlbWVudCBpcyBwZXJzaXN0ZWQgYmV0d2VlbiBwYWdlcywgd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGFjdGl2ZSBidXR0b25cbiQoXCIjbmF2XCIpLm9uKFwiY2xpY2tcIiwgXCJ1bCBsaSBhXCIsIGUgPT4ge1xuXHQkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUb29sdGlwcyBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggYSByZWxldmFudCB0b29sdGlwIEhUTUwgYXR0cmlidXRlXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4vLyBEYXRlL3RpbWUgcGlja2VyIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCByZWxldmFudCBjbGFzc1xuJCgnLnRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcigpO1xuXG4vLyBDcmVhdGUgbmV3IGVtcGxveWVlIHdoZW4gc2VhcmNoaW5nIGZvciBub24tZXhpc3RlbnQgYXNzaWduZWVcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdsaS5uby1yZXN1bHRzJywgZnVuY3Rpb24oZSkge1xuXHR2YXIgbmV3VmFsdWUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tbWVudS5vcGVuXCIpLmNoaWxkcmVuKFwiLmJzLXNlYXJjaGJveFwiKS5jaGlsZHJlbihcImlucHV0XCIpLnZhbCgpLFxuXHQgICAgJG1vZGFsICAgPSAkKCcjbmV3LXN0YWZmLW1vZGFsJyk7XG5cblx0JG1vZGFsLm1vZGFsKCdzaG93Jyk7XG5cblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJzdGFmZi5uYW1lXCJdJykudmFsKG5ld1ZhbHVlKTtcblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJldmVudF90YXJnZXRcIl0nKS52YWwoJCh0aGlzKS5jbG9zZXN0KCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJ3NlbGVjdCcpLmF0dHIoJ25hbWUnKSk7IC8vIHdoZW4gdGhlIHN0YWZmIG1lbWJlciBpcyBjcmVhdGVkLCB0aGlzIGlzIHRoZSBpbnB1dCBmaWVsZCBpdCdsbCB1cGRhdGVcbn0pO1xuXG4kKCcjbmV3LXN0YWZmLW1vZGFsLCAjbmV3LXRpY2tldC1tb2RhbCwgI2ZvbGxvdy11cC1jYWxsLW1vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cdCQodGhpcykuZmluZCgnaW5wdXQsIHRleHRhcmVhJylcblx0XHQubm90KCcubm8tY2xlYXItb24tc2hvdycpXG5cdFx0LnZhbCgnJyk7XG5cblx0JCh0aGlzKS5maW5kKCcjYWNjb3JkaW9uIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpJykucmVtb3ZlKCk7XG5cblx0dmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHQkKHRoaXMpLmZpbmQoJy50aW1lcGlja2VyJykudmFsKCgnMCcgKyAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLycgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyAnLycgKyBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpICsgJyAnICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5yZW1vdmUtYWNjb3JkaW9uJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0fSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2hpZGUuYnMuY29sbGFwc2Ugc2hvdy5icy5jb2xsYXBzZScsICcjYWNjb3JkaW9uIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcblx0bGV0IGlzU2hvdyA9IGUudHlwZS5zcGxpdChcIi5cIilbMF0gPT09IFwic2hvd1wiO1xuXHQkKHRoaXMpLnNpYmxpbmdzKCcuY2FyZC1oZWFkZXInKS5maW5kKCcudmlldy1hY2NvcmRpb24nKS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi11cCcsICFpc1Nob3cpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLWRvd24nLCBpc1Nob3cpO1xufSk7XG5cbiQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXG4vLyBCb290c3RyYXAgU2VsZWN0IEZpeDogQWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gc2VsZWN0IGZpZWxkXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmJvb3RzdHJhcC1zZWxlY3RcIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUub3BlbicpLnRvZ2dsZSgpO1xufSk7XG5cbi8vIEJvb3RzdHJhcCBtb2RhbHMgZml4OiBhZGQgYmFjayBldmVudCBsaXN0ZW5lclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImJvZHk6bm90KFtkYXRhLXBhZ2U9XFxcInN0YWZmXFxcIl0pIFtkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiXVwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzLmRhdGFzZXQudGFyZ2V0KS5tb2RhbChcInNob3dcIik7XG59KTtcblxuZnVuY3Rpb24gYWRkSXRlbVRvUGlja2VyKHBpY2tlckVsZW1lbnQsIHZhbHVlLCBuYW1lKSB7XG5cdCQocGlja2VyRWxlbWVudCkuYXBwZW5kKG5ldyBPcHRpb24obmFtZSwgdmFsdWUpKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIG5hbWUpO1xufVxuXG52YXIgdmFsaWRhdGlvblRpbWVvdXQgPSB3aW5kb3cudmFsaWRhdGlvblRpbWVvdXQgPSBudWxsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9tYWluLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ29tbWVudFxuICpcbiAqIEEgY29tbWVudCBpcyBtYWRlIGFib3V0IGEgc3BlY2lmaWMgdGlja2V0LCBieVxuICogYSBzdGFmZiBtZW1iZXIuXG4gKiBcbiAqIENvbnRhaW5zIHRoZSBUaWNrZXQgdGhhdCBpdCBiZWxvbmdzIHRvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQ6IGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxfaWQ6IGNhbGwsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0Y29udGVudCxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGwgICAgICAgICAgICA9IGNhbGw7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7XG5cdFx0dGhpcy5jb250ZW50ICAgICAgICAgPSBjb250ZW50O1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCBhdXRob3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hdXRob3IpO1xuXHR9XG5cblx0c2V0IGF1dGhvcihhdXRob3IpIHtcblx0XHR0aGlzLl9hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRnZXQgY2FsbCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGwodGhpcy5fY2FsbCk7XG5cdH1cblxuXHRzZXQgY2FsbChjYWxsKSB7XG5cdFx0dGhpcy5fY2FsbCA9IGNhbGw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL0NvbW1lbnQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDYWxsXG4gKlxuICogRXZlcnkgdGltZSB0aGUgSGVscGRlc2sgaXMgY2FsbGVkLCB0aGlzIGlzIGNyZWF0ZWQuXG4gKiBBIGNhbGwgbWF5IGhhdmUgbXVsdGlwbGUgdGlja2V0cywgYSB0aWNrZXQgbWF5IGhhdmVcbiAqIG11bHRpcGxlIGNhbGxzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpbWUsXG5cdFx0Y2FsbGVyX2lkOiBjYWxsZXIsXG5cdFx0b3BlcmF0b3JfaWQ6IG9wZXJhdG9yLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpbWUgICAgID0gdGltZTtcblx0XHR0aGlzLmNhbGxlciAgID0gY2FsbGVyOyAgIC8vIElEIG9mIGNhbGxlciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yOyAvLyBJRCBvZiBvcGVyYXRvciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy50aWNrZXRzICA9IHRpY2tldHM7ICAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFRpY2tldCdzXG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IG9wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IG9wZXJhdG9yKG9wZXJhdG9yKSB7XG5cdFx0dGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0Zyb21DYWxsKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEVtcGxveWVlXG4gKlxuICogQW4gZW1wbG95ZWUgb2YgdGhlIGNvbXBhbnlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRlbWFpbCxcblx0XHRqb2JfdGl0bGU6IGpvYixcblx0XHRkZXBhcnRtZW50LFxuXHRcdHBob25lX251bWJlcjogcGhvbmUsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBzcGVjaWFsaXNtcyA9IFtdLFxuXHRcdG9wZXJhdG9yID0gZmFsc2UsXG5cdFx0c3BlY2lhbGlzdCA9IHNwZWNpYWxpc21zLmxlbmd0aCA+IDAsXG5cdFx0YW5hbHlzdCA9IGZhbHNlLFxuXHRcdGFkbWluID0gZmFsc2Vcblx0fSkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLmpvYiA9IGpvYjtcblx0XHR0aGlzLmRlcGFydG1lbnQgPSBkZXBhcnRtZW50Lm5hbWU7XG5cdFx0dGhpcy5fZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQuaWQ7XG5cdFx0dGhpcy5waG9uZSA9IHBob25lO1xuXHRcdHRoaXMuc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0XHR0aGlzLmFjY2VzcyA9IHtvcGVyYXRvciwgYW5hbHlzdCwgYWRtaW59O1xuXHRcdFxuXHRcdC8vIElmIHVzZXIgaXMgYW55IG90aGVyIHBlcm1pc3Npb24gdGhlbiByZWFkIGlzIGdyYW50ZWRcblx0XHR0aGlzLmFjY2Vzcy5yZWFkID0gdGhpcy5hY2Nlc3Mub3BlcmF0b3IgfHwgdGhpcy5hY2Nlc3MuYW5hbHlzdCB8fCB0aGlzLmFjY2Vzcy5hZG1pbiB8fCB0aGlzLmFjY2Vzcy5yZWFkb25seSB8fCBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgcmVhZCBhY2Nlc3MgdG8gdGhlIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzUmVhZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MucmVhZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhIGhlbHAgZGVzayBvcGVyYXRvclxuXHQgKi9cblx0Z2V0IGlzT3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLm9wZXJhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gYW5hbHl0aWNhbCBkYXRhIGFib3V0IHRoZSBoZWxwIGRlc2sgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNBbmFseXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hbmFseXN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGFuIGFkbWluaXN0cmF0b3Igb24gdGhlIGhlbHAgZGVza1xuXHQgKi9cblx0Z2V0IGlzQWRtaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFkbWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIEEgbGlzdCBvZiBwcm9ibGVtIHR5cGVzIHRoZSB1c2VyIGlzIGEgc3BlY2lhbGlzdCBvZlxuXHQgKi9cblx0Z2V0IHNwZWNpYWxpc21zKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9zcGVjaWFsaXNtcyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHNwZWNpYWxpc21zIFNldCB0aGUgbGlzdCBvZiBzcGVjaWFsaXNtcyBmb3IgdGhpcyBwZXJzb24gb24gdGhlIHN5c3RlbVxuXHQgKi9cblx0c2V0IHNwZWNpYWxpc21zKHNwZWNpYWxpc21zKSB7XG5cdFx0dGhpcy5fc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQcmVwYXJlIGRhdGEgZm9yIHNlbmRpbmcgdG8gQVBJIGVuZHBvaW50LiBUaGUgQVBJIGhhcyBkaWZmZXJlbnRcblx0ICogZGF0YSBrZXlzIHJlcHJlc2VudGluZyB0aGUgZGF0YSBhY2Nlc3NpYmxlIGluIHRoZSB0YWJsZXMsIHNvIG5ld1xuXHQgKiBkYXRhIGFuZCB1cGRhdGVzIHRvIGRhdGEgbXVzdCB1c2UgdGhlc2Uga2V5IG5hbWVzLlxuXHQgKiBAcGFyYW0gZGF0YSB0byBiZSBjb252ZXJ0ZWRcblx0ICogQHJldHVybnMgZGF0YSB3aXRoIHVwZGF0ZWQga2V5IG5hbWVzXG5cdCAqL1xuXHRzdGF0aWMgcHJlcGFyZURhdGEoZGF0YSA9IHt9KSB7XG5cdFx0ZGF0YS5qb2JfdGl0bGUgPSBkYXRhLmpvYjtcblx0XHRkYXRhLnBob25lX251bWJlciA9IGRhdGEucGhvbmU7XG5cdFx0ZGF0YS5leHBlcnRpc2VfdHlwZXMgPSBkYXRhLnNwZWNpYWxpc21zO1xuXHRcdGRhdGEuZGVwYXJ0bWVudF9pZCA9IGRhdGEuZGVwYXJ0bWVudDtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cdFx0XHRkYXRhW2tleV0gPSBkYXRhLmFjY2Vzc1trZXldID8gKDEgJiYgKGRhdGEuc3BlY2lhbGlzdCA9IDEpKSA6IDA7XG5cdFx0fVxuXHRcdGRhdGEuc3BlY2lhbGlzdCA9IGRhdGEuc3BlY2lhbGlzdCB8fCAwO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvRW1wbG95ZWUuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHBhcmVudF9pZDogcGFyZW50LFxuXHRcdGNoaWxkcmVuXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICA9IG5hbWU7XG5cdFx0dGhpcy5wYXJlbnQgICA9IHBhcmVudDtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47IC8vIElEIG9mIEV4cGVydGlzZVR5cGUncywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBFeHBlcnRpc2VUeXBlJ3Ncblx0fVxuXG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fcGFyZW50KTtcblx0fVxuXG5cdHNldCBwYXJlbnQocGFyZW50KSB7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0Z2V0IGNoaWxkcmVuKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9jaGlsZHJlbik7XG5cdH1cblxuXHRzZXQgY2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZS5qcyIsImltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVTdGFmZiB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzdGFmZl9pZDogc3RhZmZJZCxcblx0XHRleHBlcnRpc2VfdHlwZV9pZDogZXhwZXJ0aXNlVHlwZUlkLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnN0YWZmICAgICAgICAgID0gc3RhZmZJZDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZUlkO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fZXhwZXJ0aXNlX3R5cGUpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlKGV4cGVydGlzZVR5cGUpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhdHVzXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBTdGF0dXMuXG4gKiBDb250YWlucyBUaWNrZXRzIHRoYXQgZml0IGludG8gdGhlIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c2x1Zyxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICA9IGlkO1xuXHRcdHRoaXMuc2x1ZyAgICA9IHNsdWc7ICAgIC8vIHNsdWdfZXhhbXBsZVxuXHRcdHRoaXMubmFtZSAgICA9IG5hbWU7ICAgIC8vIE5hbWUgRXhhbXBsZSFcblx0XHR0aGlzLnRpY2tldHMgPSB0aWNrZXRzOyAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgVGlja2V0IGluc3RhbmNlc1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzV2l0aFNsdWcodGhpcy5zbHVnKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgVGlja2V0L1Byb2JsZW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxscyxcblx0XHRzdGF0dXMsXG5cdFx0c3RhdHVzX2hpc3Rvcnk6IHN0YXR1c0hpc3RvcnksXG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0c29sdXRpb25faWQ6IHNvbHV0aW9uLFxuXHRcdGRldmljZXMsXG5cdFx0cHJvZ3JhbXMsXG5cdFx0Y29tbWVudHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsLFxuXHRcdHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdFJlYWwsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQ6IGV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRhc3NpZ25lZF90b19vcGVyYXRvcl9pZDogYXNzaWduZWRUb09wZXJhdG9ySWRcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgICAgPSBjYWxsczsgIC8vIElEIG9mIGNhbGxzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENhbGwnc1xuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhdHVzX2hpc3RvcnkgICAgICAgPSBzdGF0dXNIaXN0b3J5O1xuXHRcdHRoaXMudGl0bGUgICAgICAgICAgICAgICAgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uICAgICAgICAgID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5zb2x1dGlvbiAgICAgICAgICAgICA9IHNvbHV0aW9uO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgICAgPSBkZXZpY2VzOyAgLy8gSUQgb2YgZGV2aWNlcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBEZXZpY2VzXG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgICA9IHByb2dyYW1zOyAvLyBJRCBvZiBwcm9ncmFtcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBQcm9ncmFtc1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgICAgPSBjb21tZW50czsgLy8gSUQgb2YgY29tbWVudHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ29tbWVudCdzXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgICAgICAgICAgID0gdXBkYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsICAgICAgPSBjcmVhdGVkQXRSZWFsO1xuXHRcdHRoaXMudXBkYXRlZF9hdF9yZWFsICAgICAgPSB1cGRhdGVkQXRSZWFsO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGNhbGxzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbHNCeVRpY2tldElkKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IGNhbGxzKGNhbGxzKSB7XG5cdFx0dGhpcy5fY2FsbHMgPSBjYWxscztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cdFxuXHRnZXQgc3RhdHVzX2hpc3RvcnkoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXNIaXN0b3J5KHRoaXMuX3N0YXR1c19oaXN0b3J5KTtcblx0fVxuXG5cdHNldCBzdGF0dXNfaGlzdG9yeShzdGF0dXNIaXN0b3J5KSB7XG5cdFx0dGhpcy5fc3RhdHVzX2hpc3RvcnkgPSBzdGF0dXNIaXN0b3J5O1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgZGV2aWNlcygpIHtcblx0XHRyZXR1cm4gKG5ldyBIYXJkd2FyZU1hbmFnZXIoKSkuZ2V0RGV2aWNlcyh0aGlzLl9kZXZpY2VzKTtcblx0fVxuXG5cdHNldCBkZXZpY2VzKGRldmljZXMpIHtcblx0XHR0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcblx0fVxuXG5cdGdldCBwcm9ncmFtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBTb2Z0d2FyZU1hbmFnZXIoKSkuZ2V0UHJvZ3JhbXModGhpcy5fcHJvZ3JhbXMpO1xuXHR9XG5cblx0c2V0IHByb2dyYW1zKHByb2dyYW1zKSB7XG5cdFx0dGhpcy5fcHJvZ3JhbXMgPSBwcm9ncmFtcztcblx0fVxuXG5cdGdldCBjb21tZW50cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnRzQnlJZHModGhpcy5fY29tbWVudHMpO1xuXHR9XG5cblx0c2V0IGNvbW1lbnRzKGNvbW1lbnRzKSB7XG5cdFx0dGhpcy5fY29tbWVudHMgPSBjb21tZW50cztcblx0fVxuXG5cdGdldCBzb2x1dGlvbigpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnQodGhpcy5fc29sdXRpb24pO1xuXHR9XG5cblx0c2V0IHNvbHV0aW9uKHNvbHV0aW9uKSB7XG5cdFx0dGhpcy5fc29sdXRpb24gPSBzb2x1dGlvbjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZV9zdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmKHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZV9zdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQ7XG5cdH1cblxuXHRnZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoYXNzaWduZWRUb09wZXJhdG9ySWQpIHtcblx0XHR0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAgLSAxICsgMSkpICsgMTsgLy9SYW5kb20gaW50IGJldHdlZW4gMSBhbmQgNDBcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpKS5nZXRFeHBlcnRpc2VUeXBlKHJhbmRvbSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogRGV2aWNlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHR5cGUsXG5cdFx0bWFrZSxcblx0XHRzZXJpYWxfbm8sXG5cdFx0dGlja2V0cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pXG5cdHtcblx0XHR0aGlzLmlkXHRcdFx0XHQ9IGlkO1xuXHRcdHRoaXMudHlwZVx0XHRcdD0gdHlwZTtcblx0XHR0aGlzLm1ha2UgICBcdFx0PSBtYWtlO1xuXHRcdHRoaXMuc2VyaWFsX25vICAgICBcdD0gc2VyaWFsX25vO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMuY3JlYXRlZF9hdFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0XHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBQcm9ncmFtXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBTb2Z0d2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3JhbSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHMsXG5cdFx0b3BlcmF0aW5nX3N5c3RlbSxcblx0XHRleHBpcnlfZGF0ZSxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pIFxuXHR7XG5cdFx0dGhpcy5pZCAgICAgICAgIFx0XHQ9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgICBcdFx0PSBuYW1lO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5vcGVyYXRpbmdfc3lzdGVtXHQ9IG9wZXJhdGluZ19zeXN0ZW07XG5cdFx0dGhpcy5leHBpcnlfZGF0ZVx0XHQ9IGV4cGlyeV9kYXRlO1xuXHRcdHRoaXMuY3JlYXRlZF9hdCBcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCBcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0U29mdHdhcmVUeXBlKCkgeyBcblx0XHQvL0dldHMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgcHJvZ3JhbSBpcyBhbiBvcGVydGluZyBzeXN0ZW0gb3Igbm90XG5cdFx0aWYgKHRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiT3BlcmF0aW5nIFN5c3RlbVwiO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiQXBwbGljYXRpb25cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiLVwiO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Qcm9ncmFtLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0U3RhdHVzXG4gKlxuICogSW50ZXJtZWRpYXJ5IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFN0YXR1c1xuICogYW5kIFRpY2tldC4gVGhpcyBzdG9yZXMgYSBoaXN0b3J5IG9mIGFcbiAqIFRpY2tldCdzIHN0YXR1c2VzOyB0aGUgbGFzdCBlbnRyeSBpc1xuICogdGhlIFRpY2tldCdzIGN1cnJlbnQgc3RhdHVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0c3RhdHVzX2lkOiBzdGF0dXMsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0OyAvLyBJRCBvZiB0aWNrZXQsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBUaWNrZXRcblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgPSBzdGFmZjsgIC8vIElEIG9mIHN0YWZmLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFN0YXR1cy5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi9EeW5hbWljUGFnZVwiO1xuXG4vKipcbiAqIEFQSVxuICpcbiAqIE9yaWdpbmFsbHkgdXNlZCB0byByZXRyaWV2ZSBhbmQgaGFuZGxlIGRhdGEgZnJvbVxuICogQVBJIGVuZHBvaW50cywgYnV0IG1vZGlmaWVkIHRvIGhvbGQgbG9jYWwgZGF0YVxuICogaW4gdGhlIGNvbnN0cnVjdG9yIHNldCBieSBXb3JkUHJlc3MncyBUd2lnXG4gKiAoZG9uZSB0byByZXVzZSBwcmV2aW91cyBjb21wb25lbnRzIHRvIHNhdmUgdGltZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGNhbGxzID0gW10sXG5cdFx0c3RhdHVzZXMgPSBbXSxcblx0XHR0aWNrZXRzID0gW10sXG5cdFx0dGlja2V0X3N0YXR1c2VzOiB0aWNrZXRTdGF0dXNlcyA9IFtdLFxuXHRcdGNvbW1lbnRzID0gW10sXG5cdFx0c3RhZmYgPSBbXSxcblx0XHRkZXZpY2VzID0gW10sXG5cdFx0cHJvZ3JhbXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IGV4cGVydGlzZVR5cGVzID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmY6IGV4cGVydGlzZVR5cGVTdGFmZiA9IFtdLFxuXHRcdGRlcGFydG1lbnRzID0gW11cblx0fSkge1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgID0gY2FsbHM7XG5cdFx0dGhpcy5zdGF0dXNlcyAgICAgICAgICAgPSBzdGF0dXNlcztcblx0XHR0aGlzLnRpY2tldHMgICAgICAgICAgICA9IHRpY2tldHM7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyAgICAgPSB0aWNrZXRTdGF0dXNlcztcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICA9IGNvbW1lbnRzO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgICAgID0gc3RhZmY7XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgPSBkZXZpY2VzO1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgID0gcHJvZ3JhbXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBleHBlcnRpc2VUeXBlcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmRlcGFydG1lbnRzICAgICAgICA9IGRlcGFydG1lbnRzO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvQVBJLmpzIiwiLyoqXG4gKiBKUyBzcGVjaWZpYyB0byBIYXJkd2FyZSBwYWdlLCB1c2VkIHRvIGhhbmRsZSBmcm9udCBlbmQgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAqIGV2ZW50IGhhbmRsZXJzIGZvciBidXR0b25zICwgXG4gKi9cblxuaW1wb3J0IE1ha2VJdEFsbCBmcm9tIFwiLi4vLi4vbWFpblwiO1xuaW1wb3J0IEhhcmR3YXJlUGFnZSBmcm9tIFwiLi9IYXJkd2FyZVBhZ2VcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL0FQSVwiO1xuXG5sZXQgaGFyZHdhcmVQYWdlLCBhcGk7XG5cbndpbmRvdy5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHRhcGkgPSB3aW5kb3cuYXBpID0gbmV3IEFQSShkYXRhKTtcblxuXHRoYXJkd2FyZVBhZ2UgPSB3aW5kb3cuaGFyZHdhcmVQYWdlID0gbmV3IEhhcmR3YXJlUGFnZSgpO1xuXG5cdC8vTG9hZCBhbGwgaW5pdGlhbCBUeXBlcyBvZiBkZXZpY2Vcblx0aGFyZHdhcmVQYWdlLnBvcHVsYXRlVHlwZXMoKTtcblxuXHQvL0hhbmRsZXIgZm9yIGNsaWNraW5nIG9uIGEgZGV2aWNlIHR5cGVcblx0JChcIiN0eXBlTGlzdFwiKS5vbihcImNsaWNrXCIsIFwidHIgdGRcIiwgZSA9PiB7XG5cdFx0JChcIiN0eXBlTGlzdD50clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTsgLy9SZW1vdmVzIGFueSBwcmV2aW91c2x5IGhpZ2hsaWdodCB0byBhbnkgZWxlbWVudFxuXHRcdGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cdFx0aGFyZHdhcmVQYWdlLnR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGhhcmR3YXJlUGFnZS5wb3B1bGF0ZU1ha2UoKTsgLy9Mb2FkcyBhbGwgTWFrZXMgJ3VuZGVyJyB0aGUgc2VsZWN0ZWQgdHlwZVxuXHR9KTtcblxuXHQvL0hhbmRsZXIgZm9yIGNsaWNraW5nIG9uIGEgZGV2aWNlIG1ha2Vcblx0JChcIiNtYWtlTGlzdFwiKS5vbihcImNsaWNrXCIsIFwidHIgdGRcIiwgZSA9PiB7XG5cdFx0JChcIiNtYWtlTGlzdD50clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTsgLy9SZW1vdmVzIGFueSBwcmV2aW91c2x5IGhpZ2hsaWdodCB0byBhbnkgZWxlbWVudFxuXHRcdGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cdFx0aGFyZHdhcmVQYWdlLm1ha2UgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tYWtlO1xuXHRcdGhhcmR3YXJlUGFnZS5zaG93RGV2aWNlcygpOyAvL0xvYWRzIGFsbCBkZXZpY2VzIG9mIHRoZSBzZWxlY3RlZCBUeXBlIGFuZCBNYWtlXG5cdH0pO1xuXG5cdC8vSGFuZGxlciBmb3Igc2VsZWN0aW5nIGEgc3BlY2lmaWMgZGV2aWNlIGZyb20gdGhlIGZpbmFsIHNlbGVjdGlvbiB0YWJcblx0JChoYXJkd2FyZVBhZ2UudGFibGVTZWxlY3Rvcikub24oXCJjbGlja1wiLCBcInRib2R5IHRyXCIsIGUgPT4ge1xuXHRcdHZhciBpZCA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3dpZCk7IC8vR2V0cyB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIHJvd1xuXHRcdGhhcmR3YXJlUGFnZS5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTsgLy9PcGVucyB0aGUgZnVsbCB2aWV3IGZvciB0aGUgc2VsZWN0ZWQgZGV2aWNlXG5cdH0pO1xuXG5cdC8vSWYgbG9hZGluZyBhIHNwZWNpZmljIGRldmljZSB2aWFhIFVSTCBoYXNoXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0aGFzTG9jYXRpb25IYXNoKCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly9IaWRlIGZ1bGwgdmlldyBwYW5lbCBieSBkZWZhdWx0XG5cdFx0aGFyZHdhcmVQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0fVxuXG5cdC8vSGFuZGxlcyBkaXNwbGF5aW5nIHRoZSBwYWdlIGFzIGlmIHRoZSBwYXNzZWQgZGV2aWNlIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWRcblx0ZnVuY3Rpb24gaGFzTG9jYXRpb25IYXNoKCkge1xuXHRcdHZhciBpZCA9IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKTtcblx0XHRoYXJkd2FyZVBhZ2UuZGV2aWNlID0gaGFyZHdhcmVQYWdlLmhhcmR3YXJlTWFuYWdlci5nZXQoaWQpO1xuXHRcdGhhcmR3YXJlUGFnZS50eXBlID0gaGFyZHdhcmVQYWdlLmRldmljZS50eXBlO1xuXHRcdGhhcmR3YXJlUGFnZS5tYWtlID0gaGFyZHdhcmVQYWdlLmRldmljZS5tYWtlO1xuXHRcdGhhcmR3YXJlUGFnZS5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTsgLy9PcGVucyB0aGUgZnVsbCB2aWV3IGZvciB0aGUgc2VsZWN0ZWQgZGV2aWNlXG5cdFx0aGFyZHdhcmVQYWdlLnBvcHVsYXRlTWFrZSgpOyAvL1BvcHVsYXRpbmcgbWFrZXNcblx0XHRoYXJkd2FyZVBhZ2Uuc2hvd0RldmljZXMoKTsgLy9Qb3B1bGF0aW5nIGRldmljZSBsaXN0XG5cdFx0Ly8gU2V0IHR5cGVcblx0XHQkKFwiI3R5cGVMaXN0IHRkXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQudHlwZSA9PT0gaGFyZHdhcmVQYWdlLnR5cGUpLnBhcmVudCgpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIFNldCBtYWtlXG5cdFx0JChcIiNtYWtlTGlzdCB0ZFwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0Lm1ha2UgPT09IGhhcmR3YXJlUGFnZS5tYWtlKS5wYXJlbnQoKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0fVxuXG5cdC8vSGFuZGxlciBmb3IgY2xpY2tpbmcgVGlja2V0IGFuZCBTb2Z0d2FyZSBoeXBlcmxpbmtzIGluIGZ1bGwgdmlld1xuXHQkKFwiI3RpY2tldHNcIikub24oXCJjbGlja1wiLCBcImxpW2RhdGEtcm93aWRdXCIsIGUgPT4ge1xuXHRcdFR1cmJvbGlua3MudmlzaXQoXCJ0aWNrZXRzI1wiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpO1xuXHR9KTtcblx0JChcIiNzb2Z0d2FyZVwiKS5vbihcImNsaWNrXCIsIFwibGlbZGF0YS1yb3dpZF1cIiwgZSA9PiB7XG5cdFx0VHVyYm9saW5rcy52aXNpdChcInNvZnR3YXJlI1wiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9oYXJkd2FyZS5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi4vRHluYW1pY1BhZ2VcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBIYXJkd2FyZU1hbmFnZXIgZnJvbSBcIi4uL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5cbi8qKlxuICogSGFyZHdhcmVQYWdlXG4gKlxuICogTWFuaXB1bGF0ZXMgdGhlIGhhcmR3YXJlIHBhZ2UgL3cgSlF1ZXJ5IHVzaW5nIGRhdGEgZnJvbVxuICogdGhlIEhhcmR3YXJlTWFuYWdlci4gTWV0aG9kcyBtb3N0bHkgZ2V0IGNhbGxlZCBmcm9tIGhhcmR3YXJlLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlUGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSBudWxsO1xuXHRcdHRoaXMubWFrZSA9IG51bGw7XG5cdFx0dGhpcy5kZXZpY2UgPSBudWxsO1xuXHRcdC8vTWFuYWdlcnNcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgICA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cdFx0dGhpcy5oYXJkd2FyZU1hbmFnZXIgPSBuZXcgSGFyZHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zb2Z0d2FyZU1hbmFnZXIgPSBuZXcgU29mdHdhcmVNYW5hZ2VyKCk7XG5cdH1cblx0XG5cdC8vSGFuZGxlcyBhZGRpbmcgYWxsIHVuaXF1ZSBkZXZpY2UgdHlwZXMgdG8gdGhlIFR5cGVzIGNvbHVtblxuXHRwb3B1bGF0ZVR5cGVzKCkge1xuXHRcdHZhciB0eXBlTGlzdCA9ICQoJyN0eXBlTGlzdCcpO1xuXHRcdHR5cGVMaXN0LmVtcHR5KCk7XG5cblx0XHR2YXIgdW5pcXVlVHlwZXMgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci51bmlxdWVUeXBlcygpO1xuXHRcdGZvciAobGV0IHR5cGUgb2YgdW5pcXVlVHlwZXMpIHtcblx0XHRcdHZhciByb3cgPSBcIjx0cj48dGQgZGF0YS10eXBlPSdcIiArIHR5cGUgKyBcIic+XCIgKyB0eXBlICsgXCI8L3RkPjwvdHI+XCI7XG5cdFx0XHR0eXBlTGlzdC5hcHBlbmQocm93KTtcblx0XHR9XG5cdH1cblxuXHQvL0hhbmRsZXMgYWRkaW5nIGFsbCB1bmlxdWUgZGV2aWNlIG1ha2VzIHVuZGVyIHRoZSBzZWxlY3RlZCBUeXBlIHRvIHRoZSBNYWtlIGNvbHVtblxuXHRwb3B1bGF0ZU1ha2UoKSB7XG5cdFx0dmFyIG1ha2VMaXN0ID0gJCgnI21ha2VMaXN0Jyk7XG5cdFx0bWFrZUxpc3QuZW1wdHkoKTtcblx0XHR0aGlzLmNsZWFyVGFibGUoKTtcblxuXHRcdGxldCB1bmlxdWVNYWtlID0gdGhpcy5oYXJkd2FyZU1hbmFnZXIudW5pcXVlTWFrZXNPZlR5cGUodGhpcy50eXBlKTtcblx0XHRmb3IgKGxldCBtYWtlIG9mIHVuaXF1ZU1ha2UpIHtcblx0XHRcdGlmICh0aGlzLm1ha2UgPT0gbWFrZSkge1xuXG5cdFx0XHR9XG5cdFx0XHR2YXIgcm93ID0gXCI8dHIgXCIgKyAodGhpcy5tYWtlID09IG1ha2U/XCJjbGFzcz0naGlnaGxpZ2h0J1wiOiBcIlwiKSArIFwiPjx0ZCBkYXRhLW1ha2U9J1wiICsgbWFrZSArIFwiJz5cIiArIG1ha2UgKyBcIjwvdGQ+PC90cj5cIjtcblx0XHRcdG1ha2VMaXN0LmFwcGVuZChyb3cpO1xuXHRcdH1cblx0fVxuXHRcblx0Ly9IYW5kbGVzIGFkZGluZyBhbGwgZGV2aWNlcyBvZiB0aGUgc2VsZWN0ZWQgbWFrZSBhbmQgdHlwZSB0byB0aGUgdGFibGVcblx0c2hvd0RldmljZXMoKSB7XG5cdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cdFx0dmFyIG1ha2UgPSB0aGlzLm1ha2U7XG5cdFx0dGhpcy5jbGVhclRhYmxlKCk7XG5cblx0XHR2YXIgcmVzdWx0cyA9IHRoaXMuaGFyZHdhcmVNYW5hZ2VyLmdldERldmljZXNPZlR5cGVBbmRNYWtlKHR5cGUsbWFrZSk7XG5cdFx0Zm9yIChsZXQgZGV2aWNlIG9mIHJlc3VsdHMpIHtcblx0XHRcdHRoaXMuYXBwZW5kVGFibGVSb3coZGV2aWNlKTtcblx0XHR9XG5cdH1cblxuXHQvL0hhbmRsZXMgb3BlbmluZyB0aGUgZnVsbCB2aWV3IG9mIHRoZSBzZWxlY3RlZCBkZXZpY2UsIGluY2x1ZGluZyBwb3B1bGF0aW5nIHJlbGF0ZWRcblx0Ly90aWNrZXRzIGFuZCBzb2Z0d2FyZS5cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCkge1xuXHRcdHRoaXMuZGV2aWNlID0gdGhpcy5oYXJkd2FyZU1hbmFnZXIuZ2V0KGlkKTtcblx0XHRpZiAoIXRoaXMuZGV2aWNlKSB7XG5cdFx0XHR0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblx0XHRcdGFsZXJ0KFwiTm8gaGFyZHdhcmUgd2l0aCBJRCBcIiArIGlkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c3VwZXIuc2hvd1RhYmxlUm93RGV0YWlscyhpZCk7XG5cdFx0JChcIiN0aWNrZXRzXCIpLmh0bWwoXCJcIik7XG5cdFx0JChcIiNzb2Z0d2FyZVwiKS5odG1sKFwiXCIpO1xuXHRcdHZhciBwcm9ncmFtcyA9IFtdO1xuXHRcdHZhciB0aWNrZXRzID0gdGhpcy5kZXZpY2UudGlja2V0cztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHN0YXR1c0NsYXNzID0gXCJwZW5kaW5nXCI7XG5cdFx0XHR2YXIgdGlja2V0ID0gdGlja2V0c1tpXTtcblx0XHRcdHZhciBzdGF0dXMgPSB0aWNrZXQuc3RhdHVzO1xuXHRcdFx0dmFyIHN0YXR1c1RleHQgPSBzdGF0dXMubmFtZTtcblx0XHRcdFxuXHRcdFx0c3dpdGNoIChzdGF0dXNUZXh0KSB7IFxuXHRcdFx0XHRjYXNlIFwiTmV3XCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcIm5ld1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiUGVuZGluZyAtIEluIFByb2dyZXNzXCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcInBlbmRpbmdcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIlBlbmRpbmcgLSBBd2FpdGluZyBTdGFmZlwiOlxuXHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gXCJwZW5kaW5nXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJSZXNvbHZlZFwiOlxuXHRcdFx0XHRcdHN0YXR1c0NsYXNzID0gXCJyZXNvbHZlZFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Ly9EaXNwbGF5aW5nIHRpY2tldHNcblx0XHRcdCQoXCIjdGlja2V0c1wiKS5hcHBlbmQoYFxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiIGRhdGEtcm93aWQ9XCJgICsgdGlja2V0LmlkICsgYFwiPlxuXHRcdFx0XHRcdCNgKyB0aWNrZXQuaWQgK2A6IGAgKyB0aWNrZXQudGl0bGUgKyBgXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLWAgKyBzdGF0dXNDbGFzcyArIGBcIj5gICsgc3RhdHVzVGV4dCArIGA8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0IHRleHQtbXV0ZWRcIj5gICsgdGlja2V0LmNyZWF0ZWRfYXQgKyBgPC9zcGFuPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0YCk7XG5cblx0XHRcdGlmIChwcm9ncmFtcy5sZW5ndGggPCAyMCkgeyAvL0xpbWl0aW5nIHByb2dyYW0gbGlzdCBzaXplIHRvIDIwXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdGlja2V0LnByb2dyYW1zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIHByb2dyYW0gPSB0aGlzLnNvZnR3YXJlTWFuYWdlci5nZXQodGlja2V0Ll9wcm9ncmFtc1tqXSk7XG5cdFx0XHRcdFx0aWYgKHByb2dyYW1zLmluZGV4T2YocHJvZ3JhbSkgPT0gLTEpIHtcblx0XHRcdFx0XHRcdHByb2dyYW1zLnB1c2gocHJvZ3JhbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vRGlzcGxheWluZyBzb2Z0d2FyZVxuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgcHJvZ3JhbXMubGVuZ3RoOyBrKyspIHtcblx0XHRcdCQoXCIjc29mdHdhcmVcIikuYXBwZW5kKGBcblx0XHRcdFx0PGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiBkYXRhLXJvd2lkPVwiYCArIHByb2dyYW1zW2tdLmlkICsgYFwiPlxuXHRcdFx0XHRcdGAgKyBwcm9ncmFtc1trXS5nZXRTb2Z0d2FyZVR5cGUoKSArIGAgLyBgICsgcHJvZ3JhbXNba10ubmFtZSArICBgXG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRgKTtcblx0XHR9XHRcblx0XHRcblx0XHQkKFwiI3RpY2tldC10b3RhbFwiKS5odG1sKFwiVG90YWw6IFwiICsgdGlja2V0cy5sZW5ndGgpO1xuXHRcdCQoXCIjc29mdHdhcmUtdG90YWxcIikuaHRtbChcIlRvdGFsOiBcIiArIHByb2dyYW1zLmxlbmd0aCk7XG5cblx0XHQvL1VwZGF0aW5nIHRpdGxlXG5cdFx0dGhpcy51cGRhdGVTaW5nbGVWaWV3TmF2YmFyKHRoaXMuZGV2aWNlLnR5cGUgKyBcIiAvIFwiICsgdGhpcy5kZXZpY2UubWFrZSArIFwiIC8gXCIgKyB0aGlzLmRldmljZS5zZXJpYWxfbm8pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVQYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==