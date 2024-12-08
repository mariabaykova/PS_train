// переменные в очереди макрозадач

function f( p1, p2 ){
    console.log(`message: ${p1}, ${p2}`);
}

function decorate( fn ) {
    let counter = 0;
    let args = [];
    return function ( str ) {
        counter++;
        args = arguments;
        console.log(`str=${str}, counter=${counter}`);
        console.log(arguments);
        if ( counter > 1 ) {
            return;
        }
        console.log(`push fn to queue`);
        setTimeout( () => fn.call(this, args[0], counter), 5000 );
        // setTimeout( () => fn.apply(this, [args[0], counter]), 5000 );
        // difference between call and apply!
        // https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta
    }
}

f("hello");

const f1 = decorate( f );
f1( "hi" );
setTimeout( () => f1( "hii" ), 300);
setTimeout( () => f1(), 400);
setTimeout( () => f1("omg"), 200);
setTimeout( () => f1("yes"), 500);




// setTimeout(


// );