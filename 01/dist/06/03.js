// реализовать аналог array.prototype.flat
// сделать через стек и через рекурсию
// сделано через очередь
const arr1 = [[1, 2], [[1]], 2]; // [1, 2, [1], 2]
const arr2 = [[3, 4], [[3]], 4]; // [ 3, 4, 3, 4]
console.log(flat(arr1));
console.log(flat(arr2, 2));
console.log(flatRec(arr1));
console.log(flatRec(arr2, 2));
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
function flatRec(arr, depth = 1) {
    let result = [];
    if (depth <= 0) {
        return [...arr];
    }
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        // console.log(i + " " + result);
        if (Array.isArray(arr[i])) {
            result.push(...flatRec([...arr[i]], depth - 1));
        }
        else {
            result.push(...flatRec([arr[i]], depth - 1));
        }
        // console.log(i + " " + result);
    }
    return result;
}
//# sourceMappingURL=03.js.map