import * as fs from "fs";


fs.watch("./directory", (eventType, filename) => {
    if(eventType === 'rename') {
        console.log("\nThe file", filename, "was added!");
    }
});