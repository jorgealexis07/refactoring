const fs = require("fs");
class Reader{
  
    static readJsonFile(data)
    {
        const rawdata = fs.readFileSync(data);
        const explorers = JSON.parse(rawdata);
    }
}

exports.data= Reader;