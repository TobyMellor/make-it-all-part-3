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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _MetricsPage = __webpack_require__(53);

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
/* 53 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY1MmFhMWU0OWFhYTI4Njg1YjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL21ldHJpY3MvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvbWV0cmljcy9NZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJUaWNrZXRNYW5hZ2VyIiwiZXhwZXJ0aXNlVHlwZU1hbmFnZXIiLCJ3aW5kb3ciLCJjYWxscyIsImFwaSIsIm1hcCIsImUiLCJ0aWNrZXRzIiwiY29tbWVudHMiLCJzdGF0dXNlcyIsInRpY2tldFN0YXR1c2VzIiwiY2FsbElkIiwiZmluZCIsImNhbGwiLCJpZCIsInRpY2tldElkIiwiZmlsdGVyIiwiX3RpY2tldHMiLCJpbmRleE9mIiwiY29tbWVudCIsIl9jYWxsIiwic3RhdHVzSWQiLCJzdGF0dXMiLCJzdGF0dXNTbHVnIiwic2x1ZyIsInRpY2tldCIsInRpY2tldElkcyIsInN0YXR1c1NsdWdzIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiX2NhbGxzIiwic3RhZmZJZCIsImV4cGVydGlzZVR5cGVTdGFmZiIsIl9hc3NpZ25lZF90b19vcGVyYXRvciIsIl9leHBlcnRpc2VfdHlwZV9zdGFmZiIsIl9zdGFmZiIsInN0YWZmSWRzIiwicmVzdWx0IiwiZm9yRWFjaCIsImdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCIsInRpY2tldFBhZ2UiLCJzdGFmZk1hbmFnZXIiLCJjdXJyZW50VXNlciIsImFzc2lnbmVkX3RvX29wZXJhdG9yIiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJzdGFmZiIsImdldFRpY2tldEFzc2lnbmVkVG8iLCJ0aWNrZXRTdGF0dXNJZCIsInRpY2tldFN0YXR1cyIsIl90aWNrZXQiLCJjb21tZW50SWQiLCJpZHMiLCJleHBlcnRpc2VUeXBlSWQiLCJleHBlcnRpc2VUeXBlcyIsImdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiY29uY2F0IiwiZ2V0VGlja2V0c1dpdGhJZEluIiwicXVlcnkiLCJwcm9wZXJ0aWVzIiwiU3RhZmZNYW5hZ2VyIiwiZGVwYXJ0bWVudHMiLCJlbXBsb3llZSIsInBlcm1pc3Npb24iLCJ2YWx1ZSIsImFjY2VzcyIsImFzRW1wbG95ZWUiLCJnZXQiLCJleHBlcnRpc2VUeXBlIiwiX3NwZWNpYWxpc21zIiwib3V0cHV0IiwicHVzaCIsIkV4cGVydGlzZVR5cGVNYW5hZ2VyIiwiX3BhcmVudCIsImV4cGVydGlzZVR5cGVJZHMiLCJfZXhwZXJ0aXNlX3R5cGUiLCJleHBlcnRpc2VUeXBlUGFyZW50IiwicGFyZW50IiwiZXhwZXJ0aXNlVHlwZVN0YWZmSWQiLCJNYW5hZ2VyIiwiZWxlbWVudHMiLCJ0b0xvd2VyQ2FzZSIsInNvbWUiLCJTdHJpbmciLCJlbCIsInByb3AiLCJpbmNsdWRlcyIsIkR5bmFtaWNQYWdlIiwic2VjdGlvblNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsIm5hdlNlbGVjdG9yIiwiZGV0YWlsU2VsZWN0b3IiLCJzcGxpdCIsImh0bWwiLCIkIiwibmF2VGV4dCIsIiR0YWJsZSIsInJlc3VsdHNDb3VudCIsImhhc0NsYXNzIiwiJHNwbGFzaFNjcmVlbiIsIiRzaG93IiwiJGhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmlyc3QiLCJ0ZXh0IiwicmVwbGFjZSIsImNsb3Nlc3QiLCJ1bmRlZmluZWQiLCJvYmplY3QiLCIkdGFibGVTZWN0aW9uIiwiJHRhYmxlSGVhZCIsIiR0YWJsZUJvZHkiLCIkbmV3Um93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJkYXRhc2V0Iiwicm93aWQiLCJ0b2dnbGVDbGFzcyIsInBhcnNlSW50IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyaW5nIiwiZWFjaCIsInRkIiwiaW5uZXJIVE1MIiwiT2JqZWN0IiwicmVzb2x2ZSIsImFwcGVuZCIsImVtcHR5Iiwic2libGluZ3MiLCJ1bndyYXAiLCJjbGljayIsImhpZGVUYWJsZVJvd0RldGFpbHMiLCJ3cmFwIiwiJHNlbGVjdCIsImRlZmF1bHRUZXh0IiwiZGVmYXVsdE9wdGlvbklkIiwicHJvcGVydHkiLCJnZXRBZGRpdGlvbmFsRGV0YWlscyIsIm9wdGlvbiIsIk9wdGlvbiIsImRpc2FibGVkIiwic2VsZWN0cGlja2VyIiwib2JqZWN0Q2FsbGJhY2siLCJzZWFyY2hLZXlzIiwicGFnZSIsImNsZWFyVGFibGUiLCJrZXkiLCJSZWdFeHAiLCJ2YWwiLCJhcHBlbmRUYWJsZVJvdyIsInVwZGF0ZVNwbGFzaFNjcmVlbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZHVyYXRpb24iLCJyZW1vdmUiLCJtc2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiSGFyZHdhcmVNYW5hZ2VyIiwiZGV2aWNlcyIsIlNldCIsInQiLCJkZXZpY2VzQnlUeXBlIiwiZGV2aWNlIiwibWFrZSIsInNlcmlhbE51bWJlciIsImQiLCJzZXJpYWxfbm8iLCJTb2Z0d2FyZU1hbmFnZXIiLCJwcm9ncmFtcyIsInByb2dyYW0iLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJ0b29sdGlwIiwiZGF0ZXRpbWVwaWNrZXIiLCJuZXdWYWx1ZSIsIiRtb2RhbCIsIm1vZGFsIiwiYXR0ciIsIm5vdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29sbGFwc2UiLCJpc1Nob3ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRJdGVtVG9QaWNrZXIiLCJwaWNrZXJFbGVtZW50IiwibmFtZSIsInZhbGlkYXRpb25UaW1lb3V0IiwiQ29tbWVudCIsImF1dGhvciIsImF1dGhvcl9pZCIsImNhbGxfaWQiLCJ0aWNrZXRfaWQiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdF9odW1hbiIsImNyZWF0ZWRBdFJlYWwiLCJjcmVhdGVkX2F0IiwiY3JlYXRlZF9hdF9yZWFsIiwiX2F1dGhvciIsImdldENhbGwiLCJnZXRUaWNrZXQiLCJDYWxsIiwidGltZSIsImNhbGxlciIsImNhbGxlcl9pZCIsIm9wZXJhdG9yIiwib3BlcmF0b3JfaWQiLCJfY2FsbGVyIiwiX29wZXJhdG9yIiwiZ2V0VGlja2V0c0Zyb21DYWxsIiwiRW1wbG95ZWUiLCJlbWFpbCIsImpvYiIsImpvYl90aXRsZSIsImRlcGFydG1lbnQiLCJwaG9uZSIsInBob25lX251bWJlciIsImV4cGVydGlzZV90eXBlcyIsInNwZWNpYWxpc21zIiwic3BlY2lhbGlzdCIsImFuYWx5c3QiLCJhZG1pbiIsIl9kZXBhcnRtZW50IiwicmVhZCIsInJlYWRvbmx5IiwiZ2V0RXhwZXJ0aXNlVHlwZXMiLCJkYXRhIiwiZGVwYXJ0bWVudF9pZCIsIkV4cGVydGlzZVR5cGUiLCJwYXJlbnRfaWQiLCJnZXRFeHBlcnRpc2VUeXBlIiwiX2NoaWxkcmVuIiwiRXhwZXJ0aXNlVHlwZVN0YWZmIiwic3RhZmZfaWQiLCJleHBlcnRpc2VfdHlwZV9pZCIsImV4cGVydGlzZV90eXBlIiwiU3RhdHVzIiwiZ2V0VGlja2V0c1dpdGhTbHVnIiwiVGlja2V0Iiwic3RhdHVzSGlzdG9yeSIsInN0YXR1c19oaXN0b3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvbHV0aW9uIiwic29sdXRpb25faWQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0X2h1bWFuIiwidXBkYXRlZEF0UmVhbCIsInVwZGF0ZWRfYXQiLCJleHBlcnRpc2VfdHlwZV9zdGFmZl9pZCIsImFzc2lnbmVkVG9PcGVyYXRvcklkIiwiYXNzaWduZWRfdG9fb3BlcmF0b3JfaWQiLCJ1cGRhdGVkX2F0X3JlYWwiLCJnZXRDYWxsc0J5VGlja2V0SWQiLCJnZXRTdGF0dXMiLCJfc3RhdHVzIiwiZ2V0U3RhdHVzSGlzdG9yeSIsIl9zdGF0dXNfaGlzdG9yeSIsImdldERldmljZXMiLCJfZGV2aWNlcyIsImdldFByb2dyYW1zIiwiX3Byb2dyYW1zIiwiZ2V0Q29tbWVudHNCeUlkcyIsIl9jb21tZW50cyIsImdldENvbW1lbnQiLCJfc29sdXRpb24iLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmYiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJEZXZpY2UiLCJnZXRUaWNrZXRzQnlUaWNrZXRJRHMiLCJBcnJheSIsIlByb2dyYW0iLCJvcGVyYXRpbmdfc3lzdGVtIiwiZXhwaXJ5X2RhdGUiLCJUaWNrZXRTdGF0dXMiLCJzdGF0dXNfaWQiLCJBUEkiLCJ0aWNrZXRfc3RhdHVzZXMiLCJtZXRyaWNzUGFnZSIsImluaXQiLCJub25lUmVzdWx0c1RleHQiLCJjaGFuZ2UiLCJzdGFmZkRyb3Bkb3duQ2hhbmdlIiwiaHJlZiIsInRvU3RyaW5nIiwiTWV0cmljc1BhZ2UiLCJ0aWNrZXRNYW5hZ2VyIiwic29mdHdhcmVNYW5hZ2VyIiwiaGFyZHdhcmVNYW5hZ2VyIiwibG9nZ2VkSW5Vc2VyIiwicGFnZUxvYWQiLCJpc0FuYWx5c3QiLCJwb3B1bGF0ZVN0YWZmTmFtZVNlYXJjaCIsInNob3dTdGF0cyIsIm9wZW5TdGFmZkluZm8iLCJzaG93aW5nR2xvYmFsSW5mbyIsIm5vT2ZTb2Z0d2FyZSIsIm5vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXMiLCJwIiwibm9PZkhhcmR3YXJlIiwibm9PZkhhcmR3YXJlV2l0aElzc3VlcyIsInNvbHZlZFRpY2tldHMiLCJ0b3RhbFRpbWUiLCJ0b3RhbFJlcGxpZXMiLCJ0aWNrZXRTdGF0dXNIaXN0b3J5IiwiZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkIiwicmVzb2x2ZWRUaWNrZXRTdGF0dXMiLCJ0aWNrZXRDcmVhdGVkIiwibGFzdFJlc29sdmVkIiwidGlja2V0UmVzb2x2ZWQiLCJ0aW1lRGlmZiIsImFicyIsImdldFRpbWUiLCJkaWZmRGF5cyIsImNlaWwiLCJjcmVhdGVMaW5lR3JhcGgiLCJjcmVhdGVQaWVDaGFydCIsImNzcyIsInN0YWZmTWVtYmVycyIsImluZGV4Iiwic2VsZWN0ZWRJbmRleCIsIk51bWJlciIsIm5vdyIsIm1vbnRoTmFtZXMiLCJtb250aHMiLCJjdXJyZW50TW9udGgiLCJyZXZlcnNlIiwidGlja2V0c09wZW5lZCIsInRpY2tldHNVbnJlc29sdmVkIiwiaiIsIm9wZW5lZCIsInVucmVzb2x2ZWQiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJvcFN0YXRDaGFydCIsIkNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwicm9vdFByb2JsZW1UeXBlcyIsImdldFJvb3RFeHBlcnRpc2VUeXBlcyIsIlByb2JsZW1UeXBlTmFtZXMiLCJ0aWNrZXRzUGVyUHJvYmxlbVR5cGUiLCJ0aWNrZXRDb3VudCIsInByb2JUeXBlQ2hhaW4iLCJnZXRFeHBlcnRpc2VUeXBlQ2hhaW4iLCJyb290UHJvYmxlbVR5cGUiLCJwcm9iVHlwZUNoYXJ0IiwibGVnZW5kIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2NTJhYTFlNDlhYWEyODY4NWIxIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBDYWxsIGZyb20gXCIuL0NhbGxcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vU3RhdHVzXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldFwiO1xuaW1wb3J0IFRpY2tldFN0YXR1cyBmcm9tIFwiLi9UaWNrZXRTdGF0dXNcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldE1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3IgcGFyc2luZyB0aGUgQUpBWCByZXF1ZXN0IGNvbnRhaW5pbmcgc3RhdHVzZXNcbiAqIGFuZCB0aWNrZXRzIGFuZCBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogVGlja2V0TWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSB3aW5kb3cuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgfHwgbmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCk7XG5cblx0XHR0aGlzLmNhbGxzICAgID0gYXBpLmNhbGxzLm1hcChlID0+IG5ldyBDYWxsKGUpKTtcblx0XHR0aGlzLnRpY2tldHMgID0gYXBpLnRpY2tldHMubWFwKGUgPT4gbmV3IFRpY2tldChlKSk7XG5cdFx0dGhpcy5jb21tZW50cyA9IGFwaS5jb21tZW50cy5tYXAoZSA9PiBuZXcgQ29tbWVudChlKSk7XG5cdFx0dGhpcy5zdGF0dXNlcyA9IGFwaS5zdGF0dXNlcy5tYXAoZSA9PiBuZXcgU3RhdHVzKGUpKTtcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzID0gYXBpLnRpY2tldFN0YXR1c2VzLm1hcChlID0+IG5ldyBUaWNrZXRTdGF0dXMoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY2FsbCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNhbGwgdGFibGVcblx0ICogQHJldHVybiB7Q2FsbH0gc2luZ2xlIGluc3RhbmNlIG9mIENhbGwgd2l0aCBjYWxsSWRcblx0ICovXG5cdGdldENhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmluZChjYWxsID0+IGNhbGwuaWQgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGxzIHJlZmVyZW5jaW5nIGEgc3BlY2lmaWMgdGlja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0Q2FsbHNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbHMuZmlsdGVyKGNhbGwgPT4gY2FsbC5fdGlja2V0cy5pbmRleE9mKHRpY2tldElkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG5vdGVzIGZvciBhIGNhbGxcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsTm90ZXNCeUNhbGxJZChjYWxsSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5fY2FsbCA9PT0gY2FsbElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIElEXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gc3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBTdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7U3RhdHVzfSBzaW5nbGUgaW5zdGFuY2Ugb2YgU3RhdHVzIHdpdGggSURcblx0ICovXG5cdGdldFN0YXR1cyhzdGF0dXNJZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5pZCA9PT0gc3RhdHVzSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBzdGF0dXMgd2l0aCB0aGUgc2x1Z1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIHN0YXR1c1NsdWdcblx0ICovXG5cdGdldFN0YXR1c0J5U2x1ZyhzdGF0dXNTbHVnKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzZXMuZmluZChzdGF0dXMgPT4gc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIHRpY2tldCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXR9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXQgd2l0aCB0aWNrZXRJZFxuXHQgKi9cblx0Z2V0VGlja2V0KHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maW5kKHRpY2tldCA9PiB0aWNrZXQuaWQgPT09IHRpY2tldElkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIGEgc3RhdHVzXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXNTbHVnIHJlcHJlc2VudGluZyBzbHVnIGNvbHVtbiBvZiBzdGF0dXMgdGFibGVcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgaW4gYSBTdGF0dXNcblx0ICovXG5cdGdldFRpY2tldHNXaXRoSWRJbih0aWNrZXRJZHMpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0SWRzLmluZGV4T2YodGlja2V0LmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuc3RhdHVzLnNsdWcgPT09IHN0YXR1c1NsdWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXQgY3VycmVudGx5IGluIG9uZSBvZiBtYW55IGdpdmVuIHN0YXR1c2VzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHN0YXR1c1NsdWdzIEFycmF5IG9mIFN0cmluZ3MncyByZXByZXNlbnRpbmcgc3RhdHVzIHNsdWdzXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIG9uZSBvZiBtYW55IGdpdmVuIFN0YXR1cydzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aFNsdWdJbihzdGF0dXNTbHVncykge1xuXHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRzLnNsaWNlKDApO1xuXG5cdFx0Zm9yIChsZXQgaSA9IHRpY2tldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKHRpY2tldHNbaV0uc3RhdHVzLnNsdWcpID09PSAtMSkgdGlja2V0cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRpY2tldHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldHMgcmVmZXJlbmNlZCBpbiBhIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHJlZmVyZW5jZWQgaW4gYSBDYWxsXG5cdCAqL1xuXHRnZXRUaWNrZXRzRnJvbUNhbGwoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5fY2FsbHMuaW5kZXhPZihjYWxsSWQpID4gLTEpO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZVN0YWZmID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5leHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkIHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzKHN0YWZmSWRzKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdFx0dGlja2V0cyAgICAgICAgICAgID0gdGhpcy50aWNrZXRzLFxuXHRcdFx0cmVzdWx0ICAgICAgICAgICAgID0ge307XG5cblx0XHRzdGFmZklkcy5mb3JFYWNoKHN0YWZmSWQgPT4ge1xuXHRcdFx0cmVzdWx0W3N0YWZmSWRdID0gdGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRpY2tldC5fYXNzaWduZWRfdG9fb3BlcmF0b3IgPT09IHN0YWZmSWRcblx0XHRcdFx0XHRcdHx8IGV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGUgPT4gZS5pZCA9PT0gdGlja2V0Ll9leHBlcnRpc2VfdHlwZV9zdGFmZikuX3N0YWZmID09PSBzdGFmZklkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0TXlUaWNrZXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aWNrZXRQYWdlLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wZXJhdG9yIG9yIHNwZWNpYWxpc3QgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0by5cblx0ICpcblx0ICogSWYgYW4gb3BlcmF0b3IgaXMgbm90IGFzc2lnbmVkLCB0aGVuIHRoZSBFeHBlcnRpc2VUeXBlU3RhZmYgd2lsbFxuXHQgKiBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0XG5cdCAqIEByZXR1cm4ge0VtcGxveWVlfSBFbXBsb3llZSB0aGUgdGlja2V0IGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkge1xuXHRcdGlmICh0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yICE9PSBudWxsKSByZXR1cm4gdGlja2V0LmFzc2lnbmVkX3RvX29wZXJhdG9yO1xuXG5cdFx0cmV0dXJuIHRpY2tldC5leHBlcnRpc2VfdHlwZV9zdGFmZi5zdGFmZjsgLy8gb25seSB1c2UgZXhwZXJ0aXNlX3R5cGVfc3RhZmYgaWYgdGhlcmUgaXMgbm8gYXNzaWduZWQgb3BlcmF0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0aWNrZXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cblx0ICogdXNlci5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBJZiBhc3NpZ25lZCB0byBzZWxmXG5cdCAqL1xuXHRpc1RpY2tldEFzc2lnbmVkVG9TZWxmKHRpY2tldCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KSA9PT0gdGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKTsgXG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0aWNrZXQgc3RhdHVzIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0U3RhdHVzSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXRfc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1RpY2tldFN0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFRpY2tldFN0YXR1cyB3aXRoIHRpY2tldFN0YXR1c0lkXG5cdCAqL1xuXHRnZXRUaWNrZXRTdGF0dXModGlja2V0U3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRTdGF0dXNlcy5maW5kKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuaWQgPT09IHRpY2tldFN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1c2VzIGZvciBhIHRpY2tldFxuXHQgKlxuXHQgKiBAcFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldElkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmlsdGVyKHRpY2tldFN0YXR1cyA9PiB0aWNrZXRTdGF0dXMuX3RpY2tldCA9PT0gdGlja2V0SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY29tbWVudCB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNvbW1lbnRJZCByZXByZXNlbnRpbmcgaWQgY29sdW1uIG9mIGNvbW1lbnQgdGFibGVcblx0ICogQHJldHVybiB7Q29tbWVudH0gc2luZ2xlIGluc3RhbmNlIG9mIENvbW1lbnQgd2l0aCBjb21tZW50SWRcblx0ICovXG5cdGdldENvbW1lbnQoY29tbWVudElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IGNvbW1lbnRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBjb21tZW50c1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgQXJyYXkgb2YgQ29tbWVudCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENvbW1lbnRzQnlJZHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmlsdGVyKGNvbW1lbnQgPT4gaWRzLmluZGV4T2YoY29tbWVudC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB0aWNrZXRzIGFzc29jaWF0ZWQgd2l0aCBhbiBleHBlcnRpc2UgdHlwZSBzdGFmZlxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSBzdGFmZiB0byBmaW5kIHRpY2tldHMgZm9yXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQWxsIG1hdGNoaW5nIHRpY2tldHNcblx0ICovXG5cdGdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHR0aWNrZXRJZHMgICAgICA9IFtdLmNvbmNhdCguLi5leHBlcnRpc2VUeXBlcy5tYXAoZSA9PiBlLnRpY2tldHMpKTsgLy8gbW92ZSBhbGwgb2YgZXhwZXJ0aXNlVHlwZXNbaV0udGlja2V0cyBpbnRvIGEgc2luZ2xlIGFycmF5XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggdGlja2V0cyBvbiBhIHByb3BlcnR5IGZvciBhIHByb3ZpZGVkIHNlYXJjaCBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXMgQXJyYXkgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgZWxlbWVudHMgcHJvcGVydHkgbmFtZXMgdG8gc2VhcmNoIHRocm91Z2hcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXMgc2F0aXNmeWluZyB0aGUgc2VhcmNoIGNvbmRpdGlvblxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnRpY2tldHMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29sbGVjdGlvbiBvZiB0aWNrZXRzIGJ5IHRoZWlyIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBpZHMgVGhlIElEcyBvZiB0aGUgcmVxdWVzdGVkIHRpY2tldHMgXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlUaWNrZXRJRHMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IGlkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldE1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL0VtcGxveWVlXCI7XG5cbi8qKlxuICogU3RhZmZNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YWZmXG4gKiBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyBjbGFzc2VzLiBcbiAqIENvbnRhaW5zIGFsbCBmdW5jdGlvbnMgdG8gcmV0dXJuIGFuZCBzZWFyY2ggdGhlIGRhdGEuXG4gKlxuICogU3RhZmZNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZmZNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YWZmICAgICAgID0gYXBpLnN0YWZmLm1hcChlID0+IG5ldyBFbXBsb3llZShlKSk7XG5cdFx0dGhpcy5kZXBhcnRtZW50cyA9IGFwaS5kZXBhcnRtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGVtcGxveWVlIHdpdGggdGhlIGdpdmVuIElEIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG51bWJlciBvZiB0aGUgZW1wbG95ZWUgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtFbXBsb3llZX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbmQoZW1wbG95ZWUgPT4gZW1wbG95ZWUuaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZW1wbG95ZWVzIHdpdGggYSBzcGVjaWZpYyB2YWx1ZSBvZiBhIHBlcm1pc3Npb25cblx0ICpcblx0ICogQHBhcmFtIHBlcm1pc3Npb24gVGhlIHBlcm1pc3Npb24gdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBwZXJtaXNzaW9uICh0cnVlL2ZhbHNlKSBmb3Igd2hldGhlciB0aGUgcGVybWlzc2lvbiBpcyBncmFudGVkXG5cdCAqL1xuXHRnZXRFbXBsb3llZXNXaXRoUGVybWlzc2lvbihwZXJtaXNzaW9uLCB2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLnN0YWZmLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5hY2Nlc3NbcGVybWlzc2lvbl0gPT0gdmFsdWUpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICpcblx0ICogQHBhcmFtIGFzRW1wbG95ZWUgbWV0aG9kIHJldHVybnMgSUQgYnkgZGVmYXVsdCBvciBFbXBsb3llZSBpZiB0cnV0aHlcblx0ICovXG5cdGN1cnJlbnRVc2VyKGFzRW1wbG95ZWUgPSBmYWxzZSkge1xuXHRcdGxldCBpZCA9IDE7IC8vIFRPRE86IGdldCB1c2VyIGZyb20gV1BcblxuXHRcdC8vIEdldCBFbXBsb3llZSB3aXRoIElEXG5cdFx0aWYgKGFzRW1wbG95ZWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChpZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc3BlY2lhbGlzdHMgd2hvIHNwZWNpYWxpc2UgaW4gYSBjZXJ0YWluIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZXhwZXJ0aXNlVHlwZUlkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgdG8gZmluZCBlbXBsb3llZXMgZm9yXG5cdCAqL1xuXHRnZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlKSB7XG5cdFx0bGV0IHN0YWZmICA9IHRoaXMuc3RhZmYsXG5cdFx0ICAgIGZpbHRlciA9IGlkID0+IGVtcGxveWVlID0+IGVtcGxveWVlLl9zcGVjaWFsaXNtcy5pbmRleE9mKGlkKSA+IC0xO1xuXG5cdFx0aWYgKHR5cGVvZiBleHBlcnRpc2VUeXBlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRsZXQgb3V0cHV0ID0gW107XG5cblx0XHRcdGZvciAobGV0IGlkIG9mIGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RhZmYuZmlsdGVyKGZpbHRlcihpZCkpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0YWZmLmZpbHRlcihmaWx0ZXIoZXhwZXJ0aXNlVHlwZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIGVtcGxveWVlIGhhcyB0aGUgcGFzc2VkIHByb2JsZW0gdHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGluc3BlY3Rcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGxvb2sgZm9yXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBlbXBsb3llZSBoYXMgdGhlIHByb2JsZW0gdHlwZSBhcyBhIHNwZWNpYWxpc21cblx0ICovXG5cdGhhc1NwZWNpYWxpc20oZW1wbG95ZWUsIGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihleHBlcnRpc2VUeXBlSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIGFsbCBlbXBsb3llZXMgZm9yIHRoZSBnaXZlbiBxdWVyeVxuXHQgKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm5zIEFsbCBtYXRjaGluZyByZXN1bHRzIHRvIHRoZSBxdWVyeVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLnN0YWZmLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9TdGFmZk1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGUgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVTdGFmZiBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlU3RhZmZcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBleHBlcnRpc2UgdHlwZXMgYWNyb3NzIHRoZSBzeXN0ZW0uXG4gKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBhcGkuZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGUoZSkpO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gYXBpLmV4cGVydGlzZVR5cGVTdGFmZi5tYXAoZSA9PiBuZXcgRXhwZXJ0aXNlVHlwZVN0YWZmKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYWxsIEV4cGVydGlzZVR5cGUncyB3aXRoIG5vIHBhcmVudCAoaW4gdGhlIGZpcnN0IGNvbHVtbilcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRSb290RXhwZXJ0aXNlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZS5fcGFyZW50ID09IG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZX1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGUoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmluZChleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuaWQgPT09IGV4cGVydGlzZVR5cGVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IEV4cGVydGlzZVR5cGVzIHdpdGggSURzIGZyb20gYW4gQXJyYXkgb2YgSURzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGV4cGVydGlzZVR5cGVJZHMgQXJyYXkgb2YgSW50ZWdlcnMgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWQnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZXMgc2F0aXNmeWluZyB0aGUgY29uZGl0aW9uXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlcyhleHBlcnRpc2VUeXBlSWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZXMuZmlsdGVyKGV4cGVydGlzZVR5cGUgPT4gZXhwZXJ0aXNlVHlwZUlkcy5pbmRleE9mKGV4cGVydGlzZVR5cGUuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29ycmVzcG9uZGluZyBFeHBlcnRpc2VUeXBlU3RhZmYncyBsaW5raW5nIHRvIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGUuaWRcblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmlsdGVyKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcmRlcmVkIGFycmF5IG9mIHBhcmVudHMgb2YgYW4gRXhwZXJ0aXNlVHlwZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IGV4cGVydGlzZVR5cGUgc3RhcnRpbmcgRXhwZXJ0aXNlVHlwZSB0byBmaW5kIHBhcmVudHMgZnJvbVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgRXhwZXJ0aXNlVHlwZSBwYXJlbnRzLCBhbmQgdGhlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGVcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKSB7XG5cdFx0dmFyIGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlLFxuXHRcdFx0ZXhwZXJ0aXNlVHlwZXMgICAgICA9IFtleHBlcnRpc2VUeXBlUGFyZW50XTtcblxuXHRcdHdoaWxlIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRleHBlcnRpc2VUeXBlcy5wdXNoKGV4cGVydGlzZVR5cGVQYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBleHBlcnRpc2VUeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCB3aXRoIGFuIGV4YWN0XG5cdCAqIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgYW5kIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGUgSUQgcGFpclxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZVxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YWZmSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmZcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBudWxsLCBvciB0aGUgcmVjb3JkIGRlc2lyZWRcblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZkJ5U3RhZmZJZChleHBlcnRpc2VUeXBlSWQsIHN0YWZmSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlcnRpc2VUeXBlU3RhZmYuZmluZChleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9zdGFmZiA9PT0gc3RhZmZJZCAmJiBleHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHNwZWNpZmljIEV4cGVydGlzZVR5cGVTdGFmZiBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGV4cGVydGlzZVR5cGVTdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuaWRcblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5pZCA9PT0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQpIHx8IG51bGw7XG5cdH1cblxuXHRzZWFyY2gocXVlcnksIHByb3BlcnRpZXMpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2VhcmNoKHRoaXMuZXhwZXJ0aXNlVHlwZXMsIHF1ZXJ5LCBwcm9wZXJ0aWVzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXIuanMiLCIvKipcbiAqIE1hbmFnZXJcbiAqXG4gKiBBYnN0cmFjdCBjbGFzcyBleHRlbmRlZCBieSBhbGwgbWFuYWdlcnMsXG4gKiBjb250YWlucyBtZXRob2RzIHRoYXQgbWF5IGJlIHVzZWZ1bCB0byB0aGUgbWFuYWdlcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2VhcmNoIGFycmF5IG9mIGVsZW1lbnRzIGZvciBxdWVyeSBpbiBnaXZlbiBwcm9wZXJ0eSBuYW1lc1xuXHQgKiBcblx0ICogQHBhcmFtIGVsZW1lbnRzIEFycmF5IG9mIG9iamVjdHMgdG8gYmUgc2VhcmNoZWQgdGhyb3VnaFxuXHQgKiBAcGFyYW0gcXVlcnkgQ2FzZSBpbnNlbnNpdGl2ZSBzdHJpbmcgdG8gc2VhcmNoIGVsZW1lbnRzXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqL1xuXHRzZWFyY2goZWxlbWVudHMgPSBbXSwgcXVlcnkgPSBcIlwiLCBwcm9wZXJ0aWVzID0gW10pIHtcblx0XHRxdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7IC8vIE5vcm1hbGlzZSBxdWVyeSAoYW5kIHByb3BlcnRpZXMgaW5kaXZpZHVhbGx5IGxhdGVyKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRzLmZpbHRlcihlbCA9PiB7IC8vIEdldCBhbGwgZWxlbWVudHNcblx0XHRcdHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcCA9PiB7IC8vIENoZWNrIHByb3BlcnRpZXMgdW50aWwgbWF0Y2ggaXMgZm91bmRcblx0XHRcdFx0aWYgKFN0cmluZyhlbFtwcm9wXSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHJldHVybiB0cnVlOyAvLyBEZXRlcm1pbmUgaWYgcHJvcGVydHkgaXMgYSBtYXRjaCBmb3IgcXVlcnlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvTWFuYWdlci5qcyIsIi8qKlxuICogRHluYW1pY1BhZ2VcbiAqXG4gKiBFeHRlbmRlZCBieSBldmVyeSBwYWdlLCBlLmcuIFRpY2tldFBhZ2UuXG4gKiBDb250YWlucyBmdW5jdGlvbnMgdGhhdCBhcmUgcmVwZWF0ZWQgb2Z0ZW4gYW1vbmdcbiAqIHBhZ2VzLCBzdWNoIGFzIHVwZGF0aW5nIHRhYmxlcyBvciB1cGRhdGluZyB0aGUgbmF2YmFyXG4gKi9cbmNsYXNzIER5bmFtaWNQYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBhIHBhZ2UgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yc1xuXHQgKiB0byBkZWZpbmUgdGhlIGJvdW5kcyBvZiB0aGUgcGFnZSwgaW4gY2FzZXMgd2hlcmUgdGhpcyBEeW5hbWljUGFnZVxuXHQgKiBpcyBub3QgdGhlIG9ubHkgcGFnZSBvbiB0aGUgc2NyZWVuLCBzdWNoIGFzIGlmIGEgcGFnZSBpcyBiZWluZ1xuXHQgKiBkaXNwbGF5ZWQgaW4gYSBtb2RhbC5cblx0ICpcblx0ICogTm90IHByb3ZpZGluZyBhbnkgc2VsZWN0b3JzIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGVcblx0ICogbWFpbiBzZWxlY3RvcnMgZm9yIHRoZSBlbnRpcmUgc2NyZWVuLCBzdWNoIHRoYXRcblx0ICogdGhpcyBwYWdlIGJlY29tZXMgdGhlIG1haW4gcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBzZWN0aW9uU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgbWFpbiBzZWN0aW9uIGNvbnRhaW5pbmcgdGFibGUgdmlld1xuXHQgKiBAcGFyYW0gdGFibGVTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHRhYmxlIHdpdGhpbiBwcmV2aW91cyBzZWN0aW9uXG5cdCAqIEBwYXJhbSBuYXZTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIG5hdmlnYXRpb24gYmFyIHNob3duIGF0IHRvcCBvZiBzZWN0aW9uXG5cdCAqIEBwYXJhbSBkZXRhaWxTZWxlY3RvciBTZWxlY3RvciBzdHJpbmcgZm9yIHNpbmdsZSB2aWV3IGRldGFpbCBzaG93biBmb3IgYW4gaW5kaXZpZHVhbCByb3dcblx0ICovXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzZWN0aW9uU2VsZWN0b3IgPSBcIiNsaXN0LXZpZXdcIixcblx0XHR0YWJsZVNlbGVjdG9yID0gXCIjdGFibGUtc2VjdGlvblwiLFxuXHRcdG5hdlNlbGVjdG9yLFxuXHRcdGRldGFpbFNlbGVjdG9yXG5cdH0gPSB7fSkge1xuXHRcdHRoaXMuc2VjdGlvblNlbGVjdG9yID0gc2VjdGlvblNlbGVjdG9yO1xuXHRcdHRoaXMudGFibGVTZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XG5cdFx0Ly8gU2V0IG5hdmlnYXRpb24gc2VsZWN0b3IgdG8gZmlyc3QgY29tcG9uZW50IG9mIHNlY3Rpb24gc2VsZWN0b3Igd2l0aCDigJgtbmF24oCZIGFwcGVuZGVkLCBvdGhlcndpc2UgZGVmYXVsdCBDU1Mgc2VsZWN0b3Jcblx0XHR0aGlzLm5hdlNlbGVjdG9yID0gbmF2U2VsZWN0b3IgPyBuYXZTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLW5hdlwiIDogXCIuc2lkZS1uYXYtYmFyLW5lc3RlZFwiKTtcblx0XHR0aGlzLmRldGFpbFNlbGVjdG9yID0gZGV0YWlsU2VsZWN0b3IgPyBkZXRhaWxTZWxlY3RvciA6IChzZWN0aW9uU2VsZWN0b3IgIT09IFwiI2xpc3Qtdmlld1wiID8gc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiIFwiKVswXSArIFwiLWRldGFpbFwiIDogXCIjc2luZ2xlLXZpZXdcIik7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aXRsZSBiYXIgb2YgdGhlIHNpbmdsZSB2aWV3IHRvIHRoZSBnaXZlbiBzdHJpbmdcblx0ICogQ0FVVElPTjogRG9lcyBub3QgcGVyZm9ybSBlc2NhcGluZyBvZiBpbnB1dCBzdHJpbmcsIGRvIG5vdCBwYXNzXG5cdCAqIHVzZXIgY29udGVudCB0byB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIGh0bWwgSFRNTCB0byBzZXQgdGhlIHNpbmdsZSB2aWV3IHRpdGxlIHRvXG5cdCAqL1xuXHR1cGRhdGVTaW5nbGVWaWV3TmF2YmFyKGh0bWwpIHtcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoJy50b3AtbmF2IGg0JykuaHRtbChodG1sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgXCJMb2FkaW5n4oCmXCIgc3BsYXNoIHNjcmVlbiBpZiBpdCdzIHNob3duXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgXCJObyBSZXN1bHRz4oCmXCIgc3BsYXNoIHNjcmVlblxuXHQgKiBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuXHQgKlxuXHQgKiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciB1c2luZyBcImFwcGVuZFRhYmxlXCJcblx0ICovXG5cdHVwZGF0ZVNwbGFzaFNjcmVlbihuYXZUZXh0ID0gbnVsbCkge1xuXHRcdC8vIEdldCB0YWJsZSBlbGVtZW50IHRvIGluc3BlY3QgY29udGVudHNcblx0XHR2YXIgJHRhYmxlID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdFx0XHQvLyBHZXQgbnVtYmVyIG9mIHJlc3VsdHMgd2l0aGluIHRhYmxlIGN1cnJlbnRseSBiZWluZyBzaG93blxuXHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlIEhUTUxcblx0XHRcdFx0Ly8gc2luY2Ugc29tZSB0YWJsZSByb3dzIG1heSBiZSBoaWRkZW4sIHdoaWNoIG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gZGlzY291bnRlZCBmcm9tIHRoZSB0b3RhbCBjb3VudC5cblx0XHQgICAgcmVzdWx0c0NvdW50ID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRyJykuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmhhc0NsYXNzKFwicm93LWhpZGRlblwiKSkubGVuZ3RoLFxuXHRcdFx0XHQvLyBHZXQgc3BsYXNoIHNjcmVlbiBlbGVtZW50IHdoaWNoIG1heSBiZSBiZWluZyBzaG93biBpbnN0ZWFkIG9mIHRhYmxlXG5cdFx0ICAgICRzcGxhc2hTY3JlZW4gPSAkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlcmUgYXJlIHJlc3VsdHMsIHRoZSBzcGxhc2ggc2NyZWVuIG9yIHRhYmxlIG5lZWRzIHRvIGJlIHNob3duXG5cdFx0Ly8gYW5kIHRoZSBvdGhlciBzd2FwcGVkIG91dCB1c2luZyBDU1Ncblx0XHR2YXIgWyRzaG93LCAkaGlkZV0gPSByZXN1bHRzQ291bnQgPyBbJHRhYmxlLCAkc3BsYXNoU2NyZWVuXSA6IFskc3BsYXNoU2NyZWVuLCAkdGFibGVdO1xuXHRcdCRoaWRlLmFkZENsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXHRcdCRzaG93LnJlbW92ZUNsYXNzKFwiYmxvY2staGlkZGVuXCIpO1xuXG5cdFx0Ly8gVGhlIG1haW4gdG9wIGJhciBmb3IgdGhlIGxpc3QgdmlldyBjb250YWlucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHNob3duIGluIHRoZSB0YWJsZVxuXHRcdGlmICghbmF2VGV4dCkge1xuXHRcdFx0Ly8gU2V0IG5hdmJhciB0ZXh0IGFzIG51bWJlciBvZiBpdGVtcyBpbiB0YWJsZSB0aGVuIGFwcGVuZCBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsdGVyXG5cdFx0XHRuYXZUZXh0ID0gcmVzdWx0c0NvdW50ICsgXCIgXCIgKyAkKHRoaXMubmF2U2VsZWN0b3IpLmZpbmQoXCJsaS5hY3RpdmVcIikuZmlyc3QoKS50ZXh0KCkucmVwbGFjZShcIkFsbCBcIiwgXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdW5hYmxlIHRvIG9idGFpbiByb3dzIGNvdW50LCBzaG93IFwiTG9hZGluZ+KAplwiXG5cdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuY2xvc2VzdChcInNlY3Rpb25cIikuZmluZChcIi50b3AtbmF2IGg0XCIpLnRleHQocmVzdWx0c0NvdW50ICE9PSB1bmRlZmluZWQgPyBuYXZUZXh0IDogXCJMb2FkaW5n4oCmXCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSByb3cgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqIHVzaW5nIGRhdGEgZnJvbSBcIm9iamVjdFwiLlxuXHQgKlxuXHQgKiBUaGUgcHJvcGVydHkgbmFtZXMgc2hvdWxkIGNvcnJlc3BvbmQgd2l0aCB0aGUgXCJzbHVnXCJcblx0ICogYXR0cmlidXRlIGluIHRhYmxlIGhlYWRlci5cblx0ICpcblx0ICogTk9URTogVGhpcyBhc3N1bWVzIHRoZSBvYmplY3QgaGFzIGFuIElEIGF0dHJpYnV0ZS4gSW5jbHVkZSBpdFxuXHQgKiBldmVuIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNob3cgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBvYmplY3QgLSBUaGUgZGF0YSB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGVcblx0ICogc3BsYXNoc2NyZWVuIG9uIHlvdXIgcGFnZVxuXHQgKi9cblx0YXBwZW5kVGFibGVSb3cob2JqZWN0KSB7XG5cdFx0dmFyICR0YWJsZVNlY3Rpb24gPSAkKHRoaXMudGFibGVTZWxlY3RvciksXG5cdFx0ICAgICR0YWJsZUhlYWQgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRoZWFkIHRyJyksXG5cdFx0ICAgICR0YWJsZUJvZHkgICAgPSAkdGFibGVTZWN0aW9uLmZpbmQoJ3RhYmxlIHRib2R5JyksXG5cdFx0ICAgICRuZXdSb3cgICAgICAgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XG5cblx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgcm93IHR3aWNlXG5cdFx0aWYgKCR0YWJsZUJvZHkuY2hpbGRyZW4oXCJbZGF0YS1yb3dpZD1cXFwiXCIgKyBvYmplY3QuaWQgKyBcIlxcXCJdXCIpLmxlbmd0aCA+IDApIHJldHVybjtcblxuXHRcdC8vIFNldCBJRCBvbiByb3cgdG8gcmVmZXJlbmNlIGxhdGVyXG5cdFx0JG5ld1Jvd1swXS5kYXRhc2V0LnJvd2lkID0gb2JqZWN0LmlkO1xuXHRcdCRuZXdSb3cudG9nZ2xlQ2xhc3MoXCJoaWdobGlnaHRcIiwgb2JqZWN0LmlkID09IHBhcnNlSW50KGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cblx0XHQkdGFibGVIZWFkLmNoaWxkcmVuKCd0aCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2x1ZyA9IHRoaXMuZGF0YXNldC5zbHVnLCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuXHRcdFx0aWYgKHNsdWcgPT09ICdleWUnKSB7IC8vIHRoZSBvbi1ob3ZlciBleWUgaW52aXNpYmxlIHJvd1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+Jztcblx0XHRcdH0gZWxzZSBpZiAoc2x1ZyAmJiBzbHVnLmluY2x1ZGVzKFwiYWNjZXNzXCIpKSB7XG5cdFx0XHRcdC8vIEJvb2xlYW4gdmFsdWUgc3VwcG9ydFxuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpID8gdGhpcy5pbm5lckhUTUwgOiBcIsK3XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZC5pbm5lckhUTUwgPSBPYmplY3QucmVzb2x2ZShzbHVnLCBvYmplY3QpICE9PSB1bmRlZmluZWQgPyBvYmplY3Rbc2x1Z10gOiBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkbmV3Um93LmFwcGVuZCh0ZCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JHRhYmxlQm9keS5hcHBlbmQoJG5ld1Jvdyk7XG5cblx0XHRyZXR1cm4gJG5ld1Jvd1swXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgdGhlIGRhdGEgaW4gdGhlIHRhYmxlIGJvZHkgd2l0aGluICN0YWJsZS1zZWN0aW9uXG5cdCAqL1xuXHRjbGVhclRhYmxlKCkge1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBTaG93IGRldGFpbCBwYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIHRhYmxlIHJvdyB0byBiZSBzaG93biBpbiB0aGUgc2luZ2xlIHZpZXdcblx0ICovXG5cdHNob3dUYWJsZVJvd0RldGFpbHMoaWQgPSBudWxsKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBjaGVjayBmb3IgbnVsbCBhcyBubyByb3dzIHdpbGwgbWF0Y2ggaWYgbm8gSUQgcGFzc2VkXG5cdFx0Ly8gLnNpYmxpbmdzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmIHNvIGNhbiBiZSBjaGFpbmVkIGFmdGVyIGZpbmRpbmcgaGlnaGxpZ2h0IHJvdyBmaXJzdFxuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikuZmlsdGVyKChpLCBlbCkgPT4gZWwuZGF0YXNldC5yb3dpZCA9PSBpZCkuYWRkQ2xhc3MoXCJoaWdobGlnaHRcIikuZmlyc3QoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuXHRcdFxuXHRcdC8vIE5vIG5lZWQgdG8gc2V0IHN0eWxlIHVzaW5nIEpTIGhlcmUsIENTUyBoYW5kbGVzIGZsZXhcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLnVud3JhcChcImRpdlwiKVxuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uIG9uIGhpZGVcblx0XHRcdC5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJjbG9zZVxcXCJdXCIpLmNsaWNrKCgpID0+IHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpKTtcblx0XHRcblx0XHRpZiAoaWQgPiAtMSkgbG9jYXRpb24uaGFzaCA9IHBhcnNlSW50KGlkKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEhpZGUgZGV0YWlsIHBhZ2Ugc2hvd24gd2l0aCBzaG93RGV0YWlsXG5cdCAqL1xuXHRoaWRlVGFibGVSb3dEZXRhaWxzKCkge1xuXHRcdC8vIERlc2VsZWN0IGFsbCByb3dzXG5cdFx0JCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHQvLyBGaWx0ZXIgdG8gY2hlY2sgaWYgYWxyZWFkeSBoaWRkZW4sIGRvbid0IGhpZGUgYWdhaW5cblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudChcImRpdlwiKS5sZW5ndGggPT09IDApLndyYXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cdFx0XG5cdFx0bG9jYXRpb24uaGFzaCA9IFwiXCI7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhIHNlbGVjdCBlbGVtZW50IHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG5cdCAqIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbSBhIGRyb3Bkb3duIGxpc3Rcblx0ICpcblx0ICogQHBhcmFtICRzZWxlY3QgQSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbGxlZFxuXHQgKiBAcGFyYW0gZGVmYXVsdFRleHQgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG5cdCAqIEBwYXJhbSBlbGVtZW50cyBMaXN0IG9mIGVsZW1lbnRzIHRvIGJlIGFkZGVkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgZnJvbVxuXHQgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbklkIElEIG9mIGEgZGVmYXVsdCBvcHRpb24gZnJvbSB0aGUgZWxlbWVudHMgZ2l2ZW5cblx0ICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eSBvZiB0aGUgc2VsZWN0IGZpZWxkIHRvIGFjY2VzcyBzZWxlY3RlZCBpdGVtIHdpdGhcblx0ICogQHBhcmFtIGdldEFkZGl0aW9uYWxEZXRhaWxzIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgYWRkaXRpb25hbCBkZXRhaWxzIHRvIGJlIHNob3duIGZvciBjdXJyZW50IGl0ZW1cblx0ICovXG5cdHBvcHVsYXRlU2VsZWN0RmllbGQoJHNlbGVjdCwgZGVmYXVsdFRleHQsIGVsZW1lbnRzLCBkZWZhdWx0T3B0aW9uSWQgPSBudWxsLCBwcm9wZXJ0eSA9ICduYW1lJywgZ2V0QWRkaXRpb25hbERldGFpbHMgPSBudWxsKSB7XG5cdFx0Ly8gRGVmYXVsdCBlbXB0eSBjb250ZW50IGZvciBpbnB1dFxuXHRcdGxldCBvcHRpb24gPSBuZXcgT3B0aW9uKGRlZmF1bHRUZXh0LCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdCRzZWxlY3QuZW1wdHkoKS5hcHBlbmQob3B0aW9uKTtcblx0XHRcblx0XHQvLyBFYWNoIG9wdGlvbiB0byBiZSBzZWxlY3RlZCBmcm9tXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChnZXRBZGRpdGlvbmFsRGV0YWlscyAhPT0gbnVsbCkge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBnZXRBZGRpdGlvbmFsRGV0YWlscyhlKSArICcgJyArIGVbcHJvcGVydHldLCBlLmlkLCBmYWxzZSwgZS5pZCA9PT0gZGVmYXVsdE9wdGlvbklkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkc2VsZWN0LmFwcGVuZChuZXcgT3B0aW9uKCcjJyArIGUuaWQgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNlbGVjdC5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBzdHJpbmdcblx0ICogQHBhcmFtIGVsZW1lbnRzIFRoZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgc2VhcmNoIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtIG9iamVjdENhbGxiYWNrIGEgY2FsbGJhY2sgcmV0dXJuaW5nIGFuIG9iamVjdCAodGhlIHJvdyBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSBzZWFyY2hLZXlzIHRoZSBwcm9wZXJ0aWVzIGluIG9iamVjdENhbGxiYWNrIHRvIGhpZ2hsaWdodFxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5LCBlbGVtZW50cyA9IFtdLCBvYmplY3RDYWxsYmFjaywgc2VhcmNoS2V5cyA9IFtdKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzO1xuXG5cdFx0cGFnZS5jbGVhclRhYmxlKCk7XG5cblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0gb2JqZWN0Q2FsbGJhY2soZWwpO1xuXG5cdFx0XHRcdHNlYXJjaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRcdG9iamVjdFtrZXldID0gU3RyaW5nKG9iamVjdFtrZXldKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcXVlcnkgKyAnKScsICdpZycpLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocXVlcnkgPT09ICQoXCIuc2VhcmNoLWZpZWxkIGlucHV0XCIpLnZhbCgpKSB7XG5cdFx0XHRcdFx0cGFnZS5hcHBlbmRUYWJsZVJvdyhvYmplY3QpO1xuXHRcdFx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGAke2VsZW1lbnRzLmxlbmd0aH0gcmVzdWx0JHtlbGVtZW50cy5sZW5ndGggIT09IDEgPyBcInNcIiA6IFwiXCJ9IGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnZS51cGRhdGVTcGxhc2hTY3JlZW4oYE5vIHJlc3VsdHMgZm9yIOKAmCR7cXVlcnl94oCZYCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhIG1lc3NhZ2UgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgb3ZlciBhbGwgZWxlbWVudHMuXG5cdCAqIEhpZGUgYWZ0ZXIgNiBzZWNvbmRzLCBvciBjb25maWd1cmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHN0cmluZyB0byBiZSBzaG93biBpbiB0aGUgbWVzc2FnZSBib3guXG5cdCAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG1lc3NhZ2UsIHN1Y2ggYXMgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIlxuXHQgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMgZm9yIHRoZSBtZXNzYWdlIHRvIGJlIHNob3duIGZvci5cblx0ICovXG5cdHN0YXRpYyBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkXCIsIHR5cGUgPSBcImRhbmdlclwiLCBkdXJhdGlvbiA9IDYpIHtcblx0XHQvLyBPbmx5IHNob3cgb25lIG1lc3NhZ2UgYXQgYSB0aW1lXG5cdFx0JChcIiNhbGVydC1ub3RpZmljYXRpb25cIikucmVtb3ZlKCk7XG5cblx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bXNnLmlkID0gXCJhbGVydC1ub3RpZmljYXRpb25cIjtcblx0XHRtc2cuY2xhc3NMaXN0LmFkZChcImFsZXJ0XCIsIGBhbGVydC0ke3R5cGV9YCwgXCJhbGVydC1ub3RpZmljYXRpb25cIik7XG5cdFx0bXNnLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJhbGVydFwiKTsgLy8gQWNjZXNzaWJpbGl0eVxuXHRcdC8vIFNldCBjb250ZW50IGFuZCBzaG93IG9uIHNjcmVlblxuXG5cdFx0bXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1zZyk7XG5cblx0XHQvLyBIaWRlIGFmdGVyIGR1cmF0aW9uXG5cdFx0c2V0VGltZW91dCgoKSA9PiBtc2cucmVtb3ZlKCksIGR1cmF0aW9uICogMTAwMCk7XG5cblx0XHQvLyBDbGljayB0byBoaWRlIG1lc3NhZ2Vcblx0XHQkKG1zZykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuXG4vKipcbiAqIEhhcmR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBkZXZpY2VzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEhhcmR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kZXZpY2VzID0gYXBpLmRldmljZXMubWFwKGUgPT4gbmV3IERldmljZShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgVHlwZXMgaW4gdGFibGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVUeXBlcygpIHtcblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGhpcy5kZXZpY2VzLm1hcCh0ID0+IHQudHlwZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHVuaXF1ZSBNYWtlcyBmb3IgYSBzcGVjaWZpZWQgVHlwZVxuXHQgKlxuXHQgKiBAcmV0dXJucyB7PEFycmF5Pn1cblx0ICovXG5cdHVuaXF1ZU1ha2VzT2ZUeXBlKHR5cGUpIHtcblx0XHRsZXQgZGV2aWNlc0J5VHlwZSA9IHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUpO1xuXG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KGRldmljZXNCeVR5cGUubWFwKHQgPT4gdC5tYWtlKSldO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgZGV2aWNlcyB3aXRoIGEgc3BlY2lmaWVkIFR5cGUgYW5kIE1ha2Vcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHRnZXREZXZpY2VzT2ZUeXBlQW5kTWFrZSh0eXBlLG1ha2UpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLnR5cGUgPT0gdHlwZSAmJiBkZXZpY2UubWFrZSA9PSBtYWtlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRldmljZXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBkZXZpY2VzIHRvIHJldHJpZXZlXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldERldmljZXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGlkcy5pbmRleE9mKGRldmljZS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBkZXZpY2Vcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBkZXZpY2UgXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkZXZpY2UgPT4gZGV2aWNlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRldmljZSB3aXRoIHRoZSBnaXZlbiBzZXJpYWwgbnVtYmVyXG5cdCAqXG5cdCAqIEBwYXJhbSBzZXJpYWxOdW1iZXIgVGhlIHNlcmlhbCBudW1iZXIgb2YgdGhlIGRldmljZSB0byByZXR1cm5cblx0ICogQHJldHVybnMge0RldmljZX1cblx0ICovXG5cdGdldERldmljZUJ5U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmluZChkID0+IGQuc2VyaWFsX25vID09PSBzZXJpYWxOdW1iZXIpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL2hhcmR3YXJlL0hhcmR3YXJlTWFuYWdlci5qcyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgUHJvZ3JhbSBmcm9tIFwiLi9Qcm9ncmFtXCI7XG5cbi8qKlxuICogU29mdHdhcmVNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmdcbiAqIHNvZnR3YXJlIHByb2dyYW1zIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIFNvZnR3YXJlTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvZnR3YXJlTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wcm9ncmFtcyA9IGFwaS5wcm9ncmFtcy5tYXAoZSA9PiBuZXcgUHJvZ3JhbShlKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJvZ3JhbXMgd2l0aCB0aGUgZ2l2ZW4gSUQgbnVtYmVyc1xuXHQgKlxuXHQgKiBAcGFyYW0gaWRzIFRoZSBJRCBudW1iZXJzIG9mIHRoZSBwcm9ncmFtcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXRQcm9ncmFtcyhpZHMpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtcy5maWx0ZXIocHJvZ3JhbSA9PiBpZHMuaW5kZXhPZihwcm9ncmFtLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3BlY2lmaWVkIHByb2dyYW1cblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqIEByZXR1cm5zIHtQcm9ncmFtfVxuXHQgKi9cblx0Z2V0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmluZChwcm9ncmFtID0+IHByb2dyYW0uaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlci5qcyIsIi8vIFNpbmNlIG5hdiBlbGVtZW50IGlzIHBlcnNpc3RlZCBiZXR3ZWVuIHBhZ2VzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgYWN0aXZlIGJ1dHRvblxuJChcIiNuYXZcIikub24oXCJjbGlja1wiLCBcInVsIGxpIGFcIiwgZSA9PiB7XG5cdCQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vIFRvb2x0aXBzIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCBhIHJlbGV2YW50IHRvb2x0aXAgSFRNTCBhdHRyaWJ1dGVcbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbi8vIERhdGUvdGltZSBwaWNrZXIgYWN0aXZhdGVkIG9uIGFsbCBlbGVtZW50cyB3aXRoIHJlbGV2YW50IGNsYXNzXG4kKCcudGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKCk7XG5cbi8vIENyZWF0ZSBuZXcgZW1wbG95ZWUgd2hlbiBzZWFyY2hpbmcgZm9yIG5vbi1leGlzdGVudCBhc3NpZ25lZVxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2xpLm5vLXJlc3VsdHMnLCBmdW5jdGlvbihlKSB7XG5cdHZhciBuZXdWYWx1ZSA9ICQodGhpcykuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51Lm9wZW5cIikuY2hpbGRyZW4oXCIuYnMtc2VhcmNoYm94XCIpLmNoaWxkcmVuKFwiaW5wdXRcIikudmFsKCksXG5cdCAgICAkbW9kYWwgICA9ICQoJyNuZXctc3RhZmYtbW9kYWwnKTtcblxuXHQkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cInN0YWZmLm5hbWVcIl0nKS52YWwobmV3VmFsdWUpO1xuXHQkbW9kYWwuZmluZCgnaW5wdXRbbmFtZT1cImV2ZW50X3RhcmdldFwiXScpLnZhbCgkKHRoaXMpLmNsb3Nlc3QoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnc2VsZWN0JykuYXR0cignbmFtZScpKTsgLy8gd2hlbiB0aGUgc3RhZmYgbWVtYmVyIGlzIGNyZWF0ZWQsIHRoaXMgaXMgdGhlIGlucHV0IGZpZWxkIGl0J2xsIHVwZGF0ZVxufSk7XG5cbiQoJyNuZXctc3RhZmYtbW9kYWwsICNuZXctdGlja2V0LW1vZGFsLCAjZm9sbG93LXVwLWNhbGwtbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0JCh0aGlzKS5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKVxuXHRcdC5ub3QoJy5uby1jbGVhci1vbi1zaG93Jylcblx0XHQudmFsKCcnKTtcblxuXHQkKHRoaXMpLmZpbmQoJyNhY2NvcmRpb24gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCknKS5yZW1vdmUoKTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdCQodGhpcykuZmluZCgnLnRpbWVwaWNrZXInKS52YWwoKCcwJyArIChjdXJyZW50VGltZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcvJyArICgnMCcgKyBjdXJyZW50VGltZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcvJyArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCkgKyAnICcgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXInLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLnJlbW92ZS1hY2NvcmRpb24nLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHR9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlJywgJyNhY2NvcmRpb24gLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xuXHRsZXQgaXNTaG93ID0gZS50eXBlLnNwbGl0KFwiLlwiKVswXSA9PT0gXCJzaG93XCI7XG5cdCQodGhpcykuc2libGluZ3MoJy5jYXJkLWhlYWRlcicpLmZpbmQoJy52aWV3LWFjY29yZGlvbicpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLXVwJywgIWlzU2hvdykudG9nZ2xlQ2xhc3MoJ2ZhLWNoZXZyb24tZG93bicsIGlzU2hvdyk7XG59KTtcblxuJCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cbi8vIEJvb3RzdHJhcCBTZWxlY3QgRml4OiBBZGQgYmFjayBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBzZWxlY3QgZmllbGRcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYm9vdHN0cmFwLXNlbGVjdFwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudS5vcGVuJykudG9nZ2xlKCk7XG59KTtcblxuLy8gQm9vdHN0cmFwIG1vZGFscyBmaXg6IGFkZCBiYWNrIGV2ZW50IGxpc3RlbmVyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYm9keTpub3QoW2RhdGEtcGFnZT1cXFwic3RhZmZcXFwiXSkgW2RhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCJdXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMuZGF0YXNldC50YXJnZXQpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRJdGVtVG9QaWNrZXIocGlja2VyRWxlbWVudCwgdmFsdWUsIG5hbWUpIHtcblx0JChwaWNrZXJFbGVtZW50KS5hcHBlbmQobmV3IE9wdGlvbihuYW1lLCB2YWx1ZSkpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpLnNlbGVjdHBpY2tlcigndmFsJywgbmFtZSk7XG59XG5cbnZhciB2YWxpZGF0aW9uVGltZW91dCA9IHdpbmRvdy52YWxpZGF0aW9uVGltZW91dCA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDb21tZW50XG4gKlxuICogQSBjb21tZW50IGlzIG1hZGUgYWJvdXQgYSBzcGVjaWZpYyB0aWNrZXQsIGJ5XG4gKiBhIHN0YWZmIG1lbWJlci5cbiAqIFxuICogQ29udGFpbnMgdGhlIFRpY2tldCB0aGF0IGl0IGJlbG9uZ3MgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZDogaWQsXG5cdFx0YXV0aG9yX2lkOiBhdXRob3IsXG5cdFx0Y2FsbF9pZDogY2FsbCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRjb250ZW50LFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbCAgICAgICAgICAgID0gY2FsbDtcblx0XHR0aGlzLnRpY2tldCAgICAgICAgICA9IHRpY2tldDtcblx0XHR0aGlzLmNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgPSBjcmVhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgPSBjcmVhdGVkQXRSZWFsO1xuXHR9XG5cblx0Z2V0IGF1dGhvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2F1dGhvcik7XG5cdH1cblxuXHRzZXQgYXV0aG9yKGF1dGhvcikge1xuXHRcdHRoaXMuX2F1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdGdldCBjYWxsKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbCh0aGlzLl9jYWxsKTtcblx0fVxuXG5cdHNldCBjYWxsKGNhbGwpIHtcblx0XHR0aGlzLl9jYWxsID0gY2FsbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuXG4vKipcbiAqIENhbGxcbiAqXG4gKiBFdmVyeSB0aW1lIHRoZSBIZWxwZGVzayBpcyBjYWxsZWQsIHRoaXMgaXMgY3JlYXRlZC5cbiAqIEEgY2FsbCBtYXkgaGF2ZSBtdWx0aXBsZSB0aWNrZXRzLCBhIHRpY2tldCBtYXkgaGF2ZVxuICogbXVsdGlwbGUgY2FsbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGwge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGltZSxcblx0XHRjYWxsZXJfaWQ6IGNhbGxlcixcblx0XHRvcGVyYXRvcl9pZDogb3BlcmF0b3IsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICA9IGlkO1xuXHRcdHRoaXMudGltZSAgICAgPSB0aW1lO1xuXHRcdHRoaXMuY2FsbGVyICAgPSBjYWxsZXI7ICAgLy8gSUQgb2YgY2FsbGVyLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7IC8vIElEIG9mIG9wZXJhdG9yLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLnRpY2tldHMgID0gdGlja2V0czsgIC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgVGlja2V0J3Ncblx0fVxuXG5cdGdldCBjYWxsZXIoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgb3BlcmF0b3Iob3BlcmF0b3IpIHtcblx0XHR0aGlzLl9vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzRnJvbUNhbGwodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwiaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRW1wbG95ZWVcbiAqXG4gKiBBbiBlbXBsb3llZSBvZiB0aGUgY29tcGFueVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGpvYl90aXRsZTogam9iLFxuXHRcdGRlcGFydG1lbnQsXG5cdFx0cGhvbmVfbnVtYmVyOiBwaG9uZSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IHNwZWNpYWxpc21zID0gW10sXG5cdFx0b3BlcmF0b3IgPSBmYWxzZSxcblx0XHRzcGVjaWFsaXN0ID0gc3BlY2lhbGlzbXMubGVuZ3RoID4gMCxcblx0XHRhbmFseXN0ID0gZmFsc2UsXG5cdFx0YWRtaW4gPSBmYWxzZVxuXHR9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMuam9iID0gam9iO1xuXHRcdHRoaXMuZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQubmFtZTtcblx0XHR0aGlzLl9kZXBhcnRtZW50ID0gZGVwYXJ0bWVudC5pZDtcblx0XHR0aGlzLnBob25lID0gcGhvbmU7XG5cdFx0dGhpcy5zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHRcdHRoaXMuYWNjZXNzID0ge29wZXJhdG9yLCBhbmFseXN0LCBhZG1pbn07XG5cdFx0XG5cdFx0Ly8gSWYgdXNlciBpcyBhbnkgb3RoZXIgcGVybWlzc2lvbiB0aGVuIHJlYWQgaXMgZ3JhbnRlZFxuXHRcdHRoaXMuYWNjZXNzLnJlYWQgPSB0aGlzLmFjY2Vzcy5vcGVyYXRvciB8fCB0aGlzLmFjY2Vzcy5hbmFseXN0IHx8IHRoaXMuYWNjZXNzLmFkbWluIHx8IHRoaXMuYWNjZXNzLnJlYWRvbmx5IHx8IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyByZWFkIGFjY2VzcyB0byB0aGUgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNSZWFkKCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5yZWFkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgaGVscCBkZXNrIG9wZXJhdG9yXG5cdCAqL1xuXHRnZXQgaXNPcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Mub3BlcmF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBhbmFseXRpY2FsIGRhdGEgYWJvdXQgdGhlIGhlbHAgZGVzayBzeXN0ZW1cblx0ICovXG5cdGdldCBpc0FuYWx5c3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFuYWx5c3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvbiB0aGUgaGVscCBkZXNrXG5cdCAqL1xuXHRnZXQgaXNBZG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MuYWRtaW47XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMgQSBsaXN0IG9mIHByb2JsZW0gdHlwZXMgdGhlIHVzZXIgaXMgYSBzcGVjaWFsaXN0IG9mXG5cdCAqL1xuXHRnZXQgc3BlY2lhbGlzbXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX3NwZWNpYWxpc21zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3BlY2lhbGlzbXMgU2V0IHRoZSBsaXN0IG9mIHNwZWNpYWxpc21zIGZvciB0aGlzIHBlcnNvbiBvbiB0aGUgc3lzdGVtXG5cdCAqL1xuXHRzZXQgc3BlY2lhbGlzbXMoc3BlY2lhbGlzbXMpIHtcblx0XHR0aGlzLl9zcGVjaWFsaXNtcyA9IHNwZWNpYWxpc21zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgZGF0YSBmb3Igc2VuZGluZyB0byBBUEkgZW5kcG9pbnQuIFRoZSBBUEkgaGFzIGRpZmZlcmVudFxuXHQgKiBkYXRhIGtleXMgcmVwcmVzZW50aW5nIHRoZSBkYXRhIGFjY2Vzc2libGUgaW4gdGhlIHRhYmxlcywgc28gbmV3XG5cdCAqIGRhdGEgYW5kIHVwZGF0ZXMgdG8gZGF0YSBtdXN0IHVzZSB0aGVzZSBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBkYXRhIHRvIGJlIGNvbnZlcnRlZFxuXHQgKiBAcmV0dXJucyBkYXRhIHdpdGggdXBkYXRlZCBrZXkgbmFtZXNcblx0ICovXG5cdHN0YXRpYyBwcmVwYXJlRGF0YShkYXRhID0ge30pIHtcblx0XHRkYXRhLmpvYl90aXRsZSA9IGRhdGEuam9iO1xuXHRcdGRhdGEucGhvbmVfbnVtYmVyID0gZGF0YS5waG9uZTtcblx0XHRkYXRhLmV4cGVydGlzZV90eXBlcyA9IGRhdGEuc3BlY2lhbGlzbXM7XG5cdFx0ZGF0YS5kZXBhcnRtZW50X2lkID0gZGF0YS5kZXBhcnRtZW50O1xuXHRcdGZvciAobGV0IGtleSBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblx0XHRcdGRhdGFba2V5XSA9IGRhdGEuYWNjZXNzW2tleV0gPyAoMSAmJiAoZGF0YS5zcGVjaWFsaXN0ID0gMSkpIDogMDtcblx0XHR9XG5cdFx0ZGF0YS5zcGVjaWFsaXN0ID0gZGF0YS5zcGVjaWFsaXN0IHx8IDA7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcnRpc2VUeXBlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0cGFyZW50X2lkOiBwYXJlbnQsXG5cdFx0Y2hpbGRyZW5cblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLm5hbWUgICAgID0gbmFtZTtcblx0XHR0aGlzLnBhcmVudCAgID0gcGFyZW50O1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjsgLy8gSUQgb2YgRXhwZXJ0aXNlVHlwZSdzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIEV4cGVydGlzZVR5cGUnc1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9wYXJlbnQpO1xuXHR9XG5cblx0c2V0IHBhcmVudChwYXJlbnQpIHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGVzKHRoaXMuX2NoaWxkcmVuKTtcblx0fVxuXG5cdHNldCBjaGlsZHJlbihjaGlsZHJlbikge1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwiaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZVN0YWZmIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHN0YWZmX2lkOiBzdGFmZklkLFxuXHRcdGV4cGVydGlzZV90eXBlX2lkOiBleHBlcnRpc2VUeXBlSWQsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgPSBzdGFmZklkO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGUgPSBleHBlcnRpc2VUeXBlSWQ7XG5cdFx0dGhpcy50aWNrZXRzICAgICAgICA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZSgpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZSh0aGlzLl9leHBlcnRpc2VfdHlwZSk7XG5cdH1cblxuXHRzZXQgZXhwZXJ0aXNlX3R5cGUoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGF0dXNcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIFN0YXR1cy5cbiAqIENvbnRhaW5zIFRpY2tldHMgdGhhdCBmaXQgaW50byB0aGUgc3RhdHVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzbHVnLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0c1xuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgID0gaWQ7XG5cdFx0dGhpcy5zbHVnICAgID0gc2x1ZzsgICAgLy8gc2x1Z19leGFtcGxlXG5cdFx0dGhpcy5uYW1lICAgID0gbmFtZTsgICAgLy8gTmFtZSBFeGFtcGxlIVxuXHRcdHRoaXMudGlja2V0cyA9IHRpY2tldHM7IC8vIElEIG9mIHRpY2tldHMsIGdldCBtZXRob2QgcmV0dXJucyBUaWNrZXQgaW5zdGFuY2VzXG5cdH1cblxuXHRnZXQgdGlja2V0cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFRpY2tldHNXaXRoU2x1Zyh0aGlzLnNsdWcpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvU3RhdHVzLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTb2Z0d2FyZU1hbmFnZXIgZnJvbSBcIi4uL3NvZnR3YXJlL1NvZnR3YXJlTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuLi9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0XG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBUaWNrZXQvUHJvYmxlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0IHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxzLFxuXHRcdHN0YXR1cyxcblx0XHRzdGF0dXNfaGlzdG9yeTogc3RhdHVzSGlzdG9yeSxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRzb2x1dGlvbl9pZDogc29sdXRpb24sXG5cdFx0ZGV2aWNlcyxcblx0XHRwcm9ncmFtcyxcblx0XHRjb21tZW50cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWwsXG5cdFx0dXBkYXRlZF9hdDogdXBkYXRlZEF0UmVhbCxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZl9pZDogZXhwZXJ0aXNlVHlwZVN0YWZmLFxuXHRcdGFzc2lnbmVkX3RvX29wZXJhdG9yX2lkOiBhc3NpZ25lZFRvT3BlcmF0b3JJZFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMuYXV0aG9yICAgICAgICAgICAgICAgPSBhdXRob3I7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgICA9IGNhbGxzOyAgLy8gSUQgb2YgY2FsbHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ2FsbCdzXG5cdFx0dGhpcy5zdGF0dXMgICAgICAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGF0dXNfaGlzdG9yeSAgICAgICA9IHN0YXR1c0hpc3Rvcnk7XG5cdFx0dGhpcy50aXRsZSAgICAgICAgICAgICAgICA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gICAgICAgICAgPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnNvbHV0aW9uICAgICAgICAgICAgID0gc29sdXRpb247XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgICA9IGRldmljZXM7ICAvLyBJRCBvZiBkZXZpY2VzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIERldmljZXNcblx0XHR0aGlzLnByb2dyYW1zICAgICAgICAgICAgID0gcHJvZ3JhbXM7IC8vIElEIG9mIHByb2dyYW1zLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFByb2dyYW1zXG5cdFx0dGhpcy5jb21tZW50cyAgICAgICAgICAgICA9IGNvbW1lbnRzOyAvLyBJRCBvZiBjb21tZW50cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBDb21tZW50J3Ncblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCAgICAgICAgICAgPSB1cGRhdGVkQXQ7XG5cdFx0dGhpcy5jcmVhdGVkX2F0X3JlYWwgICAgICA9IGNyZWF0ZWRBdFJlYWw7XG5cdFx0dGhpcy51cGRhdGVkX2F0X3JlYWwgICAgICA9IHVwZGF0ZWRBdFJlYWw7XG5cdFx0dGhpcy5leHBlcnRpc2VfdHlwZV9zdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmFzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgY2FsbHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRDYWxsc0J5VGlja2V0SWQodGhpcy5pZCk7XG5cdH1cblxuXHRzZXQgY2FsbHMoY2FsbHMpIHtcblx0XHR0aGlzLl9jYWxscyA9IGNhbGxzO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblx0XG5cdGdldCBzdGF0dXNfaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1c0hpc3RvcnkodGhpcy5fc3RhdHVzX2hpc3RvcnkpO1xuXHR9XG5cblx0c2V0IHN0YXR1c19oaXN0b3J5KHN0YXR1c0hpc3RvcnkpIHtcblx0XHR0aGlzLl9zdGF0dXNfaGlzdG9yeSA9IHN0YXR1c0hpc3Rvcnk7XG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX2NhbGxlcik7XG5cdH1cblxuXHRzZXQgY2FsbGVyKGNhbGxlcikge1xuXHRcdHRoaXMuX2NhbGxlciA9IGNhbGxlcjtcblx0fVxuXG5cdGdldCBkZXZpY2VzKCkge1xuXHRcdHJldHVybiAobmV3IEhhcmR3YXJlTWFuYWdlcigpKS5nZXREZXZpY2VzKHRoaXMuX2RldmljZXMpO1xuXHR9XG5cblx0c2V0IGRldmljZXMoZGV2aWNlcykge1xuXHRcdHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuXHR9XG5cblx0Z2V0IHByb2dyYW1zKCkge1xuXHRcdHJldHVybiAobmV3IFNvZnR3YXJlTWFuYWdlcigpKS5nZXRQcm9ncmFtcyh0aGlzLl9wcm9ncmFtcyk7XG5cdH1cblxuXHRzZXQgcHJvZ3JhbXMocHJvZ3JhbXMpIHtcblx0XHR0aGlzLl9wcm9ncmFtcyA9IHByb2dyYW1zO1xuXHR9XG5cblx0Z2V0IGNvbW1lbnRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudHNCeUlkcyh0aGlzLl9jb21tZW50cyk7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHMpIHtcblx0XHR0aGlzLl9jb21tZW50cyA9IGNvbW1lbnRzO1xuXHR9XG5cblx0Z2V0IHNvbHV0aW9uKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q29tbWVudCh0aGlzLl9zb2x1dGlvbik7XG5cdH1cblxuXHRzZXQgc29sdXRpb24oc29sdXRpb24pIHtcblx0XHR0aGlzLl9zb2x1dGlvbiA9IHNvbHV0aW9uO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlU3RhZmYodGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlX3N0YWZmKGV4cGVydGlzZVR5cGVTdGFmZklkKSB7XG5cdFx0dGhpcy5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmZJZDtcblx0fVxuXG5cdGdldCBhc3NpZ25lZF90b19vcGVyYXRvcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIoKSkuZ2V0KHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yKTtcblx0fVxuXG5cdHNldCBhc3NpZ25lZF90b19vcGVyYXRvcihhc3NpZ25lZFRvT3BlcmF0b3JJZCkge1xuXHRcdHRoaXMuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID0gYXNzaWduZWRUb09wZXJhdG9ySWQ7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0dmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MCAtIDEgKyAxKSkgKyAxOyAvL1JhbmRvbSBpbnQgYmV0d2VlbiAxIGFuZCA0MFxuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKCkpLmdldEV4cGVydGlzZVR5cGUocmFuZG9tKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBEZXZpY2VcbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIEhhcmR3YXJlLlxuICogQ29udGFpbnMgYWxsIHNvZnR3YXJlIHRoYXQgaXMgcnVubmluZyBvbiB0aGUgSGFyZHdhcmUgVW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dHlwZSxcblx0XHRtYWtlLFxuXHRcdHNlcmlhbF9ubyxcblx0XHR0aWNrZXRzLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSlcblx0e1xuXHRcdHRoaXMuaWRcdFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy50eXBlXHRcdFx0PSB0eXBlO1xuXHRcdHRoaXMubWFrZSAgIFx0XHQ9IG1ha2U7XG5cdFx0dGhpcy5zZXJpYWxfbm8gICAgIFx0PSBzZXJpYWxfbm87XG5cdFx0dGhpcy5fdGlja2V0c1x0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5jcmVhdGVkX2F0XHRcdD0gY3JlYXRlZF9hdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXRcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBkZXZpY2UgaXMgYXNzaWduZWQgdG9cblx0ICovXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG4vKipcbiAqIFByb2dyYW1cbiAqXG4gKiBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCBhIHBpZWNlIG9mIFNvZnR3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmFtIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdG5hbWUsXG5cdFx0dGlja2V0cyxcblx0XHRvcGVyYXRpbmdfc3lzdGVtLFxuXHRcdGV4cGlyeV9kYXRlLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRfYXQsXG5cdFx0dXBkYXRlZF9hdF9odW1hbjogdXBkYXRlZF9hdCxcblx0fSkgXG5cdHtcblx0XHR0aGlzLmlkICAgICAgICAgXHRcdD0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICAgIFx0XHQ9IG5hbWU7XG5cdFx0dGhpcy5fdGlja2V0c1x0XHRcdD0gdGlja2V0cztcblx0XHR0aGlzLm9wZXJhdGluZ19zeXN0ZW1cdD0gb3BlcmF0aW5nX3N5c3RlbTtcblx0XHR0aGlzLmV4cGlyeV9kYXRlXHRcdD0gZXhwaXJ5X2RhdGU7XG5cdFx0dGhpcy5jcmVhdGVkX2F0IFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0IFx0XHQ9IHVwZGF0ZWRfYXQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge0FycmF5fSBBIGxpc3Qgb2YgYWxsIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRnZXQgdGlja2V0cygpIHtcblx0XHRpZiAodGhpcy5fdGlja2V0cykge1xuXHRcdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzQnlUaWNrZXRJRHModGhpcy5fdGlja2V0cyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5fSB0aWNrZXRzIFNldHMgdGhlIHRpY2tldHMgdGhpcyBwcm9ncmFtIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cblxuXHRnZXRTb2Z0d2FyZVR5cGUoKSB7IFxuXHRcdC8vR2V0cyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBwcm9ncmFtIGlzIGFuIG9wZXJ0aW5nIHN5c3RlbSBvciBub3Rcblx0XHRpZiAodGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJPcGVyYXRpbmcgU3lzdGVtXCI7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRyZXR1cm4gXCJBcHBsaWNhdGlvblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCItXCI7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRTdGF0dXNcbiAqXG4gKiBJbnRlcm1lZGlhcnkgcmVsYXRpb25zaGlwIGJldHdlZW4gU3RhdHVzXG4gKiBhbmQgVGlja2V0LiBUaGlzIHN0b3JlcyBhIGhpc3Rvcnkgb2YgYVxuICogVGlja2V0J3Mgc3RhdHVzZXM7IHRoZSBsYXN0IGVudHJ5IGlzXG4gKiB0aGUgVGlja2V0J3MgY3VycmVudCBzdGF0dXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFN0YXR1cyB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHR0aWNrZXRfaWQ6IHRpY2tldCxcblx0XHRzdGF0dXNfaWQ6IHN0YXR1cyxcblx0XHRzdGFmZl9pZDogc3RhZmYsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdGNyZWF0ZWRfYXQ6IGNyZWF0ZWRBdFJlYWxcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgID0gaWQ7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7IC8vIElEIG9mIHRpY2tldCwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFRpY2tldFxuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgID0gc3RhdHVzOyAvLyBJRCBvZiBzdGF0dXMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGF0dXNcblx0XHR0aGlzLnN0YWZmICAgICAgICAgICA9IHN0YWZmOyAgLy8gSUQgb2Ygc3RhZmYsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBTdGFmZlxuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCB0aWNrZXQoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXQodGhpcy5fdGlja2V0KTtcblx0fVxuXG5cdHNldCB0aWNrZXQodGlja2V0KSB7XG5cdFx0dGhpcy5fdGlja2V0ID0gdGlja2V0O1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldFN0YXR1cyh0aGlzLl9zdGF0dXMpO1xuXHR9XG5cblx0c2V0IHN0YXR1cyhzdGF0dXMpIHtcblx0XHR0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cdH1cblxuXHRnZXQgc3RhZmYoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9zdGFmZik7XG5cdH1cblxuXHRzZXQgc3RhZmYoc3RhZmYpIHtcblx0XHR0aGlzLl9zdGFmZiA9IHN0YWZmO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuL0R5bmFtaWNQYWdlXCI7XG5cbi8qKlxuICogQVBJXG4gKlxuICogT3JpZ2luYWxseSB1c2VkIHRvIHJldHJpZXZlIGFuZCBoYW5kbGUgZGF0YSBmcm9tXG4gKiBBUEkgZW5kcG9pbnRzLCBidXQgbW9kaWZpZWQgdG8gaG9sZCBsb2NhbCBkYXRhXG4gKiBpbiB0aGUgY29uc3RydWN0b3Igc2V0IGJ5IFdvcmRQcmVzcydzIFR3aWdcbiAqIChkb25lIHRvIHJldXNlIHByZXZpb3VzIGNvbXBvbmVudHMgdG8gc2F2ZSB0aW1lKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0Y2FsbHMgPSBbXSxcblx0XHRzdGF0dXNlcyA9IFtdLFxuXHRcdHRpY2tldHMgPSBbXSxcblx0XHR0aWNrZXRfc3RhdHVzZXM6IHRpY2tldFN0YXR1c2VzID0gW10sXG5cdFx0Y29tbWVudHMgPSBbXSxcblx0XHRzdGFmZiA9IFtdLFxuXHRcdGRldmljZXMgPSBbXSxcblx0XHRwcm9ncmFtcyA9IFtdLFxuXHRcdGV4cGVydGlzZV90eXBlczogZXhwZXJ0aXNlVHlwZXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZV9zdGFmZjogZXhwZXJ0aXNlVHlwZVN0YWZmID0gW10sXG5cdFx0ZGVwYXJ0bWVudHMgPSBbXVxuXHR9KSB7XG5cdFx0dGhpcy5jYWxscyAgICAgICAgICAgICAgPSBjYWxscztcblx0XHR0aGlzLnN0YXR1c2VzICAgICAgICAgICA9IHN0YXR1c2VzO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgICAgID0gdGlja2V0cztcblx0XHR0aGlzLnRpY2tldFN0YXR1c2VzICAgICA9IHRpY2tldFN0YXR1c2VzO1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgID0gY29tbWVudHM7XG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgICAgPSBzdGFmZjtcblx0XHR0aGlzLmRldmljZXMgICAgICAgICAgICA9IGRldmljZXM7XG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgPSBwcm9ncmFtcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVzICAgICA9IGV4cGVydGlzZVR5cGVzO1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgICAgICAgID0gZGVwYXJ0bWVudHM7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCIvKlxuSlMgc3BlY2lmaWMgdG8gSGFyZHdhcmUgcGFnZSwgdXNlZCB0byBoYW5kbGUgcnVkYW1lbnRhcnkgZnJvbnQgZW5kIGludGVyYWN0aW9ucy5cbk1vc3QgZnJvbnQgZW5kIGxvZ2ljIG9jY3VycyBpbiBNZXRyaWNzUGFnZS5cbiAqL1xuXG5pbXBvcnQgTWFrZUl0QWxsIGZyb20gXCIuLi8uLi9tYWluXCI7XG5pbXBvcnQgTWV0cmljc1BhZ2UgZnJvbSBcIi4vTWV0cmljc1BhZ2VcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL0FQSVwiO1xuXG5sZXQgbWV0cmljc1BhZ2UsIGFwaTtcblxud2luZG93LmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdGFwaSA9IHdpbmRvdy5hcGkgPSBuZXcgQVBJKGRhdGEpO1xuXG5cdG1ldHJpY3NQYWdlID0gd2luZG93Lm1ldHJpY3NQYWdlID0gbmV3IE1ldHJpY3NQYWdlKCk7XG5cblx0Ly9TZXR0aW5nIGRlZmF1bHQgcmVzcG9uc2UgaWYgbm8gcmVzdWx0IGlzIGZvdW5kIGluIHRoZSBzZWxlY3Qvc2VhcmNoIGJveFxuXHQkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKHtcblx0XHRub25lUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIG1hdGNoIHswfSdcblx0fSk7XG5cblx0Ly9IYW5kbGVyIGZvciBjaGFuZ2luZyB0aGUgc2VsZWN0ZWQgc3RhZmYgbWVtYmVyXG5cdCQoJyNTdGFmZk5hbWVTZWFyY2gnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7IFxuXHRcdG1ldHJpY3NQYWdlLnN0YWZmRHJvcGRvd25DaGFuZ2UoKTtcblx0fSk7XG5cblx0JChcIltkYXRhLXJvd2lkXVwiKS5jbGljayhlID0+IHtcblx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi50b1N0cmluZygpLnNwbGl0KFwiI1wiKVswXS5yZXBsYWNlKFwibWV0cmljcy5odG1sXCIsIFwic3RhZmYuaHRtbCNcIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvd2lkKTtcblx0fSk7XG5cblx0JCgoKSA9PiBtZXRyaWNzUGFnZS5oaWRlVGFibGVSb3dEZXRhaWxzKCkpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9tZXRyaWNzL21ldHJpY3MuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi4vdGlja2V0cy9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcblxuXG4vKipcbiAqIE1ldHJpY3NQYWdlXG4gKlxuICogTWFuaXB1bGF0ZXMgdGhlIG1ldHJpY3MgcGFnZSAvdyBKUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB2YXJpb3VzIGl0ZW0gTWFuYWdlcnMuIFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY3NQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly9EZWNsZWFyaW5nIG1hbmFnZXJzXG5cdFx0dGhpcy50aWNrZXRNYW5hZ2VyICAgICAgICA9IG5ldyBUaWNrZXRNYW5hZ2VyKCk7XG5cdFx0dGhpcy5zdGFmZk1hbmFnZXIgICAgICAgICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnNvZnR3YXJlTWFuYWdlciAgICAgID0gbmV3IFNvZnR3YXJlTWFuYWdlcigpO1xuXHRcdHRoaXMuaGFyZHdhcmVNYW5hZ2VyICAgICAgPSBuZXcgSGFyZHdhcmVNYW5hZ2VyKCk7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlciA9IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5sb2dnZWRJblVzZXIgPSBudWxsO1xuXHRcdHRoaXMucGFnZUxvYWQoKTtcblx0fVxuXG5cdHBhZ2VMb2FkKCkge1xuXHRcdHRoaXMubG9nZ2VkSW5Vc2VyID0gdGhpcy5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIodHJ1ZSk7XG5cdFx0dmFyIHRpY2tldHMgPSBudWxsO1xuXG5cdFx0aWYgKHRoaXMubG9nZ2VkSW5Vc2VyLmlzQW5hbHlzdCkgeyAvL0lmIGFuIGFuYWx5c3QgaXMgbG9nZ2VkIGluXG5cdFx0XHQvL0xvYWQgYWxsIHN0YWZmIG1lbWJlcnMgaW50byBTdGFmZiBEcm9wIGRvd24gYm94LCBhbmQgZGlzcGxheVxuXHRcdFx0Ly9zeXN0ZW0td2lkZSBzdGF0aXN0aWNzICh1c2luZyB0aWNrZXRzIGFzc2lnbmVkIHRvIGFueSBvcGVyYXRvcikgXG5cdFx0XHR0aGlzLnBvcHVsYXRlU3RhZmZOYW1lU2VhcmNoKCk7XG5cdFx0XHR0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLnRpY2tldHM7XG5cdFx0XHR0aGlzLnNob3dTdGF0cyh0cnVlLCB0aWNrZXRzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL0lmIG5vdCwgZGlzcGxheSB0aGUgbmFtZSBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgYW5kIGZvcmNlXG5cdFx0XHQvL3RoZSBwYWdlIHRvIGRpc3BsYXkgb25seSBkYXRhIHJlbGF0aW5nIHRvIHRoZW1cblx0XHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLmFwcGVuZChcIjxvcHRpb24gc3R5bGU9J2NvbG9yOmdyZXknIHZhbHVlPSdcIiArIHRoaXMubG9nZ2VkSW5Vc2VyLmlkICsgXCInIHNlbGVjdGVkPlwiICsgdGhpcy5sb2dnZWRJblVzZXIubmFtZSArIFwiPC9vcHRpb24+XCIpO1xuXHRcdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuYXR0cihcImRpc2FibGVkXCIsXCJ0cnVlXCIpO1xuXHRcdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdFx0XHR0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZCh0aGlzLmxvZ2dlZEluVXNlci5pZCk7XG5cdFx0XHR0aGlzLm9wZW5TdGFmZkluZm8odGhpcy5sb2dnZWRJblVzZXIsIHRpY2tldHMpO1xuXHRcdH1cblx0fVxuXG5cdC8vSGFuZGxlcyBkaXNwbGF5IGRhdGEgaW4gdGhlIFwiU3RhdGlzdGljc1wiIHNlY3Rpb25cblx0c2hvd1N0YXRzKHNob3dpbmdHbG9iYWxJbmZvLCB0aWNrZXRzKSB7XG5cdFx0aWYgKHNob3dpbmdHbG9iYWxJbmZvKSB7IFxuXHRcdFx0Ly9JZiB1c2VyIGlzIGFuIEFuYWx5c3QgYW5kIGhhcyBub3Qgc2VsZWN0ZWQgYSBzcGVjaWZpYyBzdGFmZiBtZW1iZXIgdG8gdmlld1xuXHRcdFx0Ly9EaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IEhhcmR3YXJlIGFuZCBTb2Z0d2FyZVxuXHRcdFx0JChcIiNIV19TV1wiKS5hdHRyKFwic3R5bGVcIixcIlwiKVxuXHRcdFx0dmFyIHByb2dyYW1zID0gdGhpcy5zb2Z0d2FyZU1hbmFnZXIucHJvZ3JhbXM7XG5cdFx0XHR2YXIgbm9PZlNvZnR3YXJlID0gcHJvZ3JhbXMubGVuZ3RoO1xuXHRcdFx0dmFyIG5vT2ZTb2Z0d2FyZVdpdGhJc3N1ZXMgPSBwcm9ncmFtcy5maWx0ZXIocCA9PiBwLl90aWNrZXRzLmxlbmd0aCA+IDApLmxlbmd0aDtcblx0XHRcdFxuXHRcdFx0dmFyIGRldmljZXMgPSB0aGlzLmhhcmR3YXJlTWFuYWdlci5kZXZpY2VzO1xuXHRcdFx0dmFyIG5vT2ZIYXJkd2FyZSA9IGRldmljZXMubGVuZ3RoO1xuXHRcdFx0dmFyIG5vT2ZIYXJkd2FyZVdpdGhJc3N1ZXMgPSBkZXZpY2VzLmZpbHRlcihkID0+IGQuX3RpY2tldHMubGVuZ3RoID4gMCkubGVuZ3RoO1xuXG5cdFx0XHQkKFwiI25vT2ZTb2Z0d2FyZVwiKS52YWwobm9PZlNvZnR3YXJlKTtcblx0XHRcdCQoXCIjbm9PZlNvZnR3YXJlV2l0aElzc3Vlc1wiKS52YWwobm9PZlNvZnR3YXJlV2l0aElzc3Vlcyk7XG5cdFx0XHQkKFwiI25vT2ZEZXZpY2VzXCIpLnZhbChub09mSGFyZHdhcmUpO1xuXHRcdFx0JChcIiNub09mRGV2aWNlc1dpdGhJc3N1ZXNcIikudmFsKG5vT2ZIYXJkd2FyZVdpdGhJc3N1ZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL0Vsc2UgZG9uJ3QgZGlzcGxheSBIYXJkd2FyZS9Tb2Z0d2FyZSBpbmZvcm1hdGlvblxuXHRcdFx0JChcIiNIV19TV1wiKS5hdHRyKFwic3R5bGVcIixcImRpc3BsYXk6bm9uZVwiKTtcblx0XHR9XG5cblx0XHQkKFwiI3RvdGFsVGlja2V0c0Fzc2lnbmVkXCIpLnZhbCh0aWNrZXRzLmxlbmd0aCk7IC8vTnVtYmVyIG9mIHRpY2tldHMgaW4gdGhlIHN5c3RlbVxuXHRcdHZhciBzb2x2ZWRUaWNrZXRzID0gdGlja2V0cy5maWx0ZXIodCA9PiB0LnN0YXR1cy5zbHVnID09IFwicmVzb2x2ZWRcIik7IC8vTnVtYmVyIG9mIHJlc29sdmVkIHRpY2tldHMgaW4gdGhlIHN5c3RlbVxuXHRcdCQoXCIjdG90YWxUaWNrZXRzU29sdmVkXCIpLnZhbChzb2x2ZWRUaWNrZXRzLmxlbmd0aCk7XG5cblx0XHR2YXIgdG90YWxUaW1lID0gMDtcblx0XHR2YXIgdG90YWxSZXBsaWVzID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tldHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvdGFsUmVwbGllcyArPSB0aWNrZXRzW2ldLmNvbW1lbnRzLmxlbmd0aDtcblx0XHRcdHZhciB0aWNrZXRTdGF0dXNIaXN0b3J5ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXRzW2ldLmlkKTtcblx0XHRcdHZhciByZXNvbHZlZFRpY2tldFN0YXR1cyA9IHRpY2tldFN0YXR1c0hpc3RvcnkuZmlsdGVyKHQgPT4gdC5fc3RhdHVzID09IDEpO1xuXG5cdFx0XHRpZiAocmVzb2x2ZWRUaWNrZXRTdGF0dXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgdGlja2V0Q3JlYXRlZCA9IG5ldyBEYXRlKHRpY2tldHNbaV0uY3JlYXRlZF9hdF9yZWFsKTtcblx0XHRcdFx0dmFyIGxhc3RSZXNvbHZlZCA9IHJlc29sdmVkVGlja2V0U3RhdHVzW3Jlc29sdmVkVGlja2V0U3RhdHVzLmxlbmd0aCAtIDFdXG5cdFx0XHRcdHZhciB0aWNrZXRSZXNvbHZlZCA9IG5ldyBEYXRlKGxhc3RSZXNvbHZlZC5jcmVhdGVkX2F0X3JlYWwpO1xuXHRcdFx0XHR2YXIgdGltZURpZmYgPSBNYXRoLmFicyh0aWNrZXRSZXNvbHZlZC5nZXRUaW1lKCkgLSB0aWNrZXRDcmVhdGVkLmdldFRpbWUoKSk7XG5cdFx0XHRcdHZhciBkaWZmRGF5cyA9IE1hdGguY2VpbCh0aW1lRGlmZiAvICgxMDAwICogMzYwMCAqIDI0KSk7IFxuXHRcdFx0XHR0b3RhbFRpbWUgKz0gZGlmZkRheXM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCEodGlja2V0cy5sZW5ndGgpKSB7XG5cdFx0XHQkKFwiI2F2Z1RpbWVUb1NvbHZlVGlja2V0XCIpLnZhbChcIi1cIik7IFxuXHRcdFx0JChcIiNhdmdSZXBsaWVzUGVyVGlja2V0XCIpLnZhbChcIi1cIik7IC8vSWYgdGhlcmUgYXJlIG5vIHRpY2tldHMsIHVzZSB0aGlzIHNvIHdlIGRvbid0IGRpdmlkZSBieSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoXCIjYXZnVGltZVRvU29sdmVUaWNrZXRcIikudmFsKHRvdGFsVGltZS90aWNrZXRzLmxlbmd0aCk7IFxuXHRcdFx0JChcIiNhdmdSZXBsaWVzUGVyVGlja2V0XCIpLnZhbCh0b3RhbFJlcGxpZXMvdGlja2V0cy5sZW5ndGgpOyAvL0NhbGN1bGF0ZXMgYXZlcmFnZSByZXBsaWVzIHBlciB0aWNrZXRcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUxpbmVHcmFwaCh0aWNrZXRzKTsgLy9Mb2FkIEJhY2tsb2cgR3JhcGhcblx0XHR0aGlzLmNyZWF0ZVBpZUNoYXJ0KHRpY2tldHMpOyAvL0xvYWQgUHJvYmxlbSBUeXBlIGdyYXBoXG5cdH1cblxuXHQvL1RoaXMgZnVuY3Rpb24gdGFrZXMgYSBzdGFmZiBtZW1iZXIgb2JqZWN0LCBhbmQgcmVsZXZhbnQgdGlja2V0cyBmb3IgdGhhdCBcblx0Ly9zdGFmZiBtZW1iZXIgYW5kIGFwcHJvcHJpYXRlbHkgZmlsbHMgaW4gdmFsdWVzIG9uIHRoZSBwYWdlXG5cdG9wZW5TdGFmZkluZm8oc3RhZmYsdGlja2V0cykge1xuXHRcdCQoXCIuY29sbGFwc2libGVcIikuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG5cdFx0JChcIiNuYW1lXCIpLnZhbChzdGFmZi5uYW1lKTtcblx0XHQkKFwiI3Bob25lXCIpLnZhbChzdGFmZi5waG9uZSk7XG5cdFx0JChcIiNyb2xlXCIpLnZhbChzdGFmZi5qb2IpO1xuXHRcdCQoXCIjc3RhdHNUaXRsZVwiKS50ZXh0KFwiU3RhdGlzdGljcyAtIFwiICsgc3RhZmYubmFtZSk7XG5cdFx0JChcIiN0aWNrZXRUaXRsZVwiKS50ZXh0KFwiVGlja2V0IEJhY2tsb2cgLSBcIiArIHN0YWZmLm5hbWUpO1xuXHRcdHRoaXMuc2hvd1N0YXRzKGZhbHNlLHRpY2tldHMpO1xuXHR9XG5cblx0Ly9GdW5jdGlvbiB1c2VkIHRvIGxvYWQgYWxsIHN0YWZmIG1lbWJlcnMgaW4gdGhlIHN5c3RlbSBpbiB0aGUgZHJvcCBkb3duIGJveC5cblx0cG9wdWxhdGVTdGFmZk5hbWVTZWFyY2goKSB7XG5cdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuaHRtbChcIlwiKTtcblx0XHR2YXIgc3RhZmZNZW1iZXJzID0gdGhpcy5zdGFmZk1hbmFnZXIuc3RhZmY7XG5cdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuYXBwZW5kKFwiPG9wdGlvbj5TZWFyY2guLi48L29wdGlvbj5cIik7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGFmZk1lbWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdCQoXCIjU3RhZmZOYW1lU2VhcmNoXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgc3RhZmZNZW1iZXJzW2ldLmlkICsgXCInPlwiICsgc3RhZmZNZW1iZXJzW2ldLm5hbWUgKyBcIjwvb3B0aW9uPlwiKTtcblx0XHR9XG5cdFx0JChcIiNTdGFmZk5hbWVTZWFyY2hcIikuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdH1cblxuXHQvL0hhbmRsZXMgYSBuZXcgaXRlbSBpcyBzZWxlY3RlZCBpbiB0aGUgZHJvcCBkb3duIGJveC5cblx0c3RhZmZEcm9wZG93bkNoYW5nZSgpIHtcblx0XHR2YXIgaW5kZXggPSAkKCcjU3RhZmZOYW1lU2VhcmNoJylbMF0uc2VsZWN0ZWRJbmRleDtcblx0XHRpZiAoaW5kZXggPiAwKSB7IC8vU3RhZmYgTWVtYmVyIHNlbGVjdGVkXG5cdFx0XHR2YXIgaWQgPSBOdW1iZXIoJCgnI1N0YWZmTmFtZVNlYXJjaCcpLnZhbCgpKTtcblx0XHRcdHZhciBzdGFmZiA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChpZClcblx0XHRcdHRpY2tldHMgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkKHN0YWZmLmlkKTtcblx0XHRcdHRoaXMub3BlblN0YWZmSW5mbyhzdGFmZiwgdGlja2V0cyk7IC8vRGlzcGxheSBjb3JyZWN0IHBhZ2UgaW5mbyBmb3Igc2VsZWN0ZWQgc3RhZmYgbWVtYmVyXG5cdFx0fSBlbHNlIHsgLy9EZWZhdWx0IG9wdGlvbiBzZWxlY3RlZCAtIGNsb3NlIHN0YWZmIGRldGFpbHNcblx0XHRcdCQoXCIuY29sbGFwc2libGVcIikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblx0XHRcdCQoXCIjbmFtZVwiKS52YWwoXCJcIik7XG5cdFx0XHQkKFwiI3Bob25lXCIpLnZhbChcIlwiKTtcblx0XHRcdCQoXCIjcm9sZVwiKS52YWwoXCJcIik7XG5cdFx0XHQkKFwiI3N0YXRzVGl0bGVcIikudGV4dChcIlN0YXRpc3RpY3NcIik7XG5cdFx0XHQkKFwiI3RpY2tldFRpdGxlXCIpLnRleHQoXCJUaWNrZXQgQmFja2xvZ1wiKTtcblx0XHRcdHZhciB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLnRpY2tldHM7XG5cdFx0XHR0aGlzLnNob3dTdGF0cyh0cnVlLCB0aWNrZXRzKVxuXHRcdH1cblx0fVxuXG5cdC8vUmVzcG9uc2libGUgZm9yIGRpc3BsYXlpbmcgdGhlIGJhY2tsb2cgZ3JhcGguIFRha2VzIHRoZSBwYXJhbWF0ZXIgXCJ0aWNrZXRzXCIgYW5kIHVzZXMgaXQgY2FsY3VsYXRlIHZhbHVlcyB0cCBkaXNwbGF5IFxuXHRjcmVhdGVMaW5lR3JhcGgodGlja2V0cykge1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdHZhciBtb250aE5hbWVzID0gWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuXHRcdHZhciBtb250aHMgPSBuZXcgQXJyYXkoKTtcblx0XHR2YXIgY3VycmVudE1vbnRoID0gbm93LmdldE1vbnRoKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHsgLy9nZXRzIHRoZSBpbmRleGVzIG9mIHRoZSBwcmV2aW91cyA2IG1vbnRocyBhbmQgcHVzaGVzIHRoZW0gdG8gYW4gYXJyYXlcblx0XHRcdG1vbnRocy5wdXNoKGN1cnJlbnRNb250aCk7XG5cdFx0XHRjdXJyZW50TW9udGggPSBjdXJyZW50TW9udGggPT0gMCA/IDExIDogLS1jdXJyZW50TW9udGg7XG5cdFx0fVxuXHRcdG1vbnRocy5yZXZlcnNlKCk7XG5cblx0XHR2YXIgdGlja2V0c09wZW5lZCA9IG5ldyBBcnJheSgpO1xuXHRcdHZhciB0aWNrZXRzVW5yZXNvbHZlZCA9IG5ldyBBcnJheSgpO1xuXHRcdC8vRm9yIGVhY2ggb2YgdGhlIHByZXZpb3VzIDYgbW9udGhzLCB3ZSBjYWxjdWxhdGUgdGhlIGFtb3VudCBvZiB0aWNrZXRzIG9wZW5lZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgYW1vdW50IG9mIHRpY2tldHMgdGhhdCBoYXZlIGJlZW4gcmVzb2x2ZWQgZnJvbSB0aGF0IG1vbnRoXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb250aHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdC8vR2V0cyBhbGwgdGlja2V0cyBvcGVuaW5nIGluIHRoZSBjdXJyZW50IG1vbnRoXG5cdFx0XHR2YXIgb3BlbmVkID0gdGlja2V0cy5maWx0ZXIodCA9PiBuZXcgRGF0ZSh0LmNyZWF0ZWRfYXRfcmVhbCkuZ2V0TW9udGgoKSA9PSBtb250aHNbal0pXG5cdFx0XHR0aWNrZXRzT3BlbmVkLnB1c2gob3BlbmVkLmxlbmd0aCk7XG5cdFx0XHQvL0dldHMgYWxsIHVucmVzb2x2ZWQgdGlja2V0cyB0aGF0IHdlcmUgb3BlbmVkIGluIHRoZSBjdXJyZW50IG1vbnRoXG5cdFx0XHR2YXIgdW5yZXNvbHZlZCA9IHRpY2tldHMuZmlsdGVyKHQgPT4gKG5ldyBEYXRlKHQuY3JlYXRlZF9hdF9yZWFsKS5nZXRNb250aCgpID09IG1vbnRoc1tqXSAmJiB0LnN0YXR1cy5zbHVnICE9IFwicmVzb2x2ZWRcIikpXG5cdFx0XHR0aWNrZXRzVW5yZXNvbHZlZC5wdXNoKHVucmVzb2x2ZWQubGVuZ3RoKTtcblx0XHR9XG5cblx0XHQkKCcjdGlja2V0LWJhY2tsb2cnKS5odG1sKFwiPGNhbnZhcyBpZD0ndGlja2V0QmFja2xvZyc+PC9jYW52YXM+XCIpO1xuXHRcdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpY2tldEJhY2tsb2dcIikuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHRcdHZhciBvcFN0YXRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcblx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0bGFiZWxzOiBbbW9udGhOYW1lc1ttb250aHNbMF1dLCBtb250aE5hbWVzW21vbnRoc1sxXV0sIG1vbnRoTmFtZXNbbW9udGhzWzJdXSwgbW9udGhOYW1lc1ttb250aHNbM11dLCBtb250aE5hbWVzW21vbnRoc1s0XV0sIG1vbnRoTmFtZXNbbW9udGhzWzVdXV0sIC8vTGFiZWxzIG9mIG1vbnRoc1xuXHRcdFx0XHRkYXRhc2V0czogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAnIyBUaWNrZXRzIFVucmVzb2x2ZWQnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW3RpY2tldHNVbnJlc29sdmVkWzBdLCB0aWNrZXRzVW5yZXNvbHZlZFsxXSwgdGlja2V0c1VucmVzb2x2ZWRbMl0sIHRpY2tldHNVbnJlc29sdmVkWzNdLCB0aWNrZXRzVW5yZXNvbHZlZFs0XSwgdGlja2V0c1VucmVzb2x2ZWRbNV1dLCAvL0RhdGEgb2YgdW5yZXNvbHZlZCB0aWNrZXRzXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyMDksMjE4LDAuOCknXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XHRcblx0XHRcdFx0XHRcdGxhYmVsOiAnIyBUaWNrZXRzIE9wZW5lZCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbdGlja2V0c09wZW5lZFswXSwgdGlja2V0c09wZW5lZFsxXSwgdGlja2V0c09wZW5lZFsyXSwgdGlja2V0c09wZW5lZFszXSwgdGlja2V0c09wZW5lZFs0XSwgdGlja2V0c09wZW5lZFs1XV0sIC8vRGF0YSBvZiB0b3RhbCB0aWNrZXRzIG9wZW5lZFxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2JhKDk5LDEzMiwyNTUsMSknLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSg5OSwxMzIsMjU1LDAuMiknXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdHJlc3BvbnNpdmU6dHJ1ZSxcblx0XHRcdFx0bWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG5cdFx0XHRcdHNjYWxlczoge1xuXHRcdFx0XHRcdHlBeGVzOiBbe1xuXHRcdFx0XHRcdFx0dGlja3M6IHtcblx0XHRcdFx0XHRcdFx0YmVnaW5BdFplcm86dHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1dXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZVBpZUNoYXJ0KHRpY2tldHMpIHtcblx0XHR2YXIgcm9vdFByb2JsZW1UeXBlcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0Um9vdEV4cGVydGlzZVR5cGVzKCk7IC8vR2V0cyB0aGUgbWFqb3Ivcm9vdCBFeHBlcnRpc2UgdHlwZXNcblx0XHRcblx0XHR2YXIgUHJvYmxlbVR5cGVOYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdHZhciB0aWNrZXRzUGVyUHJvYmxlbVR5cGUgPSBuZXcgQXJyYXkoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RQcm9ibGVtVHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFByb2JsZW1UeXBlTmFtZXMucHVzaChyb290UHJvYmxlbVR5cGVzW2ldLm5hbWUpOyAvL0FkZHMgdGhlIG5hbWVzIG9mIGVhY2ggcm9vdCBFeHBlcnRpc2UgdHlwZSB0byBhbiBhcnJheSBcblxuXHRcdFx0dmFyIHRpY2tldENvdW50ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHRpY2tldHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0dmFyIHByb2JUeXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbih0aWNrZXRzW2pdLmV4cGVydGlzZV90eXBlKTtcblx0XHRcdFx0dmFyIHJvb3RQcm9ibGVtVHlwZSA9IHByb2JUeXBlQ2hhaW5bcHJvYlR5cGVDaGFpbi5sZW5ndGggLSAxXTsgLy9HZXRzIHRoZSByb290IHByb2JsZW0gdHlwZSBmb3IgdGhlIGN1cnJlbnQgdGlja2V0LlxuXHRcdFx0XHRpZiAocm9vdFByb2JsZW1UeXBlc1tpXS5pZCA9PSByb290UHJvYmxlbVR5cGUuaWQpIHsgLy9JZiB0aGUgY3VycmVudCB0aWNrZXQncyByb290IHByb2JsZW0gdHlwZSBhbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9ibGVtIHR5cGUgYXJlIHRoZSBzYW1lXG5cdFx0XHRcdFx0Ly9XZSBhZGQgdGhlIHRpY2tldCB0byBhbiBhcnJheSBhbmQgcmVtb3ZlIGl0IGZyb20gdGlja2V0cyAoc28gd2Ugbm8gbG9uZ2VyIGhhdmUgdG8gc2VhcmNoIGl0IGVhY2ggaXRlcmF0aW9uLiBIZWxwcyB0byBzcGVlZCB0aGluZ3MgdXApXHRcblx0XHRcdFx0XHR0aWNrZXRDb3VudC5wdXNoKHRpY2tldHNbal0pO1xuXHRcdFx0XHRcdHRpY2tldHMuc3BsaWNlKGosMSk7XG5cdFx0XHRcdFx0LS1qO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRpY2tldHNQZXJQcm9ibGVtVHlwZS5wdXNoKHRpY2tldENvdW50Lmxlbmd0aCk7IFxuXHRcdH1cblxuXHRcdCQoJyNwcm9ibGVtLXR5cGUtY2FyZCcpLmh0bWwoXCI8Y2FudmFzIGlkPSdwcm9ibGVtVHlwZVNvbHZlZCc+PC9jYW52YXM+XCIpO1xuXHRcdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2JsZW1UeXBlU29sdmVkXCIpLmdldENvbnRleHQoJzJkJyk7XG5cdFx0dmFyIHByb2JUeXBlQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG5cdFx0XHR0eXBlOiAnZG91Z2hudXQnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRkYXRhc2V0czogW3tcblx0XHRcdFx0XHRkYXRhOiB0aWNrZXRzUGVyUHJvYmxlbVR5cGUsIC8vRGF0YSBmb3IgdGhlIHBpZSBjaGFydFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogW1xuXHRcdFx0XHRcdFx0J3JnYmEoMjU1LDk5LDk5LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDk5LDI1NSw5OSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSg5OSw5OSwyNTUsMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoMjU1LDk5LDI1NSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSgyNTUsMjU1LDk5LDEpJyxcblx0XHRcdFx0XHRcdCdyZ2JhKDk5LDI1NSwyNTUsMSknLFxuXHRcdFx0XHRcdFx0J3JnYmEoMjU1LDIwMCw5OSwxKScsXG5cdFx0XHRcdFx0XHQncmdiYSgyMDAsMjU1LDE1MCwxKSdcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRsYWJlbHM6IFByb2JsZW1UeXBlTmFtZXMgLy9MYWJlbHMgZm9yIHRoZSBwaWUgY2hhcnRcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdGxlZ2VuZDoge1xuXHRcdFx0XHRcdHBvc2l0aW9uOidyaWdodCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL21ldHJpY3MvTWV0cmljc1BhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9