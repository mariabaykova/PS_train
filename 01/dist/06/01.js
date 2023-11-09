// сделать декоратор, который откладывает выполнение переданной функции на cooldown мс, если же функция декоратор вызвана раньше, то отмена запланированного вызова и заново планируем вызов через cooldown мс
function laugh(...args) {
    console.log("Ha-ha!");
    console.log(...args);
}
const debouncedLaugh = debounce(laugh, 200);
debouncedLaugh(1);
debouncedLaugh(2);
debouncedLaugh(3);
setTimeout(() => debouncedLaugh(4), 2000);
debouncedLaugh(5);
function debounce(fn, cooldown) {
    let timerId;
    return function (...arguments) {
        if (timerId != null) {
            console.log(`cancel ${timerId}`);
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => { fn.apply(this, arguments); timerId = null; }, cooldown);
    };
}
//# sourceMappingURL=01.js.map