const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'CST'
});

con.connect((err)=>{
    if(err) throw err
    console.log("Connected");

    // var sql = "CREATE DATABASE CST ";
    // con.query(sql, (err, result)=>{
    //     if(err) throw err
    //     console.log("DataBase created.");
    // });
    // var sql = "CREATE TABLE customer(id INT PRIMARY KEY, name VARCHAR(50), addr VARCHAR(50))";
    // con.query(sql, (err, result)=>{
    //     if(err) throw err
    //     console.log("Table created.");
    // });

    // var sql = "INSERT INTO customer(id, name, addr) VALUES?";
    // var VALUES = [[101, 'Rohan', 'Pune'], [102, 'Ved', 'Kothrud'], [103, 'Aryan', 'Kothrud']];
    // con.query(sql, [VALUES], (err, result)=>{
    //     if(err) throw err
    //     console.log("3 rows inserted.");
    // });

    // var sql ="delete from customer where id=101";
    // // var VALUES = [[101, 'Rohan', 'Pune'], [102, 'Ved', 'Kothrud'], [103, 'Aryan', 'Kothrud']];
    // con.query(sql, (err, result)=>{
    //     if(err) throw err
    //     console.log("1 row deleted.");
    // });
    var sql ="select * from customer";
    // var VALUES = [[101, 'Rohan', 'Pune'], [102, 'Ved', 'Kothrud'], [103, 'Aryan', 'Kothrud']];
    con.query(sql, (err, result)=>{
        if(err) throw err
        console.log(result);
    });
});

/*

Q1. Create a node.js application that contains the employee registration details and write a JavaScript code to validate the DOB, date of joining and salary. don't use moment
const readlineSync = require('readline-sync');

// Function to validate Date of Birth
function isValidDOB(dob) {
  const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
  return dobPattern.test(dob);
}

// Function to validate Date of Joining
function isValidDateOfJoining(doj) {
  const dojPattern = /^\d{4}-\d{2}-\d{2}$/;
  return dojPattern.test(doj);
}

// Function to validate Salary
function isValidSalary(salary) {
  return !isNaN(salary) && salary >= 0;
}

// Get employee details from the user
const employeeName = readlineSync.question('Enter employee name: ');
const dob = readlineSync.question('Enter Date of Birth (YYYY-MM-DD): ');
const doj = readlineSync.question('Enter Date of Joining (YYYY-MM-DD): ');
const salary = readlineSync.question('Enter Salary: ');

// Validate input data
if (!isValidDOB(dob)) {
  console.log('Invalid Date of Birth. Please enter in YYYY-MM-DD format.');
} else if (!isValidDateOfJoining(doj)) {
  console.log('Invalid Date of Joining. Please enter in YYYY-MM-DD format.');
} else if (!isValidSalary(salary)) {
  console.log('Invalid Salary. Please enter a valid positive number.');
} else {
  console.log('Employee Details:');
  console.log('Name:', employeeName);
  console.log('Date of Birth:', dob);
  console.log('Date of Joining:', doj);
  console.log('Salary:', salary);
}

*/

// what is html?