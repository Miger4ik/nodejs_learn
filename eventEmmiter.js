const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

// add listener
myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');

// remove listener logDbConnection from event connected
myEmmiter.removeListener('connected', logDbConnection);

// remove listener logDbConnection from event connected
myEmmiter.off('connected', logDbConnection);

// remove all listeners from event 'connected'
myEmmiter.removeAllListeners('connected');

myEmmiter.emit('connected');

// the same as addListener
myEmmiter.on('message', (data) => {
    console.log(`got: ${data}`);
});

// push this event to start of the que
myEmmiter.prependListener('message', (data) => {
    console.log(`Prepend ${data}`);
});

myEmmiter.emit('message', 'hi took my message');

// this event will call only one and after that it will be deleted
myEmmiter.once('off', () => {
    console.log('i wos emit only once');
});

// check once
myEmmiter.emit('off');
myEmmiter.emit('off');

// default we have only 10 max listeners
console.log(myEmmiter.getMaxListeners());

// we can increase or decrease max count of listeners
myEmmiter.setMaxListeners(1);

// check the count of listeners
console.log(myEmmiter.listenerCount('message'));
console.log(myEmmiter.listenerCount('off'));

// get listeners as array
console.log(myEmmiter.listeners('message'));

// get names of listeners
console.log(myEmmiter.eventNames());

// create listener for work with error
myEmmiter.on('error', (err) => {
    console.log(`shit happens: ${err.message}`);
});

// emit new error
myEmmiter.emit('error', new Error('Boom'));