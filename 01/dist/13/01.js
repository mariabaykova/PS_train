// функция определения века по году
console.log(getCentury(31)); // 1
console.log(getCentury(3100)); // 31
console.log(getCentury(3122)); // 32
console.log(getCentury(2000)); // 20
console.log(getCentury(1982)); // 20
console.log(getCentury(2023)); // 21
function getCentury(year) {
    if (year <= 0) {
        throw Error("год должен быть положительным числом");
    }
    const hundreds = (year / 100) ^ 0;
    const fractionalPart = year / 100 - hundreds;
    return (fractionalPart) ? hundreds + 1 : hundreds;
}
//# sourceMappingURL=01.js.map