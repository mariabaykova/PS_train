// 19 lection

interface findIndRes {
    then( cb: ( ind: number ) => void ): this;
    catch( cb: (err: string ) => void ): this;
}

function findIndex( arr, el ): findIndRes {
    for ( const [ i, cur ] of arr.entries() ) {
        if ( cur === el ) {
            return {
                then( cb ) {
                    cb(i);
                    // console.log(this);
                    return this;
                },
                catch() {
                    // console.log(this);
                    return this;
                }
            };
        }
    }

    return {
        then() {
            // console.log(this);
            return this;
        },
        catch(cb) {
            cb('not_found');
            // console.log(this);
            return this;
        }
    };
}   

// findIndex( [1,2,3,4,5,6], 5).then( (res) => { console.log(`it's ok, result is ${res}`) } ).catch(( err ) => { console.log( `error occured ${err}` )});
findIndex( [1,2,3,4,5,6], 5).then(() => console.log);

// findIndex( [1,2,3,4,5,6], 9).catch(( err ) => { console.log( `error occured ${err}` )});