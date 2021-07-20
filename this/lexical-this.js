function foo() {
    return {
        a: 7,
        arrow: (a) => {
            // `this` is inherited from foo
            // Adopt `this` from enclosing scope
            console.log(this.a)
        },
        normal: function(a) {
            console.log(this.a)
        }
    }
}

a = 5;
let o1 = { a: 2 }
let f = foo.call(o1);
f.arrow(8) // 2 (lexical this)
f.normal(3) // 7 (implicit)
f.normal.call({ a: 15 }) // 15 explicit
f.arrow.call(17) // 2 (lexical this)


function f2() {
    setTimeout(() => console.log(this.a), 0)
}

f2.call({ a: 14}) // 14

// Non lexical - uses hard binding
function f3() {
    console.log(this);
    function fn() {
        console.log(this.a)
    }
    let f = fn.bind(this)
    setTimeout(f, 1)
}
let o5 = { a: 6 }
f3.call(o5) // 6