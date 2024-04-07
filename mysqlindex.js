const http = require('http');

const myserver = http.createServer((req, res)=>{
    let sql = "SELECT * FROM EMPLOYEE_INFO";
    res.write(sql);
    
});

myserver.listen(8000,()=>{
    console.log("listening to the port no 8000");
});


