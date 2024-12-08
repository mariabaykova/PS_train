// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(from, to) {
    return function (x) {
        return (x <= to && x >= from) ? true : false;
        // можно просто условие, оно вернет true или false
    };
}
function inArray(array) {
    return function (x) {
        return (array.indexOf(x) > -1) ? true : false;
        // return arr.includes(x);
    };
}
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
//# sourceMappingURL=filterClo.js.map