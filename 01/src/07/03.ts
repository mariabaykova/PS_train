// преобразование camel case --> dash-style

console.log(dasherize("createDocumentFragment"));
console.log(dasherize("PUPERSuperMAN"));
console.log(dasherize("VirtualDOMFragment"));
console.log(dasherize("VirtualDOMFragmentDOMFragment"));
console.log(dasherize("Some123VALUE10"));
console.log(dasherize("SOME123VALUE10"));
console.log(dasherize("123VALUE10"));
console.log(dasherize("S123VALUE10"));

function dasherize( str: string ): string {
    return str
            .replace( /([0-9]{1,})/g, "$1-")        // "-" после всех групп цифр 
            .replace( /([a-z])([A-Z])/g, "$1-$2")   // "-" между маленькой и большой везде
            .replace( /([A-Z]{1,})([A-Z]{1})([a-z$])/g, "$1-$2$3") // "-" между двумя большими, если следом маленькая
            .replace( /(-)$/, "") // убрать "-" в конце строки
            .toLowerCase()
            ;
}