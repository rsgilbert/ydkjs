const log = console.log 

const s1 = Symbol('cool')

log(String(s1))
log(s1)
log(s1.toString())
// log(s1 + '') // TypeError

log(Boolean(s1))
// log(Number(s1)) // TypeError


// log(s1 + 1)





