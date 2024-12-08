function canBeValid(s: string, locked: string): boolean {

        // if ( s.length === 0 ) {
        //     return true;
        // }
    if ( s.length % 2 > 0) {
        // console.log(`string ${s}, length is ${s.length}`);
        return false;
    }
    // base case
    if ( s.length == 2 ) {
        // console.log(`base case s=${s}`);
        if ( 
                s == "()"
                || locked == "00"
                || ( s == "))" && locked[0] == "0")
                || ( s == "(("  && locked[1] == "0")
        ) {
            // console.log(`can be valid`);
            return true;
        }
        // console.log(`cannot be valid`);
        return false;
    }
    // console.log(`check ${s}, length>2`);
    // (A)
    // console.log(`check (A) for ${s} and ${locked}`);
    // console.log(`substring is ${s.substring(1, s.length-1)}, ${locked.substring(1, locked.length-1)}`);
     else if ( 
           (
            ( 
                s[0] == "(" && s[s.length - 1] == ")"
            ) || (
                !locked[0] 
                && !locked[locked.length - 1]
            ) || (
                s[0] == "("
                && s[s.length - 1] == "("
                && !locked[locked.length - 1]
            ) || (
                s[0] == ")"
                && s[s.length - 1] == ")"
                && !locked[0]
            )
           )
            // && rec(s.substring(1, s.length-1), locked.substring(1, locked.length-1) ) 
        ) {
            // cash.set(s.substring(1, s.length-1) + ";" + locked.substring(1, locked.length-1), true);
            // return true;
            return canBeValid(s.substring(1, s.length-1), locked.substring(1, locked.length-1) );
    } else {
    // AB
    // console.log(`check AB for ${s} and ${locked}`);
    for ( let i = 2; i < s.length; i=i+2 ) {
        const [beginStr, endStr] = [s.substring( 0, i ), s.substring( i )];
        const [beginLocked, endLocked] = [locked.substring( 0, i ), locked.substring( i )];
        return canBeValid(beginStr, beginLocked) && canBeValid(endStr, endLocked);
    }
    console.log("!!!");
    return false;
    }
};