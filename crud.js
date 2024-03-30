const fs = require('fs');
const rline = require('readline');
const http = require('http');

const cmd = rline.createInterface(process.stdin, process.stdout);

cmd.question(`Enter the name of a 1st file: `, (firstFile) => {
    fs.readFile(firstFile, 'utf-8',(err, data1) => {
        if (err) throw err
        cmd.question(`Enter 2nd file name: `, (secondFile) => {
            fs.readFile(secondFile, 'utf-8',(err, data2) => {
                if (err) throw err
                const combinedData = data1.toUpperCase() + '\n' + data2.toUpperCase();
                fs.writeFile('combined.txt', combinedData, (err) => {
                    if (err) throw err;
                    console.log("created combined.txt!");
                });
            });
        });

    });
});

