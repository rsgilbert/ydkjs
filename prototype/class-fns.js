let log = console.log

function Foo() { log('hi')}

// log(Foo.prototype)
// let p = Object.getOwnPropertyDescriptor(Foo, 'prototype')
// log(p)


let a = { c: 4 }
let b = Object.create(a)
// log(b)
// log(b.c)
// log(a.prototype)
// log(b.prototype)

let d = Object.create(Foo)
log(d)
log(d.prototype)
log(Foo.prototype)

log(Foo.prototype === d.prototype)

let f = new Foo();
log(f)
log(Object.getPrototypeOf(f))
log(Object.getPrototypeOf(f) === Foo.prototype)




















