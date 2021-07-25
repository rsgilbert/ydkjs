let log = console.log

function f1() {
    log('hi')
}

// log(f1.prototype.constructor === f1) // true

let a = new f1();
// log(a.constructor === f1)
// log('constructor' in Object.getPrototypeOf(a))
// log(Object.getPrototypeOf(a) === f1.prototype)

function f2() { return 'dk' }
// log(new f2()) // f2{}

// Mechanics
function Foo(name){
    this.name = name;
}

Foo.prototype.getName = function() {return this.name }
Foo.prototype.radical = 3

let x = new Foo('I am a');
// log(x)
// log(x.getName());

let y = new Foo('I am b');
// log(y.getName());

// delete Foo.prototype.constructor
// log(Object.getOwnPropertyDescriptors(Foo.prototype))




// log(Object.getOwnPropertyDescriptors(Object.prototype))
// log(Object.constructor())
// log(Object.hasOwnProperty("constructor"))
// log(Object.getOwnPropertyDescriptor(Object.prototype, "constructor"))
// delete Object.prototype.constructor
// log(y.constructor === Object)
// log(y.constructor)


function F2() { log('f2 here')}
F2.prototype.name = 'Joel'
let p = new F2();

// log(Object.getPrototypeOf(p) === F2.prototype)
// log(p.name)

Object.defineProperty(F2.prototype, "constructor",  {
    value: function value() {log('hi con')},
    configurable: true, writable: true, enumerable: false
})

p.constructor()