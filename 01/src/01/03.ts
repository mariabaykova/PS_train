console.log(format('Hello ${name}, my age is ${age * 2 + age}', {name: 'Bob', age: 12})); // 'Hello Bob! My age is 24.'

function format( ptt: string, obj: Object ): string {
   return ptt.replace( 
                        /\${(.*?)}/g, 
                       ( _, exprFound ) => { 
                        return Function( ...Object.keys(obj), `return ${exprFound}`)(...Object.values(obj));

                    } 
   );


}

console.log(format1('Hello ${name}, my age is ${age * 2 + age}', {name: 'Bob', age: 12})); // 'Hello Bob! My age is 24.'



function format1( templ, obj ) {
    const args = Object.keys(obj);
    const argsVals = Object.values(obj);

    const interpolate = new Function( ...args, `return \`${templ}\``);
    return interpolate(...argsVals);
}


