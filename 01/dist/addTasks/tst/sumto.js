function sumTo1(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}
function sumToRec(n) {
    if (n <= 0) {
        return 0;
    }
    return (n === 1) ? 1 : n + sumToRec(n - 1);
}
function sumToProgr(n) {
    const a1 = 1;
    const step = 1;
    const aN = a1 + (n - 1) * step;
    return ((a1 + aN) / 2) * n;
}
console.log(sumTo1(100));
console.log(sumToRec(100));
console.log(sumToProgr(100));
//# sourceMappingURL=sumto.js.map