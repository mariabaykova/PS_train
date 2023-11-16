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
console.log(ii.next());
function iterate(obj) {
    let queue = [[obj][Symbol.iterator]()];
    let curIterVal = null;
    return {
        [Symbol.iterator]() { return this; },
        next() {
            if (queue.length > 0) {
                const head = queue[0];
                if (head.next) {
                    curIterVal = head.next();
                    if (curIterVal.done) {
                        queue.shift();
                        if (!queue.length) {
                            return { value: undefined, done: true };
                        }
                        else {
                            const i = queue[0].next();
                            return { value: i.value.value, done: i.done };
                        }
                    }
                    else {
                        if (curIterVal.value.children) {
                            queue.push(curIterVal.value.children[Symbol.iterator]());
                        }
                        return { value: curIterVal.value.value, done: false };
                    }
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
function iterate1(obj) {
    let queue = [[obj][Symbol.iterator]()];
    let curIter = null;
    let curIterVal = null;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (queue.length > 0) {
                // const head = queue.shift();
                const head = queue[0];
                // if ( head["value"] ) {
                //     console.log(head["value"] + " это значение");
                //     if ( head["children"] ) {
                //         console.log( "кладем в очередь детей " + head["value"] );
                //         // queue.push( ...head["children"] );
                //         queue.push(head["children"][Symbol.iterator]());
                //     }
                //     queue.shift();
                //     return { value: head["value"], done: false };
                // } else 
                if (head["next"]) {
                    console.log(head + " это итератор");
                    // curIter = head;
                    curIterVal = head.next();
                    if (curIterVal.done) {
                        queue.shift();
                        console.log("+++");
                        if (!queue.length) {
                            return { value: undefined, done: true };
                        }
                        else {
                            // const i = queue[0].next();
                            return queue[0].next();
                        }
                    }
                    else {
                        if (curIterVal["value"]["children"]) {
                            console.log("кладем в очередь детей " + curIterVal["value"]);
                            queue.push(curIterVal["value"]["children"][Symbol.iterator]());
                        }
                        return { value: curIterVal["value"]["value"], done: false };
                    }
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