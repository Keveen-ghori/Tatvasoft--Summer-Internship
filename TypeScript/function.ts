
function calculateTax(income: number, TaxYear: number): number {
    if (income < 50_000 && TaxYear < 2022)
       return income * 1.2
    return income * 1.3;
}

console.log(calculateTax(10_000, 2012));

// in function we can make parameter optional by '?' Symbol
// Ex: calculateTax(income:number, TaxYear?: number) or use default vale like
//calculateTax(income:number, TaxYear: number = 2022)