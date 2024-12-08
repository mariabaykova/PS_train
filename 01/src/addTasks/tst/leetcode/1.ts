type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    let id = null;
    return function() {
        console.log("1. id=" + id);
        console.log("1. args=" + args);

        if ( id ) {
            console.log("2. id=" + id);
            console.log("2. args=" + args);
            clearTimeout(id);
        } else {
            let savedThis = this; // сохраняем this в промежуточную переменную
            let a = args;
            id = setTimeout(function() {
                fn.apply(savedThis, a); // используем её
            }, t);
        }    
    };
};

// [{"time":20,"returned":10}]


  const r = [];

  const fn = (x) => x * 5;
  const args = [2], t = 4000, cancelTimeMs = 2000;

  const start = performance.now();

//   const l = (...argsArr) => {
//       const diff = Math.floor(performance.now() - start);
//       r.push({"time": diff, "returned": fn([...argsArr])});
//   }
       
  const cancel = cancellable(console.log, args, t);

  const maxT = Math.max(t, cancelTimeMs);
           
  setTimeout(cancel, cancelTimeMs);

  setTimeout(() => {
      console.log("-->" + r); // [{"time":20,"returned":10}]
  }, maxT + 15)
