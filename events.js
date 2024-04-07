const EventEmmiter = require('events'); // here, events module returns the class EventEmmiter
const event = new EventEmmiter();

// // events are nothing but signals and on the behalf of these signals we call some functions. 
// event.on("sayMyName", ()=>{
//     console.log("Your name is Rohan");
// });

// event.emit("sayMyName"); // emit(generate a event) = call a function/event

event.on("checkPage", (sc, msg)=>{
    console.log(`Status code is: ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "ok");
