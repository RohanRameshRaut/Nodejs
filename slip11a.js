const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    fs.readFile('slip11a.html', (err, data) => {
        if(err) throw err
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        res.end();
    });
});
myserver.listen(8080);
console.log("listning on port 8080");
