// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers( from, to ) {
    let cur = from;
    const timerId = setInterval( function() {
        if ( to < cur ) {
            clearInterval(timerId);
        } else {
            console.log(cur++);
        }
    }, 1000);
}

function printNumbers1( from, to ) {
    let cur = from;
    let timerId = setTimeout( function print() {
        console.log(cur++);
        if ( cur <= to ) {
            timerId = setTimeout( () => print(), 1000);
        }
    }
    , 1000);
}

printNumbers1(1, 1);
// printNumbers(1, 4);