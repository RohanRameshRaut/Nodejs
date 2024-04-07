// read two file names from user and append contents of first file into second file and show the content.

const fs = require('fs');
const prompt = require('prompt-sync')();

var f1 = prompt("Enter first file: ");
var f2 = prompt("Enter secont file: ");

fs.appendFile(f2, fs.readFileSync(f1, 'utf-8'), (err)=>{
    if(err) throw err
    console.log("appended");
});

fs.readFile('f2.txt', (err, data)=>{
    if(err) throw err
    console.log(data.toString());
});
