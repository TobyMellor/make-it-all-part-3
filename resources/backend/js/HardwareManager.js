export default class HardwareManager {
        constructor(deivces, types) {
        this.devices       = deivces;
        this.types         = types;

        // populate the select field in the call panel
        this.populateSelectField($('.hardware-type-select'), types);


    }

        /**
     * Adds types to select field
     *
     * @param {DOM} $selectField the <select> field to populate
     * @param {Array} types Array of types
     */
    populateSelectField($selectField, types) {

        types.forEach(type => {
            console.log("hellssso");
            $selectField.append(`
                <option value="${type.type}">${type.type}</option>
            `);
        });
        //Add a new selection to input a new type
         $selectField.append(`
                <option value="new">New</option>
            `);


    }

}
