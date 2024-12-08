
const https = require('node:https');

const p = Promise.resolve( 100 );
p.then(() => console.log( "microtask" ));

console.log("111111111");

const url = "https://www.cbr-xml-daily.ru/daily_json.js";
// https://encrypted.google.com/

https
    .get(url, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        let reson = res.on('data', (d) => {
            process.stdout.write(d);
            // console.log(d);
        });
        console.log("reson");
        console.log(reson);
    })
    .on('error', (e) => {
        console.error(e);
    });

    console.log("22222222");
