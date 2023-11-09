// написать простейший event emitter

class EventEmitter {
    // обработчики будем хранить здесь 
    #eventsList = new Map();

    getEventList( event ) {
        let eventList = this.#eventsList.get(event);

        if ( eventList == null ) {
            eventList = new Set();
            this.#eventsList.set( event, eventList);
        }

        return eventList;
    }

    // вносим (включаем) в список обработчик-коллбек для события, возвращаем этот коллбек
    on ( event, cb ) {
        this.getEventList( event ).add(cb);
        return cb;
    }

    // выключаем обработчик cb (или все обработчики) для конкретного события
    off ( event?, cb? ) {
        if ( !event ) {
            // выключаем все события и их обработчики соотв-но
            this.#eventsList.clear();
            return;
        }
        if ( !cb ) {
            // выключаем все обработчики для события event
            this.getEventList(event).clear();
            return;
        }

        return this.getEventList(event).delete(cb);
    }

    // этот метод принимает событие и данные
    emit( event, ...payload ) {
        const store = this.getEventList(event);

        store.forEach((cb) => {
            cb(...payload);
        });

    }

    once( event, cb ) {
        // запланировать так, чтобы она выполнилась лишь 1 раз
        const wrapper = ( ...args ) => {
            try {
                cb( ...args );
            } finally {
                this.off(event, wrapper);
            }
        };

        return this.on(event, wrapper);
        // возвращает cb
        // возвращаем wrapper, потому что он используется для отмены

    }

}

function testFn( arg ) {
    console.log(`hello! ${arg}`);
}

console.log(testFn("Kate"));

// console.log(Object.getOwnPropertyDescriptors(testFn));
// Object.defineProperty(testFn, 'once', { value: 0 });
// console.log(Object.getOwnPropertyDescriptors(testFn));
// console.log(testFn.once);


const e = new EventEmitter();
e.once( 'foo', console.log );
e.once( 'foo', testFn );
e.once( 'foo', testFn );
console.log("cb list of foo 1");
console.log(e.getEventList("foo"));

e.on('foo', console.log);
console.log("cb list of foo 2");
console.log(e.getEventList("foo"));

e.emit('foo', 1, 2 );
console.log(e.getEventList("foo"));
e.emit('foo', 3 );




// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// The Set object lets you store unique values of any type, whether primitive values or object references.