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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _HardwarePage = __webpack_require__(45);

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
/* 45 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvaGFyZHdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZVBhZ2UuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiRXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJjYWxscyIsImFwaSIsIm1hcCIsIkNhbGwiLCJlIiwidGlja2V0cyIsIlRpY2tldCIsImNvbW1lbnRzIiwiQ29tbWVudCIsInN0YXR1c2VzIiwiU3RhdHVzIiwidGlja2V0U3RhdHVzZXMiLCJUaWNrZXRTdGF0dXMiLCJjYWxsSWQiLCJmaW5kIiwiY2FsbCIsImlkIiwidGlja2V0SWQiLCJmaWx0ZXIiLCJfdGlja2V0cyIsImluZGV4T2YiLCJjb21tZW50IiwiX2NhbGwiLCJzdGF0dXNJZCIsInN0YXR1cyIsInN0YXR1c1NsdWciLCJzbHVnIiwidGlja2V0IiwidGlja2V0SWRzIiwic3RhdHVzU2x1Z3MiLCJzbGljZSIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJfY2FsbHMiLCJzdGFmZklkIiwiZXhwZXJ0aXNlVHlwZVN0YWZmIiwiX2Fzc2lnbmVkX3RvX29wZXJhdG9yIiwiX2V4cGVydGlzZV90eXBlX3N0YWZmIiwiX3N0YWZmIiwic3RhZmZJZHMiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkIiwidGlja2V0UGFnZSIsInN0YWZmTWFuYWdlciIsImN1cnJlbnRVc2VyIiwiYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJleHBlcnRpc2VfdHlwZV9zdGFmZiIsInN0YWZmIiwiZ2V0VGlja2V0QXNzaWduZWRUbyIsInRpY2tldFN0YXR1c0lkIiwidGlja2V0U3RhdHVzIiwiX3RpY2tldCIsImNvbW1lbnRJZCIsImlkcyIsImV4cGVydGlzZVR5cGVJZCIsImV4cGVydGlzZVR5cGVzIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQiLCJjb25jYXQiLCJnZXRUaWNrZXRzV2l0aElkSW4iLCJxdWVyeSIsInByb3BlcnRpZXMiLCJNYW5hZ2VyIiwiU3RhZmZNYW5hZ2VyIiwiRW1wbG95ZWUiLCJkZXBhcnRtZW50cyIsImVtcGxveWVlIiwicGVybWlzc2lvbiIsInZhbHVlIiwiYWNjZXNzIiwiYXNFbXBsb3llZSIsImdldCIsImV4cGVydGlzZVR5cGUiLCJfc3BlY2lhbGlzbXMiLCJvdXRwdXQiLCJwdXNoIiwiRXhwZXJ0aXNlVHlwZSIsIkV4cGVydGlzZVR5cGVTdGFmZiIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiZWxlbWVudHMiLCJ0b0xvd2VyQ2FzZSIsInNvbWUiLCJTdHJpbmciLCJlbCIsInByb3AiLCJpbmNsdWRlcyIsIkR5bmFtaWNQYWdlIiwic2VjdGlvblNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsIm5hdlNlbGVjdG9yIiwiZGV0YWlsU2VsZWN0b3IiLCJzcGxpdCIsImh0bWwiLCIkIiwibmF2VGV4dCIsIiR0YWJsZSIsInJlc3VsdHNDb3VudCIsImhhc0NsYXNzIiwiJHNwbGFzaFNjcmVlbiIsIiRzaG93IiwiJGhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmlyc3QiLCJ0ZXh0IiwicmVwbGFjZSIsImNsb3Nlc3QiLCJ1bmRlZmluZWQiLCJvYmplY3QiLCIkdGFibGVTZWN0aW9uIiwiJHRhYmxlSGVhZCIsIiR0YWJsZUJvZHkiLCIkbmV3Um93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJkYXRhc2V0Iiwicm93aWQiLCJ0b2dnbGVDbGFzcyIsInBhcnNlSW50IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyaW5nIiwiZWFjaCIsInRkIiwiaW5uZXJIVE1MIiwiT2JqZWN0IiwicmVzb2x2ZSIsImFwcGVuZCIsImVtcHR5Iiwic2libGluZ3MiLCJ1bndyYXAiLCJjbGljayIsImhpZGVUYWJsZVJvd0RldGFpbHMiLCJ3cmFwIiwiJHNlbGVjdCIsImRlZmF1bHRUZXh0IiwiZGVmYXVsdE9wdGlvbklkIiwicHJvcGVydHkiLCJnZXRBZGRpdGlvbmFsRGV0YWlscyIsIm9wdGlvbiIsIk9wdGlvbiIsImRpc2FibGVkIiwic2VsZWN0cGlja2VyIiwib2JqZWN0Q2FsbGJhY2siLCJzZWFyY2hLZXlzIiwicGFnZSIsImNsZWFyVGFibGUiLCJrZXkiLCJSZWdFeHAiLCJ2YWwiLCJhcHBlbmRUYWJsZVJvdyIsInVwZGF0ZVNwbGFzaFNjcmVlbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZHVyYXRpb24iLCJyZW1vdmUiLCJtc2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiSGFyZHdhcmVNYW5hZ2VyIiwiZGV2aWNlcyIsIkRldmljZSIsIlNldCIsInQiLCJkZXZpY2VzQnlUeXBlIiwiZGV2aWNlIiwibWFrZSIsInNlcmlhbE51bWJlciIsImQiLCJzZXJpYWxfbm8iLCJTb2Z0d2FyZU1hbmFnZXIiLCJwcm9ncmFtcyIsIlByb2dyYW0iLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsImF1dGhvciIsImF1dGhvcl9pZCIsImNhbGxfaWQiLCJ0aWNrZXRfaWQiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdF9odW1hbiIsImNyZWF0ZWRBdFJlYWwiLCJjcmVhdGVkX2F0IiwiY3JlYXRlZF9hdF9yZWFsIiwiX2F1dGhvciIsImdldENhbGwiLCJnZXRUaWNrZXQiLCJ0aW1lIiwiY2FsbGVyIiwiY2FsbGVyX2lkIiwib3BlcmF0b3IiLCJvcGVyYXRvcl9pZCIsIl9jYWxsZXIiLCJfb3BlcmF0b3IiLCJnZXRUaWNrZXRzRnJvbUNhbGwiLCJlbWFpbCIsImpvYiIsImpvYl90aXRsZSIsImRlcGFydG1lbnQiLCJwaG9uZSIsInBob25lX251bWJlciIsImV4cGVydGlzZV90eXBlcyIsInNwZWNpYWxpc21zIiwic3BlY2lhbGlzdCIsImFuYWx5c3QiLCJhZG1pbiIsIl9kZXBhcnRtZW50IiwicmVhZCIsInJlYWRvbmx5IiwiZ2V0RXhwZXJ0aXNlVHlwZXMiLCJkYXRhIiwiZGVwYXJ0bWVudF9pZCIsInBhcmVudF9pZCIsImdldEV4cGVydGlzZVR5cGUiLCJfY2hpbGRyZW4iLCJzdGFmZl9pZCIsImV4cGVydGlzZV90eXBlX2lkIiwiZXhwZXJ0aXNlX3R5cGUiLCJnZXRUaWNrZXRzV2l0aFNsdWciLCJzdGF0dXNIaXN0b3J5Iiwic3RhdHVzX2hpc3RvcnkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic29sdXRpb24iLCJzb2x1dGlvbl9pZCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXRfaHVtYW4iLCJ1cGRhdGVkQXRSZWFsIiwidXBkYXRlZF9hdCIsImV4cGVydGlzZV90eXBlX3N0YWZmX2lkIiwiYXNzaWduZWRUb09wZXJhdG9ySWQiLCJhc3NpZ25lZF90b19vcGVyYXRvcl9pZCIsInVwZGF0ZWRfYXRfcmVhbCIsImdldENhbGxzQnlUaWNrZXRJZCIsImdldFN0YXR1cyIsIl9zdGF0dXMiLCJnZXRTdGF0dXNIaXN0b3J5IiwiX3N0YXR1c19oaXN0b3J5IiwiZ2V0RGV2aWNlcyIsIl9kZXZpY2VzIiwiZ2V0UHJvZ3JhbXMiLCJfcHJvZ3JhbXMiLCJnZXRDb21tZW50c0J5SWRzIiwiX2NvbW1lbnRzIiwiZ2V0Q29tbWVudCIsIl9zb2x1dGlvbiIsImdldEV4cGVydGlzZVR5cGVTdGFmZiIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImdldFRpY2tldHNCeVRpY2tldElEcyIsIkFycmF5Iiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiaGFyZHdhcmVQYWdlIiwiaW5pdCIsIkhhcmR3YXJlUGFnZSIsInBvcHVsYXRlVHlwZXMiLCJwYXJlbnRFbGVtZW50IiwicG9wdWxhdGVNYWtlIiwic2hvd0RldmljZXMiLCJOdW1iZXIiLCJzaG93VGFibGVSb3dEZXRhaWxzIiwiaGFzTG9jYXRpb25IYXNoIiwiaGFyZHdhcmVNYW5hZ2VyIiwiVHVyYm9saW5rcyIsInZpc2l0IiwidGlja2V0TWFuYWdlciIsInNvZnR3YXJlTWFuYWdlciIsInR5cGVMaXN0IiwidW5pcXVlVHlwZXMiLCJyb3ciLCJtYWtlTGlzdCIsInVuaXF1ZU1ha2UiLCJ1bmlxdWVNYWtlc09mVHlwZSIsInJlc3VsdHMiLCJnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSIsImFsZXJ0Iiwic3RhdHVzQ2xhc3MiLCJzdGF0dXNUZXh0IiwiaiIsImsiLCJnZXRTb2Z0d2FyZVR5cGUiLCJ1cGRhdGVTaW5nbGVWaWV3TmF2YmFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCQSxhOzs7QUFDcEIsMEJBQWM7QUFBQTs7QUFBQTs7QUFHYixRQUFLQyxvQkFBTCxHQUE0QkMsT0FBT0Qsb0JBQVAsSUFBK0IsSUFBSUUsOEJBQUosRUFBM0Q7O0FBRUEsUUFBS0MsS0FBTCxHQUFnQkMsSUFBSUQsS0FBSixDQUFVRSxHQUFWLENBQWM7QUFBQSxVQUFLLElBQUlDLGNBQUosQ0FBU0MsQ0FBVCxDQUFMO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFFBQUtDLE9BQUwsR0FBZ0JKLElBQUlJLE9BQUosQ0FBWUgsR0FBWixDQUFnQjtBQUFBLFVBQUssSUFBSUksZ0JBQUosQ0FBV0YsQ0FBWCxDQUFMO0FBQUEsR0FBaEIsQ0FBaEI7QUFDQSxRQUFLRyxRQUFMLEdBQWdCTixJQUFJTSxRQUFKLENBQWFMLEdBQWIsQ0FBaUI7QUFBQSxVQUFLLElBQUlNLGlCQUFKLENBQVlKLENBQVosQ0FBTDtBQUFBLEdB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OEMsS0FBOUMsR0FBc0QsS0FBS0QsTUFBTCxDQUFZSSxTQUE5RjtBQUNBOzs7O0VBdkh3QzFGLHFCOztrQkFBckI0TSxZIiwiZmlsZSI6Ii9qcy9wYWdlcy9oYXJkd2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMmE5NmM2NDYyYzU1ZTA0YTIyNCIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FsbCBmcm9tIFwiLi9DYWxsXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL1N0YXR1c1wiO1xuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXRcIjtcbmltcG9ydCBUaWNrZXRTdGF0dXMgZnJvbSBcIi4vVGlja2V0U3RhdHVzXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YXR1c2VzXG4gKiBhbmQgdGlja2V0cyBhbmQgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFRpY2tldE1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gd2luZG93LmV4cGVydGlzZVR5cGVNYW5hZ2VyIHx8IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jYWxscyAgICA9IGFwaS5jYWxscy5tYXAoZSA9PiBuZXcgQ2FsbChlKSk7XG5cdFx0dGhpcy50aWNrZXRzICA9IGFwaS50aWNrZXRzLm1hcChlID0+IG5ldyBUaWNrZXQoZSkpO1xuXHRcdHRoaXMuY29tbWVudHMgPSBhcGkuY29tbWVudHMubWFwKGUgPT4gbmV3IENvbW1lbnQoZSkpO1xuXHRcdHRoaXMuc3RhdHVzZXMgPSBhcGkuc3RhdHVzZXMubWFwKGUgPT4gbmV3IFN0YXR1cyhlKSk7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyA9IGFwaS50aWNrZXRTdGF0dXNlcy5tYXAoZSA9PiBuZXcgVGlja2V0U3RhdHVzKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NhbGx9IHNpbmdsZSBpbnN0YW5jZSBvZiBDYWxsIHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbmQoY2FsbCA9PiBjYWxsLmlkID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxscyByZWZlcmVuY2luZyBhIHNwZWNpZmljIHRpY2tldFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENhbGxzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbHRlcihjYWxsID0+IGNhbGwuX3RpY2tldHMuaW5kZXhPZih0aWNrZXRJZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBub3RlcyBmb3IgYSBjYWxsXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbE5vdGVzQnlDYWxsSWQoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuX2NhbGwgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIElEXG5cdCAqL1xuXHRnZXRTdGF0dXMoc3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuaWQgPT09IHN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIHNsdWdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBzdGF0dXNTbHVnXG5cdCAqL1xuXHRnZXRTdGF0dXNCeVNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0fSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0IHdpdGggdGlja2V0SWRcblx0ICovXG5cdGdldFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmluZCh0aWNrZXQgPT4gdGlja2V0LmlkID09PSB0aWNrZXRJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldElkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0LnN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBvbmUgb2YgbWFueSBnaXZlbiBzdGF0dXNlc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBzdGF0dXNTbHVncyBBcnJheSBvZiBTdHJpbmdzJ3MgcmVwcmVzZW50aW5nIHN0YXR1cyBzbHVnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBvbmUgb2YgbWFueSBnaXZlbiBTdGF0dXMnc1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnSW4oc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0cy5zbGljZSgwKTtcblxuXHRcdGZvciAobGV0IGkgPSB0aWNrZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZih0aWNrZXRzW2ldLnN0YXR1cy5zbHVnKSA9PT0gLTEpIHRpY2tldHMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aWNrZXRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXRzIHJlZmVyZW5jZWQgaW4gYSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyByZWZlcmVuY2VkIGluIGEgQ2FsbFxuXHQgKi9cblx0Z2V0VGlja2V0c0Zyb21DYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuX2NhbGxzLmluZGV4T2YoY2FsbElkKSA+IC0xKTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZChzdGFmZklkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZCB8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhzdGFmZklkcykge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRcdHRpY2tldHMgICAgICAgICAgICA9IHRoaXMudGlja2V0cyxcblx0XHRcdHJlc3VsdCAgICAgICAgICAgICA9IHt9O1xuXG5cdFx0c3RhZmZJZHMuZm9yRWFjaChzdGFmZklkID0+IHtcblx0XHRcdHJlc3VsdFtzdGFmZklkXSA9IHRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkXG5cdFx0XHRcdFx0XHR8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldE15VGlja2V0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBvcGVyYXRvciBvciBzcGVjaWFsaXN0IHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG8uXG5cdCAqXG5cdCAqIElmIGFuIG9wZXJhdG9yIGlzIG5vdCBhc3NpZ25lZCwgdGhlbiB0aGUgRXhwZXJ0aXNlVHlwZVN0YWZmIHdpbGxcblx0ICogYmUgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtFbXBsb3llZX0gRW1wbG95ZWUgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpIHtcblx0XHRpZiAodGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCkgcmV0dXJuIHRpY2tldC5hc3NpZ25lZF90b19vcGVyYXRvcjtcblxuXHRcdHJldHVybiB0aWNrZXQuZXhwZXJ0aXNlX3R5cGVfc3RhZmYuc3RhZmY7IC8vIG9ubHkgdXNlIGV4cGVydGlzZV90eXBlX3N0YWZmIGlmIHRoZXJlIGlzIG5vIGFzc2lnbmVkIG9wZXJhdG9yXG5cdH1cblxuXHQvKipcblx0ICogSWYgdGlja2V0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluXG5cdCAqIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gSWYgYXNzaWduZWQgdG8gc2VsZlxuXHQgKi9cblx0aXNUaWNrZXRBc3NpZ25lZFRvU2VsZih0aWNrZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkgPT09IHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCk7IFxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1cyB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldFN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0X3N0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXRTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXRTdGF0dXMgd2l0aCB0aWNrZXRTdGF0dXNJZFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzKHRpY2tldFN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmluZCh0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLmlkID09PSB0aWNrZXRTdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXNlcyBmb3IgYSB0aWNrZXRcblx0ICpcblx0ICogQHBcblx0ICovXG5cdGdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbHRlcih0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLl90aWNrZXQgPT09IHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNvbW1lbnQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjb21tZW50SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjb21tZW50IHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY29tbWVudElkXG5cdCAqL1xuXHRnZXRDb21tZW50KGNvbW1lbnRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50LmlkID09PSBjb21tZW50SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29tbWVudHNcblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIENvbW1lbnQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDb21tZW50c0J5SWRzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGlkcy5pbmRleE9mKGNvbW1lbnQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdGlja2V0cyBhc3NvY2lhdGVkIHdpdGggYW4gZXhwZXJ0aXNlIHR5cGUgc3RhZmZcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVTdGFmZklkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgc3RhZmYgdG8gZmluZCB0aWNrZXRzIGZvclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEFsbCBtYXRjaGluZyB0aWNrZXRzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0dGlja2V0SWRzICAgICAgPSBbXS5jb25jYXQoLi4uZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gZS50aWNrZXRzKSk7IC8vIG1vdmUgYWxsIG9mIGV4cGVydGlzZVR5cGVzW2ldLnRpY2tldHMgaW50byBhIHNpbmdsZSBhcnJheVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcyk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHRpY2tldHMgb24gYSBwcm9wZXJ0eSBmb3IgYSBwcm92aWRlZCBzZWFyY2ggcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0ge0FycmF5fSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHNhdGlzZnlpbmcgdGhlIHNlYXJjaCBjb25kaXRpb25cblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy50aWNrZXRzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGNvbGxlY3Rpb24gb2YgdGlja2V0cyBieSB0aGVpciBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gaWRzIFRoZSBJRHMgb2YgdGhlIHJlcXVlc3RlZCB0aWNrZXRzIFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5VGlja2V0SURzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiBpZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRW1wbG95ZWUgZnJvbSBcIi4vRW1wbG95ZWVcIjtcblxuLyoqXG4gKiBTdGFmZk1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhZmZcbiAqIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBTdGFmZk1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhZmYgICAgICAgPSBhcGkuc3RhZmYubWFwKGUgPT4gbmV3IEVtcGxveWVlKGUpKTtcblx0XHR0aGlzLmRlcGFydG1lbnRzID0gYXBpLmRlcGFydG1lbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZW1wbG95ZWUgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBlbXBsb3llZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0VtcGxveWVlfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmluZChlbXBsb3llZSA9PiBlbXBsb3llZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBlbXBsb3llZXMgd2l0aCBhIHNwZWNpZmljIHZhbHVlIG9mIGEgcGVybWlzc2lvblxuXHQgKlxuXHQgKiBAcGFyYW0gcGVybWlzc2lvbiBUaGUgcGVybWlzc2lvbiB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIHBlcm1pc3Npb24gKHRydWUvZmFsc2UpIGZvciB3aGV0aGVyIHRoZSBwZXJtaXNzaW9uIGlzIGdyYW50ZWRcblx0ICovXG5cdGdldEVtcGxveWVlc1dpdGhQZXJtaXNzaW9uKHBlcm1pc3Npb24sIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhZmYuZmlsdGVyKGVtcGxveWVlID0+IGVtcGxveWVlLmFjY2Vzc1twZXJtaXNzaW9uXSA9PSB2YWx1ZSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuXHQgKlxuXHQgKiBAcGFyYW0gYXNFbXBsb3llZSBtZXRob2QgcmV0dXJucyBJRCBieSBkZWZhdWx0IG9yIEVtcGxveWVlIGlmIHRydXRoeVxuXHQgKi9cblx0Y3VycmVudFVzZXIoYXNFbXBsb3llZSA9IGZhbHNlKSB7XG5cdFx0bGV0IGlkID0gMTsgLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBXUFxuXG5cdFx0Ly8gR2V0IEVtcGxveWVlIHdpdGggSURcblx0XHRpZiAoYXNFbXBsb3llZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGlkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzcGVjaWFsaXN0cyB3aG8gc3BlY2lhbGlzZSBpbiBhIGNlcnRhaW4gcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBmaW5kIGVtcGxveWVlcyBmb3Jcblx0ICovXG5cdGdldFNwZWNpYWxpc3RzKGV4cGVydGlzZVR5cGUpIHtcblx0XHRsZXQgc3RhZmYgID0gdGhpcy5zdGFmZixcblx0XHQgICAgZmlsdGVyID0gaWQgPT4gZW1wbG95ZWUgPT4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoaWQpID4gLTE7XG5cblx0XHRpZiAodHlwZW9mIGV4cGVydGlzZVR5cGUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdGxldCBvdXRwdXQgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaWQgb2YgZXhwZXJ0aXNlVHlwZSkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdGFmZi5maWx0ZXIoZmlsdGVyKGlkKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RhZmYuZmlsdGVyKGZpbHRlcihleHBlcnRpc2VUeXBlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgZW1wbG95ZWUgaGFzIHRoZSBwYXNzZWQgcHJvYmxlbSB0eXBlXG5cdCAqXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gaW5zcGVjdFxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gbG9vayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGVtcGxveWVlIGhhcyB0aGUgcHJvYmxlbSB0eXBlIGFzIGEgc3BlY2lhbGlzbVxuXHQgKi9cblx0aGFzU3BlY2lhbGlzbShlbXBsb3llZSwgZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGV4cGVydGlzZVR5cGVJZCkgPiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggYWxsIGVtcGxveWVlcyBmb3IgdGhlIGdpdmVuIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybnMgQWxsIG1hdGNoaW5nIHJlc3VsdHMgdG8gdGhlIHF1ZXJ5XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuc3RhZmYsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGUgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVTdGFmZiBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlU3RhZmZcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBleHBlcnRpc2UgdHlwZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBhcGkuZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGUoZSkpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gYXBpLmV4cGVydGlzZVR5cGVTdGFmZi5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZVN0YWZmKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYWxsIEV4cGVydGlzZVR5cGUncyB3aXRoIG5vIHBhcmVudCAoaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRSb290RXhwZXJ0aXNlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5fcGFyZW50ID09IG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZX1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmluZChleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuaWQgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IEV4cGVydGlzZVR5cGVzIHdpdGggSURzIGZyb20gYW4gQXJyYXkgb2YgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGV4cGVydGlzZVR5cGVJZHMgQXJyYXkgb2YgSW50ZWdlcnMgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWQnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZXMgc2F0aXNmeWluZyB0aGUgY29uZGl0aW9uXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlSWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZUlkcy5pbmRleE9mKGV4cGVydGlzZVR5cGUuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmlsdGVyKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcmRlcmVkIGFycmF5IG9mIHBhcmVudHMgb2YgYW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZSB0byBmaW5kIHBhcmVudHMgZnJvbVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZSBwYXJlbnRzLCBhbmQgdGhlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZXMgICAgICA9IFtleHBlcnRpc2VUeXBlUGFyZW50XTtcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRleHBlcnRpc2VUeXBlcy5wdXNoKGV4cGVydGlzZVR5cGVQYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBleHBlcnRpc2VUeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCB3aXRoIGFuIGV4YWN0XG5cdCAqIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgYW5kIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgSUQgcGFpclxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZVxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmZcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBudWxsLCBvciB0aGUgcmVjb3JkIGRlc2lyZWRcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIHN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiA9PT0gc3RhZmZJZCAmJiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVTdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5pZCA9PT0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHx8IG51bGw7XG5cdH1cblxuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuZXhwZXJ0aXNlVHlwZXMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwiLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQWJzdHJhY3QgY2xhc3MgZXh0ZW5kZWQgYnkgYWxsIG1hbmFnZXJzLFxuICogY29udGFpbnMgbWV0aG9kcyB0aGF0IG1heSBiZSB1c2VmdWwgdG8gdGhlIG1hbmFnZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly9cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlYXJjaCBhcnJheSBvZiBlbGVtZW50cyBmb3IgcXVlcnkgaW4gZ2l2ZW4gcHJvcGVydHkgbmFtZXNcblx0ICogXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBBcnJheSBvZiBvYmplY3RzIHRvIGJlIHNlYXJjaGVkIHRocm91Z2hcblx0ICogQHBhcmFtIHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKi9cblx0c2VhcmNoKGVsZW1lbnRzID0gW10sIHF1ZXJ5ID0gXCJcIiwgcHJvcGVydGllcyA9IFtdKSB7XG5cdFx0cXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpc2UgcXVlcnkgKGFuZCBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSBsYXRlcilcblxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWwgPT4geyAvLyBHZXQgYWxsIGVsZW1lbnRzXG5cdFx0XHRyZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3AgPT4geyAvLyBDaGVjayBwcm9wZXJ0aWVzIHVudGlsIG1hdGNoIGlzIGZvdW5kXG5cdFx0XHRcdGlmIChTdHJpbmcoZWxbcHJvcF0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSByZXR1cm4gdHJ1ZTsgLy8gRGV0ZXJtaW5lIGlmIHByb3BlcnR5IGlzIGEgbWF0Y2ggZm9yIHF1ZXJ5XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwiLyoqXG4gKiBEeW5hbWljUGFnZVxuICpcbiAqIEV4dGVuZGVkIGJ5IGV2ZXJ5IHBhZ2UsIGUuZy4gVGlja2V0UGFnZS5cbiAqIENvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IGFyZSByZXBlYXRlZCBvZnRlbiBhbW9uZ1xuICogcGFnZXMsIHN1Y2ggYXMgdXBkYXRpbmcgdGFibGVzIG9yIHVwZGF0aW5nIHRoZSBuYXZiYXJcbiAqL1xuY2xhc3MgRHluYW1pY1BhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGEgcGFnZSB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3JzXG5cdCAqIHRvIGRlZmluZSB0aGUgYm91bmRzIG9mIHRoZSBwYWdlLCBpbiBjYXNlcyB3aGVyZSB0aGlzIER5bmFtaWNQYWdlXG5cdCAqIGlzIG5vdCB0aGUgb25seSBwYWdlIG9uIHRoZSBzY3JlZW4sIHN1Y2ggYXMgaWYgYSBwYWdlIGlzIGJlaW5nXG5cdCAqIGRpc3BsYXllZCBpbiBhIG1vZGFsLlxuXHQgKlxuXHQgKiBOb3QgcHJvdmlkaW5nIGFueSBzZWxlY3RvcnMgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoZVxuXHQgKiBtYWluIHNlbGVjdG9ycyBmb3IgdGhlIGVudGlyZSBzY3JlZW4sIHN1Y2ggdGhhdFxuXHQgKiB0aGlzIHBhZ2UgYmVjb21lcyB0aGUgbWFpbiBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHNlY3Rpb25TZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmluZyB0YWJsZSB2aWV3XG5cdCAqIEBwYXJhbSB0YWJsZVNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGFibGUgd2l0aGluIHByZXZpb3VzIHNlY3Rpb25cblx0ICogQHBhcmFtIG5hdlNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgbmF2aWdhdGlvbiBiYXIgc2hvd24gYXQgdG9wIG9mIHNlY3Rpb25cblx0ICogQHBhcmFtIGRldGFpbFNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3Igc2luZ2xlIHZpZXcgZGV0YWlsIHNob3duIGZvciBhbiBpbmRpdmlkdWFsIHJvd1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNlY3Rpb25TZWxlY3RvciA9IFwiI2xpc3Qtdmlld1wiLFxuXHRcdHRhYmxlU2VsZWN0b3IgPSBcIiN0YWJsZS1zZWN0aW9uXCIsXG5cdFx0bmF2U2VsZWN0b3IsXG5cdFx0ZGV0YWlsU2VsZWN0b3Jcblx0fSA9IHt9KSB7XG5cdFx0dGhpcy5zZWN0aW9uU2VsZWN0b3IgPSBzZWN0aW9uU2VsZWN0b3I7XG5cdFx0dGhpcy50YWJsZVNlbGVjdG9yID0gdGFibGVTZWxlY3Rvcjtcblx0XHQvLyBTZXQgbmF2aWdhdGlvbiBzZWxlY3RvciB0byBmaXJzdCBjb21wb25lbnQgb2Ygc2VjdGlvbiBzZWxlY3RvciB3aXRoIOKAmC1uYXbigJkgYXBwZW5kZWQsIG90aGVyd2lzZSBkZWZhdWx0IENTUyBzZWxlY3RvclxuXHRcdHRoaXMubmF2U2VsZWN0b3IgPSBuYXZTZWxlY3RvciA/IG5hdlNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItbmF2XCIgOiBcIi5zaWRlLW5hdi1iYXItbmVzdGVkXCIpO1xuXHRcdHRoaXMuZGV0YWlsU2VsZWN0b3IgPSBkZXRhaWxTZWxlY3RvciA/IGRldGFpbFNlbGVjdG9yIDogKHNlY3Rpb25TZWxlY3RvciAhPT0gXCIjbGlzdC12aWV3XCIgPyBzZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIgXCIpWzBdICsgXCItZGV0YWlsXCIgOiBcIiNzaW5nbGUtdmlld1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpdGxlIGJhciBvZiB0aGUgc2luZ2xlIHZpZXcgdG8gdGhlIGdpdmVuIHN0cmluZ1xuXHQgKiBDQVVUSU9OOiBEb2VzIG5vdCBwZXJmb3JtIGVzY2FwaW5nIG9mIGlucHV0IHN0cmluZywgZG8gbm90IHBhc3Ncblx0ICogdXNlciBjb250ZW50IHRvIHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0gaHRtbCBIVE1MIHRvIHNldCB0aGUgc2luZ2xlIHZpZXcgdGl0bGUgdG9cblx0ICovXG5cdHVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIoaHRtbCkge1xuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS5odG1sKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBcIkxvYWRpbmfigKZcIiBzcGxhc2ggc2NyZWVuIGlmIGl0J3Mgc2hvd25cblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBcIk5vIFJlc3VsdHPigKZcIiBzcGxhc2ggc2NyZWVuXG5cdCAqIHNob3VsZCBiZSBzaG93biBvciBub3QuXG5cdCAqXG5cdCAqIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHVzaW5nIFwiYXBwZW5kVGFibGVcIlxuXHQgKi9cblx0dXBkYXRlU3BsYXNoU2NyZWVuKG5hdlRleHQgPSBudWxsKSB7XG5cdFx0Ly8gR2V0IHRhYmxlIGVsZW1lbnQgdG8gaW5zcGVjdCBjb250ZW50c1xuXHRcdHZhciAkdGFibGUgPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0XHRcdC8vIEdldCBudW1iZXIgb2YgcmVzdWx0cyB3aXRoaW4gdGFibGUgY3VycmVudGx5IGJlaW5nIHNob3duXG5cdFx0XHRcdC8vIFRoaXMgaXMgbm90IGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUgSFRNTFxuXHRcdFx0XHQvLyBzaW5jZSBzb21lIHRhYmxlIHJvd3MgbWF5IGJlIGhpZGRlbiwgd2hpY2ggbmVlZCB0byBiZVxuXHRcdFx0XHQvLyBkaXNjb3VudGVkIGZyb20gdGhlIHRvdGFsIGNvdW50LlxuXHRcdCAgICByZXN1bHRzQ291bnQgPSAkdGFibGUuZmluZCgndGJvZHkgdHInKS5maWx0ZXIoKGksIGVsKSA9PiAhJChlbCkuaGFzQ2xhc3MoXCJyb3ctaGlkZGVuXCIpKS5sZW5ndGgsXG5cdFx0XHRcdC8vIEdldCBzcGxhc2ggc2NyZWVuIGVsZW1lbnQgd2hpY2ggbWF5IGJlIGJlaW5nIHNob3duIGluc3RlYWQgb2YgdGFibGVcblx0XHQgICAgJHNwbGFzaFNjcmVlbiA9ICQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmZpbmQoJy5zcGxhc2gtc2NyZWVuJyk7XG5cblx0XHQvLyBEZXBlbmRpbmcgb24gd2hldGhlciB0aGVyZSBhcmUgcmVzdWx0cywgdGhlIHNwbGFzaCBzY3JlZW4gb3IgdGFibGUgbmVlZHMgdG8gYmUgc2hvd25cblx0XHQvLyBhbmQgdGhlIG90aGVyIHN3YXBwZWQgb3V0IHVzaW5nIENTU1xuXHRcdHZhciBbJHNob3csICRoaWRlXSA9IHJlc3VsdHNDb3VudCA/IFskdGFibGUsICRzcGxhc2hTY3JlZW5dIDogWyRzcGxhc2hTY3JlZW4sICR0YWJsZV07XG5cdFx0JGhpZGUuYWRkQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cdFx0JHNob3cucmVtb3ZlQ2xhc3MoXCJibG9jay1oaWRkZW5cIik7XG5cblx0XHQvLyBUaGUgbWFpbiB0b3AgYmFyIGZvciB0aGUgbGlzdCB2aWV3IGNvbnRhaW5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgc2hvd24gaW4gdGhlIHRhYmxlXG5cdFx0aWYgKCFuYXZUZXh0KSB7XG5cdFx0XHQvLyBTZXQgbmF2YmFyIHRleHQgYXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRhYmxlIHRoZW4gYXBwZW5kIGN1cnJlbnRseSBzZWxlY3RlZCBmaWx0ZXJcblx0XHRcdG5hdlRleHQgPSByZXN1bHRzQ291bnQgKyBcIiBcIiArICQodGhpcy5uYXZTZWxlY3RvcikuZmluZChcImxpLmFjdGl2ZVwiKS5maXJzdCgpLnRleHQoKS5yZXBsYWNlKFwiQWxsIFwiLCBcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBJZiB1bmFibGUgdG8gb2J0YWluIHJvd3MgY291bnQsIHNob3cgXCJMb2FkaW5n4oCmXCJcblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5jbG9zZXN0KFwic2VjdGlvblwiKS5maW5kKFwiLnRvcC1uYXYgaDRcIikudGV4dChyZXN1bHRzQ291bnQgIT09IHVuZGVmaW5lZCA/IG5hdlRleHQgOiBcIkxvYWRpbmfigKZcIik7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICogdXNpbmcgZGF0YSBmcm9tIFwib2JqZWN0XCIuXG5cdCAqXG5cdCAqIFRoZSBwcm9wZXJ0eSBuYW1lcyBzaG91bGQgY29ycmVzcG9uZCB3aXRoIHRoZSBcInNsdWdcIlxuXHQgKiBhdHRyaWJ1dGUgaW4gdGFibGUgaGVhZGVyLlxuXHQgKlxuXHQgKiBOT1RFOiBUaGlzIGFzc3VtZXMgdGhlIG9iamVjdCBoYXMgYW4gSUQgYXR0cmlidXRlLiBJbmNsdWRlIGl0XG5cdCAqIGV2ZW4gaWYgeW91IGRvbid0IHdpc2ggdG8gc2hvdyBpdC5cblx0ICpcblx0ICogQHBhcmFtIG9iamVjdCAtIFRoZSBkYXRhIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZVxuXHQgKiBzcGxhc2hzY3JlZW4gb24geW91ciBwYWdlXG5cdCAqL1xuXHRhcHBlbmRUYWJsZVJvdyhvYmplY3QpIHtcblx0XHR2YXIgJHRhYmxlU2VjdGlvbiA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHQgICAgJHRhYmxlSGVhZCAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGhlYWQgdHInKSxcblx0XHQgICAgJHRhYmxlQm9keSAgICA9ICR0YWJsZVNlY3Rpb24uZmluZCgndGFibGUgdGJvZHknKSxcblx0XHQgICAgJG5ld1JvdyAgICAgICA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcblxuXHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSByb3cgdHdpY2Vcblx0XHRpZiAoJHRhYmxlQm9keS5jaGlsZHJlbihcIltkYXRhLXJvd2lkPVxcXCJcIiArIG9iamVjdC5pZCArIFwiXFxcIl1cIikubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG5cdFx0Ly8gU2V0IElEIG9uIHJvdyB0byByZWZlcmVuY2UgbGF0ZXJcblx0XHQkbmV3Um93WzBdLmRhdGFzZXQucm93aWQgPSBvYmplY3QuaWQ7XG5cdFx0JG5ld1Jvdy50b2dnbGVDbGFzcyhcImhpZ2hsaWdodFwiLCBvYmplY3QuaWQgPT0gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKTtcblxuXHRcdCR0YWJsZUhlYWQuY2hpbGRyZW4oJ3RoJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzbHVnID0gdGhpcy5kYXRhc2V0LnNsdWcsIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG5cdFx0XHRpZiAoc2x1ZyA9PT0gJ2V5ZScpIHsgLy8gdGhlIG9uLWhvdmVyIGV5ZSBpbnZpc2libGUgcm93XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nO1xuXHRcdFx0fSBlbHNlIGlmIChzbHVnICYmIHNsdWcuaW5jbHVkZXMoXCJhY2Nlc3NcIikpIHtcblx0XHRcdFx0Ly8gQm9vbGVhbiB2YWx1ZSBzdXBwb3J0XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgPyB0aGlzLmlubmVySFRNTCA6IFwiwrdcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRkLmlubmVySFRNTCA9IE9iamVjdC5yZXNvbHZlKHNsdWcsIG9iamVjdCkgIT09IHVuZGVmaW5lZCA/IG9iamVjdFtzbHVnXSA6IFwi4oCUXCI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCRuZXdSb3cuYXBwZW5kKHRkKTtcblx0XHR9KTtcblx0XHRcblx0XHQkdGFibGVCb2R5LmFwcGVuZCgkbmV3Um93KTtcblxuXHRcdHJldHVybiAkbmV3Um93WzBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyB0aGUgZGF0YSBpbiB0aGUgdGFibGUgYm9keSB3aXRoaW4gI3RhYmxlLXNlY3Rpb25cblx0ICovXG5cdGNsZWFyVGFibGUoKSB7XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFNob3cgZGV0YWlsIHBhZ2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgdGFibGUgcm93IHRvIGJlIHNob3duIGluIHRoZSBzaW5nbGUgdmlld1xuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCA9IG51bGwpIHtcblx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGZvciBudWxsIGFzIG5vIHJvd3Mgd2lsbCBtYXRjaCBpZiBubyBJRCBwYXNzZWRcblx0XHQvLyAuc2libGluZ3MgZG9lcyBub3QgaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGYgc28gY2FuIGJlIGNoYWluZWQgYWZ0ZXIgZmluZGluZyBoaWdobGlnaHQgcm93IGZpcnN0XG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnJvd2lkID09IGlkKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0XG5cdFx0Ly8gTm8gbmVlZCB0byBzZXQgc3R5bGUgdXNpbmcgSlMgaGVyZSwgQ1NTIGhhbmRsZXMgZmxleFxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikudW53cmFwKFwiZGl2XCIpXG5cdFx0XHQvLyBDbG9zZSBidXR0b24gb24gaGlkZVxuXHRcdFx0LmZpbmQoXCJbZGF0YS1hY3Rpb249XFxcImNsb3NlXFxcIl1cIikuY2xpY2soKCkgPT4gdGhpcy5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xuXHRcdFxuXHRcdGlmIChpZCA+IC0xKSBsb2NhdGlvbi5oYXNoID0gcGFyc2VJbnQoaWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogSGlkZSBkZXRhaWwgcGFnZSBzaG93biB3aXRoIHNob3dEZXRhaWxcblx0ICovXG5cdGhpZGVUYWJsZVJvd0RldGFpbHMoKSB7XG5cdFx0Ly8gRGVzZWxlY3QgYWxsIHJvd3Ncblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdC8vIEZpbHRlciB0byBjaGVjayBpZiBhbHJlYWR5IGhpZGRlbiwgZG9uJ3QgaGlkZSBhZ2FpblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KFwiZGl2XCIpLmxlbmd0aCA9PT0gMCkud3JhcChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblx0XHRcblx0XHRsb2NhdGlvbi5oYXNoID0gXCJcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaWxsIGEgc2VsZWN0IGVsZW1lbnQgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcblx0ICogZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIGEgZHJvcGRvd24gbGlzdFxuXHQgKlxuXHQgKiBAcGFyYW0gJHNlbGVjdCBBIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0IGVsZW1lbnQgdG8gYmUgZmlsbGVkXG5cdCAqIEBwYXJhbSBkZWZhdWx0VGV4dCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcblx0ICogQHBhcmFtIGVsZW1lbnRzIExpc3Qgb2YgZWxlbWVudHMgdG8gYmUgYWRkZWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tXG5cdCAqIEBwYXJhbSBkZWZhdWx0T3B0aW9uSWQgSUQgb2YgYSBkZWZhdWx0IG9wdGlvbiBmcm9tIHRoZSBlbGVtZW50cyBnaXZlblxuXHQgKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5IG9mIHRoZSBzZWxlY3QgZmllbGQgdG8gYWNjZXNzIHNlbGVjdGVkIGl0ZW0gd2l0aFxuXHQgKiBAcGFyYW0gZ2V0QWRkaXRpb25hbERldGFpbHMgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhZGRpdGlvbmFsIGRldGFpbHMgdG8gYmUgc2hvd24gZm9yIGN1cnJlbnQgaXRlbVxuXHQgKi9cblx0cG9wdWxhdGVTZWxlY3RGaWVsZCgkc2VsZWN0LCBkZWZhdWx0VGV4dCwgZWxlbWVudHMsIGRlZmF1bHRPcHRpb25JZCA9IG51bGwsIHByb3BlcnR5ID0gJ25hbWUnLCBnZXRBZGRpdGlvbmFsRGV0YWlscyA9IG51bGwpIHtcblx0XHQvLyBEZWZhdWx0IGVtcHR5IGNvbnRlbnQgZm9yIGlucHV0XG5cdFx0bGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGVmYXVsdFRleHQsIG51bGwsIHRydWUsIHRydWUpO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0JHNlbGVjdC5lbXB0eSgpLmFwcGVuZChvcHRpb24pO1xuXHRcdFxuXHRcdC8vIEVhY2ggb3B0aW9uIHRvIGJlIHNlbGVjdGVkIGZyb21cblx0XHRlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0aWYgKGdldEFkZGl0aW9uYWxEZXRhaWxzICE9PSBudWxsKSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGdldEFkZGl0aW9uYWxEZXRhaWxzKGUpICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRzZWxlY3QuYXBwZW5kKG5ldyBPcHRpb24oJyMnICsgZS5pZCArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkc2VsZWN0LnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZ1xuXHQgKiBAcGFyYW0gZWxlbWVudHMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWFyY2ggdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0gb2JqZWN0Q2FsbGJhY2sgYSBjYWxsYmFjayByZXR1cm5pbmcgYW4gb2JqZWN0ICh0aGUgcm93IHN0cnVjdHVyZSlcblx0ICogQHBhcmFtIHNlYXJjaEtleXMgdGhlIHByb3BlcnRpZXMgaW4gb2JqZWN0Q2FsbGJhY2sgdG8gaGlnaGxpZ2h0XG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIGVsZW1lbnRzID0gW10sIG9iamVjdENhbGxiYWNrLCBzZWFyY2hLZXlzID0gW10pIHtcblx0XHRsZXQgcGFnZSA9IHRoaXM7XG5cblx0XHRwYWdlLmNsZWFyVGFibGUoKTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdHZhciBvYmplY3QgPSBvYmplY3RDYWxsYmFjayhlbCk7XG5cblx0XHRcdFx0c2VhcmNoS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdFx0b2JqZWN0W2tleV0gPSBTdHJpbmcob2JqZWN0W2tleV0pLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBxdWVyeSArICcpJywgJ2lnJyksICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChxdWVyeSA9PT0gJChcIi5zZWFyY2gtZmllbGQgaW5wdXRcIikudmFsKCkpIHtcblx0XHRcdFx0XHRwYWdlLmFwcGVuZFRhYmxlUm93KG9iamVjdCk7XG5cdFx0XHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYCR7ZWxlbWVudHMubGVuZ3RofSByZXN1bHQke2VsZW1lbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn0gZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgTm8gcmVzdWx0cyBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGEgbWVzc2FnZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCBvdmVyIGFsbCBlbGVtZW50cy5cblx0ICogSGlkZSBhZnRlciA2IHNlY29uZHMsIG9yIGNvbmZpZ3VyYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugc3RyaW5nIHRvIGJlIHNob3duIGluIHRoZSBtZXNzYWdlIGJveC5cblx0ICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgbWVzc2FnZSwgc3VjaCBhcyBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwid2FybmluZ1wiLCBcImRhbmdlclwiXG5cdCAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgdGhlIG1lc3NhZ2UgdG8gYmUgc2hvd24gZm9yLlxuXHQgKi9cblx0c3RhdGljIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiwgdHlwZSA9IFwiZGFuZ2VyXCIsIGR1cmF0aW9uID0gNikge1xuXHRcdC8vIE9ubHkgc2hvdyBvbmUgbWVzc2FnZSBhdCBhIHRpbWVcblx0XHQkKFwiI2FsZXJ0LW5vdGlmaWNhdGlvblwiKS5yZW1vdmUoKTtcblxuXHRcdC8vIENyZWF0ZSBlbGVtZW50XG5cdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtc2cuaWQgPSBcImFsZXJ0LW5vdGlmaWNhdGlvblwiO1xuXHRcdG1zZy5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIiwgYGFsZXJ0LSR7dHlwZX1gLCBcImFsZXJ0LW5vdGlmaWNhdGlvblwiKTtcblx0XHRtc2cuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpOyAvLyBBY2Nlc3NpYmlsaXR5XG5cdFx0Ly8gU2V0IGNvbnRlbnQgYW5kIHNob3cgb24gc2NyZWVuXG5cblx0XHRtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXNnKTtcblxuXHRcdC8vIEhpZGUgYWZ0ZXIgZHVyYXRpb25cblx0XHRzZXRUaW1lb3V0KCgpID0+IG1zZy5yZW1vdmUoKSwgZHVyYXRpb24gKiAxMDAwKTtcblxuXHRcdC8vIENsaWNrIHRvIGhpZGUgbWVzc2FnZVxuXHRcdCQobXNnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuXG4vKipcbiAqIEhhcmR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBkZXZpY2VzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEhhcmR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kZXZpY2VzID0gYXBpLmRldmljZXMubWFwKGUgPT4gbmV3IERldmljZShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgVHlwZXMgaW4gdGFibGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVUeXBlcygpIHtcblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5kZXZpY2VzLm1hcCh0ID0+IHQudHlwZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBNYWtlcyBmb3IgYSBzcGVjaWZpZWQgVHlwZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZU1ha2VzT2ZUeXBlKHR5cGUpIHtcblx0XHRsZXQgZGV2aWNlc0J5VHlwZSA9IHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUpO1xuXG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KGRldmljZXNCeVR5cGUubWFwKHQgPT4gdC5tYWtlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZGV2aWNlcyB3aXRoIGEgc3BlY2lmaWVkIFR5cGUgYW5kIE1ha2Vcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHRnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSh0eXBlLG1ha2UpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSAmJiBkZXZpY2UubWFrZSA9PSBtYWtlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRldmljZXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBkZXZpY2VzIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldERldmljZXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGlkcy5pbmRleE9mKGRldmljZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBkZXZpY2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBkZXZpY2UgXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkZXZpY2UgPT4gZGV2aWNlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRldmljZSB3aXRoIHRoZSBnaXZlbiBzZXJpYWwgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBzZXJpYWxOdW1iZXIgVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlIGRldmljZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0RldmljZX1cblx0ICovXG5cdGdldERldmljZUJ5U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkID0+IGQuc2VyaWFsX25vID09PSBzZXJpYWxOdW1iZXIpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4vUHJvZ3JhbVwiO1xuXG4vKipcbiAqIFNvZnR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBzb2Z0d2FyZSBwcm9ncmFtcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBTb2Z0d2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2Z0d2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMucHJvZ3JhbXMgPSBhcGkucHJvZ3JhbXMubWFwKGUgPT4gbmV3IFByb2dyYW0oZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHByb2dyYW1zIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgcHJvZ3JhbXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0UHJvZ3JhbXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmlsdGVyKHByb2dyYW0gPT4gaWRzLmluZGV4T2YocHJvZ3JhbS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKiBAcmV0dXJucyB7UHJvZ3JhbX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbmQocHJvZ3JhbSA9PiBwcm9ncmFtLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwiLy8gU2luY2UgbmF2IGVsZW1lbnQgaXMgcGVyc2lzdGVkIGJldHdlZW4gcGFnZXMsIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBhY3RpdmUgYnV0dG9uXG4kKFwiI25hdlwiKS5vbihcImNsaWNrXCIsIFwidWwgbGkgYVwiLCBlID0+IHtcblx0JChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuLy8gVG9vbHRpcHMgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIGEgcmVsZXZhbnQgdG9vbHRpcCBIVE1MIGF0dHJpYnV0ZVxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuLy8gRGF0ZS90aW1lIHBpY2tlciBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggcmVsZXZhbnQgY2xhc3NcbiQoJy50aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoKTtcblxuLy8gQ3JlYXRlIG5ldyBlbXBsb3llZSB3aGVuIHNlYXJjaGluZyBmb3Igbm9uLWV4aXN0ZW50IGFzc2lnbmVlXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnbGkubm8tcmVzdWx0cycsIGZ1bmN0aW9uKGUpIHtcblx0dmFyIG5ld1ZhbHVlID0gJCh0aGlzKS5jbG9zZXN0KFwiLmRyb3Bkb3duLW1lbnUub3BlblwiKS5jaGlsZHJlbihcIi5icy1zZWFyY2hib3hcIikuY2hpbGRyZW4oXCJpbnB1dFwiKS52YWwoKSxcblx0ICAgICRtb2RhbCAgID0gJCgnI25ldy1zdGFmZi1tb2RhbCcpO1xuXG5cdCRtb2RhbC5tb2RhbCgnc2hvdycpO1xuXG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwic3RhZmYubmFtZVwiXScpLnZhbChuZXdWYWx1ZSk7XG5cdCRtb2RhbC5maW5kKCdpbnB1dFtuYW1lPVwiZXZlbnRfdGFyZ2V0XCJdJykudmFsKCQodGhpcykuY2xvc2VzdCgnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCdzZWxlY3QnKS5hdHRyKCduYW1lJykpOyAvLyB3aGVuIHRoZSBzdGFmZiBtZW1iZXIgaXMgY3JlYXRlZCwgdGhpcyBpcyB0aGUgaW5wdXQgZmllbGQgaXQnbGwgdXBkYXRlXG59KTtcblxuJCgnI25ldy1zdGFmZi1tb2RhbCwgI25ldy10aWNrZXQtbW9kYWwsICNmb2xsb3ctdXAtY2FsbC1tb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuXHQkKHRoaXMpLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpXG5cdFx0Lm5vdCgnLm5vLWNsZWFyLW9uLXNob3cnKVxuXHRcdC52YWwoJycpO1xuXG5cdCQodGhpcykuZmluZCgnI2FjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZSgpO1xuXG5cdHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0JCh0aGlzKS5maW5kKCcudGltZXBpY2tlcicpLnZhbCgoJzAnICsgKGN1cnJlbnRUaW1lLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy8nICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldERhdGUoKSkuc2xpY2UoLTIpICsgJy8nICsgY3VycmVudFRpbWUuZ2V0RnVsbFllYXIoKSArICcgJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRIb3VycygpKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0TWludXRlcygpKS5zbGljZSgtMikpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3RvZ2dsZScpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAucmVtb3ZlLWFjY29yZGlvbicsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdoaWRlLmJzLmNvbGxhcHNlIHNob3cuYnMuY29sbGFwc2UnLCAnI2FjY29yZGlvbiAuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XG5cdGxldCBpc1Nob3cgPSBlLnR5cGUuc3BsaXQoXCIuXCIpWzBdID09PSBcInNob3dcIjtcblx0JCh0aGlzKS5zaWJsaW5ncygnLmNhcmQtaGVhZGVyJykuZmluZCgnLnZpZXctYWNjb3JkaW9uJykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tdXAnLCAhaXNTaG93KS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi1kb3duJywgaXNTaG93KTtcbn0pO1xuXG4kKCcuc2VhcmNoLWZpZWxkIGlucHV0JykudmFsKCcnKTtcblxuLy8gQm9vdHN0cmFwIFNlbGVjdCBGaXg6IEFkZCBiYWNrIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIHNlbGVjdCBmaWVsZFxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5ib290c3RyYXAtc2VsZWN0XCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51Lm9wZW4nKS50b2dnbGUoKTtcbn0pO1xuXG4vLyBCb290c3RyYXAgbW9kYWxzIGZpeDogYWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJib2R5Om5vdChbZGF0YS1wYWdlPVxcXCJzdGFmZlxcXCJdKSBbZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIl1cIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcy5kYXRhc2V0LnRhcmdldCkubW9kYWwoXCJzaG93XCIpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1BpY2tlcihwaWNrZXJFbGVtZW50LCB2YWx1ZSwgbmFtZSkge1xuXHQkKHBpY2tlckVsZW1lbnQpLmFwcGVuZChuZXcgT3B0aW9uKG5hbWUsIHZhbHVlKSkuc2VsZWN0cGlja2VyKCdyZWZyZXNoJykuc2VsZWN0cGlja2VyKCd2YWwnLCBuYW1lKTtcbn1cblxudmFyIHZhbGlkYXRpb25UaW1lb3V0ID0gd2luZG93LnZhbGlkYXRpb25UaW1lb3V0ID0gbnVsbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDb21tZW50XG4gKlxuICogQSBjb21tZW50IGlzIG1hZGUgYWJvdXQgYSBzcGVjaWZpYyB0aWNrZXQsIGJ5XG4gKiBhIHN0YWZmIG1lbWJlci5cbiAqIFxuICogQ29udGFpbnMgdGhlIFRpY2tldCB0aGF0IGl0IGJlbG9uZ3MgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZDogaWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbF9pZDogY2FsbCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbCAgICAgICAgICAgID0gY2FsbDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDtcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IGF1dGhvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2F1dGhvcik7XG5cdH1cblxuXHRzZXQgYXV0aG9yKGF1dGhvcikge1xuXHRcdHRoaXMuX2F1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdGdldCBjYWxsKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbCh0aGlzLl9jYWxsKTtcblx0fVxuXG5cdHNldCBjYWxsKGNhbGwpIHtcblx0XHR0aGlzLl9jYWxsID0gY2FsbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL0NvbW1lbnQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDYWxsXG4gKlxuICogRXZlcnkgdGltZSB0aGUgSGVscGRlc2sgaXMgY2FsbGVkLCB0aGlzIGlzIGNyZWF0ZWQuXG4gKiBBIGNhbGwgbWF5IGhhdmUgbXVsdGlwbGUgdGlja2V0cywgYSB0aWNrZXQgbWF5IGhhdmVcbiAqIG11bHRpcGxlIGNhbGxzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpbWUsXG5cdFx0Y2FsbGVyX2lkOiBjYWxsZXIsXG5cdFx0b3BlcmF0b3JfaWQ6IG9wZXJhdG9yLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpbWUgICAgID0gdGltZTtcblx0XHR0aGlzLmNhbGxlciAgID0gY2FsbGVyOyAgIC8vIElEIG9mIGNhbGxlciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yOyAvLyBJRCBvZiBvcGVyYXRvciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy50aWNrZXRzICA9IHRpY2tldHM7ICAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFRpY2tldCdzXG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IG9wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IG9wZXJhdG9yKG9wZXJhdG9yKSB7XG5cdFx0dGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0Zyb21DYWxsKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL0NhbGwuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFbXBsb3llZVxuICpcbiAqIEFuIGVtcGxveWVlIG9mIHRoZSBjb21wYW55XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0am9iX3RpdGxlOiBqb2IsXG5cdFx0ZGVwYXJ0bWVudCxcblx0XHRwaG9uZV9udW1iZXI6IHBob25lLFxuXHRcdGV4cGVydGlzZV90eXBlczogc3BlY2lhbGlzbXMgPSBbXSxcblx0XHRvcGVyYXRvciA9IGZhbHNlLFxuXHRcdHNwZWNpYWxpc3QgPSBzcGVjaWFsaXNtcy5sZW5ndGggPiAwLFxuXHRcdGFuYWx5c3QgPSBmYWxzZSxcblx0XHRhZG1pbiA9IGZhbHNlXG5cdH0pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5qb2IgPSBqb2I7XG5cdFx0dGhpcy5kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5uYW1lO1xuXHRcdHRoaXMuX2RlcGFydG1lbnQgPSBkZXBhcnRtZW50LmlkO1xuXHRcdHRoaXMucGhvbmUgPSBwaG9uZTtcblx0XHR0aGlzLnNwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdFx0dGhpcy5hY2Nlc3MgPSB7b3BlcmF0b3IsIGFuYWx5c3QsIGFkbWlufTtcblx0XHRcblx0XHQvLyBJZiB1c2VyIGlzIGFueSBvdGhlciBwZXJtaXNzaW9uIHRoZW4gcmVhZCBpcyBncmFudGVkXG5cdFx0dGhpcy5hY2Nlc3MucmVhZCA9IHRoaXMuYWNjZXNzLm9wZXJhdG9yIHx8IHRoaXMuYWNjZXNzLmFuYWx5c3QgfHwgdGhpcy5hY2Nlc3MuYWRtaW4gfHwgdGhpcy5hY2Nlc3MucmVhZG9ubHkgfHwgZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIHJlYWQgYWNjZXNzIHRvIHRoZSBzeXN0ZW1cblx0ICovXG5cdGdldCBpc1JlYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLnJlYWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBoZWxwIGRlc2sgb3BlcmF0b3Jcblx0ICovXG5cdGdldCBpc09wZXJhdG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5vcGVyYXRvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIGFuYWx5dGljYWwgZGF0YSBhYm91dCB0aGUgaGVscCBkZXNrIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzQW5hbHlzdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYW5hbHlzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhbiBhZG1pbmlzdHJhdG9yIG9uIHRoZSBoZWxwIGRlc2tcblx0ICovXG5cdGdldCBpc0FkbWluKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hZG1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyBBIGxpc3Qgb2YgcHJvYmxlbSB0eXBlcyB0aGUgdXNlciBpcyBhIHNwZWNpYWxpc3Qgb2Zcblx0ICovXG5cdGdldCBzcGVjaWFsaXNtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZXModGhpcy5fc3BlY2lhbGlzbXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzcGVjaWFsaXNtcyBTZXQgdGhlIGxpc3Qgb2Ygc3BlY2lhbGlzbXMgZm9yIHRoaXMgcGVyc29uIG9uIHRoZSBzeXN0ZW1cblx0ICovXG5cdHNldCBzcGVjaWFsaXNtcyhzcGVjaWFsaXNtcykge1xuXHRcdHRoaXMuX3NwZWNpYWxpc21zID0gc3BlY2lhbGlzbXM7XG5cdH1cblxuXHQvKipcblx0ICogUHJlcGFyZSBkYXRhIGZvciBzZW5kaW5nIHRvIEFQSSBlbmRwb2ludC4gVGhlIEFQSSBoYXMgZGlmZmVyZW50XG5cdCAqIGRhdGEga2V5cyByZXByZXNlbnRpbmcgdGhlIGRhdGEgYWNjZXNzaWJsZSBpbiB0aGUgdGFibGVzLCBzbyBuZXdcblx0ICogZGF0YSBhbmQgdXBkYXRlcyB0byBkYXRhIG11c3QgdXNlIHRoZXNlIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGRhdGEgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm5zIGRhdGEgd2l0aCB1cGRhdGVkIGtleSBuYW1lc1xuXHQgKi9cblx0c3RhdGljIHByZXBhcmVEYXRhKGRhdGEgPSB7fSkge1xuXHRcdGRhdGEuam9iX3RpdGxlID0gZGF0YS5qb2I7XG5cdFx0ZGF0YS5waG9uZV9udW1iZXIgPSBkYXRhLnBob25lO1xuXHRcdGRhdGEuZXhwZXJ0aXNlX3R5cGVzID0gZGF0YS5zcGVjaWFsaXNtcztcblx0XHRkYXRhLmRlcGFydG1lbnRfaWQgPSBkYXRhLmRlcGFydG1lbnQ7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcInJlYWRcIiwgXCJvcGVyYXRvclwiLCBcImFuYWx5c3RcIiwgXCJhZG1pblwiXSkge1xuXHRcdFx0ZGF0YVtrZXldID0gZGF0YS5hY2Nlc3Nba2V5XSA/ICgxICYmIChkYXRhLnNwZWNpYWxpc3QgPSAxKSkgOiAwO1xuXHRcdH1cblx0XHRkYXRhLnNwZWNpYWxpc3QgPSBkYXRhLnNwZWNpYWxpc3QgfHwgMDtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0cGFyZW50X2lkOiBwYXJlbnQsXG5cdFx0Y2hpbGRyZW5cblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLm5hbWUgICAgID0gbmFtZTtcblx0XHR0aGlzLnBhcmVudCAgID0gcGFyZW50O1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjsgLy8gSUQgb2YgRXhwZXJ0aXNlVHlwZSdzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIEV4cGVydGlzZVR5cGUnc1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9wYXJlbnQpO1xuXHR9XG5cblx0c2V0IHBhcmVudChwYXJlbnQpIHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX2NoaWxkcmVuKTtcblx0fVxuXG5cdHNldCBjaGlsZHJlbihjaGlsZHJlbikge1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZS5qcyIsImltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVTdGFmZiB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzdGFmZl9pZDogc3RhZmZJZCxcblx0XHRleHBlcnRpc2VfdHlwZV9pZDogZXhwZXJ0aXNlVHlwZUlkLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnN0YWZmICAgICAgICAgID0gc3RhZmZJZDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZUlkO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fZXhwZXJ0aXNlX3R5cGUpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlKGV4cGVydGlzZVR5cGUpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZVN0YWZmLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIFN0YXR1c1xuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgU3RhdHVzLlxuICogQ29udGFpbnMgVGlja2V0cyB0aGF0IGZpdCBpbnRvIHRoZSBzdGF0dXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHNsdWcsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgPSBpZDtcblx0XHR0aGlzLnNsdWcgICAgPSBzbHVnOyAgICAvLyBzbHVnX2V4YW1wbGVcblx0XHR0aGlzLm5hbWUgICAgPSBuYW1lOyAgICAvLyBOYW1lIEV4YW1wbGUhXG5cdFx0dGhpcy50aWNrZXRzID0gdGlja2V0czsgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIFRpY2tldCBpbnN0YW5jZXNcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c1dpdGhTbHVnKHRoaXMuc2x1Zyk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvU3RhdHVzLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0XG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBUaWNrZXQvUHJvYmxlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxzLFxuXHRcdHN0YXR1cyxcblx0XHRzdGF0dXNfaGlzdG9yeTogc3RhdHVzSGlzdG9yeSxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRzb2x1dGlvbl9pZDogc29sdXRpb24sXG5cdFx0ZGV2aWNlcyxcblx0XHRwcm9ncmFtcyxcblx0XHRjb21tZW50cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWwsXG5cdFx0dXBkYXRlZF9hdDogdXBkYXRlZEF0UmVhbCxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZl9pZDogZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdGFzc2lnbmVkX3RvX29wZXJhdG9yX2lkOiBhc3NpZ25lZFRvT3BlcmF0b3JJZFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgICA9IGNhbGxzOyAgLy8gSUQgb2YgY2FsbHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ2FsbCdzXG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGF0dXNfaGlzdG9yeSAgICAgICA9IHN0YXR1c0hpc3Rvcnk7XG5cdFx0dGhpcy50aXRsZSAgICAgICAgICAgICAgICA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gICAgICAgICAgPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnNvbHV0aW9uICAgICAgICAgICAgID0gc29sdXRpb247XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgICA9IGRldmljZXM7ICAvLyBJRCBvZiBkZXZpY2VzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIERldmljZXNcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICAgID0gcHJvZ3JhbXM7IC8vIElEIG9mIHByb2dyYW1zLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFByb2dyYW1zXG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgICA9IGNvbW1lbnRzOyAvLyBJRCBvZiBjb21tZW50cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDb21tZW50J3Ncblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCAgICAgICAgICAgPSB1cGRhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgICAgICA9IGNyZWF0ZWRBdFJlYWw7XG5cdFx0dGhpcy51cGRhdGVkX2F0X3JlYWwgICAgICA9IHVwZGF0ZWRBdFJlYWw7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmFzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgY2FsbHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsc0J5VGlja2V0SWQodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgY2FsbHMoY2FsbHMpIHtcblx0XHR0aGlzLl9jYWxscyA9IGNhbGxzO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblx0XG5cdGdldCBzdGF0dXNfaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1c0hpc3RvcnkodGhpcy5fc3RhdHVzX2hpc3RvcnkpO1xuXHR9XG5cblx0c2V0IHN0YXR1c19oaXN0b3J5KHN0YXR1c0hpc3RvcnkpIHtcblx0XHR0aGlzLl9zdGF0dXNfaGlzdG9yeSA9IHN0YXR1c0hpc3Rvcnk7XG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBkZXZpY2VzKCkge1xuXHRcdHJldHVybiAobmV3IEhhcmR3YXJlTWFuYWdlcigpKS5nZXREZXZpY2VzKHRoaXMuX2RldmljZXMpO1xuXHR9XG5cblx0c2V0IGRldmljZXMoZGV2aWNlcykge1xuXHRcdHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuXHR9XG5cblx0Z2V0IHByb2dyYW1zKCkge1xuXHRcdHJldHVybiAobmV3IFNvZnR3YXJlTWFuYWdlcigpKS5nZXRQcm9ncmFtcyh0aGlzLl9wcm9ncmFtcyk7XG5cdH1cblxuXHRzZXQgcHJvZ3JhbXMocHJvZ3JhbXMpIHtcblx0XHR0aGlzLl9wcm9ncmFtcyA9IHByb2dyYW1zO1xuXHR9XG5cblx0Z2V0IGNvbW1lbnRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudHNCeUlkcyh0aGlzLl9jb21tZW50cyk7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHMpIHtcblx0XHR0aGlzLl9jb21tZW50cyA9IGNvbW1lbnRzO1xuXHR9XG5cblx0Z2V0IHNvbHV0aW9uKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudCh0aGlzLl9zb2x1dGlvbik7XG5cdH1cblxuXHRzZXQgc29sdXRpb24oc29sdXRpb24pIHtcblx0XHR0aGlzLl9zb2x1dGlvbiA9IHNvbHV0aW9uO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlU3RhZmYodGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmZJZDtcblx0fVxuXG5cdGdldCBhc3NpZ25lZF90b19vcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBhc3NpZ25lZF90b19vcGVyYXRvcihhc3NpZ25lZFRvT3BlcmF0b3JJZCkge1xuXHRcdHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0dmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MCAtIDEgKyAxKSkgKyAxOyAvL1JhbmRvbSBpbnQgYmV0d2VlbiAxIGFuZCA0MFxuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCkpLmdldEV4cGVydGlzZVR5cGUocmFuZG9tKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogRGV2aWNlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHR5cGUsXG5cdFx0bWFrZSxcblx0XHRzZXJpYWxfbm8sXG5cdFx0dGlja2V0cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pXG5cdHtcblx0XHR0aGlzLmlkXHRcdFx0XHQ9IGlkO1xuXHRcdHRoaXMudHlwZVx0XHRcdD0gdHlwZTtcblx0XHR0aGlzLm1ha2UgICBcdFx0PSBtYWtlO1xuXHRcdHRoaXMuc2VyaWFsX25vICAgICBcdD0gc2VyaWFsX25vO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMuY3JlYXRlZF9hdFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0XHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hhcmR3YXJlL0RldmljZS5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogUHJvZ3JhbVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgU29mdHdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyYW0ge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHR0aWNrZXRzLFxuXHRcdG9wZXJhdGluZ19zeXN0ZW0sXG5cdFx0ZXhwaXJ5X2RhdGUsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KSBcblx0e1xuXHRcdHRoaXMuaWQgICAgICAgICBcdFx0PSBpZDtcblx0XHR0aGlzLm5hbWUgICAgICAgXHRcdD0gbmFtZTtcblx0XHR0aGlzLl90aWNrZXRzXHRcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMub3BlcmF0aW5nX3N5c3RlbVx0PSBvcGVyYXRpbmdfc3lzdGVtO1xuXHRcdHRoaXMuZXhwaXJ5X2RhdGVcdFx0PSBleHBpcnlfZGF0ZTtcblx0XHR0aGlzLmNyZWF0ZWRfYXQgXHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgXHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIHByb2dyYW0gaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxuXG5cdGdldFNvZnR3YXJlVHlwZSgpIHsgXG5cdFx0Ly9HZXRzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIHByb2dyYW0gaXMgYW4gb3BlcnRpbmcgc3lzdGVtIG9yIG5vdFxuXHRcdGlmICh0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIk9wZXJhdGluZyBTeXN0ZW1cIjtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLm9wZXJhdGluZ19zeXN0ZW0pIHtcblx0XHRcdHJldHVybiBcIkFwcGxpY2F0aW9uXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBcIi1cIjtcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRTdGF0dXNcbiAqXG4gKiBJbnRlcm1lZGlhcnkgcmVsYXRpb25zaGlwIGJldHdlZW4gU3RhdHVzXG4gKiBhbmQgVGlja2V0LiBUaGlzIHN0b3JlcyBhIGhpc3Rvcnkgb2YgYVxuICogVGlja2V0J3Mgc3RhdHVzZXM7IHRoZSBsYXN0IGVudHJ5IGlzXG4gKiB0aGUgVGlja2V0J3MgY3VycmVudCBzdGF0dXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRzdGF0dXNfaWQ6IHN0YXR1cyxcblx0XHRzdGFmZl9pZDogc3RhZmYsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7IC8vIElEIG9mIHRpY2tldCwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFRpY2tldFxuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICA9IHN0YWZmOyAgLy8gSUQgb2Ygc3RhZmYsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFN0YXR1cy5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi9EeW5hbWljUGFnZVwiO1xuXG4vKipcbiAqIEFQSVxuICpcbiAqIE9yaWdpbmFsbHkgdXNlZCB0byByZXRyaWV2ZSBhbmQgaGFuZGxlIGRhdGEgZnJvbVxuICogQVBJIGVuZHBvaW50cywgYnV0IG1vZGlmaWVkIHRvIGhvbGQgbG9jYWwgZGF0YVxuICogaW4gdGhlIGNvbnN0cnVjdG9yIHNldCBieSBXb3JkUHJlc3MncyBUd2lnXG4gKiAoZG9uZSB0byByZXVzZSBwcmV2aW91cyBjb21wb25lbnRzIHRvIHNhdmUgdGltZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGNhbGxzID0gW10sXG5cdFx0c3RhdHVzZXMgPSBbXSxcblx0XHR0aWNrZXRzID0gW10sXG5cdFx0dGlja2V0X3N0YXR1c2VzOiB0aWNrZXRTdGF0dXNlcyA9IFtdLFxuXHRcdGNvbW1lbnRzID0gW10sXG5cdFx0c3RhZmYgPSBbXSxcblx0XHRkZXZpY2VzID0gW10sXG5cdFx0cHJvZ3JhbXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IGV4cGVydGlzZVR5cGVzID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmY6IGV4cGVydGlzZVR5cGVTdGFmZiA9IFtdLFxuXHRcdGRlcGFydG1lbnRzID0gW11cblx0fSkge1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgID0gY2FsbHM7XG5cdFx0dGhpcy5zdGF0dXNlcyAgICAgICAgICAgPSBzdGF0dXNlcztcblx0XHR0aGlzLnRpY2tldHMgICAgICAgICAgICA9IHRpY2tldHM7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyAgICAgPSB0aWNrZXRTdGF0dXNlcztcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICA9IGNvbW1lbnRzO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgICAgID0gc3RhZmY7XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgPSBkZXZpY2VzO1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgID0gcHJvZ3JhbXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBleHBlcnRpc2VUeXBlcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmRlcGFydG1lbnRzICAgICAgICA9IGRlcGFydG1lbnRzO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0FQSS5qcyIsIi8qKlxuICogSlMgc3BlY2lmaWMgdG8gSGFyZHdhcmUgcGFnZSwgdXNlZCB0byBoYW5kbGUgZnJvbnQgZW5kIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gKiBldmVudCBoYW5kbGVycyBmb3IgYnV0dG9ucyAsIFxuICovXG5cbmltcG9ydCBNYWtlSXRBbGwgZnJvbSBcIi4uLy4uL21haW5cIjtcbmltcG9ydCBIYXJkd2FyZVBhZ2UgZnJvbSBcIi4vSGFyZHdhcmVQYWdlXCI7XG5pbXBvcnQgQVBJIGZyb20gXCIuLi9BUElcIjtcblxubGV0IGhhcmR3YXJlUGFnZSwgYXBpO1xuXG53aW5kb3cuaW5pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0YXBpID0gd2luZG93LmFwaSA9IG5ldyBBUEkoZGF0YSk7XG5cblx0aGFyZHdhcmVQYWdlID0gd2luZG93LmhhcmR3YXJlUGFnZSA9IG5ldyBIYXJkd2FyZVBhZ2UoKTtcblxuXHQvL0xvYWQgYWxsIGluaXRpYWwgVHlwZXMgb2YgZGV2aWNlXG5cdGhhcmR3YXJlUGFnZS5wb3B1bGF0ZVR5cGVzKCk7XG5cblx0Ly9IYW5kbGVyIGZvciBjbGlja2luZyBvbiBhIGRldmljZSB0eXBlXG5cdCQoXCIjdHlwZUxpc3RcIikub24oXCJjbGlja1wiLCBcInRyIHRkXCIsIGUgPT4ge1xuXHRcdCQoXCIjdHlwZUxpc3Q+dHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7IC8vUmVtb3ZlcyBhbnkgcHJldmlvdXNseSBoaWdobGlnaHQgdG8gYW55IGVsZW1lbnRcblx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdGhhcmR3YXJlUGFnZS50eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRoYXJkd2FyZVBhZ2UucG9wdWxhdGVNYWtlKCk7IC8vTG9hZHMgYWxsIE1ha2VzICd1bmRlcicgdGhlIHNlbGVjdGVkIHR5cGVcblx0fSk7XG5cblx0Ly9IYW5kbGVyIGZvciBjbGlja2luZyBvbiBhIGRldmljZSBtYWtlXG5cdCQoXCIjbWFrZUxpc3RcIikub24oXCJjbGlja1wiLCBcInRyIHRkXCIsIGUgPT4ge1xuXHRcdCQoXCIjbWFrZUxpc3Q+dHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7IC8vUmVtb3ZlcyBhbnkgcHJldmlvdXNseSBoaWdobGlnaHQgdG8gYW55IGVsZW1lbnRcblx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdGhhcmR3YXJlUGFnZS5tYWtlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFrZTtcblx0XHRoYXJkd2FyZVBhZ2Uuc2hvd0RldmljZXMoKTsgLy9Mb2FkcyBhbGwgZGV2aWNlcyBvZiB0aGUgc2VsZWN0ZWQgVHlwZSBhbmQgTWFrZVxuXHR9KTtcblxuXHQvL0hhbmRsZXIgZm9yIHNlbGVjdGluZyBhIHNwZWNpZmljIGRldmljZSBmcm9tIHRoZSBmaW5hbCBzZWxlY3Rpb24gdGFiXG5cdCQoaGFyZHdhcmVQYWdlLnRhYmxlU2VsZWN0b3IpLm9uKFwiY2xpY2tcIiwgXCJ0Ym9keSB0clwiLCBlID0+IHtcblx0XHR2YXIgaWQgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpOyAvL0dldHMgdGhlIElEIG9mIHRoZSBzZWxlY3RlZCByb3dcblx0XHRoYXJkd2FyZVBhZ2Uuc2hvd1RhYmxlUm93RGV0YWlscyhpZCk7IC8vT3BlbnMgdGhlIGZ1bGwgdmlldyBmb3IgdGhlIHNlbGVjdGVkIGRldmljZVxuXHR9KTtcblxuXHQvL0lmIGxvYWRpbmcgYSBzcGVjaWZpYyBkZXZpY2UgdmlhYSBVUkwgaGFzaFxuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdGhhc0xvY2F0aW9uSGFzaCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vSGlkZSBmdWxsIHZpZXcgcGFuZWwgYnkgZGVmYXVsdFxuXHRcdGhhcmR3YXJlUGFnZS5oaWRlVGFibGVSb3dEZXRhaWxzKCk7XG5cdH1cblxuXHQvL0hhbmRsZXMgZGlzcGxheWluZyB0aGUgcGFnZSBhcyBpZiB0aGUgcGFzc2VkIGRldmljZSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkXG5cdGZ1bmN0aW9uIGhhc0xvY2F0aW9uSGFzaCgpIHtcblx0XHR2YXIgaWQgPSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG5cdFx0aGFyZHdhcmVQYWdlLmRldmljZSA9IGhhcmR3YXJlUGFnZS5oYXJkd2FyZU1hbmFnZXIuZ2V0KGlkKTtcblx0XHRoYXJkd2FyZVBhZ2UudHlwZSA9IGhhcmR3YXJlUGFnZS5kZXZpY2UudHlwZTtcblx0XHRoYXJkd2FyZVBhZ2UubWFrZSA9IGhhcmR3YXJlUGFnZS5kZXZpY2UubWFrZTtcblx0XHRoYXJkd2FyZVBhZ2Uuc2hvd1RhYmxlUm93RGV0YWlscyhpZCk7IC8vT3BlbnMgdGhlIGZ1bGwgdmlldyBmb3IgdGhlIHNlbGVjdGVkIGRldmljZVxuXHRcdGhhcmR3YXJlUGFnZS5wb3B1bGF0ZU1ha2UoKTsgLy9Qb3B1bGF0aW5nIG1ha2VzXG5cdFx0aGFyZHdhcmVQYWdlLnNob3dEZXZpY2VzKCk7IC8vUG9wdWxhdGluZyBkZXZpY2UgbGlzdFxuXHRcdC8vIFNldCB0eXBlXG5cdFx0JChcIiN0eXBlTGlzdCB0ZFwiKS5maWx0ZXIoKGksIGVsKSA9PiBlbC5kYXRhc2V0LnR5cGUgPT09IGhhcmR3YXJlUGFnZS50eXBlKS5wYXJlbnQoKS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBTZXQgbWFrZVxuXHRcdCQoXCIjbWFrZUxpc3QgdGRcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5tYWtlID09PSBoYXJkd2FyZVBhZ2UubWFrZSkucGFyZW50KCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdH1cblxuXHQvL0hhbmRsZXIgZm9yIGNsaWNraW5nIFRpY2tldCBhbmQgU29mdHdhcmUgaHlwZXJsaW5rcyBpbiBmdWxsIHZpZXdcblx0JChcIiN0aWNrZXRzXCIpLm9uKFwiY2xpY2tcIiwgXCJsaVtkYXRhLXJvd2lkXVwiLCBlID0+IHtcblx0XHRUdXJib2xpbmtzLnZpc2l0KFwidGlja2V0cyNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cdCQoXCIjc29mdHdhcmVcIikub24oXCJjbGlja1wiLCBcImxpW2RhdGEtcm93aWRdXCIsIGUgPT4ge1xuXHRcdFR1cmJvbGlua3MudmlzaXQoXCJzb2Z0d2FyZSNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hhcmR3YXJlL2hhcmR3YXJlLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBIYXJkd2FyZVBhZ2VcbiAqXG4gKiBNYW5pcHVsYXRlcyB0aGUgaGFyZHdhcmUgcGFnZSAvdyBKUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB0aGUgSGFyZHdhcmVNYW5hZ2VyLiBNZXRob2RzIG1vc3RseSBnZXQgY2FsbGVkIGZyb20gaGFyZHdhcmUuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZHdhcmVQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IG51bGw7XG5cdFx0dGhpcy5tYWtlID0gbnVsbDtcblx0XHR0aGlzLmRldmljZSA9IG51bGw7XG5cdFx0Ly9NYW5hZ2Vyc1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblx0XHR0aGlzLmhhcmR3YXJlTWFuYWdlciA9IG5ldyBIYXJkd2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLnNvZnR3YXJlTWFuYWdlciA9IG5ldyBTb2Z0d2FyZU1hbmFnZXIoKTtcblx0fVxuXHRcblx0Ly9IYW5kbGVzIGFkZGluZyBhbGwgdW5pcXVlIGRldmljZSB0eXBlcyB0byB0aGUgVHlwZXMgY29sdW1uXG5cdHBvcHVsYXRlVHlwZXMoKSB7XG5cdFx0dmFyIHR5cGVMaXN0ID0gJCgnI3R5cGVMaXN0Jyk7XG5cdFx0dHlwZUxpc3QuZW1wdHkoKTtcblxuXHRcdHZhciB1bmlxdWVUeXBlcyA9IHRoaXMuaGFyZHdhcmVNYW5hZ2VyLnVuaXF1ZVR5cGVzKCk7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiB1bmlxdWVUeXBlcykge1xuXHRcdFx0dmFyIHJvdyA9IFwiPHRyPjx0ZCBkYXRhLXR5cGU9J1wiICsgdHlwZSArIFwiJz5cIiArIHR5cGUgKyBcIjwvdGQ+PC90cj5cIjtcblx0XHRcdHR5cGVMaXN0LmFwcGVuZChyb3cpO1xuXHRcdH1cblx0fVxuXG5cdC8vSGFuZGxlcyBhZGRpbmcgYWxsIHVuaXF1ZSBkZXZpY2UgbWFrZXMgdW5kZXIgdGhlIHNlbGVjdGVkIFR5cGUgdG8gdGhlIE1ha2UgY29sdW1uXG5cdHBvcHVsYXRlTWFrZSgpIHtcblx0XHR2YXIgbWFrZUxpc3QgPSAkKCcjbWFrZUxpc3QnKTtcblx0XHRtYWtlTGlzdC5lbXB0eSgpO1xuXHRcdHRoaXMuY2xlYXJUYWJsZSgpO1xuXG5cdFx0bGV0IHVuaXF1ZU1ha2UgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci51bmlxdWVNYWtlc09mVHlwZSh0aGlzLnR5cGUpO1xuXHRcdGZvciAobGV0IG1ha2Ugb2YgdW5pcXVlTWFrZSkge1xuXHRcdFx0aWYgKHRoaXMubWFrZSA9PSBtYWtlKSB7XG5cblx0XHRcdH1cblx0XHRcdHZhciByb3cgPSBcIjx0ciBcIiArICh0aGlzLm1ha2UgPT0gbWFrZT9cImNsYXNzPSdoaWdobGlnaHQnXCI6IFwiXCIpICsgXCI+PHRkIGRhdGEtbWFrZT0nXCIgKyBtYWtlICsgXCInPlwiICsgbWFrZSArIFwiPC90ZD48L3RyPlwiO1xuXHRcdFx0bWFrZUxpc3QuYXBwZW5kKHJvdyk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvL0hhbmRsZXMgYWRkaW5nIGFsbCBkZXZpY2VzIG9mIHRoZSBzZWxlY3RlZCBtYWtlIGFuZCB0eXBlIHRvIHRoZSB0YWJsZVxuXHRzaG93RGV2aWNlcygpIHtcblx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblx0XHR2YXIgbWFrZSA9IHRoaXMubWFrZTtcblx0XHR0aGlzLmNsZWFyVGFibGUoKTtcblxuXHRcdHZhciByZXN1bHRzID0gdGhpcy5oYXJkd2FyZU1hbmFnZXIuZ2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKTtcblx0XHRmb3IgKGxldCBkZXZpY2Ugb2YgcmVzdWx0cykge1xuXHRcdFx0dGhpcy5hcHBlbmRUYWJsZVJvdyhkZXZpY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8vSGFuZGxlcyBvcGVuaW5nIHRoZSBmdWxsIHZpZXcgb2YgdGhlIHNlbGVjdGVkIGRldmljZSwgaW5jbHVkaW5nIHBvcHVsYXRpbmcgcmVsYXRlZFxuXHQvL3RpY2tldHMgYW5kIHNvZnR3YXJlLlxuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkKSB7XG5cdFx0dGhpcy5kZXZpY2UgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci5nZXQoaWQpO1xuXHRcdGlmICghdGhpcy5kZXZpY2UpIHtcblx0XHRcdHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHRcdFx0YWxlcnQoXCJObyBoYXJkd2FyZSB3aXRoIElEIFwiICsgaWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzdXBlci5zaG93VGFibGVSb3dEZXRhaWxzKGlkKTtcblx0XHQkKFwiI3RpY2tldHNcIikuaHRtbChcIlwiKTtcblx0XHQkKFwiI3NvZnR3YXJlXCIpLmh0bWwoXCJcIik7XG5cdFx0dmFyIHByb2dyYW1zID0gW107XG5cdFx0dmFyIHRpY2tldHMgPSB0aGlzLmRldmljZS50aWNrZXRzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgc3RhdHVzQ2xhc3MgPSBcInBlbmRpbmdcIjtcblx0XHRcdHZhciB0aWNrZXQgPSB0aWNrZXRzW2ldO1xuXHRcdFx0dmFyIHN0YXR1cyA9IHRpY2tldC5zdGF0dXM7XG5cdFx0XHR2YXIgc3RhdHVzVGV4dCA9IHN0YXR1cy5uYW1lO1xuXHRcdFx0XG5cdFx0XHRzd2l0Y2ggKHN0YXR1c1RleHQpIHsgXG5cdFx0XHRcdGNhc2UgXCJOZXdcIjpcblx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9IFwibmV3XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJQZW5kaW5nIC0gSW4gUHJvZ3Jlc3NcIjpcblx0XHRcdFx0XHRzdGF0dXNDbGFzcyA9IFwicGVuZGluZ1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiUGVuZGluZyAtIEF3YWl0aW5nIFN0YWZmXCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcInBlbmRpbmdcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIlJlc29sdmVkXCI6XG5cdFx0XHRcdFx0c3RhdHVzQ2xhc3MgPSBcInJlc29sdmVkXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHQvL0Rpc3BsYXlpbmcgdGlja2V0c1xuXHRcdFx0JChcIiN0aWNrZXRzXCIpLmFwcGVuZChgXG5cdFx0XHRcdDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIgZGF0YS1yb3dpZD1cImAgKyB0aWNrZXQuaWQgKyBgXCI+XG5cdFx0XHRcdFx0I2ArIHRpY2tldC5pZCArYDogYCArIHRpY2tldC50aXRsZSArIGBcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZpbHRlciBmaWx0ZXItYCArIHN0YXR1c0NsYXNzICsgYFwiPmAgKyBzdGF0dXNUZXh0ICsgYDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInB1bGwtcmlnaHQgdGV4dC1tdXRlZFwiPmAgKyB0aWNrZXQuY3JlYXRlZF9hdCArIGA8L3NwYW4+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRgKTtcblxuXHRcdFx0aWYgKHByb2dyYW1zLmxlbmd0aCA8IDIwKSB7IC8vTGltaXRpbmcgcHJvZ3JhbSBsaXN0IHNpemUgdG8gMjBcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aWNrZXQucHJvZ3JhbXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMuc29mdHdhcmVNYW5hZ2VyLmdldCh0aWNrZXQuX3Byb2dyYW1zW2pdKTtcblx0XHRcdFx0XHRpZiAocHJvZ3JhbXMuaW5kZXhPZihwcm9ncmFtKSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0cHJvZ3JhbXMucHVzaChwcm9ncmFtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9EaXNwbGF5aW5nIHNvZnR3YXJlXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBwcm9ncmFtcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0JChcIiNzb2Z0d2FyZVwiKS5hcHBlbmQoYFxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiIGRhdGEtcm93aWQ9XCJgICsgcHJvZ3JhbXNba10uaWQgKyBgXCI+XG5cdFx0XHRcdFx0YCArIHByb2dyYW1zW2tdLmdldFNvZnR3YXJlVHlwZSgpICsgYCAvIGAgKyBwcm9ncmFtc1trXS5uYW1lICsgIGBcblx0XHRcdFx0PC9saT5cblx0XHRcdGApO1xuXHRcdH1cdFxuXHRcdFxuXHRcdCQoXCIjdGlja2V0LXRvdGFsXCIpLmh0bWwoXCJUb3RhbDogXCIgKyB0aWNrZXRzLmxlbmd0aCk7XG5cdFx0JChcIiNzb2Z0d2FyZS10b3RhbFwiKS5odG1sKFwiVG90YWw6IFwiICsgcHJvZ3JhbXMubGVuZ3RoKTtcblxuXHRcdC8vVXBkYXRpbmcgdGl0bGVcblx0XHR0aGlzLnVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIodGhpcy5kZXZpY2UudHlwZSArIFwiIC8gXCIgKyB0aGlzLmRldmljZS5tYWtlICsgXCIgLyBcIiArIHRoaXMuZGV2aWNlLnNlcmlhbF9ubyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVQYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==