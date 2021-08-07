// Foo Bar Using Behavior delegation

let log = console.log

let Foo = {
    init(who) {
        this.me = who;
    },

    identity() {
        return 'I am ' + this.me;
    }
};

let Bar = {
    speak() {
        log(this.identity(), 'is speaking to you');
    }
}

Object.setPrototypeOf(Bar, Foo);


let b1 = Object.create(Bar);
b1.init("Jackie");
b1.speak();

let b2 = Object.create(b1);
b2.init("Chandiru");
b2.speak();

let b3 = Object.create(Foo);
b3.init('Chim');
log(b3.identity());

let b4 = Object.create(Bar);
b4.init("Gern");
b4.speak();


// introspection
// All true
log(Bar.isPrototypeOf(b4));
log(Foo.isPrototypeOf(b3));
log(Object.getPrototypeOf(b1) === Bar)
log(Object.getPrototypeOf(Bar) === Foo)
log(Foo.isPrototypeOf(Bar))
log(Object.getPrototypeOf(Foo).isPrototypeOf(Foo))