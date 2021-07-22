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

log(first)
log(second)
log(second.c)
second.c = 2
log(second.c)
log(first)
log(second)
second.c = 3
log(second.c)
log(first)
log(second)
log(props(first, 'c'))

