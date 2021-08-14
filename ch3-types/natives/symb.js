const log = console.log
/*
let mySmb = Symbol("great oak");
log(mySmb);
log(typeof mySmb);
log(mySmb.toString());

function f2() {log('f2')}
// log(Object.getOwnPropertyDescriptors(f2))
*/
let s = Symbol("green")
let o = {
    a: 2,
    [s]: 'Green',
    [Symbol("yellow")]: 'yellow'
}

log(o)
log(o[s])
log(Object.getOwnPropertySymbols(o));
log(JSON.stringify(o))

log("green".indexOf("en"))
