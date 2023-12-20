//  функция для получения первых limit чисел Фибоначчи 
function* take(limit, iterable) {
    const it = iterable[Symbol.iterator]();
    let n = limit;
    while (n-- > 0) {
        const v = it.next();
        if (v.done) {
            return;
        }
        yield v.value;
    }
}
// числа Фибоначчи.
// Последовательность чисел, в которой первые два числа 0, 1, а каждое последующее равно сумме двух предыдущих
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
function* fibonacciSeq() {
    let [x, y] = [0, 1];
    yield x;
    yield y;
    while (true) {
        yield x + y;
        [x, y] = [y, y + x];
    }
}
const f = fibonacciSeq();
// const it = f[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
console.log(...take(6, f));
//# sourceMappingURL=fibonacci.js.map