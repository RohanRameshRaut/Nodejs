const Ebill = require('./slip14bModule');
const prompt = require('prompt-sync')();

let unit = prompt("Enter total unit consumed: ");

console.log("Ebill: "+Ebill(unit));