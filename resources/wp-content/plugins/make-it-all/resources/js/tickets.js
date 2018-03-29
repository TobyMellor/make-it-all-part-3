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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTgxYzMwYzIzZjAxNDk5ZGQyNDAiLCJ3ZWJwYWNrOi8vLy4vYmFja2VuZC9qcy90aWNrZXRzLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImhhbmRsZSIsImFkZFRpY2tldEZvcm0iLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbG9uZSIsImNsb25lTm9kZSIsImlubmVySFRNTCIsImFwcGVuZCIsImNhbGxlckNoYW5nZSIsImRhdGFzIiwic2VsIiwic2VsVmFsdWUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiaW5kIiwic3RhZmZNZW1iZXIiLCJzdGFmZkRldGFpbHMiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImpvYl90aXRsZSIsInBob25lX251bWJlciIsIm9wZW5DaGlsZHJlbiIsImNsaWNrZWQiLCJwYXJlbnRJRCIsImZvcm1QYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50RWxlbWVudHMiLCJjaGlsZHJlbkVsZW1lbnRzIiwiZWxtc1RvU2hvdyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrZWRQYXJlbnQiLCJwYXJlbnROb2RlIiwibnVtYmVyIiwicGFyc2VJbnQiLCJpdGVtIiwicHAiLCJjaGlsZEVsZW1lbnRDb3VudCIsImsiLCJlbG0iLCJlbG1DaGlsZHJlbiIsImwiLCJyZW1vdmUiLCJhZGQiLCJoYXNTcGVjIiwiZ2V0QXR0cmlidXRlIiwicmFkaW8iLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsIm1pbmltaXNlIiwiZm9ybU5hdiIsImZvcm1XcmFwcGVyIiwidGlja2V0Rm9ybSIsImNsb3NlRm9ybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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S0FBSUQsV0FBVyxNQUFmLEVBQXVCO0FBQ3RCLE1BQUlFLFFBQVFsRCxTQUFTQyxzQkFBVCxDQUFnQyxhQUFoQyxDQUFaOztBQUVBLE9BQUssSUFBSThCLElBQUksQ0FBYixFQUFnQkEsSUFBSW1CLE1BQU1sQixNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDdEMsT0FBSW1CLE1BQU1uQixDQUFOLEVBQVNvQixPQUFiLEVBQXNCO0FBQ3JCLFFBQUlELE1BQU1uQixDQUFOLEVBQVNuQixLQUFULElBQWtCLGFBQXRCLEVBQXFDO0FBQ3BDO0FBQ0F3QyxhQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQzFCLEtBQUlDLGNBQWNELFFBQVE5QixhQUFSLENBQXNCQSxhQUF4QztBQUNBO0FBQ0EsS0FBSWdDLGFBQWFELFlBQVl2RCxzQkFBWixDQUFtQyxhQUFuQyxFQUFrRCxDQUFsRCxDQUFqQjs7QUFFQSxLQUFJd0QsV0FBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLElBQTRCLE1BQTVCLElBQXNDdUIsV0FBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLElBQTRCLEVBQXRFLEVBQTBFO0FBQ3pFdUIsYUFBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0EsRUFGRCxNQUVPO0FBQ051QixhQUFXeEIsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDQTtBQUNEOztBQUVELFNBQVN3QixTQUFULENBQW1CSCxPQUFuQixFQUE0QjtBQUMzQixLQUFJQyxjQUFjRCxRQUFROUIsYUFBUixDQUFzQkEsYUFBeEM7QUFDQStCLGFBQVlWLE1BQVo7QUFDQSxDIiwiZmlsZSI6Ii93cC1jb250ZW50L3BsdWdpbnMvbWFrZS1pdC1hbGwvcmVzb3VyY2VzL2pzL3RpY2tldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlODFjMzBjMjNmMDE0OTlkZDI0MCIsImpRdWVyeSgoKSA9PiB7XG5cdCQoJy5hY2NvcmRpb25zJykuYWNjb3JkaW9uKHtcblx0XHRoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxuXHRcdGhhbmRsZTogJy5hY2NvcmRpb24taGFuZGxlJyxcblx0fSk7XG59KTtcblxuZnVuY3Rpb24gYWRkVGlja2V0Rm9ybSgpIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0td3JhcHBlcicpWzBdO1xuXHR2YXIgY2xvbmUgPSBkaXYuY2xvbmVOb2RlKHRydWUpO1xuXG5cdC8vIEZvcm1zIHRoYXQgYXJlIGFkZGVkIG5lZWQgYSBjbG9zZSBidXR0b24uXG5cdGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpY2tldC1uYXYnKVswXS5pbm5lckhUTUwgKz0gJzxkaXYgY2xhc3M9XCJtaW4tYnV0dG9uXCIgb25jbGljaz1cImNsb3NlRm9ybSh0aGlzKVwiPlg8L2Rpdj4nO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWNrZXQtZGV0YWlscy1zZWN0aW9uJylbMF0uYXBwZW5kKGNsb25lKTtcbn1cblxuZnVuY3Rpb24gY2FsbGVyQ2hhbmdlKGRhdGFzLCBzZWwpIHtcblx0dmFyIHNlbFZhbHVlID0gc2VsLm9wdGlvbnNbc2VsLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHR2YXIgaW5kID0gc2VsVmFsdWUgLSAxO1xuXHR2YXIgc3RhZmZNZW1iZXIgPSBkYXRhc1tpbmRdO1xuXHR2YXIgc3RhZmZEZXRhaWxzID0gXG5cdFx0JzxkaXYgY2xhc3M9XCJjYWxsZXItZGV0XCI+JyArXG5cdFx0XHQnPHNwYW4+IElEIE51bWJlcjogPGI+JyArIHN0YWZmTWVtYmVyLmlkICsgJzwvYj48L3NwYW4+JyArXG5cdFx0XHQnPHNwYW4+IE5hbWU6IDxiPicgKyBzdGFmZk1lbWJlci5uYW1lICsgJzwvYj48L3NwYW4+JyArIFxuXHRcdFx0JzxzcGFuPiBFbWFpbDogPGI+ICcgKyBzdGFmZk1lbWJlci5lbWFpbCArICc8L2I+PC9zcGFuPicgK1xuXHRcdFx0JzxzcGFuPkpvYjogPGI+JyArIHN0YWZmTWVtYmVyLmpvYl90aXRsZSArICc8L2I+PC9zcGFuPicgK1xuXHRcdFx0JzxzcGFuPiBQaG9uZTogPGI+JyArIHN0YWZmTWVtYmVyLnBob25lX251bWJlciArICc8L2I+PC9zcGFuPicgK1xuXHRcdCc8L2Rpdj4nO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGxlcicpWzBdLmlubmVySFRNTCA9IHN0YWZmRGV0YWlscztcbn1cblxuZnVuY3Rpb24gb3BlbkNoaWxkcmVuKGNsaWNrZWQsIHBhcmVudElEKSB7XG5cdC8vIE9wZW4gYWxsIGNoaWxkcmVuIHdpdGggcGFyZW50SURcblx0dmFyIGZvcm1QYXJlbnQgPSBjbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0dmFyIHBhcmVudEVsZW1lbnRzID0gZm9ybVBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJlbnQtcHJvYmxlbScpO1xuXHR2YXIgY2hpbGRyZW5FbGVtZW50cyA9IGZvcm1QYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hpbGQtcHJvYmxlbScpO1xuXHR2YXIgZWxtc1RvU2hvdyA9IGZvcm1QYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncCcgKyBwYXJlbnRJRCk7XG5cdFxuXHRpZiAoY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmVudC1wcm9ibGVtJykpIHtcblx0XHQvLyBSZXNldCBhbGwgcGFyZW50IG5vZGVzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjaGlsZHJlbkVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHQvLyBSZW1vdmUgYW55IGFjdGl2ZSBjbGFzc2VzLiBcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoaWxkLXByb2JsZW0nKSkge1xuXHRcdC8vIFJlc2V0IGNoaWxkIG5vZGVzIFxuXHRcdHZhciBjbGlja2VkUGFyZW50ID0gY2xpY2tlZC5wYXJlbnROb2RlO1xuXHRcdHZhciBudW1iZXIgPSBwYXJzZUludChjbGlja2VkUGFyZW50LmNsYXNzTGlzdC5pdGVtKDEpKSArIDE7XG5cdFx0Ly8gR2V0IG51bWJlciBvZiBkaXZzIHRvIGxvb3AgdGhyb3VnaFxuXHRcdHZhciBwcCA9IGNsaWNrZWRQYXJlbnQucGFyZW50Tm9kZS5jaGlsZEVsZW1lbnRDb3VudCAtIDE7XG5cblx0XHRmb3IgKHZhciBrID0gMDsgayA8IHBwOyBrKyspIHtcblx0XHRcdHZhciBlbG0gPSBmb3JtUGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9ibGVtLWNoaWxkcmVuIFwiICsgbnVtYmVyKVswXTtcblx0XHQgICBcblx0XHRcdHZhciBlbG1DaGlsZHJlbiA9IGVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hpbGQtcHJvYmxlbVwiKTtcblxuXHRcdFx0Zm9yICh2YXIgbCA9IDA7IGwgPCBlbG1DaGlsZHJlbi5sZW5ndGg7IGwrKykge1xuXHRcdFx0XHRlbG1DaGlsZHJlbltsXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBSZW1vdmUgYW55IGFjdGl2ZSBjbGFzc2VzLiBcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTaG93IHRoZSBjaGlsZHJlbiBlbGVtZW50cyB3ZSB3YW50XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZWxtc1RvU2hvdy5sZW5ndGg7IGkrKykge1xuXHRcdGVsbXNUb1Nob3dbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0fVxuXG5cdC8vIFJlbW92ZSBhbGwgYWN0aXZlIGNsYXNzZXMgICBcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdHBhcmVudEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3RpY2tldC1hY3RpdmUnKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkcmVuRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndGlja2V0LWFjdGl2ZScpO1xuXHR9XG5cblx0Ly8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjbGlja2VkIGVsZW1lbnRcblx0Y2xpY2tlZC5jbGFzc0xpc3QuYWRkKCd0aWNrZXQtYWN0aXZlJyk7XG5cdFxuXHQvLyBTcGVjaWFsaXN0IEFzc2lnbm1lbnQgXG5cdHZhciBoYXNTcGVjID0gY2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXNwZWNpYWxpc3RzJyk7XG5cblx0aWYgKGhhc1NwZWMgPT0gJ3RydWUnKSB7XG5cdFx0dmFyIHJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3BlYy1hc3NpZ24nKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW8ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyYWRpb1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdGlmIChyYWRpb1tpXS52YWx1ZSA9PSAnYXNzaWduX3NwZWMnKSB7XG5cdFx0XHRcdFx0Ly8gVHJ5IHRvIHJlYXNzaWduIGJlc3Qgc3BlY2lhbGlzdCB0byB0aGUgdGlja2V0IC4gIFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdXb3VsZCB0cnkgYW5kIHJlYXNzaWduJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbWluaW1pc2UoZm9ybU5hdikge1xuXHR2YXIgZm9ybVdyYXBwZXIgPSBmb3JtTmF2LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0Ly8gUGFyZW50IGlzIGZvcm0gd3JhcHBlciwgbWluaW1pc2UvbWF4aW1pc2UgdGhlIGZvcm0gaW4gdGhlIHdyYXBwZXJcblx0dmFyIHRpY2tldEZvcm0gPSBmb3JtV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWNrZXQtZm9ybScpWzBdO1xuXG5cdGlmICh0aWNrZXRGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnIHx8IHRpY2tldEZvcm0uc3R5bGUuZGlzcGxheSA9PSAnJykge1xuXHRcdHRpY2tldEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fSBlbHNlIHtcblx0XHR0aWNrZXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKGZvcm1OYXYpIHtcblx0dmFyIGZvcm1XcmFwcGVyID0gZm9ybU5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdGZvcm1XcmFwcGVyLnJlbW92ZSgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2JhY2tlbmQvanMvdGlja2V0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=