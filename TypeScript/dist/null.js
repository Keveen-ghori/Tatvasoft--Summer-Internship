"use strict";
var _a;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
greet(undefined);
greet('Kevin');
function getCustomer(id) {
    return id === 0 ? null : { birthrate: new Date() };
}
(_a = getCustomer(0)) === null || _a === void 0 ? void 0 : _a.birthrate;
//# sourceMappingURL=null.js.map