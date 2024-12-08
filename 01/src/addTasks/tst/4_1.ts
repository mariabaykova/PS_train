// изменение области видимости функции

function badIdea() {
    eval('var a = "Hello!"');
    // var a = "Hello";
    console.log(a);
}

badIdea();
// console.log(a);

qqq = 12;
console.log(qqq);
