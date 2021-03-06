const ExplorerServ = require("./../../app/service/ExplorerService");
const FizzbuzzServ = require("./../../app/service/FizzbuzzService");
const Reader = require("./../../app/utils/Reader");
var read = Reader.getreadJsonFile("explorers.json");
class ExplorerController{
    static getExplorersByMission(mission){
        var filterforMission = ExplorerServ.filterByMission(read,mission);
        return filterforMission;
    }

    static getExplorersUsernamesByMission(mission){
        var getusernamebymission = ExplorerServ.getExplorersUsernamesByMission(read, mission);
        return getusernamebymission;
    }

    static getExplorersAmonutByMission(mission) {
        var getexplorersamountbymission = ExplorerServ.getAmountOfExplorersByMission(read, mission);
        return getexplorersamountbymission;
    }

    static getValidationFizzBuzz(num){
        var getvalidationfizzbuzz = FizzbuzzServ.applyValidationInNumber(num);
        return getvalidationfizzbuzz;
    }

    static getExplorersbyStack(stack){
        var getexplorersbystack = ExplorerServ.getExplorersUsernamesfilterByStack(read,stack);
        return getexplorersbystack;
    }
}
module.exports = ExplorerController;

//console.log(ExplorerController.getExplorersByMission("node"));
//console.log(ExplorerController.getExplorersUsernamesByMission("node"));
//console.log(ExplorerController.getExplorersAmonutByMission("node"));
