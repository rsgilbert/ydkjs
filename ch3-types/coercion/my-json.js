// console.log(JSON.stringify(42))
// console.log((JSON.stringify("42")))
// console.log(JSON.stringify(true))
// console.log(JSON.stringify(null))
// console.log(JSON.stringify(undefined))
// console.log(JSON.stringify(() => {}))

const log = console.log 

// log(JSON.stringify({ a: 3, b: undefined, c: [3, undefined, 10], d: null }))
// log(JSON.stringify([3, null, 10, undefined, 11, () => {}, 14, Symbol("d")]))

// circular ref
// let a = { b: 10 }
// let d = { e: a }
// a.c = d

// JSON.stringify(a)

// let k = { a: 30, b: 3, toJSON: () => ({ a: k.a })}
// console.log(JSON.stringify(k))

// var a = {
//     b: 3, c: "Green", d: [1, 2, 3],
//     e: { b: 22, f: 33, g: 1}
// }


// console.log(JSON.stringify(a, ["b", "e", "g"]))

// const a_str = JSON.stringify(a, (k, v) => {
//     console.log(k, v)
//     if(k === "f" || k === "1") return undefined
//     return v
// })

// console.log(a_str)

// console.log(JSON.stringify(Symbol()))

// JSON.stringify({a: 23, b: 4}, (k, v) => {
//     console.log(typeof k)
//     console.log(JSON.stringify(k))
//     console.log(k, v)
//     return v
// })

// Space
// for pretifying
let a = { b: 23, b: 1, c: [1, 2, 3], d: { e: "mighty"}}

let j = JSON.stringify(a)
j = JSON.stringify(a, null, 1) // indentation
j = JSON.stringify(a, null, " ")
j = JSON.stringify(a, null, 0)
j = JSON.stringify(a, null, 3)
j = JSON.stringify(a, null, "KKK")
j = JSON.stringify(a, null, "abcdefghijklmnopqrstuvwxyz")


console.log(j)