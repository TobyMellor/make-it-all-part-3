window.$ = window.jQuery = require("jquery");

// Datepicker
require("jquery-ui/ui/widgets/datepicker");

// Timepicker
require("jquery-ui/ui/widgets/slider");
require("./jquery-ui-timepicker-addon");

// Bootstrap
window.Popper = require("./popper");
require("./bootstrap");
require("./bootstrap-select");

// Metrics
require("./chart.js");

// Turbolinks
window.Turbolinks = require("turbolinks");

// https://stackoverflow.com/a/8407771/2957677
// Modified by /1549818 to support dot notation
(function($){
	$.fn.serializeObject = function(shouldValidate = false) {
		var self = this,
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
			$('.is-valid, .is-invalid, .card-header.red-highlight, .card-header.green-highlight').removeClass('is-valid is-invalid red-highlight green-highlight');
		
			clearTimeout(validationTimeout);

			validationTimeout = setTimeout(function() {
				$('.is-valid, .is-invalid, .card-header.red-highlight, .card-header.green-highlight').removeClass('is-valid is-invalid red-highlight green-highlight');
				$('.invalid-feedback').fadeOut(250, function() {
					$(this).remove();
				});
			}, 15000);
		}

		$fields.not(':disabled').map(function() {
			// skip invalid keys
			if (!patterns.validate.test(this.name)) {
				return;
			}

			var k,
				keys = this.name.match(patterns.key),
				merge = this.value,
				reverse_key = this.name,
				validation_rules = this.attributes.hasOwnProperty('validation') ? this.attributes.validation.value : null;

			if (shouldValidate && validation_rules !== null) {
				var response = $(this).validate();

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
			$(this).find('.card:not(.existing) .is-valid').closest('.card').find('.card-header').addClass('green-highlight'); // highlight all cards green first
			$(this).find('.card:not(.existing) .is-invalid').closest('.card').find('.card-header').removeClass('green-highlight').addClass('red-highlight'); // highlight any cards with errors in them
			
			// open accordion with error
			if ($(this).find('.view-accordion.fa-chevron-down').first().closest('.card-header.green-highlight').length === 1) {
				$(this).find('.card-header.red-highlight .view-accordion').click();
			}
		}

		return json;
	};

	$.fn.validate = function() {
		var $this           = $(this),
			value           = $this.val(),
			validationRules = $this.attr('validation').split('|'),
			failedRules     = [];

		for (let i = 0; i < validationRules.length; i++) {
			var rule = validationRules[i];

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

		if ($this.is('select')) { // style support for bootstrap-select
			if ($this.hasClass('add-hardware-device')) {
				if ($this.closest('.affected-items-section').find('.affected-items').find('li[data-type="hardware"]').length === 0) {
					failedRules.push('Add at least one hardware device.');
				}
			}

			$this = $this.siblings('button.dropdown-toggle');
		}

		if (failedRules.length > 0) {
			$this.addClass('is-invalid');

			if (!$this.parent().is('.assigned-to-options')) {
				var $invalidFeedback = $('<div class="invalid-feedback">');

				for (var i = 0; i < failedRules.length; i++) {
					$invalidFeedback.append(failedRules[i] + (i >= 1 ? '<br />' : ''));
				}

				$this.closest('.form-group').append($invalidFeedback);
			}

			return false;
		}
		
		$this.addClass('is-valid');

		return true;
	};
})(jQuery);

/**
 * Resolve a dot notation path string through an object
 * From https://stackoverflow.com/a/22129960/1549818
 */
Object.resolve = function(path, obj) {
	return path.split('.').reduce(function(prev, curr) {
		return prev ? prev[curr] : undefined;
	}, obj || self);
};
