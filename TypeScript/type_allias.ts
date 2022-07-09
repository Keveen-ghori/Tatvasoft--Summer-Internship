//Mainly used for reusing code

type Employee = {
    readonly id: number,
    name: string,
    retrieves: (date: Date) => void
}

let employees: Employee =  {
    id: 1,
    name: 'Kevin',
    retrieves: (date:Date) => {
        console.log(date);
    }

};

