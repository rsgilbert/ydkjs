let log = console.log
function Foo() {
    log('hi', this.a)
}
Foo.prototype.blah =  function() { log('bl')};

// log(Object.getPrototypeOf(a))

let p = Foo.bind({ a: 10 })
// log(Object.getPrototypeOf(p))
// let k = new p()

// In the entire prototype chain of k, does Foo's prototype ever appear
// log(k instanceof Foo)


// k.blah()


// helper utility to see if o1 delegates to o2
function isRelatedTo(o1, o2) {
    function F() {}
    F.prototype = Object.getPrototypeOf(o2);
    return o1 instanceof F;
}

var a = {}
let b = Object.create(a)

// log(isRelatedTo(a, b))

// In the entire [[Prototype]] chain of b, does a's prototype ever appear
// log(Object.getPrototypeOf(a).isPrototypeOf(b))

function F1() {}

let f = new F1()
// log(f instanceof F1)
// log(Object.getPrototypeOf(f))
// log(F1.prototype)
// log(F1.prototype.isPrototypeOf(f))
// log(F1.prototype === Object.getPrototypeOf(f))


function F2() { }
F2.prototype = Object.create(F1.prototype)

F1.prototype.name = 'Hello'

let f2 = new F2();
// log(Object.getPrototypeOf(f).isPrototypeOf(f2))
// log(f2 instanceof F2)
// log(f2 instanceof F1)
// log(f2.__proto__ === F2.prototype)
// log(f.__proto__.isPrototypeOf(f2))
log(f.__proto__)
log(f2.__proto__)
log(F1.prototype)
log(F2.prototype)
// log(f2.__proto__.isPrototypeOf(f))
// log(F1.prototype === f2.__proto__)
log(f2.name)
log(f.__proto__.isPrototypeOf(f2)) // true
log(f2.__proto__.isPrototypeOf(f)) // false
F1.prototype.joke = function() { log('say hahaha')}

f.joke() // say hahaha
log(f.__proto__.__proto__) // {}

function F0() {}


// Simple custom definition of __proto__
Object.defineProperty(Object.prototype, '__prot', {
    get: function() {
        return Object.getPrototypeOf(this)
    },
    set: function(o) {
        Object.setPrototypeOf(this, o)
        return o;
    }
})

// F1's prototype F1.prototype will now have its prototype set to F0.prototype
// Object.setPrototypeOf(F1.prototype, F0.prototype)
// Same thing as commented out above. __prot is our custom definition for __proto__
F1.prototype.__prot = F0.prototype;
log(F1.prototype)
F0.prototype.nickname = 'Johnny';
log(f.nickname) // Johnny
log(f2.nickname) // Johnny
log(f2.__proto__) // F2's prototype == F1 {}
log(f2.__proto__.__proto__) // F1's parent prototype == F1 {name, joke}
log(f2.__proto__.__proto__.__proto__)  // F1's parent's parent prototype =  F0 { nickname}
log(f2.__proto__.__proto__.__proto__.__proto__) // {}
log(f2.__proto__.__proto__.__proto__.__proto__.__proto__) // null



log("** custom __prot **")
log(f2.__prot)
log(f2.__prot.__prot)

log(f.__proto__)

let bar = {
    something: function() {
        console.log("Tell me something good...")
    }
}

let gem = Object.create(bar)
gem.something();
log(gem.__proto__)

// Object.create polyfill for pre-ES5 environments
function ObjCreatePolyfill(o) {
    function F(){}
    F.prototype = o
    let result = new F()
    log('result', result)
    log('res proto', Object.getPrototypeOf(result))
    return result

}

let g2 = ObjCreatePolyfill(bar);
g2.something();

bar.tellMe = function(info) { log(info) }
g2.tellMe('hi you!')

let anObj = {
    a: 3
};

let secOb = Object.create(anObj, {
    b: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 10
    },
    d: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 50
    }
});

log(secOb.a)
log(secOb.b)
log(secOb.d)
log(secOb.hasOwnProperty('b'))
log(Object.keys(secOb)) //['d'] , b not enumerable


// Less magic API
let an2 = {
    cool: function() {
        console.log('cool!')
    }
}

let an3 = Object.create(an2);

an3.doCool = function () {
    // Internal delegation
    this.cool()
}

an3.doCool()

function F5() {}
let f5 = new F5();
log(f5.__proto__)
log(F5.prototype)
// log(Object.getOwnPropertyDescriptors(F5))
// log(Object.getOwnPropertyDescriptors(F5.prototype))
let f55 = new F5.prototype.constructor();
log(f55)
F5.prototype.sleep = 3
log(f55.sleep)
log(Object.getOwnPropertyDescriptors(F5.prototype))
log(f55.__proto__)
log(F5.prototype)
log(f5.__proto__ === F5.prototype)