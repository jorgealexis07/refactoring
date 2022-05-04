const fs = require("fs");
class Reader{
  
    static readJsonFile(rawdata)
    {
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
        
    }
}

