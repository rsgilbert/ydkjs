const log = console.log 

function boolCount(a, b, c) {
    return !!a + !!b + !!c
}

// log(boolCount(3, "h", false)) // 2
// log(boolCount(0, 0, false)) // 0
// log(boolCount(3, "", true)) // 2
// log(boolCount(true, 5, "G")) // 3
log(boolCount('', 'k', 'da')) // 2
log(boolCount('', false, true)) // 1

function onlyOne() {
    var sum = 0
    Array.from(arguments).forEach(a => {
        sum += !!a
    })
    return sum == 1
}

let a = true
let b = false 
// log('* onlyOne *')
// log(onlyOne(a, b)) // true
log(onlyOne(a, b, 0, '', NaN)) // true
log(onlyOne(a, undefined, a)) // false


// log(true + 0)
// log(false + 0)
// log(true + false)
// log(3 + false)
// log(10 + true)
// log(true * 1)
// log(false / 2)
// log(true * 10)