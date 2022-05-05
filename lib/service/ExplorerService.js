const Reader = require("./../utils/reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

class ExplorerService{
    static filterByMission(explorers, mission)
    static getAmountOfExplorersByMission(explorers, mission)
    static getExplorersUsernamesByMission(explorers, mission)
}
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

module.exports= ExplorerService;