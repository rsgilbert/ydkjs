let log = console.log

let a = 2
let b = a // b is copy of value in a
b++;
log(b, a)

let c= [ 1, 2, 3]
let d = c; // d is a reference to the shared [1,2,3] value
d.push(5)
log(c, d)
c=  [2]
log(c, d)

function f1(x) {
    x.push(3)
    log(x)

    x = [1, 2]
    x.push(10)
    log(x)
}

let ar = [1, 2, 3, 4, 5]
f1(ar);

log(ar)

function f2(x) {
    x.push(4)
    log(x)
    x.length = 0 // empty array inplace
    x.push(1, 2)
}

f2(ar)
log(ar)

// mimic pass by value
log(ar.slice())
log(ar.slice() === ar)

// mimic pass by reference
function f3(wrapper) {
    wrapper.a = 41
}

let o = { a: 3 }
f3(o)
log(o.a)

function f4(x) {
    log('f4 before:',x);
    x = x + 1;
    log('f4 after:', x)
} 

let j = 2;
let k = new Number(a);
f4(k);
log('b is ', k)
k.name = 'joel'
log(k)
