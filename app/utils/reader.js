fs = require("fs");
class Reader{

    static getreadJsonFile(path)
    {
        var explorers;
        var rawdata = fs.readFileSync(path);
        explorers = JSON.parse(rawdata);
        return explorers;
    }
}
module.exports= Reader;

/* const read = Reader.getreadJsonFile("explorers.json");
console.log(read); */