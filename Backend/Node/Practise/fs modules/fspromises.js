const fs = require("fs/promises");

(async function file() {

    let b = await fs.appendFile("varun.txt", " this append text for varun.txt");

    let a =await fs.readFile("varun.txt");

    console.log(a.toString());
})();