function foo() {
    console.log(this.a)
}

let obj = {
    a: 2,
    foo: foo,
    biz: function biz() {
        console.log(this.a)
    }
}


obj.foo() // 2

// Implicitly lost
let bar = obj.foo
a = 10
bar() // 10

let b = obj.biz
b() // 10

//// Most common and unexpected way
function f1() {
    console.log(this.z)
    console.log(this)
}

function doF(fn) {
    // fn is just another reference to f1
    fn() // <-- Call-site
}

let ob = {
    a : 2,
    f1
}

z = 8
// doF(ob.f1) // 8

setTimeout(function d() {
    console.log(this.z)
}, 1) // undefined (!)

