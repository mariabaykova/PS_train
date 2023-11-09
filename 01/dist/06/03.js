// реализовать аналог array.prototype.flat
// сделать через стек и через рекурсию
// сделано через очередь
const arr1 = [[1, 2], [[1]], 2]; // [1, 2, [1], 2]
const arr2 = [[3, 4], [[3]], 4]; // [ 3, 4, 3, 4]
console.log(flat(arr1));
console.log(flat(arr2, 2));
function flat(array, depth) {
    if (!depth) {
        depth = 1;
    }
    let step = 0;
    // складываем в конец массива и берем из начала массива, так будет стек
    let stack = [...array];
    let result = [];
    while (step < depth) {
        let stackLength = stack.length;
        for (let i = 0; i < stackLength; i++) {
            let head = stack.shift();
            if (Array.isArray(head)) {
                stack.push(...head);
            }
            else {
                stack.push(head);
            }
        }
        step++;
    }
    return stack;
}
//# sourceMappingURL=03.js.map