const log = console.log 

let b = [1, 10, 15, 16]
b.length = 1
log(b)
log(b[1])
b.length = 3
log(b)
b.push('great')
log(b)
log(b.length)