// нахождение разницы 2х множеств
console.log(diff([1, 2, 3, 4, 5], [3, 4, 1, 0]));
function diff(arr1, arr2) {
    const set2 = new Set(arr2);
    const result = [];
    arr1.forEach((el) => {
        set2.has(el) ? null : result.push(el);
    });
    return result;
}
//# sourceMappingURL=01.js.map