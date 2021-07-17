function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Gilbert"
}

var you = {
    name: "Reader"
}

console.log(identify.call(me)); // GILBERT
identify.call(you); // READER

speak.call(me); // Hello, I'm GILBERT
speak.call(you); // Hello, I'm READER