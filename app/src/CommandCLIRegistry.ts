import ICommand from '../types/ICommand';

const CliBuilder = require('clibuilder');
const Dject = require('dject/class/utilities/Dject');

class CommandCLIRegistry {
    static '@dependencies' = [
        'SampleCommand', 'StoreMessage'
    ]

    public sampleCommand: ICommand;
    public storeMessage: ICommand;

    constructor(dependencyMap) {
        this.sampleCommand = dependencyMap.SampleCommand;
        this.storeMessage = dependencyMap.StoreMessage;
    }

    register() {
        return CliBuilder
            .build()
            .registerCommand({
                name: 'sample',
                action: (args: [any]) => this.sampleCommand.exec(args)
            })
            .registerCommand({
                name: 'storeMessage',
                action: (args: [any]) => this.storeMessage.exec(args)
            });
    }

    static build(dependencies) {
        return Dject.build(CommandCLIRegistry, dependencies);
    }
}

export default Dject.prepareExport(CommandCLIRegistry);
