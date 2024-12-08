// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function f(x) {
    console.log(x);
}

function delay( fn, ms ) {
    return function(...args) {
        setTimeout( () => fn.call( this, ...args ), ms );
    }
}


// // создаём обёртки
let f1000 = delay(console.log, 1500);
let f1500 = delay(f, 2500);

f1000("test", "test11"); // показывает "test" после 1000 мс
f1500("test1"); // показывает "test1" после 1500 мс