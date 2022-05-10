const FizzbuzzService = require("./../../app/service/FizzbuzzService");

describe("Test for FizzBuzzService", () => {

test("Return an error object when try to create a new user with a payload with inavalid properties", () =>{
    const explorer1 = {name: null, score: 1}
    const result = FizzbuzzService.applyValidationInExplorer(explorer1)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
})

test("Create a explorer by a given valid payload = FIZZ", () =>{
    const explorer = {name: "Explorer3", score: 3}
    const result = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(result.trick).toBe("FIZZ")
})

test("Create a explorer by a given valid payload = BUZZ", () =>{
    const explorer = {name: "Explorer5", score: 5}
    const result = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(result.trick).toBe("BUZZ")
})


})



/* const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}   */