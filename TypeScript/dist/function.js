"use strict";
function calculateTax(income, TaxYear) {
    if (income < 50000 && TaxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000, 2012));
//# sourceMappingURL=function.js.map