const ExplorerService = require("./../../lib/service/ExplorerService")
const ReaderFile = require("./../../lib/service/ExplorerService")
const explorers = Reader.readJsonFile("explorers.json"); 

describe("Test for Explorer service", () => {

    test('1. Create a new user using the ExplorerService', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = ExplorerService.filterByMission(explorers,"node") 
        expect(user.explorers).toBe(explorers)
        expect(user.mission).toBe("node")
        

    } )


    

    
    


    


})