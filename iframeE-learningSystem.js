var fs = require('fs')
var http = require('http')
var con = http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('iframe.html', function (err, data) {
            if(err) throw err
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
        })
    }
    else if (req.url == '/html_tutorial') {
        fs.readFile('html_tutorial.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
        })
    }
    else if (req.url == '/javascript_tutorial') {
        fs.readFile('javascript_tutorial.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);

        });
    }
    else if (req.url == '/nodejs_tutorial') {
        fs.readFile('nodejs_tutorial.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);

        });
    }
    else if (req.url == '/css_tutorial') {
        fs.readFile('css_tutorial.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);

        });
    }
    else {
        res.end();
    }
});
con.listen(9010);
console.log("listning on 9010.");