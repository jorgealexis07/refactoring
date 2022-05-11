const ExplorerService = require("./../../app/service/ExplorerService");
const Reader = require("./../../app/utils/Reader");



describe("Test for Explorer service", () => {

    test("1. Calculated explorers number using the ExplorerService in node", () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.getreadJsonFile("explorers.json"); 
        const explorer = ExplorerService.filterByMission(explorers,"node"); 
        expect(explorer.length).toBe(10); 
    } );

    test("2. Calculated explorers number using the ExplorerService in java", () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const explorers = Reader.getreadJsonFile("explorers.json"); 
        const explorer = ExplorerService.filterByMission(explorers,"java"); 
        expect(explorer.length).toBe(5); 
    } );
    
    


    
});