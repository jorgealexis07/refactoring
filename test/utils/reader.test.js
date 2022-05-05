const ReaderFile = require("../../lib/utils/reader")

describe("Test for reader", () => {

    test('1. Create a new user using the UserService', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const reader = ReaderFile.readJsonFile("explorers.json")
        expect(reader.ReaderFile.readJsonFile).toBe("explorers.json")
    } )

    
    


    


})