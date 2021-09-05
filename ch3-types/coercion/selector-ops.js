const log = console.log 

// const a = 31
// const b = 'abc'
// const c = null 


// log(a || b)
// log(a && b)

// log(a || c)
// log(a && c)

// log(c || a)
// log(c && a)

const f1 = function() {
    console.log('f1 called')
    return 5
}

const k = 3 || f1() 
console.log(k)

// const d = f1() ? 5 : f1()
// console.log('d is ', d)
