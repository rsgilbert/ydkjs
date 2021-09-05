const log = console.log 

// |
// no-op idiom
// Numbers that are not 32 bit representable default to 0 before the operation is performed

// log(0 | -0) // 0
// log(0 | NaN)
// log(0 | Infinity)
// log(0 | -Infinity)

// log(0 | 3)
// log(0 | "21.8")


// ~
// Peforms 2's complement
// ~x sames as -(x+1)
// log(~2) // -3
// log(~-15) // 14
// log(~-1)

// let a = "Hello World";
// if(a.indexOf("el") >= 0) {
//     console.log('exists')
// }

// if(a.indexOf("wakeup") == -1) {
//     console.log('Not there')
// }

// Use ~
// Check  if not -1
// if(~a.indexOf('orld')) {
//     // a.index('orld') was not -1
//     console.log('Exists')
// }

// if(!~a.indexOf('gf')) {
//     console.log('Not there')
// }


// Double tilda
// console.log(~3)
// log(~-5)
// log(~-234.131)


// Double tilda 
// log(~~14)
// log(~~2.428)
// log(~~-21.3)

// FLoor
// log(Math.floor(-24))
// log(Math.floor(-23.1))


// Using |
// log(-2.49 | 0)

// M0re than 32 bit (ie. 64 bit numbers) are turned to 0 first
// log(~Number.MAX_VALUE)
// log(Number.MAX_VALUE | 0)
 
// Operator precedence
log(~~1000 / 10) // 100. correct
log(1000 | 0 / 10) // 1000
log(1000 | 0) // 1000
log((1000 | 0) / 10) // 100. Correct
log(~ 5 + 3) // -3. Correct
log(5 | 0 + 3) // 7
log((5 | 0) + 3)  // 8. Correct