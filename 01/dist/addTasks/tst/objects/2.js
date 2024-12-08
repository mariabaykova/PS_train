let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
obj.join = Array.prototype.join;
// console.dir(obj);
// console.log(obj.join(", "));
// console.log(obj.__proto__);
// obj.__proto__ = Array.prototype;
// console.log(obj.__proto__);
function tst() {
    console.log(...arguments);
    // arguments.join = Array.prototype.join;
    // const exObj = [].join.bind( arguments );
    const exObj = Array.prototype.join.bind(arguments);
    console.log(exObj(", "));
    // console.log(arguments.join(", "));
}
tst(1, 2, 3, 4);
//# sourceMappingURL=2.js.map