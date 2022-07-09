"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(Account) {
        if (Account <= 0)
            throw new Error('Invalid Account ');
        this._balance += Account;
        return this._balance;
    }
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
}
let Account1 = new Account(1, 'Kevin', 10000);
console.log(Account1);
console.log(Account1 instanceof Account);
console.log(Account1.id);
console.log(Account1.owner);
console.log(Account1.deposit(10000));
console.log(Account1.getBalance());
//# sourceMappingURL=OOP1.js.map