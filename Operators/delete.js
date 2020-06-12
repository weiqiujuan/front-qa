// "use strict"
// 变量的直接引用，函数的参数或者函数名使用delete操作，会抛出语法错误
const person = {
    one: '1111',
    two: '2222',
    three: '3333'
}

// 不可配置属性
Object.defineProperty(person, 'four', {value: '4444', configurable: false})

console.log(delete person.three)
console.log(delete person.four) //在严格模式下会报错

// 删除一个不存在的属性，结果为true
console.log(delete person.five)

var nameOther = '123'
// 一个不可设置的属性删除为false(即不能删除
console.log(delete nameOther) //在严格模式下会报错



/* reflect.deleteProperty  和delete操作符相似的删除属性的函数 */
const res = {
    one: '1111',
    two: '2222',
    three: '3333'
}
Reflect.deleteProperty(res, 'one')
console.log(Reflect.deleteProperty(res, 'one'))

// 会在target不是对象的时候抛出异常
const noObject = 1
try {
    Reflect.deleteProperty(noObject, 'one')
} catch (error) {
    console.log(error)
}

// Object.defineProperty()基本等同，只是返回是否成功的布尔值
Reflect.defineProperty(res,'four',{
    value:'4444',
    configurable:'false',
})
console.log(res.four)
// 在配置为false的情况下仍然可以删除成功
console.log(Reflect.deleteProperty(res, 'four'))
