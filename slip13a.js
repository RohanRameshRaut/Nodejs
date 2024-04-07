const jadya = require('./slip13aModule');
const prompt = require('prompt-sync')();

var l = prompt("Enter length: ");
var b = prompt("Enter breadth: ");

console.log("Area of a rectangle: "+ jadya(l, b));
