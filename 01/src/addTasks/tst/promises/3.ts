// const https = require("node:https");

// let url = "https://www.cbr-xml-daily.ru/daily_json.js";

// // console.log(getJSON(url).then( () => {console.log()} ));



// // const p1 = getJSON(url);
// // console.log(p1.then( 
// //             ( result ) => {
// //                     console.log( "p1 resolved" );
// //                     console.log(result.substring(0, 50));
        
// //             }, 

// //             (err) => {console.log("p1 rejected"); console.log(err)}));

// function getJSON(url) {
//     // Создать и возвратить новый объект Promise, 
//     return new Promise ((resolve, reject) => {
//     // Запустить HTTP-запрос GET для указанного URL.
//     const request = https.get(url, response => { // Вызывается, когда начинает
//     // поступать ответ. //Отклонить объект Promise, если состояние HTTP указывает на ошибку
//     if (response.statusCode !== 200) {
//         reject(new Error('HTTP status ${response.statusCode}')); 
//         response.resume(); // He допустить утечки памяти.
//     }
//     // И отклонить, если заголовки ответа ошибочны.
//     else if ( response.headers["content-type"] == "application/json") {
//         reject(new Error("Invalid content-type"));
//         response.resume(); // He допустить утечки памяти.
//     }
//     else {
//     //В противном случае зарегистрировать события // для чтения тела ответа,
//     console.log("read body");
//     let body =
//     response.setEncoding("utf-8"); 
//     response.on("data", chunk => { body += chunk; }); 
//     response.on("end", () => {
//     // Когда тело ответа закончило поступление, // попытаться его разобрать,
//     try {
//     // let parsed = JSON.parse(body);
//     let parsed = body;
//     // Если тело разобрано успешно, тогда удовлетворить // объект Promise,
//     resolve(parsed);
//     }catch(е) {
//         // Если разбор потерпел неудачу, тогда отклонить объект Promise, 
//         console.log("parsing failed");
//         reject(е);
// } });
// }
// })
// }
// // Также отклонить объект Promise, если запрос потерпел неудачу
// // еще до получения ответа (скажем, при сбое сетевого подключения) . 
// // request.on("error", error => {
// // reject(error);
// // }); 
