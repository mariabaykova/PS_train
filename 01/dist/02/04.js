// аналог нативного parseInt
console.log(myParseInt('10')); // 10
console.log(myParseInt('-10', 2)); // -2
console.log(myParseInt('FFP', 16)); // 255
console.log(myParseInt('--20')); // NaN
console.log(myParseInt('%$+---++-2&&0***^6%%$-+2', 11)); // NaN
console.log(parseInt('--50', 11));
console.log(myParseInt('+4', 11)); // 4
console.log(parseInt('+4)', 11)); // 4
function myParseInt(strNum, base) {
    if (!base) {
        return Number(strNum);
    }
    if (base < 2 || base > 16) {
        throw Error('ERROR: incorect base');
    }
    const abc = [...'0123456789ABCDEF'];
    const baseSymbols = abc.slice(0, base);
    const re = new RegExp("^(-)(-{1,})([" + baseSymbols.join('') + "]{1,})(.*" + ")$");
    // убираем лишние символы по всей строке
    strNum = strNum.replace((new RegExp("[^-" + baseSymbols.join('') + "]", "g")), "");
    //  и вначале и в конце
    strNum = strNum.replace(re, "$1$3");
    let sign = 1;
    let i = 0;
    if (strNum[0] === "-") {
        sign = -1;
        i++;
    }
    let result = 0;
    for (; i < strNum.length; i++) {
        result += baseSymbols.indexOf(strNum[i]) * (base ** (strNum.length - i - 1));
    }
    return result * sign;
}
//# sourceMappingURL=04.js.map