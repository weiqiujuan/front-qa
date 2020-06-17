/* https://blog.csdn.net/qq_39083004/article/details/84031841 博客地址*/
/* instanceof 运算符常规用法 */
function A() {
}

let a = new A()
console.log(a instanceof A)//true
/* instanceof 在继承中的使用*/
function B() {
}

function C() {
}

B.prototype = new C();
let b = new B()
console.log(b instanceof B, b instanceof C)

/* 1.js的继承机制 2.语言规范中如何定义这个运算符*/
function instance_of(L, R) {
    var O = R.prototype;// R的显示原型
    L = L.__proto__;// L的隐式原型
    while (true) {
        /* Object.prototype.__proto__ === null*/
        /* __proto__ 指向它的原型对象 */
        if (L === null) {
            return false
        }
        if (L === O) {
            return true
        }
        L = L.__proto__;
    }
}

instance_of(b, C)