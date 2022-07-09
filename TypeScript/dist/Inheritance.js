"use strict";
class Person {
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
class Student extends Person {
    constructor(Student_Id, fist_Name, last_Name) {
        super(fist_Name, last_Name);
        this.Student_Id = Student_Id;
    }
    takeTest() {
        console.log('Taking Test...');
    }
}
class Teacher extends Person {
    get full_Name() {
        return 'Professor ' + super.full_Name;
    }
}
let Student1 = new Student(1, 'Kevin', 'Ghori');
console.log(Student1.full_Name);
console.log(Student1.takeTest());
console.log(Student1);
let teacher1 = new Teacher('John', 'Smith');
console.log(teacher1.full_Name);
//# sourceMappingURL=Inheritance.js.map