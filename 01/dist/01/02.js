class Parent {
    foo() {
        console.log('It works!');
    }
}
class Example extends Parent {
}
// partial( Example, {
//     foo() {
//         super.foo();
//         console.log('Yeeeah');
//     },
//     get bar() {
//         return Math.random();
//     }
// }
// );
//# sourceMappingURL=02.js.map