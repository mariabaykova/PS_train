const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);
// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
    console.log("the queue is now empty");
    console.log(p);
});
//# sourceMappingURL=5.js.map