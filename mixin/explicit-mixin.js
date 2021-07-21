let log = console.log

function mixin(sourceObj, targetObj){
    for(let key in sourceObj) {
        if(!(key in targetObj)) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj
}

let Vehicle = {
    engines: 1,
    ignition: function ignition() {
        console.log('Igniting', this.engines, 'engines');
    },
    drive: function drive() {
        this.ignition();
        console.log("Steering and moving forward");
    }
}

let Car = mixin(Vehicle, {
    engines: 5,
    wheels: 4,
    drive: function drive() {
        Vehicle.drive.call(this);
        console.log('Rolling on all ', this.wheels, ' wheels');
    }
})

Vehicle.drive()
log('**')
Car.drive()