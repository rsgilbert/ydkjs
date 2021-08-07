function getGlobalObj() { return this }

if(!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        // capture any curried parameters
        var curried = [].slice.call(arguments, 1);
        let bound = function() {
            return fn.apply(
                (!this || this === (getGlobalObj())) ?
                    obj : this,
                curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}

function foo() {
    console.log("name:", this.name);
}

let o1 = { name: "object 1" };
let o2 = { name: "object 2" };
let o3 = { name: "object 3" };

let fooO1 = foo.softBind(o1);
fooO1(); // object 1 . Soft binding precedes default binding
o2.foo = fooO1
o2.foo() // object 2 . Implicit binding precedes soft-binding
fooO1.call(o3); // object 3. Explicit binding precedes soft-binding

(o3.foo = o2.foo)() // Object 1. The reference points to fooO1 which falls back to soft-binding
o3.foo() // Object 3. Implicit binding precedes soft-binding
fooO1() // object 1. Falls back to soft binding