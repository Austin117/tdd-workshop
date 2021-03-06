import { DataModelSet } from "../../types/DataModels";
import ICommand from "../../types/ICommand";

const Dject = require('dject/class/utilities/Dject');

class SampleCommand implements ICommand {
    public static '@dependencies' = [
        'ModelsService'
    ]
    
    private modelSet: DataModelSet

    constructor(dependencyMap: any) {
        this.modelSet = dependencyMap.ModelsService.getModels()
    }

    exec(userInput = []) {
        this.modelSet.Sample.create({
            userInput: userInput.join(' ')
        });
    }

    static build(dependencies: any[]) {
        return Dject.build(SampleCommand, dependencies);
    }
}

export default Dject.prepareExport(SampleCommand);