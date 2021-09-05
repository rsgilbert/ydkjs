const log = console.log 

// const a = "3"
// const b = "8"

// const c = 1
// const d = 2

// log(a + b)
// log(c + d)

// const e = [1,2,3]
// const f = [8,0]
// const g = e + f 
// console.log(e)
// console.log(typeof g)
// console.log(String(e))
// console.log(e + f)

// console.log(1 + "2")
// console.log("3" + 4)

// const arr = [1,2]
// arr.valueOf = function() { return 5}
// console.log(arr + 4)

// console.log(true + true)
// console.log(Number(false))
// console.log(Number(true))
// console.log(true.valueOf())

// coerce number to string

// log(3 + "")
// log(true + "")

// const b = {
//     valueOf: function() { return 2 },
//     toString: function() { return "5" }
// }

// console.log(String(b))
// console.log(2 + b)
// console.log("12" + b)


// const a = "3.14"
// var b = a - 1
// console.log(b)
// console.log(a - 0)
// console.log(a / 1)
// console.log("gr" / 1)

// console.log(a * 1)

const a  = [2]
const b = [5]
log(a - b)

log(Number(a))

const c = [6, 1, 7]
log(Number(c)) // NaN
log(Number([1])) // 1. They first stringify then coerce the string to number
log([] - 3) // -3
log([4] - [1]) // 3
log(String([1]))
log(String([]))
log(Number(undefined))
log(Number(null))
log(Number(''))
log(JSON.stringify(String([])))

