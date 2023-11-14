// сжатие строки, схлопнуть все повторения
console.log(zipStr('abbaabbafffbezza')); // abafbeza
console.log(zipStr('ccccabbaabbafffbezza')); // cabafbeza
console.log(zipStr1('abbaabbafffbezza')); // abafbeza
console.log(zipStr1('ccccabbaabbafffbezza')); // cabafbeza
function zipStr(str) {
    let substrLen = 1;
    while (substrLen < str.length / 2) {
        for (let i = 0; i < str.length; i++) {
            const substr = str.slice(i, i + substrLen);
            const strBegin = str.slice(0, i);
            let strEnd = str.slice(i, str.length);
            // схлопнуть все подстроки длины substrLen с позиции i
            strEnd = removeSubstr(strEnd, substr);
            str = strBegin + strEnd;
        }
        substrLen++;
    }
    // схлопнуть подстроку в начале строки
    function removeSubstr(str, substr) {
        const re = RegExp(`^(${substr})(${substr})(.*)`);
        while (re.test(str)) {
            str = str.replace(re, "$2$3");
        }
        return str;
    }
    return str;
}
// не правильно!
function zipStr1(str) {
    return str.replace(/(.)\1+/g, (str, sub) => { return sub; });
}
//# sourceMappingURL=04.js.map