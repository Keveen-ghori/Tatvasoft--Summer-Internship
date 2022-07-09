"use strict";
function kgTOLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 1.2;
    }
    else {
        return parseInt(weight) * 1.3;
    }
}
console.log(kgTOLbs(10));
console.log(kgTOLbs('10'));
//# sourceMappingURL=uniontype.js.map