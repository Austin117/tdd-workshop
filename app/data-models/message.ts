const DataModel = require("datamodel");

export default class Message extends DataModel {
    constructor() {
        super();

        this.name = 'Message';

        this.setDataDefinition(
            DataModel.Object({
                content: {
                    type: 'string'
                }
            })
        );
    }
}