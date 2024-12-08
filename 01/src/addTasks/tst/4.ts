// lection 21 каррирование

// глобальный контекст, глобальная область памяти
globalThis.a = 111;
let a = 1;

function bar () {
    let a = 33;
    function foo( b = 2 ) {
        // console.log(a);
        // eval(`console.log(a)`);
        Function('console.log(a)')();
        // eval('(function () {console.log(a)})()');
    }

    foo();
}

bar();