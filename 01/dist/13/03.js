console.log(twoSum([2, 7, 11, 15], 26));
function twoSum(arr, num) {
    const res = Array(2);
    const seen = new Map(); // 
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(num - arr[i])) {
            return [i, seen.get(num - arr[i])];
        }
        else {
            seen.set(arr[i], i);
        }
    }
    return res;
}
//# sourceMappingURL=03.js.map