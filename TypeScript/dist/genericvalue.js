"use strict";
class KeyValuePair {
    constructor(Key, value) {
        this.Key = Key;
        this.value = value;
    }
}
let KeyValuePair1 = new KeyValuePair('Hello', 1);
KeyValuePair1.value.toString();
console.log(KeyValuePair1.Key.toString());
function WrapInArray(value) {
    return value;
}
let str = WrapInArray(50000);
console.log(str);
//# sourceMappingURL=genericvalue.js.map