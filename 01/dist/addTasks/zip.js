const aa1 = [1, 2, 3, 4, 5, 6];
const ss = "generators";
const q = ["e1", "e2", "e3"];
console.log(...zip(aa1, ss, q));
function* zip(...iterables) {
    const iterators = iterables.map((i) => i[Symbol.iterator]());
    let idx = 0;
    while (iterators.length) {
        if (idx >= iterators.length) {
            idx = 0;
        }
        let curIterVal = iterators[idx].next();
        if (curIterVal.done) {
            // текущий итератор закончился, удалим его из списка
            console.log(iterators.splice(idx, 1));
        }
        else {
            yield curIterVal.value;
        }
        idx++;
    }
}
//# sourceMappingURL=zip.js.map