const fs = require("fs");


// Sync--> It takes the time to complete the existing task and then procced for the next task(no matter how much time it take to complete it.),
// OR It will not touch the next task untill and unless it completes the exitsting task.

// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after the data");

//Async--> It complete the tasks alternatly according to the time it will take ex: if existing task is taking time of 13s to complete the operation then
// automatically it will move to complet the next task, in the mean time(rest time).
fs.readFile("read.txt", "utf-8", (err, data)=>{
    console.log(data);
    console.log(err);
});
console.log("after the data (Asyncronus).");
