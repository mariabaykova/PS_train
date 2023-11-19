// ломающий коммит 
// имеется множество коммитов и функция проверки работы программы. На одном из коммитов программа начинает ломаться. Нужно найти этот ломающий коммит за минимальное время

const commits = [ 'good', 'bad', 'bad', 'bad' , 'bad', 'bad'    ];
// const commits = [ 'good', 'good', 'good'];
// const commits = [ 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];

const test = (commit) => commit === 'good';

console.log(findFirstBadCommit( commits, test ));

function findFirstBadCommit( commits: Array<string>, test: ( str: string ) => boolean ): number {
    if ( commits.length === 0 ) {
        return -1;
    }
    return helperRec( 0, commits.length - 1);

    function helperRec( first: number, last: number ): number {
        if ( !test(commits[first]) && !test(commits[last]) ) {
            return first;
        }
        if (test(commits[first]) && test(commits[last])) {
            return -1;
        }
        if ( test(commits[first]) && !test(commits[last])) {
            if ( first === last - 1 ) {
                return last;
            }
            const mid = Math.ceil(first + (last - first) / 2);
            if ( test(commits[mid]) ) {
                return helperRec( mid, last );
            } else {
                if ( test(commits[mid - 1])) {
                    return mid;
                }
                return helperRec( first, mid - 1 );
            }
        }
    }
}