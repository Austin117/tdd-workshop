import ICommand from '../../app/types/ICommand';

import container from '../../app/container';
import { IDataModel } from '../../app/types/DataModels';

const { assert } = require('chai');
const sinon = require('sinon');
const givenWhenThen = require('fluent-gwt').configure();

//duplicate code
class SampleModelFake implements IDataModel {
    createStub: any;

    constructor() {
        this.createStub = sinon.stub();

        this.create = (...args) => this.createStub(...args);
    }

    create() { }
    delete() { }
    deleteById() { }
    filter() { return []; }
    find() { }
    update() { }
    val() { }
}

describe('storeMessage', function () {
    let modelFakes;
    let storeMessage: ICommand;

    beforeEach(function () {
        const testContainer = container.new();

        modelFakes = {
            Message: new SampleModelFake()
        };

        testContainer.build('ModelsService').setModels(modelFakes);

        storeMessage = testContainer.build('StoreMessage');
    });

    it('stores a message when storeMessage commands is ran by user at the terminal', function () {
        const message = 'saaa Dude'; 

        return givenWhenThen
            .arrange(
                'a user is at the terminal',
                () => [message]
            )
            .act(
                'runs storeMessage command with a mesaage',
                (message) => storeMessage.exec(message)
            )
            .assert(
                'the message is stored',
                () => {
                    const actualMessage = modelFakes.Message.createStub.args[0][0]; 

                    assert.equal(
                        JSON.stringify(actualMessage),
                        `{"userInput":"${message}"}`
                    );
                }
            );
    });

});
