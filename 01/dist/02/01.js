// функция установки значения свойства в объекте по сложному пути
let obj = {};
setByPath(obj, 'foo.bar', 1);
console.log(obj);
setByPath(obj, 'foo.bla.qq', 2);
console.log(obj);
setByPath(obj, 'foo.bla.mm1', 3);
console.log(obj);
setByPath(obj, 'foo.bla.mm2', 4);
console.log(obj);
setByPath(obj, 'foo.bar.www', 5);
console.log(obj);
function setByPath(obj, paramStr, paramVal) {
    if (paramStr.length === 0) {
        return;
    }
    let [param, ...params] = paramStr.split(".");
    if (!obj[param]) {
        obj[param] = {};
    }
    if (params.length === 0) {
        obj[param] = paramVal;
        return;
    }
    if (typeof obj[param] != "object") {
        obj[param] = {};
    }
    setByPath(obj[param], params.join('.'), paramVal);
    return;
}
//# sourceMappingURL=01.js.map