function cancellable(fn, args, t) {
    var id = null;
    return function () {
        console.log("1. id=" + id);
        console.log("1. args=" + args);
        if (id) {
            console.log("2. id=" + id);
            console.log("2. args=" + args);
            clearTimeout(id);
        }
        else {
            var savedThis_1 = this; // сохраняем this в промежуточную переменную
            var a_1 = args;
            id = setTimeout(function () {
                fn.apply(savedThis_1, a_1); // используем её
            }, t);
        }
    };
}
;
// [{"time":20,"returned":10}]
var r = [];
var fn = function (x) { return x * 5; };
var args = [2], t = 4000, cancelTimeMs = 2000;
var start = performance.now();
//   const l = (...argsArr) => {
//       const diff = Math.floor(performance.now() - start);
//       r.push({"time": diff, "returned": fn([...argsArr])});
//   }
var cancel = cancellable(console.log, args, t);
var maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(function () {
    console.log("-->" + r); // [{"time":20,"returned":10}]
}, maxT + 15);
