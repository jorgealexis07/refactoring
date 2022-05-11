class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer === null){
            console.log("Error es null");
            return {error: "El payload no existe."};
        } 
        else if(typeof explorer.name === "string" && typeof explorer.score === "number"){
            
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }
            else if(explorer.score%3 === 0){  
                explorer.trick = "FIZZ";
                return explorer;
            }
            
            else if (explorer.trick == explorer.score){
                return explorer;
            }
            else if (explorer.score%5 === 0){
                explorer.trick = "BUZZ";
                return explorer;
            }else if(explorer.trick = explorer.score){
                return explorer;
            }
            else if (explorer.trick = explorer.score){
                return explorer;
            }

        }
        else{
            return {error: "Error, las propiedades del payload necesitan tener un valor válido"};
        }
    }

    static applyValidationInNumber(number){
        if(number === 1){
            var result = number;
            return result;
        }
        else if(number === 3){
            var result = "FIZZ";
            return result;
        }
        else if(number === 5){
            var result = "BUZZ";
            return result;
        }
        else if(number === 15){
            var result = "FIZZBUZZ";
            return result;
        }
    }

}
module.exports = FizzbuzzService;
