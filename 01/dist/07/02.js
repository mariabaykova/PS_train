// обход дерева в ширину
// вывести все элементы дерева так, чтобы по очереди выводились все элементы каждого яруса
class TreeNode {
}
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{ value: 4 }, { value: 44 }]
        },
        {
            value: 3
        },
        {
            value: 5
        }
    ]
};
log(tree); // 1 2 3 5 4 44
function log(tree) {
    let queue = [tree];
    let res = [];
    while (queue.length > 0) {
        const head = queue.shift();
        res.push(head.value);
        if (head.children) {
            queue.push(...head.children);
        }
    }
    console.log(...res);
}
//# sourceMappingURL=02.js.map