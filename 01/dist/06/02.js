// написать простейший event emitter
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventEmitter_eventsList;
class EventEmitter {
    constructor() {
        // обработчики будем хранить здесь 
        _EventEmitter_eventsList.set(this, new Map());
    }
    getEventList(event) {
        let eventList = __classPrivateFieldGet(this, _EventEmitter_eventsList, "f").get(event);
        if (eventList == null) {
            eventList = new Set();
            __classPrivateFieldGet(this, _EventEmitter_eventsList, "f").set(event, eventList);
        }
        return eventList;
    }
    // вносим (включаем) в список обработчик-коллбек для события, возвращаем этот коллбек
    on(event, cb) {
        this.getEventList(event).add(cb);
        return cb;
    }
    // выключаем обработчик cb (или все обработчики) для конкретного события
    off(event, cb) {
        if (!event) {
            // выключаем все события и их обработчики соотв-но
            __classPrivateFieldGet(this, _EventEmitter_eventsList, "f").clear();
            return;
        }
        if (!cb) {
            // выключаем все обработчики для события event
            this.getEventList(event).clear();
            return;
        }
        return this.getEventList(event).delete(cb);
    }
    // этот метод принимает событие и данные
    emit(event, ...payload) {
        const store = this.getEventList(event);
        store.forEach((cb) => {
            cb(...payload);
        });
    }
    once(event, cb) {
        // запланировать так, чтобы она выполнилась лишь 1 раз
        const wrapper = (...args) => {
            try {
                cb(...args);
            }
            finally {
                this.off(event, wrapper);
            }
        };
        return this.on(event, wrapper);
        // возвращает cb
        // возвращаем wrapper, потому что он используется для отмены
    }
}
_EventEmitter_eventsList = new WeakMap();
function testFn(arg) {
    console.log(`hello! ${arg}`);
}
console.log(testFn("Kate"));
// console.log(Object.getOwnPropertyDescriptors(testFn));
// Object.defineProperty(testFn, 'once', { value: 0 });
// console.log(Object.getOwnPropertyDescriptors(testFn));
// console.log(testFn.once);
const e = new EventEmitter();
e.once('foo', console.log);
e.once('foo', testFn);
e.once('foo', testFn);
console.log("cb list of foo 1");
console.log(e.getEventList("foo"));
e.on('foo', console.log);
console.log("cb list of foo 2");
console.log(e.getEventList("foo"));
e.emit('foo', 1, 2);
console.log(e.getEventList("foo"));
e.emit('foo', 3);
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// The Set object lets you store unique values of any type, whether primitive values or object references.
//# sourceMappingURL=02.js.map