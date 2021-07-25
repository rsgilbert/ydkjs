let log = console.log

Task = {
    setID: function (ID) { this.id = ID; },
    outputID: function() { log(this.id); }
}

// Make XYZ delegate to Task
XYZ = Object.create(Task);

XYZ.prepareTask = function(ID, Label) {
    this.label = Label;
    this.setID(ID);
}

XYZ.outputTaskDetails = function() {
    this.outputID();
    log(this.label);
}

// Usage
let myX = Object.create(XYZ)
myX.prepareTask(10, 'Green');
myX.outputTaskDetails();

