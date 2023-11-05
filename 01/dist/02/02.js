var val = Promise.resolve(1);
// console.log(val);
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; ++i) {
    console.log(i);
    val = val.then((val) => val + arr[i]);
}
val.then(console.log); //NaN
//# sourceMappingURL=02.js.map