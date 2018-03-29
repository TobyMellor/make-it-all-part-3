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
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 76:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY1MmFhMWU0OWFhYTI4Njg1YjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2JhY2tlbmQvanMvdGlja2V0cy5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwiYWNjb3JkaW9uIiwiaGVpZ2h0U3R5bGUiLCJoYW5kbGUiLCJhZGRUaWNrZXRGb3JtIiwiZGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJjYWxsZXJDaGFuZ2UiLCJkYXRhcyIsInNlbCIsInNlbFZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImluZCIsInN0YWZmTWVtYmVyIiwic3RhZmZEZXRhaWxzIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJqb2JfdGl0bGUiLCJwaG9uZV9udW1iZXIiLCJvcGVuQ2hpbGRyZW4iLCJjbGlja2VkIiwicGFyZW50SUQiLCJmb3JtUGFyZW50IiwicGFyZW50RWxlbWVudCIsInBhcmVudEVsZW1lbnRzIiwiY2hpbGRyZW5FbGVtZW50cyIsImVsbXNUb1Nob3ciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja2VkUGFyZW50IiwicGFyZW50Tm9kZSIsIm51bWJlciIsInBhcnNlSW50IiwiaXRlbSIsInBwIiwiY2hpbGRFbGVtZW50Q291bnQiLCJrIiwiZWxtIiwiZWxtQ2hpbGRyZW4iLCJsIiwicmVtb3ZlIiwiYWRkIiwiaGFzU3BlYyIsImdldEF0dHJpYnV0ZSIsInJhZGlvIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJtaW5pbWlzZSIsImZvcm1OYXYiLCJmb3JtV3JhcHBlciIsInRpY2tldEZvcm0iLCJjbG9zZUZvcm0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQUEsT0FBTyxZQUFNO0FBQ1pDLEdBQUUsYUFBRixFQUFpQkMsU0FBakIsQ0FBMkI7QUFDMUJDLGVBQWEsU0FEYTtBQUUxQkMsVUFBUTtBQUZrQixFQUEzQjtBQUlBLENBTEQ7O0FBT0EsU0FBU0MsYUFBVCxHQUF5QjtBQUN4QixLQUFJQyxNQUFNQyxTQUFTQyxzQkFBVCxDQUFnQyxjQUFoQyxFQUFnRCxDQUFoRCxDQUFWO0FBQ0EsS0FBSUMsUUFBUUgsSUFBSUksU0FBSixDQUFjLElBQWQsQ0FBWjs7QUFFQTtBQUNBRCxPQUFNRCxzQkFBTixDQUE2QixZQUE3QixFQUEyQyxDQUEzQyxFQUE4Q0csU0FBOUMsSUFBMkQsMkRBQTNEO0FBQ0FKLFVBQVNDLHNCQUFULENBQWdDLHdCQUFoQyxFQUEwRCxDQUExRCxFQUE2REksTUFBN0QsQ0FBb0VILEtBQXBFO0FBQ0E7O0FBRUQsU0FBU0ksWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBQ2pDLEtBQUlDLFdBQVdELElBQUlFLE9BQUosQ0FBWUYsSUFBSUcsYUFBaEIsRUFBK0JDLEtBQTlDO0FBQ0EsS0FBSUMsTUFBTUosV0FBVyxDQUFyQjtBQUNBLEtBQUlLLGNBQWNQLE1BQU1NLEdBQU4sQ0FBbEI7QUFDQSxLQUFJRSxlQUNILDZCQUNDLHVCQURELEdBQzJCRCxZQUFZRSxFQUR2QyxHQUM0QyxhQUQ1QyxHQUVDLGtCQUZELEdBRXNCRixZQUFZRyxJQUZsQyxHQUV5QyxhQUZ6QyxHQUdDLG9CQUhELEdBR3dCSCxZQUFZSSxLQUhwQyxHQUc0QyxhQUg1QyxHQUlDLGdCQUpELEdBSW9CSixZQUFZSyxTQUpoQyxHQUk0QyxhQUo1QyxHQUtDLG1CQUxELEdBS3VCTCxZQUFZTSxZQUxuQyxHQUtrRCxhQUxsRCxHQU1BLFFBUEQ7O0FBU0FwQixVQUFTQyxzQkFBVCxDQUFnQyxRQUFoQyxFQUEwQyxDQUExQyxFQUE2Q0csU0FBN0MsR0FBeURXLFlBQXpEO0FBQ0E7O0FBRUQsU0FBU00sWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQ3hDO0FBQ0EsS0FBSUMsYUFBYUYsUUFBUUcsYUFBUixDQUFzQkEsYUFBdkM7QUFDQSxLQUFJQyxpQkFBaUJGLFdBQVd2QixzQkFBWCxDQUFrQyxnQkFBbEMsQ0FBckI7QUFDQSxLQUFJMEIsbUJBQW1CSCxXQUFXdkIsc0JBQVgsQ0FBa0MsZUFBbEMsQ0FBdkI7QUFDQSxLQUFJMkIsYUFBYUosV0FBV3ZCLHNCQUFYLENBQWtDLE1BQU1zQixRQUF4QyxDQUFqQjs7QUFFQSxLQUFJRCxRQUFRTyxTQUFSLENBQWtCQyxRQUFsQixDQUEyQixnQkFBM0IsQ0FBSixFQUFrRDtBQUNqRDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixpQkFBaUJLLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUNqREosb0JBQWlCSSxDQUFqQixFQUFvQkUsS0FBcEIsQ0FBMEJDLE9BQTFCLEdBQW9DLE1BQXBDO0FBQ0E7QUFDQTtBQUNELEVBTkQsTUFNTyxJQUFJWixRQUFRTyxTQUFSLENBQWtCQyxRQUFsQixDQUEyQixlQUEzQixDQUFKLEVBQWlEO0FBQ3ZEO0FBQ0EsTUFBSUssZ0JBQWdCYixRQUFRYyxVQUE1QjtBQUNBLE1BQUlDLFNBQVNDLFNBQVNILGNBQWNOLFNBQWQsQ0FBd0JVLElBQXhCLENBQTZCLENBQTdCLENBQVQsSUFBNEMsQ0FBekQ7QUFDQTtBQUNBLE1BQUlDLEtBQUtMLGNBQWNDLFVBQWQsQ0FBeUJLLGlCQUF6QixHQUE2QyxDQUF0RDs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsRUFBcEIsRUFBd0JFLEdBQXhCLEVBQTZCO0FBQzVCLE9BQUlDLE1BQU1uQixXQUFXdkIsc0JBQVgsQ0FBa0Msc0JBQXNCb0MsTUFBeEQsRUFBZ0UsQ0FBaEUsQ0FBVjs7QUFFQSxPQUFJTyxjQUFjRCxJQUFJMUMsc0JBQUosQ0FBMkIsZUFBM0IsQ0FBbEI7O0FBRUEsUUFBSyxJQUFJNEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxZQUFZWixNQUFoQyxFQUF3Q2EsR0FBeEMsRUFBNkM7QUFDNUNELGdCQUFZQyxDQUFaLEVBQWVaLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CLENBRDRDLENBQ0w7QUFDdkM7QUFDRDtBQUNEOztBQUVEO0FBQ0EsTUFBSyxJQUFJSCxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFdBQVdJLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMzQ0gsYUFBV0csQ0FBWCxFQUFjRSxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QjtBQUNBOztBQUVEO0FBQ0EsTUFBSyxJQUFJSCxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLGVBQWVNLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUMvQ0wsaUJBQWVLLENBQWYsRUFBa0JGLFNBQWxCLENBQTRCaUIsTUFBNUIsQ0FBbUMsZUFBbkM7QUFDQTs7QUFFRCxNQUFLLElBQUlmLElBQUksQ0FBYixFQUFnQkEsSUFBSUosaUJBQWlCSyxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakRKLG1CQUFpQkksQ0FBakIsRUFBb0JGLFNBQXBCLENBQThCaUIsTUFBOUIsQ0FBcUMsZUFBckM7QUFDQTs7QUFFRDtBQUNBeEIsU0FBUU8sU0FBUixDQUFrQmtCLEdBQWxCLENBQXNCLGVBQXRCOztBQUVBO0FBQ0EsS0FBSUMsVUFBVTFCLFFBQVEyQixZQUFSLENBQXFCLHNCQUFyQixDQUFkOztBQUVBLEtBQUlELFdBQVcsTUFBZixFQUF1QjtBQUN0QixNQUFJRSxRQUFRbEQsU0FBU0Msc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBWjs7QUFFQSxPQUFLLElBQUk4QixJQUFJLENBQWIsRUFBZ0JBLElBQUltQixNQUFNbEIsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3RDLE9BQUltQixNQUFNbkIsQ0FBTixFQUFTb0IsT0FBYixFQUFzQjtBQUNyQixRQUFJRCxNQUFNbkIsQ0FBTixFQUFTbkIsS0FBVCxJQUFrQixhQUF0QixFQUFxQztBQUNwQztBQUNBd0MsYUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUMxQixLQUFJQyxjQUFjRCxRQUFROUIsYUFBUixDQUFzQkEsYUFBeEM7QUFDQTtBQUNBLEtBQUlnQyxhQUFhRCxZQUFZdkQsc0JBQVosQ0FBbUMsYUFBbkMsRUFBa0QsQ0FBbEQsQ0FBakI7O0FBRUEsS0FBSXdELFdBQVd4QixLQUFYLENBQWlCQyxPQUFqQixJQUE0QixNQUE1QixJQUFzQ3VCLFdBQVd4QixLQUFYLENBQWlCQyxPQUFqQixJQUE0QixFQUF0RSxFQUEwRTtBQUN6RXVCLGFBQVd4QixLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNBLEVBRkQsTUFFTztBQUNOdUIsYUFBV3hCLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0E7QUFDRDs7QUFFRCxTQUFTd0IsU0FBVCxDQUFtQkgsT0FBbkIsRUFBNEI7QUFDM0IsS0FBSUMsY0FBY0QsUUFBUTlCLGFBQVIsQ0FBc0JBLGFBQXhDO0FBQ0ErQixhQUFZVixNQUFaO0FBQ0EsQyIsImZpbGUiOiIvd3AtY29udGVudC9wbHVnaW5zL21ha2UtaXQtYWxsL3Jlc291cmNlcy9qcy90aWNrZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2NTJhYTFlNDlhYWEyODY4NWIxIiwialF1ZXJ5KCgpID0+IHtcblx0JCgnLmFjY29yZGlvbnMnKS5hY2NvcmRpb24oe1xuXHRcdGhlaWdodFN0eWxlOiAnY29udGVudCcsXG5cdFx0aGFuZGxlOiAnLmFjY29yZGlvbi1oYW5kbGUnLFxuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRUaWNrZXRGb3JtKCkge1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS13cmFwcGVyJylbMF07XG5cdHZhciBjbG9uZSA9IGRpdi5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0Ly8gRm9ybXMgdGhhdCBhcmUgYWRkZWQgbmVlZCBhIGNsb3NlIGJ1dHRvbi5cblx0Y2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlja2V0LW5hdicpWzBdLmlubmVySFRNTCArPSAnPGRpdiBjbGFzcz1cIm1pbi1idXR0b25cIiBvbmNsaWNrPVwiY2xvc2VGb3JtKHRoaXMpXCI+WDwvZGl2Pic7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpY2tldC1kZXRhaWxzLXNlY3Rpb24nKVswXS5hcHBlbmQoY2xvbmUpO1xufVxuXG5mdW5jdGlvbiBjYWxsZXJDaGFuZ2UoZGF0YXMsIHNlbCkge1xuXHR2YXIgc2VsVmFsdWUgPSBzZWwub3B0aW9uc1tzZWwuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdHZhciBpbmQgPSBzZWxWYWx1ZSAtIDE7XG5cdHZhciBzdGFmZk1lbWJlciA9IGRhdGFzW2luZF07XG5cdHZhciBzdGFmZkRldGFpbHMgPSBcblx0XHQnPGRpdiBjbGFzcz1cImNhbGxlci1kZXRcIj4nICtcblx0XHRcdCc8c3Bhbj4gSUQgTnVtYmVyOiA8Yj4nICsgc3RhZmZNZW1iZXIuaWQgKyAnPC9iPjwvc3Bhbj4nICtcblx0XHRcdCc8c3Bhbj4gTmFtZTogPGI+JyArIHN0YWZmTWVtYmVyLm5hbWUgKyAnPC9iPjwvc3Bhbj4nICsgXG5cdFx0XHQnPHNwYW4+IEVtYWlsOiA8Yj4gJyArIHN0YWZmTWVtYmVyLmVtYWlsICsgJzwvYj48L3NwYW4+JyArXG5cdFx0XHQnPHNwYW4+Sm9iOiA8Yj4nICsgc3RhZmZNZW1iZXIuam9iX3RpdGxlICsgJzwvYj48L3NwYW4+JyArXG5cdFx0XHQnPHNwYW4+IFBob25lOiA8Yj4nICsgc3RhZmZNZW1iZXIucGhvbmVfbnVtYmVyICsgJzwvYj48L3NwYW4+JyArXG5cdFx0JzwvZGl2Pic7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsbGVyJylbMF0uaW5uZXJIVE1MID0gc3RhZmZEZXRhaWxzO1xufVxuXG5mdW5jdGlvbiBvcGVuQ2hpbGRyZW4oY2xpY2tlZCwgcGFyZW50SUQpIHtcblx0Ly8gT3BlbiBhbGwgY2hpbGRyZW4gd2l0aCBwYXJlbnRJRFxuXHR2YXIgZm9ybVBhcmVudCA9IGNsaWNrZWQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR2YXIgcGFyZW50RWxlbWVudHMgPSBmb3JtUGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhcmVudC1wcm9ibGVtJyk7XG5cdHZhciBjaGlsZHJlbkVsZW1lbnRzID0gZm9ybVBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGlsZC1wcm9ibGVtJyk7XG5cdHZhciBlbG1zVG9TaG93ID0gZm9ybVBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwJyArIHBhcmVudElEKTtcblx0XG5cdGlmIChjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucygncGFyZW50LXByb2JsZW0nKSkge1xuXHRcdC8vIFJlc2V0IGFsbCBwYXJlbnQgbm9kZXNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoaWxkcmVuRWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdC8vIFJlbW92ZSBhbnkgYWN0aXZlIGNsYXNzZXMuIFxuXHRcdH1cblx0fSBlbHNlIGlmIChjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtcHJvYmxlbScpKSB7XG5cdFx0Ly8gUmVzZXQgY2hpbGQgbm9kZXMgXG5cdFx0dmFyIGNsaWNrZWRQYXJlbnQgPSBjbGlja2VkLnBhcmVudE5vZGU7XG5cdFx0dmFyIG51bWJlciA9IHBhcnNlSW50KGNsaWNrZWRQYXJlbnQuY2xhc3NMaXN0Lml0ZW0oMSkpICsgMTtcblx0XHQvLyBHZXQgbnVtYmVyIG9mIGRpdnMgdG8gbG9vcCB0aHJvdWdoXG5cdFx0dmFyIHBwID0gY2xpY2tlZFBhcmVudC5wYXJlbnROb2RlLmNoaWxkRWxlbWVudENvdW50IC0gMTtcblxuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgcHA7IGsrKykge1xuXHRcdFx0dmFyIGVsbSA9IGZvcm1QYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2JsZW0tY2hpbGRyZW4gXCIgKyBudW1iZXIpWzBdO1xuXHRcdCAgIFxuXHRcdFx0dmFyIGVsbUNoaWxkcmVuID0gZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGlsZC1wcm9ibGVtXCIpO1xuXG5cdFx0XHRmb3IgKHZhciBsID0gMDsgbCA8IGVsbUNoaWxkcmVuLmxlbmd0aDsgbCsrKSB7XG5cdFx0XHRcdGVsbUNoaWxkcmVuW2xdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIFJlbW92ZSBhbnkgYWN0aXZlIGNsYXNzZXMuIFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNob3cgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIHdlIHdhbnRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbG1zVG9TaG93Lmxlbmd0aDsgaSsrKSB7XG5cdFx0ZWxtc1RvU2hvd1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGFsbCBhY3RpdmUgY2xhc3NlcyAgIFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0cGFyZW50RWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndGlja2V0LWFjdGl2ZScpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRyZW5FbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCd0aWNrZXQtYWN0aXZlJyk7XG5cdH1cblxuXHQvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNsaWNrZWQgZWxlbWVudFxuXHRjbGlja2VkLmNsYXNzTGlzdC5hZGQoJ3RpY2tldC1hY3RpdmUnKTtcblx0XG5cdC8vIFNwZWNpYWxpc3QgQXNzaWdubWVudCBcblx0dmFyIGhhc1NwZWMgPSBjbGlja2VkLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXMtc3BlY2lhbGlzdHMnKTtcblxuXHRpZiAoaGFzU3BlYyA9PSAndHJ1ZScpIHtcblx0XHR2YXIgcmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcGVjLWFzc2lnbicpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYWRpby5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJhZGlvW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0aWYgKHJhZGlvW2ldLnZhbHVlID09ICdhc3NpZ25fc3BlYycpIHtcblx0XHRcdFx0XHQvLyBUcnkgdG8gcmVhc3NpZ24gYmVzdCBzcGVjaWFsaXN0IHRvIHRoZSB0aWNrZXQgLiAgXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1dvdWxkIHRyeSBhbmQgcmVhc3NpZ24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBtaW5pbWlzZShmb3JtTmF2KSB7XG5cdHZhciBmb3JtV3JhcHBlciA9IGZvcm1OYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHQvLyBQYXJlbnQgaXMgZm9ybSB3cmFwcGVyLCBtaW5pbWlzZS9tYXhpbWlzZSB0aGUgZm9ybSBpbiB0aGUgd3JhcHBlclxuXHR2YXIgdGlja2V0Rm9ybSA9IGZvcm1XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpY2tldC1mb3JtJylbMF07XG5cblx0aWYgKHRpY2tldEZvcm0uc3R5bGUuZGlzcGxheSA9PSAnZmxleCcgfHwgdGlja2V0Rm9ybS5zdHlsZS5kaXNwbGF5ID09ICcnKSB7XG5cdFx0dGlja2V0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9IGVsc2Uge1xuXHRcdHRpY2tldEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0fVxufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZm9ybU5hdikge1xuXHR2YXIgZm9ybVdyYXBwZXIgPSBmb3JtTmF2LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0Zm9ybVdyYXBwZXIucmVtb3ZlKCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2JhY2tlbmQvanMvdGlja2V0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=