const gg = smallNumbers();

console.log(`gg --> ${gg}`);
console.log(gg.next(0));
console.log(gg.next(11));
console.log(gg.throw("Error thrown"));
console.log(gg.throw("Error thrown 1"));
console.log(gg.next(22));
console.log(gg.next(33));

// const gg1 = smallNumbers();

// console.log(...gg1);


function* smallNumbers() {
    try {
            // return 100;
        console.log("первый вызов next()");
        const y1 = yield 1;
        console.log(`вызвался next c аргументом, получилось, что y1 --> ${y1}`);
        const y2 = yield 2;
        console.log(`вызвался next c аргументом, получилось, что y2 --> ${y2}`);
        return 100;

    } catch (error) {
        console.log(`error was caught: ${error}`);
    }
 
}