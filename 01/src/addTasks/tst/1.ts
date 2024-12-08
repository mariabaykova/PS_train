let aaa: number = 1;

function foo(b: any): void {
    b = 2;
}
console.log(aaa);

foo(aaa);

console.log(aaa);

class Link<T> {
    constructor( private value: T ) {
        this.value = value;
    }
    update( value: T): void {
        this.value = value;
    }
    get() {
        return this.value;
    }   
}

let aaa1 = new Link(3);
console.log(`aaa1=${aaa1.get()}`);

function foo1( b: Link<any> ) {
    b.update(8);
}

foo1( aaa1 );

console.log(`aaa1=${aaa1.get()}`);