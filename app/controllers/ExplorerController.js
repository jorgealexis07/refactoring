const ExplorerServ = require("./../../app/service/ExplorerService");
const FizzbuzzServ = require("./../../app/service/FizzbuzzService");
const Reader = require("./../../app/utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        var read = Reader.getreadJsonFile("explorers.json")
        var filterforMission = ExplorerServ.filterByMission(read,mission)
        
        return filterforMission;
    }
}
module.exports = ExplorerController;

console.log(ExplorerController.getExplorersByMission("node"));
