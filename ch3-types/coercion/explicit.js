const log = console.log 

let a = 42 


let b = a + ""

// log(a)

// log(b)

// log(String(a))

// log(Number("3.112"))

// log(String(NaN))
// log(String(false))
// log(String(11))
// log(Number("Green"))

// log(12 .toString())
// log(+"12.3") // Explcitly convert to number
// log(-"11")
// log("13.21" - "22")
// log("12" + "22") // string concatenation
// log((+"12") + (+"2")) // addition
// log(12 + "23") // concat
// log(1 + +"12")
// log(1 + + + 11 + + + + "5") // 17

// log(- -"12") // 12


// let d =+ "3"
// log(d)
// let k = "5"
// let p =  ++k
// log(p)

// Coerce date
// let d = new Date()
// log(d)
// log(+d)
// log(Number(d))
// log(Date(Number(d)))
// log(new Date(Number(d)))

var t = +new Date()
log(t)

// () is optional if there are no arguments to pass for a constructor call (with new)
log(+new Date)

log(new Number())
log(new Number)

let o = new Object;
log(o)
log(+o)

log(Number)

log(Date.now()) // current timestamp