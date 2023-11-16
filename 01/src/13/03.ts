console.log(twoSum([2, 7, 11, 15], 26));

function twoSum( arr: Array<number>, num: number): Array<number> {
    const res: Array<number> = Array(2);
    const seen = new Map(); // 

    for ( let i = 0; i < arr.length; i++ ) {
        if ( seen.has( num - arr[i] ) ) {
            return [ i, seen.get(num - arr[i])];
        } else {
            seen.set( arr[i], i );
        }
    }
    return res;
}