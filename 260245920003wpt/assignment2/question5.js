const fs = require('fs');

// 1. Create and write file in synchronous mode
const data = "Hello! This file is created using synchronous write in Node.js.";

fs.writeFileSync("sample.txt", data);

console.log("File created and data written successfully.");

// 2. Read file in asynchronous mode
fs.readFile("sample.txt", "utf8", (err, content) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("File Content:");
    console.log(content);
});