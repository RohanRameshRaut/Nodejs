const http = require('http');

const myserver = http.createServer((req, res)=>{
     switch(req.url){
        case "/":
            res.end("<h1> Home </h1>");
            break;
        case "/about":
            res.end("<h1> About </h1>");
            break;
        case "/contact":
            res.writeHead({"content-type":"text/html"});
            res.end("<h1> Contact </h1>");
            break;
        default:
            res.writeHead(404);
            res.end("404 Not Found");
    }
});

myserver.listen(8000,()=>{
    console.log("listening to the port no 8000");
});
