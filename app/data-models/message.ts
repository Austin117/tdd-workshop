const DataModel = require("datamodel");

export default class Sample extends DataModel {
    constructor() {
        super();

        this.name = 'message';

        this.setDataDefinition(
            DataModel.Object({
                content: {
                    type: 'string'
                }
            })
        );
    }
}