const log = console.log 

log(Boolean(0))
log(Boolean(NaN))
log(Boolean(''))
log(Boolean(undefined))
log(Boolean(null))
log(Boolean(false))
log(Boolean(-0))

let k = new String("")
log(k)

let d = new Boolean("")
log(d)

log(Boolean(d))

log(Boolean('false'))

/**
 * Falsy list
 * 0
 * -0
 * false
 * ""
 * null
 * undefined
 * NaN
 */