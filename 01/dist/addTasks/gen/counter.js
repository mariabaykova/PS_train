const c = counter();
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.throw(`counter to zero!`));
console.log(c.next());
function* counter() {
    let i = 0;
    while (true) {
        try {
            yield i++;
        }
        catch (error) {
            i = 0;
        }
    }
}
//# sourceMappingURL=counter.js.map