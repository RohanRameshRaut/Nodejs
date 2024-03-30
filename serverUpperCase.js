const http = require('http');

http.createServer((req, res)=>{
    var str = "<h1> hello world! </h1>";
    res.write(str.toUpperCase());
    res.end();
}).listen(8000);
console.log("listning on 8000");
