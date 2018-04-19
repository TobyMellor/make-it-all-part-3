export default class DragController {
	constructor() {
		let dragController = this,
			$dragging      = null;

		this.runwaySelector = '.type-column'; // where can an element be dropped without deleting it?
		this.planeSelector  = this.runwaySelector + ' li'; // what are the draggable elements?

		$(function() {
			$(document)
				.on('mousedown', this.planeSelector, function(e) {
					$dragging = $(e.target); 
				})
				.on('dragstart', this.planeSelector, function(e) {
					$dragging.addClass('dragging');
				})
				.on('mousemove', this.planeSelector, function(e) {
					if (e.buttons === 1) {
						if (!$dragging) return;

						if (!$dragging.hasClass('dragging')) $(document).trigger('dragstart');

						let posX = e.pageX - document.getElementById('adminmenuwrap').offsetWidth - 8,
							posY = e.pageY - document.getElementById('wpadminbar').offsetHeight - 8;

						$dragging
							.css({
								left: posX,
								top:  posY
							});

						let $elementDraggedInto = dragController.getElementDraggedInto(posX, posY);

						$dragging
							.add($elementDraggedInto)
							.removeClass('not-allowed')

						if ($elementDraggedInto) {
							$dragging.removeClass('danger');

							if ($dragging.hasClass('active')) {
								$dragging.parent().nextAll().each((i, element) => {
									if ($(element).is($elementDraggedInto)) {
										$dragging
											.add($elementDraggedInto)
											.addClass('not-allowed'); 

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
					if ($dragging !== null) {
						if (!$dragging.hasClass('not-allowed')) {
							let $elementDraggedInto = dragController.getElementDraggedInto(
								parseInt($dragging.css('left')),
								parseInt($dragging.css('top'))
							);

							$(document).trigger('dragstop', [
								$dragging,
								$elementDraggedInto
							]);
						}

						$dragging
							.removeClass('dragging')
							.css({
								top:  'initial',
								left: 'initial'
							});

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

		// console.log('--------');
		// console.log('TOP: ' + top);
		// console.log('BOTTOM: ' + bottom);
		// console.log('LEFT: ' + left);
		// console.log('RIGHT: ' + right);
		// console.log('POSX: ' + posX);
		// console.log('POSY: ' + posY);

		// console.log(posX >= left);
		// console.log(posX <= right);
		// console.log(posY >= top);
		// console.log(posY <= bottom);

		return posX >= left && posX <= right && posY >= top && posY <= bottom;
	}
}