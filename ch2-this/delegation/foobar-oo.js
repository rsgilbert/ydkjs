// Classical ("prototypal") OO style
let log = console.log

function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
}

function Bar(who) {
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
    log(this.me + " is speaking");
}

let b1 = new Bar("b1");
let b2 = new Bar("second bar");

b1.speak();
b2.speak();
