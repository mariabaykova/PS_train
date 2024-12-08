// есть рекурсивная структура - бинарное дерево
// задача - обойти все его листья c помощью итератора
// из лекции N 16 продвинутые итераторы
class TNode {
    value;
    left;
    right;
    constructor(value, { left, right } = {}) {
        this.value = value;
        this.left = left ?? null;
        this.right = right ?? null;
    }
    [Symbol.iterator]() {
        let state = 'current';
        let cursor = null;
        // let cursorPrev: IterableIterator<T> | null = null;
        let chunk = null;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next: () => {
                console.log(`state=${state}`);
                console.log(`cursor=${cursor}`);
                if (state === 'current') {
                    state = 'left';
                    return { done: false, value: this.value };
                }
                if (state === 'left') {
                    if (this.left === null) {
                        console.log(`nothing on left side, go to right side`);
                        state = 'right';
                    }
                    else {
                        // cursor ??= this.left[Symbol.iterator]();
                        if (!cursor) {
                            console.log(`перешли к итератору левого узла`);
                            cursor = this.left[Symbol.iterator]();
                        }
                        else {
                            console.log(`остались на том же левом итераторе`);
                        }
                        // cursor присвоится, только если он сейчас null
                        console.log(`дергаем этот левый итератор`);
                        chunk = cursor.next();
                        if (chunk.done) {
                            console.log(`закончился итератор левого узла, переходим к правому`);
                            cursor = null;
                            state = 'right';
                        }
                        else {
                            return chunk;
                        }
                    }
                }
                if (state === 'right') {
                    if (this.right === null) {
                        console.log(`nothing on right side`);
                        return { done: true, value: undefined };
                    }
                    else {
                        // console.log(`cursor=${cursor}`);
                        cursor ??= this.right[Symbol.iterator]();
                        chunk = cursor.next();
                        return chunk;
                    }
                }
            }
        };
    }
}
const n = new TNode(2, { left: new TNode(3, { right: new TNode(5, { left: new TNode(55), right: new TNode(56) }) }), right: new TNode(4) });
// const n = new TNode( 2, new TNode(3), new TNode(4) );
console.log(n);
let count = 1;
const iterN = n[Symbol.iterator]();
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
console.log(`${count++}-й next`);
console.log(iterN.next());
//# sourceMappingURL=rec-iter.js.map