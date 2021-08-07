let log = console.log

let Task = {
    setID(ID) {
        this.id = ID;
        this.greet();
    },
    outputID() { log(this.id); }
}

// Make XYZ delegate to Task
let XYZ = {
    prepareTask(ID, Label) {
        this.label = Label;
        this.setID(ID);
    },
    outputTaskDetails() {
        this.outputID();
        log(this.label);
    },
    greet() {
        log('Welcome to XYZ');
    }
}

Object.setPrototypeOf(XYZ, Task);

let ABC = {
    prepareTask(ID, Label) {
        this.label = 'I AM ' + Label;
        this.setID(ID);
        log('ABC has prepared your tasks');
    },
    outputTask() {
        log('Label is', this.label);
    },

    greet: function () {
        log('Welcome to ABC')
    }
}

Object.setPrototypeOf(ABC, Task);

// Usage
let myX = Object.create(XYZ);
myX.prepareTask(10, 'Green');
myX.outputTaskDetails();

// ABC
let myA = Object.create(ABC);
myA.prepareTask(15, 'a for Africa');
myA.outputTask();
log(myA)