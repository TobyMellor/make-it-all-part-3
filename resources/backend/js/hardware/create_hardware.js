import HardwareManager from "../HardwareManager";

$(() => {
    let hardwaremanager = new HardwareManager(devices, types, makes);

    $(document).ready(function() {
        // add button listeners for new type/make.
        addButtonListeners(this);
        addTypeSelectActions($('.hardware-type-select'));
        addMakeSelectActions($('.hardware-make-select'));
    });

    // make the chevron handle go up/down when an accordion is expanded/minimized
    $(document).on('click', '.accordion-handle', function() {
        $('.accordions .accordion-handle .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-up');
        $('.accordions .accordion-handle.ui-state-active .fa:not(.fa-trash-o)').removeClass().addClass('fa fa-chevron-down');
    });

    $(document).on('click', '.accordion-handle .accordion-actions .fa-trash-o', function() {
        if (!confirm('Are you sure you want to delete this hardware device?')) return;

        let $accordionHandle = $(this).closest('.accordion-handle');

        $accordionHandle.add($accordionHandle.next()).fadeOut(250, function() {
            $(this).remove();

            // if no accordions are expanded, expand the first
            if ($('.accordion-handle.ui-state-active').length === 0) $('.accordion-handle').first().click();
        });
    });

    $('#add-additional-hardware').click(function() {
        // deinit all TinyMCE's before cloning
        tinyMCE.EditorManager.editors.forEach((editor) => {
            tinyMCE.get(editor.id).remove();
        });

        let $accordions    = $(this).closest('.mia-panel').find('.accordions'),
            newAccordionId = Number($('.accordions .accordion-handle:nth-last-child(2) .number-circle').text()) + 1,
            $newAccordion  = cloneAccordion($accordions, newAccordionId);

        clearAccordion($newAccordion, newAccordionId);

        $accordions.append($newAccordion);
        $newAccordion.find('input[type=radio]').first().click();

        // reinitialize after appending new accordion
        initTinyMCE();
        $accordions.accordion('refresh');
        $newAccordion.click(); // expand new accordion
    });

    initTinyMCE();
    initAccordions();
    clearAccordion($('.mia-panel-body')); // clear all fields
});

function addTypeSelectActions($select) {
    $($select).on('change', function() {
        if (this.value !== "new") {
            hideTypeForm(this);
        }
    });
}

function addMakeSelectActions($select) {
    $($select).on('change', function() {
        if (this.value !== "new") {
            hideMakeForm(this);
        }
    });
}

function hideTypeForm(select) {
    // get closest type form
    let typePanel = $(select).closest('.accordion-body').find('#type-information');

    if (typePanel.hasClass('expanded')) {
        typePanel.removeClass('expanded');
    }
}

function hideMakeForm(select) {
    // hides closes select form
    let makePanel = $(select).closest('.accordion-body').find('#make-information');
    
    if (makePanel.hasClass('expanded')) {
        makePanel.removeClass('expanded');
    }
}

function addButtonListeners($accordian) {
    let types = $($accordian).find('.add-type'),
        makes = $($accordian).find('.add-make');

    // expand type section on button press.
    types.on('click', function() {
        let typePanel  = $(this).closest('.accordion-body').find('#type-information'),
            typeSelect = $(this).closest('.accordion-body').find('.hardware-type-select');

        if (typePanel.hasClass('expanded')) {
            typePanel.removeClass('expanded');

            // reset select too
            typeSelect.val($("#target option:first").val());
        } else {
            typePanel.addClass('expanded');

            $(this).closest('.accordion-body').find('.hardware-type-select').val('new');
        }
    });

    // expand make section on button press.
    makes.on('click', function() {
        let makePanel  = $(this).closest('.accordion-body').find('#make-information'),
            makeSelect = $(this).closest('.accordion-body').find('.hardware-make-select');

        if (makePanel.hasClass('expanded')) {
            makePanel.removeClass('expanded');

            //Should also reset the select.
            makeSelect.val($("#target option:first").val());
        } else {
            makePanel.addClass('expanded');

            $(this).closest('.accordion-body').find('.hardware-make-select').val('new');
        }
    });
}

function cloneAccordion($accordions, newAccordionId) {
    let $existingAccordion = $accordions.find('.accordion-handle:first-child, .accordion-body:nth-child(2)').wrapAll('<div>'),
        $newAccordion      = $existingAccordion.clone().unwrap();

    $existingAccordion.unwrap();

    // delete accordion button
    $newAccordion.find('.accordion-actions').prepend('<i class="fa fa-trash-o"></i>');

    // replace name of input fields, e.g. tickets[1].x to tickets[2].x
    $newAccordion.last().find('input, textarea, select').each((i, input) => $(input).prop('name', $(input).prop('name').replace(/hardware\[.*?\]\s?/g, 'hardware[' + newAccordionId + ']')));
    $newAccordion.last().attr('data-accordion-id', newAccordionId);

    return $newAccordion;
}

function clearAccordion($accordion, newAccordionId, affectedItemsManager = null, expertiseTypeManager = null) {
    // set input/textarea/select fields to default values
    $accordion.find('select').prop('selectedIndex', 0);
    $accordion.find('input[type=text], textarea').val('');

    //Refresh accoridan stuff
    $accordion.find('#type-information').removeClass('expanded');
    $accordion.find('#make-information').removeClass('expanded');
    addButtonListeners($accordion);

    addTypeSelectActions($accordion.find('.hardware-type-select'));
    addMakeSelectActions($accordion.find('.hardware-make-select'));

    // set the accordion number and the new ticket text in the accordion handle
    $accordion.find('.accordion-icon .number-circle').text(newAccordionId);
    $accordion.find('.accordion-title').text('New Hardware Item');
}

function initTinyMCE() {
    tinyMCE.init({
        selector: 'textarea',
        branding: false
    });
}

function initAccordions() {
    $('.accordions').accordion({
        heightStyle: 'content',
        handle: '.accordion-handle',
        icons: false,
        active: false,
        collapsible: true
    });
}