class FizzbuzzService{
    static applyValidationInExplorer(explorer){

            if(explorer.score%3 === 0){
                explorer = explorer.trick = "FIZZ";
                return explorer;
            }else if (explorer.trick == explorer.score){
                return explorer;
            }
            else if (explorer.score%5 === 0){
                explorer = explorer.trick = "BUZZ";
                return explorer;
            }else if(explorer.trick = explorer.score){
                return explorer;
            }
            else if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer = explorer.trick = "FIZZBUZZ";
                return explorer;
            }else if (explorer.trick = explorer.score){
                return explorer;
            }
    

    }


}
module.exports = FizzbuzzService;