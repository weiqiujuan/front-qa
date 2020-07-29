//
// var foo = { a: 3 };
//
// function change(obj) {
//     obj = { a: 4 };
// }
//
// function change2(obj) {
//     obj.a = 5;
// }
//
// function change3(obj) {
//     arguments[0].a = 6;
// }
// change(foo);
// console.log("change", foo);
// change2(foo);
// console.log("change2", foo);
// change3(foo);
// console.log("change3", foo);
// console.log('start')
// setTimeout(() => {
//     console.log('children2')
//     Promise.resolve().then(() => {console.log('children2-1')})
// }, 0)
// setTimeout(() => {
//     console.log('children3')
//     Promise.resolve().then(() => {console.log('children3-1')})
// }, 0)
// Promise.resolve().then(() => {console.log('children1')})
// console.log('end')
// var a = {
//     i: 1,
//     toString() {
//         console.log(a.i)
//         return a.i++;
//     }
// }
//
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// } else {
//     console.log(a)
// }


// 首先，a和b同时引用了{n:2}对象，接着执行到a.x = a = {n：2}语句，尽管赋值是从右到左的没错，但是.的优先级比=要高，
// 所以这里首先执行a.x，相当于为a（或者b）所指向的{n:1}对象新增了一个属性x，即此时对象将变为{n:1;x:undefined}。
// 之后按正常情况，从右到左进行赋值，此时执行a ={n:2}的时候，a的引用改变，指向了新对象{n：2},而b依然指向的是旧对象。
// 之后执行a.x = {n：2}的时候，并不会重新解析一遍a，而是沿用最初解析a.x时候的a，也即旧对象，
// 故此时旧对象的x的值为{n：2}，旧对象为 {n:1;x:{n：2}}，它被b引用着。
// 后面输出a.x的时候，又要解析a了，此时的a是指向新对象的a，而这个新对象是没有x属性的，故访问时输出undefined；
// 而访问b.x的时候，将输出旧对象的x的值，即{n:2}。

// var a = {n: 1};
// var b = a;
// a.x = a = {n: 2};
// console.log(a.x)
// console.log(b.x)


// var a ={},b='123',c=123;
// a[b]='b';
// a[c]='c'
// console.log(a)

// function Foo() {
//     Foo.a = function () {
//         console.log(1)
//     }
//     this.a = function () {
//         console.log(2)
//     }
// }
//
// Foo.prototype.a = function () {
//     console.log(3)
// }
// Foo.a = function () {
//     console.log(4)
// }
// Foo.a();// 4
// let obj = new Foo();
// obj.a(); // 2
// Foo.a(); // 1


// console.log('script start');
// async function async1(){
//     console.log('async1')
//     await async2()
//     console.log('async3')
// }
//
// async function async2(){
//     console.log('async2')
// }
//
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0);
//
// Promise.resolve(()=>{
//     console.log('promise0')
// }).then(function () {
//     console.log('promise1');
// }).then(function () {
//     console.log('promise2');
// });
// async1()
// console.log('script end');

// function test() {
//     let a = 1;
//     new Promise((resolve, reject) => {
//         resolve('resolvedata')
//         // reject('testetets')
//     }).then(data => {
//         console.log(data)
//         return data + '1'
//     }).then(data => {
//         console.log(data)
//         return data + '2'
//     }).finally(data => {
//         console.log(data)
//     }).catch(e => {
//         console.log(e)
//         return e
//     })
// }
//
// test()

//
// function deepClone(obj) {
//     let result = typeof  obj.splice === "function" ? [] : {};// 申请一个新的空间
//     if (obj && typeof obj === 'object') {
//         for (let key in obj) {
//             if (obj[key] && typeof obj[key] === 'object') {
//                 result[key] = deepClone(obj[key]);//如果对象的属性值为object的时候，递归调用deepClone,即在吧某个值对象复制一份到新的对象的对应值中。
//             } else {
//                 result[key] = obj[key];//如果对象的属性值不为object的时候，直接复制参数对象的每一个键值到新的对象对应的键值对中。
//             }
//         }
//         return result;
//     }
//     return obj;
// }

// 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}
let promise = Promise.resolve()

async function test(i = 0) {
    if (i === list.length) return
    promise = promise.then(() => square(list[i])).then(data => {
        console.log(data)
    })
    test(i + 1)
    // for (let i of list){
    //     const res = await  square(i);
    //     console.log(res)
    // }
    // list.forEach(async x => {
    //     setTimeout(async () => {
    //         const res = await square(x)
    //         console.log(res)
    //     }, 1000 * x)
    // })
    // list.forEach(async x=> {
    //     const res = await square(x)
    //     console.log(res)
    // })
}

test()







