// Implementation of foo bar using class syntax

let log = console.log

class Foo {
    constructor(who) {
        this.me = who;
    }

    identity() {
        return 'I am ' + this.me;
    }

    outputMe() {
        log(this.identity());
    }
}

class Bar extends Foo {
    constructor(who, language) {
        super(who);
        this.language = language;
    }

    speak() {
        log(this.identity(), 'is speaking to you');
    }
    outputMe() {
        super.outputMe();
        log('And can also speak', this.language);
    }
}

let b1 = new Bar('Jave', 'Python');
Foo.prototype.identity = function() {log('output')}
b1.outputMe();

let b2 = new Bar('kamwo', "java")
b2.outputMe();
