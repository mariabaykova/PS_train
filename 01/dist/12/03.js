// написать итератор для заданной структуры дерева
const ii = iterate({
    value: 1,
    children: [{ value: 2 },
        { value: 88 },
        { value: 3, children: [{ value: 4 }] }
    ]
});
console.log(ii.next());
console.log(ii.next());
console.log(ii.next());
console.log(ii.next());
console.log(ii.next());
console.log(ii.next());
function iterate(obj) {
    let queue = [obj];
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (queue.length > 0) {
                const head = queue.shift();
                if (head["value"]) {
                    if (head["children"]) {
                        queue.push(...head["children"]);
                    }
                    return { value: head["value"], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
            else {
                return { value: undefined, done: true };
            }
        }
    };
}
//# sourceMappingURL=03.js.map