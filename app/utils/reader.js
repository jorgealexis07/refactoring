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
exports.data= Reader;


const user = Reader.getreadJsonFile("explorers.json");
console.log(user);