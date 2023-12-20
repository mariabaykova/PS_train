// обход дерева в ширину
// вывести все элементы дерева так, чтобы по очереди выводились все элементы каждого яруса
class TreeNode {
    value;
    children;
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
function* log1(tree) {
    let curNode = tree;
    yield curNode.value;
    while (curNode.children) {
        yield curNode.children;
    }
}
function log(tree) {
    const queue = [tree];
    const res = [];
    while (queue.length > 0) {
        const head = queue.shift();
        res.push(head.value);
        // if ( head.children ) {
        //     queue.push( ...head.children );
        // } 
        // нуллиш оператор
        head.children?.forEach((child) => queue.push(child));
    }
    console.log(...res);
}
//# sourceMappingURL=02.js.map