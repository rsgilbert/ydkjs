const log = console.log 
/*
let dif = (0.1 + 0.2) - .3
let difFixed = dif.toFixed(25)
log(dif.toExponential())

log(difFixed)

log(Number.EPSILON.toFixed(25))
log(Number.EPSILON)
log(Number.EPSILON.toPrecision(2))

log(0.3.toFixed(20))
log((0.1 + 0.2).toFixed(20))
log(0.3.toPrecision(30))
log(Number.EPSILON.toFixed(30))

let machineEpsilon = Math.pow(2, -52)
log(machineEpsilon)
log((machineEpsilon - Number.EPSILON).toPrecision(50))

function isClose(n1, n2) {
    return Number.EPSILON > Math.abs(n1 - n2) 
}

log(isClose(0.1 + 0.2, 0.3))
log(Number.MAX_VALUE)
log(Number.MIN_VALUE.toPrecision(5))
log(Number.MAX_SAFE_INTEGER.toPrecision(3))
log(Number.MAX_SAFE_INTEGER)
log(Number.MIN_SAFE_INTEGER)
log(Number.NEGATIVE_INFINITY)
log(Number.NaN)
log(Number.POSITIVE_INFINITY)
log(Math.pow(2, 53))
log(Number.MAX_SAFE_INTEGER.toString().length)
*/

/*
// testing
log(Number.isInteger('32'))
log(Number.isInteger(-12.1))
log(Number.isInteger(-1.0))

function isInt(n) {
    return typeof n === 'number' && n % 1 === 0
}

log(isInt(3.2));
log(isInt('1'))
log(isInt(-24));

// safe
log(Number.isSafeInteger(Math.pow(2, 53)))
log(Number.isSafeInteger(Math.pow(2, 53)))
log(Number.isSafeInteger(Math.pow(2, 53) - 1))
log(Number.isSafeInteger(129))

*/

// bitwise
log(3 | 0)
log(Math.pow(2, 53) | 0)
let k = Number.MAX_VALUE  | 0
log(k)
log(Number.MAX_SAFE_INTEGER | 0)

log((Math.pow(2, 32) - 1) | 0)
log(Math.pow(2, 23) | 0)
log((9e8) | 0)
log((1e32) | 0)
log(1e-32 | 0) // bitwise only works for integers
log(1e-31 | 0)
log(1e-30 | 0)
log((9e-30).toFixed(45))
log(Number.POSITIVE_INFINITY | 0)