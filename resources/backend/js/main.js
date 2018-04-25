$(() => {
	/**
	 * Event Listeners
	 */

	// Forward click on button to hidden input with datetimepicker
	$('.mia-picker').click(function(e) {
		$('.mia-picker input').datepicker('show');
	});

	// Update the visual date/time when they finish with the datetimepicker
	$('.mia-picker input').change(function() {
		let date            = new Date($(this).val()),
			$spans          = $(this).closest('.mia-field-group').find('.date-time-picker span');

		setDateDisplay($spans, date);
	});

	// Remove filter/status, clear the select field
	$(document).on('click', '.filter.removeable', function() {
		$(this).closest('.has-button').find('select').prop('selectedIndex', 0);

		$(this).fadeOut(250, function() {
			$(this).remove();
		});
	});

	/**
	 * Initializations
	 */

	$('.mia-picker input').datetimepicker({
		controlType: 'slider'
	});

	// Set current date
	$('.mia-picker input').datepicker('setDate', new Date());

	$(document).on('click', '.invalid-feedback', function() {
		$(this).fadeOut(250, function() {
			$(this).remove();
		})
	});

	// make the chevron handle go up/down when an accordion is expanded/minimized
	$(document).on('click', '.accordion-handle, .mia-panel-heading', function() {
		$('.accordions .accordion-handle .fa:not(.fa-trash-o), .mia-panel-short .mia-panel-heading .fa').removeClass().addClass('fa fa-chevron-up');
		$('.accordions .accordion-handle.ui-state-active .fa:not(.fa-trash-o), .mia-panel-short .mia-panel-heading.ui-state-active .fa').removeClass().addClass('fa fa-chevron-down');
	});

	// if a panel has a slug, modify sessionStorage's collapsed_mia_panel_shorts
	$(document).on('click', '.mia-panel-heading', function() {
		let slug = $(this).parent().data('slug');

		if (slug) {
			let collapsedPanels = sessionStorage.getItem('collapsed_mia_panel_shorts') !== "" ? sessionStorage.getItem('collapsed_mia_panel_shorts').split(',') : [],
				slugIndexOf     = collapsedPanels.indexOf(slug);

			if (slugIndexOf > -1) {
				collapsedPanels.splice(slugIndexOf, 1);
			} else {
				collapsedPanels = [...collapsedPanels, slug];
			}

			sessionStorage.setItem('collapsed_mia_panel_shorts', collapsedPanels);
		}
	});

	$(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
		if (!confirm('Are you sure you want to delete this ticket?')) return;

		let $accordionHandle = $(this).closest('.accordion-handle');

		$accordionHandle.add($accordionHandle.next()).fadeOut(250, function() {
			$(this).remove();

			// if no accordions are expanded, expand the first
			if ($('.accordion-handle.ui-state-active').length === 0) $('.accordion-handle').first().click();
		});
	});

	let $miaPanelShort = $('.mia-panel-short');

	if ($miaPanelShort.length) {
		$miaPanelShort.accordion({
			heightStyle: 'content',
			handle: '.mia-panel-heading',
			icons: false,
			collapsible: true
		});

		let collapsedPanels = sessionStorage.getItem('collapsed_mia_panel_shorts').split(','); // if a mia_panel_short's slug is in here, it will be collapsed
		
		$miaPanelShort.each(function(el) {
			if (collapsedPanels.includes($(this).data('slug'))) $(this).find('div').first().click();
		});
	}
});

function setDateDisplay($spans, date) {
	let setDigit = ($span, digit) => $span.text(('0' + digit).slice(-2));

	setDigit($spans.eq(0), date.getDate());
	setDigit($spans.eq(2), date.getMonth() + 1);
	setDigit($spans.eq(4), date.getFullYear().toString());

	setDigit($spans.eq(6), date.getHours());
	setDigit($spans.eq(8), date.getMinutes());
	setDigit($spans.eq(10), date.getSeconds());
}

var validationTimeout = window.validationTimeout = null;

