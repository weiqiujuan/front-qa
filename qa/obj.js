let object = {
    a: 0
}

function fun(obj) {
    obj.a = 1;
    obj = {a: 2};
    obj.b = 2;
}
fun(object)
console.log(object)