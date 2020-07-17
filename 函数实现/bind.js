// 指定的 this 值和初始参数。
Function.prototype.bind = function (context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    const that = this;
    // 获取第二个参数之后的参数
    const args = [...arguments].slice(1);
    return function F() {
        // 如果被new创建实例，不会被改变上下文！
        if (this instanceof F) {
            return new that(...args, ...arguments);
        }
        // args.concat(...arguments): 拼接之前和现在的参数
        // 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
        return that.apply(context, args.concat(...arguments));
    };
};


Function.prototype.bind = function (context) {
    if (typeof this !== "function") {
        throw new Error("type is error");
    }

    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);

    const fNOP = function () {
    };

    const fBound = function () {
        const bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

Function.prototype.bind = function () {
    var self = this, // 保存原函数
        context = [].shift.call(arguments), // 需要绑定的this 上下文
        args = [].slice.call(arguments); // 剩余的参数转成数组
    return function () { // 返回一个新的函数
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
// 执行新的函数的时候，会把之前传入的context 当作新函数体内的this
// 并且组合两次分别传入的参数，作为新函数的参数
    }
};
var obj = {
    name: 'sven'
};
var func = function (a, b, c, d) {
    alert(this.name); // 输出：sven
    alert([a, b, c, d]) // 输出：[ 1, 2, 3, 4 ]
}.bind(obj, 1, 2);
func(3, 4);