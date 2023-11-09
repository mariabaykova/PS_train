// реализовать функцию setImmediate 
// API, схожее с setTimeout, но создавала бы микротаску
setTimeout(() => {
    console.log(3);
}, 0);
setImmediate(() => {
    console.log(1);
}, 0);
function setImmediate(fn, delay) {
}
//# sourceMappingURL=02.js.map