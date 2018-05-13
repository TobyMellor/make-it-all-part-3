export default class DragController {
	constructor() {
		let dragController = this,
			$dragging      = null,
			mouseMovementStart = {}; // the element the user is dragging

		this.minMouseMovement = 35;
		this.runwaySelector   = '.type-column'; // where can an element be dropped without deleting it?
		this.planeSelector    = this.runwaySelector + ' > li'; // what are the draggable elements?

		$(function() {
			$(document)
				// set the element that we're dragging
				.on('mousedown', this.planeSelector, function(e) {
					$dragging = $(e.target).closest(dragController.planeSelector);
					mouseMovementStart = {x: e.offsetX, y: e.offsetY};
				})
				// the user has the mousedown and have moved their mouse. Add the dragging class
				.on('dragstart', this.planeSelector, function(e) {
					$dragging.addClass('dragging');
				})
				.on('mousemove', this.planeSelector, function(e) {
					// only fire this when dragging
					if (e.buttons === 1) {
						if (!$dragging) return;
						
						if (!$dragging.hasClass('dragging')) {
							if (dragController.isDraggingMouse(mouseMovementStart, e.offsetX, e.offsetY)) {
								$(document).trigger('dragstart');
							} else {
								return;
							}
						}

						// get the position of the mouse
						let posX = e.pageX - document.getElementById('adminmenuwrap').offsetWidth - 8,
							posY = e.pageY - document.getElementById('wpadminbar').offsetHeight - 8;

						// update the CSS properties, absolutely positioned
						$dragging
							.css({
								left: posX,
								top:  posY
							});

						// $('.type-column') the user is dragging over, null otherwise
						let $elementDraggedInto = dragController.getElementDraggedInto(posX, posY);

						// assume an expertise type is no longer dragging into itself
						$dragging
							.add($elementDraggedInto)
							.removeClass('not-allowed')

						if ($elementDraggedInto) {
							// back inside a $('.type-column')
							$dragging.removeClass('danger');

							// .active: user is potentially trying to drag into self
							if ($dragging.hasClass('active')) {
								$dragging.parent().nextAll().each((i, element) => {
									if ($(element).is($elementDraggedInto)) {
										$dragging
											.add($elementDraggedInto)
											.addClass('not-allowed'); // if dragging to right of self, disallow

										return false;
									}
								});
							}
						} else {
							$dragging.addClass('danger');
						}
					}
				})
				.on('mouseup', this.planeSelector, function() {
					if ($dragging !== null && $dragging.is(dragController.planeSelector) && $dragging.hasClass('dragging')) {
						if (!$dragging.hasClass('not-allowed')) {
							let $elementDraggedInto = dragController.getElementDraggedInto(
								parseInt($dragging.css('left')),
								parseInt($dragging.css('top'))
							);

							$dragging.css('display', 'none');

							$(document).trigger('dragstop', [
								$dragging,
								$elementDraggedInto
							]);
						}

						// position back to normal
						$dragging
							.css({
								top:  'initial',
								left: 'initial'
							})
							.removeClass('dragging');

						$dragging = null;
					}
				});
		});
	}

	getElementDraggedInto(posX, posY) {
		let $elementDraggedInto = null;

		$(this.runwaySelector).each((i, element) => {
			let $element = $(element);

			if (this.isWithinBoundaries($element, posX, posY)) {
				$elementDraggedInto = $element; return false;
			}
		});

		return $elementDraggedInto;
	}

	isWithinBoundaries($element, posX, posY) {
		let top    = $element[0].offsetTop,
			left   = $element[0].offsetLeft,
			bottom = top + $element.height(),
			right  = left + $element.width();

		return posX >= left && posX <= right && posY >= top && posY <= bottom;
	}

	isDraggingMouse(mouseMovementStart, currentX, currentY) {
		let delta = 0;

		delta += Math.abs(mouseMovementStart.x - currentX);
		delta += Math.abs(mouseMovementStart.y - currentY);

		return delta >= this.minMouseMovement;
	}
}