const factorial = require('./factorial');
const {Worker} = require('worker_threads');

const compute = (array) => {
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i*i);
    }
    return array.map(el => factorial(el));
}
const main = () => {
    performance.mark('begin');

    const result = [
        compute([25, 20, 19, 48, 30 ,50]),
        compute([25, 20, 19, 48, 30 ,50]),
        compute([25, 20, 19, 48, 30 ,50]),
        compute([25, 20, 19, 48, 30 ,50]),
    ];
    console.log(result);

    performance.mark('end');
    performance.measure('main', 'begin', 'end');
    console.log(performance.getEntriesByName('main').pop());
}

main();

const asyncCompute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', (code) => {
            console.log(`Worker stopped with exit code ${code}`);
        });
    });
}

const mainAsync = async () => {
performance.mark('begin');

    const result = await Promise.all([
        asyncCompute([25, 20, 19, 48, 30 ,50]),
        asyncCompute([25, 20, 19, 48, 30 ,50]),
        asyncCompute([25, 20, 19, 48, 30 ,50]),
        asyncCompute([25, 20, 19, 48, 30 ,50]),
    ]);
    console.log(result);

    performance.mark('end');
    performance.measure('mainAsync', 'begin', 'end');
    console.log(performance.getEntriesByName('mainAsync').pop());
}

setTimeout(() => {
    console.log('Timeout');
}, 500);

mainAsync();