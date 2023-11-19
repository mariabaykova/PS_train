// поиск максимальной подстроки без повторяющихся символов

console.log( maxUniqueSubstr('aab'));
console.log( maxUniqueSubstr('abcabcbb'));
console.log( maxUniqueSubstr('bbbbb'));
console.log( maxUniqueSubstr('pwwkew'));
console.log( maxUniqueSubstr('pcwordwwket'));

function maxUniqueSubstr( str: string ): string {
    let substrSet = new Map(); // подстрока без повторяющихся символов (символ-->индекс), ее длина substr.size
    let resStr = "";
    const strArr = [...str]; 
    for ( let i = 0; i < strArr.length; i++ ) {
        if ( substrSet.has(strArr[i]) ) {
            if ( substrSet.size > resStr.length ) {
                resStr = [...substrSet.keys()].join('');
            }
            i = substrSet.get( strArr[i] );
            substrSet.clear();
        } else {
            substrSet.set( strArr[i], i );
        }
    }
    return ( substrSet.size > resStr.length ) ? [...substrSet.keys()].join('') : resStr;
}