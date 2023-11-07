// нахождение максимальной длины в дереве
const object = {
    value: 'foo',
    children: [
        {
            value: 'bar'
        },
        {
            value: 'bla',
            children: [{ value: 'baz' }]
        }
    ]
};
console.log(maxDepth(object));
function maxDepth(object) {
    if (!object["value"]) {
        return NaN;
    }
    if (!object["children"]) {
        return 1;
    }
    let leafDepths = [];
    let stack = [{ node: object, status: "white", depth: 1 }];
    while (stack.length > 0) {
        let current = stack[stack.length - 1];
        if (current["status"] === "gray") {
            const leaf = stack.pop();
            leafDepths.push(leaf["depth"]);
            continue;
        }
        if (current["status"] === "white") {
            current["status"] = "gray";
            if (!current["node"]["children"]) {
                continue;
            }
            for (let child of current["node"]["children"]) {
                stack.push({ node: child, status: "white", depth: current["depth"] + 1 });
            }
            continue;
        }
        if (current["status"] === "gray") {
            const leaf = stack.pop();
            leafDepths.push(leaf["depth"]);
            continue;
        }
    }
    return Math.max(...leafDepths);
}
//# sourceMappingURL=03.js.map