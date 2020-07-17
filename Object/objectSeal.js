// Object.seal()和Object.freeze()
// Object.seal()封闭一个对象，阻止添加任何属性，将现有属性标记为不可配置对于当前属性如果之前是可写的就可以改变
// Object.freeze()冻结的对象中的现有属性值是不可变的。
let obj = {
    prop: function () {
    },
    foo: 'bar'
}

// 对象中属性信息的查询
console.log(Object.getOwnPropertyDescriptor(obj,'foo'))// 可读
Object.freeze(obj)
obj.foo='modify'
console.log(obj)// 不改变
// Object.seal(obj)
// obj.foo='modify-bar' //改变
// console.log(obj)

// 将foo属性可配置中的可写规定为false
Object.defineProperty(obj,'foo',{
    writable:false
})
// 将obj封闭
Object.seal(obj)
obj.foo='modify'
// 无法改变
console.log(obj)

//useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
// 返回的 ref 对象在组件的整个生命周期内保持不变。

