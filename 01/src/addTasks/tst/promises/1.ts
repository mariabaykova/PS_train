const urls = [ "https://www.cb1r-xml-daily.ru/daily_json.js", "https://www.cbr-xml-daily.ru/archive/2024/04/12/daily_json.js"];

const promises  = urls.map( url => fetch(url)
.then(r => r.text()) 
);

console.log(urls);
console.log("promises");
console.log(promises);

const pp = Promise.all( [...promises, "we are the world"] )
    .then( bodies => {
        console.log("start bodies");
    for ( let i = 0; i < bodies.length; i++ ) {
        console.log("bodies:");
        console.log( bodies[i].substring(0, 50) );
        // console.dir(bodies[i]);
    }
    }
    // ,(_) => console.log("promise all rejected") 
    )
    .catch( e => console.error(e))
     ;
// console.log("pp---->");
setTimeout(
    () => {
        console.log("pp---->");
        console.dir(pp);
    }, 100
);
// console.log(pp);