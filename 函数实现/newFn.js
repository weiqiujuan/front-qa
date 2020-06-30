function newFun() {
    let obj = {},// 创建一个空对象
        // 将参数转换为数组对象,shift出第一项，即函数person
        Constructor = [].shift.call(arguments);
    // 将函数的原型指向obj的私有原型
    obj.__proto__ = Constructor.prototype;
    // 改变obj的this指向Constructor;
    let ret = Constructor.apply(obj, arguments);
    // 返回obj对象
    return typeof ret === 'object' ? ret : obj;
}

let persons = newFun(person, 'weiqiujuan', '18');

function person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(persons)