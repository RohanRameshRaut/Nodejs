const EventEmiter = require('events');

const event = new EventEmiter();

// listener 1
const listener1 = ()=>{
    console.log('listner 1 executed!')
};

// listener 1
const listener2 = ()=>{
    console.log('listner 2 executed!')
};

event.on('myEvent', listener1);
event.on('myEvent', listener2);

event.emit('myEvent');
