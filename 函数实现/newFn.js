function newFun() {
    let obj = {},
        // 将参数转换为数组对象,删除第一项
        Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;

    // 改变obj的this指向Constructor;
    let ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;
}

let persons = newFun(person, 'weiqiujuan', '18');

function person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(persons)