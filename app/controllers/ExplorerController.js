const ExplorerServ = require("./../../app/service/ExplorerService");
const FizzbuzzServ = require("./../../app/service/FizzbuzzService");
const Reader = require("./../../app/utils/Reader");
var read = Reader.getreadJsonFile("explorers.json")
class ExplorerController{
    static getExplorersByMission(mission){
        var filterforMission = ExplorerServ.filterByMission(read,mission)
        return filterforMission;
    }

    static getExplorersUsernamesByMission(mission){
        var getusernamebymission = ExplorerServ.getExplorersUsernamesByMission(read, mission);
        return getusernamebymission
    }


}
module.exports = ExplorerController;

//console.log(ExplorerController.getExplorersByMission("node"));
console.log(ExplorerController.getExplorersUsernamesByMission("node"));
