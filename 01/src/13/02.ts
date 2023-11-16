// пересечение диапазонов
// функция, которая принимает 2 строки с числовыми диапазонами и возвращает новую строку, где отображены пересечения этих интервалов

// 1. раскрыть интервалы обеих строк (2 структуры Set)
// 2. найти пересечение
// 3. схлопнуть

console.log( intersectRanges('1-2; 4-6; 9-11', '1-5; 10-14; 15') ); // 1-2, 4-5, 10-11
console.log( intersectRanges('1-10; 4', '2-3') ); // 1-2, 4-5, 10-11


function intersectRanges( str1: string, str2: string ): string {
    const arr1 = str1.split(";").map( (el) => {
        const [ from, to, ] = [...parceRange(el)];
        return unwrapRange( from, to );
    } );
    const set1: Set<number> = new Set(arr1.map( (el) => [...el]).reduce( ( acc, cur ) => [...acc, ...cur], [] ));
    const arr2 = str2.split(";").map( (el) => {
        const [ from, to, ] = [...parceRange(el)];
        return unwrapRange( from, to );
    } );
    const set2: Set<number> = new Set(arr2.map( (el) => [...el]).reduce( ( acc, cur ) => [...acc, ...cur], [] ));
    // console.log(set1);
    // console.log(set2);
    return wrapIterable(intersect2Sets(set1, set2));

 
}
function parceRange( str: string ): Array<number> {
    if ( /^\s*\d+\s*-\s*\d+\s*$/.test( str )) {
        return str.split("-").map( (el) => Number(el) )
    } else if (/^\s*\d+\s*$/.test( str ) ) {
        return [Number(str), Number(str)];
    } else {
        throw Error("incorrect range format");
    }
}
function wrapIterable( iterableIter: IterableIterator<number> ): string {
    const resArr: Array<string> = [];
    let arrSet = new Set( [...iterableIter].sort(( a, b ) => Math.sign(a - b) ));
    for ( let el of arrSet ) {
        let curEl = el;
        resArr.push( `${curEl}` );
        while( arrSet.has( curEl ) ) {
            arrSet.delete( curEl++ );
        }
        if ( `${curEl - 1}` !== resArr.at(-1) ) {
            resArr[resArr.length - 1] += "-" + (curEl - 1);
        }
    }
    return resArr.join(", ");
}

function unwrapRange<T>( from: number, to: number): IterableIterator<T> {
    if ( from > to ) {
        throw Error(`from=${from} is greater than to=${to}`);
    }
    let nextVal = from;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return (nextVal <= to) ? 
                { value: nextVal++, done: false} : 
                {value: undefined, done: true};
        }
    }
}
function intersect2Sets<T>( set1: Set<number>, set2: Set<number>): IterableIterator<T> {
    const iter1 = set1[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iter1.next();
            if ( v.done ) {
                return { value: undefined, done: true };
            } else {
                while( !set2.has(v.value) ) {
                    if ( v.done ) {
                        break;
                    }
                    v = iter1.next();
                }
                if ( v.done ) {
                    return { value: undefined, done: true };
                } else {
                    return { value: v.value, done: false };
                }
            }
        }
    }
}
