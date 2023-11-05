class Foo {
    bar = 1;

    bla = () => console.log(this.bar);
    baz = function() {
        console.log(this.bar);
    }
}

// console.log(Foo.bar);

// let a = new Foo();
// a.bla();

// console.log(new Foo().bla());
new Foo().bla(); //1
new Foo().baz();

const a = new Foo().bla;
console.log(a);
a();

const aa = new Foo().baz;

console.log(aa);
// aa();  //TypeError: Cannot read properties of undefined (reading 'bar')

new aa();

const b = { bar: 2, aa};

console.log(b);
b.aa();