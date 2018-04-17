$(() => {
    let $heading = $('.mia-panel-heading'),
        $select  = $heading.find('select'),
        $img     = $heading.find('img');

    devices.forEach((device) => {
        $select.append(`
            <option value="${device.id}">#${device.id} – ${device.serial_no}</option>
        `);
    });

        $('#change-hardware option[value="' + (device ? device.id : "") + '"]').prop('selected', true);

    $('#change-hardware').change(function() {
        let hardwareID = $(this).val();

        window.location.href = window.location.pathname + '?page=hardware_update&id=' + hardwareID;
    });









    tinyMCE.init({
        selector: 'textarea',
        branding: false,
        setup: function (editor) {
            editor.on('change', function () {
                editor.save(); // keep hidden textarea up to date
            });
        }
    });





});
