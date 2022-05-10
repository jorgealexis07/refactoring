const Reader = require("../utils/Reader");
const readExplorers = Reader.getreadJsonFile("explorers.json");

class ExplorerService{
    static filterByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        
        return {mission: mission}
    }
    static getAmountOfExplorersByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        var cantExpl = explorersInNode.length;
        return cantExpl;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    
}
module.exports = ExplorerService;

//ExplorerService.filterByMission(readExplorers,"node");
//ExplorerService.getAmountOfExplorersByMission(readExplorers, "node");
//ExplorerService.getExplorersUsernamesByMission(readExplorers, "node");