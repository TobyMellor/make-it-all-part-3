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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(function () {
	$('.accordions').accordion({
		heightStyle: 'content',
		handle: '.accordion-handle'
	});
});

function addTicketForm() {
	var div = document.getElementsByClassName('form-wrapper')[0];
	var clone = div.cloneNode(true);

	// Forms that are added need a close button.
	clone.getElementsByClassName('ticket-nav')[0].innerHTML += '<div class="min-button" onclick="closeForm(this)">X</div>';
	document.getElementsByClassName('ticket-details-section')[0].append(clone);
}

function callerChange(datas, sel) {
	var selValue = sel.options[sel.selectedIndex].value;
	var ind = selValue - 1;
	var staffMember = datas[ind];
	var staffDetails = '<div class="caller-det">' + '<span> ID Number: <b>' + staffMember.id + '</b></span>' + '<span> Name: <b>' + staffMember.name + '</b></span>' + '<span> Email: <b> ' + staffMember.email + '</b></span>' + '<span>Job: <b>' + staffMember.job_title + '</b></span>' + '<span> Phone: <b>' + staffMember.phone_number + '</b></span>' + '</div>';

	document.getElementsByClassName('caller')[0].innerHTML = staffDetails;
}

function openChildren(clicked, parentID) {
	// Open all children with parentID
	var formParent = clicked.parentElement.parentElement;
	var parentElements = formParent.getElementsByClassName('parent-problem');
	var childrenElements = formParent.getElementsByClassName('child-problem');
	var elmsToShow = formParent.getElementsByClassName('p' + parentID);

	if (clicked.classList.contains('parent-problem')) {
		// Reset all parent nodes
		for (var i = 0; i < childrenElements.length; i++) {
			childrenElements[i].style.display = 'none';
			// Remove any active classes. 
		}
	} else if (clicked.classList.contains('child-problem')) {
		// Reset child nodes 
		var clickedParent = clicked.parentNode;
		var number = parseInt(clickedParent.classList.item(1)) + 1;
		// Get number of divs to loop through
		var pp = clickedParent.parentNode.childElementCount - 1;

		for (var k = 0; k < pp; k++) {
			var elm = formParent.getElementsByClassName("problem-children " + number)[0];

			var elmChildren = elm.getElementsByClassName("child-problem");

			for (var l = 0; l < elmChildren.length; l++) {
				elmChildren[l].style.display = 'none'; // Remove any active classes. 
			}
		}
	}

	// Show the children elements we want
	for (var i = 0; i < elmsToShow.length; i++) {
		elmsToShow[i].style.display = 'flex';
	}

	// Remove all active classes   
	for (var i = 0; i < parentElements.length; i++) {
		parentElements[i].classList.remove('ticket-active');
	}

	for (var i = 0; i < childrenElements.length; i++) {
		childrenElements[i].classList.remove('ticket-active');
	}

	// Add active class to clicked element
	clicked.classList.add('ticket-active');

	// Specialist Assignment 
	var hasSpec = clicked.getAttribute('data-has-specialists');

	if (hasSpec == 'true') {
		var radio = document.getElementsByClassName('spec-assign');

		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked) {
				if (radio[i].value == 'assign_spec') {
					// Try to reassign best specialist to the ticket .  
					console.log('Would try and reassign');
				}
			}
		}
	}
}

function minimise(formNav) {
	var formWrapper = formNav.parentElement.parentElement;
	// Parent is form wrapper, minimise/maximise the form in the wrapper
	var ticketForm = formWrapper.getElementsByClassName('ticket-form')[0];

	if (ticketForm.style.display == 'flex' || ticketForm.style.display == '') {
		ticketForm.style.display = 'none';
	} else {
		ticketForm.style.display = 'flex';
	}
}

