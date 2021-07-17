// var a = 10
// function foo() {
//     console.log(this.a)
// }
// foo()

var zz = 12
function s() {
    "use strict"
    console.log(zz)
    console.log(this)
}

s()