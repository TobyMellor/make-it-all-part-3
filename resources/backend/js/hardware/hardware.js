$(() => {
    $(document).ready(function () {
        console.log("HARDWAREJS LOADED");
    });

    $('.hardware-type-select').on('change', function () {
        if (this.value !== "new") {
            hideTypeForm(this);
        }

    });
    $('.hardware-make-select').on('change', function () {
        if (this.value !== "new") {
            hideMakeForm(this);
        }

    });


});

function hideTypeForm(select) {
    //Get closest type form
    let typePanel = $(select).closest('.accordion-body').find('#type-information');
    if (typePanel.hasClass('expanded')) {
        typePanel.removeClass('expanded');
    }

}

function hideMakeForm(select) {
    //Hides closes select form
    let makePanel = $(select).closest('.accordion-body').find('#make-information');
    if (makePanel.hasClass('expanded')) {
        makePanel.removeClass('expanded');
    }

}
