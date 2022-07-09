class Person1 {
    constructor(public fist_Name: string, public last_Name: string) {

    }

    get full_Name(): string {
        return this.fist_Name + ' ' + this.last_Name;
    }

    walk(): void {
        console.log('Walking...');

    }
}

class Student2 extends Person1 {
    constructor(public Student_Id: number, fist_Name: string, last_Name: string) {
        super(fist_Name, last_Name)
    }

    takeTest(): void {
        console.log('Taking Test...');

    }
}

class teacher2 extends Person1 {
    override get full_Name() {
        return 'Professor ' + super.full_Name;
    }
}

class Principle extends Person1 {
    override get full_Name() {
        return 'Principle ' + super.full_Name;
    }
}


printNames([
    new Student2(1, 'Kevin', 'Ghori'),
    new teacher2('John', 'Smith'),
    new Principle('Mary', 'Smith')
])

function printNames(people: Person1[]){
    for (let person of people){
        console.log(person.full_Name);
        
    }
}