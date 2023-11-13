// реализовать функцию waterfall для callback функций
// функция для композиции асинхронного кода на callback функциях, которая работает как показано в примере
waterfall([
    (cb) => {
        cb(null, 'one', 'two');
    },
    (arg1, arg2, cb) => {
        console.log(arg1); // one
        console.log(arg2); // two
        cb(null, 'three');
    },
    (arg1, cb) => {
        console.log(arg1); // three
        cb(null, 'done');
    }
], (err, result) => {
    console.log(result); // done
});
waterfall(new Set([
    (cb) => {
        cb('ha-ha!');
    },
    (arg1, cb) => {
        cb(null, 'done');
    }
]), (err, result) => {
    console.log(err); // ha-ha!
    console.log(result); // undefined
});
function waterfall(iterable, fn) {
}
//# sourceMappingURL=04.js.map