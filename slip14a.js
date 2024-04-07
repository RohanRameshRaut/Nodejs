const fs = require('fs');
const prompt = require('prompt-sync')();

var word = prompt("Enter a word to search: ");

fs.readFile('slip14a.txt','utf-8', (err, data) => {
    if (err) throw err
        if (data.includes(word)) {
            console.log("found the word " + word);
        }
        else {
            console.log("Not found the word " + word);

        }
    

});
