const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('slip15b.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page.");
            }
            else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        });

    }
    else if (req.url == '/about') {
        fs.readFile('slip15bAbout.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page.");
            }
            else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url == '/contact') {
        fs.readFile('slip15bContact.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page.");
            }
            else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url == '/services') {
        fs.readFile('slip15bServices.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page.");
            }
            else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        })
    }
    else{
        res.writeHead(404);
        res.end('Page not found'); 
    }
});
myserver.listen(8080);
console.log("listnin on 8080");