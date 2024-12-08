const a = Promise.resolve(1);
const b = Promise.reject(11);


console.log(a.then( () => { 
        console.log(a); 
        console.log("a resolved") 
    }, 
    () => console.log("a rejected") )
    .then( () => console.log(a))
    );
console.log(b.then( () => console.log("b resolved")).catch(() => console.log("b rejected") ) );
// console.log(a.then());
// console.log(b.then() );

console.log("****");

const pp = new Promise( () => {});
console.log("pp");
console.log(pp);