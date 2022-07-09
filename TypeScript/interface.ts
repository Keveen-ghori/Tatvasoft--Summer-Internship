// interface has not behavioral methods.

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

class CloudCalander implements Calender {
    constructor(public name: string) { }

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}

let cal = new CloudCalander('Saturday');
console.log(cal.name);
 
