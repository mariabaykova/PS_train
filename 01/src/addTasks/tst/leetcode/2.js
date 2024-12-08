function canBeValid(s, locked) {
    var cash = new Map();
    return rec(s, locked);
    function rec(s, locked) {
        // console.dirxml(cash);
        var key = s + ";" + locked;
        if (s.length === 0) {
            return true;
        }
        if (cash.has(key)) {
            return cash.get(key);
        }
        if (s.length % 2 > 0) {
            // console.log(`string ${s}, length is ${s.length}`);
            cash.set(key, false);
            return false;
        }
        // base case
        if (s.length == 2) {
            // console.log(`base case s=${s}`);
            if (s == "()"
                || locked == "00"
                || (s == "))" && locked[0] == "0")
                || (s == "((" && locked[1] == "0")) {
                // console.log(`can be valid`);
                cash.set(key, true);
                return true;
            }
            // console.log(`cannot be valid`);
            cash.set(key, false);
            return false;
        }
        // console.log(`check ${s}, length>2`);
        // (A)
        // console.log(`check (A) for ${s} and ${locked}`);
        // console.log(`substring is ${s.substring(1, s.length-1)}, ${locked.substring(1, locked.length-1)}`);
        else if (((s[0] == "(" && s[s.length - 1] == ")") || (!locked[0]
            && !locked[locked.length - 1]) || (s[0] == "("
            && s[s.length - 1] == "("
            && !locked[locked.length - 1]) || (s[0] == ")"
            && s[s.length - 1] == ")"
            && !locked[0]))
        // && rec(s.substring(1, s.length-1), locked.substring(1, locked.length-1) ) 
        ) {
            // cash.set(s.substring(1, s.length-1) + ";" + locked.substring(1, locked.length-1), true);
            // return true;
            return rec(s.substring(1, s.length - 1), locked.substring(1, locked.length - 1));
            // return canBeValid(s.substring(1, s.length-1), locked.substring(1, locked.length-1) );
        }
        else {
            // AB
            // console.log(`check AB for ${s} and ${locked}`);
            for (var i = 2; i < s.length; i = i + 2) {
                var _a = [s.substring(0, i), s.substring(i)], beginStr = _a[0], endStr = _a[1];
                var _b = [locked.substring(0, i), locked.substring(i)], beginLocked = _b[0], endLocked = _b[1];
                if (cash.has(beginStr + ";" + beginLocked)) {
                    if (cash.has(endStr + ";" + endLocked)) {
                        return cash.get(beginStr + ";" + beginLocked) && cash.get(endStr + ";" + endLocked);
                    }
                }
                return rec(beginStr, beginLocked) && rec(endStr, endLocked);
                // if ( rec(beginStr, beginLocked) ) {
                //     cash.set( beginStr + ";" + beginLocked, true);
                //     if ( rec(endStr, endLocked) ) {
                //         cash.set( endStr + ";" + endLocked, true);
                //         return true;
                //     } else {
                //         cash.set( endStr + ";" + endLocked, false);
                //         // return false;
                //     }
                //     // return true;
                // } else {
                //     cash.set( beginStr + ";" + beginLocked, false);
                //     // return false;
                // }
            }
            console.log("!!!");
            return false;
        }
    }
}
;
