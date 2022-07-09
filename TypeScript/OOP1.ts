class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string; // Set an Optional Property

    constructor(id:number, owner: string, _balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }

    deposit(Account: number){
        if (Account <= 0)
           throw new Error('Invalid Account ')
        this._balance += Account;
        return this._balance;
    }

    private calculateTax(): void {

    }

    getBalance(): number {
        return this._balance;
    }
}

let Account1 = new Account(1, 'Kevin', 10_000);
console.log(Account1);
console.log(Account1 instanceof Account);
console.log(Account1.id);
console.log(Account1.owner);
//console.log(Account1._balance);
console.log(Account1.deposit(10_000));
//Account1.calculateTax();
console.log(Account1.getBalance());
