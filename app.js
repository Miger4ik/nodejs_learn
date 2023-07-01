const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');
