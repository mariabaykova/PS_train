// функция, которая выдает элементы множес­ тва итерируемых объектов последовательно, не чередуя их.
console.log(...seq([1, 2, 3, 4, 5], "sequence", "generators", new Set([22, 33, 44, 55, 66, 77, 22])));
// console.log(seq([1,2,3,4,5],"sequence", "generators", new Set([22,33,44,55,66,77, 22])).next());
function* seq(...iterables) {
    // console.log(...iterables);
    for (let i of iterables) {
        // for ( let j of i ) {
        //     yield j;
        // }
        yield* i;
    }
}
//# sourceMappingURL=seq.js.map