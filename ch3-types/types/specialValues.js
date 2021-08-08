const log = console.log
/*
var p
var undefined
function f1() {
    undefined = 2
    console.log(undefined)
}
f1()
undefined = 99
log(undefined)
log(typeof undefined)
log(p)
log(typeof p)
undefined = undefined
log(undefined)

*/

/*
let a = 21
console.log(void a)
console.log(a)

function f0() {
    console.log('you called f0')
    return 'hi'
}
function f1(shouldReturn) {
    if(shouldReturn) {
        return f0()
    }
    else return void f0()
}

console.log(f1(true))
console.log(f1(false))
*/

/*
let t = setTimeout(function() {console.log('timeout')}, 100)
//console.log(t)
*/


/*
// NaN

let k = 2 / 'foo';
log(k)
log(typeof k)

log ('k' - 'k')
log(NaN)
log(k == NaN)
log(k === NaN)
log(k == k)
log(('k' - 'k') == ('k' - 'k') )
log(NaN === NaN)
log(isNaN(k))
log(isNaN(k))
log(isNaN(21))
log(isNaN('green'))
log(Number.isNaN('global'))
log(Number.isNaN(3))
log(Number.isNaN(NaN))
log(Number.isNaN(k))

function isNanValue(n) {
    return isNaN(n) && typeof n === 'number';
}

log(isNanValue('global'))
log(isNanValue(3))
log(isNanValue(NaN))
log(isNanValue(k))
log(typeof NaN)
log(typeof(Number.NaN))

function isnan2(n) {
    return n !== n;
}

log(isnan2('global'))
log(isnan2(3))
log(isnan2(NaN))
log(isnan2(k))

Number.isNaN = function() {return 'papaya' }

log(Number.isNaN(3))

*/


// Infinites

/*
let i = 1 / 0
// log(i + 3)

// log(Number.MAX_VALUE + (Math.pow(2, 969) * 2 - 1))
log(Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY)


let a = 0 / -3;
log(a)
log(-0 == +0)
log(2 * -0)
log(+0)


log((-0).toString())
log(String(a))
log(JSON.stringify(a))

log(Number("-0"))

log(JSON.parse("-0"))


log(0 < -0)

log(`${-0}`)
log(-0)

log(3 / 0)
function isNegZero(n) {
    return n === 0 && (1 / n) === Number.NEGATIVE_INFINITY
}

log(isNegZero(0))
log(isNegZero(-0))
*/
// special equality
log(Object.is(NaN, NaN))
log(Object.is((0/0), 'ka' * 3))
log(Object.is(3, NaN))
log(Object.is(-0, 0))
log(Object.is(-0, -0))
log(Object.is({a: 3}, { a: 3}))
log({ a: 3} === { a: 3})

// Object.is polyfill
function isAbsolutelyEqual(v1, v2) {
    // Test for -0
    if(v1 === 0 && v2 === 0) {
        return 1 / v1 === 1 / v2;
    }
    // Test for NaN
    if(v1 !== v1) {
        return v2 !== v2
    }
    // Otherwise
    return v1 === v2;
}

log(isAbsolutelyEqual(0, -0))
log(isAbsolutelyEqual(-0, -0))
log(isAbsolutelyEqual(NaN, 3 / 'green'))
log(isAbsolutelyEqual(2, 2))
log(isAbsolutelyEqual(NaN, 2))