const fs = require('fs');
const rline = require('readline');

const cmd = rline.createInterface(process.stdin, process.stdout);

cmd.question(`Enter the name: `, (name) => {
    fs.stat(name, (err, stats) => {
        if (err) throw err
        // console.log(stats);
        console.log("isFile?" + stats.isFile());
        // console.log("isDirectory?"+ stats.isDirectory());
        console.log(`isDirectory${stats.isDirectory()}`); // it also works
        const st = stats.isFile();

        console.log("file before truncate.");
        const fs1 = fs.readFileSync(name, 'utf-8');
        console.log(fs1);

        if (st == true) {
            fs.open(name, 'r+', (err, data) => {
                fs.ftruncate(data, 7, (err) => {
                    if (err) throw err
                    console.log("file truncate succesfully.")
                    console.log("file after truncate.");
                    const fs2 = fs.readFileSync(name, 'utf-8');
                    console.log(fs2);
                });
            });

        }
    });
});