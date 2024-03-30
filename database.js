const mysql = require("mysql");
const http = require("http");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
});

con.connect((error) => {
    if (error)
        throw (error);
    console.log("Connected to dataBase");

    // ------->>> Create table employee -------->>>>

    // var sql = "CREATE TABLE employee (e_id INT PRIMARY KEY, e_name VARCHAR(255), e_sal float(8,2))";
    //     con.query(sql, (err, result)=>{
    //         if(err) throw err
    //         console.log("Table created.")
    //     });


    // -----> Individual insertion in a table ---------->>>>>

    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (112, 'rohan', 11000)";
    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (113, 'aryan', 10000)";
    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (114, 'akhilesh', 9000)";
    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (115, 'pratik', 8000)";
    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (116, 'priyank', 10000)";


        // ---------------------->>>> Multiple insertion in a single line ------------->>>>>>>>>>

    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES?";
    // var VALUES = [[111, 'Rohan Raut',90000],[112, 'Aryan Harpude',80000],[113,'Priyank Nagori',85000],[114, 'Akhilesh Kulkarni', 50000], [115, 'Pratik Ghatwal', 70000]]; // this is how you can isert multiple rows in a table. 

    // con.query(sql, [VALUES], (err, result)=>{ // just use created variable as parameter in .query function in [VALUES] square brackets.
    //     if(err) throw err;
    //     console.log("Data inserted in the table.");
    // });

    // ------------>>> Updation in a table --------------------->>>>>>>>>

    // var sql = "UPDATE employee set e_id = 111, e_name = 'Rohan Raut', e_sal = 80000 WHERE e_id = 112;"
    // var sql = "UPDATE employee set e_id = 112, e_name = 'Aryan Harpude', e_sal = 60000 WHERE e_id = 113;"

    // var sql = "UPDATE employee set e_sal = 75000 WHERE e_name = 'Akhilesh Kulkarni';"
    // con.query(sql, (err, result)=>{ 
    //     if(err) throw err;
    //     console.log("Record udated succesfully in the table.");
    // });

    // ------------------>>>>>>>>> Deletion from table ----------->>>>>>>

    // var sql = "INSERT INTO employee (e_id, e_name, e_sal) VALUES (116, 'Ved Mundekar', 100000)"; --->>Inserted for deletion purpose.

    // var sql = "DELETE from employee WHERE e_name = 'Ved Mundekar';"
    // con.query(sql, (err, result)=>{ 
    //     if(err) throw err;
    //     console.log("Record deleted succesfully from the table.");
    // });


    // Reading the table in console--------->>>>>>

    // var sql = "SELECT * from employee";
    // con.query(sql, (err, result)=>{ 
    //     if(err) throw err;
    //     console.log(result);
    // });

    // ------>>> Drop table employee ------->>>>>

    // var sql = "DROP TABLE employee";
    // con.query(sql, (err,result)=>{
    //     if(err) throw err;
    //     console.log("Table deleted succesfully.");
    // });


    /*
    --------->>>>> Little experiment of showing the employee table on localhost:8080 port failed.------->>>
    var sql = "SELECT * from employee";
    con.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        const myserver = http.createServer((req, res) => {
            if (req.url == "/") {
                // res.result;
                // res.end(result.toString());

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(result.toString());
            }
        });
        myserver.listen(8080, () => {
            console.log("listning port number 8080");
        });
    });
*/



});