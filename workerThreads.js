const crypto = require('crypto');
const https = require('https');

const start = performance.now();

process.env.UV_THREADPOOL_SIZE = 12;

for (let i = 1; i < 50; i++) {
    crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
        console.log(performance.now() - start);
    });
}

for (let i = 1; i < 50; i++) {
    https.get('https://google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(performance.now() - start);
        });
    });
}