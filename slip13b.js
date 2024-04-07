const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'collage'
});

con.connect((err)=>{
    if(err) throw err
    console.log("connected");

    // var sql = "create database collage";
    // con.query(sql, (err, data)=>{
    //     if(err) throw err
    //     console.log("Collage dataBase created.");
    // });

    // var sql = "create table student01(rno int primary key, name varchar(20), class varchar(20), marks int)";
    // con.query(sql, (err, data)=>{
    //     if(err) throw err
    //     console.log("Table created");
    // });

    // var sql = "insert into student01(rno, name, class, marks) values?";
    // var values = [[66, 'Rohan', 'SYBBACA', 90], [4, 'Aryan', 'SYBBACA', 70], [5, 'Akhilesh', 'SYBBAIB', 84]];
    // con.query(sql, [values], (err, data)=>{
    //     if(err) throw err
    //     console.log("Data added");
    // });

    var sql = "Update student01 set marks = 97 where rno = 66";
    con.query(sql, (err, data)=>{
        if(err) throw err
        console.log(data);
    });




});
