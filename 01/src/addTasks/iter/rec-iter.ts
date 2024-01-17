// есть рекурсивная структура - бинарное дерево
// задача - обойти все его листья c помощью итератора
// из лекции N 16 продвинутые итераторы

class TNode<T> {
    value: T;
    left: TNode<T> | null;
    right: TNode<T> | null;

    constructor(value: T, {left, right}: {left?: TNode<T>, right?: TNode<T>} = {}) {
        this.value = value;
        this.left = left ?? null;
        this.right = right ?? null;
    }
    // constructor(value: T, left?: TNode<T> | null, right?: TNode<T> | null) {
    //     this.value = value;
    //     this.left = left ?? null;
    //     this.right = right ?? null;
    // }

    [Symbol.iterator]() {
        let state = 'current';
        return {
            [Symbol.iterator]() {
                return this;
            },
            next: () => {

            }
        }
    }
}

const n = new TNode( 2, { left: new TNode(3, {right: new TNode(5, { left: new TNode(55), right: new TNode(56)} )} ), right: new TNode(4) } );
// const n = new TNode( 2, new TNode(3), new TNode(4) );

console.log(n);