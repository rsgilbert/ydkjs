// Explicit binding of this

function foo() {
    console.log(this.a)
}

var obj = {
    a: 4
}
// using call
foo.call(obj) // 4

// using apply
foo.apply(obj) // 4

function f1() {
    console.log(this)
}
// uses boxing
f1.call(4) // [Number: 4]

obj = {
    a: 2
}
// Hard binding
// Explicit and strong
var bar = function () {
    foo.call(obj)
}

bar(); // 2
setTimeout(bar, 100)

// hard-bound bar can no-longer have its `this` overridden
bar.call(4) // 2

// Pass-through arguments and return whatever is returned
function foo(sth) {
    console.log(this.a, sth)
    return this.a + sth
}

obj = {
    a: 10
}

bar = function() {
    return foo.apply(obj, arguments)
}

var b = bar(5) // 10 5
console.log(b) // 15

// Reusable helper
// Returns fn with its `this` bound to obj
// Simple bind helper
function bind(fn, obj) {
    // obj will be bound as `this` for fn
    return function() {
        return fn.apply(obj, arguments)
    }
}

var b = bind(foo, { a: 3 })
let r = b(12) // 3 12
console.log(r) // 15

// Built-in binding utility
console.log("*** builtin binding utility ***")
function f5(a1, a2) {
    console.log(this.a, a1, a2)
}
// Returns a new function that is hard-coded to call the original
// function with the this context set as specified
let f5_new = f5.bind({ a: 50 })
f5(10, 100) // undefined 10 100
f5_new(10, 100) // 50 10 100
