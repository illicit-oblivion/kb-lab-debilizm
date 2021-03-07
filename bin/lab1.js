import * as readline from "readline";
import * as fs from "fs";


function writeToFile (filename, data) {
    fs.writeFileSync(filename, data);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function copyFile () {
    fs.copyFile('./privateDirectory/test.txt', './directory/destination.txt', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
}

rl.question("Enter the text you want to insert in you private folder file ", function(text) {
    writeToFile('./privateDirectory/test.txt', text )
    rl.question("Do you want to copy file y/n ", function(toCopy) {
        if (toCopy === 'y') {
            copyFile();
        }
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nFinished!!!");
    process.exit(0);
});