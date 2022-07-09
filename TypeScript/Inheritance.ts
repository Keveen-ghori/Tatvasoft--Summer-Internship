class Person {
    constructor(public fist_Name: string, public last_Name: string) {

    }

    get full_Name(): string {
        return this.fist_Name + ' ' + this.last_Name;
    }

    walk(): void {
        console.log('Walking...');

    }
}

class Student extends Person {
    constructor(public Student_Id: number, fist_Name: string, last_Name: string) {
        super(fist_Name, last_Name)
    }

    takeTest(): void {
        console.log('Taking Test...');

    }
}

class Teacher extends Person {
    override get full_Name() {
        return 'Professor ' + super.full_Name;
    }
}

let Student1 = new Student(1, 'Kevin', 'Ghori');
console.log(Student1.full_Name);
console.log(Student1.takeTest());
console.log(Student1);

let teacher1 = new Teacher('John', 'Smith');
console.log(teacher1.full_Name);
