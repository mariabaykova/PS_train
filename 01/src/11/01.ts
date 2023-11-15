// функция бинарного поиска с cb
// Массив отсортирован. Если компаратор вернул 0, то элемент найден. Использовать бинарный поиск.

console.log( bisect( [1,2,3,4,5,6,7], (val) => 4 - val) ); //3
console.log( bisect( [1,2,3,4,5,6,7], (val) => 234 - val) ); //-1
console.log( bisect( [-1,234, 235], (val) => 234 - val) ); // 1

function bisect( arr, cb ): number {
    function find( from, to ) {
        const startVal = cb(arr[from]);
        const endVal = cb(arr[to]);
        // значения на концах списка одного знака, значит все значения списка не подходят
        if ( startVal * endVal > 0 ) {
            return -1;
        }
        if ( startVal === 0 ) {
            return from;
        }
        if ( endVal === 0 ) {
            return to;
        }
        const mid = Math.floor(from + (to - from) / 2);
        const midVal = cb(arr[mid]);
        if ( midVal === 0 ) {
            return mid;
        }

        if ( startVal * midVal < 0 ) {
            return find( from, mid );
        }
        if ( midVal * endVal < 0 ) {
            return find( mid + 1, to );
        }
    }
    return find( 0, arr.length - 1 );
}