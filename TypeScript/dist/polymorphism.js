"use strict";
class Person1 {
    constructor(fist_Name, last_Name) {
        this.fist_Name = fist_Name;
        this.last_Name = last_Name;
    }
    get full_Name() {
        return this.fist_Name + ' ' + this.last_Name;
    }
    walk() {
        console.log('Walking...');
    }
}
class Student2 extends Person1 {
    constructor(Student_Id, fist_Name, last_Name) {
        super(fist_Name, last_Name);
        this.Student_Id = Student_Id;
    }
    takeTest() {
        console.log('Taking Test...');
    }
}
class teacher2 extends Person1 {
    get full_Name() {
        return 'Professor ' + super.full_Name;
    }
}
class Principle extends Person1 {
    get full_Name() {
        return 'Principle ' + super.full_Name;
    }
}
printNames([
    new Student2(1, 'Kevin', 'Ghori'),
    new teacher2('John', 'Smith'),
    new Principle('Mary', 'Smith')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.full_Name);
    }
}
//# sourceMappingURL=polymorphism.js.map