let a = {
    valueOf: function() { return "18"}
}

// console.log(Number(a))

var b = {
    toString: () => "78"
}

// console.log(Number(b))

let c = {
    toString: () => "8",
    valueOf: () => undefined
}

// console.log(Number(c)) // NaN

var d = [1, 2]
d.toString = () => d.join("")
 
// console.log(Number(d))

var e = [23, 3]
e.valueOf = function() {
    return this[0] * this[1]
}

e.toString = function() {
    this[0] + this[-1]
}

// console.log(Number(e))

// console.log(Number([1, 2]))
// console.log(Number([]))
// console.log(Number({}))
// console.log(Number({a: 12}))

const g = Object.create(null)
// g.valueOf = () => "2"
// console.log(g)
// console.log(Number(g)) 