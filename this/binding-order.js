// new binding takes precedence over implicit binding
function newAndExplicitOverImplicit() {
    function f1(sth) {
        this.a = sth
    }
    let o1 = { f1 }
    let o2 = {}
    // implicit
    o1.f1(22)
    console.log(o1.a) // 22
    // explicit overrules implicit
    o1.f1.call(o2, 13)
    console.log(o1.a) // 22 (unchanged)
    console.log(o2.a) // 13
    // new overrules implicit
    let oN = new o1.f1(8)
    console.log(o1.a) // 22 (unchanged)
    console.log(oN.a) // 8
}


// new binding takes precedence over explicit binding
function newOverExplicit() {
    console.log("** new vs explicit **")
    function f1(sth) { this.a = sth }
    let o1 = {}
    let f2 = f1.bind(o1)
    f2(8)
    console.log(o1.a) // 8
    let oN = new f2(5)
    console.log(o1.a) // 8 (unchanged, not updated)
    console.log(oN.a) // 5
// foo2() // 11
// new foo2() // undefined

    console.log("** End of new vs explicit **")
}

// newOverExplicit()

function passArgs() {
    function f1(p1, p2) {
        console.log(`p1 ${p1}, p2 ${p2}`)
        this.val = p1 + p2;
    }

    // Pass null for thisArg bse we dont care about `this` hard-binding
    let bar = f1.bind(null, "Potato");
    console.log(`bar is ${bar}`);
    // new will override explicit hard-binding
    // Orange will be second argument since we already
    // provided the first argument as Potato
    let bz = new bar("Orange");
    console.log(`bz is ${bz.val}`);
}
passArgs()