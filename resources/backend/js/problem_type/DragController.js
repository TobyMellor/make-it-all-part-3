export default class DragController {
	constructor() {
		this.runwaySelector = '.type-column'; // where can an element be dropped without deleting it?
		this.planeSelector  = this.runwaySelector + ' li';

		let $dragging = null;

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
						if (!$dragging.hasClass('dragging')) $(document).trigger('dragstart');
						
						$dragging
							.css({
								top: e.pageY - document.getElementById('wpadminbar').offsetHeight - 15,
								left: e.pageX - document.getElementById('adminmenuwrap').offsetWidth - 20
							});
					}
				})
				.on('mouseup', this.planeSelector, function() {
					$dragging.removeClass('dragging');
					$dragging.css({top: 'initial', left: 'initial'});
					$dragging = null;
				});
		});
	}

	getElementDraggedInto(posX, posY) {
		let $elementDraggedInto = null;

		$(this.planeSelector).each((i, element) => {
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

		console.log('--------');
		console.log('TOP: ' + top);
		console.log('BOTTOM: ' + bottom);
		console.log('LEFT: ' + left);
		console.log('RIGHT: ' + right);
		console.log('POSX: ' + posX);
		console.log('POSY: ' + posY);

		console.log(posX >= left);
		console.log(posX <= right);
		console.log(posY >= top);
		console.log(posY <= bottom);

		return posX >= left && posX <= right && posY >= top && posY <= bottom;
	}
}