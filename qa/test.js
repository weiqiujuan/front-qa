//  简单数据类型在内存中存在栈内存中，每个被声明的简单数据类型都有他自己的一块内存空间。
//  复杂数据类型在内存中的声明存放在栈内存中，但是存放的是一个地址，这个地址指向堆内存，堆内存存的是复杂数据类型的数据
// a = {x: 1};
// b = a;
// a.x = a = {y: 1};
// console.log(a, b)// a ={y:1} b={x:{y:1}}
var name = 'Tom';
(function() {
    if (typeof name == 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
var name = 'Tom';
(function() {
    if (typeof name == 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();