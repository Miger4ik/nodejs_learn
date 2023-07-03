const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(() => {
    console.log('Immediate');
});

fs.readFile(__filename, () => {
    console.log('File readed');
})

setTimeout(() => {
    for(let i = 0; i < 1000000000; i++) {

    }
    console.log('Done loop');
    Promise.resolve().then(() => {
        console.log('Promise inside Timeout');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('promise');
});

process.nextTick(() => {
    console.log('tick');
});

console.log('final');

/*
Fases
- initialization

- timers (setTimeout)
- nextTick, microtaskQueue (Promise, nextTick)
- pending callbacks
- nextTick, microtaskQueue (Promise, nextTick)
- idle, prepare
- nextTick, microtaskQueue (Promise, nextTick)
- poll (file read)
- nextTick, microtaskQueue(Promise, nextTick)
- check (setImmediate)
- nextTick, microtaskQueue(Promise, nextTick)
- close callback

- check for end of program
*/