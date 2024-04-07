const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('slip11b.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end('Internal server error')
            }
            else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(400, { 'Content-type': 'text/plain' });
        res.end('Page not found');
    }
});
myserver.listen(8081);
console.log("listning on 8081");