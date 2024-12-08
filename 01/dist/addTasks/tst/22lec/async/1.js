const fs = require("fs");
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding: "utf-8" });
    for await (let chunk of stream) {
        parseChunk(chunk);
    }
    function parseChunk(portion) {
        console.log(`---> ${portion}`);
    }
}
parseFile("./1.txt");
//# sourceMappingURL=1.js.map