// функция свертки списка в диапазоны
// принимает неотсортированный массив чисел и возвращает строку, где подряд идущие числа свернуты в диапазоны

console.log( reduce( [1, 3, 6, 6, 8, 7, 11, 45, 46, 46, 2] ) ); // 1-3, 6-8, 11, 45-46
console.log( reduce( [3, 2, 1] ) ); // 1-3, 6-8, 11, 45-46

console.log( reduce1( [1, 3, 6, 6, 8, 7, 11, 45, 46, 2] ) ); // 1-3, 6-8, 11, 45-46
console.log( reduce1( [3, 2, 1] ) ); // 1-3, 6-8, 11, 45-46
console.log( reduce1( [77, 77, 77, 78, 78] ) ); // 1-3, 6-8, 11, 45-46



function reduce( arr: Array<number>): string {
    const resArr: Array<string> = [];
    arr.sort(( a, b ) => {
        if ( a < b ) {
            return -1;
        } else if ( a > b ) {
            return 1;
        }
        return 0;
    });
    // console.log( ...arr );
    let isRange = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( i === arr.length - 1) {
            if ( !isRange ) {
                resArr.push( `${arr[i]}` );
            } else {
                resArr.push( `${resArr.pop()}${arr[i]}` );
                isRange = 0;
            }
            continue;
        }
        if ( arr[i] === arr[i+1] ) {
            continue;
        }
        if ( arr[i+1] > arr[i] + 1 ) {
            if ( !isRange ) {
                resArr.push( `${arr[i]}` );
            } else {
                resArr.push( `${resArr.pop()}${arr[i]}` );
                isRange = 0;
            }
            continue;
        }
        if ( arr[i+1] === arr[i] + 1 ) {
            if ( !isRange ) {
                resArr.push( `${arr[i]}-` );
                isRange = 1;
            }
            continue;
        }
        console.log("попали сюда");

    }
    return resArr.join(", ");
}

function reduce1( arr: Array<number> ): string {
    const resArr: Array<string> = [];
    let arrSet = new Set( arr.sort(( a, b ) => Math.sign(a - b) ));
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