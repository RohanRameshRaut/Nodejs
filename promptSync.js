var http = require('http');
const prompt = require('prompt-sync')();
const fname = prompt('Enter First Name : ');
console.log('First Name Is : ' + fname);
const lname = prompt('Enter Last Name : ');
console.log('last Name Is : ' + lname);
console.log('Name is : ' + fname + lname);
// enter DOB in 2005-1-28 format YYY-MM-DD (Do not use 0 prefix for months and dates)
const inputdob = prompt('Enter DOB : ');
console.log('DOB Is : ' + inputdob);

var dob = new Date(inputdob);

var today = new Date();

var diff = new Date(today.getTime() - dob.getTime());
var val = Math.abs(diff.getUTCFullYear() - 1970);
console.log("Age is : " + val);

// const inputdob = prompt('Enter DOB in YYYY-MM-DD format: ');
// console.log('DOB Is : ' + inputdob);

// var dob = new Date(inputdob);

// if (isNaN(dob.getTime())) { // enter DOB in 2005-1-28 format YYY-MM-DD (Do not use 0 prefix for months and dates)
//     console.error("Invalid date entered!");
// } else {
//     var today = new Date();

//     var diff = new Date(today.getTime() - dob.getTime());
//     var val = Math.abs(diff.getUTCFullYear() - 1970);
//     console.log("Age is : " + val);
// }
