let aaa = 1;
function foo(b) {
    b = 2;
}
console.log(aaa);
foo(aaa);
console.log(aaa);
class Link {
    value;
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    update(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
}
let aaa1 = new Link(3);
console.log(`aaa1=${aaa1.get()}`);
function foo1(b) {
    b.update(8);
}
foo1(aaa1);
console.log(`aaa1=${aaa1.get()}`);
//# sourceMappingURL=1.js.map