// 20 lecture

const ftch = fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(( resp ) => { console.log(resp.json())} );

console.log(ftch);