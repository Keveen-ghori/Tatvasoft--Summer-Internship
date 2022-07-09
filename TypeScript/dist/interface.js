"use strict";
class CloudCalander {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
let cal = new CloudCalander('Saturday');
console.log(cal.name);
//# sourceMappingURL=interface.js.map