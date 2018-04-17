export default class HardwareManager {
        constructor(deivces, types, makes) {
        this.devices       = deivces;
        this.types         = types;
        this.makes         = makes;

        // populate the select field in the call panel
        this.populateSelectField($('.hardware-type-select'), types);
        this.populateSelectField($('.hardware-make-select'), makes);


    }

        /**
     * Adds types to select field
     *
     * @param {DOM} $selectField the <select> field to populate
     * @param {Array} types Array of types
     */
    populateSelectField($selectField, types) {

        types.forEach(type => {
            $selectField.append(`
                <option value="${type.type}">${type.type}</option>
            `);
        });
                    $selectField.append(`
                <option value="new">New</option>
            `);



    }

}
