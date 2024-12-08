// Декоратор debounce

// Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»), а затем вызывает f один раз с последними аргументами.

function f(x: string): void {
    console.log(x);
}

const w = {
    nameW: "W name", 
    someMethod( x ) {
        console.log(`the name is ${this.nameW}, info=${x}`);
    }
}

function debounce( func, ms ) {
    let timerId = null;
    return function(...args) {
        if ( timerId ) {
            clearTimeout(timerId);
            console.log(`удаляем таймер ${timerId}`);
        }
        // можно в любом слуае делать clearTimeout(timerId); условие лишнее
        // console.log(arguments);
        // console.log(args);
        console.log(`поставили в очередь ${args}`);
        timerId = setTimeout( () => func.apply(this, args), ms );
    }
}

// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.

// При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.

// function throttle( func, ms ) {
//     let timerId = null;
//     let startTime = 0;
//     let now = 0;
//     let timer = ms;
//         return function() {
//         now = new Date().getTime();
//         if ( now - startTime >= ms ) {
//             func.apply( this, arguments );
//             startTime = now;
//         } else {
//             clearTimeout(timerId);
//             timer = timer - (now - startTime);
//             console.log(`ставим таймер на ${timer} ms`);
//             timerId = setTimeout( () => func.apply(this, arguments), timer );
//         }

//     }
// }

function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        console.log(savedArgs);
        console.log(savedThis);
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }

w.someMethod("first");

// w.someMethod = debounce( w.someMethod, 5000);
// w.someMethod();
// setTimeout( () => w.someMethod(), 1500);

w.someMethod = throttle( w.someMethod, 5000);
w.someMethod("second");
setTimeout( () => w.someMethod("third"), 1500);
// setTimeout( () => w.someMethod("fourth"), 1700);

// f = throttle( f, 3000);
// f("hello 3000");
// setTimeout( () => f("hello 1500"), 1500);
// setTimeout( () => f("hello 500"), 500);

// f = debounce( f, 5000 );
// f( "hello 5000" );
// setTimeout( () => f("hello 1500"), 1500);
// setTimeout( () => f("hello 2000"), 2000);

// let t = new Date().getTime();
// console.log(t);
// console.log(t.getTime());
// console.log(t.getTime());
// console.log(t.getTime());
// console.log(t.getTime());