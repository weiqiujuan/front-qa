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