let log = console.log


function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
Bar.prototype.myLabel = function() {
    return this.label;
}

Bar.prototype.camera = 'My camera'
// here we make a new Bar.prototype linked to Foo.prototype
// log(Object.getOwnPropertyDescriptors(Bar.prototype))
// Pre-ES6
// throws away default existing Bar.prototype
// Bar.prototype = Object.create(Foo.prototype);

// ES6+
// Modifies existing Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype);
log("myName" in Bar.prototype)
log(Object.getPrototypeOf(Bar.prototype))
for(let p in Bar.prototype) {log('found', p)}

// Beware! New Bar.prototype.constructor is gone,
// and might need to be manually fixed if you're
// in the habit of relying on such properties



let b = new Bar("coolBar", "The baddest bar label");

log(b.myName());
log(b.myLabel());
log(b.camera)

