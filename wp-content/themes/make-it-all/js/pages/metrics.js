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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _MetricsPage = __webpack_require__(51);

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
/* 51 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0R5bmFtaWNQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N0YWZmL0VtcGxveWVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc29mdHdhcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvQVBJLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWV0cmljcy9tZXRyaWNzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWV0cmljcy9NZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJUaWNrZXRNYW5hZ2VyIiwiZXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJ3aW5kb3ciLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsImNhbGxzIiwiYXBpIiwibWFwIiwiQ2FsbCIsImUiLCJ0aWNrZXRzIiwiVGlja2V0IiwiY29tbWVudHMiLCJDb21tZW50Iiwic3RhdHVzZXMiLCJTdGF0dXMiLCJ0aWNrZXRTdGF0dXNlcyIsIlRpY2tldFN0YXR1cyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIk1hbmFnZXIiLCJTdGFmZk1hbmFnZXIiLCJFbXBsb3llZSIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlIiwiRXhwZXJ0aXNlVHlwZVN0YWZmIiwiX3BhcmVudCIsImV4cGVydGlzZVR5cGVJZHMiLCJfZXhwZXJ0aXNlX3R5cGUiLCJleHBlcnRpc2VUeXBlUGFyZW50IiwicGFyZW50IiwiZXhwZXJ0aXNlVHlwZVN0YWZmSWQiLCJlbGVtZW50cyIsInRvTG93ZXJDYXNlIiwic29tZSIsIlN0cmluZyIsImVsIiwicHJvcCIsImluY2x1ZGVzIiwiRHluYW1pY1BhZ2UiLCJzZWN0aW9uU2VsZWN0b3IiLCJ0YWJsZVNlbGVjdG9yIiwibmF2U2VsZWN0b3IiLCJkZXRhaWxTZWxlY3RvciIsInNwbGl0IiwiaHRtbCIsIiQiLCJuYXZUZXh0IiwiJHRhYmxlIiwicmVzdWx0c0NvdW50IiwiaGFzQ2xhc3MiLCIkc3BsYXNoU2NyZWVuIiwiJHNob3ciLCIkaGlkZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaXJzdCIsInRleHQiLCJyZXBsYWNlIiwiY2xvc2VzdCIsInVuZGVmaW5lZCIsIm9iamVjdCIsIiR0YWJsZVNlY3Rpb24iLCIkdGFibGVIZWFkIiwiJHRhYmxlQm9keSIsIiRuZXdSb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImRhdGFzZXQiLCJyb3dpZCIsInRvZ2dsZUNsYXNzIiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJlYWNoIiwidGQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJyZXNvbHZlIiwiYXBwZW5kIiwiZW1wdHkiLCJzaWJsaW5ncyIsInVud3JhcCIsImNsaWNrIiwiaGlkZVRhYmxlUm93RGV0YWlscyIsIndyYXAiLCIkc2VsZWN0IiwiZGVmYXVsdFRleHQiLCJkZWZhdWx0T3B0aW9uSWQiLCJwcm9wZXJ0eSIsImdldEFkZGl0aW9uYWxEZXRhaWxzIiwib3B0aW9uIiwiT3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RwaWNrZXIiLCJvYmplY3RDYWxsYmFjayIsInNlYXJjaEtleXMiLCJwYWdlIiwiY2xlYXJUYWJsZSIsImtleSIsIlJlZ0V4cCIsInZhbCIsImFwcGVuZFRhYmxlUm93IiwidXBkYXRlU3BsYXNoU2NyZWVuIiwibWVzc2FnZSIsInR5cGUiLCJkdXJhdGlvbiIsInJlbW92ZSIsIm1zZyIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJIYXJkd2FyZU1hbmFnZXIiLCJkZXZpY2VzIiwiRGV2aWNlIiwiU2V0IiwidCIsImRldmljZXNCeVR5cGUiLCJkZXZpY2UiLCJtYWtlIiwic2VyaWFsTnVtYmVyIiwiZCIsInNlcmlhbF9ubyIsIlNvZnR3YXJlTWFuYWdlciIsInByb2dyYW1zIiwiUHJvZ3JhbSIsInByb2dyYW0iLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJ0b29sdGlwIiwiZGF0ZXRpbWVwaWNrZXIiLCJuZXdWYWx1ZSIsIiRtb2RhbCIsIm1vZGFsIiwiYXR0ciIsIm5vdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29sbGFwc2UiLCJpc1Nob3ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRJdGVtVG9QaWNrZXIiLCJwaWNrZXJFbGVtZW50IiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0IiwiYXV0aG9yIiwiYXV0aG9yX2lkIiwiY2FsbF9pZCIsInRpY2tldF9pZCIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0X2h1bWFuIiwiY3JlYXRlZEF0UmVhbCIsImNyZWF0ZWRfYXQiLCJjcmVhdGVkX2F0X3JlYWwiLCJfYXV0aG9yIiwiZ2V0Q2FsbCIsImdldFRpY2tldCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsImVtYWlsIiwiam9iIiwiam9iX3RpdGxlIiwiZGVwYXJ0bWVudCIsInBob25lIiwicGhvbmVfbnVtYmVyIiwiZXhwZXJ0aXNlX3R5cGVzIiwic3BlY2lhbGlzbXMiLCJzcGVjaWFsaXN0IiwiYW5hbHlzdCIsImFkbWluIiwiX2RlcGFydG1lbnQiLCJyZWFkIiwicmVhZG9ubHkiLCJnZXRFeHBlcnRpc2VUeXBlcyIsImRhdGEiLCJkZXBhcnRtZW50X2lkIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsImdldFRpY2tldHNXaXRoU2x1ZyIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJvcGVyYXRpbmdfc3lzdGVtIiwiZXhwaXJ5X2RhdGUiLCJzdGF0dXNfaWQiLCJBUEkiLCJ0aWNrZXRfc3RhdHVzZXMiLCJtZXRyaWNzUGFnZSIsImluaXQiLCJNZXRyaWNzUGFnZSIsIm5vbmVSZXN1bHRzVGV4dCIsImNoYW5nZSIsInN0YWZmRHJvcGRvd25DaGFuZ2UiLCJocmVmIiwidG9TdHJpbmciLCJ0aWNrZXRNYW5hZ2VyIiwic29mdHdhcmVNYW5hZ2VyIiwiaGFyZHdhcmVNYW5hZ2VyIiwibG9nZ2VkSW5Vc2VyIiwicGFnZUxvYWQiLCJpc0FuYWx5c3QiLCJwb3B1bGF0ZVN0YWZmTmFtZVNlYXJjaCIsInNob3dTdGF0cyIsIm9wZW5TdGFmZkluZm8iLCJzaG93aW5nR2xvYmFsSW5mbyIsIm5vT2ZTb2Z0d2FyZSIsIm5vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXMiLCJwIiwibm9PZkhhcmR3YXJlIiwibm9PZkhhcmR3YXJlV2l0aElzc3VlcyIsInNvbHZlZFRpY2tldHMiLCJ0b3RhbFRpbWUiLCJ0b3RhbFJlcGxpZXMiLCJ0aWNrZXRTdGF0dXNIaXN0b3J5IiwiZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkIiwicmVzb2x2ZWRUaWNrZXRTdGF0dXMiLCJ0aWNrZXRDcmVhdGVkIiwibGFzdFJlc29sdmVkIiwidGlja2V0UmVzb2x2ZWQiLCJ0aW1lRGlmZiIsImFicyIsImdldFRpbWUiLCJkaWZmRGF5cyIsImNlaWwiLCJjcmVhdGVMaW5lR3JhcGgiLCJjcmVhdGVQaWVDaGFydCIsImNzcyIsInN0YWZmTWVtYmVycyIsImluZGV4Iiwic2VsZWN0ZWRJbmRleCIsIk51bWJlciIsIm5vdyIsIm1vbnRoTmFtZXMiLCJtb250aHMiLCJjdXJyZW50TW9udGgiLCJyZXZlcnNlIiwidGlja2V0c09wZW5lZCIsInRpY2tldHNVbnJlc29sdmVkIiwiaiIsIm9wZW5lZCIsInVucmVzb2x2ZWQiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJvcFN0YXRDaGFydCIsIkNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwicm9vdFByb2JsZW1UeXBlcyIsImdldFJvb3RFeHBlcnRpc2VUeXBlcyIsIlByb2JsZW1UeXBlTmFtZXMiLCJ0aWNrZXRzUGVyUHJvYmxlbVR5cGUiLCJ0aWNrZXRDb3VudCIsInByb2JUeXBlQ2hhaW4iLCJnZXRFeHBlcnRpc2VUeXBlQ2hhaW4iLCJyb290UHJvYmxlbVR5cGUiLCJwcm9iVHlwZUNoYXJ0IiwibGVnZW5kIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEtBQUUsb0JBQUYsRUFBd0JELElBQXhCLENBQTZCLDBDQUE3QjtBQUNBLE9BQUkwUCxNQUFNck8sU0FBU3NPLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDQyxVQUE3QyxDQUF3RCxJQUF4RCxDQUFWO0FBQ0EsT0FBSXVCLGdCQUFnQixJQUFJckIsS0FBSixDQUFVSixHQUFWLEVBQWU7QUFDbEM1TCxVQUFNLFVBRDRCO0FBRWxDdUYsVUFBTTtBQUNMMkcsZUFBVSxDQUFDO0FBQ1YzRyxZQUFNeUgscUJBREksRUFDbUI7QUFDN0JYLHVCQUFpQixDQUNoQixtQkFEZ0IsRUFFaEIsbUJBRmdCLEVBR2hCLG1CQUhnQixFQUloQixvQkFKZ0IsRUFLaEIsb0JBTGdCLEVBTWhCLG9CQU5nQixFQU9oQixvQkFQZ0IsRUFRaEIscUJBUmdCO0FBRlAsTUFBRCxDQURMO0FBY0xKLGFBQVFjLGdCQWRILENBY29CO0FBZHBCLEtBRjRCO0FBa0JsQ1QsYUFBUztBQUNSZ0IsYUFBUTtBQUNQQyxnQkFBUztBQURGO0FBREE7QUFsQnlCLElBQWYsQ0FBcEI7QUF3QkE7Ozs7RUFwUHVDM1IscUI7O2tCQUFwQjRNLFciLCJmaWxlIjoiL2pzL3BhZ2VzL21ldHJpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDJhOTZjNjQ2MmM1NWUwNGEyMjQiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IENhbGwgZnJvbSBcIi4vQ2FsbFwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vQ29tbWVudFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9TdGF0dXNcIjtcbmltcG9ydCBUaWNrZXQgZnJvbSBcIi4vVGlja2V0XCI7XG5pbXBvcnQgVGlja2V0U3RhdHVzIGZyb20gXCIuL1RpY2tldFN0YXR1c1wiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0TWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGF0dXNlc1xuICogYW5kIHRpY2tldHMgYW5kIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGNsYXNzZXMuIFxuICogQ29udGFpbnMgYWxsIGZ1bmN0aW9ucyB0byByZXR1cm4gYW5kIHNlYXJjaCB0aGUgZGF0YS5cbiAqXG4gKiBUaWNrZXRNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0TWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IHdpbmRvdy5leHBlcnRpc2VUeXBlTWFuYWdlciB8fCBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY2FsbHMgICAgPSBhcGkuY2FsbHMubWFwKGUgPT4gbmV3IENhbGwoZSkpO1xuXHRcdHRoaXMudGlja2V0cyAgPSBhcGkudGlja2V0cy5tYXAoZSA9PiBuZXcgVGlja2V0KGUpKTtcblx0XHR0aGlzLmNvbW1lbnRzID0gYXBpLmNvbW1lbnRzLm1hcChlID0+IG5ldyBDb21tZW50KGUpKTtcblx0XHR0aGlzLnN0YXR1c2VzID0gYXBpLnN0YXR1c2VzLm1hcChlID0+IG5ldyBTdGF0dXMoZSkpO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgPSBhcGkudGlja2V0U3RhdHVzZXMubWFwKGUgPT4gbmV3IFRpY2tldFN0YXR1cyhlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDYWxsfSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ2FsbCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maW5kKGNhbGwgPT4gY2FsbC5pZCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbHMgcmVmZXJlbmNpbmcgYSBzcGVjaWZpYyB0aWNrZXRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDYWxsc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxscy5maWx0ZXIoY2FsbCA9PiBjYWxsLl90aWNrZXRzLmluZGV4T2YodGlja2V0SWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbm90ZXMgZm9yIGEgY2FsbFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGxOb3Rlc0J5Q2FsbElkKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50Ll9jYWxsID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBJRFxuXHQgKi9cblx0Z2V0U3RhdHVzKHN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLmlkID09PSBzdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBzbHVnXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggc3RhdHVzU2x1Z1xuXHQgKi9cblx0Z2V0U3RhdHVzQnlTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1ZykgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldH0gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldCB3aXRoIHRpY2tldElkXG5cdCAqL1xuXHRnZXRUaWNrZXQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbmQodGlja2V0ID0+IHRpY2tldC5pZCA9PT0gdGlja2V0SWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXRJZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMuc2x1ZyA9PT0gc3RhdHVzU2x1Zyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gc3RhdHVzZXNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gc3RhdHVzU2x1Z3MgQXJyYXkgb2YgU3RyaW5ncydzIHJlcHJlc2VudGluZyBzdGF0dXMgc2x1Z3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gb25lIG9mIG1hbnkgZ2l2ZW4gU3RhdHVzJ3Ncblx0ICovXG5cdGdldFRpY2tldHNXaXRoU2x1Z0luKHN0YXR1c1NsdWdzKSB7XG5cdFx0bGV0IHRpY2tldHMgPSB0aGlzLnRpY2tldHMuc2xpY2UoMCk7XG5cblx0XHRmb3IgKGxldCBpID0gdGlja2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKHN0YXR1c1NsdWdzLmluZGV4T2YodGlja2V0c1tpXS5zdGF0dXMuc2x1ZykgPT09IC0xKSB0aWNrZXRzLnNwbGljZShpLCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGlja2V0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0cyByZWZlcmVuY2VkIGluIGEgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgcmVmZXJlbmNlZCBpbiBhIENhbGxcblx0ICovXG5cdGdldFRpY2tldHNGcm9tQ2FsbChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0Ll9jYWxscy5pbmRleE9mKGNhbGxJZCkgPiAtMSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQoc3RhZmZJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWQgfHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWRcblx0XHR9KTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoc3RhZmZJZHMpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmYsXG5cdFx0XHR0aWNrZXRzICAgICAgICAgICAgPSB0aGlzLnRpY2tldHMsXG5cdFx0XHRyZXN1bHQgICAgICAgICAgICAgPSB7fTtcblxuXHRcdHN0YWZmSWRzLmZvckVhY2goc3RhZmZJZCA9PiB7XG5cdFx0XHRyZXN1bHRbc3RhZmZJZF0gPSB0aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZFxuXHRcdFx0XHRcdFx0fHwgZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZSA9PiBlLmlkID09PSB0aWNrZXQuX2V4cGVydGlzZV90eXBlX3N0YWZmKS5fc3RhZmYgPT09IHN0YWZmSWQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRNeVRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3BlcmF0b3Igb3Igc3BlY2lhbGlzdCB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvLlxuXHQgKlxuXHQgKiBJZiBhbiBvcGVyYXRvciBpcyBub3QgYXNzaWduZWQsIHRoZW4gdGhlIEV4cGVydGlzZVR5cGVTdGFmZiB3aWxsXG5cdCAqIGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7RW1wbG95ZWV9IEVtcGxveWVlIHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSB7XG5cdFx0aWYgKHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgIT09IG51bGwpIHJldHVybiB0aWNrZXQuYXNzaWduZWRfdG9fb3BlcmF0b3I7XG5cblx0XHRyZXR1cm4gdGlja2V0LmV4cGVydGlzZV90eXBlX3N0YWZmLnN0YWZmOyAvLyBvbmx5IHVzZSBleHBlcnRpc2VfdHlwZV9zdGFmZiBpZiB0aGVyZSBpcyBubyBhc3NpZ25lZCBvcGVyYXRvclxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRpY2tldCBpcyBhc3NpZ25lZCB0byB0aGUgY3VycmVudGx5IGxvZ2dlZCBpblxuXHQgKiB1c2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IElmIGFzc2lnbmVkIHRvIHNlbGZcblx0ICovXG5cdGlzVGlja2V0QXNzaWduZWRUb1NlbGYodGlja2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpID09PSB0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpOyBcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXMgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRTdGF0dXNJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldF9zdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0U3RhdHVzIHdpdGggdGlja2V0U3RhdHVzSWRcblx0ICovXG5cdGdldFRpY2tldFN0YXR1cyh0aWNrZXRTdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbmQodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5pZCA9PT0gdGlja2V0U3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzZXMgZm9yIGEgdGlja2V0XG5cdCAqXG5cdCAqIEBwXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0SWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maWx0ZXIodGlja2V0U3RhdHVzID0+IHRpY2tldFN0YXR1cy5fdGlja2V0ID09PSB0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjb21tZW50IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY29tbWVudElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY29tbWVudCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNvbW1lbnRJZFxuXHQgKi9cblx0Z2V0Q29tbWVudChjb21tZW50SWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gY29tbWVudElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvbW1lbnRzXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gY29udGFpbmluZyBBcnJheSBvZiBDb21tZW50IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q29tbWVudHNCeUlkcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBpZHMuaW5kZXhPZihjb21tZW50LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHRpY2tldHMgYXNzb2NpYXRlZCB3aXRoIGFuIGV4cGVydGlzZSB0eXBlIHN0YWZmXG5cdCAqXG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlU3RhZmZJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHN0YWZmIHRvIGZpbmQgdGlja2V0cyBmb3Jcblx0ICogQHJldHVybnMge0FycmF5fSBBbGwgbWF0Y2hpbmcgdGlja2V0c1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSxcblx0XHRcdHRpY2tldElkcyAgICAgID0gW10uY29uY2F0KC4uLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IGUudGlja2V0cykpOyAvLyBtb3ZlIGFsbCBvZiBleHBlcnRpc2VUeXBlc1tpXS50aWNrZXRzIGludG8gYSBzaW5nbGUgYXJyYXlcblxuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCB0aWNrZXRzIG9uIGEgcHJvcGVydHkgZm9yIGEgcHJvdmlkZWQgc2VhcmNoIHF1ZXJ5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHtBcnJheX0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBzYXRpc2Z5aW5nIHRoZSBzZWFyY2ggY29uZGl0aW9uXG5cdCAqL1xuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMudGlja2V0cywgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb2xsZWN0aW9uIG9mIHRpY2tldHMgYnkgdGhlaXIgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGlkcyBUaGUgSURzIG9mIHRoZSByZXF1ZXN0ZWQgdGlja2V0cyBcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldFRpY2tldHNCeVRpY2tldElEcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gaWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL0VtcGxveWVlXCI7XG5cbi8qKlxuICogU3RhZmZNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YWZmXG4gKiBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogU3RhZmZNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YWZmICAgICAgID0gYXBpLnN0YWZmLm1hcChlID0+IG5ldyBFbXBsb3llZShlKSk7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyA9IGFwaS5kZXBhcnRtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGVtcGxveWVlIHdpdGggdGhlIGdpdmVuIElEIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgZW1wbG95ZWUgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtFbXBsb3llZX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbmQoZW1wbG95ZWUgPT4gZW1wbG95ZWUuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZW1wbG95ZWVzIHdpdGggYSBzcGVjaWZpYyB2YWx1ZSBvZiBhIHBlcm1pc3Npb25cblx0ICpcblx0ICogQHBhcmFtIHBlcm1pc3Npb24gVGhlIHBlcm1pc3Npb24gdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwZXJtaXNzaW9uICh0cnVlL2ZhbHNlKSBmb3Igd2hldGhlciB0aGUgcGVybWlzc2lvbiBpcyBncmFudGVkXG5cdCAqL1xuXHRnZXRFbXBsb3llZXNXaXRoUGVybWlzc2lvbihwZXJtaXNzaW9uLCB2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0gPT0gdmFsdWUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICpcblx0ICogQHBhcmFtIGFzRW1wbG95ZWUgbWV0aG9kIHJldHVybnMgSUQgYnkgZGVmYXVsdCBvciBFbXBsb3llZSBpZiB0cnV0aHlcblx0ICovXG5cdGN1cnJlbnRVc2VyKGFzRW1wbG95ZWUgPSBmYWxzZSkge1xuXHRcdGxldCBpZCA9IDE7IC8vIFRPRE86IGdldCB1c2VyIGZyb20gV1BcblxuXHRcdC8vIEdldCBFbXBsb3llZSB3aXRoIElEXG5cdFx0aWYgKGFzRW1wbG95ZWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChpZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc3BlY2lhbGlzdHMgd2hvIHNwZWNpYWxpc2UgaW4gYSBjZXJ0YWluIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gZmluZCBlbXBsb3llZXMgZm9yXG5cdCAqL1xuXHRnZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0bGV0IHN0YWZmICA9IHRoaXMuc3RhZmYsXG5cdFx0ICAgIGZpbHRlciA9IGlkID0+IGVtcGxveWVlID0+IGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGlkKSA+IC0xO1xuXG5cdFx0aWYgKHR5cGVvZiBleHBlcnRpc2VUeXBlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRsZXQgb3V0cHV0ID0gW107XG5cblx0XHRcdGZvciAobGV0IGlkIG9mIGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RhZmYuZmlsdGVyKGZpbHRlcihpZCkpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0YWZmLmZpbHRlcihmaWx0ZXIoZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIGVtcGxveWVlIGhhcyB0aGUgcGFzc2VkIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGluc3BlY3Rcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGxvb2sgZm9yXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBlbXBsb3llZSBoYXMgdGhlIHByb2JsZW0gdHlwZSBhcyBhIHNwZWNpYWxpc21cblx0ICovXG5cdGhhc1NwZWNpYWxpc20oZW1wbG95ZWUsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihleHBlcnRpc2VUeXBlSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGFsbCBlbXBsb3llZXMgZm9yIHRoZSBnaXZlbiBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm5zIEFsbCBtYXRjaGluZyByZXN1bHRzIHRvIHRoZSBxdWVyeVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnN0YWZmLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlIGZyb20gXCIuL0V4cGVydGlzZVR5cGVcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlU3RhZmYgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVN0YWZmXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZXhwZXJ0aXNlIHR5cGVzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gYXBpLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlKGUpKTtcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGFwaS5leHBlcnRpc2VUeXBlU3RhZmYubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGVTdGFmZihlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGFsbCBFeHBlcnRpc2VUeXBlJ3Mgd2l0aCBubyBwYXJlbnQgKGluIHRoZSBmaXJzdCBjb2x1bW4pXG5cdCAqXG5cdCAqIEByZXR1cm4ge0FycmF5fVxuXHQgKi9cblx0Z2V0Um9vdEV4cGVydGlzZVR5cGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuX3BhcmVudCA9PSBudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGV9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbmQoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLmlkID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBFeHBlcnRpc2VUeXBlcyB3aXRoIElEcyBmcm9tIGFuIEFycmF5IG9mIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBleHBlcnRpc2VUeXBlSWRzIEFycmF5IG9mIEludGVnZXJzIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkJ3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGVzIHNhdGlzZnlpbmcgdGhlIGNvbmRpdGlvblxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZUlkcykge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGVJZHMuaW5kZXhPZihleHBlcnRpc2VUeXBlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbHRlcihleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgb3JkZXJlZCBhcnJheSBvZiBwYXJlbnRzIG9mIGFuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGUgdG8gZmluZCBwYXJlbnRzIGZyb21cblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGUgcGFyZW50cywgYW5kIHRoZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZSxcblx0XHRcdGV4cGVydGlzZVR5cGVzICAgICAgPSBbZXhwZXJ0aXNlVHlwZVBhcmVudF07XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5wYXJlbnQ7XG5cblx0XHRcdGlmIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMucHVzaChleHBlcnRpc2VUeXBlUGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXhwZXJ0aXNlVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgd2l0aCBhbiBleGFjdFxuXHQgKiBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmIGFuZCBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlIElEIHBhaXJcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGVcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gbnVsbCwgb3IgdGhlIHJlY29yZCBkZXNpcmVkXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQoZXhwZXJ0aXNlVHlwZUlkLCBzdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgPT09IHN0YWZmSWQgJiYgZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgYnkgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlU3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuaWQgPT09IGV4cGVydGlzZVR5cGVTdGFmZklkKSB8fCBudWxsO1xuXHR9XG5cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLmV4cGVydGlzZVR5cGVzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlci5qcyIsIi8qKlxuICogTWFuYWdlclxuICpcbiAqIEFic3RyYWN0IGNsYXNzIGV4dGVuZGVkIGJ5IGFsbCBtYW5hZ2VycyxcbiAqIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBtYXkgYmUgdXNlZnVsIHRvIHRoZSBtYW5hZ2Vycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vXG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTZWFyY2ggYXJyYXkgb2YgZWxlbWVudHMgZm9yIHF1ZXJ5IGluIGdpdmVuIHByb3BlcnR5IG5hbWVzXG5cdCAqIFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBzZWFyY2hlZCB0aHJvdWdoXG5cdCAqIEBwYXJhbSBxdWVyeSBDYXNlIGluc2Vuc2l0aXZlIHN0cmluZyB0byBzZWFyY2ggZWxlbWVudHNcblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICovXG5cdHNlYXJjaChlbGVtZW50cyA9IFtdLCBxdWVyeSA9IFwiXCIsIHByb3BlcnRpZXMgPSBbXSkge1xuXHRcdHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTsgLy8gTm9ybWFsaXNlIHF1ZXJ5IChhbmQgcHJvcGVydGllcyBpbmRpdmlkdWFsbHkgbGF0ZXIpXG5cblx0XHRyZXR1cm4gZWxlbWVudHMuZmlsdGVyKGVsID0+IHsgLy8gR2V0IGFsbCBlbGVtZW50c1xuXHRcdFx0cmV0dXJuIHByb3BlcnRpZXMuc29tZShwcm9wID0+IHsgLy8gQ2hlY2sgcHJvcGVydGllcyB1bnRpbCBtYXRjaCBpcyBmb3VuZFxuXHRcdFx0XHRpZiAoU3RyaW5nKGVsW3Byb3BdKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgcmV0dXJuIHRydWU7IC8vIERldGVybWluZSBpZiBwcm9wZXJ0eSBpcyBhIG1hdGNoIGZvciBxdWVyeVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTWFuYWdlci5qcyIsIi8qKlxuICogRHluYW1pY1BhZ2VcbiAqXG4gKiBFeHRlbmRlZCBieSBldmVyeSBwYWdlLCBlLmcuIFRpY2tldFBhZ2UuXG4gKiBDb250YWlucyBmdW5jdGlvbnMgdGhhdCBhcmUgcmVwZWF0ZWQgb2Z0ZW4gYW1vbmdcbiAqIHBhZ2VzLCBzdWNoIGFzIHVwZGF0aW5nIHRhYmxlcyBvciB1cGRhdGluZyB0aGUgbmF2YmFyXG4gKi9cbmNsYXNzIER5bmFtaWNQYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIHBhZ2UgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yc1xuXHQgKiB0byBkZWZpbmUgdGhlIGJvdW5kcyBvZiB0aGUgcGFnZSwgaW4gY2FzZXMgd2hlcmUgdGhpcyBEeW5hbWljUGFnZVxuXHQgKiBpcyBub3QgdGhlIG9ubHkgcGFnZSBvbiB0aGUgc2NyZWVuLCBzdWNoIGFzIGlmIGEgcGFnZSBpcyBiZWluZ1xuXHQgKiBkaXNwbGF5ZWQgaW4gYSBtb2RhbC5cblx0ICpcblx0ICogTm90IHByb3ZpZGluZyBhbnkgc2VsZWN0b3JzIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGVcblx0ICogbWFpbiBzZWxlY3RvcnMgZm9yIHRoZSBlbnRpcmUgc2NyZWVuLCBzdWNoIHRoYXRcblx0ICogdGhpcyBwYWdlIGJlY29tZXMgdGhlIG1haW4gcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBzZWN0aW9uU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgbWFpbiBzZWN0aW9uIGNvbnRhaW5pbmcgdGFibGUgdmlld1xuXHQgKiBAcGFyYW0gdGFibGVTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRhYmxlIHdpdGhpbiBwcmV2aW91cyBzZWN0aW9uXG5cdCAqIEBwYXJhbSBuYXZTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIG5hdmlnYXRpb24gYmFyIHNob3duIGF0IHRvcCBvZiBzZWN0aW9uXG5cdCAqIEBwYXJhbSBkZXRhaWxTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHNpbmdsZSB2aWV3IGRldGFpbCBzaG93biBmb3IgYW4gaW5kaXZpZHVhbCByb3dcblx0ICovXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzZWN0aW9uU2VsZWN0b3IgPSBcIiNsaXN0LXZpZXdcIixcblx0XHR0YWJsZVNlbGVjdG9yID0gXCIjdGFibGUtc2VjdGlvblwiLFxuXHRcdG5hdlNlbGVjdG9yLFxuXHRcdGRldGFpbFNlbGVjdG9yXG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuc2VjdGlvblNlbGVjdG9yID0gc2VjdGlvblNlbGVjdG9yO1xuXHRcdHRoaXMudGFibGVTZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XG5cdFx0Ly8gU2V0IG5hdmlnYXRpb24gc2VsZWN0b3IgdG8gZmlyc3QgY29tcG9uZW50IG9mIHNlY3Rpb24gc2VsZWN0b3Igd2l0aCDigJgtbmF24oCZIGFwcGVuZGVkLCBvdGhlcndpc2UgZGVmYXVsdCBDU1Mgc2VsZWN0b3Jcblx0XHR0aGlzLm5hdlNlbGVjdG9yID0gbmF2U2VsZWN0b3IgPyBuYXZTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLW5hdlwiIDogXCIuc2lkZS1uYXYtYmFyLW5lc3RlZFwiKTtcblx0XHR0aGlzLmRldGFpbFNlbGVjdG9yID0gZGV0YWlsU2VsZWN0b3IgPyBkZXRhaWxTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLWRldGFpbFwiIDogXCIjc2luZ2xlLXZpZXdcIik7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aXRsZSBiYXIgb2YgdGhlIHNpbmdsZSB2aWV3IHRvIHRoZSBnaXZlbiBzdHJpbmdcblx0ICogQ0FVVElPTjogRG9lcyBub3QgcGVyZm9ybSBlc2NhcGluZyBvZiBpbnB1dCBzdHJpbmcsIGRvIG5vdCBwYXNzXG5cdCAqIHVzZXIgY29udGVudCB0byB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIGh0bWwgSFRNTCB0byBzZXQgdGhlIHNpbmdsZSB2aWV3IHRpdGxlIHRvXG5cdCAqL1xuXHR1cGRhdGVTaW5nbGVWaWV3TmF2YmFyKGh0bWwpIHtcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykuaHRtbChodG1sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgXCJMb2FkaW5n4oCmXCIgc3BsYXNoIHNjcmVlbiBpZiBpdCdzIHNob3duXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgXCJObyBSZXN1bHRz4oCmXCIgc3BsYXNoIHNjcmVlblxuXHQgKiBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuXHQgKlxuXHQgKiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciB1c2luZyBcImFwcGVuZFRhYmxlXCJcblx0ICovXG5cdHVwZGF0ZVNwbGFzaFNjcmVlbihuYXZUZXh0ID0gbnVsbCkge1xuXHRcdC8vIEdldCB0YWJsZSBlbGVtZW50IHRvIGluc3BlY3QgY29udGVudHNcblx0XHR2YXIgJHRhYmxlID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdFx0XHQvLyBHZXQgbnVtYmVyIG9mIHJlc3VsdHMgd2l0aGluIHRhYmxlIGN1cnJlbnRseSBiZWluZyBzaG93blxuXHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlIEhUTUxcblx0XHRcdFx0Ly8gc2luY2Ugc29tZSB0YWJsZSByb3dzIG1heSBiZSBoaWRkZW4sIHdoaWNoIG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gZGlzY291bnRlZCBmcm9tIHRoZSB0b3RhbCBjb3VudC5cblx0XHQgICAgcmVzdWx0c0NvdW50ID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRyJykuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmhhc0NsYXNzKFwicm93LWhpZGRlblwiKSkubGVuZ3RoLFxuXHRcdFx0XHQvLyBHZXQgc3BsYXNoIHNjcmVlbiBlbGVtZW50IHdoaWNoIG1heSBiZSBiZWluZyBzaG93biBpbnN0ZWFkIG9mIHRhYmxlXG5cdFx0ICAgICRzcGxhc2hTY3JlZW4gPSAkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlcmUgYXJlIHJlc3VsdHMsIHRoZSBzcGxhc2ggc2NyZWVuIG9yIHRhYmxlIG5lZWRzIHRvIGJlIHNob3duXG5cdFx0Ly8gYW5kIHRoZSBvdGhlciBzd2FwcGVkIG91dCB1c2luZyBDU1Ncblx0XHR2YXIgWyRzaG93LCAkaGlkZV0gPSByZXN1bHRzQ291bnQgPyBbJHRhYmxlLCAkc3BsYXNoU2NyZWVuXSA6IFskc3BsYXNoU2NyZWVuLCAkdGFibGVdO1xuXHRcdCRoaWRlLmFkZENsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXHRcdCRzaG93LnJlbW92ZUNsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXG5cdFx0Ly8gVGhlIG1haW4gdG9wIGJhciBmb3IgdGhlIGxpc3QgdmlldyBjb250YWlucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHNob3duIGluIHRoZSB0YWJsZVxuXHRcdGlmICghbmF2VGV4dCkge1xuXHRcdFx0Ly8gU2V0IG5hdmJhciB0ZXh0IGFzIG51bWJlciBvZiBpdGVtcyBpbiB0YWJsZSB0aGVuIGFwcGVuZCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0XHRuYXZUZXh0ID0gcmVzdWx0c0NvdW50ICsgXCIgXCIgKyAkKHRoaXMubmF2U2VsZWN0b3IpLmZpbmQoXCJsaS5hY3RpdmVcIikuZmlyc3QoKS50ZXh0KCkucmVwbGFjZShcIkFsbCBcIiwgXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdW5hYmxlIHRvIG9idGFpbiByb3dzIGNvdW50LCBzaG93IFwiTG9hZGluZ+KAplwiXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuY2xvc2VzdChcInNlY3Rpb25cIikuZmluZChcIi50b3AtbmF2IGg0XCIpLnRleHQocmVzdWx0c0NvdW50ICE9PSB1bmRlZmluZWQgPyBuYXZUZXh0IDogXCJMb2FkaW5n4oCmXCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSByb3cgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqIHVzaW5nIGRhdGEgZnJvbSBcIm9iamVjdFwiLlxuXHQgKlxuXHQgKiBUaGUgcHJvcGVydHkgbmFtZXMgc2hvdWxkIGNvcnJlc3BvbmQgd2l0aCB0aGUgXCJzbHVnXCJcblx0ICogYXR0cmlidXRlIGluIHRhYmxlIGhlYWRlci5cblx0ICpcblx0ICogTk9URTogVGhpcyBhc3N1bWVzIHRoZSBvYmplY3QgaGFzIGFuIElEIGF0dHJpYnV0ZS4gSW5jbHVkZSBpdFxuXHQgKiBldmVuIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNob3cgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmplY3QgLSBUaGUgZGF0YSB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGVcblx0ICogc3BsYXNoc2NyZWVuIG9uIHlvdXIgcGFnZVxuXHQgKi9cblx0YXBwZW5kVGFibGVSb3cob2JqZWN0KSB7XG5cdFx0dmFyICR0YWJsZVNlY3Rpb24gPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0ICAgICR0YWJsZUhlYWQgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRoZWFkIHRyJyksXG5cdFx0ICAgICR0YWJsZUJvZHkgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRib2R5JyksXG5cdFx0ICAgICRuZXdSb3cgICAgICAgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XG5cblx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgcm93IHR3aWNlXG5cdFx0aWYgKCR0YWJsZUJvZHkuY2hpbGRyZW4oXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBvYmplY3QuaWQgKyBcIlxcXCJdXCIpLmxlbmd0aCA+IDApIHJldHVybjtcblxuXHRcdC8vIFNldCBJRCBvbiByb3cgdG8gcmVmZXJlbmNlIGxhdGVyXG5cdFx0JG5ld1Jvd1swXS5kYXRhc2V0LnJvd2lkID0gb2JqZWN0LmlkO1xuXHRcdCRuZXdSb3cudG9nZ2xlQ2xhc3MoXCJoaWdobGlnaHRcIiwgb2JqZWN0LmlkID09IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cblx0XHQkdGFibGVIZWFkLmNoaWxkcmVuKCd0aCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2x1ZyA9IHRoaXMuZGF0YXNldC5zbHVnLCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXHRcdFx0aWYgKHNsdWcgPT09ICdleWUnKSB7IC8vIHRoZSBvbi1ob3ZlciBleWUgaW52aXNpYmxlIHJvd1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+Jztcblx0XHRcdH0gZWxzZSBpZiAoc2x1ZyAmJiBzbHVnLmluY2x1ZGVzKFwiYWNjZXNzXCIpKSB7XG5cdFx0XHRcdC8vIEJvb2xlYW4gdmFsdWUgc3VwcG9ydFxuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpID8gdGhpcy5pbm5lckhUTUwgOiBcIsK3XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpICE9PSB1bmRlZmluZWQgPyBvYmplY3Rbc2x1Z10gOiBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkbmV3Um93LmFwcGVuZCh0ZCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JHRhYmxlQm9keS5hcHBlbmQoJG5ld1Jvdyk7XG5cblx0XHRyZXR1cm4gJG5ld1Jvd1swXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgdGhlIGRhdGEgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqL1xuXHRjbGVhclRhYmxlKCkge1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTaG93IGRldGFpbCBwYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIHRhYmxlIHJvdyB0byBiZSBzaG93biBpbiB0aGUgc2luZ2xlIHZpZXdcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQgPSBudWxsKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBjaGVjayBmb3IgbnVsbCBhcyBubyByb3dzIHdpbGwgbWF0Y2ggaWYgbm8gSUQgcGFzc2VkXG5cdFx0Ly8gLnNpYmxpbmdzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmIHNvIGNhbiBiZSBjaGFpbmVkIGFmdGVyIGZpbmRpbmcgaGlnaGxpZ2h0IHJvdyBmaXJzdFxuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5yb3dpZCA9PSBpZCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuZmlyc3QoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFxuXHRcdC8vIE5vIG5lZWQgdG8gc2V0IHN0eWxlIHVzaW5nIEpTIGhlcmUsIENTUyBoYW5kbGVzIGZsZXhcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLnVud3JhcChcImRpdlwiKVxuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uIG9uIGhpZGVcblx0XHRcdC5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJjbG9zZVxcXCJdXCIpLmNsaWNrKCgpID0+IHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpKTtcblx0XHRcblx0XHRpZiAoaWQgPiAtMSkgbG9jYXRpb24uaGFzaCA9IHBhcnNlSW50KGlkKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEhpZGUgZGV0YWlsIHBhZ2Ugc2hvd24gd2l0aCBzaG93RGV0YWlsXG5cdCAqL1xuXHRoaWRlVGFibGVSb3dEZXRhaWxzKCkge1xuXHRcdC8vIERlc2VsZWN0IGFsbCByb3dzXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBGaWx0ZXIgdG8gY2hlY2sgaWYgYWxyZWFkeSBoaWRkZW4sIGRvbid0IGhpZGUgYWdhaW5cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudChcImRpdlwiKS5sZW5ndGggPT09IDApLndyYXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdFx0XG5cdFx0bG9jYXRpb24uaGFzaCA9IFwiXCI7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhIHNlbGVjdCBlbGVtZW50IHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG5cdCAqIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGRyb3Bkb3duIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3QgQSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbGxlZFxuXHQgKiBAcGFyYW0gZGVmYXVsdFRleHQgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG5cdCAqIEBwYXJhbSBlbGVtZW50cyBMaXN0IG9mIGVsZW1lbnRzIHRvIGJlIGFkZGVkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbVxuXHQgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbklkIElEIG9mIGEgZGVmYXVsdCBvcHRpb24gZnJvbSB0aGUgZWxlbWVudHMgZ2l2ZW5cblx0ICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0IGZpZWxkIHRvIGFjY2VzcyBzZWxlY3RlZCBpdGVtIHdpdGhcblx0ICogQHBhcmFtIGdldEFkZGl0aW9uYWxEZXRhaWxzIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGJlIHNob3duIGZvciBjdXJyZW50IGl0ZW1cblx0ICovXG5cdHBvcHVsYXRlU2VsZWN0RmllbGQoJHNlbGVjdCwgZGVmYXVsdFRleHQsIGVsZW1lbnRzLCBkZWZhdWx0T3B0aW9uSWQgPSBudWxsLCBwcm9wZXJ0eSA9ICduYW1lJywgZ2V0QWRkaXRpb25hbERldGFpbHMgPSBudWxsKSB7XG5cdFx0Ly8gRGVmYXVsdCBlbXB0eSBjb250ZW50IGZvciBpbnB1dFxuXHRcdGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKGRlZmF1bHRUZXh0LCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdCRzZWxlY3QuZW1wdHkoKS5hcHBlbmQob3B0aW9uKTtcblx0XHRcblx0XHQvLyBFYWNoIG9wdGlvbiB0byBiZSBzZWxlY3RlZCBmcm9tXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChnZXRBZGRpdGlvbmFsRGV0YWlscyAhPT0gbnVsbCkge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBnZXRBZGRpdGlvbmFsRGV0YWlscyhlKSArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmdcblx0ICogQHBhcmFtIGVsZW1lbnRzIFRoZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VhcmNoIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIG9iamVjdENhbGxiYWNrIGEgY2FsbGJhY2sgcmV0dXJuaW5nIGFuIG9iamVjdCAodGhlIHJvdyBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSBzZWFyY2hLZXlzIHRoZSBwcm9wZXJ0aWVzIGluIG9iamVjdENhbGxiYWNrIHRvIGhpZ2hsaWdodFxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBlbGVtZW50cyA9IFtdLCBvYmplY3RDYWxsYmFjaywgc2VhcmNoS2V5cyA9IFtdKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzO1xuXG5cdFx0cGFnZS5jbGVhclRhYmxlKCk7XG5cblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0gb2JqZWN0Q2FsbGJhY2soZWwpO1xuXG5cdFx0XHRcdHNlYXJjaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRcdG9iamVjdFtrZXldID0gU3RyaW5nKG9iamVjdFtrZXldKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcXVlcnkgKyAnKScsICdpZycpLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocXVlcnkgPT09ICQoXCIuc2VhcmNoLWZpZWxkIGlucHV0XCIpLnZhbCgpKSB7XG5cdFx0XHRcdFx0cGFnZS5hcHBlbmRUYWJsZVJvdyhvYmplY3QpO1xuXHRcdFx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGAke2VsZW1lbnRzLmxlbmd0aH0gcmVzdWx0JHtlbGVtZW50cy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYE5vIHJlc3VsdHMgZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhIG1lc3NhZ2UgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgb3ZlciBhbGwgZWxlbWVudHMuXG5cdCAqIEhpZGUgYWZ0ZXIgNiBzZWNvbmRzLCBvciBjb25maWd1cmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHN0cmluZyB0byBiZSBzaG93biBpbiB0aGUgbWVzc2FnZSBib3guXG5cdCAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG1lc3NhZ2UsIHN1Y2ggYXMgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIlxuXHQgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMgZm9yIHRoZSBtZXNzYWdlIHRvIGJlIHNob3duIGZvci5cblx0ICovXG5cdHN0YXRpYyBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkXCIsIHR5cGUgPSBcImRhbmdlclwiLCBkdXJhdGlvbiA9IDYpIHtcblx0XHQvLyBPbmx5IHNob3cgb25lIG1lc3NhZ2UgYXQgYSB0aW1lXG5cdFx0JChcIiNhbGVydC1ub3RpZmljYXRpb25cIikucmVtb3ZlKCk7XG5cblx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bXNnLmlkID0gXCJhbGVydC1ub3RpZmljYXRpb25cIjtcblx0XHRtc2cuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIsIGBhbGVydC0ke3R5cGV9YCwgXCJhbGVydC1ub3RpZmljYXRpb25cIik7XG5cdFx0bXNnLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTsgLy8gQWNjZXNzaWJpbGl0eVxuXHRcdC8vIFNldCBjb250ZW50IGFuZCBzaG93IG9uIHNjcmVlblxuXG5cdFx0bXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1zZyk7XG5cblx0XHQvLyBIaWRlIGFmdGVyIGR1cmF0aW9uXG5cdFx0c2V0VGltZW91dCgoKSA9PiBtc2cucmVtb3ZlKCksIGR1cmF0aW9uICogMTAwMCk7XG5cblx0XHQvLyBDbGljayB0byBoaWRlIG1lc3NhZ2Vcblx0XHQkKG1zZykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHluYW1pY1BhZ2UuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi9EZXZpY2VcIjtcblxuLyoqXG4gKiBIYXJkd2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZGV2aWNlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBIYXJkd2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkd2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZGV2aWNlcyA9IGFwaS5kZXZpY2VzLm1hcChlID0+IG5ldyBEZXZpY2UoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIFR5cGVzIGluIHRhYmxlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRoaXMuZGV2aWNlcy5tYXAodCA9PiB0LnR5cGUpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgTWFrZXMgZm9yIGEgc3BlY2lmaWVkIFR5cGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVNYWtlc09mVHlwZSh0eXBlKSB7XG5cdFx0bGV0IGRldmljZXNCeVR5cGUgPSB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlKTtcblxuXHRcdHJldHVybiBbLi4ubmV3IFNldChkZXZpY2VzQnlUeXBlLm1hcCh0ID0+IHQubWFrZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGRldmljZXMgd2l0aCBhIHNwZWNpZmllZCBUeXBlIGFuZCBNYWtlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0Z2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUgJiYgZGV2aWNlLm1ha2UgPT0gbWFrZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkZXZpY2VzIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgZGV2aWNlcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXREZXZpY2VzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBpZHMuaW5kZXhPZihkZXZpY2UuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgZGV2aWNlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgZGV2aWNlIFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZGV2aWNlID0+IGRldmljZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkZXZpY2Ugd2l0aCB0aGUgZ2l2ZW4gc2VyaWFsIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gc2VyaWFsTnVtYmVyIFRoZSBzZXJpYWwgbnVtYmVyIG9mIHRoZSBkZXZpY2UgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtEZXZpY2V9XG5cdCAqL1xuXHRnZXREZXZpY2VCeVNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLnNlcmlhbF9ubyA9PT0gc2VyaWFsTnVtYmVyKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBQcm9ncmFtIGZyb20gXCIuL1Byb2dyYW1cIjtcblxuLyoqXG4gKiBTb2Z0d2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogc29mdHdhcmUgcHJvZ3JhbXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogU29mdHdhcmVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29mdHdhcmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnByb2dyYW1zID0gYXBpLnByb2dyYW1zLm1hcChlID0+IG5ldyBQcm9ncmFtKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcm9ncmFtcyB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJzXG5cdCAqXG5cdCAqIEBwYXJhbSBpZHMgVGhlIElEIG51bWJlcnMgb2YgdGhlIHByb2dyYW1zIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldFByb2dyYW1zKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbHRlcihwcm9ncmFtID0+IGlkcy5pbmRleE9mKHByb2dyYW0uaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgc3BlY2lmaWVkIHByb2dyYW1cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maW5kKHByb2dyYW0gPT4gcHJvZ3JhbS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlci5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ29tbWVudFxuICpcbiAqIEEgY29tbWVudCBpcyBtYWRlIGFib3V0IGEgc3BlY2lmaWMgdGlja2V0LCBieVxuICogYSBzdGFmZiBtZW1iZXIuXG4gKiBcbiAqIENvbnRhaW5zIHRoZSBUaWNrZXQgdGhhdCBpdCBiZWxvbmdzIHRvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQ6IGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxfaWQ6IGNhbGwsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0Y29udGVudCxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGwgICAgICAgICAgICA9IGNhbGw7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7XG5cdFx0dGhpcy5jb250ZW50ICAgICAgICAgPSBjb250ZW50O1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCBhdXRob3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hdXRob3IpO1xuXHR9XG5cblx0c2V0IGF1dGhvcihhdXRob3IpIHtcblx0XHR0aGlzLl9hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRnZXQgY2FsbCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGwodGhpcy5fY2FsbCk7XG5cdH1cblxuXHRzZXQgY2FsbChjYWxsKSB7XG5cdFx0dGhpcy5fY2FsbCA9IGNhbGw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9Db21tZW50LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ2FsbFxuICpcbiAqIEV2ZXJ5IHRpbWUgdGhlIEhlbHBkZXNrIGlzIGNhbGxlZCwgdGhpcyBpcyBjcmVhdGVkLlxuICogQSBjYWxsIG1heSBoYXZlIG11bHRpcGxlIHRpY2tldHMsIGEgdGlja2V0IG1heSBoYXZlXG4gKiBtdWx0aXBsZSBjYWxscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aW1lLFxuXHRcdGNhbGxlcl9pZDogY2FsbGVyLFxuXHRcdG9wZXJhdG9yX2lkOiBvcGVyYXRvcixcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aW1lICAgICA9IHRpbWU7XG5cdFx0dGhpcy5jYWxsZXIgICA9IGNhbGxlcjsgICAvLyBJRCBvZiBjYWxsZXIsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjsgLy8gSUQgb2Ygb3BlcmF0b3IsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMudGlja2V0cyAgPSB0aWNrZXRzOyAgLy8gSUQgb2YgdGlja2V0cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBUaWNrZXQnc1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBvcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBvcGVyYXRvcihvcGVyYXRvcikge1xuXHRcdHRoaXMuX29wZXJhdG9yID0gb3BlcmF0b3I7XG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNGcm9tQ2FsbCh0aGlzLmlkKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRW1wbG95ZWVcbiAqXG4gKiBBbiBlbXBsb3llZSBvZiB0aGUgY29tcGFueVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGpvYl90aXRsZTogam9iLFxuXHRcdGRlcGFydG1lbnQsXG5cdFx0cGhvbmVfbnVtYmVyOiBwaG9uZSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IHNwZWNpYWxpc21zID0gW10sXG5cdFx0b3BlcmF0b3IgPSBmYWxzZSxcblx0XHRzcGVjaWFsaXN0ID0gc3BlY2lhbGlzbXMubGVuZ3RoID4gMCxcblx0XHRhbmFseXN0ID0gZmFsc2UsXG5cdFx0YWRtaW4gPSBmYWxzZVxuXHR9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMuam9iID0gam9iO1xuXHRcdHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQubmFtZTtcblx0XHR0aGlzLl9kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5pZDtcblx0XHR0aGlzLnBob25lID0gcGhvbmU7XG5cdFx0dGhpcy5zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHRcdHRoaXMuYWNjZXNzID0ge29wZXJhdG9yLCBhbmFseXN0LCBhZG1pbn07XG5cdFx0XG5cdFx0Ly8gSWYgdXNlciBpcyBhbnkgb3RoZXIgcGVybWlzc2lvbiB0aGVuIHJlYWQgaXMgZ3JhbnRlZFxuXHRcdHRoaXMuYWNjZXNzLnJlYWQgPSB0aGlzLmFjY2Vzcy5vcGVyYXRvciB8fCB0aGlzLmFjY2Vzcy5hbmFseXN0IHx8IHRoaXMuYWNjZXNzLmFkbWluIHx8IHRoaXMuYWNjZXNzLnJlYWRvbmx5IHx8IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyByZWFkIGFjY2VzcyB0byB0aGUgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNSZWFkKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5yZWFkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgaGVscCBkZXNrIG9wZXJhdG9yXG5cdCAqL1xuXHRnZXQgaXNPcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Mub3BlcmF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBhbmFseXRpY2FsIGRhdGEgYWJvdXQgdGhlIGhlbHAgZGVzayBzeXN0ZW1cblx0ICovXG5cdGdldCBpc0FuYWx5c3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFuYWx5c3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvbiB0aGUgaGVscCBkZXNrXG5cdCAqL1xuXHRnZXQgaXNBZG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYWRtaW47XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgQSBsaXN0IG9mIHByb2JsZW0gdHlwZXMgdGhlIHVzZXIgaXMgYSBzcGVjaWFsaXN0IG9mXG5cdCAqL1xuXHRnZXQgc3BlY2lhbGlzbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX3NwZWNpYWxpc21zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3BlY2lhbGlzbXMgU2V0IHRoZSBsaXN0IG9mIHNwZWNpYWxpc21zIGZvciB0aGlzIHBlcnNvbiBvbiB0aGUgc3lzdGVtXG5cdCAqL1xuXHRzZXQgc3BlY2lhbGlzbXMoc3BlY2lhbGlzbXMpIHtcblx0XHR0aGlzLl9zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgZGF0YSBmb3Igc2VuZGluZyB0byBBUEkgZW5kcG9pbnQuIFRoZSBBUEkgaGFzIGRpZmZlcmVudFxuXHQgKiBkYXRhIGtleXMgcmVwcmVzZW50aW5nIHRoZSBkYXRhIGFjY2Vzc2libGUgaW4gdGhlIHRhYmxlcywgc28gbmV3XG5cdCAqIGRhdGEgYW5kIHVwZGF0ZXMgdG8gZGF0YSBtdXN0IHVzZSB0aGVzZSBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBkYXRhIHRvIGJlIGNvbnZlcnRlZFxuXHQgKiBAcmV0dXJucyBkYXRhIHdpdGggdXBkYXRlZCBrZXkgbmFtZXNcblx0ICovXG5cdHN0YXRpYyBwcmVwYXJlRGF0YShkYXRhID0ge30pIHtcblx0XHRkYXRhLmpvYl90aXRsZSA9IGRhdGEuam9iO1xuXHRcdGRhdGEucGhvbmVfbnVtYmVyID0gZGF0YS5waG9uZTtcblx0XHRkYXRhLmV4cGVydGlzZV90eXBlcyA9IGRhdGEuc3BlY2lhbGlzbXM7XG5cdFx0ZGF0YS5kZXBhcnRtZW50X2lkID0gZGF0YS5kZXBhcnRtZW50O1xuXHRcdGZvciAobGV0IGtleSBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblx0XHRcdGRhdGFba2V5XSA9IGRhdGEuYWNjZXNzW2tleV0gPyAoMSAmJiAoZGF0YS5zcGVjaWFsaXN0ID0gMSkpIDogMDtcblx0XHR9XG5cdFx0ZGF0YS5zcGVjaWFsaXN0ID0gZGF0YS5zcGVjaWFsaXN0IHx8IDA7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3RhZmYvRW1wbG95ZWUuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHBhcmVudF9pZDogcGFyZW50LFxuXHRcdGNoaWxkcmVuXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICA9IG5hbWU7XG5cdFx0dGhpcy5wYXJlbnQgICA9IHBhcmVudDtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47IC8vIElEIG9mIEV4cGVydGlzZVR5cGUncywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBFeHBlcnRpc2VUeXBlJ3Ncblx0fVxuXG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fcGFyZW50KTtcblx0fVxuXG5cdHNldCBwYXJlbnQocGFyZW50KSB7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0Z2V0IGNoaWxkcmVuKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9jaGlsZHJlbik7XG5cdH1cblxuXHRzZXQgY2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGUuanMiLCJpbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlU3RhZmYge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmSWQsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfaWQ6IGV4cGVydGlzZVR5cGVJZCxcblx0XHR0aWNrZXRzXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICA9IHN0YWZmSWQ7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGVJZDtcblx0XHR0aGlzLnRpY2tldHMgICAgICAgID0gdGlja2V0cztcblx0fVxuXG5cdGdldCBzdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlKHRoaXMuX2V4cGVydGlzZV90eXBlKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZShleHBlcnRpc2VUeXBlKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGF0dXNcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFN0YXR1cy5cbiAqIENvbnRhaW5zIFRpY2tldHMgdGhhdCBmaXQgaW50byB0aGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzbHVnLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgID0gaWQ7XG5cdFx0dGhpcy5zbHVnICAgID0gc2x1ZzsgICAgLy8gc2x1Z19leGFtcGxlXG5cdFx0dGhpcy5uYW1lICAgID0gbmFtZTsgICAgLy8gTmFtZSBFeGFtcGxlIVxuXHRcdHRoaXMudGlja2V0cyA9IHRpY2tldHM7IC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBUaWNrZXQgaW5zdGFuY2VzXG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNXaXRoU2x1Zyh0aGlzLnNsdWcpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgVGlja2V0L1Byb2JsZW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxscyxcblx0XHRzdGF0dXMsXG5cdFx0c3RhdHVzX2hpc3Rvcnk6IHN0YXR1c0hpc3RvcnksXG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0c29sdXRpb25faWQ6IHNvbHV0aW9uLFxuXHRcdGRldmljZXMsXG5cdFx0cHJvZ3JhbXMsXG5cdFx0Y29tbWVudHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsLFxuXHRcdHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdFJlYWwsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQ6IGV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRhc3NpZ25lZF90b19vcGVyYXRvcl9pZDogYXNzaWduZWRUb09wZXJhdG9ySWRcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgICAgPSBjYWxsczsgIC8vIElEIG9mIGNhbGxzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENhbGwnc1xuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhdHVzX2hpc3RvcnkgICAgICAgPSBzdGF0dXNIaXN0b3J5O1xuXHRcdHRoaXMudGl0bGUgICAgICAgICAgICAgICAgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uICAgICAgICAgID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5zb2x1dGlvbiAgICAgICAgICAgICA9IHNvbHV0aW9uO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgICAgPSBkZXZpY2VzOyAgLy8gSUQgb2YgZGV2aWNlcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBEZXZpY2VzXG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgICA9IHByb2dyYW1zOyAvLyBJRCBvZiBwcm9ncmFtcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBQcm9ncmFtc1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgICAgPSBjb21tZW50czsgLy8gSUQgb2YgY29tbWVudHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ29tbWVudCdzXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgICAgICAgICAgID0gdXBkYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsICAgICAgPSBjcmVhdGVkQXRSZWFsO1xuXHRcdHRoaXMudXBkYXRlZF9hdF9yZWFsICAgICAgPSB1cGRhdGVkQXRSZWFsO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGNhbGxzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbHNCeVRpY2tldElkKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IGNhbGxzKGNhbGxzKSB7XG5cdFx0dGhpcy5fY2FsbHMgPSBjYWxscztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cdFxuXHRnZXQgc3RhdHVzX2hpc3RvcnkoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXNIaXN0b3J5KHRoaXMuX3N0YXR1c19oaXN0b3J5KTtcblx0fVxuXG5cdHNldCBzdGF0dXNfaGlzdG9yeShzdGF0dXNIaXN0b3J5KSB7XG5cdFx0dGhpcy5fc3RhdHVzX2hpc3RvcnkgPSBzdGF0dXNIaXN0b3J5O1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgZGV2aWNlcygpIHtcblx0XHRyZXR1cm4gKG5ldyBIYXJkd2FyZU1hbmFnZXIoKSkuZ2V0RGV2aWNlcyh0aGlzLl9kZXZpY2VzKTtcblx0fVxuXG5cdHNldCBkZXZpY2VzKGRldmljZXMpIHtcblx0XHR0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcblx0fVxuXG5cdGdldCBwcm9ncmFtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBTb2Z0d2FyZU1hbmFnZXIoKSkuZ2V0UHJvZ3JhbXModGhpcy5fcHJvZ3JhbXMpO1xuXHR9XG5cblx0c2V0IHByb2dyYW1zKHByb2dyYW1zKSB7XG5cdFx0dGhpcy5fcHJvZ3JhbXMgPSBwcm9ncmFtcztcblx0fVxuXG5cdGdldCBjb21tZW50cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnRzQnlJZHModGhpcy5fY29tbWVudHMpO1xuXHR9XG5cblx0c2V0IGNvbW1lbnRzKGNvbW1lbnRzKSB7XG5cdFx0dGhpcy5fY29tbWVudHMgPSBjb21tZW50cztcblx0fVxuXG5cdGdldCBzb2x1dGlvbigpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnQodGhpcy5fc29sdXRpb24pO1xuXHR9XG5cblx0c2V0IHNvbHV0aW9uKHNvbHV0aW9uKSB7XG5cdFx0dGhpcy5fc29sdXRpb24gPSBzb2x1dGlvbjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZV9zdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmKHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZV9zdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQ7XG5cdH1cblxuXHRnZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoYXNzaWduZWRUb09wZXJhdG9ySWQpIHtcblx0XHR0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAgLSAxICsgMSkpICsgMTsgLy9SYW5kb20gaW50IGJldHdlZW4gMSBhbmQgNDBcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpKS5nZXRFeHBlcnRpc2VUeXBlKHJhbmRvbSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXQuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIERldmljZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0eXBlLFxuXHRcdG1ha2UsXG5cdFx0c2VyaWFsX25vLFxuXHRcdHRpY2tldHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZF9hdCxcblx0XHR1cGRhdGVkX2F0X2h1bWFuOiB1cGRhdGVkX2F0LFxuXHR9KVxuXHR7XG5cdFx0dGhpcy5pZFx0XHRcdFx0PSBpZDtcblx0XHR0aGlzLnR5cGVcdFx0XHQ9IHR5cGU7XG5cdFx0dGhpcy5tYWtlICAgXHRcdD0gbWFrZTtcblx0XHR0aGlzLnNlcmlhbF9ubyAgICAgXHQ9IHNlcmlhbF9ubztcblx0XHR0aGlzLl90aWNrZXRzXHRcdD0gdGlja2V0cztcblx0XHR0aGlzLmNyZWF0ZWRfYXRcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdGlmICh0aGlzLl90aWNrZXRzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNCeVRpY2tldElEcyh0aGlzLl90aWNrZXRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBBcnJheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRpY2tldHMgU2V0cyB0aGUgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIFByb2dyYW1cbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIFNvZnR3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmFtIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0cyxcblx0XHRvcGVyYXRpbmdfc3lzdGVtLFxuXHRcdGV4cGlyeV9kYXRlLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSkgXG5cdHtcblx0XHR0aGlzLmlkICAgICAgICAgXHRcdD0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICAgIFx0XHQ9IG5hbWU7XG5cdFx0dGhpcy5fdGlja2V0c1x0XHRcdD0gdGlja2V0cztcblx0XHR0aGlzLm9wZXJhdGluZ19zeXN0ZW1cdD0gb3BlcmF0aW5nX3N5c3RlbTtcblx0XHR0aGlzLmV4cGlyeV9kYXRlXHRcdD0gZXhwaXJ5X2RhdGU7XG5cdFx0dGhpcy5jcmVhdGVkX2F0IFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0IFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXRTb2Z0d2FyZVR5cGUoKSB7IFxuXHRcdC8vR2V0cyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBwcm9ncmFtIGlzIGFuIG9wZXJ0aW5nIHN5c3RlbSBvciBub3Rcblx0XHRpZiAodGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJPcGVyYXRpbmcgU3lzdGVtXCI7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJBcHBsaWNhdGlvblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCItXCI7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zb2Z0d2FyZS9Qcm9ncmFtLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0U3RhdHVzXG4gKlxuICogSW50ZXJtZWRpYXJ5IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFN0YXR1c1xuICogYW5kIFRpY2tldC4gVGhpcyBzdG9yZXMgYSBoaXN0b3J5IG9mIGFcbiAqIFRpY2tldCdzIHN0YXR1c2VzOyB0aGUgbGFzdCBlbnRyeSBpc1xuICogdGhlIFRpY2tldCdzIGN1cnJlbnQgc3RhdHVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0c3RhdHVzX2lkOiBzdGF0dXMsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0OyAvLyBJRCBvZiB0aWNrZXQsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBUaWNrZXRcblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgPSBzdGFmZjsgIC8vIElEIG9mIHN0YWZmLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRTdGF0dXMuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4vRHluYW1pY1BhZ2VcIjtcblxuLyoqXG4gKiBBUElcbiAqXG4gKiBPcmlnaW5hbGx5IHVzZWQgdG8gcmV0cmlldmUgYW5kIGhhbmRsZSBkYXRhIGZyb21cbiAqIEFQSSBlbmRwb2ludHMsIGJ1dCBtb2RpZmllZCB0byBob2xkIGxvY2FsIGRhdGFcbiAqIGluIHRoZSBjb25zdHJ1Y3RvciBzZXQgYnkgV29yZFByZXNzJ3MgVHdpZ1xuICogKGRvbmUgdG8gcmV1c2UgcHJldmlvdXMgY29tcG9uZW50cyB0byBzYXZlIHRpbWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRjYWxscyA9IFtdLFxuXHRcdHN0YXR1c2VzID0gW10sXG5cdFx0dGlja2V0cyA9IFtdLFxuXHRcdHRpY2tldF9zdGF0dXNlczogdGlja2V0U3RhdHVzZXMgPSBbXSxcblx0XHRjb21tZW50cyA9IFtdLFxuXHRcdHN0YWZmID0gW10sXG5cdFx0ZGV2aWNlcyA9IFtdLFxuXHRcdHByb2dyYW1zID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBleHBlcnRpc2VUeXBlcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlX3N0YWZmOiBleHBlcnRpc2VUeXBlU3RhZmYgPSBbXSxcblx0XHRkZXBhcnRtZW50cyA9IFtdXG5cdH0pIHtcblx0XHR0aGlzLmNhbGxzICAgICAgICAgICAgICA9IGNhbGxzO1xuXHRcdHRoaXMuc3RhdHVzZXMgICAgICAgICAgID0gc3RhdHVzZXM7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICAgICAgPSB0aWNrZXRzO1xuXHRcdHRoaXMudGlja2V0U3RhdHVzZXMgICAgID0gdGlja2V0U3RhdHVzZXM7XG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgPSBjb21tZW50cztcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICAgICA9IHN0YWZmO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgID0gZGV2aWNlcztcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICA9IHByb2dyYW1zO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gZXhwZXJ0aXNlVHlwZXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlU3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyAgICAgICAgPSBkZXBhcnRtZW50cztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9BUEkuanMiLCIvKlxuSlMgc3BlY2lmaWMgdG8gSGFyZHdhcmUgcGFnZSwgdXNlZCB0byBoYW5kbGUgcnVkYW1lbnRhcnkgZnJvbnQgZW5kIGludGVyYWN0aW9ucy5cbk1vc3QgZnJvbnQgZW5kIGxvZ2ljIG9jY3VycyBpbiBNZXRyaWNzUGFnZS5cbiAqL1xuXG5pbXBvcnQgTWFrZUl0QWxsIGZyb20gXCIuLi8uLi9tYWluXCI7XG5pbXBvcnQgTWV0cmljc1BhZ2UgZnJvbSBcIi4vTWV0cmljc1BhZ2VcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL0FQSVwiO1xuXG5sZXQgbWV0cmljc1BhZ2UsIGFwaTtcblxud2luZG93LmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdGFwaSA9IHdpbmRvdy5hcGkgPSBuZXcgQVBJKGRhdGEpO1xuXG5cdG1ldHJpY3NQYWdlID0gd2luZG93Lm1ldHJpY3NQYWdlID0gbmV3IE1ldHJpY3NQYWdlKCk7XG5cblx0Ly9TZXR0aW5nIGRlZmF1bHQgcmVzcG9uc2UgaWYgbm8gcmVzdWx0IGlzIGZvdW5kIGluIHRoZSBzZWxlY3Qvc2VhcmNoIGJveFxuXHQkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKHtcblx0XHRub25lUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIG1hdGNoIHswfSdcblx0fSk7XG5cblx0Ly9IYW5kbGVyIGZvciBjaGFuZ2luZyB0aGUgc2VsZWN0ZWQgc3RhZmYgbWVtYmVyXG5cdCQoJyNTdGFmZk5hbWVTZWFyY2gnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7IFxuXHRcdG1ldHJpY3NQYWdlLnN0YWZmRHJvcGRvd25DaGFuZ2UoKTtcblx0fSk7XG5cblx0JChcIltkYXRhLXJvd2lkXVwiKS5jbGljayhlID0+IHtcblx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi50b1N0cmluZygpLnNwbGl0KFwiI1wiKVswXS5yZXBsYWNlKFwibWV0cmljcy5odG1sXCIsIFwic3RhZmYuaHRtbCNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cblx0JCgoKSA9PiBtZXRyaWNzUGFnZS5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWV0cmljcy9tZXRyaWNzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5cblxuLyoqXG4gKiBNZXRyaWNzUGFnZVxuICpcbiAqIE1hbmlwdWxhdGVzIHRoZSBtZXRyaWNzIHBhZ2UgL3cgSlF1ZXJ5IHVzaW5nIGRhdGEgZnJvbVxuICogdmFyaW91cyBpdGVtIE1hbmFnZXJzLiBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNzUGFnZSBleHRlbmRzIER5bmFtaWNQYWdlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8vRGVjbGVhcmluZyBtYW5hZ2Vyc1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgICAgICAgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICAgICAgICAgPSBuZXcgU3RhZmZNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zb2Z0d2FyZU1hbmFnZXIgICAgICA9IG5ldyBTb2Z0d2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLmhhcmR3YXJlTWFuYWdlciAgICAgID0gbmV3IEhhcmR3YXJlTWFuYWdlcigpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblxuXHRcdHRoaXMubG9nZ2VkSW5Vc2VyID0gbnVsbDtcblx0XHR0aGlzLnBhZ2VMb2FkKCk7XG5cdH1cblxuXHRwYWdlTG9hZCgpIHtcblx0XHR0aGlzLmxvZ2dlZEluVXNlciA9IHRoaXMuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKHRydWUpO1xuXHRcdHZhciB0aWNrZXRzID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLmxvZ2dlZEluVXNlci5pc0FuYWx5c3QpIHsgLy9JZiBhbiBhbmFseXN0IGlzIGxvZ2dlZCBpblxuXHRcdFx0Ly9Mb2FkIGFsbCBzdGFmZiBtZW1iZXJzIGludG8gU3RhZmYgRHJvcCBkb3duIGJveCwgYW5kIGRpc3BsYXlcblx0XHRcdC8vc3lzdGVtLXdpZGUgc3RhdGlzdGljcyAodXNpbmcgdGlja2V0cyBhc3NpZ25lZCB0byBhbnkgb3BlcmF0b3IpIFxuXHRcdFx0dGhpcy5wb3B1bGF0ZVN0YWZmTmFtZVNlYXJjaCgpO1xuXHRcdFx0dGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci50aWNrZXRzO1xuXHRcdFx0dGhpcy5zaG93U3RhdHModHJ1ZSwgdGlja2V0cylcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9JZiBub3QsIGRpc3BsYXkgdGhlIG5hbWUgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIGFuZCBmb3JjZVxuXHRcdFx0Ly90aGUgcGFnZSB0byBkaXNwbGF5IG9ubHkgZGF0YSByZWxhdGluZyB0byB0aGVtXG5cdFx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5hcHBlbmQoXCI8b3B0aW9uIHN0eWxlPSdjb2xvcjpncmV5JyB2YWx1ZT0nXCIgKyB0aGlzLmxvZ2dlZEluVXNlci5pZCArIFwiJyBzZWxlY3RlZD5cIiArIHRoaXMubG9nZ2VkSW5Vc2VyLm5hbWUgKyBcIjwvb3B0aW9uPlwiKTtcblx0XHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKTtcblx0XHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHRcdFx0dGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGhpcy5sb2dnZWRJblVzZXIuaWQpO1xuXHRcdFx0dGhpcy5vcGVuU3RhZmZJbmZvKHRoaXMubG9nZ2VkSW5Vc2VyLCB0aWNrZXRzKTtcblx0XHR9XG5cdH1cblxuXHQvL0hhbmRsZXMgZGlzcGxheSBkYXRhIGluIHRoZSBcIlN0YXRpc3RpY3NcIiBzZWN0aW9uXG5cdHNob3dTdGF0cyhzaG93aW5nR2xvYmFsSW5mbywgdGlja2V0cykge1xuXHRcdGlmIChzaG93aW5nR2xvYmFsSW5mbykgeyBcblx0XHRcdC8vSWYgdXNlciBpcyBhbiBBbmFseXN0IGFuZCBoYXMgbm90IHNlbGVjdGVkIGEgc3BlY2lmaWMgc3RhZmYgbWVtYmVyIHRvIHZpZXdcblx0XHRcdC8vRGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBIYXJkd2FyZSBhbmQgU29mdHdhcmVcblx0XHRcdCQoXCIjSFdfU1dcIikuYXR0cihcInN0eWxlXCIsXCJcIilcblx0XHRcdHZhciBwcm9ncmFtcyA9IHRoaXMuc29mdHdhcmVNYW5hZ2VyLnByb2dyYW1zO1xuXHRcdFx0dmFyIG5vT2ZTb2Z0d2FyZSA9IHByb2dyYW1zLmxlbmd0aDtcblx0XHRcdHZhciBub09mU29mdHdhcmVXaXRoSXNzdWVzID0gcHJvZ3JhbXMuZmlsdGVyKHAgPT4gcC5fdGlja2V0cy5sZW5ndGggPiAwKS5sZW5ndGg7XG5cdFx0XHRcblx0XHRcdHZhciBkZXZpY2VzID0gdGhpcy5oYXJkd2FyZU1hbmFnZXIuZGV2aWNlcztcblx0XHRcdHZhciBub09mSGFyZHdhcmUgPSBkZXZpY2VzLmxlbmd0aDtcblx0XHRcdHZhciBub09mSGFyZHdhcmVXaXRoSXNzdWVzID0gZGV2aWNlcy5maWx0ZXIoZCA9PiBkLl90aWNrZXRzLmxlbmd0aCA+IDApLmxlbmd0aDtcblxuXHRcdFx0JChcIiNub09mU29mdHdhcmVcIikudmFsKG5vT2ZTb2Z0d2FyZSk7XG5cdFx0XHQkKFwiI25vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXNcIikudmFsKG5vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXMpO1xuXHRcdFx0JChcIiNub09mRGV2aWNlc1wiKS52YWwobm9PZkhhcmR3YXJlKTtcblx0XHRcdCQoXCIjbm9PZkRldmljZXNXaXRoSXNzdWVzXCIpLnZhbChub09mSGFyZHdhcmVXaXRoSXNzdWVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9FbHNlIGRvbid0IGRpc3BsYXkgSGFyZHdhcmUvU29mdHdhcmUgaW5mb3JtYXRpb25cblx0XHRcdCQoXCIjSFdfU1dcIikuYXR0cihcInN0eWxlXCIsXCJkaXNwbGF5Om5vbmVcIik7XG5cdFx0fVxuXG5cdFx0JChcIiN0b3RhbFRpY2tldHNBc3NpZ25lZFwiKS52YWwodGlja2V0cy5sZW5ndGgpOyAvL051bWJlciBvZiB0aWNrZXRzIGluIHRoZSBzeXN0ZW1cblx0XHR2YXIgc29sdmVkVGlja2V0cyA9IHRpY2tldHMuZmlsdGVyKHQgPT4gdC5zdGF0dXMuc2x1ZyA9PSBcInJlc29sdmVkXCIpOyAvL051bWJlciBvZiByZXNvbHZlZCB0aWNrZXRzIGluIHRoZSBzeXN0ZW1cblx0XHQkKFwiI3RvdGFsVGlja2V0c1NvbHZlZFwiKS52YWwoc29sdmVkVGlja2V0cy5sZW5ndGgpO1xuXG5cdFx0dmFyIHRvdGFsVGltZSA9IDA7XG5cdFx0dmFyIHRvdGFsUmVwbGllcyA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b3RhbFJlcGxpZXMgKz0gdGlja2V0c1tpXS5jb21tZW50cy5sZW5ndGg7XG5cdFx0XHR2YXIgdGlja2V0U3RhdHVzSGlzdG9yeSA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQodGlja2V0c1tpXS5pZCk7XG5cdFx0XHR2YXIgcmVzb2x2ZWRUaWNrZXRTdGF0dXMgPSB0aWNrZXRTdGF0dXNIaXN0b3J5LmZpbHRlcih0ID0+IHQuX3N0YXR1cyA9PSAxKTtcblxuXHRcdFx0aWYgKHJlc29sdmVkVGlja2V0U3RhdHVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIHRpY2tldENyZWF0ZWQgPSBuZXcgRGF0ZSh0aWNrZXRzW2ldLmNyZWF0ZWRfYXRfcmVhbCk7XG5cdFx0XHRcdHZhciBsYXN0UmVzb2x2ZWQgPSByZXNvbHZlZFRpY2tldFN0YXR1c1tyZXNvbHZlZFRpY2tldFN0YXR1cy5sZW5ndGggLSAxXVxuXHRcdFx0XHR2YXIgdGlja2V0UmVzb2x2ZWQgPSBuZXcgRGF0ZShsYXN0UmVzb2x2ZWQuY3JlYXRlZF9hdF9yZWFsKTtcblx0XHRcdFx0dmFyIHRpbWVEaWZmID0gTWF0aC5hYnModGlja2V0UmVzb2x2ZWQuZ2V0VGltZSgpIC0gdGlja2V0Q3JlYXRlZC5nZXRUaW1lKCkpO1xuXHRcdFx0XHR2YXIgZGlmZkRheXMgPSBNYXRoLmNlaWwodGltZURpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCkpOyBcblx0XHRcdFx0dG90YWxUaW1lICs9IGRpZmZEYXlzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghKHRpY2tldHMubGVuZ3RoKSkge1xuXHRcdFx0JChcIiNhdmdUaW1lVG9Tb2x2ZVRpY2tldFwiKS52YWwoXCItXCIpOyBcblx0XHRcdCQoXCIjYXZnUmVwbGllc1BlclRpY2tldFwiKS52YWwoXCItXCIpOyAvL0lmIHRoZXJlIGFyZSBubyB0aWNrZXRzLCB1c2UgdGhpcyBzbyB3ZSBkb24ndCBkaXZpZGUgYnkgMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKFwiI2F2Z1RpbWVUb1NvbHZlVGlja2V0XCIpLnZhbCh0b3RhbFRpbWUvdGlja2V0cy5sZW5ndGgpOyBcblx0XHRcdCQoXCIjYXZnUmVwbGllc1BlclRpY2tldFwiKS52YWwodG90YWxSZXBsaWVzL3RpY2tldHMubGVuZ3RoKTsgLy9DYWxjdWxhdGVzIGF2ZXJhZ2UgcmVwbGllcyBwZXIgdGlja2V0XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVMaW5lR3JhcGgodGlja2V0cyk7IC8vTG9hZCBCYWNrbG9nIEdyYXBoXG5cdFx0dGhpcy5jcmVhdGVQaWVDaGFydCh0aWNrZXRzKTsgLy9Mb2FkIFByb2JsZW0gVHlwZSBncmFwaFxuXHR9XG5cblx0Ly9UaGlzIGZ1bmN0aW9uIHRha2VzIGEgc3RhZmYgbWVtYmVyIG9iamVjdCwgYW5kIHJlbGV2YW50IHRpY2tldHMgZm9yIHRoYXQgXG5cdC8vc3RhZmYgbWVtYmVyIGFuZCBhcHByb3ByaWF0ZWx5IGZpbGxzIGluIHZhbHVlcyBvbiB0aGUgcGFnZVxuXHRvcGVuU3RhZmZJbmZvKHN0YWZmLHRpY2tldHMpIHtcblx0XHQkKFwiLmNvbGxhcHNpYmxlXCIpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuXHRcdCQoXCIjbmFtZVwiKS52YWwoc3RhZmYubmFtZSk7XG5cdFx0JChcIiNwaG9uZVwiKS52YWwoc3RhZmYucGhvbmUpO1xuXHRcdCQoXCIjcm9sZVwiKS52YWwoc3RhZmYuam9iKTtcblx0XHQkKFwiI3N0YXRzVGl0bGVcIikudGV4dChcIlN0YXRpc3RpY3MgLSBcIiArIHN0YWZmLm5hbWUpO1xuXHRcdCQoXCIjdGlja2V0VGl0bGVcIikudGV4dChcIlRpY2tldCBCYWNrbG9nIC0gXCIgKyBzdGFmZi5uYW1lKTtcblx0XHR0aGlzLnNob3dTdGF0cyhmYWxzZSx0aWNrZXRzKTtcblx0fVxuXG5cdC8vRnVuY3Rpb24gdXNlZCB0byBsb2FkIGFsbCBzdGFmZiBtZW1iZXJzIGluIHRoZSBzeXN0ZW0gaW4gdGhlIGRyb3AgZG93biBib3guXG5cdHBvcHVsYXRlU3RhZmZOYW1lU2VhcmNoKCkge1xuXHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLmh0bWwoXCJcIik7XG5cdFx0dmFyIHN0YWZmTWVtYmVycyA9IHRoaXMuc3RhZmZNYW5hZ2VyLnN0YWZmO1xuXHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLmFwcGVuZChcIjxvcHRpb24+U2VhcmNoLi4uPC9vcHRpb24+XCIpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RhZmZNZW1iZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQkKFwiI1N0YWZmTmFtZVNlYXJjaFwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIHN0YWZmTWVtYmVyc1tpXS5pZCArIFwiJz5cIiArIHN0YWZmTWVtYmVyc1tpXS5uYW1lICsgXCI8L29wdGlvbj5cIik7XG5cdFx0fVxuXHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXHR9XG5cblx0Ly9IYW5kbGVzIGEgbmV3IGl0ZW0gaXMgc2VsZWN0ZWQgaW4gdGhlIGRyb3AgZG93biBib3guXG5cdHN0YWZmRHJvcGRvd25DaGFuZ2UoKSB7XG5cdFx0dmFyIGluZGV4ID0gJCgnI1N0YWZmTmFtZVNlYXJjaCcpWzBdLnNlbGVjdGVkSW5kZXg7XG5cdFx0aWYgKGluZGV4ID4gMCkgeyAvL1N0YWZmIE1lbWJlciBzZWxlY3RlZFxuXHRcdFx0dmFyIGlkID0gTnVtYmVyKCQoJyNTdGFmZk5hbWVTZWFyY2gnKS52YWwoKSk7XG5cdFx0XHR2YXIgc3RhZmYgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXQoaWQpXG5cdFx0XHR0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZChzdGFmZi5pZCk7XG5cdFx0XHR0aGlzLm9wZW5TdGFmZkluZm8oc3RhZmYsIHRpY2tldHMpOyAvL0Rpc3BsYXkgY29ycmVjdCBwYWdlIGluZm8gZm9yIHNlbGVjdGVkIHN0YWZmIG1lbWJlclxuXHRcdH0gZWxzZSB7IC8vRGVmYXVsdCBvcHRpb24gc2VsZWN0ZWQgLSBjbG9zZSBzdGFmZiBkZXRhaWxzXG5cdFx0XHQkKFwiLmNvbGxhcHNpYmxlXCIpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cdFx0XHQkKFwiI25hbWVcIikudmFsKFwiXCIpO1xuXHRcdFx0JChcIiNwaG9uZVwiKS52YWwoXCJcIik7XG5cdFx0XHQkKFwiI3JvbGVcIikudmFsKFwiXCIpO1xuXHRcdFx0JChcIiNzdGF0c1RpdGxlXCIpLnRleHQoXCJTdGF0aXN0aWNzXCIpO1xuXHRcdFx0JChcIiN0aWNrZXRUaXRsZVwiKS50ZXh0KFwiVGlja2V0IEJhY2tsb2dcIik7XG5cdFx0XHR2YXIgdGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci50aWNrZXRzO1xuXHRcdFx0dGhpcy5zaG93U3RhdHModHJ1ZSwgdGlja2V0cylcblx0XHR9XG5cdH1cblxuXHQvL1Jlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIHRoZSBiYWNrbG9nIGdyYXBoLiBUYWtlcyB0aGUgcGFyYW1hdGVyIFwidGlja2V0c1wiIGFuZCB1c2VzIGl0IGNhbGN1bGF0ZSB2YWx1ZXMgdHAgZGlzcGxheSBcblx0Y3JlYXRlTGluZUdyYXBoKHRpY2tldHMpIHtcblx0XHR2YXIgbm93ID0gbmV3IERhdGUoKTtcblx0XHR2YXIgbW9udGhOYW1lcyA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcblx0XHR2YXIgbW9udGhzID0gbmV3IEFycmF5KCk7XG5cdFx0dmFyIGN1cnJlbnRNb250aCA9IG5vdy5nZXRNb250aCgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7IC8vZ2V0cyB0aGUgaW5kZXhlcyBvZiB0aGUgcHJldmlvdXMgNiBtb250aHMgYW5kIHB1c2hlcyB0aGVtIHRvIGFuIGFycmF5XG5cdFx0XHRtb250aHMucHVzaChjdXJyZW50TW9udGgpO1xuXHRcdFx0Y3VycmVudE1vbnRoID0gY3VycmVudE1vbnRoID09IDAgPyAxMSA6IC0tY3VycmVudE1vbnRoO1xuXHRcdH1cblx0XHRtb250aHMucmV2ZXJzZSgpO1xuXG5cdFx0dmFyIHRpY2tldHNPcGVuZWQgPSBuZXcgQXJyYXkoKTtcblx0XHR2YXIgdGlja2V0c1VucmVzb2x2ZWQgPSBuZXcgQXJyYXkoKTtcblx0XHQvL0ZvciBlYWNoIG9mIHRoZSBwcmV2aW91cyA2IG1vbnRocywgd2UgY2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdGlja2V0cyBvcGVuZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGFtb3VudCBvZiB0aWNrZXRzIHRoYXQgaGF2ZSBiZWVuIHJlc29sdmVkIGZyb20gdGhhdCBtb250aFxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9udGhzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL0dldHMgYWxsIHRpY2tldHMgb3BlbmluZyBpbiB0aGUgY3VycmVudCBtb250aFxuXHRcdFx0dmFyIG9wZW5lZCA9IHRpY2tldHMuZmlsdGVyKHQgPT4gbmV3IERhdGUodC5jcmVhdGVkX2F0X3JlYWwpLmdldE1vbnRoKCkgPT0gbW9udGhzW2pdKVxuXHRcdFx0dGlja2V0c09wZW5lZC5wdXNoKG9wZW5lZC5sZW5ndGgpO1xuXHRcdFx0Ly9HZXRzIGFsbCB1bnJlc29sdmVkIHRpY2tldHMgdGhhdCB3ZXJlIG9wZW5lZCBpbiB0aGUgY3VycmVudCBtb250aFxuXHRcdFx0dmFyIHVucmVzb2x2ZWQgPSB0aWNrZXRzLmZpbHRlcih0ID0+IChuZXcgRGF0ZSh0LmNyZWF0ZWRfYXRfcmVhbCkuZ2V0TW9udGgoKSA9PSBtb250aHNbal0gJiYgdC5zdGF0dXMuc2x1ZyAhPSBcInJlc29sdmVkXCIpKVxuXHRcdFx0dGlja2V0c1VucmVzb2x2ZWQucHVzaCh1bnJlc29sdmVkLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0JCgnI3RpY2tldC1iYWNrbG9nJykuaHRtbChcIjxjYW52YXMgaWQ9J3RpY2tldEJhY2tsb2cnPjwvY2FudmFzPlwiKTtcblx0XHR2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aWNrZXRCYWNrbG9nXCIpLmdldENvbnRleHQoJzJkJyk7XG5cblx0XHR2YXIgb3BTdGF0Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG5cdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGxhYmVsczogW21vbnRoTmFtZXNbbW9udGhzWzBdXSwgbW9udGhOYW1lc1ttb250aHNbMV1dLCBtb250aE5hbWVzW21vbnRoc1syXV0sIG1vbnRoTmFtZXNbbW9udGhzWzNdXSwgbW9udGhOYW1lc1ttb250aHNbNF1dLCBtb250aE5hbWVzW21vbnRoc1s1XV1dLCAvL0xhYmVscyBvZiBtb250aHNcblx0XHRcdFx0ZGF0YXNldHM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJyMgVGlja2V0cyBVbnJlc29sdmVkJyxcblx0XHRcdFx0XHRcdGRhdGE6IFt0aWNrZXRzVW5yZXNvbHZlZFswXSwgdGlja2V0c1VucmVzb2x2ZWRbMV0sIHRpY2tldHNVbnJlc29sdmVkWzJdLCB0aWNrZXRzVW5yZXNvbHZlZFszXSwgdGlja2V0c1VucmVzb2x2ZWRbNF0sIHRpY2tldHNVbnJlc29sdmVkWzVdXSwgLy9EYXRhIG9mIHVucmVzb2x2ZWQgdGlja2V0c1xuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjA5LDIxOCwwLjgpJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHRsYWJlbDogJyMgVGlja2V0cyBPcGVuZWQnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW3RpY2tldHNPcGVuZWRbMF0sIHRpY2tldHNPcGVuZWRbMV0sIHRpY2tldHNPcGVuZWRbMl0sIHRpY2tldHNPcGVuZWRbM10sIHRpY2tldHNPcGVuZWRbNF0sIHRpY2tldHNPcGVuZWRbNV1dLCAvL0RhdGEgb2YgdG90YWwgdGlja2V0cyBvcGVuZWRcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiYSg5OSwxMzIsMjU1LDEpJyxcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoOTksMTMyLDI1NSwwLjIpJ1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRyZXNwb25zaXZlOnRydWUsXG5cdFx0XHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuXHRcdFx0XHRzY2FsZXM6IHtcblx0XHRcdFx0XHR5QXhlczogW3tcblx0XHRcdFx0XHRcdHRpY2tzOiB7XG5cdFx0XHRcdFx0XHRcdGJlZ2luQXRaZXJvOnRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVQaWVDaGFydCh0aWNrZXRzKSB7XG5cdFx0dmFyIHJvb3RQcm9ibGVtVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldFJvb3RFeHBlcnRpc2VUeXBlcygpOyAvL0dldHMgdGhlIG1ham9yL3Jvb3QgRXhwZXJ0aXNlIHR5cGVzXG5cdFx0XG5cdFx0dmFyIFByb2JsZW1UeXBlTmFtZXMgPSBuZXcgQXJyYXkoKTtcblx0XHR2YXIgdGlja2V0c1BlclByb2JsZW1UeXBlID0gbmV3IEFycmF5KCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb290UHJvYmxlbVR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRQcm9ibGVtVHlwZU5hbWVzLnB1c2gocm9vdFByb2JsZW1UeXBlc1tpXS5uYW1lKTsgLy9BZGRzIHRoZSBuYW1lcyBvZiBlYWNoIHJvb3QgRXhwZXJ0aXNlIHR5cGUgdG8gYW4gYXJyYXkgXG5cblx0XHRcdHZhciB0aWNrZXRDb3VudCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aWNrZXRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHZhciBwcm9iVHlwZUNoYWluID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlQ2hhaW4odGlja2V0c1tqXS5leHBlcnRpc2VfdHlwZSk7XG5cdFx0XHRcdHZhciByb290UHJvYmxlbVR5cGUgPSBwcm9iVHlwZUNoYWluW3Byb2JUeXBlQ2hhaW4ubGVuZ3RoIC0gMV07IC8vR2V0cyB0aGUgcm9vdCBwcm9ibGVtIHR5cGUgZm9yIHRoZSBjdXJyZW50IHRpY2tldC5cblx0XHRcdFx0aWYgKHJvb3RQcm9ibGVtVHlwZXNbaV0uaWQgPT0gcm9vdFByb2JsZW1UeXBlLmlkKSB7IC8vSWYgdGhlIGN1cnJlbnQgdGlja2V0J3Mgcm9vdCBwcm9ibGVtIHR5cGUgYW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvYmxlbSB0eXBlIGFyZSB0aGUgc2FtZVxuXHRcdFx0XHRcdC8vV2UgYWRkIHRoZSB0aWNrZXQgdG8gYW4gYXJyYXkgYW5kIHJlbW92ZSBpdCBmcm9tIHRpY2tldHMgKHNvIHdlIG5vIGxvbmdlciBoYXZlIHRvIHNlYXJjaCBpdCBlYWNoIGl0ZXJhdGlvbi4gSGVscHMgdG8gc3BlZWQgdGhpbmdzIHVwKVx0XG5cdFx0XHRcdFx0dGlja2V0Q291bnQucHVzaCh0aWNrZXRzW2pdKTtcblx0XHRcdFx0XHR0aWNrZXRzLnNwbGljZShqLDEpO1xuXHRcdFx0XHRcdC0tajtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aWNrZXRzUGVyUHJvYmxlbVR5cGUucHVzaCh0aWNrZXRDb3VudC5sZW5ndGgpOyBcblx0XHR9XG5cblx0XHQkKCcjcHJvYmxlbS10eXBlLWNhcmQnKS5odG1sKFwiPGNhbnZhcyBpZD0ncHJvYmxlbVR5cGVTb2x2ZWQnPjwvY2FudmFzPlwiKTtcblx0XHR2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ibGVtVHlwZVNvbHZlZFwiKS5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdHZhciBwcm9iVHlwZUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuXHRcdFx0dHlwZTogJ2RvdWdobnV0Jyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0ZGF0YXNldHM6IFt7XG5cdFx0XHRcdFx0ZGF0YTogdGlja2V0c1BlclByb2JsZW1UeXBlLCAvL0RhdGEgZm9yIHRoZSBwaWUgY2hhcnRcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFtcblx0XHRcdFx0XHRcdCdyZ2JhKDI1NSw5OSw5OSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSg5OSwyNTUsOTksMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoOTksOTksMjU1LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDI1NSw5OSwyNTUsMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoMjU1LDI1NSw5OSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSg5OSwyNTUsMjU1LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDI1NSwyMDAsOTksMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoMjAwLDI1NSwxNTAsMSknXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0bGFiZWxzOiBQcm9ibGVtVHlwZU5hbWVzIC8vTGFiZWxzIGZvciB0aGUgcGllIGNoYXJ0XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRsZWdlbmQ6IHtcblx0XHRcdFx0XHRwb3NpdGlvbjoncmlnaHQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWV0cmljcy9NZXRyaWNzUGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=