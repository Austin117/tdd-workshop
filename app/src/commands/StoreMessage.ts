import ICommand from "../../types/ICommand";
import { DataModelSet } from "../../types/DataModels";

const Dject = require('dject/class/utilities/Dject');

class StoreMessage implements ICommand {
    public static '@dependencies' = [
        'ModelsService'
    ]

    private modelSet: DataModelSet
    
    constructor(dependencyMap: any) {
        this.modelSet = dependencyMap.ModelsService.getModels()
    }

    exec(userInput = []) {
        this.modelSet.message.create({
            userInput: userInput.join(' ')
        });
    }

    static build(dependencies: any[]) {
        return Dject.build(StoreMessage, dependencies);
    }
}

export default Dject.prepareExport(StoreMessage);