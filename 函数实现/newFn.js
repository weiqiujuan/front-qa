function newFun() {
    const obj = {}, // 从Object.prototype 上克隆一个空的对象
        Constructor = [].shift.call(arguments); // 取得外部传入的构造器，此例是Person
    obj.__proto__ = Constructor.prototype; // 指向正确的原型:某个对象的__proto__属性默认会指向它的构造器的原型对象
    const ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj 设置属性
    return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
}

let persons = newFun(person, 'weiqiujuan', '18');

function person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(persons)