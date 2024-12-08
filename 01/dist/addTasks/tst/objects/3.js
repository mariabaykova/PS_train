// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
function f() {
    console.log("Hello!");
}
//   f.defer(1000); // выведет "Hello!" через 1 секунду
Function.prototype.defer = function (delay) {
    setTimeout(this, delay);
};
// console.log(f.__proto__ === Function.prototype);
// f();
// f.defer(1000);
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:
function f1(a, b) {
    console.log(a + b);
}
Function.prototype.defer1 = function (ms) {
    let f = this;
    console.log(f);
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};
f1.defer1(1000)(1, 4); // выведет 3 через 1 секунду.
const obj2 = {
    nameUs: "Masha",
    sayHi() { console.log(`hi ${this.nameUs}`); }
};
console.log(obj2);
//   obj2.sayHi.defer1(1000)();
// вот так надо делать, чтобы метод знал, в каком объекте этот метод sayHi
// obj2.sayHi = obj2.sayHi.defer1(2000);
// obj2.sayHi();
console.log('getPrototypeOf');
console.log(Object.getPrototypeOf(obj2));
console.log('__proto__');
console.log(obj2.__proto__);
console.log(Object.prototype);
//# sourceMappingURL=3.js.map