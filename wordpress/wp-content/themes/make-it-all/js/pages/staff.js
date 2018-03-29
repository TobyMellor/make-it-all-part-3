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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY1MmFhMWU0OWFhYTI4Njg1YjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZlByb2JsZW1UeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvc3RhZmYuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJlIiwidGlja2V0cyIsImNvbW1lbnRzIiwic3RhdHVzZXMiLCJ0aWNrZXRTdGF0dXNlcyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIlN0YWZmTWFuYWdlciIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiTWFuYWdlciIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsIkNvbW1lbnQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwiQ2FsbCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsIkVtcGxveWVlIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJFeHBlcnRpc2VUeXBlIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsIkV4cGVydGlzZVR5cGVTdGFmZiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsIlN0YXR1cyIsImdldFRpY2tldHNXaXRoU2x1ZyIsIlRpY2tldCIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiRGV2aWNlIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJQcm9ncmFtIiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwiVGlja2V0U3RhdHVzIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiU3RhZmZQYWdlIiwidGlja2V0TWFuYWdlciIsInRpY2tldHNDb2x1bW5JbmRleCIsImluZGV4Iiwic3RhZmZGb3JUaWNrZXRzIiwiJHRhYmxlUm93IiwiJHJvd3MiLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzIiwic2hvd05vdGlmaWNhdGlvbiIsInVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIiLCJjdXN0b21zbHVnIiwic2hvd1Blcm1pc3Npb25zIiwic3JjIiwic3RhZmZQcm9ibGVtVHlwZVBhZ2UiLCJjdXJyZW50U3BlY2lhbGlzbXMiLCJsb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzIiwic2VhcmNoIiwiYXNzaWduIiwib2JqIiwic2hvd1N0YWZmIiwiaWNvbnMiLCJlbEljb24iLCJlbFRleHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImVsUGVybWlzc2lvbiIsIlN0YWZmRXhwZXJ0aXNlVHlwZVBhZ2UiLCIkdHlwZUNvbHVtbnMiLCIkbGkiLCJuZXh0QWxsIiwiJHR5cGVDb2x1bW4iLCJnZXRSb290RXhwZXJ0aXNlVHlwZXMiLCJjaGlsZCIsInNjcm9sbExlZnQiLCJ3aWR0aCIsIiRzcGVjaWFsaXNtQ2hlY2tib3giLCJjbGlja2VkU3BlY2lhbGlzbUlkIiwiTnVtYmVyIiwiY3VycmVudFNwZWNpYWxpc21zSW5kZXhPZiIsIiRpY29uIiwic2hvdWxkUmVtb3ZlQ2hpbGRTcGVjaWFsaXNtcyIsInRvZ2dsZUNoaWxkcmVuIiwiZ2V0U3BlY2lhbGlzdHMiLCJzcGVjaWFsaXN0cyIsImJlc3RTcGVjaWFsaXN0IiwiYmVzdENvdW50IiwiZ2V0VGlja2V0c1dpdGhTbHVnSW4iLCJvcGVuVGlja2V0cyIsImFzc2lnbmVkVG9Db3VudCIsImoiLCJfYXNzaWduZWRfdG8iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQiLCJnZXRCZXN0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQiLCJzdGFmZlBhZ2UiLCJpbml0Iiwic2hvd1RhYmxlUm93RGV0YWlscyIsInRvZ2dsZVNwZWNpYWxpc20iLCJrZXl1cCIsImRlbGVnYXRlVGFyZ2V0IiwiY29sdW1uSW5kZXgiLCIkdHIiLCIkdGQiLCJlcSIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsImdldEVsZW1lbnRCeUlkIiwicGFnZW5hbWUiLCJlbmRzV2l0aCIsImtleUNvZGUiLCIkcm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxhOzs7QUFDcEIsMEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxvQkFBTCxHQUE0QkMsT0FBT0Qsb0JBQVAsSUFBK0Isb0NBQTNEOztBQUVBLFFBQUtFLEtBQUwsR0FBZ0JDLElBQUlELEtBQUosQ0FBVUUsR0FBVixDQUFjO0FBQUEsVUFBSyxtQkFBU0MsQ0FBVCxDQUFMO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFFBQUtDLE9BQUwsR0FBZ0JILElBQUlHLE9BQUosQ0FBWUYsR0FBWixDQUFnQjtBQUFBLFVBQUsscUJBQVdDLENBQVgsQ0FBTDtBQUFBLEdBQWhCLENBQWhCO0FBQ0EsUUFBS0UsUUFBTCxHQUFnQkosSUFBSUksUUFBSixDQUFhSCxHQUFiLENBQWlCO0FBQUEsVUFBSyxzQkFBWUMsQ0FBWixDQUFMO0FBQUEsR0FBakIsQ0FBaEI7QUFDQSxRQUFLRyxRQUFMLEdBQWdCTCxJQUFJSyxRQUFKLENBQWFKLEdBQWIsQ0FBaUI7QUFBQSxVQUFLLHFCQUFXQyxDQUFYLENBQUw7QUFBQSxHQUFqQixDQUFoQjtBQUNBLFFBQUtJLGNBQUwsR0FBc0JOLElBQUlNLGNBQUosQ0FBbUJMLEdBQW5CLENBQXVCO0FBQUEsVUFBSywyQkFBaUJDLENBQWpCLENBQUw7QUFBQSxHQUF2QixDQUF0QjtBQVRhO0FBVWI7O0FBRUQ7Ozs7Ozs7Ozs7MEJBTVFLLE0sRUFBUTtBQUNmLFVBQU8sS0FBS1IsS0FBTCxDQUFXUyxJQUFYLENBQWdCO0FBQUEsV0FBUUMsS0FBS0MsRUFBTCxLQUFZSCxNQUFwQjtBQUFBLElBQWhCLEtBQStDLElBQXREO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztxQ0FNbUJJLFEsRUFBVTtBQUM1QixVQUFPLEtBQUtaLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQjtBQUFBLFdBQVFILEtBQUtJLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkgsUUFBdEIsSUFBa0MsQ0FBQyxDQUEzQztBQUFBLElBQWxCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VDQU1xQkosTSxFQUFRO0FBQzVCLFVBQU8sS0FBS0gsUUFBTCxDQUFjSSxJQUFkLENBQW1CO0FBQUEsV0FBV08sUUFBUUMsS0FBUixLQUFrQlQsTUFBN0I7QUFBQSxJQUFuQixLQUEyRCxJQUFsRTtBQUNBOztBQUVEOzs7Ozs7Ozs7NEJBTVVVLFEsRUFBVTtBQUNuQixVQUFPLEtBQUtaLFFBQUwsQ0FBY0csSUFBZCxDQUFtQjtBQUFBLFdBQVVVLE9BQU9SLEVBQVAsS0FBY08sUUFBeEI7QUFBQSxJQUFuQixLQUF3RCxJQUEvRDtBQUNBOztBQUVEOzs7Ozs7Ozs7a0NBTWdCRSxVLEVBQVk7QUFDM0IsVUFBTyxLQUFLZCxRQUFMLENBQWNHLElBQWQsQ0FBbUI7QUFBQSxXQUFVVSxPQUFPRSxJQUFQLEtBQWdCRCxVQUExQjtBQUFBLElBQW5CLEtBQTRELElBQW5FO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs0QkFNVVIsUSxFQUFVO0FBQ25CLFVBQU8sS0FBS1IsT0FBTCxDQUFhSyxJQUFiLENBQWtCO0FBQUEsV0FBVWEsT0FBT1gsRUFBUCxLQUFjQyxRQUF4QjtBQUFBLElBQWxCLEtBQXVELElBQTlEO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztxQ0FNbUJXLFMsRUFBVztBQUM3QixVQUFPLEtBQUtuQixPQUFMLENBQWFTLE1BQWIsQ0FBb0I7QUFBQSxXQUFVVSxVQUFVUixPQUFWLENBQWtCTyxPQUFPWCxFQUF6QixJQUErQixDQUFDLENBQTFDO0FBQUEsSUFBcEIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7cUNBTW1CUyxVLEVBQVk7QUFDOUIsVUFBTyxLQUFLaEIsT0FBTCxDQUFhUyxNQUFiLENBQW9CO0FBQUEsV0FBVVMsT0FBT0gsTUFBUCxDQUFjRSxJQUFkLEtBQXVCRCxVQUFqQztBQUFBLElBQXBCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VDQU1xQkksVyxFQUFhO0FBQ2pDLE9BQUlwQixVQUFVLEtBQUtBLE9BQUwsQ0FBYXFCLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBZDs7QUFFQSxRQUFLLElBQUlDLElBQUl0QixRQUFRdUIsTUFBUixHQUFpQixDQUE5QixFQUFpQ0QsS0FBSyxDQUF0QyxFQUF5Q0EsR0FBekMsRUFBOEM7QUFDN0MsUUFBSUYsWUFBWVQsT0FBWixDQUFvQlgsUUFBUXNCLENBQVIsRUFBV1AsTUFBWCxDQUFrQkUsSUFBdEMsTUFBZ0QsQ0FBQyxDQUFyRCxFQUF3RGpCLFFBQVF3QixNQUFSLENBQWVGLENBQWYsRUFBa0IsQ0FBbEI7QUFDeEQ7O0FBRUQsVUFBT3RCLE9BQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3FDQU1tQkksTSxFQUFRO0FBQzFCLFVBQU8sS0FBS0osT0FBTCxDQUFhUyxNQUFiLENBQW9CO0FBQUEsV0FBVVMsT0FBT08sTUFBUCxDQUFjZCxPQUFkLENBQXNCUCxNQUF0QixJQUFnQyxDQUFDLENBQTNDO0FBQUEsSUFBcEIsQ0FBUDtBQUNBOzs7OENBRTJCc0IsTyxFQUFTO0FBQ3BDLE9BQUlDLHFCQUFxQixLQUFLakMsb0JBQUwsQ0FBMEJpQyxrQkFBbkQ7O0FBRUEsVUFBTyxLQUFLM0IsT0FBTCxDQUFhUyxNQUFiLENBQW9CLGtCQUFVO0FBQ3BDLFdBQU9TLE9BQU9VLHFCQUFQLEtBQWlDRixPQUFqQyxJQUE0Q0MsbUJBQW1CdEIsSUFBbkIsQ0FBd0I7QUFBQSxZQUFLTixFQUFFUSxFQUFGLEtBQVNXLE9BQU9XLHFCQUFyQjtBQUFBLEtBQXhCLEVBQW9FQyxNQUFwRSxLQUErRUosT0FBbEk7QUFDQSxJQUZNLENBQVA7QUFHQTs7OytDQUU0QkssUSxFQUFVO0FBQ3RDLE9BQUlKLHFCQUFxQixLQUFLakMsb0JBQUwsQ0FBMEJpQyxrQkFBbkQ7QUFBQSxPQUNDM0IsVUFBcUIsS0FBS0EsT0FEM0I7QUFBQSxPQUVDZ0MsU0FBcUIsRUFGdEI7O0FBSUFELFlBQVNFLE9BQVQsQ0FBaUIsbUJBQVc7QUFDM0JELFdBQU9OLE9BQVAsSUFBa0IxQixRQUFRUyxNQUFSLENBQWUsa0JBQVU7QUFDMUMsWUFBT1MsT0FBT1UscUJBQVAsS0FBaUNGLE9BQWpDLElBQ0ZDLG1CQUFtQnRCLElBQW5CLENBQXdCO0FBQUEsYUFBS04sRUFBRVEsRUFBRixLQUFTVyxPQUFPVyxxQkFBckI7QUFBQSxNQUF4QixFQUFvRUMsTUFBcEUsS0FBK0VKLE9BRHBGO0FBRUEsS0FIaUIsQ0FBbEI7QUFJQSxJQUxEOztBQU9BLFVBQU9NLE1BQVA7QUFDQTs7O2lDQUVjO0FBQ2QsVUFBTyxLQUFLRSwyQkFBTCxDQUFpQ0MsV0FBV0MsWUFBWCxDQUF3QkMsV0FBeEIsRUFBakMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7c0NBU29CbkIsTSxFQUFRO0FBQzNCLE9BQUlBLE9BQU9VLHFCQUFQLEtBQWlDLElBQXJDLEVBQTJDLE9BQU9WLE9BQU9vQixvQkFBZDs7QUFFM0MsVUFBT3BCLE9BQU9xQixvQkFBUCxDQUE0QkMsS0FBbkMsQ0FIMkIsQ0FHZTtBQUMxQzs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPdUJ0QixNLEVBQVE7QUFDOUIsVUFBTyxLQUFLdUIsbUJBQUwsQ0FBeUJ2QixNQUF6QixNQUFxQ2lCLFdBQVdDLFlBQVgsQ0FBd0JDLFdBQXhCLEVBQTVDO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztrQ0FNZ0JLLGMsRUFBZ0I7QUFDL0IsVUFBTyxLQUFLdkMsY0FBTCxDQUFvQkUsSUFBcEIsQ0FBeUI7QUFBQSxXQUFnQnNDLGFBQWFwQyxFQUFiLEtBQW9CbUMsY0FBcEM7QUFBQSxJQUF6QixLQUFnRixJQUF2RjtBQUNBOztBQUVEOzs7Ozs7Ozs4Q0FLNEJsQyxRLEVBQVU7QUFDckMsVUFBTyxLQUFLTCxjQUFMLENBQW9CTSxNQUFwQixDQUEyQjtBQUFBLFdBQWdCa0MsYUFBYUMsT0FBYixLQUF5QnBDLFFBQXpDO0FBQUEsSUFBM0IsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7NkJBTVdxQyxTLEVBQVc7QUFDckIsVUFBTyxLQUFLNUMsUUFBTCxDQUFjSSxJQUFkLENBQW1CO0FBQUEsV0FBV08sUUFBUUwsRUFBUixLQUFlc0MsU0FBMUI7QUFBQSxJQUFuQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O21DQUtpQkMsRyxFQUFLO0FBQ3JCLFVBQU8sS0FBSzdDLFFBQUwsQ0FBY1EsTUFBZCxDQUFxQjtBQUFBLFdBQVdxQyxJQUFJbkMsT0FBSixDQUFZQyxRQUFRTCxFQUFwQixJQUEwQixDQUFDLENBQXRDO0FBQUEsSUFBckIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OENBTTRCd0MsZSxFQUFpQjtBQUFBOztBQUM1QyxPQUFJQyxpQkFBaUIsS0FBS3RELG9CQUFMLENBQTBCdUQsc0NBQTFCLENBQWlFRixlQUFqRSxDQUFyQjtBQUFBLE9BQ0M1QixZQUFpQixZQUFHK0IsTUFBSCxnQ0FBYUYsZUFBZWxELEdBQWYsQ0FBbUI7QUFBQSxXQUFLQyxFQUFFQyxPQUFQO0FBQUEsSUFBbkIsQ0FBYixFQURsQixDQUQ0QyxDQUV3Qjs7QUFFcEUsVUFBTyxLQUFLbUQsa0JBQUwsQ0FBd0JoQyxTQUF4QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7eUJBT09pQyxLLEVBQU9DLFUsRUFBWTtBQUN6QiwrSEFBb0IsS0FBS3JELE9BQXpCLEVBQWtDb0QsS0FBbEMsRUFBeUNDLFVBQXpDO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNc0JQLEcsRUFBSztBQUMxQixVQUFPLEtBQUs5QyxPQUFMLENBQWFTLE1BQWIsQ0FBb0I7QUFBQSxXQUFVcUMsSUFBSW5DLE9BQUosQ0FBWU8sT0FBT1gsRUFBbkIsSUFBeUIsQ0FBQyxDQUFwQztBQUFBLElBQXBCLENBQVA7QUFDQTs7Ozs7O2tCQWxQbUJkLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUI2RCxZOzs7QUFDcEIseUJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLZCxLQUFMLEdBQW1CM0MsSUFBSTJDLEtBQUosQ0FBVTFDLEdBQVYsQ0FBYztBQUFBLFVBQUssdUJBQWFDLENBQWIsQ0FBTDtBQUFBLEdBQWQsQ0FBbkI7QUFDQSxRQUFLd0QsV0FBTCxHQUFtQjFELElBQUkwRCxXQUF2QjtBQUphO0FBS2I7O0FBRUQ7Ozs7Ozs7Ozs7c0JBTUloRCxFLEVBQUk7QUFDUCxVQUFPLEtBQUtpQyxLQUFMLENBQVduQyxJQUFYLENBQWdCO0FBQUEsV0FBWW1ELFNBQVNqRCxFQUFULEtBQWdCQSxFQUE1QjtBQUFBLElBQWhCLEtBQW1ELElBQTFEO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs2Q0FNMkJrRCxVLEVBQVlDLEssRUFBTztBQUM3QyxVQUFPLEtBQUtsQixLQUFMLENBQVcvQixNQUFYLENBQWtCO0FBQUEsV0FBWStDLFNBQVNHLE1BQVQsQ0FBZ0JGLFVBQWhCLEtBQStCQyxLQUEzQztBQUFBLElBQWxCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Z0NBS2dDO0FBQUEsT0FBcEJFLFVBQW9CLHVFQUFQLEtBQU87O0FBQy9CLE9BQUlyRCxLQUFLLENBQVQsQ0FEK0IsQ0FDbkI7O0FBRVo7QUFDQSxPQUFJcUQsVUFBSixFQUFnQjtBQUNmLFdBQU8sS0FBS0MsR0FBTCxDQUFTdEQsRUFBVCxDQUFQO0FBQ0E7O0FBRUQsVUFBT0EsRUFBUDtBQUNBOztBQUVEOzs7Ozs7OztpQ0FLZXVELGEsRUFBZTtBQUM3QixPQUFJdEIsUUFBUyxLQUFLQSxLQUFsQjtBQUFBLE9BQ0kvQixTQUFTLFNBQVRBLE1BQVM7QUFBQSxXQUFNO0FBQUEsWUFBWStDLFNBQVNPLFlBQVQsQ0FBc0JwRCxPQUF0QixDQUE4QkosRUFBOUIsSUFBb0MsQ0FBQyxDQUFqRDtBQUFBLEtBQU47QUFBQSxJQURiOztBQUdBLE9BQUksUUFBT3VELGFBQVAseUNBQU9BLGFBQVAsT0FBeUIsUUFBN0IsRUFBdUM7QUFDdEMsUUFBSUUsU0FBUyxFQUFiOztBQURzQztBQUFBO0FBQUE7O0FBQUE7QUFHdEMsMEJBQWVGLGFBQWYsOEhBQThCO0FBQUEsVUFBckJ2RCxFQUFxQjs7QUFDN0J5RCxhQUFPQyxJQUFQLENBQVl6QixNQUFNL0IsTUFBTixDQUFhQSxPQUFPRixFQUFQLENBQWIsQ0FBWjtBQUNBO0FBTHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3RDLFdBQU95RCxNQUFQO0FBQ0EsSUFSRCxNQVFPO0FBQ04sV0FBT3hCLE1BQU0vQixNQUFOLENBQWFBLE9BQU9xRCxhQUFQLENBQWIsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT2NOLFEsRUFBVVQsZSxFQUFpQjtBQUN4QyxVQUFPUyxTQUFTTyxZQUFULENBQXNCcEQsT0FBdEIsQ0FBOEJvQyxlQUE5QixJQUFpRCxDQUFDLENBQXpEO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7eUJBT09LLEssRUFBT0MsVSxFQUFZO0FBQ3pCLDZIQUFvQixLQUFLYixLQUF6QixFQUFnQ1ksS0FBaEMsRUFBdUNDLFVBQXZDO0FBQ0E7Ozs7OztrQkF0Rm1CQyxZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQlksb0I7OztBQUNwQixpQ0FBYztBQUFBOztBQUFBOztBQUdiLFFBQUtsQixjQUFMLEdBQTBCbkQsSUFBSW1ELGNBQUosQ0FBbUJsRCxHQUFuQixDQUF1QjtBQUFBLFVBQUssNEJBQWtCQyxDQUFsQixDQUFMO0FBQUEsR0FBdkIsQ0FBMUI7QUFDQSxRQUFLNEIsa0JBQUwsR0FBMEI5QixJQUFJOEIsa0JBQUosQ0FBdUI3QixHQUF2QixDQUEyQjtBQUFBLFVBQUssaUNBQXVCQyxDQUF2QixDQUFMO0FBQUEsR0FBM0IsQ0FBMUI7QUFKYTtBQUtiOztBQUVEOzs7Ozs7Ozs7MENBS3dCO0FBQ3ZCLFVBQU8sS0FBS2lELGNBQUwsQ0FBb0J2QyxNQUFwQixDQUEyQjtBQUFBLFdBQWlCcUQsY0FBY0ssT0FBZCxJQUF5QixJQUExQztBQUFBLElBQTNCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O21DQU1pQnBCLGUsRUFBaUI7QUFDakMsVUFBTyxLQUFLQyxjQUFMLENBQW9CM0MsSUFBcEIsQ0FBeUI7QUFBQSxXQUFpQnlELGNBQWN2RCxFQUFkLEtBQXFCd0MsZUFBdEM7QUFBQSxJQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztvQ0FNa0JxQixnQixFQUFrQjtBQUNuQyxVQUFPLEtBQUtwQixjQUFMLENBQW9CdkMsTUFBcEIsQ0FBMkI7QUFBQSxXQUFpQjJELGlCQUFpQnpELE9BQWpCLENBQXlCbUQsY0FBY3ZELEVBQXZDLElBQTZDLENBQUMsQ0FBL0Q7QUFBQSxJQUEzQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt5REFNdUN3QyxlLEVBQWlCO0FBQ3ZELFVBQU8sS0FBS3BCLGtCQUFMLENBQXdCbEIsTUFBeEIsQ0FBK0I7QUFBQSxXQUFzQmtCLG1CQUFtQjBDLGVBQW5CLEtBQXVDdEIsZUFBN0Q7QUFBQSxJQUEvQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt3Q0FNc0JlLGEsRUFBZTtBQUNwQyxPQUFJUSxzQkFBc0JSLGFBQTFCO0FBQUEsT0FDQ2QsaUJBQXNCLENBQUNzQixtQkFBRCxDQUR2Qjs7QUFHQSxVQUFPQSx1QkFBdUIsSUFBOUIsRUFBb0M7QUFDbkNBLDBCQUFzQkEsb0JBQW9CQyxNQUExQzs7QUFFQSxRQUFJRCx1QkFBdUIsSUFBM0IsRUFBaUM7QUFDaEN0QixvQkFBZWlCLElBQWYsQ0FBb0JLLG1CQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBT3RCLGNBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7aURBUStCRCxlLEVBQWlCckIsTyxFQUFTO0FBQ3hELFVBQU8sS0FBS0Msa0JBQUwsQ0FBd0J0QixJQUF4QixDQUE2QjtBQUFBLFdBQXNCc0IsbUJBQW1CRyxNQUFuQixLQUE4QkosT0FBOUIsSUFBeUNDLG1CQUFtQjBDLGVBQWxGO0FBQUEsSUFBN0IsS0FBbUksSUFBMUk7QUFDQTs7QUFFRDs7Ozs7Ozs7O3dDQU1zQkcsb0IsRUFBc0I7QUFDM0MsVUFBTyxLQUFLN0Msa0JBQUwsQ0FBd0J0QixJQUF4QixDQUE2QjtBQUFBLFdBQXNCc0IsbUJBQW1CcEIsRUFBbkIsS0FBMEJpRSxvQkFBaEQ7QUFBQSxJQUE3QixLQUFzRyxJQUE3RztBQUNBOzs7eUJBRU1wQixLLEVBQU9DLFUsRUFBWTtBQUN6Qiw2SUFBb0IsS0FBS0wsY0FBekIsRUFBeUNJLEtBQXpDLEVBQWdEQyxVQUFoRDtBQUNBOzs7Ozs7a0JBNUZtQmEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnJCOzs7Ozs7SUFNcUJPLE87QUFDcEIsb0JBQWM7QUFBQTtBQUViO0FBREE7OztBQUdEOzs7Ozs7Ozs7OzsyQkFPbUQ7QUFBQSxPQUE1Q0MsUUFBNEMsdUVBQWpDLEVBQWlDO0FBQUEsT0FBN0J0QixLQUE2Qix1RUFBckIsRUFBcUI7QUFBQSxPQUFqQkMsVUFBaUIsdUVBQUosRUFBSTs7QUFDbERELFdBQVFBLE1BQU11QixXQUFOLEVBQVIsQ0FEa0QsQ0FDckI7O0FBRTdCLFVBQU9ELFNBQVNqRSxNQUFULENBQWdCLGNBQU07QUFBRTtBQUM5QixXQUFPNEMsV0FBV3VCLElBQVgsQ0FBZ0IsZ0JBQVE7QUFBRTtBQUNoQyxTQUFJQyxPQUFPQyxHQUFHQyxJQUFILENBQVAsRUFBaUJKLFdBQWpCLEdBQStCSyxRQUEvQixDQUF3QzVCLEtBQXhDLENBQUosRUFBb0QsT0FBTyxJQUFQLENBRHRCLENBQ21DO0FBQ2pFLEtBRk0sQ0FBUDtBQUdBLElBSk0sQ0FBUDtBQUtBOzs7Ozs7a0JBcEJtQnFCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7Ozs7SUFPTVEsVztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSx3QkFLUTtBQUFBLGlGQUFKLEVBQUk7QUFBQSxrQ0FKUEMsZUFJTztBQUFBLE1BSlBBLGVBSU8sd0NBSlcsWUFJWDtBQUFBLGdDQUhQQyxhQUdPO0FBQUEsTUFIUEEsYUFHTyxzQ0FIUyxnQkFHVDtBQUFBLE1BRlBDLFdBRU8sUUFGUEEsV0FFTztBQUFBLE1BRFBDLGNBQ08sUUFEUEEsY0FDTzs7QUFBQTs7QUFDUCxPQUFLSCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLE9BQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0E7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxjQUFjQSxXQUFkLEdBQTZCRixvQkFBb0IsWUFBcEIsR0FBbUNBLGdCQUFnQkksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsSUFBZ0MsTUFBbkUsR0FBNEUsc0JBQTVIO0FBQ0EsT0FBS0QsY0FBTCxHQUFzQkEsaUJBQWlCQSxjQUFqQixHQUFtQ0gsb0JBQW9CLFlBQXBCLEdBQW1DQSxnQkFBZ0JJLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLElBQWdDLFNBQW5FLEdBQStFLGNBQXhJO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQU91QkMsSSxFQUFNO0FBQzVCQyxLQUFFLEtBQUtILGNBQVAsRUFBdUJoRixJQUF2QixDQUE0QixhQUE1QixFQUEyQ2tGLElBQTNDLENBQWdEQSxJQUFoRDtBQUNBOztBQUVEOzs7Ozs7Ozs7O3VDQU9tQztBQUFBLE9BQWhCRSxPQUFnQix1RUFBTixJQUFNOztBQUNsQztBQUNBLE9BQUlDLFNBQVNGLEVBQUUsS0FBS0wsYUFBUCxDQUFiOztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0VRLGtCQUFlRCxPQUFPckYsSUFBUCxDQUFZLFVBQVosRUFBd0JJLE1BQXhCLENBQStCLFVBQUNhLENBQUQsRUFBSXdELEVBQUo7QUFBQSxXQUFXLENBQUNVLEVBQUVWLEVBQUYsRUFBTWMsUUFBTixDQUFlLFlBQWYsQ0FBWjtBQUFBLElBQS9CLEVBQXlFckUsTUFMNUY7O0FBTUU7QUFDRXNFLG1CQUFnQkwsRUFBRSxLQUFLTixlQUFQLEVBQXdCN0UsSUFBeEIsQ0FBNkIsZ0JBQTdCLENBUHBCOztBQVNBO0FBQ0E7O0FBWmtDLGVBYWJzRixlQUFlLENBQUNELE1BQUQsRUFBU0csYUFBVCxDQUFmLEdBQXlDLENBQUNBLGFBQUQsRUFBZ0JILE1BQWhCLENBYjVCO0FBQUE7QUFBQSxPQWE3QkksS0FiNkI7QUFBQSxPQWF0QkMsS0Fic0I7O0FBY2xDQSxTQUFNQyxRQUFOLENBQWUsY0FBZjtBQUNBRixTQUFNRyxXQUFOLENBQWtCLGNBQWxCOztBQUVBO0FBQ0EsT0FBSSxDQUFDUixPQUFMLEVBQWM7QUFDYjtBQUNBQSxjQUFVRSxlQUFlLEdBQWYsR0FBcUJILEVBQUUsS0FBS0osV0FBUCxFQUFvQi9FLElBQXBCLENBQXlCLFdBQXpCLEVBQXNDNkYsS0FBdEMsR0FBOENDLElBQTlDLEdBQXFEQyxPQUFyRCxDQUE2RCxNQUE3RCxFQUFxRSxFQUFyRSxDQUEvQjtBQUNBOztBQUVEO0FBQ0FaLEtBQUUsS0FBS04sZUFBUCxFQUF3Qm1CLE9BQXhCLENBQWdDLFNBQWhDLEVBQTJDaEcsSUFBM0MsQ0FBZ0QsYUFBaEQsRUFBK0Q4RixJQUEvRCxDQUFvRVIsaUJBQWlCVyxTQUFqQixHQUE2QmIsT0FBN0IsR0FBdUMsVUFBM0c7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztpQ0FhZWMsTSxFQUFRO0FBQ3RCLE9BQUlDLGdCQUFnQmhCLEVBQUUsS0FBS0wsYUFBUCxDQUFwQjtBQUFBLE9BQ0lzQixhQUFnQkQsY0FBY25HLElBQWQsQ0FBbUIsZ0JBQW5CLENBRHBCO0FBQUEsT0FFSXFHLGFBQWdCRixjQUFjbkcsSUFBZCxDQUFtQixhQUFuQixDQUZwQjtBQUFBLE9BR0lzRyxVQUFnQm5CLEVBQUVvQixTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQUYsQ0FIcEI7O0FBS0E7QUFDQSxPQUFJSCxXQUFXSSxRQUFYLENBQW9CLG1CQUFtQlAsT0FBT2hHLEVBQTFCLEdBQStCLEtBQW5ELEVBQTBEZ0IsTUFBMUQsR0FBbUUsQ0FBdkUsRUFBMEU7O0FBRTFFO0FBQ0FvRixXQUFRLENBQVIsRUFBV0ksT0FBWCxDQUFtQkMsS0FBbkIsR0FBMkJULE9BQU9oRyxFQUFsQztBQUNBb0csV0FBUU0sV0FBUixDQUFvQixXQUFwQixFQUFpQ1YsT0FBT2hHLEVBQVAsSUFBYTJHLFNBQVNDLFNBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QixDQUF4QixDQUFULENBQTlDOztBQUVBWixjQUFXSyxRQUFYLENBQW9CLElBQXBCLEVBQTBCUSxJQUExQixDQUErQixZQUFXO0FBQ3pDLFFBQUlyRyxPQUFPLEtBQUs4RixPQUFMLENBQWE5RixJQUF4QjtBQUFBLFFBQThCc0csS0FBS1gsU0FBU0MsYUFBVCxDQUF1QixJQUF2QixDQUFuQzs7QUFFQSxRQUFJNUYsU0FBUyxLQUFiLEVBQW9CO0FBQUU7QUFDckJzRyxRQUFHQyxTQUFILEdBQWUsMkJBQWY7QUFDQSxLQUZELE1BRU8sSUFBSXZHLFFBQVFBLEtBQUsrRCxRQUFMLENBQWMsUUFBZCxDQUFaLEVBQXFDO0FBQzNDO0FBQ0F1QyxRQUFHQyxTQUFILEdBQWVDLE9BQU9DLE9BQVAsQ0FBZXpHLElBQWYsRUFBcUJzRixNQUFyQixJQUErQixLQUFLaUIsU0FBcEMsR0FBZ0QsR0FBL0Q7QUFDQSxLQUhNLE1BR0E7QUFDTkQsUUFBR0MsU0FBSCxHQUFlQyxPQUFPQyxPQUFQLENBQWV6RyxJQUFmLEVBQXFCc0YsTUFBckIsTUFBaUNELFNBQWpDLEdBQTZDQyxPQUFPdEYsSUFBUCxDQUE3QyxHQUE0RCxHQUEzRTtBQUNBOztBQUVEMEYsWUFBUWdCLE1BQVIsQ0FBZUosRUFBZjtBQUNBLElBYkQ7O0FBZUFiLGNBQVdpQixNQUFYLENBQWtCaEIsT0FBbEI7O0FBRUEsVUFBT0EsUUFBUSxDQUFSLENBQVA7QUFDQTs7QUFFRDs7Ozs7OytCQUdhO0FBQ1puQixLQUFFLEtBQUtMLGFBQVAsRUFBc0I5RSxJQUF0QixDQUEyQixPQUEzQixFQUFvQ3VILEtBQXBDO0FBQ0E7O0FBRUQ7Ozs7Ozs7O3dDQUsrQjtBQUFBOztBQUFBLE9BQVhySCxFQUFXLHVFQUFOLElBQU07O0FBQzlCO0FBQ0E7QUFDQWlGLEtBQUUsS0FBS0wsYUFBUCxFQUFzQjlFLElBQXRCLENBQTJCLFVBQTNCLEVBQXVDSSxNQUF2QyxDQUE4QyxVQUFDYSxDQUFELEVBQUl3RCxFQUFKO0FBQUEsV0FBV0EsR0FBR2lDLE9BQUgsQ0FBV0MsS0FBWCxJQUFvQnpHLEVBQS9CO0FBQUEsSUFBOUMsRUFBaUZ5RixRQUFqRixDQUEwRixXQUExRixFQUF1R0UsS0FBdkcsR0FBK0cyQixRQUEvRyxHQUEwSDVCLFdBQTFILENBQXNJLFdBQXRJOztBQUVBO0FBQ0FULEtBQUUsS0FBS0gsY0FBUCxFQUF1QnlDLE1BQXZCLENBQThCLEtBQTlCO0FBQ0M7QUFERCxJQUVFekgsSUFGRixDQUVPLHlCQUZQLEVBRWtDMEgsS0FGbEMsQ0FFd0M7QUFBQSxXQUFNLE1BQUtDLG1CQUFMLEVBQU47QUFBQSxJQUZ4Qzs7QUFJQSxPQUFJekgsS0FBSyxDQUFDLENBQVYsRUFBYTRHLFNBQVNDLElBQVQsR0FBZ0JGLFNBQVMzRyxFQUFULENBQWhCO0FBQ2I7O0FBRUQ7Ozs7Ozt3Q0FHc0I7QUFDckI7QUFDQWlGLEtBQUUsS0FBS0wsYUFBUCxFQUFzQjlFLElBQXRCLENBQTJCLFVBQTNCLEVBQXVDNEYsV0FBdkMsQ0FBbUQsV0FBbkQ7QUFDQTtBQUNBVCxLQUFFLEtBQUtILGNBQVAsRUFBdUI1RSxNQUF2QixDQUE4QixVQUFDYSxDQUFELEVBQUl3RCxFQUFKO0FBQUEsV0FBV1UsRUFBRVYsRUFBRixFQUFNUCxNQUFOLENBQWEsS0FBYixFQUFvQmhELE1BQXBCLEtBQStCLENBQTFDO0FBQUEsSUFBOUIsRUFBMkUwRyxJQUEzRSxDQUFnRnJCLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEY7O0FBRUFNLFlBQVNDLElBQVQsR0FBZ0IsRUFBaEI7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7c0NBV29CYyxPLEVBQVNDLFcsRUFBYXpELFEsRUFBa0Y7QUFBQSxPQUF4RTBELGVBQXdFLHVFQUF0RCxJQUFzRDtBQUFBLE9BQWhEQyxRQUFnRCx1RUFBckMsTUFBcUM7QUFBQSxPQUE3QkMsb0JBQTZCLHVFQUFOLElBQU07O0FBQzNIO0FBQ0EsT0FBSUMsU0FBUyxJQUFJQyxNQUFKLENBQVdMLFdBQVgsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBcEMsQ0FBYjtBQUNBSSxVQUFPRSxRQUFQLEdBQWtCLElBQWxCO0FBQ0FQLFdBQVFOLEtBQVIsR0FBZ0JELE1BQWhCLENBQXVCWSxNQUF2Qjs7QUFFQTtBQUNBN0QsWUFBU3pDLE9BQVQsQ0FBaUIsYUFBSztBQUNyQixRQUFJcUcseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2xDSixhQUFRUCxNQUFSLENBQWUsSUFBSWEsTUFBSixDQUFXLE1BQU16SSxFQUFFUSxFQUFSLEdBQWEsR0FBYixHQUFtQitILHFCQUFxQnZJLENBQXJCLENBQW5CLEdBQTZDLEdBQTdDLEdBQW1EQSxFQUFFc0ksUUFBRixDQUE5RCxFQUEyRXRJLEVBQUVRLEVBQTdFLEVBQWlGLEtBQWpGLEVBQXdGUixFQUFFUSxFQUFGLEtBQVM2SCxlQUFqRyxDQUFmO0FBQ0EsS0FGRCxNQUVPO0FBQ05GLGFBQVFQLE1BQVIsQ0FBZSxJQUFJYSxNQUFKLENBQVcsTUFBTXpJLEVBQUVRLEVBQVIsR0FBYSxHQUFiLEdBQW1CUixFQUFFc0ksUUFBRixDQUE5QixFQUEyQ3RJLEVBQUVRLEVBQTdDLEVBQWlELEtBQWpELEVBQXdEUixFQUFFUSxFQUFGLEtBQVM2SCxlQUFqRSxDQUFmO0FBQ0E7QUFDRCxJQU5EOztBQVFBRixXQUFRUSxZQUFSLENBQXFCLFNBQXJCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt5QkFNT3RGLEssRUFBdUQ7QUFBQSxPQUFoRHNCLFFBQWdELHVFQUFyQyxFQUFxQztBQUFBLE9BQWpDaUUsY0FBaUM7QUFBQSxPQUFqQkMsVUFBaUIsdUVBQUosRUFBSTs7QUFDN0QsT0FBSUMsT0FBTyxJQUFYOztBQUVBQSxRQUFLQyxVQUFMOztBQUVBLE9BQUlwRSxTQUFTbkQsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN4Qm1ELGFBQVN6QyxPQUFULENBQWlCLFVBQVM2QyxFQUFULEVBQWE7QUFDN0IsU0FBSXlCLFNBQVNvQyxlQUFlN0QsRUFBZixDQUFiOztBQUVBOEQsZ0JBQVczRyxPQUFYLENBQW1CLGVBQU87QUFDekJzRSxhQUFPd0MsR0FBUCxJQUFjbEUsT0FBTzBCLE9BQU93QyxHQUFQLENBQVAsRUFBb0IzQyxPQUFwQixDQUE0QixJQUFJNEMsTUFBSixDQUFXLE1BQU01RixLQUFOLEdBQWMsR0FBekIsRUFBOEIsSUFBOUIsQ0FBNUIsRUFBaUUscUJBQWpFLENBQWQ7QUFDQSxNQUZEOztBQUlBLFNBQUlBLFVBQVVvQyxFQUFFLHFCQUFGLEVBQXlCeUQsR0FBekIsRUFBZCxFQUE4QztBQUM3Q0osV0FBS0ssY0FBTCxDQUFvQjNDLE1BQXBCO0FBQ0FzQyxXQUFLTSxrQkFBTCxDQUEyQnpFLFNBQVNuRCxNQUFwQyxnQkFBb0RtRCxTQUFTbkQsTUFBVCxLQUFvQixDQUFwQixHQUF3QixHQUF4QixHQUE4QixFQUFsRixvQkFBNkY2QixLQUE3RjtBQUNBO0FBQ0QsS0FYRDtBQVlBLElBYkQsTUFhTztBQUNOeUYsU0FBS00sa0JBQUwsMkJBQTJDL0YsS0FBM0M7QUFDQTtBQUVEOztBQUVEOzs7Ozs7Ozs7OztxQ0FRc0Y7QUFBQSxPQUE5RGdHLE9BQThELHVFQUFwRCxtQkFBb0Q7QUFBQSxPQUEvQkMsSUFBK0IsdUVBQXhCLFFBQXdCO0FBQUEsT0FBZEMsUUFBYyx1RUFBSCxDQUFHOztBQUNyRjtBQUNBOUQsS0FBRSxxQkFBRixFQUF5QitELE1BQXpCOztBQUVBO0FBQ0EsT0FBTUMsTUFBTTVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBMkMsT0FBSWpKLEVBQUosR0FBUyxvQkFBVDtBQUNBaUosT0FBSUMsU0FBSixDQUFjQyxHQUFkLENBQWtCLE9BQWxCLGFBQW9DTCxJQUFwQyxFQUE0QyxvQkFBNUM7QUFDQUcsT0FBSUcsWUFBSixDQUFpQixNQUFqQixFQUF5QixPQUF6QixFQVJxRixDQVFsRDtBQUNuQzs7QUFFQUgsT0FBSUksV0FBSixHQUFrQlIsT0FBbEI7QUFDQXhDLFlBQVNpRCxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLEdBQTFCOztBQUVBO0FBQ0FPLGNBQVc7QUFBQSxXQUFNUCxJQUFJRCxNQUFKLEVBQU47QUFBQSxJQUFYLEVBQStCRCxXQUFXLElBQTFDOztBQUVBO0FBQ0E5RCxLQUFFZ0UsR0FBRixFQUFPekIsS0FBUCxDQUFhLFlBQVc7QUFDdkJ2QyxNQUFFLElBQUYsRUFBUXdFLE9BQVI7QUFDQSxJQUZEO0FBR0E7Ozs7OztrQkFHYS9FLFc7Ozs7Ozs7Ozs7Ozs7OztBQy9QZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQmdGLGU7OztBQUNwQiw0QkFBYztBQUFBOztBQUFBOztBQUdiLFFBQUtDLE9BQUwsR0FBZXJLLElBQUlxSyxPQUFKLENBQVlwSyxHQUFaLENBQWdCO0FBQUEsVUFBSyxxQkFBV0MsQ0FBWCxDQUFMO0FBQUEsR0FBaEIsQ0FBZjtBQUhhO0FBSWI7O0FBRUQ7Ozs7Ozs7OztnQ0FLYztBQUNiLHVDQUFXLElBQUlvSyxHQUFKLENBQVEsS0FBS0QsT0FBTCxDQUFhcEssR0FBYixDQUFpQjtBQUFBLFdBQUtzSyxFQUFFZixJQUFQO0FBQUEsSUFBakIsQ0FBUixDQUFYO0FBQ0E7O0FBRUQ7Ozs7Ozs7O29DQUtrQkEsSSxFQUFNO0FBQ3ZCLE9BQUlnQixnQkFBZ0IsS0FBS0gsT0FBTCxDQUFhekosTUFBYixDQUFvQjtBQUFBLFdBQVU2SixPQUFPakIsSUFBUCxJQUFlQSxJQUF6QjtBQUFBLElBQXBCLENBQXBCOztBQUVBLHVDQUFXLElBQUljLEdBQUosQ0FBUUUsY0FBY3ZLLEdBQWQsQ0FBa0I7QUFBQSxXQUFLc0ssRUFBRUcsSUFBUDtBQUFBLElBQWxCLENBQVIsQ0FBWDtBQUNBOztBQUVEOzs7Ozs7OzswQ0FLd0JsQixJLEVBQUtrQixJLEVBQU07QUFDbEMsVUFBTyxLQUFLTCxPQUFMLENBQWF6SixNQUFiLENBQW9CO0FBQUEsV0FBVTZKLE9BQU9qQixJQUFQLElBQWVBLElBQWYsSUFBdUJpQixPQUFPQyxJQUFQLElBQWVBLElBQWhEO0FBQUEsSUFBcEIsQ0FBUDtBQUNBOztBQUdEOzs7Ozs7Ozs7NkJBTVd6SCxHLEVBQUs7QUFDZixVQUFPLEtBQUtvSCxPQUFMLENBQWF6SixNQUFiLENBQW9CO0FBQUEsV0FBVXFDLElBQUluQyxPQUFKLENBQVkySixPQUFPL0osRUFBbkIsSUFBeUIsQ0FBQyxDQUFwQztBQUFBLElBQXBCLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3NCQU1JQSxFLEVBQUk7QUFDUCxVQUFPLEtBQUsySixPQUFMLENBQWE3SixJQUFiLENBQWtCO0FBQUEsV0FBVWlLLE9BQU8vSixFQUFQLEtBQWNBLEVBQXhCO0FBQUEsSUFBbEIsS0FBaUQsSUFBeEQ7QUFDQTs7QUFFRDs7Ozs7Ozs7OzBDQU13QmlLLFksRUFBYztBQUNyQyxVQUFPLEtBQUtOLE9BQUwsQ0FBYTdKLElBQWIsQ0FBa0I7QUFBQSxXQUFLb0ssRUFBRUMsU0FBRixLQUFnQkYsWUFBckI7QUFBQSxJQUFsQixDQUFQO0FBQ0E7Ozs7OztrQkFqRW1CUCxlOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCVSxlOzs7QUFDcEIsNEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxRQUFMLEdBQWdCL0ssSUFBSStLLFFBQUosQ0FBYTlLLEdBQWIsQ0FBaUI7QUFBQSxVQUFLLHNCQUFZQyxDQUFaLENBQUw7QUFBQSxHQUFqQixDQUFoQjtBQUhhO0FBSWI7O0FBRUQ7Ozs7Ozs7Ozs7OEJBTVkrQyxHLEVBQUs7QUFDaEIsVUFBTyxLQUFLOEgsUUFBTCxDQUFjbkssTUFBZCxDQUFxQjtBQUFBLFdBQVdxQyxJQUFJbkMsT0FBSixDQUFZa0ssUUFBUXRLLEVBQXBCLElBQTBCLENBQUMsQ0FBdEM7QUFBQSxJQUFyQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztzQkFNSUEsRSxFQUFJO0FBQ1AsVUFBTyxLQUFLcUssUUFBTCxDQUFjdkssSUFBZCxDQUFtQjtBQUFBLFdBQVd3SyxRQUFRdEssRUFBUixLQUFlQSxFQUExQjtBQUFBLElBQW5CLEtBQW9ELElBQTNEO0FBQ0E7Ozs7OztrQkF6Qm1Cb0ssZTs7Ozs7Ozs7O0FDWHJCO0FBQ0FuRixFQUFFLE1BQUYsRUFBVXNGLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFNBQXRCLEVBQWlDLGFBQUs7QUFDckN0RixHQUFFekYsRUFBRWdMLGFBQUosRUFBbUJ4RyxNQUFuQixHQUE0QnlCLFFBQTVCLENBQXFDLFFBQXJDLEVBQStDNkIsUUFBL0MsR0FBMEQ1QixXQUExRCxDQUFzRSxRQUF0RTtBQUNBLENBRkQ7O0FBSUE7QUFDQVQsRUFBRSx5QkFBRixFQUE2QndGLE9BQTdCOztBQUVBO0FBQ0F4RixFQUFFLGFBQUYsRUFBaUJ5RixjQUFqQjs7QUFFQTtBQUNBekYsRUFBRW9CLFFBQUYsRUFBWWtFLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFVBQVMvSyxDQUFULEVBQVk7QUFDcEQsS0FBSW1MLFdBQVcxRixFQUFFLElBQUYsRUFBUWEsT0FBUixDQUFnQixxQkFBaEIsRUFBdUNTLFFBQXZDLENBQWdELGVBQWhELEVBQWlFQSxRQUFqRSxDQUEwRSxPQUExRSxFQUFtRm1DLEdBQW5GLEVBQWY7QUFBQSxLQUNJa0MsU0FBVzNGLEVBQUUsa0JBQUYsQ0FEZjs7QUFHQTJGLFFBQU9DLEtBQVAsQ0FBYSxNQUFiOztBQUVBRCxRQUFPOUssSUFBUCxDQUFZLDBCQUFaLEVBQXdDNEksR0FBeEMsQ0FBNENpQyxRQUE1QztBQUNBQyxRQUFPOUssSUFBUCxDQUFZLDRCQUFaLEVBQTBDNEksR0FBMUMsQ0FBOEN6RCxFQUFFLElBQUYsRUFBUWEsT0FBUixDQUFnQixtQkFBaEIsRUFBcUNoRyxJQUFyQyxDQUEwQyxRQUExQyxFQUFvRGdMLElBQXBELENBQXlELE1BQXpELENBQTlDLEVBUG9ELENBTzZEO0FBQ2pILENBUkQ7O0FBVUE3RixFQUFFLDREQUFGLEVBQWdFc0YsRUFBaEUsQ0FBbUUsZUFBbkUsRUFBb0YsWUFBWTtBQUMvRnRGLEdBQUUsSUFBRixFQUFRbkYsSUFBUixDQUFhLGlCQUFiLEVBQ0VpTCxHQURGLENBQ00sbUJBRE4sRUFFRXJDLEdBRkYsQ0FFTSxFQUZOOztBQUlBekQsR0FBRSxJQUFGLEVBQVFuRixJQUFSLENBQWEsb0NBQWIsRUFBbURrSixNQUFuRDs7QUFFQSxLQUFJZ0MsY0FBYyxJQUFJQyxJQUFKLEVBQWxCOztBQUVBaEcsR0FBRSxJQUFGLEVBQVFuRixJQUFSLENBQWEsYUFBYixFQUE0QjRJLEdBQTVCLENBQWdDLENBQUMsT0FBT3NDLFlBQVlFLFFBQVosS0FBeUIsQ0FBaEMsQ0FBRCxFQUFxQ3BLLEtBQXJDLENBQTJDLENBQUMsQ0FBNUMsSUFBaUQsR0FBakQsR0FBdUQsQ0FBQyxNQUFNa0ssWUFBWUcsT0FBWixFQUFQLEVBQThCckssS0FBOUIsQ0FBb0MsQ0FBQyxDQUFyQyxDQUF2RCxHQUFpRyxHQUFqRyxHQUF1R2tLLFlBQVlJLFdBQVosRUFBdkcsR0FBbUksR0FBbkksR0FBeUksQ0FBQyxNQUFNSixZQUFZSyxRQUFaLEVBQVAsRUFBK0J2SyxLQUEvQixDQUFxQyxDQUFDLENBQXRDLENBQXpJLEdBQW9MLEdBQXBMLEdBQTBMLENBQUMsTUFBTWtLLFlBQVlNLFVBQVosRUFBUCxFQUFpQ3hLLEtBQWpDLENBQXVDLENBQUMsQ0FBeEMsQ0FBMU47QUFDQSxDQVZEOztBQVlBbUUsRUFBRW9CLFFBQUYsRUFBWWtFLEVBQVosQ0FBZSxPQUFmLEVBQXdCLCtCQUF4QixFQUF5RCxZQUFXO0FBQ25FdEYsR0FBRSxJQUFGLEVBQVFhLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUJoRyxJQUF6QixDQUE4QixXQUE5QixFQUEyQ3lMLFFBQTNDLENBQW9ELFFBQXBEO0FBQ0EsQ0FGRDs7QUFJQXRHLEVBQUVvQixRQUFGLEVBQVlrRSxFQUFaLENBQWUsT0FBZixFQUF3QixpREFBeEIsRUFBMkUsWUFBVztBQUNyRnRGLEdBQUUsSUFBRixFQUFRYSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCMkQsT0FBekIsQ0FBaUMsR0FBakMsRUFBc0MsWUFBVztBQUNoRHhFLElBQUUsSUFBRixFQUFRK0QsTUFBUjtBQUNBLEVBRkQ7QUFHQSxDQUpEOztBQU1BL0QsRUFBRW9CLFFBQUYsRUFBWWtFLEVBQVosQ0FBZSxtQ0FBZixFQUFvRCxzQkFBcEQsRUFBNEUsVUFBUy9LLENBQVQsRUFBWTtBQUN2RixLQUFJZ00sU0FBU2hNLEVBQUVzSixJQUFGLENBQU8vRCxLQUFQLENBQWEsR0FBYixFQUFrQixDQUFsQixNQUF5QixNQUF0QztBQUNBRSxHQUFFLElBQUYsRUFBUXFDLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUN4SCxJQUFqQyxDQUFzQyxpQkFBdEMsRUFBeUQ0RyxXQUF6RCxDQUFxRSxlQUFyRSxFQUFzRixDQUFDOEUsTUFBdkYsRUFBK0Y5RSxXQUEvRixDQUEyRyxpQkFBM0csRUFBOEg4RSxNQUE5SDtBQUNBLENBSEQ7O0FBS0F2RyxFQUFFLHFCQUFGLEVBQXlCeUQsR0FBekIsQ0FBNkIsRUFBN0I7O0FBRUE7QUFDQXpELEVBQUVvQixRQUFGLEVBQVlrRSxFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsWUFBVztBQUN2RHRGLEdBQUUsSUFBRixFQUFRbkYsSUFBUixDQUFhLHFCQUFiLEVBQW9DMkwsTUFBcEM7QUFDQSxDQUZEOztBQUlBO0FBQ0F4RyxFQUFFb0IsUUFBRixFQUFZa0UsRUFBWixDQUFlLE9BQWYsRUFBd0IseURBQXhCLEVBQW1GLFlBQVc7QUFDN0Z0RixHQUFFLEtBQUt1QixPQUFMLENBQWFrRixNQUFmLEVBQXVCYixLQUF2QixDQUE2QixNQUE3QjtBQUNBLENBRkQ7O0FBSUEsU0FBU2MsZUFBVCxDQUF5QkMsYUFBekIsRUFBd0N6SSxLQUF4QyxFQUErQzBJLElBQS9DLEVBQXFEO0FBQ3BENUcsR0FBRTJHLGFBQUYsRUFBaUJ4RSxNQUFqQixDQUF3QixJQUFJYSxNQUFKLENBQVc0RCxJQUFYLEVBQWlCMUksS0FBakIsQ0FBeEIsRUFBaURnRixZQUFqRCxDQUE4RCxTQUE5RCxFQUF5RUEsWUFBekUsQ0FBc0YsS0FBdEYsRUFBNkYwRCxJQUE3RjtBQUNBOztBQUVELElBQUlDLG9CQUFvQjFNLE9BQU8wTSxpQkFBUCxHQUEyQixJQUFuRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJDLE87QUFDcEIsd0JBUUc7QUFBQSxNQVBFL0wsRUFPRixRQVBGQSxFQU9FO0FBQUEsTUFOU2dNLE1BTVQsUUFORkMsU0FNRTtBQUFBLE1BTE9sTSxJQUtQLFFBTEZtTSxPQUtFO0FBQUEsTUFKU3ZMLE1BSVQsUUFKRndMLFNBSUU7QUFBQSxNQUhGQyxPQUdFLFFBSEZBLE9BR0U7QUFBQSxNQUZnQkMsU0FFaEIsUUFGRkMsZ0JBRUU7QUFBQSxNQURVQyxhQUNWLFFBREZDLFVBQ0U7O0FBQUE7O0FBQ0YsT0FBS3hNLEVBQUwsR0FBdUJBLEVBQXZCO0FBQ0EsT0FBS2dNLE1BQUwsR0FBdUJBLE1BQXZCO0FBQ0EsT0FBS2pNLElBQUwsR0FBdUJBLElBQXZCO0FBQ0EsT0FBS1ksTUFBTCxHQUF1QkEsTUFBdkI7QUFDQSxPQUFLeUwsT0FBTCxHQUF1QkEsT0FBdkI7QUFDQSxPQUFLSSxVQUFMLEdBQXVCSCxTQUF2QjtBQUNBLE9BQUtJLGVBQUwsR0FBdUJGLGFBQXZCO0FBQ0E7Ozs7c0JBRVk7QUFDWixVQUFRLDRCQUFELENBQXFCakosR0FBckIsQ0FBeUIsS0FBS29KLE9BQTlCLENBQVA7QUFDQSxHO29CQUVVVixNLEVBQVE7QUFDbEIsUUFBS1UsT0FBTCxHQUFlVixNQUFmO0FBQ0E7OztzQkFFVTtBQUNWLFVBQVEsNkJBQUQsQ0FBc0JXLE9BQXRCLENBQThCLEtBQUtyTSxLQUFuQyxDQUFQO0FBQ0EsRztvQkFFUVAsSSxFQUFNO0FBQ2QsUUFBS08sS0FBTCxHQUFhUCxJQUFiO0FBQ0E7OztzQkFFWTtBQUNaLFVBQVEsNkJBQUQsQ0FBc0I2TSxTQUF0QixDQUFnQyxLQUFLdkssT0FBckMsQ0FBUDtBQUNBLEc7b0JBRVUxQixNLEVBQVE7QUFDbEIsUUFBSzBCLE9BQUwsR0FBZTFCLE1BQWY7QUFDQTs7Ozs7O2tCQXpDbUJvTCxPOzs7Ozs7QUNYckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCYyxJO0FBQ3BCLHFCQU1HO0FBQUEsTUFMRjdNLEVBS0UsUUFMRkEsRUFLRTtBQUFBLE1BSkY4TSxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhTQyxNQUdULFFBSEZDLFNBR0U7QUFBQSxNQUZXQyxRQUVYLFFBRkZDLFdBRUU7QUFBQSxNQURGek4sT0FDRSxRQURGQSxPQUNFOztBQUFBOztBQUNGLE9BQUtPLEVBQUwsR0FBZ0JBLEVBQWhCO0FBQ0EsT0FBSzhNLElBQUwsR0FBZ0JBLElBQWhCO0FBQ0EsT0FBS0MsTUFBTCxHQUFnQkEsTUFBaEIsQ0FIRSxDQUd3QjtBQUMxQixPQUFLRSxRQUFMLEdBQWdCQSxRQUFoQixDQUpFLENBSXdCO0FBQzFCLE9BQUt4TixPQUFMLEdBQWdCQSxPQUFoQixDQUxFLENBS3dCO0FBQzFCOzs7O3NCQUVZO0FBQ1osVUFBUSw0QkFBRCxDQUFxQjZELEdBQXJCLENBQXlCLEtBQUs2SixPQUE5QixDQUFQO0FBQ0EsRztvQkFFVUosTSxFQUFRO0FBQ2xCLFFBQUtJLE9BQUwsR0FBZUosTUFBZjtBQUNBOzs7c0JBRWM7QUFDZCxVQUFRLDRCQUFELENBQXFCekosR0FBckIsQ0FBeUIsS0FBSzhKLFNBQTlCLENBQVA7QUFDQSxHO29CQUVZSCxRLEVBQVU7QUFDdEIsUUFBS0csU0FBTCxHQUFpQkgsUUFBakI7QUFDQTs7O3NCQUVhO0FBQ2IsVUFBUSw2QkFBRCxDQUFzQkksa0JBQXRCLENBQXlDLEtBQUtyTixFQUE5QyxDQUFQO0FBQ0EsRztvQkFFV1AsTyxFQUFTO0FBQ3BCLFFBQUtVLFFBQUwsR0FBZ0JWLE9BQWhCO0FBQ0E7Ozs7OztrQkFyQ21Cb04sSTs7Ozs7Ozs7Ozs7Ozs7O0FDVnJCOzs7Ozs7OztBQUVBOzs7OztJQUtxQlMsUTtBQUNwQix5QkFZRztBQUFBLE1BWEZ0TixFQVdFLFFBWEZBLEVBV0U7QUFBQSxNQVZGNkwsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURjBCLEtBU0UsUUFURkEsS0FTRTtBQUFBLE1BUlNDLEdBUVQsUUFSRkMsU0FRRTtBQUFBLE1BUEZDLFVBT0UsUUFQRkEsVUFPRTtBQUFBLE1BTllDLEtBTVosUUFORkMsWUFNRTtBQUFBLGtDQUxGQyxlQUtFO0FBQUEsTUFMZUMsV0FLZix3Q0FMNkIsRUFLN0I7QUFBQSwyQkFKRmIsUUFJRTtBQUFBLE1BSkZBLFFBSUUsaUNBSlMsS0FJVDtBQUFBLDZCQUhGYyxVQUdFO0FBQUEsTUFIRkEsVUFHRSxtQ0FIV0QsWUFBWTlNLE1BQVosR0FBcUIsQ0FHaEM7QUFBQSwwQkFGRmdOLE9BRUU7QUFBQSxNQUZGQSxPQUVFLGdDQUZRLEtBRVI7QUFBQSx3QkFERkMsS0FDRTtBQUFBLE1BREZBLEtBQ0UsOEJBRE0sS0FDTjs7QUFBQTs7QUFDRixPQUFLak8sRUFBTCxHQUFVQSxFQUFWO0FBQ0EsT0FBSzZMLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUswQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLRSxVQUFMLEdBQWtCQSxXQUFXN0IsSUFBN0I7QUFDQSxPQUFLcUMsV0FBTCxHQUFtQlIsV0FBVzFOLEVBQTlCO0FBQ0EsT0FBSzJOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtHLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBSzFLLE1BQUwsR0FBYyxFQUFDNkosa0JBQUQsRUFBV2UsZ0JBQVgsRUFBb0JDLFlBQXBCLEVBQWQ7O0FBRUE7QUFDQSxPQUFLN0ssTUFBTCxDQUFZK0ssSUFBWixHQUFtQixLQUFLL0ssTUFBTCxDQUFZNkosUUFBWixJQUF3QixLQUFLN0osTUFBTCxDQUFZNEssT0FBcEMsSUFBK0MsS0FBSzVLLE1BQUwsQ0FBWTZLLEtBQTNELElBQW9FLEtBQUs3SyxNQUFMLENBQVlnTCxRQUFoRixJQUE0RixLQUEvRztBQUNBOztBQUVEOzs7Ozs7O3NCQUdhO0FBQ1osVUFBTyxLQUFLaEwsTUFBTCxDQUFZK0ssSUFBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdpQjtBQUNoQixVQUFPLEtBQUsvSyxNQUFMLENBQVk2SixRQUFuQjtBQUNBOztBQUVEOzs7Ozs7c0JBR2dCO0FBQ2YsVUFBTyxLQUFLN0osTUFBTCxDQUFZNEssT0FBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdjO0FBQ2IsVUFBTyxLQUFLNUssTUFBTCxDQUFZNkssS0FBbkI7QUFDQTs7QUFFRDs7Ozs7O3NCQUdrQjtBQUNqQixVQUFRLG9DQUFELENBQTJCSSxpQkFBM0IsQ0FBNkMsS0FBSzdLLFlBQWxELENBQVA7QUFDQTs7QUFFRDs7OztvQkFHZ0JzSyxXLEVBQWE7QUFDNUIsUUFBS3RLLFlBQUwsR0FBb0JzSyxXQUFwQjtBQUNBOztBQUVEOzs7Ozs7Ozs7O2dDQU84QjtBQUFBLE9BQVhRLElBQVcsdUVBQUosRUFBSTs7QUFDN0JBLFFBQUtiLFNBQUwsR0FBaUJhLEtBQUtkLEdBQXRCO0FBQ0FjLFFBQUtWLFlBQUwsR0FBb0JVLEtBQUtYLEtBQXpCO0FBQ0FXLFFBQUtULGVBQUwsR0FBdUJTLEtBQUtSLFdBQTVCO0FBQ0FRLFFBQUtDLGFBQUwsR0FBcUJELEtBQUtaLFVBQTFCO0FBSjZCLGNBS2IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxPQUFoQyxDQUxhO0FBSzdCLDRDQUEwRDtBQUFyRCxRQUFJbEYsY0FBSjtBQUNKOEYsU0FBSzlGLEdBQUwsSUFBWThGLEtBQUtsTCxNQUFMLENBQVlvRixHQUFaLElBQW9CLE1BQU04RixLQUFLUCxVQUFMLEdBQWtCLENBQXhCLENBQXBCLEdBQWtELENBQTlEO0FBQ0E7QUFDRE8sUUFBS1AsVUFBTCxHQUFrQk8sS0FBS1AsVUFBTCxJQUFtQixDQUFyQztBQUNBLFVBQU9PLElBQVA7QUFDQTs7Ozs7O2tCQXZGbUJoQixROzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQmtCLGE7QUFDcEIsOEJBS0c7QUFBQSxNQUpGeE8sRUFJRSxRQUpGQSxFQUlFO0FBQUEsTUFIRjZMLElBR0UsUUFIRkEsSUFHRTtBQUFBLE1BRlM3SCxNQUVULFFBRkZ5SyxTQUVFO0FBQUEsTUFERmxJLFFBQ0UsUUFERkEsUUFDRTs7QUFBQTs7QUFDRixPQUFLdkcsRUFBTCxHQUFnQkEsRUFBaEI7QUFDQSxPQUFLNkwsSUFBTCxHQUFnQkEsSUFBaEI7QUFDQSxPQUFLN0gsTUFBTCxHQUFnQkEsTUFBaEI7QUFDQSxPQUFLdUMsUUFBTCxHQUFnQkEsUUFBaEIsQ0FKRSxDQUl3QjtBQUMxQjs7OztzQkFFWTtBQUNaLFVBQVEsb0NBQUQsQ0FBMkJtSSxnQkFBM0IsQ0FBNEMsS0FBSzlLLE9BQWpELENBQVA7QUFDQSxHO29CQUVVSSxNLEVBQVE7QUFDbEIsUUFBS0osT0FBTCxHQUFlSSxNQUFmO0FBQ0E7OztzQkFFYztBQUNkLFVBQVEsb0NBQUQsQ0FBMkJxSyxpQkFBM0IsQ0FBNkMsS0FBS00sU0FBbEQsQ0FBUDtBQUNBLEc7b0JBRVlwSSxRLEVBQVU7QUFDdEIsUUFBS29JLFNBQUwsR0FBaUJwSSxRQUFqQjtBQUNBOzs7Ozs7a0JBM0JtQmlJLGE7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJJLGtCO0FBQ3BCLG1DQUtHO0FBQUEsTUFKRjVPLEVBSUUsUUFKRkEsRUFJRTtBQUFBLE1BSFFtQixPQUdSLFFBSEYwTixRQUdFO0FBQUEsTUFGaUJyTSxlQUVqQixRQUZGc00saUJBRUU7QUFBQSxNQURGclAsT0FDRSxRQURGQSxPQUNFOztBQUFBOztBQUNGLE9BQUtPLEVBQUwsR0FBc0JBLEVBQXRCO0FBQ0EsT0FBS2lDLEtBQUwsR0FBc0JkLE9BQXRCO0FBQ0EsT0FBSzROLGNBQUwsR0FBc0J2TSxlQUF0QjtBQUNBLE9BQUsvQyxPQUFMLEdBQXNCQSxPQUF0QjtBQUNBOzs7O3NCQUVXO0FBQ1gsVUFBUSw0QkFBRCxDQUFtQjZELEdBQW5CLENBQXVCLEtBQUsvQixNQUE1QixDQUFQO0FBQ0EsRztvQkFFU1UsSyxFQUFPO0FBQ2hCLFFBQUtWLE1BQUwsR0FBY1UsS0FBZDtBQUNBOzs7c0JBRW9CO0FBQ3BCLFVBQVEsb0NBQUQsQ0FBMkJ5TSxnQkFBM0IsQ0FBNEMsS0FBSzVLLGVBQWpELENBQVA7QUFDQSxHO29CQUVrQlAsYSxFQUFlO0FBQ2pDLFFBQUtPLGVBQUwsR0FBdUJQLGFBQXZCO0FBQ0E7Ozs7OztrQkEzQm1CcUwsa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCSSxNO0FBQ3BCLHVCQUtHO0FBQUEsTUFKRmhQLEVBSUUsUUFKRkEsRUFJRTtBQUFBLE1BSEZVLElBR0UsUUFIRkEsSUFHRTtBQUFBLE1BRkZtTCxJQUVFLFFBRkZBLElBRUU7QUFBQSxNQURGcE0sT0FDRSxRQURGQSxPQUNFOztBQUFBOztBQUNGLE9BQUtPLEVBQUwsR0FBZUEsRUFBZjtBQUNBLE9BQUtVLElBQUwsR0FBZUEsSUFBZixDQUZFLENBRXNCO0FBQ3hCLE9BQUttTCxJQUFMLEdBQWVBLElBQWYsQ0FIRSxDQUdzQjtBQUN4QixPQUFLcE0sT0FBTCxHQUFlQSxPQUFmLENBSkUsQ0FJc0I7QUFDeEI7Ozs7c0JBRWE7QUFDYixVQUFRLDZCQUFELENBQXNCd1Asa0JBQXRCLENBQXlDLEtBQUt2TyxJQUE5QyxDQUFQO0FBQ0EsRztvQkFFV2pCLE8sRUFBUztBQUNwQixRQUFLVSxRQUFMLEdBQWdCVixPQUFoQjtBQUNBOzs7Ozs7a0JBbkJtQnVQLE07Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7OztJQUtxQkUsTTtBQUNwQix1QkFrQkc7QUFBQSxNQWpCRmxQLEVBaUJFLFFBakJGQSxFQWlCRTtBQUFBLE1BaEJTZ00sTUFnQlQsUUFoQkZDLFNBZ0JFO0FBQUEsTUFmRjVNLEtBZUUsUUFmRkEsS0FlRTtBQUFBLE1BZEZtQixNQWNFLFFBZEZBLE1BY0U7QUFBQSxNQWJjMk8sYUFhZCxRQWJGQyxjQWFFO0FBQUEsTUFaRkMsS0FZRSxRQVpGQSxLQVlFO0FBQUEsTUFYRkMsV0FXRSxRQVhGQSxXQVdFO0FBQUEsTUFWV0MsUUFVWCxRQVZGQyxXQVVFO0FBQUEsTUFURjdGLE9BU0UsUUFURkEsT0FTRTtBQUFBLE1BUkZVLFFBUUUsUUFSRkEsUUFRRTtBQUFBLE1BUEYzSyxRQU9FLFFBUEZBLFFBT0U7QUFBQSxNQU5nQjJNLFNBTWhCLFFBTkZDLGdCQU1FO0FBQUEsTUFMZ0JtRCxTQUtoQixRQUxGQyxnQkFLRTtBQUFBLE1BSlVuRCxhQUlWLFFBSkZDLFVBSUU7QUFBQSxNQUhVbUQsYUFHVixRQUhGQyxVQUdFO0FBQUEsTUFGdUJ4TyxrQkFFdkIsUUFGRnlPLHVCQUVFO0FBQUEsTUFEdUJDLG9CQUN2QixRQURGQyx1QkFDRTs7QUFBQTs7QUFDRixPQUFLL1AsRUFBTCxHQUE0QkEsRUFBNUI7QUFDQSxPQUFLZ00sTUFBTCxHQUE0QkEsTUFBNUI7QUFDQSxPQUFLM00sS0FBTCxHQUE0QkEsS0FBNUIsQ0FIRSxDQUdrQztBQUNwQyxPQUFLbUIsTUFBTCxHQUE0QkEsTUFBNUIsQ0FKRSxDQUlrQztBQUNwQyxPQUFLNE8sY0FBTCxHQUE0QkQsYUFBNUI7QUFDQSxPQUFLRSxLQUFMLEdBQTRCQSxLQUE1QjtBQUNBLE9BQUtDLFdBQUwsR0FBNEJBLFdBQTVCO0FBQ0EsT0FBS0MsUUFBTCxHQUE0QkEsUUFBNUI7QUFDQSxPQUFLNUYsT0FBTCxHQUE0QkEsT0FBNUIsQ0FURSxDQVNvQztBQUN0QyxPQUFLVSxRQUFMLEdBQTRCQSxRQUE1QixDQVZFLENBVW9DO0FBQ3RDLE9BQUszSyxRQUFMLEdBQTRCQSxRQUE1QixDQVhFLENBV29DO0FBQ3RDLE9BQUs4TSxVQUFMLEdBQTRCSCxTQUE1QjtBQUNBLE9BQUt1RCxVQUFMLEdBQTRCSCxTQUE1QjtBQUNBLE9BQUtoRCxlQUFMLEdBQTRCRixhQUE1QjtBQUNBLE9BQUt5RCxlQUFMLEdBQTRCTCxhQUE1QjtBQUNBLE9BQUszTixvQkFBTCxHQUE0Qlosa0JBQTVCO0FBQ0EsT0FBS1csb0JBQUwsR0FBNEIrTixvQkFBNUI7QUFDQTs7OztzQkFFVztBQUNYLFVBQVEsNkJBQUQsQ0FBc0JHLGtCQUF0QixDQUF5QyxLQUFLalEsRUFBOUMsQ0FBUDtBQUNBLEc7b0JBRVNYLEssRUFBTztBQUNoQixRQUFLNkIsTUFBTCxHQUFjN0IsS0FBZDtBQUNBOzs7c0JBRVk7QUFDWixVQUFRLDZCQUFELENBQXNCNlEsU0FBdEIsQ0FBZ0MsS0FBS0MsT0FBckMsQ0FBUDtBQUNBLEc7b0JBRVUzUCxNLEVBQVE7QUFDbEIsUUFBSzJQLE9BQUwsR0FBZTNQLE1BQWY7QUFDQTs7O3NCQUVvQjtBQUNwQixVQUFRLDZCQUFELENBQXNCNFAsZ0JBQXRCLENBQXVDLEtBQUtDLGVBQTVDLENBQVA7QUFDQSxHO29CQUVrQmxCLGEsRUFBZTtBQUNqQyxRQUFLa0IsZUFBTCxHQUF1QmxCLGFBQXZCO0FBQ0E7OztzQkFFWTtBQUNaLFVBQVEsNEJBQUQsQ0FBbUI3TCxHQUFuQixDQUF1QixLQUFLNkosT0FBNUIsQ0FBUDtBQUNBLEc7b0JBRVVKLE0sRUFBUTtBQUNsQixRQUFLSSxPQUFMLEdBQWVKLE1BQWY7QUFDQTs7O3NCQUVhO0FBQ2IsVUFBUSwrQkFBRCxDQUF3QnVELFVBQXhCLENBQW1DLEtBQUtDLFFBQXhDLENBQVA7QUFDQSxHO29CQUVXNUcsTyxFQUFTO0FBQ3BCLFFBQUs0RyxRQUFMLEdBQWdCNUcsT0FBaEI7QUFDQTs7O3NCQUVjO0FBQ2QsVUFBUSwrQkFBRCxDQUF3QjZHLFdBQXhCLENBQW9DLEtBQUtDLFNBQXpDLENBQVA7QUFDQSxHO29CQUVZcEcsUSxFQUFVO0FBQ3RCLFFBQUtvRyxTQUFMLEdBQWlCcEcsUUFBakI7QUFDQTs7O3NCQUVjO0FBQ2QsVUFBUSw2QkFBRCxDQUFzQnFHLGdCQUF0QixDQUF1QyxLQUFLQyxTQUE1QyxDQUFQO0FBQ0EsRztvQkFFWWpSLFEsRUFBVTtBQUN0QixRQUFLaVIsU0FBTCxHQUFpQmpSLFFBQWpCO0FBQ0E7OztzQkFFYztBQUNkLFVBQVEsNkJBQUQsQ0FBc0JrUixVQUF0QixDQUFpQyxLQUFLQyxTQUF0QyxDQUFQO0FBQ0EsRztvQkFFWXRCLFEsRUFBVTtBQUN0QixRQUFLc0IsU0FBTCxHQUFpQnRCLFFBQWpCO0FBQ0E7OztzQkFFMEI7QUFDMUIsVUFBUSxvQ0FBRCxDQUEyQnVCLHFCQUEzQixDQUFpRCxLQUFLeFAscUJBQXRELENBQVA7QUFDQSxHO29CQUV3QjJDLG9CLEVBQXNCO0FBQzlDLFFBQUszQyxxQkFBTCxHQUE2QjJDLG9CQUE3QjtBQUNBOzs7c0JBRTBCO0FBQzFCLFVBQVEsNEJBQUQsQ0FBcUJYLEdBQXJCLENBQXlCLEtBQUtqQyxxQkFBOUIsQ0FBUDtBQUNBLEc7b0JBRXdCeU8sb0IsRUFBc0I7QUFDOUMsUUFBS3pPLHFCQUFMLEdBQTZCeU8sb0JBQTdCO0FBQ0E7OztzQkFFb0I7QUFDcEIsT0FBSWlCLFNBQVNDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0QsTUFBTCxNQUFpQixLQUFLLENBQUwsR0FBUyxDQUExQixDQUFYLElBQTJDLENBQXhELENBRG9CLENBQ3VDO0FBQzNELFVBQVEsb0NBQUQsQ0FBNkJyQyxnQkFBN0IsQ0FBOENxQyxNQUE5QyxDQUFQO0FBQ0E7Ozs7OztrQkExSG1CN0IsTTs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCOzs7Ozs7OztBQUNBOzs7Ozs7SUFNcUJnQyxNO0FBQ3BCLHVCQVNBO0FBQUEsTUFSQ2xSLEVBUUQsUUFSQ0EsRUFRRDtBQUFBLE1BUEM4SSxJQU9ELFFBUENBLElBT0Q7QUFBQSxNQU5Da0IsSUFNRCxRQU5DQSxJQU1EO0FBQUEsTUFMQ0csU0FLRCxRQUxDQSxTQUtEO0FBQUEsTUFKQzFLLE9BSUQsUUFKQ0EsT0FJRDtBQUFBLE1BSG1CK00sVUFHbkIsUUFIQ0YsZ0JBR0Q7QUFBQSxNQUZtQnNELFVBRW5CLFFBRkNGLGdCQUVEOztBQUFBOztBQUNDLE9BQUsxUCxFQUFMLEdBQWFBLEVBQWI7QUFDQSxPQUFLOEksSUFBTCxHQUFjQSxJQUFkO0FBQ0EsT0FBS2tCLElBQUwsR0FBZ0JBLElBQWhCO0FBQ0EsT0FBS0csU0FBTCxHQUFzQkEsU0FBdEI7QUFDQSxPQUFLaEssUUFBTCxHQUFpQlYsT0FBakI7QUFDQSxPQUFLK00sVUFBTCxHQUFtQkEsVUFBbkI7QUFDQSxPQUFLb0QsVUFBTCxHQUFtQkEsVUFBbkI7QUFDQTs7QUFFRDs7Ozs7OztzQkFHYztBQUNiLE9BQUksS0FBS3pQLFFBQVQsRUFBbUI7QUFDbEIsV0FBUSw2QkFBRCxDQUFzQmdSLHFCQUF0QixDQUE0QyxLQUFLaFIsUUFBakQsQ0FBUDtBQUNBO0FBQ0QsVUFBTyxJQUFJaVIsS0FBSixFQUFQO0FBQ0E7O0FBRUQ7Ozs7b0JBR1kzUixPLEVBQVM7QUFDcEIsUUFBS1UsUUFBTCxHQUFnQlYsT0FBaEI7QUFDQTs7Ozs7O2tCQW5DbUJ5UixNOzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7Ozs7O0FBQ0E7Ozs7O0lBS3FCRyxPO0FBQ3BCLHdCQVNBO0FBQUEsTUFSQ3JSLEVBUUQsUUFSQ0EsRUFRRDtBQUFBLE1BUEM2TCxJQU9ELFFBUENBLElBT0Q7QUFBQSxNQU5DcE0sT0FNRCxRQU5DQSxPQU1EO0FBQUEsTUFMQzZSLGdCQUtELFFBTENBLGdCQUtEO0FBQUEsTUFKQ0MsV0FJRCxRQUpDQSxXQUlEO0FBQUEsTUFIbUIvRSxVQUduQixRQUhDRixnQkFHRDtBQUFBLE1BRm1Cc0QsVUFFbkIsUUFGQ0YsZ0JBRUQ7O0FBQUE7O0FBQ0MsT0FBSzFQLEVBQUwsR0FBb0JBLEVBQXBCO0FBQ0EsT0FBSzZMLElBQUwsR0FBb0JBLElBQXBCO0FBQ0EsT0FBSzFMLFFBQUwsR0FBa0JWLE9BQWxCO0FBQ0EsT0FBSzZSLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxPQUFLQyxXQUFMLEdBQW9CQSxXQUFwQjtBQUNBLE9BQUsvRSxVQUFMLEdBQW9CQSxVQUFwQjtBQUNBLE9BQUtvRCxVQUFMLEdBQW9CQSxVQUFwQjtBQUNBOztBQUVEOzs7Ozs7O29DQWlCa0I7QUFDakI7QUFDQSxPQUFJLEtBQUswQixnQkFBVCxFQUEyQjtBQUMxQixXQUFPLGtCQUFQO0FBQ0EsSUFGRCxNQUVPLElBQUksQ0FBQyxLQUFLQSxnQkFBVixFQUE0QjtBQUNsQyxXQUFPLGFBQVA7QUFDQSxJQUZNLE1BRUE7QUFDTixXQUFPLEdBQVA7QUFDQTtBQUNEOzs7c0JBdkJhO0FBQ2IsT0FBSSxLQUFLblIsUUFBVCxFQUFtQjtBQUNsQixXQUFRLDZCQUFELENBQXNCZ1IscUJBQXRCLENBQTRDLEtBQUtoUixRQUFqRCxDQUFQO0FBQ0E7QUFDRCxVQUFPLElBQUlpUixLQUFKLEVBQVA7QUFDQTs7QUFFRDs7OztvQkFHWTNSLE8sRUFBUztBQUNwQixRQUFLVSxRQUFMLEdBQWdCVixPQUFoQjtBQUNBOzs7Ozs7a0JBbkNtQjRSLE87Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkcsWTtBQUNwQiw2QkFPRztBQUFBLE1BTkZ4UixFQU1FLFFBTkZBLEVBTUU7QUFBQSxNQUxTVyxNQUtULFFBTEZ3TCxTQUtFO0FBQUEsTUFKUzNMLE1BSVQsUUFKRmlSLFNBSUU7QUFBQSxNQUhReFAsS0FHUixRQUhGNE0sUUFHRTtBQUFBLE1BRmdCeEMsU0FFaEIsUUFGRkMsZ0JBRUU7QUFBQSxNQURVQyxhQUNWLFFBREZDLFVBQ0U7O0FBQUE7O0FBQ0YsT0FBS3hNLEVBQUwsR0FBdUJBLEVBQXZCO0FBQ0EsT0FBS1csTUFBTCxHQUF1QkEsTUFBdkIsQ0FGRSxDQUU2QjtBQUMvQixPQUFLSCxNQUFMLEdBQXVCQSxNQUF2QixDQUhFLENBRzZCO0FBQy9CLE9BQUt5QixLQUFMLEdBQXVCQSxLQUF2QixDQUpFLENBSTZCO0FBQy9CLE9BQUt1SyxVQUFMLEdBQXVCSCxTQUF2QjtBQUNBLE9BQUtJLGVBQUwsR0FBdUJGLGFBQXZCO0FBQ0E7Ozs7c0JBRVk7QUFDWixVQUFRLDZCQUFELENBQXNCSyxTQUF0QixDQUFnQyxLQUFLdkssT0FBckMsQ0FBUDtBQUNBLEc7b0JBRVUxQixNLEVBQVE7QUFDbEIsUUFBSzBCLE9BQUwsR0FBZTFCLE1BQWY7QUFDQTs7O3NCQUVZO0FBQ1osVUFBUSw2QkFBRCxDQUFzQnVQLFNBQXRCLENBQWdDLEtBQUtDLE9BQXJDLENBQVA7QUFDQSxHO29CQUVVM1AsTSxFQUFRO0FBQ2xCLFFBQUsyUCxPQUFMLEdBQWUzUCxNQUFmO0FBQ0E7OztzQkFFVztBQUNYLFVBQVEsNEJBQUQsQ0FBcUI4QyxHQUFyQixDQUF5QixLQUFLL0IsTUFBOUIsQ0FBUDtBQUNBLEc7b0JBRVNVLEssRUFBTztBQUNoQixRQUFLVixNQUFMLEdBQWNVLEtBQWQ7QUFDQTs7Ozs7O2tCQXZDbUJ1UCxZOzs7Ozs7Ozs7Ozs7O0FDWHJCOzs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkUsRyxHQUNwQixtQkFZRztBQUFBLHVCQVhGclMsS0FXRTtBQUFBLEtBWEZBLEtBV0UsOEJBWE0sRUFXTjtBQUFBLDBCQVZGTSxRQVVFO0FBQUEsS0FWRkEsUUFVRSxpQ0FWUyxFQVVUO0FBQUEseUJBVEZGLE9BU0U7QUFBQSxLQVRGQSxPQVNFLGdDQVRRLEVBU1I7QUFBQSxpQ0FSRmtTLGVBUUU7QUFBQSxLQVJlL1IsY0FRZix3Q0FSZ0MsRUFRaEM7QUFBQSwwQkFQRkYsUUFPRTtBQUFBLEtBUEZBLFFBT0UsaUNBUFMsRUFPVDtBQUFBLHVCQU5GdUMsS0FNRTtBQUFBLEtBTkZBLEtBTUUsOEJBTk0sRUFNTjtBQUFBLHlCQUxGMEgsT0FLRTtBQUFBLEtBTEZBLE9BS0UsZ0NBTFEsRUFLUjtBQUFBLDBCQUpGVSxRQUlFO0FBQUEsS0FKRkEsUUFJRSxpQ0FKUyxFQUlUO0FBQUEsaUNBSEZ3RCxlQUdFO0FBQUEsS0FIZXBMLGNBR2Ysd0NBSGdDLEVBR2hDO0FBQUEsa0NBRkZULG9CQUVFO0FBQUEsS0FGb0JaLGtCQUVwQix5Q0FGeUMsRUFFekM7QUFBQSw2QkFERjRCLFdBQ0U7QUFBQSxLQURGQSxXQUNFLG9DQURZLEVBQ1o7O0FBQUE7O0FBQ0YsTUFBSzNELEtBQUwsR0FBMEJBLEtBQTFCO0FBQ0EsTUFBS00sUUFBTCxHQUEwQkEsUUFBMUI7QUFDQSxNQUFLRixPQUFMLEdBQTBCQSxPQUExQjtBQUNBLE1BQUtHLGNBQUwsR0FBMEJBLGNBQTFCO0FBQ0EsTUFBS0YsUUFBTCxHQUEwQkEsUUFBMUI7QUFDQSxNQUFLdUMsS0FBTCxHQUEwQkEsS0FBMUI7QUFDQSxNQUFLMEgsT0FBTCxHQUEwQkEsT0FBMUI7QUFDQSxNQUFLVSxRQUFMLEdBQTBCQSxRQUExQjtBQUNBLE1BQUs1SCxjQUFMLEdBQTBCQSxjQUExQjtBQUNBLE1BQUtyQixrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsTUFBSzRCLFdBQUwsR0FBMEJBLFdBQTFCO0FBQ0EsQzs7a0JBekJtQjBPLEc7Ozs7Ozs7QUNWckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUEyRjVCLFdBQTNGLENBQXVHLFdBQXZHO0FBQ0E0QyxTQUFLNk0sbUJBQUwsQ0FBeUJuVixFQUF6QjtBQUNBO0FBQ0QsUUFBSyxFQUFMO0FBQVM7QUFDUnNJLFNBQUtiLG1CQUFMO0FBQ0E7QUFDRDtBQUNDO0FBbkJGO0FBcUJBLEVBakNEO0FBa0NBLENBbkhELEMiLCJmaWxlIjoiL3dwLWNvbnRlbnQvdGhlbWVzL21ha2UtaXQtYWxsL2pzL3BhZ2VzL3N0YWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2NTJhYTFlNDlhYWEyODY4NWIxIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL0NhbGxcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vU3RhdHVzXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldFwiO1xuaW1wb3J0IFRpY2tldFN0YXR1cyBmcm9tIFwiLi9UaWNrZXRTdGF0dXNcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldE1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhdHVzZXNcbiAqIGFuZCB0aWNrZXRzIGFuZCBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogVGlja2V0TWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSB3aW5kb3cuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgfHwgbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmNhbGxzICAgID0gYXBpLmNhbGxzLm1hcChlID0+IG5ldyBDYWxsKGUpKTtcblx0XHR0aGlzLnRpY2tldHMgID0gYXBpLnRpY2tldHMubWFwKGUgPT4gbmV3IFRpY2tldChlKSk7XG5cdFx0dGhpcy5jb21tZW50cyA9IGFwaS5jb21tZW50cy5tYXAoZSA9PiBuZXcgQ29tbWVudChlKSk7XG5cdFx0dGhpcy5zdGF0dXNlcyA9IGFwaS5zdGF0dXNlcy5tYXAoZSA9PiBuZXcgU3RhdHVzKGUpKTtcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzID0gYXBpLnRpY2tldFN0YXR1c2VzLm1hcChlID0+IG5ldyBUaWNrZXRTdGF0dXMoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q2FsbH0gc2luZ2xlIGluc3RhbmNlIG9mIENhbGwgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmluZChjYWxsID0+IGNhbGwuaWQgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGxzIHJlZmVyZW5jaW5nIGEgc3BlY2lmaWMgdGlja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q2FsbHNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmlsdGVyKGNhbGwgPT4gY2FsbC5fdGlja2V0cy5pbmRleE9mKHRpY2tldElkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG5vdGVzIGZvciBhIGNhbGxcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5fY2FsbCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggSURcblx0ICovXG5cdGdldFN0YXR1cyhzdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5pZCA9PT0gc3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgc2x1Z1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIHN0YXR1c1NsdWdcblx0ICovXG5cdGdldFN0YXR1c0J5U2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXR9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXQgd2l0aCB0aWNrZXRJZFxuXHQgKi9cblx0Z2V0VGlja2V0KHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maW5kKHRpY2tldCA9PiB0aWNrZXQuaWQgPT09IHRpY2tldElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0SWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIG9uZSBvZiBtYW55IGdpdmVuIHN0YXR1c2VzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHN0YXR1c1NsdWdzIEFycmF5IG9mIFN0cmluZ3MncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIG9uZSBvZiBtYW55IGdpdmVuIFN0YXR1cydzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWdJbihzdGF0dXNTbHVncykge1xuXHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRzLnNsaWNlKDApO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHRpY2tldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKHRpY2tldHNbaV0uc3RhdHVzLnNsdWcpID09PSAtMSkgdGlja2V0cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRpY2tldHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldHMgcmVmZXJlbmNlZCBpbiBhIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHJlZmVyZW5jZWQgaW4gYSBDYWxsXG5cdCAqL1xuXHRnZXRUaWNrZXRzRnJvbUNhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5fY2FsbHMuaW5kZXhPZihjYWxsSWQpID4gLTEpO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkIHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKHN0YWZmSWRzKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdFx0dGlja2V0cyAgICAgICAgICAgID0gdGhpcy50aWNrZXRzLFxuXHRcdFx0cmVzdWx0ICAgICAgICAgICAgID0ge307XG5cblx0XHRzdGFmZklkcy5mb3JFYWNoKHN0YWZmSWQgPT4ge1xuXHRcdFx0cmVzdWx0W3N0YWZmSWRdID0gdGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWRcblx0XHRcdFx0XHRcdHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0TXlUaWNrZXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wZXJhdG9yIG9yIHNwZWNpYWxpc3QgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0by5cblx0ICpcblx0ICogSWYgYW4gb3BlcmF0b3IgaXMgbm90IGFzc2lnbmVkLCB0aGVuIHRoZSBFeHBlcnRpc2VUeXBlU3RhZmYgd2lsbFxuXHQgKiBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0VtcGxveWVlfSBFbXBsb3llZSB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkge1xuXHRcdGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSByZXR1cm4gdGlja2V0LmFzc2lnbmVkX3RvX29wZXJhdG9yO1xuXG5cdFx0cmV0dXJuIHRpY2tldC5leHBlcnRpc2VfdHlwZV9zdGFmZi5zdGFmZjsgLy8gb25seSB1c2UgZXhwZXJ0aXNlX3R5cGVfc3RhZmYgaWYgdGhlcmUgaXMgbm8gYXNzaWduZWQgb3BlcmF0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0aWNrZXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cblx0ICogdXNlci5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBJZiBhc3NpZ25lZCB0byBzZWxmXG5cdCAqL1xuXHRpc1RpY2tldEFzc2lnbmVkVG9TZWxmKHRpY2tldCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSA9PT0gdGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKTsgXG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0U3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXRfc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldFN0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldFN0YXR1cyB3aXRoIHRpY2tldFN0YXR1c0lkXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXModGlja2V0U3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maW5kKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuaWQgPT09IHRpY2tldFN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1c2VzIGZvciBhIHRpY2tldFxuXHQgKlxuXHQgKiBAcFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmlsdGVyKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuX3RpY2tldCA9PT0gdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29tbWVudCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNvbW1lbnRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNvbW1lbnQgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjb21tZW50SWRcblx0ICovXG5cdGdldENvbW1lbnQoY29tbWVudElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb21tZW50c1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgQ29tbWVudCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENvbW1lbnRzQnlJZHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gaWRzLmluZGV4T2YoY29tbWVudC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB0aWNrZXRzIGFzc29jaWF0ZWQgd2l0aCBhbiBleHBlcnRpc2UgdHlwZSBzdGFmZlxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSBzdGFmZiB0byBmaW5kIHRpY2tldHMgZm9yXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQWxsIG1hdGNoaW5nIHRpY2tldHNcblx0ICovXG5cdGdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHR0aWNrZXRJZHMgICAgICA9IFtdLmNvbmNhdCguLi5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBlLnRpY2tldHMpKTsgLy8gbW92ZSBhbGwgb2YgZXhwZXJ0aXNlVHlwZXNbaV0udGlja2V0cyBpbnRvIGEgc2luZ2xlIGFycmF5XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGlja2V0cyBvbiBhIHByb3BlcnR5IGZvciBhIHByb3ZpZGVkIHNlYXJjaCBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgc2F0aXNmeWluZyB0aGUgc2VhcmNoIGNvbmRpdGlvblxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnRpY2tldHMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29sbGVjdGlvbiBvZiB0aWNrZXRzIGJ5IHRoZWlyIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBpZHMgVGhlIElEcyBvZiB0aGUgcmVxdWVzdGVkIHRpY2tldHMgXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlUaWNrZXRJRHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IGlkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL0VtcGxveWVlXCI7XG5cbi8qKlxuICogU3RhZmZNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YWZmXG4gKiBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogU3RhZmZNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YWZmICAgICAgID0gYXBpLnN0YWZmLm1hcChlID0+IG5ldyBFbXBsb3llZShlKSk7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyA9IGFwaS5kZXBhcnRtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGVtcGxveWVlIHdpdGggdGhlIGdpdmVuIElEIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgZW1wbG95ZWUgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtFbXBsb3llZX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbmQoZW1wbG95ZWUgPT4gZW1wbG95ZWUuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZW1wbG95ZWVzIHdpdGggYSBzcGVjaWZpYyB2YWx1ZSBvZiBhIHBlcm1pc3Npb25cblx0ICpcblx0ICogQHBhcmFtIHBlcm1pc3Npb24gVGhlIHBlcm1pc3Npb24gdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwZXJtaXNzaW9uICh0cnVlL2ZhbHNlKSBmb3Igd2hldGhlciB0aGUgcGVybWlzc2lvbiBpcyBncmFudGVkXG5cdCAqL1xuXHRnZXRFbXBsb3llZXNXaXRoUGVybWlzc2lvbihwZXJtaXNzaW9uLCB2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0gPT0gdmFsdWUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICpcblx0ICogQHBhcmFtIGFzRW1wbG95ZWUgbWV0aG9kIHJldHVybnMgSUQgYnkgZGVmYXVsdCBvciBFbXBsb3llZSBpZiB0cnV0aHlcblx0ICovXG5cdGN1cnJlbnRVc2VyKGFzRW1wbG95ZWUgPSBmYWxzZSkge1xuXHRcdGxldCBpZCA9IDE7IC8vIFRPRE86IGdldCB1c2VyIGZyb20gV1BcblxuXHRcdC8vIEdldCBFbXBsb3llZSB3aXRoIElEXG5cdFx0aWYgKGFzRW1wbG95ZWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChpZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc3BlY2lhbGlzdHMgd2hvIHNwZWNpYWxpc2UgaW4gYSBjZXJ0YWluIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gZmluZCBlbXBsb3llZXMgZm9yXG5cdCAqL1xuXHRnZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0bGV0IHN0YWZmICA9IHRoaXMuc3RhZmYsXG5cdFx0ICAgIGZpbHRlciA9IGlkID0+IGVtcGxveWVlID0+IGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGlkKSA+IC0xO1xuXG5cdFx0aWYgKHR5cGVvZiBleHBlcnRpc2VUeXBlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRsZXQgb3V0cHV0ID0gW107XG5cblx0XHRcdGZvciAobGV0IGlkIG9mIGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RhZmYuZmlsdGVyKGZpbHRlcihpZCkpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0YWZmLmZpbHRlcihmaWx0ZXIoZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIGVtcGxveWVlIGhhcyB0aGUgcGFzc2VkIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGluc3BlY3Rcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGxvb2sgZm9yXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBlbXBsb3llZSBoYXMgdGhlIHByb2JsZW0gdHlwZSBhcyBhIHNwZWNpYWxpc21cblx0ICovXG5cdGhhc1NwZWNpYWxpc20oZW1wbG95ZWUsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihleHBlcnRpc2VUeXBlSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGFsbCBlbXBsb3llZXMgZm9yIHRoZSBnaXZlbiBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm5zIEFsbCBtYXRjaGluZyByZXN1bHRzIHRvIHRoZSBxdWVyeVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnN0YWZmLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGUgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVTdGFmZiBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlU3RhZmZcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBleHBlcnRpc2UgdHlwZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBhcGkuZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGUoZSkpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gYXBpLmV4cGVydGlzZVR5cGVTdGFmZi5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZVN0YWZmKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYWxsIEV4cGVydGlzZVR5cGUncyB3aXRoIG5vIHBhcmVudCAoaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRSb290RXhwZXJ0aXNlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5fcGFyZW50ID09IG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZX1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmluZChleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuaWQgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IEV4cGVydGlzZVR5cGVzIHdpdGggSURzIGZyb20gYW4gQXJyYXkgb2YgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGV4cGVydGlzZVR5cGVJZHMgQXJyYXkgb2YgSW50ZWdlcnMgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWQnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZXMgc2F0aXNmeWluZyB0aGUgY29uZGl0aW9uXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlSWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZUlkcy5pbmRleE9mKGV4cGVydGlzZVR5cGUuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmlsdGVyKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcmRlcmVkIGFycmF5IG9mIHBhcmVudHMgb2YgYW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZSB0byBmaW5kIHBhcmVudHMgZnJvbVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZSBwYXJlbnRzLCBhbmQgdGhlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZXMgICAgICA9IFtleHBlcnRpc2VUeXBlUGFyZW50XTtcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRleHBlcnRpc2VUeXBlcy5wdXNoKGV4cGVydGlzZVR5cGVQYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBleHBlcnRpc2VUeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCB3aXRoIGFuIGV4YWN0XG5cdCAqIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgYW5kIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgSUQgcGFpclxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZVxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmZcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBudWxsLCBvciB0aGUgcmVjb3JkIGRlc2lyZWRcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIHN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiA9PT0gc3RhZmZJZCAmJiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVTdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5pZCA9PT0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHx8IG51bGw7XG5cdH1cblxuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuZXhwZXJ0aXNlVHlwZXMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXIuanMiLCIvKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBBYnN0cmFjdCBjbGFzcyBleHRlbmRlZCBieSBhbGwgbWFuYWdlcnMsXG4gKiBjb250YWlucyBtZXRob2RzIHRoYXQgbWF5IGJlIHVzZWZ1bCB0byB0aGUgbWFuYWdlcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VhcmNoIGFycmF5IG9mIGVsZW1lbnRzIGZvciBxdWVyeSBpbiBnaXZlbiBwcm9wZXJ0eSBuYW1lc1xuXHQgKiBcblx0ICogQHBhcmFtIGVsZW1lbnRzIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgc2VhcmNoZWQgdGhyb3VnaFxuXHQgKiBAcGFyYW0gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqL1xuXHRzZWFyY2goZWxlbWVudHMgPSBbXSwgcXVlcnkgPSBcIlwiLCBwcm9wZXJ0aWVzID0gW10pIHtcblx0XHRxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7IC8vIE5vcm1hbGlzZSBxdWVyeSAoYW5kIHByb3BlcnRpZXMgaW5kaXZpZHVhbGx5IGxhdGVyKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzLmZpbHRlcihlbCA9PiB7IC8vIEdldCBhbGwgZWxlbWVudHNcblx0XHRcdHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcCA9PiB7IC8vIENoZWNrIHByb3BlcnRpZXMgdW50aWwgbWF0Y2ggaXMgZm91bmRcblx0XHRcdFx0aWYgKFN0cmluZyhlbFtwcm9wXSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHJldHVybiB0cnVlOyAvLyBEZXRlcm1pbmUgaWYgcHJvcGVydHkgaXMgYSBtYXRjaCBmb3IgcXVlcnlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvTWFuYWdlci5qcyIsIi8qKlxuICogRHluYW1pY1BhZ2VcbiAqXG4gKiBFeHRlbmRlZCBieSBldmVyeSBwYWdlLCBlLmcuIFRpY2tldFBhZ2UuXG4gKiBDb250YWlucyBmdW5jdGlvbnMgdGhhdCBhcmUgcmVwZWF0ZWQgb2Z0ZW4gYW1vbmdcbiAqIHBhZ2VzLCBzdWNoIGFzIHVwZGF0aW5nIHRhYmxlcyBvciB1cGRhdGluZyB0aGUgbmF2YmFyXG4gKi9cbmNsYXNzIER5bmFtaWNQYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIHBhZ2UgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yc1xuXHQgKiB0byBkZWZpbmUgdGhlIGJvdW5kcyBvZiB0aGUgcGFnZSwgaW4gY2FzZXMgd2hlcmUgdGhpcyBEeW5hbWljUGFnZVxuXHQgKiBpcyBub3QgdGhlIG9ubHkgcGFnZSBvbiB0aGUgc2NyZWVuLCBzdWNoIGFzIGlmIGEgcGFnZSBpcyBiZWluZ1xuXHQgKiBkaXNwbGF5ZWQgaW4gYSBtb2RhbC5cblx0ICpcblx0ICogTm90IHByb3ZpZGluZyBhbnkgc2VsZWN0b3JzIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGVcblx0ICogbWFpbiBzZWxlY3RvcnMgZm9yIHRoZSBlbnRpcmUgc2NyZWVuLCBzdWNoIHRoYXRcblx0ICogdGhpcyBwYWdlIGJlY29tZXMgdGhlIG1haW4gcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBzZWN0aW9uU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgbWFpbiBzZWN0aW9uIGNvbnRhaW5pbmcgdGFibGUgdmlld1xuXHQgKiBAcGFyYW0gdGFibGVTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRhYmxlIHdpdGhpbiBwcmV2aW91cyBzZWN0aW9uXG5cdCAqIEBwYXJhbSBuYXZTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIG5hdmlnYXRpb24gYmFyIHNob3duIGF0IHRvcCBvZiBzZWN0aW9uXG5cdCAqIEBwYXJhbSBkZXRhaWxTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHNpbmdsZSB2aWV3IGRldGFpbCBzaG93biBmb3IgYW4gaW5kaXZpZHVhbCByb3dcblx0ICovXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzZWN0aW9uU2VsZWN0b3IgPSBcIiNsaXN0LXZpZXdcIixcblx0XHR0YWJsZVNlbGVjdG9yID0gXCIjdGFibGUtc2VjdGlvblwiLFxuXHRcdG5hdlNlbGVjdG9yLFxuXHRcdGRldGFpbFNlbGVjdG9yXG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuc2VjdGlvblNlbGVjdG9yID0gc2VjdGlvblNlbGVjdG9yO1xuXHRcdHRoaXMudGFibGVTZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XG5cdFx0Ly8gU2V0IG5hdmlnYXRpb24gc2VsZWN0b3IgdG8gZmlyc3QgY29tcG9uZW50IG9mIHNlY3Rpb24gc2VsZWN0b3Igd2l0aCDigJgtbmF24oCZIGFwcGVuZGVkLCBvdGhlcndpc2UgZGVmYXVsdCBDU1Mgc2VsZWN0b3Jcblx0XHR0aGlzLm5hdlNlbGVjdG9yID0gbmF2U2VsZWN0b3IgPyBuYXZTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLW5hdlwiIDogXCIuc2lkZS1uYXYtYmFyLW5lc3RlZFwiKTtcblx0XHR0aGlzLmRldGFpbFNlbGVjdG9yID0gZGV0YWlsU2VsZWN0b3IgPyBkZXRhaWxTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLWRldGFpbFwiIDogXCIjc2luZ2xlLXZpZXdcIik7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aXRsZSBiYXIgb2YgdGhlIHNpbmdsZSB2aWV3IHRvIHRoZSBnaXZlbiBzdHJpbmdcblx0ICogQ0FVVElPTjogRG9lcyBub3QgcGVyZm9ybSBlc2NhcGluZyBvZiBpbnB1dCBzdHJpbmcsIGRvIG5vdCBwYXNzXG5cdCAqIHVzZXIgY29udGVudCB0byB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIGh0bWwgSFRNTCB0byBzZXQgdGhlIHNpbmdsZSB2aWV3IHRpdGxlIHRvXG5cdCAqL1xuXHR1cGRhdGVTaW5nbGVWaWV3TmF2YmFyKGh0bWwpIHtcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykuaHRtbChodG1sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgXCJMb2FkaW5n4oCmXCIgc3BsYXNoIHNjcmVlbiBpZiBpdCdzIHNob3duXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgXCJObyBSZXN1bHRz4oCmXCIgc3BsYXNoIHNjcmVlblxuXHQgKiBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuXHQgKlxuXHQgKiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciB1c2luZyBcImFwcGVuZFRhYmxlXCJcblx0ICovXG5cdHVwZGF0ZVNwbGFzaFNjcmVlbihuYXZUZXh0ID0gbnVsbCkge1xuXHRcdC8vIEdldCB0YWJsZSBlbGVtZW50IHRvIGluc3BlY3QgY29udGVudHNcblx0XHR2YXIgJHRhYmxlID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdFx0XHQvLyBHZXQgbnVtYmVyIG9mIHJlc3VsdHMgd2l0aGluIHRhYmxlIGN1cnJlbnRseSBiZWluZyBzaG93blxuXHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlIEhUTUxcblx0XHRcdFx0Ly8gc2luY2Ugc29tZSB0YWJsZSByb3dzIG1heSBiZSBoaWRkZW4sIHdoaWNoIG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gZGlzY291bnRlZCBmcm9tIHRoZSB0b3RhbCBjb3VudC5cblx0XHQgICAgcmVzdWx0c0NvdW50ID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRyJykuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmhhc0NsYXNzKFwicm93LWhpZGRlblwiKSkubGVuZ3RoLFxuXHRcdFx0XHQvLyBHZXQgc3BsYXNoIHNjcmVlbiBlbGVtZW50IHdoaWNoIG1heSBiZSBiZWluZyBzaG93biBpbnN0ZWFkIG9mIHRhYmxlXG5cdFx0ICAgICRzcGxhc2hTY3JlZW4gPSAkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlcmUgYXJlIHJlc3VsdHMsIHRoZSBzcGxhc2ggc2NyZWVuIG9yIHRhYmxlIG5lZWRzIHRvIGJlIHNob3duXG5cdFx0Ly8gYW5kIHRoZSBvdGhlciBzd2FwcGVkIG91dCB1c2luZyBDU1Ncblx0XHR2YXIgWyRzaG93LCAkaGlkZV0gPSByZXN1bHRzQ291bnQgPyBbJHRhYmxlLCAkc3BsYXNoU2NyZWVuXSA6IFskc3BsYXNoU2NyZWVuLCAkdGFibGVdO1xuXHRcdCRoaWRlLmFkZENsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXHRcdCRzaG93LnJlbW92ZUNsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXG5cdFx0Ly8gVGhlIG1haW4gdG9wIGJhciBmb3IgdGhlIGxpc3QgdmlldyBjb250YWlucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHNob3duIGluIHRoZSB0YWJsZVxuXHRcdGlmICghbmF2VGV4dCkge1xuXHRcdFx0Ly8gU2V0IG5hdmJhciB0ZXh0IGFzIG51bWJlciBvZiBpdGVtcyBpbiB0YWJsZSB0aGVuIGFwcGVuZCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0XHRuYXZUZXh0ID0gcmVzdWx0c0NvdW50ICsgXCIgXCIgKyAkKHRoaXMubmF2U2VsZWN0b3IpLmZpbmQoXCJsaS5hY3RpdmVcIikuZmlyc3QoKS50ZXh0KCkucmVwbGFjZShcIkFsbCBcIiwgXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdW5hYmxlIHRvIG9idGFpbiByb3dzIGNvdW50LCBzaG93IFwiTG9hZGluZ+KAplwiXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuY2xvc2VzdChcInNlY3Rpb25cIikuZmluZChcIi50b3AtbmF2IGg0XCIpLnRleHQocmVzdWx0c0NvdW50ICE9PSB1bmRlZmluZWQgPyBuYXZUZXh0IDogXCJMb2FkaW5n4oCmXCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSByb3cgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqIHVzaW5nIGRhdGEgZnJvbSBcIm9iamVjdFwiLlxuXHQgKlxuXHQgKiBUaGUgcHJvcGVydHkgbmFtZXMgc2hvdWxkIGNvcnJlc3BvbmQgd2l0aCB0aGUgXCJzbHVnXCJcblx0ICogYXR0cmlidXRlIGluIHRhYmxlIGhlYWRlci5cblx0ICpcblx0ICogTk9URTogVGhpcyBhc3N1bWVzIHRoZSBvYmplY3QgaGFzIGFuIElEIGF0dHJpYnV0ZS4gSW5jbHVkZSBpdFxuXHQgKiBldmVuIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNob3cgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmplY3QgLSBUaGUgZGF0YSB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGVcblx0ICogc3BsYXNoc2NyZWVuIG9uIHlvdXIgcGFnZVxuXHQgKi9cblx0YXBwZW5kVGFibGVSb3cob2JqZWN0KSB7XG5cdFx0dmFyICR0YWJsZVNlY3Rpb24gPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0ICAgICR0YWJsZUhlYWQgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRoZWFkIHRyJyksXG5cdFx0ICAgICR0YWJsZUJvZHkgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRib2R5JyksXG5cdFx0ICAgICRuZXdSb3cgICAgICAgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XG5cblx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgcm93IHR3aWNlXG5cdFx0aWYgKCR0YWJsZUJvZHkuY2hpbGRyZW4oXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBvYmplY3QuaWQgKyBcIlxcXCJdXCIpLmxlbmd0aCA+IDApIHJldHVybjtcblxuXHRcdC8vIFNldCBJRCBvbiByb3cgdG8gcmVmZXJlbmNlIGxhdGVyXG5cdFx0JG5ld1Jvd1swXS5kYXRhc2V0LnJvd2lkID0gb2JqZWN0LmlkO1xuXHRcdCRuZXdSb3cudG9nZ2xlQ2xhc3MoXCJoaWdobGlnaHRcIiwgb2JqZWN0LmlkID09IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cblx0XHQkdGFibGVIZWFkLmNoaWxkcmVuKCd0aCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2x1ZyA9IHRoaXMuZGF0YXNldC5zbHVnLCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXHRcdFx0aWYgKHNsdWcgPT09ICdleWUnKSB7IC8vIHRoZSBvbi1ob3ZlciBleWUgaW52aXNpYmxlIHJvd1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+Jztcblx0XHRcdH0gZWxzZSBpZiAoc2x1ZyAmJiBzbHVnLmluY2x1ZGVzKFwiYWNjZXNzXCIpKSB7XG5cdFx0XHRcdC8vIEJvb2xlYW4gdmFsdWUgc3VwcG9ydFxuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpID8gdGhpcy5pbm5lckhUTUwgOiBcIsK3XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpICE9PSB1bmRlZmluZWQgPyBvYmplY3Rbc2x1Z10gOiBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkbmV3Um93LmFwcGVuZCh0ZCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JHRhYmxlQm9keS5hcHBlbmQoJG5ld1Jvdyk7XG5cblx0XHRyZXR1cm4gJG5ld1Jvd1swXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgdGhlIGRhdGEgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqL1xuXHRjbGVhclRhYmxlKCkge1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTaG93IGRldGFpbCBwYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIHRhYmxlIHJvdyB0byBiZSBzaG93biBpbiB0aGUgc2luZ2xlIHZpZXdcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQgPSBudWxsKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBjaGVjayBmb3IgbnVsbCBhcyBubyByb3dzIHdpbGwgbWF0Y2ggaWYgbm8gSUQgcGFzc2VkXG5cdFx0Ly8gLnNpYmxpbmdzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmIHNvIGNhbiBiZSBjaGFpbmVkIGFmdGVyIGZpbmRpbmcgaGlnaGxpZ2h0IHJvdyBmaXJzdFxuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5yb3dpZCA9PSBpZCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuZmlyc3QoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFxuXHRcdC8vIE5vIG5lZWQgdG8gc2V0IHN0eWxlIHVzaW5nIEpTIGhlcmUsIENTUyBoYW5kbGVzIGZsZXhcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLnVud3JhcChcImRpdlwiKVxuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uIG9uIGhpZGVcblx0XHRcdC5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJjbG9zZVxcXCJdXCIpLmNsaWNrKCgpID0+IHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpKTtcblx0XHRcblx0XHRpZiAoaWQgPiAtMSkgbG9jYXRpb24uaGFzaCA9IHBhcnNlSW50KGlkKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEhpZGUgZGV0YWlsIHBhZ2Ugc2hvd24gd2l0aCBzaG93RGV0YWlsXG5cdCAqL1xuXHRoaWRlVGFibGVSb3dEZXRhaWxzKCkge1xuXHRcdC8vIERlc2VsZWN0IGFsbCByb3dzXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBGaWx0ZXIgdG8gY2hlY2sgaWYgYWxyZWFkeSBoaWRkZW4sIGRvbid0IGhpZGUgYWdhaW5cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudChcImRpdlwiKS5sZW5ndGggPT09IDApLndyYXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdFx0XG5cdFx0bG9jYXRpb24uaGFzaCA9IFwiXCI7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhIHNlbGVjdCBlbGVtZW50IHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG5cdCAqIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGRyb3Bkb3duIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3QgQSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbGxlZFxuXHQgKiBAcGFyYW0gZGVmYXVsdFRleHQgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG5cdCAqIEBwYXJhbSBlbGVtZW50cyBMaXN0IG9mIGVsZW1lbnRzIHRvIGJlIGFkZGVkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbVxuXHQgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbklkIElEIG9mIGEgZGVmYXVsdCBvcHRpb24gZnJvbSB0aGUgZWxlbWVudHMgZ2l2ZW5cblx0ICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0IGZpZWxkIHRvIGFjY2VzcyBzZWxlY3RlZCBpdGVtIHdpdGhcblx0ICogQHBhcmFtIGdldEFkZGl0aW9uYWxEZXRhaWxzIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGJlIHNob3duIGZvciBjdXJyZW50IGl0ZW1cblx0ICovXG5cdHBvcHVsYXRlU2VsZWN0RmllbGQoJHNlbGVjdCwgZGVmYXVsdFRleHQsIGVsZW1lbnRzLCBkZWZhdWx0T3B0aW9uSWQgPSBudWxsLCBwcm9wZXJ0eSA9ICduYW1lJywgZ2V0QWRkaXRpb25hbERldGFpbHMgPSBudWxsKSB7XG5cdFx0Ly8gRGVmYXVsdCBlbXB0eSBjb250ZW50IGZvciBpbnB1dFxuXHRcdGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKGRlZmF1bHRUZXh0LCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdCRzZWxlY3QuZW1wdHkoKS5hcHBlbmQob3B0aW9uKTtcblx0XHRcblx0XHQvLyBFYWNoIG9wdGlvbiB0byBiZSBzZWxlY3RlZCBmcm9tXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChnZXRBZGRpdGlvbmFsRGV0YWlscyAhPT0gbnVsbCkge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBnZXRBZGRpdGlvbmFsRGV0YWlscyhlKSArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmdcblx0ICogQHBhcmFtIGVsZW1lbnRzIFRoZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VhcmNoIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIG9iamVjdENhbGxiYWNrIGEgY2FsbGJhY2sgcmV0dXJuaW5nIGFuIG9iamVjdCAodGhlIHJvdyBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSBzZWFyY2hLZXlzIHRoZSBwcm9wZXJ0aWVzIGluIG9iamVjdENhbGxiYWNrIHRvIGhpZ2hsaWdodFxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBlbGVtZW50cyA9IFtdLCBvYmplY3RDYWxsYmFjaywgc2VhcmNoS2V5cyA9IFtdKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzO1xuXG5cdFx0cGFnZS5jbGVhclRhYmxlKCk7XG5cblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0gb2JqZWN0Q2FsbGJhY2soZWwpO1xuXG5cdFx0XHRcdHNlYXJjaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRcdG9iamVjdFtrZXldID0gU3RyaW5nKG9iamVjdFtrZXldKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcXVlcnkgKyAnKScsICdpZycpLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocXVlcnkgPT09ICQoXCIuc2VhcmNoLWZpZWxkIGlucHV0XCIpLnZhbCgpKSB7XG5cdFx0XHRcdFx0cGFnZS5hcHBlbmRUYWJsZVJvdyhvYmplY3QpO1xuXHRcdFx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGAke2VsZW1lbnRzLmxlbmd0aH0gcmVzdWx0JHtlbGVtZW50cy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYE5vIHJlc3VsdHMgZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhIG1lc3NhZ2UgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgb3ZlciBhbGwgZWxlbWVudHMuXG5cdCAqIEhpZGUgYWZ0ZXIgNiBzZWNvbmRzLCBvciBjb25maWd1cmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHN0cmluZyB0byBiZSBzaG93biBpbiB0aGUgbWVzc2FnZSBib3guXG5cdCAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG1lc3NhZ2UsIHN1Y2ggYXMgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIlxuXHQgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMgZm9yIHRoZSBtZXNzYWdlIHRvIGJlIHNob3duIGZvci5cblx0ICovXG5cdHN0YXRpYyBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkXCIsIHR5cGUgPSBcImRhbmdlclwiLCBkdXJhdGlvbiA9IDYpIHtcblx0XHQvLyBPbmx5IHNob3cgb25lIG1lc3NhZ2UgYXQgYSB0aW1lXG5cdFx0JChcIiNhbGVydC1ub3RpZmljYXRpb25cIikucmVtb3ZlKCk7XG5cblx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bXNnLmlkID0gXCJhbGVydC1ub3RpZmljYXRpb25cIjtcblx0XHRtc2cuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIsIGBhbGVydC0ke3R5cGV9YCwgXCJhbGVydC1ub3RpZmljYXRpb25cIik7XG5cdFx0bXNnLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTsgLy8gQWNjZXNzaWJpbGl0eVxuXHRcdC8vIFNldCBjb250ZW50IGFuZCBzaG93IG9uIHNjcmVlblxuXG5cdFx0bXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1zZyk7XG5cblx0XHQvLyBIaWRlIGFmdGVyIGR1cmF0aW9uXG5cdFx0c2V0VGltZW91dCgoKSA9PiBtc2cucmVtb3ZlKCksIGR1cmF0aW9uICogMTAwMCk7XG5cblx0XHQvLyBDbGljayB0byBoaWRlIG1lc3NhZ2Vcblx0XHQkKG1zZykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuXG4vKipcbiAqIEhhcmR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBkZXZpY2VzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEhhcmR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kZXZpY2VzID0gYXBpLmRldmljZXMubWFwKGUgPT4gbmV3IERldmljZShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgVHlwZXMgaW4gdGFibGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVUeXBlcygpIHtcblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5kZXZpY2VzLm1hcCh0ID0+IHQudHlwZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBNYWtlcyBmb3IgYSBzcGVjaWZpZWQgVHlwZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZU1ha2VzT2ZUeXBlKHR5cGUpIHtcblx0XHRsZXQgZGV2aWNlc0J5VHlwZSA9IHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUpO1xuXG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KGRldmljZXNCeVR5cGUubWFwKHQgPT4gdC5tYWtlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZGV2aWNlcyB3aXRoIGEgc3BlY2lmaWVkIFR5cGUgYW5kIE1ha2Vcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHRnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSh0eXBlLG1ha2UpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSAmJiBkZXZpY2UubWFrZSA9PSBtYWtlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRldmljZXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBkZXZpY2VzIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldERldmljZXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGlkcy5pbmRleE9mKGRldmljZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBkZXZpY2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBkZXZpY2UgXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkZXZpY2UgPT4gZGV2aWNlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRldmljZSB3aXRoIHRoZSBnaXZlbiBzZXJpYWwgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBzZXJpYWxOdW1iZXIgVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlIGRldmljZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0RldmljZX1cblx0ICovXG5cdGdldERldmljZUJ5U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkID0+IGQuc2VyaWFsX25vID09PSBzZXJpYWxOdW1iZXIpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi9Qcm9ncmFtXCI7XG5cbi8qKlxuICogU29mdHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIHNvZnR3YXJlIHByb2dyYW1zIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIFNvZnR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvZnR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wcm9ncmFtcyA9IGFwaS5wcm9ncmFtcy5tYXAoZSA9PiBuZXcgUHJvZ3JhbShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJvZ3JhbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBwcm9ncmFtcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXRQcm9ncmFtcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBpZHMuaW5kZXhPZihwcm9ncmFtLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIHByb2dyYW1cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmluZChwcm9ncmFtID0+IHByb2dyYW0uaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlci5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDb21tZW50XG4gKlxuICogQSBjb21tZW50IGlzIG1hZGUgYWJvdXQgYSBzcGVjaWZpYyB0aWNrZXQsIGJ5XG4gKiBhIHN0YWZmIG1lbWJlci5cbiAqIFxuICogQ29udGFpbnMgdGhlIFRpY2tldCB0aGF0IGl0IGJlbG9uZ3MgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZDogaWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbF9pZDogY2FsbCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbCAgICAgICAgICAgID0gY2FsbDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDtcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IGF1dGhvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2F1dGhvcik7XG5cdH1cblxuXHRzZXQgYXV0aG9yKGF1dGhvcikge1xuXHRcdHRoaXMuX2F1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdGdldCBjYWxsKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbCh0aGlzLl9jYWxsKTtcblx0fVxuXG5cdHNldCBjYWxsKGNhbGwpIHtcblx0XHR0aGlzLl9jYWxsID0gY2FsbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENhbGxcbiAqXG4gKiBFdmVyeSB0aW1lIHRoZSBIZWxwZGVzayBpcyBjYWxsZWQsIHRoaXMgaXMgY3JlYXRlZC5cbiAqIEEgY2FsbCBtYXkgaGF2ZSBtdWx0aXBsZSB0aWNrZXRzLCBhIHRpY2tldCBtYXkgaGF2ZVxuICogbXVsdGlwbGUgY2FsbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGwge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGltZSxcblx0XHRjYWxsZXJfaWQ6IGNhbGxlcixcblx0XHRvcGVyYXRvcl9pZDogb3BlcmF0b3IsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMudGltZSAgICAgPSB0aW1lO1xuXHRcdHRoaXMuY2FsbGVyICAgPSBjYWxsZXI7ICAgLy8gSUQgb2YgY2FsbGVyLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7IC8vIElEIG9mIG9wZXJhdG9yLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLnRpY2tldHMgID0gdGlja2V0czsgIC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgVGlja2V0J3Ncblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgb3BlcmF0b3Iob3BlcmF0b3IpIHtcblx0XHR0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzRnJvbUNhbGwodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRW1wbG95ZWVcbiAqXG4gKiBBbiBlbXBsb3llZSBvZiB0aGUgY29tcGFueVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGpvYl90aXRsZTogam9iLFxuXHRcdGRlcGFydG1lbnQsXG5cdFx0cGhvbmVfbnVtYmVyOiBwaG9uZSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IHNwZWNpYWxpc21zID0gW10sXG5cdFx0b3BlcmF0b3IgPSBmYWxzZSxcblx0XHRzcGVjaWFsaXN0ID0gc3BlY2lhbGlzbXMubGVuZ3RoID4gMCxcblx0XHRhbmFseXN0ID0gZmFsc2UsXG5cdFx0YWRtaW4gPSBmYWxzZVxuXHR9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMuam9iID0gam9iO1xuXHRcdHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQubmFtZTtcblx0XHR0aGlzLl9kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5pZDtcblx0XHR0aGlzLnBob25lID0gcGhvbmU7XG5cdFx0dGhpcy5zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHRcdHRoaXMuYWNjZXNzID0ge29wZXJhdG9yLCBhbmFseXN0LCBhZG1pbn07XG5cdFx0XG5cdFx0Ly8gSWYgdXNlciBpcyBhbnkgb3RoZXIgcGVybWlzc2lvbiB0aGVuIHJlYWQgaXMgZ3JhbnRlZFxuXHRcdHRoaXMuYWNjZXNzLnJlYWQgPSB0aGlzLmFjY2Vzcy5vcGVyYXRvciB8fCB0aGlzLmFjY2Vzcy5hbmFseXN0IHx8IHRoaXMuYWNjZXNzLmFkbWluIHx8IHRoaXMuYWNjZXNzLnJlYWRvbmx5IHx8IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyByZWFkIGFjY2VzcyB0byB0aGUgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNSZWFkKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5yZWFkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgaGVscCBkZXNrIG9wZXJhdG9yXG5cdCAqL1xuXHRnZXQgaXNPcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Mub3BlcmF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBhbmFseXRpY2FsIGRhdGEgYWJvdXQgdGhlIGhlbHAgZGVzayBzeXN0ZW1cblx0ICovXG5cdGdldCBpc0FuYWx5c3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFuYWx5c3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvbiB0aGUgaGVscCBkZXNrXG5cdCAqL1xuXHRnZXQgaXNBZG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYWRtaW47XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgQSBsaXN0IG9mIHByb2JsZW0gdHlwZXMgdGhlIHVzZXIgaXMgYSBzcGVjaWFsaXN0IG9mXG5cdCAqL1xuXHRnZXQgc3BlY2lhbGlzbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX3NwZWNpYWxpc21zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3BlY2lhbGlzbXMgU2V0IHRoZSBsaXN0IG9mIHNwZWNpYWxpc21zIGZvciB0aGlzIHBlcnNvbiBvbiB0aGUgc3lzdGVtXG5cdCAqL1xuXHRzZXQgc3BlY2lhbGlzbXMoc3BlY2lhbGlzbXMpIHtcblx0XHR0aGlzLl9zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgZGF0YSBmb3Igc2VuZGluZyB0byBBUEkgZW5kcG9pbnQuIFRoZSBBUEkgaGFzIGRpZmZlcmVudFxuXHQgKiBkYXRhIGtleXMgcmVwcmVzZW50aW5nIHRoZSBkYXRhIGFjY2Vzc2libGUgaW4gdGhlIHRhYmxlcywgc28gbmV3XG5cdCAqIGRhdGEgYW5kIHVwZGF0ZXMgdG8gZGF0YSBtdXN0IHVzZSB0aGVzZSBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBkYXRhIHRvIGJlIGNvbnZlcnRlZFxuXHQgKiBAcmV0dXJucyBkYXRhIHdpdGggdXBkYXRlZCBrZXkgbmFtZXNcblx0ICovXG5cdHN0YXRpYyBwcmVwYXJlRGF0YShkYXRhID0ge30pIHtcblx0XHRkYXRhLmpvYl90aXRsZSA9IGRhdGEuam9iO1xuXHRcdGRhdGEucGhvbmVfbnVtYmVyID0gZGF0YS5waG9uZTtcblx0XHRkYXRhLmV4cGVydGlzZV90eXBlcyA9IGRhdGEuc3BlY2lhbGlzbXM7XG5cdFx0ZGF0YS5kZXBhcnRtZW50X2lkID0gZGF0YS5kZXBhcnRtZW50O1xuXHRcdGZvciAobGV0IGtleSBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblx0XHRcdGRhdGFba2V5XSA9IGRhdGEuYWNjZXNzW2tleV0gPyAoMSAmJiAoZGF0YS5zcGVjaWFsaXN0ID0gMSkpIDogMDtcblx0XHR9XG5cdFx0ZGF0YS5zcGVjaWFsaXN0ID0gZGF0YS5zcGVjaWFsaXN0IHx8IDA7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0cGFyZW50X2lkOiBwYXJlbnQsXG5cdFx0Y2hpbGRyZW5cblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLm5hbWUgICAgID0gbmFtZTtcblx0XHR0aGlzLnBhcmVudCAgID0gcGFyZW50O1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjsgLy8gSUQgb2YgRXhwZXJ0aXNlVHlwZSdzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIEV4cGVydGlzZVR5cGUnc1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9wYXJlbnQpO1xuXHR9XG5cblx0c2V0IHBhcmVudChwYXJlbnQpIHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX2NoaWxkcmVuKTtcblx0fVxuXG5cdHNldCBjaGlsZHJlbihjaGlsZHJlbikge1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwiaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVN0YWZmIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHN0YWZmX2lkOiBzdGFmZklkLFxuXHRcdGV4cGVydGlzZV90eXBlX2lkOiBleHBlcnRpc2VUeXBlSWQsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgPSBzdGFmZklkO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlSWQ7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9leHBlcnRpc2VfdHlwZSk7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGUoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGF0dXNcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFN0YXR1cy5cbiAqIENvbnRhaW5zIFRpY2tldHMgdGhhdCBmaXQgaW50byB0aGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzbHVnLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgID0gaWQ7XG5cdFx0dGhpcy5zbHVnICAgID0gc2x1ZzsgICAgLy8gc2x1Z19leGFtcGxlXG5cdFx0dGhpcy5uYW1lICAgID0gbmFtZTsgICAgLy8gTmFtZSBFeGFtcGxlIVxuXHRcdHRoaXMudGlja2V0cyA9IHRpY2tldHM7IC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBUaWNrZXQgaW5zdGFuY2VzXG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNXaXRoU2x1Zyh0aGlzLnNsdWcpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvU3RhdHVzLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0XG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBUaWNrZXQvUHJvYmxlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxzLFxuXHRcdHN0YXR1cyxcblx0XHRzdGF0dXNfaGlzdG9yeTogc3RhdHVzSGlzdG9yeSxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRzb2x1dGlvbl9pZDogc29sdXRpb24sXG5cdFx0ZGV2aWNlcyxcblx0XHRwcm9ncmFtcyxcblx0XHRjb21tZW50cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWwsXG5cdFx0dXBkYXRlZF9hdDogdXBkYXRlZEF0UmVhbCxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZl9pZDogZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdGFzc2lnbmVkX3RvX29wZXJhdG9yX2lkOiBhc3NpZ25lZFRvT3BlcmF0b3JJZFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgICA9IGNhbGxzOyAgLy8gSUQgb2YgY2FsbHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ2FsbCdzXG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGF0dXNfaGlzdG9yeSAgICAgICA9IHN0YXR1c0hpc3Rvcnk7XG5cdFx0dGhpcy50aXRsZSAgICAgICAgICAgICAgICA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gICAgICAgICAgPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnNvbHV0aW9uICAgICAgICAgICAgID0gc29sdXRpb247XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgICA9IGRldmljZXM7ICAvLyBJRCBvZiBkZXZpY2VzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIERldmljZXNcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICAgID0gcHJvZ3JhbXM7IC8vIElEIG9mIHByb2dyYW1zLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFByb2dyYW1zXG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgICA9IGNvbW1lbnRzOyAvLyBJRCBvZiBjb21tZW50cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDb21tZW50J3Ncblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCAgICAgICAgICAgPSB1cGRhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgICAgICA9IGNyZWF0ZWRBdFJlYWw7XG5cdFx0dGhpcy51cGRhdGVkX2F0X3JlYWwgICAgICA9IHVwZGF0ZWRBdFJlYWw7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmFzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgY2FsbHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsc0J5VGlja2V0SWQodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgY2FsbHMoY2FsbHMpIHtcblx0XHR0aGlzLl9jYWxscyA9IGNhbGxzO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblx0XG5cdGdldCBzdGF0dXNfaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1c0hpc3RvcnkodGhpcy5fc3RhdHVzX2hpc3RvcnkpO1xuXHR9XG5cblx0c2V0IHN0YXR1c19oaXN0b3J5KHN0YXR1c0hpc3RvcnkpIHtcblx0XHR0aGlzLl9zdGF0dXNfaGlzdG9yeSA9IHN0YXR1c0hpc3Rvcnk7XG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBkZXZpY2VzKCkge1xuXHRcdHJldHVybiAobmV3IEhhcmR3YXJlTWFuYWdlcigpKS5nZXREZXZpY2VzKHRoaXMuX2RldmljZXMpO1xuXHR9XG5cblx0c2V0IGRldmljZXMoZGV2aWNlcykge1xuXHRcdHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuXHR9XG5cblx0Z2V0IHByb2dyYW1zKCkge1xuXHRcdHJldHVybiAobmV3IFNvZnR3YXJlTWFuYWdlcigpKS5nZXRQcm9ncmFtcyh0aGlzLl9wcm9ncmFtcyk7XG5cdH1cblxuXHRzZXQgcHJvZ3JhbXMocHJvZ3JhbXMpIHtcblx0XHR0aGlzLl9wcm9ncmFtcyA9IHByb2dyYW1zO1xuXHR9XG5cblx0Z2V0IGNvbW1lbnRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudHNCeUlkcyh0aGlzLl9jb21tZW50cyk7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHMpIHtcblx0XHR0aGlzLl9jb21tZW50cyA9IGNvbW1lbnRzO1xuXHR9XG5cblx0Z2V0IHNvbHV0aW9uKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudCh0aGlzLl9zb2x1dGlvbik7XG5cdH1cblxuXHRzZXQgc29sdXRpb24oc29sdXRpb24pIHtcblx0XHR0aGlzLl9zb2x1dGlvbiA9IHNvbHV0aW9uO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlU3RhZmYodGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmZJZDtcblx0fVxuXG5cdGdldCBhc3NpZ25lZF90b19vcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBhc3NpZ25lZF90b19vcGVyYXRvcihhc3NpZ25lZFRvT3BlcmF0b3JJZCkge1xuXHRcdHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0dmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MCAtIDEgKyAxKSkgKyAxOyAvL1JhbmRvbSBpbnQgYmV0d2VlbiAxIGFuZCA0MFxuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCkpLmdldEV4cGVydGlzZVR5cGUocmFuZG9tKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBEZXZpY2VcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dHlwZSxcblx0XHRtYWtlLFxuXHRcdHNlcmlhbF9ubyxcblx0XHR0aWNrZXRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSlcblx0e1xuXHRcdHRoaXMuaWRcdFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy50eXBlXHRcdFx0PSB0eXBlO1xuXHRcdHRoaXMubWFrZSAgIFx0XHQ9IG1ha2U7XG5cdFx0dGhpcy5zZXJpYWxfbm8gICAgIFx0PSBzZXJpYWxfbm87XG5cdFx0dGhpcy5fdGlja2V0c1x0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5jcmVhdGVkX2F0XHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIFByb2dyYW1cbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIFNvZnR3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmFtIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0cyxcblx0XHRvcGVyYXRpbmdfc3lzdGVtLFxuXHRcdGV4cGlyeV9kYXRlLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSkgXG5cdHtcblx0XHR0aGlzLmlkICAgICAgICAgXHRcdD0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICAgIFx0XHQ9IG5hbWU7XG5cdFx0dGhpcy5fdGlja2V0c1x0XHRcdD0gdGlja2V0cztcblx0XHR0aGlzLm9wZXJhdGluZ19zeXN0ZW1cdD0gb3BlcmF0aW5nX3N5c3RlbTtcblx0XHR0aGlzLmV4cGlyeV9kYXRlXHRcdD0gZXhwaXJ5X2RhdGU7XG5cdFx0dGhpcy5jcmVhdGVkX2F0IFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0IFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXRTb2Z0d2FyZVR5cGUoKSB7IFxuXHRcdC8vR2V0cyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBwcm9ncmFtIGlzIGFuIG9wZXJ0aW5nIHN5c3RlbSBvciBub3Rcblx0XHRpZiAodGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJPcGVyYXRpbmcgU3lzdGVtXCI7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJBcHBsaWNhdGlvblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCItXCI7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRTdGF0dXNcbiAqXG4gKiBJbnRlcm1lZGlhcnkgcmVsYXRpb25zaGlwIGJldHdlZW4gU3RhdHVzXG4gKiBhbmQgVGlja2V0LiBUaGlzIHN0b3JlcyBhIGhpc3Rvcnkgb2YgYVxuICogVGlja2V0J3Mgc3RhdHVzZXM7IHRoZSBsYXN0IGVudHJ5IGlzXG4gKiB0aGUgVGlja2V0J3MgY3VycmVudCBzdGF0dXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRzdGF0dXNfaWQ6IHN0YXR1cyxcblx0XHRzdGFmZl9pZDogc3RhZmYsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7IC8vIElEIG9mIHRpY2tldCwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFRpY2tldFxuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICA9IHN0YWZmOyAgLy8gSUQgb2Ygc3RhZmYsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuL0R5bmFtaWNQYWdlXCI7XG5cbi8qKlxuICogQVBJXG4gKlxuICogT3JpZ2luYWxseSB1c2VkIHRvIHJldHJpZXZlIGFuZCBoYW5kbGUgZGF0YSBmcm9tXG4gKiBBUEkgZW5kcG9pbnRzLCBidXQgbW9kaWZpZWQgdG8gaG9sZCBsb2NhbCBkYXRhXG4gKiBpbiB0aGUgY29uc3RydWN0b3Igc2V0IGJ5IFdvcmRQcmVzcydzIFR3aWdcbiAqIChkb25lIHRvIHJldXNlIHByZXZpb3VzIGNvbXBvbmVudHMgdG8gc2F2ZSB0aW1lKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FsbHMgPSBbXSxcblx0XHRzdGF0dXNlcyA9IFtdLFxuXHRcdHRpY2tldHMgPSBbXSxcblx0XHR0aWNrZXRfc3RhdHVzZXM6IHRpY2tldFN0YXR1c2VzID0gW10sXG5cdFx0Y29tbWVudHMgPSBbXSxcblx0XHRzdGFmZiA9IFtdLFxuXHRcdGRldmljZXMgPSBbXSxcblx0XHRwcm9ncmFtcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlczogZXhwZXJ0aXNlVHlwZXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZjogZXhwZXJ0aXNlVHlwZVN0YWZmID0gW10sXG5cdFx0ZGVwYXJ0bWVudHMgPSBbXVxuXHR9KSB7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgPSBjYWxscztcblx0XHR0aGlzLnN0YXR1c2VzICAgICAgICAgICA9IHN0YXR1c2VzO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgICAgID0gdGlja2V0cztcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzICAgICA9IHRpY2tldFN0YXR1c2VzO1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgID0gY29tbWVudHM7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgICAgPSBzdGFmZjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICA9IGRldmljZXM7XG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgPSBwcm9ncmFtcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGV4cGVydGlzZVR5cGVzO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgICAgICAgID0gZGVwYXJ0bWVudHM7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YWZmUGFnZVxuICpcbiAqIE1ldGhvZHMgdXNlZnVsIGZvciBwb3B1bGF0aW5nIGFuZCBoYW5kbGluZyBpbnB1dCBvbiBTdGFmZiBwYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmUGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vIE1hbmFnZXJzXG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cblx0XHQvLyBObyBlbXBsb3llZSBkZXRhaWwgc2hvd24gYnkgZGVmYXVsdFxuXHRcdHRoaXMuZW1wbG95ZWUgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9idGFpbiBhbmQgc2hvdyBhbGwgc3RhZmYgaW4gbGlzdCB2aWV3IHRhYmxlIG9uIHBhZ2Vcblx0ICovXG5cdHNob3dTdGFmZigpIHtcblx0XHQvLyBFbnN1cmUgbm8gbG9jYWxseS1jYWNoZWQgZGF0YSBpcyBwcmVzZW50IGluIHN0YWZmIHRhYmxlIGJlZm9yZSBwb3B1bGF0aW5nXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keVwiKS5lbXB0eSgpO1xuXG5cdFx0Ly8gQ29sdW1uIHRvIGZpbGwgdGlja2V0cyBudW1iZXIgaW50b1xuXHRcdGxldCB0aWNrZXRzQ29sdW1uSW5kZXggPSAkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRyXCIpLmZpcnN0KClcblx0XHRcdFx0LmNoaWxkcmVuKFwiW2RhdGEtc2x1Zz1cXFwidGlja2V0cy5hc3NpZ25lZFxcXCJdXCIpLmluZGV4KCk7XG5cblx0XHQvLyBUZW1wb3JhcnkgYXJyYXkgdG8gaG9sZCBzdGFmZiBJRHMgc3RpbGwgYXdhaXRpbmcgdGlja2V0IGNvdW50c1xuXHRcdGxldCBzdGFmZkZvclRpY2tldHMgPSBbXTtcblxuXHRcdC8vIFB1dCBlYWNoIHN0YWZmIG1lbWJlciBvbiB0YWJsZVxuXHRcdGxldCBzdGFmZiA9IHRoaXMuc3RhZmZNYW5hZ2VyLnN0YWZmO1xuXG5cdFx0Ly8gQWRkIGVhY2ggc3RhZmYgbWVtYmVyIHRvIGEgbmV3IHJvdyBpbiB0aGUgdGFibGVcblx0XHRmb3IgKGxldCBlbXBsb3llZSBvZiBzdGFmZikge1xuXHRcdFx0bGV0ICR0YWJsZVJvdyA9IHRoaXMuYXBwZW5kVGFibGVSb3coZW1wbG95ZWUpO1xuXHRcdFx0c3RhZmZGb3JUaWNrZXRzLnB1c2goZW1wbG95ZWUuaWQpO1xuXHRcdH1cblxuXHRcdC8vIEhpZGUgc3BsYXNoIHNjcmVlbiBpZiB0aGVyZSBpcyBhdCBsZWFzdCAxIHN0YWZmIG1lbWJlciBpbiB2aWV3XG5cdFx0dGhpcy51cGRhdGVTcGxhc2hTY3JlZW4oKTtcblxuXHRcdC8vIEdldCBhc3NpZ25lZCB0aWNrZXQgY291bnRzIGFzeW5jaHJvbm91c2x5XG5cdFx0KGFzeW5jKGlkcykgPT4ge1xuXHRcdFx0Ly8gR2V0IG51bWJlciBvZiBhc3NpZ25lZCB0aWNrZXRzIGFuZCBmaWxsIGNvbHVtblxuXHRcdFx0bGV0ICRyb3dzID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keVwiKS5jaGlsZHJlbihcInRyXCIpO1xuXHRcdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhpZHMpO1xuXHRcdFx0JHJvd3MuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdFx0ZWwuY2hpbGRyZW5bdGlja2V0c0NvbHVtbkluZGV4XS50ZXh0Q29udGVudCA9IHRpY2tldHNbaSsxXSA/ICh0aWNrZXRzW2krMV0ubGVuZ3RoIHx8IDApIDogMDtcblx0XHRcdH0pO1xuXHRcdH0pKHN0YWZmRm9yVGlja2V0cyk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIHNob3dpbmcgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyBlbXBsb3llZS4gVXN1YWxseSBjYWxsZWRcblx0ICogd2hlbiBjbGlja2luZyBvbiBhIHJvdyBpbiB0aGUgdGFibGUsIGJ1dCBjYW4gYWxzbyBiZSBjYWxsZWRcblx0ICogZm9yIG90aGVyIHRhYmxlIHJvdyBjaGFuZ2UgaW5wdXRzLCBzdWNoIGFzIGhhc2ggZnJhZ21lbnQgb3Jcblx0ICoga2V5Ym9hcmQgaW5wdXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIGVtcGxveWVlIHRvIHNob3cgZGV0YWlsXG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkKSB7XG5cdFx0Ly8gR2V0IGVtcGxveWVlIHdpdGggSURcblx0XHR0aGlzLmVtcGxveWVlID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0KGlkKTtcblx0XHQvLyBDYXRjaCBpbnZhbGlkIElEcyBhbmQgc2hvdyBtZXNzYWdlXG5cdFx0aWYgKCF0aGlzLmVtcGxveWVlKSB7XG5cdFx0XHQvLyBIaWRlIHNpbmdsZSB2aWV3IGlmIG5vIGRldGFpbCBpcyBhYmxlIHRvIGJlIHByZXNlbnRlZFxuXHRcdFx0Ly8gZm9yIHJlcXVlc3RlZCBJRCwgZW5zdXJpbmcgdGhlIHBlcnNvbiB1c2luZyB0aGUgc3lzdGVtXG5cdFx0XHQvLyBpcyBub3QgY29uZnVzZWQgYnkgZGF0YSBzaG93biBmb3IgcHJldmlvdXNseSBhY2Nlc3NlZCB1c2VyLlxuXHRcdFx0dGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCk7XG5cdFx0XHREeW5hbWljUGFnZS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gZW1wbG95ZWUgd2l0aCBJRCBcIiArIGlkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBQdXQgZW1wbG95ZWUgbmFtZSBpbiB0aXRsZSBiYXIgb2Ygc2luZ2xlIHZpZXdcblx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGhpcy5lbXBsb3llZS5uYW1lKTtcblx0XHRcblx0XHQvLyBGaWxsIGluIGNvbnRlbnQgZm9yIGVhY2ggZmllbGQgYXZhaWxhYmxlIGluIHN0YWZmIG1lbWJlclxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZChcIltkYXRhLXNsdWddXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHQvLyBFYWNoIHNsdWcgaXMgYSBkaWZmZXJlbnQgZmllbGQgdG8gYmUgZmlsbGVkLCBzb1xuXHRcdFx0Ly8gZ2V0IGVhY2ggdmFsdWUgYW5kIHNldCBlbGVtZW50IGNvbnRlbnQgdG8gdmFsdWVcblx0XHRcdGxldCB2YWx1ZSA9IE9iamVjdC5yZXNvbHZlKGVsLmRhdGFzZXQuc2x1ZywgdGhpcy5lbXBsb3llZSk7XG5cdFx0XHQvLyBTb21lIHZhbHVlcyBhcmUgb3B0aW9uYWwsIHNvIGRvbid0IHNob3cgdW5kZWZpbmVkIGlmIG5vIGRhdGFcblx0XHRcdGVsLnRleHRDb250ZW50ID0gdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiID8gdmFsdWUgOiBcIuKAlFwiO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU29tZSBjb250ZW50IHJlcXVpcmVzIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGlucHV0IG9mIGluZm9ybWF0aW9uXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKFwiW2RhdGEtY3VzdG9tc2x1Z11cIikuZWFjaCgoaSwgZWwpID0+IHtcblx0XHRcdHN3aXRjaCAoZWwuZGF0YXNldC5jdXN0b21zbHVnKSB7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiB0b2tlbnMgbmVlZCB0byBiZSBoYW5kbGVkIHNwZWNpYWxseVxuXHRcdFx0XHQvLyBzaW5jZSB2YWx1ZSBpcyBub3Qgbm9ybWFsIHRleHRcblx0XHRcdFx0Y2FzZSBcImFjY2Vzc1wiOlxuXHRcdFx0XHRcdFN0YWZmUGFnZS5zaG93UGVybWlzc2lvbnMoZWwsIHRoaXMuZW1wbG95ZWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJhdmF0YXJcIjpcblx0XHRcdFx0XHRlbC5zcmMgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzI3NXgyNzVcIjtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwidGlja2V0cy5hc3NpZ25lZFwiOlxuXHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gXCLigKZcIjtcblx0XHRcdFx0XHQoYXN5bmMoZWwpID0+IHtcblx0XHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aGlzLmVtcGxveWVlLmlkKS5sZW5ndGg7XG5cdFx0XHRcdFx0fSkoZWwpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIElmIGluIGRvdWJ0LCBwcmVzdW1lIGRhdGEgaXMgaW52YWxpZCBhbmQgc2hvdyBzYW1lIGFzIG5vIGRhdGFcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBEeW5hbWljUGFnZSBuZWVkcyB0byBoYW5kbGUgdmlldyBjb2RlXG5cdFx0c3VwZXIuc2hvd1RhYmxlUm93RGV0YWlscyhpZCk7XG5cblx0XHQvLyBQcm9ibGVtIHR5cGVzIHZpZXcgaGFuZGxpbmcgdG8gYmUgb2J0YWluZWQgYnkgc3BlY2lmaWMgcHJvYmxlbSB0eXBlIEpTXG5cdFx0d2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlLmN1cnJlbnRTcGVjaWFsaXNtcyA9IHRoaXMuZW1wbG95ZWUuX3NwZWNpYWxpc21zO1xuXHRcdHdpbmRvdy5zdGFmZlByb2JsZW1UeXBlUGFnZS5sb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzKCQoJy50eXBlLWNvbHVtbnMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIGRpc3BsYXlpbmcgcGVybWlzc2lvbnMgZnJvbSBkYXRhIG9iamVjdFxuXHQgKiB0byBpbmRpdmlkdWFsIHRva2VucyBzaG93biBpbiBpbnB1dCwgb25lIGZvciBlYWNoIG9mXG5cdCAqIHRoZSBwZXJtaXNzaW9uIGxldmVscyBncmFudGVkIHRvIHRoZSB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0gZWwgVGhlIGVsZW1lbnQgdG8gZmlsbCB3aXRoIHRoZSBwZXJtaXNzaW9uIGRldGFpbHNcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBnZXQgdGhlIGdyYW50ZWQgcGVybWlzc2lvbiBpbmZvcm1hdGlvbiBmcm9tXG5cdCAqL1xuXHRzdGF0aWMgc2hvd1Blcm1pc3Npb25zKGVsLCBlbXBsb3llZSkge1xuXHRcdGVsLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Ly8gRGVmaW5lIHRoZSBpY29ucyB0byBiZSBkaXNwbGF5ZWQgZm9yIGVhY2ggb2YgdGhlIHBlcm1pc3Npb24gbGV2ZWxzXG5cdFx0bGV0IGljb25zID0ge3JlYWQ6IFwiZXllXCIsIG9wZXJhdG9yOiBcInVzZXItc2VjcmV0XCIsIGFuYWx5c3Q6IFwibGluZS1jaGFydFwiLCBhZG1pbjogXCJzaGllbGRcIn07XG5cblx0XHQvLyBFYWNoIHBlcm1pc3Npb24gaGFzIGl0cyBvd24gdG9rZW4gZm9yIHJlcHJlc2VudGluZyBpdHNlbGZcblx0XHRmb3IgKGxldCBwZXJtaXNzaW9uIG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgd2hldGhlciBlbXBsb3llZSBoYXMgcGVybWlzc2lvbiBhbmQgb25seSBzaG93IGlmIHRydWVcblx0XHRcdGlmIChlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0pIHtcblxuXHRcdFx0XHQvLyBQZXJtaXNzaW9uIGljb25cblx0XHRcdFx0bGV0IGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXHRcdFx0XHRlbEljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtXCIgKyBpY29uc1twZXJtaXNzaW9uXSk7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiBuYW1lXG5cdFx0XHRcdGxldCBlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0ZWxUZXh0LnRleHRDb250ZW50ID0gcGVybWlzc2lvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBlcm1pc3Npb24uc2xpY2UoMSk7XG5cblx0XHRcdFx0Ly8gR3JvdXAgaWNvbiBhbmQgbmFtZSBpbnRvIHNpbmdsZSB0b2tlblxuXHRcdFx0XHRsZXQgZWxQZXJtaXNzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRcdGVsUGVybWlzc2lvbi5hcHBlbmRDaGlsZChlbEljb24pO1xuXHRcdFx0XHRlbFBlcm1pc3Npb24uYXBwZW5kQ2hpbGQoZWxUZXh0KTtcblxuXHRcdFx0XHQvLyBEaXNwbGF5IHBlcm1pc3Npb24gdG9rZW4gaW4gZWxlbWVudFxuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChlbFBlcm1pc3Npb24pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBzdGFmZiBtZW1iZXJzIGdpdmVuIGEgc2VhcmNoIHN0cmluZ1xuXHQgKiB0byBmaWx0ZXIgdGhlIHRhYmxlIGJ5IGVtcGxveWVlcyBtYXRjaGluZyB0aGUgc3RyaW5nLlxuXHQgKiBUaGlzIHNlYXJjaGVzIHRocm91Z2ggbWFueSBzdGFmZiB0YWJsZSBmaWVsZHM6XG5cdCAqIGlkLCBuYW1lLCBqb2IsIGRlcGFydG1lbnQgYW5kIHBob25lIG51bWJlci5cblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nIHRvIGZpbHRlciB0aGUgZW1wbG95ZWVzIGJ5XG5cdCAqL1xuXHRhc3luYyBzZWFyY2gocXVlcnkpIHtcblx0XHQvLyBPbmx5IHNlYXJjaCBpZiBxdWVyeSBpcyBzdWZmaWNpZW50IGZvciBzZWFyY2hcblx0XHQvLyBUaGlzIG1hdHRlcnMgbW9yZSB3aXRoIGxhcmdlciBkYXRhc2V0cyB3aGVyZSBcImFcIiBjYW4gaGF2ZVxuXHRcdC8vIHRob3VzYW5kcyBvZiByZXN1bHRzLiBBbHdheXMgZW5zdXJlIElEIHNlYXJjaGVzIGFyZSBwZXJmb3JtZWRcblx0XHQvLyBzaW5jZSBJRCBpcyBpbmRleGVkIGFuZCBjYW4gYmUgc2VhcmNoZWQgdmVyeSBxdWlja2x5LlxuXHRcdGlmIChxdWVyeS5sZW5ndGggPj0gMiB8fCAocXVlcnkubGVuZ3RoID4gMCAmJiBxdWVyeSA9PSBwYXJzZUludChxdWVyeSkpKSB7XG5cblx0XHRcdC8vIERlZmluZSBwcm9wZXJ0aWVzIG9mIGVtcGxveWVlcyB0byBiZSBzZWFyY2hlZCBmb3IgcXVlcnkgbWF0Y2hcblx0XHRcdHZhciBwcm9wZXJ0aWVzID0gW1wiaWRcIiwgXCJuYW1lXCIsIFwiam9iXCIsIFwiZGVwYXJ0bWVudFwiLCBcInBob25lXCJdO1xuXHRcdFx0Ly8gUGVyZm9ybSB0aGUgc2VhcmNoIHVzaW5nIHN1cGVyIHNlYXJjaCBhbmQgYXNzaWduIHJlc3VsdHNcblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgdGhpcy5zdGFmZk1hbmFnZXIuc2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSwgb2JqID0+IE9iamVjdC5hc3NpZ24oe30sIG9iaiksIHByb3BlcnRpZXMpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gc2hvd2luZyBhbGwgc3RhZmYgaWYgcXVlcnkgaXMgbWlzc2luZyBvciBpbnN1ZmZpY2llbnRcblx0XHRcdC8vIFRoaXMgaXMgZGlzdGluY3QgdG8gdGhlIGNhc2Ugd2hlcmUgdGhlcmUgYXJlIG5vIHJlc3VsdHMgdG9cblx0XHRcdC8vIGEgc3VjY2Vzc2Z1bCBxdWVyeSDigJQgdGhpcyBpcyBoYW5kbGVkIGluIHN1cGVyJ3Mgc2VhcmNoIG1ldGhvZFxuXHRcdFx0Ly8gYW5kIHNob3dzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaW5zdGVhZCBvZiBhbGwgdGhlIHN0YWZmLlxuXHRcdFx0dGhpcy5zaG93U3RhZmYoKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZlBhZ2UuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4vU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhZmZFeHBlcnRpc2VUeXBlUGFnZVxuICpcbiAqIEluY2x1ZGVzIHNwZWNpYWxpc3QgYWxsb2NhdGlvbnMgb24gdG9wIG9mIEV4cGVydGlzZVR5cGVQYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmRXhwZXJ0aXNlVHlwZVBhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jdXJyZW50U3BlY2lhbGlzbXMgPSBbXTtcblx0fVxuXG5cdGFzeW5jIGxvYWRTcGVjaWFsaXN0RXhwZXJ0aXNlVHlwZXMoJHR5cGVDb2x1bW5zLCAkbGkgPSBudWxsLCBleHBlcnRpc2VUeXBlSWQgPSBudWxsKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGUgPSBudWxsO1xuXHRcdFxuXHRcdGlmICgkbGkpIHtcblx0XHRcdGV4cGVydGlzZVR5cGUgPSBhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKTtcblxuXHRcdFx0JGxpLnBhcmVudCgpLm5leHRBbGwoKS5yZW1vdmUoKTtcblx0XHRcdCRsaS5wYXJlbnQoKS5maW5kKCdsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkbGkucGFyZW50KCkucGFyZW50KCkuZmluZCgnbGkubGFzdC1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbGFzdC1hY3RpdmUnKTtcblx0XHRcdCRsaS5hZGRDbGFzcygnYWN0aXZlIGxhc3QtYWN0aXZlJyk7XG5cblx0XHRcdGlmICgkbGkuaGFzQ2xhc3MoJ25vLWNoaWxkcmVuJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdHlwZUNvbHVtbnMuZW1wdHkoKTtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRyZW4gICAgPSBbXSxcblx0XHRcdCR0eXBlQ29sdW1uID0gJCgnPGRpdiBjbGFzcz1cInR5cGUtY29sdW1uXCI+PC9kaXY+Jyk7XG5cblx0XHRpZiAoZXhwZXJ0aXNlVHlwZUlkID09PSBudWxsKSB7XG5cdFx0XHRjaGlsZHJlbiA9IGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0Um9vdEV4cGVydGlzZVR5cGVzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkcmVuID0gYXdhaXQgdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlLl9jaGlsZHJlbik7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG5cblx0XHRcdCR0eXBlQ29sdW1uLmFwcGVuZChcblx0XHRcdFx0JzxsaSAnICsgKGNoaWxkLl9jaGlsZHJlbi5sZW5ndGggPT09IDAgPyAnY2xhc3M9XCJuby1jaGlsZHJlblwiJyA6ICcnKSArICcgZGF0YS1leHBlcnRpc2UtdHlwZS1pZD1cIicgKyBjaGlsZC5pZCArICdcIj4nICtcblx0XHRcdFx0XHRjaGlsZHJlbltpXS5uYW1lICtcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwZWNpYWxpc20tY2hlY2tib3ggcHVsbC1yaWdodFwiPicgK1xuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudFNwZWNpYWxpc21zLmluZGV4T2YoY2hpbGQuaWQpID4gLTEgPyAnPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nIDogJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+JykgK1xuXHRcdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0JzwvbGk+J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQkdHlwZUNvbHVtbnMuYXBwZW5kKCR0eXBlQ29sdW1uKTtcblx0XHQkdHlwZUNvbHVtbnMuc2Nyb2xsTGVmdCgkdHlwZUNvbHVtbnMud2lkdGgoKSk7XG5cdH1cblxuXHRhc3luYyB0b2dnbGVTcGVjaWFsaXNtKCRzcGVjaWFsaXNtQ2hlY2tib3gpIHtcblx0XHRsZXQgY2xpY2tlZFNwZWNpYWxpc21JZCAgICAgICA9IE51bWJlcigkc3BlY2lhbGlzbUNoZWNrYm94LnBhcmVudCgpLmRhdGEoJ2V4cGVydGlzZVR5cGVJZCcpKSxcblx0XHRcdGN1cnJlbnRTcGVjaWFsaXNtc0luZGV4T2YgPSB0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5pbmRleE9mKGNsaWNrZWRTcGVjaWFsaXNtSWQpLFxuXHRcdFx0JGljb24gICAgICAgICAgICAgICAgICAgICA9ICRzcGVjaWFsaXNtQ2hlY2tib3guZmluZCgnaScpO1xuXG5cdFx0Ly8gUXVpY2tseSBndWVzcyBhbmQgc2V0IGljb24gZm9yIHJlc3BvbnNpdmUgVUlcblx0XHQkaWNvbi5oYXNDbGFzcyhcImZhLWNoZWNrXCIpID8gJGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKSA6ICRpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIik7XG5cblx0XHRsZXRcdGNoaWxkcmVuID0gYXdhaXQgKGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShjbGlja2VkU3BlY2lhbGlzbUlkKSkuY2hpbGRyZW47XG5cblx0XHRpZiAoY3VycmVudFNwZWNpYWxpc21zSW5kZXhPZiA+IC0xKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5zcGxpY2UoY3VycmVudFNwZWNpYWxpc21zSW5kZXhPZiwgMSk7XG5cdFx0XHQkaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcygnZmEtdGltZXMnKTtcblxuXHRcdFx0aWYgKHRoaXMuc2hvdWxkUmVtb3ZlQ2hpbGRTcGVjaWFsaXNtcyhjaGlsZHJlbikpIHtcblx0XHRcdFx0dGhpcy50b2dnbGVDaGlsZHJlbihjaGlsZHJlbiwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTcGVjaWFsaXNtcy5wdXNoKGNsaWNrZWRTcGVjaWFsaXNtSWQpO1xuXHRcdFx0JGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzJykuYWRkQ2xhc3MoJ2ZhLWNoZWNrJyk7XG5cblx0XHRcdHRoaXMudG9nZ2xlQ2hpbGRyZW4oY2hpbGRyZW4sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZUNoaWxkcmVuKGNoaWxkcmVuLCBzdGF0dXMgPSBmYWxzZSkge1xuXHRcdGNoaWxkcmVuLmZvckVhY2goYXN5bmMgY2hpbGQgPT4ge1xuXHRcdFx0aWYgKHN0YXR1cykge1xuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuaW5kZXhPZihjaGlsZC5pZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50U3BlY2lhbGlzbXMucHVzaChjaGlsZC5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpbmRleE9mID0gdGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuaW5kZXhPZihjaGlsZC5pZCk7XG5cblx0XHRcdFx0aWYgKGluZGV4T2YgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFNwZWNpYWxpc21zLnNwbGljZShpbmRleE9mLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWN1cnNpdmVseSBpdGVyYXRlIGFsbCBjaGlsZHJlblxuXHRcdFx0bGV0IGNoaWxkcmVuID0gYXdhaXQgY2hpbGQuY2hpbGRyZW47XG5cdFx0XHRpZiAoY2hpbGRyZW4pIHtcblx0XHRcdFx0dGhpcy50b2dnbGVDaGlsZHJlbihjaGlsZHJlbiwgc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qXG5cdCAqIFdlIHNob3VsZCBvbmx5IG1lc3Mgd2l0aCBjaGlsZHJlbiBpZiB0aGV5XG5cdCAqIGFsbCBoYXZlIHRoZSBzYW1lIHN0YXR1c1xuXHQgKi9cblx0c2hvdWxkUmVtb3ZlQ2hpbGRTcGVjaWFsaXNtcyhjaGlsZHJlbikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50U3BlY2lhbGlzbXMuaW5kZXhPZihjaGlsZC5pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnNob3VsZFJlbW92ZUNoaWxkU3BlY2lhbGlzbXMoY2hpbGQuY2hpbGRyZW4pKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGFzeW5jIGdldEJlc3RFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZSA9IGF3YWl0IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0c3BlY2lhbGlzdHMgICA9IGF3YWl0IHRoaXMuc3RhZmZNYW5hZ2VyLmdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGVJZCk7XG5cblx0XHRpZiAoc3BlY2lhbGlzdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIGJlc3RTcGVjaWFsaXN0ID0gbnVsbCxcblx0XHRcdFx0YmVzdENvdW50ICAgICAgPSBudWxsLFxuXHRcdFx0XHRvcGVuVGlja2V0cyAgICA9IGF3YWl0IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzV2l0aFNsdWdJbihbJ25ldycsICdwZW5kaW5nX2luX3Byb2dyZXNzJywgJ3BlbmRpbmdfYXdhaXRpbmdfc3RhZmYnXSk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BlY2lhbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHNwZWNpYWxpc3QgICAgICA9IHNwZWNpYWxpc3RzW2ldLFxuXHRcdFx0XHRcdGFzc2lnbmVkVG9Db3VudCA9IDA7XG5cblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBvcGVuVGlja2V0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChvcGVuVGlja2V0c1tqXS5fYXNzaWduZWRfdG8gPT09IHNwZWNpYWxpc3QuaWQpIHtcblx0XHRcdFx0XHRcdGFzc2lnbmVkVG9Db3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChiZXN0U3BlY2lhbGlzdCA9PT0gbnVsbCB8fCBhc3NpZ25lZFRvQ291bnQgPCBiZXN0Q291bnQpIHtcblx0XHRcdFx0XHRiZXN0U3BlY2lhbGlzdCA9IHNwZWNpYWxpc3Q7XG5cdFx0XHRcdFx0YmVzdENvdW50ICAgICAgPSBhc3NpZ25lZFRvQ291bnQ7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChhd2FpdCB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIGJlc3RTcGVjaWFsaXN0LmlkKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVydGlzZVR5cGUuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGUuX3BhcmVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZlByb2JsZW1UeXBlUGFnZS5qcyIsIi8qKlxuICogSlMgc3BlY2lmaWMgdG8gU3RhZmYgcGFnZSwgZm9yIGhhbmRsaW5nIGludGVyYWN0aW9ucyB3aXRoXG4gKiBlbXBsb3llZSBpbmZvcm1hdGlvbiBib3RoIGFzIHJlYWQtb25seSBhbmQgcmVhZC13cml0ZVxuICogZGVwZW5kaW5nIG9uIGFjY2VzcyBsZXZlbCBpbiB0aGUgb3JnYW5pc2F0aW9uICjiiLQgaGVscCBkZXNrKVxuICovXG5cbmltcG9ydCBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBTdGFmZlBhZ2UgZnJvbSBcIi4vU3RhZmZQYWdlXCI7XG5pbXBvcnQgU3RhZmZQcm9ibGVtVHlwZVBhZ2UgZnJvbSBcIi4vU3RhZmZQcm9ibGVtVHlwZVBhZ2VcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL0FQSVwiO1xuXG5sZXQgc3RhZmZQYWdlLCBzdGFmZlByb2JsZW1UeXBlUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cblx0c3RhZmZQYWdlICAgICAgICAgICAgPSB3aW5kb3cuc3RhZmZQYWdlICAgICAgICAgICAgPSBuZXcgU3RhZmZQYWdlKCk7XG5cdHN0YWZmUHJvYmxlbVR5cGVQYWdlID0gd2luZG93LnN0YWZmUHJvYmxlbVR5cGVQYWdlID0gbmV3IFN0YWZmUHJvYmxlbVR5cGVQYWdlKCk7XG5cblx0Ly8gT24gcGFnZSBsb2FkLCBkb24ndCBzaG93IGVtcHR5IHNpbmdsZS12aWV3XG5cdGlmICghbG9jYXRpb24uaGFzaCkgc3RhZmZQYWdlLmhpZGVUYWJsZVJvd0RldGFpbHMoKTtcblxuXHQvLyBMb2FkIHN0YWZmIGRldGFpbHMgaW50byBwYWdlIGxpc3Qtdmlld1xuXHQvLyBUaGlzIGFjdGlvbiBpcyBhc3luY2hyb25vdXNcblx0c3RhZmZQYWdlLnNob3dTdGFmZigpO1xuXG5cdC8vIERldGVjdCBpZiBwYWdlIHNob3VsZCBsb2FkIHdpdGggYSBzcGVjaWZpYyBlbXBsb3llZSBiZWluZyBzaG93blxuXHRpZiAobG9jYXRpb24uaGFzaCkgc3RhZmZQYWdlLnNob3dUYWJsZVJvd0RldGFpbHMocGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHQvL1xuXHQvLyBJbml0aWFsaXNlIEV2ZW50IExpc3RlbmVyczpcblx0Ly9cblxuXHQvLyBQcm9ibGVtIHR5cGVzIGlucHV0IGhhbmRsaW5nIChvbiBjbGljayBvZiBwcm9ibGVtIHR5cGUsIGxvYWQgc3VidHlwZXMpXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudHlwZS1jb2x1bW4gbGknLCBmdW5jdGlvbigpIHtcblx0XHQvLyBPbmx5IGxvYWQgc3VidHlwZXMgaWYgdHlwZSBoYXMgY2hpbGRyZW5cblx0XHQvLyAoZG91YmxlIG5lZ2F0aXZlLCDigJhub3QgY2xhc3Mgbm8tY2hpbGRyZW7igJkpXG5cdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduby1jaGlsZHJlbicpKSB7XG5cdFx0XHRzdGFmZlByb2JsZW1UeXBlUGFnZS5sb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzKFxuXHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLnR5cGUtY29sdW1ucycpLCAkKHRoaXMpLCBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2V4cGVydGlzZVR5cGVJZCcpKSk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBPbiBlZGl0aW5nIHByb2JsZW0gdHlwZXMsIGVhY2ggcHJvYmxlbSB0eXBlIGhhcyBhIGNoZWNrYm94XG5cdC8vIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNwZWNpYWxpc20gYXBwbGllcyB0byB0aGUgdXNlclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByb2JsZW0tdHlwZS1waWNrZXI6bm90KC5yZWFkb25seSkgLnR5cGUtY29sdW1uIGxpIC5zcGVjaWFsaXNtLWNoZWNrYm94JywgZnVuY3Rpb24oKSB7XG5cdFx0c3RhZmZQcm9ibGVtVHlwZVBhZ2UudG9nZ2xlU3BlY2lhbGlzbSgkKHRoaXMpKTtcblx0fSk7XG5cblx0Ly8gU3RhZmYgZmlsdGVyIGhhbmRsaW5nIChmb3IgY2xpY2tpbmcgb24gbmF2aWdhdGlvbiBlLmcuXG5cdC8vIFwiYW5hbHlzdHNcIiBzaG93cyBvbmx5IHVzZXJzIG9mIHRoYXQgdHlwZSlcblx0JChzdGFmZlBhZ2UubmF2U2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1zbHVnXVwiKS5jbGljayhlbCA9PiB7XG5cdFx0Ly8gQ2xlYXIgYW55IGluLXByb2dyZXNzIHNlYXJjaCB0byByZXNldCB0aGUgbWFpbiBsaXN0IG9mIHN0YWZmXG5cdFx0aWYgKCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoKSAhPT0gJycpIHtcblx0XHRcdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpLmtleXVwKCk7XG5cdFx0fVxuXG5cdFx0Ly8gVG9nZ2xlIGFjdGl2ZSBjbGFzcyB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgdHlwZVxuXHRcdCQoZWwuZGVsZWdhdGVUYXJnZXQpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0XHQvLyBPYnRhaW4gZGF0YSBuZWNlc3NhcnkgZm9yIGZpbHRlcmluZ1xuXHRcdC8vIC0gc2x1ZyBvZiB0aGUgdHlwZSBvZiBlbXBsb3llZSB0byBmaWx0ZXJcblx0XHRsZXQgc2x1ZyA9IGVsLmRlbGVnYXRlVGFyZ2V0LmRhdGFzZXQuc2x1Zztcblx0XHQvLyAtIHRhYmxlIHRvIHBlcmZvcm0gdGhlIGZpbHRlcmluZyBvblxuXHRcdGxldCAkdGFibGUgPSAkKHN0YWZmUGFnZS5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoXCJ0YWJsZVwiKTtcblx0XHQvLyAtIGluZGV4IG9mIGNvbHVtbiB0byBiZSBmaWx0ZXJlZCwgZ2l2ZW4gdGhlIHNsdWdcblx0XHQvLyAgICh1c2VzIC5maWx0ZXIgb3ZlciB0aGUgdGFibGUgaGVhZGVyIGNvbXBhcmluZyBzbHVnKVxuXHRcdGxldCBjb2x1bW5JbmRleCA9ICR0YWJsZS5maW5kKFwidGhlYWQgdGhcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5zbHVnID09PSBzbHVnKS5maXJzdCgpLmluZGV4KCk7XG5cblx0XHQvLyBQZXJmb3JtIHRoZSBmaWx0ZXJpbmdcblx0XHQkdGFibGUuZmluZChcInRib2R5IHRyXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRsZXQgJHRyID0gJChlbCk7XG5cdFx0XHRsZXQgJHRkID0gJHRyLmNoaWxkcmVuKCkuZXEoY29sdW1uSW5kZXgpO1xuXHRcdFx0JHRyLnRvZ2dsZUNsYXNzKFwicm93LWhpZGRlblwiLCAkdGQuY2hpbGRyZW4oKS5sZW5ndGggPT09IDApO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWx3YXlzIHVwZGF0ZSBzcGxhc2ggc2NyZWVuIGluIGNhc2UgdGhlcmUgYXJlIG5vIHJlc3VsdHNcblx0XHQvLyBzbyB0aGlzIG1ldGhvZCB3aWxsIGRldGVjdCB0aGlzIGFuZCBkaXNwbGF5IHRoZSDigJhubyByZXN1bHRz4oCZIHNwbGFzaFxuXHRcdC8vIEFsc28gc2V0cyB0b3AgYmFyIHRpdGxlIHdpdGggdGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzXG5cdFx0Ly8gU2VlIG1ldGhvZCBmb3IgbW9yZSBkZXRhaWxzIG9uIGFjdGlvbnMgcGVyZm9ybWVkXG5cdFx0c3RhZmZQYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbigpO1xuXHR9KTtcblxuXHQvLyBEaXNwbGF5IHN0YWZmIGRldGFpbHMgd2hlbiBjbGlja2luZyBvbiBzdGFmZiByb3cgaW4gbWFpbiB0YWJsZVxuXHQkKHN0YWZmUGFnZS50YWJsZVNlbGVjdG9yKS5vbihcImNsaWNrXCIsIFwidGJvZHkgdHJcIiwgZSA9PiB7XG5cdFx0c3RhZmZQYWdlLnNob3dUYWJsZVJvd0RldGFpbHMocGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpKTtcblx0fSk7XG5cblx0Ly8gUGVyZm9ybSBzZWFyY2ggd2hlbiBzZWFyY2ggZmllbGQgaGFzIHZhbHVlIChvbiBlYWNoIGNoYXJhY3RlciBpbnB1dClcblx0JCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdHN0YWZmUGFnZS5zZWFyY2goJCh0aGlzKS52YWwoKSk7XG5cdH0pO1xuXG5cdC8vIEtleWJvYXJkIHNob3J0Y3V0c1xuXHQkKGRvY3VtZW50KS5rZXl1cChlID0+IHtcblx0XHQvLyBJZ25vcmUgaWYgaW4gaW5wdXRcblx0XHRpZiAoW1wiaW5wdXRcIiwgXCJ0ZXh0YXJlYVwiXS5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC12aWV3XCIpKSB7XG5cdFx0XHR2YXIgcGFnZW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtdmlld1wiKS5kYXRhc2V0LnBhZ2U7XG5cdFx0fVxuXHRcdGlmICghcGFnZW5hbWUpIHJldHVybjsgLy8gaWdub3JlIHBhZ2VzIHdpdGhvdXQgbmFtZVxuXHRcdGlmIChwYWdlbmFtZS5lbmRzV2l0aChcInNcIikpIHBhZ2VuYW1lID0gcGFnZW5hbWUuc2xpY2UoMCwgLTEpO1xuXHRcdGxldCBwYWdlID0gd2luZG93W3BhZ2VuYW1lICsgXCJQYWdlXCJdO1xuXHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XG5cdFx0XHRjYXNlIDM4OiAvLyB1cFxuXHRcdFx0Y2FzZSA0MDogLy8gZG93blxuXHRcdFx0XHRpZiAobG9jYXRpb24uaGFzaC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5oYXNoID0gMDtcblx0XHRcdFx0XHRlLmtleUNvZGUgPSA0MDtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgaWQgPSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG5cdFx0XHRcdGlkID0gaWQgKyAoZS5rZXlDb2RlID09PSAzOCA/IC0xIDogMSk7IC8vIHVwIG9yIGRvd25cblx0XHRcdFx0bGV0ICRyb3cgPSAkKHBhZ2UudGFibGVTZWxlY3RvcikuZmluZChcIltkYXRhLXJvd2lkPVxcXCJcIiArIGlkICsgXCJcXFwiXVwiKTtcblx0XHRcdFx0Ly8gRG9lcyByb3cgd2l0aCBJRCBleGlzdFxuXHRcdFx0XHRpZiAoJHJvdy5sZW5ndGggPT09IDApIHJldHVybjtcblx0XHRcdFx0JChwYWdlLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBpZCArIFwiXFxcIl1cIikuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHRcdFx0cGFnZS5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI3OiAvLyBlc2Ncblx0XHRcdFx0cGFnZS5oaWRlVGFibGVSb3dEZXRhaWxzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9zdGFmZi5qcyJdLCJzb3VyY2VSb290IjoiIn0=