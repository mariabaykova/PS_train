// Генератор - это объект итератора, который проходит по выдаваемым значениям.
class RangeFromTo {
    from;
    to;
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    has(n) {
        return (typeof n === "number" && n <= this.to && n >= this.from) ? true : false;
    }
    toString() {
        return `{ x | ${this.from} <= x <= ${this.to}}`;
    }
    // [Symbol.iterator]() {
    //     let next = Math.ceil(this.from);
    //     const last = Math.floor(this.to);
    //     return {
    //         next() {
    //             return ( next > last ) ?
    //                     { value: undefined, done: true } 
    //                     :
    //                     { value: next++, done: false }; 
    //         },
    //         [Symbol.iterator]() {
    //             return this;
    //         }
    //     }
    // }
    *[Symbol.iterator]() {
        for (let i = Math.ceil(this.from); i <= Math.floor(this.to); i++) {
            yield i;
        }
    }
}
const num = new RangeFromTo(3, 7);
const iter = num[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
const o = {
    x: 1,
    y: 3,
    z: 4,
    *[Symbol.iterator]() {
        for (let i of Object.keys(this)) {
            yield i;
        }
    }
};
console.log([...o]);
const g = oneDigitPrimes();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log([...g]);
function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}
//# sourceMappingURL=gen.js.map