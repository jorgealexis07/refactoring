const ExplorerService = require("./../../app/service/ExplorerService")
const Reader = require("./../../app/utils/Reader")



describe("Test for Explorer service", () => {

    test('1. Create a new user using the ExplorerService', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.getreadJsonFile("explorers.json"); 
        const explorer = ExplorerService.filterByMission(explorers,"node") 
        expect(explorer.mission).toBe("node")
    } )


    

   

    

    
    


    


})