function f1(a, b) {
    console.log("a", a, "b", b);
}

var obj = {
    id: 'awe'
};

[10, 2, 33, 4, 5].forEach((e, i) => {
    f1.apply(undefined, [e, i])
})

var b = f1.bind(null, 333);
b(888)