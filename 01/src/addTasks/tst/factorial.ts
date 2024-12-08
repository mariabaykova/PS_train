function factorial( n: number ): number {
    return ( n === 1 ) ? 1 : n * factorial( n - 1 ); 
}

// function fib(n: number): number {
//     let f1 = 1;
//     let f2 = 1;
//     if ( n === 1 ) {
//         return f1;
//     } else if ( n === 2 ) {
//         return f2;
//     } else if ( n === 3 ) {
//         return f1 + f2;
//     } else {
//         return fib( n - 2 ) + fib( n - 1 );
//     }
// }
// console.log(factorial(4));
// console.log(fib(77)); // очень тяжело с рекурсией

function fib( n: number ): number {
    if ( n <= 2 ) {
        return 1;
    }
    let f1 = 1;
    let f2 = 1;
    let fN;
    for ( let i = 3; i <= n; i++ ) {
        fN = f1 + f2;
        [ f1, f2 ] = [ f2, fN ];
    }
    return fN;

}

console.log(fib(77));