// преобразование camel case --> dash-style

console.log(dasherize("createDocumentFragment"));
console.log(dasherize("PUPERsuperMAN"));
console.log(dasherize("VirtualDOMFragment"));

function dasherize( str: string ): string {
    return str.replace( /([A-Z]+?)/g, (_, p1) => `-${p1.toLowerCase()}` ).replace(/^(-)/, "");
}