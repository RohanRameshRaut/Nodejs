// const name = "Rohan";
// console.log(name);


//below code is the behind the scean of nodejs module wrapping function.
// (function (exports, require, module, __filename, __dirname){ //nodejs automatically wrapes it in the function like this
//     const a = require("fs");
//     var a = "RohanRameshRaut";
//     console.log(a);
//     module.exports = {dkldkjfslkdfj};
// })();
// console.log(a); will not work here, cause its private to its function IIFE (immediately invoked function expression)


console.log("Your directory is : "+ __dirname); //your directory name.
console.log("Your file name is : "+ __filename); //your file name with address.