function closeForm(formNav) {
	var formWrapper = formNav.parentElement.parentElement;
	formWrapper.remove();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2JhY2tlbmQvanMvdGlja2V0LmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImhhbmRsZSIsImFkZFRpY2tldEZvcm0iLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbG9uZSIsImNsb25lTm9kZSIsImlubmVySFRNTCIsImFwcGVuZCIsImNhbGxlckNoYW5nZSIsImRhdGFzIiwic2VsIiwic2VsVmFsdWUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiaW5kIiwic3RhZmZNZW1iZXIiLCJzdGFmZkRldGFpbHMiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImpvYl90aXRsZSIsInBob25lX251bWJlciIsIm9wZW5DaGlsZHJlbiIsImNsaWNrZWQiLCJwYXJlbnRJRCIsImZvcm1QYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50RWxlbWVudHMiLCJjaGlsZHJlbkVsZW1lbnRzIiwiZWxtc1RvU2hvdyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrZWRQYXJlbnQiLCJwYXJlbnROb2RlIiwibnVtYmVyIiwicGFyc2VJbnQiLCJpdGVtIiwicHAiLCJjaGlsZEVsZW1lbnRDb3VudCIsImsiLCJlbG0iLCJlbG1DaGlsZHJlbiIsImwiLCJyZW1vdmUiLCJhZGQiLCJoYXNTcGVjIiwiZ2V0QXR0cmlidXRlIiwicmFkaW8iLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsIm1pbmltaXNlIiwiZm9ybU5hdiIsImZvcm1XcmFwcGVyIiwidGlja2V0Rm9ybSIsImNsb3NlRm9ybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QWQ7O0FBRUEsS0FBSUQsV0FBVyxNQUFmLEVBQXVCO0FBQ3RCLE1BQUlFLFFBQVFsRCxTQUFTQyxzQkFBVCxDQUFnQyxhQUFoQyxDQUFaOztBQUVBLE9BQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSW1CLE1BQU1sQixNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDdEMsT0FBSW1CLE1BQU1uQixDQUFOLEVBQVNvQixPQUFiLEVBQXNCO0FBQ3JCLFFBQUlELE1BQU1uQixDQUFOLEVBQVNuQixLQUFULElBQWtCLGFBQXRCLEVBQXFDO0FBQ3BDO0FBQ0F3QyxhQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQzFCLEtBQUlDLGNBQWNELFFBQVE5QixhQUFSLENBQXNCQSxhQUF4QztBQUNBO0FBQ0EsS0FBSWdDLGFBQWFELFlBQVl2RCxzQkFBWixDQUFtQyxhQUFuQyxFQUFrRCxDQUFsRCxDQUFqQjs7QUFFQSxLQUFJd0QsV0FBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLElBQTRCLE1BQTVCLElBQXNDdUIsV0FBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLElBQTRCLEVBQXRFLEVBQTBFO0FBQ3pFdUIsYUFBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0EsRUFGRCxNQUVPO0FBQ051QixhQUFXeEIsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDQTtBQUNEOztBQUVELFNBQVN3QixTQUFULENBQW1CSCxPQUFuQixFQUE0QjtBQUMzQixLQUFJQyxjQUFjRCxRQUFROUIsYUFBUixDQUFzQkEsYUFBeEM7QUFDQStCLGFBQVlWLE1BQVo7QUFDQSxDIiwiZmlsZSI6Ii93b3JkcHJlc3Mvd3AtY29udGVudC90aGVtZXMvbWFrZS1pdC1hbGwvYmFja2VuZC9qcy90aWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RmODk5Yjc2NzVmZmZjYTViZDciLCJqUXVlcnkoKCkgPT4ge1xuXHQkKCcuYWNjb3JkaW9ucycpLmFjY29yZGlvbih7XG5cdFx0aGVpZ2h0U3R5bGU6ICdjb250ZW50Jyxcblx0XHRoYW5kbGU6ICcuYWNjb3JkaW9uLWhhbmRsZScsXG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFRpY2tldEZvcm0oKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXdyYXBwZXInKVswXTtcblx0dmFyIGNsb25lID0gZGl2LmNsb25lTm9kZSh0cnVlKTtcblxuXHQvLyBGb3JtcyB0aGF0IGFyZSBhZGRlZCBuZWVkIGEgY2xvc2UgYnV0dG9uLlxuXHRjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWNrZXQtbmF2JylbMF0uaW5uZXJIVE1MICs9ICc8ZGl2IGNsYXNzPVwibWluLWJ1dHRvblwiIG9uY2xpY2s9XCJjbG9zZUZvcm0odGhpcylcIj5YPC9kaXY+Jztcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlja2V0LWRldGFpbHMtc2VjdGlvbicpWzBdLmFwcGVuZChjbG9uZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxlckNoYW5nZShkYXRhcywgc2VsKSB7XG5cdHZhciBzZWxWYWx1ZSA9IHNlbC5vcHRpb25zW3NlbC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0dmFyIGluZCA9IHNlbFZhbHVlIC0gMTtcblx0dmFyIHN0YWZmTWVtYmVyID0gZGF0YXNbaW5kXTtcblx0dmFyIHN0YWZmRGV0YWlscyA9IFxuXHRcdCc8ZGl2IGNsYXNzPVwiY2FsbGVyLWRldFwiPicgK1xuXHRcdFx0JzxzcGFuPiBJRCBOdW1iZXI6IDxiPicgKyBzdGFmZk1lbWJlci5pZCArICc8L2I+PC9zcGFuPicgK1xuXHRcdFx0JzxzcGFuPiBOYW1lOiA8Yj4nICsgc3RhZmZNZW1iZXIubmFtZSArICc8L2I+PC9zcGFuPicgKyBcblx0XHRcdCc8c3Bhbj4gRW1haWw6IDxiPiAnICsgc3RhZmZNZW1iZXIuZW1haWwgKyAnPC9iPjwvc3Bhbj4nICtcblx0XHRcdCc8c3Bhbj5Kb2I6IDxiPicgKyBzdGFmZk1lbWJlci5qb2JfdGl0bGUgKyAnPC9iPjwvc3Bhbj4nICtcblx0XHRcdCc8c3Bhbj4gUGhvbmU6IDxiPicgKyBzdGFmZk1lbWJlci5waG9uZV9udW1iZXIgKyAnPC9iPjwvc3Bhbj4nICtcblx0XHQnPC9kaXY+JztcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxsZXInKVswXS5pbm5lckhUTUwgPSBzdGFmZkRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIG9wZW5DaGlsZHJlbihjbGlja2VkLCBwYXJlbnRJRCkge1xuXHQvLyBPcGVuIGFsbCBjaGlsZHJlbiB3aXRoIHBhcmVudElEXG5cdHZhciBmb3JtUGFyZW50ID0gY2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdHZhciBwYXJlbnRFbGVtZW50cyA9IGZvcm1QYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFyZW50LXByb2JsZW0nKTtcblx0dmFyIGNoaWxkcmVuRWxlbWVudHMgPSBmb3JtUGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoaWxkLXByb2JsZW0nKTtcblx0dmFyIGVsbXNUb1Nob3cgPSBmb3JtUGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3AnICsgcGFyZW50SUQpO1xuXHRcblx0aWYgKGNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJlbnQtcHJvYmxlbScpKSB7XG5cdFx0Ly8gUmVzZXQgYWxsIHBhcmVudCBub2Rlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2hpbGRyZW5FbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0Ly8gUmVtb3ZlIGFueSBhY3RpdmUgY2xhc3Nlcy4gXG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1wcm9ibGVtJykpIHtcblx0XHQvLyBSZXNldCBjaGlsZCBub2RlcyBcblx0XHR2YXIgY2xpY2tlZFBhcmVudCA9IGNsaWNrZWQucGFyZW50Tm9kZTtcblx0XHR2YXIgbnVtYmVyID0gcGFyc2VJbnQoY2xpY2tlZFBhcmVudC5jbGFzc0xpc3QuaXRlbSgxKSkgKyAxO1xuXHRcdC8vIEdldCBudW1iZXIgb2YgZGl2cyB0byBsb29wIHRocm91Z2hcblx0XHR2YXIgcHAgPSBjbGlja2VkUGFyZW50LnBhcmVudE5vZGUuY2hpbGRFbGVtZW50Q291bnQgLSAxO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBwcDsgaysrKSB7XG5cdFx0XHR2YXIgZWxtID0gZm9ybVBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvYmxlbS1jaGlsZHJlbiBcIiArIG51bWJlcilbMF07XG5cdFx0ICAgXG5cdFx0XHR2YXIgZWxtQ2hpbGRyZW4gPSBlbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoaWxkLXByb2JsZW1cIik7XG5cblx0XHRcdGZvciAodmFyIGwgPSAwOyBsIDwgZWxtQ2hpbGRyZW4ubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0ZWxtQ2hpbGRyZW5bbF0uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gUmVtb3ZlIGFueSBhY3RpdmUgY2xhc3Nlcy4gXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2hvdyB0aGUgY2hpbGRyZW4gZWxlbWVudHMgd2Ugd2FudFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVsbXNUb1Nob3cubGVuZ3RoOyBpKyspIHtcblx0XHRlbG1zVG9TaG93W2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdH1cblxuXHQvLyBSZW1vdmUgYWxsIGFjdGl2ZSBjbGFzc2VzICAgXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRwYXJlbnRFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCd0aWNrZXQtYWN0aXZlJyk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZHJlbkVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3RpY2tldC1hY3RpdmUnKTtcblx0fVxuXG5cdC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCBlbGVtZW50XG5cdGNsaWNrZWQuY2xhc3NMaXN0LmFkZCgndGlja2V0LWFjdGl2ZScpO1xuXHRcblx0Ly8gU3BlY2lhbGlzdCBBc3NpZ25tZW50IFxuXHR2YXIgaGFzU3BlYyA9IGNsaWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWhhcy1zcGVjaWFsaXN0cycpO1xuXG5cdGlmIChoYXNTcGVjID09ICd0cnVlJykge1xuXHRcdHZhciByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NwZWMtYXNzaWduJyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocmFkaW9baV0uY2hlY2tlZCkge1xuXHRcdFx0XHRpZiAocmFkaW9baV0udmFsdWUgPT0gJ2Fzc2lnbl9zcGVjJykge1xuXHRcdFx0XHRcdC8vIFRyeSB0byByZWFzc2lnbiBiZXN0IHNwZWNpYWxpc3QgdG8gdGhlIHRpY2tldCAuICBcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnV291bGQgdHJ5IGFuZCByZWFzc2lnbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1pbmltaXNlKGZvcm1OYXYpIHtcblx0dmFyIGZvcm1XcmFwcGVyID0gZm9ybU5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdC8vIFBhcmVudCBpcyBmb3JtIHdyYXBwZXIsIG1pbmltaXNlL21heGltaXNlIHRoZSBmb3JtIGluIHRoZSB3cmFwcGVyXG5cdHZhciB0aWNrZXRGb3JtID0gZm9ybVdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlja2V0LWZvcm0nKVswXTtcblxuXHRpZiAodGlja2V0Rm9ybS5zdHlsZS5kaXNwbGF5ID09ICdmbGV4JyB8fCB0aWNrZXRGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJycpIHtcblx0XHR0aWNrZXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH0gZWxzZSB7XG5cdFx0dGlja2V0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybShmb3JtTmF2KSB7XG5cdHZhciBmb3JtV3JhcHBlciA9IGZvcm1OYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRmb3JtV3JhcHBlci5yZW1vdmUoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYmFja2VuZC9qcy90aWNrZXQuanMiXSwic291cmNlUm9vdCI6IiJ9