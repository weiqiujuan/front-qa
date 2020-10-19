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


// 统计字符串”aaaabbbbbbbbbbbbbbbbbbbbbccccddfgh”中字母个数或统计出现次数最多字母数
// const countString = (str) => {
//     let obj = {}, l = str.length, max = 0, count = 0,maxStr;
//     for (let i = 0; i < l; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]]++
//         } else {
//             obj[str[i]] = 1
//         }
//     }
//     for (let item in obj) {
//         count++
//         if (max < obj[item]) {
//             max = obj[item]
//             maxStr = item;
//         }
//         // max = Math.max(max, obj[item])
//     }
//     console.log(max,maxStr, count)
//     return {max, count}
// }
// countString('aaaabbbbbbbbbbbbbbccccddfgh')


// const dataTree = (data) => {
//     let obj = {}
//     let res = {}
//     for (let i = 0; i < data.length; i++) {
//         obj[data[i].id] = data[i];
//     }
//     for (let i in obj){
//         if (obj[i].pid!==parseInt(-1)) {
//             if (!obj[i].pid.children) {
//                 obj[obj[i].pid].children = {};
//             }
//             obj[obj[i].pid].children[obj[i].id] = obj[i]
//         }else{
//             res[obj[i].id] = obj[i]
//         }
//     }
//     return res
// }
// let list = [
//     {'id':101,'name':'语文','pid': -1},
//     {'id':102,'name':'语文知识点1','pid': 101},
//     {'id':103,'name':'语文知识点11','pid': 102},
//     {'id':104,'name':'语文知识点2','pid': 101},
//     {'id':202,'name':'数学知识点1','pid': 201},
//     {'id':201,'name':'数学','pid': -1},
//     {'id':203,'name':'数学知识点2','pid': 201},
//     {'id':204,'name':'数学知识点3','pid': 201},
// ]
// console.log(dataTree(list))


function findPrimeNumber(start, end) {
    var result = [];
    var flag;
    for (var i = start; i < end + 1; i++) {
        flag = true;
        if (i === 1) {
            flag = false;
        }
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            result.push(i);
        }
    }
    return result;
}

var result = findPrimeNumber(1, 100);
console.log(...result)







