class KeyValuePair<T, U>{
    constructor(public Key: T, public value: U){}
}

let KeyValuePair1 = new KeyValuePair<string, number>('Hello', 1);
KeyValuePair1.value.toString();
console.log(KeyValuePair1.Key.toString());


// Function
function WrapInArray<T>(value:T){
    return value;
}

let str = WrapInArray<number>(50_000);
console.log(str);
