let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    let curNode = list;
    if (curNode.value) {
        console.log(curNode.value);
    }
    if (curNode.next) {
        printList(curNode.next);
    }
    else {
        return;
    }
}
function printList1(list) {
    let curNode = list;
    while (true) {
        console.log(curNode.value);
        if (curNode.next === null) {
            return;
        }
        curNode = curNode.next;
    }
}
function reverseList(list) {
    const stack = [];
    let tmp = list;
    while (tmp) {
        stack.push(tmp.value);
        tmp = tmp.next;
    }
    return [...stack.reverse()];
}
// bad rec version, see the good one below
function reverseList1(list) {
    let tmp = list;
    const stack = [];
    processNode(tmp);
    return stack;
    function processNode(node) {
        if (node) {
            stack.unshift(node.value);
            processNode(node.next);
        }
        else {
            return;
        }
    }
}
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}
console.log(list);
printList(list);
printList1(list);
console.log(...reverseList(list));
console.log(...reverseList1(list));
printReverseList(list);
//# sourceMappingURL=list.js.map