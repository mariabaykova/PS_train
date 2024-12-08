// cashing decorator
// lection N21 (about carrying etc)
// from https://learn.javascript.ru/call-apply-decorators

let worker = {
    double() {
        return 2;
    },
    slow(x) {
        console.log(`slow called with ${x}` );
        console.log(`this=${this}`);
        return x * this.double();
    }
};

function slow( x: number ): number {
    console.log(`function slow called with ${x}`);
    console.log(`this=${this}`);
    return x;
}

function slo( x: number ): number {
    console.log(`function slow called with ${x}`);
    return x + 3;
}

function cashingDecorator( func ) {
    let cashe = new Map();
    return function( x ) {
        if ( !cashe.has(x) ) {
            console.log(`function hasn't been called with ${x} before`);
            // console.log(`this=${this}`);
            // cashe.set( x, func(x) );
            // cashe.set( x, func.call(worker, x) );
            cashe.set( x, func.call(this, x) );
        }
        console.log(cashe);
        return cashe.get( x );
    }
}

// slow = cashingDecorator( slow );

// console.log(slow(1));
// console.log(slow(10));
// console.log(slow(1));

// slow(2);
// slow(22);

// console.log(worker.slow(3));

// let f = worker.slow;
// f(33);

// let slowDecorared = cashingDecorator(worker.slow);

// slowDecorared(2);
// slowDecorared(22);
// console.log(slowDecorared(2));

worker.slow = cashingDecorator(worker.slow);
worker.slow(1);
worker.slow(11);
worker.slow(1);
console.log(worker.slow(1));
