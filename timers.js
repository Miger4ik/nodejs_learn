//const start = performance.now();
//setTimeout( () => {
//    console.log(performance.now() - start)
//    console.log('the second past');
//}, 1000);

//function myFunction(arg) {
//    console.log(`argument => ${arg}`);
//}
//
//setTimeout(myFunction, 1500, 'Nanako');

//const timerId = setTimeout(() => {
//    console.log('booom!');
//}, 5000);
//
//setTimeout(() => {
//    clearTimeout(timerId);
//    console.log('cleared');
//}, 1000);

//const intervalId = setInterval(() => {
//    console.log(performance.now());
//}, 1000);
//
//setTimeout(() =>{
//    clearInterval(intervalId);
//    console.log('cleared');
//}, 5000);

//console.log('start');
//
//setImmediate(() => {
//    console.log('after all');
//});
//
//console.log('end');

const timerId = setTimeout(() => {
    console.log('booom!');
}, 5000);

timerId.unref();

setImmediate(() => {
    timerId.ref();
});