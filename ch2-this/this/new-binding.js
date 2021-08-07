function foo(a) {
    console.log(this)
    this.a = a;
    // console.log('a is ', a)
    // console.log('this a is ', this.a)
}

var bar = new foo(7)
console.log(bar)
// let d =foo(10)
// console.log(d)
