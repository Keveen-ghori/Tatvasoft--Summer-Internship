/* Built in Types:::(Primitive Types)
any
unknown
never
enum
tuple
*/

let sales: number = 123456;// number type
let course: string = 'TypeScript'; // string type
let is_public: boolean = true; // bool type
let level; // 'any' type--> refers to any type of value
level = 1;
level = 'a';

function randers(document:any){
    console.log(document);
}

randers(12345);