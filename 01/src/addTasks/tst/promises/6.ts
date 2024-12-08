const listUrls = ["https://www.cbr-xml-daily.ru/daily_json.js", "https://www.cbr-xml-daily.ru/archive/2024/04/12/daily_json.js"];

console.log("res:");

// const newP = Promise.resolve(1);

// console.log(newP.then());
// console.log(newP.then());

const result = fetchSequently(listUrls);
console.log(result.then((r) => {
    console.log(`result promise ok`);
    console.log(r);
}));

    // setTimeout(() => {
    //     console.log("the queue is now empty");
    //     // console.log(p);
    //     console.log(result);
    //   });


// console.log(`url --> ${url}`);

function fetchSequently<T>( urls ) {
    let iter: Iterable<String>;
    try {
        iter = urls[Symbol.iterator]();
    } catch (error) {
        throw Error("Argument is not iterable");
    }
    // console.log(iter.next());

    const bodies = [];

    function fetchOne( url ) {
        return fetch( url )
                .then( response => response.text())
                .then( body => {
                    console.log(body.substring(0,40));
                    bodies.push(body.substring(0,40));
                }) 
        ;
    }

    let p = Promise.resolve(1);
    

    // console.log("p ---> :");
    // console.log(p);
    console.log("go throw urls");
    for ( let url of urls ) {
        console.log( url );
        p = p.then( () => fetchOne(url) );
        // fetchOne(url);
    }
    return p.then(() => bodies);
    // return Promise.resolve(bodies);

    // setTimeout(() => {
    //     console.log("the queue is now empty");
    //     console.log(p);
    //     console.log(bodies);
    //   });

  
}