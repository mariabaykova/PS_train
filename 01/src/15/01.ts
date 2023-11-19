// поиск подстроки в строке
// регулярки использовать нельзя

console.log(includes('bobby hell', 'bob')); // true
console.log(includes('&&&abba', 'aba')); // false

function includes( str: string, subStr: string): boolean {
    if ( subStr.length > str.length ) {
        return false;
    }
    if ( subStr.length === 0 ) {
        return true;
    }
    const strArr = [...str];
    const subStrArr = [...subStr];

    for ( let i = 0; i < strArr.length - subStrArr.length + 1; i++ ) {
        if ( subStrArr[0] === strArr[i] ) {
            // нашли первый символ предполагаемой подстроки
            if ( strArr.join('').substring(i, i + subStrArr.length ) === subStr ) {
                // нашли подстроку, работаем именно с массивами символов, чтобы нормально обработать суррогатные пары
                return true;
            }
        }
    }        
    return false;
}

function includes1( str: string, subStr: string): boolean {
    const strArr = [...str];
    const subStrArr = [...subStr];

    let curSubStr = subStrArr[0];
    let isStarted = false; 
    for ( let i = 0; i < strArr.length - subStrArr.length + 1; i++ ) {
        if ( curSubStr === strArr[i] ) {
            // нашли первый символ предполагаемой подстроки
            if ( str.substring(i, i + subStr.length ) === subStr ) {
                // нашли подстроку
                return true;
            } else {
                // перейти к следующему символу строки
                continue;
            }
        } else {
            continue;
        }

    }
    return false;
}