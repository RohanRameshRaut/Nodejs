const EventEmitter = require('events');
const event = new EventEmitter();
const prompt = require('prompt-sync')();

event.on('event1', () => {
    console.log("This is event 1")
});
event.on('event2', () => {
    console.log("This is event 2")
});
event.on('event3', () => {
    console.log("This is event 3")
});
event.on('event4', () => {
    console.log("This is event 4")
});

let input = prompt("Enter choice: ");
switch(input)
{
    case '1':
        event.emit('event1');
        break;
    case '2':
        event.emit('event2')
        break;
    case '3':
        event.emit('event3')
        break;
    case '4':
        event.emit('event4')
        break;
    default:
        console.log("wrong input");
};
