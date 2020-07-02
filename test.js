
var foo = { a: 3 };

function change(obj) {
    obj = { a: 4 };
}

function change2(obj) {
    obj.a = 5;
}

function change3(obj) {
    arguments[0].a = 6;
}
change(foo);
console.log("change", foo);
change2(foo);
console.log("change2", foo);
change3(foo);
console.log("change3", foo);
