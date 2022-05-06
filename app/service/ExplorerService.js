const Reader = require("../utils/Reader");
const readExplorers = Reader.getreadJsonFile("explorers.json");

class ExplorerService{
    
    static filterByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    
    
}
module.exports = ExplorerService;

ExplorerService.filterByMission(readExplorers,"node");
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");