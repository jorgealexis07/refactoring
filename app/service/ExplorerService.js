const Reader = require("../utils/Reader");
const readExplorers = Reader.getreadJsonFile("explorers.json");

class ExplorerService{
    
    static filterByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        var cantExpl = explorersInNode.length;
        return cantExpl;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    
}
module.exports = ExplorerService;

ExplorerService.filterByMission(readExplorers,"node");
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");