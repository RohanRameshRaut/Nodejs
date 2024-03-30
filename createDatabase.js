const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'ROHAN'
    // port: 3306
});
con.connect((err) => {
    if (err) throw err
    console.log("Connected to Database.");


    //------> Creating database ROHAN <------

    // var sql = "CREATE DATABASE ROHAN";
    // con.query(sql, (err, data)=>{
    //     if(err) throw err
    //     console.log("Database Created successfully!");
    // });

    // ------> Creating table1 in ROHAN database <-----

    // var sql = "Create table table1(id int, name varchar(20), address varchar(50), salary float(8, 2));";
    // con.query(sql, (err, data)=>{
    //     if(err) throw err
    //     console.log("Table created.");
    // });

    // Insert row in table ------------------>>>

    // var sql = "Insert into table1(id, name, address, salary) values(101, 'KHS', 'Pune', 90000.90 )";
    // con.query(sql, (err, data)=>{
    //     if(err) throw err
    //     console.table(data);
    // })

    var sql = "select * from table1";
    con.query(sql, (err, data)=>{
        if(err) throw err
        console.table(data);
        //  OR

        // console.log('Id\tName\tAddress\tSalary');
        // console.log('.................................');
        // data.forEach((row)=>{
        //     console.log(`${row.id}\t${row.name}\t${row.address}\t${row.salary}`);
        // });
        // OR

        // for(i=0; i<(data.length); i++){
        //     console.log(`${data[i].id}\t${data[i].name}\t${data[i].address}\t${data[i].salary}`);
        // }
    });
});