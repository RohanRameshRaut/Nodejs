const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

con.connect((err, data)=>{
    if(err) throw err
    console.log("Connected to delete!");

    var sql = "drop database employee_database01";
    con.query(sql, (err, data)=>{
        if(err) throw err
        console.log("Delete Database deleted");
    });

})