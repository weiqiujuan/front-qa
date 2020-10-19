//  简单数据类型在内存中存在栈内存中，每个被声明的简单数据类型都有他自己的一块内存空间。
//  复杂数据类型在内存中的声明存放在栈内存中，但是存放的是一个地址，这个地址指向堆内存，堆内存存的是复杂数据类型的数据
// a = {x: 1};
// b = a;
// a.x = a = {y: 1};
// console.log(a, b)// a ={y:1} b={x:{y:1}}

// function bar() {
//     console.log(myName);
// }
//
// function foo() {
//     var myName = '快手';
//     bar();
// }
//
// var myName = '用户增长';
// foo();

// var name = 'window';
// const person1 = {
//     name: 'person1',
//     sayName: () => {
//         console.log(this.name)
//     }
// }
// person1.sayName();

var a = 'globalA';
var obj = {
    a: 'objA',
    test: function () {
        console.log(this.a)
    }
}


obj.test();
const globalTest = obj.test;
globalTest();
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});
console.log('script end');
