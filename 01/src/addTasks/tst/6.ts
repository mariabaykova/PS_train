// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}
function spy( fn ) {
    function wrapper(...args) {
        // console.log(arguments);
        // console.log(args);
        wrapper.calls.push([...args]);
        return fn.call(this, ...args);
        // в данном случае не зависит от контекста
        // return fn(...args);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);
  
  
work(1, 2); // 3
work(4, 5); // 9

console.log(work);

console.log(work.calls);
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }