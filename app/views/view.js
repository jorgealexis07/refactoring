// Clase anterior con la que obtenemos los explorers
const Reader = require("../utils/Reader");
const explorers = Reader.getreadJsonFile("explorers.json");
const ExplorerService = require("./../service/ExplorerService");
const FizzbuzzService = require("./../service/FizzbuzzService");

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node"); 
ExplorerService.getExplorersUsernamesByMission(explorers, "node");


const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
const explorersInNodeTrick = ExplorerService.filterByMission(explorers, "node").map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeTrick)

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}