(function($){
	$.fn.serializeObject = function(shouldValidate = false) {
		let self = this,
			json = {},
			push_counters = {},
			patterns = {
				"validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:[\[\.](?:\d*|[a-zA-Z0-9_]+)[\]]?)*$/,
				"key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
				"push":     /^$/,
				"fixed":    /^\d+$/,
				"named":    /^[a-zA-Z0-9_]+$/
			},
			isValid = true,
			$fields = $(this).find('input, select, textarea').not('input[type=radio]:not(:checked)'); // filters out non-checked radio fields

		this.build = function(base, key, value) {
			base[key] = value;
			return base;
		};

		this.push_counter = function(key){
			if (push_counters[key] === undefined) {
				push_counters[key] = 0;
			}

			return push_counters[key]++;
		};

		if (shouldValidate) {
			$('.invalid-feedback').remove();
			$('.is-valid, .is-invalid, .accordion-handle.red-highlight, .accordion-handle.green-highlight').removeClass('is-valid is-invalid red-highlight green-highlight');
		
			clearTimeout(validationTimeout);

			validationTimeout = setTimeout(function() {
				$('.is-valid, .is-invalid, .accordion-handle.red-highlight, .accordion-handle.green-highlight').removeClass('is-valid is-invalid red-highlight green-highlight');
				$('.invalid-feedback').fadeOut(250, function() {
					$(this).remove();
				});
			}, 150000);
		}

		$fields.not(':disabled').map(function() {
			// skip invalid keys
			if (!patterns.validate.test(this.name)) {
				return;
			}

			let k,
				keys = this.name.match(patterns.key),
				merge = this.value,
				reverse_key = this.name,
				validation_rules = this.attributes.hasOwnProperty('validation') ? this.attributes.validation.value : null;

			if (shouldValidate && validation_rules !== null) {
				let response = $(this).validate();

				if (isValid) {
					isValid = response;
				}
			}

			while ((k = keys.pop()) !== undefined) {

				// adjust reverse_key
				reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

				// push
				if (k.match(patterns.push)) {
					merge = self.build({}, self.push_counter(reverse_key), merge);
				}

				// fixed or named
				else if (k.match(patterns.fixed) || k.match(patterns.named)) {
					merge = self.build({}, k, merge);
				}
			}

			json = $.extend(true, json, merge);
		});

		json.isValid = function() {
			return isValid;
		};

		if (shouldValidate) {
			$(this).find('.accordion-body .is-valid').closest('.accordion-body').prev().addClass('green-highlight'); // highlight all accordions green first
			$(this).find('.accordion-body .is-invalid').closest('.accordion-body').prev().removeClass('green-highlight').addClass('red-highlight'); // highlight any accordions with errors in them
			
			// open accordion with error
			if ($(this).find('.accordion-handle.red-highlight').first().hasClass('ui-accordion-header-collapsed')) {
				$(this).find('.accordion-handle.red-highlight').first().click();
			}
		}

		return json;
	};

	$.fn.validate = function() {
		let $this           = $(this),
			value           = $this.val(),
			validationRules = $this.attr('validation').split('|'),
			failedRules     = [];

		for (let i = 0; i < validationRules.length; i++) {
			let rule = validationRules[i];

			switch (rule) {
				case "nullable":
					if (value === null || value === '') {
						validationRules = []; // break out of for
					}

					break;
				case (rule.match(/required/) || {}).input:
					if (value === null || value === '') {
						if (rule.split(':').length === 1) {
							failedRules.push('This field is required.');
						} else {
							failedRules.push(rule.split(':')[1]); // custom message can be attached to required
						}

						validationRules = []; // break out of for
					}

					break;
				case "integer":
					if (value.length > 0 && (isNaN(parseInt(value)) || !isFinite(value))) {
						failedRules.push('This field must be an whole number.');
					}

					break;
				case (rule.match(/max:/) || {}).input:
					if (value.length > 0 && value.length > Number(rule.split(':')[1])) {
						failedRules.push('This field must have less than ' + (Number(rule.split(':')[1]) + 1) + ' characters.');
					}

					break;
				case (rule.match(/min:/) || {}).input:
					if (value.length < Number(rule.split(':')[1])) {
						failedRules.push('This field must have at least ' + rule.split(':')[1] + ' characters.');
					}

					break;
				case (rule.match(/in:/) || {}).input:
					if (value.length > 0 && (rule.split(':')[1].split(',').indexOf(value) === -1)) {
						failedRules.push('This field must contain one of the following: ' + rule.split(':')[1].split(',') + '.');
					}

					break;
				case (rule.match(/not:/) || {}).input:
					if (value === rule.split(':')[1].split(/'/)[1]) {
						failedRules.push('This field has an invalid value.');
					}

					break;
				case (rule.match(/requires:/) || {}).input:
					if ($this.closest('form').find('input[name="' + rule.split(':')[1] + '"]').val() === '') {
						failedRules.push('This field is required.');
					}

					break;
				case "email":
					if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
						failedRules.push('This field must be an email.');
					}

					break;
				case "phone":
					if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value.replace(' ', ''))) {
						failedRules.push('This field must be a phone number.');
					}

					break;
			}
		}

		if ($this.is('select') && $this.hasClass('add-hardware-device')) {
			if ($this.parent().find('.affected-items').find('li').length === 0) {
				failedRules.push('Add at least one hardware device.');
			}
		}

		if (failedRules.length > 0) {
			$this.addClass('is-invalid');
			let $parent = $this.parent();

			if ($parent.hasClass('problem-type-picker')) $parent = $parent.parent();

			for (let i = 0; i < failedRules.length; i++) {
				$parent.append(`
					<div class="invalid-feedback">${failedRules[i]}</div>
				`);
			}

			return false;
		}
		
		$this.addClass('is-valid');

		return true;
	};
})(jQuery);