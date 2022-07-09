// enums represents a list of related constant
//One Way

const small = 1;
const medium = 2;
const large = 3;

// Other Way

enum Size {Small, Medium, Large }; // default it assign small to 0, medium to 1, etc

//enum Size {Small = 1, Medium, Large };

let MySize: Size = Size.Medium;
console.log(MySize); // o/p is 1