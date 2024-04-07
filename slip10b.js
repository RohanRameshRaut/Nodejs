// dept-emp with 1:M relationship and display the min, max and avg salary of emp for dep name.
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
});
// for authentication error use cmd-->
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root@123';
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root@123';
con.connect((err) => {
    if (err) throw err
    console.log("Connected to Database.");

    // // Creating the Table Department
    // var sql = "CREATE TABLE dept(id int primary key, name varchar(255), address varchar(255))";
    // con.query(sql, (err, result) => {
    //     if (err) throw err
    //     console.log("Department table created succesfully.");
    // });


    // // Creating the Table Employee
    // var sql = "CREATE TABLE emp(id int primary key, name varchar(255), address varchar(255), salary float(8,2), did int(10) REFERENCES dept(id))";
    // con.query(sql, (err, result) => {
    //     if (err) throw err
    //     console.log("Employee table created.");
    // });

    // // Droping the Table Employee
    // var sql = "DROP TABLE emp "
    // con.query(sql, (err, result) => {
    //     if (err) throw err
    //     console.log("Employee table Droped.");
    // });


    // // Insert values in dept table
    // var sql = "INSERT INTO dept(id, name, address) VALUES?";
    // var VALUES = [[1, 'Commerce', 'Forth floor'], [3, 'Arts', 'Forth floot'], [5, 'Science', 'Seventh floor'], [7, 'Vocational', 'Forth floor'], [9, 'Postgraduate', 'Fifth floor']];
    // con.query(sql, [VALUES], (err, result) => {
    //     if (err) throw err
    //     console.log("Number of records inserted: " + result.affectedRows + " in dept table");
    // });

    // // Insert values in emp table
    // var sql = "INSERT INTO emp(id, name, address, salary, did) VALUES?";
    // var VALUES = [[101, 'Swara', 'Forth floor', 45000, 1], [102, 'Shilpa', 'Forth floor', 30000.00, 1], [103, 'Sharma', 'Seventh floor', 50000.50, 1], [104, 'Rama', 'Forth floor', 20000, 7], [105, 'Pallavi', 'Forth floor', 35000, 3], [106, 'Shalaka', 'Seventh floor', 50000.50, 3], [107, 'Raksha', 'Forth floor', 20000, 5], [108, 'Pranav', 'Fifth floor', 15000, 5]];
    // con.query(sql, [VALUES], (err, result) => {
    //     if (err) throw err
    //     console.log("Number of records inserted: " + result.affectedRows + " in emp table");
    // });


    // Displaying  the  min, max, avg salary of Employee for department name using con.query()
    var sql = "SELECT min(salary), max(salary), avg(salary) FROM emp, dept WHERE did = dept.id and dept.name = 'Commerce'";
    con.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
    });

});