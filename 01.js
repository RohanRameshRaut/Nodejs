// const EventEmmiter = require('events'); // here, events module returns the class EventEmmiter
// const event = new EventEmmiter();

// // events are nothing but signals and on the behalf of these signals we call some functions. 
// event.on("sayMyName", ()=>{
//     console.log("Your name is Rohan");
// });

// event.emit("sayMyName"); // emit(generate a event) = call a function/event

// ******************************************************

const EventEmmiter = require('events');
const event1 = new EventEmmiter();

let a = 10, b=10;
const add = ()=>{
    console.log("a+b = "+ Number(a+b));
}
event1.on("myEvent", add);
event1.emit("myEvent");
