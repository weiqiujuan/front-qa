// 当在class中使用get关键字时，属性将被定义在实例的原型上
class Example {
    get hello() {
        return 'world';
    }
}

const obj = new Example()
console.log(obj.hello)
console.log(Object.getOwnPropertyDescriptor(obj,'hello'))
console.log(
    Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(obj), 'hello'
    )
);
