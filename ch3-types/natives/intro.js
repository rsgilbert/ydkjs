"use strict"

const log = console.log

/*
let s = new String('Hello world');
console.log(s.toString());
log(typeof s)
log(s)
log(s instanceof String)
log(Object.prototype.toString.call(s))
log(s)
*/
/*
log(Object.prototype.toString.call([1, 2, 3, 4]));
log(Object.prototype.toString.call('goodwich'))
log(Object.prototype.toString.call(/hi/));
log(Object.prototype.toString.call(null))
log(Object.prototype.toString.call(undefined))

log(Object.prototype.toString.call(true))
log(Object.prototype.toString.call(3.32))
*/

/*
let a = new Boolean(false);
if(!a.valueOf()) {
    console.log('hi')
}

console.log(a === new Boolean(false))


log(Object(12))
log(new Object(false))
log(Object('great'))
log(new Number('great').valueOf());

let s = Object('dad');
log(s instanceof String);
log(Object.prototype.toString.call(s))

let a = new String("ab");
let b = a + "OMega";
log(a, b);
log(typeof a, typeof b);

log( Object({a: 3}));


let a = Array(1, 4, 8);
log(a)


a[5] = 11
log(a)
log(a.length)
a[3] = 8
a[4] = 2
log(a)
log(a.length)

let b = Array(4)
b[1] = "Gre"
log(b)
log(b.toString())
log(JSON.stringify(b))
log(b[0])

let d = [undefined, undefined, undefined, undefined]
log(d)
log(b)
log(b[0] === d[0])
log(d.toString())

let r = [1 ,2 ,10]
log(r)
delete r[1]
log(r)

for(let i of r) { console.log(i)}
log(r.toString())
log(Array(3).toString())
log([,,])



let a = Array(4);
let b = [undefined, undefined, undefined]
// log(a.join('-'))
let k = a.map(function(v,i) { 
    console.log(i, v)
    return 8
});
log(k)

log(b.join('-'))
let p = b.map(function(v, i) {
    console.log(v, i, 5);
    return 3
})
log(p)
log(a.length)
a[2] = 'tite'
a.forEach(function(d){log(d, 3)})

// array of undefineds
let e = Array.apply(null, { length: 2})
log(e)



let c = new Object();
c.foo = 'green';
log(c)

let d = { foo: 'time'}
log(d)

let e = new Function('a',"b", "return a * 3 + b;");
console.log(e(2, 5));

let r = new RegExp("^a*", "g");
log(r);

let r2 = /^a/g;


log(Date.now())

log(new Date())
log(Date())

*/


// log(typeof Function.prototype)
// Function.prototype = {j: function() {log('hi'); return 3;}}
// log(typeof Function.prototype)
// Function.prototype()
// log(Function.prototype())
// log(Object.getOwnPropertyDescriptors(Function))


log(typeof RegExp.prototype)
log(RegExp.prototype)
log(RegExp.prototype.toString())


log('nabcbs'.match('b'))

log(Array.isArray([1,2,3]))
log(Array.isArray({1: 3}))

log(Object.getOwnPropertyDescriptor(Array, "prototype"))
Array.prototype.push(2, 4);
log(Array.prototype)
log([1, 23])
log(/{}/)
log(new Array())

let rx = new RegExp();
log(rx)
log(rx.test('green'))
let r2 = /x/
log(r2.test('tiext'))