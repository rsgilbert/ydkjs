const { ZERO } = require("long")
const { parse } = require("path")

const log = console.log 


// const a = "3"
// const b = "12green"

// log(Number(a))
// log(Number(b))

// log('parseInt')
// log(parseInt(a))
// log(parseInt(b))
// log(parseInt("ldka231"))
// log(parseInt("2.2kO"))
// log(parseInt("2,21.3"))
// log(parseFloat("2.14kkf")) // 2.14
// log(parseFloat("0,4kf")) // 0
// log(parseInt(true)) // NaN. Operates on string values 
// log(parseFloat([1])) // NaN
// log(parseInt(23))
// log(parseFloat(new Number(22.9)))
// log(parseInt("NaN"))
// log(parseInt("09"))
// log(parseInt("0xF")) // 15
// log(parseInt("0x63A", 16))
// log(parseInt("63A", 16))
// log(parseInt("64", 8))
// log(parseInt("9", 8)) // NaN. 9 not allowed digit for base 8
// log(parseInt(4209, 10))
// log(parseInt(1101, 2)) // 13


// log(parseInt(1/0, 19))
// log(parseInt(Number.POSITIVE_INFINITY))
// log(parseInt(1/0, 5))
// log(parseInt("1/0", 19))
// log(String(-1/0))
// log(parseInt(String(-1/0), 19))
// log(parseInt("-infinity", 24))

// const a = {
//     num: 2,
//     toString() {
//         return this.num * 3
//     }
// }

// log(parseInt(a)) // 6

// const b = Object.create(null)
// b.toString = function() { return "7"} 
// log(parseInt(b))

// log(parseInt('g', 17)) // 16

// log(0.0000000001)
// log(parseInt(0.000000002))
// log(parseInt(false, 16))
log(parseInt('Z', 36))
// F -> BASE 16, MAX 15
// G -> BASE 17, MAX 16
