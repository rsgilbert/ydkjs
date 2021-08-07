"use strict"

let log = console.log
let props = (o, p) => Object.getOwnPropertyDescriptor(o, p)

let first = {
    a: 2, b: 5,
    get c() { return this.a + this.b },
    set c(v) {
        this.a *= v
        this.b *= v
    }
}
let second = Object.create(first)
let third = Object.create(second)

// log(first)
// log(second)
// log(second.c)
// second.c = 2
// log(second.c)
// log(first)
// log(second)
// second.c = 3
// log(second.c)
// log(first)
// log(second)
// log(props(first, 'c'))

// implicit shadowing
let an = {
    a: 2
}

let my = Object.create(an)
log(my.a)
log(an.a)

log(my.hasOwnProperty('a')) // false
log(an.hasOwnProperty('a')) // true

my.a ++;
log(my); // 3
log(an) // 2
log(my.hasOwnProperty('a')) // true
an.b = 31
log(an.b) // 31
an.b++
log(my.b) // 32