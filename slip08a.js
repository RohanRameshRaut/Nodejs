// read two file names from user and append contents of first file into second file and show the content.

const fs = require('fs');
const prompt = require('prompt-sync')();

var f1 = prompt("Enter first file: ");
var f2 = prompt("Enter secont file: ");

var f1d = fs.readFileSync(f1, "utf-8");
var f2d = fs.readFileSync(f2, "utf-8");

var combinedData = f1d + f2d;

fs.appendFile('f3.txt', combinedData, (err) => {
    if (err) throw err
    console.log("added!");
});

fs.readFile('f3.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString());
});

console.log(combinedData);