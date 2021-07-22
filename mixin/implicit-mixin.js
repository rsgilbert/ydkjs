let Sth = {
    cool: function cool() {
        this.greeting = 'Hello';
        this.count = this.count ? this.count + 1 : 1;
    }
}

let Another = {
    cool: function cool() {
        Sth.cool.call(this);
    }
}

let log = console.log

// Sth
log(Sth.count)
log(Sth.greeting)
Sth.cool()
log(Sth.count)
log(Sth.greeting)
Sth.cool()
log(Sth.count)

// Another
log("** another **")
log(Another.count)
log(Another.greeting)
Another.cool()
log(Another.count)
log(Another.greeting)
Another.cool()
log(Another.count)
log(Another.greeting)

