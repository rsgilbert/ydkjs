function Vehicle() {
    this.engines = 1;
}

Vehicle.prototype.ignition = function ignition() {
    console.log('Turning on my',this.engines, 'engines')
}

Vehicle.prototype.drive = function drive() {
    this.ignition();
    console.log('Steering and moving around');
}

// Parasitic class Car
function Car() {
    let car = new Vehicle()
    car.wheels = 3;
    let vehDrive = car.drive;

    // override drive
    car.drive = function drive() {
        vehDrive.call(this);
        console.log('Rolling on all', this.wheels, 'wheels');
    }

    return car;
}

let v = new Vehicle();
console.log(v);
v.ignition();
v.drive();

console.log('***')

let c = Car();
console.log(c);
c.ignition();
c.drive();