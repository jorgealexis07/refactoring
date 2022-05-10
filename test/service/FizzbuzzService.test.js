const FizzbuzzService = require("./../../app/service/FizzbuzzService");

describe("Test for FizzBuzzService", () => {

test("Return an error object when try to create a new user with a payload with inavalid properties", () =>{
    const explorer1 = {name: null, score: 1}
    const result = FizzbuzzService.applyValidationInExplorer(explorer1)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
})

test("Create a explorer by a given valid payload = 1", () =>{
    const explorer1 = {name: "Explorer1", score: 1}
    const result = FizzbuzzService.applyValidationInExplorer(explorer1)
    expect(result.trick).toBe(1)
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

test("Create a explorer by a given valid payload = FIZZBUZZ", () =>{
    const explorer15 = {name: "Explorer15", score: 15}
    const result = FizzbuzzService.applyValidationInExplorer(explorer15)
    expect(result.trick).toBe("FIZZBUZZ")
})

})



/* const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

  */