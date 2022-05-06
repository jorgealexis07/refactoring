const ReaderFile = require("../../app/utils/reader")

describe("Test for reader", () => {

    test('1. Prueba de lector de archivo explorers.json', () => {
        const reader = ReaderFile.getreadJsonFile("explorers.json")
        expect(reader.path).toBe("explorers.json")
    } )

    
    


    


})