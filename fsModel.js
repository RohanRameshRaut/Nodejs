const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('cs.html',(err, data)=>{
        if(err) throw err
        // res.writeHead(200, {'Conent-Type': 'text/html'}); // optional line as it is information related to: which type of content or file is running(meta-data info).
        res.write(data);
        res.end();
    });
}).listen(9000);

