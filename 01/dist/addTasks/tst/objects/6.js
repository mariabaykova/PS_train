let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test";
// apple и __proto__ выведены в цикле
for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}
// список свойств, разделённых запятой, выведен с помощью toString
console.log(dictionary.toString()); // "apple,__proto__"
//# sourceMappingURL=6.js.map