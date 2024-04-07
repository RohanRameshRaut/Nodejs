const prompt = require('prompt-sync')();

var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
var age = prompt("Enter age: ");

function validateAge(age) {
    return age >= 6 && age <= 25;
}
function validateName(name) {
    for (let char of name) {
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ')) {
            return false;
        }
        return true;
    }
}

if (!validateName(fname)) {
    console.log("Enter valid first name");
}
else {
    console.log("first name: " + fname);

}
if (!validateName(lname)) {
    console.log("Enter valid last name");
}
else {
    console.log("last names: " + lname);

}
if (isNaN(age) || !validateAge(age)) {
    console.log("wrong age!");
}
else {
    console.log("Age: " + age);
}
