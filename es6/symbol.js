// 1. 基本使用： 判断string和number
const s1 = Symbol('song');
const s2 = Symbol('song');
// Symbol中的标识一般放number、string
console.log(s1 === s2); // false: Symbol声明的变量不相等

// 2.作为对象的key
// for 循环无法遍历symbol属性，但是可以使用 Reflect.ownKeys方法可以拿到所有的key属性
const s12 = Symbol('song');
let obj = {
    [s12]: 'song', // es6语法[] 可以将symbol的值作为属性
    age: 18
}
for (let key in obj) { // for循环无法遍历symbol属性
    console.log(obj[key])
}
// Reflect.ownKeys方法可以拿到所有的key属性
Reflect.ownKeys(obj).forEach(key => {
    console.log(obj[key]);
})

// 3.symbol.for 复用声明过的方法
const s1 = Symbol.for('song');
const s2 = Symbol.for('song');
console.log(s1 === s2);

// 可以去对原生js的操作进行修改，说白了就是可以更改原生js的行为
// 重写instanceof默认行为Symbol.hasInstance
const instance = {
    [Symbol.hasInstance](value) {
        return 'a' in value
    }
}
// 当调用 instanceof 方法，会默认调用instance上的hasInstance方法
console.log({a: 1} instanceof instance)

// symbol.iterator 为每个对象定义了默认的迭代器，该迭代器可以被for...of 循环使用
let students = {
    [Symbol.iterator]: function* () {
        for (let i = 0; i <= 10; i++) {
            yield i;
        }
    }
}
for (const s of students) {
    console.log(s);
}





















