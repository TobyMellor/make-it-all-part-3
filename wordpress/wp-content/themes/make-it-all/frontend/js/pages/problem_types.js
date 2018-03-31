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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
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
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),
/* 56 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9EeW5hbWljUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9DYWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zdGFmZi9FbXBsb3llZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3NvZnR3YXJlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvVGlja2V0U3RhdHVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvUHJvYmxlbVR5cGVQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL3Byb2JsZW1fdHlwZXMuanMiXSwibmFtZXMiOlsiVGlja2V0TWFuYWdlciIsImV4cGVydGlzZVR5cGVNYW5hZ2VyIiwid2luZG93IiwiY2FsbHMiLCJhcGkiLCJtYXAiLCJlIiwidGlja2V0cyIsImNvbW1lbnRzIiwic3RhdHVzZXMiLCJ0aWNrZXRTdGF0dXNlcyIsImNhbGxJZCIsImZpbmQiLCJjYWxsIiwiaWQiLCJ0aWNrZXRJZCIsImZpbHRlciIsIl90aWNrZXRzIiwiaW5kZXhPZiIsImNvbW1lbnQiLCJfY2FsbCIsInN0YXR1c0lkIiwic3RhdHVzIiwic3RhdHVzU2x1ZyIsInNsdWciLCJ0aWNrZXQiLCJ0aWNrZXRJZHMiLCJzdGF0dXNTbHVncyIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsIl9jYWxscyIsInN0YWZmSWQiLCJleHBlcnRpc2VUeXBlU3RhZmYiLCJfYXNzaWduZWRfdG9fb3BlcmF0b3IiLCJfZXhwZXJ0aXNlX3R5cGVfc3RhZmYiLCJfc3RhZmYiLCJzdGFmZklkcyIsInJlc3VsdCIsImZvckVhY2giLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQiLCJ0aWNrZXRQYWdlIiwic3RhZmZNYW5hZ2VyIiwiY3VycmVudFVzZXIiLCJhc3NpZ25lZF90b19vcGVyYXRvciIsImV4cGVydGlzZV90eXBlX3N0YWZmIiwic3RhZmYiLCJnZXRUaWNrZXRBc3NpZ25lZFRvIiwidGlja2V0U3RhdHVzSWQiLCJ0aWNrZXRTdGF0dXMiLCJfdGlja2V0IiwiY29tbWVudElkIiwiaWRzIiwiZXhwZXJ0aXNlVHlwZUlkIiwiZXhwZXJ0aXNlVHlwZXMiLCJnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZCIsImNvbmNhdCIsImdldFRpY2tldHNXaXRoSWRJbiIsInF1ZXJ5IiwicHJvcGVydGllcyIsIlN0YWZmTWFuYWdlciIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWUiLCJwZXJtaXNzaW9uIiwidmFsdWUiLCJhY2Nlc3MiLCJhc0VtcGxveWVlIiwiZ2V0IiwiZXhwZXJ0aXNlVHlwZSIsIl9zcGVjaWFsaXNtcyIsIm91dHB1dCIsInB1c2giLCJFeHBlcnRpc2VUeXBlTWFuYWdlciIsIl9wYXJlbnQiLCJleHBlcnRpc2VUeXBlSWRzIiwiX2V4cGVydGlzZV90eXBlIiwiZXhwZXJ0aXNlVHlwZVBhcmVudCIsInBhcmVudCIsImV4cGVydGlzZVR5cGVTdGFmZklkIiwiTWFuYWdlciIsImVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiU3RyaW5nIiwiZWwiLCJwcm9wIiwiaW5jbHVkZXMiLCJEeW5hbWljUGFnZSIsInNlY3Rpb25TZWxlY3RvciIsInRhYmxlU2VsZWN0b3IiLCJuYXZTZWxlY3RvciIsImRldGFpbFNlbGVjdG9yIiwic3BsaXQiLCJodG1sIiwiJCIsIm5hdlRleHQiLCIkdGFibGUiLCJyZXN1bHRzQ291bnQiLCJoYXNDbGFzcyIsIiRzcGxhc2hTY3JlZW4iLCIkc2hvdyIsIiRoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpcnN0IiwidGV4dCIsInJlcGxhY2UiLCJjbG9zZXN0IiwidW5kZWZpbmVkIiwib2JqZWN0IiwiJHRhYmxlU2VjdGlvbiIsIiR0YWJsZUhlYWQiLCIkdGFibGVCb2R5IiwiJG5ld1JvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZGF0YXNldCIsInJvd2lkIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVhY2giLCJ0ZCIsImlubmVySFRNTCIsIk9iamVjdCIsInJlc29sdmUiLCJhcHBlbmQiLCJlbXB0eSIsInNpYmxpbmdzIiwidW53cmFwIiwiY2xpY2siLCJoaWRlVGFibGVSb3dEZXRhaWxzIiwid3JhcCIsIiRzZWxlY3QiLCJkZWZhdWx0VGV4dCIsImRlZmF1bHRPcHRpb25JZCIsInByb3BlcnR5IiwiZ2V0QWRkaXRpb25hbERldGFpbHMiLCJvcHRpb24iLCJPcHRpb24iLCJkaXNhYmxlZCIsInNlbGVjdHBpY2tlciIsIm9iamVjdENhbGxiYWNrIiwic2VhcmNoS2V5cyIsInBhZ2UiLCJjbGVhclRhYmxlIiwia2V5IiwiUmVnRXhwIiwidmFsIiwiYXBwZW5kVGFibGVSb3ciLCJ1cGRhdGVTcGxhc2hTY3JlZW4iLCJtZXNzYWdlIiwidHlwZSIsImR1cmF0aW9uIiwicmVtb3ZlIiwibXNnIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIkhhcmR3YXJlTWFuYWdlciIsImRldmljZXMiLCJTZXQiLCJ0IiwiZGV2aWNlc0J5VHlwZSIsImRldmljZSIsIm1ha2UiLCJzZXJpYWxOdW1iZXIiLCJkIiwic2VyaWFsX25vIiwiU29mdHdhcmVNYW5hZ2VyIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwib24iLCJjdXJyZW50VGFyZ2V0IiwidG9vbHRpcCIsImRhdGV0aW1lcGlja2VyIiwibmV3VmFsdWUiLCIkbW9kYWwiLCJtb2RhbCIsImF0dHIiLCJub3QiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbGxhcHNlIiwiaXNTaG93IiwidG9nZ2xlIiwidGFyZ2V0IiwiYWRkSXRlbVRvUGlja2VyIiwicGlja2VyRWxlbWVudCIsIm5hbWUiLCJ2YWxpZGF0aW9uVGltZW91dCIsIkNvbW1lbnQiLCJhdXRob3IiLCJhdXRob3JfaWQiLCJjYWxsX2lkIiwidGlja2V0X2lkIiwiY29udGVudCIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXRfaHVtYW4iLCJjcmVhdGVkQXRSZWFsIiwiY3JlYXRlZF9hdCIsImNyZWF0ZWRfYXRfcmVhbCIsIl9hdXRob3IiLCJnZXRDYWxsIiwiZ2V0VGlja2V0IiwiQ2FsbCIsInRpbWUiLCJjYWxsZXIiLCJjYWxsZXJfaWQiLCJvcGVyYXRvciIsIm9wZXJhdG9yX2lkIiwiX2NhbGxlciIsIl9vcGVyYXRvciIsImdldFRpY2tldHNGcm9tQ2FsbCIsIkVtcGxveWVlIiwiZW1haWwiLCJqb2IiLCJqb2JfdGl0bGUiLCJkZXBhcnRtZW50IiwicGhvbmUiLCJwaG9uZV9udW1iZXIiLCJleHBlcnRpc2VfdHlwZXMiLCJzcGVjaWFsaXNtcyIsInNwZWNpYWxpc3QiLCJhbmFseXN0IiwiYWRtaW4iLCJfZGVwYXJ0bWVudCIsInJlYWQiLCJyZWFkb25seSIsImdldEV4cGVydGlzZVR5cGVzIiwiZGF0YSIsImRlcGFydG1lbnRfaWQiLCJFeHBlcnRpc2VUeXBlIiwicGFyZW50X2lkIiwiZ2V0RXhwZXJ0aXNlVHlwZSIsIl9jaGlsZHJlbiIsIkV4cGVydGlzZVR5cGVTdGFmZiIsInN0YWZmX2lkIiwiZXhwZXJ0aXNlX3R5cGVfaWQiLCJleHBlcnRpc2VfdHlwZSIsIlN0YXR1cyIsImdldFRpY2tldHNXaXRoU2x1ZyIsIlRpY2tldCIsInN0YXR1c0hpc3RvcnkiLCJzdGF0dXNfaGlzdG9yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2x1dGlvbiIsInNvbHV0aW9uX2lkIiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdF9odW1hbiIsInVwZGF0ZWRBdFJlYWwiLCJ1cGRhdGVkX2F0IiwiZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQiLCJhc3NpZ25lZFRvT3BlcmF0b3JJZCIsImFzc2lnbmVkX3RvX29wZXJhdG9yX2lkIiwidXBkYXRlZF9hdF9yZWFsIiwiZ2V0Q2FsbHNCeVRpY2tldElkIiwiZ2V0U3RhdHVzIiwiX3N0YXR1cyIsImdldFN0YXR1c0hpc3RvcnkiLCJfc3RhdHVzX2hpc3RvcnkiLCJnZXREZXZpY2VzIiwiX2RldmljZXMiLCJnZXRQcm9ncmFtcyIsIl9wcm9ncmFtcyIsImdldENvbW1lbnRzQnlJZHMiLCJfY29tbWVudHMiLCJnZXRDb21tZW50IiwiX3NvbHV0aW9uIiwiZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiRGV2aWNlIiwiZ2V0VGlja2V0c0J5VGlja2V0SURzIiwiQXJyYXkiLCJQcm9ncmFtIiwib3BlcmF0aW5nX3N5c3RlbSIsImV4cGlyeV9kYXRlIiwiVGlja2V0U3RhdHVzIiwic3RhdHVzX2lkIiwiQVBJIiwidGlja2V0X3N0YXR1c2VzIiwiU3RhZmZQYWdlIiwidGlja2V0TWFuYWdlciIsInRpY2tldHNDb2x1bW5JbmRleCIsImluZGV4Iiwic3RhZmZGb3JUaWNrZXRzIiwiJHRhYmxlUm93IiwiJHJvd3MiLCJnZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWRzIiwic2hvd05vdGlmaWNhdGlvbiIsInVwZGF0ZVNpbmdsZVZpZXdOYXZiYXIiLCJjdXN0b21zbHVnIiwic2hvd1Blcm1pc3Npb25zIiwic3JjIiwic3RhZmZQcm9ibGVtVHlwZVBhZ2UiLCJjdXJyZW50U3BlY2lhbGlzbXMiLCJsb2FkU3BlY2lhbGlzdEV4cGVydGlzZVR5cGVzIiwic2VhcmNoIiwiYXNzaWduIiwib2JqIiwic2hvd1N0YWZmIiwiaWNvbnMiLCJlbEljb24iLCJlbFRleHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImVsUGVybWlzc2lvbiIsIlRpY2tldFBhZ2UiLCJzb2Z0d2FyZU1hbmFnZXIiLCJoYXJkd2FyZU1hbmFnZXIiLCJjdXJyZW50VGlja2V0IiwiZmlsdGVyZWRUaWNrZXRzIiwiZmlsdGVyZWRUaWNrZXQiLCJqIiwic3BsaXRTdGF0dXNTbHVncyIsImdldE15VGlja2V0cyIsImdldFRpY2tldHNXaXRoU2x1Z0luIiwic3RhdHVzX25hbWUiLCIkdGlja2V0Q29tbWVudHMiLCIkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZSIsIiR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUiLCIkdGlja2V0Q2FsbEhpc3RvcnlCb2R5Iiwic2hvdyIsImhpZGUiLCJzaG93VGFibGVSb3dEZXRhaWxzIiwiYWZmZWN0ZWRJdGVtcyIsIiR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keSIsImFmZmVjdGVkSXRlbSIsImhhc093blByb3BlcnR5IiwibWUiLCJnZXRUaWNrZXRTdGF0dXNlc0J5VGlja2V0SWQiLCJ0aWNrZXRGZWVkIiwiJHRpY2tldEZlZWQiLCJzb3J0IiwiYSIsImIiLCJwYXJzZSIsInBvc3QiLCJwcmVwZW5kIiwiaXNTb2x1dGlvbiIsInJlZnJlc2hQYWdlIiwiJGNhbGxIaXN0b3J5IiwiJGNhbGxUaWNrZXRUYWJsZSIsImNhbGxDb21tZW50IiwiZ2V0Q2FsbE5vdGVzQnlDYWxsSWQiLCJzaG93RmlsdGVyZWRUaWNrZXRzIiwic2hvd1RpY2tldFZpZXciLCIkc3RhZmZJbmZvcm1hdGlvbiIsImVtcGxveWVlSWQiLCIkYXNzaWduZWRUb09wdGlvbnMiLCJiZXN0U3BlY2lhbGlzdCIsImhhc1NwZWNpYWxpc20iLCJiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmIiwiZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkIiwiJHNwZWNpYWxpc3RJZCIsIiRzcGVjaWFsaXN0U2hvd2Nhc2UiLCJFeHBlcnRpc2VUeXBlUGFnZSIsImlzUGFnZSIsIiR0eXBlQ29sdW1ucyIsIiRsaSIsImxvYWRFeHBlcnRpc2VUeXBlSW5mbyIsImdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0iLCJuZXh0QWxsIiwiJHR5cGVDb2x1bW4iLCJnZXRSb290RXhwZXJ0aXNlVHlwZXMiLCJjaGlsZHJlbklkcyIsInNwZWNpYWxpc3RzIiwiZ2V0U3BlY2lhbGlzdHMiLCJjaGlsZCIsInNjcm9sbExlZnQiLCJ3aWR0aCIsImV4cGVydGlzZVR5cGVDaGFpbiIsImdldEV4cGVydGlzZVR5cGVDaGFpbiIsImxvYWRTdWJFeHBlcnRpc2VUeXBlcyIsInByb2JsZW1UeXBlUGFnZSIsIiRzaW5nbGVWaWV3IiwiJG5hdkJhciIsIiRleHBlcnRpc2VUeXBlVmlldyIsIiRleHBlcnRpc2VUeXBlVGFibGUiLCIkc3BlY2lhbGlzdHNUYWJsZSIsIiR0aWNrZXRzVGFibGUiLCIkbm9TcGVjaWFsaXN0c0RhdGEiLCIkbm9UaWNrZXRzRGF0YSIsImdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZCIsImJyZWFkY3J1bSIsIiRleHBlcnRpc2VUeXBlUGlja2VyIiwicHJldlF1ZXJ5IiwibGFzdEluZGV4T2YiLCJ0eXBlQ2hhaW4iLCJwb3AiLCIkdHlwZSIsInBhcmVudHMiLCJpbml0IiwiZ290byIsIk51bWJlciIsInBhcmVudElkIiwicHJldiIsImNyZWF0ZUV4cGVydGlzZVR5cGUiLCIkcm93IiwiXyIsImNvbmZpcm0iLCJkZWxldGUiLCJ0aGVuIiwiVHVyYm9saW5rcyIsInZpc2l0Iiwia2V5dXAiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJrZXlDb2RlIiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJibHVyIiwiJGxhc3RBY3RpdmVUeXBlIiwiaXMiLCJmb2N1cyIsIiRjb2x1bW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLGE7OztBQUNwQiwwQkFBYztBQUFBOztBQUFBOztBQUdiLFFBQUtDLG9CQUFMLEdBQTRCQyxPQUFPRCxvQkFBUCxJQUErQixvQ0FBM0Q7O0FBRUEsUUFBS0UsS0FBTCxHQUFnQkMsSUFBSUQsS0FBSixDQUFVRSxHQUFWLENBQWM7QUFBQSxVQUFLLG1CQUFTQyxDQUFULENBQUw7QUFBQSxHQUFkLENBQWhCO0FBQ0EsUUFB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFB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dC90aGVtZXMvbWFrZS1pdC1hbGwvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZGY4OTliNzY3NWZmZmNhNWJkNyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FsbCBmcm9tIFwiLi9DYWxsXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL1N0YXR1c1wiO1xuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXRcIjtcbmltcG9ydCBUaWNrZXRTdGF0dXMgZnJvbSBcIi4vVGlja2V0U3RhdHVzXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4uL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBUaWNrZXRNYW5hZ2VyXG4gKlxuICogUmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEFKQVggcmVxdWVzdCBjb250YWluaW5nIHN0YXR1c2VzXG4gKiBhbmQgdGlja2V0cyBhbmQgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFRpY2tldE1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyID0gd2luZG93LmV4cGVydGlzZVR5cGVNYW5hZ2VyIHx8IG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpO1xuXG5cdFx0dGhpcy5jYWxscyAgICA9IGFwaS5jYWxscy5tYXAoZSA9PiBuZXcgQ2FsbChlKSk7XG5cdFx0dGhpcy50aWNrZXRzICA9IGFwaS50aWNrZXRzLm1hcChlID0+IG5ldyBUaWNrZXQoZSkpO1xuXHRcdHRoaXMuY29tbWVudHMgPSBhcGkuY29tbWVudHMubWFwKGUgPT4gbmV3IENvbW1lbnQoZSkpO1xuXHRcdHRoaXMuc3RhdHVzZXMgPSBhcGkuc3RhdHVzZXMubWFwKGUgPT4gbmV3IFN0YXR1cyhlKSk7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyA9IGFwaS50aWNrZXRTdGF0dXNlcy5tYXAoZSA9PiBuZXcgVGlja2V0U3RhdHVzKGUpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNhbGwgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjYWxsSWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjYWxsIHRhYmxlXG5cdCAqIEByZXR1cm4ge0NhbGx9IHNpbmdsZSBpbnN0YW5jZSBvZiBDYWxsIHdpdGggY2FsbElkXG5cdCAqL1xuXHRnZXRDYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbmQoY2FsbCA9PiBjYWxsLmlkID09PSBjYWxsSWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBjYWxscyByZWZlcmVuY2luZyBhIHNwZWNpZmljIHRpY2tldFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0IHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIFRpY2tldCBpbnN0YW5jZXNcblx0ICovXG5cdGdldENhbGxzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxzLmZpbHRlcihjYWxsID0+IGNhbGwuX3RpY2tldHMuaW5kZXhPZih0aWNrZXRJZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBub3RlcyBmb3IgYSBjYWxsXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtDb21tZW50fSBzaW5nbGUgaW5zdGFuY2Ugb2YgQ29tbWVudCB3aXRoIGNhbGxJZFxuXHQgKi9cblx0Z2V0Q2FsbE5vdGVzQnlDYWxsSWQoY2FsbElkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuX2NhbGwgPT09IGNhbGxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHN0YXR1cyB3aXRoIHRoZSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgU3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge1N0YXR1c30gc2luZ2xlIGluc3RhbmNlIG9mIFN0YXR1cyB3aXRoIElEXG5cdCAqL1xuXHRnZXRTdGF0dXMoc3RhdHVzSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXNlcy5maW5kKHN0YXR1cyA9PiBzdGF0dXMuaWQgPT09IHN0YXR1c0lkKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgc3RhdHVzIHdpdGggdGhlIHNsdWdcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIFN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBTdGF0dXMgd2l0aCBzdGF0dXNTbHVnXG5cdCAqL1xuXHRnZXRTdGF0dXNCeVNsdWcoc3RhdHVzU2x1Zykge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1c2VzLmZpbmQoc3RhdHVzID0+IHN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gdGlja2V0SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiB0aWNrZXQgdGFibGVcblx0ICogQHJldHVybiB7VGlja2V0fSBzaW5nbGUgaW5zdGFuY2Ugb2YgVGlja2V0IHdpdGggdGlja2V0SWRcblx0ICovXG5cdGdldFRpY2tldCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmluZCh0aWNrZXQgPT4gdGlja2V0LmlkID09PSB0aWNrZXRJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBhIHN0YXR1c1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgc2x1ZyBjb2x1bW4gb2Ygc3RhdHVzIHRhYmxlXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIGluIGEgU3RhdHVzXG5cdCAqL1xuXHRnZXRUaWNrZXRzV2l0aElkSW4odGlja2V0SWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldElkcy5pbmRleE9mKHRpY2tldC5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRpY2tldCBjdXJyZW50bHkgaW4gYSBzdGF0dXNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1c1NsdWcgcmVwcmVzZW50aW5nIHNsdWcgY29sdW1uIG9mIHN0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBhIFN0YXR1c1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnKHN0YXR1c1NsdWcpIHtcblx0XHRyZXR1cm4gdGhpcy50aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0LnN0YXR1cy5zbHVnID09PSBzdGF0dXNTbHVnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGlja2V0IGN1cnJlbnRseSBpbiBvbmUgb2YgbWFueSBnaXZlbiBzdGF0dXNlc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBzdGF0dXNTbHVncyBBcnJheSBvZiBTdHJpbmdzJ3MgcmVwcmVzZW50aW5nIHN0YXR1cyBzbHVnc1xuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyBpbiBvbmUgb2YgbWFueSBnaXZlbiBTdGF0dXMnc1xuXHQgKi9cblx0Z2V0VGlja2V0c1dpdGhTbHVnSW4oc3RhdHVzU2x1Z3MpIHtcblx0XHRsZXQgdGlja2V0cyA9IHRoaXMudGlja2V0cy5zbGljZSgwKTtcblxuXHRcdGZvciAobGV0IGkgPSB0aWNrZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAoc3RhdHVzU2x1Z3MuaW5kZXhPZih0aWNrZXRzW2ldLnN0YXR1cy5zbHVnKSA9PT0gLTEpIHRpY2tldHMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aWNrZXRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aWNrZXRzIHJlZmVyZW5jZWQgaW4gYSBjYWxsIHdpdGggdGhlIGlkXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gY2FsbElkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgY2FsbCB0YWJsZVxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlcyByZWZlcmVuY2VkIGluIGEgQ2FsbFxuXHQgKi9cblx0Z2V0VGlja2V0c0Zyb21DYWxsKGNhbGxJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB0aWNrZXQuX2NhbGxzLmluZGV4T2YoY2FsbElkKSA+IC0xKTtcblx0fVxuXG5cdGdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZChzdGFmZklkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVTdGFmZiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRyZXR1cm4gdGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciA9PT0gc3RhZmZJZCB8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VGlja2V0c0Fzc2lnbmVkVG9TdGFmZklkcyhzdGFmZklkcykge1xuXHRcdGxldCBleHBlcnRpc2VUeXBlU3RhZmYgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRcdHRpY2tldHMgICAgICAgICAgICA9IHRoaXMudGlja2V0cyxcblx0XHRcdHJlc3VsdCAgICAgICAgICAgICA9IHt9O1xuXG5cdFx0c3RhZmZJZHMuZm9yRWFjaChzdGFmZklkID0+IHtcblx0XHRcdHJlc3VsdFtzdGFmZklkXSA9IHRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzdGFmZklkXG5cdFx0XHRcdFx0XHR8fCBleHBlcnRpc2VUeXBlU3RhZmYuZmluZChlID0+IGUuaWQgPT09IHRpY2tldC5fZXhwZXJ0aXNlX3R5cGVfc3RhZmYpLl9zdGFmZiA9PT0gc3RhZmZJZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldE15VGlja2V0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGlja2V0UGFnZS5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBvcGVyYXRvciBvciBzcGVjaWFsaXN0IHRoZSB0aWNrZXQgaXMgYXNzaWduZWQgdG8uXG5cdCAqXG5cdCAqIElmIGFuIG9wZXJhdG9yIGlzIG5vdCBhc3NpZ25lZCwgdGhlbiB0aGUgRXhwZXJ0aXNlVHlwZVN0YWZmIHdpbGxcblx0ICogYmUgdXNlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUaWNrZXR9IHRpY2tldFxuXHQgKiBAcmV0dXJuIHtFbXBsb3llZX0gRW1wbG95ZWUgdGhlIHRpY2tldCBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpIHtcblx0XHRpZiAodGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCkgcmV0dXJuIHRpY2tldC5hc3NpZ25lZF90b19vcGVyYXRvcjtcblxuXHRcdHJldHVybiB0aWNrZXQuZXhwZXJ0aXNlX3R5cGVfc3RhZmYuc3RhZmY7IC8vIG9ubHkgdXNlIGV4cGVydGlzZV90eXBlX3N0YWZmIGlmIHRoZXJlIGlzIG5vIGFzc2lnbmVkIG9wZXJhdG9yXG5cdH1cblxuXHQvKipcblx0ICogSWYgdGlja2V0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluXG5cdCAqIHVzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGlja2V0fSB0aWNrZXRcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gSWYgYXNzaWduZWQgdG8gc2VsZlxuXHQgKi9cblx0aXNUaWNrZXRBc3NpZ25lZFRvU2VsZih0aWNrZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUaWNrZXRBc3NpZ25lZFRvKHRpY2tldCkgPT09IHRpY2tldFBhZ2Uuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKCk7IFxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGlja2V0IHN0YXR1cyB3aXRoIHRoZSBpZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldFN0YXR1c0lkIHJlcHJlc2VudGluZyBpZCBjb2x1bW4gb2YgdGlja2V0X3N0YXR1cyB0YWJsZVxuXHQgKiBAcmV0dXJuIHtUaWNrZXRTdGF0dXN9IHNpbmdsZSBpbnN0YW5jZSBvZiBUaWNrZXRTdGF0dXMgd2l0aCB0aWNrZXRTdGF0dXNJZFxuXHQgKi9cblx0Z2V0VGlja2V0U3RhdHVzKHRpY2tldFN0YXR1c0lkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlja2V0U3RhdHVzZXMuZmluZCh0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLmlkID09PSB0aWNrZXRTdGF0dXNJZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRpY2tldCBzdGF0dXNlcyBmb3IgYSB0aWNrZXRcblx0ICpcblx0ICogQHBcblx0ICovXG5cdGdldFRpY2tldFN0YXR1c2VzQnlUaWNrZXRJZCh0aWNrZXRJZCkge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldFN0YXR1c2VzLmZpbHRlcih0aWNrZXRTdGF0dXMgPT4gdGlja2V0U3RhdHVzLl90aWNrZXQgPT09IHRpY2tldElkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGNvbW1lbnQgd2l0aCB0aGUgaWRcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBjb21tZW50SWQgcmVwcmVzZW50aW5nIGlkIGNvbHVtbiBvZiBjb21tZW50IHRhYmxlXG5cdCAqIEByZXR1cm4ge0NvbW1lbnR9IHNpbmdsZSBpbnN0YW5jZSBvZiBDb21tZW50IHdpdGggY29tbWVudElkXG5cdCAqL1xuXHRnZXRDb21tZW50KGNvbW1lbnRJZCkge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbmQoY29tbWVudCA9PiBjb21tZW50LmlkID09PSBjb21tZW50SWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgY29tbWVudHNcblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBjb250YWluaW5nIEFycmF5IG9mIENvbW1lbnQgaW5zdGFuY2VzXG5cdCAqL1xuXHRnZXRDb21tZW50c0J5SWRzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGlkcy5pbmRleE9mKGNvbW1lbnQuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdGlja2V0cyBhc3NvY2lhdGVkIHdpdGggYW4gZXhwZXJ0aXNlIHR5cGUgc3RhZmZcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVTdGFmZklkIFRoZSBJRCBvZiB0aGUgZXhwZXJ0aXNlIHR5cGUgc3RhZmYgdG8gZmluZCB0aWNrZXRzIGZvclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEFsbCBtYXRjaGluZyB0aWNrZXRzXG5cdCAqL1xuXHRnZXRUaWNrZXRzQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0bGV0IGV4cGVydGlzZVR5cGVzID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlU3RhZmZCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlSWQpLFxuXHRcdFx0dGlja2V0SWRzICAgICAgPSBbXS5jb25jYXQoLi4uZXhwZXJ0aXNlVHlwZXMubWFwKGUgPT4gZS50aWNrZXRzKSk7IC8vIG1vdmUgYWxsIG9mIGV4cGVydGlzZVR5cGVzW2ldLnRpY2tldHMgaW50byBhIHNpbmdsZSBhcnJheVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGlja2V0c1dpdGhJZEluKHRpY2tldElkcyk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoIHRpY2tldHMgb24gYSBwcm9wZXJ0eSBmb3IgYSBwcm92aWRlZCBzZWFyY2ggcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0ge0FycmF5fSBwcm9wZXJ0aWVzIEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIGVsZW1lbnRzIHByb3BlcnR5IG5hbWVzIHRvIHNlYXJjaCB0aHJvdWdoXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUaWNrZXQgaW5zdGFuY2VzIHNhdGlzZnlpbmcgdGhlIHNlYXJjaCBjb25kaXRpb25cblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy50aWNrZXRzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGNvbGxlY3Rpb24gb2YgdGlja2V0cyBieSB0aGVpciBJRHNcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gaWRzIFRoZSBJRHMgb2YgdGhlIHJlcXVlc3RlZCB0aWNrZXRzIFxuXHQgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVGlja2V0IGluc3RhbmNlc1xuXHQgKi9cblx0Z2V0VGlja2V0c0J5VGlja2V0SURzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLnRpY2tldHMuZmlsdGVyKHRpY2tldCA9PiBpZHMuaW5kZXhPZih0aWNrZXQuaWQpID4gLTEpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvdGlja2V0cy9UaWNrZXRNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFbXBsb3llZSBmcm9tIFwiLi9FbXBsb3llZVwiO1xuXG4vKipcbiAqIFN0YWZmTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBBSkFYIHJlcXVlc3QgY29udGFpbmluZyBzdGFmZlxuICogY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3Nlcy4gXG4gKiBDb250YWlucyBhbGwgZnVuY3Rpb25zIHRvIHJldHVybiBhbmQgc2VhcmNoIHRoZSBkYXRhLlxuICpcbiAqIFN0YWZmTWFuYWdlciBzaG91bGQgbmV2ZXIga25vdyBhYm91dCB0aGUgRE9NXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWZmTWFuYWdlciBleHRlbmRzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGFmZiAgICAgICA9IGFwaS5zdGFmZi5tYXAoZSA9PiBuZXcgRW1wbG95ZWUoZSkpO1xuXHRcdHRoaXMuZGVwYXJ0bWVudHMgPSBhcGkuZGVwYXJ0bWVudHM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBlbXBsb3llZSB3aXRoIHRoZSBnaXZlbiBJRCBudW1iZXJcblx0ICpcblx0ICogQHBhcmFtIGlkIFRoZSBJRCBudW1iZXIgb2YgdGhlIGVtcGxveWVlIHRvIHJldHVyblxuXHQgKiBAcmV0dXJucyB7RW1wbG95ZWV9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maW5kKGVtcGxveWVlID0+IGVtcGxveWVlLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGVtcGxveWVlcyB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgb2YgYSBwZXJtaXNzaW9uXG5cdCAqXG5cdCAqIEBwYXJhbSBwZXJtaXNzaW9uIFRoZSBwZXJtaXNzaW9uIHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcGVybWlzc2lvbiAodHJ1ZS9mYWxzZSkgZm9yIHdoZXRoZXIgdGhlIHBlcm1pc3Npb24gaXMgZ3JhbnRlZFxuXHQgKi9cblx0Z2V0RW1wbG95ZWVzV2l0aFBlcm1pc3Npb24ocGVybWlzc2lvbiwgdmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFmZi5maWx0ZXIoZW1wbG95ZWUgPT4gZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dID09IHZhbHVlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG5cdCAqXG5cdCAqIEBwYXJhbSBhc0VtcGxveWVlIG1ldGhvZCByZXR1cm5zIElEIGJ5IGRlZmF1bHQgb3IgRW1wbG95ZWUgaWYgdHJ1dGh5XG5cdCAqL1xuXHRjdXJyZW50VXNlcihhc0VtcGxveWVlID0gZmFsc2UpIHtcblx0XHRsZXQgaWQgPSAxOyAvLyBUT0RPOiBnZXQgdXNlciBmcm9tIFdQXG5cblx0XHQvLyBHZXQgRW1wbG95ZWUgd2l0aCBJRFxuXHRcdGlmIChhc0VtcGxveWVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoaWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNwZWNpYWxpc3RzIHdobyBzcGVjaWFsaXNlIGluIGEgY2VydGFpbiBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGV4cGVydGlzZVR5cGVJZCBUaGUgSUQgb2YgdGhlIGV4cGVydGlzZSB0eXBlIHRvIGZpbmQgZW1wbG95ZWVzIGZvclxuXHQgKi9cblx0Z2V0U3BlY2lhbGlzdHMoZXhwZXJ0aXNlVHlwZSkge1xuXHRcdGxldCBzdGFmZiAgPSB0aGlzLnN0YWZmLFxuXHRcdCAgICBmaWx0ZXIgPSBpZCA9PiBlbXBsb3llZSA9PiBlbXBsb3llZS5fc3BlY2lhbGlzbXMuaW5kZXhPZihpZCkgPiAtMTtcblxuXHRcdGlmICh0eXBlb2YgZXhwZXJ0aXNlVHlwZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0bGV0IG91dHB1dCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpZCBvZiBleHBlcnRpc2VUeXBlKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0YWZmLmZpbHRlcihmaWx0ZXIoaWQpKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdGFmZi5maWx0ZXIoZmlsdGVyKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhc3NlZCBlbXBsb3llZSBoYXMgdGhlIHBhc3NlZCBwcm9ibGVtIHR5cGVcblx0ICpcblx0ICogQHBhcmFtIGVtcGxveWVlIFRoZSBlbXBsb3llZSB0byBpbnNwZWN0XG5cdCAqIEBwYXJhbSBleHBlcnRpc2VUeXBlSWQgVGhlIElEIG9mIHRoZSBleHBlcnRpc2UgdHlwZSB0byBsb29rIGZvclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZW1wbG95ZWUgaGFzIHRoZSBwcm9ibGVtIHR5cGUgYXMgYSBzcGVjaWFsaXNtXG5cdCAqL1xuXHRoYXNTcGVjaWFsaXNtKGVtcGxveWVlLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRyZXR1cm4gZW1wbG95ZWUuX3NwZWNpYWxpc21zLmluZGV4T2YoZXhwZXJ0aXNlVHlwZUlkKSA+IC0xO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBhbGwgZW1wbG95ZWVzIGZvciB0aGUgZ2l2ZW4gcXVlcnlcblx0ICpcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKiBAcmV0dXJucyBBbGwgbWF0Y2hpbmcgcmVzdWx0cyB0byB0aGUgcXVlcnlcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgcHJvcGVydGllcykge1xuXHRcdHJldHVybiBzdXBlci5zZWFyY2godGhpcy5zdGFmZiwgcXVlcnksIHByb3BlcnRpZXMpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZNYW5hZ2VyLmpzIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlIGZyb20gXCIuL0V4cGVydGlzZVR5cGVcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlU3RhZmYgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZVN0YWZmXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZXhwZXJ0aXNlIHR5cGVzIGFjcm9zcyB0aGUgc3lzdGVtLlxuICpcbiAqIEV4cGVydGlzZVR5cGVNYW5hZ2VyIHNob3VsZCBuZXZlciBrbm93IGFib3V0IHRoZSBET01cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZXMgICAgID0gYXBpLmV4cGVydGlzZVR5cGVzLm1hcChlID0+IG5ldyBFeHBlcnRpc2VUeXBlKGUpKTtcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGFwaS5leHBlcnRpc2VUeXBlU3RhZmYubWFwKGUgPT4gbmV3IEV4cGVydGlzZVR5cGVTdGFmZihlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGFsbCBFeHBlcnRpc2VUeXBlJ3Mgd2l0aCBubyBwYXJlbnQgKGluIHRoZSBmaXJzdCBjb2x1bW4pXG5cdCAqXG5cdCAqIEByZXR1cm4ge0FycmF5fVxuXHQgKi9cblx0Z2V0Um9vdEV4cGVydGlzZVR5cGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGUuX3BhcmVudCA9PSBudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGV9XG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbmQoZXhwZXJ0aXNlVHlwZSA9PiBleHBlcnRpc2VUeXBlLmlkID09PSBleHBlcnRpc2VUeXBlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBFeHBlcnRpc2VUeXBlcyB3aXRoIElEcyBmcm9tIGFuIEFycmF5IG9mIElEc1xuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBleHBlcnRpc2VUeXBlSWRzIEFycmF5IG9mIEludGVnZXJzIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkJ3Ncblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGVzIHNhdGlzZnlpbmcgdGhlIGNvbmRpdGlvblxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZXMoZXhwZXJ0aXNlVHlwZUlkcykge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVzLmZpbHRlcihleHBlcnRpc2VUeXBlID0+IGV4cGVydGlzZVR5cGVJZHMuaW5kZXhPZihleHBlcnRpc2VUeXBlLmlkKSA+IC0xKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGNvcnJlc3BvbmRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmJ3MgbGlua2luZyB0byBFeHBlcnRpc2VUeXBlXG5cdCAqXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gZXhwZXJ0aXNlVHlwZUlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBjb3JyZXNwb25kaW5nIEV4cGVydGlzZVR5cGVTdGFmZidzIGxpbmtpbmcgdG8gRXhwZXJ0aXNlVHlwZVxuXHQgKi9cblx0Z2V0RXhwZXJ0aXNlVHlwZVN0YWZmQnlFeHBlcnRpc2VUeXBlSWQoZXhwZXJ0aXNlVHlwZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbHRlcihleHBlcnRpc2VUeXBlU3RhZmYgPT4gZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSA9PT0gZXhwZXJ0aXNlVHlwZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgb3JkZXJlZCBhcnJheSBvZiBwYXJlbnRzIG9mIGFuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIHN0YXJ0aW5nIEV4cGVydGlzZVR5cGUgdG8gZmluZCBwYXJlbnRzIGZyb21cblx0ICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIEV4cGVydGlzZVR5cGUgcGFyZW50cywgYW5kIHRoZSBzdGFydGluZyBFeHBlcnRpc2VUeXBlXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQ2hhaW4oZXhwZXJ0aXNlVHlwZSkge1xuXHRcdHZhciBleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZSxcblx0XHRcdGV4cGVydGlzZVR5cGVzICAgICAgPSBbZXhwZXJ0aXNlVHlwZVBhcmVudF07XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRleHBlcnRpc2VUeXBlUGFyZW50ID0gZXhwZXJ0aXNlVHlwZVBhcmVudC5wYXJlbnQ7XG5cblx0XHRcdGlmIChleHBlcnRpc2VUeXBlUGFyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMucHVzaChleHBlcnRpc2VUeXBlUGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXhwZXJ0aXNlVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgc3BlY2lmaWMgRXhwZXJ0aXNlVHlwZVN0YWZmIHJlY29yZCwgd2l0aCBhbiBleGFjdFxuXHQgKiBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmIGFuZCBFeHBlcnRpc2VUeXBlU3RhZmYuX2V4cGVydGlzZV90eXBlIElEIHBhaXJcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgcmVwcmVzZW50aW5nIEV4cGVydGlzZVR5cGVTdGFmZi5fZXhwZXJ0aXNlX3R5cGVcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBzdGFmZklkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlU3RhZmYuX3N0YWZmXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn0gbnVsbCwgb3IgdGhlIHJlY29yZCBkZXNpcmVkXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlU3RhZmZCeVN0YWZmSWQoZXhwZXJ0aXNlVHlwZUlkLCBzdGFmZklkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJ0aXNlVHlwZVN0YWZmLmZpbmQoZXhwZXJ0aXNlVHlwZVN0YWZmID0+IGV4cGVydGlzZVR5cGVTdGFmZi5fc3RhZmYgPT09IHN0YWZmSWQgJiYgZXhwZXJ0aXNlVHlwZVN0YWZmLl9leHBlcnRpc2VfdHlwZSkgfHwgbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBFeHBlcnRpc2VUeXBlU3RhZmYgYnkgSURcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlU3RhZmZJZCByZXByZXNlbnRpbmcgRXhwZXJ0aXNlVHlwZVN0YWZmLmlkXG5cdCAqIEByZXR1cm4ge0V4cGVydGlzZVR5cGVTdGFmZn1cblx0ICovXG5cdGdldEV4cGVydGlzZVR5cGVTdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVydGlzZVR5cGVTdGFmZi5maW5kKGV4cGVydGlzZVR5cGVTdGFmZiA9PiBleHBlcnRpc2VUeXBlU3RhZmYuaWQgPT09IGV4cGVydGlzZVR5cGVTdGFmZklkKSB8fCBudWxsO1xuXHR9XG5cblx0c2VhcmNoKHF1ZXJ5LCBwcm9wZXJ0aWVzKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlYXJjaCh0aGlzLmV4cGVydGlzZVR5cGVzLCBxdWVyeSwgcHJvcGVydGllcyk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL0V4cGVydGlzZVR5cGVNYW5hZ2VyLmpzIiwiLyoqXG4gKiBNYW5hZ2VyXG4gKlxuICogQWJzdHJhY3QgY2xhc3MgZXh0ZW5kZWQgYnkgYWxsIG1hbmFnZXJzLFxuICogY29udGFpbnMgbWV0aG9kcyB0aGF0IG1heSBiZSB1c2VmdWwgdG8gdGhlIG1hbmFnZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly9cblx0fVxuXHRcblx0LyoqXG5cdCAqIFNlYXJjaCBhcnJheSBvZiBlbGVtZW50cyBmb3IgcXVlcnkgaW4gZ2l2ZW4gcHJvcGVydHkgbmFtZXNcblx0ICogXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBBcnJheSBvZiBvYmplY3RzIHRvIGJlIHNlYXJjaGVkIHRocm91Z2hcblx0ICogQHBhcmFtIHF1ZXJ5IENhc2UgaW5zZW5zaXRpdmUgc3RyaW5nIHRvIHNlYXJjaCBlbGVtZW50c1xuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBlbGVtZW50cyBwcm9wZXJ0eSBuYW1lcyB0byBzZWFyY2ggdGhyb3VnaFxuXHQgKi9cblx0c2VhcmNoKGVsZW1lbnRzID0gW10sIHF1ZXJ5ID0gXCJcIiwgcHJvcGVydGllcyA9IFtdKSB7XG5cdFx0cXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpOyAvLyBOb3JtYWxpc2UgcXVlcnkgKGFuZCBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSBsYXRlcilcblxuXHRcdHJldHVybiBlbGVtZW50cy5maWx0ZXIoZWwgPT4geyAvLyBHZXQgYWxsIGVsZW1lbnRzXG5cdFx0XHRyZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3AgPT4geyAvLyBDaGVjayBwcm9wZXJ0aWVzIHVudGlsIG1hdGNoIGlzIGZvdW5kXG5cdFx0XHRcdGlmIChTdHJpbmcoZWxbcHJvcF0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSByZXR1cm4gdHJ1ZTsgLy8gRGV0ZXJtaW5lIGlmIHByb3BlcnR5IGlzIGEgbWF0Y2ggZm9yIHF1ZXJ5XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL01hbmFnZXIuanMiLCIvKipcbiAqIER5bmFtaWNQYWdlXG4gKlxuICogRXh0ZW5kZWQgYnkgZXZlcnkgcGFnZSwgZS5nLiBUaWNrZXRQYWdlLlxuICogQ29udGFpbnMgZnVuY3Rpb25zIHRoYXQgYXJlIHJlcGVhdGVkIG9mdGVuIGFtb25nXG4gKiBwYWdlcywgc3VjaCBhcyB1cGRhdGluZyB0YWJsZXMgb3IgdXBkYXRpbmcgdGhlIG5hdmJhclxuICovXG5jbGFzcyBEeW5hbWljUGFnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwYWdlIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3RvcnNcblx0ICogdG8gZGVmaW5lIHRoZSBib3VuZHMgb2YgdGhlIHBhZ2UsIGluIGNhc2VzIHdoZXJlIHRoaXMgRHluYW1pY1BhZ2Vcblx0ICogaXMgbm90IHRoZSBvbmx5IHBhZ2Ugb24gdGhlIHNjcmVlbiwgc3VjaCBhcyBpZiBhIHBhZ2UgaXMgYmVpbmdcblx0ICogZGlzcGxheWVkIGluIGEgbW9kYWwuXG5cdCAqXG5cdCAqIE5vdCBwcm92aWRpbmcgYW55IHNlbGVjdG9ycyB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhlXG5cdCAqIG1haW4gc2VsZWN0b3JzIGZvciB0aGUgZW50aXJlIHNjcmVlbiwgc3VjaCB0aGF0XG5cdCAqIHRoaXMgcGFnZSBiZWNvbWVzIHRoZSBtYWluIHBhZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gc2VjdGlvblNlbGVjdG9yIFNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIG1haW4gc2VjdGlvbiBjb250YWluaW5nIHRhYmxlIHZpZXdcblx0ICogQHBhcmFtIHRhYmxlU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciB0YWJsZSB3aXRoaW4gcHJldmlvdXMgc2VjdGlvblxuXHQgKiBAcGFyYW0gbmF2U2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBuYXZpZ2F0aW9uIGJhciBzaG93biBhdCB0b3Agb2Ygc2VjdGlvblxuXHQgKiBAcGFyYW0gZGV0YWlsU2VsZWN0b3IgU2VsZWN0b3Igc3RyaW5nIGZvciBzaW5nbGUgdmlldyBkZXRhaWwgc2hvd24gZm9yIGFuIGluZGl2aWR1YWwgcm93XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2VjdGlvblNlbGVjdG9yID0gXCIjbGlzdC12aWV3XCIsXG5cdFx0dGFibGVTZWxlY3RvciA9IFwiI3RhYmxlLXNlY3Rpb25cIixcblx0XHRuYXZTZWxlY3Rvcixcblx0XHRkZXRhaWxTZWxlY3RvclxuXHR9ID0ge30pIHtcblx0XHR0aGlzLnNlY3Rpb25TZWxlY3RvciA9IHNlY3Rpb25TZWxlY3Rvcjtcblx0XHR0aGlzLnRhYmxlU2VsZWN0b3IgPSB0YWJsZVNlbGVjdG9yO1xuXHRcdC8vIFNldCBuYXZpZ2F0aW9uIHNlbGVjdG9yIHRvIGZpcnN0IGNvbXBvbmVudCBvZiBzZWN0aW9uIHNlbGVjdG9yIHdpdGgg4oCYLW5hduKAmSBhcHBlbmRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgQ1NTIHNlbGVjdG9yXG5cdFx0dGhpcy5uYXZTZWxlY3RvciA9IG5hdlNlbGVjdG9yID8gbmF2U2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1uYXZcIiA6IFwiLnNpZGUtbmF2LWJhci1uZXN0ZWRcIik7XG5cdFx0dGhpcy5kZXRhaWxTZWxlY3RvciA9IGRldGFpbFNlbGVjdG9yID8gZGV0YWlsU2VsZWN0b3IgOiAoc2VjdGlvblNlbGVjdG9yICE9PSBcIiNsaXN0LXZpZXdcIiA/IHNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIiBcIilbMF0gKyBcIi1kZXRhaWxcIiA6IFwiI3NpbmdsZS12aWV3XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGl0bGUgYmFyIG9mIHRoZSBzaW5nbGUgdmlldyB0byB0aGUgZ2l2ZW4gc3RyaW5nXG5cdCAqIENBVVRJT046IERvZXMgbm90IHBlcmZvcm0gZXNjYXBpbmcgb2YgaW5wdXQgc3RyaW5nLCBkbyBub3QgcGFzc1xuXHQgKiB1c2VyIGNvbnRlbnQgdG8gdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSBodG1sIEhUTUwgdG8gc2V0IHRoZSBzaW5nbGUgdmlldyB0aXRsZSB0b1xuXHQgKi9cblx0dXBkYXRlU2luZ2xlVmlld05hdmJhcihodG1sKSB7XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maW5kKCcudG9wLW5hdiBoNCcpLmh0bWwoaHRtbCk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIFwiTG9hZGluZ+KAplwiIHNwbGFzaCBzY3JlZW4gaWYgaXQncyBzaG93blxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFwiTm8gUmVzdWx0c+KAplwiIHNwbGFzaCBzY3JlZW5cblx0ICogc2hvdWxkIGJlIHNob3duIG9yIG5vdC5cblx0ICpcblx0ICogWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgdXNpbmcgXCJhcHBlbmRUYWJsZVwiXG5cdCAqL1xuXHR1cGRhdGVTcGxhc2hTY3JlZW4obmF2VGV4dCA9IG51bGwpIHtcblx0XHQvLyBHZXQgdGFibGUgZWxlbWVudCB0byBpbnNwZWN0IGNvbnRlbnRzXG5cdFx0dmFyICR0YWJsZSA9ICQodGhpcy50YWJsZVNlbGVjdG9yKSxcblx0XHRcdFx0Ly8gR2V0IG51bWJlciBvZiByZXN1bHRzIHdpdGhpbiB0YWJsZSBjdXJyZW50bHkgYmVpbmcgc2hvd25cblx0XHRcdFx0Ly8gVGhpcyBpcyBub3QgZXF1YWwgdG8gdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZSBIVE1MXG5cdFx0XHRcdC8vIHNpbmNlIHNvbWUgdGFibGUgcm93cyBtYXkgYmUgaGlkZGVuLCB3aGljaCBuZWVkIHRvIGJlXG5cdFx0XHRcdC8vIGRpc2NvdW50ZWQgZnJvbSB0aGUgdG90YWwgY291bnQuXG5cdFx0ICAgIHJlc3VsdHNDb3VudCA9ICR0YWJsZS5maW5kKCd0Ym9keSB0cicpLmZpbHRlcigoaSwgZWwpID0+ICEkKGVsKS5oYXNDbGFzcyhcInJvdy1oaWRkZW5cIikpLmxlbmd0aCxcblx0XHRcdFx0Ly8gR2V0IHNwbGFzaCBzY3JlZW4gZWxlbWVudCB3aGljaCBtYXkgYmUgYmVpbmcgc2hvd24gaW5zdGVhZCBvZiB0YWJsZVxuXHRcdCAgICAkc3BsYXNoU2NyZWVuID0gJCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnNwbGFzaC1zY3JlZW4nKTtcblxuXHRcdC8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXJlIGFyZSByZXN1bHRzLCB0aGUgc3BsYXNoIHNjcmVlbiBvciB0YWJsZSBuZWVkcyB0byBiZSBzaG93blxuXHRcdC8vIGFuZCB0aGUgb3RoZXIgc3dhcHBlZCBvdXQgdXNpbmcgQ1NTXG5cdFx0dmFyIFskc2hvdywgJGhpZGVdID0gcmVzdWx0c0NvdW50ID8gWyR0YWJsZSwgJHNwbGFzaFNjcmVlbl0gOiBbJHNwbGFzaFNjcmVlbiwgJHRhYmxlXTtcblx0XHQkaGlkZS5hZGRDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblx0XHQkc2hvdy5yZW1vdmVDbGFzcyhcImJsb2NrLWhpZGRlblwiKTtcblxuXHRcdC8vIFRoZSBtYWluIHRvcCBiYXIgZm9yIHRoZSBsaXN0IHZpZXcgY29udGFpbnMgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBiZWluZyBzaG93biBpbiB0aGUgdGFibGVcblx0XHRpZiAoIW5hdlRleHQpIHtcblx0XHRcdC8vIFNldCBuYXZiYXIgdGV4dCBhcyBudW1iZXIgb2YgaXRlbXMgaW4gdGFibGUgdGhlbiBhcHBlbmQgY3VycmVudGx5IHNlbGVjdGVkIGZpbHRlclxuXHRcdFx0bmF2VGV4dCA9IHJlc3VsdHNDb3VudCArIFwiIFwiICsgJCh0aGlzLm5hdlNlbGVjdG9yKS5maW5kKFwibGkuYWN0aXZlXCIpLmZpcnN0KCkudGV4dCgpLnJlcGxhY2UoXCJBbGwgXCIsIFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIElmIHVuYWJsZSB0byBvYnRhaW4gcm93cyBjb3VudCwgc2hvdyBcIkxvYWRpbmfigKZcIlxuXHRcdCQodGhpcy5zZWN0aW9uU2VsZWN0b3IpLmNsb3Nlc3QoXCJzZWN0aW9uXCIpLmZpbmQoXCIudG9wLW5hdiBoNFwiKS50ZXh0KHJlc3VsdHNDb3VudCAhPT0gdW5kZWZpbmVkID8gbmF2VGV4dCA6IFwiTG9hZGluZ+KAplwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgcm93IGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKiB1c2luZyBkYXRhIGZyb20gXCJvYmplY3RcIi5cblx0ICpcblx0ICogVGhlIHByb3BlcnR5IG5hbWVzIHNob3VsZCBjb3JyZXNwb25kIHdpdGggdGhlIFwic2x1Z1wiXG5cdCAqIGF0dHJpYnV0ZSBpbiB0YWJsZSBoZWFkZXIuXG5cdCAqXG5cdCAqIE5PVEU6IFRoaXMgYXNzdW1lcyB0aGUgb2JqZWN0IGhhcyBhbiBJRCBhdHRyaWJ1dGUuIEluY2x1ZGUgaXRcblx0ICogZXZlbiBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzaG93IGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIGRhdGEgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHRhYmxlXG5cdCAqIHNwbGFzaHNjcmVlbiBvbiB5b3VyIHBhZ2Vcblx0ICovXG5cdGFwcGVuZFRhYmxlUm93KG9iamVjdCkge1xuXHRcdHZhciAkdGFibGVTZWN0aW9uID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLFxuXHRcdCAgICAkdGFibGVIZWFkICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0aGVhZCB0cicpLFxuXHRcdCAgICAkdGFibGVCb2R5ICAgID0gJHRhYmxlU2VjdGlvbi5maW5kKCd0YWJsZSB0Ym9keScpLFxuXHRcdCAgICAkbmV3Um93ICAgICAgID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xuXG5cdFx0Ly8gRG9uJ3QgYWRkIHRoZSBzYW1lIHJvdyB0d2ljZVxuXHRcdGlmICgkdGFibGVCb2R5LmNoaWxkcmVuKFwiW2RhdGEtcm93aWQ9XFxcIlwiICsgb2JqZWN0LmlkICsgXCJcXFwiXVwiKS5sZW5ndGggPiAwKSByZXR1cm47XG5cblx0XHQvLyBTZXQgSUQgb24gcm93IHRvIHJlZmVyZW5jZSBsYXRlclxuXHRcdCRuZXdSb3dbMF0uZGF0YXNldC5yb3dpZCA9IG9iamVjdC5pZDtcblx0XHQkbmV3Um93LnRvZ2dsZUNsYXNzKFwiaGlnaGxpZ2h0XCIsIG9iamVjdC5pZCA9PSBwYXJzZUludChsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpO1xuXG5cdFx0JHRhYmxlSGVhZC5jaGlsZHJlbigndGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNsdWcgPSB0aGlzLmRhdGFzZXQuc2x1ZywgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cblx0XHRcdGlmIChzbHVnID09PSAnZXllJykgeyAvLyB0aGUgb24taG92ZXIgZXllIGludmlzaWJsZSByb3dcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPic7XG5cdFx0XHR9IGVsc2UgaWYgKHNsdWcgJiYgc2x1Zy5pbmNsdWRlcyhcImFjY2Vzc1wiKSkge1xuXHRcdFx0XHQvLyBCb29sZWFuIHZhbHVlIHN1cHBvcnRcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSA/IHRoaXMuaW5uZXJIVE1MIDogXCLCt1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGQuaW5uZXJIVE1MID0gT2JqZWN0LnJlc29sdmUoc2x1Zywgb2JqZWN0KSAhPT0gdW5kZWZpbmVkID8gb2JqZWN0W3NsdWddIDogXCLigJRcIjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0JG5ld1Jvdy5hcHBlbmQodGQpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdCR0YWJsZUJvZHkuYXBwZW5kKCRuZXdSb3cpO1xuXG5cdFx0cmV0dXJuICRuZXdSb3dbMF07XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJzIHRoZSBkYXRhIGluIHRoZSB0YWJsZSBib2R5IHdpdGhpbiAjdGFibGUtc2VjdGlvblxuXHQgKi9cblx0Y2xlYXJUYWJsZSgpIHtcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogU2hvdyBkZXRhaWwgcGFnZVxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSB0YWJsZSByb3cgdG8gYmUgc2hvd24gaW4gdGhlIHNpbmdsZSB2aWV3XG5cdCAqL1xuXHRzaG93VGFibGVSb3dEZXRhaWxzKGlkID0gbnVsbCkge1xuXHRcdC8vIE5vIG5lZWQgdG8gY2hlY2sgZm9yIG51bGwgYXMgbm8gcm93cyB3aWxsIG1hdGNoIGlmIG5vIElEIHBhc3NlZFxuXHRcdC8vIC5zaWJsaW5ncyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBlbGVtZW50IGl0c2VsZiBzbyBjYW4gYmUgY2hhaW5lZCBhZnRlciBmaW5kaW5nIGhpZ2hsaWdodCByb3cgZmlyc3Rcblx0XHQkKHRoaXMudGFibGVTZWxlY3RvcikuZmluZChcInRib2R5IHRyXCIpLmZpbHRlcigoaSwgZWwpID0+IGVsLmRhdGFzZXQucm93aWQgPT0gaWQpLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpLmZpcnN0KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcblx0XHRcblx0XHQvLyBObyBuZWVkIHRvIHNldCBzdHlsZSB1c2luZyBKUyBoZXJlLCBDU1MgaGFuZGxlcyBmbGV4XG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS51bndyYXAoXCJkaXZcIilcblx0XHRcdC8vIENsb3NlIGJ1dHRvbiBvbiBoaWRlXG5cdFx0XHQuZmluZChcIltkYXRhLWFjdGlvbj1cXFwiY2xvc2VcXFwiXVwiKS5jbGljaygoKSA9PiB0aGlzLmhpZGVUYWJsZVJvd0RldGFpbHMoKSk7XG5cdFx0XG5cdFx0aWYgKGlkID4gLTEpIGxvY2F0aW9uLmhhc2ggPSBwYXJzZUludChpZCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBIaWRlIGRldGFpbCBwYWdlIHNob3duIHdpdGggc2hvd0RldGFpbFxuXHQgKi9cblx0aGlkZVRhYmxlUm93RGV0YWlscygpIHtcblx0XHQvLyBEZXNlbGVjdCBhbGwgcm93c1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG5cdFx0Ly8gRmlsdGVyIHRvIGNoZWNrIGlmIGFscmVhZHkgaGlkZGVuLCBkb24ndCBoaWRlIGFnYWluXG5cdFx0JCh0aGlzLmRldGFpbFNlbGVjdG9yKS5maWx0ZXIoKGksIGVsKSA9PiAkKGVsKS5wYXJlbnQoXCJkaXZcIikubGVuZ3RoID09PSAwKS53cmFwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXHRcdFxuXHRcdGxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbGwgYSBzZWxlY3QgZWxlbWVudCB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuXHQgKiBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gYSBkcm9wZG93biBsaXN0XG5cdCAqXG5cdCAqIEBwYXJhbSAkc2VsZWN0IEEgcmVmZXJlbmNlIHRvIHRoZSBzZWxlY3QgZWxlbWVudCB0byBiZSBmaWxsZWRcblx0ICogQHBhcmFtIGRlZmF1bHRUZXh0IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBzZWxlY3QgZWxlbWVudFxuXHQgKiBAcGFyYW0gZWxlbWVudHMgTGlzdCBvZiBlbGVtZW50cyB0byBiZSBhZGRlZCBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb21cblx0ICogQHBhcmFtIGRlZmF1bHRPcHRpb25JZCBJRCBvZiBhIGRlZmF1bHQgb3B0aW9uIGZyb20gdGhlIGVsZW1lbnRzIGdpdmVuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgb2YgdGhlIHNlbGVjdCBmaWVsZCB0byBhY2Nlc3Mgc2VsZWN0ZWQgaXRlbSB3aXRoXG5cdCAqIEBwYXJhbSBnZXRBZGRpdGlvbmFsRGV0YWlscyBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIGFkZGl0aW9uYWwgZGV0YWlscyB0byBiZSBzaG93biBmb3IgY3VycmVudCBpdGVtXG5cdCAqL1xuXHRwb3B1bGF0ZVNlbGVjdEZpZWxkKCRzZWxlY3QsIGRlZmF1bHRUZXh0LCBlbGVtZW50cywgZGVmYXVsdE9wdGlvbklkID0gbnVsbCwgcHJvcGVydHkgPSAnbmFtZScsIGdldEFkZGl0aW9uYWxEZXRhaWxzID0gbnVsbCkge1xuXHRcdC8vIERlZmF1bHQgZW1wdHkgY29udGVudCBmb3IgaW5wdXRcblx0XHRsZXQgb3B0aW9uID0gbmV3IE9wdGlvbihkZWZhdWx0VGV4dCwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0b3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHQkc2VsZWN0LmVtcHR5KCkuYXBwZW5kKG9wdGlvbik7XG5cdFx0XG5cdFx0Ly8gRWFjaCBvcHRpb24gdG8gYmUgc2VsZWN0ZWQgZnJvbVxuXHRcdGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XG5cdFx0XHRpZiAoZ2V0QWRkaXRpb25hbERldGFpbHMgIT09IG51bGwpIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZ2V0QWRkaXRpb25hbERldGFpbHMoZSkgKyAnICcgKyBlW3Byb3BlcnR5XSwgZS5pZCwgZmFsc2UsIGUuaWQgPT09IGRlZmF1bHRPcHRpb25JZCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHNlbGVjdC5hcHBlbmQobmV3IE9wdGlvbignIycgKyBlLmlkICsgJyAnICsgZVtwcm9wZXJ0eV0sIGUuaWQsIGZhbHNlLCBlLmlkID09PSBkZWZhdWx0T3B0aW9uSWQpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRzZWxlY3Quc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggc3RyaW5nXG5cdCAqIEBwYXJhbSBlbGVtZW50cyBUaGUgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlYXJjaCB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSBvYmplY3RDYWxsYmFjayBhIGNhbGxiYWNrIHJldHVybmluZyBhbiBvYmplY3QgKHRoZSByb3cgc3RydWN0dXJlKVxuXHQgKiBAcGFyYW0gc2VhcmNoS2V5cyB0aGUgcHJvcGVydGllcyBpbiBvYmplY3RDYWxsYmFjayB0byBoaWdobGlnaHRcblx0ICovXG5cdHNlYXJjaChxdWVyeSwgZWxlbWVudHMgPSBbXSwgb2JqZWN0Q2FsbGJhY2ssIHNlYXJjaEtleXMgPSBbXSkge1xuXHRcdGxldCBwYWdlID0gdGhpcztcblxuXHRcdHBhZ2UuY2xlYXJUYWJsZSgpO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0dmFyIG9iamVjdCA9IG9iamVjdENhbGxiYWNrKGVsKTtcblxuXHRcdFx0XHRzZWFyY2hLZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IFN0cmluZyhvYmplY3Rba2V5XSkucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHF1ZXJ5ICsgJyknLCAnaWcnKSwgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHF1ZXJ5ID09PSAkKFwiLnNlYXJjaC1maWVsZCBpbnB1dFwiKS52YWwoKSkge1xuXHRcdFx0XHRcdHBhZ2UuYXBwZW5kVGFibGVSb3cob2JqZWN0KTtcblx0XHRcdFx0XHRwYWdlLnVwZGF0ZVNwbGFzaFNjcmVlbihgJHtlbGVtZW50cy5sZW5ndGh9IHJlc3VsdCR7ZWxlbWVudHMubGVuZ3RoICE9PSAxID8gXCJzXCIgOiBcIlwifSBmb3Ig4oCYJHtxdWVyeX3igJlgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2UudXBkYXRlU3BsYXNoU2NyZWVuKGBObyByZXN1bHRzIGZvciDigJgke3F1ZXJ5feKAmWApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgYSBtZXNzYWdlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIG92ZXIgYWxsIGVsZW1lbnRzLlxuXHQgKiBIaWRlIGFmdGVyIDYgc2Vjb25kcywgb3IgY29uZmlndXJhYmxlLlxuXHQgKlxuXHQgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBzdHJpbmcgdG8gYmUgc2hvd24gaW4gdGhlIG1lc3NhZ2UgYm94LlxuXHQgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBtZXNzYWdlLCBzdWNoIGFzIFwiaW5mb1wiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJcblx0ICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzIGZvciB0aGUgbWVzc2FnZSB0byBiZSBzaG93biBmb3IuXG5cdCAqL1xuXHRzdGF0aWMgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cnJlZFwiLCB0eXBlID0gXCJkYW5nZXJcIiwgZHVyYXRpb24gPSA2KSB7XG5cdFx0Ly8gT25seSBzaG93IG9uZSBtZXNzYWdlIGF0IGEgdGltZVxuXHRcdCQoXCIjYWxlcnQtbm90aWZpY2F0aW9uXCIpLnJlbW92ZSgpO1xuXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRcblx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1zZy5pZCA9IFwiYWxlcnQtbm90aWZpY2F0aW9uXCI7XG5cdFx0bXNnLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiLCBgYWxlcnQtJHt0eXBlfWAsIFwiYWxlcnQtbm90aWZpY2F0aW9uXCIpO1xuXHRcdG1zZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYWxlcnRcIik7IC8vIEFjY2Vzc2liaWxpdHlcblx0XHQvLyBTZXQgY29udGVudCBhbmQgc2hvdyBvbiBzY3JlZW5cblxuXHRcdG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtc2cpO1xuXG5cdFx0Ly8gSGlkZSBhZnRlciBkdXJhdGlvblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gbXNnLnJlbW92ZSgpLCBkdXJhdGlvbiAqIDEwMDApO1xuXG5cdFx0Ly8gQ2xpY2sgdG8gaGlkZSBtZXNzYWdlXG5cdFx0JChtc2cpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvRHluYW1pY1BhZ2UuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwiLi9EZXZpY2VcIjtcblxuLyoqXG4gKiBIYXJkd2FyZU1hbmFnZXJcbiAqXG4gKiBSZXNwb25zaWJsZSBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICogZGV2aWNlcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBIYXJkd2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkd2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZGV2aWNlcyA9IGFwaS5kZXZpY2VzLm1hcChlID0+IG5ldyBEZXZpY2UoZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgdW5pcXVlIFR5cGVzIGluIHRhYmxlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0dW5pcXVlVHlwZXMoKSB7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRoaXMuZGV2aWNlcy5tYXAodCA9PiB0LnR5cGUpKV07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCB1bmlxdWUgTWFrZXMgZm9yIGEgc3BlY2lmaWVkIFR5cGVcblx0ICpcblx0ICogQHJldHVybnMgezxBcnJheT59XG5cdCAqL1xuXHR1bmlxdWVNYWtlc09mVHlwZSh0eXBlKSB7XG5cdFx0bGV0IGRldmljZXNCeVR5cGUgPSB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UudHlwZSA9PSB0eXBlKTtcblxuXHRcdHJldHVybiBbLi4ubmV3IFNldChkZXZpY2VzQnlUeXBlLm1hcCh0ID0+IHQubWFrZSkpXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIGRldmljZXMgd2l0aCBhIHNwZWNpZmllZCBUeXBlIGFuZCBNYWtlXG5cdCAqXG5cdCAqIEByZXR1cm5zIHs8QXJyYXk+fVxuXHQgKi9cblx0Z2V0RGV2aWNlc09mVHlwZUFuZE1ha2UodHlwZSxtYWtlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlcy5maWx0ZXIoZGV2aWNlID0+IGRldmljZS50eXBlID09IHR5cGUgJiYgZGV2aWNlLm1ha2UgPT0gbWFrZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkZXZpY2VzIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgZGV2aWNlcyB0byByZXRyaWV2ZVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXREZXZpY2VzKGlkcykge1xuXHRcdHJldHVybiB0aGlzLmRldmljZXMuZmlsdGVyKGRldmljZSA9PiBpZHMuaW5kZXhPZihkZXZpY2UuaWQpID4gLTEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzcGVjaWZpZWQgZGV2aWNlXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgZGV2aWNlIFxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZGV2aWNlID0+IGRldmljZS5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkZXZpY2Ugd2l0aCB0aGUgZ2l2ZW4gc2VyaWFsIG51bWJlclxuXHQgKlxuXHQgKiBAcGFyYW0gc2VyaWFsTnVtYmVyIFRoZSBzZXJpYWwgbnVtYmVyIG9mIHRoZSBkZXZpY2UgdG8gcmV0dXJuXG5cdCAqIEByZXR1cm5zIHtEZXZpY2V9XG5cdCAqL1xuXHRnZXREZXZpY2VCeVNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLnNlcmlhbF9ubyA9PT0gc2VyaWFsTnVtYmVyKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXIuanMiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlclwiO1xuaW1wb3J0IFByb2dyYW0gZnJvbSBcIi4vUHJvZ3JhbVwiO1xuXG4vKipcbiAqIFNvZnR3YXJlTWFuYWdlclxuICpcbiAqIFJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nXG4gKiBzb2Z0d2FyZSBwcm9ncmFtcyBhY3Jvc3MgdGhlIHN5c3RlbS5cbiAqXG4gKiBTb2Z0d2FyZU1hbmFnZXIgc2hvdWxkIG5ldmVyIGtub3cgYWJvdXQgdGhlIERPTVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2Z0d2FyZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMucHJvZ3JhbXMgPSBhcGkucHJvZ3JhbXMubWFwKGUgPT4gbmV3IFByb2dyYW0oZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHByb2dyYW1zIHdpdGggdGhlIGdpdmVuIElEIG51bWJlcnNcblx0ICpcblx0ICogQHBhcmFtIGlkcyBUaGUgSUQgbnVtYmVycyBvZiB0aGUgcHJvZ3JhbXMgdG8gcmV0cmlldmVcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cblx0Z2V0UHJvZ3JhbXMoaWRzKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbXMuZmlsdGVyKHByb2dyYW0gPT4gaWRzLmluZGV4T2YocHJvZ3JhbS5pZCkgPiAtMSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHNwZWNpZmllZCBwcm9ncmFtXG5cdCAqXG5cdCAqIEBwYXJhbSBpZCBUaGUgSUQgbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgcHJvZ3JhbVxuXHQgKiBAcmV0dXJucyB7UHJvZ3JhbX1cblx0ICovXG5cdGdldChpZCkge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1zLmZpbmQocHJvZ3JhbSA9PiBwcm9ncmFtLmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXIuanMiLCIvLyBTaW5jZSBuYXYgZWxlbWVudCBpcyBwZXJzaXN0ZWQgYmV0d2VlbiBwYWdlcywgd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGFjdGl2ZSBidXR0b25cbiQoXCIjbmF2XCIpLm9uKFwiY2xpY2tcIiwgXCJ1bCBsaSBhXCIsIGUgPT4ge1xuXHQkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBUb29sdGlwcyBhY3RpdmF0ZWQgb24gYWxsIGVsZW1lbnRzIHdpdGggYSByZWxldmFudCB0b29sdGlwIEhUTUwgYXR0cmlidXRlXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4vLyBEYXRlL3RpbWUgcGlja2VyIGFjdGl2YXRlZCBvbiBhbGwgZWxlbWVudHMgd2l0aCByZWxldmFudCBjbGFzc1xuJCgnLnRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcigpO1xuXG4vLyBDcmVhdGUgbmV3IGVtcGxveWVlIHdoZW4gc2VhcmNoaW5nIGZvciBub24tZXhpc3RlbnQgYXNzaWduZWVcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdsaS5uby1yZXN1bHRzJywgZnVuY3Rpb24oZSkge1xuXHR2YXIgbmV3VmFsdWUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tbWVudS5vcGVuXCIpLmNoaWxkcmVuKFwiLmJzLXNlYXJjaGJveFwiKS5jaGlsZHJlbihcImlucHV0XCIpLnZhbCgpLFxuXHQgICAgJG1vZGFsICAgPSAkKCcjbmV3LXN0YWZmLW1vZGFsJyk7XG5cblx0JG1vZGFsLm1vZGFsKCdzaG93Jyk7XG5cblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJzdGFmZi5uYW1lXCJdJykudmFsKG5ld1ZhbHVlKTtcblx0JG1vZGFsLmZpbmQoJ2lucHV0W25hbWU9XCJldmVudF90YXJnZXRcIl0nKS52YWwoJCh0aGlzKS5jbG9zZXN0KCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJ3NlbGVjdCcpLmF0dHIoJ25hbWUnKSk7IC8vIHdoZW4gdGhlIHN0YWZmIG1lbWJlciBpcyBjcmVhdGVkLCB0aGlzIGlzIHRoZSBpbnB1dCBmaWVsZCBpdCdsbCB1cGRhdGVcbn0pO1xuXG4kKCcjbmV3LXN0YWZmLW1vZGFsLCAjbmV3LXRpY2tldC1tb2RhbCwgI2ZvbGxvdy11cC1jYWxsLW1vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG5cdCQodGhpcykuZmluZCgnaW5wdXQsIHRleHRhcmVhJylcblx0XHQubm90KCcubm8tY2xlYXItb24tc2hvdycpXG5cdFx0LnZhbCgnJyk7XG5cblx0JCh0aGlzKS5maW5kKCcjYWNjb3JkaW9uIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpJykucmVtb3ZlKCk7XG5cblx0dmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHQkKHRoaXMpLmZpbmQoJy50aW1lcGlja2VyJykudmFsKCgnMCcgKyAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLycgKyAoJzAnICsgY3VycmVudFRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyAnLycgKyBjdXJyZW50VGltZS5nZXRGdWxsWWVhcigpICsgJyAnICsgKCcwJyArIGN1cnJlbnRUaW1lLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyBjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgndG9nZ2xlJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5yZW1vdmUtYWNjb3JkaW9uJywgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0fSk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2hpZGUuYnMuY29sbGFwc2Ugc2hvdy5icy5jb2xsYXBzZScsICcjYWNjb3JkaW9uIC5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcblx0bGV0IGlzU2hvdyA9IGUudHlwZS5zcGxpdChcIi5cIilbMF0gPT09IFwic2hvd1wiO1xuXHQkKHRoaXMpLnNpYmxpbmdzKCcuY2FyZC1oZWFkZXInKS5maW5kKCcudmlldy1hY2NvcmRpb24nKS50b2dnbGVDbGFzcygnZmEtY2hldnJvbi11cCcsICFpc1Nob3cpLnRvZ2dsZUNsYXNzKCdmYS1jaGV2cm9uLWRvd24nLCBpc1Nob3cpO1xufSk7XG5cbiQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS52YWwoJycpO1xuXG4vLyBCb290c3RyYXAgU2VsZWN0IEZpeDogQWRkIGJhY2sgZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gc2VsZWN0IGZpZWxkXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmJvb3RzdHJhcC1zZWxlY3RcIiwgZnVuY3Rpb24oKSB7XG5cdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUub3BlbicpLnRvZ2dsZSgpO1xufSk7XG5cbi8vIEJvb3RzdHJhcCBtb2RhbHMgZml4OiBhZGQgYmFjayBldmVudCBsaXN0ZW5lclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImJvZHk6bm90KFtkYXRhLXBhZ2U9XFxcInN0YWZmXFxcIl0pIFtkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiXVwiLCBmdW5jdGlvbigpIHtcblx0JCh0aGlzLmRhdGFzZXQudGFyZ2V0KS5tb2RhbChcInNob3dcIik7XG59KTtcblxuZnVuY3Rpb24gYWRkSXRlbVRvUGlja2VyKHBpY2tlckVsZW1lbnQsIHZhbHVlLCBuYW1lKSB7XG5cdCQocGlja2VyRWxlbWVudCkuYXBwZW5kKG5ldyBPcHRpb24obmFtZSwgdmFsdWUpKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKS5zZWxlY3RwaWNrZXIoJ3ZhbCcsIG5hbWUpO1xufVxuXG52YXIgdmFsaWRhdGlvblRpbWVvdXQgPSB3aW5kb3cudmFsaWRhdGlvblRpbWVvdXQgPSBudWxsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9tYWluLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogQ29tbWVudFxuICpcbiAqIEEgY29tbWVudCBpcyBtYWRlIGFib3V0IGEgc3BlY2lmaWMgdGlja2V0LCBieVxuICogYSBzdGFmZiBtZW1iZXIuXG4gKiBcbiAqIENvbnRhaW5zIHRoZSBUaWNrZXQgdGhhdCBpdCBiZWxvbmdzIHRvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQ6IGlkLFxuXHRcdGF1dGhvcl9pZDogYXV0aG9yLFxuXHRcdGNhbGxfaWQ6IGNhbGwsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0Y29udGVudCxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkQXQsXG5cdFx0Y3JlYXRlZF9hdDogY3JlYXRlZEF0UmVhbFxuXHR9KSB7XG5cdFx0dGhpcy5pZCAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICA9IGF1dGhvcjtcblx0XHR0aGlzLmNhbGwgICAgICAgICAgICA9IGNhbGw7XG5cdFx0dGhpcy50aWNrZXQgICAgICAgICAgPSB0aWNrZXQ7XG5cdFx0dGhpcy5jb250ZW50ICAgICAgICAgPSBjb250ZW50O1xuXHRcdHRoaXMuY3JlYXRlZF9hdCAgICAgID0gY3JlYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsID0gY3JlYXRlZEF0UmVhbDtcblx0fVxuXG5cdGdldCBhdXRob3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hdXRob3IpO1xuXHR9XG5cblx0c2V0IGF1dGhvcihhdXRob3IpIHtcblx0XHR0aGlzLl9hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRnZXQgY2FsbCgpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENhbGwodGhpcy5fY2FsbCk7XG5cdH1cblxuXHRzZXQgY2FsbChjYWxsKSB7XG5cdFx0dGhpcy5fY2FsbCA9IGNhbGw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL0NvbW1lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgU3RhZmZNYW5hZ2VyIGZyb20gXCIuLi9zdGFmZi9TdGFmZk1hbmFnZXJcIjtcblxuLyoqXG4gKiBDYWxsXG4gKlxuICogRXZlcnkgdGltZSB0aGUgSGVscGRlc2sgaXMgY2FsbGVkLCB0aGlzIGlzIGNyZWF0ZWQuXG4gKiBBIGNhbGwgbWF5IGhhdmUgbXVsdGlwbGUgdGlja2V0cywgYSB0aWNrZXQgbWF5IGhhdmVcbiAqIG11bHRpcGxlIGNhbGxzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHRpbWUsXG5cdFx0Y2FsbGVyX2lkOiBjYWxsZXIsXG5cdFx0b3BlcmF0b3JfaWQ6IG9wZXJhdG9yLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgPSBpZDtcblx0XHR0aGlzLnRpbWUgICAgID0gdGltZTtcblx0XHR0aGlzLmNhbGxlciAgID0gY2FsbGVyOyAgIC8vIElEIG9mIGNhbGxlciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yOyAvLyBJRCBvZiBvcGVyYXRvciwgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YWZmXG5cdFx0dGhpcy50aWNrZXRzICA9IHRpY2tldHM7ICAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIFRpY2tldCdzXG5cdH1cblxuXHRnZXQgY2FsbGVyKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fY2FsbGVyKTtcblx0fVxuXG5cdHNldCBjYWxsZXIoY2FsbGVyKSB7XG5cdFx0dGhpcy5fY2FsbGVyID0gY2FsbGVyO1xuXHR9XG5cblx0Z2V0IG9wZXJhdG9yKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fb3BlcmF0b3IpO1xuXHR9XG5cblx0c2V0IG9wZXJhdG9yKG9wZXJhdG9yKSB7XG5cdFx0dGhpcy5fb3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxuXG5cdGdldCB0aWNrZXRzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0Zyb21DYWxsKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3RpY2tldHMvQ2FsbC5qcyIsImltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIEVtcGxveWVlXG4gKlxuICogQW4gZW1wbG95ZWUgb2YgdGhlIGNvbXBhbnlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRlbWFpbCxcblx0XHRqb2JfdGl0bGU6IGpvYixcblx0XHRkZXBhcnRtZW50LFxuXHRcdHBob25lX251bWJlcjogcGhvbmUsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVzOiBzcGVjaWFsaXNtcyA9IFtdLFxuXHRcdG9wZXJhdG9yID0gZmFsc2UsXG5cdFx0c3BlY2lhbGlzdCA9IHNwZWNpYWxpc21zLmxlbmd0aCA+IDAsXG5cdFx0YW5hbHlzdCA9IGZhbHNlLFxuXHRcdGFkbWluID0gZmFsc2Vcblx0fSkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLmpvYiA9IGpvYjtcblx0XHR0aGlzLmRlcGFydG1lbnQgPSBkZXBhcnRtZW50Lm5hbWU7XG5cdFx0dGhpcy5fZGVwYXJ0bWVudCA9IGRlcGFydG1lbnQuaWQ7XG5cdFx0dGhpcy5waG9uZSA9IHBob25lO1xuXHRcdHRoaXMuc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0XHR0aGlzLmFjY2VzcyA9IHtvcGVyYXRvciwgYW5hbHlzdCwgYWRtaW59O1xuXHRcdFxuXHRcdC8vIElmIHVzZXIgaXMgYW55IG90aGVyIHBlcm1pc3Npb24gdGhlbiByZWFkIGlzIGdyYW50ZWRcblx0XHR0aGlzLmFjY2Vzcy5yZWFkID0gdGhpcy5hY2Nlc3Mub3BlcmF0b3IgfHwgdGhpcy5hY2Nlc3MuYW5hbHlzdCB8fCB0aGlzLmFjY2Vzcy5hZG1pbiB8fCB0aGlzLmFjY2Vzcy5yZWFkb25seSB8fCBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBoYXMgcmVhZCBhY2Nlc3MgdG8gdGhlIHN5c3RlbVxuXHQgKi9cblx0Z2V0IGlzUmVhZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3MucmVhZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdXNlciBpcyBhIGhlbHAgZGVzayBvcGVyYXRvclxuXHQgKi9cblx0Z2V0IGlzT3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLm9wZXJhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gYW5hbHl0aWNhbCBkYXRhIGFib3V0IHRoZSBoZWxwIGRlc2sgc3lzdGVtXG5cdCAqL1xuXHRnZXQgaXNBbmFseXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzcy5hbmFseXN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSB1c2VyIGlzIGFuIGFkbWluaXN0cmF0b3Igb24gdGhlIGhlbHAgZGVza1xuXHQgKi9cblx0Z2V0IGlzQWRtaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzLmFkbWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIEEgbGlzdCBvZiBwcm9ibGVtIHR5cGVzIHRoZSB1c2VyIGlzIGEgc3BlY2lhbGlzdCBvZlxuXHQgKi9cblx0Z2V0IHNwZWNpYWxpc21zKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9zcGVjaWFsaXNtcyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHNwZWNpYWxpc21zIFNldCB0aGUgbGlzdCBvZiBzcGVjaWFsaXNtcyBmb3IgdGhpcyBwZXJzb24gb24gdGhlIHN5c3RlbVxuXHQgKi9cblx0c2V0IHNwZWNpYWxpc21zKHNwZWNpYWxpc21zKSB7XG5cdFx0dGhpcy5fc3BlY2lhbGlzbXMgPSBzcGVjaWFsaXNtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQcmVwYXJlIGRhdGEgZm9yIHNlbmRpbmcgdG8gQVBJIGVuZHBvaW50LiBUaGUgQVBJIGhhcyBkaWZmZXJlbnRcblx0ICogZGF0YSBrZXlzIHJlcHJlc2VudGluZyB0aGUgZGF0YSBhY2Nlc3NpYmxlIGluIHRoZSB0YWJsZXMsIHNvIG5ld1xuXHQgKiBkYXRhIGFuZCB1cGRhdGVzIHRvIGRhdGEgbXVzdCB1c2UgdGhlc2Uga2V5IG5hbWVzLlxuXHQgKiBAcGFyYW0gZGF0YSB0byBiZSBjb252ZXJ0ZWRcblx0ICogQHJldHVybnMgZGF0YSB3aXRoIHVwZGF0ZWQga2V5IG5hbWVzXG5cdCAqL1xuXHRzdGF0aWMgcHJlcGFyZURhdGEoZGF0YSA9IHt9KSB7XG5cdFx0ZGF0YS5qb2JfdGl0bGUgPSBkYXRhLmpvYjtcblx0XHRkYXRhLnBob25lX251bWJlciA9IGRhdGEucGhvbmU7XG5cdFx0ZGF0YS5leHBlcnRpc2VfdHlwZXMgPSBkYXRhLnNwZWNpYWxpc21zO1xuXHRcdGRhdGEuZGVwYXJ0bWVudF9pZCA9IGRhdGEuZGVwYXJ0bWVudDtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1wicmVhZFwiLCBcIm9wZXJhdG9yXCIsIFwiYW5hbHlzdFwiLCBcImFkbWluXCJdKSB7XG5cdFx0XHRkYXRhW2tleV0gPSBkYXRhLmFjY2Vzc1trZXldID8gKDEgJiYgKGRhdGEuc3BlY2lhbGlzdCA9IDEpKSA6IDA7XG5cdFx0fVxuXHRcdGRhdGEuc3BlY2lhbGlzdCA9IGRhdGEuc3BlY2lhbGlzdCB8fCAwO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvRW1wbG95ZWUuanMiLCJpbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBFeHBlcnRpc2VUeXBlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJ0aXNlVHlwZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHBhcmVudF9pZDogcGFyZW50LFxuXHRcdGNoaWxkcmVuXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgID0gaWQ7XG5cdFx0dGhpcy5uYW1lICAgICA9IG5hbWU7XG5cdFx0dGhpcy5wYXJlbnQgICA9IHBhcmVudDtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47IC8vIElEIG9mIEV4cGVydGlzZVR5cGUncywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBFeHBlcnRpc2VUeXBlJ3Ncblx0fVxuXG5cdGdldCBwYXJlbnQoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fcGFyZW50KTtcblx0fVxuXG5cdHNldCBwYXJlbnQocGFyZW50KSB7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0Z2V0IGNoaWxkcmVuKCkge1xuXHRcdHJldHVybiAobmV3IEV4cGVydGlzZVR5cGVNYW5hZ2VyKS5nZXRFeHBlcnRpc2VUeXBlcyh0aGlzLl9jaGlsZHJlbik7XG5cdH1cblxuXHRzZXQgY2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Zyb250ZW5kL2pzL3BhZ2VzL3Byb2JsZW1fdHlwZXMvRXhwZXJ0aXNlVHlwZS5qcyIsImltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEV4cGVydGlzZVR5cGVNYW5hZ2VyIGZyb20gXCIuL0V4cGVydGlzZVR5cGVNYW5hZ2VyXCI7XG5cbi8qKlxuICogRXhwZXJ0aXNlVHlwZVxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgcGllY2Ugb2YgSGFyZHdhcmUuXG4gKiBDb250YWlucyBhbGwgc29mdHdhcmUgdGhhdCBpcyBydW5uaW5nIG9uIHRoZSBIYXJkd2FyZSBVbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVTdGFmZiB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRzdGFmZl9pZDogc3RhZmZJZCxcblx0XHRleHBlcnRpc2VfdHlwZV9pZDogZXhwZXJ0aXNlVHlwZUlkLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLnN0YWZmICAgICAgICAgID0gc3RhZmZJZDtcblx0XHR0aGlzLmV4cGVydGlzZV90eXBlID0gZXhwZXJ0aXNlVHlwZUlkO1xuXHRcdHRoaXMudGlja2V0cyAgICAgICAgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcikuZ2V0KHRoaXMuX3N0YWZmKTtcblx0fVxuXG5cdHNldCBzdGFmZihzdGFmZikge1xuXHRcdHRoaXMuX3N0YWZmID0gc3RhZmY7XG5cdH1cblxuXHRnZXQgZXhwZXJ0aXNlX3R5cGUoKSB7XG5cdFx0cmV0dXJuIChuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIpLmdldEV4cGVydGlzZVR5cGUodGhpcy5fZXhwZXJ0aXNlX3R5cGUpO1xuXHR9XG5cblx0c2V0IGV4cGVydGlzZV90eXBlKGV4cGVydGlzZVR5cGUpIHtcblx0XHR0aGlzLl9leHBlcnRpc2VfdHlwZSA9IGV4cGVydGlzZVR5cGU7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlU3RhZmYuanMiLCJpbXBvcnQgVGlja2V0TWFuYWdlciBmcm9tIFwiLi9UaWNrZXRNYW5hZ2VyXCI7XG5cbi8qKlxuICogU3RhdHVzXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBTdGF0dXMuXG4gKiBDb250YWlucyBUaWNrZXRzIHRoYXQgZml0IGludG8gdGhlIHN0YXR1c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0c2x1Zyxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHNcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICA9IGlkO1xuXHRcdHRoaXMuc2x1ZyAgICA9IHNsdWc7ICAgIC8vIHNsdWdfZXhhbXBsZVxuXHRcdHRoaXMubmFtZSAgICA9IG5hbWU7ICAgIC8vIE5hbWUgRXhhbXBsZSFcblx0XHR0aGlzLnRpY2tldHMgPSB0aWNrZXRzOyAvLyBJRCBvZiB0aWNrZXRzLCBnZXQgbWV0aG9kIHJldHVybnMgVGlja2V0IGluc3RhbmNlc1xuXHR9XG5cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRUaWNrZXRzV2l0aFNsdWcodGhpcy5zbHVnKTtcblx0fVxuXG5cdHNldCB0aWNrZXRzKHRpY2tldHMpIHtcblx0XHR0aGlzLl90aWNrZXRzID0gdGlja2V0cztcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1N0YXR1cy5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuL1RpY2tldE1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IEhhcmR3YXJlTWFuYWdlciBmcm9tIFwiLi4vaGFyZHdhcmUvSGFyZHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgU29mdHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9zb2Z0d2FyZS9Tb2Z0d2FyZU1hbmFnZXJcIjtcbmltcG9ydCBFeHBlcnRpc2VUeXBlTWFuYWdlciBmcm9tIFwiLi4vcHJvYmxlbV90eXBlcy9FeHBlcnRpc2VUeXBlTWFuYWdlclwiO1xuXG4vKipcbiAqIFRpY2tldFxuICpcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGEgVGlja2V0L1Byb2JsZW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldCB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRhdXRob3JfaWQ6IGF1dGhvcixcblx0XHRjYWxscyxcblx0XHRzdGF0dXMsXG5cdFx0c3RhdHVzX2hpc3Rvcnk6IHN0YXR1c0hpc3RvcnksXG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0c29sdXRpb25faWQ6IHNvbHV0aW9uLFxuXHRcdGRldmljZXMsXG5cdFx0cHJvZ3JhbXMsXG5cdFx0Y29tbWVudHMsXG5cdFx0Y3JlYXRlZF9hdF9odW1hbjogY3JlYXRlZEF0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsLFxuXHRcdHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdFJlYWwsXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmZfaWQ6IGV4cGVydGlzZVR5cGVTdGFmZixcblx0XHRhc3NpZ25lZF90b19vcGVyYXRvcl9pZDogYXNzaWduZWRUb09wZXJhdG9ySWRcblx0fSkge1xuXHRcdHRoaXMuaWQgICAgICAgICAgICAgICAgICAgPSBpZDtcblx0XHR0aGlzLmF1dGhvciAgICAgICAgICAgICAgID0gYXV0aG9yO1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgICAgPSBjYWxsczsgIC8vIElEIG9mIGNhbGxzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2VzIG9mIENhbGwnc1xuXHRcdHRoaXMuc3RhdHVzICAgICAgICAgICAgICAgPSBzdGF0dXM7IC8vIElEIG9mIHN0YXR1cywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlIG9mIFN0YXR1c1xuXHRcdHRoaXMuc3RhdHVzX2hpc3RvcnkgICAgICAgPSBzdGF0dXNIaXN0b3J5O1xuXHRcdHRoaXMudGl0bGUgICAgICAgICAgICAgICAgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uICAgICAgICAgID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5zb2x1dGlvbiAgICAgICAgICAgICA9IHNvbHV0aW9uO1xuXHRcdHRoaXMuZGV2aWNlcyAgICAgICAgICAgICAgPSBkZXZpY2VzOyAgLy8gSUQgb2YgZGV2aWNlcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBEZXZpY2VzXG5cdFx0dGhpcy5wcm9ncmFtcyAgICAgICAgICAgICA9IHByb2dyYW1zOyAvLyBJRCBvZiBwcm9ncmFtcywgZ2V0IG1ldGhvZCByZXR1cm5zIGluc3RhbmNlcyBvZiBQcm9ncmFtc1xuXHRcdHRoaXMuY29tbWVudHMgICAgICAgICAgICAgPSBjb21tZW50czsgLy8gSUQgb2YgY29tbWVudHMsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZXMgb2YgQ29tbWVudCdzXG5cdFx0dGhpcy5jcmVhdGVkX2F0ICAgICAgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLnVwZGF0ZWRfYXQgICAgICAgICAgID0gdXBkYXRlZEF0O1xuXHRcdHRoaXMuY3JlYXRlZF9hdF9yZWFsICAgICAgPSBjcmVhdGVkQXRSZWFsO1xuXHRcdHRoaXMudXBkYXRlZF9hdF9yZWFsICAgICAgPSB1cGRhdGVkQXRSZWFsO1xuXHRcdHRoaXMuZXhwZXJ0aXNlX3R5cGVfc3RhZmYgPSBleHBlcnRpc2VUeXBlU3RhZmY7XG5cdFx0dGhpcy5hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGNhbGxzKCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0Q2FsbHNCeVRpY2tldElkKHRoaXMuaWQpO1xuXHR9XG5cblx0c2V0IGNhbGxzKGNhbGxzKSB7XG5cdFx0dGhpcy5fY2FsbHMgPSBjYWxscztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cdFxuXHRnZXQgc3RhdHVzX2hpc3RvcnkoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXNIaXN0b3J5KHRoaXMuX3N0YXR1c19oaXN0b3J5KTtcblx0fVxuXG5cdHNldCBzdGF0dXNfaGlzdG9yeShzdGF0dXNIaXN0b3J5KSB7XG5cdFx0dGhpcy5fc3RhdHVzX2hpc3RvcnkgPSBzdGF0dXNIaXN0b3J5O1xuXHR9XG5cblx0Z2V0IGNhbGxlcigpIHtcblx0XHRyZXR1cm4gKG5ldyBTdGFmZk1hbmFnZXIpLmdldCh0aGlzLl9jYWxsZXIpO1xuXHR9XG5cblx0c2V0IGNhbGxlcihjYWxsZXIpIHtcblx0XHR0aGlzLl9jYWxsZXIgPSBjYWxsZXI7XG5cdH1cblxuXHRnZXQgZGV2aWNlcygpIHtcblx0XHRyZXR1cm4gKG5ldyBIYXJkd2FyZU1hbmFnZXIoKSkuZ2V0RGV2aWNlcyh0aGlzLl9kZXZpY2VzKTtcblx0fVxuXG5cdHNldCBkZXZpY2VzKGRldmljZXMpIHtcblx0XHR0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcblx0fVxuXG5cdGdldCBwcm9ncmFtcygpIHtcblx0XHRyZXR1cm4gKG5ldyBTb2Z0d2FyZU1hbmFnZXIoKSkuZ2V0UHJvZ3JhbXModGhpcy5fcHJvZ3JhbXMpO1xuXHR9XG5cblx0c2V0IHByb2dyYW1zKHByb2dyYW1zKSB7XG5cdFx0dGhpcy5fcHJvZ3JhbXMgPSBwcm9ncmFtcztcblx0fVxuXG5cdGdldCBjb21tZW50cygpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnRzQnlJZHModGhpcy5fY29tbWVudHMpO1xuXHR9XG5cblx0c2V0IGNvbW1lbnRzKGNvbW1lbnRzKSB7XG5cdFx0dGhpcy5fY29tbWVudHMgPSBjb21tZW50cztcblx0fVxuXG5cdGdldCBzb2x1dGlvbigpIHtcblx0XHRyZXR1cm4gKG5ldyBUaWNrZXRNYW5hZ2VyKCkpLmdldENvbW1lbnQodGhpcy5fc29sdXRpb24pO1xuXHR9XG5cblx0c2V0IHNvbHV0aW9uKHNvbHV0aW9uKSB7XG5cdFx0dGhpcy5fc29sdXRpb24gPSBzb2x1dGlvbjtcblx0fVxuXG5cdGdldCBleHBlcnRpc2VfdHlwZV9zdGFmZigpIHtcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcikuZ2V0RXhwZXJ0aXNlVHlwZVN0YWZmKHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmKTtcblx0fVxuXG5cdHNldCBleHBlcnRpc2VfdHlwZV9zdGFmZihleHBlcnRpc2VUeXBlU3RhZmZJZCkge1xuXHRcdHRoaXMuX2V4cGVydGlzZV90eXBlX3N0YWZmID0gZXhwZXJ0aXNlVHlwZVN0YWZmSWQ7XG5cdH1cblxuXHRnZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoKSB7XG5cdFx0cmV0dXJuIChuZXcgU3RhZmZNYW5hZ2VyKCkpLmdldCh0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvcik7XG5cdH1cblxuXHRzZXQgYXNzaWduZWRfdG9fb3BlcmF0b3IoYXNzaWduZWRUb09wZXJhdG9ySWQpIHtcblx0XHR0aGlzLl9hc3NpZ25lZF90b19vcGVyYXRvciA9IGFzc2lnbmVkVG9PcGVyYXRvcklkO1xuXHR9XG5cblx0Z2V0IGV4cGVydGlzZV90eXBlKCkge1xuXHRcdHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAgLSAxICsgMSkpICsgMTsgLy9SYW5kb20gaW50IGJldHdlZW4gMSBhbmQgNDBcblx0XHRyZXR1cm4gKG5ldyBFeHBlcnRpc2VUeXBlTWFuYWdlcigpKS5nZXRFeHBlcnRpc2VUeXBlKHJhbmRvbSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldC5qcyIsImltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcbi8qKlxuICogRGV2aWNlXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBIYXJkd2FyZS5cbiAqIENvbnRhaW5zIGFsbCBzb2Z0d2FyZSB0aGF0IGlzIHJ1bm5pbmcgb24gdGhlIEhhcmR3YXJlIFVuaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGlkLFxuXHRcdHR5cGUsXG5cdFx0bWFrZSxcblx0XHRzZXJpYWxfbm8sXG5cdFx0dGlja2V0cyxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pXG5cdHtcblx0XHR0aGlzLmlkXHRcdFx0XHQ9IGlkO1xuXHRcdHRoaXMudHlwZVx0XHRcdD0gdHlwZTtcblx0XHR0aGlzLm1ha2UgICBcdFx0PSBtYWtlO1xuXHRcdHRoaXMuc2VyaWFsX25vICAgICBcdD0gc2VyaWFsX25vO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0PSB0aWNrZXRzO1xuXHRcdHRoaXMuY3JlYXRlZF9hdFx0XHQ9IGNyZWF0ZWRfYXQ7XG5cdFx0dGhpcy51cGRhdGVkX2F0XHRcdD0gdXBkYXRlZF9hdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgdGlja2V0cyB0aGlzIGRldmljZSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgZGV2aWNlIGlzIGFzc2lnbmVkIHRvXG5cdCAqL1xuXHRzZXQgdGlja2V0cyh0aWNrZXRzKSB7XG5cdFx0dGhpcy5fdGlja2V0cyA9IHRpY2tldHM7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvaGFyZHdhcmUvRGV2aWNlLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuLyoqXG4gKiBQcm9ncmFtXG4gKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwaWVjZSBvZiBTb2Z0d2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3JhbSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdHRpY2tldHMsXG5cdFx0b3BlcmF0aW5nX3N5c3RlbSxcblx0XHRleHBpcnlfZGF0ZSxcblx0XHRjcmVhdGVkX2F0X2h1bWFuOiBjcmVhdGVkX2F0LFxuXHRcdHVwZGF0ZWRfYXRfaHVtYW46IHVwZGF0ZWRfYXQsXG5cdH0pIFxuXHR7XG5cdFx0dGhpcy5pZCAgICAgICAgIFx0XHQ9IGlkO1xuXHRcdHRoaXMubmFtZSAgICAgICBcdFx0PSBuYW1lO1xuXHRcdHRoaXMuX3RpY2tldHNcdFx0XHQ9IHRpY2tldHM7XG5cdFx0dGhpcy5vcGVyYXRpbmdfc3lzdGVtXHQ9IG9wZXJhdGluZ19zeXN0ZW07XG5cdFx0dGhpcy5leHBpcnlfZGF0ZVx0XHQ9IGV4cGlyeV9kYXRlO1xuXHRcdHRoaXMuY3JlYXRlZF9hdCBcdFx0PSBjcmVhdGVkX2F0O1xuXHRcdHRoaXMudXBkYXRlZF9hdCBcdFx0PSB1cGRhdGVkX2F0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBsaXN0IG9mIGFsbCB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0Z2V0IHRpY2tldHMoKSB7XG5cdFx0aWYgKHRoaXMuX3RpY2tldHMpIHtcblx0XHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0c0J5VGlja2V0SURzKHRoaXMuX3RpY2tldHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtBcnJheX0gdGlja2V0cyBTZXRzIHRoZSB0aWNrZXRzIHRoaXMgcHJvZ3JhbSBpcyBhc3NpZ25lZCB0b1xuXHQgKi9cblx0c2V0IHRpY2tldHModGlja2V0cykge1xuXHRcdHRoaXMuX3RpY2tldHMgPSB0aWNrZXRzO1xuXHR9XG5cblx0Z2V0U29mdHdhcmVUeXBlKCkgeyBcblx0XHQvL0dldHMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgcHJvZ3JhbSBpcyBhbiBvcGVydGluZyBzeXN0ZW0gb3Igbm90XG5cdFx0aWYgKHRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiT3BlcmF0aW5nIFN5c3RlbVwiO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMub3BlcmF0aW5nX3N5c3RlbSkge1xuXHRcdFx0cmV0dXJuIFwiQXBwbGljYXRpb25cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiLVwiO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9zb2Z0d2FyZS9Qcm9ncmFtLmpzIiwiaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi4vc3RhZmYvU3RhZmZNYW5hZ2VyXCI7XG5cbi8qKlxuICogVGlja2V0U3RhdHVzXG4gKlxuICogSW50ZXJtZWRpYXJ5IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFN0YXR1c1xuICogYW5kIFRpY2tldC4gVGhpcyBzdG9yZXMgYSBoaXN0b3J5IG9mIGFcbiAqIFRpY2tldCdzIHN0YXR1c2VzOyB0aGUgbGFzdCBlbnRyeSBpc1xuICogdGhlIFRpY2tldCdzIGN1cnJlbnQgc3RhdHVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXRTdGF0dXMge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0aWQsXG5cdFx0dGlja2V0X2lkOiB0aWNrZXQsXG5cdFx0c3RhdHVzX2lkOiBzdGF0dXMsXG5cdFx0c3RhZmZfaWQ6IHN0YWZmLFxuXHRcdGNyZWF0ZWRfYXRfaHVtYW46IGNyZWF0ZWRBdCxcblx0XHRjcmVhdGVkX2F0OiBjcmVhdGVkQXRSZWFsXG5cdH0pIHtcblx0XHR0aGlzLmlkICAgICAgICAgICAgICA9IGlkO1xuXHRcdHRoaXMudGlja2V0ICAgICAgICAgID0gdGlja2V0OyAvLyBJRCBvZiB0aWNrZXQsIGdldCBtZXRob2QgcmV0dXJucyBpbnN0YW5jZSBvZiBUaWNrZXRcblx0XHR0aGlzLnN0YXR1cyAgICAgICAgICA9IHN0YXR1czsgLy8gSUQgb2Ygc3RhdHVzLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhdHVzXG5cdFx0dGhpcy5zdGFmZiAgICAgICAgICAgPSBzdGFmZjsgIC8vIElEIG9mIHN0YWZmLCBnZXQgbWV0aG9kIHJldHVybnMgaW5zdGFuY2Ugb2YgU3RhZmZcblx0XHR0aGlzLmNyZWF0ZWRfYXQgICAgICA9IGNyZWF0ZWRBdDtcblx0XHR0aGlzLmNyZWF0ZWRfYXRfcmVhbCA9IGNyZWF0ZWRBdFJlYWw7XG5cdH1cblxuXHRnZXQgdGlja2V0KCkge1xuXHRcdHJldHVybiAobmV3IFRpY2tldE1hbmFnZXIoKSkuZ2V0VGlja2V0KHRoaXMuX3RpY2tldCk7XG5cdH1cblxuXHRzZXQgdGlja2V0KHRpY2tldCkge1xuXHRcdHRoaXMuX3RpY2tldCA9IHRpY2tldDtcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIChuZXcgVGlja2V0TWFuYWdlcigpKS5nZXRTdGF0dXModGhpcy5fc3RhdHVzKTtcblx0fVxuXG5cdHNldCBzdGF0dXMoc3RhdHVzKSB7XG5cdFx0dGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cblx0Z2V0IHN0YWZmKCkge1xuXHRcdHJldHVybiAobmV3IFN0YWZmTWFuYWdlcigpKS5nZXQodGhpcy5fc3RhZmYpO1xuXHR9XG5cblx0c2V0IHN0YWZmKHN0YWZmKSB7XG5cdFx0dGhpcy5fc3RhZmYgPSBzdGFmZjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFN0YXR1cy5qcyIsImltcG9ydCBEeW5hbWljUGFnZSBmcm9tIFwiLi9EeW5hbWljUGFnZVwiO1xuXG4vKipcbiAqIEFQSVxuICpcbiAqIE9yaWdpbmFsbHkgdXNlZCB0byByZXRyaWV2ZSBhbmQgaGFuZGxlIGRhdGEgZnJvbVxuICogQVBJIGVuZHBvaW50cywgYnV0IG1vZGlmaWVkIHRvIGhvbGQgbG9jYWwgZGF0YVxuICogaW4gdGhlIGNvbnN0cnVjdG9yIHNldCBieSBXb3JkUHJlc3MncyBUd2lnXG4gKiAoZG9uZSB0byByZXVzZSBwcmV2aW91cyBjb21wb25lbnRzIHRvIHNhdmUgdGltZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGNhbGxzID0gW10sXG5cdFx0c3RhdHVzZXMgPSBbXSxcblx0XHR0aWNrZXRzID0gW10sXG5cdFx0dGlja2V0X3N0YXR1c2VzOiB0aWNrZXRTdGF0dXNlcyA9IFtdLFxuXHRcdGNvbW1lbnRzID0gW10sXG5cdFx0c3RhZmYgPSBbXSxcblx0XHRkZXZpY2VzID0gW10sXG5cdFx0cHJvZ3JhbXMgPSBbXSxcblx0XHRleHBlcnRpc2VfdHlwZXM6IGV4cGVydGlzZVR5cGVzID0gW10sXG5cdFx0ZXhwZXJ0aXNlX3R5cGVfc3RhZmY6IGV4cGVydGlzZVR5cGVTdGFmZiA9IFtdLFxuXHRcdGRlcGFydG1lbnRzID0gW11cblx0fSkge1xuXHRcdHRoaXMuY2FsbHMgICAgICAgICAgICAgID0gY2FsbHM7XG5cdFx0dGhpcy5zdGF0dXNlcyAgICAgICAgICAgPSBzdGF0dXNlcztcblx0XHR0aGlzLnRpY2tldHMgICAgICAgICAgICA9IHRpY2tldHM7XG5cdFx0dGhpcy50aWNrZXRTdGF0dXNlcyAgICAgPSB0aWNrZXRTdGF0dXNlcztcblx0XHR0aGlzLmNvbW1lbnRzICAgICAgICAgICA9IGNvbW1lbnRzO1xuXHRcdHRoaXMuc3RhZmYgICAgICAgICAgICAgID0gc3RhZmY7XG5cdFx0dGhpcy5kZXZpY2VzICAgICAgICAgICAgPSBkZXZpY2VzO1xuXHRcdHRoaXMucHJvZ3JhbXMgICAgICAgICAgID0gcHJvZ3JhbXM7XG5cdFx0dGhpcy5leHBlcnRpc2VUeXBlcyAgICAgPSBleHBlcnRpc2VUeXBlcztcblx0XHR0aGlzLmV4cGVydGlzZVR5cGVTdGFmZiA9IGV4cGVydGlzZVR5cGVTdGFmZjtcblx0XHR0aGlzLmRlcGFydG1lbnRzICAgICAgICA9IGRlcGFydG1lbnRzO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvQVBJLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFN0YWZmTWFuYWdlciBmcm9tIFwiLi9TdGFmZk1hbmFnZXJcIjtcbmltcG9ydCBUaWNrZXRNYW5hZ2VyIGZyb20gXCIuLi90aWNrZXRzL1RpY2tldE1hbmFnZXJcIjtcblxuLyoqXG4gKiBTdGFmZlBhZ2VcbiAqXG4gKiBNZXRob2RzIHVzZWZ1bCBmb3IgcG9wdWxhdGluZyBhbmQgaGFuZGxpbmcgaW5wdXQgb24gU3RhZmYgcGFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZlBhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuc3RhZmZNYW5hZ2VyICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblx0XHR0aGlzLnRpY2tldE1hbmFnZXIgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0Ly8gTm8gZW1wbG95ZWUgZGV0YWlsIHNob3duIGJ5IGRlZmF1bHRcblx0XHR0aGlzLmVtcGxveWVlID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW4gYW5kIHNob3cgYWxsIHN0YWZmIGluIGxpc3QgdmlldyB0YWJsZSBvbiBwYWdlXG5cdCAqL1xuXHRzaG93U3RhZmYoKSB7XG5cdFx0Ly8gRW5zdXJlIG5vIGxvY2FsbHktY2FjaGVkIGRhdGEgaXMgcHJlc2VudCBpbiBzdGFmZiB0YWJsZSBiZWZvcmUgcG9wdWxhdGluZ1xuXHRcdCQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuZW1wdHkoKTtcblxuXHRcdC8vIENvbHVtbiB0byBmaWxsIHRpY2tldHMgbnVtYmVyIGludG9cblx0XHRsZXQgdGlja2V0c0NvbHVtbkluZGV4ID0gJCh0aGlzLnRhYmxlU2VsZWN0b3IpLmZpbmQoXCJ0clwiKS5maXJzdCgpXG5cdFx0XHRcdC5jaGlsZHJlbihcIltkYXRhLXNsdWc9XFxcInRpY2tldHMuYXNzaWduZWRcXFwiXVwiKS5pbmRleCgpO1xuXG5cdFx0Ly8gVGVtcG9yYXJ5IGFycmF5IHRvIGhvbGQgc3RhZmYgSURzIHN0aWxsIGF3YWl0aW5nIHRpY2tldCBjb3VudHNcblx0XHRsZXQgc3RhZmZGb3JUaWNrZXRzID0gW107XG5cblx0XHQvLyBQdXQgZWFjaCBzdGFmZiBtZW1iZXIgb24gdGFibGVcblx0XHRsZXQgc3RhZmYgPSB0aGlzLnN0YWZmTWFuYWdlci5zdGFmZjtcblxuXHRcdC8vIEFkZCBlYWNoIHN0YWZmIG1lbWJlciB0byBhIG5ldyByb3cgaW4gdGhlIHRhYmxlXG5cdFx0Zm9yIChsZXQgZW1wbG95ZWUgb2Ygc3RhZmYpIHtcblx0XHRcdGxldCAkdGFibGVSb3cgPSB0aGlzLmFwcGVuZFRhYmxlUm93KGVtcGxveWVlKTtcblx0XHRcdHN0YWZmRm9yVGlja2V0cy5wdXNoKGVtcGxveWVlLmlkKTtcblx0XHR9XG5cblx0XHQvLyBIaWRlIHNwbGFzaCBzY3JlZW4gaWYgdGhlcmUgaXMgYXQgbGVhc3QgMSBzdGFmZiBtZW1iZXIgaW4gdmlld1xuXHRcdHRoaXMudXBkYXRlU3BsYXNoU2NyZWVuKCk7XG5cblx0XHQvLyBHZXQgYXNzaWduZWQgdGlja2V0IGNvdW50cyBhc3luY2hyb25vdXNseVxuXHRcdChhc3luYyhpZHMpID0+IHtcblx0XHRcdC8vIEdldCBudW1iZXIgb2YgYXNzaWduZWQgdGlja2V0cyBhbmQgZmlsbCBjb2x1bW5cblx0XHRcdGxldCAkcm93cyA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKFwidGJvZHlcIikuY2hpbGRyZW4oXCJ0clwiKTtcblx0XHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNBc3NpZ25lZFRvU3RhZmZJZHMoaWRzKTtcblx0XHRcdCRyb3dzLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRcdGVsLmNoaWxkcmVuW3RpY2tldHNDb2x1bW5JbmRleF0udGV4dENvbnRlbnQgPSB0aWNrZXRzW2krMV0gPyAodGlja2V0c1tpKzFdLmxlbmd0aCB8fCAwKSA6IDA7XG5cdFx0XHR9KTtcblx0XHR9KShzdGFmZkZvclRpY2tldHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBzaG93aW5nIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuIFVzdWFsbHkgY2FsbGVkXG5cdCAqIHdoZW4gY2xpY2tpbmcgb24gYSByb3cgaW4gdGhlIHRhYmxlLCBidXQgY2FuIGFsc28gYmUgY2FsbGVkXG5cdCAqIGZvciBvdGhlciB0YWJsZSByb3cgY2hhbmdlIGlucHV0cywgc3VjaCBhcyBoYXNoIGZyYWdtZW50IG9yXG5cdCAqIGtleWJvYXJkIGlucHV0LlxuXHQgKlxuXHQgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZSB0byBzaG93IGRldGFpbFxuXHQgKi9cblx0c2hvd1RhYmxlUm93RGV0YWlscyhpZCkge1xuXHRcdC8vIEdldCBlbXBsb3llZSB3aXRoIElEXG5cdFx0dGhpcy5lbXBsb3llZSA9IHRoaXMuc3RhZmZNYW5hZ2VyLmdldChpZCk7XG5cdFx0Ly8gQ2F0Y2ggaW52YWxpZCBJRHMgYW5kIHNob3cgbWVzc2FnZVxuXHRcdGlmICghdGhpcy5lbXBsb3llZSkge1xuXHRcdFx0Ly8gSGlkZSBzaW5nbGUgdmlldyBpZiBubyBkZXRhaWwgaXMgYWJsZSB0byBiZSBwcmVzZW50ZWRcblx0XHRcdC8vIGZvciByZXF1ZXN0ZWQgSUQsIGVuc3VyaW5nIHRoZSBwZXJzb24gdXNpbmcgdGhlIHN5c3RlbVxuXHRcdFx0Ly8gaXMgbm90IGNvbmZ1c2VkIGJ5IGRhdGEgc2hvd24gZm9yIHByZXZpb3VzbHkgYWNjZXNzZWQgdXNlci5cblx0XHRcdHRoaXMuaGlkZVRhYmxlUm93RGV0YWlscygpO1xuXHRcdFx0RHluYW1pY1BhZ2Uuc2hvd05vdGlmaWNhdGlvbihcIk5vIGVtcGxveWVlIHdpdGggSUQgXCIgKyBpZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUHV0IGVtcGxveWVlIG5hbWUgaW4gdGl0bGUgYmFyIG9mIHNpbmdsZSB2aWV3XG5cdFx0dGhpcy51cGRhdGVTaW5nbGVWaWV3TmF2YmFyKHRoaXMuZW1wbG95ZWUubmFtZSk7XG5cdFx0XG5cdFx0Ly8gRmlsbCBpbiBjb250ZW50IGZvciBlYWNoIGZpZWxkIGF2YWlsYWJsZSBpbiBzdGFmZiBtZW1iZXJcblx0XHQkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLmZpbmQoXCJbZGF0YS1zbHVnXVwiKS5lYWNoKChpLCBlbCkgPT4ge1xuXHRcdFx0Ly8gRWFjaCBzbHVnIGlzIGEgZGlmZmVyZW50IGZpZWxkIHRvIGJlIGZpbGxlZCwgc29cblx0XHRcdC8vIGdldCBlYWNoIHZhbHVlIGFuZCBzZXQgZWxlbWVudCBjb250ZW50IHRvIHZhbHVlXG5cdFx0XHRsZXQgdmFsdWUgPSBPYmplY3QucmVzb2x2ZShlbC5kYXRhc2V0LnNsdWcsIHRoaXMuZW1wbG95ZWUpO1xuXHRcdFx0Ly8gU29tZSB2YWx1ZXMgYXJlIG9wdGlvbmFsLCBzbyBkb24ndCBzaG93IHVuZGVmaW5lZCBpZiBubyBkYXRhXG5cdFx0XHRlbC50ZXh0Q29udGVudCA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHZhbHVlIDogXCLigJRcIjtcblx0XHR9KTtcblxuXHRcdC8vIFNvbWUgY29udGVudCByZXF1aXJlcyBzcGVjaWFsIGhhbmRsaW5nIGZvciBpbnB1dCBvZiBpbmZvcm1hdGlvblxuXHRcdCQodGhpcy5kZXRhaWxTZWxlY3RvcikuZmluZChcIltkYXRhLWN1c3RvbXNsdWddXCIpLmVhY2goKGksIGVsKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGVsLmRhdGFzZXQuY3VzdG9tc2x1Zykge1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gdG9rZW5zIG5lZWQgdG8gYmUgaGFuZGxlZCBzcGVjaWFsbHlcblx0XHRcdFx0Ly8gc2luY2UgdmFsdWUgaXMgbm90IG5vcm1hbCB0ZXh0XG5cdFx0XHRcdGNhc2UgXCJhY2Nlc3NcIjpcblx0XHRcdFx0XHRTdGFmZlBhZ2Uuc2hvd1Blcm1pc3Npb25zKGVsLCB0aGlzLmVtcGxveWVlKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwiYXZhdGFyXCI6XG5cdFx0XHRcdFx0ZWwuc3JjID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yNzV4Mjc1XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcInRpY2tldHMuYXNzaWduZWRcIjpcblx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IFwi4oCmXCI7XG5cdFx0XHRcdFx0KGFzeW5jKGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXRzQXNzaWduZWRUb1N0YWZmSWQodGhpcy5lbXBsb3llZS5pZCkubGVuZ3RoO1xuXHRcdFx0XHRcdH0pKGVsKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyBJZiBpbiBkb3VidCwgcHJlc3VtZSBkYXRhIGlzIGludmFsaWQgYW5kIHNob3cgc2FtZSBhcyBubyBkYXRhXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSBcIuKAlFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRHluYW1pY1BhZ2UgbmVlZHMgdG8gaGFuZGxlIHZpZXcgY29kZVxuXHRcdHN1cGVyLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpO1xuXG5cdFx0Ly8gUHJvYmxlbSB0eXBlcyB2aWV3IGhhbmRsaW5nIHRvIGJlIG9idGFpbmVkIGJ5IHNwZWNpZmljIHByb2JsZW0gdHlwZSBKU1xuXHRcdHdpbmRvdy5zdGFmZlByb2JsZW1UeXBlUGFnZS5jdXJyZW50U3BlY2lhbGlzbXMgPSB0aGlzLmVtcGxveWVlLl9zcGVjaWFsaXNtcztcblx0XHR3aW5kb3cuc3RhZmZQcm9ibGVtVHlwZVBhZ2UubG9hZFNwZWNpYWxpc3RFeHBlcnRpc2VUeXBlcygkKCcudHlwZS1jb2x1bW5zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBkaXNwbGF5aW5nIHBlcm1pc3Npb25zIGZyb20gZGF0YSBvYmplY3Rcblx0ICogdG8gaW5kaXZpZHVhbCB0b2tlbnMgc2hvd24gaW4gaW5wdXQsIG9uZSBmb3IgZWFjaCBvZlxuXHQgKiB0aGUgcGVybWlzc2lvbiBsZXZlbHMgZ3JhbnRlZCB0byB0aGUgdXNlci5cblx0ICpcblx0ICogQHBhcmFtIGVsIFRoZSBlbGVtZW50IHRvIGZpbGwgd2l0aCB0aGUgcGVybWlzc2lvbiBkZXRhaWxzXG5cdCAqIEBwYXJhbSBlbXBsb3llZSBUaGUgZW1wbG95ZWUgdG8gZ2V0IHRoZSBncmFudGVkIHBlcm1pc3Npb24gaW5mb3JtYXRpb24gZnJvbVxuXHQgKi9cblx0c3RhdGljIHNob3dQZXJtaXNzaW9ucyhlbCwgZW1wbG95ZWUpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdC8vIERlZmluZSB0aGUgaWNvbnMgdG8gYmUgZGlzcGxheWVkIGZvciBlYWNoIG9mIHRoZSBwZXJtaXNzaW9uIGxldmVsc1xuXHRcdGxldCBpY29ucyA9IHtyZWFkOiBcImV5ZVwiLCBvcGVyYXRvcjogXCJ1c2VyLXNlY3JldFwiLCBhbmFseXN0OiBcImxpbmUtY2hhcnRcIiwgYWRtaW46IFwic2hpZWxkXCJ9O1xuXG5cdFx0Ly8gRWFjaCBwZXJtaXNzaW9uIGhhcyBpdHMgb3duIHRva2VuIGZvciByZXByZXNlbnRpbmcgaXRzZWxmXG5cdFx0Zm9yIChsZXQgcGVybWlzc2lvbiBvZiBbXCJyZWFkXCIsIFwib3BlcmF0b3JcIiwgXCJhbmFseXN0XCIsIFwiYWRtaW5cIl0pIHtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHdoZXRoZXIgZW1wbG95ZWUgaGFzIHBlcm1pc3Npb24gYW5kIG9ubHkgc2hvdyBpZiB0cnVlXG5cdFx0XHRpZiAoZW1wbG95ZWUuYWNjZXNzW3Blcm1pc3Npb25dKSB7XG5cblx0XHRcdFx0Ly8gUGVybWlzc2lvbiBpY29uXG5cdFx0XHRcdGxldCBlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0XHRcdFx0ZWxJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLVwiICsgaWNvbnNbcGVybWlzc2lvbl0pO1xuXG5cdFx0XHRcdC8vIFBlcm1pc3Npb24gbmFtZVxuXHRcdFx0XHRsZXQgZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRcdGVsVGV4dC50ZXh0Q29udGVudCA9IHBlcm1pc3Npb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwZXJtaXNzaW9uLnNsaWNlKDEpO1xuXG5cdFx0XHRcdC8vIEdyb3VwIGljb24gYW5kIG5hbWUgaW50byBzaW5nbGUgdG9rZW5cblx0XHRcdFx0bGV0IGVsUGVybWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRlbFBlcm1pc3Npb24uYXBwZW5kQ2hpbGQoZWxJY29uKTtcblx0XHRcdFx0ZWxQZXJtaXNzaW9uLmFwcGVuZENoaWxkKGVsVGV4dCk7XG5cblx0XHRcdFx0Ly8gRGlzcGxheSBwZXJtaXNzaW9uIHRva2VuIGluIGVsZW1lbnRcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZWxQZXJtaXNzaW9uKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggc3RhZmYgbWVtYmVycyBnaXZlbiBhIHNlYXJjaCBzdHJpbmdcblx0ICogdG8gZmlsdGVyIHRoZSB0YWJsZSBieSBlbXBsb3llZXMgbWF0Y2hpbmcgdGhlIHN0cmluZy5cblx0ICogVGhpcyBzZWFyY2hlcyB0aHJvdWdoIG1hbnkgc3RhZmYgdGFibGUgZmllbGRzOlxuXHQgKiBpZCwgbmFtZSwgam9iLCBkZXBhcnRtZW50IGFuZCBwaG9uZSBudW1iZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHN0cmluZyB0byBmaWx0ZXIgdGhlIGVtcGxveWVlcyBieVxuXHQgKi9cblx0YXN5bmMgc2VhcmNoKHF1ZXJ5KSB7XG5cdFx0Ly8gT25seSBzZWFyY2ggaWYgcXVlcnkgaXMgc3VmZmljaWVudCBmb3Igc2VhcmNoXG5cdFx0Ly8gVGhpcyBtYXR0ZXJzIG1vcmUgd2l0aCBsYXJnZXIgZGF0YXNldHMgd2hlcmUgXCJhXCIgY2FuIGhhdmVcblx0XHQvLyB0aG91c2FuZHMgb2YgcmVzdWx0cy4gQWx3YXlzIGVuc3VyZSBJRCBzZWFyY2hlcyBhcmUgcGVyZm9ybWVkXG5cdFx0Ly8gc2luY2UgSUQgaXMgaW5kZXhlZCBhbmQgY2FuIGJlIHNlYXJjaGVkIHZlcnkgcXVpY2tseS5cblx0XHRpZiAocXVlcnkubGVuZ3RoID49IDIgfHwgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgcXVlcnkgPT0gcGFyc2VJbnQocXVlcnkpKSkge1xuXG5cdFx0XHQvLyBEZWZpbmUgcHJvcGVydGllcyBvZiBlbXBsb3llZXMgdG8gYmUgc2VhcmNoZWQgZm9yIHF1ZXJ5IG1hdGNoXG5cdFx0XHR2YXIgcHJvcGVydGllcyA9IFtcImlkXCIsIFwibmFtZVwiLCBcImpvYlwiLCBcImRlcGFydG1lbnRcIiwgXCJwaG9uZVwiXTtcblx0XHRcdC8vIFBlcmZvcm0gdGhlIHNlYXJjaCB1c2luZyBzdXBlciBzZWFyY2ggYW5kIGFzc2lnbiByZXN1bHRzXG5cdFx0XHRzdXBlci5zZWFyY2gocXVlcnksIHRoaXMuc3RhZmZNYW5hZ2VyLnNlYXJjaChxdWVyeSwgcHJvcGVydGllcyksIG9iaiA9PiBPYmplY3QuYXNzaWduKHt9LCBvYmopLCBwcm9wZXJ0aWVzKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHNob3dpbmcgYWxsIHN0YWZmIGlmIHF1ZXJ5IGlzIG1pc3Npbmcgb3IgaW5zdWZmaWNpZW50XG5cdFx0XHQvLyBUaGlzIGlzIGRpc3RpbmN0IHRvIHRoZSBjYXNlIHdoZXJlIHRoZXJlIGFyZSBubyByZXN1bHRzIHRvXG5cdFx0XHQvLyBhIHN1Y2Nlc3NmdWwgcXVlcnkg4oCUIHRoaXMgaXMgaGFuZGxlZCBpbiBzdXBlcidzIHNlYXJjaCBtZXRob2Rcblx0XHRcdC8vIGFuZCBzaG93cyBhbiBhcHByb3ByaWF0ZSBtZXNzYWdlIGluc3RlYWQgb2YgYWxsIHRoZSBzdGFmZi5cblx0XHRcdHRoaXMuc2hvd1N0YWZmKCk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvZnJvbnRlbmQvanMvcGFnZXMvc3RhZmYvU3RhZmZQYWdlLmpzIiwiaW1wb3J0IER5bmFtaWNQYWdlIGZyb20gXCIuLi9EeW5hbWljUGFnZVwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4vVGlja2V0TWFuYWdlclwiO1xuaW1wb3J0IFNvZnR3YXJlTWFuYWdlciBmcm9tIFwiLi4vc29mdHdhcmUvU29mdHdhcmVNYW5hZ2VyXCI7XG5pbXBvcnQgSGFyZHdhcmVNYW5hZ2VyIGZyb20gXCIuLi9oYXJkd2FyZS9IYXJkd2FyZU1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFN0YWZmUGFnZSBmcm9tIFwiLi4vc3RhZmYvU3RhZmZQYWdlXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50XCI7XG5cbi8qKlxuICogVGlja2V0UGFnZVxuICpcbiAqIE1hbmlwdWxhdGVzIHRoZSB0aWNrZXRzIHBhZ2UgL3cgSlF1ZXJ5IHVzaW5nIGRhdGEgZnJvbVxuICogdGhlIFRpY2tldE1hbmFnZXIuIE1ldGhvZHMgbW9zdGx5IGdldCBjYWxsZWQgZnJvbSB0aWNrZXRzLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tldFBhZ2UgZXh0ZW5kcyBEeW5hbWljUGFnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgID0gbmV3IFRpY2tldE1hbmFnZXIoKTtcblx0XHR0aGlzLnNvZnR3YXJlTWFuYWdlciA9IG5ldyBTb2Z0d2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLmhhcmR3YXJlTWFuYWdlciA9IG5ldyBIYXJkd2FyZU1hbmFnZXIoKTtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgICA9IG5ldyBTdGFmZk1hbmFnZXIoKTtcblxuXHRcdHRoaXMuY3VycmVudFRpY2tldCA9IG51bGw7IC8vIFRpY2tldCBiZWluZyBzaG93biBvbiB0aGUgcmlnaHQgcGFuZWxcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHRpY2tldHMgd2hlcmUgdGhlaXIgc3RhdHVzIGlzIGluIHRoZSBhcnJheSBvZlxuXHQgKiBzdGF0dXMgc2x1Z3MuIFJlcGxhY2VzIHRoZSBjdXJyZW50IGxpc3QtdmlldyB3aXRoIHRoZW0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IEFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIHN0YXR1cyBzbHVnc1xuXHQgKi9cblx0c2hvd0ZpbHRlcmVkVGlja2V0cyhzdGF0dXNTbHVncykge1xuXHRcdGxldCBzdGF0dXMsIGZpbHRlcmVkVGlja2V0cywgZmlsdGVyZWRUaWNrZXQsIGksIGosXG5cdFx0XHRzcGxpdFN0YXR1c1NsdWdzID0gc3RhdHVzU2x1Z3Muc3BsaXQoJywnKTtcblxuXHRcdGlmIChzdGF0dXNTbHVncy5pbmRleE9mKCdhc3NpZ25lZF90bycpID4gLTEpIHtcblx0XHRcdGZpbHRlcmVkVGlja2V0cyA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRNeVRpY2tldHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmlsdGVyZWRUaWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNXaXRoU2x1Z0luKHNwbGl0U3RhdHVzU2x1Z3MpO1xuXHRcdH1cblxuXHRcdGxldCAkcm93cyA9ICQodGhpcy50YWJsZVNlbGVjdG9yKS5maW5kKCd0Ym9keSB0cicpO1xuXG5cdFx0aWYgKCRyb3dzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGZpbHRlcmVkVGlja2V0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRmaWx0ZXJlZFRpY2tldCA9IGZpbHRlcmVkVGlja2V0c1tqXTtcblx0XHRcdFx0c3RhdHVzICAgICAgICAgPSBmaWx0ZXJlZFRpY2tldC5zdGF0dXM7XG5cblx0XHRcdFx0dGhpcy5hcHBlbmRUYWJsZVJvdyh7XG5cdFx0XHRcdFx0aWQ6IGZpbHRlcmVkVGlja2V0LmlkLFxuXHRcdFx0XHRcdHRpdGxlOiBmaWx0ZXJlZFRpY2tldC50aXRsZSxcblx0XHRcdFx0XHRzdGF0dXNfbmFtZTogJzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgc3RhdHVzLnNsdWcuc3BsaXQoJ18nKVswXSArICdcIiBkYXRhLXNsdWc9XCInICsgc3RhdHVzLnNsdWcgKyAnXCI+JyArIHN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nLFxuXHRcdFx0XHRcdGNyZWF0ZWRfYXQ6IGZpbHRlcmVkVGlja2V0LmNyZWF0ZWRfYXQsXG5cdFx0XHRcdFx0dXBkYXRlZF9hdDogZmlsdGVyZWRUaWNrZXQudXBkYXRlZF9hdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkcm93cy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNwbGl0U3RhdHVzU2x1Z3MuaW5kZXhPZigkKHRoaXMpLmZpbmQoJ3RkIHNwYW4uZmlsdGVyJykuZGF0YSgnc2x1ZycpKSA9PT0gLTEpIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygncm93LWhpZGRlbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygncm93LWhpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy51cGRhdGVTcGxhc2hTY3JlZW4oKTtcblxuXHRcdHRoaXMuY3VycmVudFRpY2tldCA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUHJlc2VudHMgYSBUaWNrZXQgaW4gdGhlIHJpZ2h0IHBhbmVsICh0aWNrZXQgdmlldykuXG5cdCAqIFxuXHQgKiBQb3B1bGF0ZXMgZWxlbWVudHMgb24gdGhlIHRpY2tldCB2aWV3LCBpbmNsdWRpbmcgZXh0ZXJuYWxcblx0ICogaXRlbXMgc3VjaCBhczpcblx0ICogICAgIC0gRGV2aWNlc1xuXHQgKiAgICAgLSBQcm9ncmFtc1xuXHQgKiAgICAgLSBDYWxsc1xuXHQgKiAgICAgLSBDb21tZW50c1xuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBUaWNrZXQuaWRcblx0ICovXG5cdHNob3dUaWNrZXRWaWV3KHRpY2tldElkKSB7XG5cdFx0aWYgKHRpY2tldElkICE9PSBudWxsKSB7IC8vIG51bGwgd2hlbiBubyBjdXJyZW50VGlja2V0IGhhcyBiZWVuIG9wZW5lZCB5ZXQsIGJ1dCB1c2VyIGlzIGNoYW5naW5nIHRoZSBjYXRlZ29yeVxuXHRcdFx0bGV0IHRpY2tldCAgICAgICA9IHRoaXMudGlja2V0TWFuYWdlci5nZXRUaWNrZXQodGlja2V0SWQpLFxuXHRcdFx0XHR0aWNrZXRTdGF0dXMgPSB0aWNrZXQuc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRUaWNrZXQgPSB0aWNrZXQ7XG5cblx0XHRcdHRoaXMudXBkYXRlU2luZ2xlVmlld05hdmJhcih0aWNrZXQudGl0bGUgKyAnPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLScgKyB0aWNrZXRTdGF0dXMuc2x1Zy5zcGxpdCgnXycpWzBdICsgJ1wiPicgKyB0aWNrZXRTdGF0dXMubmFtZSArICc8L3NwYW4+Jyk7XG5cblx0XHRcdCQoJyN0aWNrZXQtdmlldyAjdGlja2V0LW92ZXJ2aWV3JykudGV4dCgnIycgKyB0aWNrZXQuaWQgKyAnIHwgJyArIHRpY2tldC5jcmVhdGVkX2F0ICsgJyB8ICcgKyB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0QXNzaWduZWRUbyh0aWNrZXQpLm5hbWUpO1xuXHRcdFx0JCgnI3RpY2tldC12aWV3ICN0aWNrZXQtZGVzY3JpcHRpb24gcCcpLnRleHQodGlja2V0LmRlc2NyaXB0aW9uKTtcblxuXHRcdFx0dmFyICR0aWNrZXRDb21tZW50cyAgICAgICAgICAgPSAkKCcjdGlja2V0LWNvbW1lbnRzJyksXG5cdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlICAgPSAkKCcjdGlja2V0LXZpZXcgI2hhcmR3YXJlLXNvZnR3YXJlLXRhYmxlJyksXG5cdFx0XHRcdCR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUgPSAkKCcjdGlja2V0LXZpZXcgI25vLWhhcmR3YXJlLXNvZnR3YXJlJyksXG5cdFx0XHRcdCR0aWNrZXRDYWxsSGlzdG9yeUJvZHkgICAgPSAkKCcjdGlja2V0LXZpZXcgI2NhbGwtaGlzdG9yeS10YWJsZSB0Ym9keScpLmVtcHR5KCk7XG5cblx0XHRcdCR0aWNrZXRDb21tZW50cy50ZXh0KCdMb2FkaW5nIGNvbW1lbnRz4oCmJykuc2hvdygpO1xuXHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmUuaGlkZSgpO1xuXHRcdFx0JHRpY2tldE5vSGFyZHdhcmVTb2Z0d2FyZS5oaWRlKCk7XG5cblx0XHRcdC8vIFNob3cgYmFzaWMgaW5mbyB3aGlsc3Qgb3RoZXIgZGF0YSBpcyBiZWluZyBsb2FkZWQgYXN5bmNocm9ub3VzbHlcblx0XHRcdHRoaXMuc2hvd1RhYmxlUm93RGV0YWlscyh0aWNrZXQuaWQpO1xuXG5cdFx0XHQvLyBBZmZlY3RlZCBpdGVtcyAoZGV2aWNlcyBhbmQgcHJvZ3JhbXMpXG5cdFx0XHQoYXN5bmMoKSA9PiB7XG5cdFx0XHRcdGxldCBkZXZpY2VzICAgICAgID0gdGlja2V0LmRldmljZXMsXG5cdFx0XHRcdFx0cHJvZ3JhbXMgICAgICA9IHRpY2tldC5wcm9ncmFtcyxcblx0XHRcdFx0XHRhZmZlY3RlZEl0ZW1zID0gZGV2aWNlcy5jb25jYXQocHJvZ3JhbXMpO1xuXG5cdFx0XHRcdGlmIChhZmZlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkgeyAvLyBoaWRlIHRoZSBIVy9TVyB0YWJsZSBpZiB0aGVyZSdzIG5vIGFmZmVjdGVkIGl0ZW1zXG5cdFx0XHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmUuaGlkZSgpO1xuXHRcdFx0XHRcdCR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUuc2hvdygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciAkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZUJvZHkgPSAkdGlja2V0SGFyZHdhcmVTb2Z0d2FyZS5maW5kKCd0Ym9keScpO1xuXG5cdFx0XHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmVCb2R5LmVtcHR5KCk7XG5cblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFmZmVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBhZmZlY3RlZEl0ZW0gPSBhZmZlY3RlZEl0ZW1zW2ldLFxuXHRcdFx0XHRcdFx0XHR0eXBlO1xuXG5cdFx0XHRcdFx0XHQvLyBnZXQgdHlwZSBvZiBhZmZlY3RlZEl0ZW0gdG8gZGlzcGxheSBpbiB0aWNrZXQtdmlldyB0YWJsZVxuXHRcdFx0XHRcdFx0aWYgKGFmZmVjdGVkSXRlbS5oYXNPd25Qcm9wZXJ0eSgnc2VyaWFsX25vJykpIHtcblx0XHRcdFx0XHRcdFx0dHlwZSA9ICdIYXJkd2FyZSc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGFmZmVjdGVkSXRlbS5vcGVyYXRpbmdfc3lzdGVtKSB7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAnT1MnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dHlwZSA9ICdTb2Z0d2FyZSc7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCR0aWNrZXRIYXJkd2FyZVNvZnR3YXJlQm9keS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCc8dHIgZGF0YS1yb3dpZD1cIicgKyBhZmZlY3RlZEl0ZW0uaWQgKyAnXCIgZGF0YS1yb3d0eXBlPVwiJyArIChhZmZlY3RlZEl0ZW0uaGFzT3duUHJvcGVydHkoJ3NlcmlhbF9ubycpID8gJ2hhcmR3YXJlJyA6ICdzb2Z0d2FyZScpICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyAoYWZmZWN0ZWRJdGVtLnR5cGUgfHwgYWZmZWN0ZWRJdGVtLm5hbWUpICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0Jzx0ZCBjbGFzcz1cInRydW5jYXRlXCI+JyArIChhZmZlY3RlZEl0ZW0uc2VyaWFsX25vIHx8ICfigJQnKSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGQgY2xhc3M9XCJ0cnVuY2F0ZVwiPicgKyB0eXBlICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4nICtcblx0XHRcdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JHRpY2tldEhhcmR3YXJlU29mdHdhcmUuc2hvdygpO1xuXHRcdFx0XHRcdCR0aWNrZXROb0hhcmR3YXJlU29mdHdhcmUuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHQvLyBDYWxsc1xuXHRcdFx0KGFzeW5jKCkgPT4ge1xuXHRcdFx0XHRsZXQgY2FsbHMgPSB0aWNrZXQuY2FsbHM7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYWxscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxldCBjYWxsICAgPSBjYWxsc1tpXSxcblx0XHRcdFx0XHRcdGNhbGxlciA9IGNhbGwuY2FsbGVyO1xuXG5cdFx0XHRcdFx0JHRpY2tldENhbGxIaXN0b3J5Qm9keS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQnPHRyIGRhdGEtcm93aWQ9XCInICsgY2FsbC5pZCArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICsgY2FsbC5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgKyBjYWxsZXIubmFtZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkPicgKyBjYWxsLnRpbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdC8vIENvbW1lbnRzXG5cdFx0XHQoYXN5bmMoKSA9PiB7XG5cdFx0XHRcdGxldCBjb21tZW50cyA9IHRpY2tldC5jb21tZW50cyxcblx0XHRcdFx0XHRtZSAgICAgICA9IHRoaXMuc3RhZmZNYW5hZ2VyLmN1cnJlbnRVc2VyKHRydWUpO1xuXG5cdFx0XHRcdGlmIChjb21tZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHQkdGlja2V0Q29tbWVudHMudGV4dCgnTm8gY29tbWVudHMgaGF2ZSBiZWVuIGxlZnQgeWV0IScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCR0aWNrZXRDb21tZW50cy50ZXh0KCdMb2FkaW5nIGNvbW1lbnRz4oCmJyk7XG5cblx0XHRcdFx0XHRsZXQgdGlja2V0U3RhdHVzZXMgPSB0aWNrZXRQYWdlLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0U3RhdHVzZXNCeVRpY2tldElkKHRpY2tldC5pZCksXG5cdFx0XHRcdFx0XHR0aWNrZXRGZWVkICAgICA9IGNvbW1lbnRzLmNvbmNhdCh0aWNrZXRTdGF0dXNlcyksIC8vIGluY2x1ZGVzIGNvbW1lbnRzIGFuZCB0aWNrZXQgc3RhdHVzIGhpc3RvcnkgaW4gb25lXG5cdFx0XHRcdFx0XHQkdGlja2V0RmVlZCAgICA9ICQoJzxkaXY+Jyk7XG5cblx0XHRcdFx0XHQvLyBTb3J0IHRoZSBmZWVkIGJ5IGRhdGVcblx0XHRcdFx0XHR0aWNrZXRGZWVkLnNvcnQoZnVuY3Rpb24oYSwgYil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRGF0ZS5wYXJzZShhLmNyZWF0ZWRfYXRfcmVhbCkgLSBEYXRlLnBhcnNlKGIuY3JlYXRlZF9hdF9yZWFsKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgaW4gdGlja2V0RmVlZCkge1xuXHRcdFx0XHRcdFx0bGV0IHBvc3QgPSB0aWNrZXRGZWVkW2ldO1xuXG5cdFx0XHRcdFx0XHRpZiAocG9zdCBpbnN0YW5jZW9mIENvbW1lbnQpIHsgLy8gQ29tbWVudFxuXHRcdFx0XHRcdFx0XHRpZiAocG9zdC5pZCAhPT0gdGlja2V0Ll9zb2x1dGlvbikgeyAvLyB0aGlzIGNvbW1lbnQgaXMgbm90IGEgc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHQkdGlja2V0RmVlZC5hcHBlbmQodGhpcy5nZXRDb21tZW50KHBvc3QsIG1lKSkuZmluZCgnLm1lZGlhLXNpZGUgaScpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCR0aWNrZXRGZWVkLnByZXBlbmQodGhpcy5nZXRDb21tZW50KHBvc3QsIG1lLCB0cnVlKSkuZmluZCgnLm1lZGlhLXNpZGUgaScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBUaWNrZXQgU3RhdHVzIENoYW5nZSAoVGlja2V0U3RhdHVzL1N0YXR1c0hpc3RvcnkpXG5cdFx0XHRcdFx0XHRcdGxldCBzdGF0dXMgPSBwb3N0LnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRzdGFmZiAgPSBwb3N0LnN0YWZmO1xuXG5cdFx0XHRcdFx0XHRcdCR0aWNrZXRGZWVkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQnPGxpIGNsYXNzPVwidGlja2V0LWV2ZW50XCI+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS10aWNrZXRcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnIFN0YXR1cyBDaGFuZ2VkIGJ5ICcgKyBzdGFmZi5uYW1lICsgJzogJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJ0aWNrZXQtZXZlbnQtZGV0YWlsc1wiPicgKyAoc3RhdHVzLm5hbWUuc3BsaXQoJyAnKVswXSkgKyAnPC9zcGFuPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwidGlja2V0LWV2ZW50LWRhdGVcIj4nICsgcG9zdC5jcmVhdGVkX2F0ICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHRcdFx0XHQnPC9saT4nXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRmFkZSBvdXQgbG9hZGluZyB0ZXh0LCBpbnNlcnQgdGlja2V0RmVlZFxuXHRcdFx0XHRcdCR0aWNrZXRDb21tZW50cy5mYWRlT3V0KDI1MCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmh0bWwoJHRpY2tldEZlZWQudW53cmFwKCkpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5zaG93KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZm9yIGEgY29tbWVudCwgd2hpY2ggbWF5IGxvb2sgZGlmZmVyZW50XG5cdCAqIGlmIGl0J3MgYSBzb2x1dGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtDb21tZW50fSBjb21tZW50XG5cdCAqIEBwYXJhbSB7RW1wbG95ZWV9IG1lIGluc3RhbmNlIG9mIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICogQHJldHVybiB7U3RyaW5nfSB0aGUgY29tbWVudFxuXHQgKi9cblx0Z2V0Q29tbWVudChwb3N0LCBtZSwgaXNTb2x1dGlvbiA9IGZhbHNlKSB7XG5cdFx0bGV0IGF1dGhvciAgPSBwb3N0LmF1dGhvcixcblx0XHRcdGNvbW1lbnQgPSBcblx0XHRcdCc8bGkgY2xhc3M9XCJtZWRpYSAnICsgKGlzU29sdXRpb24gPyAnc29sdXRpb24nIDogJycpICsgJ1wiIGRhdGEtY29tbWVudC1pZD1cIicgKyBwb3N0LmlkICsgJ1wiPicgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1lZGlhLXNpZGVcIj4nICtcblx0XHRcdFx0XHQnPGEgaHJlZj1cIicgKyAoYXV0aG9yLmlkID09PSBtZS5pZCA/ICcvc2V0dGluZ3MnIDogJy9zdGFmZiMnICsgYXV0aG9yLmlkKSArICdcIj4nICtcblx0XHRcdFx0XHRcdCc8aW1nIHNyYz1cImh0dHBzOi8vcGxhY2Vob2xkLml0LzI3NXgyNzVcIiBhbHQ9XCInICsgYXV0aG9yLm5hbWUgKyAnXFwncyBQcm9maWxlIFBpY3R1cmVcIj4nICtcblx0XHRcdFx0XHQnPC9hPicgK1xuXHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPicgK1xuXHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPicgK1xuXHRcdFx0XHRcdCc8aDUgY2xhc3M9XCJtdC0wIG1iLTFcIj4nICtcblx0XHRcdFx0XHRcdCc8YSBocmVmPVwiL3N0YWZmIycgKyBhdXRob3IuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdGF1dGhvci5uYW1lICtcblx0XHRcdFx0XHRcdCc8L2E+JyArXG5cdFx0XHRcdFx0XHQoaXNTb2x1dGlvbiA/ICcgPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLXJlc29sdmVkXCI+U29sdXRpb248L3NwYW4+JyA6ICcnKSArXG5cdFx0XHRcdFx0XHQocG9zdC5fY2FsbCAhPT0gbnVsbCA/ICcgPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLW5ldyBub3RlLWFib3V0LWNhbGxcIiBkYXRhLWNhbGwtaWQ9XCInICsgcG9zdC5fY2FsbCArICdcIj5Ob3RlIGFib3V0IGEgY2FsbDwvc3Bhbj4nIDogJycpICtcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInRpY2tldC1jb21tZW50LWRhdGVcIj4nICsgcG9zdC5jcmVhdGVkX2F0ICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHQnPC9oNT4nICtcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImJyZWFrZXJcIj48L2Rpdj4nICtcblx0XHRcdFx0XHRwb3N0LmNvbnRlbnQgK1xuXHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHQnPC9saT4nO1xuXG5cdFx0cmV0dXJuIGNvbW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogV2hlbiBjbGlja2luZyBvbiBhIFRpY2tldCBlbnRyeSBpbiBDYWxsIERldGFpbHMsXG5cdCAqIEhpZGUgdGhlIG1vZGFsIGFuZCBzaG93IHRoYXQgdGlja2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHRpY2tldElkIHJlcHJlc2VudGluZyBUaWNrZXQuaWRcblx0ICovXG5cdHNob3dDYWxsVGlja2V0KHRpY2tldElkKSB7XG5cdFx0JCgnI3ZpZXctY2FsbC1oaXN0b3J5LW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcblxuXHRcdHZhciB0aWNrZXQgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0VGlja2V0KHRpY2tldElkKTtcblxuXHRcdHRoaXMucmVmcmVzaFBhZ2UodGlja2V0LnN0YXR1cy5zbHVnLCB0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogUG9wdWxhdGUgdGhlIFZpZXcgQ2FsbCBtb2RhbCBieSBsb2FkaW5nIGluXG5cdCAqIHRoZSBjYWxsIGRldGFpbHMgYW5kIGl0cyB0aWNrZXRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGNhbGxJZCByZXByZXNlbnRpbmcgQ2FsbC5pZFxuXHQgKi9cblx0c2hvd0NhbGxUaWNrZXRzTW9kYWwoY2FsbElkKSB7XG5cdFx0dmFyIGNhbGwgICAgICAgICAgICAgPSB0aGlzLnRpY2tldE1hbmFnZXIuZ2V0Q2FsbChjYWxsSWQpLFxuXHRcdFx0JGNhbGxIaXN0b3J5ICAgICA9ICQoJyN2aWV3LWNhbGwtaGlzdG9yeS1tb2RhbCcpLFxuXHRcdFx0JGNhbGxUaWNrZXRUYWJsZSA9ICRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC10aWNrZXRzLXRhYmxlIHRib2R5Jyk7XG5cblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtaWQnKS50ZXh0KGNhbGwuaWQpO1xuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1jYWxsZXInKS50ZXh0KGNhbGwuY2FsbGVyLm5hbWUpO1xuXHRcdCRjYWxsSGlzdG9yeS5maW5kKCcjY2FsbC1vcGVyYXRvcicpLnRleHQoY2FsbC5vcGVyYXRvci5uYW1lKTtcblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtZGF0ZScpLnRleHQoY2FsbC50aW1lKTtcblxuXHRcdC8vIFNob3cgbW9kYWwgd2l0aCBjYWxsIGRhdGFcblx0XHQkY2FsbFRpY2tldFRhYmxlLmVtcHR5KCk7XG5cdFx0JGNhbGxIaXN0b3J5Lm1vZGFsKCdzaG93Jyk7XG5cblx0XHQvLyBMb2FkIHRpY2tldHMgcmVsYXRlZCB0byBjYWxsXG5cdFx0Y2FsbC50aWNrZXRzLmZvckVhY2goYXN5bmMgdGlja2V0ID0+IHtcblx0XHRcdC8vIEFkZCBlYWNoIHJlbGF0ZWQgdGlja2V0IHRvIGNhbGwgbW9kYWxcblx0XHRcdCRjYWxsVGlja2V0VGFibGUuYXBwZW5kKFxuXHRcdFx0XHQnPHRyIGRhdGEtcm93aWQ9XCInICsgdGlja2V0LmlkICsgJ1wiICcgKyAodGlja2V0LmlkID09PSB0aGlzLmN1cnJlbnRUaWNrZXQuaWQgPyAnY2xhc3M9XCJoaWdobGlnaHRcIicgOiAnJykgKyAnPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIHRpY2tldC5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIHRpY2tldC50aXRsZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJmaWx0ZXIgZmlsdGVyLScgKyB0aWNrZXQuc3RhdHVzLnNsdWcuc3BsaXQoJ18nKVswXSArICdcIj4nICsgdGlja2V0LnN0YXR1cy5uYW1lICsgJzwvc3Bhbj4nICtcblx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgKyB0aWNrZXQuY3JlYXRlZF9hdCArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0JzwvdGQ+JyArXG5cdFx0XHRcdCc8L3RyPidcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI25vLWNhbGwtbm90ZXMnKS5oaWRlKCk7XG5cdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLW5vdGVzJykuaGlkZSgpO1xuXG5cdFx0bGV0IGNhbGxDb21tZW50ID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldENhbGxOb3Rlc0J5Q2FsbElkKGNhbGwuaWQpO1xuXG5cdFx0aWYgKGNhbGxDb21tZW50ICE9PSBudWxsKSB7XG5cdFx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI2NhbGwtbm90ZXMnKS50ZXh0KGNhbGxDb21tZW50LmNvbnRlbnQpO1xuXHRcdFx0JGNhbGxIaXN0b3J5LmZpbmQoJyNjYWxsLW5vdGVzJykuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY2FsbEhpc3RvcnkuZmluZCgnI25vLWNhbGwtbm90ZXMnKS5zaG93KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZSB0aGUgYWN0aXZlIHN0YXR1cyBpbiB0aGUgc2lkZSBuYXYgYmFyLlxuXHQgKiBSZWxvYWQgdGhlIHRpY2tldHMgd2l0aCB0aGUgbmV3IHN0YXR1cywgYW5kIHNob3cgdGhlXG5cdCAqIHRpY2tldCB2aWV3IGFnYWluLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzU2x1ZyByZXByZXNlbnRpbmcgU3RhdHVzLnNsdWdcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSB0aWNrZXRJZCAobnVsbGFibGUpIHJlcHJlc2VudGluZyBUaWNrZXQuaWRcblx0ICovXG5cdGFzeW5jIHJlZnJlc2hQYWdlKHN0YXR1c1NsdWcsIHRpY2tldElkID0gbnVsbCkge1xuXHRcdCQoJy5zaWRlLW5hdi1iYXItbmVzdGVkIHVsIGxpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCcuc2lkZS1uYXYtYmFyLW5lc3RlZCB1bCBsaVtkYXRhLXNsdWc9XCInICsgc3RhdHVzU2x1ZyArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHR0aGlzLnNob3dGaWx0ZXJlZFRpY2tldHMoc3RhdHVzU2x1Zyk7XG5cdFx0dGhpcy5zaG93VGlja2V0Vmlldyh0aWNrZXRJZCk7XG5cdH1cblxuXHQvKipcblx0ICogRmlsbCBhbiBlbXBsb3llZXMgZGV0YWlscyBpbnRvIGEgU3RhZmYgSW5mb3JtYXRpb25cblx0ICogRE9NIGVsZW1lbnQuIExvYWQgaW4gcmVsZXZhbnQgZW1wbG95ZWUgcGVybWlzc2lvbnMgdG9vLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0RPTSBFbGVtZW50fSAkc3RhZmZJbmZvcm1hdGlvblxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGVtcGxveWVlSWQgcmVwcmVzZW50aW5nIEVtcGxveWVlLmlkIChlbXBsb3llZSB1c2VkIGZvciB2aWV3aW5nKVxuXHQgKi9cblx0YXN5bmMgc2hvd1N0YWZmSW5mb3JtYXRpb24oJHN0YWZmSW5mb3JtYXRpb24sIGVtcGxveWVlSWQpIHtcblx0XHRsZXQgZW1wbG95ZWUgID0gdGhpcy5zdGFmZk1hbmFnZXIuZ2V0KGVtcGxveWVlSWQpO1xuXG5cdFx0JHN0YWZmSW5mb3JtYXRpb24uaHRtbChcblx0XHRcdCc8cD5JRCBOdW1iZXI6IDxzdHJvbmc+JyArIGVtcGxveWVlLmlkICsgJzwvc3Ryb25nPjwvcD4nICtcblx0XHRcdCc8cD5OYW1lOiA8c3Ryb25nPicgKyBlbXBsb3llZS5uYW1lICsgJzwvc3Ryb25nPjwvcD4nICtcblx0XHRcdCc8cD5Kb2I6IDxzdHJvbmc+JyArIGVtcGxveWVlLmpvYiArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+RGVwYXJ0bWVudDogPHN0cm9uZz4nICsgZW1wbG95ZWUuZGVwYXJ0bWVudCArICc8L3N0cm9uZz48L3A+JyArXG5cdFx0XHQnPHA+UGhvbmU6IDxzdHJvbmc+JyArIGVtcGxveWVlLnBob25lICsgJzwvc3Ryb25nPjwvcD4nICtcblx0XHRcdCc8cD48c3Ryb25nPjwvc3Ryb25nPjwvcD4nXG5cdFx0KTtcblxuXHRcdFN0YWZmUGFnZS5zaG93UGVybWlzc2lvbnMoJHN0YWZmSW5mb3JtYXRpb24uZmluZCgncDpsYXN0LWNoaWxkIHN0cm9uZycpLmdldCgwKSwgZW1wbG95ZWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSBpZiBhIFRpY2tldCBpcyBhc3NpZ25lZCB0bzpcblx0ICogICAgIC0gKHNlbGYpICAgICAgIFRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcblx0ICogICAgIC0gKG9wZXJhdG9yKSAgIEFub3RoZXIgaGVscGRlc2sgb3BlcmF0b3Jcblx0ICogICAgIC0gKHNwZWNpYWxpc3QpIFNwZWNpYWxpc3Qgb2YgRXhwZXJ0aXNlVHlwZSAoZm91bmQgdGhyb3VnaCBFeHBlcnRpc2VUeXBlU3RhZmYgb24gVGlja2V0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge1RpY2tldH0gdGlja2V0IFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0aWNrZXQncyBhc3NpZ25lZCB0byB0eXBlXG5cdCAqL1xuXHRnZXRBc3NpZ25lZFRvVHlwZSh0aWNrZXQpIHtcblx0XHRpZiAodGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldEFzc2lnbmVkVG8odGlja2V0KS5pZCA9PT0gdGhpcy5zdGFmZk1hbmFnZXIuY3VycmVudFVzZXIoKSkgeyAvLyBpZiB0aWNrZXQuX2Fzc2lnbmVkX3RvX29wZXJhdG9yID09PSBzZWxmXG5cdFx0XHRyZXR1cm4gJ3NlbGYnO1xuXHRcdH0gZWxzZSBpZiAodGlja2V0Ll9hc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCkgeyAvLyBJZiBhc3NpZ25lZF90b19vcGVyYXRvciAhPT0gbnVsbCwgdXNlIHRoYXQgaW5zdGVhZCBvZiBzcGVjaWFsaXN0XG5cdFx0XHRyZXR1cm4gJ29wZXJhdG9yJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3NwZWNpYWxpc3QnO1xuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB0aGUgYmVzdCBzcGVjaWFsaXN0IGZvciB0aGUgRXhwZXJ0aXNlVHlwZSBiYXNlZCBvblxuXHQgKiBob3cgYnVzeSB0aGV5IGFyZSBjb21wYXJlZCB0byBvdGhlciBzcGVjaWFsaXN0cy5cblx0ICpcblx0ICogVXBkYXRlZCB3aGVuIGEgdXNlciBjbGlja3MgdGhyb3VnaCBwcm9ibGVtIHR5cGVzLFxuXHQgKiB1cGRhdGVzIGluIHRoZSByZWxldmFudCBzaG93Y2FzZSBmaWVsZHNcblx0ICpcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBleHBlcnRpc2VUeXBlSWQgRXhwZXJ0aXNlVHlwZS5pZCBcblx0ICogQHBhcmFtIHtET00gRWxlbWVudH0gJGFzc2lnbmVkVG9PcHRpb25zIFwiQXNzaWduIHRvIHhcIiByYWRpbyBmaWVsZHMgaW4gYWNjb3JkaW9uIGNhcmRzXG5cdCAqIEBwYXJhbSB7RW1wbG95ZWV9IGJlc3RTcGVjaWFsaXN0IChudWxsYWJsZSkgTWFudWFsbHkgYXNzaWduIGVtcGxveWVlIGlmIHRoZXkgaGF2ZSB0aGF0IHNwZWNpYWxpc21cblx0ICogQHJldHVybiB7RXhwZXJ0aXNlVHlwZVN0YWZmfSBFeHBlcnRpc2VUeXBlU3RhZmYgcmVjb3JkLCBjb250YWluaW5nIGxpbmsgdG8gRXhwZXJ0aXNlVHlwZSBhbmQgU3RhZmYgdGFibGVzXG5cdCAqL1xuXHRzZXRTcGVjaWFsaXN0KGV4cGVydGlzZVR5cGVJZCwgJGFzc2lnbmVkVG9PcHRpb25zLCBiZXN0U3BlY2lhbGlzdCA9IG51bGwpIHtcblx0XHRpZiAoYmVzdFNwZWNpYWxpc3QgPT09IG51bGwgfHwgIXRoaXMuc3RhZmZNYW5hZ2VyLmhhc1NwZWNpYWxpc20oYmVzdFNwZWNpYWxpc3QsIGV4cGVydGlzZVR5cGVJZCkpIHtcblx0XHRcdHZhciBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmID0gc3RhZmZQcm9ibGVtVHlwZVBhZ2UuZ2V0QmVzdEV4cGVydGlzZVR5cGVTdGFmZkJ5RXhwZXJ0aXNlVHlwZUlkKGV4cGVydGlzZVR5cGVJZCk7XG5cblx0XHRcdGJlc3RTcGVjaWFsaXN0ID0gYmVzdEV4cGVydGlzZVR5cGVTdGFmZiAhPT0gbnVsbCA/IGJlc3RFeHBlcnRpc2VUeXBlU3RhZmYuc3RhZmYgOiBudWxsOyAvLyBudWxsIGlmIG5vIHNwZWNpYWxpc3RzIGZvdW5kIGluIHBhcmVudHNcblx0XHR9XG5cblx0XHR2YXIgJHNwZWNpYWxpc3RJZCAgICAgICA9ICRhc3NpZ25lZFRvT3B0aW9ucy5maW5kKCdpbnB1dFtuYW1lKj1cInNwZWNpYWxpc3RcIl0nKSxcblx0XHRcdCRzcGVjaWFsaXN0U2hvd2Nhc2UgPSAkYXNzaWduZWRUb09wdGlvbnMuZmluZCgnaW5wdXRbbmFtZSo9XCJzcGVjaWFsaXN0X3Nob3djYXNlXCJdJyk7XG5cblx0XHRpZiAoYmVzdFNwZWNpYWxpc3QgIT09IG51bGwpIHtcblx0XHRcdCRzcGVjaWFsaXN0SWQudmFsKGJlc3RTcGVjaWFsaXN0LmlkKTtcblx0XHRcdCRzcGVjaWFsaXN0U2hvd2Nhc2UudmFsKGJlc3RTcGVjaWFsaXN0Lm5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3BlY2lhbGlzdElkLnZhbCgnJyk7XG5cdFx0XHQkc3BlY2lhbGlzdFNob3djYXNlLnZhbCgnTm8gU3BlY2lhbGlzdCBmb3IgdGhlIFByb2JsZW0gVHlwZScpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZXN0RXhwZXJ0aXNlVHlwZVN0YWZmO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCB0aHJvdWdoIGFsbCB0aWNrZXRzIGJhc2VkIG9uXG5cdCAqICAgICAtIGlkXG5cdCAqICAgICAtIHRpdGxlXG5cdCAqXG5cdCAqIFNob3cgdGhlIHJlc3VsdHMgaW4gdGhlIGxpc3Qtdmlld1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgUXVlcnkgcG90ZW50aWFsbHkgY29udGFpbmVkIGluIGlkL3RpdGxlXG5cdCAqL1xuXHRzZWFyY2gocXVlcnkpIHtcblx0XHRpZiAocXVlcnkubGVuZ3RoID49IDIgfHwgKHF1ZXJ5Lmxlbmd0aCA+IDAgJiYgcXVlcnkgPT0gcGFyc2VJbnQocXVlcnkpKSkge1xuXHRcdFx0dmFyIHNlYXJjaEtleXMgPSBbJ2lkJywgJ3RpdGxlJ10sXG5cdFx0XHRcdHRpY2tldHMgICAgPSB0aGlzLnRpY2tldE1hbmFnZXIuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hLZXlzKTtcblxuXHRcdFx0c3VwZXIuc2VhcmNoKHF1ZXJ5LCB0aWNrZXRzLCBhc3luYyBmdW5jdGlvbih0aWNrZXQpIHtcblx0XHRcdFx0bGV0IHRpY2tldFN0YXR1cyA9IHRpY2tldC5zdGF0dXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkOiB0aWNrZXQuaWQsXG5cdFx0XHRcdFx0dGl0bGU6IHRpY2tldC50aXRsZSxcblx0XHRcdFx0XHRzdGF0dXNfbmFtZTogJzxzcGFuIGNsYXNzPVwiZmlsdGVyIGZpbHRlci0nICsgdGlja2V0U3RhdHVzLnNsdWcuc3BsaXQoJ18nKVswXSArICdcIj4nICsgdGlja2V0U3RhdHVzLm5hbWUgKyAnPC9zcGFuPicsXG5cdFx0XHRcdFx0Y3JlYXRlZF9hdDogdGlja2V0LmNyZWF0ZWRfYXQsXG5cdFx0XHRcdFx0dXBkYXRlZF9hdDogdGlja2V0LnVwZGF0ZWRfYXRcblx0XHRcdFx0fTsgLy8gdGhlIGZvcm1hdCByZXN1bHRzIG5lZWQgdG8gYmUgaW4gZm9yIHRoZSB0aGUgcmVzdWx0cyB0YWJsZVxuXHRcdFx0fSwgc2VhcmNoS2V5cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd0ZpbHRlcmVkVGlja2V0cygkKCcuc2lkZS1uYXYtYmFyLW5lc3RlZCBsaS5hY3RpdmUnKS5kYXRhKCdzbHVnJykpO1xuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy90aWNrZXRzL1RpY2tldFBhZ2UuanMiLCJpbXBvcnQgRHluYW1pY1BhZ2UgZnJvbSBcIi4uL0R5bmFtaWNQYWdlXCI7XG5pbXBvcnQgRXhwZXJ0aXNlVHlwZU1hbmFnZXIgZnJvbSBcIi4vRXhwZXJ0aXNlVHlwZU1hbmFnZXJcIjtcbmltcG9ydCBTdGFmZk1hbmFnZXIgZnJvbSBcIi4uL3N0YWZmL1N0YWZmTWFuYWdlclwiO1xuaW1wb3J0IFRpY2tldE1hbmFnZXIgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0TWFuYWdlclwiO1xuXG4vKipcbiAqIEV4cGVydGlzZVR5cGVQYWdlXG4gKlxuICogTWFuaXB1bGF0ZXMgdGhlIHByb2JsZW1zIHBhZ2Ugd2l0aCBqUXVlcnkgdXNpbmcgZGF0YSBmcm9tXG4gKiB0aGUgRXhwZXJ0aXNlVHlwZU1hbmFnZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydGlzZVR5cGVQYWdlIGV4dGVuZHMgRHluYW1pY1BhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihpc1BhZ2UgPSBmYWxzZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBNYW5hZ2Vyc1xuXHRcdHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIgPSBuZXcgRXhwZXJ0aXNlVHlwZU1hbmFnZXIoKTtcblx0XHR0aGlzLnN0YWZmTWFuYWdlciAgICAgICAgID0gbmV3IFN0YWZmTWFuYWdlcigpO1xuXHRcdHRoaXMudGlja2V0TWFuYWdlciAgICAgICAgPSBuZXcgVGlja2V0TWFuYWdlcigpO1xuXG5cdFx0Ly8gVHJ1ZTogaHR0cDovL3gvcHJvYmxlbS10eXBlLCBGYWxzZTogUHJvYmxlbSBwaWNrZXIgYXBwZWFycyBpbiBhIG1vZGFsIGV0Yy5cblx0XHR0aGlzLmlzUGFnZSA9IGlzUGFnZTtcblx0fVxuXG5cdGxvYWRTdWJFeHBlcnRpc2VUeXBlcygkdHlwZUNvbHVtbnMsICRsaSA9IG51bGwsIGV4cGVydGlzZVR5cGVJZCA9IG51bGwpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZSA9IG51bGw7XG5cblx0XHRpZiAoJGxpKSB7IC8vIGxpIG9mIGN1cnJlbnQgRXhwZXJ0aXNlVHlwZVxuXHRcdFx0ZXhwZXJ0aXNlVHlwZSA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpO1xuXHRcdFx0dGhpcy5sb2FkRXhwZXJ0aXNlVHlwZUluZm8oZXhwZXJ0aXNlVHlwZSk7XG5cblx0XHRcdCRsaS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmZpbmQoJ3NwYW4uc3VidGxlJykudGV4dCh0aGlzLmdldEV4cGVydGlzZVR5cGVCcmVhZGNydW0oZXhwZXJ0aXNlVHlwZSkpO1xuXG5cdFx0XHQkbGkucGFyZW50KCkubmV4dEFsbCgpLnJlbW92ZSgpO1xuXHRcdFx0JGxpLnBhcmVudCgpLmZpbmQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCRsaS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdsaS5sYXN0LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdsYXN0LWFjdGl2ZScpO1xuXHRcdFx0JGxpLmFkZENsYXNzKCdhY3RpdmUgbGFzdC1hY3RpdmUnKTtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRyZW4gICAgPSBbXSxcblx0XHRcdCR0eXBlQ29sdW1uID0gJCgnPGRpdiBjbGFzcz1cInR5cGUtY29sdW1uXCI+PC9kaXY+Jyk7XG5cblx0XHRpZiAoZXhwZXJ0aXNlVHlwZUlkID09PSBudWxsKSB7XG5cdFx0XHRjaGlsZHJlbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0Um9vdEV4cGVydGlzZVR5cGVzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgkbGkpIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVzKGV4cGVydGlzZVR5cGUuX2NoaWxkcmVuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBjaGlsZHJlbklkcyA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZShleHBlcnRpc2VUeXBlSWQpLl9jaGlsZHJlbjtcblx0XHRcdFx0Y2hpbGRyZW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVzKGNoaWxkcmVuSWRzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgc3BlY2lhbGlzdHMgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXRTcGVjaWFsaXN0cyhjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQuaWQpKTtcblxuXHRcdGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHQkdHlwZUNvbHVtbi5hcHBlbmQoXG5cdFx0XHRcdCc8bGkgJyArIChjaGlsZC5fY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2NsYXNzPVwibm8tY2hpbGRyZW5cIicgOiAnJykgKyAnIGRhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCInICsgY2hpbGQuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSArXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJzcGVjaWFsaXN0LWNvdW50ZXJcIj4nICtcblx0XHRcdFx0XHRcdChzcGVjaWFsaXN0c1tpXS5sZW5ndGggPiAwID8gc3BlY2lhbGlzdHNbaV0ubGVuZ3RoICsgJyA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+JyA6ICc8aSBjbGFzcz1cImZhIGZhLXVzZXItdGltZXNcIj48L2k+JykgK1xuXHRcdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvaT4nICtcblx0XHRcdFx0JzwvbGk+J1xuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0aGUgbmV3IC50eXBlLWNvbHVtbiwgc2Nyb2xsIHRvIHRoZSByaWdodCB0byB2aWV3IGl0XG5cdFx0JHR5cGVDb2x1bW5zLmFwcGVuZCgkdHlwZUNvbHVtbik7XG5cdFx0JHR5cGVDb2x1bW5zLnNjcm9sbExlZnQoJHR5cGVDb2x1bW5zLndpZHRoKCkpO1xuXHR9XG5cblx0bG9hZEV4cGVydGlzZVR5cGUoJHR5cGVDb2x1bW5zLCBleHBlcnRpc2VUeXBlSWQpIHtcblx0XHRsZXQgZXhwZXJ0aXNlVHlwZSAgICAgID0gdGhpcy5leHBlcnRpc2VUeXBlTWFuYWdlci5nZXRFeHBlcnRpc2VUeXBlKGV4cGVydGlzZVR5cGVJZCksXG5cdFx0XHRleHBlcnRpc2VUeXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKTtcblxuXHRcdCR0eXBlQ29sdW1ucy5lbXB0eSgpO1xuXG5cdFx0dGhpcy5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJHR5cGVDb2x1bW5zKTtcblxuXHRcdGZvciAobGV0IGkgPSBleHBlcnRpc2VUeXBlQ2hhaW4ubGVuZ3RoIC0gMjsgaSA+PSAtMTsgaS0tKSB7XG5cdFx0XHRwcm9ibGVtVHlwZVBhZ2UubG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlQ29sdW1ucywgJHR5cGVDb2x1bW5zLmZpbmQoJy50eXBlLWNvbHVtbiBsaVtkYXRhLWV4cGVydGlzZS10eXBlLWlkPVwiJyArIGV4cGVydGlzZVR5cGVDaGFpbltpICsgMV0uaWQgKyAnXCJdJyksIGV4cGVydGlzZVR5cGVDaGFpbltpICsgMV0uaWQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiAvcHJvYmxlbS10eXBlcywgcG9wdWxhdGUgdGhlIGluZm9ybWF0aW9uIGluIHRoZSBkZXRhaWxzXG5cdCAqIHBhbmVsIG9uIHRoZSByaWdodCB3aXRoIGRhdGEgZnJvbSBhIGdpdmVuIEV4cGVydGlzZVR5cGVcblx0ICpcblx0ICogQHBhcmFtIHtFeHBlcnRpc2VUeXBlfSBleHBlcnRpc2VUeXBlIFxuXHQgKi9cblx0bG9hZEV4cGVydGlzZVR5cGVJbmZvKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgJHNpbmdsZVZpZXcgXHQgICAgPSAkKHRoaXMuZGV0YWlsU2VsZWN0b3IpLFxuXHRcdFx0JG5hdkJhciAgICAgICAgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJy50b3AtbmF2IGg0JyksXG5cdFx0XHQkc3BsYXNoU2NyZWVuICAgICAgID0gJHNpbmdsZVZpZXcuZmluZCgnLnNwbGFzaC1zY3JlZW4nKSxcblx0XHRcdCRleHBlcnRpc2VUeXBlVmlldyAgPSAkc2luZ2xlVmlldy5maW5kKCcjcHJvYmxlbS10eXBlLXZpZXcnKSxcblx0XHRcdCRleHBlcnRpc2VUeXBlVGFibGUgPSAkc2luZ2xlVmlldy5maW5kKCcjcHJvYmxlbS10eXBlcy10YWJsZSB0Ym9keScpLFxuXHRcdFx0JHNwZWNpYWxpc3RzVGFibGUgICA9ICRzaW5nbGVWaWV3LmZpbmQoJyNzcGVjaWFsaXN0cy10YWJsZSB0Ym9keScpLFxuXHRcdFx0JHRpY2tldHNUYWJsZSAgICAgICA9ICRzaW5nbGVWaWV3LmZpbmQoJyN0aWNrZXRzLXRhYmxlIHRib2R5JyksXG5cdFx0XHQkbm9TcGVjaWFsaXN0c0RhdGEgID0gJHNpbmdsZVZpZXcuZmluZCgnI25vLXNwZWNpYWxpc3RzLWRhdGEnKSxcblx0XHRcdCRub1RpY2tldHNEYXRhICAgICAgPSAkc2luZ2xlVmlldy5maW5kKCcjbm8tdGlja2V0cy1kYXRhJyk7XG5cblx0XHQkc3BsYXNoU2NyZWVuLmFkZENsYXNzKCdibG9jay1oaWRkZW4nKTtcblx0XHQkZXhwZXJ0aXNlVHlwZVZpZXcuYWRkQ2xhc3MoJ2Jsb2NrLWhpZGRlbicpO1xuXG5cdFx0aWYgKHRoaXMuaXNQYWdlKSB7XG5cdFx0XHQkbmF2QmFyLnRleHQodGhpcy5nZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtKGV4cGVydGlzZVR5cGUpKTtcblx0XHR9XG5cblx0XHQkZXhwZXJ0aXNlVHlwZVRhYmxlLmVtcHR5KCk7XG5cdFx0JHNwZWNpYWxpc3RzVGFibGUuZW1wdHkoKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0JHRpY2tldHNUYWJsZS5lbXB0eSgpLnBhcmVudCgpLmhpZGUoKTtcblxuXHRcdGxldCBleHBlcnRpc2VUeXBlQ2hhaW4gPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGVDaGFpbihleHBlcnRpc2VUeXBlKTtcblxuXHRcdC8vIFNob3VsZCBwcm9iYWJseSBtb3ZlIHRoZXNlIHRvIER5bmFtaWNQYWdlXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBleHBlcnRpc2VUeXBlQ2hhaW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBleHBlcnRpc2VUeXBlID0gZXhwZXJ0aXNlVHlwZUNoYWluW2ldO1xuXG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVRhYmxlLnByZXBlbmQoXG5cdFx0XHRcdCc8dHIgJyArIChpID09PSAwID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJyBkYXRhLXJvd2lkPVwiJyArIGV4cGVydGlzZVR5cGUuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0Jzx0ZD4nICsgZXhwZXJ0aXNlVHlwZS5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIGV4cGVydGlzZVR5cGUubmFtZSArICc8L3RkPicgK1xuXHRcdFx0XHRcdCc8dGQ+JyArIChleHBlcnRpc2VUeXBlLl9wYXJlbnQgIT09IG51bGwgPyBleHBlcnRpc2VUeXBlQ2hhaW5baSArIDFdLm5hbWUgOiAnTi9BJykgKyAnPC90ZD4nICtcblx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPicgK1xuXHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHQnPC90cj4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdCRleHBlcnRpc2VUeXBlVmlldy5yZW1vdmVDbGFzcygnYmxvY2staGlkZGVuJyk7XG5cblx0XHRsZXQgc3BlY2lhbGlzdHMgPSB0aGlzLnN0YWZmTWFuYWdlci5nZXRTcGVjaWFsaXN0cyhleHBlcnRpc2VUeXBlLmlkKTtcblxuXHRcdGlmIChzcGVjaWFsaXN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHQkc3BlY2lhbGlzdHNUYWJsZS5wYXJlbnQoKS5zaG93KCk7XG5cdFx0XHQkbm9TcGVjaWFsaXN0c0RhdGEuaGlkZSgpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwZWNpYWxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBzcGVjaWFsaXN0ID0gc3BlY2lhbGlzdHNbaV07XG5cblx0XHRcdFx0JHNwZWNpYWxpc3RzVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdCc8dHIgJyArIChzcGVjaWFsaXN0LmlkID09PSB0aGlzLnN0YWZmTWFuYWdlci5jdXJyZW50VXNlcigpID8gJ2NsYXNzPVwiaGlnaGxpZ2h0XCInIDogJycpICsgJyBkYXRhLXJvd2lkPVwiJyArIHNwZWNpYWxpc3QuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0LmlkICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0Lm5hbWUgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdCc8dGQ+JyArIHNwZWNpYWxpc3Quam9iICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgKyBzcGVjaWFsaXN0LnBob25lICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHQnPC90ZD4nICtcblx0XHRcdFx0XHQnPC90cj4nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzcGVjaWFsaXN0c1RhYmxlLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdCRub1NwZWNpYWxpc3RzRGF0YS5zaG93KCk7XG5cdFx0fVxuXG5cdFx0Ly8gT25seSBnZXQgdGlja2V0cyBpZiB0aGVyZSBpcyBhIHRhYmxlIHRvIHB1dCB0aGUgcmVzdWx0cyBpblxuXHRcdGlmICgkdGlja2V0c1RhYmxlLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0Ly8gR2V0IHRpY2tldHMgdG8gZmlsbCByZWxhdGVkIHRpY2tldHMgdGFibGUgaW4gc2luZ2xlLXZpZXdcblx0XHRcdGxldCB0aWNrZXRzID0gdGhpcy50aWNrZXRNYW5hZ2VyLmdldFRpY2tldHNCeUV4cGVydGlzZVR5cGVJZChleHBlcnRpc2VUeXBlLmlkKTtcblx0XHRcdFxuXHRcdFx0Ly8gT25seSBmaWxsIHRpY2tldHMgdGFibGUgaWYgdGhlcmUgYXJlIGFueSBtYXRjaGluZyB0aWNrZXRzXG5cdFx0XHRpZiAodGlja2V0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCR0aWNrZXRzVGFibGUucGFyZW50KCkuc2hvdygpO1xuXHRcdFx0XHQkbm9UaWNrZXRzRGF0YS5oaWRlKCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aWNrZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIHRpY2tldCA9IHRpY2tldHNbaV07XG5cblx0XHRcdFx0XHQkdGlja2V0c1RhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdCc8dHIgZGF0YS1yb3dpZD1cIicgKyB0aWNrZXQuaWQgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArIHRpY2tldC5pZCArICc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdGlja2V0LnRpdGxlICsgJzwvdGQ+JyArXG5cdFx0XHRcdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiZmlsdGVyXCI+JyArIHRpY2tldC5zdGF0dXMubmFtZSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0XHQnPHRkIGNsYXNzPVwidHJ1bmNhdGVcIj4nICsgdGlja2V0LmNyZWF0ZWRfYXQgKyAnPC90ZD4nICtcblx0XHRcdFx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+JyArXG5cdFx0XHRcdFx0XHRcdCc8L3RkPicgK1xuXHRcdFx0XHRcdFx0JzwvdHI+J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE90aGVyd2lzZSBzaG93IGEgbWVzc2FnZSBpbnN0ZWFkIG9mIHRoZSB0YWJsZVxuXHRcdFx0XHQkdGlja2V0c1RhYmxlLnBhcmVudCgpLmhpZGUoKTtcblx0XHRcdFx0JG5vVGlja2V0c0RhdGEuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSBuYW1lcyBvZiBhbiBFeHBlcnRpc2VUeXBlLCBhbmQgaXRzIHBhcmVudHMsXG5cdCAqIGluIG9yZGVyZWQgZmFzaGlvbi5cblx0ICpcblx0ICogZS5nLiBcIkVsZWN0cm9uaWNzIC8gUHJpbnRlciAvIFByaW50ZXIgSW5rIC8gQ3lhbiBJbmtcIlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V4cGVydGlzZVR5cGV9IFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEJyZWFkY3J1bSBvZiBFeHBlcnRpc2VUeXBlLm5hbWUncywgZnJvbSB0aGUgcm9vdCB0byBhIEV4cGVydGlzZVR5cGUgXG5cdCAqL1xuXHRnZXRFeHBlcnRpc2VUeXBlQnJlYWRjcnVtKGV4cGVydGlzZVR5cGUpIHtcblx0XHR2YXIgZXhwZXJ0aXNlVHlwZVBhcmVudCA9IGV4cGVydGlzZVR5cGUsXG5cdFx0XHRicmVhZGNydW0gICAgICAgICAgID0gJyc7XG5cblx0XHR3aGlsZSAoZXhwZXJ0aXNlVHlwZVBhcmVudCAhPSBudWxsKSB7XG5cdFx0XHRicmVhZGNydW0gPSBleHBlcnRpc2VUeXBlUGFyZW50Lm5hbWUgKyBicmVhZGNydW07XG5cblx0XHRcdGV4cGVydGlzZVR5cGVQYXJlbnQgPSBleHBlcnRpc2VUeXBlUGFyZW50LnBhcmVudDtcblxuXHRcdFx0aWYgKGV4cGVydGlzZVR5cGVQYXJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRicmVhZGNydW0gPSAnIC8gJyArIGJyZWFkY3J1bTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYnJlYWRjcnVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXkgRXhwZXJ0aXNlVHlwZSdzIGFzIGEgdGFibGUgaWYgdGhlaXIgbmFtZVxuXHQgKiBjb250YWlucyB0aGUgcXVlcnkgc3RyaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVG8gY2hlY2sgaWYgaW4gRXhwZXJ0aXNlVHlwZS5uYW1lXG5cdCAqL1xuXHRzZWFyY2gocXVlcnkpIHtcblx0XHR2YXIgJGV4cGVydGlzZVR5cGVQaWNrZXIgPSAkKCcucHJvYmxlbS10eXBlLXBpY2tlcicpLFxuXHRcdFx0JHRhYmxlU2VjdGlvbiAgICAgICAgPSAkKHRoaXMudGFibGVTZWxlY3Rvcik7XG5cblx0XHQvLyBJZiBzZWFyY2ggdmFsdWUgaGFzbid0IGNoYW5nZWQsIGlnbm9yZVxuXHRcdGxldCBwcmV2UXVlcnkgPSAkKFwiLm1haW4tY29udGVudC10aXRsZVwiKS52YWwoKTtcblxuXHRcdGlmIChxdWVyeS5sZW5ndGggPiAwICYmXG5cdFx0XHRcdHF1ZXJ5ID09PSBwcmV2UXVlcnkuc3Vic3RyaW5nKHByZXZRdWVyeS5sYXN0SW5kZXhPZihcIuKAmFwiKSsxLHByZXZRdWVyeS5sYXN0SW5kZXhPZihcIuKAmVwiKSkpXG5cdFx0XHRyZXR1cm47XG5cblx0XHQkKHRoaXMuc2VjdGlvblNlbGVjdG9yKS5maW5kKCcuc3BsYXNoLXNjcmVlbicpLmFkZENsYXNzKCdibG9jay1oaWRkZW4nKTtcblxuXHRcdGlmIChxdWVyeS5sZW5ndGggPj0gMiB8fCAocXVlcnkubGVuZ3RoID4gMCAmJiBxdWVyeSA9PSBwYXJzZUludChxdWVyeSkpKSB7XG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVBpY2tlci5oaWRlKCk7XG5cdFx0XHQkdGFibGVTZWN0aW9uLnNob3coKTtcblxuXHRcdFx0dmFyIHNlYXJjaEtleXMgICAgID0gWyduYW1lJ10sIC8vIG9ubHkgc2VhcmNoIG9uIHRoaXMgcHJvcGVydHlcblx0XHRcdFx0ZXhwZXJ0aXNlVHlwZXMgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLnNlYXJjaChxdWVyeSwgc2VhcmNoS2V5cyk7XG5cblx0XHRcdHN1cGVyLnNlYXJjaChxdWVyeSwgZXhwZXJ0aXNlVHlwZXMsIGFzeW5jIGZ1bmN0aW9uKGV4cGVydGlzZVR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZDogZXhwZXJ0aXNlVHlwZS5pZCxcblx0XHRcdFx0XHRuYW1lOiBleHBlcnRpc2VUeXBlLm5hbWUsXG5cdFx0XHRcdFx0cGFyZW50OiAoZXhwZXJ0aXNlVHlwZS5fcGFyZW50ICE9IG51bGwgPyBleHBlcnRpc2VUeXBlLnBhcmVudC5uYW1lIDogJ24vYScpXG5cdFx0XHRcdH07IC8vIGZvcm1hdCBvZiByZXN1bHRzIHRhYmxlXG5cdFx0XHR9LCBzZWFyY2hLZXlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSGlkZSB0YWJsZSwgcmVzdG9yZSBiYWNrIHRvIG5vcm1hbFxuXHRcdFx0JCh0aGlzLnNlY3Rpb25TZWxlY3RvcikuZmluZCgnLnRvcC1uYXYgaDQnKS50ZXh0KCdQcm9ibGVtIFR5cGVzJyk7XG5cdFx0XHQkZXhwZXJ0aXNlVHlwZVBpY2tlci5zaG93KCk7XG5cdFx0XHQkdGFibGVTZWN0aW9uLmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBhbmQgaGlnaGxpZ2h0IGEgRXhwZXJ0aXNlVHlwZSBieSBJRFxuXHQgKlxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IGlkIHJlcHJlc2VudGluZyBFeHBlcnRpc2VUeXBlLmlkXG5cdCAqL1xuXHRnb3RvKGlkKSB7XG5cdFx0Ly8gU2hvdyBkZXRhaWxzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLmV4cGVydGlzZVR5cGVNYW5hZ2VyLmdldEV4cGVydGlzZVR5cGUoaWQpO1xuXG5cdFx0Ly8gU2ltdWx0YW5lb3VzbHkgKGFzeW5jaHJvbm91c2x5KeKAplxuXHRcdC8vIC0gbG9hZCB0aGUgaW5kaXZpZHVhbCBleHBlcnRpc2UgdHlwZSBkZXRhaWxzXG5cdFx0dGhpcy5sb2FkRXhwZXJ0aXNlVHlwZUluZm8odHlwZSk7XG5cblx0XHQvLyAtIGxvYWQgdGhlIGhpZXJhcmNoeSBmb3IgdGhlIGV4cGVydGlzZSB0eXBlXG5cdFx0bGV0IHR5cGVDaGFpbiA9IHRoaXMuZXhwZXJ0aXNlVHlwZU1hbmFnZXIuZ2V0RXhwZXJ0aXNlVHlwZUNoYWluKHR5cGUpO1xuXG5cdFx0d2hpbGUgKHR5cGVDaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgdHlwZSAgPSB0eXBlQ2hhaW4ucG9wKCksXG5cdFx0XHRcdCR0eXBlID0gJChgW2RhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XCIke3R5cGUuaWR9XCJdYCkuYWRkQ2xhc3MoXCJhY3RpdmUgbGFzdC1hY3RpdmVcIik7XG5cblx0XHRcdHRoaXMubG9hZFN1YkV4cGVydGlzZVR5cGVzKCR0eXBlLnBhcmVudHMoXCIudHlwZS1jb2x1bW5zXCIpLCBudWxsLCB0eXBlLmlkKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL1Byb2JsZW1UeXBlUGFnZS5qcyIsIi8qKlxuICogUHJvYmxlbSB0eXBlcyBwYWdlIEpTIGZvciBsb2FkaW5nIGFuZCBtYW5hZ2luZyB0aGVcbiAqIGRpZmZlcmVudCB0eXBlcyBvZiBwcm9ibGVtcyBhIHRpY2tldCBtYXkgaGF2ZS5cbiAqXG4gKiBUaGlzIHBhZ2UgbmVlZHMgdG8gbG9hZCBlYWNoIHByb2JsZW0gdHlwZSwgYW5kIGhhbmRsZVxuICogbG9hZGluZyBjaGlsZHJlbiBmb3IgZWFjaCB0eXBlIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBvbmUuXG4gKiBUaGUgdXNlciBjYW4gY3JlYXRlIGFuZCBkZWxldGUgcHJvYmxlbSB0eXBlcywgYXMgd2VsbCBhcyBzZWVcbiAqIGhvdyBtYW55IHN0YWZmIGhhdmUgYSBzcGVjaWFsaXNtIGluIGVhY2ggcHJvYmxlbSB0eXBlLiBFYWNoIHR5cGVcbiAqIGFsc28gcHJvdmlkZXMgcXVpY2sgbGlua3MgdG8gdGlja2V0cyB3aGljaCBoYXZlIGJlZW4gY3JlYXRlZFxuICogYWJvdXQgdGhlIHByb2JsZW0gdHlwZSBhbmQgbGlua3MgdG8gdGhlIHN0YWZmIG1lbWJlcnMgd2l0aFxuICogdGhlIHNwZWNpYWxpc20uXG4gKi9cblxuaW1wb3J0IFwiLi4vLi4vbWFpblwiO1xuaW1wb3J0IFRpY2tldFBhZ2UgZnJvbSBcIi4uL3RpY2tldHMvVGlja2V0UGFnZVwiO1xuaW1wb3J0IFByb2JsZW1UeXBlUGFnZSBmcm9tIFwiLi9Qcm9ibGVtVHlwZVBhZ2VcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL0FQSVwiO1xuXG5sZXQgdGlja2V0UGFnZSwgcHJvYmxlbVR5cGVQYWdlLCBhcGk7XG5cbndpbmRvdy5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xuXHRhcGkgPSB3aW5kb3cuYXBpID0gbmV3IEFQSShkYXRhKTtcblxuICAgIHRpY2tldFBhZ2UgPSB3aW5kb3cudGlja2V0UGFnZSA9IG5ldyBUaWNrZXRQYWdlKCk7XG4gICAgcHJvYmxlbVR5cGVQYWdlID0gd2luZG93LnByb2JsZW1UeXBlUGFnZSA9IG5ldyBQcm9ibGVtVHlwZVBhZ2UodHJ1ZSk7XG5cblx0Ly8gSW5pdGlhbGx5LCBsb2FkIGFsbCBleHBlcnRpc2UgdHlwZXMgYXQgdGhlIHJvb3QgKHR5cGVzIHdpdGhvdXQgYSBwYXJlbnQpXG5cdHByb2JsZW1UeXBlUGFnZS5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJCgnLnR5cGUtY29sdW1ucycpKTtcblxuXHQvLyBEZXRlcm1pbmUgaWYgdGhlIHBhZ2Ugc2hvdWxkIGp1bXAgZGlyZWN0bHkgdG8gYSB0eXBlIGJ5IElEIGluIHRoZSBoYXNoXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0cHJvYmxlbVR5cGVQYWdlLmdvdG8oTnVtYmVyKGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSk7XG5cdH1cblxuXHQvLyBPbiBjbGlja2luZyBhIHByb2JsZW0gdHlwZSwgbG9hZCBhbmQgZGlzcGxheSBhbGwgY2hpbGRyZW4gb2YgdGhpcyB0eXBlXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudHlwZS1jb2x1bW4gbGknLCBmdW5jdGlvbigpIHtcblx0XHRsZXQgaWQgPSBOdW1iZXIoJCh0aGlzKS5kYXRhKCdleHBlcnRpc2VUeXBlSWQnKSk7XG5cblx0XHQvLyBTaW11bHRhbmVvdXNseSAoYXN5bmNocm9ub3VzbHkpIHBlcmZvcm0gdGhlIGZvbGxvd2luZyB0YXNrc1xuXHRcdC8vIC0gc2hvdyB0aGUgZGV0YWlscyBhYm91dCB0aGUgc2VsZWN0ZWQgdHlwZSBpbiB0aGUgc2luZ2xlIHZpZXcgb24gdGhlIHJpZ2h0XG5cdFx0cHJvYmxlbVR5cGVQYWdlLnNob3dUYWJsZVJvd0RldGFpbHMoaWQpO1xuXHRcdC8vIC0gc2hvdyB0aGUgY2hpbGRyZW4gb2YgdGhlIHNlbGVjdGVkIHR5cGUgaW4gdGhlIG1haW4gdmlld1xuXHRcdHByb2JsZW1UeXBlUGFnZS5sb2FkU3ViRXhwZXJ0aXNlVHlwZXMoJCgnLnR5cGUtY29sdW1ucycpLCAkKHRoaXMpLCBpZCk7XG5cblx0XHQvLyBTZXQgdGhlIGhhc2ggZnJhZ21lbnQgZm9yIHRoZSB1bmlxdWUgVVJMIGZvciB0aGUgdHlwZSBzZWxlY3RlZFxuXHRcdGxvY2F0aW9uLmhhc2ggPSBpZDtcblx0fSk7XG5cblx0Ly8gUHJvYmxlbSB0eXBlIGluZm8gc2hvd3MgdGFibGUgd2l0aCBwYXJlbnQgdHlwZXNcblx0Ly8gQ2xpY2tpbmcgb24gYSB0eXBlIHRha2VzIHlvdSB0byB0aGUgdHlwZSB5b3UgY2xpY2tlZFxuXHQkKFwiI3Byb2JsZW0tdHlwZXMtdGFibGVcIikub24oJ2NsaWNrJywgJ3Rib2R5IHRyOm5vdCguaGlnaGxpZ2h0KScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoXCIucHJvYmxlbS10eXBlLXBpY2tlclwiKS5maW5kKFwiW2RhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XFxcIlwiICsgdGhpcy5kYXRhc2V0LnJvd2lkICsgXCJcXFwiXVwiKS5jbGljaygpO1xuXHR9KTtcblxuXHQvLyBDbGlja2luZyBvbiBhIHNlYXJjaCByZXN1bHQgdGFrZXMgeW91IHRvIHRoZSBzZWxlY3RlZCB0eXBlIGFuZCBjbGVhcnMgdGhlIHNlYXJjaFxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3RhYmxlLXNlY3Rpb24gdGJvZHkgdHI6bm90KC5oaWdobGlnaHQpJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gR28gdG8gc2VsZWN0ZWQgdHlwZVxuXHRcdHByb2JsZW1UeXBlUGFnZS5nb3RvKHBhcnNlSW50KHRoaXMuZGF0YXNldFtcInJvd2lkXCJdKSk7XG5cdFx0Ly8gUmVzZXQgc2VhcmNoXG5cdFx0JCgnLnNlYXJjaC1maWVsZCBpbnB1dCcpLnZhbCgnJyk7XG5cdFx0cHJvYmxlbVR5cGVQYWdlLnNlYXJjaChcIlwiKTtcblx0fSk7XG5cblx0Ly8gQ3JlYXRpbmcgYSBuZXcgcHJvYmxlbSB0eXBlIHdpdGggdGhlIG5hbWUgZ2l2ZW4gYnkgdGhlIHVzZXJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jcmVhdGUtcHJvYmxlbS10eXBlJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gR2V0IHRoZSBuZXcgbmFtZSBvZiBhIHByb2JsZW0gdHlwZVxuXHRcdGxldCBuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoKTtcblx0XHQvLyBDaGVjayBpZiBhIG5hbWUgaGFzIGJlZW4gZ2l2ZW4sIGRvbid0IGNyZWF0ZSBhIHByb2JsZW0gdHlwZSB3aXRoIG5vIG5hbWVcblx0XHRpZiAoIW5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gR2V0IHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzIGZvciB0aGUgbmV3IHByb2JsZW0gdHlwZSB0byBiZSBhZGRlZCB0b1xuXHRcdGNvbnN0IHBhcmVudElkID0gJCh0aGlzKS5jbG9zZXN0KCcudHlwZS1jb2x1bW4nKS5wcmV2KCkuZmluZCgnLmFjdGl2ZScpLmRhdGEoXCJleHBlcnRpc2VUeXBlSWRcIik7XG5cdFx0Ly8gQ3JlYXRlIHByb2JsZW0gdHlwZVxuXHRcdHByb2JsZW1UeXBlUGFnZS5jcmVhdGVFeHBlcnRpc2VUeXBlKG5hbWUsIHBhcmVudElkKTtcblx0fSk7XG5cblx0JChcIiNwcm9ibGVtLXR5cGUtdmlld1wiKS5vbihcImNsaWNrXCIsIFwiLmJ0bi1kYW5nZXJcIiwgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gR2V0IGluZm8gYWJvdXQgdGhlIHByb2JsZW0gdHlwZSB0byBiZSBkZWxldGVkLCBpbmNsdWRpbmdcblx0XHQvLyBJRCBhbmQgbmFtZSBvZiB0eXBlIGFuZCBJRCBvZiBwYXJlbnQgaWYgYXBwbGljYWJsZVxuXHRcdGxldCAkcm93ID0gJChcIiNwcm9ibGVtLXR5cGVzLXRhYmxlXCIpLmZpbmQoXCIuaGlnaGxpZ2h0XCIpO1xuXHRcdGxldCBbaWQsIG5hbWVdID0gJHJvdy5jaGlsZHJlbihcInRkOm5vdCg6bGFzdC1jaGlsZClcIikubWFwKChfLCBlbCkgPT4gZWwudGV4dENvbnRlbnQpO1xuXHRcdGxldCBwYXJlbnRJZCA9ICRyb3cucHJldigpLmNoaWxkcmVuKFwidGQ6Zmlyc3QtY2hpbGRcIikudGV4dCgpO1xuXG5cdFx0Ly8gQXNrIGZvciBjb25maXJtYXRpb24gaW5jbHVkaW5nIHNwZWNpZmljIG5hbWUgaW4gZXJyb3IgbWVzc2FnZSAodGhlIEhhd2FpaSBmaXhUTSlcblx0XHRpZiAoIWNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtuYW1lfSAoSUQgJHtpZH0pP2ApKSByZXR1cm47XG5cblx0XHQvLyBQZXJmb3JtIEFQSSBjYWxsIHRvIGRlbGV0ZVxuXHRcdHByb2JsZW1UeXBlUGFnZS5kZWxldGUoaWQpXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHQvLyBJZiB0aGUgZGVsZXRlZCB0eXBlIGhhZCBhIHBhcmVudCwgcmVsb2FkIGp1c3QgdGhlIHNpYmxpbmdzIG9mIHRoZSBkZWxldGVkIHR5cGVcblx0XHRcdFx0XHRpZiAocGFyZW50SWQpIHtcblx0XHRcdFx0XHRcdCQoXCIucHJvYmxlbS10eXBlLXBpY2tlclwiKS5maW5kKFwiW2RhdGEtZXhwZXJ0aXNlLXR5cGUtaWQ9XFxcIlwiICsgcGFyZW50SWQgKyBcIlxcXCJdXCIpLmNsaWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgcmVsb2FkIGFsbFxuXHRcdFx0XHRcdFx0d2luZG93LlR1cmJvbGlua3MudmlzaXQoXCIvcHJvYmxlbS10eXBlc1wiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdH0pO1xuXG5cdC8vIFNlYXJjaCBwcm9ibGVtIHR5cGVzXG5cdCQoJy5zZWFyY2gtZmllbGQgaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcblx0XHRwcm9ibGVtVHlwZVBhZ2Uuc2VhcmNoKHRoaXMudmFsdWUpO1xuXHR9KTtcblxuXHQvLyBIYXNoIGZyYWdtZW50IG5hdmlnYXRpb24gZm9yIGxpbmtpbmcgdG8gc3RhZmYgYW5kIHRpY2tldHMgZnJvbSBwcm9ibGVtIHR5cGUgZGV0YWlsXG5cdCQoXCIjc3BlY2lhbGlzdHMtdGFibGVcIikub24oXCJjbGlja1wiLCBcInRyW2RhdGEtcm93aWRdXCIsIGUgPT4ge1xuXHRcdHdpbmRvdy5UdXJib2xpbmtzLnZpc2l0KFwiL3N0YWZmI1wiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpO1xuXHR9KTtcblx0JChcIiN0aWNrZXRzLXRhYmxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0cltkYXRhLXJvd2lkXVwiLCBlID0+IHtcblx0XHR3aW5kb3cuVHVyYm9saW5rcy52aXNpdChcIi90aWNrZXRzI1wiICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93aWQpO1xuXHR9KTtcblxuXHQvLyBLZXlib2FyZCBuYXZpZ2F0aW9uXG5cdC8vIEtleWJvYXJkIHNob3J0Y3V0c1xuXHQkKGRvY3VtZW50KS5rZXl1cChlID0+IHtcblx0XHQvLyBJZ25vcmUgaWYgaW4gaW5wdXRcblx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcblx0XHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRcdGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5jbGljaygpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuXHRcdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgZS50YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElmIG5vIHNlbGVjdGlvbiwgc2VsZWN0IGZpcnN0IGl0ZW0gcmVnYXJkbGVzcyBvZiBrZXlwcmVzc1xuXHRcdGxldCAkbGFzdEFjdGl2ZVR5cGUgPSAkKFwiLnByb2JsZW0tdHlwZS1waWNrZXIgLmxhc3QtYWN0aXZlXCIpO1xuXHRcdGlmICgkbGFzdEFjdGl2ZVR5cGUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKFwiLnByb2JsZW0tdHlwZS1waWNrZXIgW2RhdGEtcHJvYmxlbS10eXBlLWlkPVxcXCIxXFxcIl1cIikuZmlyc3QoKS5jbGljaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgJHJvdztcblx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xuXHRcdFx0Y2FzZSAzODogLy8gdXBcblx0XHRcdGNhc2UgNDA6IC8vIGRvd25cblx0XHRcdFx0Ly8gR2V0IHJvdyB0byBzZWxlY3Rcblx0XHRcdFx0JHJvdyA9ICRsYXN0QWN0aXZlVHlwZS5maXJzdCgpW2Uua2V5Q29kZSA9PT0gMzggPyBcInByZXZcIiA6IFwibmV4dFwiXSgpO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSA0MCAmJiAkcm93LmlzKFwiLmlucHV0LWdyb3VwXCIpKSB7XG5cdFx0XHRcdFx0JHJvdy5jaGlsZHJlbihcImlucHV0XCIpLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHJvdy5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzNzogLy8gbGVmdFxuXHRcdFx0Y2FzZSAzOTogLy8gcmlnaHRcblx0XHRcdFx0Ly8gR2V0IGNvbHVtbiBpZiBleGlzdHMgdG8gbGVmdCBvciByaWdodFxuXHRcdFx0XHRsZXQgJGNvbHVtbiA9ICRsYXN0QWN0aXZlVHlwZS5maXJzdCgpLmNsb3Nlc3QoXCIudHlwZS1jb2x1bW5cIilbZS5rZXlDb2RlID09PSAzNyA/IFwicHJldlwiIDogXCJuZXh0XCJdKCk7XG5cdFx0XHRcdC8vIEdldCByb3cgdG8gYmUgc2VsZWN0ZWRcblx0XHRcdFx0JHJvdyA9ICRjb2x1bW4uZmluZChlLmtleUNvZGUgPT09IDM3ID8gXCIuYWN0aXZlXCIgOiBcImxpXCIpLmZpcnN0KCk7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM5ICYmICRyb3cubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JGNvbHVtbi5maW5kKFwiaW5wdXRcIikuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkcm93LmNsaWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9mcm9udGVuZC9qcy9wYWdlcy9wcm9ibGVtX3R5cGVzL3Byb2JsZW1fdHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9